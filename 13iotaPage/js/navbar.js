let btn = document.querySelector('.reading');
btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    btn.style.setProperty('--x', x*2+"deg");
})

document.addEventListener("DOMContentLoaded", function() {
    var readingDiv = document.querySelector('.reading');
    var extraDiv = document.querySelector('.extraDiv');
    function handleResize() {
        if (window.innerWidth < 730) {
            if (readingDiv && extraDiv && !extraDiv.contains(readingDiv)) {
                extraDiv.appendChild(readingDiv);
            }
        } else {
            if (extraDiv.contains(readingDiv)) {
                extraDiv.removeChild(readingDiv);
            }
            if (!document.querySelector(".navbar .reading")) {
                var menuDiv = document.querySelector('.menu');
                menuDiv.insertAdjacentElement('afterend', readingDiv);
            }
        }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
});
