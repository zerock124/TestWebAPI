import { UserModel, IUserService } from './model';
import { AjaxReturn } from '../Share/PublicFunction';

export interface IUserService {
    /**
     * 取得Excel匯入清單
     * @param model
     */
    UserList()
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


