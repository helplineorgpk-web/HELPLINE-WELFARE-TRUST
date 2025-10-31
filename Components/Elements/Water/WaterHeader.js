import React from "react";

export default function WaterHeader({ image }) {
  return (
    <section>
      <div
        style={{
          width: "100%",
          minHeight: 420,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
}
