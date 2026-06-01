/* MIKA creative — compiled bundle. Edit src/*.jsx then run `npm run build`. */


// === src/stubs.jsx ===

"use strict";

// Production stubs for the dev-only "Tweaks" panel that ships with the
// Claude.ai artifact. The original `useTweaks` hook coordinated runtime
// theme switching with a host iframe; in production the panel is hidden
// and tweaks resolve to whatever defaults the App passes in.

function useTweaks(defaults) {
  return [defaults, () => {}];
}
function TweaksPanel() {
  return null;
}
function TweakSection() {
  return null;
}
function TweakRadio() {
  return null;
}

// === src/launch.js ===

"use strict";

// Grow with Joy — launch configuration (single source of truth)
// No import/export — compiled into the global bundle.
// Kit URLs are placeholders; replace with real values before go-live.

var LAUNCH = {
  name: "Grow with Joy",
  price: 249,
  timezone: "America/Chicago",
  enrollOpens: "2026-06-15T00:00:00-05:00",
  enrollCloses: "2026-06-30T23:59:59-05:00",
  challengeStarts: "2026-07-01T00:00:00-05:00",
  kitCommerceUrl: "#",
  // <<KIT_COMMERCE_CHECKOUT_URL>>
  kitWaitlistUrl: "#" // fallback href if Netlify function not available
};
function getPhase(now) {
  if (!now) now = new Date();
  var open = new Date(LAUNCH.enrollOpens);
  var close = new Date(LAUNCH.enrollCloses);
  if (now < open) return "waitlist";
  if (now <= close) return "open";
  return "closed";
}

// === src/challenge.jsx ===

"use strict";

/* global React, LAUNCH, getPhase */
// Grow with Joy — challenge page components
// Compiled into the global bundle after launch.js, so LAUNCH + getPhase are available.
var {
  useState,
  useEffect
} = React;

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
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff % 86400000 / 3600000);
  const mins = Math.floor(diff % 3600000 / 60000);
  const secs = Math.floor(diff % 60000 / 1000);
  return {
    days,
    hours,
    mins,
    secs,
    done: diff === 0
  };
}
function Countdown({
  target
}) {
  const {
    days,
    hours,
    mins,
    secs,
    done
  } = useCountdown(target);
  if (done || !target) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "gwj-countdown"
  }, days > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, days), "d "), /*#__PURE__*/React.createElement("strong", null, hours), "h ", /*#__PURE__*/React.createElement("strong", null, mins), "m ", /*#__PURE__*/React.createElement("strong", null, secs), "s");
}

// ============================================================
// ANNOUNCEMENT BAR
// ============================================================
function AnnouncementBar({
  phase,
  onCta
}) {
  const cfg = {
    waitlist: {
      msg: 'grow with joy is coming! enrollment opens june 15',
      target: LAUNCH.enrollOpens,
      cta: 'join the waitlist →',
      bg: 'var(--c3)'
    },
    open: {
      msg: 'enrollment is OPEN! doors close in',
      target: LAUNCH.enrollCloses,
      cta: 'enroll now →',
      bg: 'var(--c1)'
    },
    closed: {
      msg: "doors are closed for this round!",
      target: null,
      cta: 'join the list for round two →',
      bg: 'var(--ink)'
    }
  }[phase];
  return /*#__PURE__*/React.createElement("div", {
    className: "gwj-bar",
    style: {
      background: cfg.bg
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gwj-bar-msg"
  }, cfg.msg, cfg.target && /*#__PURE__*/React.createElement(React.Fragment, null, " \u2014 ", /*#__PURE__*/React.createElement(Countdown, {
    target: cfg.target
  }))), /*#__PURE__*/React.createElement("button", {
    className: "gwj-bar-cta",
    onClick: () => onCta(phase)
  }, cfg.cta));
}

// ============================================================
// CHALLENGE HERO
// ============================================================
function ChallengeHero({
  phase,
  onCta
}) {
  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open: 'enroll now — $249 →',
    closed: 'join the list for round two →'
  }[phase];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-hero-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono gwj-hero-eyebrow"
  }, "a 30-day instagram challenge for food creators"), /*#__PURE__*/React.createElement("h1", {
    className: "display gwj-hero-headline"
  }, "grow with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "joy.")), /*#__PURE__*/React.createElement("p", {
    className: "gwj-hero-subhead"
  }, "30 days. one challenge. your instagram finally working ", /*#__PURE__*/React.createElement("em", null, "for"), " you instead of the other way around!"), /*#__PURE__*/React.createElement("p", {
    className: "gwj-hero-body"
  }, "okay here's the deal! I grew", ' ', /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: '0.88em'
    }
  }, "@_joytothefood_"), ' ', "from 1,001 to 500,000 followers in two years. in THIS algorithm! in a saturated niche! with a two-person team! not back in 2016 when instagram was easy, like, right now. and listen, I'm not a guru and I do not have secret hacks, I promise you they don't exist! what I have is receipts. I pulled the actual data on what grew my account and what was a complete waste of my time, and I'm handing you all of it for 30 days. we're growing your followers AND your engagement, because (plot twist!) those are two totally different jobs and nobody tells you that. let's gooo!"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-hero-cta-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn gwj-hero-btn btn-shadow-c2",
    onClick: () => onCta(phase)
  }, ctaLabel), phase === 'waitlist' && /*#__PURE__*/React.createElement("p", {
    className: "gwj-hero-microcopy"
  }, "be first through the door when enrollment opens june 15! no spam, just updates."), phase === 'open' && /*#__PURE__*/React.createElement("p", {
    className: "gwj-hero-microcopy"
  }, "doors close june 30 \u2014 ", /*#__PURE__*/React.createElement(Countdown, {
    target: LAUNCH.enrollCloses
  })))));
}

// ============================================================
// CHALLENGE PROOF BAR (reuses existing proof-bar CSS)
// ============================================================
function ChallengeProofBar() {
  const stats = [{
    num: '500K',
    label: 'followers'
  }, {
    num: '10M',
    label: 'monthly views'
  }, {
    num: '2.96M',
    label: 'views on one reel'
  }, {
    num: '+57K',
    label: 'followers from a single post'
  }];
  const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)'];
  return /*#__PURE__*/React.createElement("section", {
    className: "proof-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-bar-grid gwj-proof-grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "proof-bar-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display proof-bar-num",
    style: {
      color: colors[i]
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "mono proof-bar-label"
  }, s.label))))));
}

// ============================================================
// WHY NOW
// ============================================================
function WhyNow() {
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-why-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline"
  }, "why now? honestly, because the internet is shifting and I need you to see it!"), /*#__PURE__*/React.createElement("p", {
    className: "gwj-prose"
  }, "here's what's actually happening: google is now putting AI-generated recipe summaries right at the top of search results. people get the answer without ever clicking through to your website. studies are showing AI Overviews cutting organic clicks to blogs by nearly 40%. food bloggers \u2014 real ones, named ones \u2014 are reporting 30 to 80% drops in traffic. raptive, which runs ads for thousands of food creators, called it a potential $2 billion hit to the industry. this is not a blip!"), /*#__PURE__*/React.createElement("p", {
    className: "gwj-prose",
    style: {
      marginTop: 20
    }
  }, "the way people discover food content is shifting \u2014 from \"google it\" to \"scroll for it.\" nearly half of people now use instagram and tiktok as their search engine. which means the food creators who build a real social presence RIGHT NOW are the ones who win the next few years. the window is wide open and I want you standing in it. that is the entire reason I built this thing!")));
}

// ============================================================
// HOW IT WORKS — 3 cards
// ============================================================
function HowItWorks() {
  const cards = [{
    color: 'var(--c1)',
    num: 'day 1',
    title: 'we go LIVE!',
    body: "a 2-hour workshop, just me walking you through my entire framework — the one I taught at a conference people paid $2,500 to attend. (yes I will be talking with my hands the whole time.)"
  }, {
    color: 'var(--c3)',
    num: 'day 2',
    title: 'the masterclass!',
    body: "the deep-dive you can rewatch as many times as you need. zero judgment."
  }, {
    color: 'var(--c4)',
    num: 'days 3–30',
    title: 'a drop almost every day!',
    body: "one idea, one real post of mine with the real numbers attached, and one tiny dare to go actually DO it. rest days are built in too — and they're not empty days. they're things like a study day to find accounts you genuinely love, an engagement day to go comment on creators who inspire you, or just getting outside somewhere that fills your creative tank back up. the kind of days that make your posting days better."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section gwj-section-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: 'flex-start'
    }
  }, "the schedule"), /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline"
  }, "here's how the 30 days actually go!"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-how-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card gwj-how-card",
    style: {
      background: c.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono gwj-how-num"
  }, c.num), /*#__PURE__*/React.createElement("h3", {
    className: "display gwj-how-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "gwj-how-body"
  }, c.body)))), /*#__PURE__*/React.createElement("p", {
    className: "gwj-dual-goal"
  }, "and the whole time we're working two goals at once \u2014 growing your audience AND your engagement \u2014 because those are different jobs done by different posts and I'm going to show you exactly which is which!")));
}

