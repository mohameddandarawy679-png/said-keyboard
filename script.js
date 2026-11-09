window.onload = function(){
var editor = document.getElementById('editor');
var kbArea = document.getElementById('kbArea');
var preview = document.getElementById('preview');
var current = 'arabic';

var arabic = ['ض','ص','ث','ق','ف','غ','ع','ه','خ','ح','ج','د','ش','س','ي','ب','ل','ا','ت','ن','م','ك','ط','ظ','ز','و','ة','ئ','ء','ؤ','ر'];
var html = ['<div>','</div>','<h1>','</h1>','<p>','</p>','<button>','</button>','<img>','<a>','</a>','<br>','<ul>','<li>','<input>'];
var css = ['color:','background:','font-size:','padding:','margin:','border:','border-radius:','display:flex;','width:','height:','{','}',';'];
var js = ['function','let ','const ','if (','else','return','console.log()','alert()','document.','{','}',';'];

function insert(t){
  editor.value = editor.value + t;
  editor.focus();
}

function render(){
  kbArea.innerHTML = '';
  var list = arabic;
  if(current=='html') list = html;
  if(current=='css') list = css;
  if(current=='js') list = js;

  if(current=='learn'){
    var lessons = [
      {t:'1 زر احمر', c:"<button style='background:red;color:white;padding:12px;border:none;border-radius:10px'>دوس عليا</button>"},
      {t:'2 عنوان كبير', c:"<h1 style='text-align:center;color:purple'>اهلا بيك في موقعي</h1>"},
      {t:'3 كارت منتج', c:"<div style='background:white;color:black;padding:15px;border-radius:15px;text-align:center'><h3>منتجي</h3><button style='background:green;color:white;padding:10px;border:none;border-radius:10px'>اشتري</button></div>"}
    ];
    for(var i=0;i<lessons.length;i++){
      (function(l){
        var b = document.createElement('button');
        b.className = 'kb-btn learn-card';
        b.innerHTML = '<b>'+l.t+'</b>';
        b.onclick = function(){ insert(l.c); };
        kbArea.appendChild(b);
      })(lessons[i]);
    }
    return;
  }

  for(var i=0;i<list.length;i++){
    (function(txt){
      var b = document.createElement('button');
      b.className = 'kb-btn small';
      b.textContent = txt;
      b.onclick = function(){ insert(txt); };
      kbArea.appendChild(b);
    })(list[i]);
  }
}

var tabs = document.querySelectorAll('.kb-tab');
for(var i=0;i<tabs.length;i++){
  (function(tab){
    tab.onclick = function(){
      for(var j=0;j<tabs.length;j++) tabs[j].classList.remove('active');
      tab.classList.add('active');
      current = tab.getAttribute('data-kb');
      render();
    };
  })(tabs[i]);
}

document.getElementById('copyBtn').onclick = function(){ navigator.clipboard.writeText(editor.value); alert('اتنسخ'); };
document.getElementById('clearBtn').onclick = function(){ editor.value=''; preview.style.display='none'; };
document.getElementById('pasteBtn').onclick = function(){ alert('دوس مطول في مربع الكتابة واعمل لصق'); };
document.getElementById('runBtn').onclick = function(){ preview.style.display='block'; preview.innerHTML = editor.value; };

var bottomBtns = document.querySelectorAll('.kb-bottom .kb-btn');
for(var i=0;i<bottomBtns.length;i++){
  (function(b){
    b.onclick = function(){
      var act = b.getAttribute('data-act');
      if(act=='back') editor.value = editor.value.slice(0,-1);
      if(act=='space') insert(' ');
      if(act=='enter') insert('\n');
    };
  })(bottomBtns[i]);
}

render();
};
