function temperatura(){ 
    const num1= document.getElementById('num1').value;
    const a= (parseInt(num1) -32) * 5/9;
    const mensaje = "La temperatura calculada es " + a + "C"
    document.getElementById("resultado").value = mensaje; 
    alert(mensaje);
}