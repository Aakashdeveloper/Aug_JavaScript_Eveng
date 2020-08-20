Map
> Help to iterate over the array and play the logic
>Ouput length of map is same as the input length
Filter
> Filter 
> help to filter out the value;
> only return those value for which output is true
> output array length may or may not be of same length


var a = [4,5,3,7,8]
a.map((data) => {console.log(data)})

a.map((data) => {return(data)})
(5) [4, 5, 3, 7, 8]
a.map((data) => {return(data*2)})
(5) [8, 10, 6, 14, 16]

var a = [23,34,56,21,32,36,41,37]

a.filter((data) => { return data>35})
 [56, 36, 41, 37]

var a = [23,34,56,21,32,36,41,37]
a.map((data) => { return data>35})
(8) [false, false, true, false, false, true, true, true]


var a = [0,1,2,3]
a.map((data) => {return data*2})
[0, 2, 4, 6]
a.filter((data) => {return data*2})
[1, 2, 3]