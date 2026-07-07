const modal = document.querySelector('.modal');
const admin = document.getElementById('admin');
const PAROL = '12345';
const input = document.getElementById('input');
const button = document.getElementById('button');

admin.addEventListener('click', function () {
    modal.classList.add('open');
});

button.addEventListener('click', function () {
    const value = input.value;
    if (value === PAROL) {
        window.open("admin.html", "_blank");
        modal.classList.remove("open");
        // window.location.href = "admin.html";
        // или window.open("success.html", "_self");
    } else {
        alert("Неправильный пароль!");
    }
    input.value = '';
});