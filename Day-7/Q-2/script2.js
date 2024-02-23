let a = document.getElementById("in1").value

if (a == "") {
    document.getElementById("ans").innerHTML = "Enter age"
}else{
    if (a>0&&a<=12) {
        document.getElementById("ans").innerHTML = "You are Child"
        console.log("You are Child")
    }else if(a>12&&a<=19){
        document.getElementById("ans").innerHTML = "You are Teen"
        console.log("You are teen")
    }else if(a>=20&&a<=59){
        document.getElementById("ans").innerHTML = "You are Adult"
        console.log("You are Adult")
    }else if(a>=60){
        document.getElementById("ans").innerHTML = "You are Senior"
        console.log("You are Senior")
    }else{
        document.getElementById("ans").innerHTML = "Invalid"
        console.log("You are Invalid")
    }
}