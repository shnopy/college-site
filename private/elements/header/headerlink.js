class HeaderLink extends HTMLElement {
  connectedCallback() {
    let currentPage = window.location.pathname.split("/").pop().split(".")[0];

    document.title = `${currentPage.charAt(0).toUpperCase()}${currentPage.slice(1)}`;

    this.innerHTML = `
      <button class="button-dark"> 
        <a class=${this.attributes.link.value === currentPage ? "italic-strong" : "normal"} href=${this.attributes.link.value === currentPage ? "#" : `${this.attributes.link.value.toLowerCase()}.html`}>${this.attributes.text.value}</a> 
      </button>
      
      <span>|</span>`;
  }
}

customElements.define("header-link", HeaderLink);