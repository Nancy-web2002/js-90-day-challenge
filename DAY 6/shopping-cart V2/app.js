let item = document.getElementById("item");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let table = document.getElementById("cartTable");
let button = document.getElementById("quantityBtn");
let body = document.getElementById("cartBody");
let total = document.getElementById("total");
let add = document.getElementById("addBtn");
let shopping = JSON.parse(localStorage.getItem("shopping")) || [];
add.addEventListener("click", function() {
    let list = {
        item: item.value,
        price:Number(price.value),
        quantity: Number(quantity.value)
      };
  shopping.push(list);
  localStorage.setItem("shopping", JSON.stringify(shopping));
  renderShopping();
  item.value = "";
price.value = "";
quantity.value = "";
});  
function renderShopping() {
    body.innerHTML = "";
    let totalPrice = 0;
  
    for (let i = 0; i < shopping.length; i++) {
        let { item, price, quantity } = shopping[i];

        let row = document.createElement("tr");
        row.innerHTML = "<td>" + item + "</td><td>" + price + "</td><td>" + quantity+ "</td>";
        let increaseBtn = document.createElement("button");
increaseBtn.innerHTML = "+";
increaseBtn.addEventListener("click", function() {
  shopping[i].quantity = shopping[i].quantity + 1;
  localStorage.setItem("shopping", JSON.stringify(shopping));
  renderShopping();
});
row.appendChild(increaseBtn);
let decreaseBtn = document.createElement("button");
decreaseBtn.innerHTML = "-";
decreaseBtn.addEventListener("click", function() {
  shopping[i].quantity = shopping[i].quantity - 1;
  localStorage.setItem("shopping", JSON.stringify(shopping));
  renderShopping();
});
row.appendChild(decreaseBtn);
let removeBtn = document.createElement("button");
removeBtn.innerHTML = "Remove";
removeBtn.addEventListener("click", function() {
    shopping.splice(i, 1); 
  localStorage.setItem("shopping", JSON.stringify(shopping));
  renderShopping();
});
row.appendChild(removeBtn);
        body.appendChild(row);
        
        totalPrice = totalPrice + (price* quantity);
    }
  
    total.innerHTML = "Total Price: " + totalPrice;
  }
  renderShopping()