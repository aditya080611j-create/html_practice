function Submit(){
    let div = document.createElement("div");
    div.innerHTML=document.getElementById("inp").value;
    document.querySelector(".todo").insertAdjacentElement('beforeend',div);
}