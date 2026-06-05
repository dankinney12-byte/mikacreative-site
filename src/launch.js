// Grow with Joy — launch configuration (single source of truth)
// No import/export — compiled into the global bundle.
// Kit URLs are placeholders; replace with real values before go-live.

var LAUNCH = {
  name:            "Grow with Joy",
  price:           249,
  timezone:        "America/Chicago",
  enrollOpens:     "2026-06-15T00:00:00-05:00",
  enrollCloses:    "2026-06-30T23:59:59-05:00",
  challengeStarts: "2026-07-01T00:00:00-05:00",
  kitCommerceUrl:  "#",        // <<KIT_COMMERCE_CHECKOUT_URL>>
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
