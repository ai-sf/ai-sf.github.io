$(function () {


	function updatePushPin() {
		// inizializza PushPin (http://archives.materializecss.com/0.100.2/pushpin.html)
		$(".legend-wrapper").pushpin({
			top: $(".legend-wrapper").parent().offset().top,
			bottom: $("body > footer").first().offset().top - $(".legend-wrapper").parent().height() - 100,
		});

		// inizializza ScrollSpy (http://archives.materializecss.com/0.100.2/scrollspy.html)
		$('.scrollspy').scrollSpy();
	}

	// serve per evitare che la descrizione dell'evento nella sezione ""
	function truncate(str, n) {
		if (str.length <= n) return str
		str_sub = str.substr(0, n - 1)
		return str.length <= n ? str : str_sub.substr(0, str_sub.lastIndexOf(" ")) + "&hellip;";
	};

	// recupera lista di eventi dal database con AJAX e chiama la funzione on_success.
	// on_success DEVE agire sull'elemento target
	function retrieveEvents(on_success, target, comitato, max_date, min_date, num_items, reverse = 0) {
		filters = {};
		if (!!comitato)
			filters["comitato"] = comitato;
		if (!!min_date)
			filters["min_date"] = min_date;
		if (!!max_date)
			filters["max_date"] = max_date;
		if (!!num_items)
			filters["num_items"] = num_items;
		filters["reverse"] = reverse;

		// richiesta ajax al server
		$.get(
			"http://localhost/getJSON.php", //"http://www.ai-sf.it/dbaisf/getJSON.php",
			filters,
			(...lastArgs) => { return on_success(target, ...lastArgs); }
		);
	}

	// interpreta il dict "response" e inserisce all'interno di "target" gli eventi in formato "grande"
	function inject_events_big(target, response) {
		var content = "";
		var i = 0;
		var columns = 2;
		response.forEach(event => {
			date = new Date(event["data_evento"]);
			date_string = date.toLocaleDateString("it-IT", { year: 'numeric', month: 'long', day: 'numeric' });

			// creo nuovo inizio riga
			if (i % columns == 0)
				content += '<div class="row">';

			if (!event["url_locandina_sito"])
				url_locandina = "/img/AISF_LOGO_nobkg.png";
			else
				url_locandina = event["url_locandina_sito"].trim().split(" ")[0].trim();
			if (url_locandina.slice(url_locandina.length - 3, url_locandina.length) == "pdf")
				url_locandina = "/img/AISF_LOGO_nobkg.png";
			content += `
				<div class="col s12 m${12 / columns}"> 
					<div class="card medium sticky-action"> 
						<div class="card-image"> 
							<img src="${url_locandina}">
							<div class="after"></div>
						</div>
						<div class="card-content">
							<div class="pre-title">
								<div class="chip"> ${event["LC"]}</div>
								<span class="event-date">${date_string}</span>
								<span class="activator right">
									<i class="material-icons white-text right"> more_vert</i>
								</span>
								<a class="right" href = "${url_locandina}"> 
									<i class="white-text fa fa-lg fa-file-image-o"></i>
								</a>
							</div>
							<div class="card-title activator white-text"> ${event["nome"]} </div>
						</div>
						<div class="card-reveal">
							<span class="card-title">
								<i class="material-icons right grey-text text-darken-4"> close</i>
								${event["nome"]}
							</span>
							<p> ${event["descrizione"]}</p>
							<div class="event-options">
								<a href="${url_locandina}">
									<i class="fa fa-lg fa-file-image-o"></i>
									APRI LOCANDINA
								</a>
							</div>`;

			if (event["link_fb"]) {
				content += `
					<div class="event-options">
						<a href="${event["link_fb"]}">
							<i class="fab fa-facebook"></i> 
							FACEBOOK
						</a>
					</div>`;
			}
			content += `</div>
				</div>
			</div> `;

			// chiudo riga corrente
			if (i % columns == (columns - 1))
				content += "</div>";

			i++;
		});
		target.html(content);
	}

	// interpreta il dict "response" e inserisce all'interno di "target" gli eventi in formato "piccolo"
	function inject_events_small(target, response) {
		var content = "";
		if (response.length == 0) {
			content += `<li class="collection-item"><i>Nessun evento </i>`;
		}
		response.forEach(event => {
			var date = new Date(event["data_evento"]);
			var date_string = date.toLocaleDateString("it-IT", { year: 'numeric', month: 'long', day: 'numeric' });
			var today = new Date();
			if (!event["url_locandina"])
				url_locandina = "/img/AISF_LOGO_nobkg.png";
			else
				url_locandina = event["url_locandina"].trim().split(" ")[0].trim();

			if (url_locandina.slice(url_locandina.length - 3, url_locandina.length) == "pdf")
				url_locandina = "/img/AISF_LOGO_nobkg.png";

			content += `
				<li class="collection-item avatar">
					<img class="circle" src="${url_locandina}">
					<div class="primary-content">
						<div class="date">`;
			if (date > today) {
				content += `<div class="chip upcoming">UPCOMING!</div>`
			}
			content += `
							${date_string}
						</div>
						<span class="title">${event["nome"]}</span>
						<p>${truncate(event["descrizione"], 200)}</p>
					</div>
					<div class="secondary-content">
						<a href="${url_locandina}" class="secondary-content">
							<i class="fa fa-lg fa-file-image-o"></i>
						</a>
					</div>
				</li>`;
		});
		target.html(content);
	}


	// evento jQuery scatenato quando tutte le richieste ajax sono terminate
	$(document).ajaxStop(function () {
		// nascondo il preloader. 
		// updatePushPin viene eseguito alla fine per essere sicuro che tutti gli elementi siano
		// al loro posto 
		$("#preloader").fadeOut(50, function () {
			$("#content-events").animate(
				{
					opacity: 1
				}, 50, function () {
					updatePushPin();
				});
		});
	});

	today = new Date();
	today_string = today.toISOString().slice(0, 10);
	retrieveEvents(inject_events_big, $("#eventi-futuri"), undefined, undefined, today_string, undefined, 1);
	retrieveEvents(inject_events_big, $("#eventi-passati"), undefined, today_string, undefined, 9);
	today.setDate(today.getDate() - 365)
	var one_year_ago = today.toISOString();

	$(".lista-comitati").each(function () {
		var comitato = $(this).data("nome");
		var comitato_code = comitato.replace(/\s/g, '').toUpperCase();
		$("#eventi-comitati").append(`
			<div id='eventi-${comitato_code}' class="section scrollspy">
					<h3 id="titolo-${comitato.replace(/\s/g, '')}">${comitato}</h3>
					<ul class="collection LC-container"></ul>
			</div>
		`);
		retrieveEvents(inject_events_small, $("#eventi-" + comitato_code + " .LC-container"), comitato, undefined, one_year_ago, undefined);
	});

});
