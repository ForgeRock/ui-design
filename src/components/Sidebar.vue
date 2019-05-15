<template>
    <b-container>
        <template>
            <b-container>
                <template>
                    <h1 class="display-3">Sidebar</h1>
                    <p class="mb-4 lead">Use the sidebar for primary application navigation.</p>
                    <section class="my-5">
                        <h2 class="mb-4">States</h2>
                        <p class="mb-4">On desktop the sidebar is fixed and scrolls overflow items.</p>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h6 class="mb-3 text-muted">Desktop: Toggled</h6>
                                        <nav id="sidebar1" class="toggled overflow-hidden pr-4 border mb-4">
                                            <div class="fr-sidebar position-relative">
                                                <ul class="sidebar-nav position-static scrollable" style="max-height: 330px;">
                                                    <li class="sidebar-brand position-static">
                                                        <b-dropdown id="dropdown-1" text="Dropdown Button" variant="account" class="d-block h-100 w-100" boundary="viewport" no-caret>
                                                            <template slot="button-content">
                                                                <div class="media">
                                                                  <img class="my-1 rounded-circle" src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                  <div class="media-body sidebar-item-text pl-3">
                                                                    <h5 class="my-0">Rock Financial</h5>
                                                                    <small>Barbara Jensen</small>
                                                                  </div>
                                                                </div>
                                                            </template>
                                                            <div class="px-4 py-2">
                                                                <h5 class="my-0">Rock Financial</h5>
                                                                <span class="text-muted">Developer Edition</span>
                                                            </div>
                                                            <b-dropdown-item><i class="fal fa-cog mr-3"></i>Environment settings</b-dropdown-item>
                                                            <b-dropdown-item><i class="fal fa-sync-alt mr-3"></i>Switch Environment</b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <div class="media">
                                                                    <img class="rounded-circle align-self-center" src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                    <div class="media-body sidebar-item-text pl-3">
                                                                        <h5 class="my-0">Barbara Jensen</h5>
                                                                        <span class="text-muted">bjensen@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <i class="fal fa-sign-out-alt mr-3"></i>Sign Out
                                                            </b-dropdown-item>
                                                        </b-dropdown>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="router-link-active" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-tachometer"></i><span class="sidebar-item-text">Dashboard</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-th"></i><span class="sidebar-item-text">Applications</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-database"></i><span class="sidebar-item-text">Identities</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-sign-in-alt"></i><span class="sidebar-item-text">Authentication</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-check-circle"></i><span class="sidebar-item-text">Rules</span>
                                                        </router-link>
                                                    </li>
                                                    <li class="sidebar-divider my-3"></li>
                                                    <li>
                                                        <b-link v-b-toggle.settingsSubmenu1 class="submenu-toggle"><i class="fal fa-fw mr-3 fa-cog"></i><span class="sidebar-item-text">Settings</span></b-link>
                                                        <b-collapse id="settingsSubmenu1">
                                                          <ul class="p-0 list-unstyled">
                                                              <li>
                                                                  <router-link active-class="" :to="{ name: '#'}">
                                                                      <span class="sidebar-item-text">Remote Connections</span>
                                                                  </router-link>
                                                              </li>
                                                          </ul>
                                                        </b-collapse>
                                                    </li>
                                                </ul>
                                                <div class="sidebar-bottom d-none d-md-block">
                                                    <b-link class="expand-sidebar" @click="onToggle"><i class="fal fa-fw mr-3 fa-columns"></i><span class="sidebar-item-text">Toggle sidebar</span></b-link>
                                                </div>
                                            </div>
                                            <div class="sidebar-overlay w-100 h-100 fixed-top"></div>
                                        </nav>
                                    </div>
                                    <div class="col-lg-6">
                                        <h6 class="mb-3 text-muted">Desktop: Minimized</h6>
                                        <nav id="sidebar2" class="overflow-hidden pr-4 border mb-4">
                                            <div class="fr-sidebar position-relative" @mouseleave="onMouseLeaveSidebar2">
                                                <ul class="sidebar-nav position-static scrollable" style="max-height: 330px;">
                                                    <li class="sidebar-brand position-static">
                                                        <b-dropdown id="dropdown-1" text="Dropdown Button" variant="account" class="d-block h-100 w-100" boundary="viewport" no-caret ref="dropdown2">
                                                            <template slot="button-content">
                                                                <div class="media">
                                                                  <img class="my-1 rounded-circle" src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                  <div class="media-body sidebar-item-text pl-3">
                                                                    <h5 class="my-0">Rock Financial</h5>
                                                                    <small>Barbara Jensen</small>
                                                                  </div>
                                                                </div>
                                                            </template>
                                                            <div class="px-4 py-2">
                                                                <h5 class="my-0">Rock Financial</h5>
                                                                <span class="text-muted">Developer Edition</span>
                                                            </div>
                                                            <b-dropdown-item><i class="fal fa-cog mr-3"></i>Environment settings</b-dropdown-item>
                                                            <b-dropdown-item><i class="fal fa-sync-alt mr-3"></i>Switch Environment</b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <div class="media">
                                                                    <img class="rounded-circle align-self-center" src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                    <div class="media-body sidebar-item-text pl-3">
                                                                        <h5 class="my-0">Barbara Jensen</h5>
                                                                        <span class="text-muted">bjensen@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <i class="fal fa-sign-out-alt mr-3"></i>Sign Out
                                                            </b-dropdown-item>
                                                        </b-dropdown>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="router-link-active" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-tachometer"></i><span class="sidebar-item-text">Dashboard</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-th"></i><span class="sidebar-item-text">Applications</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-database"></i><span class="sidebar-item-text">Identities</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-sign-in-alt"></i><span class="sidebar-item-text">Authentication</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-check-circle"></i><span class="sidebar-item-text">Rules</span>
                                                        </router-link>
                                                    </li>
                                                    <li class="sidebar-divider my-3"></li>
                                                    <li>
                                                        <b-link v-b-toggle.settingsSubmenu2 class="submenu-toggle"><i class="fal fa-fw mr-3 fa-cog"></i><span class="sidebar-item-text">Settings</span></b-link>
                                                        <b-collapse id="settingsSubmenu2">
                                                          <ul class="p-0 list-unstyled">
                                                              <li>
                                                                  <router-link active-class="" :to="{ name: '#'}">
                                                                      <span class="sidebar-item-text">Remote Connections</span>
                                                                  </router-link>
                                                              </li>
                                                          </ul>
                                                        </b-collapse>
                                                    </li>
                                                </ul>
                                                <div class="sidebar-bottom d-none d-md-block">
                                                    <b-link class="expand-sidebar" @click="onToggle"><i class="fal fa-fw mr-3 fa-columns"></i><span class="sidebar-item-text">Toggle sidebar</span></b-link>
                                                </div>
                                            </div>
                                            <div class="sidebar-overlay w-100 h-100 fixed-top"></div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Color schemes</h2>
                        <p class="mb-4">Sidebar comes in light or dark theme.</p>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h6 class="mb-3 text-muted">Light</h6>
                                        <nav id="sidebar3" class="toggled overflow-hidden pr-4 border mb-4">
                                            <div class="fr-sidebar position-relative">
                                                <ul class="sidebar-nav position-static scrollable" style="max-height: 330px;">
                                                    <li class="sidebar-brand position-static">
                                                        <b-dropdown id="dropdown-3" text="Dropdown Button" variant="account" class="d-block h-100 w-100" boundary="viewport" no-caret>
                                                            <template slot="button-content">
                                                                <div class="media">
                                                                  <img class="my-1 rounded-circle"  src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                  <div class="media-body sidebar-item-text pl-3">
                                                                    <h5 class="my-0">Rock Financial</h5>
                                                                    <small>Barbara Jensen</small>
                                                                  </div>
                                                                </div>
                                                            </template>
                                                            <div class="px-4 py-2">
                                                                <h5 class="my-0">Rock Financial</h5>
                                                                <span class="text-muted">Developer Edition</span>
                                                            </div>
                                                            <b-dropdown-item><i class="fal fa-cog mr-3"></i>Environment settings</b-dropdown-item>
                                                            <b-dropdown-item><i class="fal fa-sync-alt mr-3"></i>Switch Environment</b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <div class="media">
                                                                    <img class="rounded-circle align-self-center" src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                    <div class="media-body sidebar-item-text pl-3">
                                                                        <h5 class="my-0">Barbara Jensen</h5>
                                                                        <span class="text-muted">bjensen@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <i class="fal fa-sign-out-alt mr-3"></i>Sign Out
                                                            </b-dropdown-item>
                                                        </b-dropdown>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="router-link-active" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-tachometer"></i><span class="sidebar-item-text">Dashboard</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-th"></i><span class="sidebar-item-text">Applications</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-database"></i><span class="sidebar-item-text">Identities</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-sign-in-alt"></i><span class="sidebar-item-text">Authentication</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-check-circle"></i><span class="sidebar-item-text">Rules</span>
                                                        </router-link>
                                                    </li>
                                                    <li class="sidebar-divider my-3"></li>
                                                    <li>
                                                        <b-link v-b-toggle.settingsSubmenu3 class="submenu-toggle"><i class="fal fa-fw mr-3 fa-cog"></i><span class="sidebar-item-text">Settings</span></b-link>
                                                        <b-collapse id="settingsSubmenu3">
                                                          <ul class="p-0 list-unstyled">
                                                              <li>
                                                                  <router-link active-class="" :to="{ name: '#'}">
                                                                      <span class="sidebar-item-text">Remote Connections</span>
                                                                  </router-link>
                                                              </li>
                                                          </ul>
                                                        </b-collapse>
                                                    </li>
                                                </ul>
                                                <div class="sidebar-bottom d-none d-md-block">
                                                    <b-link class="expand-sidebar" @click="onToggle"><i class="fal fa-fw mr-3 fa-columns"></i><span class="sidebar-item-text">Toggle sidebar</span></b-link>
                                                </div>
                                            </div>
                                            <div class="sidebar-overlay w-100 h-100 fixed-top"></div>
                                        </nav>
                                    </div>
                                    <div class="col-lg-6">
                                        <h6 class="mb-3 text-muted">Dark</h6>
                                        <nav id="sidebar2" class="toggled overflow-hidden pr-4 border mb-4">
                                            <div class="fr-sidebar position-relative fr-sidebar-dark bg-dark">
                                                <ul class="sidebar-nav position-static scrollable" style="max-height: 330px;">
                                                    <li class="sidebar-brand position-static">
                                                        <b-dropdown id="dropdown-4" text="Dropdown Button" variant="account" class="d-block h-100 w-100" boundary="viewport" no-caret ref="dropdown4">
                                                            <template slot="button-content">
                                                                <div class="media">
                                                                  <img class="my-1 rounded-circle"  src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                  <div class="media-body sidebar-item-text pl-3">
                                                                    <h5 class="my-0">Rock Financial</h5>
                                                                    <small>Barbara Jensen</small>
                                                                  </div>
                                                                </div>
                                                            </template>
                                                            <div class="px-4 py-2">
                                                                <h5 class="my-0">Rock Financial</h5>
                                                                <span class="text-muted">Developer Edition</span>
                                                            </div>
                                                            <b-dropdown-item><i class="fal fa-cog mr-3"></i>Environment settings</b-dropdown-item>
                                                            <b-dropdown-item><i class="fal fa-sync-alt mr-3"></i>Switch Environment</b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <div class="media">
                                                                    <img class="rounded-circle align-self-center" src="images/avatar-bjensen.jpg" width="34" height="34" alt="Barbara Jensen's Avatar">
                                                                    <div class="media-body sidebar-item-text pl-3">
                                                                        <h5 class="my-0">Barbara Jensen</h5>
                                                                        <span class="text-muted">bjensen@example.com</span>
                                                                    </div>
                                                                </div>
                                                            </b-dropdown-item>
                                                            <b-dropdown-divider></b-dropdown-divider>
                                                            <b-dropdown-item>
                                                                <i class="fal fa-sign-out-alt mr-3"></i>Sign Out
                                                            </b-dropdown-item>
                                                        </b-dropdown>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="router-link-active" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-tachometer"></i><span class="sidebar-item-text">Dashboard</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-th"></i><span class="sidebar-item-text">Applications</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-database"></i><span class="sidebar-item-text">Identities</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-sign-in-alt"></i><span class="sidebar-item-text">Authentication</span>
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link active-class="" :to="{ name: '#'}">
                                                            <i class="fal fa-fw mr-3 fa-check-circle"></i><span class="sidebar-item-text">Rules</span>
                                                        </router-link>
                                                    </li>
                                                    <li class="sidebar-divider my-3"></li>
                                                    <li>
                                                        <b-link v-b-toggle.settingsSubmenu4 class="submenu-toggle"><i class="fal fa-fw mr-3 fa-cog"></i><span class="sidebar-item-text">Settings</span></b-link>
                                                        <b-collapse id="settingsSubmenu4">
                                                          <ul class="p-0 list-unstyled">
                                                              <li>
                                                                  <router-link active-class="" :to="{ name: '#'}">
                                                                      <span class="sidebar-item-text">Remote Connections</span>
                                                                  </router-link>
                                                              </li>
                                                          </ul>
                                                        </b-collapse>
                                                    </li>
                                                </ul>
                                                <div class="sidebar-bottom d-none d-md-block">
                                                    <b-link class="expand-sidebar" @click="onToggle"><i class="fal fa-fw mr-3 fa-columns"></i><span class="sidebar-item-text">Toggle sidebar</span></b-link>
                                                </div>
                                            </div>
                                            <div class="sidebar-overlay w-100 h-100 fixed-top"></div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </template>
            </b-container>
        </template>
    </b-container>
</template>

<script>
export default {
    name: 'Sidebar',
    data: function () {
        return {
            window: {
                width: 0,
                height: 0
            },
            toggled: true,
            publicPath: process.env.BASE_URL
        };
    },
    components: {},
    methods: {
        onMouseLeaveSidebar2 () {
            this.$refs.dropdown2.hide();
        },
        onMouseLeaveSidebar4 () {
            this.$refs.dropdown4.hide();
        },
        onMouseLeaveSidebar5 () {
            this.$refs.dropdown5.hide();
        },
        handleResize (event) {
            console.log('Sidebar[] window has been resized: ' + window.innerWidth, event);
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
        },
        onToggle () {

        }
    },
    mounted () {
        // Register an event listener when the Vue component is ready
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

};
</script>
