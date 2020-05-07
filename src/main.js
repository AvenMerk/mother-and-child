import Vue from 'vue';
import App from './App.vue';
import Constants from './common/constants';
import "./styles/main.scss";

// Tell Vue to use the plugin
Vue.prototype.CONSTANTS = Constants;
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");


