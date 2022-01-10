(function Enfold() {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
    .fadeIn {
        opacity: 1 !important;
        transition: 1s ease;
    }
    </style>
    <div id="enfold">
        <slot>
    </div>
`;

  class EnfoldAnimate extends HTMLElement {
    constructor() {
      super();
      const animationType = this.getAttribute("animation");
      console.log(animationType);
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const root = this.shadowRoot.querySelector("#enfold");
      root.style.opacity = 0;
      console.log(root);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            entry.target.classList.toggle(animationType, entry.isIntersecting);
            console.log(entry.isIntersecting);
          },
          { threshold: 0.5 }
        );
      });

      observer.observe(root);
    }
  }

  window.customElements.define("enfold-animate", EnfoldAnimate);
})();
