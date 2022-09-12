document.querySelector('#menu-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector('#top');
    if (target.classList.contains('active')) {
        target.classList.remove('active');
    } else {
        target.classList.add('active');
    }
});
