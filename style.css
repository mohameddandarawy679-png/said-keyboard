const editor = document.getElementById('editor');
const kbArea = document.getElementById('kbArea');
const modeLabel = document.getElementById('modeLabel');
const preview = document.getElementById('preview');

function insert(t){
  const s=editor.selectionStart, e=editor.selectionEnd;
  editor.value = editor.value.slice(0,s)+t+editor.value.slice(e);
  editor.focus();
  editor.selectionStart=editor.selectionEnd=s+t.length;
}
function render(keys){
  kbArea.innerHTML='';
  keys.forEach(k=>{
    const b=document.createElement('button');
    b.className='kb-btn '+(k.length>3?'small':'');
    b.textContent=k;
    b.onclick=()=>insert(k);
    kbArea.appendChild(b);
  });
}
const DATA={
  arabic: "ض ص ث ق ف غ ع ه خ ح ج د ش س ي ب ل ا ت ن م ك ط ذ ء ؤ ر ى ة و ز ظ 1 2 3 4 5 0 ً ُ ِ ّ ؟ ! . ،".split(" "),
  html: ["<div>","</div>","<h1>","</h1>","<p>","</p>","<button>","</button>","<img>","<a href=''>","<input>","<ul>","<li>","class=''","id=''","<section>","<footer>","<header>","<form>","<span>"],
  css: ["color:","background:","display:flex;","margin:","padding:","border-radius:","font-size:","width:","height:","justify-content:center;","align-items:center;","gap:",".box{","}","@media","hover","#","."],
  js: ["function","const","let","console.log()","if()","else","for()","addEventListener","document.querySelector","=>","return","alert()","onclick","true","false","[]","{}","()"],
  learn: []
};
function renderLearn(){
  kbArea.innerHTML='';
  const lessons=[
    ["الدرس 1: اعمل زرار","<button>دوس عليا</button>","بص على الكود، ده زرار حقيقي"],
    ["الدرس 2: غيّر اللون","<h1 style='color:red'>انا احمر</h1>","جرب تغير red لـ blue"],
    ["الدرس 3: صندوق","<div style='background:yellow;padding:20px'>انا صندوق</div>","ده div، أساس أي موقع"],
    ["الدرس 4: تفاعل","<button onclick=\"alert('مبروك!')\">دوس</button>","دوس تشغيل وشوف هيحصل ايه"],
  ];
  lessons.forEach(([t,code,desc])=>{
    const b=document.createElement('button');
    b.className='kb-btn learn-card';
    b.innerHTML=`<b>${t}</b><span>${desc}</span>`;
    b.onclick=()=>{insert(code); alert('اتضاف الكود! دوس تشغيل ▶');};
    kbArea.appendChild(b);
  });
}
document.querySelectorAll('.kb-tab').forEach(tab=>{
  tab.onclick=()=>{
    document.querySelectorAll('.kb-tab').forEach(x=>x.classList.remove('active'));
    tab.classList.add('active');
    const k=tab.dataset.kb;
    modeLabel.textContent=tab.textContent;
    if(k==='learn') renderLearn(); else render(DATA[k]);
  }
});
document.querySelectorAll('.kb-bottom .kb-btn').forEach(b=>{
  b.onclick=()=>{
    const a=b.dataset.act;
    if(a==='back') editor.value=editor.value.slice(0,-1);
    if(a==='space') insert(' ');
    if(a==='enter') insert('\n');
  }
});
document.getElementById('copyBtn').onclick=async()=>{
  await navigator.clipboard.writeText(editor.value); alert('اتنسخ ✅');
};
document.getElementById('pasteBtn').onclick=async()=>{
  const t=await navigator.clipboard.readText(); insert(t);
};
document.getElementById('clearBtn').onclick=()=>{editor.value=''; preview.style.display='none'};
document.getElementById('runBtn').onclick=()=>{
  preview.style.display='block'; preview.innerHTML=editor.value;
};
render(DATA.arabic);
