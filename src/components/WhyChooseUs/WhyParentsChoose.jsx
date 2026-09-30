import "./WhyParentsChoose.css";
import useScrollReveal from "../../hooks/useScrollReveal";

import attention from "../../assets/images/attention.png";
import updates from "../../assets/images/updates.png";
import interaction from "../../assets/images/interaction.png";
import siblings from "../../assets/images/siblings.png";
import pickDrop from "../../assets/images/pick-drop.png";
import transport from "../../assets/images/transport.png";

const reasons = [
  {
    image: attention,
    text: "Individual Attention To Every Kid.",
  },
  {
    image: updates,
    text: "Daily Updates With Parent & Teacher.",
  },
  {
    image: interaction,
    text: "Every Day Interaction With Teacher And Kid.",
  },
  {
    image: siblings,
    text: "Siblings Discount Available.",
  },
  {
    image: pickDrop,
    text: "Pick And Drop Available.",
  },
  {
    image: transport,
    text: "Transportation Service Available In Abu Dhabi In City.",
  },
];

function WhyParentsChoose() {
  useScrollReveal();

  return (
    <section
      className="why-parents-section reveal"
      aria-labelledby="why-parents-title"
    >
      <div className="why-parents-container">

        <h2
          id="why-parents-title"
          className="why-parents-title"
        >
          Why Parents Choose Us
        </h2>

        <div className="why-parents-grid stagger">

          {reasons.map((reason, index) => (
            <article
              className="why-parent-card animated-card"
              key={index}
            >
              <div className="why-parent-icon">
                <img
                  src={reason.image}
                  alt=""
                  className="why-parent-image"
                />
              </div>

              <div className="why-parent-content">

                <span
                  className="why-parent-bullet"
                  aria-hidden="true"
                >
                  •
                </span>

                <p>{reason.text}</p>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyParentsChoose;