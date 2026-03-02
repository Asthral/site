import illu3 from "../assets/illustration-3.png";

export default function Value() {
  return (
    <section className="section-light" id="valeur">
      <div className="container grid-2 reverse">
        <div>
          <h2>Qu'apporte Parcours dans votre démarche processus ?</h2>

          <p>
            Votre intranet est saturé de messages et de chemins d'accès.
            Les processus existent, mais sont difficiles à trouver.
          </p>

          <p>
            Parcours permet de mettre en visibilité les processus sans les
            réécrire, de fournir l'information et de faire apparaître les
            bons responsables.
          </p>
        </div>

        <img src={illu3} alt="Organisation processus" className="illu-vertical" />
      </div>
    </section>
  );
}
