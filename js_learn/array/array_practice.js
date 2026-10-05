    // let arr=[];
    // for (let i = 0; i < 4; i++) {
    //     // const element = array[i];
    //     arr[i]=prompt("enter your number for array");
    // }
    // console.log(arr);

    //      let arr=[];
    // for (let i = 0; ; i++) {
    //     // const element = array[i];
    //     arr[i]=prompt("enter your number for array");
    //     if (arr[i]==0) {
    //         break;
    //     }    
    // }
    // arr.pop();
    // console.log(arr);
    
    let a=[10,20,34,45,54];
    console.log(a.filter(e=>{
        if (e%10==0) {
            return true;
        }
        return false;
    }))
    let newarr=a.map((e,index,arr)=>{
        return e**2;
    })
    console.log(newarr)