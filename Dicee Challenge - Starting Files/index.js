var learnjs = Math.floor(Math.random()*6)+1;
var shit = "images/"+"dice"+learnjs+".png";
document.querySelectorAll("img")[0].setAttribute("src",shit);

var learnjs1 = Math.floor(Math.random()*6)+1;
var shit1 = "images/"+"dice"+learnjs1+".png";
document.querySelectorAll("img")[1].setAttribute("src",shit1);

if(learnjs>learnjs1){
    document.querySelector("h1").innerHTML="Player 1 wins";
}

else if(learnjs1>learnjs){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}