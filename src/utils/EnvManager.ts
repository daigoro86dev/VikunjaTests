import * as dotenv from 'dotenv'; 

export default class EnvManger {

    static LoadEnv() {
        const envName = process.env.ENV;
        dotenv.config({ path: `./envs/${envName}.env` });
    }
    
    static GetBaseUrl() {
        return process.env.BASE_URL;
    }

    static GetBaseAPIUrl() {
        return process.env.BASE_API_URL;
    }

    static GetAdminEmail() {
        return process.env.ADMIN_EMAIL;
    }

    static GetAdminName() {
        return process.env.ADMIN_NAME;
    }

    static GetAdminPassword() {
        return process.env.ADMIN_PASSWORD;
    }
}