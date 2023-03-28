function Car(model, year, color, mpg) {
    this.model = model
    this.year = year
    this.color = color
    this.mpg = mpg
}



var car1 = new Car("Camry", 2023, "Blue", 35)
console.log(car1.mpg)

var car2 = new Car("Odyssey", 2022, "Red", 30)
console.log(car2.mpg)

var car3 = new Car("TLX", 2020, "Green", 40)
console.log(car3.mpg)


function Vehicle(Car) {
    this.Car = Car
}

var vehicle1 = new Vehicle(car1)
console.log(vehicle1.Car.mpg)

var vehicle2 = new Vehicle(car2)
console.log(vehicle2.Car.mpg)

var vehicle3 = new Vehicle(car3)
console.log(vehicle3.Car.mpg)

