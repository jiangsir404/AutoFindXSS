document.addEventListener('DOMContentLoaded', function(){

if (!localStorage.switch)
    localStorage.switch = "On"
if (localStorage.switch == "On") {
    document.getElementById('switch_value').innerHTML = 'On';
} else if (localStorage.switch == "Off") {
    document.getElementById('switch_value').innerHTML = 'Off';
}

// document.getElementById('switch').addEventListener("click",function(){
// 	document.getElementById('switch').value = "&nbsp;Off";
// });
// alert(JSON.stringify(localStorage));
document.getElementById('switch').onclick = function(){
	if(localStorage.switch == 'On'){
		// alert(1);
		localStorage.switch = 'Off';
		document.getElementById('switch_value').innerHTML = 'Off';
	}else if(localStorage.switch == 'Off'){
		// alert('2');
		localStorage.switch = 'On';
		document.getElementById('switch_value').innerHTML = 'On';
	}else{
		// localStorage.switch = 'On';
		document.getElementById('switch_value').innerHTML = 'On';
	}
};


});
