alert("Seja bem-vindo!");
    
    let nome = prompt("Qual seu nome?");
    
    if (nome === null) {
      alert("Você não informou seu nome. Fim do programa.");
    } else {
      alert(`Olá, ${nome}! Seja bem-vindo(a) ao nosso site!`);
      document.getElementById('mensagem').textContent = `Olá, ${nome}! Seja bem-vindo(a) ao nosso site!`;
    }
    
    