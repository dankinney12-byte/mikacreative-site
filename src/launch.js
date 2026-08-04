// Grow with Joy — launch configuration (single source of truth)
// No import/export — compiled into the global bundle.
// ROUND 2 IS POSTPONED (dates TBD, possibly Jan 2027). The dates below are
// far-future placeholders so the site stays in the waitlist phase and can
// NOT auto-flip to open/closed. When round 2 is scheduled: set the real
// dates here AND sweep the copy (banner, hero strip, timeline, FAQ,
// CtaBand notes, waitlist modal) plus re-enable the ValueStack in app-3.

var LAUNCH = {
  name:            "Grow with Joy",
  price:           389,
  timezone:        "America/Chicago",
  enrollOpens:     "2099-01-01T00:00:00-06:00",  // TBD placeholder
  enrollCloses:    "2099-02-01T00:00:00-06:00",  // TBD placeholder
  challengeStarts: "2099-02-01T00:00:00-06:00",  // TBD placeholder
  kitCommerceUrl:  "https://joy-to-the-food.kit.com/products/grow-with-joy",
  kitWaitlistUrl:  "#",        // fallback href if Netlify function not available
};

function getPhase(now) {
  if (!now) now = new Date();
  var open  = new Date(LAUNCH.enrollOpens);
  var close = new Date(LAUNCH.enrollCloses);
  if (now < open)  return "waitlist";
  if (now <= close) return "open";
  return "closed";
}
