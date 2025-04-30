
//yoshi quotes
function generateYoshiQuote1() {
    const quotes = [
        '"Mario!!! Itthat really you???"',
        '"I know! We should team up!"',
        '"Hooray! Thank you for rescuing me"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteYoshiGenerator1").textContent = randomQuote;
}

function generateYoshiQuote2() {
    const quotes = [
        '"Yoshi, Yoshi!"',
        '"YOSHI, FAIRY OF DRAGON FLAME!!!"',
        '"Oh, kukumba! Mama Fireplant lives on the other side of the river, AND I SCARED OF WATER!!!"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteYoshiGenerator2").textContent = randomQuote;
}

function generateYoshiQuote3() {
    const quotes = [
        '"Hey! Wheres Hongo? And where did the spirit who loves surprises go?"',
        '"Ohhhh, not bad! Deeeeeelicious!"',
        '"Doom? What is doom?"'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteYoshiGenerator3").textContent = randomQuote;
}


window.onload = generateYoshiQuote1(), generateYoshiQuote2(), generateYoshiQuote3();
//end of yoshi quotes

