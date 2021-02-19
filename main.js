function dealCard() {
    var cardElement = document.getElementById("card");
    var pathElement = document.getElementById("path");

    cardElement.className = "";
    cardElement.style = "";

    setTimeout(function () {
        cardElement.className = "dealt";
        cardElement.style = "background-image: url('images/cards/front-" + getRandomNumber(0,53) + ".png'); transform: translateY(" + getRandomNumber(0,30) + "vh) scale(1) rotate(" + getRandomNumber(-25,25) + "deg);";
        pathElement.style = "transform: rotate(" + getRandomNumber(-25,25) + "deg);";
    }, 100);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
