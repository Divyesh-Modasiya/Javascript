let a = prompt("Enter first value")
let b = prompt("Enter second value")
let c = prompt("Enter third value")
let d = prompt("Enter fourth value")
let e = prompt("Enter fifth value")

a = parseInt(a)
b = parseInt(b)
c = parseInt(c)
d = parseInt(d)
e = parseInt(e)

if (a>b && a>c && a>d && a>e) {
    document.getElementById("ans").innerHTML = "maximum value is " + a
}else if(b>c && b>d && b>e){
    document.getElementById("ans").innerHTML = "maximum value is " + b
}else if(c>d && c>e){
    document.getElementById("ans").innerHTML = "maximum value is " + c
}else if(d>e){
    document.getElementById("ans").innerHTML = "maximum value is " + d
}else{
    document.getElementById("ans").innerHTML = "maximum value is " + e
}