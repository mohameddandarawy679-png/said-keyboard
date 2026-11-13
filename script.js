// 100 كود من smsm1000 لـ smsm1099
const CODES = [];
for(let i = 0; i < 100; i++){
  CODES.push("SMSM" + (1000 + i));
}

function checkCode(){
  let val = document.getElementById('codeInput').value.trim().toUpperCase();
  if(CODES.includes(val)){
    localStorage.setItem('said_unlocked','yes');
    localStorage.setItem('said_code',val);
    document.getElementById('lockScreen').style.display='none';
    alert('اتفتح ✅ أهلاً بيك يا بطل');
  } else {
    document.getElementById('codeMsg').textContent='الكود غلط، كلم سعيد على واتساب 01098920188';
  }
}
if(localStorage.getItem('said_unlocked')==='yes'){
  window.addEventListener('load',()=>{ document.getElementById('lockScreen').style.display='none'; });
}

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const kbArea = document.getElementById('kbArea');
const tabs = document.querySelectorAll('.kb-tab');

const KEYBOARDS = {
  learn: ["<h1>","</h1>","<p>","</p>","<div>","</div>","<button>","</button>","<br>","<b>","</b>","<h2>","</h2>"],
  arabic: ["ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","د","ش","س","ي","ب","ل","ا","ت","ن","م","ك","ط","ئ","ء","ؤ","ر","لا","ى","ة","و","ز","ظ","1","2","3","4","5","6","7","8","9","0","؟","،"],
  html: ["<html>","<head>","<body>","<div>","<p>","<h1>","<a>","<img>","<button>","<span>","class=","id=","</div>","</p>"],
  css: ["color:","background:","font-size:","padding:","margin:","border:","{","}",";","#",".","px","%"],
  js: ["let ","const ","function ","alert(","console.log(","document.","getElementById","=>","{","}","(",")",";","="]
};

function insertText(txt){
  let s = editor.selectionStart;
  let e = editor.selectionEnd;
  editor.value = editor.value.slice(0,s) + txt + editor.value.slice(e);
  editor.selectionStart = editor.selectionEnd = s + txt.length;
  editor.focus();
}
function renderKb(tab){
  kbArea.innerHTML = '';
  KEYBOARDS[tab].forEach(k=>{
    let b = document.createElement('button');
    b.className = 'kb-btn';
    b.textContent = k;
    b.onclick = ()=> insertText(k);
    kbArea.appendChild(b);
  });
  tabs.forEach(t=> t.classList.toggle('active', t.dataset.tab===tab));
}
tabs.forEach(t=> t.onclick = ()=> renderKb(t.dataset.tab));
renderKb('learn');

document.getElementById('runBtn').onclick = ()=>{ preview.innerHTML = editor.value; };
document.getElementById('clearBtn').onclick = ()=>{ editor.value=''; preview.innerHTML=''; editor.focus(); };
document.getElementById('copyBtn').onclick = ()=>{ navigator.clipboard.writeText(editor.value); alert('اتنسخ ✅'); };
document.getElementById('pasteBtn').onclick = async ()=>{
  try{ let txt = await navigator.clipboard.readText(); insertText(txt); }catch{ alert('اسمح للمتصفح باللصق'); }
};
document.querySelectorAll('.kb-bottom .kb-btn[data-key]').forEach(b=>{ b.onclick = ()=> insertText(b.dataset.key); });
document.getElementById('backBtn').onclick = ()=>{
  let s = editor.selectionStart;
  if(s>0){ editor.value = editor.value.slice(0,s-1) + editor.value.slice(editor.selectionEnd); editor.selectionStart = editor.selectionEnd = s-1; }
  editor.focus();
};
