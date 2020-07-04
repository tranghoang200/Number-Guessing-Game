let button = document.getElementById("guessButton");
let ul = document.getElementById("pastGuess");
let messageId = document.getElementById("message");
let messageGuess = document.getElementById("numGuess");
let heart = document.getElementById('gueesLeft');

let random = Math.floor(Math.random() * 100) + 1;
let pastGuess = [];
let numGuess = 10;
let finish = false;

for (let index = 0; index < numGuess; index++) {
    let heartSign = document.createElement("li");
    heartSign.innerHTML = '<i class="fas fa-heart heart"></i>';
    heart.appendChild(heartSign);
}

console.log(random);
button.addEventListener("click", function() {
    let userGuess = parseInt(document.getElementById("number").value);
    numGuess--;
    // let li = document.createElement("li");
    // li.innerHTML =  userGuess;
    // ul.append(li);
    pastGuess.push(userGuess);
    let message = "";
    if(userGuess < random) {
        message = "Sorry your guess is too low.";
        messageId.className = "red";
    } else if(userGuess > random) {
        message = "Sorry your guess is too high.";
        messageId.className = "red";
    } else {
        message = "Congratulations!! You guessed correctly.";
        messageId.className = "green";
        finish = true;
    }

    messageId.innerHTML = message;
    messageGuess.innerHTML = "You have "+numGuess + " guesses left.";
    heart.removeChild(heart.childNodes[heart.childNodes.length-1]);

    if(numGuess == 0) {
        finish = true;
        messageId.innerHTML = "You lose!!!"
    }

    if(finish) {
        button.disabled = true;

        let ul = document.getElementById("pastGuess");
        let li = document.createElement("li");
        li.innerHTML = 'Past Guesses: ';
        ul.append(li);
        pastGuess.map((item) => {
        li = document.createElement("li");
        li.innerHTML =  `${item} `;
        ul.append(li);
        })
    }

})

