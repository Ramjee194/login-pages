function toggleForm() {
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');
    
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

// Initially hide the signup form
document.getElementById('signup').classList.add('hidden');
