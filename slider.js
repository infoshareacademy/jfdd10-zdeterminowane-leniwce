(function () {
    setInterval(function () {
        var container = document.querySelector('.hero-right');
        var img = container.querySelector('img:first-child');
        container.appendChild(img);
    }, 3000)
})()