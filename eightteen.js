var a = 10

var a > declare 
a=10> assignment

> var a = 10
> a
10
> var a = 11
> a
11
> a = 12
12
> a
12

> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b =21
21
>

> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =11
Uncaught TypeError: Assignment to constant variable.
>


var > we can redecalre and reassign
let > we cannot redecalre but can reassign
const > we cannot redecalre nor reassign

