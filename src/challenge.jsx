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
    },
    open: {
      msg: 'enrollment is OPEN! doors close in',
      target: LAUNCH.enrollCloses,
      cta: 'enroll now →',
      bg: 'var(--c1)',
    },
    closed: {
      msg: "doors are closed for this round!",
      target: null,
      cta: 'join the list for round two →',
      bg: 'var(--ink)',
    },
  }[phase];

  return (
    <div className="gwj-bar" style={{ background: cfg.bg }}>
      <span className="gwj-bar-msg">
        {cfg.msg}
        {cfg.target && <> — <Countdown target={cfg.target} /></>}
      </span>
      <button className="gwj-bar-cta" onClick={() => onCta(phase)}>
        {cfg.cta}
      </button>
    </div>
  );
}

// ============================================================
// CHALLENGE HERO
// ============================================================
function ChallengeHero({ phase, onCta }) {
  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open:     'enroll now — $249 →',
    closed:   'join the list for round two →',
  }[phase];

  return (
    <section className="gwj-hero">
      <div className="container gwj-hero-inner">
        <span className="mono gwj-hero-eyebrow">a 30-day instagram challenge for food creators</span>
        <h1 className="display gwj-hero-headline">
          grow with <span style={{ color: 'var(--c1)' }}>joy.</span>
        </h1>
        <p className="gwj-hero-subhead">
          30 days. one challenge. your instagram finally working <em>for</em> you instead of the other way around!
        </p>
        <p className="gwj-hero-body">
          okay here's the deal! I pulled the actual data on what grew my account and what was a complete waste of my time, and I'm handing you all of it for 30 days. the twist? we're growing your followers AND your engagement at the same time — because those are two totally different jobs done by totally different types of posts, and almost nobody tells you that. let's gooo!
        </p>
        <div className="gwj-hero-cta-wrap">
          <button className="btn gwj-hero-btn btn-shadow-c2" onClick={() => onCta(phase)}>
            {ctaLabel}
          </button>
          {phase === 'waitlist' && (
            <p className="gwj-hero-microcopy">
              be first through the door when enrollment opens june 15! no spam, just updates.
            </p>
          )}
          {phase === 'open' && (
            <p className="gwj-hero-microcopy">
              doors close june 30 — <Countdown target={LAUNCH.enrollCloses} />
            </p>
          )}
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
    { num: '500K',  label: 'followers' },
    { num: '10M',   label: 'monthly views' },
    { num: '2.96M', label: 'views on one reel' },
    { num: '+57K',  label: 'followers from a single post' },
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
// WHY NOW
// ============================================================
function WhyNow() {
  return (
    <section className="gwj-section">
      <div className="container gwj-why-inner">
        <h2 className="display gwj-section-headline">
          why now? honestly, because the internet is shifting and I need you to see it!
        </h2>
        <p className="gwj-prose">
          here's what's actually happening: google is now putting AI-generated recipe summaries right at the top of search results. people get the answer without ever clicking through to your website. studies are showing AI Overviews cutting organic clicks to blogs by nearly 40%. food bloggers — real ones, named ones — are reporting 30 to 80% drops in traffic. raptive, which runs ads for thousands of food creators, called it a potential $2 billion hit to the industry. this is not a blip!
        </p>
        <p className="gwj-prose" style={{ marginTop: 20 }}>
          the way people discover food content is shifting — from "google it" to "scroll for it." nearly half of people now use instagram and tiktok as their search engine. which means the food creators who build a real social presence RIGHT NOW are the ones who win the next few years. the window is wide open and I want you standing in it. that is the entire reason I built this thing!
        </p>
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
      body: "a 2-hour workshop, just me walking you through my entire framework — the one I taught at a conference people paid $2,500 to attend. (yes I will be talking with my hands the whole time.)",
    },
    {
      color: 'var(--c3)',
      num: 'day 2',
      title: 'the masterclass!',
      body: "the deep-dive you can rewatch as many times as you need. zero judgment.",
    },
    {
      color: 'var(--c4)',
      num: 'days 3–30',
      title: 'a drop almost every day!',
      body: "one idea, one real post of mine with the real numbers attached, and one tiny dare to go actually DO it. rest days are built in too, so you can take a break from posting to do lighter tasks that still impact your account. because growing should be fun, not a grind that will burn you out!",
    },
  ];

  return (
    <section className="gwj-section gwj-section-alt">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>the schedule</span>
        <h2 className="display gwj-section-headline">here's how the 30 days actually go!</h2>
        <div className="gwj-how-grid">
          {cards.map((c, i) => (
            <div key={i} className="card gwj-how-card" style={{ background: c.color }}>
              <span className="mono gwj-how-num">{c.num}</span>
              <h3 className="display gwj-how-title">{c.title}</h3>
              <p className="gwj-how-body">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="gwj-dual-goal">
          and the whole time we're working two goals at once — growing your audience AND your engagement — because those are different jobs done by different posts and I'm going to show you exactly which is which!
        </p>
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
      body: "the framework everything hangs on, who you even are online, how to stack your hooks, and my first very honest \"okay don't do what I did.\"",
    },
    {
      color: 'var(--c1)',
      week: 'week 2',
      title: 'the recipe reels!',
      body: "how to actually build one, when to lead with the pretty shot vs jump into the chaos, captions that buy you watch time, and the comment funnel.",
    },
    {
      color: 'var(--c5)',
      week: 'week 3',
      title: 'the personality stuff!',
      body: "the posts that turn followers into actual fans. your opinions, your POV, your weird little life. the room everybody skips.",
    },
    {
      color: 'var(--c3)',
      week: 'week 4',
      title: 'carousels + graduation!',
      body: "the formats that quietly grow you, how to turn one winner into ten, and sending you off with a plan you'll actually keep.",
    },
  ];

  return (
    <section className="gwj-section">
      <div className="container">
        <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>what's inside</span>
        <h2 className="display gwj-section-headline">the 4-week arc!</h2>
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
// WHO MIKA IS
// ============================================================
function WhoMikaIs() {
  return (
    <section className="gwj-section gwj-section-alt">
      <div className="container gwj-who-inner">
        <div className="gwj-who-content">
          <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>about your host</span>
          <h2 className="display gwj-section-headline">okay but who even am I!</h2>
          <p className="gwj-prose">
            I'm Mika! engineer turned food creator, NASM certified nutrition coach, and the person behind{' '}
            <span className="mono">@_joytothefood_</span>. I grew it from 1,001 to 500K in 24 months and I did it the boring, honest way: I posted, I studied what worked, I did more of that. there is no secret. one of my reels added 57,000 followers in a few days and I can show you EXACTLY why it worked — and I'll also show you the ones that flopped, because that is the part everyone conveniently leaves out! receipts over theory, every single time.
          </p>
          <div className="gwj-heard-on">
            <span className="mono gwj-heard-label">as heard on</span>
            <div className="gwj-heard-pills">
              <span className="gwj-heard-pill">Food Blogger Pro</span>
              <span className="gwj-heard-pill">Eat Blog Talk</span>
            </div>
          </div>
        </div>
        <div className="gwj-who-photo">
          <div className="photo has-image gwj-who-img-wrap">
            <img src="images/mika-headshot.jpg" alt="Mika Kinney" className="photo-img" loading="lazy" />
          </div>
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
    "you're a food creator (or you want to be!)",
    "you're already posting and it's just not working",
    "you're sick of advice that doesn't fit the algorithm that exists right now",
    "you want an actual plan, not vibes",
  ];
  const notItems = [
    "you want a magic go-viral button (not real, won't pretend!)",
    "you're not willing to actually post during the 30 days — it's a CHALLENGE, you gotta play!",
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
    open:     'enroll now — $249 →',
    closed:   'join the list for round two →',
  }[phase];

  return (
    <section className="gwj-section gwj-section-alt">
      <div className="container gwj-stack-wrap">
        <h2 className="display gwj-section-headline">
          let's add this all up, because I want you to SEE what you're getting!
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
          <div className="gwj-stack-divider" />
          <div className="gwj-stack-row gwj-stack-total">
            <span className="gwj-stack-label">total value</span>
            <span className="gwj-stack-value">$2,556</span>
          </div>
        </div>
        <div className="gwj-price-reveal">
          <div className="gwj-price-row">
            <span className="mono gwj-price-eyebrow">your price</span>
            <span className="display gwj-price-amount">$249.</span>
          </div>
          <p className="gwj-price-note">
            that's the whole thing, all of it, for less than a single one of my 1:1 audits!
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
    { label: 'waitlist open now',       color: 'var(--c3)', active: true },
    { label: 'enrollment opens june 15', color: 'var(--c2)' },
    { label: 'doors close june 30',      color: 'var(--c1)' },
    { label: 'we start july 1',          color: 'var(--c4)' },
    { label: '30 days of drops',         color: 'var(--c5)' },
  ];

  return (
    <section className="gwj-section">
      <div className="container">
        <h2 className="display gwj-section-headline" style={{ textAlign: 'center' }}>
          how this all shakes out!
        </h2>
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
      </div>
    </section>
  );
}

// ============================================================
// FAQ — accordion
// ============================================================
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: "when does it start?",
      a: "july 1! mark your calendar!" },
    { q: "how long is it?",
      a: "30 days!" },
    { q: "what if I fall behind?",
      a: "there are rest days built in and everything lives in your inbox to come back to. no shame ever." },
    { q: "is this for total beginners or people who already have an account?",
      a: "both! I'll tell you which parts to nail first depending on where you're at." },
    { q: "how is it delivered?",
      a: "day 1 is live (and recorded if you can't make it!), day 2 is a masterclass, and days 3–30 land right in your email." },
    { q: "do I have to post every single day?",
      a: "nope! but the more you actually do the dares, the more this works. that's just the honest truth." },
    { q: "what if I can't make the live workshop?",
      a: "it's recorded, you're completely covered." },
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
  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open:     'enroll now — $249 →',
    closed:   'join the list for round two →',
  }[phase];
  const target = phase === 'waitlist' ? LAUNCH.enrollOpens
               : phase === 'open'     ? LAUNCH.enrollCloses
               : null;

  return (
    <section className="gwj-final-cta">
      <div className="container gwj-final-cta-inner">
        <h2 className="display gwj-final-headline">
          ready? let's grow with <span style={{ color: 'var(--c1)' }}>joy!</span>
        </h2>
        <p className="gwj-final-sub">
          30 days. real data. your instagram finally working for you.
        </p>
        <button className="btn btn-shadow-c2 gwj-final-btn" onClick={() => onCta(phase)}>
          {ctaLabel}
        </button>
        {target && (
          <p className="mono gwj-final-countdown">
            {phase === 'waitlist' ? 'enrollment opens in ' : 'doors close in '}
            <Countdown target={target} />
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
  const title = isRoundTwo ? "join the list for round two!" : "you're almost in!";
  const sub   = isRoundTwo
    ? "leave your email and you'll be first to know when round two opens."
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
                  something went wrong — try again or email{' '}
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

// expose to window (bundle consistency)
Object.assign(window, {
  usePhase,
  AnnouncementBar, ChallengeHero, ChallengeProofBar,
  WhyNow, HowItWorks, WeekArc, WhoMikaIs, ForNotFor,
  ValueStack, Timeline, FAQ, ChallengeCTA, WaitlistModal,
});
