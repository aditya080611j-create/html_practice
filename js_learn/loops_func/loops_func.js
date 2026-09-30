//  let obj={
//     harry:"98",
//     keshav:"99",
//     aditya:"100"
//  }
 let obj={
    harry:98,
    keshav:99,
    aditya:100
 }
//  console.log("harry",obj.harry);
 for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
    
 }
 {
    function mean(n1,n2,n3,n4,n5){
        let mean= (n1+n2+n3+n4+n5)/5;
        return mean;
    }
    console.log(mean(1,2,3,4,5));
 }
 {
    // arrow func
    const meme=(a)=>{
        console.log("uhkvklnvk", a)
    }
    meme(32);   
 }