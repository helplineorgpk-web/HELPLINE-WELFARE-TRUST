import React from "react";
import styles from "./UrduArticle.module.css";

function ListItem({ item }) {
  if (item.href) {
    return (
      <li>
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {item.label}
        </a>
        {" — "}
        {item.text}
      </li>
    );
  }
  return (
    <li>
      {item.label ? <strong className={styles.itemLabel}>{item.label}: </strong> : null}
      {item.text}
    </li>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "p":
      return <p className={styles.para}>{block.text}</p>;
    case "heading":
      return <h4 className={styles.subheading}>{block.text}</h4>;
    case "list":
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <ListItem key={item.label ?? item.text} item={item} />
          ))}
        </ul>
      );
    case "note":
      return (
        <div className={styles.note}>
          <span className={styles.noteLabel}>{block.label}</span>
          <p>{block.text}</p>
        </div>
      );
    case "facts":
      return (
        <dl className={styles.facts}>
          {block.items.map(([label, value]) => (
            <div key={label} className={styles.fact}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      );
    case "terms":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.terms}>
            <thead>
              <tr>
                <th scope="col">اصطلاح</th>
                <th scope="col">مفہوم</th>
              </tr>
            </thead>
            <tbody>
              {block.items.map(([term, meaning]) => (
                <tr key={term}>
                  <th scope="row">{term}</th>
                  <td>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "figure":
      return (
        <figure className={styles.figure}>
          <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    default:
      return null;
  }
}

export default function UrduArticleBlocks({ blocks }) {
  return blocks.map((block, index) => <Block key={index} block={block} />);
}
