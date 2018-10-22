(function () {
    setInterval(function () {
        var container = document.querySelector('.hero-slider');
        var img = container.querySelector('img:first-child');
        container.appendChild(img);
    }, 7000)
})()