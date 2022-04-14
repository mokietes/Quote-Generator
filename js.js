const twitterButton = document.querySelector("#js-tweet");

//const rec = document.getElementsByClassName("rect1 rect2");
const spinner = document.querySelector("#js-spinner");
const newQuoteButton = document.querySelector("#js-new-quote");
//rec3.style.backgroundColor = "white";
newQuoteButton.addEventListener("click", getQuote);

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote() {
  //spinner.classList.add("spinner hidden");
  //spinner.classList.remove("hidden");
  newQuoteButton.disabled = true;

  try {
    spinner.style.display = "block";
    //spinner.classList.remove("hidden");

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    displayQuote(json.message);
  } catch {
    alert("Failed to fetch new quote");
  } finally {
    newQuoteButton.disabled = false;
    spinner.style.display = "none";
    //spinner.classList.add("hidden");
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}
function setTweetButton(quote) {
  twitterButton.setAttribute(
    "href",
    "https://twitter.com/share?text=${quote} - Donald Trump"
  );
}
