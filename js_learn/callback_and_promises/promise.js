console.log('this is a promise');

let prom1 =new Promise((resolve,reject) => {
    let b =Math.random();
    console.log(b);
if (b<0.5) {
    reject("there has been an error")
} else {
    
    setTimeout(() => {
        console.log("done");
        resolve("aditya")
    }, 1000);
}
}
)
prom1.then(
    (a) => {
      console.log(a);
      
    }
    
).catch((err) => {
  console.log(err);
  
}
)