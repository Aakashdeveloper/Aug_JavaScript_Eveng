/*function sayHi(){
    console.log("Say Hi To Us")
}

sayHi()*/

(function(){
    console.log("Say Hi To Us")
}())

/////////
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}
1
2
3
4
5

function  * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}

