// const navToggle = document.querySelector('#navToggle');
// const nav = document.querySelector('#nav-hidden');
// // const navIcon = document.querySelectorAll('.nav-icon');
// // const hamburger = document.querySelector('#hamburger');

// navToggle.addEventListener( "click", () => { //when clicked do ..
//      alert("cliked")
// 	nav.classList.toggle('show') //open this  
// 	// // navIcon.forEach(icon => {
	// 	icon.classList.toggle('hidden');
	// })
// 	}
// )
 
// window.addEventListener("resize", () => {
// 	if(document.body.clientWidth > 768) {
// 		nav.classList.remove('open'); 
// 		navIcon.forEach(icon => {
// 			icon.classList.add('hidden')
// 		});
// 		hamburger.classList.remove('hidden')
// 	}
// })


const navToggle = document.querySelector('#navToggle');

// const nav = document.querySelector('nav');
// const navIcon = document.querySelectorAll('.nav-icon');
const hamburger = document.querySelector('#hamburger');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click', () => {
	logo.classList.add('hide');
	hamburger.classList.add('hide');
	menu.style.display = 'block';
})

cross.addEventListener('click', () => {
	logo.classList.remove('hide');
	hamburger.classList.remove('hide');
	menu.style.display = 'none';
})