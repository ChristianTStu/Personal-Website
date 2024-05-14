document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded!");
});

// Function to toggle the display of Zero Trust projects
function toggleZeroTrustProjects() {
    var details = document.getElementById('zeroTrustDetails');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Function to open the lightbox with project details
function openLightbox(title, description, githubLink) {
    if (title === 'Encrypted Communication and Traffic Detection') {
        // Specific content handling for "Encrypted Communication and Traffic Detection"
        document.getElementById('project-title').textContent = title;
        document.getElementById('project-description').innerHTML = `
        <strong>Repository:</strong> <a href="${githubLink}" target="_blank">GitHub - Encrypted Communication and Traffic Detection</a> <br>
        <strong>License:</strong> MIT License <br>
        <strong>Author:</strong> Christian Stuart <br>
        <strong>Year:</strong> 2023<br>
        <strong>Project Description:</strong>
        <p>This innovative project showcases the implementation of encrypted communication between a client and a server, along with the capability to detect encrypted traffic through network packet analysis. Developed in Python, the project comprises three main scripts, each serving a distinct yet integral role in the demonstration of secure communication and traffic analysis.</p>
        <!-- Further content -->
        `;
    } else {
        // Generic handling for other projects
        document.getElementById('project-title').textContent = title;
        document.getElementById('project-description').textContent = description;
    }
    document.getElementById('github-link').href = githubLink;
    document.getElementById('lightbox').style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Example of another event listener
const copyrightText = document.getElementById('copyright-text');
copyrightText.addEventListener('click', function() {
    window.location.href = '/html/login.html';
});
copyrightText.style.cursor = 'pointer';
copyrightText.style.textDecoration = 'none'; // Remove the underline
