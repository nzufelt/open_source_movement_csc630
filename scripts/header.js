var nav = document.getElementsByTagName('nav')[0]
var deltaHeight = document.getElementsByTagName('header')[0].offsetHeight - nav.offsetHeight;

window.addEventListener('scroll', function(e) {
  if (window.scrollY >= deltaHeight) {
    nav.classList.add('fixed');
  }
  else {
    nav.classList.remove('fixed');
  }
});
