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
const cookieModal = document.getElementById("cookie_modal");
const cookieModalBtn = cookieModal?.querySelector("button");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu_btn");
const menuCloseBtn = document.getElementById("menu_close_btn");
const consultationStep1 = document.getElementById("step1");
const consultationStep2 = document.getElementById("step2");
const consultationStep3 = document.getElementById("step3");
const firstStepContainer = document.querySelector(".first_step");
const secondStepContainer = document.querySelector(".second_step");
const thirdStepContainer = document.querySelector(".third_step");
const fourthStepContainer = document.querySelector(".fourth_step");
const inputNumber = document.querySelectorAll(".input_number");
const consultationNavBtns = document.querySelectorAll(".cnslt_step_btn");
const progressBarInner = document.querySelector(".swiper_progressbar_inner");

if (cookieModal && cookieModalBtn) {
  cookieModalBtn.addEventListener("click", () => {
    cookieModal.remove();
  });
} else {
  console.warn("Cookie modal or button not found in the DOM.");
}

function handleConsultationStep1() {
  consultationNavBtns.forEach((b) => {
    if (b.dataset.numb === "1") {
      b.classList.add("consultation_steps_sltd");
    } else {
      b.classList.remove("consultation_steps_sltd");
    }
  });
  firstStepContainer.classList.remove("step_visible");
  thirdStepContainer.classList.remove("step_visible");
  fourthStepContainer.classList.remove("step_visible");
  secondStepContainer.classList.add("step_visible");
}

function handleConsultationStep2() {
  consultationNavBtns.forEach((b) => {
    if (b.dataset.numb === "2") {
      b.classList.add("consultation_steps_sltd");
    } else {
      b.classList.remove("consultation_steps_sltd");
    }
  });
  firstStepContainer.classList.remove("step_visible");
  secondStepContainer.classList.remove("step_visible");
  fourthStepContainer.classList.remove("step_visible");
  thirdStepContainer.classList.add("step_visible");
}

function handleConsultationStep3() {
  consultationNavBtns.forEach((b) => {
    if (b.dataset.numb === "3") {
      b.classList.add("consultation_steps_sltd");
    } else {
      b.classList.remove("consultation_steps_sltd");
    }
  });
  firstStepContainer.classList.remove("step_visible");
  secondStepContainer.classList.remove("step_visible");
  thirdStepContainer.classList.remove("step_visible");
  fourthStepContainer.classList.add("step_visible");
}

consultationNavBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtnIdx = e.target.dataset.numb;
    if (clickedBtnIdx === "1") {
      handleConsultationStep1();
    } else if (clickedBtnIdx === "2") {
      handleConsultationStep2();
    } else if (clickedBtnIdx === "3") {
      handleConsultationStep3();
    }
  });
});

inputNumber.forEach((inp) => {
  inp.addEventListener("input", (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    e.target.value = value;
  });

  // Optional: Prevent pasting non-numeric content
  inp.addEventListener("paste", (e) => {
    const pastedData = e.clipboardData.getData("text");
    if (!/^[0-9]*$/.test(pastedData)) {
      // Block paste if it contains non-digits
      e.preventDefault();
    }
  });

  // Optional: Prevent decimal point and other special characters on keypress
  inp.addEventListener("keypress", (e) => {
    // Allow only digits (0-9)
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
      return;
    }

    const currentValue = e.target.value;
    const newValue = currentValue + e.key;
    const numericValue = parseInt(newValue, 10);
    if (numericValue > 999999) {
      e.preventDefault();
    }
  });
});

consultationStep3.addEventListener("click", handleConsultationStep3);
consultationStep2.addEventListener("click", handleConsultationStep2);
consultationStep1.addEventListener("click", handleConsultationStep1);

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

const swiper = new Swiper(".news_swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      restartAnimation();
    },
    // slideChangeTransitionStart: function () {
    //   restartAnimation(); // Restart animation on slide change
    //   console.log("es 2");
    // },
    autoplayPause: function () {
      pauseAnimation();
    },
    autoplayResume: function () {
      resumeAnimation();
    },
  },
});

function restartAnimation() {
  progressBarInner.style.animation = "none";
  void progressBarInner.offsetWidth;
  progressBarInner.style.animation = "progressbarFill 3s linear infinite";
  progressBarInner.classList.remove("paused");
}

function pauseAnimation() {
  progressBarInner.classList.add("paused");
}

function resumeAnimation() {
  restartAnimation();
}
