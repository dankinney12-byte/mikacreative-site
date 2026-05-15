/* global React */
const { useState, useEffect } = React;

// ============================================================
// BOOKING FLOW
// Shows a branded modal with service summary on the left and a
// CTA on the right that opens Cal.com in a new tab for scheduling
// and payment (Stripe payment works reliably on Cal.com's own page).
// ============================================================

// service.id  →  cal.com full URL
const CAL_LINKS = {
  'audit':       'https://cal.com/mikacreative/instagram-audit-book-your-spot',
  'audit-plus':  'https://cal.com/mikacreative/instagram-audit-plus-book-your-spot',
};

function BookingFlow({ service, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!service) return null;

  const calUrl = CAL_LINKS[service.id];

  return (
    <div
      className="booking-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="booking-modal">
        {/* LEFT: branded service summary */}
        <aside className="booking-aside" style={{ background: service.color }}>
          <span className="tag booking-aside-tag" style={{ background: 'var(--bg)', alignSelf: 'flex-start' }}>
            {service.tag}
          </span>
          <h3 className="display booking-aside-title">{service.title}</h3>
          <div className="booking-aside-blurb">{service.blurb}</div>

          <div className="booking-aside-total">
            <div className="mono booking-aside-total-eyebrow">Total</div>
            {service.trialPrice && (
              <div className="mono booking-aside-total-was">{service.price}</div>
            )}
            <div className="display booking-aside-total-amount">
              {service.trialPrice || service.price}
            </div>
            {service.trialNote && (
              <div className="mono booking-aside-total-trial">{service.trialNote}</div>
            )}
            <div className="mono booking-aside-total-sub">{service.sub}</div>
          </div>

          <p className="booking-terms-note">
            By booking you agree to our{' '}
            <a href="/terms.html" target="_blank" rel="noopener" className="link">terms</a>.
          </p>
        </aside>

        {/* RIGHT: CTA to open Cal.com in a new tab */}
        <div className="booking-main">
          <header className="booking-header">
            <div className="mono booking-embed-eyebrow">Pick a date &amp; time</div>
            <button onClick={onClose} aria-label="Close" className="booking-close">×</button>
          </header>

          <div className="booking-notice">
            <p>
              <strong>This is not an actual meeting</strong> (we'll schedule that shortly!). It's to reserve your audit spot since I only do 4 per month. You'll receive an email from <a href="mailto:mika@joytothefood.com" className="link">mika@joytothefood.com</a> within 24 hours (or 1 business day if a weekend) with your intake form and Google Drive folder link.
            </p>
            <p>
              Cancellations more than 48 business hours before your kickoff call receive a full refund. Within 48 hours: 50% refund. No refunds after your kickoff call. To cancel or reschedule email <a href="mailto:mika@joytothefood.com" className="link">mika@joytothefood.com</a>.
            </p>
          </div>

          <div className="booking-direct-cta">
            <p className="booking-direct-body">
              Choose your date and time on our booking page. Payment is collected securely via Stripe before your spot is confirmed.
            </p>
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn alt"
            >
              Book your spot →
            </a>
            <p className="mono booking-direct-hint">Opens in a new tab</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SERVICE DETAILS MODAL
// "What to expect" walkthrough for available services. Mirrors the
// BookingFlow modal shell so the two feel like siblings — the aside
// is identical; only the right-side content swaps.
// ============================================================
function ServiceDetailsModal({ service, onClose, onBook }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!service || !service.details) return null;
  const d = service.details;
  const extras = service.extras;

  return (
    <div
      className="booking-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="booking-modal details-modal">
        {/* LEFT: branded service summary — same aside as BookingFlow */}
        <aside className="booking-aside" style={{ background: service.color }}>
          <span className="tag booking-aside-tag" style={{ background: 'var(--bg)', alignSelf: 'flex-start' }}>
            {service.tag}
          </span>
          <h3 className="display booking-aside-title">{service.title}</h3>
          <div className="booking-aside-blurb">{service.blurb}</div>

          <div className="booking-aside-total">
            <div className="mono booking-aside-total-eyebrow">Total</div>
            <div className="display booking-aside-total-amount">{service.price}</div>
            <div className="mono booking-aside-total-sub">{service.sub}</div>
          </div>
        </aside>

        {/* RIGHT: scrollable info content */}
        <div className="booking-main">
          <header className="booking-header">
            <div className="mono booking-embed-eyebrow">{d.eyebrow}</div>
            <button onClick={onClose} aria-label="Close" className="booking-close">×</button>
          </header>

          <div className="details-content">
            {/* Timeline */}
            <section className="details-section">
              <h4 className="mono details-section-eyebrow">your timeline</h4>
              <ol className="details-timeline">
                {d.timeline.map((step) => (
                  <li key={step.n} className="details-timeline-step">
                    <div className="details-timeline-num" style={{ background: service.color }}>{step.n}</div>
                    <div className="details-timeline-text">
                      <div className="details-timeline-label">{step.label}</div>
                      <div className="details-timeline-sub">{step.sub}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* What you'll do */}
            <section className="details-section">
              <h4 className="display details-section-title">{d.prep.title}</h4>
              <p className="details-section-intro">{d.prep.intro}</p>
              <ul className="details-list">
                {d.prep.items.map((it, i) => (
                  <li key={i} className="details-list-item">
                    <span className="details-list-bullet" style={{ background: service.color }} />
                    {it}
                  </li>
                ))}
              </ul>
            </section>

            {/* What you'll get */}
            <section className="details-section">
              <h4 className="display details-section-title">{d.deliverables.title}</h4>
              <ul className="details-deliverables">
                {d.deliverables.items.map((it, i) => (
                  <li key={i} className="details-deliverable">
                    <div className="details-deliverable-label">{it.label}</div>
                    <div className="details-deliverable-sub">{it.sub}</div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Extras (audit-plus only) */}
            {extras && (
              <section className="details-section details-extras" style={{ background: service.color }}>
                <h4 className="display details-section-title">{extras.title}</h4>
                <p className="details-section-intro">{extras.body}</p>
                <ul className="details-list">
                  {extras.bullets.map((b, i) => (
                    <li key={i} className="details-list-item">
                      <span className="details-list-bullet" style={{ background: 'var(--ink)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Bottom CTA bar */}
          <footer className="details-cta-bar">
            <button
              className="btn"
              onClick={() => { onClose(); onBook && onBook(service); }}
            >
              {service.cta} →
            </button>
            <button className="btn btn-ghost" onClick={onClose}>
              Maybe later
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

window.BookingFlow = BookingFlow;
window.ServiceDetailsModal = ServiceDetailsModal;

const TYPEFORM_URL = 'https://jssnn6ddnj6.typeform.com/to/gV4kNGFv';

// ============================================================
// MASTERMIND MODAL
// Shows two tracks; clicking either opens the Typeform application
// in a new tab and closes the modal.
// ============================================================
function MastermindModal({ service, onClose }) {

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!service) return null;

  const tracks = [
    {
      id: 'rise',
      emoji: '🌱',
      label: 'On the Rise',
      sub: "You're building your account and you want it to actually work. Better hooks, smarter content strategy, more of the right people finding you. This is where we figure that out together.",
    },
    {
      id: 'next-level',
      emoji: '💸',
      label: 'The Next Level',
      sub: "You've built the audience. Now you want to make real money from it. Brand deals, memberships, affiliate strategy — this track is for creators who are ready to turn what they've built into real income.",
    },
  ];

  return (
    <div
      className="booking-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="booking-modal mastermind-modal">
        {/* LEFT: branded aside — same pattern as BookingFlow */}
        <aside className="booking-aside" style={{ background: service.color }}>
          <span className="tag booking-aside-tag" style={{ background: 'var(--bg)', alignSelf: 'flex-start' }}>
            {service.tag}
          </span>
          <h3 className="display booking-aside-title">{service.title}</h3>
          <div className="booking-aside-blurb">
            The Mastermind has two tracks so we can make sure you're with people at a similar stage.
            Which fits you best right now?
          </div>
          <div className="booking-aside-total">
            <div className="mono booking-aside-total-eyebrow">Investment</div>
            <div className="display booking-aside-total-amount">{service.price}</div>
            <div className="mono booking-aside-total-sub">{service.sub}</div>
          </div>
        </aside>

        {/* RIGHT */}
        <div className="booking-main">
          <header className="booking-header">
            <div className="mono booking-embed-eyebrow">Choose your track</div>
            <button onClick={onClose} aria-label="Close" className="booking-close">×</button>
          </header>

          <div className="mastermind-tracks">
            <div className="mastermind-track-grid">
              {tracks.map((t) => (
                <button
                  key={t.id}
                  className="mastermind-track-btn"
                  style={{ '--track-accent': service.color }}
                  onClick={() => { window.open(TYPEFORM_URL, '_blank'); onClose(); }}
                >
                  <span className="mastermind-track-emoji">{t.emoji}</span>
                  <span className="mastermind-track-label">{t.label}</span>
                  <span className="mastermind-track-sub">{t.sub}</span>
                </button>
              ))}
            </div>
            <p className="mastermind-apply-note">
              Mika reviews every application personally and selects group members based on
              availability and fit. You'll hear back within a few days of applying.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.MastermindModal = MastermindModal;

// ============================================================
// MASTERMIND DETAILS MODAL — "Tell me more"
// Full Jam Session explainer: what a month looks like, who it's
// for/not for, how it works, price, and apply CTA.
// ============================================================
function MastermindDetailsModal({ service, onClose, onBook }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Esc to close
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="booking-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="booking-modal details-modal mastermind-details-modal">
        {/* LEFT: branded aside */}
        <aside className="booking-aside" style={{ background: service.color }}>
          <span className="tag booking-aside-tag" style={{ background: 'var(--bg)', alignSelf: 'flex-start' }}>
            {service.tag}
          </span>
          <h3 className="display booking-aside-title">{service.title}</h3>
          <div className="booking-aside-blurb">{service.blurb}</div>
          <div className="booking-aside-total">
            <div className="mono booking-aside-total-eyebrow">Investment</div>
            <div className="display booking-aside-total-amount">{service.price}</div>
            <div className="mono booking-aside-total-sub">{service.sub}</div>
          </div>
        </aside>

        {/* RIGHT: scrollable "tell me more" content */}
        <div className="booking-main">
          <header className="booking-header">
            <div className="mono booking-embed-eyebrow">so here's what a month actually looks like</div>
            <button onClick={onClose} aria-label="Close" className="booking-close">×</button>
          </header>

          <div className="details-content jam-details-content">

            {/* What a month looks like */}
            <section className="details-section">
              <p className="jam-prose">
                Once a month we get on a call together — your track, your people, your questions. Hot seat style. We dig into what's actually happening in your account, what's working, what's not, and what to do next. Nothing is off-limits.
              </p>
              <p className="jam-prose">
                Every week you get fresh hook ideas dropped into your Discord channel so you're never starting from scratch on a caption again.
              </p>
              <p className="jam-prose">
                In between calls, Discord is where it all lives. Your track channel is full of creators at your exact stage — not a mixed bag of everyone, just your people. Ask questions, share wins, get feedback, hype each other up.
              </p>
              <p className="jam-prose">
                And I'm in there too. Actually responding.
              </p>
              <p className="jam-prose">
                Once a quarter we bring in a guest speaker — someone doing something you want to do, who can tell you exactly how they got there.
              </p>
            </section>

            {/* For you / not for you */}
            <section className="details-section jam-fit-section">
              <div className="jam-fit-col">
                <h4 className="mono details-section-eyebrow">this is for you if</h4>
                <ul className="details-list">
                  {[
                    "You're a food or lifestyle creator who is done piecing together a strategy from random viral tips",
                    "You're not opposed to showing up — on calls, in Discord, in your content — but you want the research and strategy done for you",
                    "You're a \"tell me what to focus on and I'll go do it\" kind of person — but you also want to understand the why behind it",
                    "You're ready to actually commit to figuring this out",
                  ].map((it, i) => (
                    <li key={i} className="details-list-item">
                      <span className="details-list-bullet" style={{ background: service.color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="jam-fit-col">
                <h4 className="mono details-section-eyebrow jam-not-eyebrow">this is not for you if</h4>
                <ul className="details-list">
                  {[
                    "You want something to passively sit in",
                    "You're looking for overnight results",
                  ].map((it, i) => (
                    <li key={i} className="details-list-item">
                      <span className="details-list-bullet" style={{ background: 'var(--ink-soft)' }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* How it works */}
            <section className="details-section">
              <h4 className="mono details-section-eyebrow">how it works</h4>
              <p className="jam-prose">
                Fill out a quick application and Mika will review it personally. Group members are selected based on availability and fit — you'll hear back within a few days. If it's a yes, you'll get added to your track at the next opening.
              </p>
              <div className="jam-price-block">
                <span className="display jam-price">{service.price}</span>
                <span className="mono jam-price-sub">{service.sub}</span>
              </div>
            </section>

          </div>

          {/* Bottom CTA bar */}
          <footer className="details-cta-bar">
            <button
              className="btn"
              onClick={() => { onClose(); onBook && onBook(service); }}
            >
              Apply now →
            </button>
            <button className="btn btn-ghost" onClick={onClose}>
              Maybe later
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

window.MastermindDetailsModal = MastermindDetailsModal;
