
	var timeID;  //接受setInterval的返回值，以便clearInterval调用
	var images = new Array();  //define图片容器
	var titles = new Array(); // define图片标题容器
	var txts = new Array();   // define图片描述内容容器	
	var image;		//获取图片src节点
	var current=1;
	var nav_current_left = 126; //定义current左边距
	
	//初始化函数
	function init(){
		// 图片初始化:images容器
		for(i =1 ;i<=5 ;i++){
			images[i] = new Image();	//将Image对象存储到images容器
			images[i].src = "../../../uploads/images/banner/banner"+i+".jpg";	//给数组里面的每个Image对象的src属性赋值
		};
		
		//标题初始化：titles容器
		titles[1] = "Onsite Service";
		titles[2] = "Design & Manufacture";
		titles[3] = "Ceramic Liners";
		titles[4] = "Ceramic Lined Pipe";
		titles[5] = "Ceramic Lined Equipment";
		
		//描述内容初始化：txts容器
		txts[1] = "Kingcera can provides domestic & international onsite inatallation, technical and maintenance support";
		txts[2] = "Kingcera has more than 25 years experience in producing wear resistant ceramics and has rich experience in designing the ceramic products for different industry";
		txts[3] = "A full range of different ceramic liners,ceramic and rubber composite liner";
		txts[4] = "Kingcera can provides the ceramic tile lined pipeline and ceramic section lined pipelines";
		txts[5] = "Kingcera provides the customer base cost-effective,high quality and customized wear resistant ceramic equipment for different industries";
				
		//初始化image： 获取HTML中轮播滚动的img图片节点
		image = document.getElementById("img");
	};
	
	function setSrcLeft(p){
		current = p;
		
		//设置图片的src
		image.src = images[current].src;
		
		//设置缩略图的边框左边距
		nav_current_left = (current-1)*190+126 ;		
		document.getElementById("nav_current").style.left = nav_current_left+"px";
		
		//设置describe的内容
		document.getElementById("dscb_title").textContent = titles[current];
		document.getElementById("dscb_txt").innerText = txts[current];
		
		//jQuery事件，通过top的改变实现自下往上的滑动效果
		$('.describe_bg').animate({top:'422px',opacity:'0'},10)
			.delay(500)
			.animate({top:'285px',opacity:'1'},1600);
	};
	
	//往后翻页
	function next(){
		current++;
		if(current > 5){
			current = 1;
		}
		setSrcLeft(current);
	};
	
	//往前翻
	function pre(){
		current--;
		if(current < 1){
			current = 5;
		}
		setSrcLeft(current);
	};
	
	function mouseover(){
		clearInterval(timeID);
	}
	
	function mouseout(){
		timeID=setInterval('next()',6000);
	}

	window.onload = init(); //加载时初始化；也可以写在<body>标签
	window.onload = (timeID=setInterval('next()',6000));
	document.getElementById("banner").onmouseover= mouseover;
	document.getElementById("banner").onmouseout = mouseout;
	document.getElementById('dscb_next').onclick = next;
	document.getElementById('nav_pre').onclick = pre;
	document.getElementById('nav_next').onclick = next;
	document.getElementById('thum_Li1').onclick = function(){setSrcLeft(1)};
	document.getElementById('thum_Li2').onclick = function(){setSrcLeft(2)};
	document.getElementById('thum_Li3').onclick = function(){setSrcLeft(3)};
	document.getElementById('thum_Li4').onclick = function(){setSrcLeft(4)};
	document.getElementById('thum_Li5').onclick = function(){setSrcLeft(5)};
	