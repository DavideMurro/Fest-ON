
function toggleNavbar() {
    document.getElementById('navbar').classList.toggle('close')
}

window.onscroll = function() {
    // When the user scrolls down, hide the button
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('gotop-button').classList.add('shown')
    } else {
        document.getElementById('gotop-button').classList.remove('shown')
    }
};