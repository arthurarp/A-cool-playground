import { PalindromeDto } from '../dto/palindrome.dto';

export class PalindromeService {

    isPalindrome(number: number): boolean {
        const numberString = number.toString();
        const reversedNumberString = numberString.split('').reverse().join('');

        return numberString === reversedNumberString;
    }

    async getPalindromes(palindromeData: PalindromeDto): Promise<any> {
        
        const { initialInterval, finalInterval } = palindromeData;
        const palindromes = [];

        for (let currentNumber = initialInterval; currentNumber <= finalInterval; currentNumber++) {
            const isPalindrome = this.isPalindrome(currentNumber);

            if (isPalindrome) {
                palindromes.push(currentNumber);
            }
        }

        return palindromes;
    };
}