class TextLink extends HTMLElement {
  connectedCallback() {
    let currentPage = window.location.pathname.split("/").pop().split(".")[0];
    this.innerHTML = `     
      <a class=${this.attributes.link.value === currentPage ? "italic-strong" : "normal"} href=${this.attributes.link.value === currentPage ? "#" : `${this.attributes.link.value.toLowerCase()}.html`}>${this.attributes.text.value}</a>
      <span>|</span>
     `;
  }
}

customElements.define("textlink-item", TextLink);