function openGift(){

document.getElementById("giftSection").style.display="block";

const music = document.getElementById("music");

music.volume = 0.7;
music.loop = true;

music.play().catch(err=>{
console.log(err);
});

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});
}

const images=[
"deandra1.jpg",
"deandra2.jpg",
"deandra3.jpg",
"deandra4.jpg",
"deandra5.jpg",
"deandra6.jpg"
];

const quotes=[
"Every picture of you feels like my favorite memory.",
"You are beautiful in every universe.",
"My favorite view has always been you.",
"Your smile is my favorite place.",
"Every day with you is a blessing.",
"My heart chose you long ago."
];

let current=0;

setInterval(()=>{

current++;

if(current>=images.length){
current=0;
}

document.getElementById("slide").src=
images[current];

document.getElementById("quote").innerText=
quotes[current];

},3000);

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="🤍";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize=
(Math.random()*20+20)+"px";

heart.style.animation=
"fall 8s linear";

document.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);

const style=document.createElement("style");

style.innerHTML=`
@keyframes fall{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(100vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
