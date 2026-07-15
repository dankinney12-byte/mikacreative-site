/* global React, LAUNCH, getPhase */
// Grow with Joy — challenge page components
// Compiled into the global bundle after launch.js, so LAUNCH + getPhase are available.
const { useState, useEffect } = React;

// ============================================================
// PHASE HOOK
// ============================================================
function usePhase() {
  const [phase, setPhase] = useState(getPhase());
  useEffect(() => {
    const id = setInterval(() => setPhase(getPhase()), 30000);
    return () => clearInterval(id);
  }, []);
  return phase;
}

// ============================================================
// COUNTDOWN
// ============================================================
function useCountdown(target) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    if (!target) return;
    const t = new Date(target).getTime();
    const tick = () => setDiff(Math.max(0, t - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs, done: diff === 0 };
}

function Countdown({ target }) {
  const { days, hours, mins, secs, done } = useCountdown(target);
  if (done || !target) return null;
  return (
    <span className="gwj-countdown">
      {days > 0 && <><strong>{days}</strong>d </>}
      <strong>{hours}</strong>h <strong>{mins}</strong>m <strong>{secs}</strong>s
    </span>
  );
}

// ============================================================
// ANNOUNCEMENT BAR
// ============================================================
function AnnouncementBar({ phase, onCta }) {
  const cfg = {
    waitlist: {
      msg: 'grow with joy is coming! enrollment opens june 15',
      target: LAUNCH.enrollOpens,
      cta: 'join the waitlist →',
      bg: 'var(--c3)',
      fg: 'var(--ink)',
    },
    open: {
      msg: 'grow with joy is coming! 30 day challenge starts July 1',
      target: LAUNCH.challengeStarts,
      cta: 'sign me up!',
      bg: 'var(--c3)',
      fg: 'var(--ink)',
    },
    closed: {
      msg: "round 1 is underway! grow with joy round 2 is coming early fall",
      target: null,
      cta: 'join the waitlist →',
      bg: 'var(--c3)',
      fg: 'var(--ink)',
    },
  }[phase];

  return (
    <div className="gwj-bar" style={{ background: cfg.bg, color: cfg.fg }}>
      <span className="gwj-bar-msg">{cfg.msg}</span>
      {cfg.target && (
        <span className="gwj-bar-count">
          <span className="gwj-bar-dash">· </span>
          <Countdown target={cfg.target} />
        </span>
      )}
      {cfg.cta && (
        <button className="gwj-bar-cta" onClick={() => onCta(phase)}>
          {cfg.cta}
        </button>
      )}
    </div>
  );
}

