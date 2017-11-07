// JavaScript Document
 
$(document).ready(function(){
	$(".box").each(function(){
    	$(this).mouseover(function(){
		  $(this).children(".box_img").css("border-color","#61bcb3");
		  $(this).children(".box_img").css("box-shadow","4px 2px 7px #333333");
		  $(this).children(".box_title").css("color","#63bdb4");
		  $(this).children(".box_date").css("color","#63bdb4");
		});
		$(this).mouseout(function(){
		  $(this).children(".box_img").css("border-color","#ffffff");
		  $(this).children(".box_img").css("box-shadow","none");
		  $(this).children(".box_title").css("color","#434544");
		  $(this).children(".box_date").css("color","#434544");
		});
  	});
	
  
});