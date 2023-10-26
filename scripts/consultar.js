function consultar() {
    // Obtener el valor de DNI o dominio ingresado por el usuario
    const consultaValue = document.getElementById("dni").value || document.getElementById("dominio").value;

    // Realizar la consulta en los datos
    const resultado = datos.find(item => item.DNI === consultaValue || item.Dominio === consultaValue);

    // Redirigir según el resultado
    if (resultado) {
        window.location.href = "resultadoPos.html";
    } else {
        window.location.href = "resultadoNeg.html";
    }
}
