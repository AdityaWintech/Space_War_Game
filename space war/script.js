const player=document.getElementById("player");
const game=document.getElementById("game");
const alien=document.getElementById("alien");
const result=document.getElementById("result");
const score=document.getElementById("score");
var counter=0;
const shooting=document.getElementById("shoot");
const gameOverMusic=document.getElementById("gameOverMusic");
// My SpaceShip Movement
window.addEventListener("keydown",function(e){
    if(e.keyCode=="39"){
        var playerLeft=parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if(playerLeft<390){
            player.style.left=(playerLeft+130)+"px";
        }   
    }
    if(e.keyCode=="37"){
        var playerLeft=parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if(playerLeft>0){
            player.style.left=(playerLeft-130)+"px";
        }   
    }
})
// *********Fire button
window.addEventListener("keydown",function(e){
    if(e.keyCode=="32"){
        var canon=document.createElement("div");
        var img=document.createElement("img");
        img.src="./assests/fire.png";
        img.classList.add("bulletImg");
        canon.classList.add("bullet");
        canon.style.left=player.style.left;
        canon.appendChild(img);
        game.appendChild(canon);
        shooting.play();
     //when bullet hit alien
    setInterval(function collision(){
        var canonLeft=parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
        var canonTop=parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
        var alienLeft=parseInt(window.getComputedStyle(alien).getPropertyValue("left"))
        var alienTop=parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
        if(((canonTop-alienTop)<100) && (alienTop<canonTop) && (alienLeft===canonLeft)){
            canon.style.display="none";
            alien.style.display="none";
        }
    },10)
    setTimeout(function(){
        canon.remove()
    },1000)
    }
})
//Alien Movement
function alienMove(){
    alien.style.display="block";
    var random=((Math.floor(Math.random()*4))*130)
    alien.style.left=random+"px";
    alien.classList.add("alienMove");
    counter++;
}
setInterval(alienMove,2000)
function gameOver(){
    var alienTop=parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
    if(alienTop>560){
        result.style.display="block";
        game.style.display="none";
        score.innerHTML=`Score : ${counter}`;
        counter=0;
        gameOverMusic.play();
        
    }
}
setInterval(gameOver,10)