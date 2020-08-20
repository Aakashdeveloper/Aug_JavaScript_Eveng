Array is a collection of homegenious data;
Array is a collection of homegenious and hetrogenious data;

var a = ["Delhi","Mumbai","Pune"]
var b = [3,5,8,2,4]
var c = [true ,true,false,true];


var d = ['a',4,true,true,3,4,'b','g']

var a = ["Delhi","Mumbai","Pune","Amsterdam","Paris"]
undefined
a[0]
"Delhi"
a[4]
"Paris"
a[5]
undefined
a.length
5
a[a.length-1]
"Paris"



var a = ["Delhi","Mumbai","Pune","Amsterdam","Paris"]
undefined
a.push("Venice")
6
a
(6) ["Delhi", "Mumbai", "Pune", "Amsterdam", "Paris", "Venice"]
a.push("Nice")
7
a
(7) ["Delhi", "Mumbai", "Pune", "Amsterdam", "Paris", "Venice", "Nice"]
a.pop()
"Nice"
a
(6) ["Delhi", "Mumbai", "Pune", "Amsterdam", "Paris", "Venice"]

a.pop(3)
"Venice"
a.pop(300000000000)
"Paris"


var a = ["Delhi","Mumbai","Pune","Amsterdam","Paris"]
undefined
a.unshift('Dubai')
6
a
(6) ["Dubai", "Delhi", "Mumbai", "Pune", "Amsterdam", "Paris"]
a.shift()
"Dubai"


push > add in the end 
pop > remove from the end
shift> remove from the begining
unshift> add in the begining


var city = ["Dubai", "Delhi", "Mumbai", "Pune", "Amsterdam", "Paris"]
undefined
city.slice(1,3)
(2) ["Delhi", "Mumbai"]
city.slice(1)
(5) ["Delhi", "Mumbai", "Pune", "Amsterdam", "Paris"]
city
(6) ["Dubai", "Delhi", "Mumbai", "Pune", "Amsterdam", "Paris"]


var city = ["Dubai", "Delhi", "Mumbai", "Pune", "Amsterdam", "Paris"]
undefined
city.splice(1,0,'Newyork','London')
[]
city
(8) ["Dubai", "Newyork", "London", "Delhi", "Mumbai", "Pune", "Amsterdam", "Paris"]
city.splice(2,3)
(3) ["London", "Delhi", "Mumbai"]
city
(5) ["Dubai", "Newyork", "Pune", "Amsterdam", "Paris"]
city.splice(3,1,'Insburg','Venice')
["Amsterdam"]
city
(6) ["Dubai", "Newyork", "Pune", "Insburg", "Venice", "Paris"]

splice(IndexNumber,deleteCount,values)

var city = ["Dubai", "Newyork", "Pune", "Insburg", "Venice", "Paris"]
city.indexOf('Pune')
2
city.indexOf('Delhi')
-1
city.indexOf('Dubai')
0
city.indexOf('Venice')
4

var a = ['a','b','c',1,2]
var b = [2,3,4,'c','d']

a+b
a.concat(b)
(10) ["a", "b", "c", 1, 2, 2, 3, 4, "c", "d"]

[a,b] =[10,20]
(2) [10, 20]
a
10
b
20

var url = "https://github.com/Aakashdeveloper/June_JavaScript_Eveng"

var url = "https://github.com/Aakashdeveloper/June_JavaScript_Eveng"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "June_JavaScript_Eveng"]
var b = url.split('/')
undefined
b[b.length-1]
"June_JavaScript_Eveng"

var a = "hi i am doing JavaScript"
a.split(' ')
(5) ["hi", "i", "am", "doing", "JavaScript"]


var a = "javaScript"
undefined
a.split('')
(10) ["j", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var a = ["j", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
a.toString()
"j,a,v,a,S,c,r,i,p,t"
var b = "j,a,v,a,S,c,r,i,p,t"
b.replace(/,/g,'')
"javaScript"

var city = ["Dubai", "Newyork", "Pune", "Insburg", "Venice", "Paris"]
undefined
city.sort()
(6) ["Dubai", "Insburg", "Newyork", "Paris", "Pune", "Venice"]
var city = ["Dubai", "Newyork", "Pune", "Insburg", "Venice", "Paris"]
undefined
city.reverse().sort()
(6) ["Dubai", "Insburg", "Newyork", "Paris", "Pune", "Venice"]
city.sort().reverse()
(6) ["Venice", "Pune", "Paris", "Newyork", "Insburg", "Dubai"]

console.log(...city)
VM773:1 Dubai Newyork Pune Insburg Venice Paris



var arr = ['Delhi',"Mumbai","Paris",[1,2,3,'hi','bie',['a','b','c'],'Hello'],5,6]
undefined
arr[3]
(7) [1, 2, 3, "hi", "bie", Array(3), "Hello"]
arr[3][5]
(3) ["a", "b", "c"]
arr[3][5][0]
"a"
arr[3][3]
"hi"

var arr = ['Delhi',"Mumbai","Paris",[1,2,3,'hi','bie',['a','b','c'],'Hello'],5,6]
undefined
arr.flat()
(12) ["Delhi", "Mumbai", "Paris", 1, 2, 3, "hi", "bie", Array(3), "Hello", 5, 6]
arr.flat(2)
(14) ["Delhi", "Mumbai", "Paris", 1, 2, 3, "hi", "bie", "a", "b", "c", "Hello", 5, 6]



var myarr = Array.of(10,2,4)
undefined
myarr
(3) [10, 2, 4]


var a = [10,20,30,40]
var a = [10,20,30,40]
undefined
a.fill(100,2)
(4) [10, 20, 100, 100]
a.fill(100,1,2)
(4) [10, 100, 100, 100]
var a = [10,20,30,40,50,60]
undefined
a.fill(100,1,2)
(6) [10, 100, 30, 40, 50, 60]