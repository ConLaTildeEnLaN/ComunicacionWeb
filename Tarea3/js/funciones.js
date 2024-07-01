document.getElementById("btn_up").style.display = "none";

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("btn_up").style.display = "block";
    } else {
        document.getElementById("btn_up").style.display = "none";
    }
}

function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}