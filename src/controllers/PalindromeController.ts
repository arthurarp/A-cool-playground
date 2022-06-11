import { Request, Response } from 'express';
import { PalindromeService } from '../services/PalindromeService';

export class PalindromeController {
    async handle(request: Request, response: Response) {

        const palindromeService = new PalindromeService();

        const result = await palindromeService.getPalindromes(request.body);

        return response.json(result);
    }
}