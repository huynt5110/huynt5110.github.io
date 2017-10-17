var menu = $('.the-menu-trigger');
var themenu = $('.menu');
var theHarmburger = function () {
    themenu.slideToggle();
}
menu.on('click', theHarmburger);
$(document).ready(function () {
    $(".inner ul li.has-sub > a").click(function () {
        $(this).parent().children('ul').toggleClass('tap');
    })
    $(".sub-item").click(function () {
        $(this).children('ul').toggleClass('tap');
    })
})