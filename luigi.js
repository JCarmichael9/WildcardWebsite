
//luigi quotes
function generateLuigiQuote1() {
    const quotes = [
        '"Oh yeah!"',
        '"Okey Dokey!"',
        '"Luigi number one!" (Even though hes always player 2)',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteLuigiGenerator1").textContent = randomQuote;
}

function generateLuigiQuote2() {
    const quotes = [
        '"Watch out for-a Luigi!"',
        '"Mamma Mia!"',
        '"Lets a go!"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteLuigiGenerator2").textContent = randomQuote;
}

function generateLuigiQuote3() {
    const quotes = [
        '"I hope she made a lotsa spagghetti!"',
        '"Luigi is the top!"',
        '"Bingo! Oh ho ho ho!"'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteLuigiGenerator3").textContent = randomQuote;
}


window.onload = generateLuigiQuote1(), generateLuigiQuote2(), generateLuigiQuote3();
//end of luigi quotes
