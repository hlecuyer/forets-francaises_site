// hero.jsx — Hero with 3 variants

const Hero = ({ variant, heroMedia, onOpenTrailer, onJumpProjection, accent }) => {
  // Variant A — fullscreen forest aerial (the title-card image) OR video background
  if (variant === 'A' || !variant) {
    const isVideo = heroMedia === 'video';
    return (
      <section className="hero" data-screen-label={isVideo ? "Hero — Vidéo en fond" : "Hero — Plein cadre forêt"}>
        {isVideo ? (
          <div className="hero__bg-video-wrap">
            <iframe
              className="hero__bg-video"
              src="https://player.vimeo.com/video/688296230?background=1&autoplay=1&loop=1&muted=1&dnt=1"
              allow="autoplay; fullscreen"
              title="Bande-annonce — fond"
              frameBorder="0"
            />
          </div>
        ) : (
          <img className="hero__bg" src="assets/hero-forest-top.png"
               alt="Vue aérienne d'une forêt française dans la brume, couleurs d'automne" />
        )}
        <div className="hero__veil" />
        <div className="hero__chrome">
          <div className="hero__top">
            <div>Forêts françaises<span className="dot"></span>en quête d'avenir</div>
            <div>54 min<span className="dot"></span>2022<span className="dot"></span>Documentaire</div>
          </div>
          <div className="hero__body">
            <div className="hero__eyebrow">Un film de Camille Geoffray</div>
            <h1 className="hero__title">
              Forêts <em>françaises</em>,<br/>
              en quête d'avenir.
            </h1>
            <p className="hero__sub">
              Imiter la nature, hâter son œuvre. Deux journalistes parcourent une filière forêt-bois secouée par les crises — et tentent, à hauteur de forêt, de comprendre ce qui s'y joue.
            </p>
            <div className="hero__cta">
              <button className="btn btn--light" onClick={onJumpProjection}>
                Organiser une projection
                <svg className="btn-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </button>
              <button className="btn btn--ghost-light" onClick={onOpenTrailer}>
                <svg className="btn-icon" width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
                  <path d="M1 1L11 7L1 13V1Z"/>
                </svg>
                Voir la bande-annonce
              </button>
            </div>
            <div className="hero__broadcasters">
              <span>Diffusé sur</span>
              <span className="sep">/</span>
              <span>Public Sénat</span>
              <span className="sep">·</span>
              <span>Ushuaïa TV</span>
              <span className="sep">·</span>
              <span>TV5 Monde</span>
            </div>
          </div>
        </div>
        <div className="hero__scroll">Défiler</div>
      </section>
    );
  }

  // Variant B — Ciné-débat humain (screening photo)
  if (variant === 'B') {
    return (
      <section className="hero" data-screen-label="Hero — Ciné-débat">
        <img className="hero__bg" src="assets/film-still-04.jpg"
             alt="Salle de cinéma remplie pour une projection-débat du film" />
        <div className="hero__veil" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.85) 100%)'
        }}/>
        <div className="hero__chrome">
          <div className="hero__top">
            <div>Forêts françaises<span className="dot"></span>en quête d'avenir</div>
            <div>54 min<span className="dot"></span>2022<span className="dot"></span>Documentaire</div>
          </div>
          <div className="hero__body">
            <div className="hero__eyebrow">Vu en salle · 40+ projections</div>
            <h1 className="hero__title" style={{fontSize: 'clamp(44px, 7.5vw, 116px)'}}>
              Un film qui se voit<br/>
              <em>ensemble.</em>
            </h1>
            <p className="hero__sub">
              « Forêts françaises, en quête d'avenir » se prête au débat — il a déjà rempli des salles associatives, des cinés-clubs et des amphithéâtres aux côtés de forestiers, élus et habitants. Et chez vous&nbsp;?
            </p>
            <div className="hero__cta">
              <button className="btn btn--light" onClick={onJumpProjection}>
                Organiser une projection
                <svg className="btn-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </button>
              <button className="btn btn--ghost-light" onClick={onOpenTrailer}>
                <svg className="btn-icon" width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
                  <path d="M1 1L11 7L1 13V1Z"/>
                </svg>
                Voir la bande-annonce
              </button>
            </div>
            <div className="hero__broadcasters">
              <span>Diffusé sur</span>
              <span className="sep">/</span>
              <span>Public Sénat</span>
              <span className="sep">·</span>
              <span>Ushuaïa TV</span>
              <span className="sep">·</span>
              <span>TV5 Monde</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant C — Diptyque éditorial
  return (
    <section className="hero hero--diptych" data-screen-label="Hero — Diptyque éditorial">
      <div className="hero__pane-text">
        <div className="hero__top">
          <div>Forêts françaises<span className="dot"></span>en quête d'avenir</div>
          <div>54 min<span className="dot"></span>2022</div>
        </div>
        <div>
          <div className="hero__eyebrow" style={{color: 'var(--earth)'}}>Un film de Camille Geoffray</div>
          <h1 className="hero__title">
            Forêts <em>françaises</em>,<br/>
            en quête<br/>
            d'avenir.
          </h1>
          <p className="hero__sub">
            <span style={{color: 'var(--earth)'}}>«</span> Imiter la nature, hâter son œuvre. <span style={{color: 'var(--earth)'}}>»</span><br/>
            Deux journalistes parcourent une filière forêt-bois secouée par les crises — à hauteur de forêt, à hauteur d'homme.
          </p>
          <div className="hero__cta">
            <button className="btn btn--primary" onClick={onJumpProjection}>
              Organiser une projection
              <svg className="btn-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </button>
            <button className="btn btn--ghost" onClick={onOpenTrailer}>
              <svg className="btn-icon" width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
                <path d="M1 1L11 7L1 13V1Z"/>
              </svg>
              Bande-annonce
            </button>
          </div>
        </div>
        <div className="hero__broadcasters">
          <span>Diffusé sur</span>
          <span className="sep">/</span>
          <span>Public Sénat</span>
          <span className="sep">·</span>
          <span>Ushuaïa TV</span>
          <span className="sep">·</span>
          <span>TV5 Monde</span>
        </div>
      </div>
      <div className="hero__pane-image">
        <img src="assets/hero-forest-top.png" alt="Vue aérienne d'une forêt française avec brume et couleurs d'automne" style={{objectPosition: 'center 30%'}} />
        <div style={{
          position: 'absolute', left: 24, bottom: 24, right: 24,
          color: 'white', fontFamily: 'var(--f-mono)', fontSize: 11,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          textShadow: '0 1px 3px rgba(0,0,0,0.6)'
        }}>
          Image du film · vue aérienne, Vosges du Nord
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
