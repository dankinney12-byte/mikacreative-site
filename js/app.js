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
    href: "#services",
    className: "link",
    onClick: close
  }, "Work with me"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    className: "link",
    onClick: close
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#speaking",
    className: "link",
    onClick: close
  }, "Speaking"), /*#__PURE__*/React.createElement("button", {
    className: "btn sm",
    onClick: () => {
      close();
      onOpenQuiz();
    }
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
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "@_joytothefood_ \xB7 465K"), /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c2)'
    }
  }, "1,001 to 465K in 24 months")), /*#__PURE__*/React.createElement("h1", {
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
  }, "@_joytothefood_"), " from 1,001 to 465K in two years, in the current algorithm, in a saturated niche, with a two-person team. Not in 2016 when Instagram was easy. Now.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I'll show you exactly what moved the needle."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => onBook && onBook(audit)
  }, "Book your audit \u2014 $950 \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenQuiz,
    className: "hero-cta-quiz"
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
    label: '465K screenshot · now'
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
  }, "@_joytothefood_ \xB7 465K followers \xB7 8M monthly views"), /*#__PURE__*/React.createElement("h1", {
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
  }, "I grew @_joytothefood_ from 1K to 465K in 24 months, in the current algorithm, in a saturated niche. I'll show you how."), /*#__PURE__*/React.createElement("div", {
    className: "hero-image-grid-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt",
    onClick: () => onBook && onBook(audit)
  }, "Book your audit \u2014 $950"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenQuiz,
    className: "btn ghost"
  }, "Not sure? Take the quiz")))));
}

