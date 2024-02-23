function fac() {
    let a = document.getElementById("in").value
    let s=1
    for (let i = 1; i <= a; i++) {
        s*=i  
    }
    console.log(s)
}
fac()