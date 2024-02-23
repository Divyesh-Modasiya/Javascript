let a = document.getElementById("in").value
let b = document.getElementById("in1").value
let c = document.getElementById("in2").value
switch (a){
    case "+":document.getElementById("ans").innerHTML = "sum is " + (+b + +c)
    break
    case "-":document.getElementById("ans").innerHTML = "substraction is " + (+b - +c)
    break
    case "*":document.getElementById("ans").innerHTML = "Multiplication is " + (+b * +c)
    break
    case "/":document.getElementById("ans").innerHTML = "Division is " + (+b / +c)
    break
    default : document.getElementById("ans").innerHTML = "Invalid"
    break
}