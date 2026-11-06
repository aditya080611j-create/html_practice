function createcard(title,cname,views,monthsold,duration,thumbnail){
    
    if ((views/1000000)>1) {
        views/=1000000;
        views=views+"M"
    }else {
        views/=1000;
        views=views+"K"
        
    }
    let html = ` <div class="cards">
    <span >
    <img src="${thumbnail}" alt="thumbnail" id="thumbnail">
    </span>
    <span>
    <h2 id="title" class="title">${title}</h2> 
    <h3 class="cname" id="cname">${cname}</h3>
    </span>
    <h3 class="views" id="views">${views}</h3><h3 class="months">Views.</h3>
                <h3 class="months" id="months">${monthsold}</h3><h3 class="months">Months</h3>
                <h3 class="duration" id="duration">${duration}</h3>
            </div>
    `
    document.getElementById("contain").innerHTML=document.getElementById("contain").innerHTML+html;
// document.getElementById("thumbnail").src=thumbnail
// document.getElementById("title").innerHTML=title
// document.getElementById("cname").innerHTML=cname
// document.getElementById("views").innerHTML=views
// document.getElementById("months").innerHTML=monthsold
// document.getElementById("duration").innerHTML=duration
}

let button = document.getElementById("btn");
button.addEventListener("click", () => {
    createcard("this is a card exe","aditya",727000 ,12,7.21,"https://shorturl.at/1zMcm")
    
}
)