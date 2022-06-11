import { ChangeDto, NotesDto } from '../dto/change.dto';

export class ChangeService {

    getNotes(change: number): NotesDto {
        const notes = {
            ones: 0,
            tens: 0,
            hundreds: 0,
        };

        while (change > 0) {
            if (change >= 100) {
                notes.hundreds++;
                change -= 100;
            } else if (change >= 10) {
                notes.tens++;
                change -= 10;
            } else {
                notes.ones++;
                change--;
            }
        }

        return notes;
    }

    async getChangeData(changeData: ChangeDto): Promise<any> {
        const { amount, totalAmountPaid } = changeData;

        const change = totalAmountPaid - amount;
        const notes = this.getNotes(change)
        const totalNotes = notes.ones + notes.tens + notes.hundreds;

        const changeDataResponse = {
            totalAmount: amount,
            totalPaid: totalAmountPaid,
            change: {
                value: change,
                total_notes: totalNotes,
                notes: notes
            }
        };

        return changeDataResponse;
    };
}