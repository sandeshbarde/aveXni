import MasonryGallery from "./MasonryGallery";
import "./Gallery.css";

import img1 from "../../assets/images/gallery/img1.webp";
import img2 from "../../assets/images/gallery/img2.webp";
import img3 from "../../assets/images/gallery/img3.webp";
import img4 from "../../assets/images/gallery/img4.webp";
import img5 from "../../assets/images/gallery/img5.webp";
import img6 from "../../assets/images/gallery/img6.webp";
import img7 from "../../assets/images/gallery/img7.webp";
import img8 from "../../assets/images/gallery/img8.webp";




const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
 
  
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="gallery-title">Our Gallery</h2>

        <p className="gallery-subtitle">
          Explore our latest handcrafted portraits.
        </p>

        <MasonryGallery images={images} />
      </div>
    </section>
  );
}