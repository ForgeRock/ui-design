---
title: Brand Colors
styles: base/color.scss
info: Use brand colors to denote hierarchy and context. 
maturity: ready
control: exclude
colors:
  - name: $primary
    class: bg-primary
    text-class: text-white
  - name: $secondary
    class: bg-secondary
    text-class: text-white
  - name: $success
    class: bg-success
    text-class: text-white
  - name: $warning
    class: bg-yellow
    text-class: text-dark
  - name: $danger
    class: bg-red
    text-class: text-white
  - name: $light
    class: bg-light
    text-class: text-dark
  - name: $dark
    class: bg-dark
    text-class: text-white
---
<style>
</style>
{% for item in page.colors %}
  <div class="p-3 mb-2 {{ item.class }} {{ item.text-class }}">{{ item.name }}</div>
{% endfor %}
