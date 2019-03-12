// JavaScript Document
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/fireworks.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext= document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
	}
function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0 ; i<links.length; i++)
	{
		links[i].onclick=function(){
			return showPic(this);
			}
			links[i].onkeypress=links[i].onclick;
		}
	}

function showPic(whichPic){
	if (!document.getElementById("placeholder")) return true;
	var source=whichPic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return true;
	placeholder.setAttribute("src",source);
    if(!document.getElementById) return false;
    if(whichPic.getAttribute("title")){
		var text=whichPic.getAttribute("title");
		}else{
			var text="";
			}
	var description=document.getElementById("description");
	if(description.firstChild.nodeType==3)
	{
	description.firstChild.nodeValue=text;
	}
	return false;
	}
    addLoadEvent(preparePlaceholder);
	addLoadEvent(prepareGallery);