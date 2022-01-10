class EnfoldAnimate extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Hello</h1>`;
  }
}

window.customElements.define("enfold-animate", EnfoldAnimate);
