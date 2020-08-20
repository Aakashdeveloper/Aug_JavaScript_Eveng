RegExp
^$

var a = "hi"

a.match("^([a-z])$")


var a = "hi"

a.match("^([a-z])$")
null
var a = "h"

a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "h"

a.match("^([a-z]{2})$")
null
var a = "hi"

a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]


var a = "hi"

a.match("^([a-z]+)$")

a.match("^([0-9]{10})$")

a.match("^([0-9]{10,12})$")


var email = "a@a.com"
email.match("^([a-zA-Z0-9$%]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")

email.match("^([a-zA-Z0-9$%]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@.com"

email.match("^([a-zA-Z0-9$%]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
