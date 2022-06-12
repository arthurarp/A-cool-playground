import { Request, Response } from 'express';
import { ZipService } from '../services/ZipService';

export class ZipController {
    async getZipInfo(request: Request, response: Response) {
        const zipService = new ZipService();

        const result = await zipService.getZipcodeData(request.body);

        if (result instanceof Error) {

            return response.status(500).json({
                error: result.message
            });
        }

        return response.status(200).json(result);
    }
}