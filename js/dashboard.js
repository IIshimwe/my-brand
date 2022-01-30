const token = localStorage.getItem('token');
if (!token) window.location.href = `${FRONTEND_URL}signin.html`;

// LOGOUT
window.onload = function () {
    const logoutButton = document.getElementById('log-out');

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = `${FRONTEND_URL}index.html`;
    });



    // BLOGS
    const dashboardBlog = document.querySelector(".dashboard-blog-wrapper");
    const url = `${BACKEND_URL}blogs`;
    let displayResults = '';

    function renderArticles(articles) {
        articles.forEach(article => {
            displayResults += `
            <article class="dashboard-blog">
                <section class="dashboard-blog__image">
                    <img src="images/profile.jpg" alt="Alticle picture">
                </section>
                <section class="dashboard-blog__content">
                    <section class="blog-header">
                        <h3>${article.title}</h3>
                        <div class="blog-header__icon">
                            <a href="editblog.html"  class="icon-link"><i class="far fa-edit"></i></a>
                            <a href="#" class="icon-link" onclick="handleDelete('${article._id}')"><i class="far fa-trash-alt"></i></a>
                        </div>
                    </section>
                    <p>${article.content}</p>
                    <hr>
                </section>
            </article>
        `;
        });
        dashboardBlog.innerHTML = displayResults;
    }

    fetch(url).then(res => res.json()).then(data => renderArticles(data));


};

async function handleDelete(id) {
    const response = await postApi('DELETE', `blogs/${id}`);
    if (response && response._id) {
        alert('Message deleted successfully');
        window.location.href = `${FRONTEND_URL}dashboard.html`;
    }
}