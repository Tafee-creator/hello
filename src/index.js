import "./scss/style.scss";

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 700,
  breakpoints: {
    768: {
      spaceBetween: 0,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 9) {
        return '<span class="' + className + '"></span>';
      } else {
        return '';
      }
    },
  },
});

const expandBtns = document.querySelectorAll(".expand-btn");
const itemsLists = document.querySelectorAll(".repair__items");

expandBtns.forEach((expandBtn, index) => {
  expandBtn.addEventListener("click", () => {
    const expandText = expandBtn.querySelector(".expand-btn__text");
    const itemsList = itemsLists[index];

    itemsList.classList.toggle("repair__items--expanded");

    if (itemsList.classList.contains("repair__items--expanded")) {
      expandText.textContent = "Скрыть";
    } else {
      expandText.textContent = "Показать все";
    }

    expandBtn.classList.toggle("expand-btn--expanded");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.getElementById("burgerButton");
  const closeSidebarButton = document.getElementById("closeSidebarButton");
  const sidebar = document.querySelector(".sidebar");
  const openModalBtns = document.querySelectorAll(".open-modal");
  const callModal = document.querySelector(".modal-call");
  const feedbackModal = document.querySelector(".modal-feedback");
  const closeModalBtns = document.querySelectorAll(".close-modal");
  const overlay = document.querySelector(".overlay");
  const formSubmitBtns = document.querySelectorAll(".button--submit");

  burgerButton.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("overlay--active");
  });

  closeSidebarButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("overlay--active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    closeModal(callModal);
    closeModal(feedbackModal);
    overlay.classList.remove("overlay--active");
    document.body.classList.remove("modal-open");
  });

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("call-modal")) {
        openModal(callModal);
      } else if (btn.classList.contains("feedback-modal")) {
        openModal(feedbackModal);
      }
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(callModal);
      closeModal(feedbackModal);
    });
  });

  formSubmitBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(callModal);
      closeModal(feedbackModal);
    });
  });

  function openModal(modal) {
    sidebar.classList.remove("active");
    overlay.classList.remove("overlay--active");

    modal.classList.add("modal--active");
    overlay.classList.add("overlay--active");
    document.body.classList.add("modal-open");
  }

  function closeModal(modal) {
    modal.classList.remove("modal--active");
    overlay.classList.remove("overlay--active");
    document.body.classList.remove("modal-open");
  }
});
