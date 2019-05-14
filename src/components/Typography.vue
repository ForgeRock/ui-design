<template>
    <b-container>
        <template>
            <b-container>
                <template>
                    <h1 class="display-3">Typography</h1>
                    <p class="lead mb-4">All text is set in Roboto.</p>
                    <section class="my-5">
                        <h2 class="mb-4">Headers</h2>
                        <div class="card">
                            <div class="card-body">
                                <h1>h1 heading</h1>
                                <h2>h2 heading</h2>
                                <h3>h3 heading</h3>
                                <h4>h4 heading</h4>
                                <h5>h5 heading</h5>
                                <h6>h6 heading</h6>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2 class="mb-4">Display headings</h2>
                        <div class="card">
                            <div class="card-body">
                                <h1 class="display-1">Display 1</h1>
                                <h1 class="display-2">Display 2</h1>
                                <h1 class="display-3">Display 3</h1>
                                <h1 class="display-4">Display 4</h1>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2>Lead</h2>
                        <p class="mb-4">Make a paragraph stand out by adding <code class="highlighter-rouge">.lead</code>.</p>
                        <div class="card">
                            <div class="card-body">
                              <p class="lead">
                                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                              </p>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2>Inline text elements</h2>
                        <p class="mb-4">Make a paragraph stand out by adding <code class="highlighter-rouge">.lead</code>.</p>
                        <div class="card">
                            <div class="card-body">
                                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                <p><u>This line of text will render as underlined</u></p>
                                <p><small>This line of text is meant to be treated as fine print.</small></p>
                                <p><strong>This line rendered as bold text.</strong></p>
                                <p><em>This line rendered as italicized text.</em></p>
                            </div>
                        </div>
                    </section>
                    <section class="my-5">
                        <h2>Lists</h2>
                        <div class="card">
                            <div class="card-body">
                              <ul>
                                  <li>Lorem ipsum dolor sit amet</li>
                                  <li>Consectetur adipiscing elit</li>
                                  <li>Integer molestie lorem at massa</li>
                                  <li>Facilisis in pretium nisl aliquet</li>
                                  <li>Nulla volutpat aliquam velit
                                      <ul>
                                          <li>Phasellus iaculis neque</li>
                                          <li>Purus sodales ultricies</li>
                                          <li>Vestibulum laoreet porttitor sem</li>
                                          <li>Ac tristique libero volutpat at</li>
                                      </ul>
                                  </li>
                                  <li>Faucibus porta lacus fringilla vel</li>
                                  <li>Aenean sit amet erat nunc</li>
                                  <li>Eget porttitor lorem</li>
                              </ul>
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
    name: 'Typography',
    data: function () {
        return {};
    },
    components: {},
    mounted () {},
    methods: {}
};
</script>
