import Link from "next/link";

const NewsCard = ({ image, category, title, author, date, link }) => (
  <div className="single_nfeed mb-30">
    <div className="nfeed_img img_effect_white">
      <Link href={link}>
        <a>
          <img src={image} alt={title} />
        </a>
      </Link>
    </div>
    <div className="nfeed_content">
      <div className="nfeed_title">
        <Link href={link}>
          <a className="nsub_title">{category}</a>
        </Link>
        <h3 className="n_title">
          <Link href={link}>
            <a>{title}</a>
          </Link>
        </h3>
      </div>
      <div className="nfeed_meta_wrapper d-flex">
        <div className="nfeed_meta mr-20">
          <Link href="#">
            <a className="nmeta_icon theme-1">
              <i className="fal fa-user"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="nmeta_text theme-1">
              <span className="nmeta_by">By</span> {author}
            </a>
          </Link>
        </div>
        <div className="nfeed_meta">
          <Link href="#">
            <a className="nmeta_icon theme-2">
              <i className="fal fa-calendar-alt"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="nmeta_text theme-2">
              <span className="nmeta_date">{date}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default NewsCard;
