/*Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234)*/

function number() {
    let number = parseInt(prompt("Enter a five digit number"));
    let result = parseInt((number % 100) / 10);
    alert(result);
}



/*Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату*/


