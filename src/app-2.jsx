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
            <div className="display booking-aside-total-amount">{service.price}</div>
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

// ============================================================
// MASTERMIND MODAL
// Two-track application flow: Grow vs Monetize.
// Track selection leads to a placeholder — Google Form TBD.
// ============================================================
function MastermindModal({ service, onClose }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

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
      id: 'grow',
      emoji: '🌱',
      label: 'I want to grow my following',
      sub: "You're building your audience and want a proven system to get there faster.",
    },
    {
      id: 'monetize',
      emoji: '💸',
      label: 'I want to monetize my existing audience',
      sub: "You already have a following and want to turn it into reliable income.",
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
          <div className="booking-aside-blurb">{service.blurb}</div>
          <div className="booking-aside-total">
            <div className="mono booking-aside-total-eyebrow">Investment</div>
            <div className="display booking-aside-total-amount">{service.price}</div>
            <div className="mono booking-aside-total-sub">{service.sub}</div>
          </div>
        </aside>

        {/* RIGHT */}
        <div className="booking-main">
          <header className="booking-header">
            <div className="mono booking-embed-eyebrow">
              {selectedTrack ? 'Application received' : 'Choose your track'}
            </div>
            <button onClick={onClose} aria-label="Close" className="booking-close">×</button>
          </header>

          {!selectedTrack ? (
            /* ── Step 1: track selection ── */
            <div className="mastermind-tracks">
              <p className="mastermind-tracks-intro">
                The Mastermind has two tracks so we can make sure you're with people at a similar stage.
                Which fits you best right now?
              </p>
              <div className="mastermind-track-grid">
                {tracks.map((t) => (
                  <button
                    key={t.id}
                    className="mastermind-track-btn"
                    style={{ '--track-accent': service.color }}
                    onClick={() => setSelectedTrack(t)}
                  >
                    <span className="mastermind-track-emoji">{t.emoji}</span>
                    <span className="mastermind-track-label">{t.label}</span>
                    <span className="mastermind-track-sub">{t.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ── Step 2: placeholder (Google Form TBD) ── */
            <div className="mastermind-placeholder">
              <div className="mastermind-placeholder-icon">{selectedTrack.emoji}</div>
              <h4 className="display mastermind-placeholder-title">
                {selectedTrack.label}
              </h4>
              <p className="mastermind-placeholder-body">
                Application details are coming soon. In the meantime, email{' '}
                <a href="mailto:mika@joytothefood.com" className="link">
                  mika@joytothefood.com
                </a>{' '}
                with the subject line <strong>Mastermind Application</strong> and let Mika know
                which track you're interested in — she'll follow up directly.
              </p>
              <div className="mastermind-placeholder-actions">
                <button className="btn btn-ghost" onClick={() => setSelectedTrack(null)}>
                  ← Change track
                </button>
                <button className="btn" onClick={onClose}>
                  Got it
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.MastermindModal = MastermindModal;
