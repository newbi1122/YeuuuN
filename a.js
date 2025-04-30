var imgf=document.querySelector(".imgfeature")
var listimg=document.querySelectorAll(".listimg img")
var prev=document.querySelector(".prev")
var next=document.querySelector(".next")

var currentIndex = 0;
function updateImgbyindex(index){
    //remove active
    document.querySelectorAll(".listimg div").forEach(item=>{
        item.classList.remove("active")
    })
    currentIndex = index
    imgf.src = listimg[index].getAttribute('src')
    listimg[index].parentElement.classList.add("active")

}
listimg.forEach((imgElement, index)=>{
    
    imgElement.addEventListener("click", e=>{
        updateImgbyindex(index)
    })
})
prev.addEventListener("click",e=>{
    if (currentIndex==0){
        currentIndex= listimg.length-1
    }else{
        currentIndex--
    }
    updateImgbyindex(currentIndex)
})
next.addEventListener("click",e=>{
    if (currentIndex==listimg.length-1){
        currentIndex= 0
    }else{
        currentIndex++
    }
    updateImgbyindex(currentIndex)
})
updateImgbyindex(0)