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
    var totalCount = document.getElementById("totalCount").value;
    var firstDivisor = document.getElementById("firstDivisor").value;
    var secondDivisor = document.getElementById("secondDivisor").value;
    var thirdDivisor = document.getElementById("thirdDivisor").value;
    var firstWord = document.getElementById("firstWord").value;
    var secondWord = document.getElementById("secondWord").value;
    var thirdWord = document.getElementById("thirdWord").value;
    var otherWord = document.getElementById("otherWord").value;
    for (var i = 1; i <= totalCount; i++) 
    {
        var output = "";
        if (isDivisible(i, firstDivisor)) 
        {
            output = output.concat(firstWord);
        }
        if (isDivisible(i, secondDivisor)) 
        {
            output = output.concat(secondWord);
        }
        if (isDivisible(i, thirdDivisor)) 
        {
            output = output.concat(thirdWord);
        }
        if (output === "")
        {
            output = (otherWord);
        }

        var newElement = document.createElement("li");
        var newOutput = document.createTextNode(i + " - " + output);
        newElement.appendChild(newOutput);
        var placement = document.getElementsByTagName("ul")[0];
        placement.appendChild(newElement);
    }
}

function isDivisible(num1, num2) 
{
    if (num1 % num2 === 0) 
    {
        return true;
    } else 
    {
        return false;
    }
}