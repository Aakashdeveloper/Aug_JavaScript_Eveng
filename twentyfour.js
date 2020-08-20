function human(name){
    this.name=name;
    this.city="Newyork"
}



function robot(name){
    this.name=name;
    this.legs=2;
    this.color="Red"
}

human.prototype = new robot()

var alvin= new human("Alvin")
alvin
human {name: "Alvin", city: "Newyork"}city: "Newyork"name: "Alvin"__proto__: robotcolor: "Red"legs: 2name: undefined__proto__: Object
alvin.city
"Newyork"
alvin.legs
2
alvin.color
"Red"