---
layout: en-page
title: Executive Committee
permalink: /en/executive/
---

<div class="row">
  <div class="col s12 m4">
    <img class="materialboxed" data-caption="Comitati Esecutivi 2017-2018 e 2018-2019 durante la CISF2018. Assenti: Alessandra Lorenzo e Giovanni Stagnitto." width="100%" src="{{ site.url }}/img/esecutivo/esecutivo1718-1819.jpg">
  </div>
    <div class="col s12 m4 offset-m1">
  <p>The Executive Committee is the administrative and executive organ of the Association. It is currently composed of 7 members elected during the General Assemblies.</p>
    </div>
</div>


{% for item in site.data.EC-en %}

## Executive Committee({{item.anno}})

Part of this EC has been elected on the {{ item.dataCISFex }} and part on the {{ item.dataCISF }}. 
{% if item.dataInizio != nil %} It has acquired its full responsibilities on the {{ item.dataInizio }}.{% endif %}
{% if item.dataFine != nil %}Its members have been in charge until the {{ item.dataFine }}.{% endif %}

<ul class="collection">
  {% for membro in item.membri %}
      <li class="collection-item avatar">
        <img src="{{ membro.img }}" alt="" class="circle">
        <span class="title">{{ membro.nome }}</span>
        <p>{{ membro.ruolo }}<br>
          {{ membro.descr }}
        </p>
        <div class="secondary-content"><a href="mailto:{{ membro.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;"><i class="fa fa-lg fa-envelope"></i></a></div>
      </li>
  {% endfor %}
</ul>

{% if item.collaboratori != nil %}
## Collaborators ({{item.anno}})

<ul class="collection">
  {% for membro in item.collaboratori %}
      <li class="collection-item avatar">
        <img src="{{ membro.img }}" alt="" class="circle">
        <span class="title">{{ membro.nome }}</span>
        <p>
          {{ membro.descr }}
        </p>
        <div class="secondary-content">
            {% if membro.mail != nil %}
            <a href="mailto:{{ membro.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;"><i class="fa fa-lg fa-envelope"></i>
            </a>
            {% endif %}
        </div>
      </li>
  {% endfor %}
</ul>
{% endif %}

{% endfor %}
  
## Earlier mandates

### Executive Committee (2015-2016)
 
- Andrea Celon - President
- Marta Crisanti - Vicepresident and Responsible for Members and Local COmmittees 
- Vittorio Erba - Secretary
- Michele Re Fiorentin - Treasurer
- Francesco Sciortino - Event Coordinator
- Giulio Pasqualetti - IT Manager
- Lucio Maria Milanese - Responsible for FERMI Project 


### Collaborators (2015-2016)
- Lorenzo Bianchi
- David Chiappini

### Executive Committee (2014-2015)

- Andrea Celon - President
- Marta Crisanti - Treasurer
- Giulio Pasqualetti - Secretary
- Francesco Sciortino - IAPS Representative

### Collaborators (2014-2015)

- Lorenzo Bianchi
- Lucio Maria Milanese
- Michele Re Fiorentin
