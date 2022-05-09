
    var data=[{img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17883266/2022/4/14/5b38465d-e4d7-4249-9ae5-5133eef72a191649914582191Cottonjerseyshorts1.jpg",
              name:"G.A.S",
             
             
              disc:" 1299"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17810408/2022/4/8/f7f81053-9bbf-480a-8d3d-9fa9069cd4ff1649395293295Patternedplaysuit1.jpg",
              name:"PUMA",
              disc:" 1199"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17810286/2022/4/8/1ad9300f-786d-44b4-baad-67010cfd74071649401086115Jerseyshorts1.jpg",
              name:"NIKE",
              disc:" 1599"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18084536/2022/4/29/50cd2cb7-56e6-401a-8a34-853d8fc655d61651202524469PrintedT-shirt1.jpg",
              name:"Allen Solley",
              disc:" 1599"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17883396/2022/4/14/5468cf75-f0fc-4589-ad1b-cb6bb397d4d21649905638063CottonT-shirtdress1.jpg",
              name:"NIKE",
              disc:"999"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16590996/2021/12/23/0263f33a-a956-4232-bf71-9c0e272142201640241884305CottonT-shirt1.jpg",
              name:"Trends",
              disc:" 2500"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17759968/2022/4/5/ee606b40-463b-430d-a968-08e95ec99ece1649131753036Croppedcottontop1.jpg",
              name:"G.A.S.",
              disc:" 1199"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17203116/2022/2/18/98a251b1-69fb-4eda-a1d8-98ad8fcb9f631645196921391CottonT-shirt1.jpg",
              name:"PUMA",
              disc:" 1499"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10808284/2019/10/30/c35d059d-a357-4863-bcb1-eacd8c988fb01572422803188-AHIKA-Women-Kurtas-8841572422802083-1.jpg",
              name:"G.A.S.",
              disc:"1999"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17155414/2022/2/15/19c039ec-861e-49a1-af9c-c8354ac29ad81644900846575Patternedjerseydress1.jpg",
              name:"PUMA",
              disc:" 3,500"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11678804/2020/3/11/75e2f10b-11a1-4aa2-918a-4450f62452fb1583928356746HMBoysNavyBlueSolidCottonChinos1.jpg",
              name:"Trends",
              disc:" 2000"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17810490/2022/4/8/e6e08133-7e6d-41a6-9cf4-1811cb65d9101649394344338OversizedT-shirt1.jpg",
              name:"Trends",
              disc:" 999"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17759918/2022/4/5/f2609a17-c927-49ed-894f-69b5b3c15ffe1649134457102Collaredcottondress1.jpg",
              name:"NIKE",
              disc:" 1499"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17576134/2022/3/18/944f0ddf-7623-4db3-8fa0-c8901f361baf1647581041141PrintedT-shirt1.jpg",
              name:"G.A.S.",
              disc:" 1299"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17185604/2022/2/17/95dd8000-d4d8-4fcb-bf39-fceb92bfb21c1645105877784Printedjerseytop1.jpg",
              name:"PUMA",
              disc:" 2500"},
              {img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17464664/2022/3/10/a8cad0ea-3392-4108-9e99-9617feaaa6af1646915822690Patternedjerseydress1.jpg",
              name:"NIKE",
              disc:" 5000"},
              

]


document.querySelector("#select").addEventListener("change",brand)
function brand (){
    var selected = document.getElementById("select").value
    var filtered = data.filter(function(elem){
        return elem.name == selected
    })
    display(filtered)
    console.log(filtered)
}

document.querySelector("#price").addEventListener("change",sortbyp)
function sortbyp(){
    var selected = document.querySelector("#price").value
    if(selected=="HTL")
        {
          data.sort(function(a,b){
            return b.disc-a.disc
          })
          display(data)
          //console.log(data)
        }

        if(selected=="LTH")
        {
          data.sort(function(a,b){
            return a.disc-b.disc
          })
          display(data)
          //console.log(data)
        }
      }

      document.querySelector("#sort").addEventListener("change",name)
      function name(){
          var selected = document.querySelector("#sort").value
          if(selected=="lth"){
              data.sort(function(a,b){
                  var x = a.name.toUpperCase()
                  var y = b.name.toUpperCase()
                  if(x>y){
                      return 1
                  }
                  if(x<y){
                      return -1
                  }
                  return 0
              })
              console.log(data)
              display(data)
          }

          if(selected=="htl"){
              data.sort(function(a,b){
                  var x = a.name.toUpperCase()
                  var y = b.name.toUpperCase()
                  if(x>y){
                      return -1
                  }
                  if(x<y){
                      return 1
                  }
                  return 0
              })
              console.log(data)
              display(data)
          }
      }
 

 
  
  function display(data) {
      
 data.forEach(function(elem) {
     
      var box = document.createElement("div")
      var image=document.createElement("img")
      image.src = elem.img
      var name = document.createElement("h3")
      name.innerText=elem.name
      var disc = document.createElement("h4")
      disc.innerText=elem.disc
      var button = document.createElement("button")
      button.innerText ="ADD TO BASKET"
      button.addEventListener("click",function(){
          basket(elem)
      });
      box.append(image,disc,name,button)
      document.querySelector("#container").append(box);
   })
  }

    display(data)
 filter.addEventListener("change",function(){
     if(filter.value=="none")
     {
         display(data)
     }
     else{
         var filtered = data.filter(function(elem){
             return elem.name == filter.value;
         })

         display(filtered)
     }
 })

document.querySelector("#select").addEventListener("change",brand)
function brand (){
    var selected = document.getElementById("select").value
    var filtered = data.filter(function(elem){
        return elem.name == selected
    })
    display(filtered)
    console.log(filtered)
}

function basket(elem){
    window.location.href="cart.html";
    var basketArr=[];
    basketArr.push(elem)
    localStorage.setItem("basketobj",JSON.stringify(basketArr));
    console.log(basketArr);
}


