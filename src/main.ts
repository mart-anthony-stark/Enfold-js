(function Enfold() {
  class EnfoldAnimate extends HTMLElement {
    constructor() {
      super();
      const animationType = this.getAttribute("name");
      const animationDelay: number = parseInt(this.getAttribute("delay")) | 0;
      const animationDuration: number =
        parseInt(this.getAttribute("duration")) | 1;
      const easing: string | number = this.getAttribute("easing")
        ? this.getAttribute("easing")
        : "ease";
      const intensity: number = parseInt(this.getAttribute("intensity")) | 30;
      const once: boolean = this.hasAttribute("once");

      const template = document.createElement("template");
      template.innerHTML = `
        <style>
        #enfold{
            animation-duration: ${animationDuration}s !important;
            animation-timing-function: ${easing} !important;
            animation-delay: ${animationDelay}s !important;
        }
        .fadeIn {
            animation-name: fadeIn !important;
        }
        .slideUp {
            animation-name: slideUp !important;
        }
        .slideLeft {
            animation-name: slideLeft !important;
        }
        .slideDown {
            animation-name: slideDown !important;
        }
        .slideRight {
            animation-name: slideRight !important;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes slideUp {
            0% {
                transform: translateY(${intensity}px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        @keyframes slideLeft {
            0% {
                transform: translateX(${intensity}px);
            }
            100% {
                transform: translateX(0px);
            }
        }
        @keyframes slideRight {
            0% {
                transform: translateX(-${intensity}px);
            }
            100% {
                transform: translateX(0px);
            }
        }
        @keyframes slideDown {
            0% {
                transform: translateY(-${intensity}px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        </style>
        <div id="enfold">
            <slot>
        </div>
    `;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const root = this.shadowRoot.querySelector("#enfold");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            entry.target.classList.toggle(animationType, entry.isIntersecting);
            if (once) {
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.5 }
        );
      });

      observer.observe(root);
    }
  }

  window.customElements.define("enfold-animate", EnfoldAnimate);
})();
