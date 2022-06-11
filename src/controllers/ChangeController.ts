import { Request, Response } from 'express';
import { ChangeService } from '../services/ChangeService';
import { ChangeDto } from '../dto/change.dto';

export class ChangeController {
    async getChange(request: Request, response: Response) {
        const { initialInterval, finalInterval } = request.body;

        const changeService = new ChangeService();

        const result = await changeService.getChangeData(changeDto: ChangeDto);

        return response.json(result);
    }
}