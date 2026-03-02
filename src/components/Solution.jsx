import illu2 from "../assets/illustration-1.png";

export default function Solution() {
  return (
    <section className="section" id="solution">
      <div className="container grid-2">
        <img src={illu2} alt="Arborescence processus" />

        <div>
          <h2>Représentez vos processus simplement</h2>
          <p>
            Parcours permet de représenter vos processus sous forme
            d'arborescences simples découpées en étapes,
            modifiables en quelques clics.
          </p>

          <p>
            Il s'insère dans votre intranet via un simple lien.
          </p>
        </div>
      </div>
    </section>
  );
}
