let cartLists = ["ice cream@$11.00", "coffee@$8.00", "sandwich@$15.00"];

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

