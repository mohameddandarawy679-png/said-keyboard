const editor = document.getElementById('editor');
const kbArea = document.getElementById('kbArea');
const preview = document.getElementById('preview');

function insert(text){
  const s = editor.selectionStart ?? editor.value.length;
  const e = editor.selectionEnd ?? editor.value.length;
  editor.value = editor.value.slice(0,s) + text + editor.value.slice(e);
  editor.focus();
  const pos = s + text.length;
  editor.setSelectionRange(pos,pos);
}

const KEYS = {
  arabic: ['ا','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي','ة','أ','إ','آ','ؤ','ئ','َ','ُ','ِ','ّ','ً','ٌ','ٍ','٠','١','٢','٣','٤','٥','٦','٧','٨','٩','!','؟','،','؛','.'],
  html: ['<h1>','</h1>','<p>','</p>','<button>','</button>','<div>','</div>','<img>','<a>','</a>','<br>','<b>','</b>','<input>','class="','id="','src="','href="','"','<','>','/'],
  css: ['color: ','background: ','padding: ','margin: ','border: ','border-radius: ','font-size: ','text-align: ','display: ','red','blue','green','white','black','gold','center','px','%',';','{','}',' : '],
  js: ['alert(','console.log(','function ','let ','const ','if (','else','for (','document.','getElementById','addEventListener','click','=>','{','}','(',')',';','=','+']
};

// الكود هنا مكتوب متقطع صح، عشان كده عمره ما هيتقطع
const LEARN = [
  {title:'1 زر احمر', desc:'دوس وشوف الزر بيشتغل ازاي', code:
`<button
  style="background:red;
  color:white;
  padding:12px;
  border:none;
  border-radius:10px;">
  دوس عليا
</button>`},
  {title:'2 عنوان كبير', desc:'أول حاجة تتعلمها في HTML', code:
`<h1
  style="color:gold;
  text-align:center;">
  أهلا بيك يا بطل
</h1>`},
  {title:'3 صندوق ذهبي', desc:'شكل حلو تعملو بنفسك', code:
`<div
  style="background:gold;
  padding:15px;
  border-radius:15px;
  text-align:center;">
  أنا عملت ده بنفسي
</div>`},
  {title:'4 صورتك', desc:'حط صورة في موقعك', code:
`<img
  src="https://picsum.photos/300"
  style="width:100%;
  border-radius:15px;">`}
];

function render(tab){
  document.querySelectorAll('.kb-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  kbArea.innerHTML='';
  if(tab==='learn'){
    LEARN.forEach(l=>{
      const d=document.createElement('button');
      d.className='kb-btn learn-card';
      d.innerHTML=`<b>${l.title}</b><span>${l.desc}</span>`;
      d.onclick=()=>{ editor.value=l.code; preview.style.display='none'; editor.focus(); window.scrollTo({top:0,behavior:'smooth'}); };
      kbArea.appendChild(d);
    });
    return;
  }
  KEYS[tab].forEach(k=>{
    const b=document.createElement('button');
    b.className='kb-btn'+(k.length>2?' small':'');
    b.textContent=k;
    b.onclick=()=>insert(k);
    kbArea.appendChild(b);
  });
}

document.querySelectorAll('.kb-tab').forEach(b=>b.onclick=()=>render(b.dataset.tab));
document.querySelectorAll('.kb-bottom .kb-btn[data-key]').forEach(b=>b.onclick=()=>insert(b.dataset.key));
document.getElementById('backBtn').onclick=()=>{ editor.value=editor.value.slice(0,-1); editor.focus(); };
document.getElementById('copyBtn').onclick=async()=>{ try{ await navigator.clipboard.writeText(editor.value); alert('اتنسخ ✅'); }catch{ editor.select(); document.execCommand('copy'); } };
document.getElementById('clearBtn').onclick=()=>{ editor.value=''; preview.style.display='none'; preview.innerHTML=''; };
document.getElementById('pasteBtn').onclick=async()=>{ try{ editor.value += await navigator.clipboard.readText(); }catch{ alert('اسمح باللصق من المتصفح'); } };
document.getElementById('runBtn').onclick=()=>{ preview.style.display='block'; preview.innerHTML=editor.value; };

render('learn');
