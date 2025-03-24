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
    <div className="nfeed_area pt-105 pb-90">
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
