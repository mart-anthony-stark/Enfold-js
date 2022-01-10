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
            var animationType = _this.getAttribute("animation");
            var animationDelay = parseInt(_this.getAttribute("delay"));
            var animationDuration = parseInt(_this.getAttribute("duration"));
            var easing = _this.getAttribute("easing");
            var template = document.createElement("template");
            template.innerHTML = "\n        <style>\n        #enfold{\n            animation-duration: ".concat(animationDuration | 1, "s !important;\n            animation-timing-function: ").concat(easing ? easing : "ease", " !important;\n            animation-delay: ").concat(animationDelay | 0, "s !important;\n        }\n        .fadeIn {\n            animation-name: fadeIn !important;\n        }\n        .slideUp {\n            animation-name: slideUp !important;\n        }\n\n        @keyframes fadeIn {\n            0% {\n                opacity: 0;\n            }\n            100% {\n                opacity: 1;\n            }\n        }\n        @keyframes slideUp {\n            0% {\n                opacity: 0;\n                transform: translateY(30px);\n            }\n            100% {\n                opacity: 1;\n                transform: translateY(0px);\n            }\n        }\n        </style>\n        <div id=\"enfold\">\n            <slot>\n        </div>\n    ");
            _this.attachShadow({ mode: "open" });
            _this.shadowRoot.appendChild(template.content.cloneNode(true));
            var root = _this.shadowRoot.querySelector("#enfold");
            console.log(root);
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    entry.target.classList.toggle(animationType, entry.isIntersecting);
                }, { threshold: 0.5 });
            });
            observer.observe(root);
            return _this;
        }
        return EnfoldAnimate;
    }(HTMLElement));
    window.customElements.define("enfold-animate", EnfoldAnimate);
})();
//# sourceMappingURL=bundle.js.map