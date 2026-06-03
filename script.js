// ==================== GOOGLE IDENTITY SYSTEM INTEGRATION ====================
window.onload = function () {
    // 1. Initialize Google Identity Services Client
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your real Google Client ID
        callback: handleCredentialResponse
    });
    
    // 2. Render Google Button within the Container Element
    google.accounts.id.renderButton(
        document.getElementById("googleBtnContainer"),
        { 
            theme: "outline", 
            size: "large", 
            shape: "pill", // Matches the rounded theme of your interface 
            width: 320 
        } 
    );
};

// Target Redirect Callback logic for Google login action
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    
    alert("Google verification successful!");
    
    // Smooth redirect logic straight to your portal homepage
    window.location.href = "dashboard.html"; // Change to your actual landing page filename
}


// ==================== PANEL INTERACTION CONTROLS ====================
const loginCard = document.getElementById('loginCard');
const signupCard = document.getElementById('signupCard');
const toRegister = document.getElementById('toRegister');
const toLogin = document.getElementById('toLogin');

toRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginCard.classList.add('hidden');
    signupCard.classList.remove('hidden');
});

toLogin.addEventListener('click', function(e) {
    e.preventDefault();
    signupCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
});


// ==================== PASSWORD REVEAL OVERLAY FUNCTIONS ====================
document.querySelectorAll('.toggle-eye').forEach(eye => {
    eye.addEventListener('click', function() {
        const targetInputId = this.getAttribute('data-target');
        const targetInput = document.getElementById(targetInputId);
        
        if (targetInput.type === "password") {
            targetInput.type = "text";
            this.style.opacity = "1";
        } else {
            targetInput.type = "password";
            this.style.opacity = "0.5";
        }
    });
});


// ==================== TRADITIONAL FORM SUBMISSIONS ====================
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('loginUsername').value;
    alert(`Welcome back, ${user}!`);
    window.location.href = "dashboard.html";
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const pass = document.getElementById('registerPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    
    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }
    alert("Account successfully created!");
    window.location.href = "dashboard.html";
  
});