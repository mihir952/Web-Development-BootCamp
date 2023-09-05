var randomnumber1=Math.floor(Math.random()*6) +1;
var randomdiceimage="dice"+ randomnumber1+".png";
var randomimagesource="images/"+randomdiceimage;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);




var randomnumber2=Math.floor(Math.random()*6) +1;
var randomdiceimage2="dice"+ randomnumber2+".png";
var randomimagesource2="images/"+randomdiceimage2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


if(randomnumber1>randomnumber2){
    document.querySelectorAll(".container h1")[0].innerHTML="player1 Won";
}
else if(randomnumber1==randomnumber2){
    document.querySelectorAll(".container h1")[0].innerHTML="math Tied"
}
else{
    document.querySelectorAll(".container h1")[0].innerHTML="player2 Won"
}