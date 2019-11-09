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

    CreateUser(model: UserModel)
        : JQuery.jqXHR<ResponseViewModel> {
        const setting: JQueryAjaxSettings = {
            url: `/api/User`,
            type: "POST",
            data: model,
        }
        return AjaxReturn(setting);
    }
}

const user_service: IUserService = new UserService();
export default user_service;