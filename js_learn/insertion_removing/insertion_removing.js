
// document.querySelector(".box").innerHTML
// document.querySelector(".box").outerHTML

//textcontent

//.hidden

//.hasAttribute()
//.getattribute()
//.setAttribute()
//.removeattribute()
//.attributes()

let div = document.createElement('div');
div.className="created";
div.innerHTML="hi i am a created div";
div.style.backgroundColor="red";
document.querySelector(".box").replaceWith(div)


//.classlist
//.classlist.add()
//.classlist.remove()