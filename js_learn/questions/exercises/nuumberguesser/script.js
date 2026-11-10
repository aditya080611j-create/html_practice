//number guesser
var a= Math.floor(Math.random()*100);
console.log(a);
function guesser(){
    // .value reads the current text entered in the input element with id "number".
    let num =0;
    var guess = parseInt(document.getElementById("number").value, 10);
    if(a>guess){
        alert("HIGHER");
    }
    else if(a<guess){
        alert("LOWER");
    }
    num++;
    let score=100-num;
    if(a==guess){
        alert(`your score ${score}`);
    }

    
}