import "../scss/HomePage.scss";
import WaysToDecorate from "../components/WaysToDecorate/WaysToDecorate";
import AboutFurniture from "../components/AboutFurniture/AboutFurniture";

function Home() {
  return (
    <header>
      <WaysToDecorate />
      <AboutFurniture />
    </header>
  );
}

export default Home;
