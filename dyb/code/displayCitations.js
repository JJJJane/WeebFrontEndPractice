// JavaScript Document
function displayCitations(){
// 	    alert("citation");
		if(!document.getElementsByTagName) return false;
	    if(!document.createElement) return false;
	    if(!document.createTextNode) return false;
		var quotes=document.getElementsByTagName("blockquote");
		for(var i=0;i<quotes.length;i++)
		{
			if(!quotes[i].getAttribute("cite")){
				continue;
				}
				var url=quotes[i].getAttribute("cite");
				var quoteChildren=quotes[i].getElementsByTagName('*');
				if(quoteChildren.length<1) continue;
				var elem=quoteChildren[quoteChildren.length-1];
				var link=document.createElement("a");
				var link_text=document.createTextNode("source");
				link.appendChild(link_text);
				link.setAttribute("href",url);
				link.setAttribute("accesskey","1");
				var superscript=document.createElement("sup");
				superscript.appendChild(link);
				elem.appendChild(superscript);
				}
		}
	addLoadEvent(displayCitations);
