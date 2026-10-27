const $=s=>document.querySelector(s);
const burger=$('.burger'),menu=$('.menu');
burger.addEventListener('click',()=>{menu.classList.toggle('open');burger.setAttribute('aria-expanded',menu.classList.contains('open'))});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// simulador (estimativa ilustrativa)
const inp=$('#conta'),eM=$('#econMes'),eA=$('#econAno'),wa=$('#simWa');
const brl=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
function sim(){const v=parseFloat(inp.value.replace(/\./g,'').replace(',','.'))||0;const m=v*0.9;eM.textContent=brl(m);eA.textContent=brl(m*12);
wa.href='https://wa.me/5573998720190?text='+encodeURIComponent('Olá! Vi o site da TP Engenharia e quero um orçamento de energia solar. Minha conta de luz é de aproximadamente '+brl(v)+'.')}
inp.addEventListener('input',sim);sim();
