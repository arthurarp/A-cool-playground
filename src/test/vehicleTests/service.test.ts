import { Car } from '../../classes/car.class';
import { Motorcycle } from '../../classes/motorcycle.class';
import { VehicleService } from '../../services/VehicleService';

jest.mock("fs", () => ({ 
    writeFile: jest.fn().mockResolvedValue(1),
}));

describe('Testing vehicle service ', () => {
    const vehicleService = new VehicleService();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return car data correctly', async () => {

        const vehicleData: any = {
            type: "car",
            model: "Fiesta",
            year: 2020,
            brand: "Ford",
            carDoors: 4,
        }

        const result = await vehicleService.saveVehicleData(vehicleData);
        
        const expected = {
            model: "Fiesta",
            year: 2020,
            brand: "Ford",
            carDoors: 4,
        };

        expect(result).toEqual(expected);
    });

    it('should return motorcycle data correctly', async () => {

        const vehicleData: any = {
            type: "motorcycle",
            model: "CG",
            year: 2020,
            brand: "Honda",
            wheels: 2,
            passengersCapacity: 2,
        }

        const result = await vehicleService.saveVehicleData(vehicleData);
        
        const expected = {
            model: "CG",
            year: 2020,
            brand: "Honda",
            wheels: 2,
            passengersCapacity: 2,
        };

        expect(result).toEqual(expected);
    });

    it('should return correctly the number of car doors', async () => {

        const vehicleData: any = {
            type: "car",
            model: "Fiesta",
            year: 2020,
            brand: "Ford",
            carDoors: 4,
        };

        const car = new Car(vehicleData);

        car.setCarDoors(4);

        const result = car.getCarDoors();
        
        expect(result).toBe(4);
    });

    it('should return correctly the motorcycle passengers capacity', async () => {

        const vehicleData: any = {
            type: "motorcycle",
            model: "CG",
            year: 2020,
            brand: "Honda",
            wheels: 2,
            passengersCapacity: 2,
        };

        const motorcycle = new Motorcycle(vehicleData);

        motorcycle.setMotorcyclePassengersCapacity(2);

        const result = motorcycle.getMotorcyclePassengersCapacity();
    
        expect(result).toBe(2);
    });

    it('should return an Error on creating car', async () => {

        const vehicleData: any = {
            type: "car",
            model: "Fiesta",
            year: 2020,
            brand: "Ford",
            carDoors: 5,
        }

        const result = await vehicleService.saveVehicleData(vehicleData);
        
        expect(result).toEqual(new Error('Invalid number of doors for type: car'));
    });

    it('should return an Error on creating motorcycle', async () => {

        const vehicleData: any = {
            type: "motorcycle",
            model: "CG",
            year: 2020,
            brand: "Honda",
            wheels: 2,
            passengersCapacity: 3,
        }

        const result = await vehicleService.saveVehicleData(vehicleData);
        
        expect(result).toEqual(new Error('Invalid number of passengers capacity for type: motorcycle'));
    });

})