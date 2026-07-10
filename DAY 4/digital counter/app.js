let countDisplay = document.getElementById("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let count = 0;
incrementBtn.addEventListener("click", function() {
    count++; countDisplay.innerHTML = count;
  });
decrementBtn.addEventListener("click", function(){
    count--; countDisplay.innerHTML = count;
});
resetBtn.addEventListener("click", function(){
    count=0; countDisplay.innerHTML = count;
})