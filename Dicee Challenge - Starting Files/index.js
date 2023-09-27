var n = Math.random()
var n2 = Math.random()
var randomNumber = Math.round(n*6)
var randomNumber2 = Math.round(n2*6)
var s_img1
var s_img2
if(randomNumber===0){
    s_img1 = "images/dice"+(randomNumber+1)+".png";
}
else{
    s_img1 = "images/dice"+randomNumber+".png";
}
document.querySelector(".img1").setAttribute("src",s_img1);


if(randomNumber2===0){
    s_img2 = "images/dice"+(randomNumber2+1)+".png";
}
else{
    s_img2 = "images/dice"+randomNumber2+".png";
}
document.querySelector(".img2").setAttribute("src",s_img2);
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}