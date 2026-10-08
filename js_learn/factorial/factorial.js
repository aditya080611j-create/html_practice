// let a= 6;
// let arr=[];
// for (let i = 1; i <= a; i++) {
//     arr[i-1]=arr.push(i);
// }
// console.log(arr.reduce((a,b)=>{
//     return a*b;
// }))

let a =6;
let product=1;
for (let i = 1; i <= a; i++) {
    product*=i;
}
console.log(product)