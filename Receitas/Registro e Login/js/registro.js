document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var users = JSON.parse(localStorage.getItem("users")) || []; 
    
    var userExists = users.some(function(user) {
        return user.username === username;
    });
    
    if (userExists) {
        document.getElementById("registrationMessage").textContent = "Este usuário já está registrado. Por favor, escolha outro nome de usuário.";
    } else {
        users.push({ username: username, password: password });
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("registrationMessage").textContent = "Registro realizado com sucesso!";
        
        
        setTimeout(function() {
            window.location.href = "/Registro e Login/Login.html";
        }, 1000);
    }
});