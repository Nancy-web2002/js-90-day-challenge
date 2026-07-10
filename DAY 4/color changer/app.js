let color =["Pink", "Red", "Orange", "Green", "Blue"];
let colorDisplay = document.getElementById("display");
let changerBtn = document.getElementById("changeBtn");

changerBtn.addEventListener("click", function(){
    let randomIndex = Math.floor(Math.random() * color.length);
    let randomColor = color[randomIndex];
    colorDisplay.innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;
})