import { PalindromeService } from '../../services/PalindromeService';
import { PalindromeDto} from '../../dto/palindrome.dto';

describe('Testing palindrome service', () => {
    
    const palindromeService = new PalindromeService();

    it('Passing a palindrome, the function should return true ', () => {

        const result = palindromeService.isPalindrome(121);

        expect(result).toBe(true);

    });

    it('Not passing a palindrome, the function should return false ', () => {

        const result = palindromeService.isPalindrome(5666)

        expect(result).toBe(false);

    });

    it('Should return correct list of palindromes between a interval ', async () => {

        const palindromeData: PalindromeDto = {
            initialInterval: 100,
            finalInterval: 150,
        };

        const expected = [
            101,
            111,
            121,
            131,
            141,
        ];

        const result = await palindromeService.getPalindromes(palindromeData);
        
        expect(result).toStrictEqual(expected);

    });

})