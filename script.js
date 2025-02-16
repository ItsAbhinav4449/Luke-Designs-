document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
            function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // Redirect to login page
}

// Check if user is logged in
if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html"; // Force login if not logged in
}
        });
    });
});

