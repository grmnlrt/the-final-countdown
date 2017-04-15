/*
Inspired by https://www.w3schools.com/howto/howto_js_countdown.asp
*/

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(distance / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Set singular or plural for labels hours, minutes and secondes
    var textHours
    var textMinutes
    var textSecondes
    if (hours > 1) {textHours = "heures";} else {textHours = "heure";}
    if (minutes > 1) {textMinutes = "minutes";} else {textMinutes = "minute";}
    if (seconds > 1) {textSecondes = "secondes";} else {textSecondes = "seconde";}
    
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = "<table> <tbody> <tr class='number'> <td>" + hours + "</td> <td>:</td> <td>" + minutes + "</td> <td>:</td> <td>" + seconds + "</td> </tr> <tr class='words'> <td>" + textHours + "</td> <td></td> <td>" + textMinutes + "</td> <td></td> <td>" + textSecondes + "</td> </tr> </tbody> </table>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<p class='end'>Temps écoulé</p>" ;
    }
}, 1000);