"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DAILY_NEWS_NAV_ITEMS,
  getDefaultTabForNavItem,
  isValidDailyNewsTab,
} from "../../../data/dailyNewsNavData";
import { getTickerItems, searchDailyNews } from "../../../data/dailyNewsSections";
import styles from "./DailyNewsNav.module.css";

function ChevronDown() {
  return <span className={styles.chevron} aria-hidden="true">▼</span>;
}

function HomeIcon() {
  return (
    <svg className={styles.homeIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className={styles.searchIcon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className={styles.downloadIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function NavDropdown({ items, onSelectTab, onClose }) {
  if (!items?.length) return null;
  return (
    <ul className={styles.dropdown} role="menu">
      {items.map((item) => (
        <li key={item.label} className={styles.dropdownItem} role="none">
          {item.href ? (
            item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={onClose}
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} role="menuitem" onClick={onClose}>
                {item.label}
              </Link>
            )
          ) : (
            <button
              type="button"
              role="menuitem"
              onClick={() => {
                if (item.tab) onSelectTab(item.tab);
                onClose();
              }}
            >
              {item.label}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

function SearchPanel({ query, onQueryChange, results, onSelect, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={styles.searchOverlay} onClick={onClose} role="presentation">
      <div
        className={styles.searchPanel}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search daily news"
      >
        <div className={styles.searchInputWrap}>
          <SearchIcon />
          <input
            ref={inputRef}
            type="search"
            className={styles.searchInput}
            placeholder="تلاش کریں — اسکول، منصوبہ، خبر..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            dir="rtl"
          />
          <button type="button" className={styles.searchClose} onClick={onClose}>
            ×
          </button>
        </div>
        {query.trim() && (
          <ul className={styles.searchResults}>
            {results.length === 0 ? (
              <li className={styles.searchEmpty} dir="rtl">
                کوئی نتیجہ نہیں ملا
              </li>
            ) : (
              results.map((r) => (
                <li key={`${r.type}-${r.id}-${r.label}`}>
                  <button
                    type="button"
                    className={styles.searchResultBtn}
                    onClick={() => onSelect(r.id)}
                  >
                    <span dir="rtl">{r.label}</span>
                    {r.sectionTitle && (
                      <small dir="rtl">{r.sectionTitle}</small>
                    )}
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

function isNavItemActive(item, activeTab) {
  if (item.id === activeTab) return true;
  if (item.defaultTab === activeTab) return true;
  return item.dropdown?.some((d) => d.tab === activeTab) ?? false;
}

export default function DailyNewsNav({ activeTab, onTabChange }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navRef = useRef(null);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown]);

  const navigateToTab = useCallback(
    (tab) => {
      if (isValidDailyNewsTab(tab)) {
        onTabChange(tab);
        closeDropdown();
        setSearchOpen(false);
        setSearchQuery("");
      }
    },
    [onTabChange, closeDropdown]
  );

  const handleTabClick = (item) => {
    const defaultTab = getDefaultTabForNavItem(item);

    if (item.hasDropdown && item.dropdown?.length) {
      if (defaultTab) {
        navigateToTab(defaultTab);
      }
      setOpenDropdown((prev) => (prev === item.id ? null : item.id));
      return;
    }

    if (isValidDailyNewsTab(item.id)) {
      navigateToTab(item.id);
    }
  };

  const tickerItems = getTickerItems();
  const tickerDoubled = [...tickerItems, ...tickerItems];
  const searchResults = searchDailyNews(searchQuery);

  return (
    <div className={styles.shell}>
      <nav
        className={styles.categoryNav}
        aria-label="Daily News categories"
        ref={navRef}
      >
        <div className={styles.categoryInner}>
          <Link href="/" className={styles.homeLink} aria-label="Home">
            <HomeIcon />
          </Link>

          <ul className={styles.menuList}>
            {DAILY_NEWS_NAV_ITEMS.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <button
                  type="button"
                  className={`${styles.menuBtn} ${item.isPubBtn ? styles.pubBtn : ""} ${isNavItemActive(item, activeTab) ? styles.active : ""}`}
                  onClick={() => handleTabClick(item)}
                  aria-expanded={openDropdown === item.id}
                  aria-haspopup={item.hasDropdown ? "true" : undefined}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown />}
                </button>
                {openDropdown === item.id && item.dropdown && (
                  <NavDropdown
                    items={item.dropdown}
                    onSelectTab={navigateToTab}
                    onClose={closeDropdown}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className={styles.utilities}>
            <Link href="/" className={styles.englishLink}>
              English
            </Link>
            <button
              type="button"
              className={styles.searchBtn}
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </button>
            <a
              href="https://cdn.jsdelivr.net/npm/jameel-noori/fonts/jameel-noori-nastaleeq4.woff2"
              download="jameel-noori-nastaleeq.woff2"
              className={styles.fontBtn}
            >
              <DownloadIcon />
              <span>ڈاؤن لوڈ نستعلیق فونٹ</span>
            </a>
          </div>
        </div>
      </nav>

      <button
        type="button"
        className={styles.brandStrip}
        onClick={() => navigateToTab("aaj-ka-akhbar")}
        aria-label="روزنامہ ہیلپ لائن — آج کا اخبار"
      >
        <div className={styles.brandInner}>
          <div className={styles.brandText}>
            <span className={styles.brandOrg}>ہیلپ لائن ویلفیئر ٹرسٹ</span>
            <h1 className={styles.brandTitle} dir="rtl">
              روزنامہ ہیلپ لائن
            </h1>
          </div>
          <Image
            src="/img/logo2-removebg-preview.webp"
            alt="Helpline Welfare Trust"
            width={220}
            height={90}
            className={styles.brandLogo}
            priority
          />
        </div>
      </button>

      <div className={styles.tickerBar} aria-live="polite">
        <div className={styles.tickerInner}>
          <button
            type="button"
            className={styles.tickerLabel}
            dir="rtl"
            onClick={() => navigateToTab("taza-tareen")}
          >
            تازہ ترین
          </button>
          <div className={styles.tickerTrack}>
            <div className={styles.tickerContent}>
              {tickerDoubled.map((item, i) => (
                <button
                  key={`${item.sectionId}-${i}`}
                  type="button"
                  className={styles.tickerItem}
                  dir="rtl"
                  onClick={() => navigateToTab(item.sectionId)}
                >
                  {item.headline}
                  <span className={styles.tickerDot} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {searchOpen && (
        <SearchPanel
          query={searchQuery}
          onQueryChange={setSearchQuery}
          results={searchResults}
          onSelect={navigateToTab}
          onClose={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        />
      )}
    </div>
  );
}
