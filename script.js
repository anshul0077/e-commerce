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




    

    
            
        



