$(document).ready(function() {
    $('#arrow').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});
