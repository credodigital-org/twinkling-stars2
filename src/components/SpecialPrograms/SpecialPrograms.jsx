
import { useRef } from "react";
import "./SpecialPrograms.css";

import zumbaImage from "../../assets/images/zumba.png";
import danceImage from "../../assets/images/dance.png";
import yogaImage from "../../assets/images/yoga.png";
import artImage from "../../assets/images/art.png";


function SpecialProgramCard({
  image,
  title,
  description,
  index,
}) {
  return (
    <article
      className="special-program-card"
      style={{
        "--animation-delay": `${index * 0.15}s`,
      }}
    >

      {/* ICON */}
      <div className="special-program-icon">
        <img
          src={image}
          alt=""
        />
      </div>


      {/* TITLE */}
      <h3>
        {title}
      </h3>


      {/* DESCRIPTION */}
      <p>
        {description}
      </p>

    </article>
  );
}


function SpecialPrograms() {

  const viewportRef = useRef(null);


  const slideLeft = () => {
    viewportRef.current?.scrollBy({
      left: -472,
      behavior: "smooth",
    });
  };


  const slideRight = () => {
    viewportRef.current?.scrollBy({
      left: 472,
      behavior: "smooth",
    });
  };


  return (
    <section className="special-programs-section">

      {/* =====================================================
          TITLE
      ===================================================== */}

      <h2 className="special-programs-title">
        Special Programs
      </h2>


      {/* =====================================================
          SLIDER
      ===================================================== */}

      <div className="special-programs-slider">


        {/* ===================================================
            LEFT ARROW
        =================================================== */}

        <button
          type="button"
          className="
            special-programs-arrow
            special-programs-arrow-left
          "
          onClick={slideLeft}
          aria-label="Previous special programs"
        >
          <span>
            &#10094;
          </span>
        </button>


        {/* ===================================================
            VIEWPORT
        =================================================== */}

        <div
          className="special-programs-viewport"
          ref={viewportRef}
        >

          <div className="special-programs-track">


            {/* =================================================
                ZUMBA
            ================================================= */}

            <SpecialProgramCard
              index={0}
              image={zumbaImage}
              title="Zumba Classes"
              description={
                <>
                  Get moving with energetic
                  <br />
                  music, fun dance moves,
                  <br />
                  and lots of smiles
                </>
              }
            />


            {/* =================================================
                DANCE
            ================================================= */}

            <SpecialProgramCard
              index={1}
              image={danceImage}
              title="Dance Classes"
              description={
                <>
                  Discover rhythm,
                  <br />
                  movement, and creativity
                  <br />
                  through exciting dance
                  <br />
                  activities.
                </>
              }
            />


            {/* =================================================
                YOGA
            ================================================= */}

            <SpecialProgramCard
              index={2}
              image={yogaImage}
              title="Yoga Classes"
              description={
                <>
                  Build balance, flexibility,
                  <br />
                  and calmness through
                  <br />
                  fun, child-friendly yoga.
                </>
              }
            />


            {/* =================================================
                ART
            ================================================= */}

            <SpecialProgramCard
              index={3}
              image={artImage}
              title="Art - Craft"
              description={
                <>
                  Explore creativity through
                  <br />
                  music, drawing,
                  <br />
                  and hands-on activities.
                </>
              }
            />

          </div>
        </div>


        {/* ===================================================
            RIGHT ARROW
        =================================================== */}

        <button
          type="button"
          className="
            special-programs-arrow
            special-programs-arrow-right
          "
          onClick={slideRight}
          aria-label="Next special programs"
        >
          <span>
            &#10095;
          </span>
        </button>

      </div>

    </section>
  );
}


export default SpecialPrograms;