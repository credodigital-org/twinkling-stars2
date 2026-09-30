import "./About.css";
import useScrollReveal from "../../hooks/useScrollReveal";

function About({ aboutImage, flowerImage }) {
  useScrollReveal();

  return (
    <section
      className="about-section reveal"
      aria-labelledby="about-title"
    >
      <div className="about-container">

        <div className="about-content reveal-left">
          <h2 id="about-title">
            ABOUT US
          </h2>

          <h3>
            Nurturing Little Minds,
            <br />
            Inspiring Bright Futures
          </h3>

          <p>
            At Twinkling Stars, we provide a safe,
            <br className="desktop-break" />
            welcoming and stimulating environment
            <br className="desktop-break" />
            where children learn, explore and grow
            <br className="desktop-break" />
            with confidence.
          </p>
        </div>

        <div className="about-image-wrapper reveal-right">
          {aboutImage && (
            <img
              src={aboutImage}
              alt="Teacher with children"
              className="animated-image"
            />
          )}
        </div>

        <div className="about-message reveal-scale">
          <p>
            We Are Providing Yoga, Dance, Zumba Classes For All Ages
          </p>
        </div>

        {flowerImage && (
          <img
            className="about-flower"
            src={flowerImage}
            alt=""
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
}

export default About;