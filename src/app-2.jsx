/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================
// BOOKING FLOW
// Wraps Cal.com's inline embed in a branded modal.
// The aside (service summary + price) is ours; the calendar /
// scheduling / Stripe payment / intake fields are all Cal.com.
// ============================================================

// service.id  →  cal.com path
const CAL_LINKS = {
  'audit':       'mikacreative/the-audit',
  'audit-plus':  'mikacreative/the-auditplus',
};

// Standard Cal.com embed loader IIFE. Lazy: only attaches the
// app.cal.com script when first invoked. Safe to call repeatedly.
function ensureCalLoaded() {
  if (typeof window === 'undefined') return;
  if (window.Cal && window.Cal.loaded) return;
  (function (C, A, L) {
    const p = function (a, ar) { a.q.push(ar); };
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
        const api = function () { p(api, arguments); };
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

function BookingFlow({ service, onClose }) {
  const [confirmed, setConfirmed] = useState(false);
  const containerRef = useRef(null);

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

  // Initialize the Cal.com inline embed once the modal is mounted.
  useEffect(() => {
    if (!service) return;
    const calLink = CAL_LINKS[service.id];
    if (!calLink || !containerRef.current) return;

    ensureCalLoaded();
    const namespace = service.id;
    const Cal = window.Cal;

    Cal('init', namespace, { origin: 'https://cal.com' });
    Cal.ns[namespace]('inline', {
      elementOrSelector: containerRef.current,
      calLink: calLink,
      config: { layout: 'month_view', theme: 'light' },
    });
    Cal.ns[namespace]('ui', {
      hideEventTypeDetails: true, // we already show service details in the aside
      theme: 'light',
      cssVarsPerTheme: {
        light: {
          'cal-brand': '#1F1B16',          // ink (matches site primary buttons)
          'cal-brand-emphasis': '#FF6B6B', // coral accent
          'cal-text': '#1F1B16',
          'cal-text-emphasis': '#1F1B16',
          'cal-bg': '#FBF7F0',             // site bg
          'cal-bg-emphasis': '#F4ECDD',    // site bg-alt
          'cal-border': '#1F1B16',
          'cal-border-emphasis': '#1F1B16',
        },
      },
    });

    // Branded confirmation when Cal reports a successful booking.
    // The event has shipped under two names; listen for both to be safe.
    const onSuccess = () => setConfirmed(true);
    Cal.ns[namespace]('on', { action: 'bookingSuccessfulV2', callback: onSuccess });
    Cal.ns[namespace]('on', { action: 'bookingSuccessful',   callback: onSuccess });
  }, [service]);

  if (!service) return null;

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

        {/* RIGHT: Cal.com embed (or branded confirmation) */}
        <div className="booking-main">
          <header className="booking-header">
            <div className="mono booking-embed-eyebrow">
              {confirmed ? "✓ You're booked" : 'Pick a date & time'}
            </div>
            <button onClick={onClose} aria-label="Close" className="booking-close">×</button>
          </header>

          {confirmed ? (
            <ConfirmedMessage service={service} onClose={onClose} />
          ) : (
            <>
              <div className="booking-notice">
                <p>
                  <strong>This is not an actual meeting</strong> (we'll schedule that shortly!). It's to reserve your audit spot since I only do 4 per month. You'll receive an email from <a href="mailto:mika@joytothefood.com" className="link">mika@joytothefood.com</a> within 24 hours (or 1 business day if a weekend) with your intake form and Google Drive folder link.
                </p>
                <p>
                  Cancellations more than 48 business hours before your kickoff call receive a full refund. Within 48 hours: 50% refund. No refunds after your kickoff call. To cancel or reschedule email <a href="mailto:mika@joytothefood.com" className="link">mika@joytothefood.com</a>.
                </p>
              </div>
              <div ref={containerRef} className="booking-embed" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ConfirmedMessage({ service, onClose }) {
  return (
    <div className="booking-confirmed">
      <div className="booking-confirmed-check" style={{ background: service.color }}>✓</div>
      <h3 className="display booking-confirmed-title">you're booked!</h3>
      <p className="booking-confirmed-sub">
        Confirmation is on its way to your inbox, plus a calendar invite.
        I'll email you within 24 hrs from <strong>mika@joytothefood.com</strong> with
        what to send me before our session.
      </p>
      <button onClick={onClose} className="btn">Close</button>
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
