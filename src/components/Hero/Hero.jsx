import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

import sun from "../../assets/images/sun.png";
import bee from "../../assets/images/bee.png";
import cloud from "../../assets/images/cloud.png";
import flower from "../../assets/images/flower.png";
import heroChild from "../../assets/images/hero-child.png";

const TICKER_TEXT = "COLOURFUL START FOR A BRIGHT FUTURE";

/*
  The ticker track holds TWO identical groups and is animated by -50%,
  so the loop is seamless. Each group must be wider than the viewport
  (8 items is enough up to ~5K screens).
*/
const TICKER_ITEMS = Array.from({ length: 8 });

function TickerGroup({ hidden = false }) {
  return (
    <div className="colorful-line-group" aria-hidden={hidden || undefined}>
      {TICKER_ITEMS.map((_, index) => (
        <div className="colorful-line-item" key={index}>
          <span>●</span>
          {TICKER_TEXT}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("show");

          // Animation only needs to happen once
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section reveal">
      {/* =====================================================
          DECORATIONS
          Absolutely positioned inside the hero; they never
          take part in the layout flow or change its height.
      ===================================================== */}

      <img
        className="hero-decoration hero-sun"
        src={sun}
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero-decoration hero-bee"
        src={bee}
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero-decoration hero-cloud"
        src={cloud}
        alt=""
        aria-hidden="true"
      />

      <img
        className="hero-decoration hero-flower"
        src={flower}
        alt=""
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT  (text + child image)
      ===================================================== */}

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span>Explore</span>
            <span>Learn.</span>
            <span>Grow Together!</span>
          </h1>

          <p>
            A joyful place where every day is filled with laughter,
            friendship and discovery.
          </p>

          <button
            type="button"
            className="admission-button"
            onClick={() => navigate("/contact")}
          >
            ADMISSION OPEN NOW!
          </button>
        </div>

        <div className="hero-image">
          <img src={heroChild} alt="Happy child" />
        </div>
      </div>

      {/* =====================================================
          BOTTOM TICKER  (last row of the hero grid)
      ===================================================== */}

      <div className="colorful-line">
        <div className="colorful-line-track">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>
    </section>
  );
}

export default Hero;
