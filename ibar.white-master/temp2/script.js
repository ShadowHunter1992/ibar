function click1() {
    window.scrollTo(0, 670);
}
function click2(){
    window.scrollTo(0,1027);
}
function click3(){
    window.scrollTo(0,1312)
}
function click4(){
    window.scrollTo(0,1685)
}





function tikla1(){
    window.scrollTo(0,670);
}

function tikla2(){
    window.scrollTo(0,1027);
}
function tikla3(){
    window.scrollTo(0,1312);
}
function tikla4(){
    window.scrollTo(0,1685)
}
var a=document.querySelectorAll(".menu_page li")
k=0.45;
function change(){
offset=window.pageYOffset;

setInterval(function(){
if(offset>171){
	k=k-0.001
	document.querySelector(".middler").style.opacity=k;
}
else if(offset<171){

document.querySelector(".middler").style.opacity=0.45;
}


},1)


if(offset>670){document.querySelector(".inner_menu").style.position="fixed"
document.querySelector(".inner_menu").style.left=130+"px";
document.querySelector(".inner_menu").style.transition="0s"
}
 
else if(offset<670){document.querySelector(".inner_menu").style.position="relative"
document.querySelector(".inner_menu").style.left=80+"px"
document.querySelector(".inner_menu").style.transition="0s"
}
if(offset>=670&&offset<1027){
	reset();
	a[0].className="active";
}
else if(offset>=1027&&offset<1312){
	reset();
	a[1].className="active"

}
else if(offset>=1312&&offset<1685){
	reset();
	a[2].className="active"

}
else if(offset>=1685){
	reset();
	a[3].className="active"

}

	
}




function reset(){
for(i=0;i<a.length;i++){
	a[i].className=""
}
}