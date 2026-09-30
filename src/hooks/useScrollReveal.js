// import { useEffect } from "react";

// export default function useScrollReveal() {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".reveal");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");

//             // Animate only once
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     elements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);
// }

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}