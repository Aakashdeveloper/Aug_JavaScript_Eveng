for
while
do while
for of
for in
map
filter

////////////////////////////////////
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var colors = ["Red","Teal","Olive","Green"]
for(i=0;i<colors.length;i++){
    console.log(colors[i])
}

var colors = ["Red","Teal","Olive","Green",['LightGreen','Dark Green'],"orange"]
for(i=0;i<colors.length;i++){
    console.log(colors[i])
}


var colors = ["Red","Teal","Olive","Green",['LightGreen','Dark Green'],"orange"]
for(i=0;i<colors.length;i++){
    for(j=0;j<colors[i].length;j++){
        console.log(colors[i][j])
    }
}

var colors = ["Red","Teal","Olive","Green",['LightGreen','Dark Green'],"orange"]
for(i=0;i<colors.length;i++){
    if(Array.isArray(colors[i])){
        for(j=0;j<colors[i].length;j++){
            console.log(colors[i][j])
        }
    }else{
        console.log(colors[i])
    }
    
}

///////////While///////
var i =10;
while(i<5){
    console.log(i);
    i++
}


/////Do While/////
var i =10;
do{
    console.log(i)
    i++
}
while(i<5)


///////
for of
////////
var colors = ["Red","Teal","Olive","Green"]

for(abc of colors){
    console.log(abc)
}


var colors = ["Red","Teal","Olive","Green",['LightGreen','Dark Green'],"orange"]

for(color of colors){
    if(Array.isArray(color)){
        for(col of color){
            console.log(col)
        }
    }else{
        console.log(color)
    }
}