let isEquationRight;
let totalScore = 0;

function generateEquation() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = '*';
    let result;

    if (Math.random() > 0.5) {
        result = num1 * num2;
        isEquationRight = true;
    } else {
        result = num1 + num2;
        isEquationRight = false;
    }

    return `${num1} ${operator} ${num2} = ${result}`;
}


function handleResponse(response) {
    if (response === isEquationRight) {
        alert('You are correct.');
        totalScore++;
    } else {
        alert('You are not correct.');
    }

    const score = document.getElementById('score');
    score.innerText = `Your score is: ${totalScore}`;

    //creates new equation and changes equation card innerText
    const equation = document.getElementById('equation')
    equation.innerText = generateEquation();
}