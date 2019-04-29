import { platformBrowserDynamic } from "../node_modules/angular-ts-decorators";
import { platformBrowserDynamic } from "angular-ts-decorators";

import "./styles.scss";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
