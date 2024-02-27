function soma(){ 
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let total = 0;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    total = num1 + num2;

    return document.getElementById("total").innerHTML = "A soma é " + total + " !";
}