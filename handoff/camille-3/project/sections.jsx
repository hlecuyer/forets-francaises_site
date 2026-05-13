// sections.jsx — content sections (Synopsis, Fiche, Presse, Crédits, Projection, Footer)

const SynopsisSection = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <section className="section section--tint" id="synopsis" data-screen-label="Synopsis">
      <div className="container">
        <header className="section-head">
          <div>
            <div className="num">01 — Synopsis</div>
          </div>
          <div>
            <h2 className="h-section">Une enquête de terrain au cœur d'une filière en crise.</h2>
          </div>
        </header>
        <div className="container-narrow">
          <blockquote className="synopsis-pull">
            « Imiter la nature, hâter son œuvre. »
            <cite>— vieil adage forestier</cite>
          </blockquote>
          <p className="lede">
            Alors que l'exploitation des forêts est aujourd'hui confrontée à une contestation croissante au sein de l'opinion publique, <strong>Alice</strong> et <strong>Grégoire</strong>, tous deux journalistes environnementaux, décident d'aller à la rencontre de celles et ceux qui animent la filière forêt-bois française. Au fil des déplacements et des rencontres sur le terrain, ils découvrent une filière secouée par une crise idéologique sur fond de changements climatiques.
          </p>

          <button
            className={"expand-toggle " + (open ? "is-open" : "")}
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
          >
            <span>{open ? "Replier" : "Lire la suite"}</span>
            <svg className="chev" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </button>

          <div className={"synopsis-long " + (open ? "is-open" : "")}>
            <div>
              <div className="body-text stack-4" style={{paddingTop: '8px'}}>
                <p>Pour faire face à une succession récente de crises climatiques et sanitaires liées au changement climatique, la filière forêt-bois française commence à faire évoluer ses pratiques. Pour certains, l'exploitation de la forêt à grande échelle doit être repensée de fond en comble, en minimisant drastiquement les interventions humaines. Pour d'autres, l'action de l'homme est indispensable afin de faire face à la demande croissante de bois et pour permettre à la forêt de résister au changement climatique.</p>
                <p>Deux journalistes, <strong>Alice Mariette</strong> (questions économiques) et <strong>Grégoire Souchay</strong> (problématiques environnementales), décident d'aller à la rencontre de celles et ceux qui animent la filière forêt-bois française.</p>
                <p>Ils échangent avec forestiers, économistes, chefs d'entreprise ; et tentent, avec leurs approches complémentaires, de comprendre les enjeux de cette crise ainsi que les solutions proposées par les différents acteurs de la filière. <em>Comment la France prépare aujourd'hui sa forêt, ses forêts, à un avenir incertain ?</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FicheSection = () => (
  <section className="section" id="fiche" data-screen-label="Fiche technique">
    <div className="container">
      <header className="section-head">
        <div><div className="num">02 — Le film en bref</div></div>
        <div><h2 className="h-section">Fiche technique.</h2></div>
      </header>
      <div className="fiche">
        <div className="fiche__item">
          <span className="lbl">Durée</span>
          <div className="val">54 min<small>format long</small></div>
        </div>
        <div className="fiche__item">
          <span className="lbl">Année</span>
          <div className="val">2022<small>Inédit · mai</small></div>
        </div>
        <div className="fiche__item">
          <span className="lbl">Format</span>
          <div className="val">HD<small>DCP disponible</small></div>
        </div>
        <div className="fiche__item">
          <span className="lbl">Genre</span>
          <div className="val">Doc.<small>enquête journalistique</small></div>
        </div>
        <div className="fiche__item">
          <span className="lbl">Langue</span>
          <div className="val">FR<small>VOST possible</small></div>
        </div>
        <div className="fiche__item">
          <span className="lbl">Diffusion</span>
          <div className="val">3 chaînes<small>Public Sénat · Ushuaïa · TV5</small></div>
        </div>
      </div>
      <div style={{marginTop: 'var(--s-6)', display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {['Forêt', 'Filière bois', 'Sylviculture', 'Changement climatique', 'Coupe rase', 'Enquête'].map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.06em',
            padding: '6px 12px', border: '1px solid var(--hairline)', borderRadius: 100,
            color: 'var(--ink-muted)'
          }}>{tag}</span>
        ))}
      </div>
    </div>
  </section>
);

window.SynopsisSection = SynopsisSection;
window.FicheSection = FicheSection;
