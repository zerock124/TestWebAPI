var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue", "bootstrap-vue", "./UserManagement"], function (require, exports, vue_1, bootstrap_vue_1, UserManagement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    bootstrap_vue_1 = __importDefault(bootstrap_vue_1);
    UserManagement_1 = __importDefault(UserManagement_1);
    vue_1.default.use(bootstrap_vue_1.default);
    vue_1.default.component('user-management', UserManagement_1.default);
    var App = new vue_1.default({
        el: "#v_app"
    });
});
//# sourceMappingURL=index.js.map