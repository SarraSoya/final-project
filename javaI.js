const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
const demo=document.querySelectorAll(".demo")
const button=document.querySelectorAll(".button")
for(let i=0;i<button.length;i++){
button[i].addEventListener('click', ()=>{
        demo[i].innerHTML = "KEEP SOCIAL DISTANCE";
    button[i].remove()
      });}
      // heart icon:from black to red
var heartBtn=document.querySelectorAll('.heartBtn');
var heart=document.querySelectorAll('.fa-heart');
for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener('click', function () {
if (heart[i].style.color=='red') heart[i].style.color='black'
else heart[i].style.color='red'

  })}