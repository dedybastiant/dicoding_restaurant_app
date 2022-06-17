class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="resto-lift">
      <h1 class="content--heading">Restaurant List</h1>
      <div id="content" class="content--container">
        <article tabindex="0" class="restaurant--card">
          <div class="restaurant__card--header">
            <img
              src="https://restaurant-api.dicoding.dev/images/medium/41"
              alt="Bring Your Phone Cafe Restaurant Image"
            />
            <p>Medan</p>
          </div>
          <div class="restaurant__card--description">
            <p class="restaurant__card--rating">★ 4.6</p>
            <p class="restaurant__card--name">Bring Your Phone Cafe</p>
          </div>
        </article>
        <article tabindex="0" class="restaurant--card">
          <div class="restaurant__card--header">
            <img
              src="https://restaurant-api.dicoding.dev/images/medium/07"
              alt="Run The Gun Restaurant Image"
            />
            <p>Bali</p>
          </div>
          <div class="restaurant__card--description">
            <p class="restaurant__card--rating">★ 4.6</p>
            <p class="restaurant__card--name">Run The Gun</p>
          </div>
        </article>
        <article tabindex="0" class="restaurant--card">
          <div class="restaurant__card--header">
            <img
              src="https://restaurant-api.dicoding.dev/images/medium/29"
              alt="Pangsit Express Restaurant Image"
            />
            <p>Ternate</p>
          </div>
          <div class="restaurant__card--description">
            <p class="restaurant__card--rating">★ 4.8</p>
            <p class="restaurant__card--name">Pangsit Express</p>
          </div>
        </article>
        <article tabindex="0" class="restaurant--card">
          <div class="restaurant__card--header">
            <img
              src="https://restaurant-api.dicoding.dev/images/medium/38"
              alt="Ducky Duck Restaurant Image"
            />
            <p>Malang</p>
          </div>
          <div class="restaurant__card--description">
            <p class="restaurant__card--rating">★ 4.7</p>
            <p class="restaurant__card--name">Ducky Duck</p>
          </div>
        </article>
        <article tabindex="0" class="restaurant--card">
          <div class="restaurant__card--header">
            <img
              src="https://restaurant-api.dicoding.dev/images/medium/40"
              alt="Kafein Restaurant Image"
            />
            <p>Bali</p>
          </div>
          <div class="restaurant__card--description">
            <p class="restaurant__card--rating">★ 3.8</p>
            <p class="restaurant__card--name">Kafein</p>
          </div>
        </article>
        <article tabindex="0" class="restaurant--card">
          <div class="restaurant__card--header">
            <img
              src="https://restaurant-api.dicoding.dev/images/medium/08"
              alt="Makan Mudah Restaurant Image"
            />
            <p>Malang</p>
          </div>
          <div class="restaurant__card--description">
            <p class="restaurant__card--rating">★ 4.6</p>
            <p class="restaurant__card--name">Makan Mudah</p>
          </div>
        </article>
      </div>
    </section>
    `;
  }
}

customElements.define("restaurant-list", RestaurantList);
