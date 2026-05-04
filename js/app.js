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

// === src/app-1.jsx ===

"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Nav({
  onOpenQuiz
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg)',
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "link",
    style: {
      borderBottom: 'none'
    }
  }, "Work with me"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "link",
    style: {
      borderBottom: 'none'
    }
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#speaking",
    className: "link",
    style: {
      borderBottom: 'none'
    }
  }, "Speaking"), /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    onClick: onOpenQuiz
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2726"), " Find your fit"))));
}

// ============================================================
// HERO - two layouts
// ============================================================
function HeroBigType({
  onOpenQuiz,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      paddingTop: 64,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "@_joytothefood_ \xB7 440K"), /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c2)'
    }
  }, "1,001 to 440K in 24 months")), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 'clamp(60px, 9.5vw, 156px)',
      margin: 0,
      letterSpacing: '-0.025em'
    }
  }, "instagram", /*#__PURE__*/React.createElement("br", null), "that ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "actually"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "works.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 48,
      marginTop: 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      lineHeight: 1.4,
      margin: 0,
      maxWidth: 640,
      color: 'var(--ink-soft)'
    }
  }, "I'm Mika - engineer turned food creator. I grew ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 18
    }
  }, "@_joytothefood_"), " from 1,001 to 440K in two years, in the current algorithm, in a saturated niche, with a two-person team. Not in 2016 when Instagram was easy. Now.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I'll show you exactly what moved the needle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => onBook && onBook(audit)
  }, "Book your audit \u2014 $950 \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenQuiz,
    className: "link",
    style: {
      fontSize: 14,
      background: 'none',
      border: 'none',
      borderBottom: '2px dotted var(--ink)',
      padding: 0,
      paddingBottom: 1,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "not sure yet? take the 30-sec quiz")))));
}
function HeroImageGrid({
  onOpenQuiz,
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
    label: '440K screenshot · now'
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
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14,
      height: 280,
      marginBottom: 56
    }
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "photo",
    style: {
      background: p.c,
      transform: i % 2 ? 'translateY(12px)' : 'translateY(-8px)',
      border: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "@_joytothefood_ \xB7 440k followers \xB7 5.1M monthly views"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 'clamp(56px, 8vw, 128px)',
      margin: '20px 0 28px',
      letterSpacing: '-0.025em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "instagram"), " that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "actually"), " works."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.4,
      color: 'var(--ink-soft)',
      maxWidth: 620,
      margin: '0 auto 32px'
    }
  }, "I grew @_joytothefood_ from 1K to 440K in 24 months, in the current algorithm, in a saturated niche. I'll show you how."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => onBook && onBook(audit)
  }, "Book your audit \u2014 $950"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenQuiz,
    className: "btn ghost",
    style: {
      fontFamily: 'inherit'
    }
  }, "Not sure? Take the quiz")))));
}

// ============================================================
// PROOF BAR - the receipts
// ============================================================
function ProofBar() {
  const stats = [{
    num: '440K',
    label: 'IG followers'
  }, {
    num: '5.1M',
    label: 'monthly views'
  }, {
    num: '#1',
    label: 'revenue source'
  }, {
    num: '4',
    label: 'speaking engagements'
  }, {
    num: '3',
    label: 'podcast features'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0',
      borderTop: '2px solid var(--ink)',
      borderBottom: '2px solid var(--ink)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 32
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderLeft: i === 0 ? 'none' : '1.5px solid var(--ink)',
      paddingLeft: i === 0 ? 0 : 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'clamp(40px, 5vw, 64px)',
      lineHeight: 1,
      color: ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--c5)'][i],
      letterSpacing: '-0.02em'
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      marginTop: 8,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--ink-soft)'
    }
  }, s.label))))));
}

