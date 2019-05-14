import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

/**
 * Available toolbar configuration
 * hideToolbar - Will hide main toolbar when route accessed
 */
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/color'
        },
        {
            path: '/color',
            name: 'Color',
            component: () => import('./components/Color'),
            meta: { hideToolbar: false }
        },
        {
            path: '/typography',
            name: 'Typography',
            component: () => import('./components/Typography'),
            meta: { hideToolbar: false }
        },
        {
            path: '/alerts',
            name: 'Alerts',
            component: () => import('./components/Alerts'),
            meta: { hideToolbar: false }
        },
        {
            path: '/buttons',
            name: 'Buttons',
            component: () => import('./components/Buttons'),
            meta: { hideToolbar: false }
        },
        {
            path: '/cards',
            name: 'Cards',
            component: () => import('./components/Cards'),
            meta: { hideToolbar: false }
        },
        {
            path: '/dropdowns',
            name: 'Dropdowns',
            component: () => import('./components/Dropdowns'),
            meta: { hideToolbar: false }
        },
        {
            path: '/forms',
            name: 'Forms',
            component: () => import('./components/Forms'),
            meta: { hideToolbar: false }
        },
        {
            path: '/inputgroups',
            name: 'InputGroups',
            component: () => import('./components/InputGroups'),
            meta: { hideToolbar: false }
        },
        {
            path: '/sidebar',
            name: 'Sidebar',
            component: () => import('./components/Sidebar'),
            meta: { hideToolbar: false }
        },
        {
            path: '/tabs',
            name: 'Tabs',
            component: () => import('./components/Tabs'),
            meta: { hideToolbar: false }
        },
        {
            path: '*',
            component: () => import('./components/NotFound'),
            meta: { hideToolbar: true, bodyClass: 'fr-body-image' }
        }
    ]
});
