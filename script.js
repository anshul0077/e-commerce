let tl=gsap.timeline({
    repeat:-1
})
let y=-800

function too(){
 
    tl.from("#zero",{
    
        y:200,
    
        duration:2,
    })
    tl.to("#one",{
        
        y:y+=220,
        duration:5,
        
    })
    
    tl.to("#two",{
      
        y:-1100,
        duration:5,
    })
    tl.to("#three",{
     
        y:-1700,
        duration:5,
    })
    tl.to("#four",{
     
        y:-2300,
        duration:5,
    })
}
too()
let nav=document.querySelector("nav")
let search=document.querySelector(".search")
let searchField=document.querySelector("#search-field")
let rightNav=document.querySelector(".right-nav")
let home=document.querySelector("#home")
let category=document.querySelector("#category")
let loginbtn=document.querySelector(".login-btn")
let shop=document.querySelector("#Shop")
let wwindow=document.querySelector(".window")
let contact=document.querySelector("#Contact")
let screenLogin=document.querySelector(".screen-login")
let screenCart=document.querySelector(".cart-screen")
let flag=0
loginbtn.addEventListener('click',()=>{
if(flag==0){


    home.style.display="none"
    category.style.display="none"
    screenLogin.style.display="flex"
    flag=1
}
else{

    home.style.display="flex"
    category.style.display="flex"
    screenLogin.style.display="none"
    flag=0
}
})
let total=0

let flad=0
let dis=0


nav.addEventListener("click",(dets)=>{

if(dets.target.classList.contains("search-icon")){
    if(flad==0){
search.style.display="block"
rightNav.style.width="25%"
flad=1
    }
    else{
        search.style.display="none"
        rightNav.style.width="10%"


        flad=0  
    }

    
    
}

if(dets.target.classList.contains("ri-shopping-cart-line")){
   if(dis==0){
    shop.style.display="none"
    home.style.display="none"
    category.style.display="none"
      screenCart.style.display="flex"
      contact.style.display="none"

    dis=1
   } 
   else{
    shop.style.display="block"
    home.style.display="flex"
    category.style.display="block"
    screenCart.style.display="none"
    contact.style.display="flex"

    dis=0
   }
    
}

})

category.addEventListener('click',(dets)=>{
    if(dets.target.classList.contains("bbc")){

    
            shop.style.display="none"
            home.style.display="none"
            category.style.display="none"
            contact.style.display="none"

              wwindow.style.display="block"
        
           } 
        
      
    
})




    

    
            
        



let product=[
    { id:0, img:"./pngwing.com (2).png", brandName:"Nike",cateoNmae:"Air",prize: 40000},
    { id:1,img:"./pngwing.com (3).png", brandName:"Nike",cateoNmae:"Air Maxx",prize: 10000},
    { id:2,img:"./pngwing.com (4).png", brandName:"Addidas",cateoNmae:"sneakers",prize: 20000},
    { id:3,img:"./pngwing.com.png", brandName:"Nike",cateoNmae:"Dynamic Fit",prize: 60000},
    { id:4,img:"./—Pngtree—3d rendering black white sport_14549087.png", brandName:"Redtape",cateoNmae:"Sport",prize: 50000},
    { id:5,img:"./—Pngtree—sports shoes_15910407.png", brandName:"Puma",cateoNmae:"sport",prize: 100000},
]

// // let https=  
  let clutter=""
function loadProduct(){
  
    product.forEach((e)=>{
clutter+=`<div data-id="${e.id}" class="main-product-card">
<div class="images-shop"><img src="${e.img}" alt=""></div>
<div class="product-dets">
    <div class="item-name-shop">
        <h3>${e.brandName}</h3>
        <p>${e.cateoNmae}</p>
    </div>
    <div class="item-prize-shop">
        <h4>${e.prize}</h4>
    </div>
</div>

<div class="item-shop-button">
    <div>Buy Now</div>
    <button class="BTN">Add to cart</button>

</div>
</div>

    
</div>
</div>`
    })

    document.querySelector(".akku-products").innerHTML=clutter
    
}
loadProduct()


let  ak;


document.querySelector(".akku-products").addEventListener("click",function(e){
if(e.target.tagName==='BUTTON'){
     ak=product[e.target.parentElement.parentElement.dataset.id]
    //  console.log(ak);
    //  console.log(ak.brandName)
     loadcart()
   
}

})
function loadcart(){


let html=""

    
let ct=document.querySelector(".cart-items")
 html=`<div  class="items">
    <div  class="item-image">
        <img src="${ak.img}" alt="">
    </div>
    <div class="item-name">
        <h3>${ak.brandName}</h3>
        <p>${ak.cateoNmae}</p>
    </div>
    <div class="item-quantity">
        <button class="Subtract">-</button>
        <p>1</p>
        <button class="add">+</button>



    </div>
    <div class="item-prize">${ak.prize}</div>
    <div class="item-remove-btn">x</div>
</div>`

let itemsPrize=0
 itemsPrize+=(ak.prize)
console.log(itemsPrize);

ct.innerHTML+=html


// items count
let cart=document.querySelector(".cart-nav")
cart.innerHTML=`  <h2>Shopping Cart</h2> <p id="items-count">${ct.childElementCount} &nbsp items</p>`

let cart1=document.querySelector(".summary-dets-part1")
cart1.innerHTML=` <h3>ITEMS  ${ct.childElementCount} </h3>
     <h3> 132.00 </h3>`

// total

 total =total + ak.prize
console.log(total);

      
      



}
