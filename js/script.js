document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Exibir indicador de carregamento
    document.getElementById('loadingIndicator').style.display = 'block';
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const data = { username, password };
    
    // Enviar requisição para o servidor intermediário
    fetch('http://191.252.178.166:8080/auth', { // Modifique para o endereço do seu servidor intermediário
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      // Esconder indicador de carregamento
      document.getElementById('loadingIndicator').style.display = 'none';
      
      if (!response.ok) {
        throw new Error('Erro ao efetuar login');
      }
      return response.json();
    })
    .then(responseData => {
      // Exibir mensagem de sucesso
      document.getElementById('message').textContent = responseData.message;
      
      // Redirecionar para success.html após 2 segundos
      setTimeout(function() {
        window.location.href = 'success.html';
      }, 2000); // 2000 milissegundos = 2 segundos
    })
    .catch(error => {
      // Esconder indicador de carregamento em caso de erro
      document.getElementById('loadingIndicator').style.display = 'none';
      
      // Exibir mensagem de erro
      console.error('Erro:', error);
      document.getElementById('message').textContent = 'Erro ao tentar efetuar o login. Por favor, tente novamente mais tarde.';
    });
  });
  