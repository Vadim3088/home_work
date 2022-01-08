/*Створи функцію, яка буде виводити кількість переданих їй аргументів.*/

//function chekArg(a, b, c, d, e) {
//    alert (chekArg.length);
//}

function chekArg(){
    return arguments.length;
}

const argCnt = chekArg(1,3,5,7,9)
console.log(argCnt);


/*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/

function getNumber(input_1, input_2, result_id){
    let number_1 = document.getElementById(input_1);
    let number_2 = document.getElementById(input_2);
    if(number_1.value != '' && number_2.value != ''){
        let result = matchNumber(number_1.value, number_2.value);
        printResult(result, result_id);
    } else {
        printError(`Введите оба числа!`, result_id)
    }
}

function matchNumber(a, b){
    let res;
    if(parseInt(a) < parseInt(b)){
        res = '-1';
    } else if(parseInt(b) < parseInt(a)){
        res = '1';
    } else {
        res = '0';
    }
    return (res);
}

function printError(text, id){
    document.getElementById(id).innerHTML = `<span>${text}</span>`;
}

function printResult(res, id){
    document.getElementById(id).innerHTML = `<span><b>${res}</b></span>`;
}

/*Напиши функцію, яка обчислює факторіал переданого їй числа.*/

function getFactorial(input1, result_1_id){
    let num = document.getElementById(input1);
    if(num.value <= 10 && num.value != ''){
        let result = factorial(num.value);
        printResult(result, result_1_id);
    }else{
        printError ("Завелике число. Введіть число, яке менше або дорівнює 10.", result_1_id);
    }
}

function factorial(num){
    let result = 1, i = 1;
    while(i<=num){
        result = result * i;
        i++;
    }
    return(result);
}

/*Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

function createNumber(a,b,c){
    return (a*100)+(b*10)+c;
}

function generateNumber(input_1,input_2,input_3,result_2_id){
    let a = +document.getElementById(input_1).value;
    let b = +document.getElementById(input_2).value;
    let c = +document.getElementById(input_3).value;
    if(a<=9 && b<=9 && c<=9){
        let result = createNumber(a,b,c);
        printResult(result, result_2_id)
    }else{
        printError("Введіть цифру, яка менше або дорівнює 9", result_2_id);
    }

}

/*Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

function calcArea(input_1, input_2, result_3_id){
    let side_a = document.getElementById(input_1);
    let side_b = document.getElementById(input_2);
    let result = area(side_a.value, side_b.value);
    printResult(result, result_3_id);
}

function area(a=0,b=0){
    b=(b==0)?a:b;
    a=(a==0)?b:a;
    return a*b;
}

/*Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/

function chekNumber(input, result_4_id){
    let number = document.getElementById(input);
    if(number.value != ''){
       perfectNumber(number.value)?printError(`Досконале число!`, result_4_id):
       printError(`Не досконале число!`, result_4_id);       
    } else {
        printError('Число відсутнє!', result_4_id);
    }
}

function perfectNumber(a){
    let res = 0;  
    for(i=1; i<=(a/2); i++){
       if(a % i == 0){
       res += i;
       }
    }
    let p = (res == a);
    return(p);
}

/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/

function perfectLine(input_1, input_2, result_5_id){
    let min = +document.getElementById(input_1).value;
    let max = +document.getElementById(input_2).value;
    let result = '';
    if(min < max){
        for(min; min<=max; min++){  
            if(perfectNumber(min)){
                result += min +' ';
            }             
        }
        printResult(result, result_5_id);
    } else {
        printError('Введіть вірні числа', result_5_id)
    }
}