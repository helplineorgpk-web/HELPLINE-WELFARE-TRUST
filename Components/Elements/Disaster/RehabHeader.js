import React from "react";
import Link from "next/link";
import { getHeroAsset } from "../../../lib/heroImage";
import styles from "./RehabHeader.module.css";

const DEFAULT_IMAGE = "/img/causes/disasterbg.jpg";
const DEFAULT_TITLE = "From Emergency Response to Rebuilding Lives";

export default function RehabHeader({
  image = DEFAULT_IMAGE,
  title = DEFAULT_TITLE,
  breadcrumbActive = "Rehabilitation",
  fullHeight = false,
  hideText = false,
}) {
  const asset = getHeroAsset(image);
  const bgSrc = asset.src || image;

  return (
    <section
      className={[
        "breadcrumb_area",
        "breadcrumb_overlay",
        styles.header,
        fullHeight ? styles.fullscreen : "",
        hideText ? styles.hideText : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      {!hideText ? (
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_section">
                <ul className="breadcrumb-list volunteer_breadcrumb">
                  <li className="bhas_border">
                    <Link href="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="active">{breadcrumbActive}</span>
                  </li>
                </ul>
                <div className="breadcrumb_title">
                  <h3 style={{ color: "white" }}>{title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="sr-only">{title}</h1>
      )}
    </section>
  );
}
