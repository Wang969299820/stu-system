import Vue from "vue";
import toast from "./index.vue";

const Toast = Vue.extend(toast);

export default function createToast({duration=2000, msg, type}) {
    const app = new Toast({
        el: document.createElement("div"),
        data: {
            showClass: true,
            over: true,
            type,
            msg
        }
    });
    document.body.appendChild(app.$el);
    setTimeout(_ => {
        app.showClass = false;
    }, duration-300);
    setTimeout(_ => {
        app.over = false;
    }, duration);
}
