const scrollBox=document.querySelector(".box")
scrollBox.onscroll=(x)=>{
    if(scrollBox.scrollTop>200){
        scrollBox.classList.add("show")
    }
    console.log(x)
  console.log (scrollBox.scrollTop)
}

