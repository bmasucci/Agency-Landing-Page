/* ==========================================================================
   BrAIn Flux — landing page behaviour
   1. Mobile menu   2. "Flux" wordmark ripple   3. Footer year
   Plain JavaScript, no build step, no dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* 1. MOBILE MENU ------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    function setMenu(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".nav-toggle__label").textContent = open ? "Close" : "Menu";
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close the menu after choosing a link, or when Escape is pressed
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });
  }

  /* 2. "FLUX" WORDMARK RIPPLE --------------------------------------------
     Splits "Flux" into one span per letter, then adds .is-waving so the CSS
     animation (see styles.css, section 6) runs. Replays on hover. */
  var flux = document.querySelector("[data-wave]");
  var wordmark = document.querySelector(".wordmark");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (flux) {
    var letters = flux.textContent.split("");
    flux.textContent = "";
    letters.forEach(function (letter, index) {
      var span = document.createElement("span");
      span.className = "wave__char";
      span.style.setProperty("--i", index);
      span.textContent = letter;
      flux.appendChild(span);
    });

    if (!reducedMotion) {
      var playing = false;

      function play() {
        if (playing) return;
        playing = true;
        flux.classList.remove("is-waving");
        void flux.offsetWidth; // restart the animation
        flux.classList.add("is-waving");
        // Total time: last letter delay + animation length
        setTimeout(function () { playing = false; }, letters.length * 120 + 1300);
      }

      // Wait for the web font so the ripple doesn't play on fallback text
      var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      ready.then(function () { setTimeout(play, 300); });

      if (wordmark) wordmark.addEventListener("pointerenter", play);
    }
  }

  /* 3. FOOTER YEAR ------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
