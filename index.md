---
layout: default
crawlertitle: "Dev Kruger Blog"
title: "Dev Kruger Blog"
summary: "Blog sobre desenvolvimento"
---

{% for post in site.posts limit: 5 %}
  <article class="index-page">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
  </article>
{% endfor %}
