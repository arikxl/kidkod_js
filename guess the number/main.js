const maxNumberSpan = document.getElementById('maxNumberSpan');
const noOfGuessesSpan = document.getElementById('noOfGuessesSpan');
const guessedNumbersSpan = document.getElementById('guessedNumbersSpan');
const guessInput = document.getElementById('guessInput');
const hint = document.getElementById('hint');
const result = document.getElementById('result');


let MAX = 10;
let guessCount = 0;
let guessNumbers = [];
let computerGuess = Math.floor(Math.random() * MAX+1)

function guess() {
    const guess = +guessInput.value;
    if(guess===0) return
    console.log('computerGuess:', computerGuess)
    if (guess === computerGuess) {
        result.style.backgroundColor = 'rgb(14,174,87)';
        result.style.color = 'snow';
        hint.innerHTML = 'You Did It! The Number Was ' + computerGuess;
    } else {
        result.style.backgroundColor = 'lightcoral';
        result.style.color = 'crimson';

        if (guess < computerGuess){
            hint.innerHTML = 'Your Number is too Low'
        } else {
            hint.innerHTML = 'Your Number is too High'
        }
    }
    result.style.display = 'block';
    if (!guessNumbers.includes(guess)) {
        guessNumbers.push(guess);
        guessCount++
        noOfGuessesSpan.innerHTML = guessCount;
    }
    guessedNumbersSpan.innerHTML = guessNumbers;
    guessInput.setAttribute('max', MAX);
}


function newGame() {
    MAX += 10;
    computerGuess = Math.floor(Math.random() * MAX + 1);
    guessInput.setAttribute('max', MAX);
    maxNumberSpan.innerHTML = MAX;
    guessCount = 0;
    noOfGuessesSpan.innerHTML = guessCount;
    guessNumbers=[]
    guessedNumbersSpan.innerHTML = '';
    guessInput.value = '';
    result.style.display = 'none';
}
