var numeroCaracteres = 0;
var formLogica = document.getElementById('form-password');

function generateRandomString(num) {
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-/*_=';
    var text = '';

    for (var i = 0; i < num; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

formLogica.onsubmit = function (e) {
    e.preventDefault();
    numeroCaracteres = document.getElementById('char').value;
    document.getElementById('passwordGenerada').innerHTML =
        generateRandomString(numeroCaracteres);
};