// ============================================================
// WEEK ARC — 4 cards
// ============================================================
function WeekArc() {
  const weeks = [{
    color: 'var(--c2)',
    week: 'week 1',
    title: 'your feed is a house!',
    body: "the framework everything hangs on, who you even are online, how to stack your hooks, and my first very honest \"okay don't do what I did.\""
  }, {
    color: 'var(--c1)',
    week: 'week 2',
    title: 'the recipe reels!',
    body: "how to actually build one, when to lead with the pretty shot vs jump into the chaos, captions that buy you watch time, and the comment funnel."
  }, {
    color: 'var(--c5)',
    week: 'week 3',
    title: 'the personality stuff!',
    body: "the posts that turn followers into actual fans. your opinions, your POV, your weird little life. the room everybody skips."
  }, {
    color: 'var(--c3)',
    week: 'week 4',
    title: 'carousels + graduation!',
    body: "the formats that quietly grow you, how to turn one winner into ten, and sending you off with a plan you'll actually keep."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: 'flex-start'
    }
  }, "what's inside"), /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline"
  }, "the 4-week arc!"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-weeks-grid"
  }, weeks.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card gwj-week-card",
    style: {
      background: w.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono gwj-week-num"
  }, w.week), /*#__PURE__*/React.createElement("h3", {
    className: "display gwj-week-title"
  }, w.title), /*#__PURE__*/React.createElement("p", {
    className: "gwj-week-body"
  }, w.body))))));
}

// ============================================================
// WHO MIKA IS
// ============================================================
function WhoMikaIs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section gwj-section-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-who-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-who-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: 'flex-start'
    }
  }, "about your host"), /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline"
  }, "okay but who even am I!"), /*#__PURE__*/React.createElement("p", {
    className: "gwj-prose"
  }, "I'm Mika! engineer turned food creator, NASM certified nutrition coach, and the person behind", ' ', /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "@_joytothefood_"), ". I grew it from 1,001 to 500K in 24 months and I did it the boring, honest way: I posted, I studied what worked, I did more of that. there is no secret. one of my reels added 57,000 followers in a few days and I can show you EXACTLY why it worked \u2014 and I'll also show you the ones that flopped, because that is the part everyone conveniently leaves out! receipts over theory, every single time."), /*#__PURE__*/React.createElement("div", {
    className: "gwj-heard-on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono gwj-heard-label"
  }, "as heard on"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-heard-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gwj-heard-pill"
  }, "Food Blogger Pro"), /*#__PURE__*/React.createElement("span", {
    className: "gwj-heard-pill"
  }, "Eat Blog Talk")))), /*#__PURE__*/React.createElement("div", {
    className: "gwj-who-photo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-photo-placeholder"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-soft)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, "photo of mika")))));
}

// ============================================================
// FOR / NOT FOR
// ============================================================
function ForNotFor() {
  const forItems = ["you're a food creator (or you want to be!)", "you're already posting and it's just not working", "you're sick of advice that doesn't fit the algorithm that exists right now", "you want an actual plan, not vibes"];
  const notItems = ["you want a magic go-viral button (not real, won't pretend!)", "you're not willing to actually post during the 30 days — it's a CHALLENGE, you gotta play!"];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-fit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-fit-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-fit-header gwj-fit-header-yes"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mono gwj-fit-eyebrow"
  }, "this is for you if")), /*#__PURE__*/React.createElement("ul", {
    className: "gwj-fit-list"
  }, forItems.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "gwj-fit-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gwj-fit-bullet",
    style: {
      background: 'var(--c3)'
    }
  }, "\u2713"), item)))), /*#__PURE__*/React.createElement("div", {
    className: "gwj-fit-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-fit-header gwj-fit-header-no"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mono gwj-fit-eyebrow"
  }, "this is NOT for you if")), /*#__PURE__*/React.createElement("ul", {
    className: "gwj-fit-list"
  }, notItems.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "gwj-fit-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gwj-fit-bullet",
    style: {
      background: 'var(--ink)',
      opacity: 0.3
    }
  }, "\u2717"), item))))));
}

// ============================================================
// VALUE STACK + PRICE
// ============================================================
function ValueStack({
  phase,
  onCta
}) {
  const items = [{
    label: "Day 1: live 2-hour workshop with Mika",
    value: "$997",
    bonus: false
  }, {
    label: "Day 2: the masterclass",
    value: "$297",
    bonus: false
  }, {
    label: "Days 3–30: daily-drop system (28 drops + dares + the full framework)",
    value: "$997",
    bonus: false
  }, {
    label: "Bonus: the AI prompt kit",
    value: "$79",
    bonus: true
  }, {
    label: "Bonus: the hook swipe file",
    value: "$79",
    bonus: true
  }, {
    label: "Bonus: the filming setup checklist",
    value: "$39",
    bonus: true
  }, {
    label: "Bonus: the house cheat sheet",
    value: "$39",
    bonus: true
  }, {
    label: "Bonus: the 5 pre-post checks",
    value: "$29",
    bonus: true
  }];
  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open: 'enroll now — $249 →',
    closed: 'join the list for round two →'
  }[phase];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section gwj-section-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-stack-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline"
  }, "let's add this all up, because I want you to SEE what you're getting!"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-stack"
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `gwj-stack-row${item.bonus ? ' gwj-stack-row-bonus' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "gwj-stack-label"
  }, item.bonus && /*#__PURE__*/React.createElement("span", {
    className: "gwj-stack-bonus-chip"
  }, "bonus"), item.label), /*#__PURE__*/React.createElement("span", {
    className: "gwj-stack-value"
  }, item.value))), /*#__PURE__*/React.createElement("div", {
    className: "gwj-stack-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gwj-stack-row gwj-stack-total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gwj-stack-label"
  }, "total value"), /*#__PURE__*/React.createElement("span", {
    className: "gwj-stack-value"
  }, "$2,556"))), /*#__PURE__*/React.createElement("div", {
    className: "gwj-price-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-price-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono gwj-price-eyebrow"
  }, "your price"), /*#__PURE__*/React.createElement("span", {
    className: "display gwj-price-amount"
  }, "$249.")), /*#__PURE__*/React.createElement("p", {
    className: "gwj-price-note"
  }, "that's the whole thing, all of it, for less than a single one of my 1:1 audits!"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-shadow-c2 gwj-stack-cta",
    onClick: () => onCta(phase)
  }, ctaLabel))));
}

// ============================================================
// TIMELINE
// ============================================================
function Timeline() {
  const steps = [{
    label: 'waitlist open now',
    color: 'var(--c3)',
    active: true
  }, {
    label: 'enrollment opens june 15',
    color: 'var(--c2)'
  }, {
    label: 'doors close june 30',
    color: 'var(--c1)'
  }, {
    label: 'we start july 1',
    color: 'var(--c4)'
  }, {
    label: '30 days of drops',
    color: 'var(--c5)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline",
    style: {
      textAlign: 'center'
    }
  }, "how this all shakes out!"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-timeline"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "gwj-timeline-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-timeline-dot-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: `gwj-timeline-dot${s.active ? ' is-active' : ''}`,
    style: {
      background: s.active ? s.color : 'var(--bg)',
      borderColor: s.active ? s.color : 'var(--ink)'
    }
  }), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "gwj-timeline-line"
  })), /*#__PURE__*/React.createElement("span", {
    className: "mono gwj-timeline-label",
    style: {
      color: s.active ? s.color : 'var(--ink)'
    }
  }, s.label))))));
}

// ============================================================
// FAQ — accordion
// ============================================================
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [{
    q: "when does it start?",
    a: "july 1! mark your calendar!"
  }, {
    q: "how long is it?",
    a: "30 days!"
  }, {
    q: "what if I fall behind?",
    a: "there are rest days built in and everything lives in your inbox to come back to. no shame ever."
  }, {
    q: "is this for total beginners or people who already have an account?",
    a: "both! I'll tell you which parts to nail first depending on where you're at."
  }, {
    q: "how is it delivered?",
    a: "day 1 is live (and recorded if you can't make it!), day 2 is a masterclass, and days 3–30 land right in your email."
  }, {
    q: "do I have to post every single day?",
    a: "nope! but the more you actually do the dares, the more this works. that's just the honest truth."
  }, {
    q: "what if I can't make the live workshop?",
    a: "it's recorded, you're completely covered."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-section gwj-section-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-faq-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-section-headline"
  }, "questions? I've got answers!"), /*#__PURE__*/React.createElement("div", {
    className: "gwj-faq"
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `gwj-faq-item${openIdx === i ? ' is-open' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "gwj-faq-q",
    onClick: () => setOpenIdx(openIdx === i ? null : i)
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
    className: "gwj-faq-icon"
  }, openIdx === i ? '−' : '+')), openIdx === i && /*#__PURE__*/React.createElement("p", {
    className: "gwj-faq-a"
  }, f.a))))));
}

