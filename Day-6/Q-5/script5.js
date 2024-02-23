let a = prompt("PIZZA")
let b = prompt("BURGER")
let c = prompt("Thumsup")
let d = prompt("Coc")
let gst,sgst,ser,main
total = (+a + +b + +c + +d)
gst = (total)*0.18
sgst = (total)*0.09
ser = (total)*0.05

main = +total + +gst + +sgst + +ser
document.getElementById("ans").innerHTML = "total is " + main




