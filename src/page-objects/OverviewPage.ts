import { Locator, Page } from '@playwright/test';
import EnvManger from '../utils/EnvManager';

export default class OverviewPage {
    private readonly page: Page;
    private readonly addNewTaskTextArea: Locator;
    private readonly addTaskButton: Locator;
    private readonly testListMenuTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addNewTaskTextArea = page.getByPlaceholder("Add a new task…");
        this.addTaskButton = page.locator(".add-task-button");
        this.testListMenuTitle = page.locator(".list-menu-title", { hasText: "Test List" });
    }

    async goToOverviewPage() {
        await this.page.goto(`${EnvManger.GetBaseUrl()}/`);
    }

    getAddNewTaskTextArea() {
        return this.addNewTaskTextArea;
    }

    async enterNewTaskText(task: string) {
        await this.addNewTaskTextArea.fill(task);
    }

    async clickAddTaskButton() {
        await this.addTaskButton.click();
    }

    async clickTestListMenuTitle() {
        await this.testListMenuTitle.click();
    }
}