import illu1 from "../assets/illustration-2.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Créez des fiches réflexes et simplifiez l'accès à vos processus</h1>
          <p>
            Parcours est une application intuitive, une boîte à outils qui vous
            permet de créer des fiches réflexes.
          </p>
          <p>
            Vos documents, processus métier restent inchangés,
            mais ils deviennent accessibles à tous les utilisateurs.
          </p>
          <button className="btn-primary">Testez l'application</button>
        </div>

        <img src={illu1} alt="Illustration Parcours" />
      </div>
    </section>
  );
}
