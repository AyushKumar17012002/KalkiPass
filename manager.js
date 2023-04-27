


  var passmap4 = new Map();
  document.getElementById('new-todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById('content').value;
    const pass = document.getElementById('content1').value;
    passmap5.set(user,pass)
    
    for (var iterA of passmap5.entries()) {
      listpass2 += iterA + "\n";
     }
    alert(listpass2);

  

  });
