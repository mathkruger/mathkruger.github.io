---
layout: default
crawlertitle: "Matheus Kruger Blog"
title: "Matheus Kruger Blog"
summary: "Blog sobre desenvolvimento"
---

{% for post in site.posts limit: 5 %}
  <article class="index-page">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
  </article>
{% endfor %}
