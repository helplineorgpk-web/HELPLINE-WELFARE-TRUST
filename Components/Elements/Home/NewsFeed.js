import React, { useState } from "react";
import NewsCard from "../NewsFeed/NewsCard";
import { HelplineData } from "../../../pages/api/data";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function NewsFeed() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `
    From News Feed Subcription
    `;
    const templateParams = {
      to_name: "Help Line",
      name: name,
      email: email,
      message: finalMessage,
    };

    emailjs
      .send(
        "service_l4b8zlx",
        "template_z92hfde",
        templateParams,
        "TYoPyIR43vGbLqWLE"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Application submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setName("");
          setEmail("");
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Submission failed. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };
  const newsFeedData = HelplineData.newsFeedData;
  return (
    <div className="nfeed_area pt-105 pb-90 nfeed_area_resp">
      <style>{`
        .nfeed_area_resp .container {
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .nfeed_area_resp {
            padding-top: 60px !important;
            padding-bottom: 50px !important;
          }
          .nfeed_area_resp .container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .nfeed_area_resp .section_title .title {
            font-size: 1.75rem !important;
          }
          .nfeed_area_resp .section_title.mb-45 {
            margin-bottom: 2rem !important;
          }
          .nfeed_area_resp .row.justify-content-center > [class*="col-"] {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .nfeed_area_resp .newsletter_feed {
            margin-top: 0.5rem;
          }
          .nfeed_area_resp .newsletter_feed .rad-30 {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            padding: 12px 16px;
            font-size: 16px;
          }
        }
        @media (max-width: 480px) {
          .nfeed_area_resp {
            padding-top: 48px !important;
            padding-bottom: 40px !important;
          }
          .nfeed_area_resp .container {
            padding-left: 12px;
            padding-right: 12px;
          }
          .nfeed_area_resp .section_title .sub_title {
            font-size: 0.8rem;
          }
          .nfeed_area_resp .section_title .title {
            font-size: 1.5rem !important;
          }
          .nfeed_area_resp .nfeed_title .n_title {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section_title mb-45">
              <span className="sub_title">
                <i className="fal fa-heart"></i> Insta Feeds
              </span>
              <h3 className="title">News Feeds</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {newsFeedData.map((news) => (
            <div key={news.id} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
              <NewsCard {...news} />
            </div>
          ))}
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
            <div className="newsletter_feed mb-30">
              <div className="nfeed_title">
                <span className="nsub_title">Newsletter</span>
                <h3 className="n_title">Get Weekly Newsletter</h3>
              </div>
              <div className="newsletter_content">
                <form onSubmit={handleSubmit} action="#">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    value={name}
                    required
                    className="rad-30 mb-17"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="rad-30 mb-17"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="rad-30 g_btn to_right1">
                    Subscribe Now <span></span>
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
