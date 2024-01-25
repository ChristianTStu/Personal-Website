// JavaScript for handling blog post submission

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the submit button
    document.getElementById('submit-post').addEventListener('click', function () {
        const blogContent = document.getElementById('blog-content').value;

        if (blogContent.trim() !== '') {
            const latestPostsSection = document.getElementById('latest');

            // Create a new article element for the blog post
            const article = document.createElement('article');

            // Create h3 for the title (you can customize this)
            const title = document.createElement('h3');
            title.textContent = 'New Blog Post';

            // Create p for the date (you can customize this)
            const date = document.createElement('p');
            date.classList.add('date');
            const currentDate = new Date().toLocaleDateString();
            date.textContent = `Posted on ${currentDate}`;

            // Create p for the blog content
            const content = document.createElement('p');
            content.textContent = blogContent;

            // Append title, date, and content to the article
            article.appendChild(title);
            article.appendChild(date);
            article.appendChild(content);

            // Append the article to the latestPostsSection
            latestPostsSection.appendChild(article);

            // Clear the textarea
            document.getElementById('blog-content').value = '';
        }
    });
});

// Check if the secret token exists in local storage (indicating you're logged in)
const isLoggedIn = localStorage.getItem('adminLoggedIn');

if (isLoggedIn) {
    // Show the hidden control
    document.getElementById('showNewBlogSection').style.display = 'block';

    // Handle click event to reveal the "New blog post" section
    document.getElementById('showNewBlogSection').addEventListener('click', function () {
        // Show the "New blog post" section
        document.getElementById('new-blog-section').style.display = 'block';
    });
}