document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (username && password) {
        // Save username and password in local storage
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);

        // Show pop-up
        document.getElementById("popup").style.display = "block";

        // Redirect after 2 seconds
        setTimeout(() => { window.location.href = "login.html"; }, 2000);
    } else {
        alert("Please fill all fields!");
    }
});