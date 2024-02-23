let a = document.getElementById("in").value

switch (a) {
    case "red": document.getElementById("ans").innerHTML = "Stop!"
                console.log("Stop!")
        break;
    case "yellow": document.getElementById("ans").innerHTML = "Slow down!"
                console.log("Slow down!")
        break;
    case "green": document.getElementById("ans").innerHTML = "Go"
                console.log("Go")
        break;

    default: document.getElementById("ans").innerHTML = "Invalid light color"
             console.log("Invalid light color")
        break;
}