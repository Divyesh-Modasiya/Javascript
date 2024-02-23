let day = document.getElementById("in").value

switch (parseInt(day)){
    case 1: document.getElementById("ans").innerHTML = "today is Monday " + "workday"
    break
    case 2: document.getElementById("ans").innerHTML = "today is Tuseday " + "workday"
    break
    case 3: document.getElementById("ans").innerHTML = "today is Wensday " + "workday"
    break
    case 4: document.getElementById("ans").innerHTML = "today is Thursday " + "workday"
    break
    case 5: document.getElementById("ans").innerHTML = "today is Friday " + "TGIF"
    break
    case 6: document.getElementById("ans").innerHTML = "today is Saturday " + "weekend"
    break
    case 7: document.getElementById("ans").innerHTML = "today is Sunday " + "weekend"
    break
    default : document.getElementById("ans").innerHTML = "Invalid Number"
    break
}