---
title: Grays
styles: base/color.scss
maturity: ready
control: exclude
colors:
  - name: $gray-100
    class: bg-gray-100
    text-class: text-dark
  - name: $gray-200
    class: bg-gray-200
    text-class: text-dark
  - name: $gray-300
    class: bg-gray-300
    text-class: text-dark
  - name: $gray-400
    class: bg-gray-400
    text-class: text-dark
  - name: $gray-500
    class: bg-gray-500
    text-class: text-white
  - name: $gray-600
    class: bg-gray-600
    text-class: text-white
  - name: $gray-700
    class: bg-gray-700
    text-class: text-white
  - name: $gray-800
    class: bg-gray-800
    text-class: text-white
  - name: $gray-900
    class: bg-gray-900
    text-class: text-white
---
<style>

</style>
{% for item in page.colors %}
  <div class="p-3 mb-2 {{ item.class }} {{ item.text-class }}">{{ item.name }}</div>
{% endfor %}
