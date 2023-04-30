import { Page } from '@playwright/test';
import EnvManger from '../utils/EnvManager';

export default class SharedContextClient {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loginUser(emailOrUsername: string, password: string, longToken: boolean) {
        const response = await this.page.request.post(`${EnvManger.GetBaseAPIUrl()}/api/v1/login`, {
            data: {
                username:emailOrUsername,
                password:password,
                long_token:longToken
            }
        });
    }

}