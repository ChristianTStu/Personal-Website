document.addEventListener('DOMContentLoaded', function() {
    // Existing JavaScript code
    console.log("Website loaded!");
});

// Function to open the lightbox with project details
function openLightbox(title, description, githubLink) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('project-title').textContent = title;
    document.getElementById('project-description').textContent = description;
    document.getElementById('github-link').href = githubLink;
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
