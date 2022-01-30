const userMessageWrapper = document.querySelector(".v-msgs");
// const cf = document.querySelector('#contact__form');
const contactBtn = document.getElementById('contact-btn');
const fullnameInput = document.getElementById('contact-name-input');
const visitorEmailInput = document.getElementById('contact-email-input');
const visitorMessageInput = document.getElementById('contact-message-input');


// const url = 'https://atlp-capstone.herokuapp.com/contact';
const url = 'contact';
let displayMessages = '';

function renderMessages(messages) {
    messages.forEach(msg => {
        displayMessages +=
            `
            <details>
                <summary>${msg.fullname}</summary>
                <p>${msg.msg}</p>
                <div class="blog-header__icon">
                    <a href="mailto:${msg.email}" target="_blank" class="icon-link"><i
                        class="fas fa-reply"></i></a>
                    <a href="#" class="icon-link" onclick="handleDeleteMessage('${msg._id}')"><i class="far fa-trash-alt"></i></a>
                </div>
            </details>
        `;
    });
    userMessageWrapper.innerHTML = displayMessages;
}

// READ DATA
getApi(url).then(messages => renderMessages(messages));


async function handleDeleteMessage(id) {
    const response = await postApi('DELETE', `contact/${id}`);
    if (response && response._id) {
        alert('Message deleted successfully');
        window.location.href = `${FRONTEND_URL}dashboard.html`;
    }
}


// // CREATE NEW MESSAGE
// contactBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             fullname: fullnameInput.value,
//             email: visitorEmailInput.value,
//             msg: visitorMessageInput.value
//         })
//     }).then(async res => console.log(await res.json()))
//         .then(data => {
//             const dataArr = [];
//             dataArr.push(data);
//             renderMessages(dataArr);
//         });
// });



/**
 * 
 * btnLogin.addEventListener('click', async (e) => {
    isValidationOn = true;
    e.preventDefault();
    validateLoginInputs();

    const email = adminEmailInput.value;
    const password = adminPasswordInput.value;

    const response = await postApi('POST', 'auth', JSON.stringify({
        email,
        password
    }));

    console.log(response);

    if (response && !response.error) {
        const { token } = response;
        localStorage.setItem('token', token);
        window.location.href = '${FRONTEND_URL}dashboard.html';
        return;
    }

});
 */


