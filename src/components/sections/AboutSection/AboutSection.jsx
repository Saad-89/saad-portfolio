import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';

const SERVICES = [
  {
    title: 'Get your idea to market — fast',
    desc: 'You bring the vision; I get it live. I focus on the version that proves your idea, build it in weeks instead of months, and put it in front of real customers — so you start learning and earning sooner.',
    tags: ['MVPs', 'Product launch', 'Weeks, not months'],
  },
  {
    title: 'Win more customers online',
    desc: 'A website or web app that earns trust the moment it loads — fast, polished, and built to turn visitors into enquiries, bookings, and sales for your business.',
    tags: ['Websites', 'Online stores', 'Booking & sign-ups'],
  },
  {
    title: 'Keep your customers coming back',
    desc: "A mobile app puts your business one tap away — on the phones your customers already use all day. That means repeat visits, more loyalty, and a direct line to them. I make it feel effortless and ship it to the App Store and Google Play.",
    tags: ['iPhone & Android', 'Loyalty & retention', 'App Store launch'],
  },
  {
    title: 'Save hours every week with AI',
    desc: 'Hand the repetitive work to software. I build AI assistants that answer your customers, agents that handle the busywork, and automations that run quietly in the background — freeing your team for what actually grows the business.',
    tags: ['AI assistants', 'Smart automation', 'Custom AI agents'],
  },
];

const VALUES = [
  'Clear communication, no tech-speak',
  'Honest timelines & regular updates',
  'Built to grow with your business',
  'A long-term partner, not a one-off',
];

const SNAPSHOT = [
  { label: 'Experience', value: '5+ years' },
  { label: 'Based in', value: 'Lahore, PK · worldwide' },
  { label: 'Focus', value: 'Web, mobile & AI' },
  { label: 'Industries', value: 'Most — startups to enterprise' },
  { label: 'Clients', value: 'Founders, SMBs & teams' },
  { label: 'Engagements', value: 'Freelance & contract' },
];

const SOCIALS = {
  LinkedIn: 'https://www.linkedin.com/in/muhammadsaad89/',
  GitHub: 'https://github.com/Saad-89',
  Twitter: 'https://x.com/saadkashmiri_',
};

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) setVisible(true); },
      { threshold: 0.06, rootMargin: '0px 0px 80px 0px' }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const openSocial = (platform) => {
    if (SOCIALS[platform]) window.open(SOCIALS[platform], '_blank', 'noopener');
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.aboutSection} ${visible ? styles.visible : ''}`}
      aria-label="About"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.sectionLabel}>01 — About</div>
            <h2 className={styles.name}>
              I build like it&apos;s my own business.
            </h2>
            <p className={styles.introduction}>
              I&apos;m Saad — a software engineer with 5+ years of experience helping businesses turn
              ideas into products that actually work. I&apos;ve built and launched software used by
              thousands of people across healthcare, finance, and education, working with teams in
              Europe, Australia, and the US.
            </p>
            <p className={styles.skillsBrief}>
              These days I also build AI into the products I ship — assistants, chatbots, and AI
              agents that automate the busywork so teams can focus on what matters. Whatever the
              tool, the goal is the same: software that helps your business grow.
            </p>

            <ul className={styles.valueList}>
              {VALUES.map((v) => (
                <li key={v} className={styles.valueItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {v}
                </li>
              ))}
            </ul>

            <div className={styles.socialLinks}>
              {Object.keys(SOCIALS).map((platform) => (
                <button
                  key={platform}
                  type="button"
                  className={styles.socialLink}
                  onClick={() => openSocial(platform)}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          <aside className={styles.snapshot} aria-label="At a glance">
            <div className={styles.snapshotStatus}>
              <span className={styles.snapshotDot} aria-hidden="true" />
              <span>Available for new projects</span>
            </div>
            <dl className={styles.snapshotList}>
              {SNAPSHOT.map((row) => (
                <div key={row.label} className={styles.snapshotRow}>
                  <dt className={styles.snapshotLabel}>{row.label}</dt>
                  <dd className={styles.snapshotValue}>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.snapshotNote}>
              Typically replies within 24 hours.
            </p>
          </aside>
        </div>

        <div className={styles.servicesBlock}>
          <div className={styles.servicesHead}>
            <h3 className={styles.servicesHeading}>How I help your business grow</h3>
            <p className={styles.servicesIntro}>
              Clients don&apos;t hire me for code — they hire me for results. Whatever stage
              you&apos;re at, here&apos;s what working together actually gets you.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className={styles.serviceCard}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                <span className={styles.serviceNumber}>{String(i + 1).padStart(2, '0')}</span>
                <h4 className={styles.serviceTitle}>{s.title}</h4>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.serviceTags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.serviceTag}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
