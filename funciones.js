function mostrarMensaje() {
    alert('Mi amor, te amo con todo mi corazón❤️');
    alert('Eres la mujer que estaba esperando y con la que quiero estar el resto de mi vida😍🥰❤️');

    // Redirigir a otro archivo HTML en el proyecto
    // window.location.href = "fotitos.html";  

    const mensaje = "Hola mi amor, si llegasta hasta aquí significa que te quedarás conmigo por siempre wajajaja🤗😍. Presiona enviar para continuar😘.";
    const numeroWhatsApp = "+50248439450";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}