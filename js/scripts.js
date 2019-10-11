//funkcja odpowiedzialna za rozwijanie menu
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	var x = window.matchMedia("(min-width: 576px)")
	if(x.matches) {
		if (scroll >= 350) {
			$(".top-nav.navbar").css('display', 'flex');
		}else{
			$(".top-nav.navbar").css('display', 'none');
		}
	}
});
//wyswietlanie komentarzy
$( document ).ready(function() {    
	$('#comment1').delay(5000).show(0);
	$('#comment2').delay(5000).hide(0);
});
//funkcja odpowiedzialna za przycisk scrollowania
$(document).ready(function(){
	$('.scroll-btn').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
//funkcje odpowiedzialne za wyswietlanie dan po kliknieciu w opcje na podstronie menu
function pokazburgery(){
	document.getElementById('sales-burgers').setAttribute("style","display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;");
	document.getElementById('sales-desserts').setAttribute("style","display: none;");
	document.getElementById('sales-pizza').setAttribute("style","display: none;");
	document.getElementById('sales-drinks').setAttribute("style","display: none;");
}
function pokazdesery(){
	document.getElementById('sales-desserts').setAttribute("style","display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;");
	document.getElementById('sales-burgers').setAttribute("style","display: none;");
	document.getElementById('sales-pizza').setAttribute("style","display: none;");
	document.getElementById('sales-drinks').setAttribute("style","display: none;");
}
function pokazpizza(){
	document.getElementById('sales-pizza').setAttribute("style","display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;");
	document.getElementById('sales-burgers').setAttribute("style","display: none;");
	document.getElementById('sales-desserts').setAttribute("style","display: none;");
	document.getElementById('sales-drinks').setAttribute("style","display: none;");
}
function pokaznapoje(){
	document.getElementById('sales-drinks').setAttribute("style","display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-right: -15px;margin-left: -15px;");
	document.getElementById('sales-burgers').setAttribute("style","display: none;");
	document.getElementById('sales-desserts').setAttribute("style","display: none;");
	document.getElementById('sales-pizza').setAttribute("style","display: none;");
}
//powiekszanie zdjec na podstronie galeria
function openlightbox(img){
	if(img==1){
		document.getElementById('img-box-1').setAttribute("style","display: block;");
	}
	if(img==2){
		document.getElementById('img-box-2').setAttribute("style","display: block;");
	}
	if(img==3){
		document.getElementById('img-box-3').setAttribute("style","display: block;");
	}
	if(img==4){
		document.getElementById('img-box-4').setAttribute("style","display: block;");
	}
	if(img==5){
		document.getElementById('img-box-5').setAttribute("style","display: block;");
	}
	if(img==6){
		document.getElementById('img-box-6').setAttribute("style","display: block;");
	}
	if(img==7){
		document.getElementById('img-box-7').setAttribute("style","display: block;");
	}
	if(img==8){
		document.getElementById('img-box-8').setAttribute("style","display: block;");
	}
	if(img==9){
		document.getElementById('img-box-9').setAttribute("style","display: block;");
	}
	if(img==10){
		document.getElementById('img-box-10').setAttribute("style","display: block;");
	}
	if(img==11){
		document.getElementById('img-box-11').setAttribute("style","display: block;");
	}
}
//zmiana wartosci po zamknieciu zdjecia
function closelightbox(){
	document.getElementById('img-box-1').setAttribute("style","display: none;");
	document.getElementById('img-box-2').setAttribute("style","display: none;");
	document.getElementById('img-box-3').setAttribute("style","display: none;");
	document.getElementById('img-box-4').setAttribute("style","display: none;");
	document.getElementById('img-box-5').setAttribute("style","display: none;");
	document.getElementById('img-box-6').setAttribute("style","display: none;");
	document.getElementById('img-box-7').setAttribute("style","display: none;");
	document.getElementById('img-box-8').setAttribute("style","display: none;");
	document.getElementById('img-box-9').setAttribute("style","display: none;");
	document.getElementById('img-box-10').setAttribute("style","display: none;");
	document.getElementById('img-box-11').setAttribute("style","display: none;");
}
//wyswietlanie komentarzy i ich zmiana
window.onload = function(){
	var timer=0;
	function comments() {
		if(timer<300){
			timer+=1;
		}
		if(timer>=300){
			timer=0;
		}
		if(timer>=0&&timer<=100){
			$("#comment1").css('display', 'block');
			$("#comment2").css('display', 'none');
			$("#comment3").css('display', 'none');
		}
		if(timer>=100&&timer<=200){
			$("#comment1").css('display', 'none');
			$("#comment2").css('display', 'block');
			$("#comment3").css('display', 'none');
		}
		if(timer>=200&&timer<=300){
			$("#comment1").css('display', 'none');
			$("#comment2").css('display', 'none');
			$("#comment3").css('display', 'block');
		}
	}
	//wyswietlanie slidera
	function slider() {
		if(timer<300){
			timer+=1;
		}
		if(timer>=300){
			timer=0;
		}
		if(timer>=0&&timer<=100){
			$("#slide-1").css('display', 'flex');
			$(".main-slider").css("background-image","url('./img/wood-1234667_1280-1.jpg')");
			$("#slide-2").css('display', 'none');
		}
	}
    setInterval(comments, 300);
	setInterval(slider, 100);
}
//licznik wydanych posilkow
function counterload() {
	setInterval(function(){ document.getElementById("counter-dinner").innerHTML = counter1(); }, 1);
	setInterval(function(){ document.getElementById("counter-client").innerHTML = counter2(); }, 15);
	setInterval(function(){ document.getElementById("counter-year").innerHTML = counter3(); }, 150);
}
var counter1 = (function () {
	var dinner = 0;
	return function () {
		if(dinner<15000){
			dinner += 100;
		} 
		return dinner;
	}
})();
var counter2 = (function () {
	var client = 0;
	return function () {
		if(client<100){
			client += 1;
		}
		return client;
	}
})();
var counter3 = (function () {
	var year = 0;
	return function () {
		if(year<10){
			year += 1;
		}
		return year;
	}
})();