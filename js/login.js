function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('password-toggle');
    const svgIcon = passwordToggle.querySelector('svg');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        svgIcon.innerHTML = '<path d="/photos/password-eye.jpg">';
    } else {
        passwordInput.type = 'password';
        svgIcon.innerHTML = '<path d="/photos/password-eye.jpg">';
    }
}



