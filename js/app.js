// https://stackoverflow.com/questions/47243154/how-to-send-whatsapp-message-via-javascript
let uniCardsSec = document.getElementById("uniSec");
function unicornCard() {
  uniCardsSec.innerHTML += ` <div class="uni-card">
    <div id="uniCardInfo">
      <p id="U-Name">Name: Start Unicorn</p>
      <p id="U-Age">Age: 300 years</p>
      <p id="U-Description">
        Description: Cute magical unicorn came all the from another far
        galaxy to join us on earth and make it a better place
      </p>
      <p id="U-Skills">
        Skills: This unicorn can take you all the way to the moon and back
        within just 3 minutes
      </p>
      <p id="U-Price">
        Price: 300
        <span><img id="coin-img" src="./media/coin.png" alt="" /></span>
      </p>
      <button class="bookBtn" id="">Uni Book</button>
    </div>
    <img src="./media/Sternen-e1438085763717.webp" alt="" />
  </div>`;
}
unicornCard();
unicornCard();
