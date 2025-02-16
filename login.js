document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve saved credentials
    let savedUsername = localStorage.getItem("savedUsername");
    let savedPassword = localStorage.getItem("savedPassword");

    if (username === savedUsername && password === savedPassword) {
        document.getElementById("popup").style.display = "block";
        setTimeout(() => { window.location.href = "index.html"; }, 2000);
    } else {
        alert("❌ Invalid username or password! Try again.");
    }
});