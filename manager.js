


  var passmap2 = new Map();

  document.getElementById('new-todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById('content').value;
    const pass = document.getElementById('content1').value;
    passmap2.set(user,pass)
    let listpass = "";
    for (const iter of passmap2.entries()) {
      listpass += iter + "\n";
     }
    alert(listpass);

  

  });
