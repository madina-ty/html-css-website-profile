var toggleBtn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav_links');
var links = document.querySelector('.nav_links li');


toggleBtn.addEventListener('click', function() {
    this.classList.toggle('click');
    nav.classList.toggle('open');
})

