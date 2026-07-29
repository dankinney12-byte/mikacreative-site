// Grow with Joy — launch configuration (single source of truth)
// No import/export — compiled into the global bundle.
// ROUND 2: public enrollment opens Aug 24, closes the night before the
// Sept 14 start (2am Pacific). The page flips phases automatically.

var LAUNCH = {
  name:            "Grow with Joy",
  price:           389,
  timezone:        "America/Chicago",
  enrollOpens:     "2026-08-24T00:00:00-05:00",
  enrollCloses:    "2026-09-14T02:00:00-07:00",
  challengeStarts: "2026-09-14T00:00:00-05:00",
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