// ============================================================
// CHALLENGE HERO
// ============================================================
function ChallengeHero({ phase, onCta }) {
  return (
    <section className="gwj-hero">
      <div className="container gwj-hero-inner">
        {phase === 'closed' && (
          <div className="gwj-started-banner">
            <span className="gwj-started-banner-emoji">🌱</span>
            <div className="gwj-started-banner-text">
              <strong>Round 1 is underway!</strong> Grow with Joy round 2 is coming early fall. Join the waitlist to be first through the door!
            </div>
            <button className="btn sm btn-shadow-c2 gwj-started-banner-btn" onClick={() => onCta && onCta(phase)}>
              join the waitlist →
            </button>
          </div>
        )}
        <h1 className="display gwj-hero-headline">
          grow with <span style={{ color: 'var(--c1)' }}>joy.</span>
        </h1>
        <p className="gwj-hero-subhead">
          the 30 day challenge for food creators ready to GROW
        </p>

        <div className="gwj-hero-row">
          <div className="gwj-hero-photo">
            <img src="images/about-your-host.jpg" alt="Mika Kinney" className="photo-img" loading="lazy" />
          </div>
          <div className="gwj-hero-col">
            <p className="gwj-hero-body">
              Hi, I'm Mika! I grew{' '}
              <span className="mono" style={{ fontSize: '0.88em' }}>@_joytothefood_</span>{' '}
              from 1,001 to 582K followers in two years, and I tracked exactly what worked. Now I'm excited to share it all in a 30-day challenge that we'd love to have you join! This course hands you that whole system: how to gain followers, keep engagement high, and build a real business on Instagram. Let's gooo!
            </p>
            <p className="gwj-hero-outcome">
              By day 30 you'll have a posting system you understand and a feed you're proud of.
            </p>
            <div className="gwj-hero-cta-wrap">
              <button
                className="btn gwj-hero-btn btn-shadow-c2"
                onClick={() => document.getElementById('gwj-why')?.scrollIntoView({ behavior: 'smooth' })}
              >
                see what's inside ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CHALLENGE PROOF BAR (reuses existing proof-bar CSS)
// ============================================================
function ChallengeProofBar() {
  const stats = [
    { num: '582K',  label: 'followers' },
    { num: '10M',   label: 'monthly views' },
    { num: '38M',   label: 'views from one reel' },
    { num: '157K+', label: 'followers from a single post' },
  ];
  const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)'];
  return (
    <section className="proof-bar">
      <div className="container">
        <div className="proof-bar-grid gwj-proof-grid">
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
// REEL PROOF — three reels with follower-jump overlays
// Screenshots supplied by Dan: images/2k_10k.png, etc.
// ============================================================
function ReelProof() {
  const reels = [
    { img: 'images/2k_10k.png',    from: '2K',   to: '10K',  accent: 'var(--c1)' },
    { img: 'images/15k_100k.png',  from: '15K',  to: '100K', accent: 'var(--c4)' },
    { img: 'images/150k_250k.png', from: '150K', to: '250K', accent: 'var(--c5)' },
  ];
  return (
    <section className="gwj-section gwj-reels">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>receipts, not theory</span>
        <h2 className="display gwj-section-headline">the reels that built this!</h2>
        <div className="gwj-reels-grid">
          {reels.map((r, i) => (
            <div key={i} className="gwj-reel-card">
              <img
                src={r.img}
                alt={`a reel that grew the account from ${r.from} to ${r.to} followers`}
                className="gwj-reel-img"
                loading="lazy"
              />
              <div className="gwj-reel-overlay" style={{ background: r.accent }}>
                <span className="gwj-reel-from">{r.from}</span>
                <span className="gwj-reel-arrow">→</span>
                <span className="gwj-reel-to">{r.to}</span>
                <span className="mono gwj-reel-label">followers</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// WHY NOW
// ============================================================
function WhyNow() {
  return (
    <section id="gwj-why" className="gwj-section gwj-why-section">
      <div className="container">
        <div className="gwj-why-bubble">
          <h2 className="display gwj-why-headline">why now?</h2>
          <p className="gwj-why-prose">
            Google is answering recipe searches with AI, so search engine traffic is drying up. More and more people find food on TikTok, Facebook, and Instagram, and they follow creators they trust. The food bloggers who build a real presence on social right now are the ones who win the next few years.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// HOW IT WORKS — 3 cards
// ============================================================
function HowItWorks() {
  const cards = [
    {
      color: 'var(--c1)',
      num: 'day 1',
      title: 'we go LIVE!',
      body: "A live 2-hour workshop walking you through my whole framework, the same one I've taught at conferences. Can't make it live? You get the replay.",
    },
    {
      color: 'var(--c3)',
      num: 'day 2',
      title: 'the masterclass!',
      body: "A video tutorial showing my whole setup for how I make Instagram reels. From video settings to lighting, editing, hooks, and more!",
    },
    {
      color: 'var(--c4)',
      num: 'days 3–30',
      title: 'daily drops!',
      body: "One idea, one real post of mine with the numbers, and one small dare to go do it. Rest days built in, because growth shouldn't burn you out.",
    },
  ];

  return (
    <section className="gwj-section">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>the schedule</span>
        <h2 className="display gwj-section-headline">how this all shakes out!</h2>
        <Timeline />
        <div className="gwj-how-grid gwj-how-grid-spaced">
          {cards.map((c, i) => (
            <div key={i} className="card gwj-how-card" style={{ background: c.color }}>
              <span className="mono gwj-how-num">{c.num}</span>
              <h3 className="display gwj-how-title">{c.title}</h3>
              <p className="gwj-how-body">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="gwj-how-chat">
          <h3 className="display gwj-how-chat-title">let's grow together!</h3>
          <p className="gwj-how-chat-body">
            The whole 30 days, we'll keep a live group chat going. It's where you can share ideas, ask questions, swap wins, and grow right alongside everyone else. We're all in this together!
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// WEEK ARC — 4 cards
// ============================================================
function WeekArc() {
  const weeks = [
    {
      color: 'var(--c2)',
      week: 'week 1',
      title: 'your feed is a house!',
      body: "The framework everything hangs on: who you are online and how to stack your hooks. Get this right and it all clicks.",
    },
    {
      color: 'var(--c1)',
      week: 'week 2',
      title: 'the recipe reels!',
      body: "How to build a recipe reel that earns watch time: the hook, the shot, the caption, and the comment funnel.",
    },
    {
      color: 'var(--c5)',
      week: 'week 3',
      title: 'the personality stuff!',
      body: "The personality posts that turn followers into fans. The part most recipe creators skip, and the most important.",
    },
    {
      color: 'var(--c3)',
      week: 'week 4',
      title: 'carousels + graduation!',
      body: "Carousels, turning one winner into ten, and the reps that make it stick. Most people say it clicks after about a month.",
    },
  ];

  return (
    <section className="gwj-section">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>what's inside</span>
        <h2 className="display gwj-section-headline">what's in the daily drops</h2>
        <div className="gwj-weeks-grid">
          {weeks.map((w, i) => (
            <div key={i} className="card gwj-week-card" style={{ background: w.color }}>
              <span className="mono gwj-week-num">{w.week}</span>
              <h3 className="display gwj-week-title">{w.title}</h3>
              <p className="gwj-week-body">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOR / NOT FOR
// ============================================================
function ForNotFor() {
  const forItems = [
    "You're a food creator (or you want to be!)",
    "You're already posting and it's just not working",
    "You're sick of advice that doesn't fit the algorithm that exists right now",
    "Other courses didn't fit, because food is its own animal",
    "You want an actual plan to guide your vibes",
  ];
  const notItems = [
    "You want a magic go-viral button (I wish there was, but the only magic is you)",
    "You're not willing to actually post during the 30 days. It's a CHALLENGE, you gotta play!",
  ];

  return (
    <section className="gwj-section">
      <div className="container gwj-fit-wrap">
        <div className="gwj-fit-col">
          <div className="gwj-fit-header gwj-fit-header-yes">
            <h3 className="mono gwj-fit-eyebrow">this is for you if</h3>
          </div>
          <ul className="gwj-fit-list">
            {forItems.map((item, i) => (
              <li key={i} className="gwj-fit-item">
                <span className="gwj-fit-bullet" style={{ background: 'var(--c3)' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="gwj-fit-col">
          <div className="gwj-fit-header gwj-fit-header-no">
            <h3 className="mono gwj-fit-eyebrow">this is NOT for you if</h3>
          </div>
          <ul className="gwj-fit-list">
            {notItems.map((item, i) => (
              <li key={i} className="gwj-fit-item">
                <span className="gwj-fit-bullet" style={{ background: 'var(--ink)', opacity: 0.3 }}>✗</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// VALUE STACK + PRICE
// ============================================================
function ValueStack({ phase, onCta }) {
  const items = [
    { label: "Day 1: live 2-hour workshop with Mika",                                    value: "$997",  bonus: false },
    { label: "Day 2: the masterclass",                                                    value: "$297",  bonus: false },
    { label: "Days 3–30: daily-drop system (28 drops + dares + the full framework)",     value: "$997",  bonus: false },
    { label: "Bonus: the AI prompt kit",                                                  value: "$79",   bonus: true  },
    { label: "Bonus: the hook swipe file",                                                value: "$79",   bonus: true  },
    { label: "Bonus: the filming setup checklist",                                        value: "$39",   bonus: true  },
    { label: "Bonus: the house cheat sheet",                                              value: "$39",   bonus: true  },
    { label: "Bonus: the 5 pre-post checks",                                              value: "$29",   bonus: true  },
  ];

  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open:     'sign me up!',
    closed:   'join the list for round two →',
  }[phase];

  return (
    <section className="gwj-section gwj-section-alt">
      <div className="container gwj-stack-wrap">
        <h2 className="display gwj-section-headline">
          here's everything you get:
        </h2>
        <div className="gwj-stack">
          {items.map((item, i) => (
            <div key={i} className={`gwj-stack-row${item.bonus ? ' gwj-stack-row-bonus' : ''}`}>
              <span className="gwj-stack-label">
                {item.bonus && <span className="gwj-stack-bonus-chip">bonus</span>}
                {item.label}
              </span>
              <span className="gwj-stack-value">{item.value}</span>
            </div>
          ))}
          <div className="gwj-stack-row gwj-stack-total">
            <span className="gwj-stack-label">total value</span>
            <span className="gwj-stack-value">$2,556</span>
          </div>
        </div>
        <div className="gwj-price-reveal">
          <p className="gwj-price-outcome">
            By day 30 you'll have a posting system you actually understand and a feed that's finally moving. All of this gets you there:
          </p>
          <div className="gwj-price-compare">
            <span className="display gwj-price-was">$2,556</span>
            <span className="display gwj-price-amount">$249</span>
          </div>
          <span className="mono gwj-price-savings">that's over 90% off</span>
          <p className="gwj-price-note">
            That's the whole thing, all of it, for way less than it's worth!
          </p>
          <button className="btn btn-shadow-c2 gwj-stack-cta" onClick={() => onCta(phase)}>
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TIMELINE
// ============================================================
function Timeline() {
  const steps = [
    { label: 'round 1 underway now',       color: 'var(--c3)', active: true },
    { label: 'round 2 waitlist open',      color: 'var(--c2)', active: true },
    { label: 'enrollment opens early fall', color: 'var(--c1)' },
    { label: 'round 2 starts',             color: 'var(--c4)' },
    { label: '30 days of drops',           color: 'var(--c5)' },
  ];

  return (
    <div className="gwj-timeline">
      {steps.map((s, i) => (
        <div key={i} className="gwj-timeline-step">
          <div className="gwj-timeline-dot-wrap">
            <div
              className={`gwj-timeline-dot${s.active ? ' is-active' : ''}`}
              style={{ background: s.active ? s.color : 'var(--bg)', borderColor: s.active ? s.color : 'var(--ink)' }}
            />
            {i < steps.length - 1 && <div className="gwj-timeline-line" />}
          </div>
          <span className="mono gwj-timeline-label" style={{ color: s.active ? s.color : 'var(--ink)' }}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// FAQ — accordion
// ============================================================
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: "When does it start?",
      a: "Round 1 kicked off July 1 and is underway right now! Round 2 is coming early fall. Join the waitlist and you'll be the first to know the exact date." },
    { q: "How long is it?",
      a: "30 days!" },
    { q: "How is it delivered?",
      a: "Day 1 is a live video where I explain my whole Instagram strategy (engineered by an engineer 😉). The video will be recorded to rewatch anytime! Day 2 is a pre-recorded masterclass showing how I make my viral reels from setup to editing, to hooks and sound choice. Day 3-30 are the daily drops, which are emails sent straight to your inbox (including downloadable PDFs). This is where the challenge part happens! Each email sets you up with actions you can take to grow your account. We will also keep a group chat throughout the course so we can all grow together!" },
    { q: "Is this for total beginners or people who already have an account?",
      a: "Both! I'll tell you which parts to nail first depending on where you're at." },
    { q: "Is this only for food creators or can I join if I post other content too?",
      a: "Totally works for mixed content creators! I personally think a mix is actually better for overall growth. The framework applies whether you're 100% food or more like 30% food and 70% other stuff, it's about building a system, not a niche requirement." },
    { q: "What if my account has been stuck at the same follower count for years?",
      a: "This is exactly who the challenge is built for. The algorithm has changed a lot and what worked a few years ago isn't what works now. It's less about your content being wrong and more about rethinking the system, and that's what we do for 30 days." },
    { q: "Will you cover how to shoot and film content, not just strategy?",
      a: "Yes!! Day 2 is a full production masterclass where I walk through exactly how I think about shooting: angles, b-roll, lighting, the whole thing. Strategy and production go hand in hand and we cover both." },
    { q: "Does the strategy change for YouTube Shorts and Facebook Reels?",
      a: "The core framework is built around Instagram but the principles translate directly to Facebook and YouTube Shorts. Repurposing across platforms is something we touch on. The goal is to help you work smarter, not spend all your energy on one platform." },
    { q: "What if I can't keep up with the daily drops over the summer (for example, you're traveling or life just gets busy)?",
      a: "You'll have lifetime access to the course so you can go at your own pace or come back to it whenever. Follow along with the group or work through it on your own timeline 🙂" },
    { q: "What if I can't make the live workshop?",
      a: "It's recorded, you're completely covered." },
  ];

  return (
    <section className="gwj-section gwj-section-alt">
      <div className="container gwj-faq-wrap">
        <h2 className="display gwj-section-headline">questions? I've got answers!</h2>
        <div className="gwj-faq">
          {faqs.map((f, i) => (
            <div key={i} className={`gwj-faq-item${openIdx === i ? ' is-open' : ''}`}>
              <button
                className="gwj-faq-q"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span>{f.q}</span>
                <span className="gwj-faq-icon">{openIdx === i ? '−' : '+'}</span>
              </button>
              {openIdx === i && (
                <p className="gwj-faq-a">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FINAL CTA BAND
// ============================================================
function ChallengeCTA({ phase, onCta }) {
  if (phase === 'closed') {
    return (
      <section className="gwj-final-cta">
        <div className="container gwj-final-cta-inner">
          <h2 className="display gwj-final-headline">
            round 2 is coming <span style={{ color: 'var(--c1)' }}>early fall!</span>
          </h2>
          <p className="gwj-final-sub">
            Round 1 is underway right now, and it's going so well we're doing it again. Join the waitlist and you'll be the first to know when doors open.
          </p>
          <button className="btn btn-shadow-c2 gwj-final-btn" onClick={() => onCta(phase)}>
            join the round 2 waitlist →
          </button>
        </div>
      </section>
    );
  }

  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open:     'sign me up!',
    closed:   'join the list for round two →',
  }[phase];
  const target = phase === 'closed' ? null : LAUNCH.challengeStarts;

  return (
    <section className="gwj-final-cta">
      <div className="container gwj-final-cta-inner">
        <h2 className="display gwj-final-headline">
          ready? let's grow with <span style={{ color: 'var(--c1)' }}>joy!</span>
        </h2>
        <p className="gwj-final-sub">
          30 days. Real data. Your Instagram finally working for you.
        </p>
        <button className="btn btn-shadow-c2 gwj-final-btn" onClick={() => onCta(phase)}>
          {ctaLabel}
        </button>
        {target && (
          <p className="mono gwj-final-countdown">
            the 30 day challenge starts in <Countdown target={target} />
          </p>
        )}
      </div>
    </section>
  );
}

// ============================================================
// WAITLIST MODAL
// ============================================================
function WaitlistModal({ open, onClose, phase }) {
  const [email, setEmail]           = useState('');
  const [firstName, setFirstName]   = useState('');
  const [status, setStatus]         = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    if (!open) { setStatus('idle'); setEmail(''); setFirstName(''); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (_) {
      setStatus('error');
    }
  };

  const isRoundTwo = phase === 'closed';
  const title = isRoundTwo ? "join the round 2 waitlist!" : "you're almost in!";
  const sub   = isRoundTwo
    ? "Grow with Joy round 2 is coming early fall! Drop your email and you'll be the first to know when doors open. No spam, just updates."
    : "drop your email and you'll be first through the door when enrollment opens june 15! no spam, just updates.";

  return (
    <div
      className="booking-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="gwj-modal">
        <button onClick={onClose} className="booking-close gwj-modal-close">×</button>

        {status === 'success' ? (
          <div className="gwj-modal-success">
            <span style={{ fontSize: 56, lineHeight: 1 }}>🌱</span>
            <h3 className="display" style={{ fontSize: 36, margin: '20px 0 8px', lineHeight: 1.1 }}>
              you're on the list!
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: 0 }}>
              watch your inbox. no spam, just updates.
            </p>
          </div>
        ) : (
          <>
            <span className="tag" style={{ background: 'var(--c3)', display: 'inline-block', marginBottom: 20 }}>
              grow with joy
            </span>
            <h3 className="display" style={{ fontSize: 32, margin: '0 0 10px', lineHeight: 1.1 }}>
              {title}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 28px', lineHeight: 1.6 }}>
              {sub}
            </p>
            <form onSubmit={handleSubmit} className="gwj-modal-form">
              <input
                className="booking-form-input"
                type="text"
                placeholder="first name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="booking-form-input"
                type="email"
                required
                placeholder="your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-shadow-c3"
                disabled={status === 'loading'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {status === 'loading' ? 'joining...' : 'count me in →'}
              </button>
              {status === 'error' && (
                <p style={{ color: 'var(--c1)', fontSize: 13, margin: '10px 0 0', textAlign: 'center' }}>
                  something went wrong, try again or email{' '}
                  <a href="mailto:mika@joytothefood.com" className="link">mika@joytothefood.com</a>
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================
// ABOUT MIKA
// ============================================================
function WhoMikaIs() {
  return (
    <section className="gwj-section gwj-section-alt">
      <div className="container gwj-who-inner">
        <div className="gwj-who-content">
          <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>about your host</span>
          <h2 className="display gwj-section-headline">okay but who even am I!</h2>
          <p className="gwj-prose">
            I'm Mika: engineer turned food creator, NASM nutrition coach, and the face of{' '}
            <span className="mono">@_joytothefood_</span>. I grew it the boring, honest way: post, study what works, do more of that. I'm not special, just stubborn! I'll even show you my flops, because the fastest to fall is the fastest to learn.
          </p>
          <div className="gwj-heard-on">
            <span className="mono gwj-heard-label">as heard on</span>
            <div className="gwj-heard-pills">
              <a
                href="https://www.foodbloggerpro.com/podcast/turn-instagram-followers-into-site-traffic-and-revenue/"
                target="_blank"
                rel="noopener noreferrer"
                className="gwj-heard-pill"
              >
                Food Blogger Pro
              </a>
              <a
                href="https://eatblogtalk.com/joytothefood4/"
                target="_blank"
                rel="noopener noreferrer"
                className="gwj-heard-pill"
              >
                Eat Blog Talk
              </a>
            </div>
          </div>
        </div>
        <div className="gwj-who-media">
          <div className="photo has-image gwj-who-img-wrap">
            <img src="images/mika-headshot.jpg" alt="Mika Kinney" className="photo-img" loading="lazy" />
          </div>
          <div className="gwj-who-stats">
            <div className="gwj-who-stat">
              <span className="display gwj-who-stat-num" style={{ color: 'var(--c1)' }}>582K</span>
              <span className="mono gwj-who-stat-label">followers</span>
            </div>
            <div className="gwj-who-stat">
              <span className="display gwj-who-stat-num" style={{ color: 'var(--c2)' }}>10M</span>
              <span className="mono gwj-who-stat-label">monthly views</span>
            </div>
            <div className="gwj-who-stat">
              <span className="display gwj-who-stat-num" style={{ color: 'var(--c3)' }}>38M</span>
              <span className="mono gwj-who-stat-label">views from one reel</span>
            </div>
            <div className="gwj-who-stat">
              <span className="display gwj-who-stat-num" style={{ color: 'var(--c4)' }}>157K+</span>
              <span className="mono gwj-who-stat-label">from a single post</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MEMBER WINS — real (anonymized) messages from the round 1 group
// ============================================================
function MemberWins() {
  // `m` controls mobile-only order (single-column flex); desktop masonry uses array order
  const wins = [
    { m: 1,  stat: '110K views · 5,150 follows from one reel', quote: "This one was WAY easier to put together, is literally only 8 seconds long, and it blew my previous best (2,997 follows in 2 years of posting) out of the water!" },
    { m: 2,  quote: "Just filmed 2 recipes, and OMG I feel so much more confident in filming! Hands down this is one of the best courses I have done and it's just getting started 🎉" },
    { m: 6,  quote: "This is the first carousel I've posted that's ever done ANYTHING. Good saves and 29 new followers so far. I've even seen folks clicking over to the blog! 🎉" },
    { m: 4,  quote: "I've taken other reel courses but this one by far is the most actionable. And I actually filmed my first reel!!! I'm also an engineer so I love all the formulas 😆" },
    { m: 7,  stat: '2K followers from one reel', quote: "I've gotten almost 2k followers just from this reel!! I would usually always start with the hero shot but experimented this time." },
    { m: 8,  quote: "I was a bit skeptical because I've tried other social media courses and they just don't work for the food blogging niche. You gave me lots of little actionable tweaks, and I feel less overwhelmed by social media these days. Not even half way done but so good!" },
    { m: 9,  stat: '37K views in 8 hours', quote: "I have never seen these numbers in my trial reels before. Excited to see what happens after I post it to everyone." },
    { m: 3,  stat: '54K views in 24 hours', quote: "I did a video with the 'I can't stop making this' text hook and it already has 54k views!!! It hasn't even been up for 24 hours yet. Most of my videos get 2-3k views. Thanks Mika!!" },
    { m: 5,  quote: "Big #win for me! I've never had this much success with any post on my account. My highest performing reel yet! Wow wowww!" },
    { m: 10, quote: "I made this video right after the day 1 livestream and it doubled the likes from last time. I'd call that a win!!" },
  ];
  const colors = ['var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)', 'var(--c1)'];

  return (
    <section className="gwj-section gwj-wins">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>receipts from round 1</span>
        <h2 className="display gwj-section-headline">round 1 members are already growing!</h2>
        <p className="gwj-wins-note">Real messages from the first two weeks of the challenge, shared anonymously.</p>
        <div className="gwj-wins-masonry">
          {wins.map((w, i) => (
            <div key={i} className="card gwj-win-card" style={{ background: colors[i % colors.length], order: w.m }}>
              {w.stat && <span className="mono gwj-win-stat">{w.stat}</span>}
              <p className="gwj-win-quote">"{w.quote}"</p>
              <span className="mono gwj-win-attr">round 1 member</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA BAND — repeated waitlist CTA at conversion points
// ============================================================
function CtaBand({ phase, onCta }) {
  const label = {
    waitlist: 'join the waitlist →',
    open:     'sign me up!',
    closed:   'join the round 2 waitlist →',
  }[phase];
  return (
    <div className="gwj-cta-band">
      <div className="container gwj-cta-band-inner">
        <button className="btn btn-shadow-c2 gwj-cta-band-btn" onClick={() => onCta(phase)}>
          {label}
        </button>
        {phase === 'waitlist' && (
          <span className="mono gwj-cta-band-note">free to join · enrollment opens June 15</span>
        )}
        {phase === 'closed' && (
          <span className="mono gwj-cta-band-note">round 2 coming early fall · free to join</span>
        )}
      </div>
    </div>
  );
}

// expose to window (bundle consistency)
Object.assign(window, {
  usePhase,
  AnnouncementBar, ChallengeHero, ChallengeProofBar, ReelProof,
  WhyNow, HowItWorks, WeekArc, WhoMikaIs, ForNotFor,
  MemberWins, ValueStack, Timeline, FAQ, ChallengeCTA, CtaBand, WaitlistModal,
});
