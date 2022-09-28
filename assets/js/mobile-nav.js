function toggle() {
  let menu = document.getElementById('nav-mobile');
  if(this.checked) {
    menu.style.display = 'flex';
    menu.style.transform = 'translate(calc(-96vw + 5px), 0)';
  } else {
    menu.style.transform = 'translate(calc(96vw - 5px), 0)';
    menu.style.display = 'none';
  }
}

document.getElementById('nav-mobile-check').onchange = toggle;