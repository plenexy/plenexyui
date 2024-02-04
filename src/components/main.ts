import type { App } from 'vue';
import { Notification } from "../components/index";
import { Checkbox } from "../components/index";
import { Toast } from "../components/index";

export default {
    install: (app: App) => {
        app.component('Notification', Notification);
        app.component('Checkbox', Checkbox);
        app.component('Toast', Toast)
    }
};

export {
    Notification,
    Checkbox,
    Toast
};