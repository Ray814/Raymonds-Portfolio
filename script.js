//loader function
window.addEventListener('DOMContentLoaded', function show(){
    setTimeout(function (){
        document.querySelector('.loader').style.display="none";
    },1000);
})

//darkmode function
const modeSwitch = document.getElementById('chkbox');
let header = document.querySelector('.header');
let menu = document.querySelector('.menu');
let moder = document.getElementById('moder');
modeSwitch.addEventListener('change', () =>{
 if (modeSwitch.checked == true){
document.body.style.backgroundColor='rgb(0, 0, 0)';
document.body.style.color='white';
header.style.backgroundColor='rgb(20, 20, 20)';
menu.style.backgroundColor='rgb(20, 20, 20)';
moder.innerHTML='Dark mode';
}
 else{
    document.body.style.backgroundColor='white';
document.body.style.color='black';
header.style.backgroundColor='rgb(234, 234, 234) ';
menu.style.backgroundColor='rgb(234, 234, 234) ';
moder.innerHTML='Light mode';
}
})
//view animation
const sections = document.querySelectorAll('.animate');
window.addEventListener('scroll', ()=>{
    sections.forEach((section)=>{
        
        if(window.scrollY > section.offsetTop-500){
           section.style.animation='slidein linear 1s 1';
           section.style.opacity = 1;
        }
    })
})





//image display
const images = ['p13.webp','p27.webp','p32.webp','p34.webp','p42.webp',
'p37.webp','p14.webp','p11.webp',
];
const imageContainer = document.querySelector('.imagedisplay');
const image = document.querySelector('.image');


let currentIndex = 0;
function showNextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
}
setInterval(showNextImage, 3000);
image.src = images[0]

//download function
const downloadButton = document.getElementById('download');
const downloadlink = downloadButton.parentNode;
downloadButton.addEventListener('click', (e)=> {
e.preventDefault();
e.stopPropagation();

Swal.fire({
    title:"Download started",
                text:'Downloading my Cv',
                icon:'success',
                timer:2000,
   }).then(()=>{
    downloadlink.click();
   })
})

    //Form submit function
    const form= document.querySelector('form');
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        Swal.fire({
            title:"Success!",
                text:'Message submitted successfully',
                icon:'success',
                confirmButtonText:'OK'
    })
    .then(()=>{
        form.submit();
    })
    })

    const text = "WEB DEVELOPER";
const animationDuration = 4000;
const typingAnimation = document.querySelector('.typingAmination');

let i = 0;
const interval = setInterval(()=>{
    typingAnimation.textContent += text.slice[i];
    i++;
    if(i >= text.length){
        clearInterval(interval);
    }

}, 5000)

document.addEventListener("DOMContentLoaded", function(){
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');

//Toggle

setInterval(() =>{
    if
        (el.classList.contains('fade-in')) {
    
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        }else{
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        }
    }, 1500);
    
    });
});

