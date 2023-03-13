//скрипт для адаптации изображений ==============================================================================================================
let imageWebp = document.querySelector('.loading-screen-ditector');
let imageWebpOk = false;
if (imageWebp) {

	if (imageWebp.width + imageWebp.height == 0) {
		imageWebpOk = false;
	} else {
		imageWebpOk = true;
	}
}

function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('.webp') && ibg[i].querySelector('.jpg')) {
			if(ibg[i].querySelector('.webp') && imageWebpOk == true){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('.webp').getAttribute('src')+')';
			} else if(ibg[i].querySelector('.jpg') && imageWebpOk == false){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('.jpg').getAttribute('src')+')';
			}
		} else {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}
}
ibg();

// бургер ==============

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



//===============================================================================================================================================


let PaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
document.body.style.paddingRight = PaddingValue;
document.querySelector('.heder').style.paddingRight = PaddingValue;
document.querySelector('.loading-screen').style.paddingRight = PaddingValue;
let Body = document.body;
Body.classList.add('_Noloaded');

window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
	let timerinAniItemWrapper = setTimeout(function tick() {
		Body.classList.remove('_Noloaded');
		document.body.style.paddingRight = 0;
		document.querySelector('.heder').style.paddingRight = 0;
		document.querySelector('.loading-screen').style.paddingRight = 0;
		Body.classList.add('_loaded');
	}, 500);
};


//==============================================================================================================================
//Анимаця при скроле - начало
//==============================================================================================================================

const animItems = document.querySelectorAll('._anim-items');

