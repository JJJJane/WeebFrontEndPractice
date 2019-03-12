// JavaScript Document
function highlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("navigation")) return false;
	var nav=document.getElementById("navigation");
	var links=nav.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var linkurl=links[i].getAttribute("href");
		var currenturl=window.location.href;
		if(currenturl.indexOf(linkurl)!=-1){
			links[i].className="here";
			var linktext=links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext);
			}
		}
	}
	addLoadEvent(highlightPage);