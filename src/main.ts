(function Enfold() {
  class EnfoldAnimate extends HTMLElement {
    constructor() {
      super();
      const animationType: string = this.getAttribute("animation");
      const animationDelay: number = parseInt(this.getAttribute("delay"));
      const animationDuration: number = parseInt(this.getAttribute("duration"));
      const easing: string = this.getAttribute("easing");

      const template = document.createElement("template");
      template.innerHTML = `
        <style>
        #enfold{
            animation-duration: ${animationDuration | 1}s !important;
            animation-timing-function: ${easing ? easing : "ease"} !important;
            animation-delay: ${animationDelay | 0}s !important;
        }
        .fadeIn {
            animation-name: fadeIn !important;
        }
        .slideUp {
            animation-name: slideUp !important;
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
                opacity: 0;
                transform: translateY(30px);
            }
            100% {
                opacity: 1;
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
      console.log(root);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            entry.target.classList.toggle(animationType, entry.isIntersecting);
          },
          { threshold: 0.5 }
        );
      });

      observer.observe(root);
    }
  }

  window.customElements.define("enfold-animate", EnfoldAnimate);
})();