// ============================================================
// MARQUEE STRIP
// ============================================================
function Strip() {
  const items = ['the mastermind', 'account audit', 'in your pocket day', 'client management', 'the playbook ebook', '1k → 440k in 24 months'];
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
  tag: '03 / mastermind',
  color: 'var(--c3)',
  title: 'The Mastermind',
  price: '$350/mo',
  sub: 'or $3,500/year',
  comingSoon: true,
  blurb: "A small cohort of food and lifestyle creators who are serious about turning content into income. Monthly 90 minute group calls, hot seat reviews, private community, and direct access to my current strategy in real time. This is where the deepest work happens.",
  bullets: ['Monthly 90 min group call', 'Hot seat account reviews', 'Private community access', 'Discounted In Your Pocket Days'],
  cta: 'Apply for next cohort'
}, {
  id: 'audit',
  tag: '01 / audit',
  color: 'var(--c1)',
  title: 'The Audit',
  price: '$950',
  sub: '5 day turnaround',
  available: true,
  blurb: "I go through your entire Instagram like I'd go through my own — hooks, content strategy, monetization gaps, profile. You get a recorded video walkthrough and a written action plan you can start using the same week.",
  bullets: ['Recorded video walkthrough', 'Hook + content analysis', 'Monetization gaps', 'Written action plan', '5 business day delivery'],
  cta: 'Book your audit'
}, {
  id: 'audit-plus',
  tag: '02 / audit+',
  color: 'var(--c4)',
  title: 'The Audit + Pre-Post Reviews',
  price: '$1,100',
  sub: '5 day audit + 30 days of reviews',
  available: true,
  blurb: "Everything in the audit, plus you send me up to 4 reels before you post and I'll review them before they go live. The audit tells you what to fix. The pre-post reviews make sure you're actually fixing it.",
  bullets: ['Everything in The Audit', 'Up to 4 pre-post reel reviews', 'Hook, lighting + caption feedback', 'Async via Voxer or Google Drive', '30 days to use your reviews'],
  cta: 'Book your audit+'
}, {
  id: 'pocket',
  tag: '04 / 1:1',
  color: 'var(--c4)',
  title: 'In Your Pocket Day',
  price: '$1,000',
  sub: 'standalone',
  comingSoon: true,
  blurb: "One full day of real time access via Voxer or WhatsApp. Film, send, get feedback, adjust, in real time. Hook rewrites, lighting feedback, caption help, whatever comes up. It's like having me in your kitchen for the day.",
  bullets: ['8 hrs of Voxer/WhatsApp access', 'Real time content feedback', 'Hook + caption rewrites', 'Lighting & shot review'],
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
function ServiceCard({
  s,
  featured,
  onBook,
  onWaitlist
}) {
  const isComingSoon = s.comingSoon;
  const isAvailable = s.available;
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: featured ? 40 : 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      position: 'relative',
      background: featured ? s.color : 'var(--card)',
      opacity: isComingSoon ? 0.55 : 1,
      filter: isComingSoon ? 'grayscale(0.7)' : 'none',
      transition: 'opacity 0.25s, filter 0.25s'
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
    style: {
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
      zIndex: 2
    }
  }, "Coming soon"), isAvailable && /*#__PURE__*/React.createElement("div", {
    style: {
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
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'white',
      animation: 'pulse 2s infinite'
    }
  }), "Available now"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      paddingRight: 110
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: featured ? 'var(--bg)' : s.color
    }
  }, s.tag)), !isComingSoon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: featured ? 40 : 30,
      lineHeight: 1
    }
  }, s.price), s.sub && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: featured ? 'var(--ink)' : 'var(--ink-soft)',
      opacity: 0.8
    }
  }, s.sub)), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: featured ? 52 : 34,
      margin: 0,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, s.title, s.subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.5em',
      color: featured ? 'var(--ink)' : 'var(--ink-soft)',
      marginTop: 6,
      opacity: 0.75
    }
  }, s.subtitle)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: featured ? 17 : 14,
      lineHeight: 1.5,
      margin: 0,
      color: featured ? 'var(--ink)' : 'var(--ink-soft)'
    }
  }, s.blurb), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, s.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 13.5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: featured ? 'var(--ink)' : s.color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: featured ? s.color : 'var(--ink)',
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2713"), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, isComingSoon ? /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: featured ? 'var(--ink)' : 'var(--ink-soft)',
      padding: '14px 0 4px',
      borderTop: featured ? '1.5px dashed var(--ink)' : '1.5px dashed var(--ink-soft)',
      opacity: 0.7
    }
  }, "Launching soon") : /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    onClick: () => onBook && onBook(s),
    style: {
      background: featured ? 'var(--ink)' : s.color,
      color: featured ? 'var(--bg)' : 'var(--ink)'
    }
  }, s.cta, " \u2192")));
}
function Services({
  onOpenQuiz,
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: '120px 0 80px',
      background: 'var(--bg-alt)',
      borderTop: '2px solid var(--ink)',
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 56,
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "work with me"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: 'clamp(48px, 6vw, 88px)',
      margin: '16px 0 16px',
      letterSpacing: '-0.02em'
    }
  }, "two ways to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "start.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      margin: 0,
      maxWidth: 580
    }
  }, "Both include a full audit. One includes me in your corner while you implement.")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onOpenQuiz
  }, "Curious if it's right for you? Take the quiz \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'audit'),
    featured: true,
    onBook: onBook
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'audit-plus'),
    featured: true,
    onBook: onBook
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      margin: '48px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--ink-soft)'
    }
  }, "Coming soon"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1.5,
      background: 'var(--ink)',
      opacity: 0.15
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'mastermind'),
    onBook: onBook
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'pocket'),
    onBook: onBook
  }))));
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      aspectRatio: '4/5',
      background: 'var(--c4)',
      boxShadow: '8px 8px 0 var(--ink)',
      border: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "brand photo \xB7 mika")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      aspectRatio: '1',
      background: 'var(--c2)',
      border: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "mika + dan")), /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      aspectRatio: '1',
      background: 'var(--c5)',
      border: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "filming BTS")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "about"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: 'clamp(44px, 5.5vw, 76px)',
      margin: '16px 0 24px',
      letterSpacing: '-0.02em',
      lineHeight: 0.95
    }
  }, "hi, I'm ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "mika.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--ink-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I grew up in ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Yosemite"), ". Studied engineering. Worked corporate. Quit twice. Once to backpack Southeast Asia with my husband Dan, once to road trip the Southwest."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We started ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "Joy to the Food"), " from my kitchen in Minneapolis. In two years it went from 1,001 followers to 440K. Now we run it from wherever we want, with a toddler underfoot."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 22,
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, "My philosophy: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "engineer the life you want.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "I treat Instagram like a system, not a guessing game. Hooks, content pillars, AI workflows, revenue streams. All engineered, all repeatable. That's what I teach.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
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
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: '0',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      background: 'var(--c2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--bg)'
    }
  }, "Free download"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: 'clamp(40px, 5vw, 64px)',
      margin: '20px 0 16px',
      letterSpacing: '-0.02em'
    }
  }, "the hook formula", /*#__PURE__*/React.createElement("br", null), "that got me to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "440K.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      marginBottom: 28,
      maxWidth: 480
    }
  }, "The exact hook stacking method I use on every reel. 12 page PDF. No newsletter, no sales sequence. Drop your email, get the file."), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      maxWidth: 480
    },
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "your@email.com",
    style: {
      flex: 1,
      minWidth: 240,
      padding: '14px 20px',
      border: '2px solid var(--ink)',
      borderRadius: 999,
      fontSize: 15,
      fontFamily: 'inherit',
      background: 'var(--bg)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "Send it \u2192")), /*#__PURE__*/React.createElement("p", {
    className: "mono",
    style: {
      fontSize: 11,
      marginTop: 14,
      opacity: 0.6
    }
  }, "One and done delivery. I don't run a newsletter.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--c1)',
      borderLeft: '2px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      width: '70%',
      aspectRatio: '3/4',
      background: 'var(--bg)',
      transform: 'rotate(-4deg)',
      boxShadow: '8px 8px 0 var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "PDF cover preview")), /*#__PURE__*/React.createElement("div", {
    className: "sticker",
    style: {
      position: 'absolute',
      top: 36,
      right: 36,
      transform: 'rotate(8deg)',
      background: 'var(--c3)'
    }
  }, "free \xB7 12 pages")))));
}

