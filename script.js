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
        '"Yesterday is not ours to recover, but tomorrow is ours to win or lose." - Johnson',
        '"The noblest search is the search for excellence." - Johnson',
        '"If we stand tall it is because we stand on the backs of those who came before us." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator1").textContent = randomQuote;
}

function generateQuote2() {
    const quotes = [
        '"You might say that Lyndon Johnson is a cross between a Baptist preacher and a cowboy." - Johnson',
        '"We can draw lessons from the past, but we cannot live in it." - Johnson',
        '"This administration here and now declares unconditional war on poverty in America." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator2").textContent = randomQuote;
}

function generateQuote3() {
    const quotes = [
        '"If you can convince the lowest white man he’s better than the best colored man, he won’t notice you’re picking his pocket." - Johnson',
        '"The vote is the most powerful instrument ever devised by man for breaking down injustice." - Johnson',
        '"We must open the doors of opportunity. But we must also equip our people to walk through those doors." - Johnson'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator3").textContent = randomQuote;
}


window.onload = generateQuote1(), generateQuote2(), generateQuote3();
//end of mario quotes


//peach quotes
function generateQuote1() {
    const quotes = [
        '"Yesterday is not ours to recover, but tomorrow is ours to win or lose." - Johnson',
        '"The noblest search is the search for excellence." - Johnson',
        '"If we stand tall it is because we stand on the backs of those who came before us." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator1").textContent = randomQuote;
}

function generateQuote2() {
    const quotes = [
        '"You might say that Lyndon Johnson is a cross between a Baptist preacher and a cowboy." - Johnson',
        '"We can draw lessons from the past, but we cannot live in it." - Johnson',
        '"This administration here and now declares unconditional war on poverty in America." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator2").textContent = randomQuote;
}

function generateQuote3() {
    const quotes = [
        '"If you can convince the lowest white man he’s better than the best colored man, he won’t notice you’re picking his pocket." - Johnson',
        '"The vote is the most powerful instrument ever devised by man for breaking down injustice." - Johnson',
        '"We must open the doors of opportunity. But we must also equip our people to walk through those doors." - Johnson'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator3").textContent = randomQuote;
}


window.onload = generateQuote1(), generateQuote2(), generateQuote3();
//end of peach quotes


//yoshi quotes
function generateQuote1() {
    const quotes = [
        '"Yesterday is not ours to recover, but tomorrow is ours to win or lose." - Johnson',
        '"The noblest search is the search for excellence." - Johnson',
        '"If we stand tall it is because we stand on the backs of those who came before us." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator1").textContent = randomQuote;
}

function generateQuote2() {
    const quotes = [
        '"You might say that Lyndon Johnson is a cross between a Baptist preacher and a cowboy." - Johnson',
        '"We can draw lessons from the past, but we cannot live in it." - Johnson',
        '"This administration here and now declares unconditional war on poverty in America." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator2").textContent = randomQuote;
}

function generateQuote3() {
    const quotes = [
        '"If you can convince the lowest white man he’s better than the best colored man, he won’t notice you’re picking his pocket." - Johnson',
        '"The vote is the most powerful instrument ever devised by man for breaking down injustice." - Johnson',
        '"We must open the doors of opportunity. But we must also equip our people to walk through those doors." - Johnson'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator3").textContent = randomQuote;
}


window.onload = generateQuote1(), generateQuote2(), generateQuote3();
//end of yoshi quotes


//luigi quotes
function generateQuote1() {
    const quotes = [
        '"Yesterday is not ours to recover, but tomorrow is ours to win or lose." - Johnson',
        '"The noblest search is the search for excellence." - Johnson',
        '"If we stand tall it is because we stand on the backs of those who came before us." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator1").textContent = randomQuote;
}

function generateQuote2() {
    const quotes = [
        '"You might say that Lyndon Johnson is a cross between a Baptist preacher and a cowboy." - Johnson',
        '"We can draw lessons from the past, but we cannot live in it." - Johnson',
        '"This administration here and now declares unconditional war on poverty in America." - Johnson',
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator2").textContent = randomQuote;
}

function generateQuote3() {
    const quotes = [
        '"If you can convince the lowest white man he’s better than the best colored man, he won’t notice you’re picking his pocket." - Johnson',
        '"The vote is the most powerful instrument ever devised by man for breaking down injustice." - Johnson',
        '"We must open the doors of opportunity. But we must also equip our people to walk through those doors." - Johnson'
    ];

    // Pick a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Display it in the element with ID "quote"
    document.getElementById("quoteGenerator3").textContent = randomQuote;
}


window.onload = generateQuote1(), generateQuote2(), generateQuote3();
//end of luigi quotes


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
