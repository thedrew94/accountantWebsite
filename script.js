"use strict";

const servicesLi = document.querySelectorAll(".services_li");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the class when the element is in view
        entry.target.classList.add("appear_in");
      } else {
        // Remove the class when the element is out of view
        entry.target.classList.remove("appear_in");
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // Margin around the viewport
    threshold: 0.25, // Trigger when 10% of the element is visible
  }
);

// Observe each .brief_card element
servicesLi.forEach((card) => {
  observer.observe(card);
});
