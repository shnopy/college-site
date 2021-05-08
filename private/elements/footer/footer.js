class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="flex-row flex-centre">
      <a href="home.html" class="home-button">
        <img style="margin-top: 5px;" src="https://i.imgur.com/k26YHxs.png" alt="logo">
      </a>
      
      <div>
        <div class="flex-column" id="opening-times">
          <h3>Opening Times</h3>      
          <li>Gym: 6am to 10pm</li>
          <li>Swimming Pool: 7.30am to 12pm and 2pm to 9pm</li>
          <li>Multipurpose Room: available for booking between 8am and 8pm</li>
          <li>Squash Courts: booking from 8am to 8pm in 30 minute slots</li>
        </div>

      <div class="flex-row flex-centre" id="copyright-info">
          <textlink-item link="privacy" text="Privacy Policy" class="bottom-text"></textlink-item>
          <span>© Copyright 2021</span>
          <span>|</span>
          <span>0118 999 881 999 119 725 3</span>  
        </div>
      </div>
    
    
      <nav id="socialmedia" class="flex-row">
        <a href="https://facebook.com" target="_blank"><img src="https://i.imgur.com/FMy0RBW.png" /></a>
        <a href="https://instagram.com" target="_blank"><img src="https://i.imgur.com/Wrh85rZ.png" /></a>
        <a href="https://twitter.com" target="_blank"><img src="https://i.imgur.com/dUPTVGb.png" /></a>
      </nav>
    </footer>
  `
  }
}

customElements.define("footer-custom", Footer);