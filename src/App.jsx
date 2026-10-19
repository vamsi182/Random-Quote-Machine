
import { useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

function getRandomQuote(currentQuote) {
  const availableQuotes = quotes.filter(
    (quote) => quote.text !== currentQuote?.text
  );

  const randomIndex = Math.floor(
    Math.random() * availableQuotes.length
  );

  return availableQuotes[randomIndex];
}

function App() {
  const [quote, setQuote] = useState(() => getRandomQuote(null));

  function handleNewQuote() {
    setQuote((currentQuote) => getRandomQuote(currentQuote));
  }

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" — ${quote.author}`
  )}`;

  return (
    <main className="page">
      <section id="quote-box">
        <p className="eyebrow">A LITTLE INSPIRATION</p>

        <div className="quote-mark" aria-hidden="true">
          “
        </div>

        <div id="text">{quote.text}</div>

        <div className="author-line">
          <span className="author-dash"></span>
          <div id="author">{quote.author}</div>
        </div>

        <div className="divider"></div>

        <div className="actions">
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Tweet this quote"
            title="Share this quote on Twitter"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.1 4.1 0 0 0 1.8-2.27 8.18 8.18 0 0 1-2.6.99 4.08 4.08 0 0 0-6.95 3.72A11.58 11.58 0 0 1 3.48 4.75a4.08 4.08 0 0 0 1.26 5.44 4.05 4.05 0 0 1-1.85-.51v.05a4.09 4.09 0 0 0 3.27 4 4.1 4.1 0 0 1-1.84.07 4.1 4.1 0 0 0 3.82 2.84A8.2 8.2 0 0 1 2.1 18.3a11.56 11.56 0 0 0 17.8-9.74v-.53A8.25 8.25 0 0 0 22 5.92Z" />
            </svg>
          </a>

          <button
            id="new-quote"
            type="button"
            onClick={handleNewQuote}
          >
            New Quote <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>

      <footer>PAUSE · REFLECT · KEEP GOING</footer>
    </main>
  );
}

export default App;
