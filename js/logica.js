/* LÓGICA: calcula el nivel de riesgo (0 = bien, 1 = atención, 2 = riesgo alto) y redacta la recomendación. */
function level(prod,t,h){
 const p=P[prod];
 const lt=t>=p.t[1]?2:t>=p.t[0]?1:0, lh=h>=p.h[1]?2:h>=p.h[0]?1:0;
 const l=Math.max(lt,lh),c=[];
 if(lt)c.push('hace '+(lt==2?'demasiado ':'')+'calor ('+t+' °C)');
 if(lh)c.push('hay '+(lh==2?'demasiada ':'mucha ')+'humedad ('+h+' %)');
 return{l,p,c};
}
function tip(l,p,c){
 if(l==0)return 'Las condiciones son buenas para '+p.n+'. Siga revisando.';
 const w=c.join(' y ');
 return l==1?'En la bodega '+w+'. Ventile o mueva '+p.n+' a la sombra pronto.':'En la bodega '+w+'. Mueva '+p.n+' a un sitio fresco y despáchelo hoy.';
}
function hora(){return new Date().toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})}
