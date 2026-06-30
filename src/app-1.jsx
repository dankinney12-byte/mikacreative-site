/* global React */
const { useState, useEffect } = React;

// ============================================================
// WORDMARK
// ============================================================
function Wordmark({ size = 36, showCreative = true, className = '' }) {
  return (
    <span className={`wordmark ${className}`} style={{ fontSize: size }}>
      <span className="mika">
        <span>m</span><span>i</span><span>k</span><span>a</span>
      </span>
      {showCreative && (
        <span className="creative" style={{ fontSize: size * 0.32 }}>creative</span>
      )}
    </span>
  );
}

// ============================================================
// NAV
// ============================================================
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={close}>
          <Wordmark size={34} />
        </a>
        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="#about" className="link" onClick={close}>About</a>
          <a href="#speaking" className="link" onClick={close}>Speaking</a>
          <a href="#services" className="btn sm" onClick={close}>
            <span style={{ fontSize: 16 }}>✦</span> Work with me
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// HERO - two layouts
// ============================================================
function HeroBigType({ onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-tags">
          <span className="tag">@_joytothefood_ · 500K</span>
          <span className="tag" style={{ background: 'var(--c2)' }}>1,001 to 500K in 24 months</span>
          <span className="tag" style={{ background: 'var(--c5)' }}>by food creators, for food creators</span>
        </div>

        <h1 className="display hero-headline">
          instagram<br />
          that <span style={{ color: 'var(--c1)' }}>actually</span><br />
          <span style={{ color: 'var(--c3)' }}>works.</span>
        </h1>

        <div className="hero-grid">
          <p className="hero-body">
            I'm Mika - engineer turned food creator. I grew <span className="mono" style={{ fontSize: '0.85em' }}>@_joytothefood_</span> from 1,001 to 500K in two years, in the current algorithm, in a saturated niche, with a two-person team. Not in 2016 when Instagram was easy. Now.
            <br /><br />
            I'll show you exactly what moved the needle.
          </p>
          <div className="hero-cta-stack">
            <button className="btn alt" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's work together →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImageGrid({ onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const photos = [
    { c: 'var(--c2)', label: '1K screenshot · 2024' },
    { c: 'var(--c3)', label: 'reel · 2.1M views' },
    { c: 'var(--c1)', label: 'mika filming' },
    { c: 'var(--c4)', label: '500K screenshot · now' },
    { c: 'var(--c5)', label: 'mika + dan' },
  ];
  return (
    <section id="top" style={{ paddingTop: 32, paddingBottom: 16 }}>
      <div className="container">
        <div className="hero-photos">
          {photos.map((p, i) => (
            <div key={i} className="photo" style={{ background: p.c }}>
              <span className="label">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-image-grid-content">
          <span className="eyebrow">@_joytothefood_ · 500K followers · 10M monthly views</span>
          <h1 className="display hero-image-grid-headline">
            <span style={{ color: 'var(--c1)' }}>instagram</span> that<br />
            <span style={{ color: 'var(--c3)' }}>actually</span> works.
          </h1>
          <p className="hero-image-grid-sub">
            I grew @_joytothefood_ from 1K to 500K in 24 months, in the current algorithm, in a saturated niche. I'll show you how.
          </p>
          <div className="hero-image-grid-cta">
            <button className="btn alt" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's work together →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROOF BAR - the receipts
// ============================================================
function ProofBar() {
  const stats = [
    { num: '500K', label: 'IG followers' },
    { num: '10M', label: 'monthly views' },
    { num: '#1', label: 'revenue source' },
    { num: '4', label: 'speaking engagements' },
    { num: '10', label: 'podcast features' },
  ];
  const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)'];
  return (
    <section className="proof-bar">
      <div className="container">
        <div className="proof-bar-grid">
          {stats.map((s, i) => (
            <div key={i} className="proof-bar-stat">
              <div className="display proof-bar-num" style={{ color: colors[i] }}>{s.num}</div>
              <div className="mono proof-bar-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MARQUEE STRIP
// ============================================================
function Strip() {
  const items = [
    'the mastermind', 'account audit', 'in your pocket day',
    'client management', 'the playbook ebook', '1k → 500K in 24 months',
  ];
  const Set = () => (
    <span>
      {items.map((t, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 36 }}>
          {t}<span className="strip-dot" />
        </span>
      ))}
    </span>
  );
  return (
    <div className="strip">
      <div className="strip-track">
        <Set /><Set /><Set /><Set />
      </div>
    </div>
  );
}

// ============================================================
// SERVICES - 5 offers
// ============================================================
const SERVICES = [
  {
    id: 'mastermind',
    tag: '01 / mastermind',
    color: 'var(--c3)',
    title: 'The Jam Session',
    price: '$249/mo',
    sub: '3 month commitment',
    badge: '3 spots left · July–September',
    badgeLines: ['3 spots', 'left', 'Jul–Sep'],
    shadowClass: 'btn-shadow-c2',
    blurb: "A small-group mastermind for food and lifestyle creators who are serious about building something real, and want a room full of people who actually get it. Monthly calls. Weekly hook ideas. Discord community. Me, actually in there with you!",
    bullets: ['Monthly group call (live, recorded, nothing off-limits)', 'Weekly hook ideas dropped straight into your Discord channel', 'A Discord community of creators at your exact stage', 'Direct access to Mika in Discord', 'Guest speaker once a quarter', 'Capped at 10 members'],
    savingsNote: 'Pay 3 months upfront and save 5%',
    cta: 'Apply now',
    detailsCta: 'Tell me more',
  },
  {
    id: 'audit',
    tag: '02 / audit',
    color: 'var(--c1)',
    title: 'The Audit',
    price: '$950',
    trialPrice: '$475',
    trialNote: 'Trial audits are 50% off',
    sub: '1 week turnaround',
    badge: '1 trial spot left',
    badgeLines: ['1 trial', 'spot left'],
    shadowClass: 'btn-shadow-c3',
    blurb: "I go through your entire Instagram like I'd go through my own, looking at hooks, content strategy, monetization gaps, and profile. You get a recorded video walkthrough and a written action plan you can start using the same week.",
    bullets: ['Recorded video walkthrough', 'Hook + content analysis', 'Monetization gaps', 'Written action plan', '1 week delivery'],
    cta: 'Book your audit',
    details: {
      eyebrow: 'What to expect when you book',
      timeline: [
        { n: 1, label: 'Book',           sub: 'Pick a time, share a few details, pay' },
        { n: 2, label: 'Intake',         sub: 'Welcome email with your Drive folder + intake form, within 24 hrs' },
        { n: 3, label: 'Kickoff call',   sub: '30 min on Zoom, within 24 business hrs of your intake' },
        { n: 4, label: 'Your audit',     sub: 'Delivered within 7 business days of the kickoff' },
        { n: 5, label: 'Optional debrief', sub: '30-min walkthrough call, included' },
      ],
      prep: {
        title: 'what you\'ll do',
        intro: 'Most of the work happens before our kickoff call. Plan to spend about 30–45 minutes on intake, the more context I have, the sharper the audit.',
        items: [
          'Fill out a short intake form about your goals, niche, and what\'s been working (and what hasn\'t)',
          'Export your Meta Business Suite data (last 90 days), full instructions in your welcome email',
          'Take a handful of Instagram Insights screenshots from the app',
          'Drop 5 reels that underperformed that you were expecting to do well.',
        ],
      },
      deliverables: {
        title: 'what you\'ll get',
        items: [
          { label: 'Recorded Loom walkthrough (25–35 min)', sub: 'Your profile, content patterns, hook breakdowns, monetization gaps, and the top 3 priorities to tackle first.' },
          { label: 'Written action plan (Google Doc)',     sub: 'Includes immediate priorities, content recommendations, monetization opportunities, profile fixes, and one thing to stop doing immediately.' },
          { label: 'Optional 30-min debrief call',          sub: 'Walk through the audit live and ask questions in real time. Included, no extra charge.' },
        ],
      },
    },
  },
  {
    id: 'audit-plus',
    tag: '03 / audit+',
    color: 'var(--c4)',
    title: 'The Audit + Pre-Post Reviews',
    price: '$1,100',
    trialPrice: '$550',
    trialNote: 'Trial audits are 50% off',
    sub: '1 week audit + 30 days of reviews',
    badge: '1 trial spot left',
    badgeLines: ['1 trial', 'spot left'],
    shadowClass: 'btn-shadow-c1',
    blurb: "Everything in the audit, plus you send me up to 4 reels before you post and I'll review them before they go live. The audit tells you what to fix. The pre-post reviews make sure you're actually fixing it.",
    bullets: ['Everything in The Audit', 'Up to 4 pre-post reel reviews', 'Hook, lighting + caption feedback', '30 days to use your reviews'],
    cta: 'Book your audit+',
    details: {
      eyebrow: 'What to expect when you book',
      timeline: [
        { n: 1, label: 'Book',           sub: 'Pick a time, share a few details, pay' },
        { n: 2, label: 'Intake',         sub: 'Welcome email with your Drive folder + intake form, within 24 hrs' },
        { n: 3, label: 'Kickoff call',   sub: '30 min on Zoom, within 24 business hrs of your intake' },
        { n: 4, label: 'Your audit',     sub: 'Delivered within 7 business days of the kickoff' },
        { n: 5, label: 'Optional debrief', sub: '30-min walkthrough call, included' },
      ],
      prep: {
        title: 'what you\'ll do',
        intro: 'Most of the work happens before our kickoff call. Plan to spend about 30–45 minutes on intake, the more context I have, the sharper the audit.',
        items: [
          'Fill out a short intake form about your goals, niche, and what\'s been working (and what hasn\'t)',
          'Export your Meta Business Suite data (last 90 days), full instructions in your welcome email',
          'Take a handful of Instagram Insights screenshots from the app',
          'Drop 5 reels that underperformed that you were expecting to do well.',
        ],
      },
      deliverables: {
        title: 'what you\'ll get',
        items: [
          { label: 'Recorded Loom walkthrough (25–35 min)', sub: 'Your profile, content patterns, hook breakdowns, monetization gaps, and the top 3 priorities to tackle first.' },
          { label: 'Written action plan (Google Doc)',     sub: 'Includes immediate priorities, content recommendations, monetization opportunities, profile fixes, and one thing to stop doing immediately.' },
          { label: 'Optional 30-min debrief call',          sub: 'Walk through the audit live and ask questions in real time. Included, no extra charge.' },
        ],
      },
    },
    extras: {
      title: 'plus 4 pre-post reel reviews',
      body: 'You\'ve got 30 days from delivery to use 4 pre-post reviews. When you have a reel ready, drop it in your Drive folder with a quick note on your planned text overlay, voice hook, and caption first line. I\'ll get back to you within 5 business days with notes covering hook strength, lighting, clip pacing, and what to fix before you post.',
      bullets: [],
    },
  },
  {
    id: 'pocket',
    tag: '04 / 1:1',
    color: 'var(--c4)',
    title: 'In Your Pocket Day',
    price: '$1,000',
    sub: 'standalone',
    comingSoon: true,
    blurb: "One full day of direct access via Voxer or WhatsApp. Film, send, get feedback, in real time.",
    bullets: ['8 hrs of Voxer/WhatsApp', 'Real-time content feedback', 'Hook + caption rewrites', 'Lighting & shot review'],
    cta: 'Grab your day',
  },
];

const EBOOKS = [
  {
    id: 'ebook-grow',
    tag: '04 / ebook for growers',
    color: 'var(--c2)',
    title: 'Grow Your Food Insta',
    subtitle: 'For 0 to 25K',
    price: '$37',
    sub: 'instant download',
    comingSoon: true,
    blurb: "The growth playbook. Hook formula, content pillars, posting cadence, the exact reel structure I used to go from 1,001 to my first 25K followers. For creators just getting started or stuck under 25K.",
    bullets: ['The hook stacking method', 'Content pillar framework', '12 reel templates', 'My posting cadence + schedule', 'Lifetime updates'],
    cta: 'Get the growth ebook',
  },
  {
    id: 'ebook-monetize',
    tag: '05 / ebook for earners',
    color: 'var(--c5)',
    title: 'Monetize Your Following',
    subtitle: 'For 25K and up',
    price: '$59',
    sub: 'instant download',
    comingSoon: true,
    blurb: "For creators with 25K+ who are tired of $200 brand deals. Real rate cards, pitch templates, contract redlines, AI workflows, and the multiple income streams you should be building beyond sponsorships.",
    bullets: ['Pitch + rate card templates', 'Contract redline guide', 'My AI prompt workflows', 'Multi stream revenue map', 'Lifetime updates'],
    cta: 'Get the monetize ebook',
  },
];

function ScarcityBadge({ lines }) {
  const POINTS = "50,2 57,8 65,4 70,12 78,11 80,20 89,22 88,31 96,35 93,43 98,50 93,57 96,65 88,70 89,79 80,80 78,89 70,88 65,96 57,93 50,98 43,93 35,96 31,88 22,89 20,80 11,79 12,70 4,65 8,57 2,50 8,43 4,35 12,31 11,22 20,20 22,11 31,12 35,4 43,8";
  const n = lines.length;
  const yPositions = n === 1 ? [50] : n === 2 ? [44, 57] : [40, 50, 61];
  return (
    <div className="scarcity-badge-sticker">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points={POINTS} fill="var(--c2)" />
        {lines.map((line, i) => (
          <text
            key={i}
            x="50"
            y={yPositions[i]}
            textAnchor="middle"
            fontSize={n <= 2 ? "12" : "11"}
            fontWeight="700"
            fill="var(--ink)"
            fontFamily="'DM Mono', ui-monospace, monospace"
          >
            {line.toUpperCase()}
          </text>
        ))}
      </svg>
    </div>
  );
}

function ServiceCard({ s, featured, compact, onBook, onSeeDetails, onWaitlist }) {
  const isComingSoon = s.comingSoon;

  return (
    <div
      className={`card service-card ${featured ? 'featured' : ''} ${compact ? 'compact' : ''}`}
      style={{
        background: featured ? s.color : 'var(--card)',
        opacity: isComingSoon ? 0.55 : 1,
        filter: isComingSoon ? 'grayscale(0.7)' : 'none',
      }}
      onMouseEnter={(e) => {
        if (isComingSoon) {
          e.currentTarget.style.opacity = '0.85';
          e.currentTarget.style.filter = 'grayscale(0.3)';
        }
      }}
      onMouseLeave={(e) => {
        if (isComingSoon) {
          e.currentTarget.style.opacity = '0.55';
          e.currentTarget.style.filter = 'grayscale(0.7)';
        }
      }}>
      {isComingSoon && (
        <div className="service-card-badge coming-soon">Coming soon</div>
      )}
      {s.badge && s.badgeLines && (
        <ScarcityBadge lines={s.badgeLines} />
      )}

      <div className="service-card-tag-row">
        <span className="tag" style={{ background: featured ? 'var(--bg)' : s.color }}>{s.tag}</span>
      </div>

      {!isComingSoon && (
        <div className="service-card-price-block">
          <div className="service-card-price-row">
            <div className="display service-card-price">
              {s.trialPrice ? (
                <><span className="service-card-price-was">{s.price}</span>{s.trialPrice}</>
              ) : s.price}
            </div>
            {s.sub && <div className="mono service-card-price-sub">{s.sub}</div>}
          </div>
          {s.trialNote && <div className="mono service-card-trial-note">{s.trialNote}</div>}
          {s.savingsNote && <div className="mono service-card-savings-note">{s.savingsNote}</div>}
        </div>
      )}

      <h3 className="display service-card-title">
        {s.title}
        {s.subtitle && <div className="service-card-subtitle">{s.subtitle}</div>}
      </h3>

      <p className="service-card-blurb">{s.blurb}</p>

      <ul className="service-card-bullets">
        {s.bullets.map((b, i) => (
          <li key={i} className="service-card-bullet">
            <span className="service-card-check" style={{
              background: featured ? 'var(--ink)' : s.color,
              color: featured ? s.color : 'var(--ink)',
            }}>✓</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="service-card-cta-wrap">
        {isComingSoon ? (
          <div className="mono service-card-coming-note" style={{
            color: featured ? 'var(--ink)' : 'var(--ink-soft)',
            borderTop: featured ? '1.5px dashed var(--ink)' : '1.5px dashed var(--ink-soft)',
          }}>
            Launching soon
          </div>
        ) : (
          <div className="service-card-cta-row">
            <button
              className={`btn sm${featured && s.shadowClass ? ` ${s.shadowClass}` : ''}`}
              onClick={() => onBook && onBook(s)}
              style={{
                background: featured ? 'var(--ink)' : s.color,
                color: featured ? 'var(--bg)' : 'var(--ink)',
              }}
            >
              {s.cta} →
            </button>
            {(s.details || s.detailsCta) && (
              <button
                className="btn sm btn-ghost"
                onClick={() => onSeeDetails && onSeeDetails(s)}
              >
                {s.detailsCta || 'What to expect'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Services({ onBook, onSeeDetails }) {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <div className="services-header-text">
            <span className="eyebrow">by food creators, for food creators</span>
            <h2 className="display services-headline">
              find your <span style={{ color: 'var(--c1)' }}>fit.</span>
            </h2>
            <p className="services-sub">
              The Jam Session is the ongoing room, with monthly calls, weekly hook ideas, a Discord community, and me in there with you.
            </p>
          </div>
        </div>

        {/* ROW 1: Mastermind — full width, featured */}
        <div className="services-grid-single">
          <ServiceCard s={SERVICES.find(s => s.id === 'mastermind')} featured onBook={onBook} onSeeDetails={onSeeDetails} />
        </div>

        <div className="services-divider">
          <span className="mono services-divider-label">Coming soon</span>
          <div className="services-divider-line"></div>
        </div>

        {/* ROW 4: Pocket Day — full width, compact */}
        <div className="services-grid-single">
          <ServiceCard s={SERVICES.find(s => s.id === 'pocket')} compact onBook={onBook} onSeeDetails={onSeeDetails} />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photos">
            <div className="photo has-image about-photo-main">
              <img src="images/mika-headshot.jpg" alt="Mika Kinney" className="photo-img" loading="lazy" />
            </div>
            <div className="about-photo-grid">
              <div className="photo has-image">
                <img src="images/dan-mika-about.webp" alt="Mika and Dan" className="photo-img" loading="lazy" />
              </div>
              <div className="photo has-image">
                <img src="images/filming-photo.webp" alt="Mika filming behind the scenes" className="photo-img" loading="lazy" />
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">about</span>
            <h2 className="display about-headline">
              hi, I'm <span style={{ color: 'var(--c1)' }}>mika.</span>
            </h2>
            <div className="about-text">
              <p>
                I grew up in <strong style={{ color: 'var(--ink)' }}>Yosemite</strong>. Studied engineering. Worked corporate. Quit twice. Once to backpack Southeast Asia with my husband Dan, once to road trip the Southwest.
              </p>
              <p>
                We started <strong style={{ color: 'var(--ink)' }}>Joy to the Food</strong> from my kitchen in Minneapolis. In two years it went from 1,001 followers to 500K. Now we run it from wherever we want, with a toddler underfoot.
              </p>
              <p className="about-text-emph">
                My philosophy: <span style={{ color: 'var(--c3)' }}>engineer the life you want.</span>
              </p>
              <p>
                I treat Instagram like a system, not a guessing game. Hooks, content pillars, AI workflows, revenue streams. All engineered, all repeatable. That's what I teach.
              </p>
            </div>
            <div className="about-stickers">
              <span className="sticker" style={{ background: 'var(--c1)', transform: 'rotate(-2deg)' }}>nutrition coach</span>
              <span className="sticker" style={{ background: 'var(--c3)', transform: 'rotate(1deg)' }}>food creator</span>
              <span className="sticker" style={{ background: 'var(--c4)', transform: 'rotate(-1deg)' }}>ig strategist</span>
              <span className="sticker" style={{ background: 'var(--c5)', transform: 'rotate(2deg)' }}>engineer brain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FREEBIE / LEAD MAGNET
// ============================================================
function Freebie() {
  return (
    <section id="freebie" className="freebie">
      <div className="container">
        <div className="card freebie-card">
          <div className="freebie-content">
            <span className="tag" style={{ background: 'var(--bg)' }}>Free download</span>
            <h2 className="display freebie-headline">
              the hook formula<br />that got me to <span style={{ color: 'var(--c1)' }}>500K.</span>
            </h2>
            <p className="freebie-sub">
              The exact hook stacking method I use on every reel. 12 page PDF. No newsletter, no sales sequence. Drop your email, get the file.
            </p>
            <form className="freebie-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="freebie-input"
              />
              <button type="submit" className="btn">Send it →</button>
            </form>
            <p className="mono freebie-disclaimer">
              One and done delivery. I don't run a newsletter.
            </p>
          </div>
          <div className="freebie-visual">
            <div className="photo freebie-pdf">
              <span className="label">PDF cover preview</span>
            </div>
            <div className="sticker freebie-sticker">
              free · 12 pages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIALS
// ============================================================
const TESTIMONIALS = [
  {
    quote: "Mika Kinney spoke to my mastermind group and instantly lit a fire under every single person on the call. Her approach to Instagram growth is not just inspiring, it's incredibly actionable. She is deep in the details, testing what works in real time, and it shows. Our group walked away with clarity, excitement and a desire to grow their accounts. Mika truly knows her stuff and delivers it in a way that makes you want to take action immediately.",
    name: "Megan Porta",
    role: "Food creator · Pip & Ebby · Eat Blog Talk podcast",
    color: 'var(--c3)',
    image: 'images/megan-porta.jpeg',
  },
  {
    quote: "I cannot stop talking about WHAT A FREAKIN INSPIRATION you are!!! I have SO SO SO enjoyed seeing your journey over the years, and seeing you absolutely CRUSH it here on IG. You have totally cracked the code!!!",
    name: "Lindsey",
    role: "Food creator · A Recipe for Fun",
    color: 'var(--c2)',
    image: 'images/lindsey.jpg',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="eyebrow" style={{ color: 'var(--c2)' }}>
            <span style={{ background: 'var(--c2)', width: 24, height: 2, display: 'inline-block', marginRight: 10 }}></span>
            What folks are saying
          </span>
          <h2 className="display testimonials-headline">
            cracked the <span style={{ color: 'var(--c1)' }}>code.</span>
          </h2>
        </div>

        <div className="testimonials-stack">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card" style={{ background: t.color }}>
              <div className="testimonial-mark-side">
                {t.image ? (
                  <img className="testimonial-avatar" src={t.image} alt={t.name} loading="lazy" />
                ) : (
                  <div className="display testimonial-mark">"</div>
                )}
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="mono testimonial-role">{t.role}</div>
                </div>
              </div>
              <div className="testimonial-quote-side">
                <p className="testimonial-quote">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-note">
          <span style={{ fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 11, opacity: 0.7 }}>
            More to come, first audits are wrapping now.
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BOOKING FORM (used in Speaking section)
// ============================================================
function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', org: '', date: '', type: 'Conference', message: '' });
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="booking-form-success">
        <h4 className="display booking-form-success-title">got it!</h4>
        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.5 }}>I'll be in touch within 48 hours. Looking forward to it.</p>
      </div>
    );
  }

  return (
    <form
      className="booking-form"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <div className="mono booking-form-eyebrow">booking inquiry</div>

      <div className="booking-form-row-2">
        <div>
          <label className="booking-form-label">your name</label>
          <input required className="booking-form-input" value={form.name} onChange={e => update('name', e.target.value)} />
        </div>
        <div>
          <label className="booking-form-label">email</label>
          <input required type="email" className="booking-form-input" value={form.email} onChange={e => update('email', e.target.value)} />
        </div>
      </div>

      <div className="booking-form-row-asym">
        <div>
          <label className="booking-form-label">company / podcast / event</label>
          <input className="booking-form-input" value={form.org} onChange={e => update('org', e.target.value)} />
        </div>
        <div>
          <label className="booking-form-label">date (approx)</label>
          <input className="booking-form-input" value={form.date} onChange={e => update('date', e.target.value)} placeholder="e.g. June 2026" />
        </div>
      </div>

      <div>
        <label className="booking-form-label">type</label>
        <div className="booking-form-types">
          {['Conference', 'Podcast', 'Workshop', 'Other'].map(t => (
            <button
              type="button"
              key={t}
              onClick={() => update('type', t)}
              className="booking-form-type"
              style={{ background: form.type === t ? 'var(--c5)' : 'var(--bg)' }}
            >{t}</button>
          ))}
        </div>
      </div>

      <div>
        <label className="booking-form-label">tell me about it</label>
        <textarea
          rows={3}
          className="booking-form-input booking-form-textarea"
          value={form.message}
          onChange={e => update('message', e.target.value)}
          placeholder="Audience size, topic ideas, format, anything else"
        />
      </div>

      <button type="submit" className="btn btn-shadow-c2">Send inquiry →</button>
    </form>
  );
}


function Speaking() {
  return (
    <section id="speaking" className="speaking">
      <div className="container">
        <div className="speaking-grid">
          <div>
            <span className="eyebrow">speaking & media</span>
            <h2 className="display speaking-headline">
              book me to <span style={{ color: 'var(--c5)' }}>speak.</span>
            </h2>
            <p className="speaking-sub">
              I've spoken to hundreds of food creators at conferences and on podcasts. It's truly my passion and I'd love to share it with your audience.
            </p>

            <BookingForm />
          </div>

          <div className="card speaking-talk-card">
            <span className="tag" style={{ background: 'var(--bg)' }}>Signature talk</span>
            <h3 className="display speaking-talk-title">
              Instagram That Actually Works:<br />
              <span style={{ color: 'var(--bg)' }}>Hooks, Revenue & AI</span>
            </h3>
            <p className="speaking-talk-body">
              Most food creators are working harder than they need to and monetizing less than they should. Not because their content is bad, but because they haven't found the strategy yet.
            </p>
            <p className="speaking-talk-body">
              This session covers the three levers that actually move the needle: hooks that stop the scroll, a content system built for multiple revenue streams, and AI workflows that let a small team operate like a big one.
            </p>
            <p className="speaking-talk-body" style={{ fontWeight: 600, marginBottom: 0 }}>
              You'll leave with a roadmap. Not inspiration. Something you can use Monday morning.
            </p>

            <div className="speaking-talk-tags">
              {['hook stacking', 'carousel formula', 'AI prompts', 'monetization', 'small team workflow'].map(t => (
                <span key={t} className="tag" style={{ fontSize: 10, background: 'var(--bg)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT / FOOTER
// ============================================================
function ContactCTA({ onWaitlist, phase }) {
  const closed = phase === 'closed';
  return (
    <section id="contact" className="contact-cta">
      <div className="container contact-cta-inner">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>let's go</span>
        <h2 className="display contact-cta-headline">
          {closed ? (
            <>the challenge has <span style={{ color: 'var(--c1)' }}>started!</span></>
          ) : (
            <>done <span style={{ color: 'var(--c1)' }}>guessing?</span><br />
            let's <span style={{ color: 'var(--c3)' }}>fix that.</span></>
          )}
        </h2>
        <p className="contact-cta-sub">
          {closed
            ? "Enrollment for this round is closed. Follow along on Instagram and keep an eye out for the next one!"
            : "Join our Grow with Joy 30 day challenge for a jump start on your Instagram growth. For food creators by food creators."}
        </p>
        <div className="contact-cta-btns">
          {closed ? (
            <a href="https://instagram.com/_joytothefood_" target="_blank" rel="noopener noreferrer" className="btn contact-cta-btn" style={{ background: 'var(--c3)' }}>
              follow on Instagram →
            </a>
          ) : (
            <button className="btn contact-cta-btn" onClick={() => onWaitlist && onWaitlist()} style={{ background: 'var(--c3)' }}>
              sign me up!
            </button>
          )}
        </div>
        <a href="mailto:mika@joytothefood.com" className="link" style={{
          fontSize: 14,
          color: 'var(--ink-soft)',
          borderBottom: '1.5px dotted var(--ink-soft)',
        }}>
          Or just email me
        </a>
      </div>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <Wordmark size={28} />
          <div className="mono site-footer-meta">
            © 2026 mika creative · for food creators who mean it
          </div>
          <div className="site-footer-links">
            <a href="https://instagram.com/_joytothefood_" className="link">@_joytothefood_</a>
            <a href="mailto:mika@joytothefood.com" className="link">Email</a>
            <a href="/terms.html" className="link">Terms</a>
          </div>
        </div>
      </footer>
    </section>
  );
}


// expose to window
Object.assign(window, {
  Wordmark, Nav,
  HeroBigType, HeroImageGrid,
  ProofBar, Strip, Services, About, Freebie, Testimonials, BookingForm, Speaking, ContactCTA,
});
