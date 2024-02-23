let a = document.getElementById("in").value
if (a =="") {
    document.getElementById("ans").innerHTML = "Enter Number"
}else{
    if (a == 0 ) {
        document.getElementById("ans").innerHTML = "It seems like no one is attending the reception. Are you sure?"
        console.log("It seems like no one is attending the reception. Are you sure?")
    }else if(a == 1){
        document.getElementById("ans").innerHTML = "Great! There is one guest attending the reception."
        console.log("Great! There is one guest attending the reception.")
    }else if(a == 2){
        document.getElementById("ans").innerHTML = "Perfect! You and one other person will be attending the reception."
        console.log("Perfect! You and one other person will be attending the reception.")
    }else if(a > 2){
        document.getElementById("ans").innerHTML = "guests will be attending the reception."
        console.log("guests will be attending the reception.")
    }else{
        document.getElementById("ans").innerHTML = "Invalid input. Please enter a valid number of guests."
        console.log("Invalid input. Please enter a valid number of guests.")
    }
}

for (let i = 1; i <= a; i++) {
    if (i == 3) {
        continue
    }
    console.log("Thank you, guest " + i)
    document.write("Thank you, guest " + i + "<br>")
}