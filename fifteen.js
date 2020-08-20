function
methods
arrow function
IFFI
generator function
//////
function add(a,b){
    return a+b
}
undefined
add(2,6)
8
add(7,5)
12
add('a','b')
"ab"



function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }

    return out
}

isEven(4)
"Number 4 is even"
isEven(5)
"Number 5 is odd"


////methods//////
var add = function (a,b){
    return a+b
}

add(3,4)
7

///Es6///
Arrow function
/////////
arrow are not constructible
we can only call this
THIS key word will not be allow


var add = (a,b) => {return a+b}
add(1,2)
3

/////////

var x = function(){
    console.log(arguments)
};

new x(1,2,3)
Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]



var x = () =>{
    console.log(arguments)
};
undefined
new x(1,2,3)

VM268:1 Uncaught TypeError: x is not a constructor
    at <anonymous>:1:1