// Production stubs for the dev-only "Tweaks" panel that ships with the
// Claude.ai artifact. The original `useTweaks` hook coordinated runtime
// theme switching with a host iframe; in production the panel is hidden
// and tweaks resolve to whatever defaults the App passes in.

function useTweaks(defaults) {
  return [defaults, () => {}];
}
function TweaksPanel() { return null; }
function TweakSection() { return null; }
function TweakRadio() { return null; }
