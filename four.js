////String Operation//
var city = "amsterdam";
undefined
city.toUpperCase()
"AMSTERDAM"
var city2 = "LondoN"
undefined
city2.toLowerCase()
"london"
///////
var city = "pARIs";
"Paris"

city.length
9
city[0]
"a"
city[1]
"m"
city[2]
"s"
city[8]
"m"

var a = " Delhi   "
undefined
a.length
9
a.trim()
"Delhi"
var b = a.trim()
undefined
b
"Delhi"
b.length
5
var a = " Delhi . "
undefined
var b = a.trim()
undefined
b
"Delhi ."

var a ="Amsterdam"
undefined
a.charAt(0)
"A"
a.slice(1)
"msterdam"
a.slice(2)
"sterdam"


var city = "pARIs";

var city = "pARIs";
undefined
city.charAt(0)
"p"
city.charAt(0).toUpperCase()
"P"
city.slice(1)
"ARIs"
city.slice(1).toLowerCase()
"aris"

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"

var a = "hongkong"
undefined
a.slice(1)
"ongkong"
a.slice(2)
"ngkong"
a.slice(1,4)
"ong"

var a = "hongkong"
undefined
a.substring(1)
"ongkong"
a.substring(1,4)
"ong"

var a = "hongkong"
undefined
a.substr(1)
"ongkong"
a.substr(1,4)
"ongk"



slice(start,end)
substring(start,end)
substr(start,length)

////////////////////////////////////
var a = "hongkong"
undefined
a.slice(1)
"ongkong"
a.slice(-1)
"g"
a.slice(-2)
"ng"
a.substring(-1)
"hongkong"

var a = "hongkong"
undefined
a.slice(-2,1)
""
a.slice(1,-2)
"ongko"
a.substring(1,-2)
"h"
a.substring(-2,1)
"h"

var a = "hongkong"
undefined
a.slice(-2,-1)
"n"
a.slice(-1,-2)
""
a.slice(-3,-1)
"on"
a.substring(-1,-2)
""
a.substring(-2,-1)
""

Slice ('Hongkong')
    >a(-2) => it will give me 2 letters from backward  > ("ng")