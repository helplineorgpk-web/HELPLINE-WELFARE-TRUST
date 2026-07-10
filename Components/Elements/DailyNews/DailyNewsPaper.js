"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DAILY_NEWS_PAGES, IQBAL_VERSES, PDF_PAGES, NIJAAT_SECTION, ROZNAMA_REPLY_SECTION } from "../../../data/dailyNewsContent";
import styles from "./DailyNewsPaper.module.css";

function getFormattedDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getVerse(id) {
  return IQBAL_VERSES.find((v) => v.id === id);
}

function Masthead() {
  const today = getFormattedDate();
  return (
    <header className={styles.masthead}>
      <div className={styles.mastheadTop}>
        <span>Helpline Welfare Trust</span>
        <span className={styles.mastheadVol}>Vol. I · Community Edition</span>
        <span>{today}</span>
      </div>
      <div className={styles.ruleDouble} />
      <div className={styles.mastheadBrand}>
        <Image
          src="/img/logo2-removebg-preview.webp"
          alt="Helpline Welfare Trust"
          width={250}
          height={100}
          className={styles.mastheadLogo}
          priority
        />
        <div className={styles.mastheadTitleWrap}>
          <span className={styles.mastheadOrg}>Helpline Welfare Trust</span>
          <h1 className={styles.mastheadTitle}>Mawakhat e Madina</h1>
        </div>
      </div>
      <p className={styles.mastheadTagline}>
        Stories of impact, hope &amp; community across Pakistan
      </p>
      <div className={styles.ruleTriple} />
      <nav className={styles.mastheadNav}>
        <Link href="/">Home</Link>
        <span>·</span>
        <span>Mawakhat-e-Madina</span>
        <span>·</span>
        <span>Poverty &amp; Hope</span>
        <span>·</span>
        <span>Helpline Impact</span>
      </nav>
      <div className={styles.ruleSingle} />
    </header>
  );
}

function PoetryInset({ verseId }) {
  const verse = getVerse(verseId);
  if (!verse) return null;
  return (
    <aside className={styles.poetryInset}>
      <span className={styles.poetryLabel}>شاعری</span>
      <p className={styles.poetryText}>{verse.urdu}</p>
      <cite>{verse.ref}</cite>
    </aside>
  );
}

