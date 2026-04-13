document.getElementById("doacao").addEventListener("submit", function (e){
e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;
    let tel = document.getElementById("tel").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    const verinome = nome.split(" ");
    if(verinome.length === 1){
        return alert("nome inválido");
    }

    document.getElementById("resultado").innerHTML = "alguma coisa depois eu faço!";

});