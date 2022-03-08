// Validation
function validasi() {
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');

    if (user == "kharin" && pass == "030705") {
        document.getElementById('form').reset();

        setTimeout(function () {
            window.location = "../cake/cake.html";
            return false;
        }, 1000);

    } else {
        document.getElementById('form').reset();
    }
}