import { UserModel, IUserService } from './model';
import { AjaxReturn } from '../Share/PublicFunction';

export interface IUserService {

    UserList()
        : JQuery.jqXHR<ResponseViewModel>

    CreateUser(model: UserModel)
        : JQuery.jqXHR<ResponseViewModel>

    GetEditUser(Id: number)
        : JQuery.jqXHR<ResponseViewModel>

    EditUser(model: UserModel)
        : JQuery.jqXHR<ResponseViewModel>

    DeleteUser(Id)
        : JQuery.jqXHR<ResponseViewModel>

}

export interface UserModel {
    /**編號 */
    Id: number;
    /**姓名 */
    UserName: string;
    /**電話號碼 */
    PhonuNumber: string;
    /**地址 */
    Address: string;
    /**性別 0:男 1:女*/
    Sex: number;
}


