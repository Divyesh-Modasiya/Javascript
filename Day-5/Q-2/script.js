let a = document.getElementById("in1").value
let b = document.getElementById("in2").value
let c = document.getElementById("in3").value
let d = document.getElementById("in4").value

if (a == "") {
    document.getElementById("ans").innerHTML = "Enter valid Number"
}
else{
    if(a<b){
        if(a<c){
            if (a<d) {
                document.getElementById("ans").innerHTML = a
            }else{
                document.getElementById("ans").innerHTML = d
            }
        }else{
            if(c<d){
                document.getElementById("ans").innerHTML = c
            }else{
                document.getElementById("ans").innerHTML = d
            }
        }
    }else{
        if(b<c){
            if(b<d){
                document.getElementById("ans").innerHTML = b
            }else{
                document.getElementById("ans").innerHTML = d
            }
        }else{
            if (c<d) {
                document.getElementById("ans").innerHTML = c
            }else{
                document.getElementById("ans").innerHTML = d
            }
        }
    }
}