---
title: Logos
maturity: draft
control: exclude
items:
  - name: Horizontal Logo
    path: src/assets/images/horizontal-logo.svg
    bg: bg-white
  - name: Horizontal Logo (on dark)
    path: src/assets/images/horizontal-logo-white.svg
    bg: bg-dark
  - name: Vertical Logo
    path: src/assets/images/vertical-logo.svg
    bg: bg-white
  - name: Vertical Logo (on dark)
    path: src/assets/images/vertical-logo-white.svg
    bg: bg-dark
---
<style>
.set {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  margin-top: 0;
  padding: 0;
  list-style: none;
}
li {
  flex: 1 0 20%;
  margin: 1rem;
}
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 280px;
  height: 300px;
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  margin-bottom: 1rem;
}
img {
  max-height: 100%;
}
p {
  margin: 0;
}
</style>
<ul class="set">
{% for item in page.items %}
  <li>
    <div class="image {{ item.bg }}"><img src="{{ site.baseurl }}/{{ item.path }}"/></div>
    <p class="header">{{ item.name }}</p>
    {% if item.path %}<p>{{ item.path }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
