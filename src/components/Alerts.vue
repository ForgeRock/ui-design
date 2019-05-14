<template>
    <b-container>
        <template>
            <b-container>
                <template>
                    <h1 class="display-3">Alerts</h1>
                    <p class="mb-4 lead">Cards are used to apply a container around a related grouping of information.</p>
                    <section class="my-5">
                        <h2 class="mb-4">On-page Alerts</h2>
                        <p class="mb-4">Place alerts on the page for longer messages that users may want to take time to review.</p>
                        <div class="card">
                            <div class="card-body">
                                <div class="alert alert-primary alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a primary alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-secondary alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a secondary alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-success alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a success alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-danger alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a danger alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-warning alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a warning alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-info alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a info alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-light alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a light alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
                                </div>
                                <div class="alert alert-dark alert-dismissible d-flex p-4 pr-5 position-relative" role="alert">
                                  This is a dark alert—check it out!
                                  <a class="close"><i class="fal fa-times"></i></a>
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
    name: 'Color',
    data: function () {
        return {};
    },
    components: {},
    mounted () {},
    methods: {}
};
</script>
