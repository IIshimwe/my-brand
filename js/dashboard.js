const token = localStorage.getItem('token');
if (!token) window.location.href = `${FRONTEND_URL}signin.html`;
let displayResults = '';

// LOGOUT
window.onload = function () {
    const logoutButton = document.getElementById('log-out');
    const dashboardBlog = document.querySelector(".dashboard-blog-wrapper");

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = `${FRONTEND_URL}index.html`;
    });

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

    getApi(`blogs`).then(articles => renderArticles(articles));
};

async function handleDelete(id) {
    const response = await postApi('DELETE', `blogs/${id}`);
    if (response && response._id) {
        alert('Post deleted');
        window.location.href = `${FRONTEND_URL}dashboard.html`;
    }
}