<script setup>
// Set the date we're counting down to
var countDownDate = new Date("Oct 4, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("day").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("day").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
</script>

<template>
    <div class="grid grid-cols-2 md:flex text-center gap-6 self-center">
        <div>
            <div class="px-5 py-2 border-2 border-white rounded-xl">
                <p id="day" class="text-white text-4xl"></p>
            </div>
            <p class="text-white font-bold text-xl mt-1">Days</p> 
        </div>
        <div>
            <div class="px-5 py-2 border-2 border-white rounded-xl">
                <p id="hours" class="text-white text-4xl"></p>
            </div>
            <p class="text-white font-bold text-xl mt-1">Hours</p> 
        </div>
        <div>
            <div class="px-5 py-2 border-2 border-white rounded-xl">
                <p id="minutes" class="text-white text-4xl"></p>
            </div>
            <p class="text-white font-bold text-xl mt-1">Minutes</p> 
        </div>
        <div>
            <div class="px-5 py-2 border-2 border-white rounded-xl">
                <p id="seconds" class="text-white text-4xl"></p>
            </div>
            <p class="text-white font-bold text-xl mt-1">Seconds</p> 
        </div>
    </div>
    
</template>