/* INTERFAZ: lee los controles, dibuja el estado, simula el modo sin conexión y llena la bitácora. */
const $=id=>document.getElementById(id);
let lvl=0,offline=false,timer=null,log=[];
function draw(){
 const r=level($('prod').value,+$('t').value,+$('h').value);
 $('tl').textContent=$('t').value+' °C';$('hl').textContent=$('h').value+' %';
 $('tv').textContent=$('t').value+' °C';$('hv').textContent=$('h').value+' %';
 $('status').dataset.l=r.l;$('word').textContent=W[r.l];$('tip').textContent=tip(r.l,r.p,r.c);
 if(r.l!==lvl){
  lvl=r.l;
  if(r.l>0){
   const e={l:r.l,txt:tip(r.l,r.p,r.c),h:hora(),sent:!offline};
   log.unshift(e);
  }else if(log.length){log.unshift({l:0,txt:'Las condiciones volvieron a la normalidad.',h:hora(),sent:!offline});}
 }
 render();
}
function render(){
 const m=log.find(e=>e.l>0);
 $('msg').innerHTML=m?'<div class="bubble"><b>'+(m.l==2?'🔴 ALERTA':'🟡 AVISO')+'</b><br>'+m.txt+'<small>WhatsApp · '+m.h+' · '+(m.sent?'enviado':'en cola, se envía al volver la señal')+'</small></div>':'<p class="empty">Aún no hay alertas. Suba la temperatura o la humedad para ver el aviso.</p>';
 $('log').innerHTML=log.length?log.map(e=>'<li><span class="dot" style="background:'+COL[e.l]+'"></span><div><time>'+e.h+' · '+(e.sent?'enviada':'pendiente de envío')+'</time>'+e.txt+'</div></li>').join(''):'<li class="empty">Sin registros todavía.</li>';
}
['prod','t','h'].forEach(i=>$(i).addEventListener('input',draw));
$('off').addEventListener('click',()=>{
 offline=!offline;$('off').setAttribute('aria-pressed',offline);
 $('net').textContent=offline?'Sin señal (modo sin conexión)':'Con señal';
 if(!offline){log.forEach(e=>e.sent=true);render();}
});
$('auto').addEventListener('click',()=>{
 const on=$('auto').getAttribute('aria-pressed')!=='true';
 $('auto').setAttribute('aria-pressed',on);
 $('auto').textContent=on?'Detener simulación':'Simular un día de calor';
 clearInterval(timer);
 if(on)timer=setInterval(()=>{
  const t=$('t'),h=$('h');
  t.value=Math.min(40,+t.value+1);h.value=Math.min(100,+h.value+(Math.random()>.5?2:1));
  if(+t.value>=40){clearInterval(timer);$('auto').setAttribute('aria-pressed',false);$('auto').textContent='Simular un día de calor';}
  draw();
 },900);
});
draw();