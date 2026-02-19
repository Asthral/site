import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">
          ⚙ Parcours<span>.io</span>
        </div>

        <nav className={open ? "nav-links active" : "nav-links"}>
          <a href="#about">Concept</a>
          <a href="#features">Fonctionnalités</a>
          <a href="#contact">Contact</a>
          <button className="btn-primary">Se connecter</button>
        </nav>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </header>
  );
}
