// Now for login I use Basic Auth and not a JSON payload
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const credentials = btoa(email + ':' + password); // Base64 encode username:password

    axios({
        method: "get",
        url: "http://localhost:5000/usersRegistration/login",
        headers: {
            "Authorization": "Basic " + credentials
        }
    })
        .then(response => {
            console.log(response.statusText + " and " + response.status);
            if (response.ok) {
                console.log('Login successful!');
                window.location.href = '..FrontendWebApplication/FrontEnd/nextPage.html';
            } else {
                throw new Error('Login failed. Invalid credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Invalid email or password!';
        });
});
