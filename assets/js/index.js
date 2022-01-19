const navbar = document.querySelector('.navbar')

export const init = () => {
  AOS.init({once: true,  duration: 500});
  addScrollEvent()
  animateNavbar()
};


const animateNavbar = () => {
  const scrolled = window.pageYOffset >= 60
  
  navbar.classList.toggle('navbar-active', scrolled)
 
}
let lastScrollTop = 0;
const hideNavbar = () => {
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop &&  window.pageYOffset >= 400){
    navbar.classList.add('navbar-hide')
 } else {
  navbar.classList.remove('navbar-hide')
 }
 lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  
}

const addScrollEvent = () => {
  document.addEventListener(
    'scroll',
    () => {
      animateNavbar()
      hideNavbar()
    },
    { passive: true }
  );
}