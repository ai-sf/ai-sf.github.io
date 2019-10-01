---
layout: page
title: Comitato Esecutivo
permalink: /esecutivo/
---

<div class="row">
  <div class="col s12 m4">
    <img class="materialboxed" data-caption="Alcuni membri dei Comitati Esecutivi 2018-2019 e 2019-2020 durante la CISF 2019 a Milano." width="100%" src="{{ site.url }}/img/esecutivo/esecutivo1819-1920.jpg">
  </div>
    <div class="col s12 m4 offset-m1">
  <p>Organo amministrativo ed esecutivo dell'Associazione è il Comitato Esecutivo, attualmente composto da 7 membri eletti durante le Assemblee Generali.</p>
    </div>
</div>


{% for item in site.data.EC %}

## Comitato Esecutivo ({{item.anno}})

Parte di questo CE è stato eletto in data {{ item.dataCISFex }} e parte in data {{ item.dataCISF }}. 
{% if item.dataInizio != nil %}É entrato nel pieno delle sue funzioni in data {{ item.dataInizio }}.{% endif %}
{% if item.dataFine != nil %}I suoi membri sono rimasti in carica fino al {{ item.dataFine }}.{% endif %}

<ul class="collection">
  {% for membro in item.membri %}
      <li class="collection-item avatar">
        <img src="{{ membro.img }}" alt="" class="circle">
        <span class="title">{{ membro.nome }}</span>
        <p><i>{{ membro.ruolo }}</i><br>
          {{ membro.descr }}
        </p>
        <div class="secondary-content"><a href="mailto:{{ membro.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;"><i class="fa fa-lg fa-envelope"></i></a></div>
      </li>
  {% endfor %}
</ul>

{% if item.collaboratori != nil %}
### Collaboratori ({{item.anno}})

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
  
## Mandati precedenti

### Comitato Esecutivo (2015-2016)
 
- Andrea Celon - Presidente
- Marta Crisanti - Vicepresidente e Responsabile relazioni con membri e comitati locali
- Vittorio Erba - Segretario
- Michele Re Fiorentin - Tesoriere
- Francesco Sciortino - Coordinatore Eventi
- Giulio Pasqualetti - IT Manager
- Lucio Maria Milanese - Responsabile Progetto FERMI


### Collaboratori (2015-2016)
- Lorenzo Bianchi
- David Chiappini

### Comitato Esecutivo (2014-2015)

- Andrea Celon - Presidente
- Marta Crisanti - Tesoriere
- Giulio Pasqualetti - Segretario
- Francesco Sciortino - Rappresentante IAPS

### Collaboratori (2014-2015)

- Lorenzo Bianchi
- Lucio Maria Milanese
- Michele Re Fiorentin
