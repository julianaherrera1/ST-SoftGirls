document.querySelector('.linkMenu').addEventListener('click', function() {
    const navBarResponsive = document.getElementById('navBarResponsive');
    if (navBarResponsive.style.display === 'block') {
        navBarResponsive.style.display = 'none';
    } else {
        navBarResponsive.style.display = 'block';
    }
});