// ============================================================
// TESTIMONIALS
// ============================================================
const TESTIMONIALS = [{
  quote: "I cannot stop talking about WHAT A FREAKIN INSPIRATION you are!!! I have SO SO SO enjoyed seeing your journey over the years, and seeing you absolutely CRUSH it here on IG. You have totally cracked the code!!!",
  name: "Lindsey",
  color: 'var(--c2)'
}];
function Testimonials() {
  const t = TESTIMONIALS[0];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0',
      background: 'var(--ink)',
      color: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56,
      maxWidth: 880
    }
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
    className: "display",
    style: {
      fontSize: 'clamp(48px, 6vw, 88px)',
      margin: '16px 0 0',
      letterSpacing: '-0.02em'
    }
  }, "cracked the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "code."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 0,
      alignItems: 'stretch',
      background: t.color,
      color: 'var(--ink)',
      border: '2px solid var(--bg)',
      borderRadius: 32,
      overflow: 'hidden',
      boxShadow: '8px 8px 0 var(--c1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'rgba(0,0,0,0.04)',
      borderRight: '2px solid var(--ink)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 'clamp(120px, 16vw, 220px)',
      lineHeight: 0.7,
      letterSpacing: '-0.05em',
      color: 'var(--ink)'
    }
  }, "\""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 22,
      marginBottom: 4
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      opacity: 0.65,
      fontWeight: 600
    }
  }, "Fellow food creator"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(20px, 2vw, 26px)',
      lineHeight: 1.45,
      margin: 0,
      fontWeight: 500,
      fontFamily: 'inherit'
    }
  }, t.quote))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--c2)',
      fontSize: 13
    }
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
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid var(--ink)',
    borderRadius: 14,
    fontSize: 14,
    fontFamily: 'inherit',
    background: 'var(--bg)',
    boxSizing: 'border-box'
  };
  const labelStyle = {
    fontSize: 11,
    fontFamily: 'DM Mono, monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--ink-soft)',
    marginBottom: 6,
    display: 'block'
  };
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 28,
        background: 'var(--c3)',
        border: '2px solid var(--ink)',
        borderRadius: 20,
        boxShadow: '4px 4px 0 var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("h4", {
      className: "display",
      style: {
        fontSize: 32,
        margin: '0 0 8px',
        letterSpacing: '-0.02em'
      }
    }, "got it!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        margin: 0,
        lineHeight: 1.5
      }
    }, "I'll be in touch within 48 hours. Looking forward to it."));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      display: 'grid',
      gap: 14,
      padding: 24,
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 20,
      boxShadow: '4px 4px 0 var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "booking inquiry"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "your name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    style: inputStyle,
    value: form.name,
    onChange: e => update('name', e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "email"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    style: inputStyle,
    value: form.email,
    onChange: e => update('email', e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "company / podcast / event"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.org,
    onChange: e => update('org', e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "date (approx)"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.date,
    onChange: e => update('date', e.target.value),
    placeholder: "e.g. June 2026"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Conference', 'Podcast', 'Workshop', 'Other'].map(t => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: t,
    onClick: () => update('type', t),
    style: {
      padding: '8px 14px',
      border: '2px solid var(--ink)',
      borderRadius: 999,
      background: form.type === t ? 'var(--c5)' : 'var(--bg)',
      fontFamily: 'inherit',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "tell me about it"), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    style: {
      ...inputStyle,
      resize: 'vertical',
      minHeight: 80,
      fontFamily: 'inherit'
    },
    value: form.message,
    onChange: e => update('message', e.target.value),
    placeholder: "Audience size, topic ideas, format, anything else"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "Send inquiry \u2192"));
}
function Speaking() {
  return /*#__PURE__*/React.createElement("section", {
    id: "speaking",
    style: {
      padding: '120px 0',
      background: 'var(--bg-alt)',
      borderTop: '2px solid var(--ink)',
      borderBottom: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 64,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "speaking & media"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: 'clamp(40px, 5vw, 72px)',
      margin: '16px 0 24px',
      letterSpacing: '-0.02em',
      lineHeight: 0.95
    }
  }, "book me to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c5)'
    }
  }, "speak.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      marginBottom: 28
    }
  }, "I've spoken to hundreds of food creators at conferences and on podcasts. It's truly my passion and I'd love to share it with your audience."), /*#__PURE__*/React.createElement(BookingForm, null)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 40,
      background: 'var(--c5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--bg)'
    }
  }, "Signature talk"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 'clamp(32px, 4vw, 52px)',
      margin: '20px 0 20px',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, "Instagram That Actually Works:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bg)'
    }
  }, "Hooks, Revenue & AI")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      margin: 0,
      marginBottom: 20
    }
  }, "Most food creators are working harder than they need to and monetizing less than they should. Not because their content is bad, but because they haven't found the strategy yet."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      margin: 0,
      marginBottom: 20
    }
  }, "This session covers the three levers that actually move the needle: hooks that stop the scroll, a content system built for multiple revenue streams, and AI workflows that let a small team operate like a big one."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      margin: 0,
      fontWeight: 600
    }
  }, "You'll leave with a roadmap. Not inspiration. Something you can use Monday morning."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '2px solid var(--ink)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
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
  onOpenQuiz,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: '120px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: 'center'
    }
  }, "let's go"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: 'clamp(64px, 10vw, 180px)',
      margin: '20px 0 32px',
      letterSpacing: '-0.03em',
      lineHeight: 0.92
    }
  }, "done ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "guessing?"), /*#__PURE__*/React.createElement("br", null), "let's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c3)'
    }
  }, "fix that.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 22,
      maxWidth: 720,
      margin: '0 auto 40px',
      color: 'var(--ink-soft)',
      lineHeight: 1.4
    }
  }, "Book an audit and in 5 days you'll have a written plan, a recorded walkthrough, and zero guesswork. Add pre-post reviews and I'll be in your corner while you put it into practice."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => onBook && onBook(audit),
    style: {
      fontSize: 18,
      padding: '20px 36px'
    }
  }, "\u2726 Book The Audit \u2014 $950"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => onBook && onBook(auditPlus),
    style: {
      fontSize: 18,
      padding: '20px 36px',
      background: 'var(--c4)'
    }
  }, "Book Audit + Reviews \u2014 $1,100")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hi@mikacreative.co",
    className: "link",
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      borderBottom: '1.5px dotted var(--ink-soft)'
    }
  }, "Or just email me")), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '2px solid var(--ink)',
      marginTop: 100,
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "\xA9 2026 mika creative \xB7 for food creators who mean it"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/_joytothefood_",
    className: "link",
    style: {
      fontSize: 13
    }
  }, "@_joytothefood_"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "link",
    style: {
      fontSize: 13
    }
  }, "Email")))));
}

