import { ZipDto } from '../dto/zip.dto';
import apiInstance from '../api/main';

export class ZipService {

    async getZipcodeData(zipData: ZipDto): Promise<any> {
        
        const zipcodesList = Object.values(zipData);

        var zipCodesData = {};

        for(let i = 0; i < zipcodesList.length; i++) {
            try {
                const response = await apiInstance.get(`/ws/${zipcodesList[i]}/json/`);
                zipCodesData[zipcodesList[i]] = response.data;

            } catch (err) {
                zipCodesData[zipcodesList[i]] = {
                    error: 'Error',
                    message: err.message
                };
            }

        };

        return zipCodesData;
    
    };
}