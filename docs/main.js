(function Enfold() {
  class EnfoldAnimate extends HTMLElement {
    constructor() {
      super();
      const animationType = this.getAttribute("name");
      const animationDelay = this.getAttribute("delay")
        ? this.getAttribute("delay")
        : 0;
      const animationDuration = this.getAttribute("duration")
        ? this.getAttribute("duration")
        : 1;
      const easing = this.getAttribute("easing")
        ? this.getAttribute("easing")
        : "ease";
      const intensity = this.getAttribute("intensity") | 100;
      const threshold = this.getAttribute("threshold") | 0.3;
      const once = this.hasAttribute("once");

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
        .rotateCenter {
            -webkit-animation-name: rotateCenter;
                    animation-name: rotateCenter;
        }
        .rotateBotLeft {
            -webkit-animation-name: rotateBotLeft;
                    animation-name: rotateBotLeft;
        }
        .rotateVertical {
            -webkit-animation: rotateVertical 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
                    animation: rotateVertical 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        }
        .rotateDiagonal {
            -webkit-animation: rotateDiagonal 0.4s linear both;
                    animation: rotateDiagonal 0.4s linear both;
        }
        .flipHorizontalBottom {
            -webkit-animation: flipHorizontalBottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
                    animation: flipHorizontalBottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
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
        @keyframes rotateCenter {
            0% {
                -webkit-transform: rotate(0);
                        transform: rotate(0);
            }
            100% {
                -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
            }
        }
        @keyframes rotateBotLeft {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
            -webkit-transform-origin: bottom left;
                    transform-origin: bottom left;
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
            -webkit-transform-origin: bottom left;
                    transform-origin: bottom left;
        }
        }
        @keyframes rotateVertical {
            0% {
              -webkit-transform: rotateY(0);
                      transform: rotateY(0);
            }
            100% {
              -webkit-transform: rotateY(360deg);
                      transform: rotateY(360deg);
            }
          }
          @keyframes rotateDiagonal {
            0% {
              -webkit-transform: rotate3d(-1, 1, 0, 0deg);
                      transform: rotate3d(-1, 1, 0, 0deg);
              -webkit-transform-origin: 100% 100%;
                      transform-origin: 100% 100%;
            }
            50% {
              -webkit-transform: rotate3d(-1, 1, 0, -180deg);
                      transform: rotate3d(-1, 1, 0, -180deg);
              -webkit-transform-origin: 100% 100%;
                      transform-origin: 100% 100%;
            }
            100% {
              -webkit-transform: rotate3d(-1, 1, 0, -360deg);
                      transform: rotate3d(-1, 1, 0, -360deg);
              -webkit-transform-origin: 100% 100%;
                      transform-origin: 100% 100%;
            }
          }
          @keyframes flipHorizontalBottom {
            0% {
              -webkit-transform: rotateX(0);
                      transform: rotateX(0);
            }
            100% {
              -webkit-transform: rotateX(-180deg);
                      transform: rotateX(-180deg);
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
      root.style.opacity = 0;

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
          root.style.opacity = 1;
        });
      }
    }
  }

  window.customElements.define("enfold-animate", EnfoldAnimate);
})();
