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
function Nav({ onOpenQuiz }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--bg)',
      borderBottom: '2px solid var(--ink)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 76,
      }}>
        <a href="#top" style={{ textDecoration: 'none' }}>
          <Wordmark size={34} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href="#services" className="link" style={{ borderBottom: 'none' }}>Work with me</a>
          <a href="#about" className="link" style={{ borderBottom: 'none' }}>About</a>
          <a href="#speaking" className="link" style={{ borderBottom: 'none' }}>Speaking</a>
          <button className="btn sm" onClick={onOpenQuiz}>
            <span style={{ fontSize: 16 }}>✦</span> Find your fit
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================================
// HERO - two layouts
// ============================================================
function HeroBigType({ onOpenQuiz, onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  return (
    <section id="top" style={{ paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
          <span className="tag">@_joytothefood_ · 440K</span>
          <span className="tag" style={{ background: 'var(--c2)' }}>1,001 to 440K in 24 months</span>
        </div>

        <h1 className="display" style={{
          fontSize: 'clamp(60px, 9.5vw, 156px)',
          margin: 0,
          letterSpacing: '-0.025em',
        }}>
          instagram<br />
          that <span style={{ color: 'var(--c1)' }}>actually</span><br />
          <span style={{ color: 'var(--c3)' }}>works.</span>
        </h1>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48,
          marginTop: 48, alignItems: 'end',
        }}>
          <p style={{
            fontSize: 22, lineHeight: 1.4, margin: 0, maxWidth: 640,
            color: 'var(--ink-soft)',
          }}>
            I'm Mika - engineer turned food creator. I grew <span className="mono" style={{ fontSize: 18 }}>@_joytothefood_</span> from 1,001 to 440K in two years, in the current algorithm, in a saturated niche, with a two-person team. Not in 2016 when Instagram was easy. Now.
            <br /><br />
            I'll show you exactly what moved the needle.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <button className="btn alt" onClick={() => onBook && onBook(audit)}>
              Book your audit — $950 →
            </button>
            <button onClick={onOpenQuiz} className="link" style={{
              fontSize: 14, background: 'none', border: 'none', borderBottom: '2px dotted var(--ink)',
              padding: 0, paddingBottom: 1, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
            }}>
              not sure yet? take the 30-sec quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImageGrid({ onOpenQuiz, onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const photos = [
    { c: 'var(--c2)', label: '1K screenshot · 2024' },
    { c: 'var(--c3)', label: 'reel · 2.1M views' },
    { c: 'var(--c1)', label: 'mika filming' },
    { c: 'var(--c4)', label: '440K screenshot · now' },
    { c: 'var(--c5)', label: 'mika + dan' },
  ];
  return (
    <section id="top" style={{ paddingTop: 32, paddingBottom: 16 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 14,
          height: 280,
          marginBottom: 56,
        }}>
          {photos.map((p, i) => (
            <div key={i} className="photo" style={{
              background: p.c,
              transform: i % 2 ? 'translateY(12px)' : 'translateY(-8px)',
              border: '2px solid var(--ink)',
            }}>
              <span className="label">{p.label}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', maxWidth: 980, margin: '0 auto' }}>
          <span className="eyebrow">@_joytothefood_ · 440k followers · 5.1M monthly views</span>
          <h1 className="display" style={{
            fontSize: 'clamp(56px, 8vw, 128px)',
            margin: '20px 0 28px',
            letterSpacing: '-0.025em',
          }}>
            <span style={{ color: 'var(--c1)' }}>instagram</span> that<br />
            <span style={{ color: 'var(--c3)' }}>actually</span> works.
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.4, color: 'var(--ink-soft)', maxWidth: 620, margin: '0 auto 32px' }}>
            I grew @_joytothefood_ from 1K to 440K in 24 months, in the current algorithm, in a saturated niche. I'll show you how.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn alt" onClick={() => onBook && onBook(audit)}>
              Book your audit — $950
            </button>
            <button onClick={onOpenQuiz} className="btn ghost" style={{ fontFamily: 'inherit' }}>
              Not sure? Take the quiz
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
    { num: '440K', label: 'IG followers' },
    { num: '5.1M', label: 'monthly views' },
    { num: '#1', label: 'revenue source' },
    { num: '4', label: 'speaking engagements' },
    { num: '3', label: 'podcast features' },
  ];
  return (
    <section style={{ padding: '48px 0', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 32,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ borderLeft: i === 0 ? 'none' : '1.5px solid var(--ink)', paddingLeft: i === 0 ? 0 : 24 }}>
              <div className="display" style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1,
                color: ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)'][i],
                letterSpacing: '-0.02em',
              }}>{s.num}</div>
              <div className="mono" style={{ fontSize: 11, marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)' }}>
                {s.label}
              </div>
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
    'client management', 'the playbook ebook', '1k → 440k in 24 months',
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
    tag: '03 / mastermind',
    color: 'var(--c3)',
    title: 'The Mastermind',
    price: '$350/mo',
    sub: 'or $3,500/year',
    comingSoon: true,
    blurb: "A small cohort of food and lifestyle creators who are serious about turning content into income. Monthly 90 minute group calls, hot seat reviews, private community, and direct access to my current strategy in real time. This is where the deepest work happens.",
    bullets: ['Monthly 90 min group call', 'Hot seat account reviews', 'Private community access', 'Discounted In Your Pocket Days'],
    cta: 'Apply for next cohort',
  },
  {
    id: 'audit',
    tag: '01 / audit',
    color: 'var(--c1)',
    title: 'The Audit',
    price: '$950',
    sub: '5 day turnaround',
    available: true,
    blurb: "I go through your entire Instagram like I'd go through my own — hooks, content strategy, monetization gaps, profile. You get a recorded video walkthrough and a written action plan you can start using the same week.",
    bullets: ['Recorded video walkthrough', 'Hook + content analysis', 'Monetization gaps', 'Written action plan', '5 business day delivery'],
    cta: 'Book your audit',
  },
  {
    id: 'audit-plus',
    tag: '02 / audit+',
    color: 'var(--c4)',
    title: 'The Audit + Pre-Post Reviews',
    price: '$1,100',
    sub: '5 day audit + 30 days of reviews',
    available: true,
    blurb: "Everything in the audit, plus you send me up to 4 reels before you post and I'll review them before they go live. The audit tells you what to fix. The pre-post reviews make sure you're actually fixing it.",
    bullets: ['Everything in The Audit', 'Up to 4 pre-post reel reviews', 'Hook, lighting + caption feedback', 'Async via Voxer or Google Drive', '30 days to use your reviews'],
    cta: 'Book your audit+',
  },
  {
    id: 'pocket',
    tag: '04 / 1:1',
    color: 'var(--c4)',
    title: 'In Your Pocket Day',
    price: '$1,000',
    sub: 'standalone',
    comingSoon: true,
    blurb: "One full day of real time access via Voxer or WhatsApp. Film, send, get feedback, adjust, in real time. Hook rewrites, lighting feedback, caption help, whatever comes up. It's like having me in your kitchen for the day.",
    bullets: ['8 hrs of Voxer/WhatsApp access', 'Real time content feedback', 'Hook + caption rewrites', 'Lighting & shot review'],
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

function ServiceCard({ s, featured, onBook, onWaitlist }) {
  const isComingSoon = s.comingSoon;
  const isAvailable = s.available;

  return (
    <div className="card" style={{
      padding: featured ? 40 : 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'relative',
      background: featured ? s.color : 'var(--card)',
      opacity: isComingSoon ? 0.55 : 1,
      filter: isComingSoon ? 'grayscale(0.7)' : 'none',
      transition: 'opacity 0.25s, filter 0.25s',
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
      {/* Coming soon corner ribbon */}
      {isComingSoon && (
        <div style={{
          position: 'absolute',
          top: featured ? 20 : 16,
          right: featured ? 20 : 16,
          background: 'var(--ink)',
          color: 'var(--bg)',
          fontSize: 10,
          fontFamily: 'var(--mono)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '6px 10px',
          borderRadius: 999,
          fontWeight: 700,
          zIndex: 2,
        }}>
          Coming soon
        </div>
      )}

      {/* Available badge for the live one */}
      {isAvailable && (
        <div style={{
          position: 'absolute',
          top: featured ? 20 : 16,
          right: featured ? 20 : 16,
          background: '#1a8870',
          color: 'white',
          fontSize: 10,
          fontFamily: 'var(--mono)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '6px 10px',
          borderRadius: 999,
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          zIndex: 2,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'white',
            animation: 'pulse 2s infinite',
          }}/>
          Available now
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, paddingRight: 110 }}>
        <span className="tag" style={{ background: featured ? 'var(--bg)' : s.color }}>{s.tag}</span>
      </div>

      {!isComingSoon && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <div className="display" style={{ fontSize: featured ? 40 : 30, lineHeight: 1 }}>{s.price}</div>
          {s.sub && <div className="mono" style={{ fontSize: 11, color: featured ? 'var(--ink)' : 'var(--ink-soft)', opacity: 0.8 }}>{s.sub}</div>}
        </div>
      )}

      <h3 className="display" style={{
        fontSize: featured ? 52 : 34,
        margin: 0,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>
        {s.title}
        {s.subtitle && <div style={{ fontSize: '0.5em', color: featured ? 'var(--ink)' : 'var(--ink-soft)', marginTop: 6, opacity: 0.75 }}>{s.subtitle}</div>}
      </h3>

      <p style={{ fontSize: featured ? 17 : 14, lineHeight: 1.5, margin: 0, color: featured ? 'var(--ink)' : 'var(--ink-soft)' }}>
        {s.blurb}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {s.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, alignItems: 'center' }}>
            <span style={{
              width: 18, height: 18, borderRadius: '50%',
              background: featured ? 'var(--ink)' : s.color,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: featured ? s.color : 'var(--ink)',
              fontSize: 11, fontWeight: 700, flexShrink: 0,
            }}>✓</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
        {isComingSoon ? (
          <div className="mono" style={{
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: featured ? 'var(--ink)' : 'var(--ink-soft)',
            padding: '14px 0 4px',
            borderTop: featured ? '1.5px dashed var(--ink)' : '1.5px dashed var(--ink-soft)',
            opacity: 0.7,
          }}>
            Launching soon
          </div>
        ) : (
          <button
            className="btn sm"
            onClick={() => onBook && onBook(s)}
            style={{
              background: featured ? 'var(--ink)' : s.color,
              color: featured ? 'var(--bg)' : 'var(--ink)',
            }}
          >
            {s.cta} →
          </button>
        )}
      </div>
    </div>
  );
}

function Services({ onOpenQuiz, onBook }) {
  return (
    <section id="services" style={{ padding: '120px 0 80px', background: 'var(--bg-alt)', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 760 }}>
            <span className="eyebrow">work with me</span>
            <h2 className="display" style={{
              fontSize: 'clamp(48px, 6vw, 88px)',
              margin: '16px 0 16px',
              letterSpacing: '-0.02em',
            }}>
              two ways to <span style={{ color: 'var(--c1)' }}>start.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-soft)', margin: 0, maxWidth: 580 }}>
              Both include a full audit. One includes me in your corner while you implement.
            </p>
          </div>
          <button className="btn" onClick={onOpenQuiz}>
            Curious if it's right for you? Take the quiz →
          </button>
        </div>

        {/* Live offers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          marginBottom: 32,
        }}>
          <ServiceCard s={SERVICES.find(s => s.id === 'audit')} featured onBook={onBook} />
          <ServiceCard s={SERVICES.find(s => s.id === 'audit-plus')} featured onBook={onBook} />
        </div>

        {/* Coming soon row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          margin: '48px 0 24px',
        }}>
          <span className="mono" style={{
            fontSize: 11, letterSpacing: '0.15em',
            textTransform: 'uppercase', fontWeight: 600,
            color: 'var(--ink-soft)',
          }}>
            Coming soon
          </span>
          <div style={{ flex: 1, height: 1.5, background: 'var(--ink)', opacity: 0.15 }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          <ServiceCard s={SERVICES.find(s => s.id === 'mastermind')} onBook={onBook} />
          <ServiceCard s={SERVICES.find(s => s.id === 'pocket')} onBook={onBook} />
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
    <section id="about" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="photo" style={{
              aspectRatio: '4/5',
              background: 'var(--c4)',
              boxShadow: '8px 8px 0 var(--ink)',
              border: '2px solid var(--ink)',
            }}>
              <span className="label">brand photo · mika</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div className="photo" style={{ aspectRatio: '1', background: 'var(--c2)', border: '2px solid var(--ink)' }}>
                <span className="label">mika + dan</span>
              </div>
              <div className="photo" style={{ aspectRatio: '1', background: 'var(--c5)', border: '2px solid var(--ink)' }}>
                <span className="label">filming BTS</span>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">about</span>
            <h2 className="display" style={{
              fontSize: 'clamp(44px, 5.5vw, 76px)',
              margin: '16px 0 24px',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}>
              hi, I'm <span style={{ color: 'var(--c1)' }}>mika.</span>
            </h2>
            <div style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink-soft)', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560 }}>
              <p style={{ margin: 0 }}>
                I grew up in <strong style={{ color: 'var(--ink)' }}>Yosemite</strong>. Studied engineering. Worked corporate. Quit twice. Once to backpack Southeast Asia with my husband Dan, once to road trip the Southwest.
              </p>
              <p style={{ margin: 0 }}>
                We started <strong style={{ color: 'var(--ink)' }}>Joy to the Food</strong> from my kitchen in Minneapolis. In two years it went from 1,001 followers to 440K. Now we run it from wherever we want, with a toddler underfoot.
              </p>
              <p style={{ margin: 0, fontSize: 22, color: 'var(--ink)', fontWeight: 600 }}>
                My philosophy: <span style={{ color: 'var(--c3)' }}>engineer the life you want.</span>
              </p>
              <p style={{ margin: 0 }}>
                I treat Instagram like a system, not a guessing game. Hooks, content pillars, AI workflows, revenue streams. All engineered, all repeatable. That's what I teach.
              </p>
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
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
    <section id="freebie" style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="card" style={{
          padding: '0',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          background: 'var(--c2)',
        }}>
          <div style={{ padding: '56px' }}>
            <span className="tag" style={{ background: 'var(--bg)' }}>Free download</span>
            <h2 className="display" style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              margin: '20px 0 16px',
              letterSpacing: '-0.02em',
            }}>
              the hook formula<br />that got me to <span style={{ color: 'var(--c1)' }}>440K.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 28, maxWidth: 480 }}>
              The exact hook stacking method I use on every reel. 12 page PDF. No newsletter, no sales sequence. Drop your email, get the file.
            </p>
            <form style={{ display: 'flex', gap: 10, flexWrap: 'wrap', maxWidth: 480 }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1, minWidth: 240,
                  padding: '14px 20px',
                  border: '2px solid var(--ink)',
                  borderRadius: 999,
                  fontSize: 15,
                  fontFamily: 'inherit',
                  background: 'var(--bg)',
                }}
              />
              <button type="submit" className="btn">Send it →</button>
            </form>
            <p className="mono" style={{ fontSize: 11, marginTop: 14, opacity: 0.6 }}>
              One and done delivery. I don't run a newsletter.
            </p>
          </div>
          <div style={{
            position: 'relative',
            background: 'var(--c1)',
            borderLeft: '2px solid var(--ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 40,
          }}>
            <div className="photo" style={{
              width: '70%', aspectRatio: '3/4',
              background: 'var(--bg)',
              transform: 'rotate(-4deg)',
              boxShadow: '8px 8px 0 var(--ink)',
            }}>
              <span className="label">PDF cover preview</span>
            </div>
            <div className="sticker" style={{
              position: 'absolute', top: 36, right: 36,
              transform: 'rotate(8deg)',
              background: 'var(--c3)',
            }}>
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
    quote: "I cannot stop talking about WHAT A FREAKIN INSPIRATION you are!!! I have SO SO SO enjoyed seeing your journey over the years, and seeing you absolutely CRUSH it here on IG. You have totally cracked the code!!!",
    name: "Lindsey",
    color: 'var(--c2)',
  },
];

function Testimonials() {
  const t = TESTIMONIALS[0];
  return (
    <section style={{ padding: '120px 0', background: 'var(--ink)', color: 'var(--bg)' }}>
      <div className="container">
        <div style={{ marginBottom: 56, maxWidth: 880 }}>
          <span className="eyebrow" style={{ color: 'var(--c2)' }}>
            <span style={{ background: 'var(--c2)', width: 24, height: 2, display: 'inline-block', marginRight: 10 }}></span>
            What folks are saying
          </span>
          <h2 className="display" style={{
            fontSize: 'clamp(48px, 6vw, 88px)',
            margin: '16px 0 0',
            letterSpacing: '-0.02em',
          }}>
            cracked the <span style={{ color: 'var(--c1)' }}>code.</span>
          </h2>
        </div>

        {/* Single featured testimonial */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: 0,
          alignItems: 'stretch',
          background: t.color,
          color: 'var(--ink)',
          border: '2px solid var(--bg)',
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: '8px 8px 0 var(--c1)',
        }}>
          {/* Left: giant mark */}
          <div style={{
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'rgba(0,0,0,0.04)',
            borderRight: '2px solid var(--ink)',
            gap: 24,
          }}>
            <div className="display" style={{
              fontSize: 'clamp(120px, 16vw, 220px)',
              lineHeight: 0.7,
              letterSpacing: '-0.05em',
              color: 'var(--ink)',
            }}>"</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4 }}>{t.name}</div>
              <div className="mono" style={{
                fontSize: 11, letterSpacing: '0.12em',
                textTransform: 'uppercase', opacity: 0.65, fontWeight: 600,
              }}>
                Fellow food creator
              </div>
            </div>
          </div>

          {/* Right: quote */}
          <div style={{
            padding: '48px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <p style={{
              fontSize: 'clamp(20px, 2vw, 26px)',
              lineHeight: 1.45,
              margin: 0,
              fontWeight: 500,
              fontFamily: 'inherit',
            }}>
              {t.quote}
            </p>
          </div>
        </div>

        {/* Note about more testimonials coming */}
        <div style={{
          marginTop: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          color: 'var(--c2)',
          fontSize: 13,
        }}>
          <span style={{ fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 11, opacity: 0.7 }}>
            More to come — first audits are wrapping now.
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
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid var(--ink)',
    borderRadius: 14,
    fontSize: 14,
    fontFamily: 'inherit',
    background: 'var(--bg)',
    boxSizing: 'border-box',
  };
  const labelStyle = { fontSize: 11, fontFamily: 'DM Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-soft)', marginBottom: 6, display: 'block' };

  if (submitted) {
    return (
      <div style={{ padding: 28, background: 'var(--c3)', border: '2px solid var(--ink)', borderRadius: 20, boxShadow: '4px 4px 0 var(--ink)' }}>
        <h4 className="display" style={{ fontSize: 32, margin: '0 0 8px', letterSpacing: '-0.02em' }}>got it!</h4>
        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.5 }}>I'll be in touch within 48 hours. Looking forward to it.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ display: 'grid', gap: 14, padding: 24, background: 'var(--bg)', border: '2px solid var(--ink)', borderRadius: 20, boxShadow: '4px 4px 0 var(--ink)' }}
    >
      <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>booking inquiry</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>your name</label>
          <input required style={inputStyle} value={form.name} onChange={e => update('name', e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>email</label>
          <input required type="email" style={inputStyle} value={form.email} onChange={e => update('email', e.target.value)} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>company / podcast / event</label>
          <input style={inputStyle} value={form.org} onChange={e => update('org', e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>date (approx)</label>
          <input style={inputStyle} value={form.date} onChange={e => update('date', e.target.value)} placeholder="e.g. June 2026" />
        </div>
      </div>

      <div>
        <label style={labelStyle}>type</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Conference', 'Podcast', 'Workshop', 'Other'].map(t => (
            <button type="button" key={t} onClick={() => update('type', t)} style={{
              padding: '8px 14px',
              border: '2px solid var(--ink)',
              borderRadius: 999,
              background: form.type === t ? 'var(--c5)' : 'var(--bg)',
              fontFamily: 'inherit',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div>
        <label style={labelStyle}>tell me about it</label>
        <textarea
          rows={3}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 80, fontFamily: 'inherit' }}
          value={form.message}
          onChange={e => update('message', e.target.value)}
          placeholder="Audience size, topic ideas, format, anything else"
        />
      </div>

      <button type="submit" className="btn">Send inquiry →</button>
    </form>
  );
}


function Speaking() {
  return (
    <section id="speaking" style={{ padding: '120px 0', background: 'var(--bg-alt)', borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'flex-start' }}>
          <div>
            <span className="eyebrow">speaking & media</span>
            <h2 className="display" style={{
              fontSize: 'clamp(40px, 5vw, 72px)',
              margin: '16px 0 24px',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}>
              book me to <span style={{ color: 'var(--c5)' }}>speak.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--ink-soft)', marginBottom: 28 }}>
              I've spoken to hundreds of food creators at conferences and on podcasts. It's truly my passion and I'd love to share it with your audience.
            </p>

            <BookingForm />
          </div>

          <div className="card" style={{ padding: 40, background: 'var(--c5)' }}>
            <span className="tag" style={{ background: 'var(--bg)' }}>Signature talk</span>
            <h3 className="display" style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              margin: '20px 0 20px',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>
              Instagram That Actually Works:<br />
              <span style={{ color: 'var(--bg)' }}>Hooks, Revenue & AI</span>
            </h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, margin: 0, marginBottom: 20 }}>
              Most food creators are working harder than they need to and monetizing less than they should. Not because their content is bad, but because they haven't found the strategy yet.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, margin: 0, marginBottom: 20 }}>
              This session covers the three levers that actually move the needle: hooks that stop the scroll, a content system built for multiple revenue streams, and AI workflows that let a small team operate like a big one.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.55, margin: 0, fontWeight: 600 }}>
              You'll leave with a roadmap. Not inspiration. Something you can use Monday morning.
            </p>

            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '2px solid var(--ink)', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
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
function ContactCTA({ onOpenQuiz, onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return (
    <section id="contact" style={{ padding: '120px 0 80px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>let's go</span>
        <h2 className="display" style={{
          fontSize: 'clamp(64px, 10vw, 180px)',
          margin: '20px 0 32px',
          letterSpacing: '-0.03em',
          lineHeight: 0.92,
        }}>
          done <span style={{ color: 'var(--c1)' }}>guessing?</span><br />
          let's <span style={{ color: 'var(--c3)' }}>fix that.</span>
        </h2>
        <p style={{
          fontSize: 22, maxWidth: 720, margin: '0 auto 40px',
          color: 'var(--ink-soft)', lineHeight: 1.4,
        }}>
          Book an audit and in 5 days you'll have a written plan, a recorded walkthrough, and zero guesswork. Add pre-post reviews and I'll be in your corner while you put it into practice.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
          <button className="btn alt" onClick={() => onBook && onBook(audit)} style={{ fontSize: 18, padding: '20px 36px' }}>
            ✦ Book The Audit — $950
          </button>
          <button className="btn" onClick={() => onBook && onBook(auditPlus)} style={{ fontSize: 18, padding: '20px 36px', background: 'var(--c4)' }}>
            Book Audit + Reviews — $1,100
          </button>
        </div>
        <a href="mailto:hi@mikacreative.co" className="link" style={{
          fontSize: 14,
          color: 'var(--ink-soft)',
          borderBottom: '1.5px dotted var(--ink-soft)',
        }}>
          Or just email me
        </a>
      </div>

      <footer style={{ borderTop: '2px solid var(--ink)', marginTop: 100, paddingTop: 32 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Wordmark size={28} />
          <div className="mono" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>
            © 2026 mika creative · for food creators who mean it
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://instagram.com/_joytothefood_" className="link" style={{ fontSize: 13 }}>@_joytothefood_</a>
            <a href="#" className="link" style={{ fontSize: 13 }}>Email</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

// ============================================================
// QUIZ - floating widget
// ============================================================
function QuizWidget({ open, setOpen, onBook }) {
  const [step, setStep] = useState('intro');

  useEffect(() => {
    if (!open) setTimeout(() => setStep('intro'), 300);
  }, [open]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 100,
          background: 'var(--ink)', color: 'var(--bg)',
          border: '2px solid var(--ink)',
          borderRadius: 999,
          padding: '14px 20px',
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: 'DM Sans', fontWeight: 600, fontSize: 14,
          cursor: 'pointer',
          boxShadow: '4px 4px 0 var(--c1)',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--c1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--c1)'; }}
      >
        <span style={{
          width: 10, height: 10, borderRadius: '50%',
          background: 'var(--c2)',
          animation: 'pulse 1.6s ease-in-out infinite',
        }} />
        Find your fit <span style={{ opacity: 0.6 }}>· 30s</span>
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 100,
      width: 'min(460px, calc(100vw - 48px))',
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 28,
      boxShadow: '8px 8px 0 var(--ink)',
      overflow: 'hidden',
      animation: 'slide-up 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.2)',
    }}>
      <div style={{
        padding: '14px 20px',
        background: 'var(--ink)',
        color: 'var(--bg)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: 'var(--c3)',
            animation: 'pulse 1.6s ease-in-out infinite',
          }} />
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {step === 'intro' ? 'Quick quiz · 1 question' : 'Your match'}
          </span>
        </div>
        <button onClick={() => setOpen(false)} style={{
          background: 'none', border: 'none', color: 'var(--bg)',
          fontSize: 18, cursor: 'pointer', padding: 0,
          width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>×</button>
      </div>

      {step === 'intro' && <QuizIntro onChoose={setStep} />}
      {step === 'result-grow' && <QuizResultGrow onReset={() => setStep('intro')} onBook={(s) => { setOpen(false); onBook && onBook(s); }} />}
      {step === 'result-monetize' && <QuizResultMonetize onReset={() => setStep('intro')} onBook={(s) => { setOpen(false); onBook && onBook(s); }} />}
    </div>
  );
}

function QuizIntro({ onChoose }) {
  return (
    <div style={{ padding: 28 }}>
      <h3 className="display" style={{ fontSize: 32, margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
        which one is <span style={{ color: 'var(--c1)' }}>you</span>?
      </h3>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 20px', lineHeight: 1.4 }}>
        Pick the one that sounds the most like your situation right now.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <QuizOption
          color="var(--c3)"
          icon="🌱"
          title="I'm trying to grow"
          sub="Under 25K and posting into the void. Let's fix that."
          onClick={() => onChoose('result-grow')}
        />
        <QuizOption
          color="var(--c5)"
          icon="💸"
          title="I have a following, want to cash in"
          sub="25K+ but the income doesn't match the reach."
          onClick={() => onChoose('result-monetize')}
        />
      </div>
    </div>
  );
}

function QuizOption({ color, icon, title, sub, onClick }) {
  return (
    <button onClick={onClick} style={{
      textAlign: 'left',
      padding: '14px 16px',
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 18,
      cursor: 'pointer',
      display: 'flex', gap: 14, alignItems: 'flex-start',
      fontFamily: 'inherit',
      transition: 'transform 0.12s, box-shadow 0.12s, background 0.12s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = color;
      e.currentTarget.style.transform = 'translate(-2px, -2px)';
      e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'var(--bg)';
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        background: color, border: '2px solid var(--ink)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.35 }}>{sub}</div>
      </div>
    </button>
  );
}

function QuizResultGrow({ onReset, onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return (
    <div style={{ padding: 28 }}>
      <span className="tag" style={{ background: 'var(--c3)', fontSize: 10 }}>You = grower</span>
      <h3 className="display" style={{ fontSize: 28, margin: '12px 0 8px', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
        start with an <span style={{ color: 'var(--c1)' }}>audit.</span>
      </h3>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 16px', lineHeight: 1.4 }}>
        Under 25K is fixable. An audit shows you exactly what's holding your account back — and what to do about it first.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ResultCard color="var(--c1)" step="solo" title="The Audit" price="$950 · 5 day turnaround"
          onClick={() => { onReset(); onBook && onBook(audit); }}/>
        <ResultCard color="var(--c4)" step="+reviews" title="The Audit + Pre-Post Reviews" price="$1,100 · 5 day turnaround + 30 days of pre-post feedback"
          onClick={() => { onReset(); onBook && onBook(auditPlus); }}/>
      </div>
      <ComingSoonNote items={['In Your Pocket Day', 'The Mastermind']}/>
      <button onClick={onReset} className="mono" style={{
        marginTop: 16, background: 'none', border: 'none', cursor: 'pointer',
        fontSize: 11, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: 0,
      }}>← retake</button>
    </div>
  );
}

function QuizResultMonetize({ onReset, onBook }) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return (
    <div style={{ padding: 28 }}>
      <span className="tag" style={{ background: 'var(--c5)', fontSize: 10 }}>You = earner</span>
      <h3 className="display" style={{ fontSize: 28, margin: '12px 0 8px', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
        start with an <span style={{ color: 'var(--c1)' }}>audit.</span>
      </h3>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 16px', lineHeight: 1.4 }}>
        You have the audience. The audit shows you exactly where revenue should already be coming from — and why it isn't yet.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ResultCard color="var(--c1)" step="solo" title="The Audit" price="$950 · 5 day turnaround"
          onClick={() => { onReset(); onBook && onBook(audit); }}/>
        <ResultCard color="var(--c4)" step="+reviews" title="The Audit + Pre-Post Reviews" price="$1,100 · 5 day turnaround + 30 days of pre-post feedback"
          onClick={() => { onReset(); onBook && onBook(auditPlus); }}/>
      </div>
      <ComingSoonNote items={['The Mastermind', 'In Your Pocket Day']}/>
      <button onClick={onReset} className="mono" style={{
        marginTop: 16, background: 'none', border: 'none', cursor: 'pointer',
        fontSize: 11, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: 0,
      }}>← retake</button>
    </div>
  );
}

function ComingSoonNote({ items }) {
  return (
    <div style={{
      marginTop: 14,
      padding: '12px 14px',
      background: 'var(--bg-alt)',
      border: '1.5px dashed var(--ink-soft)',
      borderRadius: 12,
    }}>
      <div className="mono" style={{
        fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--ink-soft)', marginBottom: 6, fontWeight: 600,
      }}>
        Coming soon
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.4 }}>
        {items.join(' · ')}
      </div>
    </div>
  );
}

function QuizResultHandsOff_REMOVED() { return null; }

function ResultCard({ color, step, title, price, href, onClick }) {
  const Tag = onClick ? 'button' : 'a';
  const props = onClick
    ? { onClick, type: 'button' }
    : { href };
  return (
    <Tag {...props} style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 14px',
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 14,
      textDecoration: 'none', color: 'inherit',
      transition: 'transform 0.12s, background 0.12s',
      cursor: 'pointer',
      fontFamily: 'inherit', textAlign: 'left',
      width: '100%',
      boxShadow: '3px 3px 0 var(--ink)',
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = color; e.currentTarget.style.transform = 'translate(-1px, -1px)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.transform = 'translate(0, 0)'; e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)'; }}
    >
      <span className="mono" style={{
        background: color, color: 'var(--ink)',
        border: '1.5px solid var(--ink)',
        padding: '4px 8px', borderRadius: 6, fontSize: 10, fontWeight: 600,
      }}>{step}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{price}</div>
      </div>
      <span style={{ fontSize: 18 }}>→</span>
    </Tag>
  );
}

// expose to window
Object.assign(window, {
  Wordmark, Nav,
  HeroBigType, HeroImageGrid,
  ProofBar, Strip, Services, About, Freebie, Testimonials, BookingForm, Speaking, ContactCTA,
  QuizWidget,
});
