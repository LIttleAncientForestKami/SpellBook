/*
 * From TutorialZine Turn.js tutorial, cut to fit.
 * */

$(function () {
    var flipbook = $("#flipbook");

    flipbook.turn();

    setTimeout(function(){
	    flipbook.fadeTo(500,1);
	    },1000);

    $(window).bind('keydown', function(e){
	    if (e.keyCode == 37){
	       flipbook.turn('previous');
	    } else if (e.keyCode == 39){
	       flipbook.turn('next');
	    }
    });
	      
});
