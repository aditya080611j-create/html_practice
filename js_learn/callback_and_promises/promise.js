// console.log('this is a promise');

// let prom1 =new Promise((resolve,reject) => {
//     let b =Math.random();
//     console.log(b);
// if (b<0.5) {
//     reject("there has been an error")
// } else {
    
//     setTimeout(() => {
//         console.log("done");
//         resolve("aditya")
//     }, 1000);
// }
// }
// )
// prom1.then(
//     (a) => {
//       console.log(a);
      
//     }
    
// ).catch((err) => {
//   console.log(err);
  
// }
// )
function makepromise(name,delay){
    return new Promise((resolve,reject) => {
      let b =Math.random();
    console.log(b);
if (b<0.5) {
    reject("there has been an error")
} else {
    
    setTimeout(() => {
        console.log("done");
        resolve(name)
    }, 1000);
}
    }
    )
}
let p1= makepromise("aditya1",1000);
let p2= makepromise("aditya2",1000);
let p3= makepromise("aditya3",1000);
let p4= makepromise("aditya4",1000);
// Promise.all([p1,p2,p3,p4]).then(
//     (a) => {
//       console.log(a);
      
//     }
    
// ).catch(
//     (err) => {
//       console.log("failed ",err);
      
//     }
    
// )
// Promise.allSettled([p1,p2,p3,p4]).then(
//     (a) => {
//       console.log(a);
      
//     }
    
// ).catch(
//     (err) => {
//       console.log("failed ",err);
      
//     }
    
// )
Promise.any([p1,p2,p3,p4]).then(
    (a) => {
      console.log(a);
      
    }
    
).catch(
    (err) => {
      console.log("failed ",err);
      
    }
    
)
