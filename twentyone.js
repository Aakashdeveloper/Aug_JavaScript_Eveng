var calc={
    add:(a,b) => { return a+b},
    sub:(a,b) => { return a-b},
}

var calc={
    add:(a,b) => { return a+b},
    sub:(a,b) => { return a-b},
}
    
undefined
typeof(calc)
"object"
calc.add(1,2)
3
calc.sub(1,2)
-1

var dbObject = {
    find:(table) => { return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} (name,city) values (${data.name}, ${data.city})`}
}

dbObject.find('Emp')
"Select * from Emp"
dbObject.insert('student',{'name':'John','city':'delhi'})
"Insert into student (name,city) values (John, delhi)";
