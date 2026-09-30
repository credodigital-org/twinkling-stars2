// import Hero from "../components/Hero/Hero";
// import About from "../components/About/About";
// import RegularPrograms from "../components/RegularPrograms/Programs";
// import SpecialPrograms from "../components/SpecialPrograms/SpecialPrograms";
// import WhyChooseUs from "../components/WhyChooseUs/WhyParentsChoose";
// import Gallery from "../components/Gallery/Gallery";
// import Testimonials from "../components/Testimonials/ParentTestimonials";
// import Contact from "../components/Contact/GetInTouch";


// import aboutImage from "../assets/images/about.png";
// import flowerImage from "../assets/images/flower.png";

// import useScrollReveal from "../hooks/useScrollReveal";

// function Home() {
//   useScrollReveal();
//   return (
//     <>
//       {/* <main> */}
//         <Hero />

//         <About
//         aboutImage={aboutImage}
//         flowerImage={flowerImage}
//         />

//         <RegularPrograms />

//         <SpecialPrograms />

//         <WhyChooseUs />

//         <Gallery />

//         <Testimonials />

//         <Contact />

//       {/* </main> */}
//     </>
//   );
// }

// export default Home;

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import RegularPrograms from "../components/RegularPrograms/Programs";
import SpecialPrograms from "../components/SpecialPrograms/SpecialPrograms";
import WhyChooseUs from "../components/WhyChooseUs/WhyParentsChoose";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/ParentTestimonials";
import Contact from "../components/Contact/GetInTouch";

import aboutImage from "../assets/images/about.png";
import flowerImage from "../assets/images/flower.png";

import useScrollReveal from "../hooks/useScrollReveal";

function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />

      <About
        aboutImage={aboutImage}
        flowerImage={flowerImage}
      />

      <RegularPrograms />
      <SpecialPrograms />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;