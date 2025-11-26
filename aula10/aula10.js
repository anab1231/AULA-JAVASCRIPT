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
}