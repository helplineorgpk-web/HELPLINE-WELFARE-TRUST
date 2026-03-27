"use client";
import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How Do Helpline Scholarships Work?",
    answer: (
      <ul>
        <li>A minimum donation of $10,000 is needed to establish one Helpline Scholarship</li>
        <li>The donation will become part of Helpline&apos;s Endowment Fund</li>
        <li>Ten percent of the donation, and income earned from the remaining investment, will be disbursed as the award</li>
        <li>The first award distribution will take place approximately one year after the fund achieves full endowment fund status</li>
        <li>90% of the donation will remain intact and ensure that the scholarship runs in perpetuity</li>
      </ul>
    ),
  },
  {
    question: "What is the Duration of the Scholarship?",
    answer: (
      <p>
        Helpline scholarships are designed to run in perpetuity. Once the endowment is established, awards are disbursed annually from the investment income, allowing the scholarship to support students for generations.
      </p>
    ),
  },
  {
    question: "How Can I Become a Sponsor?",
    answer: (
      <p>
        You can become a sponsor by sending a donation of any multiple of $10,000 to Helpline Welfare Trust. The fund can also be started with monthly or quarterly installments until $10,000 is collected. Contact the Helpline office or a Helpline Scholarships Committee member to initiate the process.
      </p>
    ),
  },
  {
    question: "Why Should I Sponsor?",
    answer: (
      <p>
        Sponsoring a scholarship creates lasting impact: you break financial barriers for talented students, support education in perpetuity through the endowment model, and help build stronger communities as educated youth give back. Your contribution transforms lives for generations.
      </p>
    ),
  },
];

export default function ScholarshipsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .sch-faq {
          background: #fff;
          padding: 80px 24px 100px;
        }
        .sch-faq-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .sch-faq-title {
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .sch-faq-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: #7eb8d4;
          margin: 0.75rem auto 0;
        }
        .sch-faq-intro {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555;
          text-align: center;
          margin: 0 0 2.5rem 0;
        }
        .sch-faq-list {
          border-top: 1px solid #e5e5e5;
        }
        .sch-faq-item {
          border-bottom: 1px solid #e5e5e5;
        }
        .sch-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
          background: none;
          border: none;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s;
        }
        .sch-faq-question:hover {
          color: #333;
        }
        .sch-faq-icon {
          flex-shrink: 0;
          margin-left: 1rem;
          font-size: 1.25rem;
          color: #666;
          line-height: 1;
        }
        .sch-faq-answer {
          padding: 0 0 1.25rem 0;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #444;
        }
        .sch-faq-answer ul {
          margin: 0;
          padding-left: 1.25rem;
        }
        .sch-faq-answer li {
          margin-bottom: 0.5rem;
        }
        .sch-faq-answer li:last-child {
          margin-bottom: 0;
        }
        .sch-faq-answer p {
          margin: 0;
        }
        @media (max-width: 600px) {
          .sch-faq {
            padding: 56px 20px 72px;
          }
          .sch-faq-question {
            font-size: 0.98rem;
            padding: 1rem 0;
          }
        }
      `}</style>

      <section className="sch-faq">
        <div className="sch-faq-inner">
          <h2 className="sch-faq-title">Frequently Asked Questions</h2>
          <p className="sch-faq-intro">
            Find quick answers on how Helpline Scholarships work, how to sponsor, and the impact they create.
          </p>
          <div className="sch-faq-list">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="sch-faq-item">
                <button
                  type="button"
                  className="sch-faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                >
                  {item.question}
                  <span className="sch-faq-icon" aria-hidden>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="sch-faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
