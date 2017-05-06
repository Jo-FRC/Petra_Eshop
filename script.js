var burger = document.getElementById('menu');

var page = document.getElementById('page');
var x = document.getElementById('x');

var menuWrap = document.getElementById('menu-wrap');

burger.addEventListener('click', function(){
    menuWrap.style.display = 'block';
    page.addEventListener('mousedown', hideMenu);
    x.addEventListener('click', hideMenu);

});

function hideMenu(){
    if(this.target != menuWrap){
        menuWrap.style.display = 'none';
    }
}
