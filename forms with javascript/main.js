function cadProduto() {
    confirm();
}

var i = 1;
var total = 0;
document.querySelector("#total").textContent = "Valor total dos produtos: R$ "+total;

function addItem(){
    var nome = document.forms[0].elements[0].value;
    var preco = document.forms[0].elements[1].value;
    var qtd = document.forms[0].elements[2].value;

    var valorQtd = eval(qtd * preco);
    total = eval(total + valorQtd);

    var item = document.createElement("th");
    var textoItem = document.createTextNode(i);
    item.appendChild(textoItem);
    document.querySelector("#lista").appendChild(item);

    var item = document.createElement("th");
    var textoItem = document.createTextNode(nome);
    item.appendChild(textoItem);
    document.querySelector("#lista").appendChild(item);

    var item = document.createElement("th");
    var textoItem = document.createTextNode(preco);
    item.appendChild(textoItem);
    document.querySelector("#lista").appendChild(item);

    var item = document.createElement("th");
    var textoItem = document.createTextNode(qtd);
    item.appendChild(textoItem);
    document.querySelector("#lista").appendChild(item);

    var item = document.createElement("th");
    var textoItem = document.createTextNode(valorQtd);
    item.appendChild(textoItem);
    document.querySelector("#lista").appendChild(item);

    var item = document.createElement("tr");
    document.querySelector("#lista").appendChild(item);

    document.querySelector("#total").textContent = "Valor total dos produtos: R$ "+total;
    i++;
}
var botao = document.querySelector("#BtAddProduto");
botao.onclick = addItem;
