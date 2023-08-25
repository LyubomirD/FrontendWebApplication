document.getElementById("signUpForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    const userData = {
        username: username,
        email: email,
        password: password
    };

    axios({
        method: "post",
        url: "http://localhost:5000/usersRegistration/post",
        data: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" }
    })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Sign up failed.');
            }
        })
        .then(data => {
            console.log('Sign up successful!', data);
            window.location.href = '../LoginPage/UserLoginPage.html';
        })
        .catch(error => {
            console.error('Error:', error);
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'User registration failed!';
        });
});
