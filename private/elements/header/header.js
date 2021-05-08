class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>    
      <nav class="flex-row flex-centre">
        <a href="home.html" class="home-button hide">
          <img style="margin-top: 5px;" src="https://i.imgur.com/k26YHxs.png" alt="logo" minwidth="1%">
        </a>
        
        <div id="header-buttons">
          <header-link link="about" text="About"></header-link>
          <header-link link="contact" text="Contact"></header-link>
          <header-link link="booking" text="Booking page"></header-link>
          <header-link link="calendar" text="Calender"></header-link>
          <header-link link="login" text="Log in / Sign up"></header-link>
          <button class="button-dark" id="scroll-top" style="visibility: hidden;"><a>Scroll to top</a></button>
        </div>
      </nav>
    </header>`
    let elementsToHide = document.getElementsByClassName("hide");

    function checkHidden() {
      console.log(window.innerWidth);
      if (window.innerWidth < 1074) {
        for (let i = 0; i < elementsToHide.length; i++) {
          elementsToHide[i].style.visibility = "hidden";
        }
      } else {
        for (let i = 0; i < elementsToHide.length; i++) {
          elementsToHide[i].style.visibility = "visible";
        }
      }
    }

    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-top").style.visibility = "visible";
      } else {
        document.getElementById("scroll-top").style.visibility = "hidden";
      }
    }

    document.getElementById("scroll-top").onclick = () => {
      document.documentElement.scrollTop = 0;
    };

    window.onresize = () => {
      checkHidden();
    };
    window.onload = checkHidden();
  }

}

customElements.define("header-custom", Header);