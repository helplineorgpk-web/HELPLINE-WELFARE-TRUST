import React, { useEffect } from "react";
import Head from "next/head";

const PDF_PATH = "/img/Mawakhat-e-Madina4Pager.pdf";

export default function ConceptOfMawakhatEMadina() {
  useEffect(() => {
    document.documentElement.setAttribute("data-pdf-fullscreen", "true");
    document.body.setAttribute("data-pdf-fullscreen", "true");
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.removeAttribute("data-pdf-fullscreen");
      document.body.removeAttribute("data-pdf-fullscreen");
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Concept of Mawakhat-e-Madina | Helpline Welfare Organization</title>
        <meta name="robots" content="noindex" />
      </Head>

      <style>{`
        html[data-pdf-fullscreen],
        body[data-pdf-fullscreen],
        html[data-pdf-fullscreen] #__next {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          min-height: 100% !important;
          overflow: hidden !important;
        }

        body[data-pdf-fullscreen] .hl-chat-fab,
        body[data-pdf-fullscreen] .hl-chat-window {
          display: none !important;
        }

        .pdf-fullscreen-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #525659;
          z-index: 999999;
        }

        .pdf-fullscreen-embed {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <div className="pdf-fullscreen-root">
        <object
          className="pdf-fullscreen-embed"
          data={PDF_PATH}
          type="application/pdf"
        >
          <embed
            className="pdf-fullscreen-embed"
            src={PDF_PATH}
            type="application/pdf"
          />
        </object>
      </div>
    </>
  );
}
