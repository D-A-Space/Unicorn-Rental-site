let uniCardsSec = document.getElementById("uniSec");
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

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
      <button onClick="bookRide(${unicron.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="bookBtn">Uni Book</button>
    </div>
    <img id="uniImg" src="${unicron.img}" alt="" />
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

// uni book button functionality
const text = document.getElementById("offcanvasBottomLabel");
function bookRide(id) {
  fetch("./media/data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((uni) => {
        if (uni.id == id) {
          text.innerHTML = uni.name;
        }
      });
    });
}
// ---------------------------------

let dateFrom = document.getElementById("dateFrom");
let dateTo = document.getElementById("dateTo");
let form1 = document.getElementById("bookForm");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let userInfo = JSON.parse(localStorage.getItem("Logged In"));
  console.log(text.innerHTML);
  console.log(dateFrom.value);
  console.log(dateTo.value);
  if (userInfo) {
    window.open(
      `https://web.whatsapp.com/send?phone=962778086357&text=Hello%20there%20I%27m%20${userInfo.name}%20I%20found%20this%20amazing%20unicorn%20called%20${text.innerHTML}%20and%20I%20would%20like%20to%20spend%20some%20time%20with%20them%20from%20${dateFrom.value}%20to%20${dateTo.value}`,
      "_blank"
    );
  } else {
    alert("Please register first");
  }
});

function us() {
  let main = document.querySelector("main");
  main.appendChild = `<div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>`;
}
// us();/