// ============================================================
// QUIZ - floating widget
// ============================================================
function QuizWidget({
  open,
  setOpen,
  onBook
}) {
  const [step, setStep] = useState('intro');
  useEffect(() => {
    if (!open) setTimeout(() => setStep('intro'), 300);
  }, [open]);
  if (!open) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(true),
      style: {
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 100,
        background: 'var(--ink)',
        color: 'var(--bg)',
        border: '2px solid var(--ink)',
        borderRadius: 999,
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'DM Sans',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        boxShadow: '4px 4px 0 var(--c1)',
        transition: 'transform 0.15s, box-shadow 0.15s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '6px 6px 0 var(--c1)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = '4px 4px 0 var(--c1)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--c2)',
        animation: 'pulse 1.6s ease-in-out infinite'
      }
    }), "Find your fit ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "\xB7 30s"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 100,
      width: 'min(460px, calc(100vw - 48px))',
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 28,
      boxShadow: '8px 8px 0 var(--ink)',
      overflow: 'hidden',
      animation: 'slide-up 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      background: 'var(--ink)',
      color: 'var(--bg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--c3)',
      animation: 'pulse 1.6s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, step === 'intro' ? 'Quick quiz · 1 question' : 'Your match')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--bg)',
      fontSize: 18,
      cursor: 'pointer',
      padding: 0,
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "\xD7")), step === 'intro' && /*#__PURE__*/React.createElement(QuizIntro, {
    onChoose: setStep
  }), step === 'result-grow' && /*#__PURE__*/React.createElement(QuizResultGrow, {
    onReset: () => setStep('intro'),
    onBook: s => {
      setOpen(false);
      onBook && onBook(s);
    }
  }), step === 'result-monetize' && /*#__PURE__*/React.createElement(QuizResultMonetize, {
    onReset: () => setStep('intro'),
    onBook: s => {
      setOpen(false);
      onBook && onBook(s);
    }
  }));
}
function QuizIntro({
  onChoose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 32,
      margin: '0 0 8px',
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "which one is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "you"), "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      margin: '0 0 20px',
      lineHeight: 1.4
    }
  }, "Pick the one that sounds the most like your situation right now."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(QuizOption, {
    color: "var(--c3)",
    icon: "\uD83C\uDF31",
    title: "I'm trying to grow",
    sub: "Under 25K and posting into the void. Let's fix that.",
    onClick: () => onChoose('result-grow')
  }), /*#__PURE__*/React.createElement(QuizOption, {
    color: "var(--c5)",
    icon: "\uD83D\uDCB8",
    title: "I have a following, want to cash in",
    sub: "25K+ but the income doesn't match the reach.",
    onClick: () => onChoose('result-monetize')
  })));
}
function QuizOption({
  color,
  icon,
  title,
  sub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      textAlign: 'left',
      padding: '14px 16px',
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 18,
      cursor: 'pointer',
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      fontFamily: 'inherit',
      transition: 'transform 0.12s, box-shadow 0.12s, background 0.12s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = color;
      e.currentTarget.style.transform = 'translate(-2px, -2px)';
      e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--bg)';
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: color,
      border: '2px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-soft)',
      lineHeight: 1.35
    }
  }, sub)));
}
function QuizResultGrow({
  onReset,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c3)',
      fontSize: 10
    }
  }, "You = grower"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 28,
      margin: '12px 0 8px',
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "start with an ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "audit.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      margin: '0 0 16px',
      lineHeight: 1.4
    }
  }, "Under 25K is fixable. An audit shows you exactly what's holding your account back \u2014 and what to do about it first."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ResultCard, {
    color: "var(--c1)",
    step: "solo",
    title: "The Audit",
    price: "$950 \xB7 5 day turnaround",
    onClick: () => {
      onReset();
      onBook && onBook(audit);
    }
  }), /*#__PURE__*/React.createElement(ResultCard, {
    color: "var(--c4)",
    step: "+reviews",
    title: "The Audit + Pre-Post Reviews",
    price: "$1,100 \xB7 5 day turnaround + 30 days of pre-post feedback",
    onClick: () => {
      onReset();
      onBook && onBook(auditPlus);
    }
  })), /*#__PURE__*/React.createElement(ComingSoonNote, {
    items: ['In Your Pocket Day', 'The Mastermind']
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    className: "mono",
    style: {
      marginTop: 16,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 11,
      color: 'var(--ink-soft)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: 0
    }
  }, "\u2190 retake"));
}
function QuizResultMonetize({
  onReset,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c5)',
      fontSize: 10
    }
  }, "You = earner"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 28,
      margin: '12px 0 8px',
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "start with an ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "audit.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      margin: '0 0 16px',
      lineHeight: 1.4
    }
  }, "You have the audience. The audit shows you exactly where revenue should already be coming from \u2014 and why it isn't yet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ResultCard, {
    color: "var(--c1)",
    step: "solo",
    title: "The Audit",
    price: "$950 \xB7 5 day turnaround",
    onClick: () => {
      onReset();
      onBook && onBook(audit);
    }
  }), /*#__PURE__*/React.createElement(ResultCard, {
    color: "var(--c4)",
    step: "+reviews",
    title: "The Audit + Pre-Post Reviews",
    price: "$1,100 \xB7 5 day turnaround + 30 days of pre-post feedback",
    onClick: () => {
      onReset();
      onBook && onBook(auditPlus);
    }
  })), /*#__PURE__*/React.createElement(ComingSoonNote, {
    items: ['The Mastermind', 'In Your Pocket Day']
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    className: "mono",
    style: {
      marginTop: 16,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 11,
      color: 'var(--ink-soft)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      padding: 0
    }
  }, "\u2190 retake"));
}
function ComingSoonNote({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '12px 14px',
      background: 'var(--bg-alt)',
      border: '1.5px dashed var(--ink-soft)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 6,
      fontWeight: 600
    }
  }, "Coming soon"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-soft)',
      lineHeight: 1.4
    }
  }, items.join(' · ')));
}
function QuizResultHandsOff_REMOVED() {
  return null;
}
function ResultCard({
  color,
  step,
  title,
  price,
  href,
  onClick
}) {
  const Tag = onClick ? 'button' : 'a';
  const props = onClick ? {
    onClick,
    type: 'button'
  } : {
    href
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 14,
      textDecoration: 'none',
      color: 'inherit',
      transition: 'transform 0.12s, background 0.12s',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left',
      width: '100%',
      boxShadow: '3px 3px 0 var(--ink)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = color;
      e.currentTarget.style.transform = 'translate(-1px, -1px)';
      e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--bg)';
      e.currentTarget.style.transform = 'translate(0, 0)';
      e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      background: color,
      color: 'var(--ink)',
      border: '1.5px solid var(--ink)',
      padding: '4px 8px',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, step), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, price)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\u2192"));
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
  ContactCTA,
  QuizWidget
});

