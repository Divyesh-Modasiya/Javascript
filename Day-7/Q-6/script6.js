let a = document.getElementById("in1").value
let b = document.getElementById("in2").value
let c = document.getElementById("in3").value
let sum = +a + +b + +c

if (a==""&&b==""&&c=="") {
    document.getElementById("ans").innerHTML = "Enter number"
}else{
    if (sum==180) {
        document.getElementById("ans").innerHTML = "TRIANGLE"
        if (a==b&&b==c) {
            document.getElementById("ans1").innerHTML = "equilateral"
        }else if(a!=b && b!=c){
            document.getElementById("ans1").innerHTML = "isosoceles"
        }else{
            document.getElementById("ans1").innerHTML = "scalene"
        }
    }else{
        document.getElementById("ans").innerHTML= "Triangle not possible"
    }
}