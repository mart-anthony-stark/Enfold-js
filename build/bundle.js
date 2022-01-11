var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function Enfold() {
    var EnfoldAnimate = /** @class */ (function (_super) {
        __extends(EnfoldAnimate, _super);
        function EnfoldAnimate() {
            var _this = _super.call(this) || this;
            var animationType = _this.getAttribute("name");
            var animationDelay = _this.getAttribute("delay")
                ? parseInt(_this.getAttribute("delay"))
                : 0;
            var animationDuration = _this.getAttribute("duration")
                ? parseInt(_this.getAttribute("duration"))
                : 1;
            var easing = _this.getAttribute("easing")
                ? _this.getAttribute("easing")
                : "ease";
            var intensity = parseInt(_this.getAttribute("intensity")) | 100;
            var threshold = parseInt(_this.getAttribute("threshold")) | 0.5;
            var once = _this.hasAttribute("once");
            var template = document.createElement("template");
            template.innerHTML = "\n          <style>\n          #enfold{\n              animation-duration: ".concat(animationDuration, "s !important;\n              animation-timing-function: ").concat(easing, " !important;\n              animation-delay: ").concat(animationDelay, "s !important;\n          }\n          .fadeIn {\n              animation-name: fadeIn !important;\n          }\n          .slideUp {\n              animation-name: slideUp !important;\n          }\n          .slideLeft {\n              animation-name: slideLeft !important;\n          }\n          .slideDown {\n              animation-name: slideDown !important;\n          }\n          .slideRight {\n              animation-name: slideRight !important;\n          }\n          .zoomIn {\n              animation-name: zoomIn !important;\n          }\n          .zoomInLeft {\n              animation-name: zoomInLeft !important;\n          }\n          .zoomInRight {\n              animation-name: zoomInRight !important;\n          }\n          .").concat(animationType, "-leave {\n              animation-name: ").concat(animationType, "-leave !important;\n          }\n  \n          @keyframes fadeIn {\n              0% {\n                  opacity: 0;\n              }\n              100% {\n                  opacity: 1;\n              }\n          }\n  \n          @keyframes fadeIn-leave{\n              0% {\n                  opacity: 1;\n              }\n              100% {\n                  opacity: 0;\n              }\n          }\n  \n          @keyframes slideUp {\n              0% {\n                  transform: translateY(").concat(intensity, "px);\n              }\n              100% {\n                  transform: translateY(0px);\n              }\n          }\n          @keyframes slideLeft {\n              0% {\n                  transform: translateX(").concat(intensity, "px);\n              }\n              100% {\n                  transform: translateX(0px);\n              }\n          }\n          @keyframes slideRight {\n              0% {\n                  transform: translateX(-").concat(intensity, "px);\n              }\n              100% {\n                  transform: translateX(0px);\n              }\n          }\n          @keyframes slideDown {\n              0% {\n                  transform: translateY(-").concat(intensity, "px);\n              }\n              100% {\n                  transform: translateY(0px);\n              }\n          }\n  \n          @keyframes zoomIn {\n              0% {\n                  transform: scale(0.5);\n  \n              }\n              100% {\n                  transform: scale(1);\n              }\n          }\n          @keyframes zoomInLeft {\n              0% {\n                  transform: translateX(").concat(intensity, "px) scale(0.5);\n              }\n              100% {\n                  transform: translateX(0px) scale(1);\n              }\n          }\n          @keyframes zoomInRight {\n              0% {\n                  transform: translateX(").concat(-intensity, "px) scale(0.5);\n              }\n              100% {\n                  transform: translateX(0px) scale(1);\n              }\n          }\n          </style>\n          <div id=\"enfold\">\n              <slot>\n          </div>\n      ");
            _this.attachShadow({ mode: "open" });
            _this.shadowRoot.appendChild(template.content.cloneNode(true));
            var root = _this.shadowRoot.querySelector("#enfold");
            var observer = new IntersectionObserver(callback, {
                threshold: threshold
            });
            observer.observe(root);
            function callback(entries) {
                entries.forEach(function (entry) {
                    entry.target.classList.toggle(animationType, entry.isIntersecting);
                    entry.target.classList.toggle(animationType + "-leave", !entry.isIntersecting);
                    if (once) {
                        observer.unobserve(entry.target);
                    }
                });
            }
            return _this;
        }
        return EnfoldAnimate;
    }(HTMLElement));
    window.customElements.define("enfold-animate", EnfoldAnimate);
})();
//# sourceMappingURL=bundle.js.map