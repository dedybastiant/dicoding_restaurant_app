class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <div class="hero--image"></div>
    </section>
    `;
  }
}

customElements.define("hero-section", HeroSection);
