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
    let counter = prompt(`How high do you want to count, ${fName}?`);
    fizzbuzzCounter(counter);
}

function fizzbuzzCounter(count) {
    for (let a = 0; a <= count; a++) {
        var evenOdd;

        if (a % 2 == 0) {
            evenOdd = "The number is even.";
        } else {
            evenOdd = "The number is odd.";
        }
        var newPageElement = document.createElement("li");
        var newOutput = document.createTextNode(
            a + " Jeffers Racing -- " + evenOdd
        );
        newPageElement.appendChild(newOutput);
        var position = document.getElementsByTagName("ul")[0];
        position.appendChild(newPageElement);
    }
}