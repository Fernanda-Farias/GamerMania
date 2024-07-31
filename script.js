function login() {

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === '' || senha === '') {
        document.getElementById('erro').innerText = 'Preencha os campos para efetuar o login';
        document.getElementById('erro').style.color = 'red';
        return;
    }

    if (usuario === 'Fernanda' && senha === '123') {
        alert('Login feito com sucesso!');
        window.location.href = 'index.html';
    } else {
        document.getElementById('erro').innerText = 'Usuário ou senha incorretos.';
        document.getElementById('erro').style.color = 'red';
    }
}