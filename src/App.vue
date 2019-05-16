<template>
    <div id="app">
        <div id="wrapper" :class="[{'toggled': toggled}]">

            <div id="appSidebarWrapper" class="fr-sidebar position-fixed">
                <ul class="sidebar-nav position-static scrollable">
                    <li class="sidebar-brand">
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Color'}">
                            <img src="images/horizontal-logo.svg" alt="Logo" style="width:131px;" class="align-self-center sidebar-brand-logo" />
                            <img src="images/vertical-logo.svg" alt="Logo"  style="height:22px;" class="align-self-center sidebar-brand-mark" />
                            <h5 class="sidebar-item-text ml-2 mb-0 align-self-center font-weight-normal">Design System</h5>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Color'}">
                            <span class="sidebar-item-text">Color</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Typography'}">
                            <span class="sidebar-item-text">Typography</span>
                        </router-link>
                    </li>
                    <li class="sidebar-divider my-3"></li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Alerts'}">
                            <span class="sidebar-item-text">Alerts</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Buttons'}">
                            <span class="sidebar-item-text">Buttons</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Cards'}">
                            <span class="sidebar-item-text">Cards</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Dropdowns'}">
                            <span class="sidebar-item-text">Dropdowns</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Forms'}">
                            <span class="sidebar-item-text">Forms</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'InputGroups'}">
                            <span class="sidebar-item-text">Input Groups</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Sidebar'}">
                            <span class="sidebar-item-text">Sidebar</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex" active-class=""  :to="{ name: 'Tabs'}">
                            <span class="sidebar-item-text">Tabs</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div id="appSidebarOverlay" class="sidebar-overlay w-100 h-100 fixed-top"></div>
            <div id="appContentWrapper" class="fr-no-toolbar">
                <transition name="fade" mode="out-in">
                    <router-view :key="this.$route.fullPath"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'App',
    components: {},
    data: function () {
        return {
            window: {
                width: 0,
                height: 0
            },
            toggled: true
        };
    },
    methods: {
        onToggle () {
            this.toggled = !this.toggled;
        },
        accessIcon (icon) {
            let iconClass = 'fa fa-fw mr-3 ';

            if (icon.length) {
                iconClass = iconClass + icon;
            } else {
                iconClass = iconClass + 'fa-cube';
            }

            return iconClass;
        },
        handleResize (event) {
            console.log('window has been resized: ' + window.innerWidth, event);
            this.window.width = window.innerWidth;
            if (this.window.width < 768) {
                this.toggled = false;
            } else {
                this.toggled = true;
            }
        },
        beforeDestroy () {
            // Unregister the event listener before destroying this Vue instance
            window.removeEventListener('resize', this.handleResize);
        }
    },
    mounted () {
        // Register an event listener when the Vue component is ready
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    filters: {
        capitalize: function (value) {
            return _.capitalize(value);
        }
    }
};
</script>

<!--
  Main Application CSS

  lang="scss" to turn on LESS CSS
