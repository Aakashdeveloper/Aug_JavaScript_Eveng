function Language(name,country){
    this.name=name;
    this.country=country
    this.greet=() => {return "Say Hi"}
}

var Hindi = new Language('Hindi','India')

Hindi
Language {name: "Hindi", country: "India"}
Hindi.language
undefined
Hindi.name
"Hindi"
Hindi.country
"India"

//////

class language1{
    constructor(name,country){
        this.name=name;
        this.country=country
    }

    greet=() => {return "Say Hi"}
}

var English = new language1('English','UK')