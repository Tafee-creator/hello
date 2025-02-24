/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 700,
  breakpoints: {
    768: {
      spaceBetween: 0,
      allowSlideNext: false,
      allowSlidePrev: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 9) {
        return '<span class="' + className + '"></span>';
      } else {
        return "";
      }
    }
  }
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
  openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("call-modal")) {
        openModal(callModal);
      } else if (btn.classList.contains("feedback-modal")) {
        openModal(feedbackModal);
      }
    });
  });
  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      closeModal(callModal);
      closeModal(feedbackModal);
    });
  });
  formSubmitBtns.forEach(btn => {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLENBQUNqQixTQUFTLENBQUNlLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ha2V0Ly4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9lMzc4Iiwid2VicGFjazovL21ha2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21ha2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFrZXQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Nzcy9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyXCIsIHtcbiAgbG9vcDogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gIHNwYWNlQmV0d2VlbjogMTYsXG4gIHNwZWVkOiA3MDAsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY4OiB7XG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBhbGxvd1NsaWRlTmV4dDogZmFsc2UsXG4gICAgICBhbGxvd1NsaWRlUHJldjogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoaW5kZXggPCA5KSB7XG4gICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjwvc3Bhbj4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBleHBhbmRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHBhbmQtYnRuXCIpO1xuY29uc3QgaXRlbXNMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVwYWlyX19pdGVtc1wiKTtcblxuZXhwYW5kQnRucy5mb3JFYWNoKChleHBhbmRCdG4sIGluZGV4KSA9PiB7XG4gIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGV4cGFuZFRleHQgPSBleHBhbmRCdG4ucXVlcnlTZWxlY3RvcihcIi5leHBhbmQtYnRuX190ZXh0XCIpO1xuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IGl0ZW1zTGlzdHNbaW5kZXhdO1xuXG4gICAgaXRlbXNMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJyZXBhaXJfX2l0ZW1zLS1leHBhbmRlZFwiKTtcblxuICAgIGlmIChpdGVtc0xpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVwYWlyX19pdGVtcy0tZXhwYW5kZWRcIikpIHtcbiAgICAgIGV4cGFuZFRleHQudGV4dENvbnRlbnQgPSBcItCh0LrRgNGL0YLRjFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBhbmRUZXh0LnRleHRDb250ZW50ID0gXCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtVwiO1xuICAgIH1cblxuICAgIGV4cGFuZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kLWJ0bi0tZXhwYW5kZWRcIik7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXJCdXR0b25cIik7XG4gIGNvbnN0IGNsb3NlU2lkZWJhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VTaWRlYmFyQnV0dG9uXCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICBjb25zdCBvcGVuTW9kYWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuLW1vZGFsXCIpO1xuICBjb25zdCBjYWxsTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNhbGxcIik7XG4gIGNvbnN0IGZlZWRiYWNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWZlZWRiYWNrXCIpO1xuICBjb25zdCBjbG9zZU1vZGFsQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xvc2UtbW9kYWxcIik7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG4gIGNvbnN0IGZvcm1TdWJtaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tLXN1Ym1pdFwiKTtcblxuICBidXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheS0tYWN0aXZlXCIpO1xuICB9KTtcblxuICBjbG9zZVNpZGViYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheS0tYWN0aXZlXCIpO1xuICB9KTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGNsb3NlTW9kYWwoY2FsbE1vZGFsKTtcbiAgICBjbG9zZU1vZGFsKGZlZWRiYWNrTW9kYWwpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXktLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICB9KTtcblxuICBvcGVuTW9kYWxCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYWxsLW1vZGFsXCIpKSB7XG4gICAgICAgIG9wZW5Nb2RhbChjYWxsTW9kYWwpO1xuICAgICAgfSBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmVlZGJhY2stbW9kYWxcIikpIHtcbiAgICAgICAgb3Blbk1vZGFsKGZlZWRiYWNrTW9kYWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjbG9zZU1vZGFsQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlTW9kYWwoY2FsbE1vZGFsKTtcbiAgICAgIGNsb3NlTW9kYWwoZmVlZGJhY2tNb2RhbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZvcm1TdWJtaXRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VNb2RhbChjYWxsTW9kYWwpO1xuICAgICAgY2xvc2VNb2RhbChmZWVkYmFja01vZGFsKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXktLWFjdGl2ZVwiKTtcblxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC0tYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXktLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vcGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC0tYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXktLWFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1vcGVuXCIpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJzd2lwZXIiLCJTd2lwZXIiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNwZWVkIiwiYnJlYWtwb2ludHMiLCJhbGxvd1NsaWRlTmV4dCIsImFsbG93U2xpZGVQcmV2IiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJleHBhbmRCdG5zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbXNMaXN0cyIsImZvckVhY2giLCJleHBhbmRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXhwYW5kVGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtc0xpc3QiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInRleHRDb250ZW50IiwiYnVyZ2VyQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9zZVNpZGViYXJCdXR0b24iLCJzaWRlYmFyIiwib3Blbk1vZGFsQnRucyIsImNhbGxNb2RhbCIsImZlZWRiYWNrTW9kYWwiLCJjbG9zZU1vZGFsQnRucyIsIm92ZXJsYXkiLCJmb3JtU3VibWl0QnRucyIsImFkZCIsInJlbW92ZSIsImNsb3NlTW9kYWwiLCJib2R5IiwiYnRuIiwib3Blbk1vZGFsIiwibW9kYWwiXSwic291cmNlUm9vdCI6IiJ9