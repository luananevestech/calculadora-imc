<script>

    function puloLinha() {
        document.write ("<br>");
        document.write ("<br>")
    }

    function mostra (frase) {
        document.write(frase)
        puloLinha();
    }

    function calculaImc(altura, peso) {


        var imc = peso / (altura * altura); 
        
        return peso / (altura * altura) 
    }

    var nome = prompt("Informe o seu nome")
    var alturaInformada = prompt(nome + ", informe sua altura");
    var pesoInformado = prompt(nome + ", informe seu peso");

    var imc = calculaImc(alturaInformada, pesoInformado);

    mostra(nome + " o seu IMC é " + imc);

    if(imc < 18.5) {

        mostra("Voce está abaixo do recomendado");
    }

    if(imc > 35) {
        mostra("Você está acima do recomendado");
    }

    if(imc >=18.5 && imc<= 35 ) {
        
            mostra("Seu IMC está excelente!");
        }
</script>
