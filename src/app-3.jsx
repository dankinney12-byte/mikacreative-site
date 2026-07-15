/* global React, ReactDOM, Wordmark, Nav, Services, About, Freebie, Testimonials, Speaking, ContactCTA, BookingFlow, ServiceDetailsModal, MastermindModal, MastermindDetailsModal, useTweaks, TweaksPanel, TweakSection, TweakRadio, usePhase, AnnouncementBar, ChallengeHero, ChallengeProofBar, ReelProof, WhyNow, HowItWorks, WeekArc, WhoMikaIs, ForNotFor, MemberWins, ValueStack, Timeline, FAQ, ChallengeCTA, CtaBand, WaitlistModal */
const { useState, useEffect } = React;

const PALETTES = {
  Confetti: { c1: '#FF6B6B', c2: '#F4B942', c3: '#7BB661', c4: '#5BA9D6', c5: '#B26FB8', bg: '#FBF7F0', bgAlt: '#F4ECDD', ink: '#1F1B16' },
  Citrus:   { c1: '#F56F3B', c2: '#F4C430', c3: '#A8C957', c4: '#5DBE9A', c5: '#E07B91', bg: '#FFF8E7', bgAlt: '#FBEFCB', ink: '#2A1F12' },
  Berry:    { c1: '#E84A8A', c2: '#F8B4B4', c3: '#9B7BD4', c4: '#6BA8E8', c5: '#FFB347', bg: '#FFF4F4', bgAlt: '#FBE6EC', ink: '#1F1226' },
  Sunset:   { c1: '#FF7E5C', c2: '#FFCB69', c3: '#E07A5F', c4: '#81B29A', c5: '#C77DFF', bg: '#FFF1E6', bgAlt: '#F8DEC4', ink: '#2A1810' },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "Confetti",
  "hero": "BigType"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak]         = useTweaks(TWEAK_DEFAULTS);
  const [bookingService, setBookingService] = useState(null);
  const [detailsService, setDetailsService] = useState(null);
  const [waitlistOpen, setWaitlistOpen]     = useState(false);
  const phase = usePhase();

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

  // Single CTA handler — open Kit Commerce in open phase, else waitlist modal
  function handleCta(ph) {
    if (ph === 'open') {
      window.location.href = LAUNCH.kitCommerceUrl;
    } else {
      setWaitlistOpen(true);
    }
  }

  return (
    <>
      {/* ── Challenge launch page ── */}
      <AnnouncementBar phase={phase} onCta={() => handleCta(phase)} />
      <Nav />
      <ChallengeHero phase={phase} onCta={handleCta} />
      <MemberWins />
      <WhyNow />
      <WhoMikaIs />
      <ReelProof />
      <CtaBand phase={phase} onCta={handleCta} />
      <HowItWorks />
      <WeekArc />
      <ForNotFor />
      <CtaBand phase={phase} onCta={handleCta} />
      {phase !== 'closed' && <ValueStack phase={phase} onCta={handleCta} />}
      <FAQ />
      <ChallengeCTA phase={phase} onCta={handleCta} />

      {/* ── Existing services, relocated below the challenge ── */}
      <div className="gwj-services-bridge">
        <div className="container">
          <p className="gwj-bridge-text">
            already established and want me 1:1? I've got you over here too →
          </p>
        </div>
      </div>
      <Services onBook={setBookingService} onSeeDetails={setDetailsService} />
      <About />
      <Speaking />
      <ContactCTA onWaitlist={() => handleCta(phase)} phase={phase} />

      {/* ── Modals ── */}
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        phase={phase}
      />

      {bookingService && bookingService.id === 'mastermind' && (
        <MastermindModal
          service={bookingService}
          onClose={() => setBookingService(null)}
        />
      )}
      {bookingService && bookingService.id !== 'mastermind' && (
        <BookingFlow
          service={bookingService}
          onClose={() => setBookingService(null)}
        />
      )}
      {detailsService && detailsService.id === 'mastermind' && (
        <MastermindDetailsModal
          service={detailsService}
          onClose={() => setDetailsService(null)}
          onBook={setBookingService}
        />
      )}
      {detailsService && detailsService.id !== 'mastermind' && (
        <ServiceDetailsModal
          service={detailsService}
          onClose={() => setDetailsService(null)}
          onBook={setBookingService}
        />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection title="Color palette">
          <TweakRadio
            value={tweaks.palette}
            options={['Confetti', 'Citrus', 'Berry', 'Sunset']}
            onChange={(v) => setTweak('palette', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
