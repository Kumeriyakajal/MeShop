// Fetch current user information from local storage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Populate the profile page with user information
document.getElementById('nameField').value = currentUser.name;
document.getElementById('passwordField').value = currentUser.passwor;
document.getElementById('tokenField').textContent = currentUser.token;

// Handle profile information editing
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');

editButton.addEventListener('click', function () {
  nameField.removeAttribute('readonly');
  emailField.removeAttribute('readonly');
  saveButton.style.display = 'block';
});

saveButton.addEventListener('click', function () {
  const newName = nameField.value;
  const newEmail = passwordField.value;

  // Update the current user information in local storage
  currentUser.name = newName;
  currentUser.email = newEmail;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  // Show a success message or any other action after saving changes
  // For example: alert('Changes saved successfully.');

  // Disable editing mode and hide the save button
  nameField.setAttribute('readonly', true);
  emailField.setAttribute('readonly', true);
  saveButton.style.display = 'none';
});
