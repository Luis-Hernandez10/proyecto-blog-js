$(document).ready(function(){
	
	//Slider

if(window.location.href.indexOf('index') > -1){
	 $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true,
    pager: true
  });
	 }

	//Posts
	if(window.location.href.indexOf('index') > -1){
	var posts = [
		{
			title: 'prueba de titulo 1',
			date: moment().format("MMMM Do YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam metus sed nibh vehicula ullamcorper. Nam auctor bibendum ipsum at scelerisque. Nam a nulla eget est volutpat molestie vitae id dolor. Integer vitae quam a augue viverra porttitor. Mauris quis magna porttitor lorem dapibus laoreet. Nulla faucibus sapien sed leo auctor finibus. Praesent et eleifend nisi, vel congue metus. Proin consequat fringilla arcu, quis consectetur lectus aliquet imperdiet. Phasellus cursus eu lorem at consequat. Suspendisse rhoncus volutpat risus vitae convallis. Sed dapibus neque nunc, tempus interdum augue consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a augue nec tortor fermentum cursus.'
		},
		{
			title: 'prueba de titulo 2',
			date: 'Publicado el dia ' + moment().format("dddd ") + "de " + moment().format("MMMM ") + "del " + moment().format("YYYY") ,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam metus sed nibh vehicula ullamcorper. Nam auctor bibendum ipsum at scelerisque. Nam a nulla eget est volutpat molestie vitae id dolor. Integer vitae quam a augue viverra porttitor. Mauris quis magna porttitor lorem dapibus laoreet. Nulla faucibus sapien sed leo auctor finibus. Praesent et eleifend nisi, vel congue metus. Proin consequat fringilla arcu, quis consectetur lectus aliquet imperdiet. Phasellus cursus eu lorem at consequat. Suspendisse rhoncus volutpat risus vitae convallis. Sed dapibus neque nunc, tempus interdum augue consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a augue nec tortor fermentum cursus.'
		},
		{
			title: 'prueba de titulo 3',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM ") + "del " + moment().format("YYYY") ,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam metus sed nibh vehicula ullamcorper. Nam auctor bibendum ipsum at scelerisque. Nam a nulla eget est volutpat molestie vitae id dolor. Integer vitae quam a augue viverra porttitor. Mauris quis magna porttitor lorem dapibus laoreet. Nulla faucibus sapien sed leo auctor finibus. Praesent et eleifend nisi, vel congue metus. Proin consequat fringilla arcu, quis consectetur lectus aliquet imperdiet. Phasellus cursus eu lorem at consequat. Suspendisse rhoncus volutpat risus vitae convallis. Sed dapibus neque nunc, tempus interdum augue consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a augue nec tortor fermentum cursus.'
		},
		{
			title: 'prueba de titulo 4',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM ") + "del " + moment().format("YYYY") ,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam metus sed nibh vehicula ullamcorper. Nam auctor bibendum ipsum at scelerisque. Nam a nulla eget est volutpat molestie vitae id dolor. Integer vitae quam a augue viverra porttitor. Mauris quis magna porttitor lorem dapibus laoreet. Nulla faucibus sapien sed leo auctor finibus. Praesent et eleifend nisi, vel congue metus. Proin consequat fringilla arcu, quis consectetur lectus aliquet imperdiet. Phasellus cursus eu lorem at consequat. Suspendisse rhoncus volutpat risus vitae convallis. Sed dapibus neque nunc, tempus interdum augue consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a augue nec tortor fermentum cursus.'
		},
		{
			title: 'prueba de titulo 5',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM ") + "del " + moment().format("YYYY") ,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam metus sed nibh vehicula ullamcorper. Nam auctor bibendum ipsum at scelerisque. Nam a nulla eget est volutpat molestie vitae id dolor. Integer vitae quam a augue viverra porttitor. Mauris quis magna porttitor lorem dapibus laoreet. Nulla faucibus sapien sed leo auctor finibus. Praesent et eleifend nisi, vel congue metus. Proin consequat fringilla arcu, quis consectetur lectus aliquet imperdiet. Phasellus cursus eu lorem at consequat. Suspendisse rhoncus volutpat risus vitae convallis. Sed dapibus neque nunc, tempus interdum augue consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a augue nec tortor fermentum cursus.'
		},
		{
			title: 'prueba de titulo 6',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM ") + "del " + moment().format("YYYY") ,
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam metus sed nibh vehicula ullamcorper. Nam auctor bibendum ipsum at scelerisque. Nam a nulla eget est volutpat molestie vitae id dolor. Integer vitae quam a augue viverra porttitor. Mauris quis magna porttitor lorem dapibus laoreet. Nulla faucibus sapien sed leo auctor finibus. Praesent et eleifend nisi, vel congue metus. Proin consequat fringilla arcu, quis consectetur lectus aliquet imperdiet. Phasellus cursus eu lorem at consequat. Suspendisse rhoncus volutpat risus vitae convallis. Sed dapibus neque nunc, tempus interdum augue consectetur a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a augue nec tortor fermentum cursus.'
		},
	];
	
	posts.forEach((item, index) => {
		var post = `
				<article class="post">
				 	<h2>${item.title}</h2>
				 	<span class="date">${item.date}</span>
				 	<p>
				 		${item.content}
				 	</p>
				 	<a href="#" class="button-more">Leer más</a>
				</article>
		`;

		$('#posts').append(post);

	});
	}

	$('#to-green').click(function(){
		$('#theme').attr("href", "css/green.css");
	});

	$('#to-red').click(function(){
		$('#theme').attr("href","css/red.css");
	});

	$('#to-blue').click(function(){
		$('#theme').attr("href","css/blue.css");
	});

	/*Scroll arriba de la web*/

	$('.subir').click(function(e){
		e.preventDefault()
		$('html, body').animate({
			scrollTop:0
		}, 500);

		return false;
	});

	//Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();//borra toda la memoria en el localstorage
			location.reload();//Hace que se reargue la pagina auntomaticamente
		});
	}
		//acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	//reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
			var reloj = moment().format("h:mm:ss");
		$('#reloj').html(reloj);
		},1000);
		
	}

	//Validacion
if(window.location.href.indexOf('contact') > -1){

	$("form input[name='date']").datepicker({
		dateFormat: 'dd-mm-yy'
	});

	$.validate({
    lang: 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true
  });

}

});