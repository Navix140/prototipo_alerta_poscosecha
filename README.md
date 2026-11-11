# Alerta Poscosecha – prototipo simulado

Simulación de un sistema de monitoreo y alerta temprana para pérdidas poscosecha en pequeños productores agrícolas de Santander.
Proyecto de aula de Metodología de la Investigación, Universidad de Santander (UDES), 2026.

## Cómo abrirlo
Haga doble clic en `index.html`. Funciona en cualquier navegador, en computador o celular, y no necesita internet ni instalar nada.

## Qué hace
- Muestra un semáforo (verde, amarillo, rojo) con una recomendación en lenguaje sencillo.
- Permite elegir el producto (frutas, hortalizas, tubérculos o granos) y mover la temperatura y la humedad de la bodega.
- Simula el mensaje de WhatsApp que recibiría el productor.
- Guarda una bitácora de alertas para el extensionista.
- Tiene un botón para simular un día de calor y otro para simular que se pierde la señal (las alertas quedan en cola y se envían al volver).

## Partes del prototipo
| Archivo | Qué contiene |
|---|---|
| `index.html` | La estructura de la página: estado, controles, mensaje y bitácora. |
| `css/estilos.css` | La apariencia: semáforo, tamaños grandes, modo claro y oscuro. |
| `js/datos.js` | Los productos, sus límites de temperatura y humedad y los textos de los niveles. |
| `js/logica.js` | El cálculo del nivel de riesgo y la redacción de la recomendación. |
| `js/interfaz.js` | Los controles, la simulación de calor, el modo sin señal, el mensaje y la bitácora. |

## Cómo cambiar los límites
Abra `js/datos.js` y edite los números de cada producto. Los valores actuales son de ejemplo: deben ajustarse con un técnico agrícola.

## Alcance y limitaciones
- Todo es simulado: no hay sensores reales ni envío real de mensajes.
- La bitácora se borra al cerrar la página.
- No se ha probado con productores reales.
