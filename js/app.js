// function hamburger() {
//   const hamburgerMenu = document.getElementsByClassName('nav-icon');
//   const hamburgerMenuExit = document.getElementsByClassName('close');
//   const hamburgerMenuItems = document.getElementsByClassName('hamburger-list');

//   hamburgerMenu[0].addEventListener('click', () => {
//     document.getElementsByClassName('menu')[0].style.display = 'flex';
//   });

//   hamburgerMenuExit[0].addEventListener('click', () => {
//     document.getElementsByClassName('menu')[0].style.display = 'none';
//   });

//   [...hamburgerMenuItems].forEach((element) => {
//     element.addEventListener('click', () => {
//       document.getElementsByClassName('menu')[0].style.display = 'none';
//     });
//   });
// }
// hamburger();

const arr = [
  {
    id: 1,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/popup-mob.jpg',
    title: 'Keeping track of hundreds of component one',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://www.microverse.org/',
    source: 'hhttps://www.microverse.org/',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 2,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/popup-mob.jpg',
    title: 'Keeping track of hundreds of component two',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://www.microverse.org/',
    source: 'https://www.microverse.org/',
    tech: ['CSS', 'GitHub', 'Javascript', 'Bootstrap', 'Codepen'],
  },
  {
    id: 3,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/popup-mob.jpg',
    title: 'Keeping track of hundreds of component three',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://www.microverse.org/',
    source: 'hhttps://www.microverse.org/',
    tech: ['HTML', 'Javascript', 'Bootstrap'],
  },
  {
    id: 4,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/popup-mob.jpg',
    title: 'Keeping track of hundreds of component four',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'hthttps://www.microverse.org/',
    source: 'https://www.microverse.org/',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 5,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/popup-mob.jpg',
    title: 'Keeping track of hundreds of components five',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://www.microverse.org/',
    source: 'https://www.microverse.org/',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
  {
    id: 6,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/popup-mob.jpg',
    title: 'Keeping track of hundreds of components six',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live: 'https://www.microverse.org/',
    source: 'https://www.microverse.org/',
    tech: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },
];
let htmlstring = '';
arr.forEach((item) => {
  let string = `
    <div class="work-item">
      <div class="div-wrapper"></div>
      <div class="bottom-part">
          <h4>${item.title}</h4>
          <ul>`;
  let string1 = '';
  item.tech.forEach((li) => {
    string1 += `<li><a>${li}</a></li>`;
  });
  string += `${string1}
          </ul>
          <a id="${item.id}" class="btn-primary">See Project</a>
      </div>
    </div>
    `;
  htmlstring += string;
  string = '';
});
const getCard = document.querySelector('.card');
getCard.innerHTML = htmlstring;
const getheader = document.querySelector('header');
const getmenu = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .li-links');
const getprojbtn = document.querySelectorAll('.work .work-item .btn-primary');
const getpopupclose = document.querySelector('.popup .closeclass');
getmenu.addEventListener('click', () => {
  getheader.classList.toggle('active');
});
getclose.addEventListener('click', () => {
  getheader.classList.remove('active');
});
getli.forEach((item) => {
  item.addEventListener('click', () => {
    getheader.classList.remove('active');
  });
});
getprojbtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const getId = e.currentTarget.id;
    const result = arr.find((item1) => item1.id === Number(getId));
    let popupHtml = '';
    popupHtml = `
              <picture class="image-wrapper">
                  <source media="(min-width:768px)" srcset="${result.imageDesk}" alt="">
                  <img src="${result.imageMob}" alt="" >
              </picture>
              <div class="title-and-btn">
                  <h2>${result.title}</h2>
                  <div class="btn-wrapper">
                      <a href="${result.live}" class="btn-primary" type="submit">See live <img src="image/popup-see.svg"></a>
                      <a href="${result.source}" class="btn-primary" type="submit">See source<img src="image/popup-GitHub.svg"></a>
                  </div>
              </div>
              <div class="work">
                  <ul>`;
    let string1 = '';
    result.tech.forEach((li) => {
      string1 += `<li><a>${li}</a></li>`;
    });
    popupHtml += `${string1}
                  </ul>
              </div>
              <p>
                  ${result.description}
              </p>
              `;
    getpopupclose.insertAdjacentHTML('afterend', popupHtml);
    document.querySelector('body').classList.add('no-scroll');
  });
});
getpopupclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('no-scroll');
  while (getpopupclose.nextElementSibling) {
    getpopupclose.nextElementSibling.remove();
  }
});
const getformbtn = document.querySelector('.form form');
const geterror = document.querySelector('.errorclass');
getformbtn.addEventListener('submit', (e) => {
  if (getformbtn.useremail.value !== getformbtn.useremail.value.toLowerCase()) {
    geterror.style.display = 'block';
    e.preventDefault();
  }
});
