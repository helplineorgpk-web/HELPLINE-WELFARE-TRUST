import React from "react";
import styles from "../../../public/css/From.module.css";

function InputField({
  label,
  type = "text",
  placeholder,
  required = false,
  options,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      {type === "select" ? (
        <select
          id={name}
          name={name}
          className={`${styles.formSelect} ${error ? styles.inputError : ""}`}
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder}</option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${styles.textarea} ${error ? styles.inputError : ""}`}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
        />
      )}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}

export default InputField;
