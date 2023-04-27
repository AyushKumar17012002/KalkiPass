
const UserList = ['kalki1', 'kalki2'];
  const PassList = ['pass1', 'pass2'];
  
  // Validate username and password
  function validateLogin(username, password) {
    const ValidUser = UserList.includes(username);
    const ValidPass = PassList.includes(password);
    return ValidUser && ValidPass;
  }
  
  // Login event listener
  document.getElementById('login-now').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    if (validateLogin(user, pass)) {
      window.location.replace("PassManager.html");
    } else {
      alert('Invalid username or password.');
    }
  });
