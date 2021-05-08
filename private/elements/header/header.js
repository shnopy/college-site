class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>    
      <nav class="flex-row flex-centre">
        <a href="home.html" class="home-button">
          <img style="margin-top: 5px;" src="https://i.imgur.com/k26YHxs.png" alt="logo">
        </a>
        
        <div id="header-buttons">
          <header-link link="about" text="About"></header-link>
          <header-link link="contact" text="Contact"></header-link>
          <header-link link="booking" text="Booking page"></header-link>
          <header-link link="calendar" text="Calender"></header-link>
          <header-link link="login" text="Log in / Sign up"></header-link>
          <button class="button-dark" id="scroll-top" style="display: none"><a>Scroll to top</a></button>
        </div>
      </nav>
    </header>`

    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-top").style.display = "";
      } else {
        document.getElementById("scroll-top").style.display = "none";
      }
    }

    document.getElementById("scroll-top").onclick = () => {
      document.documentElement.scrollTop = 0;
    };
  }

}

customElements.define("header-custom", Header);