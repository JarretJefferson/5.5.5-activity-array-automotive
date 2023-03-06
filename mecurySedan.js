//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 5;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkServices() {
        if (this.mileage > 3000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Lets go")
            return this.started = true
        } else {
            console.log("No Gas")
            return this.started = false
        }
    }

    loadPassenger(num) {
        if (this.passengers > this.maximumPassengers) {
            if ((num + this.passengers) <= this.maximumPassengers) {
                this.passengers = num;
                return this.passengers;
            } else {
                console.log(this.model + " " + this.make + "not enough space.");
            }
        } else {
            console.log(this.model + " " + this.make + "Fill");
        }
    }
}

//this shows how to call from this module...
let myCar = new Car("mecury", "rad_sedan", "1965", "white", "5000");
console.log(myCar.make);

myCar.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkServices();

console.log(myCar);


