const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbar');
const closeBtn = document.getElementById('nav-close');
navBtn.addEventListener('click',function(){
  navBar.classList.add('showNav');
  navBtn.classList.add('nav-btn-hide');
});
closeBtn.addEventListener('click',function(){
  navBar.classList.remove('showNav');
  navBtn.classList.remove('nav-btn-hide');
});