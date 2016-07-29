//当鼠标移到导航栏的一级栏目(.nav_lev1)时，显示其[$(this)]二级栏目[find(".nav_ul2")]
$(".nav_lev1").hover(
	function(){
		$(this).find(".nav_ul2").css("display","block");
		$(this).children("a").css("color","#FF780D");
		$(this).css("background","#fff");
		$(this).css("border-top-left-radius","15px");
		$(this).css("border-top-right-radius","15px");
		$(this).css("border-top","1px solid #ff780d");
	},
	function(){
		$(".nav_ul2").css("display","none");
		$(this).children("a").css("color","#fff");
		$(this).css("background","#FF780D");
		$(this).css("border-top","none");
	}
);

//当鼠标移到二级栏目
$(".nav_lev2").hover(
	function(){
		$(this).children("a").css("color","#fff");
	},
	function(){
		$(this).children("a").css("color","#000");
	}
);