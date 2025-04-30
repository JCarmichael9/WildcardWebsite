//found this loading bar//
let width = 0;
        let bar = document.getElementById("myBar");
        let loading = setInterval(fillBar, 50); // fills in about 5 seconds

        function fillBar() {
            if (width >= 100) {
                clearInterval(loading);
                document.getElementById("openWebsiteBtn").style.display = "block"; // show button
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }
//end of loading bar//

//mario quotes
function generateQuote1() {
    const quotes = [
        '"Its a-me, Mario!"',
        '"Wahoo!"',
        '"Mario Time!"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator1").textContent = randomQuote;
}

function generateQuote2() {
    const quotes = [
        '"Mamma Mia!',
        '"Here We Go!"',
        '"Mario Number 1!"',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator2").textContent = randomQuote;
}

function generateQuote3() {
    const quotes = [
        '"Im a tired" - James in a Mario accent at 1:00 AM 4/29',
        '"Nighty nighty... Ah, spaghetti... Ah, ravioli... Ah, mamma mia.."',
        '"Buh-Bye!"'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator3").textContent = randomQuote;
}


window.onload = generateQuote1(), generateQuote2(), generateQuote3();
//end of mario quotes




//quiz stuff i got help with this i didn't know how to do it ngl and im on a time crunch rn you get what you get im copying it from my president website//
function checkAnswers() {
    let score = 0;
    let answer1 = document.querySelector('input[name="q1"]:checked');
    let answer2 = document.querySelector('input[name="q2"]:checked');
    let answer3 = document.querySelector('input[name="q3"]:checked');
    let answer4 = document.querySelector('input[name="q4"]:checked');
    
    if (answer1 && answer1.value === "b") score++;
    if (answer2 && answer2.value === "a") score++;
    if (answer3 && answer3.value === "a") score++;
    if (answer4 && answer4.value === "a") score++;
    
    document.getElementById("result").innerText = `You scored ${score}/4!`;
}
