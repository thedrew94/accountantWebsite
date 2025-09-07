"use strict";

const servicesLi = document.querySelectorAll(".services_li");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu_btn");
const menuCloseBtn = document.getElementById("menu_close_btn");

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
    threshold: 0.1, // Trigger when 10% of the element is visible
  }
);

// Observe each .brief_card element
servicesLi.forEach((card) => {
  observer.observe(card);
});

menuBtn.addEventListener("click", () => {
  if (!menu.classList.contains("menu_visible")) {
    menu.classList.add("menu_visible");
  }
});

menu.addEventListener("click", (e) => {
  // Check if the clicked element or its ancestors do NOT have the 'inner_menu' class
  if (!e.target.closest(".inner_menu")) {
    menu.classList.remove("menu_visible");
  }
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("menu_visible");
});
