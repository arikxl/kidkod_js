
let num1;
let num2;
let max = 5;
let score = 0;

function createEx() { 
    max+=5
    num1 = Math.floor(Math.random() * max+1);
    num2 = Math.floor(Math.random() * max+1);
    document.getElementById('num1Span').innerHTML = num1;
    document.getElementById('num2Span').innerHTML = num2;
}

createEx();

function check() {
    const answer = num1 + num2;
    const userAnswer = +document.getElementById('answerInput').value;

    if (userAnswer === answer) {
        score++;
        document.getElementById('scoreSpan').innerHTML = score;
        document.getElementById('msg').innerHTML = 'GREAT!';
    }
    else {
        document.getElementById('msg').innerHTML = 'Wrong! the answer is '+ answer;
    }
 }
