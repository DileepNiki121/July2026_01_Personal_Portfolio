document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

}

topBtn.onclick=function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank You! Your message has been received.");

});

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav ul");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

});