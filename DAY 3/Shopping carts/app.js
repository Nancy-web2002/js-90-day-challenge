let carts = [
    { name: "Milk", price: 15, quantity: 6 },
    { name: "Bread", price: 20, quantity: 2 },
    { name: "Apple", price: 100, quantity: 4 },
    { name: "Snack", price: 15, quantity: 1 },
];
let totalItems = 0;
  for (let i = 0; i < carts.length; i++) {
   totalItems= totalItems + carts[i].quantity;
    }
  console.log(totalItems);

  let totalCost = 0;
  for(let i =0; i< carts.length; i++){
    totalCost = carts[i].price * carts[i].quantity + totalCost;
    }
  console.log(totalCost);

  let itemCost = 0;
  for (let i = 0; i < carts.length; i++) {
    itemCost = carts[i].price * carts[i].quantity;
    console.log(carts[i].name + ":" + carts[i].price + "*" + carts[i].quantity + "=" + itemCost);
  }
