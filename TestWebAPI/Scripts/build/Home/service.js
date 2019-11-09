define(["require", "exports", "../Share/PublicFunction"], function (require, exports, PublicFunction_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function () {
        function UserService() {
        }
        UserService.prototype.UserList = function () {
            var setting = {
                url: "/api/User",
                type: "GET",
            };
            return PublicFunction_1.AjaxReturn(setting);
        };
        UserService.prototype.CreateUser = function (model) {
            var setting = {
                url: "/api/User",
                type: "POST",
                data: model,
            };
            return PublicFunction_1.AjaxReturn(setting);
        };
        return UserService;
    }());
    var user_service = new UserService();
    exports.default = user_service;
});
//# sourceMappingURL=service.js.map