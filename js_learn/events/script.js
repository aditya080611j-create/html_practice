let button= document.getElementById("btn");
button.addEventListener("click",()=>{
    // alert("you have clicked");
    document.querySelector(".box2").innerHTML=" <b> you have clicked this<b>"
})
button.addEventListener("contextmenu",()=>{
    alert("you have right clicked");
    // document.querySelector(".box2").innerHTML=" <b> you have clicked this<b>"
})