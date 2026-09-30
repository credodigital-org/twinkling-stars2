import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./Layouts/PublicLayout";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import whatsapp2 from "./assets/images/whatsapp.png";
import callicon from "./assets/images/call.png";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import "./LoadingAnimation.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* =================================================
          LOADING ANIMATION
      ================================================= */}
      {loading && (
        <div className="loading-screen">
          <div className="loading-content">

            {/* Logo / Loader */}
            <div className="loading-circle">
              <div className="loading-inner-circle">
                ★
              </div>
            </div>

            <h2>Twinkling Stars</h2>

            <p>Loading...</p>

            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      )}

      {/* =================================================
          WEBSITE
      ================================================= */}
      <BrowserRouter>
       <ScrollToTop />

        <Routes>

          {/* =================================================
              PUBLIC WEBSITE
          ================================================= */}
          <Route element={<PublicLayout />}>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/programs"
              element={<Programs />}
            />

            <Route
              path="/gallery"
              element={<Gallery />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Route>

        </Routes>


        {/* =================================================
            FLOATING CONTACT BUTTONS
        ================================================= */}
        <div className="floating-contact-widget">

          {/* CALL BUTTON */}
          <a
            href="tel:+971564740473"
            className="contact-btn call-btn"
            aria-label="Call Us"
          >
            <img
              src={callicon}
              alt="Call Us"
            />
          </a>


          {/* WHATSAPP BUTTON */}
          {/* <a
            href="https://wa.me/+971564740473?text=Hello!%20I%20would%20like%20to%20inquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
            aria-label="Chat on WhatsApp"
          >
            <img
              src={whatsapp2}
              alt="WhatsApp"
            />
          </a> */}

          <a
  href="https://wa.me/971564740473?text=Hello!%20I%20would%20like%20to%20inquire%20about%20admissions."
  target="_blank"
  rel="noopener noreferrer"
  className="contact-btn whatsapp-btn"
  aria-label="Chat on WhatsApp"
>
  <img
    src={whatsapp2}
    alt="WhatsApp"
  />
</a>

        </div>

      </BrowserRouter>
    </>
  );
}

export default App;