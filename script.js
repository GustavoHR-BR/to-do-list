
var i = 0;
function criaAtividade() {

    if (document.getElementById("editAtividade").value !== "") {
        i++;
        var container = document.getElementById("container");
        var div = document.createElement("div");
        div.id = "nomeAtividade" + i;
        container.appendChild(div);
        
        var divCheck = document.createElement("div");
        divCheck.classList.add('divCheck');
        div.appendChild(divCheck);
        var checkBox = document.createElement("input");
        checkBox.id = "check" + i;
        checkBox.type = "checkbox";
        checkBox.name = "checkbox";
        divCheck.appendChild(checkBox);
        

        var divSpan = document.createElement("div");
        divSpan.classList.add("divSpan");
        div.appendChild(divSpan);
        var span = document.createElement("span");
        var input = document.querySelector("#editAtividade");
        var texto = input.value;
        span.id = "span" + i;
        divSpan.appendChild(span);
        document.getElementById("span" + i).textContent = texto;
        

        var divExcluir = document.createElement("div");
        divExcluir.classList.add("divExcluir");
        div.appendChild(divExcluir);
        var excluir = document.createElement("button");
        excluir.id = "excluir"  + i;
       // excluir.onclick = removeAtividade();
        excluir.innerText = "X";
        divExcluir.appendChild(excluir);

        document.getElementById("editAtividade").value = "";
    }else{
        alert('Por favor, preencha o nome da tarefa! ');
    }
    document.getElementById("editAtividade").focus();
}

function removeAtividade() {
    //remove child
    //dps remove elemento
}