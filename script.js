document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('darkmode-toggle');
    let darkMode = false;

    darkModeButton.addEventListener('click', function() {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.add('darkmode-active');
            darkModeButton.textContent = 'Lightmode'; 
        } else {
            document.body.classList.remove('darkmode-active');
            darkModeButton.textContent = 'Darkmode';
        }
    });
});
