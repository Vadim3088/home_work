"use strict";

/*Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.*/
function sum() {
  var a = 0.1;
  var b = 0.2;
  var result = a + b;
  alert(result.toFixed(1));
}
/*Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.*/


function sumStr(num) {
  var a = Number("1");
  var b = 2;
  num = parseInt(a + b);
  alert(num);
}
/*Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/


function fleshka() {
  var a = prompt("Вкажіть обсяг флешки (Гб)");
  var b = 820; //в одном Гб 1000 Мб

  var result = parseInt(a / (b / 1000));
  alert(result);
}
/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/


function chokolate() {
  var howMoney = prompt("Введіть суму грошей");
  var costChoko = prompt("Вкажіть вартість однієї шоколадки");
  var howChoko = parseInt(howMoney / costChoko);
  var remainder = parseInt(howMoney % costChoko);
  var result = howChoko + ' шт. шоколадок та залишок ' + remainder + " грн";
  alert(result);
}
/*Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).*/


function conversely() {
  var num = prompt("Введіть тризначне число");
  var a = String(parseInt(num / 100));
  var b = String(parseInt(num % 100 / 10));
  var c = String(parseInt(num % 10));
  var result = c + b + a;
  alert(result);
}
/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.*/


function percent() {
  var num = prompt("Введіть суму вкладу");
  var a = 0.05; //5%

  var b = num * a / 100;
  var c = b / 12; //12 месяцев

  var result = parseFloat(c * 2); //умнож на 2 мес

  alert(result.toFixed(2));
}
/*Що повернуть вираження:
 2 && 0 && 3

 2 || 0 || 3

2 && 0 || 3*/


function but1() {
  var a = 2;
  var b = 0;
  var c = 3;
  var result = Boolean(a && b && c);
  alert(result);
}

function but2() {
  var a = 2;
  var b = 0;
  var c = 3;
  var result = Boolean(2 || 0 || 3);
  alert(result);
}

function but3() {
  var a = 2;
  var b = 0;
  var c = 3;
  var result = Boolean(2 && 0 || 3);
  alert(result);
}