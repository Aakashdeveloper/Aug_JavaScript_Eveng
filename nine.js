if(condition){
    //do something
}else{
    //do something
}

var a = 97987
if(a%2===0){
    console.log(`Number is ${a} is even`)
}else{
    console.log(`Number is ${a} is odd`)
}

var a = 12
if(a%2===0){
    console.log(`Number is ${a} is even`)
}else if(a%3===0){
    console.log(`Number is ${a} is divisble by 3`)
}
else{
    console.log(`Number is ${a} is odd`)
}



var a = 12
if(a%2===0){
    console.log(`Number is ${a} is even`)
}
if(a%3===0){
    console.log(`Number is ${a} is divisble by 3`)
}


var a = 12
if(a%2===0){
    console.log(`Number is ${a} is even`)
}else if(a%3===0 || a%5===0){
    console.log(`Number is ${a} is divisble by 3 or 5`)
}
else{
    console.log(`Number is ${a} is odd`)
}


var a = 21
if(a%2===0){
    console.log(`Number is ${a} is even`)
}else if(a%3===0 && a%5===0){
    console.log(`Number is ${a} is divisble by 3 or 5`)
}
else{
    console.log(`Number is ${a} is odd`)
}


var a = 12
if(a%2===0){
    console.log(`Number is ${a} is even`)
}else if(a%3===0 || a%5===0){
    if(a%3===0){
        console.log(`Number is ${a} is divisble by 3`)
    }else{
        console.log(`Number is ${a} is divisble by 5`)
    }  
}
else{
    console.log(`Number is ${a} is odd`)
}


//////////////////////////////
var a = 10
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
VM97:3 hii
undefined

var a = 0
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
VM102:5 bie

var a = null
undefined
typeof(a)
"object"
a+10
10
a+null
0
null == 0
false
a+'a'
"nulla"
a-10
-10

var a  = undefined
undefined
typeof(a)
"undefined"
a+10
NaN
a+'a'
"undefineda"

var a = 10
undefined
a+oo 
VM429:1 Uncaught ReferenceError: oo is not defined
    at <anonymous>:1:3
(anonymous) @ VM429:1
var b = null
undefined
a+oo+b
VM488:1 Uncaught ReferenceError: oo is not defined
    at <anonymous>:1:3
(anonymous) @ VM488:1
a+b+oo 
VM509:1 Uncaught ReferenceError: oo is not defined
    at <anonymous>:1:5


truty 1,2,3,-1,-2,-3,true
falsy 0,null,undefined


var a = null
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
VM514:5 bie
undefined
var a = undefined
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
VM523:5 bie
undefined
var a = -1
if(a){
    console.log("hii")
}else{
    console.log("bie")
}
VM529:3 hii