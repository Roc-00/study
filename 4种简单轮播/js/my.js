$(document).ready(function () {
    var a = document.querySelectorAll('button');
    console.log(a);
    a[0].click (function () {
        $('body').css('background','white')
    }) 
    a[1].onclick = function () {
        $('body').css('background','black')
    }
})