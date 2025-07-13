import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { firstValueFrom, Observable } from "rxjs";

@Injectable()
export class DbApiService {

    async requestWithData(observable: Observable<AxiosResponse<any>>): Promise<any> {
        try {
            const response = await firstValueFrom(observable);
            if (response.data === undefined || response.data === null) {
                throw new HttpException("Response data is undefined or null", HttpStatus.NOT_FOUND);
            }
            return response.data
        } catch (error) {
            console.log({ error, timestamp: new Date() });
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException("An error occurred while processing the request", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async request(observable: Observable<AxiosResponse<any>>) {
        try {
            const response = await firstValueFrom(observable);
            if (response.data === undefined || response.data === null) {
                throw new HttpException("Response data is undefined or null", HttpStatus.NOT_FOUND);
            }
            return response;
        } catch (error) {
            console.log({ error, timestamp: new Date() });
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException("An error occurred while processing the request", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}