document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const userData = {
        email: email,
        password: password
    };

    axios({
        method: "get",
        url: "http://localhost:5000/usersRegistration/get",
        data: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => {
            console.log(response.statusText + " and " + response.status);
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
