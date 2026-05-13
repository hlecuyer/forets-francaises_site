// sections-2.jsx — Gallery, Presse, Crédits

const GallerySection = ({ onOpenTrailer }) =>
<section className="section section--tint" id="gallery" data-screen-label="Images">
    <div className="container">
      <header className="section-head">
        <div><div className="num">03 — En images</div></div>
        <div>
          <h2 className="h-section">Du terrain à la salle.</h2>
          <p className="h-sub" style={{ marginTop: 16 }}>Tournage en forêt et rencontres en ciné-débat — des projections déjà organisées en parcs naturels régionaux, salles associatives et cinémas indépendants.</p>
        </div>
      </header>
      <div className="gallery">
        <div className="gallery__item gallery__item--lg" style={{ position: 'relative', cursor: 'pointer' }} onClick={onOpenTrailer}>
          <img src="assets/visuel.jpg" alt="Forêts françaises — affiche : vue aérienne d'une forêt dans la brume avec le titre du film en surimpression" loading="lazy" />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)' }}>
            <div style={{
            width: 86, height: 86, borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.95)',
            background: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
              <svg width="22" height="26" viewBox="0 0 22 26" fill="white">
                <path d="M2 2L20 13L2 24V2Z" />
              </svg>
            </div>
          </div>
          <div style={{
          position: 'absolute', left: 16, bottom: 16,
          fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'white',
          background: 'rgba(0,0,0,0.45)', padding: '6px 10px'
        }}>Bande-annonce · 1:47</div>
        </div>
        <div className="gallery__item gallery__item--md"><img src="assets/film-still-04.jpg" alt="Projection-débat dans une salle de cinéma indépendante" loading="lazy" /></div>
        <div className="gallery__item gallery__item--md"><img src="assets/visuel-docu.jpg" alt="Quatre images du documentaire : Alice journaliste, vue aérienne d'une forêt, route entre parcelles, Grégoire en entretien forestier" loading="lazy" /></div>
        <div className="gallery__item gallery__item--sm"><img src="assets/film-still-01.jpg" alt="Public d'une projection-débat" loading="lazy" /></div>
        <div className="gallery__item gallery__item--sm"><img src="assets/film-still-02.jpg" alt="Salle remplie pour une projection du film" loading="lazy" /></div>
        <div className="gallery__item gallery__item--sm"><img src="assets/film-still-03.jpg" alt="Projection dans une salle associative" loading="lazy" /></div>
      </div>
    </div>
  </section>;


const PresseSection = () =>
<section className="section" id="presse" data-screen-label="Presse">
    <div className="container">
      <header className="section-head">
        <div><div className="num">04 — Presse & relais</div></div>
        <div><h2 className="h-section">Ce qu'en dit la critique.</h2></div>
      </header>

      <blockquote className="presse-quote">
        <span className="opener">«</span>
        Les arguments déclinés tout au long de cette enquête sont éloquents, tout autant que le choix des images, très belles, qui viennent porter le propos. D'amples vues aériennes découvrent tantôt des paysages amputés, tantôt des forêts généreuses.
        <span>»</span>
        <div className="presse-source">Juliette Warlop — Télérama (TT)</div>
      </blockquote>

      <div className="presse-list">
        <a href="https://www.radiofrance.fr/franceinter/podcasts/la-terre-au-carre/la-terre-au-carre-du-mardi-20-mai-2025-3663595" target="_blank" rel="noopener" className="presse-card">
          <div className="station">France Inter — Radio publique</div>
          <div className="show">« La Terre au Carré »</div>
          <div className="timecode">Extrait diffusé · 24'32"</div>
          <div className="arrow">Écouter <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.4" /></svg></div>
        </a>
        <a href="https://www.radiofrance.fr/franceculture/podcasts/de-cause-a-effets-le-magazine-de-l-environnement/l-ecologie-du-livre-realite-essai-ou-fiction-6005461" target="_blank" rel="noopener" className="presse-card">
          <div className="station">France Culture — Radio publique</div>
          <div className="show">« De cause à effets »</div>
          <div className="timecode">Extrait diffusé · 16'30"</div>
          <div className="arrow">Écouter <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.4" /></svg></div>
        </a>
        <a href="https://www.adaptation-changement-climatique.gouv.fr/agir/espace-documentaire/forets-francaises-en-quete-davenir" target="_blank" rel="noopener" className="presse-card">
          <div className="station">Ministère de la Transition Écologique</div>
          <div className="show">Centre de ressources</div>
          <div className="timecode">Référencé · Adaptation au changement climatique</div>
          <div className="arrow">Consulter <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.4" /></svg></div>
        </a>
        <a href="https://www.telerama.fr/ecrans-tv/forets-francaises-en-quete-d-avenir-7011961.php" target="_blank" rel="noopener" className="presse-card">
          <div className="station">Télérama — Hebdo</div>
          <div className="show">Critique « TT »</div>
          <div className="timecode">Juliette Warlop · LCP-Public Sénat</div>
          <div className="arrow">Lire l'article <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5H14M14 5L10 1M14 5L10 9" stroke="currentColor" strokeWidth="1.4" /></svg></div>
        </a>
      </div>
    </div>
  </section>;


const CreditsSection = () =>
<section className="section section--tint" id="credits" data-screen-label="Équipe">
    <div className="container">
      <header className="section-head">
        <div><div className="num">05 — Équipe & crédits</div></div>
        <div><h2 className="h-section"></h2></div>
      </header>

      <div className="realisation-feature">
        <div>
          <div className="role-big">Écrit et réalisé par</div>
          <div className="name-big">Camille Geoffray</div>
        </div>
        <div className="bio">
          Réalisateur basé en France, Camille travaille à l'intersection du documentaire d'enquête et du portrait sensible.{' '}
          <a href="https://www.camillegeoffray.com" target="_blank" rel="noopener" style={{ color: 'var(--earth)', textDecoration: 'underline', textUnderlineOffset: 4 }}>camillegeoffray.com ↗</a>
        </div>
      </div>

      <div className="credits-grid">
        <div className="credit-block">
          <div className="credit-head">Équipe technique</div>
          <ul className="credit-list">
            <li><span className="role">Musique originale</span><span className="name">Marie Laroche</span></li>
            <li><span className="role">Images</span><span className="name">François Rousset · Camille Geoffray</span></li>
            <li><span className="role">Montage</span><span className="name">Angéla Nichon</span></li>
            <li><span className="role">Mixage son</span><span className="name">Marco Pascal</span></li>
          </ul>
        </div>
        <div className="credit-block">
          <div className="credit-head">Production</div>
          <ul className="credit-list">
            <li><span className="role">Société</span><span className="name">Lato Sensu Productions</span></li>
            <li><span className="role">Productrice</span><span className="name">Muriel Barra</span></li>
            <li><span className="role">Directeur de production</span><span className="name">Philippe Garnier</span></li>
            <li><span className="role">Chargée de production</span><span className="name">Marika Staub</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>;


window.GallerySection = GallerySection;
window.PresseSection = PresseSection;
window.CreditsSection = CreditsSection;