var a = Math.floor(Math.random() * 3) + 1;
let obj = {
    1: "r",
    2: "p",
    3: "s"
};

var comp = obj[a];
console.log("Computer:", comp);

function rps() {
    var user = document.getElementById("choice").value
    console.log("User:", user);

    switch (`${comp},${user}`) {
        case "r,r":
            alert("its a tie");
            break;
        case "r,p":
            alert("user wins");
            break;
        case "r,s":
            alert("comp wins");
            break;
        case "p,r":
            alert("comp wins");
            break;
        case "p,p":
            alert("tie");
            break;
        case "p,s":
            alert("user wins");
            break;
        case "s,r":
            alert("user wins");
            break;
        case "s,p":
            alert("comp wins");
            break;
        case "s,s":
            alert("tie");
            break;
        default:
            alert("Invalid choice");
    }
}
