/*adjective 
crazy
fire
amazing
*/

/*name
engine 
food
garment
*/

/*another name
bros
limited
hub
*/
let adj={
    1:"crazy",
    2:"amazing",
    3:"fire"
}
let names={
    1:"engine",
    2:"food",
    3:"garment"
}
let another_name={
    1:"bros",
    2:"limited",
    3:"hub"
}
function name_generator(){
    // for (let i = 0; i < 3; i++) {      
        let a=Math.random();
        let b=Math.random();
        let c=Math.random();
        console.log(a);
        console.log(b);
        console.log(c);
        if (a<=0.3) {
        a=1;
    }
    if (a>0.3&&a<=0.6) {
        a=2;
    }
    if (a>0.6) {
        a=3;        
    }
       if (b<=0.3) {
        b=1;
    }
    if (b>0.3&&b<=0.6) {
        b=2;
    }
    if (b>0.6) {
        b=3;        
    }
       if (c<=0.3) {
           c=1;
    }
    if (c>0.3&&c<=0.6) {
        c=2;
    }
    if (c>0.6) {
        c=3;        
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(`this is a bussiness generator and your name is: ${adj[a] } ${names[b] } ${another_name[c] } \n`);
}
name_generator();