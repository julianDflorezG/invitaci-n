// Contenido de script.js
const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_KEY = 'tu-anon-key';
// Inicialización del cliente de Supabase
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function responder(tipo) {
}

// Configuración de globos
tsParticles.load("tsparticles", {
    // ... toda la configuración de los globos ...
});

// 1. Configuración de Supabase (REEMPLAZA CON TUS LLAVES)
const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_KEY = 'tu-anon-key';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function responder(tipo) {
    const nombre = prompt("Para confirmar, por favor dinos tu nombre:");
    if (!nombre) return;

    // Guardar en Base de Datos
    const { error } = await _supabase
        .from('asistencia')
        .insert([{ nombre: nombre, estado: tipo }]);

    if (error) {
        alert("Hubo un error al guardar tu respuesta.");
        console.log(error);
    } else {
        // Mensajes personalizados de tu hija
        let mensajeWa = "";
        if (tipo === 'confirmado') {
            alert("¡Mi hija dice: Te espero, no lo olvides! 🎂");
            mensajeWa = `¡Hola! Confirmo mi asistencia al cumple. Soy ${nombre}`;
        } else if (tipo === 'no_puedo') {
            alert("¡Mi hija dice: Gracias por avisar, te extrañaremos!");
            mensajeWa = `Hola, no podré asistir al cumple. Atentamente: ${nombre}`;
        } else {
            alert("¡Mi hija dice: No te preocupes, tómate tu tiempo!");
            mensajeWa = `Hola, aún no estoy seguro si puedo ir. Te aviso pronto! - ${nombre}`;
        }

        // Abrir WhatsApp automáticamente (Reemplaza con tu número)
        window.open(`https://wa.me/57XXXXXXXXXX?text=${encodeURIComponent(mensajeWa)}`);
    }
}

// 2. Configuración de Globos de Colores
tsParticles.load("tsparticles", {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: ["#FF1493", "#00BFFF", "#FFD700", "#32CD32", "#FF4500"] },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true },
        size: { value: 12, random: true },
        move: {
            enable: true,
            speed: 2,
            direction: "top", // Los globos suben como si tuvieran helio
            random: true,
            straight: false,
            out_mode: "out",
            wobble: { enable: true, distance: 10, speed: 10 }
        }
    },
    interactivity: {
        events: { onHover: { enable: true, mode: "bubble" } },
        modes: { bubble: { size: 25, duration: 2, opacity: 1 } }
    }
});