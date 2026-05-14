/* global React, ReactDOM, Wordmark, Nav, HeroBigType, HeroImageGrid, ProofBar, Strip, Services, About, Freebie, Testimonials, Speaking, ContactCTA, QuizWidget, BookingFlow, ServiceDetailsModal, MastermindModal, MastermindDetailsModal, useTweaks, TweaksPanel, TweakSection, TweakRadio */
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

  return (
    <>
      <Nav onOpenQuiz={() => setQuizOpen(true)} />
      <Hero onOpenQuiz={() => setQuizOpen(true)} onBook={setBookingService} />
      <ProofBar />
      <Strip />
      <Services
        onOpenQuiz={() => setQuizOpen(true)}
        onBook={setBookingService}
        onSeeDetails={setDetailsService}
      />
      <About />
      <Testimonials />
      <Speaking />
      <ContactCTA onOpenQuiz={() => setQuizOpen(true)} onBook={setBookingService} />
      <QuizWidget open={quizOpen} setOpen={setQuizOpen} onBook={setBookingService} />
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
        <TweakSection title="Hero layout">
          <TweakRadio
            value={tweaks.hero}
            options={['BigType', 'ImageGrid']}
            onChange={(v) => setTweak('hero', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
