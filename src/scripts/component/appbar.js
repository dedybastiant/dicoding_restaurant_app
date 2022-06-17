class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
      <section class="navbar">
        <div class="navbar--logo">RESTO</div>
        <ul class="navbar--links">
          <button class="navbar--links--button">
            <span class="hamburger">&#9776;</span>
          </button>
          <div class="navbar__links--list">
            <li><a href="/"><span>Home</span></a></li>
            <li><a href="#favourite-list"><span>Favourite</span></a></li>
            <li><a href="#about-us"><span>About</span></a></li>
          </div>
        </ul>
      </section>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
