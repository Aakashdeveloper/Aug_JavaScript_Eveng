/*var firstname = 'Michal';
var lastname= "Zoe";

var sayHi = {
    firstname:'John',
    lastname:'Herry',
    greet:() => {
        return `Say hi to ${firstname} ${lastname}`
    }
}


console.log(sayHi.greet())
Say hi to Michal Zoe
*/

var firstname = 'Michal';
var lastname= "Zoe";

var sayHi = {
    firstname:'John',
    lastname:'Herry',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}


console.log(sayHi.greet())
Say hi to John Herry
