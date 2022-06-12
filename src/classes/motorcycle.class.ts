import { Vehicle } from './vehicle.class';

export class Motorcycle extends Vehicle {
    wheels: number;
    passengersCapacity: number;

    constructor(vehicleData: any) {
        super();
        this.model = vehicleData.model;
        this.year = vehicleData.year;
        this.brand = vehicleData.brand;
        this.wheels = 2;
    }

    getMotorcyclePassengersCapacity() {
        return this.passengersCapacity;
    }

    setMotorcyclePassengersCapacity(capacity: number) {
        if (capacity == 1 || capacity == 2) {
            this.passengersCapacity = capacity;
        } else {
            return new Error('Invalid number of passengers capacity for type: motorcycle');
        }

        return Number(capacity);

    }

}
