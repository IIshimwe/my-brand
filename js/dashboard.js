const token = localStorage.getItem('token');
if (!token) window.location.href = 'http://127.0.0.1:5500/signin.html';

window.onload = function () {
    const logoutButton = document.getElementById('log-out');

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'http://127.0.0.1:5500/index.html';
    });
};