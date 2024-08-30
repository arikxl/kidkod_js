function calc() {
    const num1 = +document.getElementById('num1Input').value;
    const num2 = +document.getElementById('num2Input').value;
    const operator = document.getElementById('operatorSelect').value;
    
    let answer;
    
    switch (operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "x":
            answer = num1 * num2;
            break;
        case ":":
            answer = num1 / num2;
            break;
    }
    document.getElementById('answer').innerHTML = answer;
 }
