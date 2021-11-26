"use strict";

/*function cam(){
    let number = parseInt(document.getElementById("ser").value);
    let resualt = number*number;
    document.getElementById("abo")
    
}


function calc(){
    let number = parseInt(prompt("Введите первое число"));
    let number2 = parseInt(prompt("Введите второе число"));
    let action = prompt("Введите действие: + - * /");
    let result;
    if(action === "+"){
        result = number + number2;        
    }
    if(action === "-"){
        result = number - number2;        
    }
    if(action === "*"){
        result = number * number2;        
    }
    if(action === "/"){
        result = number / number2;        
    }
    alert(result);
}*/

/*№1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18),
взрослым (18_60) или пенсионером (60– ...).*/
function yourAge() {
  var age = prompt("Введите ваш возраст");
  var ageChild = "Вы ребенок";
  var ageTeenager = "Вы подросток";
  var ageAdult = "Вы взрослый";
  var ageRetiree = "Вы пенсионер";
  var result;

  if (age >= 0 && age < 12) {
    result = ageChild;
  } else if (age >= 12 && age < 18) {
    result = ageTeenager;
  } else if (age >= 18 && age < 60) {
    result = ageAdult;
  } else if (age >= 60) {
    result = ageRetiree;
  }

  alert(result);
}
/*2)Пользователь ввел число, а на экран вывелись все числа от введенного до 0.*/


var number = parseInt(prompt('Введите число'));

while (number > 0) {
  console.log(number);
  number--;
}

function isResult() {
  var number = parseInt(prompt('Введите число'));

  while (number > 0) {
    console.log(number);
    number--;
  }
}
/*3)Запросить число и степень. Возвести число в указанную степень и вывести результат.*/


function myPow() {
  var num = parseInt(prompt('Enter number'));
  var pow = parseInt(prompt('Enter exponent'));

  while (pow > 0) {
    pow--;
    r = num * r;
  }

  console.log(r);
}
/*4)Запросить 2 числа и найти все общие делители.*/


function divider() {
  var num_1 = parseInt(prompt('Введите первое число'));
  var num_2 = parseInt(prompt('Введите второе число'));
  var _final = '';
  var limite = num_1 > num_2 ? num_1 : num_2;
  var divader = 1;

  while (divader <= limite) {
    if (num_1 % divader == 0 && num_2 % divader == 0) {
      _final += divader + " ";
    }

    divader++;
  }

  console.log(_final);
}
/*5)Посчитать факториал введенного пользователем числа.*/


function factorial() {
  var num = parseInt(prompt("Enter number"));

  if (num < 10) {
    var res = 1,
        i = 1;

    while (i <= num) {
      res = res * i;
      i++;
    }

    console.log(res);
  } else {
    console.warn("too big number");
  }
}
/*1)Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.*/


function multiplicity() {
  var number = parseInt(prompt("Enter number"));
  var result = '';

  for (var i = 1; i <= 100; i++) {
    if (i % number == 0) {
      result += i + ' ';
    }
  }

  console.log(result);
}
/*2)Вывести каждый 4-й элемент из указанного пользователем диапазона. 
Пользователь указывает минимальное и максимальное значения диапазона.*/


function range() {
  var from = parseInt(prompt("Enter from"));
  var to = parseInt(prompt("Enter to"));
  var result = '';

  for (var i = from; i <= to; i = i + 4) {}
}