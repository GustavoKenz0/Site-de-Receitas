document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var users = JSON.parse(localStorage.getItem("users")) || []; 
    
    var loggedIn = false;
    
    users.forEach(function(user) {
        if (user.username === username && user.password === password) {
            loggedIn = true;
        }
    });
    
    if (loggedIn) {
        document.getElementById("loginMessage").textContent = "Login realizado com sucesso!";
        setTimeout(function() {
            window.location.href = "/Pagina Principal/index.html";
        }, 1000);
    } else {
        document.getElementById("loginMessage").textContent = "Credenciais inválidas. Por favor, verifique seu usuário e senha.";
    }
});