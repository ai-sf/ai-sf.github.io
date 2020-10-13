---
layout: page
title: Comitati Locali
permalink: /comitatilocali/
redirect_from:
- /it/20-comitati-locali/
---

{% assign n = 0 %}
{% for item in site.data.LC %}
	{% unless item.congelato %}
		{% assign n = n | plus: 1 %}
	{% endunless%}
{% endfor %}

AISF conta attualmente {{ n }} comitati locali in altrettante università:

<ul id="presidenti_LC" class="collection">
	{% for item in site.data.LC %}
		{% unless item.congelato %}
			<li class="collection-item avatar" id="{{ item.nome }}">
				<!-- <div class="tertiary-content">
					<img src="{{ item.logo }}">
				</div> -->
				<img src="{{ item.img }}" alt="" class="circle">
				Comitato Locale	di <b> {{ item.nome }} </b>
				<p>
				Presidente: {{ item.presidente }} 
				<br>
				Fondazione: {{ item.fondazione }}
				<br>
				{% if item.ex != nil %}
				Ex presidenti: {{ item.ex }}
				{% endif %} 				
				</p>
				<br>
				{% if item.fb != nil %}	
				<a href="{{ item.fb }}" target="_blank" title="Pagina Facebook">
				<i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.url != nil %}	
				<a href="{{ item.url }}" target="_blank" title="Pagina Web">
				<i class="fas fa-lg fa-globe" aria-hidden="true"></i>
				</a>
				{% endif %}
				{% if item.regolamento != nil %}
				<a href="{{ item.regolamento }}" target="_blank" title="Regolamento Interno">
				<i class="fa fa-lg fa-file-text"></i>
				</a>
				{% endif %}
				<a href="mailto:{{ item.mail }}&#64;&#97;&#105;&#45;&#115;&#102;&#46;&#105;&#116;" title="Indirizzo email">
				<i class="fa fa-lg fa-envelope"></i>
				</a>
			</li>
		{% endunless %}
	{% endfor %}
</ul>


## Provenienza geografica

<a href="/geo/">Qui</a> è possibile trovare ulteriori informazioni sullo storico della provenienza geografica dei membri AISF.

## Formare un nuovo Comitato Locale

Si faccia riferimento a [questa](/nuovocomitatolocale/) pagina.
