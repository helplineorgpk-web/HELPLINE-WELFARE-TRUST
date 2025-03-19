import React from "react";
import { useRouter } from "next/router";
import { citiesData } from "../../../pages/api/data";
export default function CityDetailsBreadCrumb() {
  const router = useRouter();
  const { cityId } = router.query;

  if (!router.isReady) return null;

  const city = citiesData.cities.find((c) => c.id === Number(cityId));
  return (
    <section
      className="breadcrumb_area breadcrumb_overlay"
      style={{
        backgroundImage: `url(${city.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_section">
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/ourPresence">Our Presence</a>
                </li>
              </ul>
              <div style={{ fontSize: "60px", color: "white" }}>
                {city.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
