"use strict";

/*Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”*/
function helloName() {
  var yourName = prompt("Напишіть Ваше ім'я");
  var hello = 'Привіт, ';
  var result = hello + yourName;
  alert(result);
}
/*Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;*/


function yourAge() {
  var yearBorn = prompt("Введіть рік народження");
  var thisYear = 2021;
  var howOld = "Ваш вік ";
  var result = howOld + (thisYear - yearBorn);
  alert(result);
}
/*Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата*/


function perimeter() {
  var a = prompt("Введіть довжину квадрата (см)");
  var b = "Периметр (см) ";
  var result = b + a * a;
  alert(result);
}
/*Запитай у користувача радіус кола і виведи площу такої окружності.*/


function area() {
  var a = prompt("Введіть радіус кола (см)");
  var b = "Площа кола (см) ";
  var pi = 3.14;
  var result = b + pi * (a * a);
  alert(result);
}
/*Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/


function speed() {
  var a = prompt("Введіть відстань (км)");
  var b = prompt("Введіть бажану кількість годин");
  var c = "Ви маєте рухатись зі швидкістю (км/год) ";
  var result = c + a / b;
  alert(result);
}
/*Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.*/


function currency() {
  var a = prompt("Введіть кількість доларів (USD)");
  var b = 0.89;
  var c = " EUR";
  var result = a * b + c;
  alert(result);
}