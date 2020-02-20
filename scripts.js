function styleFunction(){
  document.getElementById("resize").style.fontSize = "xx-large";
  document.getElementById("resize").style.color= "red";
}



function dicefunc(){
  var n = Math.random();
  n = n*6;
  n = Math.floor(n) + 1;
console.log(n);

  if(n===1){
document.getElementById("D1").src="1dice.png";

  }else if(n===2){
document.getElementById("D1").src="2dice.png";

 } else if(n===3){
    document.getElementById("D1").src="3dice.png";
  }else if(n===4){
    document.getElementById("D1").src="4dice.png";
  }else if(n===5){
  document.getElementById("D1").src="5dice.png";
  }else{
    document.getElementById("D1").src="6dice.png";
  }
}