-->
<style lang="scss">
    // For theming please see https://getbootstrap.com/docs/4.0/getting-started/theming/
    // Variable must come before bootstrap (to override them)
    // Currently variable and theming loaded through node
    @import "~bootstrap/scss/bootstrap.scss";
    @import "scss/main.scss";

    #app {
        font-family: "Roboto", sans-serif;
        .fr-main-navbar {
          background-color: #fff;
          color: #23282E;
          @media (min-width: 768px) {
              padding-left: $fr-sidebar-nav-width + $grid-gutter-width;
          }
          .navbar-toggler {
              border-color: $fr-navbar-toggler-border-color;
          }
        }
        /* Sidebar Styles */
        .container,
        .container-fluid {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
        .fr-main-dropdown .dropdown-menu {
            padding-top: 0;
            padding-bottom: 0;
        }
        #wrapper {
            height: 100%;
            #appContentWrapper {
                height: 100%;
                padding-left: 0;
                position: relative;

                @media (min-width: 768px) {
                    padding-left: $fr-sidebar-nav-minimized-width;
                }
                .fr-main-nav-toggle {
                    color: #23282E;
                }
                .navbar-nav {
                    .dropdown-menu {
                        position: absolute;
                        float: left;
                    }
                    .nav-link {
                        color: #23282E;
                    }
                }
                &> .container {
                  padding-top: 4.5rem;
                  padding-bottom: $fr-sidebar-nav-minimized-width;
                  -webkit-animation: fadeIn .3s; /* Safari, Chrome and Opera > 12.1 */
                     -moz-animation: fadeIn .3s; /* Firefox < 16 */
                      -ms-animation: fadeIn .3s; /* Internet Explorer */
                       -o-animation: fadeIn .3s; /* Opera < 12.1 */
                          animation: fadeIn .3s;
                }
            }
            &.toggled {
                #appContentWrapper {
                    @media (min-width: 768px) {
                        position: relative;
                        padding-left: $fr-sidebar-nav-width;
                        margin-right: 0;
                        z-index: 1;
                    }
                }
            }
        }
        .fr-sidebar {
            padding-bottom: 41px;
            top: 0;
            width: $fr-sidebar-nav-width;
            height: 100%;
            margin-left: -$fr-sidebar-nav-width;
            overflow: visible;
            background: #fff;
            z-index:2500;
            -webkit-transition: margin-left .15s ease-out;
            transition: margin-left .15s ease-out;
            @media (min-width: 768px) {
                width: $fr-sidebar-nav-minimized-width;
                margin-left: 0;
                -webkit-box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.13);
                -moz-box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.13);
                box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.13);
                .sidebar-brand-logo {
                    display: none;
                }
                .sidebar-brand-mark {
                    display: block;
                }
                .sidebar-item-text {
                    display: none;
                }
                &:hover {
                    margin-left: 0;
                    width: $fr-sidebar-nav-width;
                    .sidebar-nav {
                        width: $fr-sidebar-nav-width;
                        &> li > a.dropdown-toggle::after {
                            display: block;
                        }
                        &> li > a.submenu-toggle {
                            &:after {
                                display: block;
                            }
                        }
                        > li > ul {
                            display: block;
                        }
                    }
                    .sidebar-item-text {
                        display: inline;
                    }
                    .submenu-toggle {
                        &:after {
                            display: block;
                        }
                    }
                    .btn-account,
                    .btn.dropdown-toggle {
                        &:after {
                            content: "\F107";
                            position: absolute;
                            font-family: "Font Awesome 5 Pro";
                            right: 8px;
                            top: 25px;
                            width: 15px;
                            height: 15px;
                            font-size: .875rem;
                            border: none;
                            display: inline-block;
                        }
                    }
                }
            }
            &> a {
                text-align: left;
            }
            .sidebar-brand-logo {
                display: none;
            }
            .btn-account,
            .btn.dropdown-toggle {
                width: 100%;
                height: 100%;
                padding: 10px 12px;
                background-color: transparent;
                display: block;
                border-radius: 0;
                &:after {
                    display: none;
                }
            }
            .sidebar-nav {
                position: absolute;
                top: 0;
                width: $fr-sidebar-nav-width;
                margin: 0;
                padding: 0;
                list-style: none;
                height: 100%;
                font-size: .875rem;
                @media (min-width: 768px) {
                    width: $fr-sidebar-nav-minimized-width;
                }
                > .sidebar-brand {
                    height: 4.5rem;
                    height: 72px;
                    background-color: #fff;
                    width: 100%;
                    top: 0;
                    > a {
                        color: $gray-700;
                        width: 100%;
                        height: 100%;
                        padding: 17px 30px 17px 13px;
                        border-left: none;
                        &:hover {
                          color: $gray-800;
                          background: #fff;
                        }
                        &:after {
                          display: none;
                        }
                    }
                    .sidebar-item-text,
                    h5 {
                        text-align: left;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .sidebar-item-text {
                        color: $gray-700;
                    }

                    .router-link-exact-active {
                        background: $white;
                    }
                }
                > li > a {
                    color: $gray-700;
                    display: block;
                    position: relative;
                    border-left: 3px solid transparent;
                    text-decoration: none;
                    padding: 10px 20px 10px 16px;
                    -webkit-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    transition: all .3s ease;

                    &.router-link-active,
                    &.router-link-exact-active {
                        color: $gray-800;
                        background: #e4f4fd;
                        border-left-color: $primary;
                    }
                    &:hover {
                      color: $gray-800;
                      background: #e4f4fd;
                    }
                    &.submenu-toggle {
                        &:after {
                            content: "\F107";
                            position: absolute;
                            font-family: "Font Awesome 5 Pro";
                            right: 11px;
                            top: 11px;
                            display: none;
                        }
                        &[aria-expanded="true"]:after {
                            content: "\F106";
                        }
                    }
                }
                > li > div > ul {
                    list-style: none;
                    > li > a {
                        color: $gray-700;
                        display: block;
                        position: relative;
                        border-left: 3px solid transparent;
                        text-decoration: none;
                        padding: 10px 20px 10px 50px;
                        &.router-link-active {
                            color: $gray-800;
                            background: #e4f4fd;
                            border-left-color: $primary;
                        }
                        &:hover {
                            color: $gray-800;
                            background: #e4f4fd;
                        }
                    }
                    &.collapsing {
                        -webkit-transition: height .15s ease;
                        -o-transition: height .15s ease;
                        transition: height .15s ease;
                    }
                }
                > .sidebar-divider {
                    width: 100%;
                    height: 1px;
                    background-color: $gray-200;
                }
                .dropdown-menu {
                  font-size: .875rem;
                }
            }
            .sidebar-bottom {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                border-top: 1px solid $gray-200;
                background-color: $white;
                > a {
                    display: block;
                    font-size: .875rem;
                    color: $gray-700;
                    padding: 10px 20px 10px 19px;
                    -webkit-transition: all .3s ease;
                    -o-transition: all .3s ease;
                    transition: all .3s ease;
                    &:hover {
                        color: $gray-800;
                        background: #e4f4fd;
                        text-decoration: none;
                    }
                }
            }
        }
        .fr-sidebar-dark {
            .sidebar-nav {
                > li > a {
                    color: $gray-400;
                    &.router-link-active {
                        color: $white;
                        background: $gray-900;
                        border-left-color: $primary;
                    }
                    &:hover {
                        color: $white;
                        background: $gray-900;
                        text-decoration: none;
                    }
                }
                .sidebar-brand {
                    .sidebar-item-text {
                        color: $gray-300;
                    }
                }
                .btn-account,
                .btn.dropdown-toggle {
                    background-color: $dark;
                    color: $gray-400;
                    h5 {
                        color: $white;
                    }
                }
                > .sidebar-divider {
                    background-color: $gray-600;
                }
                > li > div > ul {
                    > li > a {
                        color: $gray-400;
                        &.router-link-active {
                            color: $white;
                            background: $gray-900;
                            border-left-color: $primary;
                        }
                        &:hover {
                            color: $white;
                            background: $gray-900;
                        }
                    }
                }
            }
            .sidebar-bottom {
                background-color: $dark;
                border-top-color: $gray-600;
                > a {
                    color: $gray-400;
                    &:hover {
                        color: $gray-300;
                        background: $gray-900;
                        text-decoration: none;
                    }
                }
            }

        }
        .sidebar-overlay {
            background-color: $black;
            margin-left:-100%;
            opacity: 0;
            z-index: 2499;
            -webkit-transition: opacity .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition: opacity .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .toggled {
            > .fr-sidebar {
                width: $fr-sidebar-nav-width;
                margin-left: 0;
                -webkit-box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.13);
                -moz-box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.13);
                box-shadow: 1px 0px 9px rgba(0, 0, 0, 0.13);
                .btn-account,
                .btn.dropdown-toggle {
                    padding: 10px 30px 10px 12px;
                    &:after {
                        content: "\F107";
                        position: absolute;
                        font-family: "Font Awesome 5 Pro";
                        right: 11px;
                        top: 25px;
                        width: 15px;
                        height: 15px;
                        font-size: .875rem;
                        border: none;
                        display: inline-block;
                    }
                }
                .sidebar-brand-logo {
                    display: none;
                }
                .sidebar-brand-mark {
                    display: block;
                }
                .sidebar-nav {
                    width: $fr-sidebar-nav-width;
                    > li > a.dropdown-toggle {
                        &:after {
                            display: block;
                        }
                    }
                    > li > a.submenu-toggle {
                        &:after {
                            display: block;
                        }
                    }
                }
                .submenu-toggle {
                    &:after {
                        display: block;
                    }
                }
                .sidebar-item-text {
                    display: inline;
                }
                @media (min-width: 768px) {

                }
            }
            .sidebar-overlay {
                @media (max-width: 767px) {
                    opacity: .2;
                    margin-left:0;
                }
            }
        }
    }

    .modal-open {
        #app {
            #wrapper {
                .fr-sidebar {
                    z-index: 0;
                }
            }
        }
    }
</style>
