function solicitarMonto() {
    let monto = prompt("Ingrese el monto a transferir:");
    
    if (monto !== null && monto !== "") {
        let confirmacion = confirm("Monto a transferir $" + monto + "?");

        if (confirmacion) {
            alert("Transferencia realizada");
        } else {
            alert("Transferencia cancelada.");
        }
    }
}