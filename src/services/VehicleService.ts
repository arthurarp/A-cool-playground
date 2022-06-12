import { Car } from '../classes/car.class';
import { Motorcycle } from '../classes/motorcycle.class';
import * as fs from 'fs';

export class VehicleService {

    saveData(vehicleData: any): any {
        const path = `./vehiclejsons/${Date.now()}.json`;
        fs.writeFile(path, JSON.stringify(vehicleData, null, "\t"), err => {
            return new Error('Error on saving data');
        });


        return vehicleData;
    }

    async saveVehicleData(vehicleData: any): Promise<any> {
        
        if (vehicleData.type === 'car') {
            const car = new Car(vehicleData);
            const result = car.setCarDoors(vehicleData.carDoors);

            if (result instanceof Error) {
                
                return result;
            }

            return this.saveData(car);

        } else if (vehicleData.type === 'motorcycle') {
            const motorcycle = new Motorcycle(vehicleData);
            const result = motorcycle.setMotorcyclePassengersCapacity(vehicleData.passengersCapacity);

            if (result instanceof Error) {
                
                return result;
            }

            return this.saveData(motorcycle);

        }
    };
}