 //u raides dingimas praslinkus iki 360
 function initializeInteractions() {
 	$(document).scroll(function() {
 		var vidTop = $('.video').offset().top; //video divo aukstis
 		if (($(this).scrollTop() > vidTop - 100)) {
 			$('.paprasta').css('opacity', '0');
 			$('.rutuliukas').css('display', 'none');
 			$('.rutuliukas2').css('display', 'inline-block');
 			$('.ranka').css('display', 'block');
 			$('.links').css('opacity', '1');
 		}
 		else if($(this).scrollTop() < vidTop + 100) {
 			$('.rutuliukas2').css('display', 'none');
 			$('.paprasta').css('animation', 'none');
 			$('.paprasta').css('opacity', '1');
 			$('.rutuliukas').css('display', 'block');
 			$('.ranka').css('display', 'none');
 			$('.links').css('opacity', '0');
 		}
 	});
 }

 function scrollToTop() {
	// $(document).scrollTop(100); // DOES NOT WORK IN CHROME!
	$("html,body").animate({ scrollTop: 0 }, "slow");
}

//garsai uzvedus pele
function playSound(x) {
	var sound1 = document.getElementById('sound1');
	var sound2 = document.getElementById('sound2');
	var sound3 = document.getElementById('sound3');
	var sound4 = document.getElementById('sound4');
	if (x == 1) {
		sound1.play();
	}
	else if (x == 2) {
		sound2.play();
	}
	else if (x == 3) {
		sound3.play();
	}
	else if (x == 4) {
		sound4.play();
	}
}

//garsu sustabdymas atitraukus pele
function stopSound(x){
	var sound = document.getElementById('sound1');
	var sound2 = document.getElementById('sound2');
	var sound3 = document.getElementById('sound3');
	var sound4 = document.getElementById('sound4');
	if (x == 1) {
		sound1.pause();
	}
	else if (x == 2) {
		sound2.pause();
	}
	else if (x == 3) {
		sound3.pause();
	}
	else if (x == 4) {
		sound4.pause();
	}
}

//teksto keitimasis
function change_text(){
   	var text1 = $('.text1');
   	var text2 = $('.text2');
   	var text3 = $('.text3');
   	if ($('.text1').css('display') == 'block') {
   		console.log('1');
   		text1.css('display', 'none');
   		text2.css('display', 'block');
   		text3.css('display', 'none');
   	}
   	else if($('.text2').css('display') == 'block'){
   		text1.css('display', 'none');
   		text2.css('display', 'none');
   		text3.css('display', 'block');
   	}
   	else if($('.text3').css('display') == 'block'){
		text1.css('display', 'block');
   		text2.css('display', 'none');
   		text3.css('display', 'none');
   	}
}

function show(){
	$('.links').css('display', 'block');
	$('.ranka').css('opacity', '0');
}

function duplicate(){
	var antra = $('#contacts1');
	var text = $('.mail1');
	antra.css('display', 'block');
	text.css('display', 'block');
}

function duplicate2(){
	var trecia = $('#contacts2');
	var text = $('.mail2');
	trecia.css('display', 'block');
	text.css('display', 'block');
}

function hide_table(){
	var trecia = $('#contacts2');
	var text = $('.mail2');
	trecia.css('display', 'none');
	text.css('display', 'none');
}

function hide_table2(){
	var antra = $('#contacts1');
	var text = $('.mail1');
	antra.css('display', 'none');
	text.css('display', 'none');
}

function scrollToVideo() {
	var video = scrollToElement($('.video'));
    $(window).scrollTop(video.offset().top).scrollLeft(video.offset().left);
}

 $(document).ready(function(){
 	var rellax = new Rellax('.parallax');
 	initializeInteractions();
 	scrollToTop();
 	setInterval(change_text, 20000);
 	$('html, body').animate({
        scrollTop: $('.video').offset().top
    }, 3000);
 });