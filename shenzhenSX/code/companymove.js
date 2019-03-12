function move(i){
	if (!document.getElementsByClassName) return false;
    if (!document.getElementsByClassName("companyPic")) return false;
    var elem = document.getElementsByClassName("companyPic");
    for(var j=0;j<10;j++){
    	elem[j].style.left += (i+"px");
    }
}
function companymove(){
	if(!document.getElementsByClassName) return false;
	if(!document.getElementsByClassName("companyPic")) return false;
	var pics=document.getElementsByClassName("companyPic");
	var i=0;
	while(true){
    movement= setTimeout("move(i)",5000);
    i+=10;
}
}

addLoadEvent(companymove);
