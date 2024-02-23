let cpw = "123@divyesh"
let stpw = prompt("Enter password")

if (cpw === stpw) {
    document.getElementById("ans").innerHTML="Log in"
}else{
    document.getElementById("ans").innerHTML="Invalid password"
}