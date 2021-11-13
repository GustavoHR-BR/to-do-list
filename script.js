var i;
if ((i = null)) {
    i = 0;
}

function criaAtividade() {
    if (document.getElementById("editAtividade").value !== "") {
        i++;
        var container = document.getElementById("container");
        var div = document.createElement("div");
        div.id = "atividade" + i;
        container.appendChild(div);

        var divCheck = document.createElement("div");
        divCheck.classList.add("divCheck");
        div.appendChild(divCheck);
        var checkBox = document.createElement("input");
        checkBox.id = i;
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

        localStorage.setItem("nomeAtividade" + i, texto);

        var divExcluir = document.createElement("div");
        divExcluir.classList.add("divExcluir");
        div.appendChild(divExcluir);
        var excluir = document.createElement("button");
        excluir.id = i;
        excluir.innerText = "X";
        excluir.onclick = function () {
            document.getElementById("atividade" + this.id).remove();
        };
        divExcluir.appendChild(excluir);

        checkBox.onclick = function () {
            var nomeAtividade = document.getElementById("span" + this.id);
            if (checkBox.checked) {
                nomeAtividade.style.textDecoration = "line-through";
            } else {
                nomeAtividade.style.textDecoration = "none";
            }
        };

        localStorage.setItem("qtdAtividades", i);
        localStorage.setItem("indexExcluidos", JSON.stringify(indexExcluidos));
        document.getElementById("editAtividade").value = "";
    } else {
        alert("Por favor, preencha o nome da tarefa! ");
    }
    document.getElementById("editAtividade").focus();
}

function getAtividades() {
    var qtdAtividades = localStorage.getItem("qtdAtividades");
    for (var index = 1; index <= qtdAtividades; index++) {
        var container = document.getElementById("container");
        var div = document.createElement("div");
        div.id = "atividade" + index;
        container.appendChild(div);

        var divCheck = document.createElement("div");
        divCheck.classList.add("divCheck");
        div.appendChild(divCheck);
        var checkBox = document.createElement("input");
        checkBox.id = index;
        checkBox.type = "checkbox";
        checkBox.name = "checkbox";
        divCheck.appendChild(checkBox);

        var divSpan = document.createElement("div");
        divSpan.classList.add("divSpan");
        div.appendChild(divSpan);
        var span = document.createElement("span");
        span.id = "span" + index;
        divSpan.appendChild(span);
        document.getElementById("span" + index).textContent =
            localStorage.getItem("nomeAtividade" + index);

        var divExcluir = document.createElement("div");
        divExcluir.classList.add("divExcluir");
        div.appendChild(divExcluir);
        var excluir = document.createElement("button");
        excluir.id = index;
        excluir.innerText = "X";
        excluir.onclick = function () {
            document.getElementById("atividade" + this.id).remove();
        };
        divExcluir.appendChild(excluir);

        checkBox.onclick = function () {
            var nomeAtividade = document.getElementById("span" + this.id);
            if (checkBox.checked) {
                nomeAtividade.style.textDecoration = "line-through";
            } else {
                nomeAtividade.style.textDecoration = "none";
            }
        };

        document.getElementById("editAtividade").value = "";
        localStorage.setItem("indexExcluidos", JSON.stringify(indexExcluidos));
    }
    i = qtdAtividades;
}
