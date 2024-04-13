import "../scss/ShopPage.scss";
import furniture from "../images/desktop-image-hero-2.jpg";

function ShopPage() {
  return (
    <main>
      <img src={furniture} alt="furniture" />
      <div className="shop-page-text">
        <h1>We are available all across the globe</h1>
        <p>
          With stores all over the world, it's easy for you to find furniture
          for your home or place of business. Locolly, we're in most major
          cities throughout the country.Find the branch nearest you using our
          store locate Any questions? Don't hesitate tocontact us today.
        </p>
      </div>
    </main>
  );
}

export default ShopPage;
