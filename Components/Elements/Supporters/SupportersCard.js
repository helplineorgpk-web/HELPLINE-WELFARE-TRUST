import React from "react";
import Image from "next/image";
export default function SupportersCard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Image
            src="/img/causes/sponser.jpg"
            height={600}
            width={800}
            alt="img"
          />

          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">TransData</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Benchmark,</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Ilaan,</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Mahir (Gp of Cos),</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Ezhar Industries,</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Descon,</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Haleeb Foods,</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">HP AirTravels-Tours,</div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="supporter_card">Henkel-Pak (Ger-Firm),</div>
          </div>
        </div>
      </div>
    </div>
  );
}
