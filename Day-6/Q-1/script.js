let a = document.getElementById("in1").value
let b = document.getElementById("in2").value
let c = document.getElementById("in3").value
if (a==""&&b==""&&c=="") {
  document.getElementById("ans").innerHTML = "Enter valid value"
}else{
a = parseInt(a)
b = parseInt(b)
c = parseInt(c)

    if (a<b) {
        if (a<c) {
            document.getElementById("ans").innerHTML = a
        }else{
            document.getElementById("ans").innerHTML = c
        }
    }else{
        if (b<c) {
            document.getElementById("ans").innerHTML = b
        }else{
            document.getElementById("ans").innerHTML = c
        }
    }
}