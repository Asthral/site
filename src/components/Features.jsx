export default function Features() {
  const features = [
    "Création de fiches réflexes",
    "Partage sécurisé",
    "Organisation intuitive",
    "Moteur de recherche interne",
    "Gestion multi-utilisateurs",
    "Interface simple et rapide",
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Fonctionnalités clés</h2>

        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <h3>{feature}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante venenatis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
