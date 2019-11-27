const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const NOW = new Date();

    const seconds = NOW.getSeconds();
    const minutes = NOW.getMinutes();
    const hours = NOW.getHours();

    const secondDegree = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondDegree}deg)`;

    const minuteDegree = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minuteDegree}deg)`;
    minHand.style.background = "red";

    const hourDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    hourHand.style.background = "rgba(191, 207, 43, 0.74)"
};

setInterval(setDate, 1000);

setDate();
