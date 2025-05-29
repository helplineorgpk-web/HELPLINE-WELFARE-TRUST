import React from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

const CardsSection = () => {
  const cards = [
    {
      title: "Dar ul Tarbiyah",
      image: "/img/muwakhat/darultarbiyah.png",
      detail:
        "Dar ul Tarbiyah is dedicated to providing quality education and character building for the youth.",
      link: "/darulTarbiyah",
    },
    {
      title: "Dar ul Ehsan",
      image: "/img/muwakhat/darulehsan.png",
      detail:
        "Dar ul Ehsan serves as a center for spiritual guidance and community welfare.",
      link: "/darulEhsan",
    },
    {
      title: "Sahoolat Center",
      image: "/img/muwakhat/SAHOLATCENTER.png",
      detail:
        "Sahoolat Center provides essential support and resources to those in need within our community.",
      link: "/sahoolatCenter",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4 justify-content-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={card.image}
                alt={card.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h4 mb-3">{card.title}</Card.Title>
                <Card.Text>{card.detail}</Card.Text>
                <div className="mt-auto">
                  <Link
                    href={card.link}
                    className="w-100 "
                    style={{
                      backgroundColor: "#FC4C31",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    See More
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
