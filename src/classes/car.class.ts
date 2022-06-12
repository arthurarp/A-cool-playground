import { Vehicle } from './vehicle.class';

export class Car extends Vehicle {

    constructor(vehicleData: any) {
        super();
        this.model = vehicleData.model;
        this.year = vehicleData.year;
        this.brand = vehicleData.brand;
    
    }

    getCarDoors() {
        return this.carDoors;
    }

    setCarDoors(carDoors: number) {
        if (carDoors == 2 || carDoors == 4) {
            this.carDoors = carDoors;
        } else {
            return new Error('Invalid number of doors for type: car');
        }

        return Number(carDoors);

    }

}
