import React, { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";

export default function ContactGetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `${message}\n\nPhone Number: ${phone}`;

    const templateParams = {
      to_name: "Help Line",
      from_name: name,
      from_email: email,
      message: finalMessage,
    };

    emailjs
      .send(
        "service_rllrreu",
        "template_xm5hpkn",
        templateParams,
        "MIBYbIcXK2xnIWlrP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div
      className="get_intouch_area pt-120 pb-120"
      style={{ background: "url(/img/bg/contact_map.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-7 order-1 order-lg-0">
            <div className="contact_section contact_contact bottom_radius0">
              <form onSubmit={handleSubmit} action="#">
                <div className="row">
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Enter full name"
                      name="name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      name="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      name="phone"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-12">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-xxl-12">
                    <button type="submit" className="contact_btn">
                      Get A Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5 order-0 order-lg-1">
            <div className="contact_location_section pl-50 mb-50">
              <div className="section_title mb-40">
                <Link href="/contact">
                  <a className="sub_title sub_title_2">Contact Us</a>
                </Link>
                <h3 className="title">Get In Touch</h3>
              </div>
              <div className="contact_location_wrapper">
                <div className="single_contact_location theme-6">
                  <Link href="#">
                    <a className="icon">
                      <i className="far fa-map-marker-alt"></i>
                    </a>
                  </Link>
                  <div className="contact_location_text">
                    <span>Location</span>
                    <h5 className="contact_address_title">
                      HOUSE # 705/A-1, Township, Lahore Pakistan
                    </h5>
                  </div>
                </div>
                <div className="single_contact_location theme-1">
                  <Link href="/mailto:info@webexample.com">
                    <a className="icon">
                      <i className="fal fa-envelope"></i>
                    </a>
                  </Link>
                  <div className="contact_location_text">
                    <span>Email</span>
                    <Link href="/mailto:info@webexample.com">
                      <a className="contact_address_title">
                        info@helpline.org.pk
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="single_contact_location theme-2">
                  <Link href="/tel:789.765.741.69">
                    <a className="icon">
                      <i className="fal fa-phone"></i>
                    </a>
                  </Link>
                  <div className="contact_location_text">
                    <span>Phone</span>
                    <Link href="/tel:789.765.741.69">
                      <a className="contact_address_title">
                        +92-42-3515 7374 , +92-42-35110164
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
