const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes";

async function getquote(url) {
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data.quotes);

    // Select a random quote from the array of quotes
    let randomIndex = Math.floor(Math.random() * data.quotes.length);
    let randomQuote = data.quotes[randomIndex];

    quote.innerHTML = randomQuote.quote;
    author.innerHTML = `-- ${randomQuote.author}`;
}

function next(){
    window.location.reload();
}

getquote(api_url);

