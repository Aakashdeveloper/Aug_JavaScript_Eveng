class geo{
    constructor(lat,long){
        this.lat = 22.77,
        this.long= 71.23
    }
}
class language1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country
    }
}

