function getName() 
{
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var mInitial = document.getElementById("mInitial").value;
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

function newCounter() 
{
    var numLines = 140;
    var output;
    for (var i = 1; i <= numLines; i++) 
    {
        if (i % 15 === 0) 
        {
            output = "Skrrt Brap";
        } else if (i % 5 === 0) 
        {
            output = "Brap";
        } else if (i % 3 === 0) 
        {
            output = "Skrrt";
        } else 
        {
            output = "Vroom";
        }

        var newElement = document.createElement("li");
        var newOutput = document.createTextNode(i + " - " + output);
        newElement.appendChild(newOutput);
        var placement = document.getElementsByTagName("ul")[0];
        placement.appendChild(newElement);
    }
}