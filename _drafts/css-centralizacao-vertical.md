---
layout: post
title:  "CSS e o alinhamento vertical"
crawlertitle: "CSS e o alinhamento vertical"
summary: "Alinhamento vertical em CSS é tão infernal assim?"
date:   2018-11-29 13:36:00 -0200
categories: posts
tags: ['front-end']
author: Matheus Kruger
draft: true
---

Olá! Meu nome é Matheus e sou desenvolvedor "faz tudo". Isso mesmo, faz tudo, não full-stack. Estou começando esse blog pra tentar compartilhar
um pouco das coisas que eu aprendo no meu ambiente de trabalho e em casa também.

Como primeiro assunto, resolvi abordar uma das coisas que mais me causava pânico quando comecei a programar para web, CSS e os alinhamentos verticais. Lembro bem que estava no inicio da faculdade e consegui um estágio como desenvolvedor web. Minha primeira tarefa era desenvolver uma página de login pro sistema web da empresa. E foi ai que meu pesadelo começou. A caixa de login precisava ficar centralizada na tela e eu não tinha ideia de como fazer isso. Passei dias pesquisando e não achava uma solução prática e que eu entendesse.

Consegui resolver meu problema nessa experiência? Sim. Ficou bem feito? Óbvio que não. 

Para que você, caro leitor que possa estar iniciando, não se ferrar da forma que eu me ferrei, trago algumas alternativas de como se fazer isso.

## Jeito 1: usando `position: absolute`

Se assim como o meu eu mais novo você deseja simplesmente centralizar uma caixa no meio da tela, utilize das posições absolutas. É bem simples e vai evitar dor de cabeça.

{% highlight css %}
.caixa-centralizada {
    /*Restante da estilização .....*/
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
{% endhighlight %}
