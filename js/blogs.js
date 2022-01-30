const blogWrapper = document.querySelector(".blog-container");
const otherBlogs = document.querySelector(".recent-article");

// const url = 'https://atlp-capstone.herokuapp.com/contact';
const url = 'http://localhost:9000/blogs';
let displayResults = '';
let output = '';

function renderArticles(articles) {
    articles.forEach(article => {
        displayResults += `
        <div class="blog-post-card-wrapper">
            <div class="blog__header">
                <h1>${article.title}</h1>
                <p>${article.content}</p>
                <div><a href="http://localhost:9000/blogs/${article._id}" class="link-arrow">Read more</a></div>
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
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: '',
//         author: '',
//         content: ''
//     })
// }).then(re => { return res.json(); }).catch(err => console.log(err));