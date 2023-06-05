function prof() {
    var isLog = sessionStorage.getItem('logged');
    var name = sessionStorage.getItem('name');
    var email = sessionStorage.getItem('email');

    if (isLog) {
        const id_name = document.getElementById("name");
        id_name.textContent = name;

        const id_email = document.getElementById("email");
        id_email.textContent = email;
    }
}
