const lista = document.getElementById("list");

function adicionaritem() {
    // criar um novo elemento de "li" (item de lista ) e o armazenar na variavel "novaLI"
    const novaLI = document.createElement("li");
    novaLI.innerText = "novo item da lista ";
    // define o textto do novo item ,este texto será exibindo no navegador como conteudo da "nova li "

    lista.appendChild(novaLI);
    // adicionar o novo item (novali) como p ultimo filho do elemento 'lista',isso faz com que o item seja exibido corretamente dentro da ul (lista ).
    // o appendchild acrescenta o elemento selecionado , o que for desclarando na sequencia entre parenteses (appendchild(novali)) .



}
function removeritem() {
    const ultimoitem = lista.lastElementChild;
    // selecionado o ultimo elemento filho dentro de "lista" e o armazena na variavel 'ultimoitem'
    // lastelementchild retorna o ultimo elemento diretamente contido em "lista" que é o ultimo item da lista 
    lista.removeChild(ultimoitem);
    // remove o ultimo item (ultimoitem) de dentro de  "lista"
    // removechild é um metodo que remove o elemento filho especificado.









}