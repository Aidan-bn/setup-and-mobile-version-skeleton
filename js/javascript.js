function hamburger () {
	const hamburgerMenu = document.getElementsByClassName('nav-icon');
	const hamburgerMenuExit = document.getElementsByClassName('cross');
	const hamburgerMenuItems = document.getElementsByClassName('hamburger__list-items');
	hamburgerMenu[0].addEventListener('click', () => {
		document.getElementsByClassName('menu')[0].style.display = 'flex';
	});
	hamburgerMenuExit[0].addEventListener('click', () => {
		document.getElementsByClassName('menu')[0].style.display = 'none';
	});
	
	[...hamburgerMenuItems].forEach(element => {
		element.addEventListener('click', () => {
			document.getElementsByClassName('menu')[0].style.display = 'none';
		});		
	});
}

hamburger();