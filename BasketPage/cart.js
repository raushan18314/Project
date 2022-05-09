
var welcome = document.getElementById("hi");
var con = JSON.parse(localStorage.getItem("contacts"));
welcome.textContent = "Hi, " + con[con.length - 1].First_Name;


let cnt = document.getElementById("product_count");
let product_cart = JSON.parse( localStorage.getItem("cart"));
cnt.value = product_cart.length;




let parent = document.getElementById("container");
let cart =  JSON.parse(localStorage.getItem("cart"));
let total = document.getElementById("total");
let count = document.getElementById("count");

let sum =0;
let coun = 0;
let flag = false;




cart.forEach(function(product){


let row= document.createElement("tr");


 let column1 = document.createElement("td");
 let img =document.createElement("img");
 img.src = product.image
 column1.appendChild(img);

 let column2 = document.createElement("td");
let product_name = document.createElement("p");
product_name.textContent = product.description;
column2.appendChild(product_name);

let column3 = document.createElement("td");
let product_price = document.createElement("p");
product_price.textContent = product.price;
column3.appendChild(product_price);

let column4 = document.createElement("td");
let qty = document.createElement("select");
let opt1 = document.createElement("option");
opt1.value = "1";
opt1.innerText = "1";
let opt2 = document.createElement("option");
opt2.value = "2";
opt2.innerText = "2";
let opt3 = document.createElement("option");
opt3.value = "3";
opt3.innerText = "3";

qty.append(opt1,opt2,opt3);

column4.appendChild(qty);


let column5 = document.createElement("td");
let total_price = document.createElement("p");
total_price.textContent = product.price;

column5.appendChild(total_price);


qty.onmouseleave = function () {

    cal_total(event);

}

qty.onfocus = function () {

check(event);

}











sum = sum + +(product.price);
total.value = sum;
coun++;

product_price.setAttribute("class", "bolder");

row.append(column1, column2, column3,column4,column5);


container.appendChild(row);





});


count.append(coun);

var c = false;


function apply() {
   let app = document.getElementById("apply_code").value;
 
   if ((app == "MAX250") && (total.value>1999) && (!c)){
       c = true;
      total.value = total.value - 250;
       
     
          alert ("Promocode Applied Successfully");
          document.getElementById("apply_code").value = "";
      
   }

   else if 
    ((app == "MAX500") && (total.value>2999)  && (!c)){
        c = true;
      total.value = total.value - 500;
      
      
          alert ("Promocode Applied Successfully");
          document.getElementById("apply_code").value = "";
   
    }

    else if 
    ((app == "MAX1K") && (total.value>4499)  && (!c)){
        c = true;
      total.value = total.value - 1000;
      
      
          alert ("Promocode Applied Successfully");
          document.getElementById("apply_code").value = "";
      
      
    } else if (c) {  
        alert ("Promocode Already Applied")

    }
    else {
        alert ("Invalid Promocode")
    }
    
  

}

function check(event){
 flag = true;
}

function cal_total(event) {

event.target.blur();

if (c && flag){
    c = false;
    alert ("Promocode Removed");
}
 if (flag){
    var x = event.target.parentNode.parentNode;

var x = event.target.parentNode.parentNode;
  
  x.childNodes[4].childNodes[0].innerText = +(x.childNodes[3].childNodes[0].value) * +(x.childNodes[2].childNodes[0].innerText);
  total.value = "0";

  for(let i= 2; i<parent.childNodes.length;i++){

      total.value = +(total.value) + (+parent.childNodes[i].childNodes[4].childNodes[0].innerText);
  }

  flag = false;
   
 }
}