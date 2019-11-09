define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function AjaxReturn(_setting, _datatype) {
        if (_datatype === void 0) { _datatype = 'JSON'; }
        var defSetting = {
            contentType: "application/json; charset=utf-8",
            cache: false
        };
        if (_datatype == 'JSON')
            _setting.data = JSON.stringify(_setting.data);
        if (_datatype == 'FormData') {
            defSetting.contentType = false;
            defSetting.processData = false;
        }
        return jQuery.ajax(Object.assign(defSetting, _setting));
    }
    exports.AjaxReturn = AjaxReturn;
});
//# sourceMappingURL=PublicFunction.js.map