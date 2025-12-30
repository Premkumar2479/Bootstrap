let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", show);

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", hide);

function show(){
    document.getElementByID("div1").style.display = "block";
}
function hide(){
    document.getElementByID("div1").style.display = "none";
}