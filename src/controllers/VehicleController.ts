import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService';

export class VehicleController {
    async postVehicleInfo(request: Request, response: Response) {
        const vehicleService = new VehicleService();

        const result = await vehicleService.saveVehicleData(request.body);

        if (result instanceof Error) {

            return response.status(500).json({
                error: result.message
            });
        }

        return response.status(200).json(result);
    }
}