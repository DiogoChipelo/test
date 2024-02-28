function calcular(operacao) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let total = 0;

    if (num1 === "" && num2 === "") {

        alert("Faltam ambos os valores!");

    } else if (num1 === "") {

        alert("Falta o primeiro valor!");

    } else if (num2 === "") {

        alert("Falta o segundo valor!");

    } else {
        
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operacao) {
            case 'soma':
                total = num1 + num2;
                document.getElementById("total").innerHTML = "A soma é " + total + " !";
                break;
            case 'divisao':
                total = num1 / num2;
                if (total % 1 === 0) {
                    total = total.toFixed(0);
                } else {
                    total = total.toFixed(2);
                    total = parseFloat(total);
                }
                document.getElementById("total").innerHTML = "A divisão é " + total + " !";
                break;
            case 'multiplicacao':
                total = num1 * num2;
                document.getElementById("total").innerHTML = "A multiplicação é " + total + " !";
                break;
            case 'subtracao':
                total = num1 - num2;
                document.getElementById("total").innerHTML = "A subtração é " + total + " !";
                break;
            default:
                alert("Operação inválida!");
        }
    }
}
