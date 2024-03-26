const inputOne = document.getElementById('one_input');
    const inputTwo = document.getElementById('two_input');
    const inputThree = document.getElementById('three_input');
    const highestNumberElement = document.getElementById('time_result');

    function findHighestNumber() {
        const num1 = parseFloat(inputOne.value);
        const num2 = parseFloat(inputTwo.value);
        const num3 = parseFloat(inputThree.value);
        if (!isNaN(num1) || !isNaN(num2) || !isNaN(num3)) {
            const maxNumber = Math.max(num1, num2, num3);
            highestNumberElement.textContent = `Найбільше число яке ви ввели - ${maxNumber} `; 
        } else {
            highestNumberElement.textContent = "не вказано";
        }
    }
    inputOne.addEventListener('input', findHighestNumber);
    inputTwo.addEventListener('input', findHighestNumber);
    inputThree.addEventListener('input', findHighestNumber);