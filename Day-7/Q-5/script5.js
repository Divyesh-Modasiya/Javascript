let a = true
let b = document.getElementById("in2").value

if (a==""&&b=="") {
    document.getElementById("ans").innerHTML = "Enter value"
}
else{
    if(a && b>=60){
        document.getElementById("ans").innerHTML = "You are eligible for a discount."
        console.log("You are eligible for a discount")
    }else{
        document.getElementById("ans").innerHTML = "You are not eligible for a discount."
        console.log("You are not eligible for a discount")
    }
}