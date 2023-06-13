var dadosFormulario = [];

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o traço
    return cpf;
  }
    
    function validarFormulario() {
      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;
      var telefone = document.getElementById('telefone').value;
      var cpf = document.getElementById('cpf').value;
      var mensagem = document.getElementById('mensagem').value;

      // Validando os campos (verificando se estão preenchidos)
      if (nome === '' || email === '' || telefone === '' || cpf === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
      }

       // Validando os últimos dígitos do CPF
       var cpfDigits = cpf.replace(/\D/g, '');
       var cpfValid = validarCPF(cpfDigits);
       if (!cpfValid) {
         alert('CPF inválido. Por favor, verifique o número digitado.');
         return false;
       }

       
        // Armazenando os dados do formulário em uma variável
         dadosFormulario.push ({
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            mensagem: mensagem
         });
    
          alert('Formulário enviado com sucesso!\nQuantidade de itens salvos: ' + dadosFormulario.length);

          // Restante do código de validação do formulário...
          
          return true;
        }

    // Função para validar CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
  
        if (cpf.length !== 11 ||
            cpf === '00000000000' ||
            cpf === '11111111111' ||
            cpf === '22222222222' ||
            cpf === '33333333333' ||
            cpf === '44444444444' ||
            cpf === '55555555555' ||
            cpf === '66666666666' ||
            cpf === '77777777777' ||
            cpf === '88888888888' ||
            cpf === '99999999999') {
          return false;
        }
        var sum = 0;
        var remainder;
        for (var i = 1; i <= 9; i++) {
          sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
  
        remainder = (sum * 10) % 11;
  
        if ((remainder === 10) || (remainder === 11)) {
          remainder = 0;
        }
  
        if (remainder !== parseInt(cpf.substring(9, 10))) {
          return false;
        }
  
        sum = 0;
        for (i = 1; i <= 10; i++) {
          sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
  
        remainder = (sum * 10) % 11;
  
        if ((remainder === 10) || (remainder === 11)) {
          remainder = 0;
        }
  
        if (remainder !== parseInt(cpf.substring(10, 11))) {
          return false;
        }
  
        return true;
      }  