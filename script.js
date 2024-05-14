document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded!");
});

// Function to open the lightbox with project details
function openLightbox(title, description, githubLink) {
  if (title === "Encrypted Communication and Traffic Detection") {
    // Specific content handling for "Encrypted Communication and Traffic Detection"
    document.getElementById("project-title").textContent = title;
    document.getElementById("project-description").innerHTML = `
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
    document.getElementById("project-title").textContent = title;
    document.getElementById("project-description").textContent = description;
  }
  document.getElementById("github-link").href = githubLink;
  document.getElementById("lightbox").style.display = "block";
}

// Function to close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function openZeroTrustList() {
  var content = `
        <ul>
            <li><a href="https://github.com/ChristianTStu/WireGuard-Zero-Trust-Architecture-Exercise">WireGuard Exercise</a></li>
            <li><a href="https://github.com/ChristianTStu/ZeroTier-Exercise">ZeroTier Exercise</a></li>
            <li><a href="https://github.com/ChristianTStu/Cloudflare-Migration-Exercise">Cloudflare Migration Exercise</a></li>
            <li><a href="https://github.com/ChristianTStu/Cloudflare-Service-to-Service-Access-Exercise">Cloudflare Service to Service Access Exercise</a></li>
            <li><a href="https://github.com/ChristianTStu/ThreatLocker-Exercise">ThreatLocker Exercise</a></li>
            <li><a href="https://github.com/ChristianTStu/BitWarden-SSH-Secret-Handling-Exercise">BitWarden & SSH Secret Handling Exercise</a></li>
        </ul>
    `;
  document.getElementById("project-title").textContent =
    "Zero Trust Defense & Architecture Projects";
  document.getElementById("project-description").innerHTML = content;
  document.getElementById("github-link").style.display = "none"; // Hide the GitHub link as it's not relevant here
  document.getElementById("lightbox").style.display = "block";
}

// Update existing openLightbox function to handle general cases
function openLightbox(title, description, githubLink) {
  document.getElementById("project-title").textContent = title;
  document.getElementById("project-description").textContent = description;
  document.getElementById("github-link").href = githubLink;
  document.getElementById("github-link").style.display = "inline"; // Ensure the GitHub link is visible for other projects
  document.getElementById("lightbox").style.display = "block";
}

// Function to close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded!");
});

// Example of another event listener
const copyrightText = document.getElementById("copyright-text");
copyrightText.addEventListener("click", function () {
  window.location.href = "/html/login.html";
});
copyrightText.style.cursor = "pointer";
copyrightText.style.textDecoration = "none"; // Remove the underline
