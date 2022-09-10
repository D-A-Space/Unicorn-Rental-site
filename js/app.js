// https://stackoverflow.com/questions/47243154/how-to-send-whatsapp-message-via-javascript
// {
//   "name":"",
//   "age":"",
//   "description":"",
//   "skills":"",
//   "price":"",
//   "img":"",
//   "species":""
// },
let uniCardsSec = document.getElementById("uniSec");

class Unicorn {
  constructor(uniName, age, description, skills, price, img, tag) {
    this.uniName = uniName;
    this.age = age;
    this.description = description;
    this.skills = skills;
    this.price = price;
    this.img = img;
    this.tag = tag;
  }
}
let unicornOne = new Unicorn(
  "a111111sdas",
  "Asdasda",
  "asdasdasd",
  "asdas",
  "asdasd",
  "./media/h1.png",
  "dadasd"
);
console.log(unicornOne);

function unicornCard(unicron) {
  uniCardsSec.innerHTML += ` <div class="uni-card">
    <div id="uniCardInfo">
      <p id="U-Name">Name: ${unicron.name}</p>
      <p id="U-Age">Age: ${unicron.age} years</p>
      <p id="U-Description">
        Description: ${unicron.description}.
      </p>
      <p id="U-Skills">
        Skills: ${unicron.skills}
      </p>
      <p id="U-Price">
        Price: ${unicron.price}
        <span><img id="coin-img" src="./media/coin.png" alt="" /></span>
      </p>
      <button class="bookBtn" id="${unicron.tag}">Uni Book</button>
    </div>
    <img src="${unicron.img}" alt="" />
  </div>`;
}

function getData() {
  fetch("./media/data.json")
    .then((res) => res.json())
    .then((data) => uniCardsJson(data));
}
function uniCardsJson(data) {
  data.forEach((element) => {
    unicornCard(element);
  });
}
getData();
