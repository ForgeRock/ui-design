import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ToggleButton from 'vue-js-toggle-button';
import Notifications from 'vue-notification';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faTimes, faCheckCircle, faExclamationTriangle, faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import i18n from './i18n';
import BootstrapVue from 'bootstrap-vue';

library.add(faEye, faEyeSlash, faTimes, faCheckCircle, faExclamationTriangle, faTimesCircle, faInfoCircle);
Vue.component('fa', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VeeValidate, { inject: false, fastExit: false });

/*
    Basic Notification Example:
    this.$notify({
        group: 'IDMMessages', // Currently the only group
        type: 'success', // Available types success, failure, info, warning
        title: this.$t('common.messages.saveSuccess'), //Translated string
        text: this.$t('pages.resources.mappingSave') // Translated string (can also be html)
    });
 */
Vue.use(Notifications);

Vue.use(ToggleButton);

Vue.use(BootstrapVue);

// Global mixin for making openIDM REST calls
Vue.mixin({
    methods: {
        displayNotification: function (notificationType, message) {
            /* istanbul ignore next */
            this.$notify({
                group: 'IDMMessages',
                type: notificationType,
                text: message
            });
        }
    }
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
