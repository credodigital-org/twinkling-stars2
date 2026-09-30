import React from "react";
import "./Program.css";
import { useNavigate } from "react-router-dom";
import cloud2 from "../assets/images/cloud2.png";

import programsHero from "../assets/images/programs-hero.png";

import dayCareIcon from "../assets/images/daycare.png";
import preschoolIcon from "../assets/images/preschool.png";
import kgIcon from "../assets/images/kg.png";
import tuitionIcon from "../assets/images/after-school.png";

import zumbaIcon from "../assets/images/zumba.png";
import danceIcon from "../assets/images/dance.png";
import yogaIcon from "../assets/images/yoga.png";
import artMusicIcon from "../assets/images/art.png";

import teddyImage from "../assets/images/journey-bear.png";

import sun from "../assets/images/sun.png";
import cloud from "../assets/images/cloud.png";
import flower from "../assets/images/flower.png";
import bee from "../assets/images/bee.png";
import specialpgmImage from "../assets/images/specialpgm.png";


const regularPrograms = [
  {
    title: "Day Care",
    age: "Age 1 year - 3 Month Above",
    description:
      "A safe, caring, and nurturing space where children can learn, play, and grow throughout the day. Our dedicated team provides engaging activities, comfort, and attentive care, giving little ones a happy and secure environment.",
    image: dayCareIcon,
    side: "left",
  },
  {
    title: "PRESCHOOL",
    age: "18Months - 2 Years",
    description:
      "A joyful learning environment where little ones build confidence, explorenew ideas, and develop essential early skills. Through play, creativity, andengaging activities, children are encouraged to learn, make friends, and enjoy every step of their early learning journey.",
    image: preschoolIcon,
    side: "right",
  },
  {
    title: "KG 1 - KG 2",
    age: "4 Years - 6 Years",
    description:
      "A fun and engaging learning environment where children build essential academic, social, and communication skills through play and creative activities. Our programs encourage curiosity, confidence, independence, and a love for learning while preparing children for their next educational journey.",
    image: kgIcon,
    side: "left",
  },
  {
    title: "After school tuition class",
    age: "",
    description:
      "A supportive learning space where children can complete their homework,strengthen their academic skills, and receive guidance after school. Ourengaging sessions help children stay focused, build confidence, and develop positive study habits in a comfortable environment.",
    image: tuitionIcon,
    side: "right",
  },
];


const specialPrograms = [
  {
    title: "Zumba Classes",
    age: "",
    description:
      "A fun and energetic way for children to stay active while enjoying music and movement. Our Zumba classes help develop coordination, confidence, and fitness through exciting dance routines in a joyful and friendly environment.",
    image: zumbaIcon,
    side: "left",
  },
  {
    title: "Dance Classes",
    age: "",
    description:
      "A lively and creative space where children can discover the joy of movement, rhythm, and self-expression. Through fun dance routines and engaging activities, children build confidence, coordination, flexibility, and a love for performing.",
    image: danceIcon,
    side: "right",
  },
  {
    title: "Yoga Classes",
    age: "",
    description:
      "A calm and enjoyable way for children to improve their balance, flexibility, focus, and body awareness. Through fun, age-appropriateyoga activities, children learn to relax, stay active, and build confidence in a positive environment.",
    image: yogaIcon,
    side: "left",
  },
  {
    title: "Art - Craft & Music",
    age: "",
    description:
      "A lively and creative space where children can discover the joy of movement, rhythm, and self-expression. Through fun dance routines and engaging activities, children build confidence, coordination, flexibility, and a love for performing.",
    image: artMusicIcon,
    side: "right",
  },
];


const benefits = [
  {
    icon: "🚗",
    title: "Play-Based Learning",
    description:
      "Fostering curiosity and joythrough hands-on exploration and creative play.",
  },
  {
    icon: "🎓",
    title: "Expert Educators",
    description:
      "Our certified teachers are passionate about early childhood development.",
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    description:
      "A secure, clean, and welcoming space where every child feels at home.",
  },
  {
    icon: "♡",
    title: "Individual Attention",
    description:
      "Small class sizes ensure each child receives the care they deserve.",
  },
];


