const NewsCard = ({ image, category, title, author, date, link }) => (
  <div className="single_nfeed mb-30">
    <div
      className="nfeed_img img_effect_white"
      style={{ border: "2px solid #65cabb", borderRadius: "10px" }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <a
        style={{
          color: "#65cabb",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {category}
      </a>
    </div>
  </div>
);
export default NewsCard;
