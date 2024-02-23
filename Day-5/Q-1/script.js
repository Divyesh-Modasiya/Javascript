let a = document.getElementById("in1").value
let unit
if (a=="") {
    document.getElementById("ans").innerHTML = "Enter valid number"
}else{
    if (a<=100) {
      unit = a * 1;
      document.getElementById("ans").innerHTML = unit;  
    }else if(a>=101 && a<=200){
        unit = a *2;
        document.getElementById("ans").innerHTML = unit-100;
    }
    else if(a>=201 && a<=300){
        unit = a *3;
        document.getElementById("ans").innerHTML = unit-300;
    }
    else{
        unit = a*4
        document.getElementById("ans").innerHTML = unit-600;
    }
}