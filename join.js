$(function(){
$(".mainSite").css("display", "none");
setTimeout(function() {
    $('.gif').fadeOut();
	}, 1000);
});

$(function(){
    $(".mainSite").css({opacity:'0'});
    setTimeout(function(){
    $(".mainSite").css("display", "block");
    $(".mainSite").stop().animate({opacity:'1'},1000);
    },1000);
});