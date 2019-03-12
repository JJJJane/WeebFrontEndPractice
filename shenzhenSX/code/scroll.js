function scrollwindow(){
			if(!document.getElementsByClassName) return 0;
			if(!document.getElementsByClassName("menu")) return 0;
			var menu=document.getElementsByClassName("menu");
			var timer= setInterval(function(){
				var menutop=document.documentElement.scrollTop;
				if(menutop==menu.offsetTop)
				menu.className="fix";
			else
				return false;
		    },30)
		    }
			
addLoadEvent(scrollwindow);