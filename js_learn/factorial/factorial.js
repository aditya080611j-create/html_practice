// let a= 6;
// let arr=[];
// for (let i = 1; i <= a; i++) {
//     arr[i-1]=arr.push(i);
// }
// console.log(arr.reduce((a,b)=>{
//     return a*b;
// }))

// let a =6;
// let product=1;
// for (let i = 1; i <= a; i++) {
//     product*=i;
// }
// console.log(product)


let a=0;
function factorial(num){
let arr= Array.from(Array(num+1).keys());
if (arr.length<=2) {
    return 1;
}else{

    let c= arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    // console.log(c);
    return c;
}
}
console.log(factorial(a));