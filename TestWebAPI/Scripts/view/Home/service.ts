import { UserModel, IUserService } from './model';
import { AjaxReturn } from '../Share/PublicFunction';

class UserService implements IUserService {

    UserList()
        : JQuery.jqXHR<ResponseViewModel> {
        const setting: JQueryAjaxSettings = {
            url: `/api/User`,
            type: "GET",
        }
        return AjaxReturn(setting);
    }

    GetEditUser(Id: number)
        : JQuery.jqXHR<ResponseViewModel> {
        const setting: JQueryAjaxSettings = {
            url: "api/User/?Id=" + Id,
            type: "GET",
        }
        return AjaxReturn(setting);
    }

    EditUser(Model: UserModel)
        : JQuery.jqXHR<ResponseViewModel> {
        const setting: JQueryAjaxSettings = {
            url: `Home/EditUser/`,
            type: "POST",
            data: Model
        }
        return AjaxReturn(setting, 'FormData');
    }

    DeleteUser(Id)
        : JQuery.jqXHR<ResponseViewModel> {
        const setting: JQueryAjaxSettings = {
            url: `api/User/${Id}`,
            type: "DELETE",
            data: Id,
        }
        return AjaxReturn(setting);
    }

    CreateUser(model: UserModel)
        : JQuery.jqXHR<ResponseViewModel> {
        const setting: JQueryAjaxSettings = {
            url: `Home/CreateUser`,
            type: "POST",
            data: model,
        }
        console.log(model);
        return AjaxReturn(setting, 'FormData');
    }

}

const user_service: IUserService = new UserService();
export default user_service;