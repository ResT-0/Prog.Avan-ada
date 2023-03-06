$(document).ready(function(){
    $('#Enviar').click(function(){
        var nome = $("input[name='nome']").val();
        var login = $("input[name='login']").val();
        var senha = $("input[name='senha']").val();
        if($("#nome").val() == "" || $("#Login").val() == "" || $("#senha").val() == ""){
            alert("Preencha os campos Nome, Login e Senha");
            return;
        }
        if($("input[name='salario']:checked").val() == undefined){
            alert("Selecione uma opção de salário");
            return;
        }
        if($("input[name='linguagem']:checked").val() == undefined){
            alert("Selecione uma opção de linguagem");
            return;
        }
        if($("#Foto").val() == ""){
            alert("Preencha o campo foto");
            return;
        }

        var formData = {
        nome: nome,
        login: login,
        senha: senha,
        moeda: $("input[name='salario']:checked").val(),
        ling: $("input[name='linguagem']:checked").map(function() {
            return $(this).val();
        }).get(),
        assuntos: $("select[name='assuntos']").val(),
        comentarios: $("textarea[name='comentarios']").val()
        };
        $.ajax({
        url: "arquivo.php", //nome aleátorio para o arquivo
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json",
        success: function(data) {
            alert("Dados enviados com sucesso!");
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Erro ao enviar os dados: " + errorThrown);
        }
        });
    })
    $("#Limpar").click(function(){
        $("#nome").val("");
        $("#Login").val("");
        $("#senha").val("");
        $("input[name='salario']").prop("checked", false);
        $("input[name='linguagem']").prop("checked", false);
        $("select[name='assuntos']").val("");
        $("textarea[name='comentario']").val("");
        $("#Foto").val(""); 
        alert("Dados limpos com sucesso!")
    });
});