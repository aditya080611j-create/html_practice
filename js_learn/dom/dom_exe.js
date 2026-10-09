let a = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);
let c = Math.floor(Math.random()*255);
let boxes = document.getElementsByClassName("box");
console.log(a);
console.log(b);
console.log(c);
for(let i=0;i<5;i++){
    boxes[i].style.backgroundColor=`rgb(${a},${b},${c})`;
    a = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    c = Math.floor(Math.random()*255);
}