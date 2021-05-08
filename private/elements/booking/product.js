class Product extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form method="POST">
        <fieldset>
          <legend>${this.attributes.title.value}</legend>
          ${this.attributes.content.value}
          <button type="submit" class="button-light" id="submit-button">Book</button>
        </fieldset>     
      </form>
    `;
  }
}

customElements.define("page-product", Product);