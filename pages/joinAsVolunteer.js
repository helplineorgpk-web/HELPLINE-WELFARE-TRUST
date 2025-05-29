import React, { useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function JoinAsVolunteer() {
  const inputStyles = {
    padding: "15px 20px",
    width: "100%",
    border: "1px solid #eee",
    borderRadius: "0px",
    marginBottom: "30px",
    minHeight: "55px",
  };

  const customSelectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
    control: (base) => ({
      ...base,
      minHeight: "55px",
      border: "1px solid #eee",
      borderRadius: "0px",
      marginBottom: "30px",
      boxShadow: "none",
      padding: "3px 10px",
      "&:hover": {
        border: "1px solid #eee",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#757575",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#2684FF"
        : state.isFocused
        ? "#F5F5F5"
        : "white",
      ":active": {
        backgroundColor: "#F5F5F5",
      },
    }),
  };

  const labelStyles = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#555",
  };

  const availabilityOptions = [
    { value: "Weekday Mornings", label: "Weekday Mornings" },
    { value: "Weekday Afternoons", label: "Weekday Afternoons" },
    { value: "Weekday Evenings", label: "Weekday Evenings" },
    { value: "Weekends", label: "Weekends" },
    { value: "On Call", label: "On Call" },
  ];

  const skillsOptions = [
    { value: "First Aid", label: "First Aid" },
    { value: "Medical Background", label: "Medical Background" },
    { value: "Counseling", label: "Counseling" },
    { value: "Teaching", label: "Teaching" },
    { value: "Project Management", label: "Project Management" },
    { value: "Social Media", label: "Social Media" },
    { value: "Event Planning", label: "Event Planning" },
    { value: "Fundraising", label: "Fundraising" },
  ];

  const interestOptions = [
    { value: "Community Outreach", label: "Community Outreach" },
    { value: "Youth Programs", label: "Youth Programs" },
    { value: "Emergency Response", label: "Emergency Response" },
    { value: "Education", label: "Education" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Administrative", label: "Administrative" },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [qualification, setQualification] = useState("");
  const [availability, setAvailability] = useState([]);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);

  const handleSelectChange = (selectedOptions, actionMeta) => {
    const { name } = actionMeta;
    const values = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];

    switch (name) {
      case "availability":
        setAvailability(values);
        break;
      case "skills":
        setSkills(values);
        break;
      case "interests":
        setInterests(values);
        break;
      default:
        break;
    }
  };
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `
I want to become a volunteer

Personal Details:
- Name: ${name}
- Age: ${age}
- Phone Number: ${phone}
- Email: ${email}
- City: ${city}
- Country: ${country}
- Occupation: ${occupation}

Volunteer Information:
- Availability: ${availability.join(", ")}
- Skills: ${skills.join(", ")}
- Areas of Interest: ${interests.join(", ")}
- Previous Experience: ${experience}
- Qualification: ${qualification}

Additional Message:
${message}
    `;

    const templateParams = {
      to_name: "Help Line",
      from_name: name,
      from_email: email,
      message: finalMessage,
    };

    emailjs
      .send(
        "service_sn43jtj",
        "template_2m4dd8r",
        templateParams,
        "E2G6lzak44zoyL3Hy"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your request has been submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setName("");
          setEmail("");
          setPhone("");
          setAge("");
          setOccupation("");
          setQualification("");
          setAvailability([]);
          setSkills([]);
          setInterests([]);
          setExperience("");
          setMessage("");
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

  return (
    <div
      className="get_intouch_area pt-120 pb-120"
      style={{
        background: "url(/img/bg/contact_map.png)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#52FBD9E8",
          padding: "20px",
          borderRadius: "15px",
          width: "80%",
          marginBottom: "40px",
        }}
      >
        <h4 className="text-cente"> Join as Volunteer</h4>
      </div>

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
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="number"
                      placeholder="Age"
                      name="age"
                      value={age}
                      required
                      min="16"
                      max="100"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="number"
                      placeholder="Age"
                      name="age"
                      value={age}
                      required
                      min="16"
                      max="100"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Occupation"
                      name="occupation"
                      value={occupation}
                      required
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Qualification"
                      name="qualification"
                      value={qualification}
                      required
                      onChange={(e) => setQualification(e.target.value)}
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <label style={labelStyles}>City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={inputStyles}
                      required
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <label style={labelStyles}>Country</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Enter your country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      style={inputStyles}
                      required
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <label style={labelStyles}>Phone Number</label>
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
                    <label style={labelStyles}>Availability</label>
                    <Select
                      isMulti
                      name="availability"
                      options={availabilityOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Select availability"
                      styles={customSelectStyles}
                      value={availabilityOptions.filter((option) =>
                        availability.includes(option.value)
                      )}
                      onChange={(selected, action) =>
                        handleSelectChange(selected, {
                          ...action,
                          name: "availability",
                        })
                      }
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <label style={labelStyles}>Speciality/ Skills</label>
                    <Select
                      isMulti
                      name="skills"
                      options={skillsOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Select skills"
                      styles={customSelectStyles}
                      value={skillsOptions.filter((option) =>
                        skills.includes(option.value)
                      )}
                      onChange={(selected, action) =>
                        handleSelectChange(selected, {
                          ...action,
                          name: "skills",
                        })
                      }
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <label style={labelStyles}>Areas of Interest</label>
                    <Select
                      isMulti
                      name="interests"
                      options={interestOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Select areas of interest"
                      styles={customSelectStyles}
                      value={interestOptions.filter((option) =>
                        interests.includes(option.value)
                      )}
                      onChange={(selected, action) =>
                        handleSelectChange(selected, {
                          ...action,
                          name: "interests",
                        })
                      }
                    />
                  </div>
                  <div className="col-xxl-6 col-sm-6">
                    <label style={labelStyles}>
                      Previous Volunteer Experience
                    </label>
                    <textarea
                      name="experience"
                      placeholder="Tell us about your previous volunteer experience (if any)"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      style={{
                        ...inputStyles,
                        height: "100px",
                        resize: "vertical",
                      }}
                    ></textarea>
                  </div>
                  <div className="col-xxl-12">
                    <label style={labelStyles}>
                      Additional Message or Comments
                    </label>
                    <textarea
                      name="message"
                      placeholder="Any additional information you'd like to share"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        ...inputStyles,
                        height: "120px",
                        resize: "vertical",
                      }}
                    ></textarea>
                  </div>
                  <div className="col-xxl-12">
                    <button
                      type="submit"
                      className="contact_btn"
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
