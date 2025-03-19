

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "-Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "-John Lennon",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "-Abraham Lincoln",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "-Thomas A. Edison",
  },
];


var bodyElement = document.getElementById("quoute");
var authorElement = document.getElementsByClassName("author");


function generateQuote() {
  // console.log();
  var index = Math.floor(Math.random() * quotes.length);
// 0.7*4=2.8 =~ 2
//0.99 *4=3.96 =~ 3
// 0 *4=0
// 1 *4=4


  bodyElement.textContent = quotes[index].quote;
  authorElement[0].textContent = quotes[index].author;
}
generateQuote();



