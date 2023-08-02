// Helper function to generate a random 16-byte string token
function generateToken() {
    return [...Array(16)].map(() => (Math.random() * 36 | 0).toString(36)).join('');
  }
  
  // Sign Up
  function signUp(email, password, name) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return false; // User already exists with the provided email
    }
  
    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true; // Successfully signed up
  }
  
  // Login
  function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.email === email && user.password === password);
    if (!currentUser) {
      return false; // Incorrect email or password
    }
  
    // Generate token for the current user
    currentUser.token = generateToken();
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return true; // Successfully logged in
  }
  
  // Handle Login Form Submission
  const loginForm = document.getElementById('loginForm');
  const loginEmailInput = document.getElementById('loginEmail');
  const loginPasswordInput = document.getElementById('loginPassword');
  const loginError = document.getElementById('loginError');
  
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    const loggedIn = login(email, password);
  
    if (loggedIn) {
      window.location.href = 'profile.html';
    } else {
      loginError.textContent = 'Incorrect email or password';
      loginError.style.display = 'block';
    }
  });
  
  // Profile Page (profile.html)
  // Create a new HTML file named 'profile.html' and implement the profile page with user information display and editing.
  // Use local storage to fetch the current user information and populate the profile page.
  // Implement the logic to allow editing of user information and save the changes in local storage.
  
  