// ============================================================
// FINAL CTA BAND
// ============================================================
function ChallengeCTA({
  phase,
  onCta
}) {
  const ctaLabel = {
    waitlist: 'join the waitlist →',
    open: 'enroll now — $249 →',
    closed: 'join the list for round two →'
  }[phase];
  const target = phase === 'waitlist' ? LAUNCH.enrollOpens : phase === 'open' ? LAUNCH.enrollCloses : null;
  return /*#__PURE__*/React.createElement("section", {
    className: "gwj-final-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container gwj-final-cta-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display gwj-final-headline"
  }, "ready? let's grow with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "joy!")), /*#__PURE__*/React.createElement("p", {
    className: "gwj-final-sub"
  }, "30 days. real data. your instagram finally working for you."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-shadow-c2 gwj-final-btn",
    onClick: () => onCta(phase)
  }, ctaLabel), target && /*#__PURE__*/React.createElement("p", {
    className: "mono gwj-final-countdown"
  }, phase === 'waitlist' ? 'enrollment opens in ' : 'doors close in ', /*#__PURE__*/React.createElement(Countdown, {
    target: target
  }))));
}

// ============================================================
// WAITLIST MODAL
// ============================================================
function WaitlistModal({
  open,
  onClose,
  phase
}) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    if (!open) {
      setStatus('idle');
      setEmail('');
      setFirstName('');
    }
  }, [open]);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!open) return null;
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          firstName
        })
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
  const sub = isRoundTwo ? "leave your email and you'll be first to know when round two opens." : "drop your email and you'll be first through the door when enrollment opens june 15! no spam, just updates.";
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-overlay",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gwj-modal"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "booking-close gwj-modal-close"
  }, "\xD7"), status === 'success' ? /*#__PURE__*/React.createElement("div", {
    className: "gwj-modal-success"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 56,
      lineHeight: 1
    }
  }, "\uD83C\uDF31"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 36,
      margin: '20px 0 8px',
      lineHeight: 1.1
    }
  }, "you're on the list!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)',
      margin: 0
    }
  }, "watch your inbox. no spam, just updates.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c3)',
      display: 'inline-block',
      marginBottom: 20
    }
  }, "grow with joy"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 32,
      margin: '0 0 10px',
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      margin: '0 0 28px',
      lineHeight: 1.6
    }
  }, sub), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "gwj-modal-form"
  }, /*#__PURE__*/React.createElement("input", {
    className: "booking-form-input",
    type: "text",
    placeholder: "first name (optional)",
    value: firstName,
    onChange: e => setFirstName(e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    className: "booking-form-input",
    type: "email",
    required: true,
    placeholder: "your email address",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-shadow-c3",
    disabled: status === 'loading',
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, status === 'loading' ? 'joining...' : 'count me in →'), status === 'error' && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--c1)',
      fontSize: 13,
      margin: '10px 0 0',
      textAlign: 'center'
    }
  }, "something went wrong \u2014 try again or email", ' ', /*#__PURE__*/React.createElement("a", {
    href: "mailto:mika@joytothefood.com",
    className: "link"
  }, "mika@joytothefood.com"))))));
}

// expose to window (bundle consistency)
Object.assign(window, {
  usePhase,
  AnnouncementBar,
  ChallengeHero,
  ChallengeProofBar,
  WhyNow,
  HowItWorks,
  WeekArc,
  WhoMikaIs,
  ForNotFor,
  ValueStack,
  Timeline,
  FAQ,
  ChallengeCTA,
  WaitlistModal
});

// === src/app-1.jsx ===

"use strict";

/* global React */
var {
  useState,
  useEffect
} = React;

// ============================================================
// WORDMARK
// ============================================================
function Wordmark({
  size = 36,
  showCreative = true,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `wordmark ${className}`,
    style: {
      fontSize: size
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mika"
  }, /*#__PURE__*/React.createElement("span", null, "m"), /*#__PURE__*/React.createElement("span", null, "i"), /*#__PURE__*/React.createElement("span", null, "k"), /*#__PURE__*/React.createElement("span", null, "a")), showCreative && /*#__PURE__*/React.createElement("span", {
    className: "creative",
    style: {
      fontSize: size * 0.32
    }
  }, "creative"));
}

