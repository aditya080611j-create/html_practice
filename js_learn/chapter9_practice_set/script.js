// function loadscript(src){
//     let prom= new Promise(
//         (resolve,reject) => {
//           let sc =document.createElement("script")
//           sc.src=src;
//           sc.onload=resolve();
//           document.body.append(sc);
//         }

//     )
//     prom.then(
//         alert("the script is loaded...")
//     )

// }
// loadscript("src.js")

// async function loadscript(src){
//     let sc= document.createElement("script");
//     sc.src=src;
//     sc.onload=alert("the script has been loaded");
//     document.body.append(sc);
// }
// async function main(){
//     await loadscript("src.js");
// }
// main();


// async function q3(){
//     let prom = new Promise(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 reject("error error error");
//             }, 3000);
//         }
//     )
// }
// async function main(){
//     try {
//         await q3()
//     } catch (error) {
//         console.log("its an error:",error);
        
//     }
// }
// main();


async function q4(name){
    return new Promise(
        (resolve,reject) => {
          resolve("hey how are you ",name)
        }
        
    )
}
async function main(){
    // let p1 =await q4("aditya");
    // let p2 =await q4("aditya");
    // let p3 =await q4("aditya");
    await Promise.all([
    q4("aditya"),
    q4("aditya"),
    q4("aditya")
    ]).then(
        (a) => {
          console.log(a);
          
        }
        
    )
}
main()
