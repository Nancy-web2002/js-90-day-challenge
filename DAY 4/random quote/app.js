let quotes = ["A snitch in time saves nine", "Good turns desrves another", "Good Better Best", "Don't give up", "Look in the mirror"];
let quoteDisplay = document.getElementById("quoteDisplay");
let generate = document.getElementById("newQuoteBtn");

generate.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = randomQuote;
});