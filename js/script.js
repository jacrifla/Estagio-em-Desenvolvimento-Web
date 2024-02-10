document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // URL da API
    const apiUrl = 'http://191.252.178.166:8080';

    const requestData = {
        username: username,
        password: password
    };

    // Criar uma nova solicitação
    const request = new XMLHttpRequest();

    // Configurar a solicitação POST para a URL da API
    request.open('POST', apiUrl, true); 

    // Configurar o cabeçalho Content-Type
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText);
            // Exibir mensagem retornada pela API
            alert(data.message);

            if (request.status === 200) {
                // Redirecionar para sucesso.html se o login for bem-sucedido
                window.location.href = 'sucesso.html'; 
            }
        } else {
            alert("Erro ao processar a solicitação. Por favor, tente novamente mais tarde.");
        }
    };

    request.onerror = function() {
        alert("Erro ao processar a solicitação. Por favor, tente novamente mais tarde.");
    };

    // Enviar dados do formulário para a API em formato JSON
    request.send(JSON.stringify(requestData)); 
});
