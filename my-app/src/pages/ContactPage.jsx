import "../scss/ContactPage.scss";
import furniture from "../images/desktop-image-hero-3.jpg";

function ContactPage() {
  return (
    <main>
      <img src={furniture} alt="furniture" />
      <div className="shop-page-text">
        <h1>This is Contact page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
          distinctio atque debitis dolores. Minima unde quis fuga accusamus,
          adipisci quam aliquam veritatis dolor architecto iusto expedita neque,
          delectus atque!
        </p>
      </div>
    </main>
  );
}

export default ContactPage;