// ============================================================
// PROOF BAR - the receipts
// ============================================================
function ProofBar() {
  const stats = [{
    num: '465K',
    label: 'IG followers'
  }, {
    num: '8M',
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
  const items = ['the mastermind', 'account audit', 'in your pocket day', 'client management', 'the playbook ebook', '1k → 465K in 24 months'];
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
  sub: '1 week turnaround',
  available: true,
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
      sub: '15 min on Zoom, within 24 business hrs of your intake'
    }, {
      n: 4,
      label: 'Your audit',
      sub: 'Delivered within 7 business days of the kickoff'
    }, {
      n: 5,
      label: 'Optional debrief',
      sub: '20-min walkthrough call, included'
    }],
    prep: {
      title: 'what you\'ll do',
      intro: 'Most of the work happens before our kickoff call. Plan to spend about 30–45 minutes on intake — the more context I have, the sharper the audit.',
      items: ['Fill out a short intake form about your goals, niche, and what\'s been working (and what hasn\'t)', 'Export your Meta Business Suite data (last 90 days) — full instructions in your welcome email', 'Take a handful of Instagram Insights screenshots from the app', 'Drop 5 of your best-performing reels and 5 underperformers in your Drive folder']
    },
    deliverables: {
      title: 'what you\'ll get',
      items: [{
        label: 'Recorded Loom walkthrough (25–35 min)',
        sub: 'Your profile, content patterns, hook breakdowns, monetization gaps, and the top 3 priorities to tackle first.'
      }, {
        label: 'Written action plan (Google Doc)',
        sub: '3 immediate priorities, 5 content recommendations, monetization opportunities, profile fixes, and one thing to stop doing immediately.'
      }, {
        label: 'Optional 20-min debrief call',
        sub: 'Walk through the audit live and ask questions in real time. Included, no extra charge.'
      }]
    }
  }
}, {
  id: 'audit-plus',
  tag: '02 / audit+',
  color: 'var(--c4)',
  title: 'The Audit + Pre-Post Reviews',
  price: '$1,100',
  sub: '1 week audit + 30 days of reviews',
  available: true,
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
      sub: '15 min on Zoom, within 24 business hrs of your intake'
    }, {
      n: 4,
      label: 'Your audit',
      sub: 'Delivered within 7 business days of the kickoff'
    }, {
      n: 5,
      label: 'Optional debrief',
      sub: '20-min walkthrough call, included'
    }],
    prep: {
      title: 'what you\'ll do',
      intro: 'Most of the work happens before our kickoff call. Plan to spend about 30–45 minutes on intake — the more context I have, the sharper the audit.',
      items: ['Fill out a short intake form about your goals, niche, and what\'s been working (and what hasn\'t)', 'Export your Meta Business Suite data (last 90 days) — full instructions in your welcome email', 'Take a handful of Instagram Insights screenshots from the app', 'Drop 5 of your best-performing reels and 5 underperformers in your Drive folder']
    },
    deliverables: {
      title: 'what you\'ll get',
      items: [{
        label: 'Recorded Loom walkthrough (25–35 min)',
        sub: 'Your profile, content patterns, hook breakdowns, monetization gaps, and the top 3 priorities to tackle first.'
      }, {
        label: 'Written action plan (Google Doc)',
        sub: '3 immediate priorities, 5 content recommendations, monetization opportunities, profile fixes, and one thing to stop doing immediately.'
      }, {
        label: 'Optional 20-min debrief call',
        sub: 'Walk through the audit live and ask questions in real time. Included, no extra charge.'
      }]
    }
  },
  extras: {
    title: 'plus 4 pre-post reel reviews',
    body: 'You\'ve got 30 days from delivery to use 4 pre-post reviews. When you have a reel ready, drop it in your Drive folder with a quick note on your planned text overlay, voice hook, and caption first line. I\'ll get back to you within 24 business hrs with a Loom or voice note covering hook strength, lighting, clip pacing, and what to fix before you post.',
    bullets: ['24-business-hour turnaround', 'Send via Voxer, WhatsApp, or Google Drive', 'Use them whenever you\'re ready in your 30-day window']
  }
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
  onSeeDetails,
  onWaitlist
}) {
  const isComingSoon = s.comingSoon;
  const isAvailable = s.available;
  return /*#__PURE__*/React.createElement("div", {
    className: `card service-card ${featured ? 'featured' : ''}`,
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
  }, "Coming soon"), isAvailable && /*#__PURE__*/React.createElement("div", {
    className: "service-card-badge available"
  }, /*#__PURE__*/React.createElement("span", {
    className: "service-card-badge-pulse"
  }), "Available now"), /*#__PURE__*/React.createElement("div", {
    className: "service-card-tag-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: featured ? 'var(--bg)' : s.color
    }
  }, s.tag)), !isComingSoon && /*#__PURE__*/React.createElement("div", {
    className: "service-card-price-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "display service-card-price"
  }, s.price), s.sub && /*#__PURE__*/React.createElement("div", {
    className: "mono service-card-price-sub"
  }, s.sub)), /*#__PURE__*/React.createElement("h3", {
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
    className: "btn sm",
    onClick: () => onBook && onBook(s),
    style: {
      background: featured ? 'var(--ink)' : s.color,
      color: featured ? 'var(--bg)' : 'var(--ink)'
    }
  }, s.cta, " \u2192"), s.details && /*#__PURE__*/React.createElement("button", {
    className: "btn sm btn-ghost",
    onClick: () => onSeeDetails && onSeeDetails(s)
  }, "What to expect"))));
}
function Services({
  onOpenQuiz,
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
  }, "work with me"), /*#__PURE__*/React.createElement("h2", {
    className: "display services-headline"
  }, "two ways to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "start.")), /*#__PURE__*/React.createElement("p", {
    className: "services-sub"
  }, "Both include a full audit. One includes me in your corner while you implement.")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onOpenQuiz
  }, "Curious if it's right for you? Take the quiz \u2192")), /*#__PURE__*/React.createElement("div", {
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
    className: "services-grid"
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'mastermind'),
    onBook: onBook,
    onSeeDetails: onSeeDetails
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    s: SERVICES.find(s => s.id === 'pocket'),
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
  }, "Joy to the Food"), " from my kitchen in Minneapolis. In two years it went from 1,001 followers to 465K. Now we run it from wherever we want, with a toddler underfoot."), /*#__PURE__*/React.createElement("p", {
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
  }, "465K.")), /*#__PURE__*/React.createElement("p", {
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
    className: "btn"
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
  onOpenQuiz,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
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
  }, "Book an audit and in about a week you'll have a written plan, a recorded walkthrough, and zero guesswork. Add pre-post reviews and I'll be in your corner while you put it into practice."), /*#__PURE__*/React.createElement("div", {
    className: "contact-cta-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn alt contact-cta-btn",
    onClick: () => onBook && onBook(audit)
  }, "\u2726 Book The Audit \u2014 $950"), /*#__PURE__*/React.createElement("button", {
    className: "btn contact-cta-btn",
    onClick: () => onBook && onBook(auditPlus),
    style: {
      background: 'var(--c4)'
    }
  }, "Book Audit + Reviews \u2014 $1,100")), /*#__PURE__*/React.createElement("a", {
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
      className: "quiz-fab",
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
        e.currentTarget.style.boxShadow = '6px 6px 0 var(--c1)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = '4px 4px 0 var(--c1)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "quiz-fab-pulse"
    }), "Find your fit ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.6
      }
    }, "\xB7 30s"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quiz-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "quiz-header-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quiz-header-pulse"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono quiz-header-label"
  }, step === 'intro' ? 'Quick quiz · 1 question' : 'Your match')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    className: "quiz-close"
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
    className: "quiz-body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display quiz-body-title"
  }, "which one is ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "you"), "?"), /*#__PURE__*/React.createElement("p", {
    className: "quiz-body-sub"
  }, "Pick the one that sounds the most like your situation right now."), /*#__PURE__*/React.createElement("div", {
    className: "quiz-options"
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
    className: "quiz-option",
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
    className: "quiz-option-icon",
    style: {
      background: color
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "quiz-option-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "quiz-option-sub"
  }, sub)));
}
function QuizResultGrow({
  onReset,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c3)',
      fontSize: 10
    }
  }, "You = grower"), /*#__PURE__*/React.createElement("h3", {
    className: "display quiz-body-title",
    style: {
      fontSize: 28,
      marginTop: 12
    }
  }, "start with an ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "audit.")), /*#__PURE__*/React.createElement("p", {
    className: "quiz-body-sub",
    style: {
      marginBottom: 16
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
    price: "$950 \xB7 1 week turnaround",
    onClick: () => {
      onReset();
      onBook && onBook(audit);
    }
  }), /*#__PURE__*/React.createElement(ResultCard, {
    color: "var(--c4)",
    step: "+reviews",
    title: "The Audit + Pre-Post Reviews",
    price: "$1,100 \xB7 1 week turnaround + 30 days of pre-post feedback",
    onClick: () => {
      onReset();
      onBook && onBook(auditPlus);
    }
  })), /*#__PURE__*/React.createElement(ComingSoonNote, {
    items: ['In Your Pocket Day', 'The Mastermind']
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    className: "mono quiz-retake"
  }, "\u2190 retake"));
}
function QuizResultMonetize({
  onReset,
  onBook
}) {
  const audit = SERVICES.find(s => s.id === 'audit');
  const auditPlus = SERVICES.find(s => s.id === 'audit-plus');
  return /*#__PURE__*/React.createElement("div", {
    className: "quiz-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'var(--c5)',
      fontSize: 10
    }
  }, "You = earner"), /*#__PURE__*/React.createElement("h3", {
    className: "display quiz-body-title",
    style: {
      fontSize: 28,
      marginTop: 12
    }
  }, "start with an ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c1)'
    }
  }, "audit.")), /*#__PURE__*/React.createElement("p", {
    className: "quiz-body-sub",
    style: {
      marginBottom: 16
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
    price: "$950 \xB7 1 week turnaround",
    onClick: () => {
      onReset();
      onBook && onBook(audit);
    }
  }), /*#__PURE__*/React.createElement(ResultCard, {
    color: "var(--c4)",
    step: "+reviews",
    title: "The Audit + Pre-Post Reviews",
    price: "$1,100 \xB7 1 week turnaround + 30 days of pre-post feedback",
    onClick: () => {
      onReset();
      onBook && onBook(auditPlus);
    }
  })), /*#__PURE__*/React.createElement(ComingSoonNote, {
    items: ['The Mastermind', 'In Your Pocket Day']
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    className: "mono quiz-retake"
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
    className: "quiz-result-card",
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
    className: "mono quiz-result-step-pill",
    style: {
      background: color
    }
  }, step), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "quiz-result-card-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mono quiz-result-card-sub"
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
  useEffect,
  useRef
} = React;

