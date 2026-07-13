"use client";
import React, { useState, useCallback, useEffect } from "react";
import DailyNewsNav from "./DailyNewsNav";
import DailyNewsPaper from "./DailyNewsPaper";
import DailyNewsSectionPage, {
  DailyNewsLatestFeed,
} from "./DailyNewsSectionPage";
import { getSection } from "../../../data/dailyNewsSections";
import { isValidDailyNewsTab } from "../../../data/dailyNewsNavData";

function readTabFromHash() {
  if (typeof window === "undefined") return "aaj-ka-akhbar";
  const hash = window.location.hash.replace("#", "");
  return isValidDailyNewsTab(hash) ? hash : "aaj-ka-akhbar";
}

export default function DailyNewsShell() {
  const [activeTab, setActiveTab] = useState("aaj-ka-akhbar");
  const [hashReady, setHashReady] = useState(false);

  useEffect(() => {
    setActiveTab(readTabFromHash());
    setHashReady(true);

    const onHashChange = () => {
      const tab = readTabFromHash();
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const changeTab = useCallback((tab) => {
    if (!isValidDailyNewsTab(tab)) return;
    setActiveTab(tab);
    const newHash = `#${tab}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, "", newHash);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!hashReady) return;
    const newHash = `#${activeTab}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, "", newHash);
    }
  }, [activeTab, hashReady]);

  const renderContent = () => {
    if (activeTab === "aaj-ka-akhbar") {
      return <DailyNewsPaper />;
    }
    if (activeTab === "taza-tareen") {
      return <DailyNewsLatestFeed onTabChange={changeTab} />;
    }
    const section = getSection(activeTab);
    if (section) {
      return (
        <DailyNewsSectionPage
          sectionId={activeTab}
          activeTab={activeTab}
          onTabChange={changeTab}
        />
      );
    }
    return null;
  };

  return (
    <>
      <DailyNewsNav activeTab={activeTab} onTabChange={changeTab} />
      {renderContent()}
    </>
  );
}
