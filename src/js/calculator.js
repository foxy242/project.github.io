document.getElementById('equals').addEventListener('click', function() {
    let firstNumber = parseFloat(document.getElementById('first_input').value);
    let secondNumber = parseFloat(document.getElementById('second_input').value);
    let operation = document.querySelector('.button_list .active').textContent.trim();
    let result;

    switch(operation) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Invalid operation";
    }
    
    document.getElementById('result-p').textContent = result;
});

let buttons = document.querySelectorAll('.button_calculator');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});