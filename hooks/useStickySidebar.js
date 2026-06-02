import { useCallback, useEffect, useState } from "react";

const DEFAULT_HEADER_GAP = 24;
const DEFAULT_MIN_WIDTH = 992;
const HEADER_SELECTOR = ".hdf-header";

function getStickyTop(gap = DEFAULT_HEADER_GAP) {
  const header = document.querySelector(HEADER_SELECTOR);
  if (header) {
    return Math.round(header.getBoundingClientRect().bottom + gap);
  }
  return 96;
}

function measureSidebarBox(column) {
  const columnRect = column.getBoundingClientRect();
  const columnStyle = window.getComputedStyle(column);
  const padLeft = parseFloat(columnStyle.paddingLeft) || 0;
  const padRight = parseFloat(columnStyle.paddingRight) || 0;

  return {
    width: columnRect.width - padLeft - padRight,
    left: columnRect.left + padLeft,
    padLeft,
  };
}

/**
 * Keeps a sidebar fixed while scrolling through a boundary column (e.g. main content).
 * Works around ancestors with overflow-x: hidden that break CSS position: sticky.
 */
export function useStickySidebar(
  sidebarRef,
  boundaryRef,
  columnRef,
  { headerGap = DEFAULT_HEADER_GAP, minWidth = DEFAULT_MIN_WIDTH } = {}
) {
  const [sidebarStyle, setSidebarStyle] = useState({});
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  const update = useCallback(() => {
    if (
      typeof window === "undefined" ||
      window.innerWidth < minWidth ||
      !sidebarRef.current ||
      !boundaryRef.current ||
      !columnRef.current
    ) {
      setSidebarStyle({});
      setPlaceholderHeight(0);
      return;
    }

    const sidebar = sidebarRef.current;
    const boundary = boundaryRef.current;
    const column = columnRef.current;
    const scrollY = window.scrollY;
    const stickyTop = getStickyTop(headerGap);
    const sidebarHeight = sidebar.offsetHeight;
    const boundaryHeight = boundary.offsetHeight;
    const boundaryRect = boundary.getBoundingClientRect();
    const columnRect = column.getBoundingClientRect();

    if (boundaryHeight < sidebarHeight || sidebarHeight < 1) {
      setSidebarStyle({});
      setPlaceholderHeight(0);
      return;
    }

    const { width, left, padLeft } = measureSidebarBox(column);
    const boundaryBottomDoc = scrollY + boundaryRect.bottom;
    const stickStartScroll = scrollY + boundaryRect.top - stickyTop;
    const stickyEndScroll = boundaryBottomDoc - sidebarHeight - stickyTop;

    const lockedSize = {
      width: `${width}px`,
      maxWidth: `${width}px`,
      boxSizing: "border-box",
    };

    const canStick = stickyEndScroll > stickStartScroll;

    if (!canStick) {
      setSidebarStyle({});
      setPlaceholderHeight(0);
      return;
    }

    if (boundaryRect.top <= stickyTop && scrollY < stickyEndScroll) {
      setSidebarStyle({
        position: "fixed",
        top: `${stickyTop}px`,
        left: `${left}px`,
        zIndex: 50,
        ...lockedSize,
      });
      setPlaceholderHeight(sidebarHeight);
      return;
    }

    if (scrollY >= stickyEndScroll) {
      const absoluteTop =
        boundaryRect.bottom - stickyTop - sidebarHeight - columnRect.top;

      setSidebarStyle({
        position: "absolute",
        top: `${Math.max(0, absoluteTop)}px`,
        left: `${padLeft}px`,
        zIndex: 50,
        ...lockedSize,
      });
      setPlaceholderHeight(0);
      return;
    }

    setSidebarStyle({});
    setPlaceholderHeight(0);
  }, [sidebarRef, boundaryRef, columnRef, headerGap, minWidth]);

  useEffect(() => {
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);

    const boundary = boundaryRef.current;
    let resizeObserver;

    if (boundary && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(update);
      resizeObserver.observe(boundary);
      if (sidebarRef.current) {
        resizeObserver.observe(sidebarRef.current);
      }
    }

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
      resizeObserver?.disconnect();
    };
  }, [update, boundaryRef, sidebarRef]);

  return { sidebarStyle, placeholderHeight, recalculate: update };
}
