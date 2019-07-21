'use strict';

//№1
function isNumberInRange(number) {
    if (number > 0 && number < 10) {
        return true;
    }
    return false;
}
console.log(isNumberInRange(-5) );


//№2
function isEven(n) {
    if(n%2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(3));

//№3
let value = +prompt('value?', '');
switch (value) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//№4
function min(a, b){
    return( a > b ? b : a );
}
console.log(min(3,5));
console.log(min(5,-1));