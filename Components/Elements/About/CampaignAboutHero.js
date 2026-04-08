import { useEffect, useState } from "react";
import AboutBreadCumb from "./AboutBreadCumb";

export default function CampaignAboutHero(props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <AboutBreadCumb
      {...props}
      variant="campaign"
      key={hydrated ? "post-hydration" : "ssr"}
    />
  );
}
