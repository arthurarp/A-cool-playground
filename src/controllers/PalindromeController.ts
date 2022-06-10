import { Request, Response } from 'express';
import { PalindromeService } from '../services/PalindromeService';

export class PalindromeController {
    async handle(request: Request, response: Response) {
        const { initialInterval, finalInterval } = request.body;

        const palindromeService = new PalindromeService();

        const result = await palindromeService.getPalindromes({initialInterval, finalInterval});

        return response.json(result);
    }
}