//Scrolling
let $doc = $('html, body');
$('a').click(function() {
    $doc.animate({ scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
    return false;
});
//Toggle
$(document).ready(function(){$("#click-menu").click(function(){$("#mostrar").toggle();});});