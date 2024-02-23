function odd() {
    let a = document.getElementById("in").value
    for (let i = 1; i <= a; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
odd()