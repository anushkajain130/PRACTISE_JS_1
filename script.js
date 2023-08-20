const button = document.createElement("button");
button.textContent = "CLICK ME";
button.style.position = "absolute" ;
button.style.left = "300px";
button.style.top = "400px";
button.style.backgroundColor = "black"

button.style.color = "aqua";
document.body.appendChild(button);

const bg_color = 
{
  0 : "black",
  1 : "green",
  2 : "red",
  3 : "aqua",
  4 : "white"
}

button.addEventListener("click" , function() {
let a = Math.floor(Math.random() * 5)
document.body.style.backgroundColor = bg_color[a]

})
  