// === src/app-2.jsx ===

"use strict";

/* global React */
var {
  useState,
  useMemo,
  useEffect
} = React;

// ============================================================
// BOOKING FLOW
// 4 steps: calendar → time → details → payment → confirmed
// ============================================================

// Discount codes — add real ones here, or wire to Stripe Coupons later.
// `kind: 'percent'` takes a number 0–100; `kind: 'flat'` takes a dollar amount.
const DISCOUNT_CODES = {
  VIP10: {
    kind: 'percent',
    value: 10,
    label: '10% off — VIP'
  },
  EARLY100: {
    kind: 'flat',
    value: 100,
    label: '$100 off — early bird'
  },
  FRIEND: {
    kind: 'percent',
    value: 20,
    label: '20% off — friend rate'
  }
};
function parsePrice(str) {
  // "$950" or "$950/audit" → 950
  const m = String(str || '').match(/\$?([\d,]+)/);
  return m ? parseInt(m[1].replace(/,/g, ''), 10) : 0;
}
function fmtMoney(n) {
  return '$' + n.toLocaleString('en-US');
}
const TIMES = ['9:00 AM', '10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

// Pretend availability — some days/times are blocked
function isDayAvailable(d) {
  if (!d) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (d < today) return false;
  // Skip Sundays (0) and Saturdays (6)
  const dow = d.getDay();
  if (dow === 0 || dow === 6) return false;
  // Pretend a few random days are full
  const dayNum = d.getDate();
  if ([3, 11, 17, 24].includes(dayNum)) return false;
  return true;
}
function getTimesForDay(d) {
  // Pretend some times are taken on different days
  if (!d) return [];
  const dayNum = d.getDate();
  return TIMES.filter((_, i) => (dayNum + i) % 5 !== 0);
}
function fmtMonth(date) {
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}
function fmtDay(date) {
  return date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}
function buildMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startDow = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function BookingFlow({
  service,
  onClose
}) {
  const [step, setStep] = useState(1); // 1 cal, 2 details, 3 pay, 4 done
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    handle: '',
    followers: '0–5K',
    goal: '',
    notes: ''
  });
  const [card, setCard] = useState({
    number: '',
    exp: '',
    cvc: '',
    zip: ''
  });
  const [processing, setProcessing] = useState(false);
  const [discountInput, setDiscountInput] = useState('');
  const [appliedCode, setAppliedCode] = useState(null); // { code, kind, value, label } or null
  const [discountError, setDiscountError] = useState('');

  // Pricing math
  const basePrice = service ? parsePrice(service.price) : 0;
  const discountAmount = appliedCode ? appliedCode.kind === 'percent' ? Math.round(basePrice * appliedCode.value / 100) : Math.min(appliedCode.value, basePrice) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);
  function applyDiscount() {
    const code = discountInput.trim().toUpperCase();
    if (!code) return;
    const found = DISCOUNT_CODES[code];
    if (!found) {
      setDiscountError("That code isn't valid.");
      setAppliedCode(null);
      return;
    }
    setAppliedCode({
      code,
      ...found
    });
    setDiscountError('');
  }
  function removeDiscount() {
    setAppliedCode(null);
    setDiscountInput('');
    setDiscountError('');
  }

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  if (!service) return null;
  const cells = useMemo(() => buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth()), [viewDate]);
  const availableTimes = selectedDay ? getTimesForDay(selectedDay) : [];
  const canProceedStep1 = selectedDay && selectedTime;
  const canProceedStep2 = details.name && details.email && details.handle;
  const canProceedStep3 = card.number.replace(/\s/g, '').length >= 15 && card.exp.length >= 4 && card.cvc.length >= 3;
  function handlePay() {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep(4);
    }, 1600);
  }

  // Allow closing with Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    border: '2px solid var(--ink)',
    borderRadius: 12,
    fontSize: 15,
    fontFamily: 'inherit',
    background: 'var(--bg)',
    boxSizing: 'border-box',
    outline: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(31, 27, 22, 0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'fade-in 0.2s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      border: '2px solid var(--ink)',
      borderRadius: 28,
      boxShadow: '8px 8px 0 var(--ink)',
      width: '100%',
      maxWidth: 920,
      maxHeight: '92vh',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      animation: 'slide-up 0.25s ease'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: service.color,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      borderRight: '2px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--bg)',
      alignSelf: 'flex-start'
    }
  }, service.tag), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 38,
      margin: 0,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, service.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5
    }
  }, service.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 20,
      borderTop: '1.5px dashed var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "Total"), appliedCode ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      textDecoration: 'line-through',
      opacity: 0.55,
      lineHeight: 1,
      marginBottom: 4
    }
  }, fmtMoney(basePrice)), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--ink)'
    }
  }, fmtMoney(finalPrice)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      marginTop: 8,
      fontWeight: 600,
      display: 'inline-block',
      background: 'var(--ink)',
      color: service.color,
      padding: '4px 8px',
      borderRadius: 6,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, appliedCode.code, " \u2212", fmtMoney(discountAmount))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 44,
      lineHeight: 1
    }
  }, service.price), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      marginTop: 6,
      opacity: 0.75
    }
  }, service.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '92vh'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: '20px 28px',
      borderBottom: '2px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    step: step
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '2px solid var(--ink)',
      background: 'var(--bg)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 24px',
      overflowY: 'auto',
      flex: 1
    }
  }, step === 1 && /*#__PURE__*/React.createElement(CalendarStep, {
    viewDate: viewDate,
    setViewDate: setViewDate,
    cells: cells,
    selectedDay: selectedDay,
    setSelectedDay: d => {
      setSelectedDay(d);
      setSelectedTime(null);
    },
    selectedTime: selectedTime,
    setSelectedTime: setSelectedTime,
    availableTimes: availableTimes
  }), step === 2 && /*#__PURE__*/React.createElement(DetailsStep, {
    details: details,
    setDetails: setDetails,
    inputStyle: inputStyle,
    selectedDay: selectedDay,
    selectedTime: selectedTime
  }), step === 3 && /*#__PURE__*/React.createElement(PaymentStep, {
    card: card,
    setCard: setCard,
    inputStyle: inputStyle,
    price: service.price,
    processing: processing,
    basePrice: basePrice,
    finalPrice: finalPrice,
    appliedCode: appliedCode,
    discountAmount: discountAmount,
    discountInput: discountInput,
    setDiscountInput: setDiscountInput,
    applyDiscount: applyDiscount,
    removeDiscount: removeDiscount,
    discountError: discountError
  }), step === 4 && /*#__PURE__*/React.createElement(ConfirmedStep, {
    service: service,
    day: selectedDay,
    time: selectedTime,
    email: details.email,
    basePrice: basePrice,
    finalPrice: finalPrice,
    appliedCode: appliedCode,
    discountAmount: discountAmount
  })), step !== 4 && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '18px 28px',
      borderTop: '2px solid var(--ink)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => step > 1 ? setStep(step - 1) : onClose(),
    className: "btn ghost sm",
    style: {
      background: 'transparent',
      boxShadow: 'none'
    }
  }, "\u2190 ", step === 1 ? 'Cancel' : 'Back'), step === 1 && /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    disabled: !canProceedStep1,
    onClick: () => setStep(2),
    style: {
      opacity: canProceedStep1 ? 1 : 0.4,
      cursor: canProceedStep1 ? 'pointer' : 'not-allowed'
    }
  }, "Continue \u2192"), step === 2 && /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    disabled: !canProceedStep2,
    onClick: () => setStep(3),
    style: {
      opacity: canProceedStep2 ? 1 : 0.4,
      cursor: canProceedStep2 ? 'pointer' : 'not-allowed'
    }
  }, "next: payment \u2192"), step === 3 && /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    disabled: !canProceedStep3 || processing,
    onClick: handlePay,
    style: {
      opacity: canProceedStep3 && !processing ? 1 : 0.4,
      cursor: canProceedStep3 && !processing ? 'pointer' : 'not-allowed'
    }
  }, processing ? 'Processing…' : `Pay ${fmtMoney(finalPrice)} →`)))));
}

