let menuTimeout =null;
document.querySelector("#menu").addEventListener("mouseenter", (e)=>{
    
    
    menuTimeout = setTimeout(()=>{
        e.target.classList.add("opened");
    },500)
})

document.querySelector("#menu").addEventListener("mouseleave", (e)=>{
    clearTimeout(menuTimeout);
    e.target.classList.remove("opened");
})