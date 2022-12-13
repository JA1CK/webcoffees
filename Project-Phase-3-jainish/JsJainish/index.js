let cartLists = ["ice cream@$11.00", "coffee@$8.00", "sandwich@$15.00"];

let homeImagesArray = [
  'home-img-1.jpeg',
  'home-img-2.jpg',
  'home-img-3.jpg',
  'home-img-4.jpg',
  'home-img-5.jpg',
  'home-img-6.jpg'
];

let teamArray = [
  "Manager@His name is John. He is amazing manager.",
  "Barista@Her name is Joy. She is the best coffee manker.",
  "Chef@His name is Max. He makes delicious food."
];

let cartItem = document.querySelector(".cart-items-container");

function showCart() {
    cartItem.classList.toggle("active");

    let cart = "";
    cartLists.forEach((a) => {
      cart += `<div class="cart-item">
      <div class="content">
        <span class="fas fa-times" onclick="deleteCart(this)"></span>
        <h3>${a.slice(0, a.indexOf("@"))}</h3>
        <div class="price">${a.slice(a.indexOf("@")+1)}/-</div>
      </div>
      </div>`;
    });
    document.getElementById("cartItems").innerHTML = cart;  

    if(cartLists.length < 1){
        document.getElementById("cartItems").innerHTML = "<h1>No Items in Cart</h1>";
        document.getElementById("checkOutBtn").style.pointerEvents = "none";
        document.getElementById("checkOutBtn").style.backgroundColor = "black";
        document.getElementById("checkOutBtn").style.color = "white";    }
};

function deleteCart(a) {
    itemDeleteWith$ = a.nextElementSibling.innerHTML+"@"+a.nextElementSibling.nextElementSibling.innerHTML;
    itemDelete = itemDeleteWith$.slice(0,itemDeleteWith$.indexOf("/"));
    cartLists.splice(cartLists.indexOf(itemDelete),1);
    showCart();
    showCart();
}   

function checkOut() {
    cartLists.length = 0;
    alert("You Successfully checkout. Thank You!")
    showCart();
    showCart();
}

function addCart(item) {
    let itemName = item.parentElement.childNodes[3].innerHTML;
    let itemCost = item.parentElement.childNodes[5].innerHTML; 

    cartLists.push(itemName+"@"+itemCost.slice(0,itemCost.indexOf("/")));
    console.log(cartLists);
    showCart();
    cartItem.classList.add('active');

    document.getElementById("checkOutBtn").style.pointerEvents = "auto";
    document.getElementById("checkOutBtn").style.backgroundColor = "#d3ad7f";
    document.getElementById("checkOutBtn").style.color = "white";
}

let ImageNumber = 0;
let difference = homeImagesArray.length - 1;

let delay = 3000; //milliseconds    

setInterval('ChangeImages(1)', delay);

function ChangeImages(direction) {

  ImageNumber = ImageNumber + direction;

  if (ImageNumber > difference) {
    ImageNumber = 0;
  }

  if (ImageNumber < 0) {
    ImageNumber = difference;
  }

  document.getElementById('contentH3').style.color = "white";
  document.getElementById('contentP').style.color = "white";

  document.getElementById('home').style =   `
  background: url(/webcoffees/Project-Phase-3-jainish/imagesJainish/${homeImagesArray[ImageNumber]}) no-repeat;
  background-size: cover;
  background-position: center;`;
  
  if(ImageNumber == 3){
    document.getElementById('contentP').style.color = "black";
    document.getElementById('contentH3').style.color = "black";
  }
}

function showContent(ref,i) {
  ref.innerHTML = `<h1 class="onmouse-h1">${teamArray[i-1].slice(0, teamArray[i-1].indexOf("@"))}</h1>
  <h3 class="onmouse-h3">${teamArray[i-1].slice(teamArray[i-1].indexOf("@")+1)}</h3>`;
}

function showImage(ref,i) {
  ref.innerHTML = `<img src="/webcoffees/Project-Phase-3-jainish/imagesJainish/barista-${i}.jpg" alt="team-member-${i}"/>`;
}