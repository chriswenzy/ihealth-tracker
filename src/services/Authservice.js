import { ApiService } from "./Apiservice";

export class AuthServices {

    static logOut() {
        localStorage.removeItem("token");
    }

static async getAuth() {
    return ApiService.post('users/get-user')
  }

    static async login(model) {
        try {
            return ApiService.post("users/login", model).then(
                response => {
                    return response
                }
            );
        } catch (err) {
            return err;
        }
    }
}