// ---- Stepper ----
function Stepper({
  step
}) {
  const steps = ['Date & time', 'Your details', 'Payment', 'Confirmed'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, steps.map((label, i) => {
    const n = i + 1;
    const active = n === step;
    const done = n < step;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        border: '2px solid var(--ink)',
        background: done ? 'var(--ink)' : active ? 'var(--c2)' : 'var(--bg)',
        color: done ? 'var(--bg)' : 'var(--ink)',
        fontSize: 11,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--mono)'
      }
    }, done ? '✓' : n), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: active ? 700 : 500,
        opacity: active ? 1 : 0.55,
        whiteSpace: 'nowrap'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 1.5,
        background: 'var(--ink)',
        opacity: 0.3
      }
    }));
  }));
}

// ---- Step 1: Calendar ----
function CalendarStep({
  viewDate,
  setViewDate,
  cells,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  availableTimes
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sameDay = (a, b) => a && b && a.getTime() === b.getTime();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 28,
      margin: '0 0 4px',
      letterSpacing: '-0.02em'
    }
  }, "Pick a date & time"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      margin: '0 0 8px'
    }
  }, "Choose which audit you're booking \u2014 ", /*#__PURE__*/React.createElement("strong", null, "The Audit ($950)"), " or ", /*#__PURE__*/React.createElement("strong", null, "Audit + Pre-Post Reviews ($1,100)"), ". You'll select at checkout."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      margin: '0 0 20px',
      opacity: 0.85
    }
  }, "All times are Central. Audits run Monday\u2013Friday."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '2px solid var(--ink)',
      borderRadius: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const next = new Date(viewDate);
      next.setMonth(next.getMonth() - 1);
      if (next.getFullYear() < today.getFullYear() || next.getFullYear() === today.getFullYear() && next.getMonth() < today.getMonth()) return;
      setViewDate(next);
    },
    style: {
      ...arrowBtnStyle
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 18,
      letterSpacing: '-0.01em'
    }
  }, fmtMonth(viewDate)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const next = new Date(viewDate);
      next.setMonth(next.getMonth() + 1);
      setViewDate(next);
    },
    style: {
      ...arrowBtnStyle
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4,
      marginBottom: 6
    }
  }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mono",
    style: {
      fontSize: 10,
      textAlign: 'center',
      color: 'var(--ink-soft)',
      letterSpacing: '0.1em',
      padding: '6px 0'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 4
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const avail = isDayAvailable(d);
    const sel = sameDay(d, selectedDay);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: !avail,
      onClick: () => setSelectedDay(d),
      style: {
        aspectRatio: '1 / 1',
        border: sel ? '2px solid var(--ink)' : '1.5px solid transparent',
        background: sel ? 'var(--c2)' : avail ? 'var(--bg-alt)' : 'transparent',
        color: avail ? 'var(--ink)' : 'var(--ink-soft)',
        borderRadius: 10,
        fontSize: 14,
        fontWeight: sel ? 700 : 500,
        cursor: avail ? 'pointer' : 'not-allowed',
        opacity: avail ? 1 : 0.35,
        fontFamily: 'inherit',
        transition: 'all 0.15s',
        position: 'relative'
      },
      onMouseOver: e => {
        if (avail && !sel) e.currentTarget.style.background = 'var(--c2)';
      },
      onMouseOut: e => {
        if (avail && !sel) e.currentTarget.style.background = 'var(--bg-alt)';
      }
    }, d.getDate());
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 14,
      paddingTop: 12,
      borderTop: '1px dashed var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--bg-alt)",
    label: "Available"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "var(--c2)",
    label: "Selected"
  }), /*#__PURE__*/React.createElement(Legend, {
    swatch: "transparent",
    label: "Booked",
    dim: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      border: '2px solid var(--ink)',
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 10
    }
  }, selectedDay ? fmtDay(selectedDay) : 'Pick a date first'), !selectedDay && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-soft)',
      fontSize: 13,
      textAlign: 'center',
      padding: 20,
      border: '1.5px dashed var(--ink-soft)',
      borderRadius: 12,
      opacity: 0.6
    }
  }, "Select a day on the left to see open times."), selectedDay && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, TIMES.map(t => {
    const avail = availableTimes.includes(t);
    const sel = selectedTime === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      disabled: !avail,
      onClick: () => setSelectedTime(t),
      style: {
        padding: '12px 8px',
        border: '1.5px solid var(--ink)',
        background: sel ? 'var(--ink)' : 'var(--bg)',
        color: sel ? 'var(--bg)' : 'var(--ink)',
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 600,
        cursor: avail ? 'pointer' : 'not-allowed',
        opacity: avail ? 1 : 0.35,
        fontFamily: 'inherit',
        textDecoration: avail ? 'none' : 'line-through',
        transition: 'all 0.15s'
      }
    }, t);
  })))));
}
function Legend({
  swatch,
  label,
  dim
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11,
      color: 'var(--ink-soft)',
      opacity: dim ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      background: swatch,
      border: '1.5px solid var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, label));
}
const arrowBtnStyle = {
  width: 32,
  height: 32,
  borderRadius: 8,
  border: '1.5px solid var(--ink)',
  background: 'var(--bg)',
  cursor: 'pointer',
  fontSize: 18,
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'inherit'
};

// ---- Step 2: Details ----
function DetailsStep({
  details,
  setDetails,
  inputStyle,
  selectedDay,
  selectedTime
}) {
  const u = (k, v) => setDetails(d => ({
    ...d,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 28,
      margin: '0 0 4px',
      letterSpacing: '-0.02em'
    }
  }, "before we dig in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      margin: '0 0 20px'
    }
  }, "Booking ", /*#__PURE__*/React.createElement("strong", null, fmtDay(selectedDay), " at ", selectedTime, " CT"), ". The more context you give me, the more useful your audit will be."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: details.name,
    onChange: e => u('name', e.target.value),
    placeholder: "Jane Doe"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "email",
    value: details.email,
    onChange: e => u('email', e.target.value),
    placeholder: "jane@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Instagram handle"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: details.handle,
    onChange: e => u('handle', e.target.value),
    placeholder: "@yourhandle"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Current followers"
  }, /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    value: details.followers,
    onChange: e => u('followers', e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "0\u20135K"), /*#__PURE__*/React.createElement("option", null, "5K\u201325K"), /*#__PURE__*/React.createElement("option", null, "25K\u2013100K"), /*#__PURE__*/React.createElement("option", null, "100K\u2013500K"), /*#__PURE__*/React.createElement("option", null, "500K+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "What's your #1 goal?"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: details.goal,
    onChange: e => u('goal', e.target.value),
    placeholder: "e.g. break 25K, land a brand deal, figure out why my reels stopped performing"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Anything else I should know? (optional)"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      minHeight: 80,
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    value: details.notes,
    onChange: e => u('notes', e.target.value),
    placeholder: "Stuck spots, recent flops, niche shifts, anything that'll help me dig in."
  })))));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      fontWeight: 600
    }
  }, label), children);
}

