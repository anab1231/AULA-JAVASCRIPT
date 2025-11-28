//function = utilizando por executar um bloco de codigo e acoes,determinada agintado literamente como uma "função " pré determinada 

let meuelemento = document.getElementById("meuelemento");
// aqui estamos criando uma variavel para recuperar o id da div desclarada no html 

function tornarcirculo(){
meuelemento.classList.add("circle");
meuelemento.classList.remove("square");
}
function tornarquadrado(){
meuelemento.classList.remove("circle");
}

function alterarformato(){
meuelemento.classList.toggle("circle");
meuelemento.classList.toggle("square");

// o toggle no javascript serve para alterar uma classe em um elemento 
// ele verificar automaticamente : se a classe existe ,ele remove .se não existe ,ele adicionar 
// ele funcionar como um interruptor : liga e desliga ou mostrar / esconde ,ativar / desativar ,tudo com uma unica linha de codigo 
}
function verificarclasse() { // verificando qual classe esta ativa e adicionando um text para identificação 
if(meuelemento.classList.contains("circle")){
    console.log("o elemento possui a classe circle");

}else{// o caso contrario sera quando a classe square esta ativar 

    console.log("o elemento possui a classe square");
    // verificar e faz a leitura no console
}
}

