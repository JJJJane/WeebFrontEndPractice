window.onload=function(){
	if (!document.getElementsByClassName){
		document.getElementsByClassName=function(cls){
			var ret=[];
			var els=document.getElementsByTagName("*");
			for(var i=0;li<els.length;i++){
				if(els[i].className===cls||els[i].className.indexOf(cls+' ')>=0||els[i].className.indexOf(' '+cls+' ')>=0||els[i].className.indexOf(' '+cls)>=0){
					ret.push(els[i]);
				}
			}
			return ret;
		}
	}
	var carTable=document.getElementById("carTable")
	var tr = carTable.children[1].rows;
	var checkInputs=document.getElementsByClassName("check");
	var checkAllInputs=document.getElementsByClassName("check-all");
	var selectedTotal=document.getElementById('selectedTotal');
	var priceTotal=document.getElementById('priceTotal');
	var selected=document.getElementById('selected');
	var foot=document.getElementById('foot');
	var selectedViewList=document.getElementById('selectedViewList');
	var arrow=document.getElementsByClassName('arrow');
	var cancel=document.getElementsByClassName('choose');
	var add=document.getElementsByClassName('add');
	function getTotal(){
		var selected=0;
		var price=0;
		var HTMLstr='';
		for(i=0;i<tr.length;i++){
			if(tr[i].getElementsByTagName('input')[0].checked){
				tr[i].className="on";
				selected+=parseInt(tr[i].getElementsByTagName('input')[1].value);
				price+=parseFloat(tr[i].cells[4].innerHTML);
				HTMLstr+='<div style="display:inline-block;margin:20px 10px;"><img src="'+tr[i].getElementsByTagName('img')[0].src+'"/><span index="'+i+'" class="choose">取消选择</span></div>';
			}else{
				tr[i].className='';
			}
		}
		selectedTotal.innerHTML=selected;
		priceTotal.innerHTML=price.toFixed(2);
		selectedViewList.innerHTML=HTMLstr;
	}
	for(var i=0;i<checkInputs.length;i++){
		checkInputs[i].onclick=function(){
			if(this.className==="check-all check"){
				for (var j= checkInputs.length - 1; j >= 0; j--) {
					checkInputs[j].checked=this.checked;
				}
			}
			if(!this.checked){
				for(var j=checkAllInputs.length-1;j>=0;j--){
					checkAllInputs[j].checked=this.checked;
				}
			}
			getTotal();
		}
	}
	selected.onclick=function(){
		if(selectedViewList.className=='clearfix notshow'){
			selectedViewList.className='clearfix';
			arrow[0].className='arrow up notshow';
			arrow[1].className='arrow down'
		}else{
			selectedViewList.className='clearfix notshow';
			arrow[0].className='arrow up';
			arrow[1].className='arrow down notshow'
		}
	}
	selectedViewList.onclick=function(e){
		var el=e.srcElement;
		if(el.className=='choose'){
			var index=el.getAttribute('index');
			var input=tr[index].getElementsByTagName('input')[0];
			input.checked=false;
			getTotal();
		}
	}
	for(var i=0;i<tr.length;i++){
		tr[i].onclick=function(e){
			e=e||window.event;
			var el = e.srcElement;
			var cls=el.className;
			var input=this.getElementsByTagName('input')[1];
			var price=parseInt(this.cells[2].innerHTML);
			var total=parseFloat(this.cells[4].innerHTML);
			var val=parseInt(input.value);
			var reduce=this.getElementsByTagName('span')[1];
			switch(cls){
				case 'add':
					input.value=val+1;
					this.cells[4].innerHTML=total+price;
					reduce.innerHTML='-';
					getTotal();
					break;
				case 'reduce':
				if(val>1){
					input.value=val-1;
					this.cells[4].innerHTML=total-price;
				}if(val<=1){
					reduce.innerHTML='-';
				}
				getTotal();
				break;
				default:
					break;
			}
		}
		}
}