let timerinAniItem = setTimeout(function tick() {
	if (animItems.length > 0 && window.innerWidth > 1064) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll () {
			for (let index = 0; index < animItems.length; index++) {
				//console.log(getCoords(animItems[index]));
				const animItem = animItems[index];
				const animItemOffset = offset(animItem).top;

				window.addEventListener('scroll', function(){
					if ((animItemOffset - ((window.innerWidth / 100) * 25) ) < window.scrollY) {
						animItem.classList.add('_anim-active');
					}
				});
				if ((animItemOffset - ((window.innerWidth / 100) * 25)) < window.scrollY) {
					animItem.classList.add('_anim-active');
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
}, 500);

//==============================================================================================================================
//Анимаця при скроле - конец
//==============================================================================================================================




//==============================================================================================================================
//Изменения хедора при скроле - начало
//==============================================================================================================================

const heder = document.getElementById('elem');

if (heder) {
	let banner = document.querySelector('.Banner');
	heder.classList.toggle('sticky', window.scrollY > 0);
	window.addEventListener('scroll', function(){
		heder.classList.toggle('sticky', window.scrollY > 0);
		if (window.scrollY > window.innerHeight * 1.5) {
			banner.classList.add('_sticky');
		} else {
			banner.classList.remove('_sticky');
		}
	});
}

//==============================================================================================================================
//Изменения хедора при скроле - конец
//==============================================================================================================================





//==============================================================================================================================
//Анимаця working-mechanism - начало
//==============================================================================================================================

const workingMechanism = document.querySelector('.MyServices');

if (workingMechanism) {
	const workingMechanismBloks = document.querySelectorAll('.MyServices-flex-block');
	let workingMechanismNumber = 0;
	for (let i = 0; i < workingMechanismBloks.length; i++) {
		let workingMechanismBlok = workingMechanismBloks[i];
		workingMechanismNumber = workingMechanismNumber + 0.2;
		workingMechanismBlok.style.transitionDelay = `${workingMechanismNumber}s`;
	}
}

//==============================================================================================================================
//Анимаця working-mechanism - конец
//==============================================================================================================================



//==============================================================================================================================
//Анимаця working-mechanism - начало
//==============================================================================================================================

const happy = document.querySelector('.Happy');

if (happy) {
	const happyBloks = document.querySelectorAll('.Happy-flex-block');
	let happyNumber = -0.2;
	for (let i = 0; i < happyBloks.length; i++) {
		let happyBlok = happyBloks[i];
		happyNumber = happyNumber + 0.2;
		happyBlok.style.transitionDelay = `${happyNumber}s`;
	}
}

//==============================================================================================================================
//Анимаця working-mechanism - конец
//==============================================================================================================================




//==============================================================================================================================
//AboutUs - начало
//==============================================================================================================================

const AboutUs = document.querySelector('.AboutUs');

if (AboutUs) {
	let aboutUsWrapper = AboutUs.querySelector('.About_Us-left');
	aboutUsWrapper.addEventListener("click", function (e) {
		aboutUsWrapper.classList.toggle('_active');
	});
}

//==============================================================================================================================
//AboutUs - конец
//==============================================================================================================================





//==============================================================================================================================
//MyPortfolio - начало
//==============================================================================================================================

var swiperMyPortfolio = new Swiper("._MyPortfolio-slider", {
    direction: "vertical",
    slidesPerView: 1,
    //centeredSlides: true,
    //mousewheel: true,
    spaceBetween: 100,
    //cssMode: true,
    //spaceBetween: 0,
    //effect: "fade",
    pagination: {
        el: "._MyPortfolio-paginachion",
        clickable: true,
    },
    navigation: {
        nextEl: ".MyPortfolio-slider__button-next",
        prevEl: ".MyPortfolio-slider__button-prev",
    },
    breakpoints: {
		319.1: {
			allowTouchMove: false,
		},
		767.1: {
			allowTouchMove: false,
			//autoHeight: false,
		},
	},
});

// Табы ---------------------------------------------------------------------------------


const MyPortfolioPanel = document.querySelector('.MyPortfolio-flex');
const MyPortfolioPanelBlocks = MyPortfolioPanel.querySelectorAll('.popup-link');


const MyPortfolioSpraitLinkExits = document.querySelectorAll('.sprait-three-blok__exit');
const MyPortfolioSpraitWrapper = document.querySelector('.sprait-three-wrapper');
const MyPortfoliospraitBloks = document.querySelectorAll('.sprait-three-blok');

if (MyPortfolioPanelBlocks) {
    for (let i = 0; i < MyPortfolioPanelBlocks.length; i++) {
        let MyPortfolioPanelBlock = MyPortfolioPanelBlocks[i];
        MyPortfolioPanelBlock.addEventListener("click", function (e) {
            swiperMyPortfolio.slideTo(i);
        });
    }
}

/*if (SpraitThreeBlokExits) {
    for (let i = 0; i < SpraitThreeBlokExits.length; i++) {
        let spraitThreeBlokExit = SpraitThreeBlokExits[i];
        spraitThreeBlokExit.addEventListener("click", function (e) {
            SpraitThreeWrapper.classList.remove('_active');
        });
    }
}*/

//========================================================================================================================================================================================


//==============================================================================================================================
//MyPortfolio - конец
//==============================================================================================================================






//==============================================================================================================================
//Попапы - начало
//==============================================================================================================================


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function (e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++) {
				const el = lockPadding[i];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}


//==============================================================================================================================
//Попапы - конец
//==============================================================================================================================




const Forms =  document.querySelectorAll('._input-placeholder');

if (Forms) {
	for (let i = 0; i < Forms.length; i++) {
		let Form = Forms[i];
		let FormPlaceholder = Form.placeholder;

		Form.addEventListener("focus", function (e) {
			//Form.placeholder = "";
			if (Form.value) {
				Form.classList.add('_valueTru');
			} else {
				Form.classList.remove('_valueTru');
			}
		});
		Form.addEventListener("blur", function (e) {
			//Form.placeholder = FormPlaceholder;
			if (Form.value) {
				Form.classList.add('_valueTru');
			} else {
				Form.classList.remove('_valueTru');
			}
		});
	}
}










//==============================================================================================================================
//Валидация - начало
//==============================================================================================================================

const FormValidationWrappers =  document.querySelectorAll('._form-validation__wrapper');

if (FormValidationWrappers) {
	for (var i = 0; i < FormValidationWrappers.length; i++) {
		//alert(i);
		let FormValidationWrapper = FormValidationWrappers[i];
		let FormValidationButton =  FormValidationWrapper.querySelector('._form-validation__button'); //onclick="return false"
		let FormValidationBodys =  FormValidationWrapper.querySelectorAll('._form-validation__body');
		let FormValidationInputs =  FormValidationWrapper.querySelectorAll('._form-validation__input');

		FormValidationButton.addEventListener( 'click', (e) => {
			if (FormValidationInputs.length = FormValidationBodys.length) {
				let sum = 0;
				for (let i = 0; i < FormValidationBodys.length; i++) {
					let FormValidationInput = FormValidationInputs[i];
					let FormValidationBody = FormValidationBodys[i];

					//alert(FormValidationInput);
					if (FormValidationInput.getAttribute("type") === "checkbox") {
						if (FormValidationInput.checked === true) {

						} else {
							FormValidationInput.classList.add('error');
							FormValidationBody.classList.add('error');
							sum++;
						}
					} else {
						if (FormValidationInput.value) {
							console.log("jop");
						} else {
							if (!FormValidationInput.classList.contains('error')) {
								FormValidationInput.classList.add('error');
								console.log(`FormValidationInput = error`);
							}
							if (!FormValidationBody.classList.contains('error')) {
								FormValidationBody.classList.add('error');
								console.log(`FormValidationBody = error`);
							}
							sum++;
							console.log(`sum = ${sum}`);
						}
					}
				}
				if (sum <= 0) {
					FormValidationWrapper.submit();
				}
			}
		});

		for (let i = 0; i < FormValidationInputs.length; i++) {
			let FormValidationInput = FormValidationInputs[i];
			
			FormValidationInput.addEventListener( 'click', (e) => {
				for (let i = 0; i < FormValidationBodys.length; i++) {
					let FormValidationInput = FormValidationInputs[i];
					let FormValidationBody = FormValidationBodys[i];

					FormValidationInput.classList.remove('error');
					FormValidationBody.classList.remove('error');
				}
			});
		}

	}
}

//==============================================================================================================================
//Валидация - конец
//==============================================================================================================================




// =================================================================
// Начало - "Ссылки"
// =================================================================


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		if (anchor.classList.contains('_link-click')) {
			e.preventDefault()
			const blockID = anchor.getAttribute('href').substr(1)
			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	})
}


// =================================================================
// Конец - "Ссылки"
// =================================================================






















































/*
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
	});*/
	//адаптация под иксплорер
	//var isIE = /*@cc_on!@*/false || !!document.documentMode;
	/*if (isIE == true) {
		$('#elem').addClass('blur1');
	} else {
		$('#elem').addClass('blur2');
	}*/
	//при клике на форму текс исчезает 
	/*$('body').click(function(event) {

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
*/




















