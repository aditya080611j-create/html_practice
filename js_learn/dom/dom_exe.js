// let a = Math.floor(Math.random()*255);
// let b = Math.floor(Math.random()*255);
// let c = Math.floor(Math.random()*255);
// let boxes = document.getElementsByClassName("box");
// console.log(a);
// console.log(b);
// console.log(c);
// for(let i=0;i<5;i++){
    //     boxes[i].style.backgroundColor=`rgb(${a},${b},${c})`;
    //     a = Math.floor(Math.random()*255);
    //     b = Math.floor(Math.random()*255);
    //     c = Math.floor(Math.random()*255);
    // }
    
    let boxes = document.querySelector(".container").children;
    //in html  collection you cant directly do for each so you have to make array.from
    function getrandom(){
        let val1=Math.ceil(0+Math.random()*255)
        let val2=Math.ceil(0+Math.random()*255)
        let val3=Math.ceil(0+Math.random()*255)
        return `rgb(${val1},${val2},${val3})`
    }

    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor=getrandom();
        e.style.color=getrandom();
    })