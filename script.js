var i;
var indexExcluidos = [];
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
        var nomeAtividade = document.getElementById("span" + i);
        nomeAtividade.textContent = texto;
        nomeAtividade.style.textDecoration = "none";
        localStorage.setItem("stateCheck" + i, "false");
        localStorage.setItem("nomeAtividade" + i, texto);

        var divExcluir = document.createElement("div");
        divExcluir.classList.add("divExcluir");
        div.appendChild(divExcluir);
        var excluir = document.createElement("button");
        excluir.id = i;
        excluir.innerText = "X";
        excluir.onclick = function () {
            document.getElementById("atividade" + this.id).remove();
            indexExcluidos.push(this.id);
            localStorage.setItem("arrayExcluidos", JSON.stringify(indexExcluidos));
            var qtd = localStorage.getItem("qtdAtividades", i);
            localStorage.setItem("qtdAtividades", qtd - 1);
        };
        divExcluir.appendChild(excluir);

        checkBox.onclick = function () {
            var nomeAtividade = document.getElementById("span" + this.id);
            if (checkBox.checked) {
                nomeAtividade.style.textDecoration = "line-through";
                localStorage.setItem("stateCheck" + this.id, "true");
            } else {
                nomeAtividade.style.textDecoration = "none";
                localStorage.setItem("stateCheck" + this.id, "false");
            }
        };

        localStorage.setItem("qtdAtividades", i); 
        localStorage.setItem("arrayExcluidos", JSON.stringify(indexExcluidos));
        document.getElementById("editAtividade").value = "";
    } else {
        alert("Por favor, preencha o nome da tarefa! ");
    }
    document.getElementById("editAtividade").focus();
}












function getAtividades() {
    var qtdAtividades = localStorage.getItem("qtdAtividades");
    var arrayExcluidos = JSON.parse(localStorage.getItem("arrayExcluidos"));
    console.log(arrayExcluidos);
    for (var index = 1; index <= qtdAtividades; index++) {

        if (arrayExcluidos.length == 0) {
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
            divCheck.appendChild(checkBox);

            var divSpan = document.createElement("div");
            divSpan.classList.add("divSpan");
            div.appendChild(divSpan);
            var span = document.createElement("span");
            span.id = "span" + index;
            divSpan.appendChild(span);
            document.getElementById("span" + index).textContent =
                localStorage.getItem("nomeAtividade" + index);

            var stateOfThisCheck = localStorage.getItem("stateCheck" + index);
            var nomeAtividade = document.getElementById("span" + index);
            if (stateOfThisCheck == 'false') {
                checkBox.checked = false;
                nomeAtividade.style.textDecoration = "none";
            } else {
                checkBox.checked = true;
                nomeAtividade.style.textDecoration = "line-through";
            }

            var divExcluir = document.createElement("div");
            divExcluir.classList.add("divExcluir");
            div.appendChild(divExcluir);
            var excluir = document.createElement("button");
            excluir.id = index;
            excluir.innerText = "X";
            excluir.onclick = function () {
                document.getElementById("atividade" + this.id).remove();
                indexExcluidos.push(this.id);
                localStorage.setItem("arrayExcluidos", JSON.stringify(indexExcluidos));
                var qtd = localStorage.getItem("qtdAtividades", i);
                localStorage.setItem("qtdAtividades", qtd - 1);
            };
            divExcluir.appendChild(excluir);

            checkBox.onclick = function () {
                var nomeAtividade = document.getElementById("span" + this.id);
                if (checkBox.checked) {
                    nomeAtividade.style.textDecoration = "line-through";
                    localStorage.setItem("stateCheck" + this.id, "true");
                } else {
                    nomeAtividade.style.textDecoration = "none";
                    localStorage.setItem("stateCheck" + this.id, "false");
                }
            };

            document.getElementById("editAtividade").value = "";
        } else {

            for (var j = 1; j <= arrayExcluidos.length; j++) {
                if (index !== arrayExcluidos[j]) {
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
                    divCheck.appendChild(checkBox);

                    var divSpan = document.createElement("div");
                    divSpan.classList.add("divSpan");
                    div.appendChild(divSpan);
                    var span = document.createElement("span");
                    span.id = "span" + index;
                    divSpan.appendChild(span);
                    document.getElementById("span" + index).textContent =
                        localStorage.getItem("nomeAtividade" + index);

                    var stateOfThisCheck = localStorage.getItem("stateCheck" + index);
                    var nomeAtividade = document.getElementById("span" + index);
                    if (stateOfThisCheck == 'false') {
                        checkBox.checked = false;
                        nomeAtividade.style.textDecoration = "none";
                    } else {
                        checkBox.checked = true;
                        nomeAtividade.style.textDecoration = "line-through";
                    }

                    var divExcluir = document.createElement("div");
                    divExcluir.classList.add("divExcluir");
                    div.appendChild(divExcluir);
                    var excluir = document.createElement("button");
                    excluir.id = index;
                    excluir.innerText = "X";
                    excluir.onclick = function () {
                        document.getElementById("atividade" + this.id).remove();
                        indexExcluidos.push(this.id);
                        localStorage.setItem("arrayExcluidos", JSON.stringify(indexExcluidos));
                        var qtd = localStorage.getItem("qtdAtividades", i);
                        localStorage.setItem("qtdAtividades", qtd - 1);
                    };
                    divExcluir.appendChild(excluir);

                    checkBox.onclick = function () {
                        var nomeAtividade = document.getElementById("span" + this.id);
                        if (checkBox.checked) {
                            nomeAtividade.style.textDecoration = "line-through";
                            localStorage.setItem("stateCheck" + this.id, "true");
                        } else {
                            nomeAtividade.style.textDecoration = "none";
                            localStorage.setItem("stateCheck" + this.id, "false");
                        }
                    };

                    document.getElementById("editAtividade").value = "";
                } else {
                    document.getElementById("atividade" + index).remove();
                    localStorage.removeItem("stateCheck" + index);
                }
            }
        }
    }
    i = qtdAtividades;
}