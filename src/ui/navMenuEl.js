import menuIMG from '../icons/menu.png';

function createNavItemEl(navItem) {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = navItem;

  return navItemEl;
}

export default function createNavMenuEl(navMenu) {
  const img = document.createElement('img');
  img.src = menuIMG;
  img.alt = 'Nav menu';
  img.classList.add('menu-img');

  const imgBTN = document.createElement('button');
  imgBTN.classList.add('menu-btn');
  imgBTN.appendChild(img);

  const ul = document.createElement('ul');
  navMenu.navItems.forEach(item => {
    ul.appendChild(createNavItemEl(item));
  });
  ul.classList.add('hidden');

  const navMenuEl = document.createElement('nav');
  navMenuEl.appendChild(imgBTN);
  navMenuEl.appendChild(ul);

  return navMenuEl;
}
