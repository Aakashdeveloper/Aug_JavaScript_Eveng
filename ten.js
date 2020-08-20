var a = 10
a>10?"Hiii":"Bie"

var a = 10
a>10?"Hiii":"Bie"
"Bie"
var a = 10
a==10?"Hiii":"Bie"
"Hiii"
var a = 10
a==10?a+1:a-1
11
var a = 10
a>10?a+1:a-1
9
////////////Switch/////

var a = 10
switch(a%2){
    case 0:
        console.log(`Number ${a} is even`)
        break;
    case 1:
        console.log(`Number ${a} is odd`)
        break;
    default:
        console.log(`Number unknown`)
}

var name = "John"
switch(name){
    case 'Aakash':
        console.log(`${name} is user`)
        break;
    case 'John':
        console.log(`${name} is admin`)
        break;
    case 'Alvin':
        console.log(`${name} is super admin`)
        break;
    default:
        console.log(`unknown`)
}

one condition one output use ternary
multiple condition multiple output use if else
one condition multiple output use switch
