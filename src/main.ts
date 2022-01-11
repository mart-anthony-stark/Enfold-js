class EnfoldAnimate extends HTMLElement {
  constructor() {
    super();
    const animationType: string = this.getAttribute("name");
    const animationDelay: number = this.getAttribute("delay")
      ? parseInt(this.getAttribute("delay"))
      : 0;
    const animationDuration: number = this.getAttribute("duration")
      ? parseInt(this.getAttribute("duration"))
      : 1;
    const easing: string = this.getAttribute("easing")
      ? this.getAttribute("easing")
      : "ease";
    const intensity: number = parseInt(this.getAttribute("intensity")) | 100;
    const threshold: number = parseInt(this.getAttribute("threshold")) | 0.5;
    const once: boolean = this.hasAttribute("once");

    const template = document.createElement("template");
    template.innerHTML = `
          <style>
          <style>
        #enfold{
            animation-duration: ${animationDuration}s !important;
            animation-timing-function: ${easing} !important;
            animation-delay: ${animationDelay}s !important;
        }
        .fadeIn {
            animation-name: fadeIn !important;
        }
        .fadeLeft {
            animation-name: fadeLeft !important;
        }
        .fadeRight {
            animation-name: fadeRight !important;
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
        .zoomIn {
            animation-name: zoomIn !important;
        }
        .zoomInLeft {
            animation-name: zoomInLeft !important;
        }
        .zoomInRight {
            animation-name: zoomInRight !important;
        }
        .${animationType}-leave {
            animation-name: ${animationType}-leave !important;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes fadeLeft {
            0% {
                transform: translateX(${intensity}px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }
        @keyframes fadeRight {
            0% {
                transform: translateX(-${intensity}px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
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

        @keyframes zoomIn {
            0% {
                transform: scale(0.5);

            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes zoomInLeft {
            0% {
                transform: translateX(${intensity}px) scale(0.5);
            }
            100% {
                transform: translateX(0px) scale(1);
            }
        }
        @keyframes zoomInRight {
            0% {
                transform: translateX(${-intensity}px) scale(0.5);
            }
            100% {
                transform: translateX(0px) scale(1);
            }
        }
        </style>
          </style>
          <div id="enfold">
              <slot>
          </div>
      `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const root = this.shadowRoot.querySelector("#enfold");

    const observer = new IntersectionObserver(callback, {
      threshold,
    });

    observer.observe(root);

    function callback(entries) {
      entries.forEach((entry) => {
        entry.target.classList.toggle(animationType, entry.isIntersecting);
        entry.target.classList.toggle(
          animationType + "-leave",
          !entry.isIntersecting
        );

        if (once) {
          observer.unobserve(entry.target);
        }
      });
    }
  }
}
window.customElements.define("enfold-animate", EnfoldAnimate);