function PdfFigure({ pageNum, caption, layout = "full" }) {
  const config = PDF_PAGES[pageNum];
  if (!config) return null;

  return (
    <figure
      className={[
        styles.pdfFigure,
        layout === "side" ? styles.pdfSide : "",
        layout === "grid" ? styles.pdfGrid : "",
        layout === "feature" ? styles.pdfFeature : "",
        config.rotate ? styles.pdfRotated : "",
        config.landscape ? styles.pdfWide : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.pdfImageWrap}>
        <Image
          src={`/img/mawakhat-pdf/page-${pageNum}.png`}
          alt={config.alt}
          width={config.landscape ? 1684 : 1190}
          height={config.landscape ? 1190 : 1684}
          className={styles.pdfImg}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={pageNum === 1}
        />
      </div>
      {caption && (
        <figcaption className={styles.pdfCaption} dir="rtl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PageBreak({ label }) {
  return (
    <div className={styles.pageBreak}>
      <span className={styles.pageBreakLine} />
      <span className={styles.pageBreakLabel}>{label}</span>
      <span className={styles.pageBreakLine} />
    </div>
  );
}

function FrontPage({ intro }) {
  return (
    <section className={styles.frontPage}>
      <PdfFigure pageNum={1} layout="feature" />
      {intro.frontVerse && (
        <blockquote className={styles.frontVerse} dir="rtl">
          <p>{intro.frontVerse}</p>
          {intro.frontVerseRef && (
            <cite dir="rtl">{intro.frontVerseRef}</cite>
          )}
        </blockquote>
      )}
      <div className={styles.frontGrid}>
        {intro.columns.map((col, i) => (
          <div key={col.title} className={styles.frontCol}>
            <span className={styles.colNum}>{i + 1}</span>
            <h3 dir="rtl">{col.title}</h3>
            <p dir="rtl">{col.body}</p>
            {col.source && (
              <p className={styles.colSource} dir="rtl">
                {col.source}
              </p>
            )}
          </div>
        ))}
        <div className={styles.frontCol + " " + styles.frontColHighlight}>
          <span className={styles.colNum}>4</span>
          <h3 dir="rtl">آج کی بڑی خبر</h3>
          <p className={styles.breakingText} dir="rtl">
            {intro.breakingNews}
          </p>
          {intro.breakingNewsSource && (
            <p className={styles.breakingSource} dir="rtl">
              {intro.breakingNewsSource}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function QuranVerse({ verse }) {
  return (
    <blockquote className={styles.quranVerse} dir="rtl">
      <p className={styles.quranArabic}>{verse.arabic}</p>
      <p className={styles.quranUrdu}>{verse.urdu}</p>
      <cite>{verse.ref}</cite>
    </blockquote>
  );
}

function NijaatSection({ section }) {
  return (
    <section className={styles.nijaatSection}>
      <p className={styles.nijaatPrelude} dir="rtl">
        {section.prelude}
      </p>
      <div className={styles.ruleDouble} />
      <h2 className={styles.nijaatTitle} dir="rtl">
        {section.title}
      </h2>
      <p className={styles.nijaatIntro} dir="rtl">
        {section.intro}
      </p>

      <div className={styles.nijaatVerses}>
        {section.salvationVerses.map((verse, i) => (
          <QuranVerse key={`sv-${i}`} verse={verse} />
        ))}
      </div>

      <div className={styles.nijaatBlock}>
        <h3 className={styles.nijaatSubtitle} dir="rtl">
          {section.baniIsraeelTitle}
        </h3>
        <p className={styles.nijaatText} dir="rtl">
          {section.baniIsraeelIntro}
        </p>
        <QuranVerse verse={section.baniIsraeelVerse} />
        <div className={styles.azaabGrid}>
          {section.baniIsraeelAzaab.map((item, i) => (
            <article key={item.name} className={styles.azaabCard} dir="rtl">
              <span className={styles.nationNum}>{i + 1}</span>
              <h4>{item.name}</h4>
              <p className={styles.nijaatText}>{item.story}</p>
              <blockquote className={styles.nationVerse}>
                <p className={styles.quranArabic}>{item.verse}</p>
                <p className={styles.quranUrdu}>{item.verseUrdu}</p>
                <cite>{item.ref}</cite>
              </blockquote>
            </article>
          ))}
        </div>

        {section.baniIsraeelTafseer && (
          <div className={styles.tafseerBlock} dir="rtl">
            <h4 className={styles.tafseerTitle}>
              {section.baniIsraeelTafseer.title}
            </h4>
            {section.baniIsraeelTafseer.paragraphs.map((para, i) => (
              <p key={`tf-${i}`} className={styles.tafseerText}>
                {para}
              </p>
            ))}

            <div className={styles.lessonsList}>
              <h5 className={styles.lessonsTitle}>اہم اسباق:</h5>
              <ul>
                {section.baniIsraeelTafseer.lessons.map((lesson, i) => (
                  <li key={`ls-${i}`}>
                    <span className={styles.lessonNum}>{i + 1}</span>
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.nijaatVerses}>
              {section.baniIsraeelTafseer.verses.map((verse, i) => (
                <QuranVerse key={`tv-${i}`} verse={verse} />
              ))}
            </div>

            <aside className={styles.tafseerEmotional}>
              <span className={styles.emotionalLabel}>دل سے</span>
              <p>{section.baniIsraeelTafseer.emotionalNote}</p>
            </aside>
          </div>
        )}

        <QuranVerse verse={section.baniIsraeelClosingVerse} />
      </div>

      <div className={styles.nijaatBlock}>
        <h3 className={styles.nijaatSubtitle} dir="rtl">
          {section.nationsTitle}
        </h3>
        <p className={styles.nijaatText} dir="rtl">
          {section.nationsIntro}
        </p>
        <div className={styles.nationsGrid}>
          {section.nations.map((nation, i) => (
            <article key={nation.name} className={styles.nationCard} dir="rtl">
              <span className={styles.nationNum}>{i + 1}</span>
              <h4>{nation.name}</h4>
              <p className={styles.nijaatText}>{nation.story}</p>
              <blockquote className={styles.nationVerse}>
                <p className={styles.quranArabic}>{nation.verse}</p>
                <p className={styles.quranUrdu}>{nation.verseUrdu}</p>
                <cite>{nation.ref}</cite>
              </blockquote>
            </article>
          ))}
        </div>
        <QuranVerse verse={section.nationsVerse} />
      </div>

      <div className={styles.nijaatBlock}>
        <h3 className={styles.nijaatSubtitle} dir="rtl">
          {section.seeratTitle}
        </h3>
        {section.seeratParagraphs.map((para, i) => (
          <p key={`sp-${i}`} className={styles.nijaatText} dir="rtl">
            {para}
          </p>
        ))}
        <div className={styles.nijaatVerses}>
          {section.seeratVerses.map((verse, i) => (
            <QuranVerse key={`se-${i}`} verse={verse} />
          ))}
        </div>
      </div>

      <p className={styles.nijaatClosing} dir="rtl">
        {section.closing}
      </p>
    </section>
  );
}

function CenterInsetSection({ poetryId, emotionalNotes = [], humanStories = [] }) {
  if (!poetryId && emotionalNotes.length === 0 && humanStories.length === 0) {
    return null;
  }

  return (
    <div className={styles.centerInset}>
      {poetryId && <PoetryInset verseId={poetryId} />}

      {humanStories.length > 0 && (
        <div className={styles.humanStories}>
          {humanStories.map((story, i) => (
            <div key={i} className={styles.humanStory} dir="rtl">
              <span className={styles.storyNum}>{i + 1}</span>
              <p>{story}</p>
            </div>
          ))}
        </div>
      )}

      {emotionalNotes.length > 0 && (
        <div
          className={[
            styles.emotionalRow,
            emotionalNotes.length === 1
              ? styles.emotionalRowSingle
              : emotionalNotes.length >= 3
                ? styles.emotionalRowTriple
                : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {emotionalNotes.map((text, i) => (
            <aside key={i} className={styles.emotionalNoteCenter} dir="rtl">
              <span className={styles.emotionalLabel}>دل سے</span>
              <p>{text}</p>
            </aside>
          ))}
        </div>
      )}
    </div>
  );
}

function ArticleSpread({ page, pdfCaptions }) {
  const pdfPages = page.pdfAfter
    ? Array.isArray(page.pdfAfter)
      ? page.pdfAfter
      : [page.pdfAfter]
    : [];

  const firstPdf = pdfPages[0];
  const restPdfs = pdfPages.slice(1);

  const paragraphs = page.paragraphs || [];
  const midIndex = Math.ceil(paragraphs.length * 0.55);
  const firstHalf = paragraphs.slice(0, midIndex);
  const secondHalf = paragraphs.slice(midIndex);
  const emotionalNotes = page.emotionalNotes || [];
  const humanStories = page.humanStories || [];
  const sideFillers = page.sideFillers || [];
  const hasCenterInset =
    page.poetryMid || emotionalNotes.length > 0 || humanStories.length > 0;

  return (
    <section className={styles.spread}>
      <div className={styles.spreadHeader}>
        <span className={styles.sectionName}>{page.section}</span>
        <h2 className={styles.spreadHeadline} dir="rtl">
          {page.headline}
        </h2>
        <p className={styles.spreadDeck} dir="rtl">
          {page.subheadline}
        </p>
        <p className={styles.spreadByline}>{page.byline}</p>
      </div>

      {page.pullQuote && (
        <blockquote className={styles.pullQuote} dir="rtl">
          {page.pullQuote}
        </blockquote>
      )}

      <div
        className={[
          styles.spreadBody,
          firstPdf ? styles.spreadGrid : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {firstPdf && (
          <div className={styles.imageColumn}>
            <PdfFigure
              pageNum={firstPdf}
              layout="grid"
              caption={pdfCaptions[firstPdf]}
            />
          </div>
        )}
        <div className={styles.textColumn}>
          <div className={styles.columns}>
            {firstHalf.map((para, i) => (
              <p key={`a-${i}`} className={styles.bodyText} dir="rtl">
                {para}
              </p>
            ))}
            {sideFillers.map((text, i) => (
              <aside key={`f-${i}`} className={styles.sideFiller} dir="rtl">
                <span className={styles.sideFillerLabel}>دل سے</span>
                <p>{text}</p>
              </aside>
            ))}
          </div>
        </div>
      </div>

      {hasCenterInset && (
        <div className={styles.fullWidthInset}>
          <CenterInsetSection
            poetryId={page.poetryMid}
            emotionalNotes={emotionalNotes}
            humanStories={humanStories}
          />
        </div>
      )}

      <div className={styles.spreadBody}>
        <div className={styles.columns}>
          {secondHalf.map((para, i) => (
            <p key={`b-${i}`} className={styles.bodyText} dir="rtl">
              {para}
            </p>
          ))}
        </div>
      </div>

      {page.stats && (
        <div className={styles.statsBand}>
          {page.stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <strong>{s.value}</strong>
              <span dir="rtl">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {page.closing && (
        <p className={styles.closingLine} dir="rtl">
          {page.closing}
        </p>
      )}

      {page.poetryAfter && (
        <div className={styles.fullWidthInset}>
          <CenterInsetSection poetryId={page.poetryAfter} />
        </div>
      )}

      {restPdfs.length > 0 && (
        <div
          className={[
            styles.pdfGallery,
            restPdfs.length === 1 ? styles.pdfGallerySingle : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {restPdfs.map((num) => (
            <div key={num} className={styles.pdfGalleryItem}>
              <PdfFigure
                pageNum={num}
                layout="grid"
                caption={pdfCaptions[num]}
              />
              {page.galleryNotes?.[num] && (
                <p className={styles.galleryNote} dir="rtl">
                  {page.galleryNotes[num]}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <span className={styles.pageNum}>{page.label}</span>
    </section>
  );
}

function RoznamaReplySection({ section }) {
  const solutionCol = section.columns.find((col) => col.tag === "حل");

  return (
    <section className={styles.roznamaSection}>
      <div className={styles.roznamaPdfBlock}>
        <h3 className={styles.roznamaPdfHeading} dir="rtl">
          روزنامہ دنیا کا کالم
        </h3>
        <div className={styles.roznamaPdfStrip}>
          {section.pdfImages.map((img) => (
            <figure key={img.src} className={styles.roznamaPdfFig}>
              <div className={styles.roznamaPdfWrap}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1190}
                  height={1684}
                  className={styles.roznamaPdfImg}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className={styles.pdfCaption} dir="rtl">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className={styles.roznamaPdfLink} dir="rtl">
          <a
            href="/img/RoznamaDunya.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            روزنامہ دنیا کا مکمل کالم PDF دیکھیں
          </a>
        </p>
      </div>

      {section.problemStats && (
        <div className={styles.roznamaStatsBlock} dir="rtl">
          <h3 className={styles.roznamaStatsTitle}>{section.problemStats.title}</h3>
          <p className={styles.roznamaStatsSource}>{section.problemStats.source}</p>
          {section.problemStats.sections.map((block, index) => (
            <div key={block.heading} className={styles.roznamaStatsSection}>
              <h4 className={styles.roznamaStatsSectionTitle}>
                {index + 1}. {block.heading}
              </h4>
              <table className={styles.roznamaStatsTable}>
                <thead>
                  <tr>
                    <th>تفصیل</th>
                    <th>اعداد و شمار</th>
                    <th>کمی — کتنی تعداد کم ہوئی</th>
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.value}</td>
                      <td>{row.decrease}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {solutionCol && (
        <div className={styles.roznamaOpinionBlock}>
          <div className={styles.roznamaMastheadText} dir="rtl">
            <p className={styles.roznamaKicker}>{section.kicker}</p>
            {section.mainHeading && (
              <h1 className={styles.roznamaMainHeading}>{section.mainHeading}</h1>
            )}
            <h2 className={styles.roznamaTitle}>{section.solutionHeading}</h2>
            <p className={styles.roznamaSubtitle}>{section.subtitle}</p>
            <p className={styles.roznamaSource}>{section.sourceNote}</p>
          </div>

          <article className={styles.roznamaOpinionCol} dir="rtl">
            <div className={styles.roznamaColHead}>
              <span className={styles.roznamaTag}>{solutionCol.tag}</span>
              <div className={styles.roznamaColHeadCenter}>
                <h3 className={styles.roznamaColMainHead}>
                  {solutionCol.headline}
                </h3>
                {solutionCol.subheadline && (
                  <p className={styles.roznamaColSubhead}>{solutionCol.subheadline}</p>
                )}
                {solutionCol.paper && (
                  <p className={styles.roznamaAuthor}>{solutionCol.paper}</p>
                )}
              </div>
            </div>
            {solutionCol.paragraphs.map((para, i) => (
              <p key={i} className={styles.roznamaBody}>
                {para}
              </p>
            ))}
          </article>

          {section.storyGallery?.length > 0 && (
            <div className={styles.roznamaStoryGallery}>
              {section.storyGallery.map((img) => (
                <figure key={img.src} className={styles.roznamaStoryFig}>
                  <div className={styles.roznamaStoryWrap}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={900}
                      height={680}
                      className={styles.roznamaStoryImg}
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className={styles.roznamaStoryCaption} dir="rtl">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {section.solutionImages?.length > 0 && (
            <div className={styles.roznamaSolutionImages}>
              {section.solutionImages.map((img) => (
                <figure
                  key={img.src}
                  className={[
                    styles.roznamaSolutionFig,
                    img.landscape ? styles.roznamaSolutionFigWide : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.roznamaSolutionWrap}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={styles.roznamaSolutionImg}
                      sizes="(max-width: 768px) 90vw, 50vw"
                    />
                  </div>
                  <figcaption className={styles.roznamaSolutionCaption} dir="rtl">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className={styles.roznamaActions}>
            <h4 className={styles.roznamaActionsTitle} dir="rtl">
              ہمارے علاقوں میں عملی اقدامات
            </h4>
            <div className={styles.roznamaActionGrid}>
              {section.actionPoints.map((point) => (
                <div key={point.title} className={styles.roznamaActionCard} dir="rtl">
                  <h5>{point.title}</h5>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.roznamaClosing} dir="rtl">
            {section.closing}
          </p>
        </div>
      )}
    </section>
  );
}

const PDF_CAPTIONS = {
  2: "رب کی اطاعت — رسالت کی تعلیمات، انسانیت کی خدمت",
  3: "ہیلپ لائن ویلفیئر ٹرسٹ کے فلاحی پروگرامز",
  4: "الکتاب مسجد — کردار سازی کا مرکز",
  5: "مسجد مرکز برائے کردار سازی",
  6: "الکتاب ہائر سیکنڈری سکول",
  7: "الکتاب تعلیمی نظام اور کردار سازی پراجیکٹ",
  8: "سماجی و آبادیاتی فلاحی رپورٹ 2026",
  9: "مواخات ٹاؤن، رانا ٹاؤن — فیلڈ میپ",
  10: "یونین کونسل 23 — گاؤں کی تعلیمی تفصیل",
};

export default function DailyNewsPaper() {
  const intro = DAILY_NEWS_PAGES.find((p) => p.type === "intro");
  const articles = DAILY_NEWS_PAGES.filter((p) => p.type === "article");

  return (
    <div className={styles.newsprint}>
      <div className={styles.broadsheet}>
        <Masthead />
        {intro && <FrontPage intro={intro} />}
        <NijaatSection section={NIJAAT_SECTION} />
        <PageBreak label="اداریہ و خصوصی رپورٹ" />

        {articles.map((page, i) => (
          <React.Fragment key={page.id}>
            {i > 0 && i % 2 === 0 && (
              <PageBreak label="خصوصی رپورٹ جاری ہے" />
            )}
            <ArticleSpread page={page} pdfCaptions={PDF_CAPTIONS} />
          </React.Fragment>
        ))}

        <PageBreak label="روزنامہ دنیا · کالم و حل" />
        <RoznamaReplySection section={ROZNAMA_REPLY_SECTION} />

        <footer className={styles.paperFooter}>
          <div className={styles.ruleDouble} />
          <p dir="rtl">
            ہیلپ لائن ویلفیئر ٹرسٹ — مواخاتِ مدینہ کے جذبے کے ساتھ
          </p>
          <div className={styles.footerActions}>
            <Link href="/donation">عطیہ کریں</Link>
            <Link href="/volunteer">رضاکار بنیں</Link>
            <a
              href="/img/Mawakhat-e-Madina4Pager.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              مکمل PDF ڈاؤن لوڈ
            </a>
          </div>
          <p className={styles.footerCopy}>
            © Helpline Welfare Trust · Daily News
          </p>
        </footer>
      </div>
    </div>
  );
}
