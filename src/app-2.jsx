/* global React */
const { useState, useMemo, useEffect } = React;

// ============================================================
// BOOKING FLOW
// 4 steps: calendar → time → details → payment → confirmed
// ============================================================

// Discount codes — add real ones here, or wire to Stripe Coupons later.
// `kind: 'percent'` takes a number 0–100; `kind: 'flat'` takes a dollar amount.
const DISCOUNT_CODES = {
  VIP10:    { kind: 'percent', value: 10, label: '10% off — VIP' },
  EARLY100: { kind: 'flat',    value: 100, label: '$100 off — early bird' },
  FRIEND:   { kind: 'percent', value: 20, label: '20% off — friend rate' },
};

function parsePrice(str) {
  // "$950" or "$950/audit" → 950
  const m = String(str || '').match(/\$?([\d,]+)/);
  return m ? parseInt(m[1].replace(/,/g, ''), 10) : 0;
}
function fmtMoney(n) {
  return '$' + n.toLocaleString('en-US');
}

const TIMES = [
  '9:00 AM', '10:00 AM', '11:30 AM',
  '1:00 PM', '2:30 PM', '4:00 PM',
];

// Pretend availability — some days/times are blocked
function isDayAvailable(d) {
  if (!d) return false;
  const today = new Date(); today.setHours(0,0,0,0);
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
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
}
function fmtDay(date) {
  return date.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
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

function BookingFlow({ service, onClose }) {
  const [step, setStep] = useState(1); // 1 cal, 2 details, 3 pay, 4 done
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [details, setDetails] = useState({
    name: '', email: '', handle: '', followers: '0–5K',
    goal: '', notes: '',
  });
  const [card, setCard] = useState({ number: '', exp: '', cvc: '', zip: '' });
  const [processing, setProcessing] = useState(false);
  const [discountInput, setDiscountInput] = useState('');
  const [appliedCode, setAppliedCode] = useState(null);
  const [discountError, setDiscountError] = useState('');

  // Pricing math
  const basePrice = service ? parsePrice(service.price) : 0;
  const discountAmount = appliedCode
    ? (appliedCode.kind === 'percent'
        ? Math.round(basePrice * appliedCode.value / 100)
        : Math.min(appliedCode.value, basePrice))
    : 0;
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
    setAppliedCode({ code, ...found });
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
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!service) return null;

  const cells = useMemo(
    () => buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth()),
    [viewDate]
  );

  const availableTimes = selectedDay ? getTimesForDay(selectedDay) : [];

  const canProceedStep1 = selectedDay && selectedTime;
  const canProceedStep2 = details.name && details.email && details.handle;
  const canProceedStep3 =
    card.number.replace(/\s/g, '').length >= 15 &&
    card.exp.length >= 4 &&
    card.cvc.length >= 3;

  function handlePay() {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep(4);
    }, 1600);
  }

  // Allow closing with Esc
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="booking-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="booking-modal">
        {/* LEFT: service summary */}
        <aside className="booking-aside" style={{ background: service.color }}>
          <span className="tag booking-aside-tag" style={{ background: 'var(--bg)', alignSelf: 'flex-start' }}>
            {service.tag}
          </span>
          <h3 className="display booking-aside-title">
            {service.title}
          </h3>
          <div className="booking-aside-blurb">
            {service.blurb}
          </div>

          <div className="booking-aside-total">
            <div className="mono booking-aside-total-eyebrow">Total</div>
            {appliedCode ? (
              <>
                <div className="booking-aside-total-strike">{fmtMoney(basePrice)}</div>
                <div className="display booking-aside-total-amount">{fmtMoney(finalPrice)}</div>
                <div className="mono booking-aside-total-discount" style={{ color: service.color }}>
                  {appliedCode.code} −{fmtMoney(discountAmount)}
                </div>
              </>
            ) : (
              <>
                <div className="display booking-aside-total-amount">{service.price}</div>
                <div className="mono booking-aside-total-sub">{service.sub}</div>
              </>
            )}
          </div>
        </aside>

        {/* RIGHT: flow */}
        <div className="booking-main">
          {/* Header */}
          <header className="booking-header">
            <Stepper step={step} />
            <button
              onClick={onClose}
              aria-label="Close"
              className="booking-close"
            >×</button>
          </header>

          {/* Body */}
          <div className="booking-body">
            {step === 1 && (
              <CalendarStep
                viewDate={viewDate} setViewDate={setViewDate}
                cells={cells}
                selectedDay={selectedDay} setSelectedDay={(d) => { setSelectedDay(d); setSelectedTime(null); }}
                selectedTime={selectedTime} setSelectedTime={setSelectedTime}
                availableTimes={availableTimes}
              />
            )}
            {step === 2 && (
              <DetailsStep
                details={details} setDetails={setDetails}
                selectedDay={selectedDay} selectedTime={selectedTime}
              />
            )}
            {step === 3 && (
              <PaymentStep
                card={card} setCard={setCard}
                price={service.price}
                processing={processing}
                basePrice={basePrice}
                finalPrice={finalPrice}
                appliedCode={appliedCode}
                discountAmount={discountAmount}
                discountInput={discountInput}
                setDiscountInput={setDiscountInput}
                applyDiscount={applyDiscount}
                removeDiscount={removeDiscount}
                discountError={discountError}
              />
            )}
            {step === 4 && (
              <ConfirmedStep
                service={service}
                day={selectedDay} time={selectedTime}
                email={details.email}
                basePrice={basePrice}
                finalPrice={finalPrice}
                appliedCode={appliedCode}
                discountAmount={discountAmount}
              />
            )}
          </div>

          {/* Footer */}
          {step !== 4 && (
            <footer className="booking-footer">
              <button
                onClick={() => step > 1 ? setStep(step - 1) : onClose()}
                className="btn ghost sm"
                style={{ background: 'transparent', boxShadow: 'none' }}
              >
                ← {step === 1 ? 'Cancel' : 'Back'}
              </button>

              {step === 1 && (
                <button
                  className="btn sm"
                  disabled={!canProceedStep1}
                  onClick={() => setStep(2)}
                  style={{
                    opacity: canProceedStep1 ? 1 : 0.4,
                    cursor: canProceedStep1 ? 'pointer' : 'not-allowed',
                  }}
                >
                  Continue →
                </button>
              )}
              {step === 2 && (
                <button
                  className="btn sm"
                  disabled={!canProceedStep2}
                  onClick={() => setStep(3)}
                  style={{
                    opacity: canProceedStep2 ? 1 : 0.4,
                    cursor: canProceedStep2 ? 'pointer' : 'not-allowed',
                  }}
                >
                  next: payment →
                </button>
              )}
              {step === 3 && (
                <button
                  className="btn sm"
                  disabled={!canProceedStep3 || processing}
                  onClick={handlePay}
                  style={{
                    opacity: (canProceedStep3 && !processing) ? 1 : 0.4,
                    cursor: (canProceedStep3 && !processing) ? 'pointer' : 'not-allowed',
                  }}
                >
                  {processing ? 'Processing…' : `Pay ${fmtMoney(finalPrice)} →`}
                </button>
              )}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- Stepper ----
function Stepper({ step }) {
  const steps = ['Date & time', 'Your details', 'Payment', 'Confirmed'];
  return (
    <div className="booking-stepper">
      {steps.map((label, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        const stateClass = done ? 'is-done' : (active ? 'is-active' : '');
        return (
          <React.Fragment key={i}>
            <div className={`booking-stepper-step ${stateClass}`}>
              <span className="booking-stepper-num mono">
                {done ? '✓' : n}
              </span>
              <span className="mono booking-stepper-label">{label}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="booking-stepper-divider" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ---- Step 1: Calendar ----
function CalendarStep({
  viewDate, setViewDate, cells,
  selectedDay, setSelectedDay,
  selectedTime, setSelectedTime,
  availableTimes,
}) {
  const today = new Date(); today.setHours(0,0,0,0);
  const sameDay = (a, b) => a && b && a.getTime() === b.getTime();

  return (
    <div>
      <h3 className="display" style={{ fontSize: 28, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
        Pick a date & time
      </h3>
      <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 8px' }}>
        Choose which audit you're booking — <strong>The Audit ($950)</strong> or <strong>Audit + Pre-Post Reviews ($1,100)</strong>. You'll select at checkout.
      </p>
      <p style={{ fontSize: 13, color: 'var(--ink-soft)', margin: '0 0 20px', opacity: 0.85 }}>
        All times are Central. Audits run Monday–Friday.
      </p>

      <div className="booking-cal-grid">
        {/* Calendar */}
        <div className="booking-cal-pane">
          <div className="booking-cal-monthbar">
            <button
              onClick={() => {
                const next = new Date(viewDate); next.setMonth(next.getMonth() - 1);
                if (next.getFullYear() < today.getFullYear() ||
                    (next.getFullYear() === today.getFullYear() && next.getMonth() < today.getMonth())) return;
                setViewDate(next);
              }}
              className="booking-cal-arrow"
            >‹</button>
            <div className="display booking-cal-month-label">
              {fmtMonth(viewDate)}
            </div>
            <button
              onClick={() => {
                const next = new Date(viewDate); next.setMonth(next.getMonth() + 1);
                setViewDate(next);
              }}
              className="booking-cal-arrow"
            >›</button>
          </div>

          <div className="booking-cal-dow">
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} className="mono booking-cal-dow-cell">{d}</div>
            ))}
          </div>

          <div className="booking-cal-days">
            {cells.map((d, i) => {
              if (!d) return <div key={i} />;
              const avail = isDayAvailable(d);
              const sel = sameDay(d, selectedDay);
              return (
                <button
                  key={i}
                  disabled={!avail}
                  onClick={() => setSelectedDay(d)}
                  className="booking-cal-day"
                  style={{
                    border: sel ? '2px solid var(--ink)' : '1.5px solid transparent',
                    background: sel ? 'var(--c2)' : (avail ? 'var(--bg-alt)' : 'transparent'),
                    color: avail ? 'var(--ink)' : 'var(--ink-soft)',
                    fontWeight: sel ? 700 : 500,
                    cursor: avail ? 'pointer' : 'not-allowed',
                    opacity: avail ? 1 : 0.35,
                  }}
                  onMouseOver={(e) => { if (avail && !sel) e.currentTarget.style.background = 'var(--c2)'; }}
                  onMouseOut={(e) => { if (avail && !sel) e.currentTarget.style.background = 'var(--bg-alt)'; }}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          <div className="booking-cal-legend">
            <Legend swatch="var(--bg-alt)" label="Available" />
            <Legend swatch="var(--c2)" label="Selected" />
            <Legend swatch="transparent" label="Booked" dim />
          </div>
        </div>

        {/* Times */}
        <div className="booking-cal-pane booking-cal-pane-times">
          <div className="mono booking-times-eyebrow">
            {selectedDay ? fmtDay(selectedDay) : 'Pick a date first'}
          </div>

          {!selectedDay && (
            <div className="booking-times-empty">
              Select a day on the left to see open times.
            </div>
          )}

          {selectedDay && (
            <div className="booking-times-grid">
              {TIMES.map((t) => {
                const avail = availableTimes.includes(t);
                const sel = selectedTime === t;
                return (
                  <button
                    key={t}
                    disabled={!avail}
                    onClick={() => setSelectedTime(t)}
                    className="booking-time"
                    style={{
                      background: sel ? 'var(--ink)' : 'var(--bg)',
                      color: sel ? 'var(--bg)' : 'var(--ink)',
                      cursor: avail ? 'pointer' : 'not-allowed',
                      opacity: avail ? 1 : 0.35,
                      textDecoration: avail ? 'none' : 'line-through',
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Legend({ swatch, label, dim }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--ink-soft)', opacity: dim ? 0.5 : 1 }}>
      <span style={{
        width: 12, height: 12, borderRadius: 4,
        background: swatch,
        border: '1.5px solid var(--ink)',
      }}/>
      <span className="mono" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

// ---- Step 2: Details ----
function DetailsStep({ details, setDetails, selectedDay, selectedTime }) {
  const u = (k, v) => setDetails(d => ({ ...d, [k]: v }));
  return (
    <div>
      <h3 className="display" style={{ fontSize: 28, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
        before we dig in
      </h3>
      <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 20px' }}>
        Booking <strong>{fmtDay(selectedDay)} at {selectedTime} CT</strong>. The more context you give me, the more useful your audit will be.
      </p>

      <div className="booking-details-grid">
        <Field label="Name">
          <input className="booking-form-input" value={details.name} onChange={(e) => u('name', e.target.value)} placeholder="Jane Doe"/>
        </Field>
        <Field label="Email">
          <input className="booking-form-input" type="email" value={details.email} onChange={(e) => u('email', e.target.value)} placeholder="jane@example.com"/>
        </Field>
        <Field label="Instagram handle">
          <input className="booking-form-input" value={details.handle} onChange={(e) => u('handle', e.target.value)} placeholder="@yourhandle"/>
        </Field>
        <Field label="Current followers">
          <select className="booking-form-input" value={details.followers} onChange={(e) => u('followers', e.target.value)}>
            <option>0–5K</option>
            <option>5K–25K</option>
            <option>25K–100K</option>
            <option>100K–500K</option>
            <option>500K+</option>
          </select>
        </Field>
        <div className="booking-details-grid-full">
          <Field label="What's your #1 goal?">
            <input className="booking-form-input" value={details.goal} onChange={(e) => u('goal', e.target.value)} placeholder="e.g. break 25K, land a brand deal, figure out why my reels stopped performing"/>
          </Field>
        </div>
        <div className="booking-details-grid-full">
          <Field label="Anything else I should know? (optional)">
            <textarea
              className="booking-form-input booking-form-textarea"
              value={details.notes}
              onChange={(e) => u('notes', e.target.value)}
              placeholder="Stuck spots, recent flops, niche shifts, anything that'll help me dig in."
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span className="mono booking-form-label" style={{ marginBottom: 0 }}>{label}</span>
      {children}
    </label>
  );
}

// ---- Step 3: Payment ----
function PaymentStep({
  card, setCard, price, processing,
  basePrice, finalPrice, appliedCode, discountAmount,
  discountInput, setDiscountInput, applyDiscount, removeDiscount, discountError,
}) {
  const u = (k, v) => setCard(c => ({ ...c, [k]: v }));
  return (
    <div>
      <h3 className="display" style={{ fontSize: 28, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
        Payment
      </h3>
      <p style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 0 20px' }}>
        Secure checkout — you'll be charged <strong>{fmtMoney(finalPrice)}</strong> when you confirm. Questions? <a href="mailto:hi@mikacreative.co" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Email me before you book.</a>
      </p>

      <div className="booking-pay-form">
        <Field label="Card number">
          <input
            className="booking-form-input"
            value={card.number}
            onChange={(e) => {
              const v = e.target.value.replace(/[^\d]/g, '').slice(0, 16);
              const f = v.replace(/(\d{4})(?=\d)/g, '$1 ');
              u('number', f);
            }}
            placeholder="1234 5678 9012 3456"
            inputMode="numeric"
          />
        </Field>
        <div className="booking-pay-row-3">
          <Field label="Expiry">
            <input
              className="booking-form-input"
              value={card.exp}
              onChange={(e) => {
                let v = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
                if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
                u('exp', v);
              }}
              placeholder="MM/YY"
              inputMode="numeric"
            />
          </Field>
          <Field label="CVC">
            <input
              className="booking-form-input"
              value={card.cvc}
              onChange={(e) => u('cvc', e.target.value.replace(/[^\d]/g, '').slice(0, 4))}
              placeholder="123"
              inputMode="numeric"
            />
          </Field>
          <Field label="ZIP">
            <input
              className="booking-form-input"
              value={card.zip}
              onChange={(e) => u('zip', e.target.value.replace(/[^\d]/g, '').slice(0, 5))}
              placeholder="12345"
              inputMode="numeric"
            />
          </Field>
        </div>
      </div>

      <div className="booking-discount-box">
        <div className="mono" style={{
          fontSize: 11, letterSpacing: '0.12em',
          textTransform: 'uppercase', fontWeight: 600,
          color: 'var(--ink-soft)', marginBottom: 10,
        }}>
          Discount code
        </div>

        {appliedCode ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 12, padding: '10px 14px',
            background: 'var(--ink)', color: 'var(--bg)',
            borderRadius: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
              <span style={{ fontSize: 16 }}>✓</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{appliedCode.code}</div>
                <div className="mono" style={{ fontSize: 11, opacity: 0.75 }}>
                  {appliedCode.label} · −{fmtMoney(discountAmount)}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={removeDiscount}
              style={{
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
                fontWeight: 600,
              }}
            >Remove</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                className="booking-form-input"
                style={{
                  flex: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--mono)',
                  fontSize: 13,
                }}
                value={discountInput}
                onChange={(e) => setDiscountInput(e.target.value.toUpperCase())}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); applyDiscount(); } }}
                placeholder="ENTER CODE"
              />
              <button
                type="button"
                onClick={applyDiscount}
                disabled={!discountInput.trim()}
                style={{
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
                  whiteSpace: 'nowrap',
                }}
              >Apply</button>
            </div>
            {discountError && (
              <div style={{
                marginTop: 8,
                fontSize: 12,
                color: '#c0392b',
                fontWeight: 500,
              }}>
                {discountError}
              </div>
            )}
          </>
        )}

        {/* Subtotal / discount / total breakdown */}
        {appliedCode && (
          <div style={{
            marginTop: 14, paddingTop: 12,
            borderTop: '1px dashed var(--ink-soft)',
            fontSize: 13,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0' }}>
              <span style={{ color: 'var(--ink-soft)' }}>Subtotal</span>
              <span>{fmtMoney(basePrice)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', color: 'var(--ink-soft)' }}>
              <span>Discount ({appliedCode.code})</span>
              <span>−{fmtMoney(discountAmount)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0 0', fontWeight: 700, fontSize: 15 }}>
              <span>Total</span>
              <span>{fmtMoney(finalPrice)}</span>
            </div>
          </div>
        )}
      </div>

      <div style={{
        marginTop: 18,
        padding: '10px 14px',
        background: 'var(--bg-alt)',
        border: '1.5px solid var(--ink)',
        borderRadius: 10,
        fontSize: 12,
        color: 'var(--ink-soft)',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: 14 }}>🔒</span>
        Payments are processed securely. Card info never touches our servers.
      </div>
    </div>
  );
}

// ---- Step 4: Confirmed ----
function ConfirmedStep({ service, day, time, email }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0 12px' }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: service.color,
        border: '2px solid var(--ink)',
        boxShadow: '4px 4px 0 var(--ink)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        margin: '12px auto 24px',
        fontSize: 36,
      }}>✓</div>

      <h3 className="display" style={{ fontSize: 36, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
        you're booked!
      </h3>
      <p style={{ fontSize: 15, color: 'var(--ink-soft)', margin: '0 0 28px', maxWidth: 440, marginInline: 'auto' }}>
        Confirmation sent to <strong>{email}</strong>. A calendar invite is on its way.
      </p>

      <div style={{
        display: 'inline-block',
        textAlign: 'left',
        background: 'var(--card)',
        border: '2px solid var(--ink)',
        borderRadius: 16,
        padding: '20px 24px',
        boxShadow: '4px 4px 0 var(--ink)',
        minWidth: 320,
        maxWidth: '100%',
      }}>
        <Row k="Service" v={service.title}/>
        <Row k="Date" v={day ? fmtDay(day) : ''}/>
        <Row k="Time" v={`${time} CT`}/>
        <Row k="Total" v={service.price} bold/>
      </div>

      <div style={{ marginTop: 28, fontSize: 13, color: 'var(--ink-soft)' }}>
        Next: I'll DM you within 24 hrs from <strong>@mika.creative</strong> with your intake form and what to send me.
      </div>
    </div>
  );
}

function Row({ k, v, bold }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 30, padding: '8px 0', borderBottom: '1px dashed var(--ink-soft)', fontSize: 14 }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>{k}</span>
      <span style={{ fontWeight: bold ? 700 : 500 }}>{v}</span>
    </div>
  );
}

window.BookingFlow = BookingFlow;
