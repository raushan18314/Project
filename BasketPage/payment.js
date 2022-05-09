var con = JSON.parse(localStorage.getItem("contacts"));
var frm = document.getElementsByTagName("form");
frm[0].childNodes[1].value = con[con.length - 1].First_Name + " " + con[con.length - 1].Last_Name;
frm[1].childNodes[1].value = con[con.length - 1].Mobile;
var inpt = document.getElementsByTagName("input");

var state = document.querySelector("select");

var btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", checkPayment);


function checkPayment() {
    var c = true;
    for(let j = 0; j<6; j++)
    {
        inpt[j].value = inpt[j].value.trim();
        if(inpt[j].value == "" || inpt[2].value.length != 6 || state.value == "")
        {
            c = false;
            console.log(inpt[j].value);
        }
    }

    for(let j = 7; j<12; j++)
    {
        inpt[j].value = inpt[j].value.trim();
        if(inpt[j].value == "")
        {
            c = false;
            console.log(inpt[j].value);;
        }
    }
    if(!c)
    {
        alert("Enter correct details");
    }

    if(c)
    {
        if(inpt[7].value.length == 16) 
        {
            if(inpt[11].value.length == 3)
            {
                if(+(inpt[9].value) <=12 && +(inpt[9].value) > 0)
                {
                    if(+(inpt[10].value) > 2020)
                    {
                        paymentaccep();
                        for(let j = 2; j<12; j++)
                        {
                            inpt[j].value = "";
                        }
                        state.value = "";
                    }
                    else
                    alert("Card expired");
                }
                else
                alert("Enter valid date");
            }
            else
            alert("Invalid CVV")
        }
        else
        alert("Invalid Card Number");
        
    }
    
}

function paymentaccep() {
    setTimeout(paymentaccepted, 4000)
}

function paymentaccepted() {
    alert("Payment Successful");
    let X = [];
    localStorage.setItem("cart",JSON.stringify(X));
    setTimeout(takeToHome, 5000);
}

function takeToHome() {
    window.location.href = "..\HomePage\homewomen.html";
}
 var pay =document.querySelector("#success").addEventListener("click", events)
function events(){
    event.preventDefault()
    alert("payment successful");
}
   
