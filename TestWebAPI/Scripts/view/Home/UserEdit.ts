import { Vue, Component, Prop } from 'vue-property-decorator'
import { BvToastOptions } from "bootstrap-vue";
import { IUserService, UserModel } from "./model";
import user_service from "./service";

@Component({
    template: '#EditUser',
})

export default class UserEdit extends Vue {
    @Prop(Object) UserEdit: UserModel | undefined;
    UserName: string = "";
    PhoneNumber: string = "";
    Address: string = "";
    Sex: string = "";
}