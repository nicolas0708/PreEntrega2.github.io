// Función para mostrar un mensaje al usuario en la consola
function mostrarMensaje(pelicula, precio, formaPago) {
    console.log(`Has elegido la película "${pelicula}" de El Señor de los Anillos.`);
    console.log(`Precio: $${precio}`);

    if (formaPago === "volver") {
        console.log("Has decidido volver al menú principal. ¡Selecciona otra película!");
        return;
    } else if (formaPago === "efectivo") {
        const valoresEfectivo = [20, 25, 50, 100];
        let cantidadEfectivo = -1;

        while (!valoresEfectivo.includes(cantidadEfectivo)) {
            const cantidadEfectivoInput = parseInt(prompt(`Selecciona la cantidad de efectivo a pagar (valores disponibles: $20, $25, $50, $100):`));
            cantidadEfectivo = cantidadEfectivoInput;
        }

        const cambio = cantidadEfectivo - precio;
        if (cambio >= 0) {
            console.log(`Has pagado con $${cantidadEfectivo}.`);
            console.log(`Cambio: $${cambio}`);
        } else {
            console.log(`La cantidad de efectivo no es suficiente. Faltan $${-cambio} para completar el pago.`);
        }
    } else {
        console.log(`Forma de pago: ${formaPago}`);
    }

    // Ofrecer la opción de adquirir el libro de la película
    const adquirirLibro = prompt(`¿Quieres adquirir el libro de la película "${pelicula}"? (Sí/No)`);

    if (adquirirLibro.toLowerCase() === "si") {
        console.log(`¡Excelente elección! Puedes adquirir el libro de "${pelicula}" en nuestra tienda.`);
    } else {
        console.log("¡Esperamos que disfrutes de la película!");
    }
}

// Función para buscar una película por título
function buscarPelicula(titulo, peliculas) {
    return peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
}

// Función para filtrar películas por precio
function filtrarPeliculasPorPrecio(precioMaximo, peliculas) {
    return peliculas.filter(pelicula => pelicula.precio <= precioMaximo);
}

// Función principal que se ejecuta cuando se selecciona una película
function seleccionarPelicula() {
    const peliculas = [
        { titulo: "La Comunidad del Anillo", precio: 10 },
        { titulo: "Las Dos Torres", precio: 12 },
        { titulo: "El Retorno del Rey", precio: 15 }
    ];

    let mensaje = "Selecciona una película de El Señor de los Anillos:\n\n";

    for (let i = 0; i < peliculas.length; i++) {
        mensaje += `${i + 1}. ${peliculas[i].titulo} - $${peliculas[i].precio}\n`;
    }

    let eleccionPelicula = parseInt(prompt(mensaje));

    while (eleccionPelicula < 1 || eleccionPelicula > peliculas.length) {
        eleccionPelicula = parseInt(prompt("Opción de película no válida. Por favor, selecciona un número válido:"));
    }

    while (eleccionPelicula >= 1 && eleccionPelicula <= peliculas.length) {
        if (isNaN(eleccionPelicula)) {
            break;
        }

        const peliculaSeleccionada = peliculas[eleccionPelicula - 1].titulo;
        const precioPelicula = peliculas[eleccionPelicula - 1].precio;

        const formasPago = ["Mercado Pago", "Tarjeta de Crédito", "Efectivo", "Volver"];
        let formaPagoIndex = -1;

        while (formaPagoIndex < 0 || formaPagoIndex >= formasPago.length) {
            const formaPagoInput = prompt("Selecciona una forma de pago:\n1. Mercado Pago\n2. Tarjeta de Crédito\n3. Efectivo\n4. Volver");
            formaPagoIndex = parseInt(formaPagoInput) - 1;
        }

        const formaPago = formasPago[formaPagoIndex];
        mostrarMensaje(peliculaSeleccionada, precioPelicula, formaPago.toLowerCase());

        if (formaPago.toLowerCase() === "volver") {
            eleccionPelicula = parseInt(prompt(mensaje)); // Volver al menú principal de selección de películas
        } else {
            break;
        }
    }

    // Ejemplo de cómo usar las funciones buscarPelicula y filtrarPeliculasPorPrecio
    const peliculaBuscada = buscarPelicula("Las Dos Torres", peliculas);
    console.log(`Película buscada: ${peliculaBuscada.titulo}, Precio: ${peliculaBuscada.precio}`);

    const peliculasFiltradas = filtrarPeliculasPorPrecio(12, peliculas);
    console.log("Películas con precio menor o igual a 12:");
    peliculasFiltradas.forEach(pelicula => console.log(`Título: ${pelicula.titulo}, Precio: ${pelicula.precio}`));
}

// Llamar a la función principal para que comience la interacción
seleccionarPelicula();





