import React, { useState } from "react";
import InputField from "./InputField";
import styles from "../../../public/css/From.module.css";
import { HelplineData } from "../../../pages/api/data";

function ItForm() {
  const formFields = HelplineData.formFields;
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    formFields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
    } else {
      console.log("Validation Errors:", errors);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.formTitle}>Helpline IT Lab Form</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              options={field.options}
              value={formData[field.name] || ""}
              onChange={handleChange}
              error={errors[field.name]}
            />
          ))}
          <div style={{ textAlign: "center" }}>
            <button className="g_btn theme1_bg to_right2 i_right rad-30 p-45">
              SUBMIT<i className="fal fa-long-arrow-right"></i>
              <span></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ItForm;
