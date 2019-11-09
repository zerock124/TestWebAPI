import { Vue, Component } from 'vue-property-decorator'
import { BvToastOptions } from "bootstrap-vue";
import { IUserService, UserModel } from "./model";
import user_service from "./service"

@Component({
    template:'#UserList'
})

export default class UserManagement extends Vue {
    UserList: UserModel | undefined;

    created()
    {
        const _this = this;
        _this.GetUserList();
    }

    GetUserList()
    {
        const _this = this;
        user_service.UserList().then(res => {
            console.log(res);
            if (!res.Success)
            {
                console.log(res);
            }
            if (res.Data)
            {
                _this.UserList = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
    }
}