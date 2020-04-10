class Coffee {
    constructor(obj = {}){
        this.bean = obj.bean,
        this.method = obj.method
        this.category = obj.category
    }
}
// class extend

class Cafe extends Coffee {
    constructor(obj = {}){
        super(obj)
        this.name = obj.name
    }
}

console.log(detailCafe);

class Location extends Cafe{
    constructor(obj= {}){
    super(obj)
    this.long = obj.long,
    this.lat = obj.lat
    }
}
const locationMap = new Location ({
    long: '-3534785447',
    lat: '6437864-43',
    bean: ['Gayo red honey', 'sidikalang', {robusta: 'Kapal Tanker', sachet: 'kapal api'}],
    method: 'Manual Brewing',
    category: 'Arabica',
    tehName: 'Sariwangi',
    name: 'Sevendays',
})

console.log(locationMap);