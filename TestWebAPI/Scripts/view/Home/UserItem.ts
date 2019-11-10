import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { IUserService, UserModel } from './model';
import user_service from './service';
import UserEdit from "./UserEdit";
import userevent from "./UserEvent"

@Component({
    template: '#UsetItem',
    components: {
        'user-edit': UserEdit,
    }
})

export default class UsetItem extends Vue {
    @Prop(Object) UserData: UserModel | undefined;

    EditUser() {
        const _this = this;
        if (_this.UserData)
            userevent.$emit('userid', _this.UserData.Id);
    }


    DeleteUser() {
        const _this = this;
        if (_this.UserData) {
            user_service.DeleteUser(_this.UserData.Id).then(res => {


            }).catch(err => {

            })
            userevent.$emit('ReloadUserList');
        }
    }

    OpenEditorDriver() {
        this.$bvModal.show('editor-user')
    }
}

