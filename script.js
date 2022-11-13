function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = ()=>{
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}
function thanks(){
  widget.style.display="none";
  alert("Thanks For feedback");
  }





