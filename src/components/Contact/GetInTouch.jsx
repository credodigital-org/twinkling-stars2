
import "./GetInTouch.css";

import whatsappIcon from "../../assets/images/whatsapp.png";
import callicon from "../../assets/images/call.png";
import bee from "../../assets/images/bee.png";

function ContactSection() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const enquiry = form.enquiry.value;

    const subject = `New Enquiry from ${name}`;

    const body = `
Name: ${name}
Phone: ${phone}

Enquiry:
${enquiry}
    `;

    window.location.href =
      `mailto:twinklingstars@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-title"
    >

      <div className="contact-card">

        {/* =====================================================
            DISCOUNT BANNER
        ===================================================== */}

        <div className="discount-wrapper">

          <img
            src={bee}
            alt=""
            className="discount-bee"
            aria-hidden="true"
          />

          <div className="discount-banner">
            Siblings Discount Available
          </div>

        </div>


        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <div className="contact-content">

          {/* ================= LEFT SIDE ================= */}

          <div className="contact-info">

            <h2 id="contact-title">
              GET IN TOUCH
            </h2>

            <p className="contact-email">
              E-MAIL: twinklingstars@gmail.com
            </p>

            <p className="contact-phone">
              PHONE: +971564740473
            </p>


            {/* ================= ADDRESS ================= */}

            <div className="contact-address">

              <h3>
                ADDRESS
              </h3>

              <p>
                Floor 10, City Centre Deira
                <br />
                Complex, The Tower 1, Trade
                <br />
                Center 2, Dubai, ARE.
              </p>

            </div>


            {/* ================= WORKING HOURS ================= */}
{/* 
            <div className="working-hours">

              <h3>
                Working Hours
              </h3>

              <ul>
                <li>Monday - Sunday</li>
                <li>6:30 Am - 7:30 Pm</li>
              </ul>

            </div> */}

          </div>


          {/* =====================================================
              RIGHT FORM
          ===================================================== */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="form-group">

              <label htmlFor="contact-name">
                YOUR NAME
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                required
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label htmlFor="contact-phone">
                YOUR PHONE NO.
              </label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                required
              />

            </div>


            {/* ENQUIRY */}

            <div className="form-group">

              <label htmlFor="contact-enquiry">
                YOUR ENQUIRY
              </label>

              <textarea
                id="contact-enquiry"
                name="enquiry"
                required
              />

            </div>


            {/* SEND */}

            <button
              type="submit"
              className="send-button"
            >
              SEND
            </button>

          </form>

        </div>


        {/* CALL BUTTON */}

        {/* <a
          href="tel:+971564740473"
          className="call-button"
          aria-label="Call us"
        >
          <img
            src={callicon}
            alt="Call"
          />
        </a> */}


        {/* WHATSAPP */}

        {/* <a
          href="https://wa.me/971564740473"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Chat on WhatsApp"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
          />
        </a> */}

      </div>

    </section>
  );
}

export default ContactSection;