// ============================================================
// BOOKING FLOW
// Wraps Cal.com's inline embed in a branded modal.
// The aside (service summary + price) is ours; the calendar /
// scheduling / Stripe payment / intake fields are all Cal.com.
// ============================================================

// service.id  →  cal.com path
const CAL_LINKS = {
  'audit': 'mikacreative/the-audit',
  'audit-plus': 'mikacreative/the-auditplus'
};

// Standard Cal.com embed loader IIFE. Lazy: only attaches the
// app.cal.com script when first invoked. Safe to call repeatedly.
function ensureCalLoaded() {
  if (typeof window === 'undefined') return;
  if (window.Cal && window.Cal.loaded) return;
  (function (C, A, L) {
    const p = function (a, ar) {
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal;
      const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ['initNamespace', namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
}
function BookingFlow({
  service,
  onClose
}) {
  const [confirmed, setConfirmed] = useState(false);
  const containerRef = useRef(null);

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

  // Initialize the Cal.com inline embed once the modal is mounted.
  useEffect(() => {
    if (!service) return;
    const calLink = CAL_LINKS[service.id];
    if (!calLink || !containerRef.current) return;
    ensureCalLoaded();
    const namespace = service.id;
    const Cal = window.Cal;
    Cal('init', namespace, {
      origin: 'https://cal.com'
    });
    Cal.ns[namespace]('inline', {
      elementOrSelector: containerRef.current,
      calLink: calLink,
      config: {
        layout: 'month_view',
        theme: 'light'
      }
    });
    Cal.ns[namespace]('ui', {
      hideEventTypeDetails: true,
      // we already show service details in the aside
      theme: 'light',
      cssVarsPerTheme: {
        light: {
          'cal-brand': '#1F1B16',
          // ink (matches site primary buttons)
          'cal-brand-emphasis': '#FF6B6B',
          // coral accent
          'cal-text': '#1F1B16',
          'cal-text-emphasis': '#1F1B16',
          'cal-bg': '#FBF7F0',
          // site bg
          'cal-bg-emphasis': '#F4ECDD',
          // site bg-alt
          'cal-border': '#1F1B16',
          'cal-border-emphasis': '#1F1B16'
        }
      }
    });

    // Branded confirmation when Cal reports a successful booking.
    // The event has shipped under two names; listen for both to be safe.
    const onSuccess = () => setConfirmed(true);
    Cal.ns[namespace]('on', {
      action: 'bookingSuccessfulV2',
      callback: onSuccess
    });
    Cal.ns[namespace]('on', {
      action: 'bookingSuccessful',
      callback: onSuccess
    });
  }, [service]);
  if (!service) return null;
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
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "display booking-aside-total-amount"
  }, service.price), /*#__PURE__*/React.createElement("div", {
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
  }, confirmed ? "✓ You're booked" : 'Pick a date & time'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    className: "booking-close"
  }, "\xD7")), confirmed ? /*#__PURE__*/React.createElement(ConfirmedMessage, {
    service: service,
    onClose: onClose
  }) : /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "booking-embed"
  }))));
}
function ConfirmedMessage({
  service,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "booking-confirmed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-confirmed-check",
    style: {
      background: service.color
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    className: "display booking-confirmed-title"
  }, "you're booked!"), /*#__PURE__*/React.createElement("p", {
    className: "booking-confirmed-sub"
  }, "Confirmation is on its way to your inbox, plus a calendar invite. I'll email you within 24 hrs from ", /*#__PURE__*/React.createElement("strong", null, "mika@joytothefood.com"), " with what to send me before our session."), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn"
  }, "Close"));
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

// === src/app-3.jsx ===

"use strict";

/* global React, ReactDOM, Wordmark, Nav, HeroBigType, HeroImageGrid, ProofBar, Strip, Services, About, Freebie, Testimonials, Speaking, ContactCTA, QuizWidget, BookingFlow, ServiceDetailsModal, useTweaks, TweaksPanel, TweakSection, TweakRadio */
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
  const [detailsService, setDetailsService] = useState(null);
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
    onBook: setBookingService,
    onSeeDetails: setDetailsService
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
  }), detailsService && /*#__PURE__*/React.createElement(ServiceDetailsModal, {
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
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Hero layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.hero,
    options: ['BigType', 'ImageGrid'],
    onChange: v => setTweak('hero', v)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));