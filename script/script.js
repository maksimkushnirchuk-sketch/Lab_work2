
    // Завдання 1. Область видимості (Block Scope)
    function calculate() {
      let result = "Зовнішнє значення (функціональна область)";
      if (true) {
        let result = "Внутрішнє значення (блочна область)";
        console.log("Завдання 1 - Всередині block (if):", result);
      }
      console.log("Завдання 1 - Поза block (if):", result);
    }
    calculate();


    // Завдання 2. Вгадай secretNumber
    const myJournalNumber = 5;
    const secretNumber = myJournalNumber % 10;
    const userGuess = prompt("Завдання 2: Вгадайте число від 0 до 9:");

    if (userGuess !== null) {
      if (Number(userGuess) === secretNumber) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
    }

    // Завдання 3. Конкатенація рядків через оператор +
    const userName = prompt("Завдання 3: Введіть ваше ім'я:");
    const firstNumber = prompt("Завдання 3: Введіть перше число:");
    const secondNumber = prompt("Завдання 3: Введіть друге число:");

    if (userName && firstNumber !== null && secondNumber !== null) {
      // Перетворюємо введені значення у числа
      const num1 = Number(firstNumber);
      const num2 = Number(secondNumber);
      const sum = num1 + num2;

      // Формуємо рядок строго за допомогою конкатенації через +
      const message = "Hello, " + userName + "! The sum of " + num1 + " and " + num2 + " is " + sum;

      console.log("Завдання 3 - Повідомлення:", message);
    }
