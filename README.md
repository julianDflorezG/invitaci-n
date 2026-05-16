# 🎉 Invitación Web Interactiva — Proyecto Freelance

> **Solución digital personalizada para eventos sociales con confirmación de asistencia en tiempo real**  
> Desarrollo en proyecto freelance con integración de base de datos en la nube y automatización de respuestas vía WhatsApp.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)](https://supabase.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=flat&logo=github)](https://pages.github.com)

---

## 📌 Contexto del proyecto

El cliente necesitaba reemplazar las invitaciones físicas tradicionales por una experiencia digital que permitiera:

- Que los invitados confirmaran asistencia sin apps ni formularios complejos
- Que el cliente recibiera las respuestas organizadas automáticamente
- Que la experiencia fuera visualmente atractiva y acorde a la temática del evento
- Que funcionara perfectamente en dispositivos móviles

**Finalidad del proyecto:** una página web publicada y funcional, con cero dependencias de plataformas de pago.

---

## 🎯 Requerimientos del cliente → Soluciones implementadas

| Requerimiento | Solución técnica |
|---------------|-----------------|
| Diseño personalizado y animado | tsParticles (globos animados), paleta de colores temática, tipografías Google Fonts |
| Confirmación de asistencia | 3 opciones de respuesta con lógica condicional en JS |
| Registro de invitados | Supabase (PostgreSQL en la nube) — respuestas guardadas con nombre y estado |
| Notificación automática al cliente | Apertura de WhatsApp con mensaje pregenerado según respuesta |
| 100% responsive (móvil primero) | CSS Flexbox + `clamp()` + Media Queries para pantallas desde 320px |


---

## 🔄 Flujo de usuario

```
Invitado abre el enlace (móvil o escritorio)
        ↓
Ve la invitación animada con video del evento
        ↓
Hace clic en su respuesta (✅ Voy / ❌ No puedo / 🤔 No sé)
        ↓
Ingresa su nombre
        ↓
Sistema guarda respuesta en Supabase (BD en la nube)
        ↓
Se abre WhatsApp automáticamente con mensaje personalizado
        ↓
Cliente recibe la confirmación directamente en su celular
```

---

## 🛠️ Stack tecnológico

**Frontend**
- HTML5 semántico con estructura accesible
- CSS3 — Variables CSS, Flexbox, `clamp()` para tipografía fluida, animaciones y transiciones
- JavaScript ES6+ — manejo de eventos, `async/await`, integración con APIs externas

**Backend & Datos (serverless)**
- **Supabase** — base de datos PostgreSQL en la nube, SDK JS para inserción de registros en tiempo real

**Animaciones**
- **tsParticles** (v2.12) — sistema de partículas configurado para simular globos de colores con movimiento tipo helio

**Despliegue**
- **GitHub Pages** — publicación directa desde el repositorio sin configuración de servidor

---

## 💡 Decisiones técnicas destacadas

**¿Por qué Supabase?**  
Permite tener una base de datos real en la nube sin configurar un servidor backend, lo que redujo el tiempo de entrega y eliminó costos de hosting para el cliente.

**¿Por qué la integración con WhatsApp?**  
El cliente ya gestionaba eventos por WhatsApp. En lugar de obligarle a revisar una plataforma nueva, el sistema lleva la información directamente a donde él opera.

**¿Por qué GitHub Pages?**  
Cero costo, cero configuración, alta disponibilidad. Para un proyecto de evento puntual, es la solución más pragmática.

---

## 📊 Resultados esperados del proyecto


- ✅ Que sea Compatible con iOS, Android, Chrome, Safari y Firefox
- ✅ Tiempo de carga < 2 segundos en conexión móvil 4G
- ✅ Todos los invitados puedan responder sin instrucciones adicionales
- ✅ El cliente centralice la lista de asistentes en tiempo real

---

## 🧩 Estructura del proyecto

```
invitacion-web/
├── index.html      # Estructura principal de la invitación
├── styles.css      # Estilos responsivos con variables CSS
└── script.js       # Lógica de confirmación, Supabase y tsParticles
```

---

## 🚀 Cómo replicar este proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/julianDflorezG/invitacion-web.git

# 2. Crear cuenta gratuita en supabase.com
#    Crear tabla 'asistencia' con columnas: nombre (text), estado (text)

# 3. Reemplazar en script.js:
SUPABASE_URL = 'https://tu-proyecto.supabase.co'
SUPABASE_KEY = 'tu-anon-key'

# 4. Reemplazar número de WhatsApp en script.js:
window.open(`https://wa.me/57TUNUMERO?text=...`)

# 5. Personalizar textos en index.html y publicar con GitHub Pages
```


---

## 👨‍💻 Desarrollador

**Julián Daniel Flórez Guzmán**  
Desarrollador Web — Madrid, Cundinamarca, Colombia  
Disponible para proyectos freelance y empleo

[![GitHub](https://img.shields.io/badge/GitHub-julianDflorezG-181717?style=flat&logo=github)](https://github.com/julianDflorezG)
[![Gmail](https://img.shields.io/badge/Contacto-juliandanielflorezguzman@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:juliandanielflorezguzman@gmail.com)


