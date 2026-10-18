const GROUPS = [
  {name:'全部',icon:'✦'}, {name:'胸部',icon:'◉'}, {name:'背部',icon:'↖'}, {name:'肩部',icon:'◇'},
  {name:'手臂',icon:'⌁'}, {name:'核心',icon:'◎'}, {name:'腿部',icon:'⌑'}, {name:'臀部',icon:'◕'}, {name:'小腿',icon:'↟'}
];

const EXERCISES = [
  {id:'pushup',name:'伏地挺身',en:'Push-up',part:'胸部',equipment:'徒手',level:'入門',primary:'胸大肌',secondary:'肱三頭肌、前三角肌',pattern:'pushup',steps:['雙手略寬於肩，身體從頭到腳跟維持一直線。','彎曲手肘，讓胸口有控制地靠近地面。','推開地面回到起始位置，頂端不要聳肩。'],tip:'收緊腹部和臀部，避免腰部下垂。'},
  {id:'bench',name:'槓鈴臥推',en:'Barbell Bench Press',part:'胸部',equipment:'槓鈴',level:'中階',primary:'胸大肌',secondary:'肱三頭肌、前三角肌',pattern:'bench',steps:['躺穩長椅，雙腳踩地，肩胛骨向後下方收緊。','槓鈴有控制地降至胸部中下方附近。','向上推回肩膀正上方，手腕保持穩定。'],tip:'先用輕重量熟悉軌跡；可請夥伴協助保護。'},
  {id:'chestfly',name:'啞鈴飛鳥',en:'Dumbbell Chest Fly',part:'胸部',equipment:'啞鈴',level:'中階',primary:'胸大肌',secondary:'前三角肌',pattern:'fly',steps:['仰躺長椅，雙手持啞鈴於胸口上方，手肘微彎。','保持手肘角度，雙臂向兩側畫弧下降。','用胸部發力，沿弧線將啞鈴帶回上方。'],tip:'下降到胸部有伸展感即可，不必追求過大幅度。'},
  {id:'pullup',name:'引體向上',en:'Pull-up',part:'背部',equipment:'徒手',level:'進階',primary:'背闊肌',secondary:'肱二頭肌、菱形肌',pattern:'pulldown',steps:['正握單槓，雙手略寬於肩，讓肩膀保持穩定。','將手肘往身體兩側下拉，把胸口帶向單槓。','控制下降，回到手臂伸展的位置。'],tip:'避免甩腿借力；需要時可先用輔助帶。'},
  {id:'row',name:'啞鈴划船',en:'Dumbbell Row',part:'背部',equipment:'啞鈴',level:'入門',primary:'背闊肌',secondary:'菱形肌、肱二頭肌',pattern:'row',steps:['髖部向後折，背部保持平直，啞鈴自然下垂。','讓手肘沿身體兩側往後拉，啞鈴靠近腰部。','慢慢放下啞鈴，保持軀幹穩定。'],tip:'想像用手肘帶動重量，避免聳肩。'},
  {id:'latpull',name:'滑輪下拉',en:'Lat Pulldown',part:'背部',equipment:'器械',level:'入門',primary:'背闊肌',secondary:'肱二頭肌、下斜方肌',pattern:'pulldown',steps:['坐穩並固定大腿，雙手握住比肩略寬的把手。','肩膀下沉，手肘向下向後，將把手拉向上胸。','緩慢伸直手臂，讓背部充分延展。'],tip:'避免身體大幅後仰，用背部帶動下拉。'},
  {id:'shoulderpress',name:'啞鈴肩推',en:'Dumbbell Shoulder Press',part:'肩部',equipment:'啞鈴',level:'入門',primary:'前三角肌、中三角肌',secondary:'肱三頭肌',pattern:'press',steps:['啞鈴放在耳朵兩側，手肘略在手腕下方。','向上推至手臂接近伸直，保持肋骨收好。','有控制地降回肩膀高度。'],tip:'不要過度拱腰；可坐姿進行以利穩定。'},
  {id:'lateralraise',name:'啞鈴側平舉',en:'Lateral Raise',part:'肩部',equipment:'啞鈴',level:'入門',primary:'中三角肌',secondary:'上斜方肌',pattern:'lateral',steps:['站穩，雙手持啞鈴置於身側，手肘微彎。','手臂向外側抬起至接近肩高。','控制下降，避免重量直接掉回起點。'],tip:'選能控制的重量，避免身體搖擺借力。'},
  {id:'facepull',name:'滑輪面拉',en:'Cable Face Pull',part:'肩部',equipment:'器械',level:'中階',primary:'後三角肌',secondary:'菱形肌、旋轉肌群',pattern:'facepull',steps:['滑輪設在上胸到臉部高度，雙手握住繩索。','將繩索拉向臉部兩側，同時讓手肘向外打開。','緩慢回到手臂伸展位置。'],tip:'保持肩膀遠離耳朵，讓肩胛骨自然往後收。'},
  {id:'curl',name:'啞鈴彎舉',en:'Dumbbell Biceps Curl',part:'手臂',equipment:'啞鈴',level:'入門',primary:'肱二頭肌',secondary:'肱肌、肱橈肌',pattern:'curl',steps:['站直，啞鈴自然垂於身側，手肘靠近軀幹。','彎曲手肘，把啞鈴帶向肩膀。','緩慢放下，保持上臂位置固定。'],tip:'避免晃動軀幹或用肩膀甩起重量。'},
  {id:'tricep',name:'滑輪下壓',en:'Triceps Pushdown',part:'手臂',equipment:'器械',level:'入門',primary:'肱三頭肌',secondary:'前臂肌群',pattern:'pushdown',steps:['面向滑輪，手肘貼近身體兩側。','伸直手肘，將把手向下推至大腿附近。','控制把手回升，手肘維持固定。'],tip:'上臂保持穩定，主要讓前臂移動。'},
  {id:'hammer',name:'槌式彎舉',en:'Hammer Curl',part:'手臂',equipment:'啞鈴',level:'入門',primary:'肱肌、肱橈肌',secondary:'肱二頭肌',pattern:'curl',steps:['雙手持啞鈴，掌心彼此相對。','保持手腕中立，彎曲手肘帶起啞鈴。','慢慢放回起點，避免身體後仰。'],tip:'手肘維持在身側，不必把啞鈴抬到太高。'},
  {id:'plank',name:'平板撐',en:'Forearm Plank',part:'核心',equipment:'徒手',level:'入門',primary:'腹橫肌、腹直肌',secondary:'腹斜肌、臀大肌',pattern:'plank',steps:['手肘置於肩膀正下方，前臂平放地面。','收緊腹部與臀部，從頭到腳跟維持直線。','穩定呼吸，維持姿勢後放鬆。'],tip:'以能維持正確姿勢的時間為主，不需要硬撐。'},
  {id:'crunch',name:'捲腹',en:'Crunch',part:'核心',equipment:'徒手',level:'入門',primary:'腹直肌',secondary:'腹斜肌',pattern:'crunch',steps:['仰躺屈膝，雙腳平放地面，雙手輕放耳側。','吐氣時將肩胛骨離地，讓胸口靠近骨盆。','慢慢放下，保持頸部自然。'],tip:'不要拉扯頸部，專注讓腹部收縮。'},
  {id:'deadbug',name:'死蟲式',en:'Dead Bug',part:'核心',equipment:'徒手',level:'入門',primary:'腹橫肌',secondary:'腹直肌、髂腰肌',pattern:'deadbug',steps:['仰躺，雙手伸向天花板，髖膝約呈 90 度。','慢慢伸出一側手臂與對側腿，腰背保持穩定。','回到中央，換邊重複。'],tip:'若腰部離地，就縮小手腳伸展幅度。'},
  {id:'squat',name:'徒手深蹲',en:'Bodyweight Squat',part:'腿部',equipment:'徒手',level:'入門',primary:'股四頭肌',secondary:'臀大肌、腿後肌群',pattern:'squat',steps:['雙腳約與肩同寬，腳尖自然朝外。','髖部向後向下坐，膝蓋朝腳尖方向移動。','踩穩全腳掌，起身回到站姿。'],tip:'保持腳跟貼地；蹲到能穩定控制的深度。'},
  {id:'goblet',name:'高腳杯深蹲',en:'Goblet Squat',part:'腿部',equipment:'啞鈴',level:'入門',primary:'股四頭肌',secondary:'臀大肌、核心肌群',pattern:'squat',steps:['雙手把啞鈴握在胸前，雙腳略寬於肩。','保持胸口打開，髖膝同時彎曲向下。','全腳掌發力站起，啞鈴保持靠近身體。'],tip:'讓手肘自然落在膝蓋內側，避免腰背彎曲。'},
  {id:'lunge',name:'反向弓步',en:'Reverse Lunge',part:'腿部',equipment:'徒手',level:'入門',primary:'股四頭肌',secondary:'臀大肌、腿後肌群',pattern:'lunge',steps:['站直，雙腳與髖同寬。','一腳向後跨，雙膝彎曲下降至可控制的深度。','前腳踩地站回，換腳重複。'],tip:'前膝朝腳尖方向，軀幹保持穩定。'},
  {id:'hipthrust',name:'臀推',en:'Hip Thrust',part:'臀部',equipment:'徒手',level:'入門',primary:'臀大肌',secondary:'腿後肌群、核心肌群',pattern:'bridge',steps:['上背靠穩長椅邊緣，雙腳踩地，膝蓋彎曲。','用腳跟向下踩並伸髖，讓臀部向上推。','頂端收緊臀部，再控制下降。'],tip:'頂端保持肋骨收好，避免腰部過度拱起。'},
  {id:'rdl',name:'啞鈴羅馬尼亞硬舉',en:'Dumbbell Romanian Deadlift',part:'臀部',equipment:'啞鈴',level:'中階',primary:'臀大肌、腿後肌群',secondary:'豎脊肌',pattern:'hinge',steps:['站穩，啞鈴放在大腿前側，膝蓋微彎。','髖部向後推，啞鈴沿腿部下降，背部維持平直。','感覺腿後側伸展後，伸髖站直。'],tip:'動作來自髖部折疊，不要刻意把啞鈴碰到地面。'},
  {id:'glutebridge',name:'臀橋',en:'Glute Bridge',part:'臀部',equipment:'徒手',level:'入門',primary:'臀大肌',secondary:'腿後肌群',pattern:'bridge',steps:['仰躺屈膝，雙腳約與髖同寬平放地面。','腳跟發力，將髖部抬起至肩、髖、膝接近一直線。','頂端稍作停頓，緩慢下降。'],tip:'保持骨盆穩定，不要用腰部代償。'},
  {id:'calfraise',name:'站姿提踵',en:'Standing Calf Raise',part:'小腿',equipment:'徒手',level:'入門',primary:'腓腸肌',secondary:'比目魚肌',pattern:'calf',steps:['站穩，腳掌與髖同寬，可扶牆保持平衡。','腳掌前端發力，將腳跟慢慢抬高。','頂端稍作停頓，再控制腳跟下降。'],tip:'不要彈震；全程保持腳踝穩定。'},
  {id:'seatedcalf',name:'坐姿提踵',en:'Seated Calf Raise',part:'小腿',equipment:'器械',level:'入門',primary:'比目魚肌',secondary:'腓腸肌',pattern:'seatedcalf',steps:['坐穩，前腳掌踩在踏板上，膝蓋自然彎曲。','腳掌向下踩，抬高腳跟。','緩慢下降腳跟，感受小腿伸展。'],tip:'避免用身體彈起重量；維持穩定節奏。'},
  {id:'singlecalf',name:'單腳提踵',en:'Single-leg Calf Raise',part:'小腿',equipment:'徒手',level:'中階',primary:'腓腸肌',secondary:'比目魚肌、踝部穩定肌群',pattern:'calf',steps:['單腳站立，輕扶牆面維持平衡。','前腳掌用力，緩慢抬高腳跟。','控制下降至起始位置，再換腳。'],tip:'左右腳分別練習，優先保持完整可控的幅度。'}
];

