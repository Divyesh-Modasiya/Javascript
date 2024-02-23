let a = document.getElementById("in1").value

if (a=="") {
    document.getElementById("ans").innerHTML="Enter valid number"
}else{
    if (a>0) {
        document.getElementById("ans").innerHTML="positive number" +a
    }else if(a<0){
        document.getElementById("ans").innerHTML="Negetive number" +a
    }
    else{
        document.getElementById("ans").innerHTML="Nutral number" +a
    }
}