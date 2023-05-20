/* Задача "Возрастная проверка" */
let age = prompt("Введите свой возраст:")
age = Number(age);


if (age >= 18) {
  console.log("Вы совершеннолетний.")
} else {
  console.log("Вы несовершеннолетний.")
}

/*Задача "Угадай число" ????????????*/


/* Задача "Оценка студента" */

let rating = prompt("Введите свою оценку по предмету:")
rating = Number(rating)

if (rating >= 70) {
  console.log("Вы сдали предмет")
} else {
  console.log("Вы не сдали предмет")
}

/* Задача "Проверка логина" */

let login = prompt("Введите ваш логин:")

if (login === "admin") {
  console.log("Добро пожаловать, администратор")
} else {
  console.log("Неверный логин")
}

/*Задача "Проверка пароля"*/

let password = prompt("Введите ваш пароль:")


if (password === "qwerty") {
  console.log("Доступ разрешен.")
} else {
  console.log("Неверный пароль.")
}


/* Задача "Проверка значения" ???????????? */
let value = prompt("Введите значение:")

/* Задача "Проверка на пустую строку" */

/* Задача "Определение положительного числа" */

let number = prompt("Введите число:");

number = Number(number);


if (number > 0) {
  
  console.log("Число положительное.");
} else if (number < 0) {
  console.log("Число отрицательное.");
} else {
  console.log("Число равно нулю.");
}
