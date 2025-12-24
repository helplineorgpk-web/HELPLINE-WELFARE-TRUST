import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "923215447883";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          zIndex: 9999,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        }}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp
          style={{
            color: "#ffffff",
            fontSize: "32px",
          }}
        />
      </div>
    </>
  );
}

