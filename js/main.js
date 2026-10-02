const $=s=>document.querySelector(s), PH='917385629397';
/* Theme */
const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;$('#ti').textContent=t==='dark'?'☀️':'🌙';$('#tl').textContent=t==='dark'?'LIGHT':'DARK';try{localStorage.setItem('tf-theme',t)}catch(e){}}
let saved=null;try{saved=localStorage.getItem('tf-theme')}catch(e){}
setTheme(saved||'dark');
$('#theme').onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');
/* Mobile menu */
$('#burger').onclick=()=>$('#links').classList.toggle('on');
$('#links').onclick=e=>{if(e.target.tagName==='A')$('#links').classList.remove('on')};
/* Toast */
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),3200)}
/* Lightbox */
const imgs=[...document.querySelectorAll('#gal img')];let cur=0;
function show(i){cur=(i+imgs.length)%imgs.length;$('#li').src=imgs[cur].src;$('#li').alt=imgs[cur].alt;$('#lb').classList.add('on')}
imgs.forEach((im,i)=>im.parentElement.onclick=()=>show(i));
$('#lx').onclick=()=>$('#lb').classList.remove('on');$('#lp').onclick=()=>show(cur-1);$('#ln').onclick=()=>show(cur+1);
$('#lb').onclick=e=>{if(e.target.id==='lb')$('#lb').classList.remove('on')};
document.addEventListener('keydown',e=>{if(!$('#lb').classList.contains('on'))return;if(e.key==='Escape')$('#lb').classList.remove('on');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
/* Quote form -> WhatsApp */
$('#qsend').onclick=()=>{
 const v=id=>$('#'+id).value.trim();
 if(!v('qn')||!v('qp')||!v('qs')){toast('Please fill name, mobile number and service.');(!v('qn')?$('#qn'):!v('qp')?$('#qp'):$('#qs')).focus();return}
 const msg=`Hello True Force, I'd like a security quote.\nName: ${v('qn')}\nPhone: ${v('qp')}\nEmail: ${v('qe')||'-'}\nService: ${v('qs')}\nZone: ${v('qz')||'-'}\nDetails: ${v('qm')||'-'}`;
 const url=`https://wa.me/${PH}?text=${encodeURIComponent(msg)}`;
 const w=window.open(url,'_blank');
 $('#qnote').innerHTML=w?'Opening WhatsApp with your details…':`If WhatsApp did not open, <a target="_blank" rel="noopener" href="${url}" style="color:var(--gold)">tap here to send your inquiry</a>.`;
 toast('Opening WhatsApp…')};
/* Google map: live embed when the page is opened normally; static card when shown inside a preview pane that blocks embeds */
(function(){
 let top=false;try{top=window.top===window.self}catch(e){top=false}
 if(!top)return;
 const f=document.createElement('iframe');
 f.src="https://www.google.com/maps?q=Oxy+Primo,+Bakori+Phata,+Wagholi,+Pune+412207&z=16&hl=en&output=embed";f.title="True Force head office on Google Maps";f.allowFullscreen=true;f.referrerPolicy="no-referrer-when-downgrade";f.loading="lazy";
 $('#gmap').appendChild(f);$('#poster').style.display='none';
})();

/* Chat assistant */
const KB=[
 {k:['hello','hi','hey','namaste','namaskar','good morning','good evening'],a:"Hello! 👋 I'm the True Force assistant. I can help with services, areas covered, licensing, pricing and getting a quote."},
 {k:['service','offer','provide','what do you do','solutions','kya karte'],a:"We offer:\n🏢 Residential society security\n🏭 Corporate & industrial guards\n📹 CCTV surveillance\n🚗 Mobile patrols\n🎉 Event & crowd management\n🔐 Access control & barriers\n💼 Cash-in-transit escort\n🏗️ Construction site security\n\nWhich one are you interested in?"},
 {k:['price','cost','rate','charge','fee','quote','quotation','budget','how much','pricing','kimat','kitna','salary per guard'],a:"Pricing depends on the number of guards, shift hours (8h/12h), site type and any extras like CCTV. We prepare a free, customized quote — use the form in the Contact section, or send your requirement to our team on WhatsApp for a quick estimate.",h:1},
 {k:['area','zone','cover','location','where','hinjewadi','wagholi','kharadi','lohagaon','nigadi','punawale','wakad','pune','pimpri','baner','hadapsar','viman'],a:"We serve 7 Pune zones: Hinjewadi, Wagholi, Kharadi, Lohagaon, Nigadi, Punawale and Wakad. For other areas, please confirm with our team — they can usually arrange it.",c:['Get a quote','Talk to team']},
 {k:['licen','psara','legal','certif','iso','verified','police','verification','govt','government','registered'],a:"True Force is fully PSARA licensed and ISO certified. Every guard goes through police verification and valid ID checks before deployment.",c:['Training','Get a quote']},
 {k:['train','uniform','quality','discipline','trained'],a:"Guards are trained in access control, emergency protocols, fire safety and first response, with monthly refresher drills. Supervisors track shifts through a GPS-based app.",c:['Services','Get a quote']},
 {k:['cctv','camera','surveillance','monitoring'],a:"We design, install and monitor high-resolution IP CCTV with remote playback and alarm alerts, and can combine it with on-site guards.",c:['Get a quote','Talk to team']},
 {k:['event','wedding','crowd','exhibition','party','concert','function'],a:"Our event team handles entry screening, crowd flow and VIP security for weddings, summits and exhibitions. Share your date and guest count with our team for a quote.",h:1},
 {k:['society','residential','apartment','housing','flat','villa','township'],a:"For housing societies we provide uniformed 24/7 guards with visitor screening, vehicle logging and night patrols — including ceremonial guard turnouts for society functions.",c:['Get a quote','Areas covered']},
 {k:['factory','industrial','corporate','office','warehouse','plant','it park','company'],a:"For offices, plants and warehouses we deploy trained guards with strict access control, duty logs and supervisor audits, plus daily reporting.",c:['Get a quote','Talk to team']},
 {k:['how many','500','experience','years','established','about','who are','kitne guard'],a:"True Force has 15+ years of experience and 500+ guards deployed across Pune, headquartered in Wagholi."},
 {k:['contact','phone','call','number','email','mail','address','office','hours','timing','open','direction','map'],a:"📍 A307, Oxy Primo, Bakori Phata, Wagholi, Pune – 412207\n📞 +91-7385629397\n📞 +91-9920282322\n✉️ info@trueforcesecurity.com\n🕐 Office: Mon–Sat, 9 AM – 7 PM",h:1},
 {k:['job','career','hiring','vacancy','recruit','naukri','work with','apply'],a:"For job openings, please speak to our team directly — they'll share current requirements and the process.",h:1},
 {k:['urgent','emergency','immediately','asap','complaint','problem','issue','replace','absent'],a:"For anything urgent, please call or WhatsApp our team directly so it reaches the right person quickly.",h:1},
 {k:['human','agent','person','talk to','speak','support','whatsapp','representative','team','help me'],a:"Of course — you can reach our team directly using the buttons below.",h:1},
 {k:['thank','thanks','great','bye','ok thanks'],a:"You're welcome! 😊 If you need anything else, I'm here — or our team is a call away."}
];
const QUICK=['Services','Get a quote','Areas covered','Licensing','Contact details'];
const msgs=$('#msgs');let opened=false,last='',turns=0,miss=0,busy=false;
const wa=t=>`https://wa.me/${PH}?text=${encodeURIComponent(t)}`;
const waText=()=>last?`Hi True Force, I have a question: ${last}`:'Hi True Force, I need help with security services.';
function refreshWa(){$('#hw').href=wa(waText())}
function scrollDown(){msgs.scrollTop=msgs.scrollHeight}
function add(t,c){const d=document.createElement('div');d.className='m '+c;d.textContent=t;msgs.appendChild(d);scrollDown();return d}
function clearChips(){msgs.querySelectorAll('.chips').forEach(x=>x.remove())}
function mkChip(x,fn){const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=x;b.onclick=fn;return b}
function chips(l){clearChips();const w=document.createElement('div');w.className='chips';l.forEach(x=>w.appendChild(mkChip(x,()=>ask(x))));msgs.appendChild(w);scrollDown()}
function actions(){const w=document.createElement('div');w.className='act';
 w.innerHTML=`<a class="w" target="_blank" rel="noopener" href="${wa(waText())}">💬 WhatsApp Support</a><a class="c" href="tel:+${PH}">📞 Call Support</a>`;
 msgs.appendChild(w);scrollDown()}
function norm(s){return s.toLowerCase().replace(/[^a-z0-9\u0900-\u097f ]/g,' ').replace(/\s+/g,' ')}
function match(q){const s=' '+norm(q)+' ';let best=null,sc=0;
 KB.forEach(e=>{let n=0;e.k.forEach(k=>{if(s.includes(k.length<4?' '+k+' ':k))n+=k.length});if(n>sc){sc=n;best=e}});return sc>=2?best:null}
function menu(msg){clearChips();last='';miss=0;add(msg||'What would you like to know? Pick a topic or type your question.','b');chips(QUICK)}
function buildTopics(){const t=$('#topics');t.innerHTML='';['🏠 Main menu',...QUICK,'Talk to team'].forEach(x=>t.appendChild(mkChip(x,()=>ask(x))))}
function reply(q){
 const e=match(q);refreshWa();busy=true;
 const t=document.createElement('div');t.className='m b t';t.innerHTML='<i></i><i></i><i></i>';msgs.appendChild(t);scrollDown();
 setTimeout(()=>{t.remove();busy=false;
  if(!e){miss++;
   add(miss>1?"I'm still not able to answer that here. Let me connect you with our team — they'll help right away 👇":"I'm not sure about that one. Our team can give you the exact answer 👇",'b');actions();chips(['🏠 Main menu','Services','Get a quote']);return}
  miss=0;turns++;add(e.a,'b');
  if(e.h){actions();chips(['🏠 Main menu','Services','Get a quote'])}
  else{
   if(turns>=3&&turns%3===0){add("Need more detailed help? Our team is happy to assist 👇",'b');actions()}
   chips([...(e.c||['Services','Get a quote']).filter(x=>x!=='Main menu'),'🏠 Main menu'])}
 },550)}
function ask(q){q=(q||'').trim();if(!q||busy)return;clearChips();
 if(/main menu|^menu$/i.test(q)){add(q.replace('🏠 ',''),'u');return menu()}
 if(/^get a quote$/i.test(q)){add(q,'u');return reply('quote')}
 if(/^talk to team$/i.test(q)){add(q,'u');return reply('talk to team')}
 last=q;add(q,'u');reply(q)}
function send(){const v=$('#ci').value;$('#ci').value='';ask(v);$('#ci').focus()}
function openChat(){$('#chat').classList.add('on');$('#tip').style.display='none';$('#fab').textContent='✕';
 if(!opened){opened=true;refreshWa();buildTopics();add("Hi! 👋 I'm True Force's virtual assistant. Ask me anything about our security services, coverage or pricing — or tap a topic below.",'b');chips(QUICK)}
 setTimeout(()=>$('#ci').focus(),100)}
function closeChat(){$('#chat').classList.remove('on');$('#fab').textContent='💬'}
$('#fab').onclick=()=>$('#chat').classList.contains('on')?closeChat():openChat();
$('#cx').onclick=closeChat;
$('#cr').onclick=()=>{if(!busy)menu('Back at the main menu. What would you like to know?')};
$('#csend').onclick=send;
$('#ci').addEventListener('keydown',e=>{if(e.key==='Enter'||e.keyCode===13){e.preventDefault();send()}});
setTimeout(()=>{$('#tip').style.opacity=0;setTimeout(()=>$('#tip').style.display='none',300)},12000);