import "./ParentTestimonials.css";
import useScrollReveal from "../../hooks/useScrollReveal";

import parent1 from "../../assets/images/parent1.png";
import parent2 from "../../assets/images/parent2.png";
import parent3 from "../../assets/images/parent3.png";
import parent4 from "../../assets/images/parent4.png";
import parent5 from "../../assets/images/parent5.png";

const testimonials = [
  {
    image: parent1,
    className: "testimonial-card-1",
    imageClass: "image-large",
    text:
      "Lorem ipsum dolor sit amet consectetur. Interdum sit nulla leo nisl eleifend. Amet mi imperdiet iaculis lectus dui ultrices.",
  },
  {
    image: parent3,
    className: "testimonial-card-2",
    imageClass: "image-small",
    text:
      "Interdum sit nulla leo nisl eleifend. Amet mi imperdiet iaculis lectus du. Amet mi imperdiet iasewu",
  },
  {
    image: parent2,
    className: "testimonial-card-3",
    imageClass: "image-medium",
    text:
      "Lorem ipsum dolor sit amet consectetur. Interdum sit nulla leo nisl eleifend. Amet mi imperdiet iaculis lectus dui ultrices. Interdum sit nulla leo nisl eleifend.",
  },
  {
    image: parent4,
    className: "testimonial-card-4",
    imageClass: "image-small",
    text:
      "Interdum sit nulla leo nisl eleifend. Amet mi imperdiet iaculis lectus du. Amet mi imperdiet iasewu",
  },
  {
    image: parent5,
    className: "testimonial-card-5",
    imageClass: "image-square",
    text:
      "Interdum sit nulla leo nisl eleifend. Amet mi imperdiet iaculis lectus. Amet mi imperdiet iaculis lectus du lorem ipsum det fetrghwety.",
  },
];

function ParentTestimonials() {
  useScrollReveal();

  return (
    <section
      className="parent-testimonials reveal"
      aria-labelledby="parent-testimonials-title"
    >
      <h2
        id="parent-testimonials-title"
        className="testimonials-title"
      >
        Parent Testimonials
      </h2>

      <div className="testimonials-container stagger">

        {testimonials.map(
          (testimonial, index) => (
            <article
              className={`testimonial-card ${testimonial.className} animated-card`}
              key={index}
            >
              {index === 0 && (
                <div
                  className="quote quote-top"
                  aria-hidden="true"
                >
                  “
                </div>
              )}

              <div
                className={`testimonial-image ${testimonial.imageClass}`}
              >
                <img
                  src={testimonial.image}
                  alt="Parent testimonial"
                  loading="lazy"
                  className="animated-image"
                />
              </div>

              <div className="testimonial-content">
                <p>{testimonial.text}</p>
              </div>

              {index === testimonials.length - 1 && (
                <div
                  className="quote quote-bottom"
                  aria-hidden="true"
                >
                  ”
                </div>
              )}
            </article>
          )
        )}

      </div>

      <div className="testimonials-button-wrapper">
        <button
          type="button"
          className="testimonials-button animated-button"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
}

export default ParentTestimonials;