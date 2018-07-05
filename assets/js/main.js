//Scrolling
let $doc = $('html, body');
$('a').click(function(){$doc.animate({ 
    scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
    return false;
});
//Toggle-menu
$(document).ready(function(){
    $("#click-menu").click(function(){
        $("#mostrar").toggle();
    });
});
//Toggle-config
$(document).ready(function(){
    $("#escolha").click(function(){
        $("#revela-escolha").toggle();
    });
});
//Cores config
$("#escuro").click(function(){
    $("#fundo-escuro").addClass("escuro");
});