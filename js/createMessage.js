window.onload = function () {
    const contactBtn = document.getElementById('contact-btn');
    contactBtn.addEventListener('click', () => createMessage());
};

async function createMessage() {
    const fullname = document.getElementById('contact-name-input').value;
    const email = document.getElementById('contact-email-input').value;
    const msg = document.getElementById('contact-message-input').value;
    const response = await postApi('POST', 'contact', JSON.stringify({
        fullname,
        email,
        msg
    }));

    if (response && response._id) {
        alert('message created');
        window.location.href = `${FRONTEND_URL}index.html`;
    } else {
        alert('An error occured');
    }
}