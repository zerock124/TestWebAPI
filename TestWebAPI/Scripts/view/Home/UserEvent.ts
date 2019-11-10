import Vue from 'vue';
import { BvToastOptions } from 'bootstrap-vue';
import { UserModel } from './model';

const UserEventBus: EventVue = new Vue();
export default UserEventBus;

interface EventVue extends Vue {
    $emit: CustomEvent;
}

interface CustomEvent {

    (event: string, ...args: any[]);

    (event: 'ReloadUserList');

    (event: 'userid');
}