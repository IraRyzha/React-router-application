import './AboutFurniture.scss'
import furnitureDark from './image-about-dark.jpg'
import furnitureLight from './image-about-light.jpg' 

function AboutFurniture() {
    return (
        <div className="about-furniture-section">
            <img src={furnitureDark} alt="furniture-image" className="furniture" />
            <div className="text">
                <h3>ABOUT OUR FURNITURE</h3> 
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste. 
                    Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. 
                    Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={furnitureLight} alt="furniture-image" className="furniture" />
        </div> 
    )
}

export default AboutFurniture;