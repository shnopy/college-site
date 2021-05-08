class Box extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <form class="box">
      <fieldset>
        <legend>${this.attributes.header.value}</legend>
          ${this.attributes.image && this.attributes.image.value.length > 0 ? `<img src=${this.attributes.image.value} alt=${this.attributes.alt && this.attributes.alt.value.length > 0 ? this.attributes.alt.value : ""}>` : ""}
          ${this.attributes.text && this.attributes.text.value.length > 0 ? `<p>${this.attributes.text.value}</p>` : ""}     
          ${this.attributes.custom && this.attributes.custom.value.length > 0 ? `${this.attributes.custom.value}` : ""}
      </fieldset>
    </form>
  `;
  }
}

customElements.define("box-custom", Box);