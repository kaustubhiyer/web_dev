var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var css = document.querySelector("h3");
var body = document.querySelector("body");

setBackground = () => {
    body.style.background = "linear-gradient(to right, " 
    + c1.value + ", " 
    + c2.value + ")";
    css.textContent = body.style.background + ";";
};

c1.addEventListener("input", setBackground);

c2.addEventListener("input", setBackground);