const $ = s => document.querySelector(s);
const grid = $('#exercise-grid');
let activePart = '全部', activeEquipment = 'all', query = '', selectedId = null, priorFocus = null;

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

// The figures are deliberately simplified, three-stage posture diagrams rather than recorded video.
const BASE = {head:[80,25],neck:[80,45],hip:[80,85],ls:[68,48],rs:[92,48],le:[59,70],re:[101,70],lw:[58,97],rw:[102,97],lk:[68,112],rk:[92,112],la:[65,146],ra:[95,146]};
function pose(pattern,frame){
  const p=JSON.parse(JSON.stringify(BASE)); const mid=frame===1, end=frame===2;
  if(pattern==='squat'){if(mid){Object.assign(p,{hip:[80,100],lk:[53,118],rk:[107,118],la:[50,146],ra:[110,146],lw:[64,65],rw:[96,65]})}else{p.lw=[68,69];p.rw=[92,69]}}
  if(pattern==='lunge'){if(mid){Object.assign(p,{hip:[77,91],lk:[50,109],rk:[109,124],la:[48,146],ra:[119,146],lw:[66,72],rw:[94,72]})}else{p.lw=[66,74];p.rw=[94,74]}}
  if(pattern==='hinge'||pattern==='row'){Object.assign(p,{head:[88,45],neck:[80,57],ls:[67,60],rs:[91,60],hip:[57,92],lk:[58,116],rk:[80,116],la:[56,146],ra:[82,146],le:[69,79],re:[96,79],lw:[71,108],rw:[102,108]});if(mid||end){p.hip=[45,94];p.head=[98,63];p.neck=[87,70];p.ls=[73,73];p.rs=[96,73];p.le=[75,93];p.re=[99,93];p.lw=[76,117];p.rw=[101,117]}if(pattern==='row'&&mid){p.le=[59,83];p.re=[84,83];p.lw=[51,96];p.rw=[77,96]}}
  if(pattern==='press'){p.le=[58,53];p.re=[102,53];p.lw=[56,28];p.rw=[104,28];if(mid){p.le=[60,40];p.re=[100,40];p.lw=[64,12];p.rw=[96,12]}}
  if(pattern==='lateral'){p.le=[53,70];p.re=[107,70];p.lw=[52,92];p.rw=[108,92];if(mid){p.le=[43,48];p.re=[117,48];p.lw=[23,48];p.rw=[137,48]}}
  if(pattern==='curl'){if(mid){p.le=[62,72];p.re=[98,72];p.lw=[64,49];p.rw=[96,49]}}
  if(pattern==='pushdown'){p.le=[63,66];p.re=[97,66];p.lw=[65,45];p.rw=[95,45];if(mid){p.lw=[61,95];p.rw=[99,95]}}
  if(pattern==='pulldown'){p.le=[44,27];p.re=[116,27];p.lw=[43,5];p.rw=[117,5];if(mid){p.le=[53,48];p.re=[107,48];p.lw=[66,50];p.rw=[94,50]}}
  if(pattern==='facepull'){p.le=[45,58];p.re=[115,58];p.lw=[38,54];p.rw=[122,54];if(mid){p.le=[48,41];p.re=[112,41];p.lw=[67,34];p.rw=[93,34]}}
  if(pattern==='calf'){if(mid){p.la=[65,136];p.ra=[95,136];p.lk=[68,107];p.rk=[92,107]}}
  if(pattern==='seatedcalf'){Object.assign(p,{head:[80,29],neck:[80,49],ls:[68,52],rs:[92,52],hip:[80,88],lk:[108,92],rk:[111,93],la:[126,137],ra:[133,137],lw:[102,84],rw:[106,84]});if(mid){p.la=[132,124];p.ra=[138,124]}}
  if(['pushup','plank','bench','fly','bridge','crunch','deadbug'].includes(pattern)){
    Object.assign(p,{head:[27,69],neck:[44,70],ls:[51,70],rs:[56,76],hip:[100,76],lk:[129,81],rk:[132,88],la:[151,84],ra:[151,91],le:[60,96],re:[68,98],lw:[65,119],rw:[74,119]});
    if(pattern==='pushup'&&mid){p.head=[27,88];p.neck=[44,88];p.ls=[51,88];p.rs=[56,94];p.hip=[100,91];p.le=[57,104];p.re=[65,108]}
    if(pattern==='plank'){p.head=[27,91];p.neck=[44,91];p.ls=[51,91];p.rs=[56,97];p.hip=[100,95];p.le=[60,108];p.re=[67,110];p.lw=[75,119];p.rw=[84,119]}
    if(pattern==='bench'||pattern==='fly'){Object.assign(p,{head:[28,80],neck:[44,82],ls:[53,82],rs:[58,86],hip:[99,85],lk:[119,103],rk:[126,108],la:[121,137],ra:[130,137],le:[54,55],re:[72,55],lw:[58,28],rw:[80,28]});if(mid){if(pattern==='bench'){p.le=[53,66];p.re=[72,66];p.lw=[58,55];p.rw=[80,55]}else{p.le=[45,56];p.re=[87,56];p.lw=[31,48];p.rw=[101,48]}}}
    if(pattern==='bridge'){Object.assign(p,{head:[27,100],neck:[43,100],ls:[51,99],rs:[57,104],hip:[94,103],lk:[121,86],rk:[126,91],la:[137,136],ra:[142,136],le:[60,113],re:[67,115],lw:[77,119],rw:[83,119]});if(mid){p.hip=[92,67];p.ls=[51,94];p.rs=[57,99]}}
    if(pattern==='crunch'){Object.assign(p,{head:[29,101],neck:[44,100],ls:[51,100],rs:[57,105],hip:[96,105],lk:[119,79],rk:[124,84],la:[136,133],ra:[141,133],le:[46,86],re:[54,89],lw:[42,77],rw:[50,79]});if(mid){p.head=[43,72];p.neck=[57,80];p.ls=[64,84];p.rs=[68,88]}}
    if(pattern==='deadbug'){Object.assign(p,{head:[28,112],neck:[44,111],ls:[53,110],rs:[58,113],hip:[99,112],lk:[117,76],rk:[122,79],la:[128,55],ra:[134,57],le:[57,83],re:[68,83],lw:[55,53],rw:[69,53]});if(mid){p.le=[35,81];p.lw=[21,55];p.rk=[135,101];p.ra=[151,104]}}
  }
  return p;
}
function fig(pattern,frame){
  const p=pose(pattern,frame), line=(a,b,w=7,color='#334b3c')=>`<line x1="${p[a][0]}" y1="${p[a][1]}" x2="${p[b][0]}" y2="${p[b][1]}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
  let s=`<svg viewBox="0 0 160 160" aria-hidden="true"><path d="M12 145H150" stroke="#bbd29d" stroke-width="2" stroke-linecap="round"/>`;
  if(['bench','fly'].includes(pattern))s+='<path d="M24 99H112M38 99V139M103 99V139" stroke="#92a886" stroke-width="4" stroke-linecap="round"/>';
  if(pattern==='bridge')s+='<path d="M27 116H60M35 116V141" stroke="#92a886" stroke-width="4"/>';
  if(pattern==='seatedcalf')s+='<path d="M52 100H89M60 100V139" stroke="#92a886" stroke-width="4"/>';
  if(pattern==='pulldown')s+='<path d="M28 10H132" stroke="#9bb671" stroke-width="4"/>';
  s+=line('neck','hip',13,'#8daa60')+line('ls','le')+line('le','lw')+line('rs','re')+line('re','rw')+line('hip','lk',10)+line('lk','la',9)+line('hip','rk',10)+line('rk','ra',9);
  s+=`<circle cx="${p.head[0]}" cy="${p.head[1]}" r="11" fill="#334b3c"/><circle cx="${p.hip[0]}" cy="${p.hip[1]}" r="5" fill="#8daa60"/>`;
  if(['curl','press','lateral','row','hinge','bench','fly','squat'].includes(pattern)){
    const y1=p.lw[1],y2=p.rw[1];s+=`<rect x="${p.lw[0]-9}" y="${y1-3}" width="18" height="6" rx="2" fill="#a8c765"/><rect x="${p.rw[0]-9}" y="${y2-3}" width="18" height="6" rx="2" fill="#a8c765"/>`;
  }
  return s+'</svg>';
}

function renderFilters(){
  $('#body-filters').innerHTML=GROUPS.map(g=>`<button type="button" class="filter-btn ${activePart===g.name?'active':''}" data-part="${g.name}" aria-pressed="${activePart===g.name}"><span class="filter-icon" aria-hidden="true">${g.icon}</span>${g.name}</button>`).join('');
}
function filtered(){return EXERCISES.filter(e=>(activePart==='全部'||e.part===activePart)&&(activeEquipment==='all'||e.equipment===activeEquipment)&&(!query||`${e.name} ${e.en} ${e.part} ${e.primary} ${e.secondary}`.toLowerCase().includes(query)));}
function renderGrid(){
  const list=filtered();renderFilters();$('#results-title').textContent=activePart==='全部'?'全部動作':`${activePart}動作`;
  $('#results-count').textContent=`顯示 ${list.length} / ${EXERCISES.length} 個動作`;
  grid.innerHTML=list.map((e)=>`<button type="button" class="exercise-card" data-id="${e.id}" aria-label="查看${e.name}動作介紹"><div class="card-top"><span>${esc(e.part.toUpperCase())} / ${esc(e.equipment)}</span><span class="card-arrow" aria-hidden="true">↗</span></div><div class="card-visual">${fig(e.pattern,1)}</div><h4>${esc(e.name)}</h4><p class="card-en">${esc(e.en)}</p><div class="card-bottom"><span>主要肌群 · ${esc(e.primary.split('、')[0])}</span><span>${esc(e.level)}</span></div></button>`).join('');
  $('#empty').hidden=list.length!==0;
}
function openDetail(id){
  const e=EXERCISES.find(x=>x.id===id);if(!e)return;selectedId=id;priorFocus=document.activeElement;
  const stages=['起始姿勢','動作中','回到起點'];
  $('#detail-content').innerHTML=`<div class="detail-kicker">MOVEMENT GUIDE / ${esc(e.part.toUpperCase())}</div><h2 class="detail-title" id="detail-title">${esc(e.name)}</h2><p class="detail-en">${esc(e.en)}</p><div class="detail-tags"><span>${esc(e.part)}</span><span>${esc(e.equipment)}</span><span>${esc(e.level)}</span></div><div class="detail-section"><div class="detail-section-head"><h3>動作模式</h3><span>THE MOVEMENT</span></div><p class="pose-note">三階段姿勢示意；請配合下方步驟閱讀。</p><div class="pose-grid">${stages.map((st,i)=>`<div class="pose-card">${fig(e.pattern,i)}<strong>${st}</strong><span>0${i+1} / 03</span></div>`).join('')}</div></div><div class="detail-section"><div class="detail-section-head"><h3>針對肌群</h3><span>TARGET MUSCLES</span></div><div class="muscle-row"><div class="muscle-box primary"><small>主要肌群</small><strong>${esc(e.primary)}</strong></div><div class="muscle-box secondary"><small>輔助肌群</small><strong>${esc(e.secondary)}</strong></div></div></div><div class="detail-section"><div class="detail-section-head"><h3>怎麼做</h3><span>STEP BY STEP</span></div><ol class="steps-list">${e.steps.map((s,i)=>`<li><span>0${i+1}</span><div>${esc(s)}</div></li>`).join('')}</ol><div class="tip"><strong>FORM TIP ↗</strong>${esc(e.tip)}</div></div><div class="detail-nav"><button type="button" id="next-exercise">看下一個動作 ↗</button><span class="detail-index">${String(EXERCISES.indexOf(e)+1).padStart(2,'0')} / ${EXERCISES.length}</span></div>`;
  $('#detail-overlay').hidden=false;document.body.classList.add('modal-open');$('.detail-panel').scrollTop=0;$('.detail-panel').focus();
}
function closeDetail(){if($('#detail-overlay').hidden)return;$('#detail-overlay').hidden=true;document.body.classList.remove('modal-open');selectedId=null;if(priorFocus&&priorFocus.isConnected)priorFocus.focus();}

$('#exercise-count').textContent=EXERCISES.length;
renderGrid();
$('#body-filters').addEventListener('click',e=>{const b=e.target.closest('[data-part]');if(!b)return;activePart=b.dataset.part;renderGrid();});
$('#search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();renderGrid();});
$('#equipment').addEventListener('change',e=>{activeEquipment=e.target.value;renderGrid();});
$('#reset-filters').addEventListener('click',()=>{activePart='全部';activeEquipment='all';query='';$('#search').value='';$('#equipment').value='all';renderGrid();});
grid.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openDetail(b.dataset.id);});
$('#close-detail').addEventListener('click',closeDetail);
$('#detail-overlay').addEventListener('click',e=>{if(e.target.dataset.close)closeDetail();});
$('#detail-content').addEventListener('click',e=>{if(e.target.closest('#next-exercise')&&selectedId){const i=EXERCISES.findIndex(x=>x.id===selectedId);openDetail(EXERCISES[(i+1)%EXERCISES.length].id);}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail();if(e.key==='Tab'&&!$('#detail-overlay').hidden){const nodes=[...$('.detail-panel').querySelectorAll('button')];const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
