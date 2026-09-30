
import { useRef } from "react";
import "./Programs.css";

import programDaycare from "../../assets/images/daycare.png";
import programPreschool from "../../assets/images/preschool.png";
import programKg from "../../assets/images/kg.png";
import programAfterSchool from "../../assets/images/after-school.png";

function RegularPrograms() {
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

  const programs = [
    {
      id: 1,
      image: programDaycare,
      title: "Day Care",
      age: "Age 1.3 year - 6 Year",
      description: (
        <>
          Nurturing care and gentle
          <br />
          introduction to learning
        </>
      ),
      color: "#ffc6b5",
      actionColor: "#f04a23",
      alt: "Day Care program",
    },

    {
      id: 2,
      image: programPreschool,
      title: "PRESCHOOL",
      age: "2.8 Years - 4 Years",
      description: (
        <>
          Nurturing care and gentle
          <br />
          introduction to learning
        </>
      ),
      color: "#ffe9a8",
      actionColor: "#a77e00",
      alt: "Preschool program",
    },

    {
      id: 3,
      image: programKg,
      title: "KG 1 - KG 2",
      age: "4 Years - 6 Years",
      description: (
        <>
          Nurturing care and gentle
          <br />
          introduction to learning
        </>
      ),
      color: "#d7ff9f",
      actionColor: "#477619",
      alt: "KG 1 and KG 2 program",
    },

    {
      id: 4,
      image: programAfterSchool,
      title: (
        <>
          After school
          <br />
          classes
        </>
      ),
      age: "6 Years - 12 Years",
      description: (
        <>
          Nurturing care and gentle
          <br />
          introduction to learning
        </>
      ),
      color: "#c9e2f7",
      actionColor: "#477619",
      alt: "After school classes program",
    },
  ];

  return (
    <section
      className="regular-programs"
      aria-label="Regular Programs"
    >
      <div className="regular-programs__container">

        {/* HEADING */}
        <h2 className="regular-programs__title">
          Regular Programs
        </h2>

        {/* CAROUSEL */}
        <div className="regular-programs__carousel">

          {/* VIEWPORT */}
          <div
            className="regular-programs__viewport"
            ref={viewportRef}
          >

            {/* TRACK */}
            <div className="regular-programs__track">

              {programs.map((program, index) => (
                <article
                  className="regular-programs__card"
                  key={program.id}
                  style={{
                    "--card-background": program.color,
                    "--action-color": program.actionColor,
                    "--animation-delay": `${index * 0.15}s`,
                  }}
                >

                  {/* IMAGE */}
                  <div className="regular-programs__image-area">
                    <img
                      src={program.image}
                      alt={program.alt}
                      className="regular-programs__image"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="regular-programs__card-title">
                    {program.title}
                  </h3>

                  {/* AGE */}
                  <p className="regular-programs__age">
                    {program.age}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="regular-programs__description">
                    {program.description}
                  </p>

                  {/* ACTION */}
                  <button
                    type="button"
                    className="regular-programs__learn-more"
                    style={{
                      color: program.actionColor,
                    }}
                  >
                    <span>LEARN MORE</span>
                    <span className="learn-more-arrow">→</span>
                  </button>

                </article>
              ))}

            </div>
          </div>

          {/* CONTROLS */}
          <div className="regular-programs__controls">

            <button
              type="button"
              className="regular-programs__control regular-programs__control--prev"
              onClick={slideLeft}
              aria-label="Previous program"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              className="regular-programs__control regular-programs__control--next"
              onClick={slideRight}
              aria-label="Next program"
            >
              <span aria-hidden="true">›</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default RegularPrograms;