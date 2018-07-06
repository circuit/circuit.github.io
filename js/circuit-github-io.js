function setCurrentLink()
{
    $('a[href="' + window.location.pathname + '"]').addClass('current');
}
$(document).ready(function() {
    setTimeout(setCurrentLink, 1000);
});
