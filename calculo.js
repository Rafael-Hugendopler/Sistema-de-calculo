const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const emagrecer = document.getElementById("emagrecer");
const aumento = document.getElementById("aumento");
const botao = document.getElementById("avaliar");
const msg = document.getElementById("aviso");
const resultado = document.getElementById("resultado");
nome.addEventListener("input", function() {
    resultado.innerHTML = "";
    resultado.style.backgroundColor = "transparent";
    msg.style.backgroundColor = "transparent";
    msg.innerHTML = "";
});
botao.addEventListener ("click", function() {
    const nomeUsuario = nome.value;
    const idadeUsuario = Number(idade.value);
    const pesoUsuario = Number(peso.value);
    const alturaUsuario = Number(altura.value);
    
  
    if (nomeUsuario === "" || idadeUsuario === 0 || pesoUsuario === 0 || alturaUsuario === 0 ){
        msg.innerHTML = "Preencha todos os campos!";
        msg.style.backgroundColor = "#FEE2E2";
        msg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Preencha todos os campos!';
    }else {
        msg.innerHTML = "";
        msg.style.backgroundColor = "transparent";

        const imc = pesoUsuario / (alturaUsuario * alturaUsuario);
        if (imc < 18) {
            resultado.innerHTML = `
            <div class="abaixo">
                <h2>Olá ${nomeUsuario}, seu IMC é de ${imc.toFixed(2)}</h2>
                <h3>Você está abaixo do peso</h3>
                <p>Seu IMC está abaixo da faixa considerada adequada. Procure orientação de um profissional de saúde para avaliar sua condição nutricional.</p>
                
            </div>
`}
else if ( imc < 25) {

                resultado.innerHTML = `
                 <div class="ideal">
                     <h2>Olá ${nomeUsuario}, seu IMC é de ${imc.toFixed(2)}</h2>
                     <h3>Você está no peso ideal</h3>
                     <p>Seu IMC está dentro da faixa considerada adequada. Continue mantendo hábitos saudáveis e uma alimentação equilibrada!</p>
                 </div>                                 
`}
else if (imc < 30){
                resultado.innerHTML =`
                <div class = "sobrepeso">
                    <h2>Olá ${nomeUsuario}, seu IMC é de ${imc.toFixed(2)}</h2>
                    <h3>Você está sobrepeso</h3>
                    <p>Seu IMC está acima da faixa considerada adequada. Vale a pena conversar com um profissional de saúde para avaliar seus hábitos e sua saúde.</p>
                </div>                                
`}
else{
    resultado.innerHTML = `
                    <div class = "obeso">
                        <h2>Olá ${nomeUsuario}, seu IMC é de ${imc.toFixed(2)}</h2>
                        <h3>Você está com obesidade</h3>
                        <p>Seu IMC está em uma faixa que merece avaliação profissional. Procure orientação de um profissional de saúde para uma análise mais completa.</p>
                    </div>
`}           
if (emagrecer.checked){
        resultado.innerHTML += ` <div class="emagrecer">Você escolheu reduzir seu peso. Busque hábitos alimentares equilibrados e atividades físicas adequadas à sua rotina, sempre respeitando sua saúde.</div>`;  
}
else if (aumento.checked){
        resultado.innerHTML += `<div class="aumento"> 
        Você escolheu aumentar seu peso. Uma alimentação equilibrada e orientação nutricional podem ajudar a alcançar esse objetivo de forma saudável.</div>`;
}}
    
    resultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    
});

