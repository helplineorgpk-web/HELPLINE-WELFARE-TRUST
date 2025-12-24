import React, { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactGetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalMessage = `
    From Contact Us Form 
    ${message}\n\n📞 Phone Number: ${phone}
    `;

    const templateParams = {
      name: name,
      emailName: email.split("@")[0],
      email: email,
      message: finalMessage,
      phone: phone,
      purpose: purpose || "General Inquiry",
    };

    try {
      const response = await emailjs.send(
        "service_cb00nwp",
        "template_2m4dd8r",
        templateParams,
        "E2G6lzak44zoyL3Hy"
      );
      
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Your request has been submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setPurpose("");
    } catch (err) {
      console.error("EmailJS Error:", err);
      
      // Check for Gmail API OAuth errors
      const errorMessage = err?.text || err?.message || "";
      if (errorMessage.includes("Invalid grant") || errorMessage.includes("Gmail_API")) {
        toast.error(
          "Email service configuration error. Please contact support or try again later.",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      } else {
        // Try fallback API route
        try {
          const apiResponse = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: "info@helpline.org.pk",
              subject: `Contact Form: ${purpose || "General Inquiry"}`,
              name: name,
              email: email,
              phone: phone,
              message: finalMessage,
            }),
          });

          if (apiResponse.ok) {
            toast.success("Your request has been submitted successfully!", {
              position: "top-right",
              autoClose: 3000,
            });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setPurpose("");
          } else {
            throw new Error("API route failed");
          }
        } catch (apiErr) {
          console.error("API Route Error:", apiErr);
          toast.error("Submission failed. Please try again later or contact us directly.", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      }
    }
  };

  return (
    <div
      className="get_intouch_area pt-120 pb-120"
      style={{ background: "url(/img/bg/contact_map.png)" }}
    >
      <h3 className="text-center" style={{ marginBottom: "80px" }}>
        Helpline Welfare Trust<span style={{ fontSize: "16px" }}>®️</span>
      </h3>
      <h5
        style={{
          textAlign: "center",
          marginBottom: "80px",
          color: "#f84b07",
        }}
      >
        (Comitment to Humanity)
      </h5>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-7 order-1 order-lg-0">
            <div className="contact_section contact_contact bottom_radius0">
              <form onSubmit={handleSubmit}>
                <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
                  Contact Us
                </h4>
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
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Purpose of Inquiry"
                      name="purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
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
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5 order-0 order-lg-1">
            <div className="contact_location_section pl-50 mb-50">
              <div className="section_title mb-40">
                <Link href="/contact" className="sub_title sub_title_2">
                  Contact Us
                </Link>
                <h3 className="title">Get In Touch</h3>
              </div>
              <div className="contact_location_wrapper">
                <div className="single_contact_location theme-6">
                  <Link href="#" className="icon">
                    <i className="far fa-map-marker-alt"></i>
                  </Link>
                  <div className="contact_location_text">
                    <span>Head Office Location</span>
                    <h5 className="contact_address_title">
                      House# 705, Sector A-1, Govt Employees Co-op Housing
                      Society (GECHS), PECO Road, Township, Lahore Pakistan
                    </h5>
                  </div>
                </div>
                <div className="single_contact_location theme-6">
                  <Link href="#" className="icon">
                    <i className="far fa-map-marker-alt"></i>
                  </Link>
                  <div className="contact_location_text">
                    <span>Education Wing Location</span>
                    <h5 className="contact_address_title">
                      House# 315, Sector C, Faisal Town, Lahore Pakistan
                    </h5>
                  </div>
                </div>
                <div className="single_contact_location theme-2">
                  <Link href="tel:+92-42-3515 7374" className="icon">
                    <i className="fal fa-phone"></i>
                  </Link>
                  <div className="contact_location_text">
                    <span>Head Office Phone</span>
                    <Link
                      href="tel:+92-42-3515 7374"
                      className="contact_address_title"
                    >
                      +92-42-3515 7374
                    </Link>
                    <Link
                      href="tel:+92-42-35110164"
                      style={{ marginLeft: "10px" }}
                      className="contact_address_title"
                    >
                      +92-42-35110164
                    </Link>
                  </div>
                </div>
                <div className="single_contact_location theme-2">
                  <Link href="tel:+92-42-3515 7374" className="icon">
                    <i className="fal fa-phone"></i>
                  </Link>
                  <div className="contact_location_text">
                    <span>Education Wing Phone</span>
                    <Link
                      href="tel:+92-42-3515 7374"
                      className="contact_address_title"
                    >
                      042-35195200
                    </Link>
                  </div>
                </div>
                <div className="single_contact_location theme-1">
                  <Link href="mailto:info@helpline.org.pk" className="icon">
                    <i className="fal fa-envelope"></i>
                  </Link>
                  <div className="contact_location_text">
                    <span>Email</span>
                    <Link
                      href="mailto:info@helpline.org.pk"
                      className="contact_address_title"
                    >
                      info@helpline.org.pk
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
