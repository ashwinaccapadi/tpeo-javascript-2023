function Car(model, color, year, mpg, id){
    this.model = model
    this.color = color
    this.year = year
    this.mpg = mpg
    this.id = id
}

var cars = []
for(var i = 0; i < 10; i++){
    cars[i] = []
    for(var j = 0; j < 10; j++){
        cars[i][j] = new Car("Camry", "Red", 2015, 25, i * 10 + j + 1)
    }
}

function getCarsBetweenIds(idMin, idMax){
    var selectedCars = []
    var startRow = Math.floor(idMin / 10)
    var startCol = idMin % 10 - 1

    var endRow = Math.floor(idMax / 10)
    var endCol = idMax % 10 - 1

    for(var i = startRow; i <= endRow; i++){
        var start = i == startRow ? startCol : 0
        var end =  i == endRow ? endCol : 9
        for(var j = start; j <= end; j++){
            cars[i][j].color = "Blue"
            selectedCars.push(cars[i][j])
        }
    }
    return selectedCars
}

console.log(getCarsBetweenIds(34, 45))
console.log(getCarsBetweenIds(88, 89))
console.log(getCarsBetweenIds(1, 100))