// JavaScript Document
function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
    if(!document.createTextNode) return false;
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs=new Array();
	for(var i=0;i<abbreviations.length;i++){
		var current_abbr=abbreviations[i];
		if(current_abbr.childNodes.length<1) continue;
		var defination = abbreviations[i].getAttribute("title");
		var key= abbreviations[i].lastChild.nodeValue;
		defs[key]=defination;
		}
		var dlist=document.createElement("d1");
		for(key in defs){
			var defination=defs[key];
			var dtitle= document.createElement("dt");
			var dtitle_text=document.createTextNode(key);
			dtitle.appendChild(dtitle_text);
			var ddesc =document.createElement("dd");
			var ddesc_text=document.createTextNode(defination);
			ddesc.appendChild(ddesc_text);
			dlist.appendChild(dtitle);
			dlist.appendChild(ddesc);
			}
			if(dlist.childNodes.length<1) return false;
			var header=document.createElement("h2");
			var header_text=document.createTextNode("Abbrevations");
			header.appendChild(header_text);
			document.body.appendChild(header);
			document.body.appendChild(dlist);
	}
	addLoadEvent(displayAbbreviations);
