//& HTML ELelements

var Quote = document.getElementById("Quote");

var Author = document.getElementById("Author");

var authorImage = document.getElementById("authorImage");

var generateBtn = document.getElementById("Generate");

//* variables

var usedIndex = [];
var randomIndex = 0;

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
    image: `<img src="../Images/1.jpg" class="rounded-circle w-100  ">`,
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
    image: `<img src="../Images/2.jpg" class="rounded-circle w-100 ">`,
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
    image: `<img src="../Images/3.jpg" class="rounded-circle w-100 ">`,
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
    image: `<img src="../Images/4.jpg" class="rounded-circle w-100 ">`,
  },
  {
    quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
    image: `<img src="../Images/4.jpg" class="rounded-circle w-100 ">`,
  },
  {
    quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "― Oscar Wilde, The Happy Prince and Other Stories",
    image: `<img src="../Images/1.jpg" class="rounded-circle w-100 ">`,
  },
  {
    quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "― Ralph Waldo Emerson",
    image: `<img src="../Images/5.jpg" class="rounded-circle w-100 ">`,
  },
  {
    quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "― Andre Gide, Autumn Leaves",
    image: `<img src="../Images/6.jpg" class="rounded-circle w-100 ">`,
  },
];

localStorage.setItem("quotes", JSON.stringify(quotes));

//^ Functions

function showQuote() {
  randomIndex = Math.floor(Math.random() * quotes.length);

  if (usedIndex.length == quotes.length) {
    alert("You have seen all the quotes , refresh the page to see them again");
  }

  while (usedIndex.includes(randomIndex)) {
    randomIndex++;
  }
  var randomQuote = quotes[randomIndex];
  Quote.innerHTML = randomQuote.quote;
  Author.innerHTML = randomQuote.author;
  authorImage.innerHTML = randomQuote.image;
  usedIndex.push(randomIndex);
  
}

showQuote();

//! Events

generateBtn.onclick = showQuote;
