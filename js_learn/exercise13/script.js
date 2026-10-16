function createcard(title,cname,views,monthsold,duration,thumbnail){
    
document.getElementById("thumbnail").src=thumbnail
document.getElementById("title").innerHTML=title
document.getElementById("cname").innerHTML=cname
if ((views/1000000)>1) {
    views/=1000000;
    views=views+"M"
}else {
    views/=1000;
    views=views+"K"
    
}
document.getElementById("views").innerHTML=views
document.getElementById("months").innerHTML=monthsold
document.getElementById("duration").innerHTML=duration

}
createcard("this is a card exe","aditya",727000 ,12,7.21,"https://shorturl.at/1zMcm")

