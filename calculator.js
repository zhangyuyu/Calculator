window.onload = function(){

    var val=0; 
    var valnum=0;
    var temp=0;   
    var symbol="";
    var oTxt=document.getElementById("txt");

    for(var i=0;i<=9;i++){ 	
    	document.getElementById('btn'+i).onclick=function(){ getInputNum(this);}
    }   
    document.getElementById('add').onclick=function(){ getInputSymbol(this);}
    document.getElementById('sub').onclick=function(){ getInputSymbol(this);}
    document.getElementById('mul').onclick=function(){ getInputSymbol(this);}
    document.getElementById('divide').onclick=function(){ getInputSymbol(this);}

	function Calculator(num1,num2,symbol){
            var result=0;
            switch(symbol){
                case "+":
                    result=num1+num2;
                    break;
                case "-":
                    result=num1-num2;
                    break;
                case "*":
                    result=num1*num2;
                    break;
                case "/":
                    result=num1/num2;
                    break;
            }
            return result;
        }
    
    function getInputNum(e){
        val=e.value ; 
        oTxt.value='';  
        valnum+=val; 
        valnum=parseFloat(valnum);
        oTxt.value=valnum;
    }
    
    function getInputSymbol(e){
        symbol=e.value;
        temp=parseFloat(oTxt.value);  
        valnum=0;                    
    }

	document.getElementById('eq').onclick=function(){
    	oTxt.value=Calculator(temp,valnum,symbol);
    }
    document.getElementById('clear').onclick=function(){ 
	    oTxt.value=0;
	    valnum=0;
    }
}