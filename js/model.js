function reg() {
    let name_s = document.getElementById("username").value;
    let email_s = document.getElementById("email").value;
    let pass_s = document.getElementById("password").value;

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    function isEmailExist(email) {
        return users.some((user) => user.email === email);
    }

    if (isEmailExist(email_s)) {
        alert("This email is already registered");
        return;
    }
    else {
        let newUser = {
            name: name_s,
            email: email_s,
            pass: pass_s,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("You have registered!");
    }
}

function log() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    function isEmailExist(email) {
        return users.some((user) => user.email === email);
    }

    if (isEmailExist(email)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (users[i].pass === pass) {
                    alert("Welcome!");
                    sessionStorage.setItem('logged', '1');
                    sessionStorage.setItem('name', users[i].name);
                    sessionStorage.setItem('email', users[i].email);
                }
                else {
                    alert("Invalid password");
                    break;
                }
            }
        }
    }
    else {
        alert("This email is not registered");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.calculator')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
    })
    var res_field = document.querySelector('.calc__result-field')

    var btn_num = document.querySelectorAll('.js--btn-add-res')
    var btn_reset = document.querySelectorAll('.js--btn-reset')
    var btn_calc = document.querySelector('.js--btn-calc')

    for (i = 0; i < btn_num.length; i++) {
        btn_num[i].addEventListener('click', function (e) {
            e.preventDefault()
            res_field.value += this.innerHTML;
        })
    }

    for (i = 0; i < btn_reset.length; i++) {
        btn_reset[i].addEventListener('click', function (e) {
            e.preventDefault()
            res_field.value = '0';
        })
    }

    btn_calc.addEventListener('click', function (e) {
        e.preventDefault()
        res_field.value = eval(res_field.value);
    })
})