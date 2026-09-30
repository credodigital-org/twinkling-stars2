import "./Gallery.css";

import { useNavigate } from "react-router-dom";

/* =========================================================
   GALLERY IMAGES
========================================================= */

import readingCorner from "../assets/gallery/reading.png";
import artsCraft from "../assets/gallery/arts.png";
import gardening from "../assets/gallery/gardening.png";
import musicClass from "../assets/gallery/music.png";
import playground from "../assets/gallery/playground.png";
import sportsDay from "../assets/gallery/sports.png";
import scienceDay from "../assets/gallery/science-day.png";
import graduation from "../assets/gallery/graduation.png";

/* =========================================================
   CTA IMAGE
========================================================= */

import teddyImage from "../assets/images/journey-bear.png";


function Gallery() {

  const navigate = useNavigate();

  /* =======================================================
     GALLERY ITEMS
  ======================================================= */

  const galleryItems = [
    {
      title: "Reading corner",
      image: readingCorner,
      className: "reading",
    },
    {
      title: "Arts & Craft",
      image: artsCraft,
      className: "arts",
    },
    {
      title: "Gardening",
      image: gardening,
      className: "gardening",
    },
    {
      title: "Music Class",
      image: musicClass,
      className: "music",
    },
    {
      title: "Playground",
      image: playground,
      className: "playground",
    },
    {
      title: "Sports Day",
      image: sportsDay,
      className: "sports",
    },
    {
      title: "Science Day",
      image: scienceDay,
      className: "science",
    },
    {
      title: "Graduation",
      image: graduation,
      className: "graduation",
    },
  ];


  return (
    <main className="gallery-page">

      {/* =================================================
          GALLERY HERO
      ================================================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-content">

          <h1>Our Gallery</h1>

          <p>
            A glimpse into the joyful moments that make
            <br className="desktop-break" />
            Little Garden Nursery a happy place to learn and
            <br className="desktop-break" />
            grow.
          </p>

        </div>


        <a
          href="#gallery-grid"
          className="visit-button"
        >
          BOOK A VISIT
        </a>

      </section>


      {/* =================================================
          GALLERY SECTION
      ================================================= */}

      <section
        className="gallery-section"
        id="gallery-grid"
      >

        <div className="gallery-grid">

          {galleryItems.map((item) => (

            <article
              className={`gallery-card ${item.className}`}
              key={item.title}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div
                className={`gallery-label ${item.className}-label`}
              >
                {item.title}
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =================================================
          ADMISSION / CTA
      ================================================= */}

      <section className="gallery-admission-section">

        {/* CTA IMAGE */}

        <div className="admission-image-wrapper">

          <img
            src={teddyImage}
            alt="Teddy bear with books and plant"
            className="admission-image"
          />

        </div>


        {/* CTA CONTENT */}

        <div className="admission-content">

          <h2 className="admission-title">
            Ready to Begin Their Journey?
          </h2>

          <p className="admission-description">
            Give your child the opportunity to learn, grow
            <br className="desktop-break" />
            and thrive in a caring and inspiring
            <br className="desktop-break" />
            environment.
          </p>

        </div>


        {/* CTA BUTTON */}

        <button
          type="button"
          className="gallery-admission-button"
          onClick={() => navigate("/contact")}
        >
          ENROLL NOW!
        </button>

      </section>

    </main>
  );
}


export default Gallery;