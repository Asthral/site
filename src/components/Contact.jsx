export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Demandez une démo</h2>

        <form className="form">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Votre message"></textarea>
          <button className="btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
