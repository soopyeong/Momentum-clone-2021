const quotes = [
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    quote: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
  {
    quote: "Lay a firm foundation with the bricks that others throw at you.",
    author: "David Brinkley",
  },
  {
    quote:
      "If you run stand a chance of losing, but if you don’t run you’ve already lost.",
    author: "Barack Obama",
  },
  {
    quote: "Only I can change my life. No one can do It for me.",
    author: "Carol Burnett",
  },
  {
    quote: "Things change. And friends leave. Life doesn’t stop for anybody.",
    author: "Stephen Chbosky",
  },
];

const quote = document.querySelector(".quote span:nth-child(2)");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
