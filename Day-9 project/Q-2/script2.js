let a = document.getElementById("in1").value
let b = document.getElementById("in2").value

if (a==""&&b=="") {
    document.getElementById("ans").innerHTML = "Enter Details"
}else{
    parseInt(a)
    parseInt(b)
    if (a>=3 && b>=100) {
        document.getElementById("ans").innerHTML = "Congratulations! You are eligible for a special offer." 
        console.log("Congratulations! You are eligible for a special offer.")
    }else{
        document.getElementById("ans").innerHTML = "Sorry! You are not eligible for the special offer."
        console.log("Sorry! You are not eligible for the special offer.")
    }
}