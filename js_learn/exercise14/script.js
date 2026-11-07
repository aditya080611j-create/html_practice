// var arr=[`initializing hacking...<`, `reading your files...<` ,`password detected...<`, `sending files to server...<`, `cleaning up...<`];
// async function heck(i){
//         let a = (Math.ceil(Math.random()*7))*1000;
//         // console.log(a);
//         return new Promise(
//             (resolve,reject) => {
              
//                 setTimeout(() => {
//                     resolve(a);
//                     document.querySelector(".hack").innerHTML=document.querySelector(".hack").innerHTML+arr[i];
//                 }, a);
//                 }            
//         )
//     }
//     async function main() {
//         for (let i = 0; i < arr.length; i++) {
//          let data =await heck(i);
//         //  console.log(data);   
//         }
//     }
// main();
var arr=[`initializing hacking`, `reading your files` ,`password detected`, `sending files to server`, `cleaning up`];
const additem=async (item) => {
  await delay();
  let hack=document.createElement("div");
  hack.innerHTML=item;
  document.body.append(hack);
}
const delay=() => {
  return new Promise(
    (resolve,reject) => {
     a = 1+6*Math.random();
      setTimeout(() => {
        resolve();
      }, a*1000);
    }
  )
}
async function main(){
  setInterval(() => {
    
    let last =document.body.lastElementChild;
    if(last.innerHTML.endsWith("...")){
      last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
    }
    else{

      last.innerHTML=last.innerHTML+"."
    }
  }, 50);

    for (const item of arr) {
        await additem(item);
    }
}

main();