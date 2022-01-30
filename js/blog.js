const wholeBlog = document.querySelector(".whole-blog");
const otherBlogs = document.querySelector(".other-blogs");

// const url = 'https://atlp-capstone.herokuapp.com/contact';
let url;
let displayResults = '';
// let output = '';

function renderArticles(articles) {
    articles.forEach(article => {
        displayResults += `
            <div>
                <h1>${article.title}</h1>
                <img src="/images/profile.jpg" alt="">
                <p>${article.content}</p>
                <h3>Other Articles</h3>
            </div>
        `;
        url = `http://localhost:9000/blogs/${article._id}`;
    });
    wholeBlog.innerHTML = displayResults;
}
console.log(url);
// READ BLOG
fetch(url).then(res => res.json()).then(data => renderArticles(data));

// function renderData(articles) {
//     articles.forEach(article => {
//         output += `
//         <div class="blog-post-card-wrapper">
//             <div class="blog__header">
//                 <h1>${article.title}</h1>
//                 <p>${article.content}</p>
//                 <div><a href="http://localhost:5500/blogs/${article._id}" class="link-arrow">Read more</a></div>
//             </div>
//             <div class="blog__image">
//                 <img src="/images/profile.jpg" alt="">
//             </div>
//         </div>
//         `;
//     });
//     otherBlogs.innerHTML = output;
// }

// READ RECENT BLOGS
// fetch(url).then(res => res.json()).then(data => renderData(data));
