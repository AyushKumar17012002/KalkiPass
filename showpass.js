document.getElementById('post').addEventListener('submit', (event) => {
    event.preventDefault();
    var masterpass = document.getElementById('pwd').value;
    var valid1 = PassList.includes(masterpass);
    if(valid1) {
        alert(listpass1);
    }
    else {
        alert('Invalid username or password.');
    }


});