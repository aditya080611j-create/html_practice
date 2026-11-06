// async function getdata(){
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 resolve(455)
//             }, 10000);
//         }
        
//     )
// }
async function getdata(){
    let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await x.json()
    // console.log(data);
    return data;
    

}
async function main (){

    let data =await getdata();
    console.log(data);
    
    console.log("hey this is the some tasks");
    console.log("hey this is the some tasks");
    console.log("hey this is the some tasks");
    
}
main()