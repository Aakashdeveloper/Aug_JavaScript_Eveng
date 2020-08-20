var name="Avengers";
var rating=4.5
var type="Action"
var ind = "Hollywood";

///es5
var data = "The "+name+" is an "+type+" movies, with rating as "+rating+" form "+ind+"."

console.log(data)
"The Avengers is an Action movies, with rating as 4.5 form Hollywood."

//string literials
///es6///
var data1 = `The ${name} is an ${type} movies, with rating as ${rating} from ${ind}.`
console.log(data1)