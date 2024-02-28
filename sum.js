function soma() { 
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

        total = num1 + num2;
        
        document.getElementById("total").innerHTML = "A soma é " + total + " !";
    }
}
