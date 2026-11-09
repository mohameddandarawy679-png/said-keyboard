const editor = document.getElementById('editor');
const kbArea = document.getElementById('kbArea');
const preview = document.getElementById('preview');

let currentKB = 'arabic';

const data = {
  arabic: "ض ص ث ق ف غ ع ه خ ح ج د ش س ي ب ل ا ت ن م ك ط ا ل ب ي ؤ ء ئ ر ؤ ة و ز ظ".split(" "),
  html: ["<div>","</div>","<h1>","</h1>","<p>","</p>","<button>","</button>","<img>","<a>","</a>","<input>","<br>","<ul>","<li>"],
  css: ["color:","background:","font-size:","padding:","margin:","border:","border-radius:","display:flex;","text-align:center;","width:","height:","{","}",";"],
  js: ["function","let ","const ","if (","else","for (","return","console.log()","alert()","document.","getElementById","addEventListener","{","}",";"]
};

const lessons = [
  {title: "1️⃣ زر
