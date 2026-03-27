// --- Завдання 1: FizzBuzz ---
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
    }
    return result;
}

// --- Завдання 2: createStudent ---
function createStudent(name, grades) {
    const sum = grades.reduce((a, b) => a + b, 0);
    const average = Number((sum / grades.length).toFixed(2));
    return {
        name: name,
        grades: grades,
        average: average,
        isPassed: average >= 60
    };
}

// --- Завдання 3: isPalindrome ---
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s+/g, '');
    const reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

// --- Завдання 4: DOM Операції ---
// Використовуємо перевірку, щоб скрипт не видавав помилку, якщо DOM ще не завантажився
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const text = taskInput.value.trim();
            if (text) {
                const li = document.createElement('li');
                li.textContent = text;
                taskList.appendChild(li);
                taskInput.value = "";
            }
        });
    }

    if (taskList) {
        // Делегування подій для видалення li
        taskList.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                e.target.remove();
            }
        });
    }
});

// ПЕРЕВІРКА В КОНСОЛІ (F12 у браузері)
console.log("FizzBuzz(5):", fizzBuzz(5));
console.log("Student:", createStudent("Іван", [80, 65, 90]));
console.log("Is 'racecar' palindrome?:", isPalindrome("racecar"));
