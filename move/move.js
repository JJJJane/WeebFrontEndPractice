function startMove(obj,json,fn){
			clearInterval(obj.timer);
			var flag=true;
			obj.timer=setInterval(function(){
				flag=true;
				for(var attr in json){
				if (attr=='opacity'){
					var curr=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					var curr=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-curr)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(curr!=json[attr]){
					flag=false;
				}
				if(attr=='opacity'){
					obj.style[attr]=(curr+speed)/100;
					obj.style.filter='alpha(opacity:'+(curr+speed)+')';
					}else{
						obj.style[attr]=curr+speed+'px';
					}
					if(flag){
						clearInterval(obj.timer);
						if(fn){
					fn();
				}
				}
			}
			},30);
		}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}