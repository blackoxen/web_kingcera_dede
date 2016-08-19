$(".proItem").hover(
	function(){
		$(this).find(".listArrow").css("background","#FF780D");
		$(this).find(".proContent").css("background","#FFFFCC");
		$(this).find(".listImg").css("box-shadow","2px 2px 2px #999");
		$(this).find("h1").css("color","#FF780D");
		$(this).find("h1").css("text-shadow","0.5px 0.5px 0.5px #999");
	},
	function(){
		$(this).find(".listArrow").css("background","#8EB73D");
		$(this).find(".proContent").css("background","#fff");
		$(this).find(".listImg").css("box-shadow","none");
		$(this).find("h1").css("color","#555");
		$(this).find("h1").css("text-shadow","none");
	}
);