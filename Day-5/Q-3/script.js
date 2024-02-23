let a = document.getElementById("in1").value
let b = document.getElementById("in2").value
let c = document.getElementById("in3").value
let d = document.getElementById("in4").value
let e = document.getElementById("in5").value

if(a==""){
    document.getElementById("ans").innerHTML = "Enter valid number"
}
else{
    if (a>b && a>c && a>d && a>e) {
        document.getElementById("ans").innerHTML = a
    }
    else if(b>c && b>d && b>e ){
        document.getElementById("ans").innerHTML = b
    }else if(c>d && c>e){
        document.getElementById("ans").innerHTML = c
    }else if(d>e){
        document.getElementById("ans").innerHTML = d
    }else{
        document.getElementById("ans").innerHTML = e
    }
}