// ============================================================
// NAV
// ============================================================
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav-logo",
    onClick: close
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 34
  })), /*#__PURE__*/React.createElement("button", {
    className: `nav-toggle ${open ? 'is-open' : ''}`,
    "aria-label": "Toggle menu",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav-toggle-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: `nav-links ${open ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "link",
    onClick: close
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#speaking",
    className: "link",
    onClick: close
  }, "Speaking"), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "btn sm",
    onClick: close
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2726"), " Work with me"))));
}

// ============================================================
// HERO - two layouts
// ============================================================
function HeroBigType({
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "@_joytothefood_ \xB7 500K"), /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c2)'
    }
  }, "1,001 to 500K in 24 months"), /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c5)'
    }
  }, "by food creators, for food creators")), /*#__PURE__*/React.createElement("h1", {
    className: "display hero-headline"
  }, "instagram", /*#__PURE__*/React.createElement("br", null), "that ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "actually"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "works.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-body"
  }, "I'm Mika - engineer turned food creator. I grew ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: '0.85em'
    }
  }, "@_joytothefood_"), " from 1,001 to 500K in two years, in the current algorithm, in a saturated niche, with a two-person team. Not in 2016 when Instagram was easy. Now.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I'll show you exactly what moved the needle."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Let's work together \u2192")))));
}
function HeroImageGrid({
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const photos = [{
    c: 'var(--c2)',
    label: '1K screenshot · 2024'
  }, {
    c: 'var(--c3)',
    label: 'reel · 2.1M views'
  }, {
    c: 'var(--c1)',
    label: 'mika filming'
  }, {
    c: 'var(--c4)',
    label: '500K screenshot · now'
  }, {
    c: 'var(--c5)',
    label: 'mika + dan'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      paddingTop: 32,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-photos"
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "photo",
    style: {
      background: p.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-image-grid-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "@_joytothefood_ \xB7 500K followers \xB7 10M monthly views"), /*#__PURE__*/React.createElement("h1", {
    className: "display hero-image-grid-headline"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "instagram"), " that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "actually"), " works."), /*#__PURE__*/React.createElement("p", {
    className: "hero-image-grid-sub"
  }, "I grew @_joytothefood_ from 1K to 500K in 24 months, in the current algorithm, in a saturated niche. I'll show you how."), /*#__PURE__*/React.createElement("div", {
    className: "hero-image-grid-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Let's work together \u2192")))));
}

// ============================================================
// PROOF BAR - the receipts
// ============================================================
function ProofBar() {
  const stats = [{
    num: '500K',
    label: 'IG followers'
  }, {
    num: '10M',
    label: 'monthly views'
  }, {
    num: '#1',
    label: 'revenue source'
  }, {
    num: '4',
    label: 'speaking engagements'
  }, {
    num: '10',
    label: 'podcast features'
  }];
  const colors = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)'];
  return /*#__PURE__*/React.createElement("section", {
    className: "proof-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-bar-grid"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "proof-bar-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display proof-bar-num",
    style: {
      color: colors[i]
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "mono proof-bar-label"
  }, s.label))))));
}

// ============================================================
// MARQUEE STRIP
// ============================================================
function Strip() {
  const items = ['the mastermind', 'account audit', 'in your pocket day', 'client management', 'the playbook ebook', '1k → 500K in 24 months'];
  const Set = () => /*#__PURE__*/React.createElement("span", null, items.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 36
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    className: "strip-dot"
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "strip-track"
  }, /*#__PURE__*/React.createElement(Set, null), /*#__PURE__*/React.createElement(Set, null), /*#__PURE__*/React.createElement(Set, null), /*#__PURE__*/React.createElement(Set, null)));
}

// ============================================================
// SERVICES - 5 offers
// ============================================================
const SERVICES = [{
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
  detailsCta: 'Tell me more'
}, {
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
  blurb: "I go through your entire Instagram like I'd go through my own — hooks, content strategy, monetization gaps, profile. You get a recorded video walkthrough and a written action plan you can start using the same week.",
  bullets: ['Recorded video walkthrough', 'Hook + content analysis', 'Monetization gaps', 'Written action plan', '1 week delivery'],
  cta: 'Book your audit',
  details: {
    eyebrow: 'What to expect when you book',
    timeline: [{
      n: 1,
      label: 'Book',
      sub: 'Pick a time, share a few details, pay'
    }, {
      n: 2,
      label: 'Intake',
      sub: 'Welcome email with your Drive folder + intake form, within 24 hrs'
    }, {
      n: 3,
      label: 'Kickoff call',
      sub: '30 min on Zoom, within 24 business hrs of your intake'
    }, {
      n: 4,
      label: 'Your audit',
      sub: 'Delivered within 7 business days of the kickoff'
    }, {
      n: 5,
      label: 'Optional debrief',
      sub: '30-min walkthrough call, included'
    }],
    prep: {
      title: 'what you\'ll do',
      intro: 'Most of the work happens before our kickoff call. Plan to spend about 30–45 minutes on intake — the more context I have, the sharper the audit.',
      items: ['Fill out a short intake form about your goals, niche, and what\'s been working (and what hasn\'t)', 'Export your Meta Business Suite data (last 90 days) — full instructions in your welcome email', 'Take a handful of Instagram Insights screenshots from the app', 'Drop 5 reels that underperformed that you were expecting to do well.']
    },
    deliverables: {
      title: 'what you\'ll get',
      items: [{
        label: 'Recorded Loom walkthrough (25–35 min)',
        sub: 'Your profile, content patterns, hook breakdowns, monetization gaps, and the top 3 priorities to tackle first.'
      }, {
        label: 'Written action plan (Google Doc)',
        sub: 'Includes immediate priorities, content recommendations, monetization opportunities, profile fixes, and one thing to stop doing immediately.'
      }, {
        label: 'Optional 30-min debrief call',
        sub: 'Walk through the audit live and ask questions in real time. Included, no extra charge.'
      }]
    }
  }
}, {
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
    timeline: [{
      n: 1,
      label: 'Book',
      sub: 'Pick a time, share a few details, pay'
    }, {
      n: 2,
      label: 'Intake',
      sub: 'Welcome email with your Drive folder + intake form, within 24 hrs'
    }, {
      n: 3,
      label: 'Kickoff call',
      sub: '30 min on Zoom, within 24 business hrs of your intake'
    }, {
      n: 4,
      label: 'Your audit',
      sub: 'Delivered within 7 business days of the kickoff'
    }, {
      n: 5,
      label: 'Optional debrief',
      sub: '30-min walkthrough call, included'
    }],
    prep: {
      title: 'what you\'ll do',
      intro: 'Most of the work happens before our kickoff call. Plan to spend about 30–45 minutes on intake — the more context I have, the sharper the audit.',
      items: ['Fill out a short intake form about your goals, niche, and what\'s been working (and what hasn\'t)', 'Export your Meta Business Suite data (last 90 days) — full instructions in your welcome email', 'Take a handful of Instagram Insights screenshots from the app', 'Drop 5 reels that underperformed that you were expecting to do well.']
    },
    deliverables: {
      title: 'what you\'ll get',
      items: [{
        label: 'Recorded Loom walkthrough (25–35 min)',
        sub: 'Your profile, content patterns, hook breakdowns, monetization gaps, and the top 3 priorities to tackle first.'
      }, {
        label: 'Written action plan (Google Doc)',
        sub: 'Includes immediate priorities, content recommendations, monetization opportunities, profile fixes, and one thing to stop doing immediately.'
      }, {
        label: 'Optional 30-min debrief call',
        sub: 'Walk through the audit live and ask questions in real time. Included, no extra charge.'
      }]
    }
  },
  extras: {
    title: 'plus 4 pre-post reel reviews',
    body: 'You\'ve got 30 days from delivery to use 4 pre-post reviews. When you have a reel ready, drop it in your Drive folder with a quick note on your planned text overlay, voice hook, and caption first line. I\'ll get back to you within 5 business days with notes covering hook strength, lighting, clip pacing, and what to fix before you post.',
    bullets: []
  }
}, {
  id: 'pocket',
  tag: '04 / 1:1',
  color: 'var(--c4)',
  title: 'In Your Pocket Day',
  price: '$1,000',
  sub: 'standalone',
  comingSoon: true,
  blurb: "One full day of direct access via Voxer or WhatsApp. Film, send, get feedback — in real time.",
  bullets: ['8 hrs of Voxer/WhatsApp', 'Real-time content feedback', 'Hook + caption rewrites', 'Lighting & shot review'],
  cta: 'Grab your day'
}];
const EBOOKS = [{
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
  cta: 'Get the growth ebook'
}, {
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
  cta: 'Get the monetize ebook'
}];
function ScarcityBadge({
  lines
}) {
  const POINTS = "50,2 57,8 65,4 70,12 78,11 80,20 89,22 88,31 96,35 93,43 98,50 93,57 96,65 88,70 89,79 80,80 78,89 70,88 65,96 57,93 50,98 43,93 35,96 31,88 22,89 20,80 11,79 12,70 4,65 8,57 2,50 8,43 4,35 12,31 11,22 20,20 22,11 31,12 35,4 43,8";
  const n = lines.length;
  const yPositions = n === 1 ? [50] : n === 2 ? [44, 57] : [40, 50, 61];
  return /*#__PURE__*/React.createElement("div", {
    className: "scarcity-badge-sticker"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: POINTS,
    fill: "var(--c2)"
  }), lines.map((line, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: "50",
    y: yPositions[i],
    textAnchor: "middle",
    fontSize: n <= 2 ? "12" : "11",
    fontWeight: "700",
    fill: "var(--ink)",
    fontFamily: "'DM Mono', ui-monospace, monospace"
  }, line.toUpperCase()))));
}
function ServiceCard({
  s,
  featured,
  compact,
  onBook,
  onSeeDetails,
  onWaitlist
}) {
  const isComingSoon = s.comingSoon;
  return /*#__PURE__*/React.createElement("div", {
    className: `card service-card ${featured ? 'featured' : ''} ${compact ? 'compact' : ''}`,
    style: {
      background: featured ? s.color : 'var(--card)',
      opacity: isComingSoon ? 0.55 : 1,
      filter: isComingSoon ? 'grayscale(0.7)' : 'none'
    },
    onMouseEnter: e => {
      if (isComingSoon) {
        e.currentTarget.style.opacity = '0.85';
        e.currentTarget.style.filter = 'grayscale(0.3)';
      }
    },
    onMouseLeave: e => {
      if (isComingSoon) {
        e.currentTarget.style.opacity = '0.55';
        e.currentTarget.style.filter = 'grayscale(0.7)';
      }
    }
  }, isComingSoon && /*#__PURE__*/React.createElement("div", {
    className: "service-card-badge coming-soon"
  }, "Coming soon"), s.badge && s.badgeLines && /*#__PURE__*/React.createElement(ScarcityBadge, {
    lines: s.badgeLines
  }), /*#__PURE__*/React.createElement("div", {
    className: "service-card-tag-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: featured ? 'var(--bg)' : s.color
    }
  }, s.tag)), !isComingSoon && /*#__PURE__*/React.createElement("div", {
    className: "service-card-price-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "service-card-price-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display service-card-price"
  }, s.trialPrice ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "service-card-price-was"
  }, s.price), s.trialPrice) : s.price), s.sub && /*#__PURE__*/React.createElement("div", {
    className: "mono service-card-price-sub"
  }, s.sub)), s.trialNote && /*#__PURE__*/React.createElement("div", {
    className: "mono service-card-trial-note"
  }, s.trialNote), s.savingsNote && /*#__PURE__*/React.createElement("div", {
    className: "mono service-card-savings-note"
  }, s.savingsNote)), /*#__PURE__*/React.createElement("h3", {
    className: "display service-card-title"
  }, s.title, s.subtitle && /*#__PURE__*/React.createElement("div", {
    className: "service-card-subtitle"
  }, s.subtitle)), /*#__PURE__*/React.createElement("p", {
    className: "service-card-blurb"
  }, s.blurb), /*#__PURE__*/React.createElement("ul", {
    className: "service-card-bullets"
  }, s.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "service-card-bullet"
  }, /*#__PURE__*/React.createElement("span", {
    className: "service-card-check",
    style: {
      background: featured ? 'var(--ink)' : s.color,
      color: featured ? s.color : 'var(--ink)'
    }
  }, "\u2713"), b))), /*#__PURE__*/React.createElement("div", {
    className: "service-card-cta-wrap"
  }, isComingSoon ? /*#__PURE__*/React.createElement("div", {
    className: "mono service-card-coming-note",
    style: {
      color: featured ? 'var(--ink)' : 'var(--ink-soft)',
      borderTop: featured ? '1.5px dashed var(--ink)' : '1.5px dashed var(--ink-soft)'
    }
  }, "Launching soon") : /*#__PURE__*/React.createElement("div", {
    className: "service-card-cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: `btn sm${featured && s.shadowClass ? ` ${s.shadowClass}` : ''}`,
    onClick: () => onBook && onBook(s),
    style: {
      background: featured ? 'var(--ink)' : s.color,
      color: featured ? 'var(--bg)' : 'var(--ink)'
    }
  }, s.cta, " \u2192"), (s.details || s.detailsCta) && /*#__PURE__*/React.createElement("button", {
    className: "btn sm btn-ghost",
    onClick: () => onSeeDetails && onSeeDetails(s)
  }, s.detailsCta || 'What to expect'))));
}
function Services({
  onBook,
  onSeeDetails
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services-header-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "by food creators, for food creators"), /*#__PURE__*/React.createElement("h2", {
    className: "display services-headline"
  }, "find your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "fit.")), /*#__PURE__*/React.createElement("p", {
    className: "services-sub"
  }, "The Jam Session is the ongoing room \u2014 monthly calls, weekly hook ideas, a Discord community, and me in there with you. The Audit is the fastest way to know exactly what to fix. The Audit+ keeps me in your corner while you do it."))), /*#__PURE__*/React.createElement("div", {
    className: "services-grid-single"
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'mastermind'),
    featured: true,
    onBook: onBook,
    onSeeDetails: onSeeDetails
  })), /*#__PURE__*/React.createElement("div", {
    className: "services-divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono services-divider-label"
  }, "or start with a one-time audit"), /*#__PURE__*/React.createElement("div", {
    className: "services-divider-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'audit'),
    featured: true,
    onBook: onBook,
    onSeeDetails: onSeeDetails
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'audit-plus'),
    featured: true,
    onBook: onBook,
    onSeeDetails: onSeeDetails
  })), /*#__PURE__*/React.createElement("div", {
    className: "services-divider"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono services-divider-label"
  }, "Coming soon"), /*#__PURE__*/React.createElement("div", {
    className: "services-divider-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "services-grid-single"
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'pocket'),
    compact: true,
    onBook: onBook,
    onSeeDetails: onSeeDetails
  }))));
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-photos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo has-image about-photo-main"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/mika-headshot.jpg",
    alt: "Mika Kinney",
    className: "photo-img",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-photo-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo has-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/dan-mika-about.webp",
    alt: "Mika and Dan",
    className: "photo-img",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "photo has-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/filming-photo.webp",
    alt: "Mika filming behind the scenes",
    className: "photo-img",
    loading: "lazy"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "about"), /*#__PURE__*/React.createElement("h2", {
    className: "display about-headline"
  }, "hi, I'm ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "mika.")), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("p", null, "I grew up in ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Yosemite"), ". Studied engineering. Worked corporate. Quit twice. Once to backpack Southeast Asia with my husband Dan, once to road trip the Southwest."), /*#__PURE__*/React.createElement("p", null, "We started ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Joy to the Food"), " from my kitchen in Minneapolis. In two years it went from 1,001 followers to 500K. Now we run it from wherever we want, with a toddler underfoot."), /*#__PURE__*/React.createElement("p", {
    className: "about-text-emph"
  }, "My philosophy: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "engineer the life you want.")), /*#__PURE__*/React.createElement("p", null, "I treat Instagram like a system, not a guessing game. Hooks, content pillars, AI workflows, revenue streams. All engineered, all repeatable. That's what I teach.")), /*#__PURE__*/React.createElement("div", {
    className: "about-stickers"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sticker",
    style: {
      background: 'var(--c1)',
      transform: 'rotate(-2deg)'
    }
  }, "nutrition coach"), /*#__PURE__*/React.createElement("span", {
    className: "sticker",
    style: {
      background: 'var(--c3)',
      transform: 'rotate(1deg)'
    }
  }, "food creator"), /*#__PURE__*/React.createElement("span", {
    className: "sticker",
    style: {
      background: 'var(--c4)',
      transform: 'rotate(-1deg)'
    }
  }, "ig strategist"), /*#__PURE__*/React.createElement("span", {
    className: "sticker",
    style: {
      background: 'var(--c5)',
      transform: 'rotate(2deg)'
    }
  }, "engineer brain"))))));
}

// ============================================================
// FREEBIE / LEAD MAGNET
// ============================================================
function Freebie() {
  return /*#__PURE__*/React.createElement("section", {
    id: "freebie",
    className: "freebie"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card freebie-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "freebie-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--bg)'
    }
  }, "Free download"), /*#__PURE__*/React.createElement("h2", {
    className: "display freebie-headline"
  }, "the hook formula", /*#__PURE__*/React.createElement("br", null), "that got me to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "500K.")), /*#__PURE__*/React.createElement("p", {
    className: "freebie-sub"
  }, "The exact hook stacking method I use on every reel. 12 page PDF. No newsletter, no sales sequence. Drop your email, get the file."), /*#__PURE__*/React.createElement("form", {
    className: "freebie-form",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "your@email.com",
    className: "freebie-input"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "Send it \u2192")), /*#__PURE__*/React.createElement("p", {
    className: "mono freebie-disclaimer"
  }, "One and done delivery. I don't run a newsletter.")), /*#__PURE__*/React.createElement("div", {
    className: "freebie-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo freebie-pdf"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "PDF cover preview")), /*#__PURE__*/React.createElement("div", {
    className: "sticker freebie-sticker"
  }, "free \xB7 12 pages")))));
}

// ============================================================
// TESTIMONIALS
// ============================================================
const TESTIMONIALS = [{
  quote: "Mika Kinney spoke to my mastermind group and instantly lit a fire under every single person on the call. Her approach to Instagram growth is not just inspiring, it's incredibly actionable. She is deep in the details, testing what works in real time, and it shows. Our group walked away with clarity, excitement and a desire to grow their accounts. Mika truly knows her stuff and delivers it in a way that makes you want to take action immediately.",
  name: "Megan Porta",
  role: "Food creator · Pip & Ebby · Eat Blog Talk podcast",
  color: 'var(--c3)',
  image: 'images/megan-porta.jpeg'
}, {
  quote: "I cannot stop talking about WHAT A FREAKIN INSPIRATION you are!!! I have SO SO SO enjoyed seeing your journey over the years, and seeing you absolutely CRUSH it here on IG. You have totally cracked the code!!!",
  name: "Lindsey",
  role: "Food creator · A Recipe for Fun",
  color: 'var(--c2)',
  image: 'images/lindsey.jpg'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    className: "testimonials"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "testimonials-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--c2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--c2)',
      width: 24,
      height: 2,
      display: 'inline-block',
      marginRight: 10
    }
  }), "What folks are saying"), /*#__PURE__*/React.createElement("h2", {
    className: "display testimonials-headline"
  }, "cracked the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "code."))), /*#__PURE__*/React.createElement("div", {
    className: "testimonials-stack"
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "testimonial-card",
    style: {
      background: t.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "testimonial-mark-side"
  }, t.image ? /*#__PURE__*/React.createElement("img", {
    className: "testimonial-avatar",
    src: t.image,
    alt: t.name,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "display testimonial-mark"
  }, "\""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "testimonial-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "mono testimonial-role"
  }, t.role))), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-quote-side"
  }, /*#__PURE__*/React.createElement("p", {
    className: "testimonial-quote"
  }, t.quote))))), /*#__PURE__*/React.createElement("div", {
    className: "testimonials-note"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontSize: 11,
      opacity: 0.7
    }
  }, "More to come \u2014 first audits are wrapping now."))));
}

// ============================================================
// BOOKING FORM (used in Speaking section)
// ============================================================
function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    org: '',
    date: '',
    type: 'Conference',
    message: ''
  });
  const update = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      className: "booking-form-success"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "display booking-form-success-title"
    }, "got it!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        margin: 0,
        lineHeight: 1.5
      }
    }, "I'll be in touch within 48 hours. Looking forward to it."));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "booking-form",
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-form-eyebrow"
  }, "booking inquiry"), /*#__PURE__*/React.createElement("div", {
    className: "booking-form-row-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "booking-form-label"
  }, "your name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    className: "booking-form-input",
    value: form.name,
    onChange: e => update('name', e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "booking-form-label"
  }, "email"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    className: "booking-form-input",
    value: form.email,
    onChange: e => update('email', e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "booking-form-row-asym"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "booking-form-label"
  }, "company / podcast / event"), /*#__PURE__*/React.createElement("input", {
    className: "booking-form-input",
    value: form.org,
    onChange: e => update('org', e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "booking-form-label"
  }, "date (approx)"), /*#__PURE__*/React.createElement("input", {
    className: "booking-form-input",
    value: form.date,
    onChange: e => update('date', e.target.value),
    placeholder: "e.g. June 2026"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "booking-form-label"
  }, "type"), /*#__PURE__*/React.createElement("div", {
    className: "booking-form-types"
  }, ['Conference', 'Podcast', 'Workshop', 'Other'].map(t => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: t,
    onClick: () => update('type', t),
    className: "booking-form-type",
    style: {
      background: form.type === t ? 'var(--c5)' : 'var(--bg)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "booking-form-label"
  }, "tell me about it"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    className: "booking-form-input booking-form-textarea",
    value: form.message,
    onChange: e => update('message', e.target.value),
    placeholder: "Audience size, topic ideas, format, anything else"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-shadow-c2"
  }, "Send inquiry \u2192"));
}
function Speaking() {
  return /*#__PURE__*/React.createElement("section", {
    id: "speaking",
    className: "speaking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "speaking-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "speaking & media"), /*#__PURE__*/React.createElement("h2", {
    className: "display speaking-headline"
  }, "book me to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c5)'
    }
  }, "speak.")), /*#__PURE__*/React.createElement("p", {
    className: "speaking-sub"
  }, "I've spoken to hundreds of food creators at conferences and on podcasts. It's truly my passion and I'd love to share it with your audience."), /*#__PURE__*/React.createElement(BookingForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "card speaking-talk-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--bg)'
    }
  }, "Signature talk"), /*#__PURE__*/React.createElement("h3", {
    className: "display speaking-talk-title"
  }, "Instagram That Actually Works:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bg)'
    }
  }, "Hooks, Revenue & AI")), /*#__PURE__*/React.createElement("p", {
    className: "speaking-talk-body"
  }, "Most food creators are working harder than they need to and monetizing less than they should. Not because their content is bad, but because they haven't found the strategy yet."), /*#__PURE__*/React.createElement("p", {
    className: "speaking-talk-body"
  }, "This session covers the three levers that actually move the needle: hooks that stop the scroll, a content system built for multiple revenue streams, and AI workflows that let a small team operate like a big one."), /*#__PURE__*/React.createElement("p", {
    className: "speaking-talk-body",
    style: {
      fontWeight: 600,
      marginBottom: 0
    }
  }, "You'll leave with a roadmap. Not inspiration. Something you can use Monday morning."), /*#__PURE__*/React.createElement("div", {
    className: "speaking-talk-tags"
  }, ['hook stacking', 'carousel formula', 'AI prompts', 'monetization', 'small team workflow'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "tag",
    style: {
      fontSize: 10,
      background: 'var(--bg)'
    }
  }, t)))))));
}

// ============================================================
// CONTACT / FOOTER
// ============================================================
function ContactCTA({
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  const mastermind = SERVICES.find(s => s.id === 'mastermind');
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "contact-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contact-cta-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: 'center'
    }
  }, "let's go"), /*#__PURE__*/React.createElement("h2", {
    className: "display contact-cta-headline"
  }, "done ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "guessing?"), /*#__PURE__*/React.createElement("br", null), "let's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "fix that.")), /*#__PURE__*/React.createElement("p", {
    className: "contact-cta-sub"
  }, "Join The Jam Session for ongoing strategy, community, and a room that gets it. Or start with a one-time audit \u2014 a written plan and recorded walkthrough delivered in about a week, with zero guesswork."), /*#__PURE__*/React.createElement("div", {
    className: "contact-cta-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn contact-cta-btn",
    onClick: () => onBook && onBook(mastermind),
    style: {
      background: 'var(--c3)'
    }
  }, "\u2726 Apply for The Jam Session \u2014 $249/mo"), /*#__PURE__*/React.createElement("button", {
    className: "btn alt contact-cta-btn",
    onClick: () => onBook && onBook(audit)
  }, "Book The Audit \u2014 $475 (trial price)"), /*#__PURE__*/React.createElement("button", {
    className: "btn contact-cta-btn",
    onClick: () => onBook && onBook(auditPlus),
    style: {
      background: 'var(--c4)'
    }
  }, "Book Audit + Reviews \u2014 $550 (trial price)")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:mika@joytothefood.com",
    className: "link",
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      borderBottom: '1.5px dotted var(--ink-soft)'
    }
  }, "Or just email me")), /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container site-footer-inner"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono site-footer-meta"
  }, "\xA9 2026 mika creative \xB7 for food creators who mean it"), /*#__PURE__*/React.createElement("div", {
    className: "site-footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/_joytothefood_",
    className: "link"
  }, "@_joytothefood_"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:mika@joytothefood.com",
    className: "link"
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "/terms.html",
    className: "link"
  }, "Terms")))));
}

// expose to window
Object.assign(window, {
  Wordmark,
  Nav,
  HeroBigType,
  HeroImageGrid,
  ProofBar,
  Strip,
  Services,
  About,
  Freebie,
  Testimonials,
  BookingForm,
  Speaking,
  ContactCTA
});

// === src/app-2.jsx ===

"use strict";

/* global React */
var {
  useState,
  useEffect
} = React;

// ============================================================
// BOOKING FLOW
// Shows a branded modal with service summary on the left and a
// CTA on the right that opens Cal.com in a new tab for scheduling
// and payment (Stripe payment works reliably on Cal.com's own page).
// ============================================================

// service.id  →  cal.com full URL
const CAL_LINKS = {
  'audit': 'https://cal.com/mikacreative/instagram-audit-book-your-spot',
  'audit-plus': 'https://cal.com/mikacreative/instagram-audit-plus-book-your-spot'
};
function BookingFlow({
  service,
  onClose
}) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!service) return null;
  const calUrl = CAL_LINKS[service.id];
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-overlay",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-modal"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "booking-aside",
    style: {
      background: service.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag booking-aside-tag",
    style: {
      background: 'var(--bg)',
      alignSelf: 'flex-start'
    }
  }, service.tag), /*#__PURE__*/React.createElement("h3", {
    className: "display booking-aside-title"
  }, service.title), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-blurb"
  }, service.blurb), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-eyebrow"
  }, "Total"), service.trialPrice && /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-was"
  }, service.price), /*#__PURE__*/React.createElement("div", {
    className: "display booking-aside-total-amount"
  }, service.trialPrice || service.price), service.trialNote && /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-trial"
  }, service.trialNote), /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-sub"
  }, service.sub)), /*#__PURE__*/React.createElement("p", {
    className: "booking-terms-note"
  }, "By booking you agree to our", ' ', /*#__PURE__*/React.createElement("a", {
    href: "/terms.html",
    target: "_blank",
    rel: "noopener",
    className: "link"
  }, "terms"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "booking-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "booking-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-embed-eyebrow"
  }, "Pick a date & time"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    className: "booking-close"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "booking-notice"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "This is not an actual meeting"), " (we'll schedule that shortly!). It's to reserve your audit spot since I only do 4 per month. You'll receive an email from ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:mika@joytothefood.com",
    className: "link"
  }, "mika@joytothefood.com"), " within 24 hours (or 1 business day if a weekend) with your intake form and Google Drive folder link."), /*#__PURE__*/React.createElement("p", null, "Cancellations more than 48 business hours before your kickoff call receive a full refund. Within 48 hours: 50% refund. No refunds after your kickoff call. To cancel or reschedule email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:mika@joytothefood.com",
    className: "link"
  }, "mika@joytothefood.com"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "booking-direct-cta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "booking-direct-body"
  }, "Choose your date and time on our booking page. Payment is collected securely via Stripe before your spot is confirmed."), /*#__PURE__*/React.createElement("a", {
    href: calUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn alt"
  }, "Book your spot \u2192"), /*#__PURE__*/React.createElement("p", {
    className: "mono booking-direct-hint"
  }, "Opens in a new tab")))));
}

// ============================================================
// SERVICE DETAILS MODAL
// "What to expect" walkthrough for available services. Mirrors the
// BookingFlow modal shell so the two feel like siblings — the aside
// is identical; only the right-side content swaps.
// ============================================================
function ServiceDetailsModal({
  service,
  onClose,
  onBook
}) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!service || !service.details) return null;
  const d = service.details;
  const extras = service.extras;
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-overlay",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-modal details-modal"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "booking-aside",
    style: {
      background: service.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag booking-aside-tag",
    style: {
      background: 'var(--bg)',
      alignSelf: 'flex-start'
    }
  }, service.tag), /*#__PURE__*/React.createElement("h3", {
    className: "display booking-aside-title"
  }, service.title), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-blurb"
  }, service.blurb), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-eyebrow"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "display booking-aside-total-amount"
  }, service.price), /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-sub"
  }, service.sub))), /*#__PURE__*/React.createElement("div", {
    className: "booking-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "booking-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-embed-eyebrow"
  }, d.eyebrow), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    className: "booking-close"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "details-content"
  }, /*#__PURE__*/React.createElement("section", {
    className: "details-section"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mono details-section-eyebrow"
  }, "your timeline"), /*#__PURE__*/React.createElement("ol", {
    className: "details-timeline"
  }, d.timeline.map(step => /*#__PURE__*/React.createElement("li", {
    key: step.n,
    className: "details-timeline-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "details-timeline-num",
    style: {
      background: service.color
    }
  }, step.n), /*#__PURE__*/React.createElement("div", {
    className: "details-timeline-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "details-timeline-label"
  }, step.label), /*#__PURE__*/React.createElement("div", {
    className: "details-timeline-sub"
  }, step.sub)))))), /*#__PURE__*/React.createElement("section", {
    className: "details-section"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "display details-section-title"
  }, d.prep.title), /*#__PURE__*/React.createElement("p", {
    className: "details-section-intro"
  }, d.prep.intro), /*#__PURE__*/React.createElement("ul", {
    className: "details-list"
  }, d.prep.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "details-list-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "details-list-bullet",
    style: {
      background: service.color
    }
  }), it)))), /*#__PURE__*/React.createElement("section", {
    className: "details-section"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "display details-section-title"
  }, d.deliverables.title), /*#__PURE__*/React.createElement("ul", {
    className: "details-deliverables"
  }, d.deliverables.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "details-deliverable"
  }, /*#__PURE__*/React.createElement("div", {
    className: "details-deliverable-label"
  }, it.label), /*#__PURE__*/React.createElement("div", {
    className: "details-deliverable-sub"
  }, it.sub))))), extras && /*#__PURE__*/React.createElement("section", {
    className: "details-section details-extras",
    style: {
      background: service.color
    }
  }, /*#__PURE__*/React.createElement("h4", {
    className: "display details-section-title"
  }, extras.title), /*#__PURE__*/React.createElement("p", {
    className: "details-section-intro"
  }, extras.body), /*#__PURE__*/React.createElement("ul", {
    className: "details-list"
  }, extras.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "details-list-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "details-list-bullet",
    style: {
      background: 'var(--ink)'
    }
  }), b))))), /*#__PURE__*/React.createElement("footer", {
    className: "details-cta-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => {
      onClose();
      onBook && onBook(service);
    }
  }, service.cta, " \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onClose
  }, "Maybe later")))));
}
window.BookingFlow = BookingFlow;
window.ServiceDetailsModal = ServiceDetailsModal;
const TYPEFORM_URL = 'https://jssnn6ddnj6.typeform.com/to/gV4kNGFv';

// ============================================================
// MASTERMIND MODAL
// Single track (On the Rise); apply button opens Typeform.
// ============================================================
function MastermindModal({
  service,
  onClose
}) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!service) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-overlay",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-modal mastermind-modal"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "booking-aside",
    style: {
      background: service.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag booking-aside-tag",
    style: {
      background: 'var(--bg)',
      alignSelf: 'flex-start'
    }
  }, service.tag), /*#__PURE__*/React.createElement("h3", {
    className: "display booking-aside-title"
  }, service.title), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-blurb"
  }, "A small-group mastermind for food and lifestyle creators who are serious about building something real \u2014 and want a room full of people who actually get it."), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-eyebrow"
  }, "Investment"), /*#__PURE__*/React.createElement("div", {
    className: "display booking-aside-total-amount"
  }, service.price), /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-sub"
  }, service.sub), /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-savings"
  }, "Pay 3 months upfront and save 5%"))), /*#__PURE__*/React.createElement("div", {
    className: "booking-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "booking-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-embed-eyebrow"
  }, "Apply now"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    className: "booking-close"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "mastermind-tracks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mastermind-single-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mastermind-track-emoji"
  }, "\uD83C\uDF31"), /*#__PURE__*/React.createElement("p", {
    className: "mastermind-track-sub"
  }, "You're building your account and you want it to actually work. Better hooks, smarter content strategy, more of the right people finding you. This is where we figure that out together."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-shadow-c3",
    style: {
      background: 'var(--ink)',
      color: 'var(--bg)',
      width: '100%'
    },
    onClick: () => {
      window.open(TYPEFORM_URL, '_blank');
      onClose();
    }
  }, "Apply now \u2192")), /*#__PURE__*/React.createElement("p", {
    className: "mastermind-apply-note"
  }, "Mika reviews every application personally and selects group members based on availability and fit. You'll hear back within a few days of applying.")))));
}
window.MastermindModal = MastermindModal;

// ============================================================
// MASTERMIND DETAILS MODAL — "Tell me more"
// Full Jam Session explainer: what a month looks like, who it's
// for/not for, how it works, price, and apply CTA.
// ============================================================
function MastermindDetailsModal({
  service,
  onClose,
  onBook
}) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!service) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-overlay",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-modal details-modal mastermind-details-modal"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "booking-aside",
    style: {
      background: service.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag booking-aside-tag",
    style: {
      background: 'var(--bg)',
      alignSelf: 'flex-start'
    }
  }, service.tag), /*#__PURE__*/React.createElement("h3", {
    className: "display booking-aside-title"
  }, service.title), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-blurb"
  }, service.blurb), /*#__PURE__*/React.createElement("div", {
    className: "booking-aside-total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-eyebrow"
  }, "Investment"), /*#__PURE__*/React.createElement("div", {
    className: "display booking-aside-total-amount"
  }, service.price), /*#__PURE__*/React.createElement("div", {
    className: "mono booking-aside-total-sub"
  }, service.sub))), /*#__PURE__*/React.createElement("div", {
    className: "booking-main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "booking-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono booking-embed-eyebrow"
  }, "so here's what a month actually looks like"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    className: "booking-close"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "details-content jam-details-content"
  }, /*#__PURE__*/React.createElement("section", {
    className: "details-section"
  }, /*#__PURE__*/React.createElement("p", {
    className: "jam-prose"
  }, "Once a month we get on a call together \u2014 your people, your questions. Hot seat style. We dig into what's actually happening in your account, what's working, what's not, and what to do next. Nothing is off-limits."), /*#__PURE__*/React.createElement("p", {
    className: "jam-prose"
  }, "Every week you get fresh hook ideas dropped into your Discord channel so you're never starting from scratch on a caption again."), /*#__PURE__*/React.createElement("p", {
    className: "jam-prose"
  }, "In between calls, Discord is where it all lives. The community is full of creators at your exact stage \u2014 not a mixed bag of everyone, just your people. Ask questions, share wins, get feedback, hype each other up."), /*#__PURE__*/React.createElement("p", {
    className: "jam-prose"
  }, "And I'm in there too. Actually responding."), /*#__PURE__*/React.createElement("p", {
    className: "jam-prose"
  }, "Once a quarter we bring in a guest speaker \u2014 someone doing something you want to do, who can tell you exactly how they got there.")), /*#__PURE__*/React.createElement("section", {
    className: "details-section jam-fit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jam-fit-col"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mono details-section-eyebrow"
  }, "this is for you if"), /*#__PURE__*/React.createElement("ul", {
    className: "details-list"
  }, ["You're a food or lifestyle creator who is done piecing together a strategy from random viral tips", "You're not opposed to showing up — on calls, in Discord, in your content — but you want the research and strategy done for you", "You're a \"tell me what to focus on and I'll go do it\" kind of person — but you also want to understand the why behind it", "You're ready to actually commit to figuring this out"].map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "details-list-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "details-list-bullet",
    style: {
      background: service.color
    }
  }), it)))), /*#__PURE__*/React.createElement("div", {
    className: "jam-fit-col"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mono details-section-eyebrow jam-not-eyebrow"
  }, "this is not for you if"), /*#__PURE__*/React.createElement("ul", {
    className: "details-list"
  }, ["You want something to passively sit in", "You're looking for overnight results"].map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "details-list-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "details-list-bullet",
    style: {
      background: 'var(--ink-soft)'
    }
  }), it))))), /*#__PURE__*/React.createElement("section", {
    className: "details-section"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mono details-section-eyebrow"
  }, "how it works"), /*#__PURE__*/React.createElement("p", {
    className: "jam-prose"
  }, "Fill out a quick application and Mika will review it personally. Group members are selected based on availability and fit \u2014 you'll hear back within a few days. If it's a yes, you'll get added at the next opening."), /*#__PURE__*/React.createElement("div", {
    className: "jam-price-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "display jam-price"
  }, service.price), /*#__PURE__*/React.createElement("span", {
    className: "mono jam-price-sub"
  }, service.sub)), /*#__PURE__*/React.createElement("p", {
    className: "jam-prose jam-savings-note"
  }, "Prefer to pay upfront? Pay all 3 months at once and save 5%. Upfront payments are non-refundable but transferable to a future cohort."))), /*#__PURE__*/React.createElement("footer", {
    className: "details-cta-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-shadow-c3",
    onClick: () => {
      onClose();
      onBook && onBook(service);
    }
  }, "Apply now \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onClose
  }, "Maybe later")))));
}
window.MastermindDetailsModal = MastermindDetailsModal;

// === src/app-3.jsx ===

"use strict";

/* global React, ReactDOM, Wordmark, Nav, Services, About, Freebie, Testimonials, Speaking, ContactCTA, BookingFlow, ServiceDetailsModal, MastermindModal, MastermindDetailsModal, useTweaks, TweaksPanel, TweakSection, TweakRadio, usePhase, AnnouncementBar, ChallengeHero, ChallengeProofBar, WhyNow, HowItWorks, WeekArc, WhoMikaIs, ForNotFor, ValueStack, Timeline, FAQ, ChallengeCTA, WaitlistModal */
var {
  useState,
  useEffect
} = React;
const PALETTES = {
  Confetti: {
    c1: '#FF6B6B',
    c2: '#F4B942',
    c3: '#7BB661',
    c4: '#5BA9D6',
    c5: '#B26FB8',
    bg: '#FBF7F0',
    bgAlt: '#F4ECDD',
    ink: '#1F1B16'
  },
  Citrus: {
    c1: '#F56F3B',
    c2: '#F4C430',
    c3: '#A8C957',
    c4: '#5DBE9A',
    c5: '#E07B91',
    bg: '#FFF8E7',
    bgAlt: '#FBEFCB',
    ink: '#2A1F12'
  },
  Berry: {
    c1: '#E84A8A',
    c2: '#F8B4B4',
    c3: '#9B7BD4',
    c4: '#6BA8E8',
    c5: '#FFB347',
    bg: '#FFF4F4',
    bgAlt: '#FBE6EC',
    ink: '#1F1226'
  },
  Sunset: {
    c1: '#FF7E5C',
    c2: '#FFCB69',
    c3: '#E07A5F',
    c4: '#81B29A',
    c5: '#C77DFF',
    bg: '#FFF1E6',
    bgAlt: '#F8DEC4',
    ink: '#2A1810'
  }
};
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "Confetti",
  "hero": "BigType"
} /*EDITMODE-END*/;
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [bookingService, setBookingService] = useState(null);
  const [detailsService, setDetailsService] = useState(null);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const phase = usePhase();
  useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.Confetti;
    const root = document.documentElement;
    root.style.setProperty('--c1', p.c1);
    root.style.setProperty('--c2', p.c2);
    root.style.setProperty('--c3', p.c3);
    root.style.setProperty('--c4', p.c4);
    root.style.setProperty('--c5', p.c5);
    root.style.setProperty('--bg', p.bg);
    root.style.setProperty('--bg-alt', p.bgAlt);
    root.style.setProperty('--ink', p.ink);
  }, [tweaks.palette]);

  // Single CTA handler — open Kit Commerce in open phase, else waitlist modal
  function handleCta(ph) {
    if (ph === 'open') {
      window.location.href = LAUNCH.kitCommerceUrl;
    } else {
      setWaitlistOpen(true);
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AnnouncementBar, {
    phase: phase,
    onCta: () => handleCta(phase)
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(ChallengeHero, {
    phase: phase,
    onCta: handleCta
  }), /*#__PURE__*/React.createElement(ChallengeProofBar, null), /*#__PURE__*/React.createElement(WhyNow, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(WeekArc, null), /*#__PURE__*/React.createElement(WhoMikaIs, null), /*#__PURE__*/React.createElement(ForNotFor, null), /*#__PURE__*/React.createElement(ValueStack, {
    phase: phase,
    onCta: handleCta
  }), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(ChallengeCTA, {
    phase: phase,
    onCta: handleCta
  }), /*#__PURE__*/React.createElement("div", {
    className: "gwj-services-bridge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "gwj-bridge-text"
  }, "already established and want me 1:1? I've got you over here too \u2192"))), /*#__PURE__*/React.createElement(Services, {
    onBook: setBookingService,
    onSeeDetails: setDetailsService
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Speaking, null), /*#__PURE__*/React.createElement(ContactCTA, {
    onBook: setBookingService
  }), /*#__PURE__*/React.createElement(WaitlistModal, {
    open: waitlistOpen,
    onClose: () => setWaitlistOpen(false),
    phase: phase
  }), bookingService && bookingService.id === 'mastermind' && /*#__PURE__*/React.createElement(MastermindModal, {
    service: bookingService,
    onClose: () => setBookingService(null)
  }), bookingService && bookingService.id !== 'mastermind' && /*#__PURE__*/React.createElement(BookingFlow, {
    service: bookingService,
    onClose: () => setBookingService(null)
  }), detailsService && detailsService.id === 'mastermind' && /*#__PURE__*/React.createElement(MastermindDetailsModal, {
    service: detailsService,
    onClose: () => setDetailsService(null),
    onBook: setBookingService
  }), detailsService && detailsService.id !== 'mastermind' && /*#__PURE__*/React.createElement(ServiceDetailsModal, {
    service: detailsService,
    onClose: () => setDetailsService(null),
    onBook: setBookingService
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Color palette"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.palette,
    options: ['Confetti', 'Citrus', 'Berry', 'Sunset'],
    onChange: v => setTweak('palette', v)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));