<template>
    <b-container>
        <template>
            <b-container>
                <template>
                    <h1 class="display-3">Buttons</h1>
                    <p class="mb-4 lead">Buttons are clickable items used to perform an action.</p>
                    <section class="my-5">
                        <h2 class="mb-4">Primary buttons / states</h2>
                        <p class="mb-4">Use only one primary button on a page to clearly denote a primary action (eg. 'Save').</p>
                        <div class="card">
                            <div class="card-body">
                                <div>
                                    <button type="button" class="btn btn-primary mb-3">Primary</button>
                                    <button type="button" class="btn btn-primary mb-3 active">Primary (active)</button>
                                    <button type="button" class="btn btn-primary mb-3 disabled">Primary (disabled)</button>
                                </div>
                                <div class="d-none">
                                    <button type="button" class="btn btn-secondary mb-3">Secondary</button>
                                    <button type="button" class="btn btn-secondary mb-3 active">Secondary (active)</button>
                                    <button type="button" class="btn btn-secondary mb-3 disabled">Secondary (disabled)</button>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-success mb-3">Success</button>
                                    <button type="button" class="btn btn-success mb-3 active">Success (active)</button>
                                    <button type="button" class="btn btn-success mb-3 disabled">Success (disabled)</button>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-danger mb-3">Danger</button>
                                    <button type="button" class="btn btn-danger mb-3 active">Danger (active)</button>
                                    <button type="button" class="btn btn-danger mb-3 disabled">Danger (disabled)</button>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-warning mb-3">Warning</button>
                                    <button type="button" class="btn btn-warning mb-3 active">Warning (active)</button>
                                    <button type="button" class="btn btn-warning mb-3 disabled">Warning (disabled)</button>
                                </div>
                                <div class="d-none">
                                    <button type="button" class="btn btn-info mb-3">Info</button>
                                    <button type="button" class="btn btn-info mb-3 active">Info (active)</button>
                                    <button type="button" class="btn btn-info mb-3 disabled">Info (disabled)</button>
                                </div>
                                <div class="d-none">
                                    <button type="button" class="btn btn-light mb-3">Light</button>
                                    <button type="button" class="btn btn-light mb-3 active">Light (active)</button>
                                    <button type="button" class="btn btn-light mb-3 disabled">Light (disabled)</button>
                                </div>
                                <div class="d-none">
                                    <button type="button" class="btn btn-dark mb-3">Dark</button>
                                    <button type="button" class="btn btn-dark mb-3 active">Dark (active)</button>
                                    <button type="button" class="btn btn-dark mb-3 disabled">Dark (disabled)</button>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-link mb-3">Link</button>
                                    <button type="button" class="btn btn-link mb-3 active">Link (active)</button>
                                    <button type="button" class="btn btn-link mb-3 disabled">Link (disabled)</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Icon buttons</h2>
                        <p class="mb-4">Use icon buttons in toolbars.</p>
                        <div class="card">
                            <div class="card-body">
                                <button type="button" class="btn btn-primary mb-3"><i class="fal fa-plus mr-2"></i><span>Primary</span></button>
                                <button type="button" class="btn btn-secondary mb-3 d-none"><i class="fal fa-plus mr-2"></i>Secondary</button>
                                <button type="button" class="btn btn-success mb-3"><i class="fal fa-plus mr-2"></i>Success</button>
                                <button type="button" class="btn btn-danger mb-3"><i class="fal fa-plus mr-2"></i>Danger</button>
                                <button type="button" class="btn btn-warning mb-3"><i class="fal fa-plus mr-2"></i>Warning</button>
                                <button type="button" class="btn btn-info mb-3 d-none"><i class="fal fa-plus mr-2"></i>Info</button>
                                <button type="button" class="btn btn-light mb-3 d-none"><i class="fal fa-plus mr-2"></i>Light</button>
                                <button type="button" class="btn btn-dark mb-3 d-none"><i class="fal fa-plus mr-2"></i>Dark</button>
                                <button type="button" class="btn btn-link mb-3"><i class="fal fa-plus mr-2"></i>Link</button>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Icon-only buttons</h2>
                        <p class="mb-4">Use icon buttons in toolbars for secondary actions.</p>
                        <div class="card">
                            <div class="card-body">
                                <button type="button" class="btn btn-primary mb-3"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-secondary mb-3 d-none"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-success mb-3"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-danger mb-3"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-warning mb-3"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-info mb-3 d-none"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-light mb-3 d-none"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-dark mb-3 d-none"><i class="fal fa-copy"></i></button>
                                <button type="button" class="btn btn-link mb-3"><i class="fal fa-copy"></i></button>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Outline buttons</h2>
                        <p>Use for secondary buttons.</p>
                        <div class="card">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-primary mb-3">Primary</button>
                                <button type="button" class="btn btn-outline-secondary mb-3 d-none">Secondary</button>
                                <button type="button" class="btn btn-outline-success mb-3">Success</button>
                                <button type="button" class="btn btn-outline-danger mb-3">Danger</button>
                                <button type="button" class="btn btn-outline-warning mb-3">Warning</button>
                                <button type="button" class="btn btn-outline-info mb-3 d-none">Info</button>
                                <button type="button" class="btn btn-outline-light mb-3 d-none">Light</button>
                                <button type="button" class="btn btn-outline-dark mb-3 d-none">Dark</button>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Icon outline buttons</h2>
                        <p>Use for secondary toolbar buttons.</p>
                        <div class="card">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-primary mb-3"><i class="fal fa-plus mr-2"></i>Primary</button>
                                <button type="button" class="btn btn-outline-secondary mb-3 d-none"><i class="fal fa-plus mr-2"></i>Secondary</button>
                                <button type="button" class="btn btn-outline-success mb-3"><i class="fal fa-plus mr-2"></i>Success</button>
                                <button type="button" class="btn btn-outline-danger mb-3"><i class="fal fa-plus mr-2"></i>Danger</button>
                                <button type="button" class="btn btn-outline-warning mb-3"><i class="fal fa-plus mr-2"></i>Warning</button>
                                <button type="button" class="btn btn-outline-info mb-3 d-none"><i class="fal fa-plus mr-2"></i>Info</button>
                                <button type="button" class="btn btn-outline-light mb-3 d-none"><i class="fal fa-plus mr-2"></i>Light</button>
                                <button type="button" class="btn btn-outline-dark mb-3 d-none"><i class="fal fa-plus mr-2"></i>Dark</button>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Sizes</h2>
                        <p>Larger buttons used for sign in and sign up pages.</p>
                        <div class="card">
                            <div class="card-body">
                                <button type="button" class="btn btn-primary btn-lg mb-3"><i class="fal fa-plus mr-2"></i>Primary</button>
                                <button type="button" class="btn btn-secondary btn-lg mb-3 d-none"><i class="fal fa-plus mr-2"></i>Secondary</button>
                                <button type="button" class="btn btn-success btn-lg mb-3"><i class="fal fa-plus mr-2"></i>Success</button>
                                <button type="button" class="btn btn-danger btn-lg mb-3"><i class="fal fa-plus mr-2"></i>Danger</button>
                                <button type="button" class="btn btn-warning btn-lg mb-3"><i class="fal fa-plus mr-2"></i>Warning</button>
                                <button type="button" class="btn btn-info btn-lg mb-3 d-none"><i class="fal fa-plus mr-2"></i>Info</button>
                                <button type="button" class="btn btn-light btn-lg mb-3 d-none"><i class="fal fa-plus mr-2"></i>Light</button>
                                <button type="button" class="btn btn-dark btn-lg mb-3 d-none"><i class="fal fa-plus mr-2"></i>Dark</button>
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
    name: 'Buttons',
    data: function () {
        return {};
    },
    components: {},
    mounted () {},
    methods: {}
};
</script>
