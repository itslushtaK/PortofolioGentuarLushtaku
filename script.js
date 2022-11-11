var content = document.getElementsByTagName('body')[0];
var dark= document.getElementById('myTopnav');
var darkmode = document.getElementById('dark-change');
darkmode.addEventListener('click' ,function(){
  content.classList.toggle('night');
  dark.classList.toggle('nights');
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

