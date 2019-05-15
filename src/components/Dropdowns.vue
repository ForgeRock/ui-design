<template>
    <b-container>
        <template>
            <b-container>
                <template>
                    <h1 class="display-3">Dropdowns</h1>
                    <section class="my-5">
                        <h2 class="mb-4 d-none">Dropdown type</h2>
                        <p class="mb-4 lead">Dropdowns description.</p>
                        <div class="card">
                            <div class="card-body">
                              <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                                  <b-dropdown-item>First Action</b-dropdown-item>
                                  <b-dropdown-item>Second Action</b-dropdown-item>
                                  <b-dropdown-item>Third Action</b-dropdown-item>
                                  <b-dropdown-divider></b-dropdown-divider>
                                  <b-dropdown-item active>Active action</b-dropdown-item>
                                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                              </b-dropdown>
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
    name: 'Dropdowns',
    data: function () {
        return {};
    },
    components: {},
    mounted () {},
    methods: {}
};
</script>
