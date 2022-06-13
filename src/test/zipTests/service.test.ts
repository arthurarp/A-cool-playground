import { ZipService } from '../../services/ZipService';
import { ZipDto } from '../../dto/zip.dto';

jest.mock('axios', () => ({
    create: jest.fn().mockReturnValue(1),
    get: jest.fn(() => Promise.resolve({
        data: {
            cep: "71805-111",
            logradouro: "QN 1 Conjunto 11"
        }
    })),
}));


describe('Testing zip service ', () => {
    const zipService = new ZipService();
    
    it('should return zipcode info correctly', async () => {
        
        const zipData: ZipDto = {
            zipcodeOne: "71805111",
            zipcodeTwo: "71805112",
            zipcodeThree: "71805113",
            zipcodeFour: "71805114",
            zipcodeFive: "7180511522",
        };

        const result = await zipService.getZipcodeData(zipData);

        const expected = {
            "71805111": {
                "cep": "71805-111",
                "logradouro": "QN 1 Conjunto 11",
            },
            "71805112": {
                "cep": "71805-111",
                "logradouro": "QN 1 Conjunto 11",
            },
            "71805113": {
                "cep": "71805-111",
                "logradouro": "QN 1 Conjunto 11",
            },
            "71805114": {
                "cep": "71805-111",
                "logradouro": "QN 1 Conjunto 11",
            },
            "7180511522": {
                "cep": "71805-111",
                "logradouro": "QN 1 Conjunto 11",
            },
        };

        
        expect(result).toEqual(expected);
    });

})