// Puedes agregar aquí la lógica para el chat web, 
// notificaciones push, o cualquier otra interacción dinámica.

// Ejemplo básico para mostrar/ocultar un chat
// Elementos del chat
const chatButton = document.createElement('button');
chatButton.textContent = 'Chat';
document.querySelector('.chat').appendChild(chatButton);

const chatContainer = document.createElement('div');
chatContainer.classList.add('chat-container');
chatContainer.style.display = 'none'; // Inicialmente oculto
document.body.appendChild(chatContainer);

const chatMessages = document.createElement('div');
chatMessages.classList.add('chat-messages');
chatContainer.appendChild(chatMessages);

const chatInput = document.createElement('input');
chatInput.type = 'text';
chatInput.placeholder = 'Escribe tu mensaje...';
chatContainer.appendChild(chatInput);

const sendButton = document.createElement('button');
sendButton.textContent = 'Enviar';
chatContainer.appendChild(sendButton);

// Lógica para mostrar/ocultar el chat
chatButton.addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});

// Lógica para enviar mensajes (simulada)
sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = `Tú: ${message}`;
        chatMessages.appendChild(newMessage);
        chatInput.value = ''; // Limpiar el input

        // Simulación de respuesta del bot (puedes reemplazar esto con lógica real)
        setTimeout(() => {
            const botResponse = document.createElement('div');
            botResponse.textContent = `Bot: ¡Hola! Gracias por tu mensaje.`;
            chatMessages.appendChild(botResponse);
        }, 1000); 
    }
});

// Estilos básicos para el chat (puedes personalizarlos)
// const style = document.createElement('style');
// style.textContent = `
// .chat-container {
//     position: fixed;
//     bottom: 20px;
//     right: 20px;
//     width: 300px;
//     background-color: white;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     padding: 10px;
// }

// .chat-messages {
//     height: 200px;
//     overflow-y: auto;
//     margin-bottom: 10px;
// }
// `;
// Función para crear un nuevo hilo de discusión
function crearHilo(pregunta) {
    const hilo = document.createElement('article'); // Cambiamos a 'article' para mantener la estructura HTML
    hilo.classList.add('pregunta'); 

    const preguntaElemento = document.createElement('h2');
    preguntaElemento.textContent = pregunta;
    hilo.appendChild(preguntaElemento);

    // Puedes agregar aquí elementos para mostrar detalles de la pregunta (autor, fecha, etc.) si lo deseas

    const botonesPregunta = document.createElement('div');
    botonesPregunta.classList.add('botones');
    hilo.appendChild(botonesPregunta);

    // Puedes agregar botones a 'botonesPregunta' si es necesario

    const respuestas = document.createElement('div');
    respuestas.classList.add('respuestas');
    hilo.appendChild(respuestas);

    const nuevoComentarioForm = document.createElement('form'); // Usamos un formulario para capturar la respuesta
    nuevoComentarioForm.classList.add('nuevo-comentario-form'); 

    const comentarioInput = document.createElement('input');
    comentarioInput.type = 'text';
    comentarioInput.placeholder = 'Escribe tu respuesta...';
    nuevoComentarioForm.appendChild(comentarioInput);

    const comentarButton = document.createElement('button');
    comentarButton.type = 'submit'; // Cambiamos a 'submit' para enviar el formulario
    comentarButton.textContent = 'Responder';
    nuevoComentarioForm.appendChild(comentarButton);

    hilo.appendChild(nuevoComentarioForm);

    nuevoComentarioForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const comentario = comentarioInput.value.trim();
        if (comentario !== '') {
            const nuevaRespuesta = document.createElement('article');
            nuevaRespuesta.classList.add('respuesta');

            const contenidoRespuesta = document.createElement('p');
            contenidoRespuesta.textContent = comentario;
            nuevaRespuesta.appendChild(contenidoRespuesta);

            // Puedes agregar aquí elementos para mostrar detalles de la respuesta (autor, fecha, etc.)

            const botonesRespuesta = document.createElement('div');
            botonesRespuesta.classList.add('botones');
            nuevaRespuesta.appendChild(botonesRespuesta);

            // Puedes agregar botones a 'botonesRespuesta' si es necesario

            respuestas.appendChild(nuevaRespuesta);
            comentarioInput.value = '';
        }
    });

    return hilo;
}

// Manejar el formulario de nueva pregunta
const nuevaPreguntaForm = document.getElementById('nueva-pregunta-form');
nuevaPreguntaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const preguntaInput = document.getElementById('pregunta-input');
    const pregunta = preguntaInput.value.trim();
    if (pregunta !== '') {
        const nuevoHilo = crearHilo(pregunta);
        document.querySelector('.hilos-foro').appendChild(nuevoHilo); // Asegúrate de usar el selector correcto
        preguntaInput.value = '';
    }
});

// Estilos básicos para el foro (puedes personalizarlos)
const style = document.createElement('style');
style.textContent = `
.hilo {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.comentarios {
    margin-top: 10px;
}
`;

document.head.appendChild(style);