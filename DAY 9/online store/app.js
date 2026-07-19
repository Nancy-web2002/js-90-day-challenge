let productName = document.getElementById("productName");
let price = document.getElementById("price");
let category = document.getElementById("productCategory");
let addProduct = document.getElementById("addBtn");
let searchInput = document.getElementById("search");
let filter = document.getElementById("filterCategory");
let sort = document.getElementById("sortBtn")
let table = document.getElementById("productTable");
let body = document.getElementById("productBody");
let stats = document.getElementById("stats");
let products = JSON.parse(localStorage.getItem("products")) || [];
addProduct.addEventListener("click", function() {
    let newProduct = {
        productName: productName.value,
        price: Number(price.value),
        category: category.value
      };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  updateCategoryOptions();
  renderProducts();
  productName.value = "";
price.value = "";
category.value = "";
});
function updateCategoryOptions() {
    let categories = products.map(product => product.category);
    let uniqueCategories = [...new Set(categories)];
  
    filter.innerHTML = '<option value="">All</option>';
    uniqueCategories.forEach(cat => {
      let option = document.createElement("option");
      option.innerHTML = cat;
      filter.appendChild(option);
    });
  }
  let sortAscending = true;

function renderProducts() {

  let searchTerm = searchInput.value.trim().toLowerCase();
  let selectedCategory = filter.value;

  let filtered = products.filter(product => {
    let matchesSearch = product.productName.toLowerCase().includes(searchTerm);
    let matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  body.innerHTML = "";
  filtered.forEach(product => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${product.productName}</td><td>${product.price}</td><td>${product.category}</td>`;

    let removeCell = document.createElement("td");
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.addEventListener("click", function() {
      let index = products.indexOf(product);
      products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(products));
      updateCategoryOptions();
      renderProducts();
    });
    removeCell.appendChild(removeBtn);
    row.appendChild(removeCell);
    body.appendChild(row);
  });

  let total = products.reduce((sum, product) => sum + product.price, 0);
  stats.innerHTML = `Total Products: ${products.length} | Total Value: ${total}`;
}
sort.addEventListener("click", function() {
    if (sortAscending) {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }
    sortAscending = !sortAscending;
    renderProducts();
  });
searchInput.addEventListener("input", renderProducts);
filter.addEventListener("change", renderProducts);
updateCategoryOptions();
renderProducts()