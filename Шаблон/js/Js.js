function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();


$(document).ready(function() {
	//Бургер
	$('.heder__burger').click(function(event) {
		$('.heder__burger,.list,.heder-span').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//2 блок анимация при клике
	$('.About_Us-left').click(function(event) {
		$('.AboutUs-left-img1').toggleClass('sase1');
		$('.AboutUs-left-img2').toggleClass('sase2');
	});
	//адаптация под иксплорер
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	if (isIE == true) {
		$('#elem').addClass('blur1');
	} else {
		$('#elem').addClass('blur2');
	}
	//при клике на форму текс исчезает 
	$('body').click(function(event) {

		var value1 = document.getElementById('input1').value;
		var value2 = document.getElementById('input2').value;
		var value3 = document.getElementById('input3').value;
		if (value1) {
			$('.GetinTouch-form-line-span1').css('opacity', '0')
		} else {
			if ($('#input1').is(':focus')) {
				$('.GetinTouch-form-line-span1').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span1').css('opacity', '1')
			}
		}
		if (value2) {
			$('.GetinTouch-form-line-span2').css('opacity', '0')
		} else {
			if ($('#input2').is(':focus')) {
				$('.GetinTouch-form-line-span2').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span2').css('opacity', '1')
			}
		}
		if (value3) {
			$('.GetinTouch-form-line-span3').css('opacity', '0')
		} else {
			if ($('#input3').is(':focus')) {
				$('.GetinTouch-form-line-span3').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span3').css('opacity', '1')
			}
		}
	});
	
		
});
//скрипт для адаптации изображений
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
function animait(){
	const anims = $(".MyServices-flex-block");
	for (var i = 0; i < anims.length; i++) {
		const anim = anims[i];
		anim.style.transitionDelay = `${i / 2}s`;
	}
}
animait();
ibg();
//если скролить хедер блюрится 
window.addEventListener('scroll', function(){
	var heder = document.getElementById('elem');
	heder.classList.toggle('sticky', window.scrollY > 0);
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll () {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight -animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollleft = window.pageXOffset || document.documentElement.scrollleft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollleft}
	}
	animOnScroll();
}











































































