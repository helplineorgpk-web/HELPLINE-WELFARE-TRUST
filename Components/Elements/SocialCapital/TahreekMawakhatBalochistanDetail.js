import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./TahreekMawakhatBalochistanDetail.module.css";

function Photo({ src, alt, caption, priority = false }) {
  return (
    <figure className={styles.photo}>
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        priority={priority}
        className={styles.photoImage}
        sizes="(max-width: 860px) 92vw, 860px"
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

const VIDEOS = [
  {
    src: "/img/bhitgaajkhuzdar.mp4",
    title: "Bhit Gaaj, Khuzdar — field video 1",
  },
  {
    src: "/img/bhitgaajkhuzdar.mp41.mp4",
    title: "Bhit Gaaj, Khuzdar — field video 2",
  },
  {
    src: "/img/bhitgaajkhuzdar2.mp4",
    title: "Bhit Gaaj, Khuzdar — field video 3",
  },
  {
    src: "/img/bhitgaajkhuzdar4.mp4",
    title: "Bhit Gaaj, Khuzdar — field video 4",
  },
];

export default function TahreekMawakhatBalochistanDetail() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>A project of Helpline Welfare Trust</p>
          <h2 className={styles.title}>Masjid & Madrassa Anwar-ul-Quran</h2>
          <p className={styles.location}>
            Bhit Gaaj, Tehsil Zeedi, District Khuzdar, Balochistan, Pakistan
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>~80</span>
              <span className={styles.statLabel}>Children studying today</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>Hifz & Nazra</span>
              <span className={styles.statLabel}>Taught under this roof</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>Hafiz Abdul Kareem</span>
              <span className={styles.statLabel}>Supervisor and caregiver</span>
            </div>
          </div>
          <div className={styles.prose}>
            <p>
              Some places are far from maps, and farther still from mercy.
              Bhit Gaaj is one of them: a remote fold of Khuzdar where the
              mountains are brown, the roads are few, and a child&apos;s future
              can end at the edge of a dusty courtyard. It is here that
              Helpline Welfare Trust has chosen to stand.
            </p>
            <p>
              We have adopted Masjid and Madrassa Anwar-ul-Quran not as a
              plaque on a wall, but as a living promise. This page is the
              story of that promise: a masjid, a madrassa, eighty children,
              and a movement that will turn a forgotten valley into a
              Mawakhat Community.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <Photo
            src="/img/mainimagefullsize.png"
            alt="Gateway of Tahreek-e-Mawakhat Balochistan at Bhit Gaaj, Khuzdar"
            caption="The gateway of Tahreek-e-Mawakhat Balochistan, Bhit Gaaj, Khuzdar"
            priority
          />
          <h3 className={styles.sectionTitle}>Where the road ends, a movement begins</h3>
          <div className={styles.prose}>
            <p>
              Walk through the blue gates and the land tells you everything
              before a single word is spoken. Arid hills. A white masjid with
              a green dome. Signs for solar energy, clean water, trees, and
              education. This is not a finished city. It is a beginning
              carved into stone and dust.
            </p>
            <p>
              Tahreek-e-Mawakhat Balochistan is Helpline&apos;s answer to a
              question the Prophet&apos;s city asked fourteen centuries ago:
              what do we owe the stranger, the neighbour, the child who has
              nothing but thirst and a desire to learn? Mawakhat is
              brotherhood. It is the decision that a boy in Bhit Gaaj is as
              worthy of light, water, shade, and schooling as a child in any
              city of Pakistan.
            </p>
            <p>
              Helpline did not come here to leave a donation and drive away.
              We came to adopt a masjid and a madrassa, and then to stay
              until the whole settlement around them becomes a community that
              can stand on its own feet.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <Photo
            src="/img/madrissaanwarulquran.png"
            alt="Students of Madrassa Anwar-ul-Quran seated in the courtyard"
            caption="Children of Anwar-ul-Quran, learning in the courtyard of their masjid"
          />
          <h3 className={styles.sectionTitle}>Eighty children, one devoted caretaker</h3>
          <div className={styles.prose}>
            <p>
              Today, nearly eighty children sit on the rugs of Anwar-ul-Quran.
              They come for Hifz and Nazra: to memorise the Book of Allah,
              and to read it with their own eyes. In a valley where schools
              are rare and childhood is often spent fetching water or
              watching goats, this circle of white caps is already a miracle
              of ordinary courage.
            </p>
            <p>
              Their nigran, Hafiz Abdul Kareem Sahib, is more than a teacher.
              He manages their food. He watches their health. He keeps the
              rhythm of the day so that hunger does not steal the lesson, and
              so that a child who has walked from a distant home still finds
              a meal, a place to sit, and a voice that calls him by name.
            </p>
            <p>
              This is the heart of the adoption. Before solar panels, before
              pipelines, before a new school building, there is already a
              living classroom and a man who has refused to let these
              children disappear into the silence of an underserved land.
              Helpline stands with him, so he does not stand alone.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <Photo
            src="/img/3rdimageanwarulquran.png"
            alt="Hifz and Nazra class inside Madrassa Anwar-ul-Quran"
            caption="Inside the hall: Hifz, Nazra, and the quiet work of tarbiyat"
          />
          <h3 className={styles.sectionTitle}>A masjid that teaches, a madrassa that shelters</h3>
          <div className={styles.prose}>
            <p>
              Anwar-ul-Quran is both masjid and madrassa. The prayer hall is
              also a school. The mihrab faces the same children who will one
              day lead the prayer themselves. This is the old Muslim idea,
              returned to a place that had almost lost it: that worship and
              learning belong under one roof, and that a masjid is not only
              for the adult who can already recite, but for the child who is
              still finding the letters.
            </p>
            <p>
              Rows of low desks. Open mushafs. A teacher at the far end.
              There is no luxury here, and there does not need to be. What
              these children need is continuity: a place that will still be
              here next month, a meal that will still arrive, a teacher who
              will still open the Quran at dawn. Adoption means we take
              responsibility for that continuity.
            </p>
            <p>
              From this hall, Helpline will not only keep Hifz and Nazra
              alive. We will grow the space until deeni and dunyavi education
              sit side by side, so a child who knows the Quran also knows
              the world he must live in with honour.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <Photo
            src="/img/cleanwateranwarulquran.png"
            alt="Children drinking clean water at the Anwar-ul-Quran water station"
            caption="Clean water, a healthy life: the second promise after light"
          />
          <h3 className={styles.sectionTitle}>Light first, then water, then shade</h3>
          <div className={styles.prose}>
            <p>
              A Mawakhat Community is not built in a single day. It is built
              in the order a family would choose if they were starting from
              nothing. First, light. Then water. Then trees. Then a school
              that outlives all of us.
            </p>
            <p>
              <strong>Solar power</strong> will come first. Electricity is
              dignity after sunset. It is a fan in the heat, a lamp for
              Hifz after Maghrib, a fridge for milk, a charge for a phone
              that can call for help. Helpline will begin with solar so the
              masjid, the madrassa, and the homes around them are no longer
              left to the dark.
            </p>
            <p>
              <strong>Clean water</strong> will follow. In this landscape,
              water is not a tap you forget. It is hours of walking, illness
              in small stomachs, and girls kept from class because the
              household needs another pair of hands at the well. A permanent
              water solution for the whole community is the difference
              between surviving and living.
            </p>
            <p>
              <strong>Tree plantation</strong> will then wrap the settlement.
              Shajar kari on every side: shade against the glare, roots
              against the dust, a green belt so a child growing up here
              inherits more than stone. A community that plants trees is a
              community that intends to stay.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.chapter}>
        <div className={styles.wrap}>
          <Photo
            src="/img/schoolanwarulquran.png"
            alt="Anwar-ul-Quran school building with solar panels in Khuzdar"
            caption="The school that will rise: solar on the roof, Al-Kitab in the classrooms"
          />
          <h3 className={styles.sectionTitle}>The same rights as Rana Town, Manawan, and Umarkot</h3>
          <div className={styles.prose}>
            <p>
              After light, water, and trees, the school will rise. Not a
              room that pretends to be a school, but a place where these
              children receive both religious and modern education: Quran
              and mathematics, tarbiyat and science, character and skill.
              Deeni aur dunyavi taleem, together, as they were always meant
              to be.
            </p>
            <p>
              That school and this madrassa will be included in the{" "}
              <strong>Al-Kitab Education System</strong>, the same system
              that already serves children in Rana Town, Manawan, and
              Umarkot. The boy who sits on this mountain path will hold the
              same right to excellence as the child in those classrooms. No
              second-class syllabus. No leftover teachers. The same
              standard, the same dignity, the same future.
            </p>
            <p>
              This is how a pasmanda ilaqa becomes a well-developed
              community: not by charity that fades, but by a movement that
              stays. Tahreek-e-Mawakhat Balochistan is that movement. It
              begins with eighty children and a hafiz who feeds them. It
              will end, insha&apos;Allah, with a self-reliant settlement of
              light, water, shade, and learning.
            </p>
            <p>
              Walk with us. This work is in the hands of Helpline Welfare
              Trust, and those hands are open.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.videos}>
        <div className={styles.wrap}>
          <h3 className={styles.sectionTitle}>From the ground in Bhit Gaaj</h3>
          <p className={styles.videoLead}>
            Field videos from Masjid and Madrassa Anwar-ul-Quran — the children,
            the courtyard, and the valley Helpline has adopted.
          </p>
          <div className={styles.videoGrid}>
            {VIDEOS.map((video) => (
              <figure key={video.src} className={styles.videoFrame}>
                <video
                  className={styles.video}
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  title={video.title}
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption className={styles.caption}>{video.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.roadmap}>
        <div className={styles.wrap}>
          <h3 className={styles.sectionTitle}>The path we will walk</h3>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <div>
                <h4 className={styles.stepTitle}>Adopt the masjid and madrassa</h4>
                <p className={styles.stepText}>
                  Stand with Anwar-ul-Quran, support Hafiz Abdul Kareem Sahib,
                  and keep eighty children in Hifz and Nazra with food and care.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <div>
                <h4 className={styles.stepTitle}>Bring solar power</h4>
                <p className={styles.stepText}>
                  Light the masjid, the classrooms, and the homes around them
                  so the community no longer waits for the sun to study or to live.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <div>
                <h4 className={styles.stepTitle}>Secure clean water</h4>
                <p className={styles.stepText}>
                  A permanent water solution for every household, so health and
                  attendance are no longer decided by a dry well.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>04</span>
              <div>
                <h4 className={styles.stepTitle}>Plant the valley</h4>
                <p className={styles.stepText}>
                  Trees on every side of the settlement, until dust becomes
                  shade and the land itself feels claimed by hope.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>05</span>
              <div>
                <h4 className={styles.stepTitle}>Build the Al-Kitab school</h4>
                <p className={styles.stepText}>
                  Religious and modern education under one system, with the same
                  rights already given to children in Rana Town, Manawan, and Umarkot.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.wrap}>
          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Help us turn this forgotten valley into a living, self-reliant
              Mawakhat Community.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/campaign/tahreek-e-mawakhat-balochistan" className={styles.ctaButton}>
                Donate Now
              </Link>
              <Link href="/social-capital-development" className={styles.ctaGhost}>
                Back to Social Welfare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
