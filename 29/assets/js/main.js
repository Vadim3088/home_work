/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-12), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

function yourAge(){
    let age = prompt("Введите ваш возраст");
    let ageChild = "Вы ребенок";
    let ageTeenager = "Вы подросток";
    let ageAdult = "Вы взрослый";
    let ageRetiree = "Вы пенсионер";
    let result;
    if (age >= 0 && age < 12){
        result = ageChild;      
    }
    else if(age >= 12 && age < 18){
        result = ageTeenager;       
    }
    else if(age >=18 && age <60){
        result = ageAdult;       
    }
    else if(age >= 60){
        result = ageRetiree;       
    }
    alert(result);
 }


 /*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

 function specialSymbol(){
    let number = prompt("Введите число от 1 до 9");
    let result;

    if(number == 1){
        result = '!';
    }
    else if(number == 2){
        result = '@';
    }
    else if(number == 3){
        result = '#';
    }
    else if(number == 4){
        result = '$';
    }
    else if(number == 5){
        result = '%';
    }
    else if(number == 6){
        result = '^';
    }
    else if(number == 7){
        result = '&';
    }
    else if(number == 8){
        result = '*';
    }
    else if(number == 9){
        result = '(';
    }
    else if(number == 0){
        result = ')';
    }
    alert(result);
}

/*Підрахуй суму всіх чисел в заданому користувачем діапазоні*/

function rangeOfNumbers(){
    let x = Number (prompt("Введіть перше число діапазону"));
    let y = Number (prompt("Введіть останнє число діапазону"));
    let sum = 0;
    while(x <= y){       
        sum+=x;  
        x++;
    }
alert(sum);
}

/*Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/

function commonDivisor(){
    let a = parseInt(prompt("Введіть перше число"));
    let b = parseInt(prompt("Введіть друге число"));
    let result = '';
    let c = (a < b)? a:b;
    let d = 1;
    while(d <= c){
        if(a % d==0 && b % d==0){
            result = Math.max(d);
        }
        d++;
    }
    alert (result);
}

/*Запитай у користувача число і виведи всі дільники цього числа.*/

function divider(){
    let a = parseInt(prompt("Введіть число"));
    let result = '';
    let b = 1;
    while(b <= a){
        if(a % b==0){
            result += b + " ";
        }
        b++;
    }
    alert (result);
}

/*Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.*/

function palindrom(){
    let num = prompt("Введите число");
    let a, b, c, d, e;
    a = parseInt(num/10000);//разряд десятков тысяч
    b = parseInt((num%10000)/1000);//разряд тысяч
    c = parseInt((num%1000)/100);//разряд сотен
    d = parseInt((num%100)/10);//разряд десятков
    e = num%10;//разряд единиц
    if(a==e && b==d){
        alert('It is palindrom');
    }
    else{
        alert('It is not palindrom');
    }
}

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
1. від 200 до 300 - знижка буде 3%; 
2. від 300 до 500 - 5%;
3. від 500 і вище - 7%.*/

function amountOfPurchases(){
    let amount = parseInt(prompt("Введіть сумму"));
    let result;
    if (amount>200 && amount<300){
        result = amount - amount*3/100;
    }
    else if (amount>300 && amount<500){
        result = amount - amount*5/100;
    }
    else if (amount>500){
        result = amount - amount*7/100;
    }
    alert(result);
}

/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/
//function tenNumbers()


/*Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.*/

function nextDay(){
    let a = true;
    while (a){        
            a = confirm("Понеділок. Хочеш побачити наступний день?");
            a = confirm("Вівторок. Хочеш побачити наступний день?");
            a = confirm("Середа. Хочеш побачити наступний день?");
            a = confirm("Четвер. Хочеш побачити наступний день?");
            a = confirm("П'ятниця. Хочеш побачити наступний день?");
            a = confirm("Субота. Хочеш побачити наступний день?");
            a = confirm("Неділя. Хочеш побачити наступний день?");
            a = false;                
    }
}

/*Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.*/

function multTable(){
    const n = 10;
    let table = `
    <table class="my_table">
        <thead>
            <tr>`;
            for(let i=2; i<n; i++){
                table += `<td>${i}</td>`;
            }
            table += `</tr>
        </thead>
        <tfoot>
        <tr>`;
        for(let i=2; i<n; i++){
            table += `<td>${i}</td>`;
        }
        table += `</tr>
        </tfoot>
        <tbody>`;
            for(let i=1; i<=n; i++){
                table += '</tr>';
                for(let j=2; j<n; j++){
                    table += `<td>${i} * ${j} = ${i*j}</td>`;
                }
                table += '</tr>';
            }
        table +=`</tbody>
        </table>
        `;
        document.getElementById("multi_table").innerHTML = table;
}

multTable();

/*Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
первій вариант с урока*/

function isMatched(){
    let num = prompt("Введите число");
    let s, d, e;
    s = parseInt(num/100);
    d = parseInt((num%100)/10);
    e = num%10;
    if(s==d || s==e || d==e){
        alert('Match');
    }
    else{
        alert('Not match');
    }
}

/*Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/

function leapYear(){
    let year = prompt("Введите год");
    if(year%400==0 || (year%4==0 && year%100!=0)){
        alert('It is leap year!')
    }
    else{
        alert('It is not leap year!')
    }
}

