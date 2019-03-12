// JavaScript Document
function getNextElement(node){
	if(node.nodeType==1){
		return node;
		}
		if(node.nextSibling){
			return getNextElement(node.nextSibling);
			}
			return null;
	}
	function styleHeaderSiblings(tag,theClass){
	    if(!getElementsByTagName) return false;
		var headers=document.getElementsByTagName(tag);
		for(var i=0;i<headers.length;i++){
			var elem=getNextElement(headers[i].nextSibling);
			addClass(elem,theClass);
			}
		}
		window.onload=styleHeaderSiblings("h1","intro");//怎么传参数