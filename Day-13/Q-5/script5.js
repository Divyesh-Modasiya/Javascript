function sum(){
    let a = document.getElementById("in").value
    let b,c=1
    while (a > 0 ) {
        b = a%10
        c *= b
        a = parseInt(a/10)
    }
    console.log(c)
}
sum()