// navbar handeling
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



//  events section
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


document.getElementsByClassName("btn")[0].addEventListener("click", function() {
    const here = document.getElementById("here");
    here.scrollIntoView({ behavior: "smooth" });
});