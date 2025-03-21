import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function JoinAsVolunteer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `
    I want to become a volunteer
    ${message}\n\nPhone Number: ${phone}
    Email: ${email}
    `;

    const templateParams = {
      to_name: "Help Line",
      from_name: name,
      from_email: email,
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
      <h2 className="text-center">Fill The Form For Join As Volunteer</h2>

      <div className="container items-center">
        <div className="row">
          <div className="">
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
        </div>
      </div>
    </div>
  );
}