function ProgramCard({
  program,
  index,
  type,
}) {
  const decorations = [bee, sun, cloud, flower];

  const decorationClasses = [
    "decoration-sun",
    "decoration-cloud",
    "decoration-flower",
    "decoration-bee",
  ];

  const decorationImage = decorations[index % decorations.length];
  const decorationClass =
    decorationClasses[index % decorationClasses.length];

  return (
    <article
      className={`program-card ${program.side} ${
        type === "special" ? "special-card" : "regular-card"
      }`}
    >
      <img
        src={decorationImage}
        alt=""
        aria-hidden="true"
        className={`program-decoration ${decorationClass}`}
      />

      <div className="program-image-box">
        <img src={program.image} alt={program.title} />

        <h3>{program.title}</h3>

        {program.age && <strong>{program.age}</strong>}

        <p>Nurturing care and gentle introduction to learning</p>
      </div>

      <div className="program-description">
        {program.description}
      </div>
    </article>
  );
}


function Programs() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/contact"); 
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth", 
    }); 
  };

  return (
    <main className="programs-page">

      {/* ================= HERO ================= */}

      <section className="programs-hero">

        <div className="hero-text">
          <h1>Regular Programs</h1>

          <p>
            Our regular programs are thoughtfully designed to support
            children's development through play, exploration, creativity
            and meaningful learning experiences.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={programsHero}
            alt="Children enjoying preschool activities"
          />
        </div>

      </section>


      {/* ================= REGULAR PROGRAMS ================= */}

      <section className="regular-programs">

        <div className="program-list">

          {regularPrograms.map((program, index) => (
            <ProgramCard
              key={program.title}
              program={program}
              index={index}
              type="regular"
            />
          ))}

        </div>

      </section>

        


      {/* =====================================================
          LEARNING THROUGH PLAY
      ===================================================== */}

 <section className="learning-play-section">

  <div
    className="learning-play-cloud"
    style={{ backgroundImage: `url(${cloud2})` }}
  ></div>

  <div className="learning-play-content">

    <div className="learning-play-image">
      <img
        src={specialpgmImage}
        alt="Children learning through play"
      />
    </div>

    <div className="learning-play-text">

      <h2>Learning Through Play</h2>

      <h3>
        Children learn best when they're having fun!
      </h3>

      <p>
        We combine structured learning with
        imaginative play to encourage creativity,
        confidence, communication and curiosity
        every single day.
      </p>

    </div>

  </div>

</section>


      {/* ================= SPECIAL PROGRAMS ================= */}

      <section className="special-programs">

        <h2>Special Programs</h2>

        <div className="program-list">

          {specialPrograms.map((program, index) => (
            <ProgramCard
              key={program.title}
              program={program}
              index={index}
              type="special"
            />
          ))}

        </div>

      </section>


      {/* ================= BENEFITS ================= */}

      <section className="benefits-section">

        <h2>Nurturing Your Child's Potential</h2>

        <div className="benefits-grid">

          {benefits.map((benefit) => (
            <div
              className="benefit-item"
              key={benefit.title}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}

        </div>

      </section>


      {/* ================= ADMISSION CTA ================= */}

      <section className="admission-section">

        <div className="admission-image-wrapper">
          <img
            src={teddyImage}
            alt="Teddy bear"
            className="admission-image"
          />
        </div>

        <div className="admission-content">

          <h2 className="admission-title">
            Ready to Begin Their Journey?
          </h2>

          <p className="admission-description">
            Give your child the opportunity to learn, grow 
            {/* <br /> */}
            and thrive in a caring and inspiring environment.
          </p>

        </div>

        <button
          type="button"
          className="admission-button"
          onClick={() => navigate("/contact")}
        >
          ENROLL NOW!
        </button>

      </section>

    </main>
  );
}

export default Programs;