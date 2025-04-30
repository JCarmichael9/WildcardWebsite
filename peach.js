
//peach quotes
function generatePeachQuote1() {
    const quotes = [
        '"Peachy!"',
        '"Yay!"',
        '"Thank you for rescuing me, Mario!"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quotePeachGenerator1").textContent = randomQuote;
}

function generatePeachQuote2() {
    const quotes = [
        '"Peach!"',
        '"Help Me PLease!"',
        '"Yay, I Did It!"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quotePeachGenerator2").textContent = randomQuote;
}

function generatePeachQuote3() {
    const quotes = [
        '"Yeah! Peachys got it!"',
        '"No......NOOOOOOOOOOOO!"',
        '"Dear Mario, Please come to the castle, I have a cake for you."'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quotePeachGenerator3").textContent = randomQuote;
}


window.onload = generatePeachQuote1(), generatePeachQuote2(), generatePeachQuote3();
//end of peach quotes
