var dbObj = {}

dbObj.user=[
    {
        name:'John',
        class:'UI'
    },
    {
        name:'Ammy',
        class:'React'
    }
]

dbObj.dbQyery = {
    find:(table) => { return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} (name,city) values (${data.name}, ${data.city})`}
}


//module.exports = dbObj;
export default dbObj;