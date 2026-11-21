const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const emagrecer = document.getElementById("emagrecer");
const aumento = document.getElementById("aumento");
const botao = document.getElementById("avaliar");
const resultado = document.getElementById("resultado");
botao.addEventListener ("click", function() {
    const nomeUsuario = nome.value;
    const idadeUsuario = Number(idade.value);
    const pesoUsuario = Number(peso.value);
    const alturaUsuario = Number(altura.value);
    
  
    if (nomeUsuario === "" || idadeUsuario === 0 || pesoUsuario === 0 || alturaUsuario === 0 ){
        resultado.textContent = "Preencha todos os campos!";
    }else {
        const imc = pesoUsuario / (alturaUsuario * alturaUsuario);
        resultado.textContent = ` Olá ${nomeUsuario} seu IMC é de ${imc.toFixed(2)}`;
        
          if (emagrecer.checked){
        resultado.textContent += 'Você escolheu emagrecer' ;   
    }else if (aumento.checked){
        resultado.textContent += 'você escolheu aumnetar o peso';
    }
    }
    resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    
});

