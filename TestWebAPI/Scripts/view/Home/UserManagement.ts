import { Vue, Component, Watch } from 'vue-property-decorator'
import { BvToastOptions } from "bootstrap-vue";
import { IUserService, UserModel } from "./model";
import user_service from "./service";
import UserItem from "./UserItem";
import UserEdit from "./UserEdit";
import userevent from "./UserEvent"

@Component({
    template: '#UserList',
    components: {
        'user-list': UserItem,
        'user-edit': UserEdit,
    }
})

export default class UserManagement extends Vue {
    UserList: UserModel[] = [];
    EditModel: UserModel | undefined;
    UserName: string = "";
    PhoneNumber: string = "";
    Address: string = "";
    Sex: number = 0;

    EditId: number = 0;
    EditUserName: string = "";
    EditPhoneNumber: string = "";
    EditAddress: string = "";
    EditSex: number = 0;


    created() {
        const _this = this;
        _this.GetUserList();
        userevent.$on('userid', _this.GetEditUser.bind(_this));
        userevent.$on('ReloadUserList', _this.GetUserList.bind(_this));
    }

    @Watch('UserList')
    onUserListChange() {
        const _this = this;
        user_service.UserList().then(res => {
            console.log(res);
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                console.log("測試中");
                _this.UserList = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
    }

    GetUserList() {
        const _this = this;
        user_service.UserList().then(res => {
            console.log(res);
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                console.log("測試中");
                _this.UserList = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
    }

    CreateUser() {
        const _this = this;
        var _formdata = new FormData();
        _formdata.append("UserName", _this.UserName);
        _formdata.append("PhoneNumber", _this.PhoneNumber);
        _formdata.append("Address", _this.Address);
        _formdata.append("Sex", _this.Sex.toString());

        _this.CreateUserForm(_formdata);
    }

    CreateUserForm(data) {
        const _this = this;
        user_service.CreateUser(data).then(res => {
            console.log(res);
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                _this.UserList = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
        userevent.$emit('ReloadUserList');
    }

    GetEditUser(userid) {
        const _this = this;
        user_service.GetEditUser(userid).then(res => {
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                console.log(res);
                _this.EditId = res.Data.Id;
                _this.EditUserName = res.Data.UserName;
                _this.EditPhoneNumber = res.Data.PhonuNumber;
                _this.EditAddress = res.Data.Address;
                _this.EditSex = res.Data.Sex;
            }
        }).catch(err => {
            console.log(err);
        })
    }

    EditUserForm() {
        const _this = this;
        var _formdata = new FormData();
        _formdata.append("Id", _this.EditId.toString());
        _formdata.append("UserName", _this.EditUserName);
        _formdata.append("PhoneNumber", _this.EditPhoneNumber);
        _formdata.append("Address", _this.EditAddress);
        _formdata.append("Sex", _this.EditSex.toString());

        _this.EditUser(_formdata);
    }

    EditUser(data) {
        const _this = this;

        user_service.EditUser(data).then(res => {
            console.log(res);
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                _this.UserList = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
        userevent.$emit('ReloadUserList');
    }

}