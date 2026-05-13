// app.jsx — main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "A",
  "heroMedia": "image",
  "titleFont": "Newsreader",
  "accentColor": "#3b6b50"
}/*EDITMODE-END*/;

const HERO_VARIANT_LABELS = {
  'A': 'Plein cadre forêt',
  'B': 'Ciné-débat humain',
  'C': 'Diptyque éditorial'
};

function useFadeInOnScroll() {
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '-40px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

function useScrollAware(threshold = 600) {
  const [past, setPast] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return past;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [trailerOpen, setTrailerOpen] = React.useState(false);
  const scrolled = useScrollAware(600);

  useFadeInOnScroll();

  // Apply tweaks live
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.titleFont === 'Instrument Serif') {
      root.style.setProperty('--f-serif', '"Instrument Serif", "Newsreader", serif');
    } else if (t.titleFont === 'Spectral') {
      root.style.setProperty('--f-serif', '"Spectral", "Newsreader", serif');
    } else {
      root.style.setProperty('--f-serif', '"Newsreader", "Times New Roman", serif');
    }
  }, [t.titleFont]);

  React.useEffect(() => {
    const root = document.documentElement;
    const map = {
      '#3b6b50': { fir: 'oklch(0.40 0.05 155)', firDeep: 'oklch(0.28 0.04 155)' },  // fir green
      '#7a4a2e': { fir: 'oklch(0.40 0.07 50)',  firDeep: 'oklch(0.28 0.06 50)'  },  // earth brown
      '#1e3a3a': { fir: 'oklch(0.30 0.03 195)', firDeep: 'oklch(0.20 0.025 195)'}, // deep teal
    };
    const c = map[t.accentColor] || map['#3b6b50'];
    root.style.setProperty('--fir', c.fir);
    root.style.setProperty('--fir-deep', c.firDeep);
  }, [t.accentColor]);

  const jumpProjection = () => {
    document.getElementById('projection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Hero
        variant={t.heroVariant}
        heroMedia={t.heroMedia}
        onOpenTrailer={() => setTrailerOpen(true)}
        onJumpProjection={jumpProjection}
      />

      <nav className={"float-nav " + (scrolled ? 'is-visible' : '')}>
        <a href="#synopsis">Le film</a>
        <a href="#presse">Presse</a>
        <a className="float-nav--primary" href={window.MAILTO_URL}>Projection ↗</a>
      </nav>

      <div className="fade-in"><SynopsisSection /></div>
      <div className="fade-in"><FicheSection /></div>
      <div className="fade-in"><GallerySection onOpenTrailer={() => setTrailerOpen(true)} /></div>
      <div className="fade-in"><PresseSection /></div>
      <div className="fade-in"><CreditsSection /></div>
      <div className="fade-in"><ProjectionSection /></div>
      <FooterSection />

      <Lightbox open={trailerOpen} onClose={() => setTrailerOpen(false)} />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Variante"
          value={t.heroVariant}
          options={['A', 'B', 'C']}
          onChange={(v) => setTweak('heroVariant', v)}
        />
        <div style={{
          fontFamily: 'var(--f-mono)', fontSize: 10.5,
          color: 'rgba(41,38,27,.55)', marginTop: -4, letterSpacing: '.02em'
        }}>
          {HERO_VARIANT_LABELS[t.heroVariant]}
        </div>
        {t.heroVariant === 'A' && (
          <TweakRadio
            label="Fond"
            value={t.heroMedia}
            options={['image', 'video']}
            onChange={(v) => setTweak('heroMedia', v)}
          />
        )}

        <TweakSection label="Identité" />
        <TweakRadio
          label="Titre"
          value={t.titleFont}
          options={['Newsreader', 'Instrument Serif', 'Spectral']}
          onChange={(v) => setTweak('titleFont', v)}
        />
        <TweakColor
          label="Accent"
          value={t.accentColor}
          options={['#3b6b50', '#7a4a2e', '#1e3a3a']}
          onChange={(v) => setTweak('accentColor', v)}
        />

        <TweakSection label="Actions" />
        <TweakButton onClick={() => setTrailerOpen(true)}>
          ▶ Tester la bande-annonce
        </TweakButton>
        <TweakButton onClick={jumpProjection}>
          ↓ Aller à « Organiser une projection »
        </TweakButton>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
