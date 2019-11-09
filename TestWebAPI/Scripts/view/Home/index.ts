import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import UserManagement from './UserManagement';

Vue.use(BootstrapVue);
Vue.component('user-management', UserManagement);

const App = new Vue({
    el: "#v_app"
});