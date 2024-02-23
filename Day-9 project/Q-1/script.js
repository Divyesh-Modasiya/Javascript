let a = document.getElementById("in").value

switch (parseInt(a)) {
    case 1:
        document.getElementById("ans").innerHTML = "Sunday"
        console.log("Sunday")
        break;
    case 2:
        document.getElementById("ans").innerHTML = "Monday"
        console.log("Monday")
        break;
    case 3:
        document.getElementById("ans").innerHTML = "Tuseday"
        console.log("Tuseday")
        break;
    case 4:
        document.getElementById("ans").innerHTML = "Wensday"
        console.log("wensday")
        break;
    case 5:
        document.getElementById("ans").innerHTML = "Thursday"
        console.log("Thursday")
        break;
    case 6:
        document.getElementById("ans").innerHTML = "Friday"
        console.log("Friday")
        break;
    case 7:
        document.getElementById("ans").innerHTML = "saturday"
        console.log("Saturday")
        break;

    default:
        document.getElementById("ans").innerHTML = "Invalid Number"
        console.log("Invalid Number")
        break;
}