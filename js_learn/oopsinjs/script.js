//question 1st
// class complex{
// constructor(a,b){
//     // console.log(`the complex number is ${a} + ${b}i`);
//     this.real=a;
//     this.imag=b;    
// }
// }
// let comp =new complex(1,2)


//question 2nd
// class complex{
// constructor(a,b){
//     // console.log(`the complex number is ${a} + ${b}i`);
//     this.real=a;
//     this.imag=b;    
// }
// add(obj2){
// console.log(
//   `sum is ${this.real+obj2.real} + ${this.imag+obj2.imag}i`
// );
// }
// }
// let comp1 =new complex(1,2)
// let comp2 =new complex(2,3)
// comp1.add(comp2)





// question 4


class complex{
    constructor(a,b){
    // console.log(`the complex number is ${a} + ${b}i`);
    this._real=a;
    this._imag=b;    
}

    get real(){
        return this._real;
    }
    set real(newreal){
        return this._real=newreal;
    }
    get imag(){
        return this._imag;
    }
    set imag(newimag){
        return this._imag=newimag;
    }
}
let comp =new complex(1,2)
console.log(`${comp.real} + ${comp.imag}i`);
comp.real=10;
comp.imag=10;
console.log(`${comp.real} + ${comp.imag}i`);


