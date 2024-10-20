// // start header

let iconBT = document.querySelector(".links .icons");
let linksUl = document.querySelector(".links .linksUl");
let linksUlA = document.querySelector(".links .linksUl li a");


//  function handel the iconBTN
iconBT.onclick = function(event){
    event.stopPropagation()

    linksUl.style.display = (linksUl.style.display === "none" ||
        linksUl.style.display==='')?"block":'none';

}

document.onclick = (e)=>{    
    
    if (e.target === iconBT || e.target === linksUl ) {
            linksUl.style.display= "none"
        
    }

}

// //  end header

// start up button

let upButton = document.querySelector(".Up")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 300){
        upButton.style.display= "block"
    }else{
        upButton.style.display = "none"
    }
})

console.log(upButton);
upButton.onclick=()=>{
    window.scrollTo(0,0)
}


// end up button