type PalindromeRequest = {
    initialInterval: number;
    finalInterval: number;
}

export class PalindromeService {

    isPalindrome(number: number): boolean {
        const numberString = number.toString();
        const reversedNumberString = numberString.split('').reverse().join('');

        return numberString === reversedNumberString;
    }

    async getPalindromes({initialInterval, finalInterval}: PalindromeRequest): Promise<any> {
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