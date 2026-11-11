/* DATOS: productos, límites de ejemplo y textos de los niveles.
   Cada producto tiene [límite de atención, límite de riesgo alto] para temperatura (t, °C) y humedad (h, %).
   Estos valores son de ejemplo para la demostración: se pueden cambiar aquí. */
const P={frutas:{n:'las frutas',t:[18,25],h:[90,95]},hortalizas:{n:'las hortalizas',t:[15,22],h:[90,95]},tuberculos:{n:'los tubérculos',t:[18,25],h:[85,92]},granos:{n:'los granos',t:[25,30],h:[65,75]}};
const W=['Todo bien','Atención','Riesgo alto'],COL=['var(--ok)','var(--warn)','var(--bad)'];
