/*Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.*/

function sum(){
    let a = 0.1;
    let b = 0.2;
    let result = a + b;
    alert (result.toFixed(1));
    //alert (result);
}

/*Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.*/
function sumStr(num){
    debugger
    let a = Number("1");
    let b = 2;
    num = parseInt(a + b);
    alert (num);
}

/*Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.*/

function fleshka(){
    let a = prompt("Вкажіть обсяг флешки (Гб)");
    let b = 820;//в одном Гб 1024 Мб
    let result = parseInt((a * 1024) / b);
    alert (result);
}

/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/

function chokolate(){
    let howMoney = prompt("Введіть суму грошей");
    let costChoko = prompt("Вкажіть вартість однієї шоколадки");
    let howChoko = parseInt(howMoney / costChoko);
    let remainder = parseInt(howMoney % costChoko);
    let result = howChoko + " шт. шоколадок та залишок " + remainder + " грн";
    alert (result);
}

/*Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).*/

function conversely(){
    let num = prompt("Введіть тризначне число");
    let a = String(parseInt(num/100));
    let b = String(parseInt((num%100)/10));
    let c = String(parseInt(num % 10));
    let result = c + b + a;
    alert (result);
}

/*Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.*/

function percent(){
    let num = prompt("Введіть суму вкладу");
    const a = 5;
    let b = (num * a) / 100;
    let c = b / 12;//12 месяцев
    let result = parseFloat(c * 2);//умнож на 2 мес
    alert (result.toFixed(2));
}

/*Що повернуть вираження:
 2 && 0 && 3

 2 || 0 || 3

2 && 0 || 3*/

function but1(){
    let a = 2;
    let b = 0;
    let c = 3;
    let result = Boolean(a && b && c);
    alert (result);
}

function but2(){
    let a = 2;
    let b = 0;
    let c = 3;
    let result = Boolean(2 || 0 || 3);
    alert (result);
}

function but3(){
    let a = 2;
    let b = 0;
    let c = 3;
    let result = Boolean(2 && 0 || 3);
    alert (result);
}