var moviename = "Avenger"
var movierating = 10
var moviegenere = "Action"
////////
var movies = {
    name:"Avenger",
    rating:10,
    genere:'Action'
}
undefined
movies
{name: "Avenger", rating: 10, genere: "Action"}
typeof(movies)
"object"
movies.nae
undefined
movies.name
"Avenger"
movies.rating
10
movies.lang="Englsh"
"Englsh"
movies
{name: "Avenger", rating: 10, genere: "Action", lang: "Englsh"}
movies.rating=9.5
9.5
movies
{name: "Avenger", rating: 9.5, genere: "Action", lang: "Englsh"}
delete movies.genere
true
movies
{name: "Avenger", rating: 9.5, lang: "Englsh"}

movies['name']
"Avenger"
movies['genere']
"Action"

JSON
Javascript Object notataion

var movies = [
    {
        name:"Avenger",
        rating:10,
        genere:'Action'
    },
    {
        name:"Death Race",
        rating:5,
        genere:'Action'
    },
    {
        name:"MadMax",
        rating:8,
        genere:'Action'
    }
]
movies
(3) [{…}, {…}, {…}]
typeof(movies)
"object"
movies[0].name
"Avenger"
movies[2].name
"MadMax"