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
        .flipScaleUpHor {
            -webkit-animation: flipScaleUpHor 0.5s linear both;
                    animation: flipScaleUpHor 0.5s linear both;
        }
        .slideRotateTopHor {
            -webkit-animation: slideRotateTopHor 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: slideRotateTopHor 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }

        .slideRotateHorBottom {
            -webkit-animation: slideRotateHorBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: slideRotateHorBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        .shadowDropCenter {
            -webkit-animation: shadowDropCenter 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: shadowDropCenter 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        .shadowDropTB {
            -webkit-animation: shadowDropTB 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: shadowDropTB 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        .shadowDropLR {
            -webkit-animation: shadowDropLR 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: shadowDropLR 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
          @keyframes flipScaleUpHor {
            0% {
              -webkit-transform: scale(1) rotateX(0);
                      transform: scale(1) rotateX(0);
            }
            50% {
              -webkit-transform: scale(2.5) rotateX(-90deg);
                      transform: scale(2.5) rotateX(-90deg);
            }
            100% {
              -webkit-transform: scale(1) rotateX(-180deg);
                      transform: scale(1) rotateX(-180deg);
            }
          }
          @keyframes slideRotateTopHor {
            0% {
              -webkit-transform: translateY(0) rotateX(0deg);
                      transform: translateY(0) rotateX(0deg);
            }
            100% {
              -webkit-transform: translateY(-150px) rotateX(-90deg);
                      transform: translateY(-150px) rotateX(-90deg);
            }
          }

          @keyframes slideRotateHorBottom {
            0% {
              -webkit-transform: translateY(0) rotateX(0deg);
                      transform: translateY(0) rotateX(0deg);
            }
            100% {
              -webkit-transform: translateY(150px) rotateX(90deg);
                      transform: translateY(150px) rotateX(90deg);
            }
          }
          @keyframes shadowDropCenter {
            0% {
              -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
            100% {
              -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.85);
                      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.85);
            }
          }
          @keyframes shadowDropTB {
            0% {
              -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
                      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
            }
            100% {
              -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.85), 0 12px 20px -12px rgba(0, 0, 0, 0.85);
                      box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.85), 0 12px 20px -12px rgba(0, 0, 0, 0.85);
            }
          }
          @keyframes shadowDropLR {
            0% {
              -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
                      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
            }
            100% {
              -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.85), 12px 0 20px -12px rgba(0, 0, 0, 0.85);
                      box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.85), 12px 0 20px -12px rgba(0, 0, 0, 0.85);
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
})();
