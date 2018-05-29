# Noticias
https://rawgit.com/Raphista22/Noticias/master/news.html


La pagina principal esta formada por:

Diseño plantilla de el cliente:


<img src="https://rawgit.com/Raphista22/Noticias/master/img/plantilla.PNG" />


Esta pagina se ha diseñado a base de plantillas bootstrap,

-menú de navegación:
Compuesto por el icono de la compañía un amplio menú para filtrar noticias por gustos , un área de registro diseñada para cuando se incorpore esa función y un buscador de noticias prediseñado para cuando la función se incorpore.


-El cuerpo: 
lo componen 3 wells y 1 anuncio, todo dentro de un contenedor fluido,
dentro de cada well encontramos titulo de noticia , foto en miniatura y la entradilla.
el anuncio cambia de formato y lugar según el dispositivo que se este usando para así adaptarse.

-El footer:
Se divide en tres columnas en las que encontraremos las referencias legales
una forma de contactar y una ubicación.


-La publicidad se ha diseñado para que funcione de forma rotativa utilizando JavaScript entre 3 imágenes a elegir por el cliente con distintas versiones para distintos tipos de pantalla.

-Las noticias se cargaran a través de ficheros .json, cuando el usuario llegue asta el final de la pagina automáticamente se cargaran las noticias, cuando no haya mas noticias que mostrar el botón que se mostrara disponible cambiara el texto en su interior informando de que no hay mas noticias este elemento se a compuesto con JavaScript también.

#JavaScript V2 boton scroll

En esta versión se ha modificado el fichero JavaScript en la linea 12 hemos cambiado la forma de cargar el fichero json, ademas se ha añadido la posibilidad de habilitar o deshabilitar el scroll con un botón.

$(function (){
		//Boton para habilitar o deshabilitar cargar con scroll
		$("#so").click(function() {
			if (scrollbtn){
				$("#so").text('ScrollOff');
				alert('cambiado offscroll');
				scrollbtn=false; 
				}else{
				$("#so").text('ScrollOn');
				alert('cambiado onscroll');
				scrollbtn=true; 
				}
		});
	//funcion cargar con scroll
	$(window).scroll(function (){
		if (scrollbtn) {
			//medimos la posicion de la pantalla
			console.log("ScrollTop: "+ $(window).scrollTop()+
			"\n alto ventana: " + $(window).height() +
			"\n alto documento: " + $(document).height() +"\n");
				//cuando la pantalla se encuentre en posicion
				if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()){
					//si ela variable numero es menor a 3 cargamos fichero y sumamos el contador
					if (numero < 3) {
						cargar ();
						numero++;	
						};
						//sino cambiamos el valor de texto en boton
					}else{
						$('#btn').text('No hay más noticias');
						};
					
					
				//si la funcion scroll esta desactivada
			}else{
				//pulsamos el boton para cargar mas noticias
				$("#btn").click(function (){
					if (numero < 3) {
						cargar ();
									
						numero++;
					}else{
						$('#btn').text('No hay más noticias');
						};
				});
			};
	});
});

