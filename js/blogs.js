
const blogWrapper = document.querySelector(".blog-container");
const otherBlogs = document.querySelector(".recent-article");
window.onload = function () {
    const postBlogBtn = document.getElementById('post-blog-button');
    postBlogBtn.addEventListener('click', () => createBlog());

};

// const url = 'https://atlp-capstone.herokuapp.com/contact';
const url = `${BACKEND_URL}blogs`;
let displayResults = '';
let output = '';

function renderArticles(articles) {
    articles.forEach(article => {
        displayResults += `
        <div class="blog-post-card-wrapper">
            <div class="blog__header">
                <h1>${article.title}</h1>
                <p>${article.content}</p>
                <div><a href="${BACKEND_URL}blogs/${article._id}" class="link-arrow">Read more</a></div>
            </div>
            <div class="blog__image">
                <img src="/images/profile.jpg" alt="">
            </div>
        </div>
        `;
    });
    blogWrapper.innerHTML = displayResults;
}

function renderData(articles) {
    articles.forEach(article => {
        output += `
        <ul class="list list--tick">
            <li class="list__item"><a href="#">${article.title}</a></li>
        </ul>
        `;
    });
    otherBlogs.innerHTML = output;
}

// READ BLOGS
fetch(url).then(res => res.json()).then(data => renderArticles(data));
// READ RECENT BLOGS
fetch(url).then(res => res.json()).then(data => renderData(data));

// POST A BLOG
async function createBlog() {
    const title = document.getElementById('article-title').value;
    const author = document.getElementById('article-author').value;
    const body = document.getElementById('article-body').value;
    const response = await postApi('POST', 'blogs', JSON.stringify({
        title,
        author,
        content: body
    }));

    if (response && response._id) {
        alert('post created');
        window.location.href = `${FRONTEND_URL}dashboard.html`;
    } else {
        alert('An error occured');
    }
}