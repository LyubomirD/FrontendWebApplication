document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    fetch(`http://localhost:5000/usersRegistration/get/${encodeURIComponent(email)}/${encodeURIComponent(password)}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed. Invalid credentials.');
            }
        })
        .then(data => {
            console.log('Login successful!', data);
            window.location.href = '..FrontendWebApplication/FrontEnd/nextPage.html';
        })
        .catch(error => {
            console.error('Error:', error);
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Invalid email or password!';
        });
});
