'use strict';

//Цыклы while, for

while(0){

}


let i = 0;

while(i < 3){
    console.log( i );
    i++;
}

//Цыклы выполнения повторений называются итерациями

let n = 10;
while(n!=0){
    n--;
}

//Цикл do...while

let m = 0;
do{
    console.log(m);
    m++
} while(m<3);

//Цикл for
/*for(начало; условие; шаг){

}*/

//let k = 0; использовать или с наружи цикла или в нутри гдето в одном месте!
for(let k = 0; k < 3; k++){
    console.log(k);
}

let b = 0;
for(;b < 3; b++){

}

/*рерывание цикла break

let sum = 0;

while(true){
    let value = + prompt('Введите число', '');
    if(!value){
        break;
    }
    sum += value;
}
console.log('Сумма:' + sum);*/

// continue - следующая итерация
for(let i = 0; i < 10; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);
}

//метки для break/continue
outer: for(let i = 0; i < 3; i++){
    for(let m = 0; m < 3; m++){
        let input = prompt('Значение в координаты:'+i+','+m+'');

        if(!input){
            break outer;
        }
    }
}
console.log('Готово!');

//Конструкция switch

let a = 0;
let g = 5;
switch (a){
    case 2: //Группировка кейсов
    case 3: //Группировка кейсов
        console.log('Маловато');
        break;
    case 4:
        console.log('В Точку');
        break;
    case 5 - g:
        console.log('Перебор');
        break;
    default:
        console.log('Таких значений я не знаю');
        break;
}

//Функции

function showMessage(){
    console.log('Привет');
}
showMessage();
showMessage();
showMessage();
showMessage();

//Локальные перемены
function sayHello(){
    let name1 = 'ВЛАД';

    console.log( `Привет ${name1}`);
}
sayHello();


//Внешние переменные

let userName = 'Вася';
function userReg(){
    let userName = 'Андрей';

    let regmessage = 'Зарегистрирован' + userName;
    console.log(regmessage);
}
userReg()
console.log(userName);

//Глобальная переменная - это переменная объявлена на уровне всего скрипта.

//Параметры

function getSeconds(hours){
    let secondsInMin = 60;
    let secondsInHour = secondsInMin * 60;
    let secondsInSomeHour = secondsInHour * hours;
    console.log('Секунд - ' + secondsInSomeHour + ' в ' + hours + 'часах');
}
getSeconds(10);



function MoreParams(userName, message){

}
MoreParams(i, n);

//Аргументы по-умолчанию

function DefaultParams(age, message = 'привет'){
      
}
DefaultParams(20, 'пока');

//Возврат значения - return

let age;

function CalcAge(year = 2000){
    return 2019 - year;
}
age = CalcAge(1994);
console.log(age);

function DoNothing(){
    return;
}

let returnVal = DoNothing; //underfined
console.log(returnVal);
returnVal();


//Функциональные выражения

//Объявление функции Function Expression - Функциональное вырожение
//Стандарное объявление функции - называется Function Declaration
let SayHelloTwise = function (params){
    console.log('Привет');
    console.log('Мудило');
};
SayHelloTwise(1);


function SayHi(){
    console.log('Привет');
}

let funcSayHi = SayHi;
funcSayHi();

SayHi = null;
//SayHi(); //Ошибка

funcSayHi();










