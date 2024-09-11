
/*console.log(x);
console.log(y);
console.log(z);
*/
document.getElementById('rollBtn').onclick = function(){
    //generating a random number between 1 and 6
    let x = Math.floor(Math.random()*6) + 1;
    let y = Math.floor(Math.random()*6) + 1;
    let z = Math.floor(Math.random()*6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

}