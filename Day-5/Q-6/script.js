let a = document.getElementById("in1").value
let i

if (a=="") {
    document.getElementById("ans").innerHTML= "Enter value"
}
else{
    if (a>=0 && a<=10000) {
        i = a+(a*0.05)
    }else if(a>10000 && a<=20000){
        a = a - 10000
        i = 10500 + a + (a*0.1)  
    }
    else if(a>20000 && a<=30000){
        a = a - 20000
        i = 21500 + a + (a*0.15)  
    }
    else if(a>30000 && a<=40000){
        a = a - 30000
        i = 33000 + a + (a*0.20)  
    }else{
        a = a - 40000
        i = 45000 + a + (a*0.25)
    }
}
document.getElementById("ans").innerHTML = i