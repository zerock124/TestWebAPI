

export function AjaxReturn(_setting: JQueryAjaxSettings, _datatype: AjaxDataType = 'JSON'): JQuery.jqXHR {
	const defSetting: JQueryAjaxSettings = {
		contentType: "application/json; charset=utf-8",
		cache: false
	}
	if (_datatype == 'JSON')
		_setting.data = JSON.stringify(_setting.data);
	if (_datatype == 'FormData') {
		defSetting.contentType = false;
		defSetting.processData = false;
	}

	return jQuery.ajax(Object.assign(defSetting, _setting));
}


type AjaxDataType = 'JSON' | 'FormData';