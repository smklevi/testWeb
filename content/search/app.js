const time = new Date().getHours();
let greeting;
if (time < 10) {
    greet = "Good morning!";

} else if (time < 17) {
    greet = "Good afternoon!";
} else {
    greet = "Good evening!"
} 

document.getElementById("greeting").innerHTML = greet;    