// ---- Step 3: Payment ----
function PaymentStep({
  card,
  setCard,
  inputStyle,
  price,
  processing,
  basePrice,
  finalPrice,
  appliedCode,
  discountAmount,
  discountInput,
  setDiscountInput,
  applyDiscount,
  removeDiscount,
  discountError
}) {
  const u = (k, v) => setCard(c => ({
    ...c,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 28,
      margin: '0 0 4px',
      letterSpacing: '-0.02em'
    }
  }, "Payment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-soft)',
      margin: '0 0 20px'
    }
  }, "Secure checkout \u2014 you'll be charged ", /*#__PURE__*/React.createElement("strong", null, fmtMoney(finalPrice)), " when you confirm. Questions? ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hi@mikacreative.co",
    style: {
      color: 'var(--ink)',
      textDecoration: 'underline'
    }
  }, "Email me before you book.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 14,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Card number"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: card.number,
    onChange: e => {
      const v = e.target.value.replace(/[^\d]/g, '').slice(0, 16);
      const f = v.replace(/(\d{4})(?=\d)/g, '$1 ');
      u('number', f);
    },
    placeholder: "1234 5678 9012 3456",
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Expiry"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: card.exp,
    onChange: e => {
      let v = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
      if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
      u('exp', v);
    },
    placeholder: "MM/YY",
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "CVC"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: card.cvc,
    onChange: e => u('cvc', e.target.value.replace(/[^\d]/g, '').slice(0, 4)),
    placeholder: "123",
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "ZIP"
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: card.zip,
    onChange: e => u('zip', e.target.value.replace(/[^\d]/g, '').slice(0, 5)),
    placeholder: "12345",
    inputMode: "numeric"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '16px 18px',
      background: 'var(--bg-alt)',
      border: '1.5px dashed var(--ink)',
      borderRadius: 12,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--ink-soft)',
      marginBottom: 10
    }
  }, "Discount code"), appliedCode ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 14px',
      background: 'var(--ink)',
      color: 'var(--bg)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, appliedCode.code), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      opacity: 0.75
    }
  }, appliedCode.label, " \xB7 \u2212", fmtMoney(discountAmount)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: removeDiscount,
    style: {
      background: 'transparent',
      border: '1.5px solid var(--bg)',
      color: 'var(--bg)',
      padding: '6px 10px',
      borderRadius: 6,
      fontSize: 11,
      fontFamily: 'var(--mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "Remove")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputStyle,
      flex: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontFamily: 'var(--mono)',
      fontSize: 13
    },
    value: discountInput,
    onChange: e => setDiscountInput(e.target.value.toUpperCase()),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyDiscount();
      }
    },
    placeholder: "ENTER CODE"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: applyDiscount,
    disabled: !discountInput.trim(),
    style: {
      padding: '0 16px',
      background: 'var(--ink)',
      color: 'var(--bg)',
      border: '1.5px solid var(--ink)',
      borderRadius: 8,
      fontSize: 12,
      fontFamily: 'var(--mono)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      cursor: discountInput.trim() ? 'pointer' : 'not-allowed',
      fontWeight: 600,
      opacity: discountInput.trim() ? 1 : 0.4,
      whiteSpace: 'nowrap'
    }
  }, "Apply")), discountError && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: '#c0392b',
      fontWeight: 500
    }
  }, discountError)), appliedCode && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: '1px dashed var(--ink-soft)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmtMoney(basePrice))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Discount (", appliedCode.code, ")"), /*#__PURE__*/React.createElement("span", null, "\u2212", fmtMoney(discountAmount))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 0 0',
      fontWeight: 700,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmtMoney(finalPrice))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '10px 14px',
      background: 'var(--bg-alt)',
      border: '1.5px solid var(--ink)',
      borderRadius: 10,
      fontSize: 12,
      color: 'var(--ink-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDD12"), "Payments are processed securely. Card info never touches our servers."));
}

