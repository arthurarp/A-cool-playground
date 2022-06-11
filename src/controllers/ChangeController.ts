import { Request, Response } from 'express';
import { ChangeService } from '../services/ChangeService';

export class ChangeController {
    async getChange(request: Request, response: Response) {
        const changeService = new ChangeService();

        const result = await changeService.getChangeData(request.body);

        return response.json(result);
    }
}