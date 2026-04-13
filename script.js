document.getElementById("doacao").addEventListener("submit", function (e){
e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;
    let tel = parseInt(document.getElementById("tel").value);
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    const verinome = nome.split(" ");
    if(verinome.length === 1){
        return alert("nome inválido");
    }
    const veridade = data.split("/");
    let p = 2025 - veridade[0];
    if(p < 16) return alert("você precisa ter pelo menos 16 anos");

    if(peso < 50) return alert("Você não está no peso ideal");

    if(isNaN (tel)) return alert("Numero de telefone inválido");

    document.getElementById("resultado").innerHTML = "Cadastro feito com sucesso, pronto para a doação";

});