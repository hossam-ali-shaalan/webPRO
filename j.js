
let landing=document.querySelector(".nava");
imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg"];
setInterval(()=>{
    x=Math.floor(Math.random()*4);
landing.style.backgroundImage='url('+imgsArray[x]+')';
},4000)


