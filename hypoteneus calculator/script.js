//calculating hypoteneus c^2 = a^2+b^2
// c = sqrt(a^2+b^2)

/*let a, b, c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("The hypoteneus is: ", c);*/

document.getElementById("SubmitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "Side c:" +c;
}