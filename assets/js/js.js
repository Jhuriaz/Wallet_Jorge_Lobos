document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("psw").value;

  // Check if username and password match
  if (username === "admin" && password === "password") {
      // If matched, redirect to dashboard or any other page
      window.location.href = "/pages/index.html";
  } else {
      // If not matched, display error message
      document.getElementById("message").innerText = "Invalid username or password";
  }
});