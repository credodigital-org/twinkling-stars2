import { motion } from "motion/react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";

// Replace this import if your existing dance image has a different filename.
import danceImage from "../../assets/images/gallery5.png";

// ================================================
// HEADING ANIMATION
// ================================================

const headingVariants = {
hidden: {
opacity: 0,
y: 35,
},

visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.7,
ease: "easeOut",
},
},
};

// ================================================
// GALLERY IMAGE ANIMATION
// ================================================

const cardVariants = {
hidden: {
opacity: 0,
y: 45,
scale: 0.96,
},

visible: {
opacity: 1,
y: 0,
scale: 1,
transition: {
duration: 0.6,
ease: "easeOut",
},
},
};

function Gallery() {
const navigate = useNavigate();

return ( <section className="gallery-section">

```
  {/* ==========================================
      BACKGROUND DECORATIONS
  ========================================== */}

  <img
    className="gallery-decoration gallery-decoration-top"
    src={gallery4}
    alt=""
    aria-hidden="true"
  />

  <img
    className="gallery-decoration gallery-decoration-right"
    src={gallery3}
    alt=""
    aria-hidden="true"
  />

  <img
    className="gallery-decoration gallery-decoration-bottom"
    src={gallery2}
    alt=""
    aria-hidden="true"
  />

  {/* ==========================================
      ANIMATED GALLERY HEADING
  ========================================== */}

  <motion.h2
    className="gallery-title"
    variants={headingVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.3,
    }}
  >
    Gallery
  </motion.h2>

  {/* ==========================================
      GALLERY GRID
  ========================================== */}

  <div className="gallery-grid">

    {/* LEFT COLUMN */}

    <div className="gallery-left">

      {/* Main image */}

      <motion.img
        className="gallery-main-image"
        src={gallery1}
        alt="Children doing arts and crafts"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* Small images */}

      <div className="gallery-small-images">

        <motion.img
          src={gallery3}
          alt="Child getting face painting"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
        />

        <motion.img
          src={gallery4}
          alt="Children participating in classroom activity"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
        />

      </div>
    </div>

    {/* RIGHT COLUMN */}

    <div className="gallery-right">

      {/* Top image */}

      <motion.img
        className="gallery-top-image"
        src={gallery2}
        alt="Child swimming"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: "easeOut",
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
      />

      {/* Large dance image */}

      <motion.img
        className="gallery-large-image"
        src={danceImage}
        alt="Children dancing on stage"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.25,
          ease: "easeOut",
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
      />

    </div>

  </div>

  {/* ==========================================
      VIEW MORE BUTTON
  ========================================== */}

  <motion.button
    type="button"
    className="gallery-view-more"
    onClick={() => navigate("/gallery")}
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    transition={{
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    }}
    whileHover={{
      y: -4,
    }}
    whileTap={{
      scale: 0.97,
    }}
  >
    VIEW MORE
  </motion.button>

</section>

);
}

export default Gallery;
