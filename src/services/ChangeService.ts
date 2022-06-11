import { ChangeDto } from '../dto/change.dto';

export class ChangeService {

    async getChangeData(changeData: ChangeDto): Promise<any> {
        const { amount, totalAmountPaid } = changeData;

        const change = totalAmountPaid - amount;

        const changeDataResponse = {
            change,
            changeData
        };

        return changeDataResponse;
    };
}