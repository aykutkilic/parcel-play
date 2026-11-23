var P={mode:null,link:null,host:null,who:"",name:"",code:"",inRoom:!1,room:null,game:null,you:"",clockSkew:0,status:"",rooms:null,homeError:""};function Be(i){P.link&&!P.link.closed&&P.link.send(i)}var Ye=i=>Be({t:"act",a:i}),wp=()=>{},Nh=i=>{wp=i};function x(i,e,...t){let[n,...r]=i.split("."),s=document.createElement(n||"div");r.length&&(s.className=r.join(" ")),e&&(typeof e!="object"||e instanceof Node||Array.isArray(e))&&(t.unshift(e),e=null);for(let[o,l]of Object.entries(e||{}))if(!(l==null||l===!1))if(o.startsWith("on"))s.addEventListener(o.slice(2),l);else if(o==="style"&&typeof l=="object")for(let[c,h]of Object.entries(l))c.startsWith("--")?s.style.setProperty(c,h):s.style[c]=h;else o==="class"?s.className+=(s.className?" ":"")+l:o in s&&typeof l!="string"?s[o]=l:s.setAttribute(o,l===!0?"":l);let a=o=>{o==null||o===!1||(Array.isArray(o)?o.forEach(a):s.appendChild(o instanceof Node?o:document.createTextNode(String(o))))};return t.forEach(a),s}function xt(i,...e){for(let t of e.flat(1/0))t!=null&&t!==!1&&i.append(t);return i}function En(i,...e){return i.replaceChildren(),xt(i,...e)}function Mt(i,e=""){let t=document.getElementById("toasts"),n=x("div.toast",{class:e},i);t.appendChild(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),3700)}var be=i=>`${i<0?"\u2212":""}$${Math.abs(Math.round(i)).toLocaleString("en-US")}`,kt=i=>P.game?P.game.players.find(e=>e.id===i):null,An=()=>kt(P.you),Tp=i=>P.room?P.room.members.find(e=>e.id===i):null,Hi=()=>!!P.room&&P.room.host===P.you,Rs=i=>(kt(i)||Tp(i)||{}).name||"someone",Vi=()=>Object.fromEntries([...P.room?P.room.members:[],...P.game?P.game.players:[]].map(i=>[i.id,i.name])),mn={boat:"\u26F5",kite:"\u{1FA81}",lantern:"\u{1F3EE}",anchor:"\u2693",tram:"\u{1F68B}",gem:"\u{1F48E}"},Ep=()=>Date.now()+P.clockSkew;function Gi(i=P.code){let e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",i),new URLSearchParams(location.search).has("p2p")&&e.searchParams.set("p2p","1"),e.toString()}function qn(i,{onclose:e,wide:t}={}){let n=document.getElementById("modal"),r=()=>{s.remove(),e&&e()},s=x("div.modal-wrap",{onpointerdown:a=>{a.target===s&&r()}},x("div.modal",{class:t?"wide":""},x("button.x",{onclick:r,title:"Close"},"\u2715"),i));return n.appendChild(s),{el:s,close:r}}var Ap={pays:"pay",starts:"start",lands:"land",passes:"pass",buys:"buy",builds:"build",rolls:"roll",is:"are",draws:"draw"};function Wi(i){let e=i.replace(/\byou (pays|starts|lands|passes|buys|builds|rolls|is|draws)\b/g,(t,n)=>`you ${Ap[n]}`);return e.charAt(0).toUpperCase()+e.slice(1)}function fo(i,e,t="text"){return t==="bar"?x("div.timerbar",{"data-deadline":i,"data-total":e},x("i")):x("span.cd",{"data-deadline":i,"data-total":e})}function Rp(){let i=Ep();for(let e of document.querySelectorAll("[data-deadline]")){let t=Math.max(0,Number(e.dataset.deadline)-i),n=Math.min(1,t/Math.max(1,Number(e.dataset.total)));if(e.classList.contains("timerbar"))e.firstChild.style.width=`${n*100}%`,e.classList.toggle("low",t<2500);else if(e.classList.contains("ring")){let r=e.querySelector(".ring-fg");r&&(r.style.strokeDashoffset=String(282.7*(1-n)));let s=e.querySelector(".ring-t");s&&(s.textContent=Math.ceil(t/1e3)),e.classList.toggle("low",t<3500)}else e.textContent=` ${Math.ceil(t/1e3)}`}}setInterval(Rp,100);var ji=class{constructor(){this.onmessage=null,this.onclose=null,this.closed=!1}deliver(e){!this.closed&&this.onmessage&&this.onmessage(e)}ended(){this.closed||(this.closed=!0,this.onclose&&this.onclose())}},go=class extends ji{constructor(e){super(),this.ws=e,e.onmessage=t=>{try{this.deliver(JSON.parse(t.data))}catch{}},e.onclose=()=>this.ended(),e.onerror=()=>{}}send(e){this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}close(){this.closed=!0;try{this.ws.close()}catch{}}};function vo(i=2500){return new Promise(e=>{let t;try{let r=location.protocol==="https:"?"wss:":"ws:";t=new WebSocket(`${r}//${location.host}${location.pathname.replace(/[^/]*$/,"")}ws`)}catch{e(null);return}let n=setTimeout(()=>{try{t.close()}catch{}e(null)},i);t.onopen=()=>{clearTimeout(n),e(new go(t))},t.onerror=()=>{clearTimeout(n),e(null)},t.onclose=()=>{clearTimeout(n),e(null)}})}function Dh(){let i="";try{i=sessionStorage.getItem("parcel.who")||""}catch{}if(!/^[a-z0-9]{12,32}$/.test(i)){let e=new Uint8Array(16);crypto.getRandomValues(e),i=Array.from(e,t=>"abcdefghijkmnpqrstuvwxyz23456789"[t&31]).join("");try{sessionStorage.setItem("parcel.who",i)}catch{}}return i}var Ge={clay:{name:"Old Town",color:"#9a6b4f",build:50},sky:{name:"Windward",color:"#6fc3e8",build:50},rose:{name:"Bazaar",color:"#d9649b",build:100},amber:{name:"Docklands",color:"#ef9a2e",build:100},scarlet:{name:"Arts Quarter",color:"#e04b3a",build:150},lemon:{name:"Vine Hills",color:"#f0d23f",build:150},jade:{name:"Greenbelt",color:"#36a86a",build:200},indigo:{name:"Waterfront",color:"#4757c9",build:200},transit:{name:"Transit",color:"#3b3f46",build:0},utility:{name:"Utilities",color:"#8a95a5",build:0}};function Cp(i){let e=Math.max(4,Math.round(i*.07)),t=n=>Math.max(5,Math.round(n/5)*5);return[e,t(e*5),t(e*15),t(e*40),t(e*55),t(e*70)]}var lt=(i,e,t)=>({kind:"lot",name:i,group:e,price:t,rents:Cp(t)}),Cs=i=>({kind:"transit",name:i,group:"transit",price:200}),Oh=i=>({kind:"utility",name:i,group:"utility",price:150}),ue=[{kind:"start",name:"Start",note:"Collect $200"},lt("Tanner's Lane","clay",60),{kind:"card",deck:"gazette",name:"Gazette"},lt("Brick Row","clay",80),{kind:"tax",name:"Income Levy",amount:200},Cs("North Ferry"),lt("Kite Hill","sky",100),{kind:"card",deck:"fortune",name:"Fortune"},lt("Windmill Way","sky",100),lt("Weathervane Rd","sky",120),{kind:"jail",name:"Lockup",note:"Just visiting"},lt("Lantern Market","rose",140),Oh("Solar Farm"),lt("Silk Arcade","rose",150),lt("Spice Bazaar","rose",160),Cs("Tram Depot"),lt("Foundry Yard","amber",180),{kind:"card",deck:"gazette",name:"Gazette"},lt("Copper Quay","amber",190),lt("Anchor Street","amber",200),{kind:"park",name:"Plaza",note:"Take a break"},lt("Opera Steps","scarlet",220),{kind:"card",deck:"fortune",name:"Fortune"},lt("Gallery Walk","scarlet",230),lt("Theatre Square","scarlet",240),Cs("Cable Car"),lt("Sunflower Terrace","lemon",260),lt("Orchard Rise","lemon",270),Oh("Waterworks"),lt("Vineyard Crest","lemon",280),{kind:"gotojail",name:"Busted!",note:"Go to Lockup"},lt("Observatory Park","jade",300),lt("Botanic Gardens","jade",310),{kind:"card",deck:"gazette",name:"Gazette"},lt("Glasshouse Mile","jade",330),Cs("Airfield"),{kind:"card",deck:"fortune",name:"Fortune"},lt("Lighthouse Point","indigo",360),{kind:"tax",name:"Yacht Tax",amount:100},lt("Skyline Pier","indigo",400)];ue.forEach((i,e)=>{i.index=e});var zr=[0,25,50,100,200],Yn=[0,4,10],fn=i=>i.kind==="lot"||i.kind==="transit"||i.kind==="utility",Rn=i=>ue.filter(e=>e.group===i).map(e=>e.index),Cn=i=>Math.floor(i.price/2),mi=i=>Math.ceil(Cn(i)*1.1),Ps={fortune:[{text:"Hop on the express: advance to Start.",do:"goto",tile:0},{text:"Gallery opening! Advance to Theatre Square.",do:"goto",tile:24},{text:"Sunset stroll: advance to Skyline Pier.",do:"goto",tile:39},{text:"Catch the next ride: advance to the nearest transit stop and pay its owner double.",do:"nearest",kind:"transit"},{text:"Meter reading: advance to the nearest utility. If owned, pay 10\xD7 the dice.",do:"nearest",kind:"utility"},{text:"Wrong turn. Go back 3 spaces.",do:"back",n:3},{text:"Caught jaywalking: go straight to Lockup.",do:"jail"},{text:"Your startup pays a dividend. Collect $60.",do:"gain",amount:60},{text:"Parking ticket. Pay $25.",do:"lose",amount:25},{text:"Facade inspection: pay $30 per floor and $120 per tower.",do:"repairs",floor:30,tower:120},{text:"Elected harbour master: pay every player $40.",do:"payEach",amount:40},{text:"Crowdfunding success. Collect $120.",do:"gain",amount:120},{text:"A friendly lawyer: keep this card to leave Lockup for free.",do:"freeCard"}],gazette:[{text:"Tax office rounding error in your favour. Collect $30.",do:"gain",amount:30},{text:"You win the harbour regatta. Collect $180.",do:"gain",amount:180},{text:"Dentist appointment. Pay $60.",do:"lose",amount:60},{text:"It's your birthday! Collect $15 from every player.",do:"collectEach",amount:15},{text:"A distant aunt leaves you $100.",do:"gain",amount:100},{text:"Storm insurance premium. Pay $40.",do:"lose",amount:40},{text:"Spotted in a bar fight: go straight to Lockup.",do:"jail"},{text:"The mayor owes you one: keep this card to leave Lockup for free.",do:"freeCard"},{text:"Early train home: advance to Start.",do:"goto",tile:0},{text:"Pavement levy: pay $35 per floor and $110 per tower.",do:"repairs",floor:35,tower:110},{text:"Consulting gig. Collect $25.",do:"gain",amount:25},{text:"You sell some old shares. Collect $50.",do:"gain",amount:50}]},Hr=["boat","kite","lantern","anchor","tram","gem"],Vr=["#e4574b","#3f88e6","#f2b632","#43b56b","#a65fd6","#ef7fb3"];var fi={turn:{label:"starts a turn",where:!1,owner:!1,amount:!1},land:{label:"lands on",where:!0,owner:!1,amount:!1},passStart:{label:"passes Start",where:!1,owner:!1,amount:!0},rent:{label:"pays rent",where:!0,owner:!0,amount:!0},buy:{label:"buys",where:!0,owner:!1,amount:!0},build:{label:"builds on",where:!0,owner:!1,amount:!0},tax:{label:"pays tax",where:!1,owner:!1,amount:!0},doubles:{label:"rolls doubles",where:!1,owner:!1,amount:!1},jail:{label:"is sent to Lockup",where:!1,owner:!1,amount:!1},card:{label:"draws a card",where:!1,owner:!1,amount:!1}},Gr=6,Pp=5e3,Ip=100,Lp=99,Up=99,yo=(i,e,t)=>e.includes(i)?i:t;function kh(i){if(!i||typeof i!="object")return null;let e=fi[i.event];if(!e)return null;let t=yo(i.payer,["from","to"],null);if(!t)return null;let n="any";if(e.where&&typeof i.where=="string"){let l=/^(t):(\d+)$|^(g):([a-z]+)$/.exec(i.where);l&&l[1]&&ue[+l[2]]?n=`t:${+l[2]}`:l&&l[3]&&Ge[l[4]]&&(n=`g:${l[4]}`)}let r=e.amount&&i.kind==="percent"?"percent":"fixed",s=r==="percent"?Ip:Pp,a=Math.round(Number(i.value));if(!Number.isFinite(a)||a<1||a>s)return null;let o=(l,c)=>{let h=Math.round(Number(l));return Number.isFinite(h)?Math.min(c,Math.max(0,h)):0};return{payer:t,event:i.event,actor:yo(i.actor,["payer","payee","any"],"any"),where:n,owner:e.owner?yo(i.owner,["payer","payee","any"],"any"):"any",kind:r,value:a,times:o(i.times,Lp),rounds:o(i.rounds,Up)}}function Fh(i,e,t,n,r){let s=e.payer==="from"?t:n,a=s===t?n:t,o=l=>l==="payer"?s:l==="payee"?a:null;return{id:i,payer:s,payee:a,event:e.event,actor:o(e.actor),where:e.where,owner:o(e.owner),kind:e.kind,value:e.value,timesLeft:e.times||null,untilRound:e.rounds?r+e.rounds-1:null,fired:0,paid:0,since:r}}function Np(i,e){return i==="any"?!0:e==null?!1:i.startsWith("t:")?+i.slice(2)===e:ue[e]&&ue[e].group===i.slice(2)}function Bh(i,e){return e.type!==i.event||i.actor!==null&&e.p!==i.actor||fi[i.event].where&&!Np(i.where,e.tile)||i.owner!==null&&e.owner!==i.owner?0:i.kind==="percent"?Math.floor((e.amount||0)*i.value/100):i.value}function Dp(i){return!i||i==="any"?"":i.startsWith("t:")?ue[+i.slice(2)].name:`any ${Ge[i.slice(2)].name} space`}function Pn(i,e,t,n){let r=i.payer==="from"||i.payer==="to",s=r?i.payer==="from"?t:n:i.payer,a=r?s===t?n:t:i.payee,o=_=>r?_==="payer"?s:_==="payee"?a:null:_,l=_=>_==null?"anyone":e[_]||"someone",c=o(i.actor==="any"?null:i.actor),h=o(i.owner==="any"?null:i.owner),u=fi[i.event],d=i.kind==="percent"?`${i.value}% of it`:`$${i.value}`,p=`${l(c)} ${u.label}`,f=Dp(i.where);i.event==="rent"?(h!==null&&(p+=` to ${l(h)}`),f&&(p+=` on ${f}`)):u.where&&(p+=f?` ${f}`:i.event==="land"?" anything":" a space");let v=i.kind==="percent"&&i.event==="rent"?`${i.value}% of that rent`:d,m=`${l(s)} pays ${l(a)} ${v} each time ${p}`,g=r?i.times:i.timesLeft,y=[];return g&&y.push(r?`${g}\xD7`:`${g} left`),r&&i.rounds&&y.push(`for ${i.rounds} round${i.rounds>1?"s":""}`),!r&&i.untilRound&&y.push(`until round ${i.untilRound}`),y.length&&(m+=` (${y.join(", ")})`),m}var Is={cash:1500,auctions:!0,jackpot:!1,timer:5},wo=[1e3,1500,2e3,2500],To=[0,5,10,15,30,60],vi=2,In=6,Op=15e3,kp=6e3,zh=3,Hh=150;function Xr(i){let e=i&&typeof i=="object"?i:{};return{cash:wo.includes(Number(e.cash))?Number(e.cash):Is.cash,auctions:e.auctions===void 0?Is.auctions:!!e.auctions,jackpot:!!e.jackpot,timer:e.timer===void 0?Is.timer:To.includes(Number(e.timer))?Number(e.timer):Is.timer}}function jh(i){i.seed=i.seed+1831565813>>>0;let e=i.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}var Vh=i=>1+Math.floor(jh(i)*6);function _o(i,e){for(let t=e.length-1;t>0;t--){let n=Math.floor(jh(i)*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Xh(i,e,t=Math.random()*2**32>>>0){let n=Xr(e),r={v:1,seed:t>>>0,settings:n,phase:"play",winner:null,round:1,turn:0,dice:[1,1],t:null,players:[],props:{},auction:null,trades:[],contracts:[],nextId:1,pot:0,decks:{},deckPos:{},log:[],seq:0};r.players=_o(r,i.map(a=>({id:a.id,name:a.name,token:a.token,color:a.color,cash:n.cash,pos:0,inJail:!1,jailTurns:0,free:0,out:!1,debtTo:void 0})));for(let a of Object.keys(Ps))r.decks[a]=_o(r,Ps[a].map((o,l)=>l)),r.deckPos[a]=0;let s={s:r,events:[]};return Pe(s,`The game begins: ${r.players.map(a=>a.name).join(", ")}.`),Zh(s),r}var wt=(i,e)=>i.players.find(t=>t.id===e),Jn=i=>i.players[i.turn],Eo=i=>i.players.filter(e=>!e.out),xo=(i,e)=>e==null?"the bank":e==="pot"?"the Plaza pot":(wt(i,e)||{}).name||"?",ft=i=>`$${i}`;function Pe(i,e){let t=i.s;t.log.push({n:++t.seq,r:t.round,text:e}),t.log.length>Hh&&t.log.splice(0,t.log.length-Hh)}function Xe(i,e,t=!1){i.events.push(e),t&&Fp(i,e)}function $h(i){i&&i.cash>=0&&(i.debtTo=void 0)}function ut(i,e,t,n,r){let s=i.s;if(n=Math.floor(n),!(n>0))return 0;if(e==="pot")s.pot-=n;else if(e!==null){let a=wt(s,e);a.cash-=n,a.cash<0&&(a.debtTo=t!==null&&t!=="pot"?t:null)}if(t==="pot")s.pot+=n;else if(t!==null){let a=wt(s,t);a.cash+=n,$h(a)}return Xe(i,{type:"pay",from:e,to:t,amount:n,reason:r}),n}var gi=(i,e,t)=>i.props[t]&&i.props[t].owner===e,Xi=(i,e)=>i.props[e]?i.props[e].level:0,qh=(i,e,t)=>Rn(t).every(n=>gi(i,e,n)),Yh=(i,e)=>Rn(e).some(t=>Xi(i,t)>0);function qi(i,e,t,n={}){let r=ue[e],s=i.props[e];if(!s||s.mortgaged)return 0;if(r.kind==="lot")return s.level>0?r.rents[s.level]:qh(i,s.owner,r.group)?r.rents[0]*2:r.rents[0];let a=Rn(r.group).filter(o=>gi(i,s.owner,o)).length;return r.kind==="transit"?zr[a]*(n.mult||1):r.kind==="utility"?(n.utilMult||Yn[a])*t:0}function Yi(i,e){let t=wt(i,e);if(!t||t.out)return 0;let n=t.cash;for(let[r,s]of Object.entries(i.props)){if(s.owner!==e)continue;let a=ue[r];n+=s.mortgaged?0:Cn(a),s.level&&(n+=s.level*Ge[a.group].build/2)}return n}function Fp(i,e){let t=i.s;if(!t.contracts.length)return;let n=!1;for(let r of t.contracts){if(r.timesLeft===0||r.untilRound&&t.round>r.untilRound)continue;let s=Bh(r,e);if(s<=0)continue;let a=wt(t,r.payer),o=wt(t,r.payee);!a||!o||a.out||o.out||(ut(i,r.payer,r.payee,s,"contract"),r.fired++,r.paid+=s,r.timesLeft&&(r.timesLeft--,r.timesLeft===0&&(n=!0)),Xe(i,{type:"contract",id:r.id,from:r.payer,to:r.payee,amount:s}),Pe(i,`Clause #${r.id}: ${a.name} pays ${o.name} ${ft(s)}.`))}n&&Jh(i)}function Jh(i){let e=i.s;e.contracts=e.contracts.filter(t=>{let n=t.timesLeft===0||t.untilRound&&e.round>t.untilRound;return n&&(Xe(i,{type:"contractEnd",id:t.id}),Pe(i,`Clause #${t.id} between ${xo(e,t.payer)} and ${xo(e,t.payee)} has run its course.`)),!n})}function Zh(i){let e=i.s,t=Jn(e);e.t={rolled:!1,doubles:0,again:!1,pending:null},Xe(i,{type:"turn",p:t.id},!0)}function Kh(i){let e=i.s,t=e.players.length,n=!1,r=e.turn;for(let s=1;s<=t;s++){let a=(e.turn+s)%t;if(e.turn+s>=t&&(n=!0),!e.players[a].out){r=a;break}}n&&(e.round++,Pe(i,`\u2014 Round ${e.round} \u2014`),Jh(i)),e.turn=r,Zh(i)}function $i(i,e,t,n={}){let r=i.s,s=e.pos,a=((s+t)%40+40)%40;e.pos=a,Xe(i,{type:"move",p:e.id,from:s,to:a,steps:t}),t>0&&s+t>=40&&(ut(i,null,e.id,200,"salary"),Pe(i,`${e.name} passes Start and collects ${ft(200)}.`),Xe(i,{type:"passStart",p:e.id,amount:200},!0)),Bp(i,e,n)}function Ao(i,e){let t=i.s,n=e.pos;e.pos=10,e.inJail=!0,e.jailTurns=0,t.t&&Jn(t)===e&&(t.t.again=!1),Xe(i,{type:"move",p:e.id,from:n,to:10,steps:0,jump:!0}),Pe(i,`${e.name} is sent to Lockup.`),Xe(i,{type:"jail",p:e.id},!0)}function Bp(i,e,t){let n=i.s,r=e.pos,s=ue[r];if(Xe(i,{type:"land",p:e.id,tile:r},!0),!e.out)if(fn(s)){let a=n.props[r];if(!a)n.t.pending={kind:"buy",tile:r},Pe(i,`${e.name} lands on ${s.name} \u2013 for sale at ${ft(s.price)}.`);else if(a.owner!==e.id){let o=wt(n,a.owner);if(a.mortgaged){Pe(i,`${e.name} lands on ${s.name} \u2013 mortgaged, no rent.`);return}let l=qi(n,r,n.dice[0]+n.dice[1],t);ut(i,e.id,o.id,l,"rent"),Pe(i,`${e.name} pays ${o.name} ${ft(l)} rent for ${s.name}.`),Xe(i,{type:"rent",p:e.id,owner:o.id,tile:r,amount:l},!0)}else Pe(i,`${e.name} lands on their own ${s.name}.`)}else if(s.kind==="tax")ut(i,e.id,n.settings.jackpot?"pot":null,s.amount,"tax"),Pe(i,`${e.name} pays ${ft(s.amount)} ${s.name}.`),Xe(i,{type:"tax",p:e.id,tile:r,amount:s.amount},!0);else if(s.kind==="card")zp(i,e,s.deck);else if(s.kind==="gotojail")Ao(i,e);else if(s.kind==="park")if(n.settings.jackpot&&n.pot>0){let a=n.pot;ut(i,"pot",e.id,a,"jackpot"),Pe(i,`${e.name} takes the Plaza pot: ${ft(a)}!`)}else Pe(i,`${e.name} takes a break on the Plaza.`);else s.kind==="jail"?Pe(i,`${e.name} is just visiting Lockup.`):s.kind==="start"&&Pe(i,`${e.name} lands on Start.`)}function zp(i,e,t){let n=i.s;n.deckPos[t]>=n.decks[t].length&&(_o(n,n.decks[t]),n.deckPos[t]=0);let r=Ps[t][n.decks[t][n.deckPos[t]++]];Pe(i,`${e.name} draws ${t==="fortune"?"Fortune":"Gazette"}: \u201C${r.text}\u201D`),Xe(i,{type:"card",p:e.id,deck:t,text:r.text},!0);let s=Eo(n).filter(o=>o!==e),a=n.settings.jackpot?"pot":null;switch(r.do){case"goto":$i(i,e,(r.tile-e.pos+40)%40);break;case"nearest":{let o=1;for(;ue[(e.pos+o)%40].kind!==r.kind;)o++;$i(i,e,o,r.kind==="transit"?{mult:2}:{utilMult:10});break}case"back":$i(i,e,-r.n);break;case"jail":Ao(i,e);break;case"gain":ut(i,null,e.id,r.amount,"card");break;case"lose":ut(i,e.id,a,r.amount,"card");break;case"repairs":{let o=0,l=0;for(let c of Object.values(n.props))c.owner===e.id&&(c.level===5?l++:o+=c.level);ut(i,e.id,a,o*r.floor+l*r.tower,"card");break}case"payEach":for(let o of s)ut(i,e.id,o.id,r.amount,"card");break;case"collectEach":for(let o of s)ut(i,o.id,e.id,r.amount,"card");break;case"freeCard":e.free++;break}}function Mo(i,e,t){let n=i.s,r=e.debtTo!==void 0&&e.debtTo!==null&&wt(n,e.debtTo)&&!wt(n,e.debtTo).out?wt(n,e.debtTo):null;for(let[a,o]of Object.entries(n.props))o.owner===e.id&&(o.level&&(e.cash+=o.level*Ge[ue[a].group].build/2,o.level=0),r?o.owner=r.id:delete n.props[a]);r&&(r.cash+=Math.floor(e.cash),r.free+=e.free,r.cash<0?r.debtTo=null:$h(r)),e.cash=0,e.free=0,e.out=!0,e.inJail=!1,e.debtTo=void 0,n.contracts=n.contracts.filter(a=>a.payer!==e.id&&a.payee!==e.id),n.trades=n.trades.filter(a=>a.from!==e.id&&a.to!==e.id),n.auction&&n.auction.bidder===e.id&&(n.auction.bidder=null,n.auction.high=0),Xe(i,{type:"bankrupt",p:e.id,to:r?r.id:null}),Pe(i,`${e.name} ${t||"goes bankrupt"}${r?` \u2013 ${r.name} takes everything`:""}.`);let s=Eo(n);if(s.length<=1){n.phase="over",n.winner=s[0]?s[0].id:null,n.auction=null,s[0]&&(Xe(i,{type:"win",p:s[0].id}),Pe(i,`${s[0].name} wins the game!`));return}Jn(n)===e&&Kh(i)}function Hp(i,e,t){let n=i.s;n.auction={tile:e,high:0,bidder:null,endsAt:t+Op,startedAt:t,passed:[],bids:[]},Xe(i,{type:"auction",tile:e}),Pe(i,`${ue[e].name} goes up for auction.`)}function Qh(i){let e=i.s,t=e.auction;e.auction=null;let n=ue[t.tile],r=t.bidder!==null?wt(e,t.bidder):null;r&&!r.out?(ut(i,r.id,null,t.high,"auction"),e.props[t.tile]={owner:r.id,level:0,mortgaged:!1},Pe(i,`${r.name} wins the auction for ${n.name} at ${ft(t.high)}.`),Xe(i,{type:"buy",p:r.id,tile:t.tile,amount:t.high,auction:!0},!0)):(Pe(i,`Nobody bid on ${n.name}; it stays with the bank.`),Xe(i,{type:"unsold",tile:t.tile}))}function Ls(i){if(i.phase!=="play"||!i.settings.timer||i.auction)return null;let e=Jn(i),t=i.t;return!e||e.out||e.cash<0?null:t.pending&&t.pending.kind==="buy"?"decline":!t.rolled||t.again?"roll":"end"}function bo(i,e){let t=Ls(i);if(!t)return i.t.deadline=null,i.t.due=null,!1;let n=`${i.turn}:${t}:${i.t.acted||0}:${i.t.doubles}`;return i.t.due===n&&i.t.deadline?!1:(i.t.due=n,i.t.deadline=e+i.settings.timer*1e3,!0)}function Ro(i,e){let t={s:i,events:[]};if(i.phase!=="play")return{events:[],changed:!1};i.auction&&e>=i.auction.endsAt&&Qh(t);let n=bo(i,e);if(i.t.deadline&&e>=i.t.deadline&&i.phase==="play"){let r=Jn(i),s=Ls(i);Pe(t,`Time's up for ${r.name}${s==="roll"?" \u2013 the dice roll themselves":s==="decline"?" \u2013 no decision, it goes to auction":""}.`),s==="decline"&&!i.settings.auctions&&(t.s.log[t.s.log.length-1].text=`Time's up for ${r.name} \u2013 no decision, they pass.`),Xe(t,{type:"timeout",p:r.id,what:s}),eu(t,r.id,{type:s},e),bo(i,e),n=!0}return{events:t.events,changed:n}}var Gh=(i,e,t)=>{let n=Math.floor(Number(i));return Number.isFinite(n)?Math.min(t,Math.max(e,n)):e};function Wh(i,e){let t=i&&typeof i=="object"?i:{},n=Array.isArray(t.tiles)?[...new Set(t.tiles.map(Number))].filter(r=>ue[r]&&fn(ue[r])):[];return{cash:Gh(t.cash,0,1e6),tiles:n.slice(0,28),free:Gh(t.free,0,e)}}function So(i,e){let t=wt(i,e.from),n=wt(i,e.to);if(!t||!n||t.out||n.out)return"That player is out of the game";for(let[r,s]of[[t,e.give],[n,e.get]]){for(let a of s.tiles){if(!gi(i,r.id,a))return`${r.name} no longer owns ${ue[a].name}`;let o=ue[a].group;if(ue[a].kind==="lot"&&Yh(i,o))return`Sell the buildings on ${Ge[o].name} before trading ${ue[a].name}`}if(s.cash>Math.max(0,r.cash))return`${r.name} doesn't have ${ft(s.cash)}`;if(s.free>r.free)return`${r.name} doesn't have that Lockup card`}for(let r of e.cancels)if(!i.contracts.find(a=>a.id===r))return`Clause #${r} no longer exists`;return""}function Vp(i,e,t){let n=i.s,r=wt(n,t.to);if(!r||r.out||r===e)return"Pick another player to trade with";if(n.trades.filter(l=>l.from===e.id).length>=zh&&!t.counter)return`At most ${zh} open offers \u2013 withdraw one first`;let s={id:n.nextId++,from:e.id,to:r.id,give:Wh(t.give,e.free),get:Wh(t.get,r.free),clauses:(Array.isArray(t.clauses)?t.clauses:[]).slice(0,Gr).map(kh).filter(Boolean),cancels:(Array.isArray(t.cancels)?[...new Set(t.cancels.map(Number))]:[]).filter(l=>{let c=n.contracts.find(h=>h.id===l);return c&&[c.payer,c.payee].includes(e.id)&&[c.payer,c.payee].includes(r.id)}),round:n.round};if(Array.isArray(t.clauses)&&s.clauses.length!==Math.min(t.clauses.length,Gr))return"One of the clauses is incomplete";if(!s.give.cash&&!s.get.cash&&!s.give.tiles.length&&!s.get.tiles.length&&!s.give.free&&!s.get.free&&!s.clauses.length&&!s.cancels.length)return"The offer is empty";if(s.give.tiles.some(l=>s.get.tiles.includes(l)))return"A space cannot be on both sides";let o=So(n,s);if(o)return o;if(t.counter){let l=n.trades.find(c=>c.id===Number(t.counter)&&c.to===e.id&&c.from===r.id);l&&(n.trades=n.trades.filter(c=>c!==l))}return n.trades.push(s),Xe(i,{type:"offer",id:s.id,from:e.id,to:r.id}),Pe(i,`${e.name} makes ${r.name} an offer.`),""}function Gp(i,e,t){let n=i.s,r=n.trades.find(h=>h.id===t);if(!r||r.to!==e.id)return"That offer is gone";let s=So(n,r);if(s)return s;n.trades=n.trades.filter(h=>h!==r);let a=wt(n,r.from),o=e;ut(i,a.id,o.id,r.give.cash,"trade"),ut(i,o.id,a.id,r.get.cash,"trade");for(let h of r.give.tiles)n.props[h].owner=o.id;for(let h of r.get.tiles)n.props[h].owner=a.id;a.free+=r.get.free-r.give.free,o.free+=r.give.free-r.get.free,n.contracts=n.contracts.filter(h=>!r.cancels.includes(h.id));let l=Object.fromEntries(n.players.map(h=>[h.id,h.name])),c=r.clauses.map(h=>Fh(n.nextId++,h,a.id,o.id,n.round));n.contracts.push(...c),Xe(i,{type:"trade",id:r.id,from:a.id,to:o.id,tiles:[...r.give.tiles,...r.get.tiles]}),Pe(i,`${o.name} accepts ${a.name}'s offer.`);for(let h of c)Pe(i,`New clause #${h.id}: ${Pn(h,l)}.`);for(let h of r.cancels)Pe(i,`Clause #${h} is torn up.`);return n.trades=n.trades.filter(h=>!So(n,h)),""}function Co(i,e,t,n=Date.now()){let r={s:i,events:[]},s=i.phase==="play"&&t&&typeof t=="object"?eu(r,e,t,n):"The game is not running";return!s&&i.phase==="play"&&(Jn(i).id===e&&!["roll","end","buy","decline"].includes(t.type)&&(i.t.acted=(i.t.acted||0)+1),bo(i,n)),{events:r.events,error:s||""}}function eu(i,e,t,n){let r=i.s,s=wt(r,e);if(!s||s.out)return"You are not playing";let a=Jn(r)===s,o=r.t,l=Number(t.tile),c=ue[l];switch(t.type){case"roll":{if(!a)return"Not your turn";if(o.pending||r.auction)return"Finish what is open first";if(o.rolled&&!o.again)return"You already rolled";if(s.cash<0)return"Clear your debt first";let h=[Vh(r),Vh(r)];r.dice=h;let u=h[0]===h[1],d=h[0]+h[1];return o.rolled=!0,o.again=!1,Xe(i,{type:"roll",p:s.id,dice:h}),s.inJail?(u?(s.inJail=!1,s.jailTurns=0,Pe(i,`${s.name} rolls ${h[0]}+${h[1]} \u2013 doubles, out of Lockup!`),Xe(i,{type:"doubles",p:s.id},!0),$i(i,s,d)):++s.jailTurns>=3?(Pe(i,`${s.name} rolls ${h[0]}+${h[1]} \u2013 third try, pays ${ft(50)} and leaves Lockup.`),ut(i,s.id,r.settings.jackpot?"pot":null,50,"fine"),s.inJail=!1,s.jailTurns=0,$i(i,s,d)):Pe(i,`${s.name} rolls ${h[0]}+${h[1]} \u2013 stays in Lockup.`),""):(Pe(i,`${s.name} rolls ${h[0]}+${h[1]}${u?" \u2013 doubles!":""}.`),u&&(o.doubles++,Xe(i,{type:"doubles",p:s.id},!0),o.doubles>=3)?(Pe(i,"Three doubles in a row \u2013 speeding!"),Ao(i,s),""):($i(i,s,d),u&&!s.inJail&&!s.out&&Jn(r)===s&&(o.again=!0),""))}case"buy":{if(!a||!o.pending||o.pending.kind!=="buy")return"Nothing to buy";let h=ue[o.pending.tile];return s.cash<h.price?`You need ${ft(h.price)}`:(ut(i,s.id,null,h.price,"buy"),r.props[h.index]={owner:s.id,level:0,mortgaged:!1},o.pending=null,Pe(i,`${s.name} buys ${h.name} for ${ft(h.price)}.`),Xe(i,{type:"buy",p:s.id,tile:h.index,amount:h.price},!0),"")}case"decline":{if(!a||!o.pending||o.pending.kind!=="buy")return"Nothing to decline";let h=o.pending.tile;return o.pending=null,r.settings.auctions?Hp(i,h,n):Pe(i,`${s.name} passes on ${ue[h].name}.`),""}case"bid":{let h=r.auction;if(!h)return"No auction is running";let u=Math.floor(Number(t.amount));return u>h.high?u>s.cash?`You only have ${ft(Math.max(0,s.cash))}`:(h.high=u,h.bidder=s.id,h.passed=h.passed.filter(d=>d!==s.id),h.bids=[...h.bids||[],{p:s.id,amount:u}].slice(-8),h.endsAt=Math.max(h.endsAt,n+kp),Xe(i,{type:"bid",p:s.id,amount:u}),Pe(i,`${s.name} bids ${ft(u)}.`),""):`Bid more than ${ft(h.high)}`}case"pass":{let h=r.auction;return h?h.bidder===s.id?"You hold the highest bid":(h.passed.includes(s.id)||h.passed.push(s.id),Xe(i,{type:"pass",p:s.id}),Eo(r).filter(d=>d.id!==h.bidder&&!h.passed.includes(d.id)).length||Qh(i),""):"No auction is running"}case"end":return a?!o.rolled||o.again?"Roll first":o.pending?"Buy it or pass first":r.auction?"Wait for the auction to finish":s.cash<0?"Clear your debt first \u2013 mortgage, sell or trade":(Kh(i),""):"Not your turn";case"payFine":return!a||!s.inJail||o.rolled?"You can only pay the fine before you roll":s.cash<50?`You need ${ft(50)}`:(ut(i,s.id,r.settings.jackpot?"pot":null,50,"fine"),s.inJail=!1,s.jailTurns=0,Pe(i,`${s.name} pays ${ft(50)} and leaves Lockup.`),"");case"useCard":return!a||!s.inJail||o.rolled?"You can only use it before you roll":s.free?(s.free--,s.inJail=!1,s.jailTurns=0,Pe(i,`${s.name} uses a card to leave Lockup.`),""):"You have no such card";case"build":{if(!c||c.kind!=="lot"||!gi(r,s.id,l))return"You can only build on your own lots";let h=c.group,u=Ge[h].build;if(!qh(r,s.id,h))return`Own all of ${Ge[h].name} first`;if(Rn(h).some(p=>r.props[p].mortgaged))return"Unmortgage the whole set first";let d=Xi(r,l);return d>=5?"It already has a tower":Rn(h).some(p=>Xi(r,p)<d)?"Build evenly across the set":s.cash<u?`You need ${ft(u)}`:(ut(i,s.id,null,u,"build"),r.props[l].level++,Pe(i,`${s.name} builds ${r.props[l].level===5?"a tower":"a floor"} on ${c.name}.`),Xe(i,{type:"build",p:s.id,tile:l,amount:u,level:r.props[l].level},!0),"")}case"sell":{if(!c||!gi(r,s.id,l)||!Xi(r,l))return"Nothing to sell there";let h=Xi(r,l);return Rn(c.group).some(u=>Xi(r,u)>h)?"Sell evenly across the set":(r.props[l].level--,ut(i,null,s.id,Ge[c.group].build/2,"sell"),Pe(i,`${s.name} sells a floor on ${c.name}.`),Xe(i,{type:"sell",p:s.id,tile:l,level:r.props[l].level}),"")}case"mortgage":return!c||!gi(r,s.id,l)?"Not yours":r.props[l].mortgaged?"Already mortgaged":c.kind==="lot"&&Yh(r,c.group)?"Sell the buildings on this set first":(r.props[l].mortgaged=!0,ut(i,null,s.id,Cn(c),"mortgage"),Pe(i,`${s.name} mortgages ${c.name} for ${ft(Cn(c))}.`),Xe(i,{type:"mortgage",p:s.id,tile:l}),"");case"unmortgage":{if(!c||!gi(r,s.id,l)||!r.props[l].mortgaged)return"Not mortgaged";let h=mi(c);return s.cash<h?`You need ${ft(h)}`:(ut(i,s.id,null,h,"unmortgage"),r.props[l].mortgaged=!1,Pe(i,`${s.name} pays off the mortgage on ${c.name}.`),Xe(i,{type:"unmortgage",p:s.id,tile:l}),"")}case"offer":return Vp(i,s,t);case"accept":return Gp(i,s,Number(t.id));case"reject":{let h=r.trades.find(u=>u.id===Number(t.id));return!h||h.to!==s.id?"That offer is gone":(r.trades=r.trades.filter(u=>u!==h),Xe(i,{type:"reject",id:h.id,from:h.from,to:h.to}),Pe(i,`${s.name} turns down ${xo(r,h.from)}'s offer.`),"")}case"withdraw":{let h=r.trades.find(u=>u.id===Number(t.id));return!h||h.from!==s.id?"That offer is gone":(r.trades=r.trades.filter(u=>u!==h),Xe(i,{type:"withdraw",id:h.id,from:h.from,to:h.to}),"")}case"bankrupt":return s.cash>=0?"You are not in debt":(Mo(i,s),"");case"resign":return s.debtTo=s.cash<0?s.debtTo:null,Mo(i,s,"leaves the game"),"";default:return"Unknown action"}}function Po(i,e,t="is removed from the game"){let n={s:i,events:[]},r=wt(i,e);return i.phase==="play"&&r&&!r.out&&(r.debtTo=null,Mo(n,r,t)),{events:n.events}}function tu(i,e){let{seed:t,decks:n,deckPos:r,...s}=i;return{...s,trades:i.trades.filter(a=>a.from===e||a.to===e),tradesOpen:i.trades.length,log:i.log.slice(-80)}}var Wp=["orospu","orosbu","oruspu","orusbu","orspu","orsbu","aminakoy","aminako","aminasok","aminkoy","amcik","amcig","siktir","sikerim","sikeyim","sikiyim","sikis","sikik","siksok","yarrak","yarak","yarram","dalyarak","tasak","tassak","pezevenk","kahpe","kaltak","surtuk","yavsak","gavat","pust","ibne","ipne","gotveren","gotlek","gotos","ananisik","bacinisik","serefsiz","gerizekali","dangalak","salak","aptal","kodumun","pickurusu","fuck","phuck","fvck","shit","bitch","biatch","cunt","asshole","bastard","whore","slut","faggot","nigger","nigga","retard","dildo","pussy","penis","vagina","porn","jizz","blowjob","handjob","motherf","molest","pedofil","pedophil","boob","horny","milf","twat","bollock","scheis","arschloch","fotze","wichser","hurensohn","schlampe","ficken","missgeburt","nutte","spasti","putain","connard","connasse","salope","encule","niquer","batard","enfoire","mierda","cabron","gilipollas","pendejo","culero","chingad","chingar","maricon","hijueputa","hijodeputa","joder","cazzo","vaffanculo","fanculo","stronzo","puttana","minchia","coglion","caralho","buceta","fodase","blyat","blyad","pizd","mudak","pidor","pidar","gandon","eblan","yebat","yobany","kurwa","pierdol","spierdal","jebac","kanker","klootzak","godverdomme","chutiya","chutia","bhenchod","behenchod","madarchod","bhosdi","sharmouta","sharmuta","sharmota","kussomak","kussommak","kusomak","metnak","khawal","zebbi","manyok","koskesh","allah","peygamber","prophet","muslim","musluman","hristiyan","hiristiyan","christianity","jesuschrist","yahudi","kafir","gavur","ateist","atheist","satanist","seytan","kilise","sinagog","synagogue","mosque","seriat","sharia","jihad","mezhep","tarikat","selefi","vahhabi","wahhabi","hizbullah","hezbollah","taliban","crusade","namaz","abdest","tekbir","budist","buddhist","vatican","vatikan","dinsiz","islamist","islamci","islamic","erdogan","tayyip","ataturk","kilicdaroglu","bahceli","imamoglu","davutoglu","aksener","ocalan","fethullah","fetullah","hitler","mussolini","stalin","lenin","netanyahu","zelensk","kemalist","kemalizm","ulkucu","apocu","terorist","fascis","fasist","fasizm","faschis","komunist","communis","kommunist","sosyalist","socialis","anarsist","anarchis","zionis","siyonis","kurdistan","marxis","bolsevik","bolshevik","akparti","iyiparti"],Io=new Set(["am","amk","amq","aq","mk","sik","skm","skim","sktr","skt","oc","pic","got","bok","dol","pezo","ass","dick","cock","cum","sex","sexy","tit","tits","fag","rape","rapist","anal","anus","wank","wanker","tosser","hoe","hoes","wtf","stfu","gtfo","fck","fuk","fuq","fk","kkk","fick","hure","spast","nique","pute","putes","fdp","ntm","puta","puto","putas","putos","hdp","verga","cono","pinche","merda","troia","foda","viado","porra","cu","suka","huy","hui","xuy","xyi","xui","chuj","hoer","kut","randi","gaand","jende","god","gott","dieu","dios","tanri","tanrim","kuran","quran","koran","incil","bible","tevrat","torah","zebur","cami","church","cemaat","alevi","sunni","sii","isis","isid","daesh","deas","hacli","pope","din","mesih","hz","satan","jew","jews","deist","rte","pkk","ypg","pyd","ypj","dhkp","dhkpc","hdp","akp","chp","mhp","feto","nazi","nazis","neonazi","putin","trump","biden","obama","hamas","marx","inonu"]),jp=["\u0431\u043B\u044F\u0442","\u0431\u043B\u044F\u0434","\u0441\u0443\u043A\u0430","\u043F\u0438\u0437\u0434","\u0445\u0443\u0439","\u0445\u0443\u0435","\u0435\u0431\u0430\u0442","\u0435\u0431\u0430\u043D","\u043C\u0443\u0434\u0430\u043A","\u043F\u0438\u0434\u043E\u0440","\u043F\u0438\u0434\u0430\u0440","\u0433\u0430\u043D\u0434\u043E\u043D","\u0448\u043B\u044E\u0445","\u0437\u0430\u043B\u0443\u043F","\u0634\u0631\u0645\u0648\u0637","\u0645\u0646\u064A\u0648\u0643","\u0642\u062D\u0628\u0629","\u0639\u0631\u0635","\u0643\u0633\u0645\u0643"],Xp=["\u0431\u043B\u044F","\u0643\u0633","\u0646\u064A\u0643","\u0632\u0628\u064A"],$p={\u0131:"i",\u00DF:"ss",\u00E6:"ae",\u0153:"oe",\u00F8:"o",\u0111:"d",\u0142:"l",\u00FE:"th",\u00F0:"d"},qp={\u0430:"a",\u0432:"b",\u0435:"e",\u043A:"k",\u043C:"m",\u043D:"h",\u043E:"o",\u0440:"p",\u0441:"c",\u0442:"t",\u0443:"y",\u0445:"x",\u0456:"i",\u0458:"j",\u0455:"s",\u03B1:"a",\u03B2:"b",\u03B5:"e",\u03B7:"n",\u03B9:"i",\u03BA:"k",\u03BD:"v",\u03BF:"o",\u03C1:"p",\u03C4:"t",\u03C5:"u",\u03C7:"x"},Yp={0:"o",1:"i",2:"z",3:"e",4:"a",5:"s",6:"g",7:"t",8:"b",9:"g"},Lo=i=>i.toLowerCase().normalize("NFD").replace(/\p{M}+/gu,"").replace(/[ıßæœøđłþð]/g,e=>$p[e]),Us=i=>i.replace(/(.)\1+/g,"$1"),Jp=[...new Set(Wp.flatMap(i=>[i,Us(i)]).filter(i=>i.length>=4))],Zp=new Set([...Io].map(Us).filter(i=>i.length>=3)),Kp=jp.map(Lo),Qp=new Set(Xp.map(Lo));function nu(i){if(!i.length)return!1;let e=i.join("");for(let n of[...i,e]){let r=Us(n);if(Io.has(n)||Io.has(r)||Zp.has(r))return!0}let t=Us(e);return Jp.some(n=>e.includes(n)||t.includes(n))}function Uo(i){let e=Lo(String(i||""));if(Kp.some(r=>e.includes(r))||e.split(/\s+/).some(r=>Qp.has(r)))return!0;let t=e.replace(/./gu,r=>qp[r]||r),n=r=>r.split(/[^a-z0-9]+/).filter(Boolean);return nu(n(t))||nu(n(t.replace(/[0-9]/g,r=>Yp[r])))}var iu=/[^\p{L}\p{N} ]/gu,ru=/[^\p{L}\p{N} '’.,!?&#+:|()\-_/]/gu,su=(i,e,t)=>Array.from(String(i||"").replace(e,"").replace(/\s+/g," ").trim()).slice(0,t).join("").trim();function Ji(i){let e=su(i,iu,16);return e&&!Uo(e)?e:""}function Ns(i){let e=su(i,ru,28);return e&&!Uo(e)?e:""}function au(i,e="player"){let t=String(i||"").trim(),n=e==="room",r=n?28:16;return t?t.replace(n?ru:iu,"")!==t?n?"Letters, numbers and simple punctuation only":"Letters and numbers only":Array.from(t).length>r?`At most ${r} characters`:Uo(t)?"Not allowed \u2013 no swearing, religion or politics":"":n?"":"Pick a name"}var cu=["Marlo","Tess","Ines","Ravi","Juno","Otto","Kemal","Lena","Sami","Noor"],$r=(i,e)=>i.players.find(t=>t.id===e),em=i=>i.players.filter(e=>!e.out),gn=(i,e)=>i.props[e]?i.props[e].owner:null,vn=(i,e)=>i.props[e]?i.props[e].level:0,Ln=i=>Rn(i);function Zn(i,e,t){let n=ue[t];return n.kind!=="lot"?!1:Ln(n.group).every(r=>r===t||gn(i,r)===e)}var yi=i=>120+Math.min(250,i.round*12);function ou(i,e,t,n){let r=ue[e],s=i.props[e],a=r.price*(s&&s.mortgaged?.55:1);return t&&Zn(i,t,e)&&(a*=2.2),n&&r.kind==="transit"&&(a*=1.15),a}function tm(i,e){let t=em(i).length,n=e.where||"any",r=n==="any"?1:n.startsWith("t:")?.028:.028*Ln(n.slice(2)).length,s={turn:1,land:n==="any"?1:r*1.1,passStart:.2,rent:n==="any"?.45:r*.9,buy:.2,build:.15,tax:.05,doubles:.17,jail:.06,card:.15}[e.event]||.1,a=e.actor==="any"||e.actor===null;return s*(a?t:1)}function nm(i,e){let t=e.where||"any";if(e.event==="rent"){if(t.startsWith("t:")){let n=+t.slice(2);return Math.max(ue[n].rents?ue[n].rents[0]*2:25,i.props[n]?qi(i,n,7):0)}return 70}return{tax:150,passStart:200,buy:200,build:120}[e.event]||0}function lu(i,e,t){let n=e.kind==="percent"?nm(i,e)*e.value/100:e.value,r=t||15,s=tm(i,e)*r,a=e.times!==void 0?e.times:e.timesLeft;return a&&(s=Math.min(a,s)),n*s*.9}function im(i,e,t){let n=$r(i,e),r=$r(i,t.from);if(!n||!r)return-1e9;let s=0;s+=t.give.cash-t.get.cash,s+=(t.give.free-t.get.free)*40;for(let o of t.give.tiles)s+=ou(i,o,e,t.from);for(let o of t.get.tiles)s-=ou(i,o,t.from,e)*(Zn(i,t.from,o)?.92:1);for(let o of t.clauses){let l=o.payer==="to",c=lu(i,o,o.rounds);s+=l?-c*1.1:c}for(let o of t.cancels){let l=i.contracts.find(h=>h.id===o);if(!l)continue;let c=lu(i,l,l.untilRound?l.untilRound-i.round+1:0);s+=l.payee===e?-c:c}return n.cash-t.get.cash+t.give.cash<80&&(s-=150),s}function rm(i,e){let t=Object.keys(i.props).map(Number).filter(s=>gn(i,s)===e.id),n=t.filter(s=>vn(i,s)>0).sort((s,a)=>vn(i,a)-vn(i,s));for(let s of n){let a=Math.max(...Ln(ue[s].group).map(o=>vn(i,o)));if(vn(i,s)===a)return{type:"sell",tile:s}}let r=t.filter(s=>!i.props[s].mortgaged&&!(ue[s].kind==="lot"&&Ln(ue[s].group).some(a=>vn(i,a)>0)));return r.length?(r.sort((s,a)=>Zn(i,e.id,s)-Zn(i,e.id,a)||ue[s].price-ue[a].price),{type:"mortgage",tile:r[0]}):null}function sm(i,e){let t=Object.keys(Ge).filter(n=>Ge[n].build&&Ln(n).every(r=>gn(i,r)===e.id)&&Ln(n).every(r=>!i.props[r].mortgaged));t.sort((n,r)=>Ge[r].build-Ge[n].build);for(let n of t){let r=Ge[n].build;if(e.cash-r<yi(i))continue;let s=Ln(n),a=Math.min(...s.map(l=>vn(i,l)));if(a>=5)continue;return{type:"build",tile:s.find(l=>vn(i,l)===a)}}return null}function am(i,e){let t=Object.keys(i.props).map(Number).filter(n=>gn(i,n)===e.id&&i.props[n].mortgaged).sort((n,r)=>Zn(i,e.id,r)-Zn(i,e.id,n));for(let n of t)if(e.cash-mi(ue[n])>yi(i)+250)return{type:"unmortgage",tile:n};return null}function om(i,e,t){let n=r=>Object.keys(Ge).filter(s=>Ge[s].build).map(s=>{let a=Ln(s),o=a.filter(l=>gn(i,l)!==r);return o.length===1&&a.every(l=>vn(i,l)===0)&&gn(i,o[0])!==null?o[0]:null}).filter(s=>s!==null);for(let r of n(e.id)){let s=gn(i,r),a=$r(i,s);if(!a||a.out)continue;let o=n(s).find(h=>gn(i,h)===e.id);if(o===void 0)continue;let l=`swap:${s}:${r}:${o}:${Math.floor(i.round/4)}`;if(t.offered.has(l))continue;t.offered.add(l);let c=Math.max(0,Math.min(e.cash-yi(i),Math.round((ue[r].price-ue[o].price)*1.2/10)*10+20));return{type:"offer",to:s,give:{tiles:[o],cash:c},get:{tiles:[r]}}}for(let r of Object.keys(Ge)){if(!Ge[r].build)continue;let s=Ln(r),a=s.filter(d=>gn(i,d)!==e.id);if(a.length!==1)continue;let o=a[0],l=gn(i,o);if(l===null)continue;let c=$r(i,l);if(!c||c.out||s.some(d=>vn(i,d)>0))continue;let h=`${l}:${o}:${Math.floor(i.round/4)}`;if(t.offered.has(h))continue;let u=Math.round(Math.min(e.cash-yi(i),ue[o].price*2.4)/10)*10;if(!(u<ue[o].price*1.5))return t.offered.add(h),{type:"offer",to:l,give:{cash:u},get:{tiles:[o]}}}return null}function hu(i,e,t,n){let r=$r(i,e);if(!r||r.out||i.phase!=="play")return null;let s=c=>c&&!n.avoid.has(JSON.stringify(c))?c:null;for(let c of i.trades.filter(h=>h.to===e)){if(n.seen.has(c.id)||n.seen.set(c.id,t),t-n.seen.get(c.id)<1500)continue;let h=im(i,e,c),u=c.give.cash+c.get.cash+100*(c.give.tiles.length+c.get.tiles.length),d=s({type:h>5+u*.03?"accept":"reject",id:c.id});if(d)return d}for(let c of i.trades.filter(h=>h.from===e))if(n.seen.has(c.id)||n.seen.set(c.id,t),t-n.seen.get(c.id)>45e3){let h=s({type:"withdraw",id:c.id});if(h)return h}if(i.auction){let c=i.auction;if(c.bidder===e||c.passed.includes(e))return null;let h=ue[c.tile],u=Math.min(r.cash-yi(i)*.6,h.price*(Zn(i,e,c.tile)?1.7:1.05)),d=Math.max(5,Math.round(h.price*.05/5)*5);return u>=c.high+d?s({type:"bid",amount:c.high+d})||s({type:"pass"}):s({type:"pass"})}if(i.players[i.turn].id!==e)return null;let a=i.t;if(r.cash<0)return s(rm(i,r))||s({type:"bankrupt"});if(a.pending&&a.pending.kind==="buy"){let c=ue[a.pending.tile],h=r.cash>=c.price&&(r.cash-c.price>=yi(i)*.7||Zn(i,e,c.index)||i.round<=3);return s({type:h?"buy":"decline"})||s({type:"decline"})}if(r.inJail&&!a.rolled){if(r.free){let h=s({type:"useCard"});if(h)return h}let c=ue.filter(h=>fn(h)&&!i.props[h.index]).length;if(r.cash>=50+yi(i)&&c>6){let h=s({type:"payFine"});if(h)return h}}let o=s(sm(i,r));if(o)return o;let l=s(am(i,r));if(l)return l;if(!a.rolled&&n.offerRound!==i.round&&!i.trades.some(c=>c.from===e)){n.offerRound=i.round;let c=s(om(i,r,n));if(c)return c}return!a.rolled||a.again?s({type:"roll"}):s({type:"end"})}var uu=()=>({avoid:new Set,offered:new Set,seen:new Map,offerRound:0});var du=12,Ki=["Deal?","No deal","Nice one!","Ouch!","Your turn!","Hurry up","Good game","Let's talk"],lm=6e4,pu=i=>!!(i.bot||i.ai&&!i.client),mu=i=>typeof i=="string"&&/^[a-z0-9]{12,32}$/.test(i)?i:"",Zi=class i{constructor(e,t,n={}){this.code=e,this.name=Ns(t)||"Parcel table",this.listed=n.listed!==!1,this.now=n.now||Date.now,this.onChange=n.onChange||null,this.members=new Map,this.hostWho="",this.settings=Xr(null),this.game=null,this.banned=new Set,this.nextId=1,this.emptySince=this.now(),this.botMem=new Map,this.botAt=0}get online(){return[...this.members.values()].filter(e=>e.client)}seated(){return[...this.members.values()].filter(e=>e.seat)}join(e){let t=e.who;if(this.banned.has(t))return"The host removed you from this room";let n=this.members.get(t);if(n){if(n.client&&n.client!==e){let r=n.client;n.client=null,r.room=null,r.send({t:"error",code:"replaced",text:"This room was opened in another tab"})}n.client=e,n.ai=!1,(!this.game||this.game.phase!=="play")&&(n.name=Ji(e.name)||n.name)}else{if(this.members.size>=du){let r=[...this.members.values()].find(s=>!s.client&&!s.bot&&!this.inGame(s));if(!r)return"The room is full";this.members.delete(r.who)}n={who:t,id:`p${this.nextId++}`,name:Ji(e.name)||`Player${Math.floor(100+Math.random()*900)}`,client:e,seat:null,joined:this.now()},this.members.set(t,n),this.game||this.autoSeat(n)}return e.room=this,(!this.hostWho||!this.members.get(this.hostWho))&&(this.hostWho=t),this.emptySince=0,this.broadcast(),""}leave(e,t=!1){let n=this.members.get(e.who);if(!n||n.client!==e)return;n.client=null,e.room=null;let r=[];t&&(this.inGame(n)&&(r=Po(this.game,n.id,"leaves the game").events),this.members.delete(n.who),this.hostWho===n.who&&this.passHost()),this.online.length||(this.emptySince=this.now()),this.broadcast(r)}passHost(){let e=this.online.find(t=>t.who!==this.hostWho)||[...this.members.values()].find(t=>t.who!==this.hostWho&&!t.bot);e&&(this.hostWho=e.who)}inGame(e){return!!(this.game&&this.game.phase==="play"&&this.game.players.some(t=>t.id===e.id&&!t.out))}autoSeat(e){if(this.seated().length>=In)return;let t=this.seated().map(s=>s.seat),n=Hr.find(s=>!t.some(a=>a.token===s)),r=Vr.find(s=>!t.some(a=>a.color===s));e.seat={token:n,color:r}}handle(e,t){let n=this.members.get(e.who);if(!n||n.client!==e)return;let r=n.who===this.hostWho,s=!this.game||this.game.phase!=="play",a=o=>e.send({t:"error",text:o});switch(t.t){case"act":{if(!this.game)return a("The game has not started");let o=Co(this.game,n.id,t.a,this.now());if(o.error)return a(o.error);this.broadcast(o.events);return}case"seat":{if(!s)return;let o=this.seated().filter(h=>h!==n).map(h=>h.seat);if(!n.seat){if(o.length>=In)return a("All six seats are taken");this.autoSeat(n)}let l=Hr.includes(t.token)&&!o.some(h=>h.token===t.token)?t.token:n.seat.token,c=Vr.includes(t.color)&&!o.some(h=>h.color===t.color)?t.color:n.seat.color;n.seat={token:l,color:c};break}case"stand":s&&(n.seat=null);break;case"name":{let o=Ji(t.name);o&&s&&(n.name=o);break}case"settings":if(!r||!s)return;this.settings=Xr({...this.settings,...t.settings}),typeof t.name=="string"&&Ns(t.name)&&(this.name=Ns(t.name)),typeof t.listed=="boolean"&&(this.listed=t.listed);break;case"start":{if(!r||!s)return;let o=this.seated();if(o.length<vi)return a(`At least ${vi} players need a seat`);if(o.some(l=>!l.client&&!l.bot))return a("Someone with a seat is offline");if(o.every(l=>l.bot))return a("At least one person has to play");this.botMem.clear(),this.game=Xh(o.map(l=>({id:l.id,name:l.name,token:l.seat.token,color:l.seat.color})),this.settings),Ro(this.game,this.now()),this.broadcast([{type:"start"}]);return}case"lobby":if(!r||!this.game||this.game.phase==="play")return;this.game=null;for(let o of[...this.members.values()])o.ai=!1,!o.client&&!o.bot&&this.members.delete(o.who);break;case"chat":{let o=Math.floor(Number(t.n));if(!Ki[o])return;let l=this.now();if(l-(n.chatAt||0)<1500)return;n.chatAt=l;for(let c of this.online)c.client.send({t:"chat",id:n.id,n:o});return}case"kick":{if(!r)return;let o=[...this.members.values()].find(c=>c.id===t.id);if(!o||o===n)return;let l=this.inGame(o)?Po(this.game,o.id,"is removed by the host").events:[];o.bot||this.banned.add(o.who),this.members.delete(o.who),o.client&&(o.client.send({t:"error",code:"kicked",text:"The host removed you from this room"}),o.client.room=null),this.broadcast(l);return}case"addBot":{if(!r||!s)return;if(this.seated().length>=In)return a("All six seats are taken");if(this.members.size>=du)return a("The room is full");let o=new Set([...this.members.values()].map(h=>h.name)),l=cu.find(h=>!o.has(h))||`Bot ${this.nextId}`,c={who:`bot${this.nextId}x${Math.random().toString(36).slice(2,8)}`,id:`p${this.nextId++}`,name:l,client:null,seat:null,bot:!0,joined:this.now()};this.members.set(c.who,c),this.autoSeat(c);break}case"aiPlay":{if(!r||s)return;let o=[...this.members.values()].find(l=>l.id===t.id);if(!o||o.client||o.bot||!this.inGame(o))return;o.ai=!0,this.broadcast([{type:"aiTakeover",p:o.id}]);return}case"host":{if(!r)return;let o=[...this.members.values()].find(l=>l.id===t.id&&l.client);o&&(this.hostWho=o.who);break}default:return}this.broadcast()}tick(e=this.now()){if(!this.game||this.game.phase!=="play")return;let t=Ro(this.game,e);(t.events.length||t.changed)&&this.broadcast(t.events),this.takeOverAway(e),this.botsMove(e)}takeOverAway(e){let t=this.game,n=t.players[t.turn],r=[...this.members.values()].find(s=>s.id===n.id);if(!r||r.client||pu(r)){this.awayFor=null;return}!this.awayFor||this.awayFor.id!==r.id?this.awayFor={id:r.id,since:e}:e-this.awayFor.since>lm&&(r.ai=!0,this.awayFor=null,this.broadcast([{type:"aiTakeover",p:r.id}]))}botsMove(e){if(e<this.botAt||!this.online.length)return;let t=this.game;for(let n of this.members.values()){if(!pu(n)||t.phase!=="play")continue;let r=this.botMem.get(n.id);r||this.botMem.set(n.id,r=uu());for(let s=0;s<4;s++){let a=hu(t,n.id,e,r);if(!a)break;let o=Co(t,n.id,a,e);if(o.error){r.avoid.add(JSON.stringify(a));continue}r.avoid.clear();let l=o.events.find(c=>c.type==="move");this.botAt=e+(a.type==="roll"?1800+(l?Math.min(12,Math.abs(l.steps))*170:0)+(o.events.some(c=>c.type==="card")?1400:0):a.type==="bid"||a.type==="pass"?700:1e3),this.broadcast(o.events);return}}}summary(){let e=this.game;return{code:this.code,name:this.name,host:(this.members.get(this.hostWho)||{}).id||"",phase:e?e.phase:"lobby",settings:this.settings,listed:this.listed,members:[...this.members.values()].map(t=>({id:t.id,name:t.name,online:!!t.client||!!t.bot,seat:t.seat,bot:!!t.bot,ai:!!(t.ai&&!t.client)}))}}listing(){return{code:this.code,name:this.name,people:this.online.length,seated:this.seated().length,max:In,phase:this.game?this.game.phase:"lobby"}}broadcast(e=[]){let t=this.summary(),n=this.now();for(let r of this.online)r.client.send({t:"sync",you:r.id,now:n,room:t,game:this.game?tu(this.game,r.id):null,events:e});this.onChange&&this.onChange(this)}serialize(){return{code:this.code,name:this.name,listed:this.listed,hostWho:this.hostWho,settings:this.settings,game:this.game,nextId:this.nextId,banned:[...this.banned],members:[...this.members.values()].map(({who:e,id:t,name:n,seat:r,joined:s,bot:a,ai:o})=>({who:e,id:t,name:n,seat:r,joined:s,bot:!!a,ai:!!o}))}}static restore(e,t){let n=new i(e.code,e.name,t);n.listed=e.listed!==!1,n.hostWho=e.hostWho,n.settings=Xr(e.settings),n.game=e.game||null,n.nextId=e.nextId||1,n.banned=new Set(e.banned||[]);for(let r of e.members||[])n.members.set(r.who,{...r,client:null});return n}};var fu="ABCDEFGHJKLMNPQRSTUVWXYZ",No=()=>Array.from({length:4},()=>fu[Math.random()*fu.length|0]).join(""),Do=i=>String(i||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4),cm=12e4,hm=6e4,um=5*6e4,dm=60*6e4,Ds=class{constructor(e={}){this.rooms=new Map,this.maxRooms=e.maxRooms||500,this.canCreate=e.canCreate||(()=>!0),this.makeCode=e.makeCode||(()=>{for(;;){let t=No();if(!this.rooms.has(t))return t}}),this.roomOpts=e.roomOpts||{},this.clients=new Set,this.now=e.now||Date.now,this.keepEmpty=!!e.keepEmpty}connect(e){return e.who="",e.name="",e.room=null,e.seen=this.now(),this.clients.add(e),{message:t=>{try{this.message(e,t)}catch(n){console.error("hub: message failed",t&&t.t,n)}},close:()=>this.disconnect(e)}}disconnect(e){this.clients.delete(e)&&e.room&&e.room.leave(e)}message(e,t){if(!t||typeof t.t!="string")return;e.seen=this.now();let n=e.room;switch(t.t){case"ping":e.send({t:"pong"});return;case"hello":{let r=mu(t.who);if(!r)return e.send({t:"error",text:"Bad hello"});n&&r!==e.who&&n.leave(e),e.who=r,e.name=Ji(t.name)||e.name,e.send({t:"welcome",create:this.canCreate(e)});return}case"list":e.send({t:"rooms",rooms:[...this.rooms.values()].filter(r=>r.listed&&r.online.length).map(r=>r.listing())});return;case"create":{if(!e.who)return;if(!this.canCreate(e))return e.send({t:"error",text:"Rooms are opened by the host here"});if(this.rooms.size>=this.maxRooms)return e.send({t:"error",text:"Too many rooms open \u2013 try again later"});n&&n.leave(e,!0);let r=t.code&&this.canCreate(e)==="any-code"?t.code:this.makeCode(),s=new Zi(r,t.name||`${e.name||"Someone"}'s table`,{...this.roomOpts,listed:t.listed!==!1});this.rooms.set(r,s),s.join(e);return}case"join":{if(!e.who)return;let r=this.rooms.get(String(t.code||"").toUpperCase());if(!r)return e.send({t:"error",code:"noroom",text:"No room with that code"});if(r===n&&r.members.get(e.who)?.client===e)return;n&&n.leave(e,!0);let s=r.join(e);s&&e.send({t:"error",code:"refused",text:s});return}case"leave":n&&n.leave(e,!0),e.send({t:"left"});return;default:n&&n.handle(e,t)}}tick(){let e=this.now();for(let t of[...this.clients])if(e-t.seen>cm){this.disconnect(t);try{t.close()}catch{}}for(let[t,n]of this.rooms){n.tick(e);let r=n.members.get(n.hostWho);if(r&&!r.client&&n.online.length?(n.hostAway=n.hostAway||e,e-n.hostAway>hm&&(n.passHost(),n.hostAway=0,n.broadcast())):n.hostAway=0,!this.keepEmpty&&!n.online.length&&n.emptySince){let s=n.game&&n.game.phase==="play"?dm:um;e-n.emptySince>s&&this.rooms.delete(t)}}}};var pm="https://cdn.jsdelivr.net/npm/peerjs@1.5.5/dist/peerjs.min.js",mm="sha384-x0YgkOr/3UOZP2CRDxGW9e0Q+2Qjyr3uJrm4xU32Y7ZCNAo7Cc7bjhrZMi/dwczu",ks="parcel-v1-",ko="parcel.hosted",fm=12*36e5,Os=null;function Oo(){return window.Peer?Promise.resolve(window.Peer):(Os||(Os=new Promise((i,e)=>{let t=document.createElement("script");t.src=pm,t.integrity=mm,t.crossOrigin="anonymous",t.onload=()=>window.Peer?i(window.Peer):e(new Error("PeerJS failed to load")),t.onerror=()=>{Os=null,e(new Error("Could not load PeerJS \u2013 are you offline?"))},document.head.appendChild(t)})),Os)}function Fs(i,e){return new Promise((t,n)=>{let r=e?new i(e,{debug:0}):new i({debug:0}),s=setTimeout(()=>{r.destroy(),n(Object.assign(new Error("The connection broker did not answer"),{type:"timeout"}))},12e3);r.once("open",()=>{clearTimeout(s),t(r)}),r.once("error",a=>{clearTimeout(s),r.destroy(),n(a)})})}var gm=i=>new Promise(e=>setTimeout(e,i));function Fo(){try{let i=JSON.parse(localStorage.getItem(ko)||"null");if(i&&i.code&&Date.now()-i.at<fm&&i.room)return i}catch{}return null}function Bo(){try{localStorage.removeItem(ko)}catch{}}var qr=class{constructor(){this.peer=null,this.code="",this.closed=!1,this.conns=new Set,this.selfWho="",this.hub=new Ds({keepEmpty:!0,canCreate:e=>e.local?"any-code":!1})}async open(e=null){let t=await Oo();if(e){let n=Date.now()+3e4;for(;;)try{this.peer=await Fs(t,ks+e.code);break}catch(s){if(s.type!=="unavailable-id"||Date.now()>n)throw s;await gm(2e3)}this.code=e.code;let r=Zi.restore(e.room,{});this.hub.rooms.set(this.code,r)}else{let n=null;for(let r=0;r<6&&!this.peer;r++){let s=No();try{this.peer=await Fs(t,ks+s),this.code=s}catch(a){if(n=a,a.type!=="unavailable-id")break}}if(!this.peer)throw n||new Error("Could not open a room")}return this.watchPeer(),this.timer=setInterval(()=>this.tick(),500),this.code}watchPeer(){let e=this.peer;e.on("connection",t=>this.accept(t)),e.on("disconnected",()=>{this.closed||setTimeout(()=>{try{e.destroyed||e.reconnect()}catch{}},1500)}),e.on("error",t=>console.warn("[host] peer:",t.type))}tick(){this.hub.tick();let e=this.hub.rooms.get(this.code);e&&!e.onChange&&(e.onChange=()=>this.save()),this.peer&&this.peer.destroyed&&!this.closed&&!this.reopening&&this.reopen()}async reopen(){this.reopening=!0;try{let e=await Oo();this.peer=await Fs(e,ks+this.code),this.watchPeer()}catch{}this.reopening=!1}save(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{let e=this.hub.rooms.get(this.code);if(!(!e||this.closed))try{localStorage.setItem(ko,JSON.stringify({code:this.code,at:Date.now(),who:this.selfWho,room:e.serialize()}))}catch{}},200)}accept(e){let t={send:s=>{if(e.open)try{e.send(JSON.stringify(s))}catch{}},close:()=>{try{e.close()}catch{}}},n=this.hub.connect(t);this.conns.add(e),e.on("data",s=>{try{n.message(typeof s=="string"?JSON.parse(s):s)}catch{}});let r=()=>{this.conns.delete(e),n.close()};e.on("close",r),e.on("error",r)}localLink(){let e=new ji,t={local:!0,send:r=>{let s=JSON.parse(JSON.stringify(r));queueMicrotask(()=>e.deliver(s))},close:()=>e.ended()},n=this.hub.connect(t);return e.send=r=>{let s=JSON.parse(JSON.stringify(r));queueMicrotask(()=>n.message(s))},e.close=()=>{e.closed=!0,n.close()},e}close(){this.closed=!0,clearInterval(this.timer);for(let t of this.conns)try{t.send(JSON.stringify({t:"error",code:"closed",text:"The host closed the room"}))}catch{}Bo();let e=this.peer;setTimeout(()=>{try{e&&e.destroy()}catch{}},300)}};async function zo(i){let e=await Oo(),t=await Fs(e,null);return new Promise((n,r)=>{let s=t.connect(ks+i,{reliable:!0}),a=new ji,o=!1,l=h=>{if(!o){o=!0,clearTimeout(c);try{t.destroy()}catch{}r(new Error(h))}},c=setTimeout(()=>l("Could not reach that room"),15e3);t.on("error",h=>{h.type==="peer-unavailable"?l(`No room with code ${i} is open right now`):o||l("Could not connect \u2013 check your network")}),s.on("open",()=>{o=!0,clearTimeout(c),a.send=h=>{if(s.open)try{s.send(JSON.stringify(h))}catch{}},a.close=()=>{a.closed=!0;try{s.close()}catch{}setTimeout(()=>t.destroy(),200)},n(a)}),s.on("data",h=>{try{a.deliver(typeof h=="string"?JSON.parse(h):h)}catch{}}),s.on("close",()=>{a.ended();try{t.destroy()}catch{}}),s.on("error",()=>a.ended())})}var Sd=2;var vm=0,ym=1,Kc=2;var Ei=100,_m=101,xm=102;var Mm=200,bm=201,Sm=202,wm=203,Sl=204,wl=205,Tm=206,Em=207,Am=208,Rm=209,Cm=210,Pm=211,Im=212,Lm=213,Um=214,Nm=0,Dm=1,Om=2,km=3,Fm=4,Bm=5,zm=6,Hm=7;var wd=300,Mr=301,br=302,Tl=303,El=304,Ja=306,Al=1e3,ls=1001,Rl=1002,on=1003,Vm=1004;var Bs=1005;var zn=1006,Ho=1007;var vr=1008;var si=1009,Td=1010,Ed=1011,cs=1012,Qc=1013,Ci=1014,Hn=1015,xs=1016,eh=1017,th=1018,Sr=1020,Ad=35902,Rd=1021,Cd=1022,xn=1023,Pd=1024,Id=1025,hs=1026,wr=1027,Ld=1028,nh=1029,Ud=1030,ih=1031;var rh=1033,ga=33776,va=33777,ya=33778,_a=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Ul=36196,Nl=37492,Dl=37496,Ol=37808,kl=37809,Fl=37810,Bl=37811,zl=37812,Hl=37813,Vl=37814,Gl=37815,Wl=37816,jl=37817,Xl=37818,$l=37819,ql=37820,Yl=37821,xa=36492,Jl=36494,Zl=36495,Nd=36283,Kl=36284,Ql=36285,ec=36286;var ba=2300,tc=2301,Vo=2302,gu=2400,vu=2401,yu=2402;var gr="",pt="srgb",Lr="srgb-linear",Za="linear",Je="srgb";var Qi=7680;var Gm=512,Wm=513,jm=514,Xm=515,$m=516,qm=517,Ym=518,Jm=519,nc=35044;var _u="300 es",Tr=2e3,Sa=2001,ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ma=Math.PI/180,ic=180/Math.PI;function Vn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ct[255&i]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[255&e]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[63&t|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[255&n]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Zm(i,e){return(i%e+e)%e}function Go(i,e,t){return(1-t)*i+t*e}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=r[0],m=r[3],g=r[6],y=r[1],_=r[4],M=r[7],R=r[2],A=r[5],I=r[8];return s[0]=a*v+o*y+l*R,s[3]=a*m+o*_+l*A,s[6]=a*g+o*M+l*I,s[1]=c*v+h*y+u*R,s[4]=c*m+h*_+u*A,s[7]=c*g+h*M+u*I,s[2]=d*v+p*y+f*R,s[5]=d*m+p*_+f*A,s[8]=d*g+p*M+f*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new Ie;function Dd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Km(){let i=wa("canvas");return i.style.display="block",i}var xu={};function rs(i){i in xu||(xu[i]=!0,console.warn(i))}var je={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Je&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?Za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function _r(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Mu=[.64,.33,.3,.6,.15,.06],bu=[.2126,.7152,.0722],Su=[.3127,.329],wu=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),er;je.define({[Lr]:{primaries:Mu,whitePoint:Su,transfer:Za,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:bu,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:Mu,whitePoint:Su,transfer:Je,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:bu,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}});var rc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=wa("canvas")),er.width=e.width,er.height=e.height;let n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Gn(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Gn(t[n]/255)):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qm=0,Ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jo(r[a].image)):s.push(jo(r[a]))}else s=jo(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ef=0,Wt=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Vn(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=wd,Wt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(p+1)/2,R=(g+1)/2,A=(h+d)/4,I=(u+v)/4,O=(f+m)/4;return _>M&&_>R?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=A/n,s=I/n):M>R?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=O/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=I/s,r=O/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ta(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ea=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*v,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let R=Math.sqrt(_),A=Math.atan2(R,g*y);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let M=o*y;if(l=l*m+d*M,c=c*m+p*M,h=h*m+f*M,u=u*m+v*M,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new E,Eu=new Bt,bn=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Hs.subVectors(this.max,Yr),tr.subVectors(e.a,Yr),nr.subVectors(e.b,Yr),ir.subVectors(e.c,Yr),Kn.subVectors(nr,tr),Qn.subVectors(ir,nr),_i.subVectors(tr,ir);let t=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!!$o(t,tr,nr,ir,Hs)&&(t=[1,0,0,0,1,0,0,0,1],!!$o(t,tr,nr,ir,Hs)&&(Vs.crossVectors(Kn,Qn),t=[Vs.x,Vs.y,Vs.z],$o(t,tr,nr,ir,Hs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(rn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Un=[new E,new E,new E,new E,new E,new E,new E,new E],rn=new E,zs=new bn,tr=new E,nr=new E,ir=new E,Kn=new E,Qn=new E,_i=new E,Yr=new E,Hs=new E,Vs=new E,xi=new E;function $o(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xi.fromArray(i,s);let o=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tf=new bn,Jr=new E,qo=new E,Sn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Jr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(qo)),this.expandByPoint(Jr.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new E,Yo=new E,Gs=new E,ei=new E,Jo=new E,Ws=new E,Zo=new E,Pi=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yo.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Yo);let s=.5*e.distanceTo(t),a=-this.direction.dot(Gs),o=ei.dot(this.direction),l=-ei.dot(Gs),c=ei.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Yo).addScaledVector(Gs,d),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){Jo.subVectors(t,e),Ws.subVectors(n,e),Zo.crossVectors(Jo,Ws);let a,o=this.direction.dot(Zo);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ei.subVectors(this.origin,e);let l=a*this.direction.dot(Ws.crossVectors(ei,Ws));if(l<0)return null;let c=a*this.direction.dot(Jo.cross(ei));if(c<0||l+c>o)return null;let h=-a*ei.dot(Zo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,f,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,v,m)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,rf)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),ti.crossVectors(n,Vt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),ti.crossVectors(n,Vt)),ti.normalize(),js.crossVectors(Vt,ti),r[0]=ti.x,r[4]=js.x,r[8]=Vt.x,r[1]=ti.y,r[5]=js.y,r[9]=Vt.y,r[2]=ti.z,r[6]=js.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],g=n[14],y=n[3],_=n[7],M=n[11],R=n[15],A=r[0],I=r[4],O=r[8],k=r[12],G=r[1],j=r[5],V=r[9],q=r[13],W=r[2],J=r[6],K=r[10],se=r[14],ie=r[3],ve=r[7],Me=r[11],ne=r[15];return s[0]=a*A+o*G+l*W+c*ie,s[4]=a*I+o*j+l*J+c*ve,s[8]=a*O+o*V+l*K+c*Me,s[12]=a*k+o*q+l*se+c*ne,s[1]=h*A+u*G+d*W+p*ie,s[5]=h*I+u*j+d*J+p*ve,s[9]=h*O+u*V+d*K+p*Me,s[13]=h*k+u*q+d*se+p*ne,s[2]=f*A+v*G+m*W+g*ie,s[6]=f*I+v*j+m*J+g*ve,s[10]=f*O+v*V+m*K+g*Me,s[14]=f*k+v*q+m*se+g*ne,s[3]=y*A+_*G+M*W+R*ie,s[7]=y*I+_*j+M*J+R*ve,s[11]=y*O+_*V+M*K+R*Me,s[15]=y*k+_*q+M*se+R*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],y=u*m*c-v*d*c+v*l*p-o*m*p-u*l*g+o*d*g,_=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,M=h*v*c-f*u*c+f*o*p-a*v*p-h*o*g+a*u*g,R=f*u*l-h*v*l-f*o*d+a*v*d+h*o*m-a*u*m,A=t*y+n*_+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=y*I,e[1]=(v*d*s-u*m*s-v*r*p+n*m*p+u*r*g-n*d*g)*I,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*g+n*l*g)*I,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*I,e[4]=_*I,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*g+t*d*g)*I,e[6]=(f*l*s-a*m*s-f*r*c+t*m*c+a*r*g-t*l*g)*I,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*I,e[8]=M*I,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*g-t*u*g)*I,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*g+t*o*g)*I,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*I,e[12]=R*I,e[13]=(h*v*r-f*u*r+f*n*d-t*v*d-h*n*m+t*u*m)*I,e[14]=(f*o*r-a*v*r-f*n*l+t*v*l+a*n*m-t*o*m)*I,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,m=a*u,g=o*u,y=l*c,_=l*h,M=l*u,R=n.x,A=n.y,I=n.z;return r[0]=(1-(v+g))*R,r[1]=(p+M)*R,r[2]=(f-_)*R,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(d+g))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(f+_)*I,r[9]=(m-y)*I,r[10]=(1-(d+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=rr.set(r[0],r[1],r[2]).length(),a=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);let l=1/s,c=1/a,h=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=c,sn.elements[5]*=c,sn.elements[6]*=c,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===Tr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Sa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,f,v;if(o===Tr)f=(a+s)*u,v=-2*u;else{if(o!==Sa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rr=new E,sn=new Ne,nf=new E(0,0,0),rf=new E(1,1,1),ti=new E,js=new E,Vt=new E,Au=new Ne,Ru=new Bt,Et=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Et.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},sf=0,Cu=new E,sr=new Bt,Dn=new Ne,Xs=new E,Zr=new E,af=new E,of=new Bt,Pu=new E(1,0,0),Iu=new E(0,1,0),Lu=new E(0,0,1),Uu={type:"added"},lf={type:"removed"},ar={type:"childadded",child:null},Ko={type:"childremoved",child:null},It=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new Et,n=new Bt,r=new E(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ie}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Cu.copy(e).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Zr,Xs,this.up):Dn.lookAt(Xs,Zr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Dn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uu),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uu),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};It.DEFAULT_UP=new E(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new E,On=new E,Qo=new E,kn=new E,or=new E,lr=new E,Nu=new E,el=new E,tl=new E,nl=new E,il=new rt,rl=new rt,sl=new rt,Bn=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),On.subVectors(n,t),Qo.subVectors(e,t);let a=an.dot(an),o=an.dot(On),l=an.dot(Qo),c=On.dot(On),h=On.dot(Qo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn)!==null&&kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return il.setScalar(0),rl.setScalar(0),sl.setScalar(0),il.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(il,s.x),a.addScaledVector(rl,s.y),a.addScaledVector(sl,s.z),a}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),On.subVectors(e,t),an.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),On.subVectors(this.a,this.b),.5*an.cross(On).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;or.subVectors(r,n),lr.subVectors(s,n),el.subVectors(e,n);let l=or.dot(el),c=lr.dot(el);if(l<=0&&c<=0)return t.copy(n);tl.subVectors(e,r);let h=or.dot(tl),u=lr.dot(tl);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(or,a);nl.subVectors(e,s);let p=or.dot(nl),f=lr.dot(nl);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(lr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Nu.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(Nu,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},$s={h:0,s:0,l:0};function al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=Zm(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=al(a,s,e+1/3),this.g=al(a,s,e),this.b=al(a,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return je.fromWorkingColorSpace(Pt.copy(this),e),65536*Math.round(Tt(255*Pt.r,0,255))+256*Math.round(Tt(255*Pt.g,0,255))+Math.round(Tt(255*Pt.b,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Pt.copy(this),t);let n=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=pt){je.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,r=Pt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL($s);let n=Go(ni.h,$s.h,t),r=Go(ni.s,$s.s,t),s=Go(ni.l,$s.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Re;Re.NAMES=Od;var cf=0,oi=class extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Vn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wn=class extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Et,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hv=hf();function hf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var dt=new E,qs=new re,jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),e}};var Aa=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ra=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},uf=0,Yt=new Ne,ol=new It,cr=new E,Gt=new bn,Kr=new bn,bt=new E,ht=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?Ra:Aa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Gt.min,Kr.min),Gt.expandByPoint(bt),bt.addVectors(Gt.max,Kr.max),Gt.expandByPoint(bt)):(Gt.expandByPoint(Kr.min),Gt.expandByPoint(Kr.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),bt.add(cr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new E,l[O]=new E;let c=new E,h=new E,u=new E,d=new re,p=new re,f=new re,v=new E,m=new E;function g(O,k,G){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,G),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,k),f.fromBufferAttribute(s,G),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let j=1/(p.x*f.y-f.x*p.y);isFinite(j)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(j),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(j),o[O].add(v),o[k].add(v),o[G].add(v),l[O].add(m),l[k].add(m),l[G].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,k=y.length;O<k;++O){let G=y[O],j=G.start;for(let V=j,q=j+G.count;V<q;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let _=new E,M=new E,R=new E,A=new E;function I(O){R.fromBufferAttribute(r,O),A.copy(R);let k=o[O];_.copy(k),_.sub(R.multiplyScalar(R.dot(k))).normalize(),M.crossVectors(A,k);let G=M.dot(l[O])<0?-1:1;a.setXYZW(O,_.x,_.y,_.z,G)}for(let O=0,k=y.length;O<k;++O){let G=y[O],j=G.start;for(let V=j,q=j+G.count;V<q;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new Ne,Mi=new Pi,Ys=new Sn,Ou=new E,Js=new E,Zs=new E,Ks=new E,ll=new E,Qs=new E,ku=new E,ea=new E,qe=class extends It{constructor(e=new ht,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ll.fromBufferAttribute(u,e),a?Qs.addScaledVector(ll,h):Qs.addScaledVector(ll.sub(t),h))}t.add(Qs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),Ys.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ys,Ou)===null||Mi.origin.distanceToSquared(Ou)>(e.far-e.near)**2))return;Du.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Du),n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Mi)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));y<_;y+=3)r=ta(this,g,e,n,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)r=ta(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));y<_;y+=3)r=ta(this,g,e,n,c,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)r=ta(this,a,e,n,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function ta(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Js),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Ks);let h=(function(u,d,p,f,v,m,g,y){let _;if(_=d.side===1?f.intersectTriangle(g,m,v,!0,y):f.intersectTriangle(v,m,g,d.side===0,y),_===null)return null;ea.copy(y),ea.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(ea);return M<p.near||M>p.far?null:{distance:M,point:ea.clone(),object:u}})(i,e,t,n,Js,Zs,Ks,ku);if(h){let u=new E;Bn.getBarycoord(ku,Js,Zs,Ks,u),r&&(h.uv=Bn.getInterpolatedAttribute(r,o,l,c,u,new re)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,c,u,new re)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};Bn.getNormal(Js,Zs,Ks,d.normal),h.face=d,h.barycoord=u}return h}var At=class i extends ht{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,m,g,y,_,M,R,A,I,O,k){let G=M/I,j=R/O,V=M/2,q=R/2,W=A/2,J=I+1,K=O+1,se=0,ie=0,ve=new E;for(let Me=0;Me<K;Me++){let ne=Me*j-q;for(let oe=0;oe<J;oe++){let me=oe*G-V;ve[v]=me*y,ve[m]=ne*_,ve[g]=W,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[g]=A>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(oe/I),u.push(1-Me/O),se+=1}}for(let Me=0;Me<O;Me++)for(let ne=0;ne<I;ne++){let oe=d+ne+J*Me,me=d+ne+J*(Me+1),fe=d+(ne+1)+J*(Me+1),ce=d+(ne+1)+J*Me;l.push(oe,me,ce),l.push(me,fe,ce),ie+=6}o.addGroup(p,ie,k),p+=ie,d+=se}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=Er(i[t]);for(let r in n)e[r]=n[r]}return e}function kd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var df={clone:Er,merge:Nt},Tn=class extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ds=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new E,Fu=new re,Bu=new re,Dt=class extends ds{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ic*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ma*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ic*Math.atan(Math.tan(.5*Ma*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,Bu),t.subVectors(Bu,Fu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ma*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,oc=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Dt(hr,1,e,t);r.layers=this.layers,this.add(r);let s=new Dt(hr,1,e,t);s.layers=this.layers,this.add(s);let a=new Dt(hr,1,e,t);a.layers=this.layers,this.add(a);let o=new Dt(hr,1,e,t);o.layers=this.layers,this.add(o);let l=new Dt(hr,1,e,t);l.layers=this.layers,this.add(l);let c=new Dt(hr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Tr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Sa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ca=class extends Wt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Mr,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lc=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ca(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new At(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new qe(r,s),o=t.minFilter;return t.minFilter===vr&&(t.minFilter=zn),new oc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},cl=new E,pf=new E,mf=new Ie,Fn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=cl.subVectors(n,t).cross(pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mf.getNormalMatrix(e),r=this.coplanarPoint(cl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new Sn,na=new E,Ar=class{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],v=r[10],m=r[11],g=r[12],y=r[13],_=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,m-p,M-g).normalize(),n[1].setComponents(l+s,d+c,m+p,M+g).normalize(),n[2].setComponents(l+a,d+h,m+f,M+y).normalize(),n[3].setComponents(l-a,d-h,m-f,M-y).normalize(),n[4].setComponents(l-o,d-u,m-v,M-_).normalize(),t===Tr)n[5].setComponents(l+o,d+u,m+v,M+_).normalize();else{if(t!==Sa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ff(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var cn=class i extends ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){let y=g*d-a;for(let _=0;_<c;_++){let M=_*u-s;f.push(M,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let _=y+c*g,M=y+c*(g+1),R=y+1+c*(g+1),A=y+1+c*g;p.push(_,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},yn={basic:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Nt([le.common,le.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Nt([le.lights,le.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};yn.physical={uniforms:Nt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var ia={r:0,b:0,g:0},Si=new Et,gf=new Ne;function vf(i,e,t,n,r,s,a){let o=new Re(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function v(m,g){m.getRGB(ia,kd(i)),n.buffers.color.setClear(ia.r,ia.g,ia.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let g=!1,y=f(m);y===null?v(o,h):y&&y.isColor&&(v(y,1),g=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,g){let y=f(g);y&&(y.isCubeTexture||y.mapping===Ja)?(c===void 0&&(c=new qe(new At(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Er(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Si.copy(g.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(Si)),c.material.toneMapped=je.getTransfer(y.colorSpace)!==Je,u===y&&d===y.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qe(new cn(2,2),new Tn({name:"BackgroundMaterial",uniforms:Er(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&d===y.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function yf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function l(g){return i.deleteVertexArray(g)}function c(g){let y=[],_=[],M=[];for(let R=0;R<t;R++)y[R]=0,_[R]=0,M[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:_,attributeDivisors:M,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let y=0,_=g.length;y<_;y++)g[y]=0}function u(g){d(g,0)}function d(g,y){let _=s.newAttributes,M=s.enabledAttributes,R=s.attributeDivisors;_[g]=1,M[g]===0&&(i.enableVertexAttribArray(g),M[g]=1),R[g]!==y&&(i.vertexAttribDivisor(g,y),R[g]=y)}function p(){let g=s.newAttributes,y=s.enabledAttributes;for(let _=0,M=y.length;_<M;_++)y[_]!==g[_]&&(i.disableVertexAttribArray(_),y[_]=0)}function f(g,y,_,M,R,A,I){I===!0?i.vertexAttribIPointer(g,y,_,R,A):i.vertexAttribPointer(g,y,_,M,R,A)}function v(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,y,_,M,R){let A=!1,I=(function(O,k,G){let j=G.wireframe===!0,V=n[O.id];V===void 0&&(V={},n[O.id]=V);let q=V[k.id];q===void 0&&(q={},V[k.id]=q);let W=q[j];return W===void 0&&(W=c(i.createVertexArray()),q[j]=W),W})(M,_,y);s!==I&&(s=I,o(s.object)),A=(function(O,k,G,j){let V=s.attributes,q=k.attributes,W=0,J=G.getAttributes();for(let K in J)if(J[K].location>=0){let se=V[K],ie=q[K];if(ie===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),se===void 0||se.attribute!==ie||ie&&se.data!==ie.data)return!0;W++}return s.attributesNum!==W||s.index!==j})(g,M,_,R),A&&(function(O,k,G,j){let V={},q=k.attributes,W=0,J=G.getAttributes();for(let K in J)if(J[K].location>=0){let se=q[K];se===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(se=O.instanceColor));let ie={};ie.attribute=se,se&&se.data&&(ie.data=se.data),V[K]=ie,W++}s.attributes=V,s.attributesNum=W,s.index=j})(g,M,_,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,(function(O,k,G,j){h();let V=j.attributes,q=G.getAttributes(),W=k.defaultAttributeValues;for(let J in q){let K=q[J];if(K.location>=0){let se=V[J];if(se===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){let ie=se.normalized,ve=se.itemSize,Me=e.get(se);if(Me===void 0)continue;let ne=Me.buffer,oe=Me.type,me=Me.bytesPerElement,fe=oe===i.INT||oe===i.UNSIGNED_INT||se.gpuType===Qc;if(se.isInterleavedBufferAttribute){let ce=se.data,T=ce.stride,w=se.offset;if(ce.isInstancedInterleavedBuffer){for(let D=0;D<K.locationSize;D++)d(K.location+D,ce.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let D=0;D<K.locationSize;D++)u(K.location+D);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let D=0;D<K.locationSize;D++)f(K.location+D,ve/K.locationSize,oe,ie,T*me,(w+ve/K.locationSize*D)*me,fe)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<K.locationSize;ce++)d(K.location+ce,se.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<K.locationSize;ce++)u(K.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ce=0;ce<K.locationSize;ce++)f(K.location+ce,ve/K.locationSize,oe,ie,ve*me,ve/K.locationSize*ce*me,fe)}}else if(W!==void 0){let ie=W[J];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(K.location,ie);break;case 3:i.vertexAttrib3fv(K.location,ie);break;case 4:i.vertexAttrib4fv(K.location,ie);break;default:i.vertexAttrib1fv(K.location,ie)}}}}p()})(g,y,_,M),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let g in n){let y=n[g];for(let _ in y){let M=y[_];for(let R in M)l(M[R].object),delete M[R];delete y[_]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let y=n[g.id];for(let _ in y){let M=y[_];for(let R in M)l(M[R].object),delete M[R];delete y[_]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let y in n){let _=n[y];if(_[g.id]===void 0)continue;let M=_[g.id];for(let R in M)l(M[R].object),delete M[R];delete _[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function _f(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function xf(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===xn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==si&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Hn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Mf(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Fn,o=new Ie,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let y=0,_=d;y!==f;++y,_+=4)a.copy(h[y]).applyMatrix4(g,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,y=4*g,_=m.clippingState||null;l.value=_,_=c(p,u,y,d);for(let M=0;M!==y;++M)_[M]=t[M];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function bf(i){let e=new WeakMap;function t(r,s){return s===Tl?r.mapping=Mr:s===El&&(r.mapping=br),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Tl||s===El){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new lc(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Rr=class extends ds{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zu=[.125,.215,.35,.446,.526,.582],Qr=20,hl=new Rr,Hu=new Re,ul=null,dl=0,pl=0,ml=!1,Ti=(1+Math.sqrt(5))/2,ur=1/Ti,Vu=[new E(-Ti,ur,0),new E(Ti,ur,0),new E(-ur,0,Ti),new E(ur,0,Ti),new E(0,Ti,-ur),new E(0,Ti,ur),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:xs,format:xn,colorSpace:Lr,depthBuffer:!1},r=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+zu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=zu[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,g=1+v,y=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,M=6,R=3,A=2,I=1,O=new Float32Array(R*M*_),k=new Float32Array(A*M*_),G=new Float32Array(I*M*_);for(let V=0;V<_;V++){let q=V%3*2/3-1,W=V>2?0:-1,J=[q,W,0,q+2/3,W,0,q+2/3,W+1,0,q,W,0,q+2/3,W+1,0,q,W+1,0];O.set(J,R*M*V),k.set(y,A*M*V);let K=[V,V,V,V,V,V];G.set(K,I*M*V)}let j=new ht;j.setAttribute("position",new jt(O,R)),j.setAttribute("uv",new jt(k,A)),j.setAttribute("faceIndex",new jt(G,I)),o.push(j),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Qr),h=new E(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,r){let s=new Dt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Hu),l.toneMapping=0,l.autoClear=!1;let u=new wn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new qe(new At,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Hu),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):m===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let g=this._cubeSize;ra(r,m*g,v>2?g:0,g,g),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Mr||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ra(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vu[(r-s-1)%Vu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new qe(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Qr;v>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],g=0;for(let M=0;M<Qr;++M){let R=M/f,A=Math.exp(-R*R/2);m.push(A),M===0?g+=A:M<v&&(g+=2*A)}for(let M=0;M<m.length;M++)m[M]=m[M]/g;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-n;let _=this._sizeLods[r];ra(t,3*_*(r>y-4?r-y+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,hl)}};function Gu(i,e,t){let n=new Wn(i,e,t);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Wu(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ju(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sf(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Tl||s===El,o=s===Mr||s===br;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new Pa(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Pa(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function wf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tf(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,g=v.length;m<g;m+=3){let y=v[m+0],_=v[m+1],M=v[m+2];c.push(y,_,_,M,M,y)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,g=v.length/3-1;m<g;m+=3){let y=m+0,_=m+1,M=m+2;c.push(y,_,_,M,M,y)}}}let p=new(Dd(c)?Ra:Aa)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Ef(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function Af(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Rf(i,e,t){let n=new WeakMap,r=new rt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let O=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),f===!0&&(y=3);let _=a.attributes.position.count*y,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*M*4*h),A=new Ea(R,_,M,h);A.type=Hn,A.needsUpdate=!0;let I=4*y;for(let k=0;k<h;k++){let G=v[k],j=m[k],V=g[k],q=_*M*4*k;for(let W=0;W<G.count;W++){let J=W*I;d===!0&&(r.fromBufferAttribute(G,W),R[q+J+0]=r.x,R[q+J+1]=r.y,R[q+J+2]=r.z,R[q+J+3]=0),p===!0&&(r.fromBufferAttribute(j,W),R[q+J+4]=r.x,R[q+J+5]=r.y,R[q+J+6]=r.z,R[q+J+7]=0),f===!0&&(r.fromBufferAttribute(V,W),R[q+J+8]=r.x,R[q+J+9]=r.y,R[q+J+10]=r.z,R[q+J+11]=V.itemSize===4?r.w:1)}}u={count:h,texture:A,size:new re(_,M)},n.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Cf(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Ia=class extends Wt{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==hs&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Ci),n===void 0&&h===wr&&(n=Sr),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bd=new Wt,Xu=new Ia(1,1),zd=new Ea,Hd=new ac,Vd=new Ca,$u=[],qu=[],Yu=new Float32Array(16),Ju=new Float32Array(9),Zu=new Float32Array(4);function Ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=$u[r];if(s===void 0&&(s=new Float32Array(r),$u[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function If(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Lf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function Uf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Nf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),vt(t,n)}}function Df(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),vt(t,n)}}function Of(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Yu.set(n),i.uniformMatrix4fv(this.addr,!1,Yu),vt(t,n)}}function kf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ff(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Bf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function zf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Hf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Gf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function Wf(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function jf(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=515,s=Xu):s=Bd,t.setTexture2D(e||s,r)}function Xf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hd,r)}function $f(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vd,r)}function qf(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zd,r)}function Yf(i,e){i.uniform1fv(this.addr,e)}function Jf(i,e){let t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Zf(i,e){let t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Kf(i,e){let t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Qf(i,e){let t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eg(i,e){let t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tg(i,e){let t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ng(i,e){i.uniform1iv(this.addr,e)}function ig(i,e){i.uniform2iv(this.addr,e)}function rg(i,e){i.uniform3iv(this.addr,e)}function sg(i,e){i.uniform4iv(this.addr,e)}function ag(i,e){i.uniform1uiv(this.addr,e)}function og(i,e){i.uniform2uiv(this.addr,e)}function lg(i,e){i.uniform3uiv(this.addr,e)}function cg(i,e){i.uniform4uiv(this.addr,e)}function hg(i,e,t){let n=this.cache,r=e.length,s=Ka(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Bd,s[a])}function ug(i,e,t){let n=this.cache,r=e.length,s=Ka(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hd,s[a])}function dg(i,e,t){let n=this.cache,r=e.length,s=Ka(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vd,s[a])}function pg(i,e,t){let n=this.cache,r=e.length,s=Ka(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zd,s[a])}var cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Pf;case 35664:return If;case 35665:return Lf;case 35666:return Uf;case 35674:return Nf;case 35675:return Df;case 35676:return Of;case 5124:case 35670:return kf;case 35667:case 35671:return Ff;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return Hf;case 36294:return Vf;case 36295:return Gf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return qf}})(t.type)}},hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Yf;case 35664:return Jf;case 35665:return Zf;case 35666:return Kf;case 35674:return Qf;case 35675:return eg;case 35676:return tg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return rg;case 35669:case 35673:return sg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}})(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function mg(i,e,t){let n=i.name,r=n.length;for(fl.lastIndex=0;;){let s=fl.exec(n),a=fl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Ku(t,c===void 0?new cc(o,i,e):new hc(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new uc(o),Ku(t,h)),t=h}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);mg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fg=0,ed=new Ie;function td(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function gg(i,e){let t=(function(n){je._getMatrix(ed,je.workingColorSpace,n);let r=`mat3( ${ed.elements.map((s=>s.toFixed(4)))} )`;switch(je.getTransfer(n)){case Za:return[r,"LinearTransferOETF"];case Je:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vg(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sa=new E;function yg(){return je.getLuminanceCoefficients(sa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${sa.x.toFixed(4)}, ${sa.y.toFixed(4)}, ${sa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function es(i){return i!==""}function nd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(_g,Mg)}var xg=new Map;function Mg(i,e){let t=Ue[e];if(t===void 0){let n=xg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return dc(t)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(i){return i.replace(bg,Sg)}function Sg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wg(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(j){let V="SHADOWMAP_TYPE_BASIC";return j.shadowMapType===1?V="SHADOWMAP_TYPE_PCF":j.shadowMapType===2?V="SHADOWMAP_TYPE_PCF_SOFT":j.shadowMapType===3&&(V="SHADOWMAP_TYPE_VSM"),V})(t),c=(function(j){let V="ENVMAP_TYPE_CUBE";if(j.envMap)switch(j.envMapMode){case Mr:case br:V="ENVMAP_TYPE_CUBE";break;case Ja:V="ENVMAP_TYPE_CUBE_UV"}return V})(t),h=(function(j){let V="ENVMAP_MODE_REFLECTION";return j.envMap&&j.envMapMode===br&&(V="ENVMAP_MODE_REFRACTION"),V})(t),u=(function(j){let V="ENVMAP_BLENDING_NONE";if(j.envMap)switch(j.combine){case 0:V="ENVMAP_BLENDING_MULTIPLY";break;case 1:V="ENVMAP_BLENDING_MIX";break;case 2:V="ENVMAP_BLENDING_ADD"}return V})(t),d=(function(j){let V=j.envMapCubeUVHeight;if(V===null)return null;let q=Math.log2(V)-2,W=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:W,maxMip:q}})(t),p=(function(j){return[j.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",j.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)})(t),f=(function(j){let V=[];for(let q in j){let W=j[q];W!==!1&&V.push("#define "+q+" "+W)}return V.join(`
`)})(s),v=r.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(es).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(es).join(`
`),g.length>0&&(g+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),g=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ue.tonemapping_pars_fragment:"",t.toneMapping!==0?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=dc(a),a=nd(a,t),a=id(a,t),o=dc(o),o=nd(o,t),o=id(o,t),a=rd(a),o=rd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+m+a,M=y+g+o,R=Qu(r,r.VERTEX_SHADER,_),A=Qu(r,r.FRAGMENT_SHADER,M);function I(j){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(v).trim(),q=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(A).trim(),J=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,R,A);else{let se=td(r,R,"vertex"),ie=td(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+V+`
`+se+`
`+ie)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):q!==""&&W!==""||(K=!1);K&&(j.diagnostics={runnable:J,programLog:V,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:g}})}r.deleteShader(R),r.deleteShader(A),O=new xr(r,v),k=(function(V,q){let W={},J=V.getProgramParameter(q,V.ACTIVE_ATTRIBUTES);for(let K=0;K<J;K++){let se=V.getActiveAttrib(q,K),ie=se.name,ve=1;se.type===V.FLOAT_MAT2&&(ve=2),se.type===V.FLOAT_MAT3&&(ve=3),se.type===V.FLOAT_MAT4&&(ve=4),W[ie]={type:se.type,location:V.getAttribLocation(q,ie),locationSize:ve}}return W})(r,v)}let O,k;r.attachShader(v,R),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),this.getUniforms=function(){return O===void 0&&I(this),O},this.getAttributes=function(){return k===void 0&&I(this),k};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(v,37297)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}var Tg=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=Tg++,this.code=e,this.usedTimes=0}};function Eg(i,e,t,n,r,s,a){let o=new us,l=new pc,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,y,_,M){let R=_.fog,A=M.geometry,I=m.isMeshStandardMaterial?_.environment:null,O=(m.isMeshStandardMaterial?t:e).get(m.envMap||I),k=O&&O.mapping===Ja?O.image.height:null,G=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let j=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,V=j!==void 0?j.length:0,q,W,J,K,se=0;if(A.morphAttributes.position!==void 0&&(se=1),A.morphAttributes.normal!==void 0&&(se=2),A.morphAttributes.color!==void 0&&(se=3),G){let kr=yn[G];q=kr.vertexShader,W=kr.fragmentShader}else q=m.vertexShader,W=m.fragmentShader,l.update(m),J=l.getVertexShaderID(m),K=l.getFragmentShaderID(m);let ie=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Me=M.isInstancedMesh===!0,ne=M.isBatchedMesh===!0,oe=!!m.map,me=!!m.matcap,fe=!!O,ce=!!m.aoMap,T=!!m.lightMap,w=!!m.bumpMap,D=!!m.normalMap,N=!!m.displacementMap,C=!!m.emissiveMap,U=!!m.metalnessMap,b=!!m.roughnessMap,L=m.anisotropy>0,B=m.clearcoat>0,ee=m.dispersion>0,F=m.iridescence>0,Z=m.sheen>0,Y=m.transmission>0,te=L&&!!m.anisotropyMap,de=B&&!!m.clearcoatMap,he=B&&!!m.clearcoatNormalMap,_e=B&&!!m.clearcoatRoughnessMap,Te=F&&!!m.iridescenceMap,We=F&&!!m.iridescenceThicknessMap,ke=Z&&!!m.sheenColorMap,xe=Z&&!!m.sheenRoughnessMap,$e=!!m.specularMap,Qe=!!m.specularColorMap,st=!!m.specularIntensityMap,ge=Y&&!!m.transmissionMap,ze=Y&&!!m.thicknessMap,Ke=!!m.gradientMap,Bi=!!m.alphaMap,Ts=m.alphaTest>0,Kt=!!m.alphaHash,dn=!!m.extensions,hi=0;m.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(hi=i.toneMapping));let z={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:q,fragmentShader:W,defines:m.defines,customVertexShaderID:J,customFragmentShaderID:K,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ne,batchingColor:ne&&M._colorsTexture!==null,instancing:Me,instancingColor:Me&&M.instanceColor!==null,instancingMorph:Me&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Lr,alphaToCoverage:!!m.alphaToCoverage,map:oe,matcap:me,envMap:fe,envMapMode:fe&&O.mapping,envMapCubeUVHeight:k,aoMap:ce,lightMap:T,bumpMap:w,normalMap:D,displacementMap:d&&N,emissiveMap:C,normalMapObjectSpace:D&&m.normalMapType===1,normalMapTangentSpace:D&&m.normalMapType===0,metalnessMap:U,roughnessMap:b,anisotropy:L,anisotropyMap:te,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:he,clearcoatRoughnessMap:_e,dispersion:ee,iridescence:F,iridescenceMap:Te,iridescenceThicknessMap:We,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:xe,specularMap:$e,specularColorMap:Qe,specularIntensityMap:st,transmission:Y,transmissionMap:ge,thicknessMap:ze,gradientMap:Ke,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Bi,alphaTest:Ts,alphaHash:Kt,combine:m.combine,mapUv:oe&&v(m.map.channel),aoMapUv:ce&&v(m.aoMap.channel),lightMapUv:T&&v(m.lightMap.channel),bumpMapUv:w&&v(m.bumpMap.channel),normalMapUv:D&&v(m.normalMap.channel),displacementMapUv:N&&v(m.displacementMap.channel),emissiveMapUv:C&&v(m.emissiveMap.channel),metalnessMapUv:U&&v(m.metalnessMap.channel),roughnessMapUv:b&&v(m.roughnessMap.channel),anisotropyMapUv:te&&v(m.anisotropyMap.channel),clearcoatMapUv:de&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(m.sheenRoughnessMap.channel),specularMapUv:$e&&v(m.specularMap.channel),specularColorMapUv:Qe&&v(m.specularColorMap.channel),specularIntensityMapUv:st&&v(m.specularIntensityMap.channel),transmissionMapUv:ge&&v(m.transmissionMap.channel),thicknessMapUv:ze&&v(m.thicknessMap.channel),alphaMapUv:Bi&&v(m.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(D||L),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!A.attributes.uv&&(oe||Bi),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ve,skinning:M.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:se,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&y.length>0,shadowMapType:i.shadowMap.type,toneMapping:hi,decodeVideoTexture:oe&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===Je,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&je.getTransfer(m.emissiveMap.colorSpace)===Je,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:dn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dn&&m.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return z.vertexUv1s=c.has(1),z.vertexUv2s=c.has(2),z.vertexUv3s=c.has(3),c.clear(),z},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let y in m.defines)g.push(y),g.push(m.defines[y]);return m.isRawShaderMaterial===!1&&((function(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)})(g,m),(function(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)})(g,m),g.push(i.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],y;if(g){let _=yn[g];y=df.clone(_.uniforms)}else y=m.uniforms;return y},acquireProgram:function(m,g){let y;for(let _=0,M=h.length;_<M;_++){let R=h[_];if(R.cacheKey===g){y=R,++y.usedTimes;break}}return y===void 0&&(y=new wg(i,g,m,s),h.push(y)),y},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Ag(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function od(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Rg),n.length>1&&n.sort(o||ad),r.length>1&&r.sort(o||ad)}}}function Cg(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new od,i.set(e,[r])):t>=n.length?(r=new od,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Re};break;case"SpotLight":t={position:new E,direction:new E,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new E,halfWidth:new E,halfHeight:new E}}return i[e.id]=t,t}}}var Ig=0;function Lg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ug(i){let e=new Pg,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let r=new E,s=new Ne,a=new Ne;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,g=0,y=0,_=0,M=0,R=0;o.sort(Lg);for(let I=0,O=o.length;I<O;I++){let k=o[I],G=k.color,j=k.intensity,V=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)l+=G.r*j,c+=G.g*j,h+=G.b*j;else if(k.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(k.sh.coefficients[W],j);R++}else if(k.isDirectionalLight){let W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let J=k.shadow,K=t.get(k);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.directionalShadow[u]=K,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=k.shadow.matrix,m++}n.directional[u]=W,u++}else if(k.isSpotLight){let W=e.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(G).multiplyScalar(j),W.distance=V,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,n.spot[p]=W;let J=k.shadow;if(k.map&&(n.spotLightMap[_]=k.map,_++,J.updateMatrices(k),k.castShadow&&M++),n.spotLightMatrix[p]=J.matrix,k.castShadow){let K=t.get(k);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,n.spotShadow[p]=K,n.spotShadowMap[p]=q,y++}p++}else if(k.isRectAreaLight){let W=e.get(k);W.color.copy(G).multiplyScalar(j),W.halfWidth.set(.5*k.width,0,0),W.halfHeight.set(0,.5*k.height,0),n.rectArea[f]=W,f++}else if(k.isPointLight){let W=e.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),W.distance=k.distance,W.decay=k.decay,k.castShadow){let J=k.shadow,K=t.get(k);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,n.pointShadow[d]=K,n.pointShadowMap[d]=q,n.pointShadowMatrix[d]=k.shadow.matrix,g++}n.point[d]=W,d++}else if(k.isHemisphereLight){let W=e.get(k);W.skyColor.copy(k.color).multiplyScalar(j),W.groundColor.copy(k.groundColor).multiplyScalar(j),n.hemi[v]=W,v++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let A=n.hash;A.directionalLength===u&&A.pointLength===d&&A.spotLength===p&&A.rectAreaLength===f&&A.hemiLength===v&&A.numDirectionalShadows===m&&A.numPointShadows===g&&A.numSpotShadows===y&&A.numSpotMaps===_&&A.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=y+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=R,A.directionalLength=u,A.pointLength=d,A.spotLength=p,A.rectAreaLength=f,A.hemiLength=v,A.numDirectionalShadows=m,A.numPointShadows=g,A.numSpotShadows=y,A.numSpotMaps=_,A.numLightProbes=R,n.version=Ig++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let g=o[v];if(g.isDirectionalLight){let y=n.directional[c];y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),c++}else if(g.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let y=n.rectArea[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(.5*g.width,0,0),y.halfHeight.set(0,.5*g.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let y=n.hemi[p];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(f),p++}}},state:n}}function ld(i){let e=new Ug(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Ng(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new ld(i),e.set(t,[s])):n>=r.length?(s=new ld(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var fc=class extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gc=class extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dg(i,e,t){let n=new Ar,r=new re,s=new re,a=new rt,o=new fc({depthPacking:3201}),l=new gc,c={},h=t.maxTextureSize,u={[vm]:1,[ym]:0,[Kc]:2},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ht;f.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function y(A,I){let O=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wn(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,O,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,O,p,v,null)}function _(A,I,O,k){let G=null,j=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(j!==void 0)G=j;else if(G=O.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let V=G.uuid,q=I.uuid,W=c[V];W===void 0&&(W={},c[V]=W);let J=W[q];J===void 0&&(J=G.clone(),W[q]=J,I.addEventListener("dispose",R)),G=J}return G.visible=I.visible,G.wireframe=I.wireframe,G.side=k===3?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],G.alphaMap=I.alphaMap,G.alphaTest=I.alphaTest,G.map=I.map,G.clipShadows=I.clipShadows,G.clippingPlanes=I.clippingPlanes,G.clipIntersection=I.clipIntersection,G.displacementMap=I.displacementMap,G.displacementScale=I.displacementScale,G.displacementBias=I.displacementBias,G.wireframeLinewidth=I.wireframeLinewidth,G.linewidth=I.linewidth,O.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(i.properties.get(G).light=O),G}function M(A,I,O,k,G){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&G===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let V=e.update(A),q=A.material;if(Array.isArray(q)){let W=V.groups;for(let J=0,K=W.length;J<K;J++){let se=W[J],ie=q[se.materialIndex];if(ie&&ie.visible){let ve=_(A,ie,k,G);A.onBeforeShadow(i,A,I,O,V,ve,se),i.renderBufferDirect(O,null,V,ve,A,se),A.onAfterShadow(i,A,I,O,V,ve,se)}}}else if(q.visible){let W=_(A,q,k,G);A.onBeforeShadow(i,A,I,O,V,W,null),i.renderBufferDirect(O,null,V,W,A,null),A.onAfterShadow(i,A,I,O,V,W,null)}}let j=A.children;for(let V=0,q=j.length;V<q;V++)M(j[V],I,O,k,G)}function R(A){A.target.removeEventListener("dispose",R);for(let I in c){let O=c[I],k=A.target.uuid;k in O&&(O[k].dispose(),delete O[k])}}this.render=function(A,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let k=i.getRenderTarget(),G=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),V=i.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=g!==3&&this.type===3,W=g===3&&this.type!==3;for(let J=0,K=A.length;J<K;J++){let se=A[J],ie=se.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);let ve=ie.getFrameExtents();if(r.multiply(ve),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ve.x),r.x=s.x*ve.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ve.y),r.y=s.y*ve.y,ie.mapSize.y=s.y)),ie.map===null||q===!0||W===!0){let ne=this.type!==3?{minFilter:on,magFilter:on}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Wn(r.x,r.y,ne),ie.map.texture.name=se.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let Me=ie.getViewportCount();for(let ne=0;ne<Me;ne++){let oe=ie.getViewport(ne);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a),ie.updateMatrices(se,ne),n=ie.getFrustum(),M(I,O,ie.camera,se,this.type)}ie.isPointLightShadow!==!0&&this.type===3&&y(ie,O),ie.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(k,G,j)}}var Og={[Nm]:1,[Om]:6,[Fm]:7,[km]:5,[Dm]:0,[zm]:2,[Hm]:4,[Bm]:3};function kg(i,e){let t=new function(){let b=!1,L=new rt,B=null,ee=new rt(0,0,0,0);return{setMask:function(F){B===F||b||(i.colorMask(F,F,F,F),B=F)},setLocked:function(F){b=F},setClear:function(F,Z,Y,te,de){de===!0&&(F*=te,Z*=te,Y*=te),L.set(F,Z,Y,te),ee.equals(L)===!1&&(i.clearColor(F,Z,Y,te),ee.copy(L))},reset:function(){b=!1,B=null,ee.set(-1,0,0,0)}}},n=new function(){let b=!1,L=!1,B=null,ee=null,F=null;return{setReversed:function(Z){if(L!==Z){let Y=e.get("EXT_clip_control");L?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT);let te=F;F=null,this.setClear(te)}L=Z},getReversed:function(){return L},setTest:function(Z){Z?fe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Z){B===Z||b||(i.depthMask(Z),B=Z)},setFunc:function(Z){if(L&&(Z=Og[Z]),ee!==Z){switch(Z){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}ee=Z}},setLocked:function(Z){b=Z},setClear:function(Z){F!==Z&&(L&&(Z=1-Z),i.clearDepth(Z),F=Z)},reset:function(){b=!1,B=null,ee=null,F=null,L=!1}}},r=new function(){let b=!1,L=null,B=null,ee=null,F=null,Z=null,Y=null,te=null,de=null;return{setTest:function(he){b||(he?fe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(he){L===he||b||(i.stencilMask(he),L=he)},setFunc:function(he,_e,Te){B===he&&ee===_e&&F===Te||(i.stencilFunc(he,_e,Te),B=he,ee=_e,F=Te)},setOp:function(he,_e,Te){Z===he&&Y===_e&&te===Te||(i.stencilOp(he,_e,Te),Z=he,Y=_e,te=Te)},setLocked:function(he){b=he},setClear:function(he){de!==he&&(i.clearStencil(he),de=he)},reset:function(){b=!1,L=null,B=null,ee=null,F=null,Z=null,Y=null,te=null,de=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,y=null,_=null,M=new Re(0,0,0),R=0,A=!1,I=null,O=null,k=null,G=null,j=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=W>=2);let K=null,se={},ie=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Me=new rt().fromArray(ie),ne=new rt().fromArray(ve);function oe(b,L,B,ee){let F=new Uint8Array(4),Z=i.createTexture();i.bindTexture(b,Z),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Y=0;Y<B;Y++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(L+Y,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return Z}let me={};function fe(b){o[b]!==!0&&(i.enable(b),o[b]=!0)}function ce(b){o[b]!==!1&&(i.disable(b),o[b]=!1)}me[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),fe(i.DEPTH_TEST),n.setFunc(3),N(!1),C(1),fe(i.CULL_FACE),D(0);let T={[Ei]:i.FUNC_ADD,[_m]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};T[103]=i.MIN,T[104]=i.MAX;let w={[Mm]:i.ZERO,[bm]:i.ONE,[Sm]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[Cm]:i.SRC_ALPHA_SATURATE,[Am]:i.DST_COLOR,[Tm]:i.DST_ALPHA,[wm]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Rm]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Pm]:i.CONSTANT_COLOR,[Im]:i.ONE_MINUS_CONSTANT_COLOR,[Lm]:i.CONSTANT_ALPHA,[Um]:i.ONE_MINUS_CONSTANT_ALPHA};function D(b,L,B,ee,F,Z,Y,te,de,he){if(b!==0){if(d===!1&&(fe(i.BLEND),d=!0),b===5)F=F||L,Z=Z||B,Y=Y||ee,L===f&&F===g||(i.blendEquationSeparate(T[L],T[F]),f=L,g=F),B===v&&ee===m&&Z===y&&Y===_||(i.blendFuncSeparate(w[B],w[ee],w[Z],w[Y]),v=B,m=ee,y=Z,_=Y),te.equals(M)!==!1&&de===R||(i.blendColor(te.r,te.g,te.b,de),M.copy(te),R=de),p=b,A=!1;else if(b!==p||he!==A){if(f===Ei&&g===Ei||(i.blendEquation(i.FUNC_ADD),f=Ei,g=Ei),he)switch(b){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}v=null,m=null,y=null,_=null,M.set(0,0,0),R=0,p=b,A=he}}else d===!0&&(ce(i.BLEND),d=!1)}function N(b){I!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),I=b)}function C(b){b!==0?(fe(i.CULL_FACE),b!==O&&(b===1?i.cullFace(i.BACK):b===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),O=b}function U(b,L,B){b?(fe(i.POLYGON_OFFSET_FILL),G===L&&j===B||(i.polygonOffset(L,B),G=L,j=B)):ce(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:fe,disable:ce,bindFramebuffer:function(b,L){return l[b]!==L&&(i.bindFramebuffer(b,L),l[b]=L,b===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=L),b===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(b,L){let B=h,ee=!1;if(b){B=c.get(L),B===void 0&&(B=[],c.set(L,B));let F=b.textures;if(B.length!==F.length||B[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Y=F.length;Z<Y;Z++)B[Z]=i.COLOR_ATTACHMENT0+Z;B.length=F.length,ee=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,ee=!0);ee&&i.drawBuffers(B)},useProgram:function(b){return u!==b&&(i.useProgram(b),u=b,!0)},setBlending:D,setMaterial:function(b,L){b.side===2?ce(i.CULL_FACE):fe(i.CULL_FACE);let B=b.side===1;L&&(B=!B),N(B),b.blending===1&&b.transparent===!1?D(0):D(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let ee=b.stencilWrite;r.setTest(ee),ee&&(r.setMask(b.stencilWriteMask),r.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),r.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),U(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:N,setCullFace:C,setLineWidth:function(b){b!==k&&(q&&i.lineWidth(b),k=b)},setPolygonOffset:U,setScissorTest:function(b){b?fe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+V-1),K!==b&&(i.activeTexture(b),K=b)},bindTexture:function(b,L,B){B===void 0&&(B=K===null?i.TEXTURE0+V-1:K);let ee=se[B];ee===void 0&&(ee={type:void 0,texture:void 0},se[B]=ee),ee.type===b&&ee.texture===L||(K!==B&&(i.activeTexture(B),K=B),i.bindTexture(b,L||me[b]),ee.type=b,ee.texture=L)},unbindTexture:function(){let b=se[K];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,L){let B=a.get(L);B===void 0&&(B=new WeakMap,a.set(L,B));let ee=B.get(b);ee===void 0&&(ee=i.getUniformBlockIndex(L,b.name),B.set(b,ee))},uniformBlockBinding:function(b,L){let B=a.get(L).get(b);s.get(L)!==B&&(i.uniformBlockBinding(L,B,b.__bindingPointIndex),s.set(L,B))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){Me.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),Me.copy(b))},viewport:function(b){ne.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),ne.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},K=null,se={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,y=null,_=null,M=new Re(0,0,0),R=0,A=!1,I=null,O=null,k=null,G=null,j=null,Me.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function cd(i,e,t,n){let r=(function(s){switch(s){case si:case Td:return{byteLength:1,components:1};case cs:case Ed:case xs:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Ci:case Qc:case Hn:return{byteLength:4,components:1};case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case Rd:case Pd:return i*e;case Id:return i*e*2;case Ld:case nh:return i*e/r.components*r.byteLength;case Ud:case ih:return i*e*2/r.components*r.byteLength;case Cd:return i*e*3/r.components*r.byteLength;case xn:case rh:return i*e*4/r.components*r.byteLength;case ga:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(i,16)*Math.max(e,8)/4;case Cl:case Il:return Math.max(i,8)*Math.max(e,8)/2;case Ul:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xa:case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nd:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fg(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,w){return p?new OffscreenCanvas(T,w):wa("canvas")}function v(T,w,D){let N=1,C=ce(T);if((C.width>D||C.height>D)&&(N=D/Math.max(C.width,C.height)),N<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let U=Math.floor(N*C.width),b=Math.floor(N*C.height);u===void 0&&(u=f(U,b));let L=w?f(U,b):u;return L.width=U,L.height=b,L.getContext("2d").drawImage(T,0,0,U,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+U+"x"+b+")."),L}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),T}return T}function m(T){return T.generateMipmaps}function g(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,w,D,N,C=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let U=w;if(w===i.RED&&(D===i.FLOAT&&(U=i.R32F),D===i.HALF_FLOAT&&(U=i.R16F),D===i.UNSIGNED_BYTE&&(U=i.R8)),w===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(U=i.R8UI),D===i.UNSIGNED_SHORT&&(U=i.R16UI),D===i.UNSIGNED_INT&&(U=i.R32UI),D===i.BYTE&&(U=i.R8I),D===i.SHORT&&(U=i.R16I),D===i.INT&&(U=i.R32I)),w===i.RG&&(D===i.FLOAT&&(U=i.RG32F),D===i.HALF_FLOAT&&(U=i.RG16F),D===i.UNSIGNED_BYTE&&(U=i.RG8)),w===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(U=i.RG8UI),D===i.UNSIGNED_SHORT&&(U=i.RG16UI),D===i.UNSIGNED_INT&&(U=i.RG32UI),D===i.BYTE&&(U=i.RG8I),D===i.SHORT&&(U=i.RG16I),D===i.INT&&(U=i.RG32I)),w===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(U=i.RGB8UI),D===i.UNSIGNED_SHORT&&(U=i.RGB16UI),D===i.UNSIGNED_INT&&(U=i.RGB32UI),D===i.BYTE&&(U=i.RGB8I),D===i.SHORT&&(U=i.RGB16I),D===i.INT&&(U=i.RGB32I)),w===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),D===i.UNSIGNED_INT&&(U=i.RGBA32UI),D===i.BYTE&&(U=i.RGBA8I),D===i.SHORT&&(U=i.RGBA16I),D===i.INT&&(U=i.RGBA32I)),w===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),w===i.RGBA){let b=C?Za:je.getTransfer(N);D===i.FLOAT&&(U=i.RGBA32F),D===i.HALF_FLOAT&&(U=i.RGBA16F),D===i.UNSIGNED_BYTE&&(U=b===Je?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return U!==i.R16F&&U!==i.R32F&&U!==i.RG16F&&U!==i.RG32F&&U!==i.RGBA16F&&U!==i.RGBA32F||e.get("EXT_color_buffer_float"),U}function M(T,w){let D;return T?w===null||w===Ci||w===Sr?D=i.DEPTH24_STENCIL8:w===Hn?D=i.DEPTH32F_STENCIL8:w===cs&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ci||w===Sr?D=i.DEPTH_COMPONENT24:w===Hn?D=i.DEPTH_COMPONENT32F:w===cs&&(D=i.DEPTH_COMPONENT16),D}function R(T,w){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function A(T){let w=T.target;w.removeEventListener("dispose",A),(function(D){let N=n.get(D);if(N.__webglInit===void 0)return;let C=D.source,U=d.get(C);if(U){let b=U[N.__cacheKey];b.usedTimes--,b.usedTimes===0&&O(D),Object.keys(U).length===0&&d.delete(C)}n.remove(D)})(w),w.isVideoTexture&&h.delete(w)}function I(T){let w=T.target;w.removeEventListener("dispose",I),(function(D){let N=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(N.__webglFramebuffer[U]))for(let b=0;b<N.__webglFramebuffer[U].length;b++)i.deleteFramebuffer(N.__webglFramebuffer[U][b]);else i.deleteFramebuffer(N.__webglFramebuffer[U]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[U])}else{if(Array.isArray(N.__webglFramebuffer))for(let U=0;U<N.__webglFramebuffer.length;U++)i.deleteFramebuffer(N.__webglFramebuffer[U]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let U=0;U<N.__webglColorRenderbuffer.length;U++)N.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[U]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let C=D.textures;for(let U=0,b=C.length;U<b;U++){let L=n.get(C[U]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(C[U])}n.remove(D)})(w)}function O(T){let w=n.get(T);i.deleteTexture(w.__webglTexture);let D=T.source;delete d.get(D)[w.__cacheKey],a.memory.textures--}let k=0;function G(T,w){let D=n.get(T);if(T.isVideoTexture&&(function(N){let C=a.render.frame;h.get(N)!==C&&(h.set(N,C),N.update())})(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){let N=T.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void K(D,T,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+w)}let j={[Al]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[Rl]:i.MIRRORED_REPEAT},V={[on]:i.NEAREST,[Vm]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[vr]:i.LINEAR_MIPMAP_LINEAR},q={[Gm]:i.NEVER,[Jm]:i.ALWAYS,[Wm]:i.LESS,[Xm]:i.LEQUAL,[jm]:i.EQUAL,[Ym]:i.GEQUAL,[$m]:i.GREATER,[qm]:i.NOTEQUAL};function W(T,w){if(w.type!==Hn||e.has("OES_texture_float_linear")!==!1||w.magFilter!==zn&&w.magFilter!==Ho&&w.magFilter!==Bs&&w.magFilter!==vr&&w.minFilter!==zn&&w.minFilter!==Ho&&w.minFilter!==Bs&&w.minFilter!==vr||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,j[w.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,j[w.wrapT]),T!==i.TEXTURE_3D&&T!==i.TEXTURE_2D_ARRAY||i.texParameteri(T,i.TEXTURE_WRAP_R,j[w.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,V[w.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,V[w.minFilter]),w.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===on||w.minFilter!==Bs&&w.minFilter!==vr||w.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function J(T,w){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",A));let N=w.source,C=d.get(N);C===void 0&&(C={},d.set(N,C));let U=(function(b){let L=[];return L.push(b.wrapS),L.push(b.wrapT),L.push(b.wrapR||0),L.push(b.magFilter),L.push(b.minFilter),L.push(b.anisotropy),L.push(b.internalFormat),L.push(b.format),L.push(b.type),L.push(b.generateMipmaps),L.push(b.premultiplyAlpha),L.push(b.flipY),L.push(b.unpackAlignment),L.push(b.colorSpace),L.join()})(w);if(U!==T.__cacheKey){C[U]===void 0&&(C[U]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),C[U].usedTimes++;let b=C[T.__cacheKey];b!==void 0&&(C[T.__cacheKey].usedTimes--,b.usedTimes===0&&O(w)),T.__cacheKey=U,T.__webglTexture=C[U].texture}return D}function K(T,w,D){let N=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(N=i.TEXTURE_3D);let C=J(T,w),U=w.source;t.bindTexture(N,T.__webglTexture,i.TEXTURE0+D);let b=n.get(U);if(U.version!==b.__version||C===!0){t.activeTexture(i.TEXTURE0+D);let L=je.getPrimaries(je.workingColorSpace),B=w.colorSpace===gr?null:je.getPrimaries(w.colorSpace),ee=w.colorSpace===gr||L===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let F=v(w.image,!1,r.maxTextureSize);F=fe(w,F);let Z=s.convert(w.format,w.colorSpace),Y=s.convert(w.type),te,de=_(w.internalFormat,Z,Y,w.colorSpace,w.isVideoTexture);W(N,w);let he=w.mipmaps,_e=w.isVideoTexture!==!0,Te=b.__version===void 0||C===!0,We=U.dataReady,ke=R(w,F);if(w.isDepthTexture)de=M(w.format===wr,w.type),Te&&(_e?t.texStorage2D(i.TEXTURE_2D,1,de,F.width,F.height):t.texImage2D(i.TEXTURE_2D,0,de,F.width,F.height,0,Z,Y,null));else if(w.isDataTexture)if(he.length>0){_e&&Te&&t.texStorage2D(i.TEXTURE_2D,ke,de,he[0].width,he[0].height);for(let xe=0,$e=he.length;xe<$e;xe++)te=he[xe],_e?We&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,te.width,te.height,Z,Y,te.data):t.texImage2D(i.TEXTURE_2D,xe,de,te.width,te.height,0,Z,Y,te.data);w.generateMipmaps=!1}else _e?(Te&&t.texStorage2D(i.TEXTURE_2D,ke,de,F.width,F.height),We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,Z,Y,F.data)):t.texImage2D(i.TEXTURE_2D,0,de,F.width,F.height,0,Z,Y,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_e&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,de,he[0].width,he[0].height,F.depth);for(let xe=0,$e=he.length;xe<$e;xe++)if(te=he[xe],w.format!==xn)if(Z!==null)if(_e){if(We)if(w.layerUpdates.size>0){let Qe=cd(te.width,te.height,w.format,w.type);for(let st of w.layerUpdates){let ge=te.data.subarray(st*Qe/te.data.BYTES_PER_ELEMENT,(st+1)*Qe/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,st,te.width,te.height,1,Z,ge)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,te.width,te.height,F.depth,Z,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,de,te.width,te.height,F.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,te.width,te.height,F.depth,Z,Y,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,de,te.width,te.height,F.depth,0,Z,Y,te.data)}else{_e&&Te&&t.texStorage2D(i.TEXTURE_2D,ke,de,he[0].width,he[0].height);for(let xe=0,$e=he.length;xe<$e;xe++)te=he[xe],w.format!==xn?Z!==null?_e?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,te.width,te.height,Z,te.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,de,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?We&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,te.width,te.height,Z,Y,te.data):t.texImage2D(i.TEXTURE_2D,xe,de,te.width,te.height,0,Z,Y,te.data)}else if(w.isDataArrayTexture)if(_e){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,de,F.width,F.height,F.depth),We)if(w.layerUpdates.size>0){let xe=cd(F.width,F.height,w.format,w.type);for(let $e of w.layerUpdates){let Qe=F.data.subarray($e*xe/F.data.BYTES_PER_ELEMENT,($e+1)*xe/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$e,F.width,F.height,1,Z,Y,Qe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,Z,Y,F.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,F.width,F.height,F.depth,0,Z,Y,F.data);else if(w.isData3DTexture)_e?(Te&&t.texStorage3D(i.TEXTURE_3D,ke,de,F.width,F.height,F.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,Z,Y,F.data)):t.texImage3D(i.TEXTURE_3D,0,de,F.width,F.height,F.depth,0,Z,Y,F.data);else if(w.isFramebufferTexture){if(Te)if(_e)t.texStorage2D(i.TEXTURE_2D,ke,de,F.width,F.height);else{let xe=F.width,$e=F.height;for(let Qe=0;Qe<ke;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,de,xe,$e,0,Z,Y,null),xe>>=1,$e>>=1}}else if(he.length>0){if(_e&&Te){let xe=ce(he[0]);t.texStorage2D(i.TEXTURE_2D,ke,de,xe.width,xe.height)}for(let xe=0,$e=he.length;xe<$e;xe++)te=he[xe],_e?We&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Z,Y,te):t.texImage2D(i.TEXTURE_2D,xe,de,Z,Y,te);w.generateMipmaps=!1}else if(_e){if(Te){let xe=ce(F);t.texStorage2D(i.TEXTURE_2D,ke,de,xe.width,xe.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,Y,F)}else t.texImage2D(i.TEXTURE_2D,0,de,Z,Y,F);m(w)&&g(N),b.__version=U.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function se(T,w,D,N,C,U){let b=s.convert(D.format,D.colorSpace),L=s.convert(D.type),B=_(D.internalFormat,b,L,D.colorSpace),ee=n.get(w),F=n.get(D);if(F.__renderTarget=w,!ee.__hasExternalTextures){let Z=Math.max(1,w.width>>U),Y=Math.max(1,w.height>>U);C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?t.texImage3D(C,U,B,Z,Y,w.depth,0,b,L,null):t.texImage2D(C,U,B,Z,Y,0,b,L,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,C,F.__webglTexture,0,oe(w)):(C===i.TEXTURE_2D||C>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,C,F.__webglTexture,U),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,w,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),w.depthBuffer){let N=w.depthTexture,C=N&&N.isDepthTexture?N.type:null,U=M(w.stencilBuffer,C),b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=oe(w);me(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,U,w.width,w.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,U,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,U,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,T)}else{let N=w.textures;for(let C=0;C<N.length;C++){let U=N[C],b=s.convert(U.format,U.colorSpace),L=s.convert(U.type),B=_(U.internalFormat,b,L,U.colorSpace),ee=oe(w);D&&me(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,B,w.width,w.height):me(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,B,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,B,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(T){let w=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==T.depthTexture){let N=T.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),N){let C=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,N.removeEventListener("dispose",C)};N.addEventListener("dispose",C),w.__depthDisposeCallback=C}w.__boundDepthTexture=N}if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(C.depthTexture);U.__renderTarget=C,U.__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);let b=U.__webglTexture,L=oe(C);if(C.depthTexture.format===hs)me(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,b,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,b,0);else{if(C.depthTexture.format!==wr)throw new Error("Unknown depthTexture format");me(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,b,0,L):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,b,0)}})(w.__webglFramebuffer,T)}else if(D){w.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[N]),w.__webglDepthbuffer[N]===void 0)w.__webglDepthbuffer[N]=i.createRenderbuffer(),ie(w.__webglDepthbuffer[N],T,!1);else{let C=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=w.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,U)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ie(w.__webglDepthbuffer,T,!1);else{let N=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,C)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Me=[],ne=[];function oe(T){return Math.min(r.maxSamples,T.samples)}function me(T){let w=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fe(T,w){let D=T.colorSpace,N=T.format,C=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Lr&&D!==gr&&(je.getTransfer(D)===Je?N===xn&&C===si||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),w}function ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=function(){let T=k;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),k+=1,T},this.resetTextureUnits=function(){k=0},this.setTexture2D=G,this.setTexture2DArray=function(T,w){let D=n.get(T);T.version>0&&D.__version!==T.version?K(D,T,w):t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+w)},this.setTexture3D=function(T,w){let D=n.get(T);T.version>0&&D.__version!==T.version?K(D,T,w):t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+w)},this.setTextureCube=function(T,w){let D=n.get(T);T.version>0&&D.__version!==T.version?(function(N,C,U){if(C.image.length!==6)return;let b=J(N,C),L=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+U);let B=n.get(L);if(L.version!==B.__version||b===!0){t.activeTexture(i.TEXTURE0+U);let ee=je.getPrimaries(je.workingColorSpace),F=C.colorSpace===gr?null:je.getPrimaries(C.colorSpace),Z=C.colorSpace===gr||ee===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let Y=C.isCompressedTexture||C.image[0].isCompressedTexture,te=C.image[0]&&C.image[0].isDataTexture,de=[];for(let ge=0;ge<6;ge++)de[ge]=Y||te?te?C.image[ge].image:C.image[ge]:v(C.image[ge],!0,r.maxCubemapSize),de[ge]=fe(C,de[ge]);let he=de[0],_e=s.convert(C.format,C.colorSpace),Te=s.convert(C.type),We=_(C.internalFormat,_e,Te,C.colorSpace),ke=C.isVideoTexture!==!0,xe=B.__version===void 0||b===!0,$e=L.dataReady,Qe,st=R(C,he);if(W(i.TEXTURE_CUBE_MAP,C),Y){ke&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,We,he.width,he.height);for(let ge=0;ge<6;ge++){Qe=de[ge].mipmaps;for(let ze=0;ze<Qe.length;ze++){let Ke=Qe[ze];C.format!==xn?_e!==null?ke?$e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Ke.width,Ke.height,_e,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,We,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,0,0,Ke.width,Ke.height,_e,Te,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze,We,Ke.width,Ke.height,0,_e,Te,Ke.data)}}}else{if(Qe=C.mipmaps,ke&&xe){Qe.length>0&&st++;let ge=ce(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,st,We,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(te){ke?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,de[ge].width,de[ge].height,_e,Te,de[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,de[ge].width,de[ge].height,0,_e,Te,de[ge].data);for(let ze=0;ze<Qe.length;ze++){let Ke=Qe[ze].image[ge].image;ke?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,Ke.width,Ke.height,_e,Te,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,We,Ke.width,Ke.height,0,_e,Te,Ke.data)}}else{ke?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,_e,Te,de[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,We,_e,Te,de[ge]);for(let ze=0;ze<Qe.length;ze++){let Ke=Qe[ze];ke?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,0,0,_e,Te,Ke.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze+1,We,_e,Te,Ke.image[ge])}}}m(C)&&g(i.TEXTURE_CUBE_MAP),B.__version=L.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version})(D,T,w):t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+w)},this.rebindTextures=function(T,w,D){let N=n.get(T);w!==void 0&&se(N.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&ve(T)},this.setupRenderTarget=function(T){let w=T.texture,D=n.get(T),N=n.get(w);T.addEventListener("dispose",I);let C=T.textures,U=T.isWebGLCubeRenderTarget===!0,b=C.length>1;if(b||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=w.version,a.memory.textures++),U){D.__webglFramebuffer=[];for(let L=0;L<6;L++)if(w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer[L]=[];for(let B=0;B<w.mipmaps.length;B++)D.__webglFramebuffer[L][B]=i.createFramebuffer()}else D.__webglFramebuffer[L]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer=[];for(let L=0;L<w.mipmaps.length;L++)D.__webglFramebuffer[L]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(b)for(let L=0,B=C.length;L<B;L++){let ee=n.get(C[L]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let L=0;L<C.length;L++){let B=C[L];D.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[L]);let ee=s.convert(B.format,B.colorSpace),F=s.convert(B.type),Z=_(B.internalFormat,ee,F,B.colorSpace,T.isXRRenderTarget===!0),Y=oe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,D.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),W(i.TEXTURE_CUBE_MAP,w);for(let L=0;L<6;L++)if(w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)se(D.__webglFramebuffer[L][B],T,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,B);else se(D.__webglFramebuffer[L],T,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);m(w)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(b){for(let L=0,B=C.length;L<B;L++){let ee=C[L],F=n.get(ee);t.bindTexture(i.TEXTURE_2D,F.__webglTexture),W(i.TEXTURE_2D,ee),se(D.__webglFramebuffer,T,ee,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),m(ee)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let L=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(L=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(L,N.__webglTexture),W(L,w),w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)se(D.__webglFramebuffer[B],T,w,i.COLOR_ATTACHMENT0,L,B);else se(D.__webglFramebuffer,T,w,i.COLOR_ATTACHMENT0,L,0);m(w)&&g(L),t.unbindTexture()}T.depthBuffer&&ve(T)},this.updateRenderTargetMipmap=function(T){let w=T.textures;for(let D=0,N=w.length;D<N;D++){let C=w[D];if(m(C)){let U=y(T),b=n.get(C).__webglTexture;t.bindTexture(U,b),g(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(me(T)===!1){let w=T.textures,D=T.width,N=T.height,C=i.COLOR_BUFFER_BIT,U=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,b=n.get(T),L=w.length>1;if(L)for(let B=0;B<w.length;B++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,b.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglFramebuffer);for(let B=0;B<w.length;B++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(C|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(C|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,b.__webglColorRenderbuffer[B]);let ee=n.get(w[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,D,N,0,0,D,N,C,i.NEAREST),l===!0&&(Me.length=0,ne.length=0,Me.push(i.COLOR_ATTACHMENT0+B),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Me.push(U),ne.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let B=0;B<w.length;B++){t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,b.__webglColorRenderbuffer[B]);let ee=n.get(w[B]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let w=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=me}function Bg(i,e){return{convert:function(t,n=""){let r,s=je.getTransfer(n);if(t===si)return i.UNSIGNED_BYTE;if(t===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(t===th)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Td)return i.BYTE;if(t===Ed)return i.SHORT;if(t===cs)return i.UNSIGNED_SHORT;if(t===Qc)return i.INT;if(t===Ci)return i.UNSIGNED_INT;if(t===Hn)return i.FLOAT;if(t===xs)return i.HALF_FLOAT;if(t===Rd)return i.ALPHA;if(t===Cd)return i.RGB;if(t===xn)return i.RGBA;if(t===Pd)return i.LUMINANCE;if(t===Id)return i.LUMINANCE_ALPHA;if(t===hs)return i.DEPTH_COMPONENT;if(t===wr)return i.DEPTH_STENCIL;if(t===Ld)return i.RED;if(t===nh)return i.RED_INTEGER;if(t===Ud)return i.RG;if(t===ih)return i.RG_INTEGER;if(t===rh)return i.RGBA_INTEGER;if(t===ga||t===va||t===ya||t===_a)if(s===Je){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Cl||t===Pl||t===Il||t===Ll){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ul||t===Nl||t===Dl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Ul||t===Nl)return s===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Dl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Ol||t===kl||t===Fl||t===Bl||t===zl||t===Hl||t===Vl||t===Gl||t===Wl||t===jl||t===Xl||t===$l||t===ql||t===Yl){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Ol)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===kl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Fl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Bl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===zl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Hl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Vl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Gl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Wl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===jl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Xl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===$l)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===ql)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Yl)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===xa||t===Jl||t===Zl){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===xa)return s===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Nd||t===Kl||t===Ql||t===ec){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Sr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var vc=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Wt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends ai{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=new yc,m=t.getContextAttributes(),g=null,y=null,_=[],M=[],R=new re,A=null,I=new Dt;I.viewport=new rt;let O=new Dt;O.viewport=new rt;let k=[I,O],G=new vc,j=null,V=null;function q(ne){let oe=M.indexOf(ne.inputSource);if(oe===-1)return;let me=_[oe];me!==void 0&&(me.update(ne.inputSource,ne.frame,c||a),me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function W(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let ne=0;ne<_.length;ne++){let oe=M[ne];oe!==null&&(M[ne]=null,_[ne].disconnect(oe))}j=null,V=null,v.reset(),e.setRenderTarget(g),p=null,d=null,u=null,r=null,y=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function J(ne){for(let oe=0;oe<ne.removed.length;oe++){let me=ne.removed[oe],fe=M.indexOf(me);fe>=0&&(M[fe]=null,_[fe].disconnect(me))}for(let oe=0;oe<ne.added.length;oe++){let me=ne.added[oe],fe=M.indexOf(me);if(fe===-1){for(let T=0;T<_.length;T++){if(T>=M.length){M.push(me),fe=T;break}if(M[T]===null){M[T]=me,fe=T;break}}if(fe===-1)break}let ce=_[fe];ce&&ce.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=_[ne];return oe===void 0&&(oe=new ss,_[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=_[ne];return oe===void 0&&(oe=new ss,_[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=_[ne];return oe===void 0&&(oe=new ss,_[ne]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Wn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,me=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?wr:hs,me=m.stencil?Sr:Ci);let ce={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wn(d.textureWidth,d.textureHeight,{format:xn,type:si,depthTexture:new Ia(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let K=new E,se=new E;function ie(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let oe=ne.near,me=ne.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(me=v.depthFar)),G.near=O.near=I.near=oe,G.far=O.far=I.far=me,j===G.near&&V===G.far||(r.updateRenderState({depthNear:G.near,depthFar:G.far}),j=G.near,V=G.far),I.layers.mask=2|ne.layers.mask,O.layers.mask=4|ne.layers.mask,G.layers.mask=I.layers.mask|O.layers.mask;let fe=ne.parent,ce=G.cameras;ie(G,fe);for(let T=0;T<ce.length;T++)ie(ce[T],fe);ce.length===2?(function(T,w,D){K.setFromMatrixPosition(w.matrixWorld),se.setFromMatrixPosition(D.matrixWorld);let N=K.distanceTo(se),C=w.projectionMatrix.elements,U=D.projectionMatrix.elements,b=C[14]/(C[10]-1),L=C[14]/(C[10]+1),B=(C[9]+1)/C[5],ee=(C[9]-1)/C[5],F=(C[8]-1)/C[0],Z=(U[8]+1)/U[0],Y=b*F,te=b*Z,de=N/(-F+Z),he=de*-F;if(w.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(he),T.translateZ(de),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),C[10]===-1)T.projectionMatrix.copy(w.projectionMatrix),T.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let _e=b+de,Te=L+de,We=Y-he,ke=te+(N-he),xe=B*L/Te*_e,$e=ee*L/Te*_e;T.projectionMatrix.makePerspective(We,ke,xe,$e,_e,Te),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}})(G,I,O):G.projectionMatrix.copy(I.projectionMatrix),(function(T,w,D){D===null?T.matrix.copy(w.matrixWorld):(T.matrix.copy(D.matrixWorld),T.matrix.invert(),T.matrix.multiply(w.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(w.projectionMatrix),T.projectionMatrixInverse.copy(w.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*ic*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(ne,G,fe)},this.getCamera=function(){return G},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(G)};let ve=null,Me=new Fd;Me.setAnimationLoop((function(ne,oe){if(h=oe.getViewerPose(c||a),f=oe,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let fe=!1;me.length!==G.cameras.length&&(G.cameras.length=0,fe=!0);for(let T=0;T<me.length;T++){let w=me[T],D=null;if(p!==null)D=p.getViewport(w);else{let C=u.getViewSubImage(d,w);D=C.viewport,T===0&&(e.setRenderTargetTextures(y,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(y))}let N=k[T];N===void 0&&(N=new Dt,N.layers.enable(T),N.viewport=new rt,k[T]=N),N.matrix.fromArray(w.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(w.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(D.x,D.y,D.width,D.height),T===0&&(G.matrix.copy(N.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),fe===!0&&G.cameras.push(N)}let ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){let T=u.getDepthInformation(me[0]);T&&T.isValid&&T.texture&&v.init(e,T,r.renderState)}}for(let me=0;me<_.length;me++){let fe=M[me],ce=_[me];fe!==null&&ce!==void 0&&ce.update(fe,oe,c||a)}ve&&ve(ne,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),f=null})),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}},wi=new Et,Hg=new Ne;function Vg(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,wi.copy(l),wi.x*=-1,wi.y*=-1,wi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),r.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(wi)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,kd(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Gg(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let g=f[m];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return f[m]=v,!0}else if(g.equals(v)===!1)return g.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let g=m.uniforms,y=0,_=16;for(let R=0,A=g.length;R<A;R++){let I=Array.isArray(g[R])?g[R]:[g[R]];for(let O=0,k=I.length;O<k;O++){let G=I[O],j=Array.isArray(G.value)?G.value:[G.value];for(let V=0,q=j.length;V<q;V++){let W=c(j[V]),J=y%_,K=J%W.boundary,se=J+K;y+=K,se!==0&&_-se<W.storage&&(y+=_-se),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=W.storage}}}let M=y%_;M>0&&(y+=_-M),m.__size=y,m.__cache={}})(u),p=(function(m){let g=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let y=i.createBuffer(),_=m.__size,M=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,_,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,y),y})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let g=r[m.id],y=m.uniforms,_=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let M=0,R=y.length;M<R;M++){let A=Array.isArray(y[M])?y[M]:[y[M]];for(let I=0,O=A.length;I<O;I++){let k=A[I];if(l(k,M,I,_)===!0){let G=k.__offset,j=Array.isArray(k.value)?k.value:[k.value],V=0;for(let q=0;q<j.length;q++){let W=j[q],J=c(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,G+V,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var La=class{constructor(e={}){let{canvas:t=Km(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=0,this.toneMappingExposure=1;let M=this,R=!1,A=0,I=0,O=null,k=-1,G=null,j=new rt,V=new rt,q=null,W=new Re(0),J=0,K=t.width,se=t.height,ie=1,ve=null,Me=null,ne=new rt(0,0,K,se),oe=new rt(0,0,K,se),me=!1,fe=new Ar,ce=!1,T=!1,w=new Ne,D=new Ne,N=new E,C=new rt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},b=!1;function L(){return O===null?ie:1}let B,ee,F,Z,Y,te,de,he,_e,Te,We,ke,xe,$e,Qe,st,ge,ze,Ke,Bi,Ts,Kt,dn,hi,z=n;function kr(S,H){return t.getContext(S,H)}try{let S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",yh,!1),t.addEventListener("webglcontextrestored",_h,!1),t.addEventListener("webglcontextcreationerror",xh,!1),z===null){let H="webgl2";if(z=kr(H,S),z===null)throw kr(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function vh(){B=new wf(z),B.init(),Kt=new Bg(z,B),ee=new xf(z,B,e,Kt),F=new kg(z,B),ee.reverseDepthBuffer&&d&&F.buffers.depth.setReversed(!0),Z=new Af(z),Y=new Ag,te=new Fg(z,B,F,Y,ee,Kt,Z),de=new bf(M),he=new Sf(M),_e=new ff(z),dn=new yf(z,_e),Te=new Tf(z,_e,Z,dn),We=new Cf(z,Te,_e,Z),Ke=new Rf(z,ee,te),st=new Mf(Y),ke=new Eg(M,de,he,B,ee,dn,st),xe=new Vg(M,Y),$e=new Cg,Qe=new Ng(B),ze=new vf(M,de,he,F,We,p,l),ge=new Dg(M,We,ee),hi=new Gg(z,Z,ee,F),Bi=new _f(z,B,Z),Ts=new Ef(z,B,Z),Z.programs=ke.programs,M.capabilities=ee,M.extensions=B,M.properties=Y,M.renderLists=$e,M.shadowMap=ge,M.state=F,M.info=Z}vh();let _t=new _c(M,z);function yh(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function _h(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=Z.autoReset,H=ge.enabled,$=ge.autoUpdate,Q=ge.needsUpdate,X=ge.type;vh(),Z.autoReset=S,ge.enabled=H,ge.autoUpdate=$,ge.needsUpdate=Q,ge.type=X}function xh(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Mh(S){let H=S.target;H.removeEventListener("dispose",Mh),(function($){(function(Q){let X=Y.get(Q).programs;X!==void 0&&(X.forEach((function(ae){ke.releaseProgram(ae)})),Q.isShaderMaterial&&ke.releaseShaderCache(Q))})($),Y.remove($)})(H)}function bh(S,H,$){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,As(S,H,$),S.side=0,S.needsUpdate=!0,As(S,H,$),S.side=2):As(S,H,$)}this.xr=_t,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=B.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=B.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(K,se,!1))},this.getSize=function(S){return S.set(K,se)},this.setSize=function(S,H,$=!0){_t.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(K=S,se=H,t.width=Math.floor(S*ie),t.height=Math.floor(H*ie),$===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H))},this.getDrawingBufferSize=function(S){return S.set(K*ie,se*ie).floor()},this.setDrawingBufferSize=function(S,H,$){K=S,se=H,ie=$,t.width=Math.floor(S*$),t.height=Math.floor(H*$),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(ne)},this.setViewport=function(S,H,$,Q){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,H,$,Q),F.viewport(j.copy(ne).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,H,$,Q){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,H,$,Q),F.scissor(V.copy(oe).multiplyScalar(ie).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(S){F.setScissorTest(me=S)},this.setOpaqueSort=function(S){ve=S},this.setTransparentSort=function(S){Me=S},this.getClearColor=function(S){return S.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(S=!0,H=!0,$=!0){let Q=0;if(S){let X=!1;if(O!==null){let ae=O.texture.format;X=ae===rh||ae===ih||ae===nh}if(X){let ae=O.texture.type,pe=ae===si||ae===Ci||ae===cs||ae===Sr||ae===eh||ae===th,ye=ze.getClearColor(),Se=ze.getClearAlpha(),Ce=ye.r,Le=ye.g,we=ye.b;pe?(f[0]=Ce,f[1]=Le,f[2]=we,f[3]=Se,z.clearBufferuiv(z.COLOR,0,f)):(v[0]=Ce,v[1]=Le,v[2]=we,v[3]=Se,z.clearBufferiv(z.COLOR,0,v))}else Q|=z.COLOR_BUFFER_BIT}H&&(Q|=z.DEPTH_BUFFER_BIT),$&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",yh,!1),t.removeEventListener("webglcontextrestored",_h,!1),t.removeEventListener("webglcontextcreationerror",xh,!1),$e.dispose(),Qe.dispose(),Y.dispose(),de.dispose(),he.dispose(),We.dispose(),dn.dispose(),hi.dispose(),ke.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Sh),_t.removeEventListener("sessionend",wh),ui.stop()},this.renderBufferDirect=function(S,H,$,Q,X,ae){H===null&&(H=U);let pe=X.isMesh&&X.matrixWorld.determinant()<0,ye=(function(Ve,Lt,St,De,Ee){Lt.isScene!==!0&&(Lt=U),te.resetTextureUnits();let Qt=Lt.fog,lo=De.isMeshStandardMaterial?Lt.environment:null,Fr=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Lr,zi=(De.isMeshStandardMaterial?he:de).get(De.envMap||lo),co=De.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ho=!!St.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),uo=!!St.morphAttributes.position,Xn=!!St.morphAttributes.normal,Mp=!!St.morphAttributes.color,Ph=0;De.toneMapped&&(O!==null&&O.isXRRenderTarget!==!0||(Ph=M.toneMapping));let Ih=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,bp=Ih!==void 0?Ih.length:0,He=Y.get(De),Sp=g.state.lights;if(ce===!0&&(T===!0||Ve!==G)){let qt=Ve===G&&De.id===k;st.setState(De,Ve,qt)}let en=!1;De.version===He.__version?He.needsLights&&He.lightsStateVersion!==Sp.state.version||He.outputColorSpace!==Fr||Ee.isBatchedMesh&&He.batching===!1?en=!0:Ee.isBatchedMesh||He.batching!==!0?Ee.isBatchedMesh&&He.batchingColor===!0&&Ee.colorTexture===null||Ee.isBatchedMesh&&He.batchingColor===!1&&Ee.colorTexture!==null||Ee.isInstancedMesh&&He.instancing===!1?en=!0:Ee.isInstancedMesh||He.instancing!==!0?Ee.isSkinnedMesh&&He.skinning===!1?en=!0:Ee.isSkinnedMesh||He.skinning!==!0?Ee.isInstancedMesh&&He.instancingColor===!0&&Ee.instanceColor===null||Ee.isInstancedMesh&&He.instancingColor===!1&&Ee.instanceColor!==null||Ee.isInstancedMesh&&He.instancingMorph===!0&&Ee.morphTexture===null||Ee.isInstancedMesh&&He.instancingMorph===!1&&Ee.morphTexture!==null||He.envMap!==zi||De.fog===!0&&He.fog!==Qt?en=!0:He.numClippingPlanes===void 0||He.numClippingPlanes===st.numPlanes&&He.numIntersection===st.numIntersection?(He.vertexAlphas!==co||He.vertexTangents!==ho||He.morphTargets!==uo||He.morphNormals!==Xn||He.morphColors!==Mp||He.toneMapping!==Ph||He.morphTargetsCount!==bp)&&(en=!0):en=!0:en=!0:en=!0:en=!0:(en=!0,He.__version=De.version);let di=He.currentProgram;en===!0&&(di=As(De,Lt,Ee));let Lh=!1,Br=!1,po=!1,ct=di.getUniforms(),$n=He.uniforms;if(F.useProgram(di.program)&&(Lh=!0,Br=!0,po=!0),De.id!==k&&(k=De.id,Br=!0),Lh||G!==Ve){F.buffers.depth.getReversed()?(w.copy(Ve.projectionMatrix),(function(pi){let nt=pi.elements;nt[2]=.5*nt[2]+.5*nt[3],nt[6]=.5*nt[6]+.5*nt[7],nt[10]=.5*nt[10]+.5*nt[11],nt[14]=.5*nt[14]+.5*nt[15]})(w),(function(pi){let nt=pi.elements;nt[11]===-1?(nt[10]=-nt[10]-1,nt[14]=-nt[14]):(nt[10]=-nt[10],nt[14]=1-nt[14])})(w),ct.setValue(z,"projectionMatrix",w)):ct.setValue(z,"projectionMatrix",Ve.projectionMatrix),ct.setValue(z,"viewMatrix",Ve.matrixWorldInverse);let qt=ct.map.cameraPosition;qt!==void 0&&qt.setValue(z,N.setFromMatrixPosition(Ve.matrixWorld)),ee.logarithmicDepthBuffer&&ct.setValue(z,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&ct.setValue(z,"isOrthographic",Ve.isOrthographicCamera===!0),G!==Ve&&(G=Ve,Br=!0,po=!0)}if(Ee.isSkinnedMesh){ct.setOptional(z,Ee,"bindMatrix"),ct.setOptional(z,Ee,"bindMatrixInverse");let qt=Ee.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),ct.setValue(z,"boneTexture",qt.boneTexture,te))}Ee.isBatchedMesh&&(ct.setOptional(z,Ee,"batchingTexture"),ct.setValue(z,"batchingTexture",Ee._matricesTexture,te),ct.setOptional(z,Ee,"batchingIdTexture"),ct.setValue(z,"batchingIdTexture",Ee._indirectTexture,te),ct.setOptional(z,Ee,"batchingColorTexture"),Ee._colorsTexture!==null&&ct.setValue(z,"batchingColorTexture",Ee._colorsTexture,te));let mo=St.morphAttributes;mo.position===void 0&&mo.normal===void 0&&mo.color===void 0||Ke.update(Ee,St,di),(Br||He.receiveShadow!==Ee.receiveShadow)&&(He.receiveShadow=Ee.receiveShadow,ct.setValue(z,"receiveShadow",Ee.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&($n.envMap.value=zi,$n.flipEnvMap.value=zi.isCubeTexture&&zi.isRenderTargetTexture===!1?-1:1),De.isMeshStandardMaterial&&De.envMap===null&&Lt.environment!==null&&($n.envMapIntensity.value=Lt.environmentIntensity),Br&&(ct.setValue(z,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&(tn=po,(pn=$n).ambientLightColor.needsUpdate=tn,pn.lightProbe.needsUpdate=tn,pn.directionalLights.needsUpdate=tn,pn.directionalLightShadows.needsUpdate=tn,pn.pointLights.needsUpdate=tn,pn.pointLightShadows.needsUpdate=tn,pn.spotLights.needsUpdate=tn,pn.spotLightShadows.needsUpdate=tn,pn.rectAreaLights.needsUpdate=tn,pn.hemisphereLights.needsUpdate=tn),Qt&&De.fog===!0&&xe.refreshFogUniforms($n,Qt),xe.refreshMaterialUniforms($n,De,ie,se,g.state.transmissionRenderTarget[Ve.id]),xr.upload(z,Rh(He),$n,te));var pn,tn;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(xr.upload(z,Rh(He),$n,te),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&ct.setValue(z,"center",Ee.center),ct.setValue(z,"modelViewMatrix",Ee.modelViewMatrix),ct.setValue(z,"normalMatrix",Ee.normalMatrix),ct.setValue(z,"modelMatrix",Ee.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let qt=De.uniformsGroups;for(let pi=0,nt=qt.length;pi<nt;pi++){let Uh=qt[pi];hi.update(Uh,di),hi.bind(Uh,di)}}return di})(S,H,$,Q,X);F.setMaterial(Q,pe);let Se=$.index,Ce=1;if(Q.wireframe===!0){if(Se=Te.getWireframeAttribute($),Se===void 0)return;Ce=2}let Le=$.drawRange,we=$.attributes.position,Fe=Le.start*Ce,ot=(Le.start+Le.count)*Ce;ae!==null&&(Fe=Math.max(Fe,ae.start*Ce),ot=Math.min(ot,(ae.start+ae.count)*Ce)),Se!==null?(Fe=Math.max(Fe,0),ot=Math.min(ot,Se.count)):we!=null&&(Fe=Math.max(Fe,0),ot=Math.min(ot,we.count));let et=ot-Fe;if(et<0||et===1/0)return;let mt;dn.setup(X,Q,ye,$,Se);let tt=Bi;if(Se!==null&&(mt=_e.get(Se),tt=Ts,tt.setIndex(mt)),X.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*L()),tt.setMode(z.LINES)):tt.setMode(z.TRIANGLES);else if(X.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),F.setLineWidth(Ve*L()),X.isLineSegments?tt.setMode(z.LINES):X.isLineLoop?tt.setMode(z.LINE_LOOP):tt.setMode(z.LINE_STRIP)}else X.isPoints?tt.setMode(z.POINTS):X.isSprite&&tt.setMode(z.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)tt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ve=X._multiDrawStarts,Lt=X._multiDrawCounts,St=X._multiDrawCount,De=Se?_e.get(Se).bytesPerElement:1,Ee=Y.get(Q).currentProgram.getUniforms();for(let Qt=0;Qt<St;Qt++)Ee.setValue(z,"_gl_DrawID",Qt),tt.render(Ve[Qt]/De,Lt[Qt])}else if(X.isInstancedMesh)tt.renderInstances(Fe,et,X.count);else if($.isInstancedBufferGeometry){let Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Lt=Math.min($.instanceCount,Ve);tt.renderInstances(Fe,et,Lt)}else tt.render(Fe,et)},this.compile=function(S,H,$=null){$===null&&($=S),g=Qe.get($),g.init(H),_.push(g),$.traverseVisible((function(X){X.isLight&&X.layers.test(H.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))})),S!==$&&S.traverseVisible((function(X){X.isLight&&X.layers.test(H.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))})),g.setupLights();let Q=new Set;return S.traverse((function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ae=X.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){let ye=ae[pe];bh(ye,$,X),Q.add(ye)}else bh(ae,$,X),Q.add(ae)})),_.pop(),g=null,Q},this.compileAsync=function(S,H,$=null){let Q=this.compile(S,H,$);return new Promise((X=>{function ae(){Q.forEach((function(pe){Y.get(pe).currentProgram.isReady()&&Q.delete(pe)})),Q.size!==0?setTimeout(ae,10):X(S)}B.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)}))};let ao=null;function Sh(){ui.stop()}function wh(){ui.start()}let ui=new Fd;function oo(S,H,$,Q){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||fe.intersectsSprite(S)){Q&&C.setFromMatrixPosition(S.matrixWorld).applyMatrix4(D);let ae=We.update(S),pe=S.material;pe.visible&&m.push(S,ae,pe,$,C.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||fe.intersectsObject(S))){let ae=We.update(S),pe=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),C.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),C.copy(ae.boundingSphere.center)),C.applyMatrix4(S.matrixWorld).applyMatrix4(D)),Array.isArray(pe)){let ye=ae.groups;for(let Se=0,Ce=ye.length;Se<Ce;Se++){let Le=ye[Se],we=pe[Le.materialIndex];we&&we.visible&&m.push(S,ae,we,$,C.z,Le)}}else pe.visible&&m.push(S,ae,pe,$,C.z,null)}}let X=S.children;for(let ae=0,pe=X.length;ae<pe;ae++)oo(X[ae],H,$,Q)}function Th(S,H,$,Q){let X=S.opaque,ae=S.transmissive,pe=S.transparent;g.setupLightsView($),ce===!0&&st.setGlobalState(M.clippingPlanes,$),Q&&F.viewport(j.copy(Q)),X.length>0&&Es(X,H,$),ae.length>0&&Es(ae,H,$),pe.length>0&&Es(pe,H,$),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Eh(S,H,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Wn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?xs:si,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let X=g.state.transmissionRenderTarget[Q.id],ae=Q.viewport||j;X.setSize(ae.z,ae.w);let pe=M.getRenderTarget();M.setRenderTarget(X),M.getClearColor(W),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),b&&ze.render($);let ye=M.toneMapping;M.toneMapping=0;let Se=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ce===!0&&st.setGlobalState(M.clippingPlanes,Q),Es(S,$,Q),te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Le=0,we=H.length;Le<we;Le++){let Fe=H[Le],ot=Fe.object,et=Fe.geometry,mt=Fe.material,tt=Fe.group;if(mt.side===2&&ot.layers.test(Q.layers)){let Ve=mt.side;mt.side=1,mt.needsUpdate=!0,Ah(ot,$,Q,et,mt,tt),mt.side=Ve,mt.needsUpdate=!0,Ce=!0}}Ce===!0&&(te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X))}M.setRenderTarget(pe),M.setClearColor(W,J),Se!==void 0&&(Q.viewport=Se),M.toneMapping=ye}function Es(S,H,$){let Q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ae=S.length;X<ae;X++){let pe=S[X],ye=pe.object,Se=pe.geometry,Ce=Q===null?pe.material:Q,Le=pe.group;ye.layers.test($.layers)&&Ah(ye,H,$,Se,Ce,Le)}}function Ah(S,H,$,Q,X,ae){S.onBeforeRender(M,H,$,Q,X,ae),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(M,H,$,Q,S,ae),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,M.renderBufferDirect($,H,Q,X,S,ae),X.side=0,X.needsUpdate=!0,M.renderBufferDirect($,H,Q,X,S,ae),X.side=2):M.renderBufferDirect($,H,Q,X,S,ae),S.onAfterRender(M,H,$,Q,X,ae)}function As(S,H,$){H.isScene!==!0&&(H=U);let Q=Y.get(S),X=g.state.lights,ae=g.state.shadowsArray,pe=X.state.version,ye=ke.getParameters(S,X.state,ae,H,$),Se=ke.getProgramCacheKey(ye),Ce=Q.programs;Q.environment=S.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(S.isMeshStandardMaterial?he:de).get(S.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",Mh),Ce=new Map,Q.programs=Ce);let Le=Ce.get(Se);if(Le!==void 0){if(Q.currentProgram===Le&&Q.lightsStateVersion===pe)return Ch(S,ye),Le}else ye.uniforms=ke.getUniforms(S),S.onBeforeCompile(ye,M),Le=ke.acquireProgram(ye,Se),Ce.set(Se,Le),Q.uniforms=ye.uniforms;let we=Q.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(we.clippingPlanes=st.uniform),Ch(S,ye),Q.needsLights=(function(Fe){return Fe.isMeshLambertMaterial||Fe.isMeshToonMaterial||Fe.isMeshPhongMaterial||Fe.isMeshStandardMaterial||Fe.isShadowMaterial||Fe.isShaderMaterial&&Fe.lights===!0})(S),Q.lightsStateVersion=pe,Q.needsLights&&(we.ambientLightColor.value=X.state.ambient,we.lightProbe.value=X.state.probe,we.directionalLights.value=X.state.directional,we.directionalLightShadows.value=X.state.directionalShadow,we.spotLights.value=X.state.spot,we.spotLightShadows.value=X.state.spotShadow,we.rectAreaLights.value=X.state.rectArea,we.ltc_1.value=X.state.rectAreaLTC1,we.ltc_2.value=X.state.rectAreaLTC2,we.pointLights.value=X.state.point,we.pointLightShadows.value=X.state.pointShadow,we.hemisphereLights.value=X.state.hemi,we.directionalShadowMap.value=X.state.directionalShadowMap,we.directionalShadowMatrix.value=X.state.directionalShadowMatrix,we.spotShadowMap.value=X.state.spotShadowMap,we.spotLightMatrix.value=X.state.spotLightMatrix,we.spotLightMap.value=X.state.spotLightMap,we.pointShadowMap.value=X.state.pointShadowMap,we.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Le,Q.uniformsList=null,Le}function Rh(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=xr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Ch(S,H){let $=Y.get(S);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}ui.setAnimationLoop((function(S){ao&&ao(S)})),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){ao=S,_t.setAnimationLoop(S),S===null?ui.stop():ui.start()},_t.addEventListener("sessionstart",Sh),_t.addEventListener("sessionend",wh),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(H),H=_t.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,H,O),g=Qe.get(S,_.length),g.init(H),_.push(g),D.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),fe.setFromProjectionMatrix(D),T=this.localClippingEnabled,ce=st.init(this.clippingPlanes,T),m=$e.get(S,y.length),m.init(),y.push(m),_t.enabled===!0&&_t.isPresenting===!0){let ae=M.xr.getDepthSensingMesh();ae!==null&&oo(ae,H,-1/0,M.sortObjects)}oo(S,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ve,Me),b=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,b&&ze.addToRenderList(m,S),this.info.render.frame++,ce===!0&&st.beginShadows();let $=g.state.shadowsArray;ge.render($,S,H),ce===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,X=m.transmissive;if(g.setupLights(),H.isArrayCamera){let ae=H.cameras;if(X.length>0)for(let pe=0,ye=ae.length;pe<ye;pe++)Eh(Q,X,S,ae[pe]);b&&ze.render(S);for(let pe=0,ye=ae.length;pe<ye;pe++){let Se=ae[pe];Th(m,S,Se,Se.viewport)}}else X.length>0&&Eh(Q,X,S,H),b&&ze.render(S),Th(m,S,H);O!==null&&(te.updateMultisampleRenderTarget(O),te.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(M,S,H),dn.resetDefaultState(),k=-1,G=null,_.pop(),_.length>0?(g=_[_.length-1],ce===!0&&st.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,y.pop(),m=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,H,$){Y.get(S.texture).__webglTexture=H,Y.get(S.depthTexture).__webglTexture=$;let Q=Y.get(S);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,H){let $=Y.get(S);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,$=0){O=S,A=H,I=$;let Q=!0,X=null,ae=!1,pe=!1;if(S){let ye=Y.get(S);if(ye.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(ye.__webglFramebuffer===void 0)te.setupRenderTarget(S);else if(ye.__hasExternalTextures)te.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Le=S.depthTexture;if(ye.__boundDepthTexture!==Le){if(Le!==null&&Y.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(S)}}let Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);let Ce=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Array.isArray(Ce[H])?Ce[H][$]:Ce[H],ae=!0):X=S.samples>0&&te.useMultisampledRTT(S)===!1?Y.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?Ce[$]:Ce,j.copy(S.viewport),V.copy(S.scissor),q=S.scissorTest}else j.copy(ne).multiplyScalar(ie).floor(),V.copy(oe).multiplyScalar(ie).floor(),q=me;if(F.bindFramebuffer(z.FRAMEBUFFER,X)&&Q&&F.drawBuffers(S,X),F.viewport(j),F.scissor(V),F.setScissorTest(q),ae){let ye=Y.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,$)}else if(pe){let ye=Y.get(S.texture),Se=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ye.__webglTexture,$||0,Se)}k=-1},this.readRenderTargetPixels=function(S,H,$,Q,X,ae,pe){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){F.bindFramebuffer(z.FRAMEBUFFER,ye);try{let Se=S.texture,Ce=Se.format,Le=Se.type;if(!ee.textureFormatReadable(Ce))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");H>=0&&H<=S.width-Q&&$>=0&&$<=S.height-X&&z.readPixels(H,$,Q,X,Kt.convert(Ce),Kt.convert(Le),ae)}finally{let Se=O!==null?Y.get(O).__webglFramebuffer:null;F.bindFramebuffer(z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,H,$,Q,X,ae,pe){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){let Se=S.texture,Ce=Se.format,Le=Se.type;if(!ee.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=S.width-Q&&$>=0&&$<=S.height-X){F.bindFramebuffer(z.FRAMEBUFFER,ye);let we=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.bufferData(z.PIXEL_PACK_BUFFER,ae.byteLength,z.STREAM_READ),z.readPixels(H,$,Q,X,Kt.convert(Ce),Kt.convert(Le),0);let Fe=O!==null?Y.get(O).__webglFramebuffer:null;F.bindFramebuffer(z.FRAMEBUFFER,Fe);let ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await(function(et,mt,tt){return new Promise((function(Ve,Lt){setTimeout((function St(){switch(et.clientWaitSync(mt,et.SYNC_FLUSH_COMMANDS_BIT,0)){case et.WAIT_FAILED:Lt();break;case et.TIMEOUT_EXPIRED:setTimeout(St,tt);break;default:Ve()}}),tt)}))})(z,ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,we),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ae),z.deleteBuffer(we),z.deleteSync(ot),ae}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,H=null,$=0){S.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1]);let Q=Math.pow(2,-$),X=Math.floor(S.image.width*Q),ae=Math.floor(S.image.height*Q),pe=H!==null?H.x:0,ye=H!==null?H.y:0;te.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,pe,ye,X,ae),F.unbindTexture()},this.copyTextureToTexture=function(S,H,$=null,Q=null,X=0){let ae,pe,ye,Se,Ce,Le,we,Fe,ot;S.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,S=arguments[1],H=arguments[2],X=arguments[3]||0,$=null);let et=S.isCompressedTexture?S.mipmaps[X]:S.image;$!==null?(ae=$.max.x-$.min.x,pe=$.max.y-$.min.y,ye=$.isBox3?$.max.z-$.min.z:1,Se=$.min.x,Ce=$.min.y,Le=$.isBox3?$.min.z:0):(ae=et.width,pe=et.height,ye=et.depth||1,Se=0,Ce=0,Le=0),Q!==null?(we=Q.x,Fe=Q.y,ot=Q.z):(we=0,Fe=0,ot=0);let mt=Kt.convert(H.format),tt=Kt.convert(H.type),Ve;H.isData3DTexture?(te.setTexture3D(H,0),Ve=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(te.setTexture2DArray(H,0),Ve=z.TEXTURE_2D_ARRAY):(te.setTexture2D(H,0),Ve=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let Lt=z.getParameter(z.UNPACK_ROW_LENGTH),St=z.getParameter(z.UNPACK_IMAGE_HEIGHT),De=z.getParameter(z.UNPACK_SKIP_PIXELS),Ee=z.getParameter(z.UNPACK_SKIP_ROWS),Qt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,et.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,et.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Se),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ce),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Le);let lo=S.isDataArrayTexture||S.isData3DTexture,Fr=H.isDataArrayTexture||H.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let zi=Y.get(S),co=Y.get(H),ho=Y.get(zi.__renderTarget),uo=Y.get(co.__renderTarget);F.bindFramebuffer(z.READ_FRAMEBUFFER,ho.__webglFramebuffer),F.bindFramebuffer(z.DRAW_FRAMEBUFFER,uo.__webglFramebuffer);for(let Xn=0;Xn<ye;Xn++)lo&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,X,Le+Xn),S.isDepthTexture?(Fr&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,X,ot+Xn),z.blitFramebuffer(Se,Ce,ae,pe,we,Fe,ae,pe,z.DEPTH_BUFFER_BIT,z.NEAREST)):Fr?z.copyTexSubImage3D(Ve,X,we,Fe,ot+Xn,Se,Ce,ae,pe):z.copyTexSubImage2D(Ve,X,we,Fe,ot+Xn,Se,Ce,ae,pe);F.bindFramebuffer(z.READ_FRAMEBUFFER,null),F.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Fr?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Ve,X,we,Fe,ot,ae,pe,ye,mt,tt,et.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ve,X,we,Fe,ot,ae,pe,ye,mt,et.data):z.texSubImage3D(Ve,X,we,Fe,ot,ae,pe,ye,mt,tt,et):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,we,Fe,ae,pe,mt,tt,et.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,we,Fe,et.width,et.height,mt,et.data):z.texSubImage2D(z.TEXTURE_2D,X,we,Fe,ae,pe,mt,tt,et);z.pixelStorei(z.UNPACK_ROW_LENGTH,Lt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),z.pixelStorei(z.UNPACK_SKIP_PIXELS,De),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qt),X===0&&H.generateMipmaps&&z.generateMipmap(Ve),F.unbindTexture()},this.copyTextureToTexture3D=function(S,H,$=null,Q=null,X=0){return S.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,S=arguments[2],H=arguments[3],X=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,H,$,Q,X)},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&te.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?te.setTextureCube(S,0):S.isData3DTexture?te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?te.setTexture2DArray(S,0):te.setTexture2D(S,0),F.unbindTexture()},this.resetState=function(){A=0,I=0,O=null,F.reset(),dn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Na=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Et,this.environmentIntensity=1,this.environmentRotation=new Et,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new E,Da=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ii=class extends oi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,ts=new E,pr=new E,mr=new E,fr=new re,ns=new re,Gd=new Ne,aa=new E,is=new E,oa=new E,hd=new re,gl=new re,ud=new re,Cr=class extends It{constructor(e=new Ii){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xc(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Da(n,3,0,!1)),dr.setAttribute("uv",new Da(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;la(aa.set(-.5,-.5,0),mr,a,pr,r,s),la(is.set(.5,-.5,0),mr,a,pr,r,s),la(oa.set(.5,.5,0),mr,a,pr,r,s),hd.set(0,0),gl.set(1,0),ud.set(1,1);let o=e.ray.intersectTriangle(aa,is,oa,!1,ts);if(o===null&&(la(is.set(-.5,.5,0),mr,a,pr,r,s),gl.set(0,1),o=e.ray.intersectTriangle(aa,oa,is,!1,ts),o===null))return;let l=e.ray.origin.distanceTo(ts);l<e.near||l>e.far||t.push({distance:l,point:ts.clone(),uv:Bn.getInterpolation(ts,aa,is,oa,hd,gl,ud,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function la(i,e,t,n,r,s){fr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ns.x=s*fr.x-r*fr.y,ns.y=r*fr.x+s*fr.y):ns.copy(fr),i.copy(e),i.x+=ns.x,i.y+=ns.y,i.applyMatrix4(Gd)}var uv=new E,dv=new E;var pv=new E,mv=new rt,fv=new rt,gv=new E,vv=new Ne,yv=new E,_v=new Sn,xv=new Ne,Mv=new Pi;var bv=new Ne,Sv=new Ne;var wv=new Ne,Tv=new Ne;var Ev=new bn,Av=new Ne,Rv=new qe,Cv=new Sn;var Mc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Pv=new Ne,Iv=new Re(1,1,1),Lv=new Ar,Uv=new bn,Nv=new Sn,Dv=new E,Ov=new E,kv=new E,Fv=new Mc,Bv=new qe;var zv=new E,Hv=new E,Vv=new Ne,Gv=new Pi,Wv=new Sn,jv=new E,Xv=new E;var $v=new E,qv=new E;var Yv=new Ne,Jv=new Pi,Zv=new Sn,Kv=new E;var jn=class extends Wt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new re:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,r=[],s=[],a=[],o=new E,l=new Ne;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Tt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Tt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ps=class extends Jt{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends ps{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var ca=new E,vl=new ah,yl=new ah,_l=new ah,Sc=class extends Jt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(ca.subVectors(r[0],r[1]).add(r[0]),o=ca);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=ca),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),vl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,m),yl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,m),_l.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),yl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),_l.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(vl.calc(h),yl.calc(h),_l.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function dd(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function as(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function os(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Oa=class extends Jt{constructor(e=new re,t=new re,n=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new re){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,r.x,s.x,a.x,o.x),os(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends Jt{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,r.x,s.x,a.x,o.x),os(e,r.y,s.y,a.y,o.y),os(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends Jt{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends Jt{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Jt{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(as(e,r.x,s.x,a.x),as(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends Jt{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(as(e,r.x,s.x,a.x),as(e,r.y,s.y,a.y),as(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(dd(o,l.x,c.x,h.x,u.x),dd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new re().fromArray(r))}return this}},Ha=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Sc,CubicBezierCurve:Oa,CubicBezierCurve3:wc,EllipseCurve:ps,LineCurve:ka,LineCurve3:Tc,QuadraticBezierCurve:Fa,QuadraticBezierCurve3:Ba,SplineCurve:za}),Ec=class extends Jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ha[r.type]().fromJSON(r))}return this}},ms=class extends Ec{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ka(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Fa(this.currentPoint.clone(),new re(e,t),new re(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Oa(this.currentPoint.clone(),new re(e,t),new re(n,r),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new ps(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Va=class i extends ht{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Tt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new re,p=new E,f=new E,v=new E,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=1*g,p.y=-m,p.z=0*g,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let y=0;y<=t;y++){let _=n+y*h*r,M=Math.sin(_),R=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*R,a.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),o.push(d.x,d.y);let I=l[3*A+0]*M,O=l[3*A+1],k=l[3*A+0]*R;c.push(I,O,k)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let M=_+y*e.length,R=M,A=M+e.length,I=M+e.length+1,O=M+1;s.push(R,A,O),s.push(I,O,A)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ac=class i extends Va{constructor(e=1,t=1,n=4,r=8){let s=new ms;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},fs=class i extends ht{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new E,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class i extends ht{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,g=0;function y(_){let M=f,R=new re,A=new E,I=0,O=_===!0?e:t,k=_===!0?1:-1;for(let j=1;j<=r;j++)u.push(0,m*k,0),d.push(0,k,0),p.push(.5,.5),f++;let G=f;for(let j=0;j<=r;j++){let V=j/r*l+o,q=Math.cos(V),W=Math.sin(V);A.x=O*W,A.y=m*k,A.z=O*q,u.push(A.x,A.y,A.z),d.push(0,k,0),R.x=.5*q+.5,R.y=.5*W*k+.5,p.push(R.x,R.y),f++}for(let j=0;j<r;j++){let V=M+j,q=G+j;_===!0?h.push(q,q+1,V):h.push(q+1,q,V),I+=3}c.addGroup(g,I,_===!0?1:2),g+=I}(function(){let _=new E,M=new E,R=0,A=(t-e)/n;for(let I=0;I<=s;I++){let O=[],k=I/s,G=k*(t-e)+e;for(let j=0;j<=r;j++){let V=j/r,q=V*l+o,W=Math.sin(q),J=Math.cos(q);M.x=G*W,M.y=-k*n+m,M.z=G*J,u.push(M.x,M.y,M.z),_.set(W,A,J).normalize(),d.push(_.x,_.y,_.z),p.push(V,1-k),O.push(f++)}v.push(O)}for(let I=0;I<r;I++)for(let O=0;O<s;O++){let k=v[O][I],G=v[O+1][I],j=v[O+1][I+1],V=v[O][I+1];(e>0||O!==0)&&(h.push(k,G,V),R+=3),(t>0||O!==s-1)&&(h.push(G,j,V),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Li=class i extends Zt{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ui=class i extends ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,f,v){let m=v+1,g=[];for(let y=0;y<=m;y++){g[y]=[];let _=d.clone().lerp(f,y/m),M=p.clone().lerp(f,y/m),R=m-y;for(let A=0;A<=R;A++)g[y][A]=A===0&&y===m?_:_.clone().lerp(M,A/R)}for(let y=0;y<m;y++)for(let _=0;_<2*(m-y)-1;_++){let M=Math.floor(_/2);_%2==0?(l(g[y][M+1]),l(g[y+1][M]),l(g[y][M])):(l(g[y][M+1]),l(g[y+1][M+1]),l(g[y+1][M]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,v){v<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,f=new E,v=new E;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],v),o(p,f,v,d)})(r),(function(d){let p=new E;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new E;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let v=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-m)}var p;(function(){let f=new E,v=new E,m=new E,g=new E,y=new re,_=new re,M=new re;for(let R=0,A=0;R<s.length;R+=9,A+=6){f.set(s[R+0],s[R+1],s[R+2]),v.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),y.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),g.copy(f).add(v).add(m).divideScalar(3);let I=u(g);h(y,A+0,f,I),h(_,A+2,v,I),h(M,A+4,m,I)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],g=a[f+4],y=Math.max(v,m,g),_=Math.min(v,m,g);y>.9&&_<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Rc=class i extends Ui{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ha=new E,ua=new E,xl=new E,da=new Bn,Cc=class extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ma*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:g}=da;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),da.getNormal(xl),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let _=(y+1)%3,M=u[y],R=u[_],A=da[h[y]],I=da[h[_]],O=`${M}_${R}`,k=`${R}_${M}`;k in d&&d[k]?(xl.dot(d[k].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(I.x,I.y,I.z)),d[k]=null):O in d||(d[O]={index0:c[y],index1:c[_],normal:xl.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];ha.fromBufferAttribute(o,v),ua.fromBufferAttribute(o,m),p.push(ha.x,ha.y,ha.z),p.push(ua.x,ua.y,ua.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ga=class extends ms{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ms().fromJSON(r))}return this}},Wg=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=pd(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(f,v,m,g){let y=[],_,M,R,A,I;for(_=0,M=v.length;_<M;_++)R=v[_]*g,A=_<M-1?v[_+1]*g:f.length,I=pd(f,R,A,g,!1),I===I.next&&(I.steiner=!0),y.push(Kg(I));for(y.sort(Yg),_=0;_<y.length;_++)m=Jg(y[_],m);return m})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return gs(s,a,t,o,l,p,0),a};function pd(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=md(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=md(s,i[s],i[s+1],a);return a&&Qa(a,a.next)&&(ys(a),a=a.next),a}function Ni(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Qa(n,n.next)&&at(n.prev,n,n.next)!==0)n=n.next;else{if(ys(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function gs(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Pc(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(v){let m,g,y,_,M,R,A,I,O=1;do{for(g=v,v=null,M=null,R=0;g;){for(R++,y=g,A=0,m=0;m<O&&(A++,y=y.nextZ,y);m++);for(I=O;A>0||I>0&&y;)A!==0&&(I===0||!y||g.z<=y.z)?(_=g,g=g.nextZ,A--):(_=y,y=y.nextZ,I--),M?M.nextZ=_:v=_,_.prevZ=M,M=_;g=y}M.nextZ=null,O*=2}while(R>1)})(f)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?Xg(i,n,r,s):jg(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ys(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?gs(i=$g(Ni(i),e,t),e,t,n,r,s,2):a===2&&qg(i,e,t,n,r,s):gs(Ni(i),e,t,n,r,s,1);break}}function jg(i){let e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&yr(r,o,s,l,a,c,f.x,f.y)&&at(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Xg(i,e,t,n){let r=i.prev,s=i,a=i.next;if(at(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=Pc(p,f,e,t,n),y=Pc(v,m,e,t,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=g&&M&&M.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==r&&_!==a&&yr(o,h,l,u,c,d,_.x,_.y)&&at(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==r&&M!==a&&yr(o,h,l,u,c,d,M.x,M.y)&&at(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=v&&_.y>=f&&_.y<=m&&_!==r&&_!==a&&yr(o,h,l,u,c,d,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==r&&M!==a&&yr(o,h,l,u,c,d,M.x,M.y)&&at(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $g(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Qa(r,s)&&Wd(r,n,n.next,s)&&vs(r,s)&&vs(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ys(n),ys(n.next),n=i=s),n=n.next}while(n!==i);return Ni(n)}function qg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qg(a,o)){let l=jd(a,o);return a=Ni(a,a.next),l=Ni(l,l.next),gs(a,e,t,n,r,s,0),void gs(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Yg(i,e){return i.x-e.x}function Jg(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&yr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),vs(o,r)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&Zg(a,o)))&&(a=o,v=f)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=jd(t,i);return Ni(n,n.next),Ni(t,t.next)}function Zg(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function Pc(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Kg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Qg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Wd(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(vs(i,e)&&vs(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||Qa(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qa(i,e){return i.x===e.x&&i.y===e.y}function Wd(i,e,t,n){let r=ma(at(i,e,t)),s=ma(at(i,e,n)),a=ma(at(t,n,i)),o=ma(at(t,n,e));return r!==s&&a!==o||!(r!==0||!pa(i,t,e))||!(s!==0||!pa(i,n,e))||!(a!==0||!pa(t,i,n))||!(o!==0||!pa(t,e,n))}function pa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ma(i){return i>0?1:i<0?-1:0}function vs(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function jd(i,e){let t=new Ic(i.i,i.x,i.y),n=new Ic(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function md(i,e,t,n){let r=new Ic(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ic(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ri=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];fd(e),gd(n,e);let a=e.length;t.forEach(fd);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,gd(n,t[l]);let o=Wg(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function fd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Lc=class i extends ht{constructor(e=new Ga([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:e0,_,M,R,A,I,O=!1;g&&(_=g.getSpacedPoints(h),O=!0,d=!1,M=g.computeFrenetFrames(h,!1),R=new E,A=new E,I=new E),d||(m=0,p=0,f=0,v=0);let k=o.extractPoints(c),G=k.shape,j=k.holes;if(!ri.isClockWise(G)){G=G.reverse();for(let N=0,C=j.length;N<C;N++){let U=j[N];ri.isClockWise(U)&&(j[N]=U.reverse())}}let V=ri.triangulateShape(G,j),q=G;for(let N=0,C=j.length;N<C;N++){let U=j[N];G=G.concat(U)}function W(N,C,U){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(C,U)}let J=G.length,K=V.length;function se(N,C,U){let b,L,B,ee=N.x-C.x,F=N.y-C.y,Z=U.x-N.x,Y=U.y-N.y,te=ee*ee+F*F,de=ee*Y-F*Z;if(Math.abs(de)>Number.EPSILON){let he=Math.sqrt(te),_e=Math.sqrt(Z*Z+Y*Y),Te=C.x-F/he,We=C.y+ee/he,ke=((U.x-Y/_e-Te)*Y-(U.y+Z/_e-We)*Z)/(ee*Y-F*Z);b=Te+ee*ke-N.x,L=We+F*ke-N.y;let xe=b*b+L*L;if(xe<=2)return new re(b,L);B=Math.sqrt(xe/2)}else{let he=!1;ee>Number.EPSILON?Z>Number.EPSILON&&(he=!0):ee<-Number.EPSILON?Z<-Number.EPSILON&&(he=!0):Math.sign(F)===Math.sign(Y)&&(he=!0),he?(b=-F,L=ee,B=Math.sqrt(te)):(b=ee,L=F,B=Math.sqrt(te/2))}return new re(b/B,L/B)}let ie=[];for(let N=0,C=q.length,U=C-1,b=N+1;N<C;N++,U++,b++)U===C&&(U=0),b===C&&(b=0),ie[N]=se(q[N],q[U],q[b]);let ve=[],Me,ne=ie.concat();for(let N=0,C=j.length;N<C;N++){let U=j[N];Me=[];for(let b=0,L=U.length,B=L-1,ee=b+1;b<L;b++,B++,ee++)B===L&&(B=0),ee===L&&(ee=0),Me[b]=se(U[b],U[B],U[ee]);ve.push(Me),ne=ne.concat(Me)}for(let N=0;N<m;N++){let C=N/m,U=p*Math.cos(C*Math.PI/2),b=f*Math.sin(C*Math.PI/2)+v;for(let L=0,B=q.length;L<B;L++){let ee=W(q[L],ie[L],b);fe(ee.x,ee.y,-U)}for(let L=0,B=j.length;L<B;L++){let ee=j[L];Me=ve[L];for(let F=0,Z=ee.length;F<Z;F++){let Y=W(ee[F],Me[F],b);fe(Y.x,Y.y,-U)}}}let oe=f+v;for(let N=0;N<J;N++){let C=d?W(G[N],ne[N],oe):G[N];O?(A.copy(M.normals[0]).multiplyScalar(C.x),R.copy(M.binormals[0]).multiplyScalar(C.y),I.copy(_[0]).add(A).add(R),fe(I.x,I.y,I.z)):fe(C.x,C.y,0)}for(let N=1;N<=h;N++)for(let C=0;C<J;C++){let U=d?W(G[C],ne[C],oe):G[C];O?(A.copy(M.normals[N]).multiplyScalar(U.x),R.copy(M.binormals[N]).multiplyScalar(U.y),I.copy(_[N]).add(A).add(R),fe(I.x,I.y,I.z)):fe(U.x,U.y,u/h*N)}for(let N=m-1;N>=0;N--){let C=N/m,U=p*Math.cos(C*Math.PI/2),b=f*Math.sin(C*Math.PI/2)+v;for(let L=0,B=q.length;L<B;L++){let ee=W(q[L],ie[L],b);fe(ee.x,ee.y,u+U)}for(let L=0,B=j.length;L<B;L++){let ee=j[L];Me=ve[L];for(let F=0,Z=ee.length;F<Z;F++){let Y=W(ee[F],Me[F],b);O?fe(Y.x,Y.y+_[h-1].y,_[h-1].x+U):fe(Y.x,Y.y,u+U)}}}function me(N,C){let U=N.length;for(;--U>=0;){let b=U,L=U-1;L<0&&(L=N.length-1);for(let B=0,ee=h+2*m;B<ee;B++){let F=J*B,Z=J*(B+1);T(C+b+F,C+L+F,C+L+Z,C+b+Z)}}}function fe(N,C,U){l.push(N),l.push(C),l.push(U)}function ce(N,C,U){w(N),w(C),w(U);let b=r.length/3,L=y.generateTopUV(n,r,b-3,b-2,b-1);D(L[0]),D(L[1]),D(L[2])}function T(N,C,U,b){w(N),w(C),w(b),w(C),w(U),w(b);let L=r.length/3,B=y.generateSideWallUV(n,r,L-6,L-3,L-2,L-1);D(B[0]),D(B[1]),D(B[3]),D(B[1]),D(B[2]),D(B[3])}function w(N){r.push(l[3*N+0]),r.push(l[3*N+1]),r.push(l[3*N+2])}function D(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(d){let C=0,U=J*C;for(let b=0;b<K;b++){let L=V[b];ce(L[2]+U,L[1]+U,L[0]+U)}C=h+2*m,U=J*C;for(let b=0;b<K;b++){let L=V[b];ce(L[0]+U,L[1]+U,L[2]+U)}}else{for(let C=0;C<K;C++){let U=V[C];ce(U[2],U[1],U[0])}for(let C=0;C<K;C++){let U=V[C];ce(U[0]+J*h,U[1]+J*h,U[2]+J*h)}}n.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,C=0;me(q,C),C+=q.length;for(let U=0,b=j.length;U<b;U++){let L=j[U];me(L,C),C+=L.length}n.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ha[r.type]().fromJSON(r)),new i(n,e.options)}},e0={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new re(s,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],v=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-u),new re(d,1-f),new re(v,1-g)]:[new re(o,1-l),new re(h,1-u),new re(p,1-f),new re(m,1-g)]}},Uc=class i extends Ui{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Pr=class i extends Ui{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_s=class i extends ht{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new E,f=new re;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<r;v++){let m=v*(n+1);for(let g=0;g<n;g++){let y=g+m,_=y,M=y+n+1,R=y+n+2,A=y+1;o.push(_,M,A),o.push(M,R,A)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nc=class i extends ht{constructor(e=new Ga([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;ri.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let y=f[m];ri.isClockWise(y)===!0&&(f[m]=y.reverse())}let v=ri.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let y=f[m];p=p.concat(y)}for(let m=0,g=p.length;m<g;m++){let y=p[m];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){let y=v[m],_=y[0]+u,M=y[1]+u,R=y[2]+u;n.push(_,M,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Dc=class i extends ht{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){let y=[],_=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+M,1-_),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let _=h[g][y+1],M=h[g][y],R=h[g+1][y],A=h[g+1][y+1];(g!==0||a>0)&&p.push(_,M,A),(g!==n-1||l<Math.PI)&&p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Oc=class i extends Ui{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Di=class i extends ht{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let v=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let v=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,g=(r+1)*(p-1)+f,y=(r+1)*p+f;a.push(v,m,y),a.push(m,g,y)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},kc=class i extends ht{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,f=new E,v=new E,m=new E,g=new E;for(let _=0;_<=n;++_){let M=_/n*s*Math.PI*2;y(M,s,a,e,p),y(M+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let R=0;R<=r;++R){let A=R/r*Math.PI*2,I=-t*Math.cos(A),O=t*Math.sin(A);u.x=p.x+(I*g.x+O*v.x),u.y=p.y+(I*g.y+O*v.y),u.z=p.z+(I*g.z+O*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(R/r)}}for(let _=1;_<=n;_++)for(let M=1;M<=r;M++){let R=(r+1)*(_-1)+(M-1),A=(r+1)*_+(M-1),I=(r+1)*_+M,O=(r+1)*(_-1)+M;o.push(R,A,O),o.push(A,I,O)}function y(_,M,R,A,I){let O=Math.cos(_),k=Math.sin(_),G=R/M*_,j=Math.cos(G);I.x=A*(2+j)*.5*O,I.y=A*(2+j)*k*.5,I.z=A*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Fc=class i extends ht{constructor(e=new Ba(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new re,h=new E,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let g=a.normals[m],y=a.binormals[m];for(let _=0;_<=r;_++){let M=_/r*Math.PI*2,R=Math.sin(M),A=-Math.cos(M);l.x=A*g.x+R*y.x,l.y=A*g.y+R*y.y,l.z=A*g.z+R*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=r;g++)c.x=m/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=r;g++){let y=(r+1)*(m-1)+(g-1),_=(r+1)*m+(g-1),M=(r+1)*m+g,R=(r+1)*(m-1)+g;f.push(y,_,R),f.push(_,M,R)}})()})(),this.setIndex(f),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ha[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Bc=class extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),g=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),vd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),vd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function vd(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Qv=Object.freeze({__proto__:null,BoxGeometry:At,CapsuleGeometry:Ac,CircleGeometry:fs,ConeGeometry:Li,CylinderGeometry:Zt,DodecahedronGeometry:Rc,EdgesGeometry:Cc,ExtrudeGeometry:Lc,IcosahedronGeometry:Uc,LatheGeometry:Va,OctahedronGeometry:Pr,PlaneGeometry:cn,PolyhedronGeometry:Ui,RingGeometry:_s,ShapeGeometry:Nc,SphereGeometry:Dc,TetrahedronGeometry:Oc,TorusGeometry:Di,TorusKnotGeometry:kc,TubeGeometry:Fc,WireframeGeometry:Bc});var zt=class extends oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Et,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function t0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ir=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends Ir{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case vu:s=e,o=2*t-n;break;case yu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vu:a=e,l=2*n-t;break;case yu:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),v=f*f,m=v*f,g=-d*m+2*d*v-d*f,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,_=(-1-p)*m+(1.5+p)*v+.5*f,M=p*m-p*v;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+y*a[c+R]+_*a[l+R]+M*a[u+R];return s}},Hc=class extends Ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Vc=class extends Ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case tc:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return tc;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&t0(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Vo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ln.prototype.TimeBufferType=Float32Array,ln.prototype.ValueBufferType=Float32Array,ln.prototype.DefaultInterpolation=tc;var Ai=class extends ln{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool",Ai.prototype.ValueBufferType=Array,Ai.prototype.DefaultInterpolation=ba,Ai.prototype.InterpolantFactoryMethodLinear=void 0,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends ln{};Gc.prototype.ValueTypeName="color";var Wc=class extends ln{};Wc.prototype.ValueTypeName="number";var jc=class extends Ir{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Wa=class extends ln{InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}};Wa.prototype.ValueTypeName="quaternion",Wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends ln{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string",Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=ba,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends ln{};Xc.prototype.ValueTypeName="vector";var $c=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},n0=new $c,qc=class{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ja=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Xa=class extends ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ml=new Ne,yd=new E,_d=new E,Yc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ey=new Ne,ty=new E,ny=new E;var Jc=class extends Yc{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var iy=new Ne,ry=new Ne,sy=new Ne;var qa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function xd(){return performance.now()}var ay=new E,oy=new Bt,ly=new E,cy=new E;var hy=new E,uy=new Bt,dy=new E,py=new E;var oh="\\[\\]\\.:\\/",i0=new RegExp("["+oh+"]","g"),bl="[^"+oh+"]",r0="[^"+oh.replace("\\.","")+"]",s0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bl)+/(WCOD+)?/.source.replace("WCOD",r0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl)+"$"),a0=["material","materials","bones","map"],it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);a0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=class{constructor(i,e,t){let n=t||it.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var Md=new Ne,Ya=class{constructor(e,t,n=0,r=1/0){this.ray=new Pi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(e,t=!0,n=[]){return Zc(e,this,n,t),n.sort(bd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Zc(e[r],this,n,t);return n.sort(bd),n}};function bd(i,e){return i.distance-e.distance}function Zc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Zc(s[a],e,t,!0)}}var fy=new re;var gy=new E,vy=new E;var yy=new E;var _y=new E,xy=new Ne,My=new Ne;var by=new E,Sy=new Re,wy=new Re;var Ty=new E,Ey=new E,Ay=new E;var Ry=new E,Cy=new ds;var Py=new bn;var Iy=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var un=13,Oe=1.9,Ot=(un-2*Oe)/9,$t=un/2;function hn(i){let e=Math.floor(i/10),t=i%10,n=[[0,1],[-1,0],[0,-1],[1,0]][e],r=[[-1,0],[0,-1],[1,0],[0,1]][e],s=t===0,a=[[$t-Oe/2,$t-Oe/2],[-$t+Oe/2,$t-Oe/2],[-$t+Oe/2,-$t+Oe/2],[$t-Oe/2,-$t+Oe/2]][e],o=a[0],l=a[1];if(!s){let c=Oe/2+(t-.5)*Ot;o+=r[0]*c,l+=r[1]*c}return{x:o,z:l,side:e,out:n,along:r,corner:s,w:s?Oe:Ot}}function l0(i,e){if(Math.abs(i)>$t||Math.abs(e)>$t)return-1;let t=$t-Oe;return Math.abs(i)<t&&Math.abs(e)<t?-1:e>t?i>t?0:i<-t?10:1+Math.floor((t-i)/Ot):i<-t?e<-t?20:11+Math.floor((t-e)/Ot):e<-t?i>t?30:21+Math.floor((i+t)/Ot):31+Math.floor((e+t)/Ot)}var Xt={paper:"#f3ecdc",line:"#2b2a33",ink:"#24232b",soft:"#6b6658",board:"#cfe3d6"};function c0(i){let e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d"),n=i/un;t.fillStyle=Xt.board,t.fillRect(0,0,i,i);let r=t.createRadialGradient(i/2,i/2,i*.05,i/2,i/2,i*.42);r.addColorStop(0,"#dcefe4"),r.addColorStop(1,"#b9d8c8"),t.fillStyle=r,t.fillRect(Oe*n,Oe*n,(un-2*Oe)*n,(un-2*Oe)*n),t.save(),t.translate(i/2,i/2),t.strokeStyle="rgba(40,90,80,0.18)",t.lineWidth=n*.03;for(let s=1;s<6;s++)t.beginPath(),t.arc(0,0,s*n*.85,0,Math.PI*2),t.stroke();t.rotate(-Math.PI/4),t.fillStyle="#1f3a4a",t.font=`900 ${n*1.25}px "Avenir Next", "Segoe UI", system-ui, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText("PARCEL",0,-n*.15),t.font=`600 ${n*.28}px "Avenir Next", "Segoe UI", system-ui, sans-serif`,t.fillStyle="#2f5d63",t.fillText("\xB7  THE HARBOUR CITY TRADING GAME  \xB7",0,n*.75),t.restore();for(let s of ue)u0(t,n,s);return t.strokeStyle=Xt.line,t.lineWidth=n*.035,t.strokeRect(1,1,i-2,i-2),t.strokeRect(Oe*n,Oe*n,(un-2*Oe)*n,(un-2*Oe)*n),e}function h0(i,e,t){let n=e.split(" "),r=[],s="";for(let a of n){let o=s?`${s} ${a}`:a;i.measureText(o).width>t&&s?(r.push(s),s=a):s=o}return s&&r.push(s),r}var Xd={card:{fortune:"?",gazette:"\u2709"},tax:"\u2696",transit:"\u26F4",utility:"\u26A1"};function u0(i,e,t){let n=hn(t.index),r=n.w*e,s=Oe*e;i.save(),i.translate((n.x+$t)*e,(n.z+$t)*e),n.corner?i.rotate([-Math.PI/4,Math.PI/4,3*Math.PI/4,-(3*Math.PI)/4][n.side]+0):i.rotate([0,Math.PI/2,Math.PI,-Math.PI/2][n.side]);let a=(d,p)=>`${d} ${p*e}px "Avenir Next", "Segoe UI", system-ui, sans-serif`;if(i.textAlign="center",i.textBaseline="middle",n.corner){i.rotate(-[-Math.PI/4,Math.PI/4,3*Math.PI/4,-(3*Math.PI)/4][n.side]),i.fillStyle="#efe6cf",i.fillRect(-s/2,-s/2,s,s),i.strokeStyle=Xt.line,i.lineWidth=e*.025,i.strokeRect(-s/2,-s/2,s,s),i.rotate([-Math.PI/4,Math.PI/4,3*Math.PI/4,-(3*Math.PI)/4][n.side]),i.fillStyle=Xt.ink;let d={start:"\u279C",jail:"\u25A6",park:"\u2600",gotojail:"\u270B"}[t.kind];if(t.kind==="jail"){i.save(),i.rotate(-[-Math.PI/4,Math.PI/4,3*Math.PI/4,-(3*Math.PI)/4][n.side]),i.fillStyle="#e9a23b",i.fillRect(-s/2+s*.32,-s/2,s*.68,s*.68),i.strokeStyle=Xt.line,i.strokeRect(-s/2+s*.32,-s/2,s*.68,s*.68),i.lineWidth=e*.04;for(let p=1;p<5;p++){let f=-s/2+s*.32+p*s*.68/5;i.beginPath(),i.moveTo(f,-s/2),i.lineTo(f,-s/2+s*.68),i.stroke()}i.restore(),i.fillStyle=Xt.ink,i.font=a(800,.26),i.fillText("LOCKUP",0,-e*.05),i.font=a(600,.15),i.fillStyle=Xt.soft,i.fillText("just visiting",0,e*.55)}else i.font=a(400,.6),i.fillStyle=t.kind==="start"?"#d4483b":t.kind==="gotojail"?"#2c56c2":"#e0a52a",i.fillText(d,0,-e*.2),i.fillStyle=Xt.ink,i.font=a(800,.3),i.fillText(t.name.toUpperCase(),0,e*.38),i.font=a(600,.15),i.fillStyle=Xt.soft,i.fillText(t.kind==="start"?`collect $${200}`:t.note||"",0,e*.62);i.restore();return}i.fillStyle=Xt.paper,i.fillRect(-r/2,-s/2,r,s),i.strokeStyle=Xt.line,i.lineWidth=e*.02,i.strokeRect(-r/2,-s/2,r,s);let o=t.group&&Ge[t.group],l=-s/2;t.kind==="lot"&&(i.fillStyle=o.color,i.fillRect(-r/2,-s/2,r,s*.22),i.strokeRect(-r/2,-s/2,r,s*.22),l+=s*.22),i.fillStyle=Xt.ink,i.font=a(800,.13),h0(i,t.name.toUpperCase(),r*.86).forEach((d,p)=>i.fillText(d,0,l+e*.2+p*e*.16));let h=t.kind==="card"?Xd.card[t.deck]:Xd[t.kind];h&&(i.font=a(400,.5),i.fillStyle=t.kind==="card"?t.deck==="fortune"?"#d46a2e":"#2f78b7":"#3c4a57",i.fillText(h,0,e*.25)),i.font=a(600,.14),i.fillStyle=Xt.soft;let u=t.price?`$${t.price}`:t.kind==="tax"?`pay $${t.amount}`:"";u&&i.fillText(u,0,s/2-e*.2),i.restore()}function d0(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#fbf8f1",t.fillRect(0,0,128,128),t.fillStyle="#c8c1b0",t.fillRect(0,0,128,4),t.fillRect(0,124,128,4),t.fillRect(0,0,4,128),t.fillRect(124,0,4,128);let n={1:[[64,64]],2:[[34,34],[94,94]],3:[[30,30],[64,64],[98,98]],4:[[34,34],[94,34],[34,94],[94,94]],5:[[30,30],[98,30],[64,64],[30,98],[98,98]],6:[[34,28],[94,28],[34,64],[94,64],[34,100],[94,100]]}[i];t.fillStyle=i===1?"#c33b2f":"#22212a";for(let[s,a]of n)t.beginPath(),t.arc(s,a,i===1?15:11,0,Math.PI*2),t.fill();let r=new jn(e);return r.colorSpace=pt,r}var p0=[2,5,1,6,3,4],$d={1:new Et(0,0,0),6:new Et(Math.PI,0,0),2:new Et(0,0,Math.PI/2),5:new Et(0,0,-Math.PI/2),3:new Et(-Math.PI/2,0,0),4:new Et(Math.PI/2,0,0)};function m0(i,e){let t=new zt({color:e,metalness:.55,roughness:.32}),n=new zt({color:new Re(e).multiplyScalar(.55),metalness:.5,roughness:.4}),r=new Mn,s=(a,o=t,l=0,c=0,h=0,u=0,d=0,p=0)=>{let f=new qe(a,o);return f.position.set(l,c,h),f.rotation.set(u,d,p),f.castShadow=!0,r.add(f),f};switch(s(new Zt(.2,.22,.05,28),n,0,.025),i){case"boat":{s(new Zt(.2,.12,.12,16,1,!1,0,Math.PI),t,0,.12,0,0,0,Math.PI/2).scale.set(1,1.6,1),s(new Zt(.012,.012,.34,8),n,0,.3),s(new Li(.13,.28,3),t,.04,.32,0,0,Math.PI/2,0).scale.set(.25,1,1);break}case"kite":s(new Pr(.17),t,0,.3,0).scale.set(.75,1.25,.2),s(new Zt(.01,.01,.2,6),n,0,.11);break;case"lantern":s(new Zt(.1,.13,.24,6),t,0,.18),s(new Li(.13,.1,6),n,0,.35),s(new Di(.05,.012,8,16),n,0,.43);break;case"anchor":s(new Zt(.025,.025,.32,10),t,0,.22),s(new Di(.045,.015,8,16),t,0,.42),s(new Di(.13,.025,8,20,Math.PI),t,0,.16,0,Math.PI,0,0),s(new At(.18,.025,.03),t,0,.33);break;case"tram":s(new At(.34,.17,.17),t,0,.15),s(new At(.3,.05,.18),n,0,.26),s(new Zt(.008,.008,.14,6),n,0,.34,0,0,0,.4);break;default:s(new Pr(.16),t,0,.27).scale.set(1,1.3,1),t.flatShading=!0}return r}function qd(i){let e=new Mn;if(i){let t=new zt({color:"#d2493b",roughness:.5}),n=new qe(new At(.3,.42,.22),t);n.position.y=.21,n.castShadow=!0,e.add(n);let r=new qe(new At(.16,.12,.12),t);r.position.y=.48,r.castShadow=!0,e.add(r)}else{let t=new zt({color:"#2fa35a",roughness:.5}),n=new qe(new At(.16,.12,.15),t);n.position.y=.06,n.castShadow=!0,e.add(n);let r=new qe(new Li(.13,.09,4),t);r.position.y=.165,r.rotation.y=Math.PI/4,r.castShadow=!0,e.add(r)}return e}var li={iso:{label:"Isometric",ortho:!0,az:Math.PI/4,pol:Math.acos(1/Math.sqrt(3)),size:7.4,wide:9.8,fixedPol:!0},top:{label:"Top",ortho:!0,az:0,pol:1e-4,size:7.6,wide:7.2,fixedPol:!0},tv:{label:"TV",ortho:!1,az:0,pol:1.05,dist:19,follow:!0}},Ny=Object.keys(li),f0=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;var eo=class{constructor(e,t={}){this.el=e,this.onTile=t.onTile||(()=>{}),this.speed=1;let n=matchMedia("(pointer: coarse)").matches;this.renderer=new La({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sd,this.renderer.outputColorSpace=pt,e.appendChild(this.renderer.domElement);let r=this.scene=new Na;r.background=new Re("#14202b"),r.fog=new Ua("#14202b",30,60),this.persp=new Dt(40,1,.1,200),this.ortho=new Rr(-10,10,10,-10,.1,200),this.orbit={az:0,pol:.9,zoom:1,tx:0,tz:0},this.onDice=t.onDice||(()=>{});let s="iso";try{s=localStorage.getItem("parcel.view")||"iso"}catch{}this.setView(s),r.add(new Xa("#fff6e8","#2a3340",1.6));let a=new $a("#ffffff",2.2);a.position.set(6,14,8),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:1,far:40}),a.shadow.bias=-5e-4,r.add(a);let o=new qe(new fs(40,48),new zt({color:"#2a3b46",roughness:.9}));o.rotation.x=-Math.PI/2,o.position.y=-.36,o.receiveShadow=!0,r.add(o);let l=new qe(new At(un+.5,.36,un+.5),new zt({color:"#6b4a31",roughness:.6}));l.position.y=-.19,l.castShadow=!0,l.receiveShadow=!0,r.add(l);let c=Math.min(n?2048:3072,this.renderer.capabilities.maxTextureSize),h=new jn(c0(c));h.colorSpace=pt,h.anisotropy=this.renderer.capabilities.getMaxAnisotropy();let u=new qe(new cn(un,un),new zt({map:h,roughness:.85}));u.rotation.x=-Math.PI/2,u.position.y=.001,u.receiveShadow=!0,r.add(u),this.boardTop=u;for(let[f,v,m,g]of[["fortune",-2.7,-2.7,"#d46a2e"],["gazette",2.7,2.7,"#2f78b7"]]){let y=document.createElement("canvas");y.width=256,y.height=160;let _=y.getContext("2d");_.fillStyle=g,_.fillRect(0,0,256,160),_.strokeStyle="#fff8",_.lineWidth=6,_.strokeRect(10,10,236,140),_.fillStyle="#fff",_.font="800 38px system-ui, sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText(f.toUpperCase(),128,80);let M=new jn(y);M.colorSpace=pt;let R=new zt({color:"#f4f0e6"}),A=new qe(new At(1.6,.12,1),[R,R,new zt({map:M,roughness:.6}),R,R,R]);A.position.set(v,.06,m),A.rotation.y=-Math.PI/4,A.castShadow=!0,r.add(A)}this.hl=new qe(new cn(1,1),new wn({color:"#ffe27a",transparent:!0,opacity:.35,depthWrite:!1})),this.hl.rotation.x=-Math.PI/2,this.hl.position.y=.01,this.hl.visible=!1,r.add(this.hl);let d=[1,2,3,4,5,6].reduce((f,v)=>(f[v]=d0(v),f),{}),p=p0.map(f=>new zt({map:d[f],roughness:.35}));this.dice=[0,1].map(f=>{let v=new qe(new At(.5,.5,.5),p);return v.castShadow=!0,v.position.set(f?1.5:.75,.25,f?.8:1.55),v.quaternion.setFromEuler($d[f?3:4]),r.add(v),v}),this.tokens=new Map,this.owners=new Map,this.shades=new Map,this.houses=new Map,this.floats=[],this.ring=new qe(new _s(.24,.3,40),new wn({color:"#ffe27a",transparent:!0,opacity:.9,side:Kc,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,r.add(this.ring),this.turnId=null,this.bindInput(),this.resize(),new ResizeObserver(()=>this.resize()).observe(e),this.clock=new qa,this.renderer.setAnimationLoop(()=>this.frame())}resize(){let e=this.el.clientWidth||innerWidth,t=this.el.clientHeight||innerHeight;this.renderer.setSize(e,t,!1),this.size={w:e,h:t},this.persp.aspect=e/t,this.fit=e<t?1+(t/e-1)*1.25:1,this.persp.updateProjectionMatrix()}setView(e){li[e]||(e="iso"),this.viewName=e;let t=li[e];Object.assign(this.orbit,{az:t.az,pol:t.pol,zoom:1,tx:0,tz:e==="tv"?.6:0}),this.camera=t.ortho?this.ortho:this.persp,this.followPause=0;try{localStorage.setItem("parcel.view",e)}catch{}}nextView(){let e=Object.keys(li);return this.setView(e[(e.indexOf(this.viewName)+1)%e.length]),li[this.viewName].label}resetCamera(){this.setView(this.viewName)}placeCamera(e){let t=this.orbit,n=li[this.viewName];if(n.follow&&this.focus&&performance.now()>this.followPause){let s=1-Math.exp(-e*1.5);t.tx+=(this.focus.x*.55-t.tx)*s,t.tz+=(this.focus.z*.55+.6-t.tz)*s}let r=new E(Math.sin(t.pol)*Math.sin(t.az),Math.cos(t.pol),Math.sin(t.pol)*Math.cos(t.az));if(n.ortho){let s=this.size?this.size.w/this.size.h:1,a=Math.max(n.size,n.wide/s)/t.zoom;Object.assign(this.ortho,{left:-a*s,right:a*s,top:a,bottom:-a}),this.ortho.updateProjectionMatrix(),this.ortho.position.set(t.tx+r.x*40,r.y*40,t.tz+r.z*40),this.ortho.up.set(t.pol<.01?-Math.sin(t.az):0,t.pol<.01?0:1,t.pol<.01?-Math.cos(t.az):0),this.ortho.lookAt(t.tx,0,t.tz)}else{let s=n.dist/t.zoom*this.fit;this.persp.position.set(t.tx+r.x*s,r.y*s,t.tz+r.z*s),this.persp.lookAt(t.tx,0,t.tz)}}pan(e,t){let n=this.orbit,r=li[this.viewName],s=this.size?this.size.h:800,a=r.ortho?2*this.ortho.top/s:2*(r.dist/n.zoom)*this.fit*Math.tan(this.persp.fov*Math.PI/360)/s,o=1/Math.max(.35,Math.cos(n.pol)),l=Math.cos(n.az),c=-Math.sin(n.az),h=-Math.sin(n.az),u=-Math.cos(n.az);n.tx=Math.min(8,Math.max(-8,n.tx-l*e*a+h*t*a*o)),n.tz=Math.min(8,Math.max(-8,n.tz-c*e*a+u*t*a*o)),this.followPause=performance.now()+6e3}rotate(e,t){let n=this.orbit,r=li[this.viewName];n.az-=e*.006,r.fixedPol||(n.pol=Math.min(1.3,Math.max(.12,n.pol-t*.005)))}zoom(e){this.orbit.zoom=Math.min(3.5,Math.max(.55,this.orbit.zoom/e))}bindInput(){let e=this.renderer.domElement,t=new Map,n=null,r=0,s=null;e.style.touchAction="none",e.addEventListener("contextmenu",o=>o.preventDefault()),e.addEventListener("pointerdown",o=>{if(e.setPointerCapture(o.pointerId),t.set(o.pointerId,{x:o.clientX,y:o.clientY}),n={x:o.clientX,y:o.clientY,moved:!1,panning:o.button===2||o.button===1||o.shiftKey},t.size===2){let[l,c]=[...t.values()];r=Math.hypot(l.x-c.x,l.y-c.y),s={x:(l.x+c.x)/2,y:(l.y+c.y)/2}}}),e.addEventListener("pointermove",o=>{let l=t.get(o.pointerId);if(!l){this.hover(o);return}let c=o.clientX-l.x,h=o.clientY-l.y;if(l.x=o.clientX,l.y=o.clientY,n&&Math.hypot(o.clientX-n.x,o.clientY-n.y)>6&&(n.moved=!0),t.size===2){let[u,d]=[...t.values()],p=Math.hypot(u.x-d.x,u.y-d.y),f={x:(u.x+d.x)/2,y:(u.y+d.y)/2};r&&this.zoom(r/p),s&&this.pan(f.x-s.x,f.y-s.y),r=p,s=f;return}n&&n.moved&&(n.panning?this.pan(c,h):this.rotate(c,h))});let a=o=>{t.delete(o.pointerId),t.size<2&&(r=0,s=null),n&&!n.moved&&t.size===0&&o.button===0&&(this.pickDice(o)?this.onDice():this.onTile(this.pick(o))),t.size===0&&(n=null)};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",o=>{t.delete(o.pointerId),n=null}),e.addEventListener("wheel",o=>{o.preventDefault(),this.zoom(Math.exp(o.deltaY*.001))},{passive:!1})}ray(e){let t=this.renderer.domElement.getBoundingClientRect(),n=new re((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new Ya;return r.setFromCamera(n,this.camera),r}pick(e){let t=this.ray(e).intersectObject(this.boardTop)[0];return t?l0(t.point.x,t.point.z):-1}pickDice(e){return this.ray(e).intersectObjects(this.dice,!1).length>0}hover(e){if(matchMedia("(pointer: coarse)").matches)return;let t=this.pickDice(e),n=t?-1:this.pick(e);this.renderer.domElement.style.cursor=t&&this.diceReady||n>=0?"pointer":"grab",this.highlight(n>=0?n:this.selected??-1)}highlight(e){if(e<0){this.hl.visible=!1;return}let t=hn(e);this.hl.visible=!0,this.hl.position.set(t.x,.012,t.z);let n=t.side%2===0;this.hl.scale.set(t.corner?Oe:n?Ot:Oe,t.corner||n?Oe:Ot,1)}select(e){this.selected=e,this.highlight(e)}spot(e,t,n){let r=hn(e),s=[[0,0],[-.26,.2],[.26,.2],[-.26,-.22],[.26,-.22],[0,.42]],[a,o]=s[t%s.length];r.corner&&(a*=1.6,o*=1.4);let l=r.x+r.along[0]*a+r.out[0]*o,c=r.z+r.along[1]*a+r.out[1]*o;if(e===10){if(n){let u=t%4;return new E(r.x+.16*Oe+(u%2-.5)*.42,0,r.z-.16*Oe+(Math.floor(u/2)-.5)*.42)}let h=[[-.64,.64],[-.2,.68],[.25,.68],[.66,.68],[-.68,.2],[-.68,-.25],[-.68,-.66]][t%7];return new E(r.x+h[0],0,r.z+h[1])}return new E(l,0,c)}setState(e,t=[]){if(!e){let n=t.filter(r=>r.seat);this.syncTokens(n.map(r=>({id:r.id,token:r.seat.token,color:r.seat.color,pos:0,out:!1,inJail:!1})));for(let r of[...this.owners.keys()])this.setOwner(r,null);for(let r of[...this.houses.keys()])this.setLevel(r,0);this.ring.visible=!1,this.turnId=null;return}this.syncTokens(e.players);for(let n=0;n<40;n++){let r=e.props[n],s=r?e.players.find(a=>a.id===r.owner):null;this.setOwner(n,s?s.color:null,r&&r.mortgaged),this.setLevel(n,r?r.level:0)}this.turnId=e.phase==="play"?e.players[e.turn].id:null}syncTokens(e){let t=new Set(e.filter(n=>!n.out).map(n=>n.id));for(let[n,r]of this.tokens)t.has(n)||(this.scene.remove(r.obj),this.tokens.delete(n));for(let n of e){if(n.out)continue;let r=this.tokens.get(n.id);(!r||r.kind!==n.token||r.color!==n.color)&&(r&&this.scene.remove(r.obj),r={obj:m0(n.token,n.color),kind:n.token,color:n.color,pos:n.pos,busy:!1},this.scene.add(r.obj),this.tokens.set(n.id,r)),r.pos=n.pos,r.jailed=n.inJail}this.layoutTokens()}layoutTokens(e=null){let t=new Map;for(let[n,r]of this.tokens){if(r.busy||n===e)continue;let s=`${r.pos}:${r.pos===10&&r.jailed?"j":""}`;t.has(s)||t.set(s,[]),t.get(s).push(r)}for(let n of t.values())n.forEach((r,s)=>{r.target=this.spot(r.pos,n.length===1?0:s+(n.length>1?1:0),r.jailed),r.placed||(r.obj.position.copy(r.target),r.placed=!0)})}setOwner(e,t,n=!1){let r=hn(e),s=this.owners.get(e);if(!t){s&&(this.scene.remove(s),this.owners.delete(e)),this.setShade(e,!1);return}if(!s){s=new qe(new At(1,.05,1),new zt({roughness:.4,metalness:.2})),s.castShadow=!0;let a=r.side%2===0,o=Ot*.86,l=.12;s.scale.set(a?o:l,1,a?l:o);let c=Oe/2+.1;s.position.set(r.x+r.out[0]*c,.03,r.z+r.out[1]*c),this.scene.add(s),this.owners.set(e,s)}s.material.color.set(t),s.material.opacity=1,this.setShade(e,n)}setShade(e,t){let n=this.shades.get(e);if(!t){n&&(this.scene.remove(n),this.shades.delete(e));return}if(n)return;let r=hn(e),s=r.side%2===0;n=new qe(new cn(s?Ot:Oe,s?Oe:Ot),new wn({color:"#000",transparent:!0,opacity:.45,depthWrite:!1})),n.rotation.x=-Math.PI/2,n.position.set(r.x,.008,r.z),this.scene.add(n),this.shades.set(e,n)}setLevel(e,t){let n=this.houses.get(e);if(n&&n.userData.level===t||(n&&(this.scene.remove(n),this.houses.delete(e)),!t))return;let r=hn(e);n=new Mn,n.userData.level=t;let s=-(Oe/2-Oe*.11),a=r.x+r.out[0]*s,o=r.z+r.out[1]*s,l=[0,Math.PI/2,Math.PI,-Math.PI/2][r.side];if(t===5){let c=qd(!0);c.position.set(a,0,o),c.rotation.y=l,n.add(c)}else for(let c=0;c<t;c++){let h=(c-(t-1)/2)*.22,u=qd(!1);u.position.set(a+r.along[0]*h,0,o+r.along[1]*h),u.rotation.y=l,n.add(u)}this.scene.add(n),this.houses.set(e,n)}async rollDice(e,t=0){let n=hn(t),r=new E(n.x*.55,2.4,n.z*.55),s=[new E(.75,.25,1.55),new E(1.5,.25,.8)],a=950/this.speed,o=this.dice.map((l,c)=>{let h=new Bt().setFromEuler($d[e[c]]),u=new Bt().setFromAxisAngle(new E(0,1,0),Math.random()*Math.PI*2);h.premultiply(u);let d=new E(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{d:l,final:h,axis:d,spin:Math.PI*(6+Math.random()*4),from:r.clone().add(new E(c*.4,0,0)),to:s[c]}});await this.tween(a,l=>{for(let c of o){let h=1-(1-l)**2;c.d.position.lerpVectors(c.from,c.to,h);let u=Math.abs(Math.sin(l*Math.PI*2.6))*(1-l)*1.4;c.d.position.y=.25+u+(1-h)*1.2;let d=new Bt().setFromAxisAngle(c.axis,(1-f0(l))*c.spin);c.d.quaternion.copy(c.final).multiply(d)}})}async moveToken(e,t,n,r,s){let a=this.tokens.get(e);if(!a)return;a.busy=!0;let o=(l,c,h,u)=>this.tween(h,d=>{a.obj.position.lerpVectors(l,c,d),a.obj.position.y=Math.sin(d*Math.PI)*u});if(s||Math.abs(r)>14||r===0)await o(a.obj.position.clone(),this.spot(n,0),700/this.speed,1.6);else{let l=Math.sign(r),c=t,h=Math.max(70,170-Math.abs(r)*6)/this.speed;for(let u=0;u<Math.abs(r);u++)c=(c+l+40)%40,await o(a.obj.position.clone(),this.spot(c,0),h,.35),this.onStep&&this.onStep(c)}a.pos=n,a.busy=!1,a.placed=!0,this.layoutTokens()}setAuction(e,t,n){if(e==null){this.clearAuction();return}let r=`${e}|${t.join("|")}|${n}`;if(this.auctionMark&&this.auctionMark.key===r)return;let s=hn(e);if(!this.auctionMark||this.auctionMark.tile!==e){this.clearAuction();let l=s.side%2===0,c=new qe(new cn(s.corner?Oe:l?Ot:Oe,s.corner||l?Oe:Ot),new wn({color:"#ffcf4a",transparent:!0,opacity:.5,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(s.x,.015,s.z);let h=document.createElement("canvas");h.width=512,h.height=256;let u=new jn(h);u.colorSpace=pt;let d=new Cr(new Ii({map:u,depthTest:!1}));d.scale.set(2.4,1.2,1),d.position.set(s.x,1.5,s.z),d.renderOrder=11,this.scene.add(c,d),this.auctionMark={tile:e,glow:c,sign:d,cv:h,tex:u}}let a=this.auctionMark;a.key=r;let o=a.cv.getContext("2d");o.clearRect(0,0,512,256),o.fillStyle="rgba(20,28,38,0.92)",o.beginPath(),o.roundRect(8,8,496,200,28),o.fill(),o.fillStyle=n||"#ffcf4a",o.beginPath(),o.roundRect(8,8,496,16,[28,28,0,0]),o.fill(),o.beginPath(),o.moveTo(230,206),o.lineTo(256,244),o.lineTo(282,206),o.fillStyle="rgba(20,28,38,0.92)",o.fill(),o.textAlign="center",o.textBaseline="middle",o.fillStyle="#ffcf4a",o.font="800 34px system-ui, sans-serif",o.fillText(t[0]||"",256,58),o.fillStyle="#fff",o.font="900 72px system-ui, sans-serif",o.fillText(t[1]||"",256,122),o.fillStyle="#b9c6cf",o.font="600 30px system-ui, sans-serif",o.fillText(t[2]||"",256,178),a.tex.needsUpdate=!0}clearAuction(){let e=this.auctionMark;e&&(this.scene.remove(e.glow,e.sign),e.tex.dispose(),e.sign.material.dispose(),e.glow.geometry.dispose(),e.glow.material.dispose(),this.auctionMark=null)}showOwned(e,t){if(this.ownedGlow){for(let r of this.ownedGlow)this.scene.remove(r),r.geometry.dispose();this.ownedGlow=null}if(!e||!e.length)return;let n=new wn({color:t||"#ffe27a",transparent:!0,opacity:.4,depthWrite:!1});this.ownedGlow=e.map(r=>{let s=hn(r),a=s.side%2===0,o=new qe(new cn(a?Ot:Oe,a?Oe:Ot),n);return o.rotation.x=-Math.PI/2,o.position.set(s.x,.014,s.z),this.scene.add(o),o})}stamp(e,t,n){let r=hn(e),s=document.createElement("canvas");s.width=512,s.height=160;let a=s.getContext("2d");a.translate(256,80),a.rotate(-.12),a.strokeStyle=n,a.lineWidth=12,a.beginPath(),a.roundRect(-230,-62,460,124,18),a.stroke(),a.fillStyle=n,a.font="900 86px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(t,0,6);let o=new jn(s);o.colorSpace=pt;let l=new Cr(new Ii({map:o,transparent:!0,depthTest:!1}));l.renderOrder=12,l.position.set(r.x,1.6,r.z),this.scene.add(l);let c=performance.now(),h=()=>{let u=(performance.now()-c)/1800,d=u<.15?1.6-u/.15*.6:1;l.scale.set(3*d,.94*d,1),l.material.opacity=u>.75?Math.max(0,1-(u-.75)/.25):1,u<1?requestAnimationFrame(h):(this.scene.remove(l),o.dispose(),l.material.dispose())};h()}float(e,t,n="#fff"){let r=document.createElement("canvas");r.width=256,r.height=64;let s=r.getContext("2d");s.font="800 40px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.lineWidth=8,s.strokeStyle="rgba(0,0,0,0.65)",s.strokeText(t,128,32),s.fillStyle=n,s.fillText(t,128,32);let a=new jn(r);a.colorSpace=pt;let o=new Cr(new Ii({map:a,transparent:!0,depthTest:!1}));o.scale.set(2,.5,1);let l=hn(e);o.position.set(l.x,.8,l.z),o.renderOrder=10,this.scene.add(o),this.floats.push({sp:o,t0:performance.now()})}tween(e,t){return new Promise(n=>{let r=performance.now(),s=()=>{let a=Math.min(1,(performance.now()-r)/e);t(a),a<1?requestAnimationFrame(s):n()};e<=0?(t(1),n()):requestAnimationFrame(s)})}frame(){let e=Math.min(.05,this.clock.getDelta()),t=performance.now();for(let s of this.tokens.values())s.busy||!s.target||s.obj.position.lerp(s.target,1-Math.exp(-e*12));let n=this.turnId&&this.tokens.get(this.turnId);if(n){this.ring.visible=!0,this.ring.position.set(n.obj.position.x,.02+Math.max(0,n.obj.position.y),n.obj.position.z);let s=1+Math.sin(t/260)*.12;this.ring.scale.set(s,s,s)}else this.ring.visible=!1;this.focus=n?n.obj.position:null;for(let s=this.floats.length-1;s>=0;s--){let a=this.floats[s],o=(t-a.t0)/1600;a.sp.position.y=.8+o*1.2,a.sp.material.opacity=Math.max(0,1-o*o),o>=1&&(this.scene.remove(a.sp),a.sp.material.map.dispose(),a.sp.material.dispose(),this.floats.splice(s,1))}this.idleSpin&&(this.orbit.az+=e*.08);let r=this.diceReady?.25+.2*Math.sin(t/220):0;for(let s of this.dice)for(let a of s.material)a.emissive.setRGB(r,r*.8,r*.3);if(this.auctionMark){let s=this.auctionMark;s.sign.position.y=1.5+Math.sin(t/400)*.08,s.glow.material.opacity=.35+.25*Math.sin(t/180)}this.placeCamera(e),this.renderer.render(this.scene,this.camera)}};var Ms=null,to=!1;try{to=localStorage.getItem("parcel.mute")==="1"}catch{}var no=()=>to;function Yd(i){to=i;try{localStorage.setItem("parcel.mute",i?"1":"0")}catch{}}function Jd(){if(to)return null;if(!Ms)try{Ms=new AudioContext}catch{return null}return Ms.state==="suspended"&&Ms.resume(),Ms}function Ht(i,e,{type:t="sine",vol:n=.15,at:r=0,slide:s=0}={}){let a=Jd();if(!a)return;let o=a.currentTime+r,l=a.createOscillator(),c=a.createGain();l.type=t,l.frequency.setValueAtTime(i,o),s&&l.frequency.exponentialRampToValueAtTime(i*s,o+e),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(a.destination),l.start(o),l.stop(o+e+.02)}function lh(i,{vol:e=.2,at:t=0,freq:n=2e3}={}){let r=Jd();if(!r)return;let s=Math.floor(r.sampleRate*i),a=r.createBuffer(1,s,r.sampleRate),o=a.getChannelData(0);for(let u=0;u<s;u++)o[u]=(Math.random()*2-1)*(1-u/s)**2;let l=r.createBufferSource(),c=r.createBiquadFilter(),h=r.createGain();l.buffer=a,c.type="bandpass",c.frequency.value=n,c.Q.value=1.2,h.gain.value=e,l.connect(c).connect(h).connect(r.destination),l.start(r.currentTime+t)}var Rt={dice(){for(let i=0;i<6;i++)lh(.05,{at:i*.11+Math.random()*.04,vol:.35,freq:1800+Math.random()*1500})},step(){Ht(520+Math.random()*60,.05,{type:"triangle",vol:.05})},coin(){Ht(1320,.09,{type:"square",vol:.04}),Ht(1760,.16,{type:"square",vol:.04,at:.07})},pay(){Ht(440,.12,{type:"triangle",vol:.08,slide:.7})},buy(){[523,659,784].forEach((i,e)=>Ht(i,.22,{type:"triangle",vol:.08,at:e*.07}))},build(){lh(.08,{vol:.25,freq:600}),Ht(300,.1,{type:"square",vol:.03,at:.05})},card(){lh(.18,{vol:.12,freq:4e3})},jail(){Ht(180,.35,{type:"sawtooth",vol:.06}),Ht(150,.4,{type:"sawtooth",vol:.05,at:.12})},turn(){Ht(880,.12,{vol:.07}),Ht(1175,.18,{vol:.07,at:.1})},offer(){Ht(660,.1,{vol:.07}),Ht(990,.14,{vol:.07,at:.09})},error(){Ht(220,.15,{type:"square",vol:.04})},win(){[523,659,784,1047].forEach((i,e)=>Ht(i,.35,{type:"triangle",vol:.09,at:e*.12}))}};function Zd(i){let e=x("input",{value:P.name,maxlength:16,placeholder:"Your name",autocomplete:"nickname"}),t=x("div.err"),n=x("input",{maxlength:28,placeholder:"Room name (optional)"}),r=x("input",{type:"checkbox",checked:!0}),s=x("input.code",{maxlength:4,placeholder:"CODE",value:P.pendingCode||"",autocapitalize:"characters"}),a=()=>{let h=au(e.value);if(t.textContent=h,!h){P.name=e.value.trim();try{localStorage.setItem("parcel.name",P.name)}catch{}}return!h};e.addEventListener("input",a),s.addEventListener("input",()=>{s.value=s.value.toUpperCase().replace(/[^A-Z]/g,"")});let o=P.busy,l=P.mode==="server"?x("div.roomlist",x("div.rlh",x("h3","Open rooms"),x("button.small",{onclick:()=>Be({t:"list"})},"Refresh")),P.rooms?P.rooms.length?P.rooms.map(h=>x("button.room",{onclick:()=>{a()&&i.join(h.code)}},x("b",h.name),x("span.muted",` \xB7 ${h.seated}/${h.max} seated \xB7 ${h.people} online \xB7 ${h.phase==="play"?"playing":h.phase==="over"?"finished":"waiting"}`),x("span.rc",h.code))):x("p.muted","No open rooms \u2013 create one!"):x("p.muted","Loading\u2026")):null,c=i.saved();return x("div.screen.home",x("div.card",x("h1.logo","PARCEL"),x("p.tag","Buy the harbour city, build it up, and strike deals that keep paying."),x("label.field","Your name",e,t),P.homeError?x("div.err.big",P.homeError):null,x("div.split",x("div.box",x("h3","Open a room"),n,P.mode==="server"?x("label.check",r," Show in the room list"):null,x("button.primary",{disabled:o,onclick:()=>{a()&&i.create(n.value,r.checked)}},o==="create"?"Opening\u2026":"Create room")),x("div.box",x("h3","Join a room"),s,x("button.primary",{disabled:o,onclick:()=>{a()&&s.value.length===4&&i.join(s.value)}},o==="join"?"Joining\u2026":"Join"))),c?x("div.resume",`You were hosting room ${c.code}. `,x("button.small",{onclick:()=>i.resume(c)},"Reopen it"),x("button.small",{onclick:()=>i.forget()},"Forget")):null,l,x("p.mode muted",P.mode==="server"?"Connected to a game server.":"Serverless: the room is hosted in the creator\u2019s browser and players connect directly (WebRTC). The host should keep the tab open \u2013 reloading it brings the room back.")))}function Kd(i){let e=P.room,t=e.members.find(u=>u.id===P.you),n=Hi(),r=e.members.filter(u=>u.seat),s=(u,d)=>r.some(p=>p!==t&&p.seat[u]===d),a=Gi(e.code),o=async()=>{try{await navigator.clipboard.writeText(a),Mt("Invite link copied")}catch{prompt("Invite link",a)}},l=navigator.share?()=>navigator.share({title:"PARCEL",text:`Join my PARCEL table \u2013 room ${e.code}`,url:a}).catch(()=>{}):null,c=e.settings,h=u=>Be({t:"settings",settings:u});return x("div.screen.lobby",x("div.card",x("div.lh",x("div",x("div.muted","Room"),n?x("input.rname",{value:e.name,maxlength:28,onchange:u=>Be({t:"settings",name:u.target.value})}):x("h2",e.name)),x("div.codebox",x("div.muted","Code"),x("div.bigcode",e.code))),x("div.btnrow",x("button.small",{onclick:o},"\u{1F517} Copy invite link"),l?x("button.small",{onclick:l},"Share\u2026"):null),x("h3",`At the table (${r.length}/${In})`),x("div.members",e.members.map(u=>x("div.member",{class:u.online?"":"off","data-id":u.id,style:{"--c":u.seat?u.seat.color:"#556"}},x("span.mt",u.seat?mn[u.seat.token]:"\u{1F440}"),x("span.mn",u.name,u.bot?x("span.botbadge"," AI"):null,u.id===P.you?x("span.you"," you"):null,u.id===e.host?x("span.crown"," \u265B"):null),x("span.muted",u.online?u.seat?"":" watching":" offline"),n&&u.id!==P.you?x("span.mx",u.online&&!u.bot?x("button.small",{title:"Make host",onclick:()=>Be({t:"host",id:u.id})},"\u265B"):null,x("button.small.danger",{title:"Remove",onclick:()=>{(u.bot||confirm(`Remove ${u.name} from the room?`))&&Be({t:"kick",id:u.id})}},"\u2715")):null,x("div.bubble")))),t&&t.seat?x("div.seat",x("div.pick",Hr.map(u=>x("button.tok",{class:t.seat.token===u?"on":"",disabled:s("token",u),title:u,onclick:()=>Be({t:"seat",token:u})},mn[u]))),x("div.pick",Vr.map(u=>x("button.sw",{class:t.seat.color===u?"on":"",disabled:s("color",u),style:{background:u},onclick:()=>Be({t:"seat",color:u})}))),x("button.small",{onclick:()=>Be({t:"stand"})},"Watch instead")):x("div.seat",x("button",{disabled:r.length>=In,onclick:()=>Be({t:"seat"})},"Take a seat")),n?x("div.btnrow",x("button.small",{disabled:r.length>=In,onclick:()=>Be({t:"addBot"})},"\u{1F916} Add an AI player"),x("span.muted",{style:{fontSize:"12px"}},"AI players buy, build, bid, and take or turn down your offers \u2013 clauses too.")):null,x("h3","Rules"),x("div.settings",x("label","Starting cash ",n?x("select",{onchange:u=>h({cash:Number(u.target.value)})},wo.map(u=>x("option",{value:u,selected:u===c.cash},be(u)))):x("b",be(c.cash))),x("label","Turn timer ",n?x("select",{onchange:u=>h({timer:Number(u.target.value)})},To.map(u=>x("option",{value:u,selected:u===c.timer},u?`${u} seconds`:"off"))):x("b",c.timer?`${c.timer} seconds`:"off"),x("div.muted.hint","When it runs out the dice roll themselves, an undecided space goes to auction and the turn ends. Building or trading restarts it; others can trade any time.")),x("label.check",x("input",{type:"checkbox",checked:c.auctions,disabled:!n,onchange:u=>h({auctions:u.target.checked})})," Auction spaces nobody buys"),x("label.check",x("input",{type:"checkbox",checked:c.jackpot,disabled:!n,onchange:u=>h({jackpot:u.target.checked})})," Taxes and fines go into the Plaza pot"),n&&P.mode==="server"?x("label.check",x("input",{type:"checkbox",checked:e.listed,onchange:u=>Be({t:"settings",listed:u.target.checked})})," Show this room in the room list"):null),x("div.btnrow.chat",Ki.slice(0,4).map((u,d)=>x("button.small.ghost",{onclick:()=>Be({t:"chat",n:d})},u))),x("div.btnrow.end",x("button",{onclick:i.leave},"Leave"),n?x("button.primary",{disabled:r.length<vi,onclick:()=>Be({t:"start"})},r.length<vi?`Waiting for players (${r.length}/${vi})`:"Start the game"):x("span.muted","The host starts the game."))))}var ch=Object.keys(Ge);function g0(i,e){return Object.entries(i.props).filter(([,t])=>t.owner===e).map(([t])=>+t).sort((t,n)=>ch.indexOf(ue[t].group)-ch.indexOf(ue[n].group)||t-n)}var v0=(i,e)=>ue.some(t=>t.group===e&&i.props[t.index]&&i.props[t.index].level>0),y0={loan:{label:"Loan",hint:"You hand over cash now; they pay it back each turn",make:()=>({payerMe:!1,actor:"them",event:"turn",where:"any",owner:"any",kind:"fixed",value:60,times:6,rounds:0}),cash:300},share:{label:"Rent share",hint:"They pay you a cut of the rent they collect",make:()=>({payerMe:!1,actor:"any",event:"rent",where:"any",owner:"them",kind:"percent",value:25,times:0,rounds:10})},free:{label:"Rent exemption",hint:"They refund the rent you pay them",make:()=>({payerMe:!1,actor:"me",event:"rent",where:"any",owner:"them",kind:"percent",value:100,times:0,rounds:0})},toll:{label:"Start toll",hint:"They pay you each time they pass Start",make:()=>({payerMe:!1,actor:"them",event:"passStart",where:"any",owner:"any",kind:"fixed",value:20,times:0,rounds:0})},custom:{label:"Custom",hint:"Any event, any amount",make:()=>({payerMe:!0,actor:"me",event:"land",where:"any",owner:"any",kind:"fixed",value:50,times:3,rounds:0})}};function Qd(i){let e=t=>t==="any"?"any":t==="me"===i.payerMe?"payer":"payee";return{payer:i.payerMe?"from":"to",event:i.event,actor:e(i.actor),where:i.where,owner:e(i.owner),kind:i.kind,value:i.value,times:i.times,rounds:i.rounds}}function _0(i,e){let t=i.payer==="from"===e,n=r=>r==="any"?"any":r==="payer"===t?"me":"them";return{payerMe:t,actor:n(i.actor),event:i.event,where:i.where,owner:n(i.owner),kind:i.kind,value:i.value,times:i.times,rounds:i.rounds}}function x0(i){let e=[["any","any space"]],t=ch.map(r=>[`g:${r}`,`any ${Ge[r].name} space`]),n=ue.filter(r=>i==="land"?!0:fn(r)).map(r=>[`t:${r.index}`,r.name]);return{opts:e,groups:t,tiles:n}}function Oi(i,e,t,n=""){let r=x("select",{class:n,onchange:a=>t(a.target.value)}),s=(a,[o,l])=>a.appendChild(x("option",{value:o,selected:o===i},l));for(let a of e)if(a.group){let o=x("optgroup",{label:a.group});a.items.forEach(l=>s(o,l)),r.appendChild(o)}else s(r,a);return r}function bs(i,e,t,n,r=""){return x("input",{type:"number",class:r,min:e,max:t,value:i,inputmode:"numeric",oninput:s=>n(Math.max(e,Math.min(t,Math.floor(Number(s.target.value)||0))))})}function io(i,e=null){let t=P.game;if(!t)return;let n=t.players.filter(v=>!v.out&&v.id!==P.you);if(!n.length)return;let r={other:i&&n.some(v=>v.id===i)?i:n[0].id,give:{cash:0,tiles:new Set,free:0},get:{cash:0,tiles:new Set,free:0},clauses:[],cancels:new Set,counter:null};e&&(r.other=e.from,r.counter=e.id,r.give={cash:e.get.cash,tiles:new Set(e.get.tiles),free:e.get.free},r.get={cash:e.give.cash,tiles:new Set(e.give.tiles),free:e.give.free},r.clauses=e.clauses.map(v=>_0(v,!1)),r.cancels=new Set(e.cancels));let s=x("div.trade"),a=qn(s,{wide:!0}),o=()=>{let v=P.game;if(!v||v.phase!=="play"){a.close();return}let m=kt(P.you),g=kt(r.other);if(!m||!g||g.out){a.close();return}En(s,x("h2","Make an offer to ",Oi(r.other,n.map(y=>[y.id,`${mn[y.token]||""} ${y.name}`]),y=>{r.other=y,r.get={cash:0,tiles:new Set,free:0},r.cancels.clear(),o()},"inline")),x("div.sides",l("You give",m,r.give,v),l(`${g.name} gives`,g,r.get,v)),c(v,m,g),d(v,m,g)),u()},l=(v,m,g,y)=>{let _=g0(y,m.id);return x("div.side",x("h3",v,x("span.muted",` \xB7 has ${be(m.cash)}`)),x("label.row","Cash now ",bs(g.cash,0,Math.max(0,m.cash),M=>{g.cash=M,p()},"cash")),_.length?x("div.chips",_.map(M=>{let R=ue[M],A=y.props[M],I=R.kind==="lot"&&v0(y,R.group);return x("button.chip",{class:(g.tiles.has(M)?"on":"")+(I?" blocked":""),title:I?"Sell the buildings on this set first":"",disabled:I,style:{"--c":Ge[R.group].color},onclick:()=>{g.tiles.has(M)?g.tiles.delete(M):g.tiles.add(M),o()}},R.name,A.mortgaged?x("em"," (mortgaged)"):null)})):x("p.muted","No spaces"),m.free?x("label.row","Leave-Lockup cards ",bs(g.free,0,m.free,M=>{g.free=M,p()})):null)},c=(v,m,g)=>{let y=v.contracts.filter(_=>[_.payer,_.payee].includes(m.id)&&[_.payer,_.payee].includes(g.id));return x("div.clauses",x("h3","Clauses ",x("span.muted","\u2014 payments the game makes by itself whenever something happens")),r.clauses.map((_,M)=>h(_,M,m,g)),r.clauses.length<Gr?x("div.presets",x("span.muted","Add: "),Object.entries(y0).map(([_,M])=>x("button.small",{title:M.hint,onclick:()=>{r.clauses.push(M.make()),M.cash&&!r.give.cash&&(r.give.cash=Math.min(M.cash,Math.max(0,m.cash))),o()}},`+ ${M.label}`))):null,y.length?x("div.cancels",x("h4","Tear up an existing clause as part of this deal"),y.map(_=>x("label.check",x("input",{type:"checkbox",checked:r.cancels.has(_.id),onchange:M=>{M.target.checked?r.cancels.add(_.id):r.cancels.delete(_.id),p()}}),` #${_.id}: ${Pn(_,Vi())}`))):null)},h=(v,m,g,y)=>{let _=fi[v.event],M=x0(v.event),R=I=>O=>{v[I]=O,I==="event"&&(v.where="any",fi[O].amount||(v.kind="fixed")),o()},A=[["me","I"],["them",y.name],["any","anyone"]];return x("div.clause",x("div.line",Oi(v.payerMe?"me":"them",[["me","I"],["them",y.name]],I=>{v.payerMe=I==="me",o()}),x("span"," pay "),bs(v.value,1,v.kind==="percent"?100:5e3,I=>{v.value=I,u()},"amt"),_.amount?Oi(v.kind,[["fixed","$"],["percent","% of it"]],R("kind")):x("span"," $"),x("span"," each time "),Oi(v.actor,A,R("actor")),Oi(v.event,Object.entries(fi).map(([I,O])=>[I,O.label]),R("event")),_.owner?[x("span"," to "),Oi(v.owner,[["them",y.name],["me","me"],["any","anyone"]],R("owner"))]:null,_.where?[x("span",v.event==="rent"?" on ":" "),Oi(v.where,[...M.opts,{group:"Sets",items:M.groups},{group:"Spaces",items:M.tiles}],R("where"))]:null,x("button.icon",{title:"Remove",onclick:()=>{r.clauses.splice(m,1),o()}},"\u2715")),x("div.line.limits",x("label","at most ",bs(v.times,0,99,I=>{v.times=I,u()},"tiny")," times"),x("label"," \xB7 for ",bs(v.rounds,0,99,I=>{v.rounds=I,u()},"tiny")," rounds"),x("span.muted","  (0 = no limit)")),x("div.say",{"data-k":m},""))},u=()=>{let v=Vi();v[P.you]="you",s.querySelectorAll(".say").forEach(m=>{let g=r.clauses[+m.dataset.k];g&&(m.textContent=`\u201C${Wi(Pn(Qd(g),v,P.you,r.other))}.\u201D`)}),p()},d=()=>x("div.foot",x("div.summary"),x("div.btns",x("button",{onclick:()=>a.close()},"Cancel"),x("button.primary",{onclick:f},r.counter?"Send counter-offer":"Send offer"))),p=()=>{let v=s.querySelector(".summary");if(!v)return;let m=r.give.cash+r.get.cash+r.give.tiles.size+r.get.tiles.size+r.give.free+r.get.free+r.clauses.length+r.cancels.size;v.textContent=m?"":"Add something to the offer."},f=()=>{Ye({type:"offer",to:r.other,give:{cash:r.give.cash,tiles:[...r.give.tiles],free:r.give.free},get:{cash:r.get.cash,tiles:[...r.get.tiles],free:r.get.free},clauses:r.clauses.map(Qd),cancels:[...r.cancels],counter:r.counter||void 0}),a.close()};o()}function M0(i){let e=i.from===P.you,t=Vi();t[P.you]="you";let n=a=>[a.cash?be(a.cash):null,...a.tiles.map(o=>ue[o].name),a.free?`${a.free} Leave-Lockup card${a.free>1?"s":""}`:null].filter(Boolean).join(", ")||"nothing",r=e?Rs(i.to):"You",s=e?"You":Rs(i.from);return[x("div.ol",x("b",`${s==="You"?"You give":`${s} gives`}: `),n(i.give)),x("div.ol",x("b",`${r==="You"?"You give":`${r} gives`}: `),n(i.get)),i.clauses.map(a=>x("div.ol.clause-text","\xA7 ",Wi(Pn(a,t,i.from,i.to)))),i.cancels.map(a=>x("div.ol.clause-text",`\u2702 Tear up clause #${a}`))]}function ep(){let i=P.game;return!i||i.phase!=="play"?[]:i.trades.map(e=>{let t=e.to===P.you,n=kt(t?e.from:e.to);return x("div.offer",{class:t?"in":"out"},x("div.oh",t?`Offer from ${n.name}`:`Your offer to ${n.name}`),M0(e),x("div.btns",t?[x("button.small",{onclick:()=>Ye({type:"reject",id:e.id})},"Decline"),x("button.small",{onclick:()=>io(null,e)},"Counter"),x("button.small.primary",{onclick:()=>Ye({type:"accept",id:e.id})},"Accept")]:[x("span.muted","Waiting\u2026 "),x("button.small",{onclick:()=>Ye({type:"withdraw",id:e.id})},"Withdraw")]))})}var np=Object.keys(Ge),ip=i=>i===5?"tower":i?`${i} floor${i>1?"s":""}`:"";function rp(){let i=P.game,e=i.players[i.turn];return x("div.players",i.players.map(t=>{let n=P.room.members.find(o=>o.id===t.id),r=n?n.online:!1,s=t.id===P.you,a=Object.values(i.props).filter(o=>o.owner===t.id).length;return x("div.pcard",{class:[t===e&&i.phase==="play"?"turn":"",t.out?"out":"",s?"mine":""].join(" "),style:{"--c":t.color},"data-id":t.id},x("div.ptoken",mn[t.token]||"\u25CF"),x("div.pmain",x("div.pname",t.name,n&&n.bot?x("span.botbadge"," AI"):null,s?x("span.you"," you"):null,P.room.host===t.id?x("span.crown",{title:"Host"}," \u265B"):null),x("div.pcash",{class:t.cash<0?"neg":""},t.out?"bankrupt":be(t.cash),t.out?null:x("span.muted",` \xB7 worth ${be(Yi(i,t.id))} \xB7 ${a} space${a===1?"":"s"}`)),t.out?null:b0(i,t.id),x("div.badges",!r&&!t.out?x("span.badge.off","offline"):null,n&&n.ai&&!t.out?x("span.badge.ai","AI playing for them"):null,t.inJail?x("span.badge.jail","in Lockup"):null,t.cash<0&&!t.out?x("span.badge.debt","in debt"):null,t.free?x("span.badge",`${t.free} lockup card`):null)),x("div.pside",!s&&!t.out&&An()&&!An().out&&i.phase==="play"?x("button.small",{onclick:()=>io(t.id)},"Trade"):null,Hi()&&!s&&!t.out&&i.phase==="play"&&!r&&n&&!n.ai?x("button.small",{title:"Let the AI play their turns until they come back",onclick:()=>Be({t:"aiPlay",id:t.id})},"AI plays"):null,Hi()&&!s&&!t.out&&i.phase==="play"&&!r?x("button.small.danger",{title:"Remove this player (their assets go back to the bank)",onclick:()=>{confirm(`Remove ${t.name} from the game? Everything they own goes back to the bank.`)&&Be({t:"kick",id:t.id})}},"Remove"):null),x("div.bubble"))}))}function b0(i,e){return x("div.strip",np.map(t=>x("span.sset",ue.filter(n=>n.group===t).map(n=>{let r=i.props[n.index],s=r&&r.owner===e;return x("i.sq",{class:(s?"own":"")+(s&&r.mortgaged?" mort":"")+(s&&r.level===5?" tower":""),style:{"--c":Ge[t].color},title:`${n.name}${s?r.mortgaged?" (mortgaged)":r.level?` \u2013 ${ip(r.level)}`:"":""}`,"data-l":s&&r.level&&r.level<5?"\u2022".repeat(r.level):null,onclick:a=>{a.stopPropagation(),Nr(n.index)}})}))))}function sp(){let i=P.game,e=An(),t=i.players[i.turn],n=i.t,r=e&&t.id===e.id&&!e.out,s=x("div.actions"),a=x("div.dice-readout",i.dice?`\u{1F3B2} ${i.dice[0]} + ${i.dice[1]}`:""),o=Ls(i),l=(i.settings.timer||0)*1e3,c=u=>n.deadline&&o===u?fo(n.deadline,l):null,h=n.deadline&&o?fo(n.deadline,l,"bar"):null;if(i.auction)xt(s,x("div.status","\u{1F528} Auction in progress"),x("div.status.sub","Bid in the panel in the middle of the screen."));else if(!e||e.out)xt(s,x("div.status",e?"You are out of the game \u2013 watching.":"You are watching this game."),x("div.status.sub",`${t.name}'s turn`),h);else if(r){let u=x("div.btnrow");if(e.cash<0)xt(s,x("div.status.warn",`You are ${be(-e.cash)} short. Mortgage, sell floors or trade \u2013 or give up.`)),xt(u,x("button",{onclick:tp},"My assets"),x("button.danger",{onclick:()=>{confirm("Declare bankruptcy? You leave the game.")&&Ye({type:"bankrupt"})}},"Declare bankruptcy"));else if(n.pending&&n.pending.kind==="buy"){let d=ue[n.pending.tile];xt(s,x("div.status",`${d.name} is for sale.`)),xt(u,x("button.primary",{onclick:()=>Ye({type:"buy"}),disabled:e.cash<d.price},`Buy for ${be(d.price)}`),x("button",{onclick:()=>Ye({type:"decline"})},i.settings.auctions?"Auction it":"Pass",c("decline")),x("button.small",{onclick:()=>Nr(d.index)},"Details"))}else e.inJail&&!n.rolled?(xt(s,x("div.status",`You are in Lockup (try ${e.jailTurns+1} of 3).`)),xt(u,x("button.primary",{onclick:()=>Ye({type:"roll"})},"Roll for doubles",c("roll")),x("button",{onclick:()=>Ye({type:"payFine"}),disabled:e.cash<50},`Pay ${be(50)}`),e.free?x("button",{onclick:()=>Ye({type:"useCard"})},"Use card"):null)):!n.rolled||n.again?(xt(s,x("div.status",n.again?"Doubles \u2013 roll again!":"Your turn \u2013 click the dice or the button.")),xt(u,x("button.primary.big",{onclick:()=>Ye({type:"roll"})},n.again?"Roll again":"Roll the dice",c("roll")))):(xt(s,x("div.status","Build, trade \u2013 or end your turn.")),xt(u,x("button.primary.big",{onclick:()=>Ye({type:"end"})},"End turn",c("end"))));xt(s,u,h)}else xt(s,x("div.status",`${t.name}'s turn`,x("span.dots")),h),e.cash<0&&xt(s,x("div.status.warn",`You are ${be(-e.cash)} short \u2013 raise money before your turn.`));return xt(s,x("div.btnrow.tools",a,e&&!e.out?x("button.small",{onclick:()=>io(null)},"Trade"):null,e&&!e.out?x("button.small",{onclick:tp},"My assets"):null,x("button.small",{onclick:T0},`Clauses${i.contracts.length?` (${i.contracts.length})`:""}`),x("button.small",{onclick:S0},"\u{1F4AC}"))),s}function hh(i,e={}){let t=ue[i],n=Ge[t.group],r=P.game,s=r&&r.props[i],a=s?s.level:0,o=t.kind==="lot"?[["Rent",t.rents[0]],["Full set",t.rents[0]*2],["1 floor",t.rents[1]],["4 floors",t.rents[4]],["Tower",t.rents[5]]]:t.kind==="transit"?zr.slice(1).map((l,c)=>[`${c+1} stop${c?"s":""}`,l]):[["1 utility",`${Yn[1]}\xD7 dice`],["Both",`${Yn[2]}\xD7 dice`]];return x("div.deed",{class:[e.cls||"",s&&s.mortgaged?"mortgaged":"",e.ghost?"ghost":""].join(" "),style:{"--c":n.color},onclick:e.onclick},x("div.deed-band",x("span.deed-set",n.name),a?x("span.deed-lvl",a===5?"\u{1F3E2}":"\u{1F3E0}".repeat(a)):null),x("div.deed-name",t.name),e.compact?x("div.deed-price",e.note||be(t.price)):[x("div.deed-price",`List price ${be(t.price)}`),x("table.deed-rents",o.map(([l,c])=>x("tr",x("td",l),x("td",typeof c=="number"?be(c):c))))],s&&s.mortgaged?x("div.deed-stamp","MORTGAGED"):null,e.extra||null)}var ro={tile:-1,value:0};function ap(){let i=P.game,e=i.auction;if(!e||i.phase!=="play")return null;let t=An(),n=ue[e.tile],r=e.bidder?kt(e.bidder):null,s=t&&!t.out,a=t&&e.passed.includes(t.id),o=Math.max(1,e.endsAt-(e.startedAt||e.endsAt-15e3)),l=ro.tile===e.tile&&ro.value>e.high?ro.value:e.high+10,c=x("input.bid",{type:"number",min:e.high+1,value:l,inputmode:"numeric",oninput:p=>{ro={tile:e.tile,value:Number(p.target.value)}}}),h=x("div.ring",{"data-deadline":e.endsAt,"data-total":Math.min(o,15e3)});h.innerHTML='<svg viewBox="0 0 100 100"><circle class="ring-bg" cx="50" cy="50" r="45"/><circle class="ring-fg" cx="50" cy="50" r="45"/></svg><div class="ring-t"></div>';let u=i.players.filter(p=>!p.out),d=[...e.bids||[]].reverse();return x("div.auction-stage",x("div.as-head",x("span.gavel","\u{1F528}"),"AUCTION"),x("div.as-body",hh(e.tile,{cls:"big"}),x("div.as-mid",x("div.as-bidlabel",r?"Highest bid":"Opening bid"),x("div.as-bid",{class:r?"has":""},r?be(e.high):"\u2014"),r?x("div.as-bidder",{style:{"--c":r.color}},x("span.tk",mn[r.token]||"\u25CF"),r.id===P.you?"You":r.name):x("div.as-bidder.none",`List price ${be(n.price)}`),h,x("div.as-players",u.map(p=>x("span.as-pl",{class:p.id===e.bidder?"lead":e.passed.includes(p.id)?"out":"",style:{"--c":p.color},title:p.id===e.bidder?"Highest bidder":e.passed.includes(p.id)?"Passed":"Still in"},mn[p.token]||"\u25CF"," ",p.id===P.you?"You":p.name)))),x("div.as-history",x("div.as-ht","Bids"),d.length?d.map((p,f)=>{let v=kt(p.p);return x("div.as-hrow",{class:f===0?"new":"",style:{"--c":v?v.color:"#888"}},x("span",v?v.id===P.you?"You":v.name:"?"),x("b",be(p.amount)))}):x("div.muted","No bids yet"))),s?x("div.as-controls",[10,50,100].map(p=>x("button.bidbtn",{disabled:t.cash<e.high+p||e.bidder===t.id,onclick:()=>Ye({type:"bid",amount:e.high+p})},`+${p}`,x("small",be(e.high+p)))),x("span.as-custom",c,x("button.primary",{disabled:e.bidder===t.id,onclick:()=>Ye({type:"bid",amount:Number(c.value)})},"Bid")),e.bidder!==t.id?x("button.pass",{disabled:a,onclick:()=>Ye({type:"pass"})},a?"Passed":"Pass"):x("span.as-lead","You lead!"),x("div.as-cash",`You have ${be(Math.max(0,t.cash))}`)):null)}function S0(i){let e=i.currentTarget.getBoundingClientRect(),t=x("div.chatmenu",{style:{left:`${Math.max(8,e.left-120)}px`,bottom:`${innerHeight-e.top+6}px`}},Ki.map((n,r)=>x("button.small",{onclick:()=>{Be({t:"chat",n:r}),t.remove()}},n)));document.body.appendChild(t),setTimeout(()=>document.addEventListener("pointerdown",n=>{t.contains(n.target)||t.remove()},{once:!0}),0)}function op(i,e){let t=document.querySelector(`.pcard[data-id="${i}"] .bubble`)||document.querySelector(`.member[data-id="${i}"] .bubble`),n=Ki[e];n&&t&&(t.textContent=n,t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),3500))}var ci=null;function Nr(i){if(i<0)return;ci&&ci.m.close();let e=x("div.tilecard"),t=qn(e,{onclose:()=>{ci&&ci.m===t&&(ci=null),P.view&&P.view.select(-1)}});ci={i,m:t,body:e},P.view&&P.view.select(i),lp()}function lp(){if(!ci)return;let{i,body:e}=ci,t=ue[i],n=P.game,r=n&&n.props[i],s=r?kt(r.owner):null,a=s&&s.id===P.you,o=t.group&&Ge[t.group],l=[];if(t.kind==="lot"){let v=["Rent","1 floor","2 floors","3 floors","4 floors","Tower"];t.rents.forEach((m,g)=>l.push([v[g]+(g===0?" (\xD72 with the full set)":""),be(m),r&&r.level===g&&!r.mortgaged])),l.push(["Each floor / the tower costs",be(o.build)])}else t.kind==="transit"?zr.slice(1).forEach((v,m)=>l.push([`Owner has ${m+1} stop${m?"s":""}`,be(v)])):t.kind==="utility"&&l.push(["Owner has 1 utility",`${Yn[1]}\xD7 the dice`],["Owner has both",`${Yn[2]}\xD7 the dice`]);fn(t)&&l.push(["Mortgage value",be(Cn(t))]);let c={start:"Collect $200 each time you pass or land here.",jail:"Sent here? Roll doubles, pay $50 or use a card to get out. Otherwise just visiting.",park:n&&n.settings.jackpot?`The Plaza pot holds ${be(n.pot)} \u2013 land here to take it.`:"Nothing happens here. Enjoy the view.",gotojail:"Go straight to Lockup. No salary.",card:`Draw a ${t.deck==="fortune"?"Fortune":"Gazette"} card.`,tax:`Pay ${be(t.amount||0)}${n&&n.settings.jackpot?" into the Plaza pot":""}.`}[t.kind],h=n?n.players.filter(v=>!v.out&&v.pos===i):[],u=n?n.contracts.filter(v=>v.where===`t:${i}`||t.group&&v.where===`g:${t.group}`):[],d=n&&n.players[n.turn],p=n&&r&&!r.mortgaged?qi(n,i,7):0,f=[];if(a&&n.phase==="play"){let m=ue.filter(g=>g.group===t.group).map(g=>g.index).every(g=>n.props[g]&&n.props[g].owner===P.you);t.kind==="lot"&&m&&!r.mortgaged&&r.level<5&&f.push(x("button.primary",{onclick:()=>Ye({type:"build",tile:i})},`Build ${r.level===4?"tower":"floor"} (${be(o.build)})`)),r.level&&f.push(x("button",{onclick:()=>Ye({type:"sell",tile:i})},`Sell a floor (+${be(o.build/2)})`)),!r.mortgaged&&!r.level&&f.push(x("button",{onclick:()=>Ye({type:"mortgage",tile:i})},`Mortgage (+${be(Cn(t))})`)),r.mortgaged&&f.push(x("button",{onclick:()=>Ye({type:"unmortgage",tile:i})},`Pay off mortgage (${be(mi(t))})`))}En(e,x("div.th",{style:{"--c":o?o.color:"#556"}},x("div.tgroup",o?o.name:""),x("h2",t.name),t.price?x("div.tprice",`Price ${be(t.price)}`):null),c?x("p",c):null,l.length?x("table.rents",l.map(([v,m,g])=>x("tr",{class:g?"on":""},x("td",v),x("td",m)))):null,fn(t)?x("p.owner",s?[x("span.dot",{style:{background:s.color}}),` Owned by ${s.id===P.you?"you":s.name}`,r.level?` \xB7 ${ip(r.level)}`:"",r.mortgaged?" \xB7 mortgaged":"",p&&t.kind!=="utility"?` \xB7 rent now ${be(p)}`:""]:"Owned by the bank \u2013 for sale."):null,h.length?x("p.muted",`Here now: ${h.map(v=>v.name).join(", ")}`):null,u.length?x("div.tclauses",x("h4","Clauses about this space"),u.map(v=>x("div.ol.clause-text",`#${v.id} `,Wi(Pn(v,cp()))))):null,f.length?x("div.btnrow",f):null,(a&&d&&n.phase==="play",null))}var cp=()=>{let i=Vi();return i[P.you]="you",i},ki=null;function tp(){ki&&ki.m.close();let i=x("div.assets");ki={m:qn(i,{wide:!0,onclose:()=>{ki=null,P.view&&P.view.showOwned(null)}}),body:i},hp()}function hp(){if(!ki)return;let i=P.game,e=An();if(!i||!e){ki.m.close();return}let t=Object.keys(i.props).map(Number).filter(o=>i.props[o].owner===e.id);P.view&&P.view.showOwned(t,e.color);let n=t.reduce((o,l)=>o+i.props[l].level*Ge[ue[l].group].build/2,0),r=np.filter(o=>ue.some(l=>l.group===o&&i.props[l.index]&&i.props[l.index].owner===e.id)),s=r.filter(o=>ue.filter(l=>l.group===o).every(l=>i.props[l.index]&&i.props[l.index].owner===e.id)),a=(o,l,c="")=>x("div.stat",{class:c},x("div.sv",l),x("div.sl",o));En(ki.body,x("h2","My assets"),x("div.stats",a("Cash",be(e.cash),e.cash<0?"neg":""),a("Net worth",be(Yi(i,e.id))),a("Spaces",String(t.length)),a("Full sets",String(s.length)),a("Buildings",n?`${be(n)}`:"\u2014"),e.free?a("Lockup cards",String(e.free)):null),r.length?x("div.sets",r.map(o=>{let l=ue.filter(u=>u.group===o),c=l.filter(u=>i.props[u.index]&&i.props[u.index].owner===e.id).length,h=c===l.length;return x("div.setcol",{style:{"--c":Ge[o].color}},x("div.set-head",Ge[o].name,x("span.set-count",{class:h?"full":""},h?"\u2605 full set":`${c}/${l.length}`)),l.map(u=>{let d=u.index,p=i.props[d];if(!p||p.owner!==e.id){let g=p?kt(p.owner):null;return hh(d,{compact:!0,ghost:!0,note:g?`owned by ${g.name}`:"still for sale",onclick:()=>Nr(d)})}let f=Ge[u.group],v=[u.kind==="lot"&&h&&!p.mortgaged&&p.level<5?x("button.small.primary",{title:`Build for ${be(f.build)}`,onclick:g=>{g.stopPropagation(),Ye({type:"build",tile:d})}},`+${p.level===4?"\u{1F3E2}":"\u{1F3E0}"} ${be(f.build)}`):null,p.level?x("button.small",{title:`Sell for ${be(f.build/2)}`,onclick:g=>{g.stopPropagation(),Ye({type:"sell",tile:d})}},`\u2212\u{1F3E0} +${be(f.build/2)}`):null,!p.mortgaged&&!l.some(g=>i.props[g.index]&&i.props[g.index].level>0)?x("button.small",{onclick:g=>{g.stopPropagation(),Ye({type:"mortgage",tile:d})}},`Mortgage +${be(Cn(u))}`):null,p.mortgaged?x("button.small",{onclick:g=>{g.stopPropagation(),Ye({type:"unmortgage",tile:d})}},`Redeem ${be(mi(u))}`):null],m=p.mortgaged?0:qi(i,d,7);return hh(d,{compact:!0,note:p.mortgaged?"no rent":u.kind==="utility"?`rent ${Yn[w0(i,e.id,u.group)]}\xD7 dice`:`rent now ${be(m)}`,onclick:()=>Nr(d),extra:x("div.deed-btns",v)})}))})):x("p.muted","You own no spaces yet. Land on one and buy it, win an auction, or trade for one."),x("div.btnrow",x("button.small.danger",{onclick:()=>{confirm("Leave the game for good? Everything you own goes back to the bank.")&&Ye({type:"resign"})}},"Resign from the game")))}var w0=(i,e,t)=>ue.filter(n=>n.group===t&&i.props[n.index]&&i.props[n.index].owner===e).length,Fi=null;function T0(){Fi&&Fi.m.close();let i=x("div.ledger");Fi={m:qn(i,{wide:!0,onclose:()=>{Fi=null}}),body:i},up()}function up(){if(!Fi)return;let i=P.game;if(!i){Fi.m.close();return}let e=cp();En(Fi.body,x("h2","Clauses in force"),x("p.muted","Payments players agreed on in trades. The game pays them automatically whenever their event happens. To end one early, tear it up as part of a new trade between the same two players."),i.contracts.length?i.contracts.map(t=>x("div.contract",x("div.cid",`#${t.id}`),x("div",x("div",Wi(Pn(t,e))),x("div.muted",`since round ${t.since} \xB7 paid ${t.fired}\xD7 \xB7 ${be(t.paid)} so far${t.timesLeft?` \xB7 ${t.timesLeft} left`:""}${t.untilRound?` \xB7 ends after round ${t.untilRound}`:""}`)))):x("p","No clauses yet. Add some to a trade: loans, rent shares, exemptions, tolls\u2026"))}function dp(){let i=P.game,e=x("div.log",i.log.slice(-60).map(t=>x("div.ll",{class:t.text.startsWith("\u2014")?"round":""},t.text)));return requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight}),e}function pp(){let i=ep();return i.length?x("div.offers",i):x("div.offers")}function mp(){let i=P.game,e=kt(i.winner),t=[...i.players].sort((n,r)=>n.out-r.out||Yi(i,r.id)-Yi(i,n.id));return x("div.screen.over",x("div.card",x("h1",e?`${mn[e.token]||""} ${e.id===P.you?"You win!":`${e.name} wins!`}`:"Game over"),x("ol.standings",t.map(n=>x("li",n.name,x("span.muted",n.out?" \u2013 bankrupt":` \u2013 worth ${be(Yi(i,n.id))}`)))),x("div.btnrow",Hi()?x("button.primary",{onclick:()=>Be({t:"lobby"})},"Back to the table"):x("span.muted","The host can start a new game."))))}var fp=()=>{lp(),hp(),up()};var Ss=i=>document.getElementById(i),gh=new URLSearchParams(location.search);P.who=Dh();try{P.name=localStorage.getItem("parcel.name")||""}catch{}P.pendingCode=Do(gh.get("room"));P.view=new eo(Ss("stage"),{onTile:i=>{i>=0&&Nr(i)},onDice:()=>{gp()&&Ye({type:"roll"})}});P.view.idleSpin=!0;P.view.onStep=()=>Rt.step();function gp(){let i=P.game,e=An();if(!i||i.phase!=="play"||!e||e.out||i.auction)return!1;let t=i.t;return i.players[i.turn].id===e.id&&!t.pending&&e.cash>=0&&(!t.rolled||t.again)}function Or(i){P.link=i,i.onmessage=C0,i.onclose=()=>A0(i),Be({t:"hello",who:P.who,name:P.name})}var Dr=null;async function E0(i,e){P.busy="create",P.homeError="",yt();try{if(P.mode==="server")Be({t:"hello",who:P.who,name:P.name}),Be({t:"create",name:i,listed:e});else{let t=new qr;t.selfWho=P.who;let n=await t.open();P.host=t,Or(t.localLink()),Be({t:"create",code:n,name:i||`${P.name}'s table`})}}catch(t){P.homeError=t.message||"Could not open a room",P.busy="",yt()}}async function ph(i){if(i=Do(i),i.length===4){P.busy="join",P.homeError="",Dr=i,yt();try{P.mode==="server"?(Be({t:"hello",who:P.who,name:P.name}),Be({t:"join",code:i})):(P.link&&P.link.close(),Or(await zo(i)),Be({t:"join",code:i}))}catch(e){Dr=null,P.homeError=e.message||"Could not join",P.busy="",yt()}}}async function vp(i){P.busy="create",P.status=`Reopening room ${i.code}\u2026`,yt();try{if(i.who){P.who=i.who;try{sessionStorage.setItem("parcel.who",i.who)}catch{}}let e=new qr;e.selfWho=P.who,await e.open(i),P.host=e,Or(e.localLink()),Be({t:"join",code:i.code}),P.status=""}catch(e){P.status="",P.busy="",P.homeError=`Could not reopen room ${i.code}: ${e.message||e.type||"error"}`,yt()}}function yp(){P.host&&!confirm("You are hosting this room \u2013 leaving closes it for everyone. Leave?")||(Be({t:"leave"}),mh())}function mh(i=""){let e=P.host;if(P.inRoom=!1,P.room=null,P.game=null,P.code="",P.busy="",Dr=null,ws.length=0,P.homeError=i,history.replaceState(null,"",location.pathname+(gh.has("p2p")?"?p2p=1":"")),e&&(P.host=null,e.close()),P.mode==="p2p"&&P.link){let t=P.link;P.link=null,t.onclose=null,t.close()}P.view.setState(null,[]),P.view.idleSpin=!0,document.querySelectorAll(".modal-wrap").forEach(t=>t.remove()),P.mode==="server"&&Be({t:"list"}),yt()}var uh=!1;function A0(i){i===P.link&&(P.link=null,(P.mode==="server"||P.inRoom)&&R0())}async function R0(){if(!uh){uh=!0;for(let i=0;;i++){let e=P.code;P.status=P.mode==="p2p"?"The host is away \u2013 reconnecting\u2026":"Connection lost \u2013 reconnecting\u2026",yt(),await new Promise(t=>setTimeout(t,Math.min(8e3,1e3+i*1e3)));try{if(P.mode==="server"){let t=await vo(4e3);if(!t)continue;Or(t),e&&P.inRoom?Be({t:"join",code:e}):Be({t:"list"})}else{if(!P.inRoom||!e)break;Or(await zo(e)),Be({t:"join",code:e})}break}catch{}if(!P.inRoom&&P.mode==="p2p")break}P.status="",uh=!1,yt()}}setInterval(()=>{P.link&&!P.link.closed&&Be({t:"ping"})},5e3);var _p=Date.now();function C0(i){switch(_p=Date.now(),i.t){case"welcome":return;case"pong":return;case"rooms":P.rooms=i.rooms,P.inRoom||yt();return;case"sync":{P.inRoom||(P.inRoom=!0,P.busy="",Dr=null,P.homeError="",P.code=i.room.code,history.replaceState(null,"",Gi(i.room.code).replace(location.origin,""))),i.now&&(P.clockSkew=i.now-Date.now()),P0(i);return}case"chat":op(i.id,i.n),Rt.offer();return;case"left":return;case"error":{if(i.code==="replaced"){mh(i.text);return}if(i.code==="kicked"||i.code==="closed"){mh(i.text);return}if(Dr||!P.inRoom){if(Dr=null,P.busy="",P.homeError=i.text,P.mode==="p2p"&&P.link&&!P.host){let e=P.link;P.link=null,e.onclose=null,e.close()}yt();return}Rt.error(),Mt(i.text,"error")}}}setInterval(()=>{if(P.mode==="p2p"&&P.inRoom&&!P.host&&P.link&&Date.now()-_p>16e3){let i=P.link;i.close(),i.ended()}},2e3);var ws=[],fh=!1;function P0(i){ws.push(i),fh||I0()}async function I0(){for(fh=!0;ws.length;){let i=ws.shift();if(P.game&&i.game&&!document.hidden&&ws.length<3)try{await U0(i.events,i.game)}catch(t){console.warn(t)}else i.events.length&&xp(i.events,i.game);D0(i)}fh=!1}var L0=(i,e)=>{let t=i.players.find(n=>n.id===e);return t?t.pos:0};async function U0(i,e){let t=P.view;for(let n of i)switch(n.type){case"roll":Rt.dice(),await t.rollDice(n.dice,L0(P.game,n.p));break;case"move":await t.moveToken(n.p,n.from,n.to,n.steps,n.jump);break;case"pay":{let r=s=>t.tokens.get(s)?t.tokens.get(s).pos:null;n.from&&n.from!=="pot"&&r(n.from)!==null&&t.float(r(n.from),`\u2212${be(n.amount)}`,"#ff8a7a"),n.to&&n.to!=="pot"&&r(n.to)!==null&&setTimeout(()=>t.float(r(n.to),`+${be(n.amount)}`,"#8ef0a6"),250),n.to===P.you?Rt.coin():n.from===P.you&&Rt.pay(),await so(120);break}case"card":Rt.card(),N0(n.deck,n.text,n.p),await so(1300);break;case"buy":{Rt.buy();let r=e.players.find(s=>s.id===n.p);r&&t.setOwner(n.tile,r.color),n.auction&&(t.clearAuction(),t.stamp(n.tile,"SOLD!",r?r.color:"#ffcf4a"),Mt(`${r&&r.id===P.you?"You win":`${r?r.name:"Someone"} wins`} the auction: ${ue[n.tile].name} for ${be(n.amount)}`),await so(1200));break}case"unsold":t.clearAuction(),t.stamp(n.tile,"NO SALE","#9aa7b1"),await so(900);break;case"bid":{Rt.coin();let r=e.players.find(s=>s.id===n.p);P.game&&P.game.auction&&t.float(P.game.auction.tile,`${r?r.name:""} ${be(n.amount)}`,r?r.color:"#fff");break}case"build":case"sell":Rt.build(),t.setLevel(n.tile,n.level);break;default:xp([n],e)}}function xp(i,e){for(let t of i)t.type==="turn"&&t.p===P.you&&e&&e.phase==="play"?(Rt.turn(),Mt("Your turn")):t.type==="jail"?Rt.jail():t.type==="offer"&&t.to===P.you?(Rt.offer(),Mt(`${kt(t.from)?.name||"Someone"} sent you an offer`)):t.type==="trade"&&(t.from===P.you||t.to===P.you)?(Rt.buy(),Mt("Deal done!")):t.type==="reject"&&t.from===P.you?Mt("Your offer was declined"):t.type==="contract"&&(t.from===P.you||t.to===P.you)?Mt(`Clause #${t.id}: ${t.from===P.you?"you pay":"you receive"} ${be(t.amount)}`):t.type==="auction"?Mt(`${ue[t.tile].name} goes to auction`):t.type==="win"?Rt.win():t.type==="timeout"&&t.p===P.you?Mt(t.what==="roll"?"Time's up \u2013 rolling for you":t.what==="decline"?"Time's up \u2013 it goes to auction":"Time's up \u2013 turn over"):t.type==="aiTakeover"?Mt(`The AI plays for ${(e&&e.players.find(n=>n.id===t.p)||{}).name||"a player"} until they come back`):t.type==="start"?(Rt.turn(),Mt("The game begins!")):t.type==="bankrupt"&&Mt(`${(e&&e.players.find(n=>n.id===t.p)||{}).name||"A player"} is out of the game`)}var so=i=>new Promise(e=>setTimeout(e,i));function N0(i,e,t){let n=Ss("cardpop"),r=P.game&&P.game.players.find(s=>s.id===t);En(n,x("div.gcard",{class:i},x("div.gdeck",i==="fortune"?"FORTUNE":"GAZETTE"),x("div.gtext",e),r?x("div.gwho",r.name):null)),n.classList.add("show"),clearTimeout(n._t),n._t=setTimeout(()=>n.classList.remove("show"),3200)}function D0(i){let e=P.game?P.game.phase:null;P.room=i.room,P.game=i.game,P.you=i.you,P.view.setState(i.game,i.room.members),P.view.idleSpin=!i.game,P.view.diceReady=gp();let t=i.game&&i.game.phase==="play"?i.game.auction:null;if(t){let n=t.bidder?i.game.players.find(r=>r.id===t.bidder):null;P.view.setAuction(t.tile,["AUCTION",n?be(t.high):"no bids",n?n.name:`list ${be(ue[t.tile].price)}`],n?n.color:null)}else P.view.clearAuction();i.game&&!e&&P.view.resetCamera(),yt()}function O0(){let i=P.room;return x("div.topbar",x("div.brand","PARCEL"),i?x("button.chipbtn",{title:"Copy the invite link",onclick:async()=>{try{await navigator.clipboard.writeText(Gi()),Mt("Invite link copied")}catch{prompt("Invite link",Gi())}}},`${i.name} \xB7 ${i.code}`):null,P.status?x("div.netstatus",P.status):null,x("div.grow"),x("button.icon",{title:no()?"Sound off":"Sound on",onclick:()=>{Yd(!no()),yt()}},no()?"\u{1F507}":"\u{1F50A}"),x("button.chipbtn",{title:"Switch camera (F2) \u2013 drag to turn, right-drag or shift-drag to pan, arrow keys pan, wheel zooms",onclick:()=>{Mt(`Camera: ${P.view.nextView()}`),yt()}},`\u{1F3A5} ${B0()}`),x("button.icon",{title:"Reset the camera",onclick:()=>P.view.resetCamera()},"\u27F2"),x("button.icon",{title:"How to play",onclick:k0},"?"),i?x("button.small",{onclick:yp},"Leave"):null)}function yt(){Ss("top").replaceChildren(O0());let i=Ss("screen"),e=Ss("hud"),t={create:E0,join:ph,leave:yp,resume:vp,saved:()=>P.mode==="p2p"?Fo():null,forget:()=>{Bo(),yt()}};if(!P.mode){i.replaceChildren(x("div.screen",x("div.card",x("h1.logo","PARCEL"),x("p.muted","Connecting\u2026")))),e.replaceChildren();return}if(!P.inRoom){i.replaceChildren(Zd(t)),e.replaceChildren();return}if(!P.game){i.replaceChildren(Kd(t)),e.replaceChildren();return}i.replaceChildren(P.game.phase==="over"?mp():""),En(e,ap(),x("div.left",rp()),x("div.right",pp(),sp(),x("details.logbox",{open:!matchMedia("(max-width: 720px)").matches},x("summary","Game log"),dp()))),fp()}Nh(yt);function k0(){let i=x("div.help",x("h2","How to play PARCEL"),x("p","Take turns rolling two dice and moving round the harbour city. Buy the spaces you land on. Own a whole colour set to double its rent and build floors \u2013 then a tower \u2013 on it. Land on someone else\u2019s space and you pay them rent. Run out of money and you are out; the last player standing wins."),x("h3","Trading"),x("p","Click Trade at any time \u2013 even when it is not your turn. An offer can swap cash, spaces and Leave-Lockup cards. The other player can accept, decline or counter."),x("h3","Clauses: deals that keep paying"),x("p","An offer can also carry clauses: payments the game makes by itself whenever an event happens. You pick who pays, how much (a fixed amount, or a percentage of the rent, tax, price or salary involved), which event triggers it (landing on a space, passing Start, paying rent, starting a turn, rolling doubles\u2026), whose action it is, and how long it lasts (a number of times and/or rounds)."),x("ul",x("li",x("b","Loan: "),"give $300 now; they pay you $60 at the start of each of their turns, 6 times."),x("li",x("b","Rent exemption: "),"they refund 100% of the rent you pay them on Kite Hill."),x("li",x("b","Revenue share: "),"they pay you 25% of every rent they collect on Docklands for 10 rounds."),x("li",x("b","Toll: "),"they pay you $20 whenever they pass Start.")),x("p","All clauses in force are listed under Clauses. A payer who can\u2019t pay goes into debt just as with rent. To end a clause early, tear it up as part of another trade between the same two players."),x("h3","Playing online"),x("p","Create a room and send the invite link (or the 4-letter code). If you lose your connection or reload, you get your seat back. A room hosted in a browser lives in that tab: the host can reload it and the room comes back, but should not close it."));qn(i,{wide:!0})}async function F0(){yt();let i=gh.has("p2p")?null:await vo();if(i)P.mode="server",Or(i),Be({t:"list"}),P.pendingCode&&P.name&&ph(P.pendingCode);else{P.mode="p2p";let e=Fo();if(e&&P.pendingCode===e.code){vp(e);return}P.pendingCode&&P.name&&ph(P.pendingCode)}yt()}var B0=()=>({iso:"Isometric",top:"Top",tv:"TV"})[P.view.viewName]||"",dh={ArrowLeft:[1,0],ArrowRight:[-1,0],ArrowUp:[0,1],ArrowDown:[0,-1],a:[1,0],d:[-1,0],w:[0,1],s:[0,-1]};addEventListener("keydown",i=>{if(i.target.closest("input, select, textarea"))return;if(i.key==="F2"){i.preventDefault(),Mt(`Camera: ${P.view.nextView()}`),yt();return}if(dh[i.key]&&!i.metaKey&&!i.ctrlKey){i.preventDefault(),P.view.pan(dh[i.key][0]*40,dh[i.key][1]*40);return}if(!P.game||P.game.phase!=="play")return;let e=An(),t=P.game;if(!(!e||t.players[t.turn].id!==e.id)&&(i.key===" "||i.key==="Enter")){i.preventDefault();let n=t.t;if(t.auction||n.pending||e.cash<0)return;Be({t:"act",a:{type:!n.rolled||n.again?"roll":"end"}})}});F0();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
