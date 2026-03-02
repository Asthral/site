export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">⚙ Parcours</div>
        <nav>
          <a href="#solution">Solution</a>
          <a href="#valeur">Apports</a>
          <a href="#contact">Contact</a>
          <button className="btn-primary">Demander une démo</button>
        </nav>
      </div>
    </header>
  );
}
