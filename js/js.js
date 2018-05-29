var maxnumero=3;
var numero=1;
var scrollbtn=true;

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

//funcion cargar fichero json
function cargar(){
	$.getJSON("https://rawgit.com/Raphista22/Noticias/master/json/" + numero + ".json", function( jsonObject ) {
	//en aquest punt l'objecte jsonObject correspon al fitxer
		pintar( jsonObject );
	}); 
};


//indicamos como colocar la informacion del json
function pintar(json){
	$.each( json, function( i, noticia ) {
		$("#noticias").append
		('<br>'+'<h2>' + noticia.title + '</h2>'+
		'<div class="well"><div clas="container-fluid"> <img class="pimg" src="' + noticia.imgurl + '" alt="Jesús Cardeñosa" class="pimg">'+
		'</img><p>' + noticia.content + '</p></div></div>'+'<br>')
	}); 
};



//publicidad rotativa

var contador=1;
var temporizador= setInterval(myTimer, 1000);

var c=[];
	c[0]="https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/d8/44/bf/d844bfc5-853d-ad55-ac97-a82f8baa960e/mzl.hueqzfid.jpg/300x0w.jpg";
	c[1]="https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/da/f7/8d/daf78d23-df00-d7c0-de57-f1ac6badc1ad/pr_source.png/300x0w.jpg";
	c[2]="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/9b/8a/4c/9b8a4ce5-9a86-de73-3052-d5d226460adf/pr_source.jpg/300x0w.jpg";

function myTimer() {
	contador++;
	$("#pub").attr('src',c[contador-1]);;
	if (contador==3) contador=0;
}

var cuentame=1;
var tiempo= setInterval(MyTimer, 1000);

var d=[];
	d[0]="https://2.bp.blogspot.com/-C3uTW5R5HKI/WeLdt3VPkqI/AAAAAAAABR4/fxlI9-uC3bwCuQr9TW4AkyegyG_hQWc6ACLcBGAs/w800-h800/Captura.PNG";
	d[1]="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtGxO1W_JPF3ZGM1BybapWXwfOS-WrimT72VRq_hqmxo5H1xpuA";
	d[2]="https://i0.wp.com/g02.a.alicdn.com/kf/HTB1mJP4cPuhSKJjSspmq6AQDpXaO/223192203/HTB1mJP4cPuhSKJjSspmq6AQDpXaO.jpg?size=23757&height=100&width=800&hash=bacd4bcb9754745d9f813bb254b7725b";

function MyTimer() {
	cuentame++;
	$("#pubm").attr('src' ,d[cuentame-1]);;
	if (cuentame==3) cuentame=0;
}
