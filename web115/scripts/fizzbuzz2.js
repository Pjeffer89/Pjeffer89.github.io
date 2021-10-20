function getName() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let mInitial = document.getElementById("mInitial").value;
    document.getElementById("greeting").textContent =
        "Welcome to Jeffers Racing and Performance, " +
        fName +
        " " +
        mInitial +
        ". " +
        lName +
        ".";
    newCounter();
}

function newCounter() {
    var numLines = 140;
    var output;
    var firstDivisor = 3;
    var secondDivisor = 5;
    var thirdDivisor = 15;
    for (let i = 1; i <= numLines; i++) {
        if (isDivisible(i, thirdDivisor)) {
            output = "Skrrt Brap";
        } else if (isDivisible(i, secondDivisor)) {
            output = "Brap";
        } else if (isDivisible(i, firstDivisor)) {
            output = "Skrrt";
        } else {
            output = "Vroom";
        }

        var newElement = document.createElement("li");
        var newOutput = document.createTextNode(i + " - " + output);
        newElement.appendChild(newOutput);
        var placement = document.getElementsByTagName("ul")[0];
        placement.appendChild(newElement);
    }
}

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}