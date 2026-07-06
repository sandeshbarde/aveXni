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
import img9 from "../../assets/images/gallery/img9.webp";
import img10 from "../../assets/images/gallery/img10.webp";
import img11 from "../../assets/images/gallery/img11.webp";
import img12 from "../../assets/images/gallery/img12.webp";
import img13 from "../../assets/images/gallery/img13.webp";
import img14 from "../../assets/images/gallery/img14.webp";
import img15 from "../../assets/images/gallery/img15.webp";
import img16 from "../../assets/images/gallery/img16.webp";
import img17 from "../../assets/images/gallery/img17.webp";
import img18 from "../../assets/images/gallery/img18.webp";
import img19 from "../../assets/images/gallery/img19.webp";


const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
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