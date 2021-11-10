
var i = 0;
function criaAtividade() {

    if (document.getElementById("atividade").value !== "") {
        i++;
        var div = document.createElement("div");
        div.id = "atividade " + i;
        document.body.appendChild(div);

        var checkBox = document.createElement("input");
        checkBox.id = "check " + i;
        checkBox.type = "checkbox";
        checkBox.name = "checkbox";
        div.appendChild(checkBox);

        var span = document.createElement("span");
        var input = document.querySelector("#atividade");
        var texto = input.value;
        span.id = "span " + i;
        div.appendChild(span);
        document.getElementById("span " + i).textContent = texto;

        var excluir = document.createElement("button");
        excluir.id = "removeAtividade";
        excluir.onclick = removeAtividade();
        div.appendChild(document.createElement("button"));

        document.getElementById("atividade").value = "";
    }else{
        alert('Por favor, preencha o nome da atividade! ');
        document.getElementById("atividade").focus();
    }
}

function removeAtividade() {

}