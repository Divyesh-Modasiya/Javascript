let a = document.getElementById("in1").value

if (a=="") {
    document.getElementById("ans").innerHTML = "Enter number"
}else{
    if (a<10) {
        document.getElementById("ans").innerHTML = "The number is less than 10."
        console.log("The number is less than 10.")
    }else if(a>=10&&a<20){
        document.getElementById("ans").innerHTML = "The number is between 10 and 20."
        console.log("The number is between 10 and 20.")
    }else if(a>=20&&a<30){
        document.getElementById("ans").innerHTML = "The number is between 20 and 30."
        console.log("The number is between 20 and 30.")
    }else if(a>=30){
        document.getElementById("ans").innerHTML = "The number is greater than 30."
        console.log("The number is greater than 30.")
    }else{
        document.getElementById("ans").innerHTML = "invalid number"
        console.log("invalid number")
    }
}