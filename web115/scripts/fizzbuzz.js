function name() {
let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value;
let mInitial = document.getElementById('mInitial').value;
document.getElementById('greeting').textContent = "Welcome to Jeffers Racing and Performance, " + fName + " " + mInitial + ". " + lName + ".";
}