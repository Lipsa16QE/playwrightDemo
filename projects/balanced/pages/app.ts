import { Page } from "@playwright/test";
import { SideBar } from "./components/sidebar.component";
import { SalesPage } from "./sales.page";
import {BasePage} from "./base.page";
import {Login} from "./login.page";
export class App {
    private readonly _salesPage:SalesPage;
    private readonly _sidebar:SideBar;
    private readonly _base:BasePage;
    private readonly _login:Login;

    constructor(page: Page) {
       
        this._salesPage = new SalesPage(page);
        this._sidebar = new SideBar(page);
        this._base = new BasePage(page);
        this._login = new Login(page);
        
    }

    public get salesPage(): SalesPage {
        return this._salesPage;
    }

    public get sidebar(): SideBar {
        return this._sidebar;
    }
    public get base(): BasePage {
        return this._base;
    }
    public get login(): Login {
        return this._login;
    }
  
}