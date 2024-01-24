document.addEventListener('DOMContentLoaded', function() {
    // Existing JavaScript code
    console.log("Website loaded!");
});

// Function to open the lightbox with project details
function openLightbox(title, description, githubLink) {
    if (title === 'Encrypted Communication and Traffic Detection') {
        // Specific content for "Encrypted Communication and Traffic Detection"
        document.getElementById('project-title').textContent = 'Encrypted Communication and Traffic Detection';
        document.getElementById('project-description').innerHTML = `
        <strong>Project Description:</strong>
        <p>This innovative project showcases the implementation of encrypted communication between a client and a server, along with the capability to detect encrypted traffic through network packet analysis. Developed in Python, the project comprises three main scripts, each serving a distinct yet integral role in the demonstration of secure communication and traffic analysis.</p>
        <strong>Key Components:</strong>
        <ul>
            <li><strong>EncryptedChannelServerV2.py:</strong> This server-side script is designed to listen for incoming encrypted messages. Upon receipt, it decrypts and displays these messages, acting as the receiving end of the secure communication channel.</li>
            <li><strong>EncryptedChannelClientV2.py:</strong> As the client component, this script is responsible for sending encrypted messages to the server. It showcases how data can be securely transmitted over a network.</li>
            <li><strong>DetectEncryptedTrafficV2.py:</strong> This script is a critical tool for network analysts, as it analyzes network traffic to identify potentially encrypted data packets. This functionality is crucial for understanding and monitoring secure communications within a network.</li>
        </ul>
        <strong>Technical Requirements:</strong>
        <p>Python 3.x, Libraries: cryptography, socket, scapy, pandas, scipy</p>
        <strong>Installation and Operation:</strong>
        <p>The project is user-friendly, requiring only Python 3.x and the necessary libraries, which can be installed via pip. Running the server and client scripts initiates a secure communication channel, while the traffic detection script analyzes network traffic captured during this communication, identifying encrypted data packets.</p>
        <strong>Project Highlights:</strong>
        <ul>
            <li>Demonstrates real-time encrypted communication between a client and server.</li>
            <li>Employs advanced Python libraries for encryption and network packet analysis.</li>
            <li>Offers practical insights into detecting encrypted traffic in network security.</li>
        </ul>
        <strong>Usage Notes:</strong>
        <p>The encryption key is hardcoded for demonstration purposes. Users are advised to implement secure key management practices in real-world applications. The scripts are pre-configured for localhost testing but can be adapted for different network environments. The traffic detection script requires adjustment to the file path based on the user's environment.</p>
        <strong>Repository:</strong> <a href="${githubLink}" target="_blank">GitHub - Encrypted Communication and Traffic Detection</a>
        <strong>License:</strong> MIT License
        <strong>Author:</strong> Christian Stuart
        <strong>Year:</strong> 2023
        <p>This project is ideal for those interested in network security, encrypted communications, and Python programming. It offers a hands-on approach to understanding and implementing secure communication protocols and network traffic analysis.</p>
        `;
        document.getElementById('github-link').href = githubLink;
    } else {
        // Generic handling for other projects
        document.getElementById('project-title').textContent = title;
        document.getElementById('project-description').textContent = description;
        document.getElementById('github-link').href = githubLink;
    }
    document.getElementById('lightbox').style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

