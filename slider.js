(function () {
    setInterval(function () {
        var container = document.querySelector('.hero-right');
        var img = container.querySelector('img:last-child');
        container.prepend(img);
    }, 1000)
})()