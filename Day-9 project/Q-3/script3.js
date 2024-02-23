let a = document.getElementById("in1").value
let b =parseFloat("82.98")
let c = parseFloat(+a * +b).toFixed(2)

if (a == "") {
    document.getElementById("ans").innerHTML = "Enter Rupees"
}else{
    document.getElementById("ans").innerHTML = c + " Doller"
    console.log(c + " Doller")
}