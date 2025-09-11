"use strict";

console.log(`
███╗   ███╗ █████╗ ██████╗ ███████╗    ██████╗ ██╗   ██╗    ████████╗ ██████╗ ██████╗ ███╗   ██╗██╗   ██╗ █████╗  ██╗       
████╗ ████║██╔══██╗██╔══██╗██╔════╝    ██╔══██╗╚██╗ ██╔╝    ╚══██╔══╝██╔═══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝██╔══██╗ ██║      
██╔████╔██║███████║██║  ██║█████╗      ██████╔╝ ╚████╔╝        ██║   ██║   ██║██████╔╝██╔██╗ ██║ ╚████╔╝ ███████║ ██║      
██║╚██╔╝██║██╔══██║██║  ██║██╔══╝      ██╔══██╗  ╚██╔╝         ██║   ██║   ██║██╔══██╗██║╚██╗██║  ╚██╔╝  ██╔══██║ ██║      
██║ ╚═╝ ██║██║  ██║██████╔╝███████╗    ██████╔╝   ██║          ██║   ╚██████╔╝██║  ██║██║ ╚████║   ██║   ██║  ██║ ██║     
╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝    ╚═════╝    ╚═╝          ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═╝      
                                                                                                                         
██╗      █████╗ ██╗   ██╗██████╗ ███████╗███╗   ██╗████████╗██╗██╗   ██╗     █████╗ ███╗   ██╗██████╗ ██████╗ ███████╗██╗
██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝████╗  ██║╚══██╔══╝██║██║   ██║    ██╔══██╗████╗  ██║██╔══██╗██╔══██╗██╔════╝██║
██║     ███████║██║   ██║██████╔╝█████╗  ██╔██╗ ██║   ██║   ██║██║   ██║    ███████║██╔██╗ ██║██║  ██║██████╔╝█████╗  ██║
██║     ██╔══██║██║   ██║██╔══██╗██╔══╝  ██║╚██╗██║   ██║   ██║██║   ██║    ██╔══██║██║╚██╗██║██║  ██║██╔══██╗██╔══╝  ██║
███████╗██║  ██║╚██████╔╝██║  ██║███████╗██║ ╚████║   ██║   ██║╚██████╔╝    ██║  ██║██║ ╚████║██████╔╝██║  ██║███████╗██║
╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝
**if you are not able to see it properly try on a bigger screen**                                                                                        
`);
console.log("Thank you for passing by! Follow me on LinkedIn : Tornyai Laurentiu Andrei");

const servicesLi = document.querySelectorAll(".services_li");
const menuLinks = document.querySelectorAll(".menu_link_btn");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu_btn");
const menuCloseBtn = document.getElementById("menu_close_btn");
const consultationStep1 = document.getElementById("step1");
const consultationStep2 = document.getElementById("step2");
const consultationStep3 = document.getElementById("step3");
const firstStepContainer = document.querySelector(".first_step");
const secondStepContainer = document.querySelector(".second_step");
const thirdStepContainer = document.querySelector(".third_step");

consultationStep2.addEventListener("click", () => {
  // window.print();
  firstStepContainer.classList.remove("step_visible");
  secondStepContainer.classList.remove("step_visible");
  thirdStepContainer.classList.add("step_visible");
});

consultationStep1.addEventListener("click", () => {
  // window.print();
  firstStepContainer.classList.remove("step_visible");
  thirdStepContainer.classList.remove("step_visible");
  secondStepContainer.classList.add("step_visible");
});

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

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu_visible");
  });
});
