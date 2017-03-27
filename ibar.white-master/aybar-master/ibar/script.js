


mezenne=["USD","AZN","RUB"]
aliw=["1.7998 ",
      "1.0300 ",
      "36.899 "]

      satiw=["2.7998 ",
      "2.0300 ",
      "46.899 "]

a=document.querySelector(".header .col5 .col4").children[0]
b=document.querySelector(".header .col5 .col4").children[1]
c=document.querySelector(".header .col5 .col4").children[2]

i=1;
setInterval(function(){
	
   	a.innerHTML=mezenne[i]
   	  setTimeout(function(){
   	  	b.innerHTML=aliw[i];
   	    setTimeout(function(){
   	    	c.innerHTML=satiw[i]
   	    },500)  
   	  },500);
	
	
	i++
	if(i==3){
		return i=0
	}
	

},3000)



var inputCount =document.querySelector(".calcunder .calcself .col4:first-child input");
var inputMonth =document.querySelector(".calcunder .calcself .col4:nth-child(2) input");
var select=document.querySelector(".calcunder .calcself .col4:nth-child(3) select")
var percentdegree=document.querySelector(".calcresult .col3 p:nth-child(2)")
var faizumumimeblegi=document.querySelector(".calcresult .col9 .col6:first-child p:nth-child(2)")
var ayfaizi=document.querySelector(".calcresult .col9 .col6:nth-child(2) p:nth-child(2)")



var inputCountp=document.querySelector(".calcunder .calcself .col4:nth-child(1) p:nth-child(2)");
var inputMonthp=document.querySelector(".calcunder .calcself .col4:nth-child(2) p:nth-child(2)");


var list=document.getElementById('selectlist')

setInterval(function(){
   inputCountp.innerHTML=inputCount.value ;
   inputMonthp.innerHTML=inputMonth.value +" ay";
    if(list.options.selectedIndex=="0"){
      document.querySelector(".calcresult .col9 .col6:nth-child(2) p:nth-child(1)").innerHTML="Hər ay ödənilən faiz"
            
        if(inputMonth.value==12){
            percentdegree.innerHTML=11+"%"  
            faizumumimeblegi.innerHTML=parseInt((inputCount.value)/100*11).toFixed(2)
            ayfaizi.innerHTML=(parseInt(faizumumimeblegi.innerHTML)/parseInt(inputMonth.value)).toFixed(2)
            }else{
               faizumumimeblegi.innerHTML=parseInt((inputCount.value)/100*parseInt(inputMonth.value)).toFixed(2)
               ayfaizi.innerHTML=(parseInt(faizumumimeblegi.innerHTML)/parseInt(inputMonth.value)).toFixed(2)
                percentdegree.innerHTML=12+"%"  
            }

    }


    else   {
      document.querySelector(".calcresult .col9 .col6:nth-child(2) p:nth-child(1)").innerHTML="Hər il ödənilən faiz"
           if(inputMonth.value==12){
            
             percentdegree.innerHTML=12+"%"
             faizumumimeblegi.innerHTML=parseInt((inputCount.value)/100*12).toFixed(2)
             ayfaizi.innerHTML=parseInt((inputCount.value)/100*12).toFixed(2)


           } 
           else{
               percentdegree.innerHTML=13+"%"
                  if(inputMonth.value==24){
                      faizumumimeblegi.innerHTML=parseInt((inputCount.value)/100*13*2).toFixed(2)
                       ayfaizi.innerHTML=parseInt((inputCount.value)/100*13).toFixed(2)

                  }
                  else if(inputMonth.value==36){
                      faizumumimeblegi.innerHTML=parseInt((inputCount.value)/100*13*3).toFixed(2)
                      ayfaizi.innerHTML=parseInt((inputCount.value)/100*13).toFixed(2)
                  }

           }
    }
},1)



//kalk sektor bgnin yoxa cixmagi//


