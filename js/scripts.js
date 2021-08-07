const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*================ menu--show ======================*/ 
// validate if cosntant exists

if(navToggle){
    navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
    });
}

/*================ menu--Hidden ======================*/ 
// validate if cosntant exists

if(navClose){
    navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
    });
}

/*======================= Remove MENU MOBILE ==========================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))



/*======================= ACORDION SKILLS ==========================*/

const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;
    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})

/*======================= QUALIFICATION TABS ==========================*/

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('quialification__active');

        });
        target.classList.add('quialification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('quialification__active')
        });
        tab.classList.add('quialification__active')
    });
});


/*======================= Modal Active ==========================*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
} 
modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', ()=>{
        modal(i)
    });
});
modalClose.forEach((modalclose) =>{
    modalclose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        });
    });
});

/*======================= PORTAFOLIO SWIPER ==========================*/


let Portafolio = new Swiper(".portafolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    keyboard: true
  });


  /*======================= Testimonial SWIPER ==========================*/


let swiperTestimonial = new Swiper(".testimonial__container", {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    },
    keyboard: true
  });


  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





/* VALIDATION FORM*/

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{5,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{5,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9,14}$/ // 7 a 14 numeros.
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name){
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo')
		break;

	} 
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;

	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
} 



inputs.forEach((input) =>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.usuario && campos.nombre && campos.correo){
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);
	}
});
