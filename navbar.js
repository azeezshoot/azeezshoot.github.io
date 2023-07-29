// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <!-- Add more links as needed -->
            </ul>
        </nav>
    `;

    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', navbar);
});