// ---- Step 4: Confirmed ----
function ConfirmedStep({
  service,
  day,
  time,
  email
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: service.color,
      border: '2px solid var(--ink)',
      boxShadow: '4px 4px 0 var(--ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '12px auto 24px',
      fontSize: 36
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 36,
      margin: '0 0 8px',
      letterSpacing: '-0.02em'
    }
  }, "you're booked!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-soft)',
      margin: '0 0 28px',
      maxWidth: 440,
      marginInline: 'auto'
    }
  }, "Confirmation sent to ", /*#__PURE__*/React.createElement("strong", null, email), ". A calendar invite is on its way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      textAlign: 'left',
      background: 'var(--card)',
      border: '2px solid var(--ink)',
      borderRadius: 16,
      padding: '20px 24px',
      boxShadow: '4px 4px 0 var(--ink)',
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Service",
    v: service.title
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Date",
    v: day ? fmtDay(day) : ''
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Time",
    v: `${time} CT`
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Total",
    v: service.price,
    bold: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, "Next: I'll DM you within 24 hrs from ", /*#__PURE__*/React.createElement("strong", null, "@mika.creative"), " with your intake form and what to send me."));
}
function Row({
  k,
  v,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 30,
      padding: '8px 0',
      borderBottom: '1px dashed var(--ink-soft)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: bold ? 700 : 500
    }
  }, v));
}
window.BookingFlow = BookingFlow;

// === src/app-3.jsx ===

"use strict";

/* global React, ReactDOM, Wordmark, Nav, HeroBigType, HeroImageGrid, ProofBar, Strip, Services, About, Freebie, Testimonials, Speaking, ContactCTA, QuizWidget, BookingFlow, useTweaks, TweaksPanel, TweakSection, TweakRadio */
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
  const [quizOpen, setQuizOpen] = useState(false);
  const [bookingService, setBookingService] = useState(null);
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
  const Hero = tweaks.hero === 'ImageGrid' ? HeroImageGrid : HeroBigType;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    onOpenQuiz: () => setQuizOpen(true)
  }), /*#__PURE__*/React.createElement(Hero, {
    onOpenQuiz: () => setQuizOpen(true),
    onBook: setBookingService
  }), /*#__PURE__*/React.createElement(ProofBar, null), /*#__PURE__*/React.createElement(Strip, null), /*#__PURE__*/React.createElement(Services, {
    onOpenQuiz: () => setQuizOpen(true),
    onBook: setBookingService
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Speaking, null), /*#__PURE__*/React.createElement(ContactCTA, {
    onOpenQuiz: () => setQuizOpen(true),
    onBook: setBookingService
  }), /*#__PURE__*/React.createElement(QuizWidget, {
    open: quizOpen,
    setOpen: setQuizOpen,
    onBook: setBookingService
  }), bookingService && /*#__PURE__*/React.createElement(BookingFlow, {
    service: bookingService,
    onClose: () => setBookingService(null)
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Color palette"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.palette,
    options: ['Confetti', 'Citrus', 'Berry', 'Sunset'],
    onChange: v => setTweak('palette', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Hero layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.hero,
    options: ['BigType', 'ImageGrid'],
    onChange: v => setTweak('hero', v)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));