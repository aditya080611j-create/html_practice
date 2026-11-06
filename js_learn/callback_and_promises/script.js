// asynchronous nature of js 
// like set time out ko taal diya jayega wo last mai
console.log("this is start")
setTimeout(() => {
    console.log("this inside settimeout")
}, 2000);
console.log("this is end")
function callback(arg) {
  console.log(arg);
}

function loadscript(src,callback){
  let sc= document.createElement("script");
  sc.src=src;
  sc.onload=callback("aditya");
  document.head.append(sc);
}
loadscript("https://www.google.com/?zx=1793861431899",callback)

