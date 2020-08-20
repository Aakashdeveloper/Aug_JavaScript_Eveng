
Date()
"Mon Aug 10 2020 20:19:56 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDay()
1
a.getFullYear()
2020
a.getMonth()
7

switch(new Date().getDay()){
    case 1:
        console.log('Today is monday')
        break;
    case 2:
        console.log('Today is monday')
        break;
    default:
        console.log("Unknown")
}

Today is monday

var date = new Date()
undefined
date.getDate()
10
date.getMonth()
7
date.getFullYear()
2020
`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

"10/7/2020"