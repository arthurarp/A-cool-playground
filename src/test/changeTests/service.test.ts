import { ChangeService } from '../../services/ChangeService';
import { ChangeDto } from '../../dto/change.dto';

describe('Testing change service ', () => {
    const changeService = new ChangeService();

    it('should return notes correctly on getNotes function', () => {
        const result = changeService.getNotes(121);

        const expected = {
            ones: 1,
            tens: 2,
            hundreds: 1,
        }
        expect(result).toStrictEqual(expected);
    });

    it('should return correctly zeros on getNotes function', () => {
        const result = changeService.getNotes(-25);

        const expected = {
            ones: 0,
            tens: 0,
            hundreds: 0,
        }
        expect(result).toStrictEqual(expected);
    });

    it('should return correctly on changeData function', async () => {

        const changeData: ChangeDto = {
            amount: 120,
            totalAmountPaid: 200,
        };

        const result = await changeService.getChangeData(changeData);

        const expected = {
            totalAmount: 120,
            totalPaid: 200,
            change: {
                value: 80,
                total_notes: 8,
                notes: {
                    ones: 0,
                    tens: 8,
                    hundreds: 0,
                }
            }
        };

        expect(result).toStrictEqual(expected);
    });
})