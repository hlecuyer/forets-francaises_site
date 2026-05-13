// sections-3.jsx — Projection (conversion), Footer, Lightbox

const MAILTO_URL = "mailto:cgeoffray.pro@gmail.com?subject=" +
  encodeURIComponent("Demande de projection — Forêts françaises, en quête d'avenir") +
  "&body=" + encodeURIComponent(
    "Bonjour Camille,\n\n" +
    "Nous souhaitons organiser une projection de votre documentaire \"Forêts françaises, en quête d'avenir\".\n\n" +
    "Structure : \n" +
    "Date envisagée : \n" +
    "Lieu : \n" +
    "Nombre de participants estimé : \n" +
    "Présence du réalisateur en débat souhaitée : oui / non\n\n" +
    "Cordialement,\n"
  );

const ProjectionSection = () => (
  <section className="projection" id="projection" data-screen-label="Organiser une projection" data-comment-anchor="projection-cta">
    <div className="container projection-inner">
      <div className="eyebrow">06 — Organiser une projection</div>
      <h2>Vous êtes une association,<br/>un cinéma, un réseau ?</h2>
      <p style={{maxWidth: 760, fontStyle: 'italic'}}>
        Programmez « Forêts françaises, en quête d'avenir » près de chez vous.<br/>
        Une projection — un débat — une question : <em>quel avenir pour nos forêts ?</em>
      </p>

      <div className="projection-body">
        <div>
          <p>
            Le film est disponible en <strong>DCP</strong> pour les salles de cinéma et en <strong>HD</strong> pour les salles associatives, transmis par lien Mega après validation. La présence du réalisateur en débat est envisageable selon les disponibilités.
          </p>

          <div className="specs" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <div>
              <div className="lbl">Format</div>
              <div className="val">Fichier vidéo ou DCP<small>transfert via Mega · livraison sur demande</small></div>
            </div>
            <div>
              <div className="lbl">Durée séance</div>
              <div className="val">~1h45<small>film 54' + débat ~50'</small></div>
            </div>
            <div>
              <div className="lbl">Présence du réalisateur</div>
              <div className="val">Possible<small>selon disponibilités</small></div>
            </div>
          </div>
        </div>

        <div className="projection-cta">
          <div className="label">Contact direct</div>
          <div className="email">cgeoffray.pro<wbr/>@gmail.com</div>
          <p className="note">
            Un mail suffit : nous reviendrons vers vous sous quelques jours avec les modalités.
            Indiquez votre structure, la date envisagée, le lieu et l'audience estimée — c'est tout.
          </p>
          <a className="btn btn--primary" href={MAILTO_URL}
             style={{background: 'var(--fir)', color: 'var(--bg)', justifyContent: 'center', marginTop: 8}}>
            <svg className="btn-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="9" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 4L7 8.5L13 4" stroke="currentColor" strokeWidth="1.3" fill="none"/>
            </svg>
            Écrire à Camille
          </a>
          <div style={{fontFamily:'var(--f-mono)', fontSize: 11, letterSpacing: '0.1em',
                       textTransform: 'uppercase', color: 'var(--ink-faint)', marginTop: 4}}>
            Réponse sous 3 à 5 jours
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FooterSection = () => (
  <footer className="footer" data-screen-label="Footer">
    <div className="footer__inner">
      <div>
        <div className="signature">Forêts françaises, en quête d'avenir</div>
        <div style={{marginTop: 8, fontSize: 12, color: 'oklch(0.65 0.01 80)'}}>
          Un documentaire de Camille Geoffray — France, 2022
        </div>
      </div>
      <div>
        <h4>Réalisation</h4>
        <a href="https://www.camillegeoffray.com" target="_blank" rel="noopener">
          Camille Geoffray ↗
        </a>
      </div>
      <div>
        <h4>Production</h4>
        <div>Lato Sensu Productions</div>
        <div style={{marginTop: 4, color: 'oklch(0.6 0.01 80)'}}>© 2022</div>
      </div>
      <div>
        <h4>Site</h4>
        <a href="https://hugolecuyer.fr" target="_blank" rel="noopener">
          Hugo Lecuyer ↗
        </a>
      </div>
    </div>
    <div className="footer__bot">
      <div>Diffusé sur Public Sénat · Ushuaïa TV · TV5 Monde</div>
      <div><a href="#" onClick={(e) => e.preventDefault()}>Mentions légales</a></div>
    </div>
  </footer>
);

const Lightbox = ({ open, onClose }) => {
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      window.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div className={"lightbox " + (open ? "is-open" : "")} onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose}>Fermer · Esc</button>
        {open && (
          <iframe
            src="https://player.vimeo.com/video/688296230?autoplay=1&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Bande-annonce — Forêts françaises, en quête d'avenir"
          />
        )}
      </div>
    </div>
  );
};

window.ProjectionSection = ProjectionSection;
window.FooterSection = FooterSection;
window.Lightbox = Lightbox;
window.MAILTO_URL = MAILTO_URL;
