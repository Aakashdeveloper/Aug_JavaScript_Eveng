var person ={
    fullname: function(){
        return `${this.firstname} ${this.lastname}`
    }
}

var john = {
    firstname:'John',
    lastname:'Zoe'
}


person.fullname.call(john)
"John Zoe"

person.fullname.apply(john)
"John Zoe"

////////////////////////////
var person ={
    fullname: function(city,country){
        return `${this.firstname} ${this.lastname} ${city} ${country}`
    }
}

var john = {
    firstname:'John',
    lastname:'Zoe'
}

person.fullname.call(john,'delhi','india')

person.fullname.apply(john,['delhi','india'])