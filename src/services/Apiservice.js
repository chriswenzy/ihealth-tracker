import { constant } from "../constant/constant";
import axios from 'axios'

export class ApiService {
    static async request(method, url, body) {
        const BaseURL = constant.HttpURL + `${url}`;

        const token = localStorage.getItem("token");
        
        const headers = {
            "Content-Type": "application/json",
        }


        // headers.append("Content-Type", "application/json");

        if (token) {
            headers["Authorization"] = `${token}` ;
        }

        
console.log(headers)
        const BodyRequest = body ? body : undefined;

        const request = await axios({
            method: method,
            url: BaseURL,
            headers: headers,
            data: BodyRequest
        });

        return request;
    }

    static async get(url, body) {
        return await this.request(constant.GET, url, body);
    }
    static async post(url, body) {
        return await this.request(constant.POST, url, body);
    }
    static async put(url, body) {
        return await this.request(constant.PUT, url, body);
    }

    static async delete(url, body) {
        return await this.request(constant.DELETE, url, body);
    }

    static async patch(url, body) {
        return await this.request(constant.PATCH, url, body);
    }
}
