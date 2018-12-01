---
layout: post
title:  "CSS - Alinhamento vertical"
crawlertitle: "CSS - Alinhamento vertical"
summary: "Como resolver o inferno dos alinhamentos verticais"
date:   2018-11-30 20:59:00 -0200
categories: posts
tags: ['front-end']
author: Matheus Kruger
---
Olá dev! Como vai?

O assunto que abordarei hoje pode trazer muita dor de cabeça principalmente pra quem tá começando com o CSS. Antes de tudo vou compartilhar uma experiência que tive. Se quiser ir direto para o código, pule o próximo parágrafo e seja feliz.

Lembro bem que estava no inicio da faculdade e consegui um estágio como desenvolvedor web. Minha primeira tarefa era desenvolver uma página de login pro sistema web da empresa. E foi ai que meu pesadelo começou. A caixa de login precisava ficar centralizada na tela e eu não tinha ideia de como fazer isso. Passei dias pesquisando e não achava uma solução prática e que eu entendesse. Consegui resolver meu problema? Sim. Ficou bem feito? Óbvio que não. 

Para que você, caro leitor que possa estar iniciando, não se ferrar da forma que eu me ferrei, trago duas soluções simples de se implementar e que eu tenho certeza que você vai memorizar sem esforço nenhum.


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

Nessa solução nós simplesmente tornarmos nosso elemento absoluto, ou seja, conseguimos mudar a posição dele através dos atributos top, left, right e bottom. Usando essas propriedades, "empurramos" o nosso elemento para 50% do tamanho da tela. Se parássemos por ai, perceberíamos que o que está no centro são as bordas da esquerda e do topo do elemento e não o elemento em si. Por isso usamos a propriedade transform, que modifica alguns aspectos da forma do nosso elemento. a função translate, nessa ocasião, traz o nosso elemento para metade do seu tamanho tanto para esqueda quanto para cima, o que faz com que o elemento fique centralizado. 

## Jeito 2: Flexbox

Flexbox é simplesmente incrível. Sério. Se você ainda não estudou, estude. É simplesmente muito fácil fazer o alinhamento vertical de qualquer elemento usando flexbox. Veja abaixo:

{% highlight css %}
.elemento-pai {
    display: flex;
    align-items: center;
}

.elemento-centralizado {
    /*  
        Simplesmente nada. Isso mesmo. 
        A propriedade align-items do nosos elemento pai faz todo o trabalho
    */
}
{% endhighlight %}

Sim, simples desse jeito. Funciona muito bem e ajuda não somente a fazer o que estamos tentando fazer aqui, mas facilita demais a criação de layouts com CSS. Um artigo completo sobre flexbox ainda vai sair aqui no blog em breve, prometo.

***

Esse tipo de coisa em CSS pode ser algo bem "tricky" e dar bastante dor de cabeça pra quem está começando. Espero que esse artigo tenha te ajuda de alguma forma e que você tenha aprendido algo de novo. 