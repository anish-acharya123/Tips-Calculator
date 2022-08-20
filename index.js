let Amount =  document.getElementById("bill-am")
let People = document.getElementById("bill-cust")
let Custom = document.getElementById("text-custom")
let result = document.getElementById('result');
let total = document.getElementById('total')


let resultValue = 0;
let buttons = document.querySelectorAll(".btn");
 buttons.forEach((button) => {
  button.addEventListener(
    "click",

     ()=> value(button)
    
    );
  });

 
  function value(button){
    let ele = parseInt(button.innerHTML) / 100;
    resultValue = ele
    btn();
   
    
  }

  
 
  function val(){
    let Amt = parseInt(Amount.value)
    let cust = parseInt(Custom.value);
 
      if(cust){
        resultValue = cust/100
      }
      
      result.innerHTML = '$ '+Math.round(resultValue*Amt)/ People.value;
      total.innerHTML =  "$ " + Math.round(Amt + (resultValue*Amt))/ People.value;
    }

     
  

  function btn(){
    let Amt = parseInt(Amount.value)
      Custom.value = ""
      result.innerHTML = '$ '+(resultValue*Amt)/ People.value;
      total.innerHTML =  '$ '+ (Amt + (resultValue*Amt))/ People.value;
    }

  function reset(){
    result.innerHTML = "";
    total.innerHTML = '';
    resultValue = '';
    Amount.value = '';
    People.value = '';
  }
  



