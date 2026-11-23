var If=Object.defineProperty;var Gi=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Lf=(i,e)=>{for(var t in e)If(i,t,{get:e[t],enumerable:!0})};var Lt,Ss,ed,Er,td,nd=Gi(()=>{Lt=(i,e,t)=>({kind:"lot",name:i,group:e,price:t}),Ss=i=>({kind:"transit",name:i,group:"transit",price:200}),ed=i=>({kind:"utility",name:i,group:"utility",price:150}),Er=i=>({kind:"card",deck:i}),td={id:"harbour",name:{tr:"Liman \u015Eehri",en:"Harbour City"},shape:"square",currency:"dollar",salary:200,jailFine:50,transitRent:[0,25,50,100,200],utilityMult:[0,4,10],shopMult:[0],ride:null,inflation:{start:10,every:5,step:.1},tokens:["boat","kite","lantern","anchor","tram","gem"],botNames:["Marlo","Tess","Ines","Ravi","Juno","Otto","Kemal","Lena","Sami","Noor"],freeCard:{tr:"Kefalet kart\u0131",en:"Leave-Lockup card"},groups:{clay:{name:"Old Town",color:"#9a6b4f",build:50},sky:{name:"Windward",color:"#6fc3e8",build:50},rose:{name:"Bazaar",color:"#d9649b",build:100},amber:{name:"Docklands",color:"#ef9a2e",build:100},scarlet:{name:{tr:"Sanat Mahallesi",en:"Arts Quarter"},color:"#e04b3a",build:150},lemon:{name:"Vine Hills",color:"#f0d23f",build:150},jade:{name:"Greenbelt",color:"#36a86a",build:200},indigo:{name:"Waterfront",color:"#4757c9",build:200},transit:{name:{tr:"Ula\u015F\u0131m",en:"Transit"},color:"#3b3f46",build:0},utility:{name:{tr:"Hizmetler",en:"Utilities"},color:"#8a95a5",build:0}},tiles:[{kind:"start",name:{tr:"Ba\u015Flang\u0131\xE7",en:"Start"}},Lt("Tanner's Lane","clay",60),Er("gazette"),Lt("Brick Row","clay",80),{kind:"tax",name:{tr:"Gelir Vergisi",en:"Income Levy"},amount:200},Ss("North Ferry"),Lt("Kite Hill","sky",100),Er("fortune"),Lt("Windmill Way","sky",100),Lt("Weathervane Rd","sky",120),{kind:"jail",name:{tr:"Nezarethane",en:"Lockup"}},Lt("Lantern Market","rose",140),ed("Solar Farm"),Lt("Silk Arcade","rose",150),Lt("Spice Bazaar","rose",160),Ss("Tram Depot"),Lt("Foundry Yard","amber",180),Er("gazette"),Lt("Copper Quay","amber",190),Lt("Anchor Street","amber",200),{kind:"park",name:{tr:"Meydan",en:"Plaza"}},Lt("Opera Steps","scarlet",220),Er("fortune"),Lt("Gallery Walk","scarlet",230),Lt("Theatre Square","scarlet",240),Ss("Cable Car"),Lt("Sunflower Terrace","lemon",260),Lt("Orchard Rise","lemon",270),ed("Waterworks"),Lt("Vineyard Crest","lemon",280),{kind:"gotojail",name:{tr:"Yakaland\u0131n!",en:"Busted!"}},Lt("Observatory Park","jade",300),Lt("Botanic Gardens","jade",310),Er("gazette"),Lt("Glasshouse Mile","jade",330),Ss("Airfield"),Er("fortune"),Lt("Lighthouse Point","indigo",360),{kind:"tax",name:{tr:"Yat Vergisi",en:"Yacht Tax"},amount:100},Lt("Skyline Pier","indigo",400)],decks:{fortune:{name:{tr:"Talih",en:"Fortune"},color:"#d46a2e",cards:[{text:{tr:"Ekspres trene atla: Ba\u015Flang\u0131\xE7'a ilerle.",en:"Hop on the express: advance to Start."},do:"goto",tile:0},{text:{tr:"Galeri a\xE7\u0131l\u0131\u015F\u0131! Theatre Square'e ilerle.",en:"Gallery opening! Advance to Theatre Square."},do:"goto",tile:24},{text:{tr:"G\xFCn bat\u0131m\u0131 y\xFCr\xFCy\xFC\u015F\xFC: Skyline Pier'e ilerle.",en:"Sunset stroll: advance to Skyline Pier."},do:"goto",tile:39},{text:{tr:"En yak\u0131n dura\u011Fa ilerle ve sahibine iki kat \xF6de.",en:"Catch the next ride: advance to the nearest transit stop and pay its owner double."},do:"nearest",kind:"transit",mult:2},{text:{tr:"Saya\xE7 okuma: en yak\u0131n hizmete ilerle. Sahibi varsa zar\u0131n 10 kat\u0131n\u0131 \xF6de.",en:"Meter reading: advance to the nearest utility. If owned, pay 10\xD7 the dice."},do:"nearest",kind:"utility",diceMult:10},{text:{tr:"Yanl\u0131\u015F yol. 3 kare geri git.",en:"Wrong turn. Go back 3 spaces."},do:"back",n:3},{text:{tr:"K\u0131rm\u0131z\u0131da ge\xE7erken yakaland\u0131n: do\u011Fruca Nezarethane'ye.",en:"Caught jaywalking: go straight to Lockup."},do:"jail"},{text:{tr:"Giri\u015Fimin k\xE2r pay\u0131 da\u011F\u0131tt\u0131. 60 al.",en:"Your startup pays a dividend. Collect 60."},do:"gain",amount:60},{text:{tr:"Park cezas\u0131. 25 \xF6de.",en:"Parking ticket. Pay 25."},do:"lose",amount:25},{text:{tr:"Cephe denetimi: kat ba\u015F\u0131na 30, kule ba\u015F\u0131na 120 \xF6de.",en:"Facade inspection: pay 30 per floor and 120 per tower."},do:"repairs",floor:30,tower:120},{text:{tr:"Liman ba\u015Fkan\u0131 se\xE7ildin: her oyuncuya 40 \xF6de.",en:"Elected harbour master: pay every player 40."},do:"payEach",amount:40},{text:{tr:"Kitle fonlamas\u0131 tuttu. 120 al.",en:"Crowdfunding success. Collect 120."},do:"gain",amount:120},{text:{tr:"Dost bir avukat: bu kart\u0131 sakla, Nezarethane'den bedava \xE7\u0131k.",en:"A friendly lawyer: keep this card to leave Lockup for free."},do:"freeCard"}]},gazette:{name:{tr:"Gazete",en:"Gazette"},color:"#2f78b7",cards:[{text:{tr:"Vergi dairesi lehine yuvarlad\u0131. 30 al.",en:"Tax office rounding error in your favour. Collect 30."},do:"gain",amount:30},{text:{tr:"Liman regatas\u0131n\u0131 kazand\u0131n. 180 al.",en:"You win the harbour regatta. Collect 180."},do:"gain",amount:180},{text:{tr:"Di\u015F hekimi randevusu. 60 \xF6de.",en:"Dentist appointment. Pay 60."},do:"lose",amount:60},{text:{tr:"Do\u011Fum g\xFCn\xFCn! Her oyuncudan 15 al.",en:"It's your birthday! Collect 15 from every player."},do:"collectEach",amount:15},{text:{tr:"Uzak bir teyze sana 100 b\u0131rakt\u0131.",en:"A distant aunt leaves you 100."},do:"gain",amount:100},{text:{tr:"F\u0131rt\u0131na sigortas\u0131 primi. 40 \xF6de.",en:"Storm insurance premium. Pay 40."},do:"lose",amount:40},{text:{tr:"Bar kavgas\u0131nda g\xF6r\xFCld\xFCn: do\u011Fruca Nezarethane'ye.",en:"Spotted in a bar fight: go straight to Lockup."},do:"jail"},{text:{tr:"Belediye ba\u015Fkan\u0131 sana bor\xE7lu: bu kart\u0131 sakla, Nezarethane'den bedava \xE7\u0131k.",en:"The mayor owes you one: keep this card to leave Lockup for free."},do:"freeCard"},{text:{tr:"Erken tren: Ba\u015Flang\u0131\xE7'a ilerle.",en:"Early train home: advance to Start."},do:"goto",tile:0},{text:{tr:"Kald\u0131r\u0131m harc\u0131: kat ba\u015F\u0131na 35, kule ba\u015F\u0131na 110 \xF6de.",en:"Pavement levy: pay 35 per floor and 110 per tower."},do:"repairs",floor:35,tower:110},{text:{tr:"Dan\u0131\u015Fmanl\u0131k i\u015Fi. 25 al.",en:"Consulting gig. Collect 25."},do:"gain",amount:25},{text:{tr:"Eski hisselerini satt\u0131n. 50 al.",en:"You sell some old shares. Collect 50."},do:"gain",amount:50}]}}}});var gt,Ar,Aa,Ts,id,rd=Gi(()=>{gt=(i,e,t)=>({kind:"lot",name:i,group:e,price:t}),Ar=(i,e)=>({kind:"transit",name:i,group:"transit",price:200,vehicle:e}),Aa=(i,e,t)=>({kind:"shop",name:i,group:"shop",price:e,quip:t}),Ts=i=>({kind:"card",deck:i}),id={id:"istanbul",name:{tr:"\u0130stanbul",en:"\u0130stanbul"},shape:"route",currency:"simit",salary:200,jailFine:50,transitRent:[0,20,40,70,110,160,220],utilityMult:[0],shopMult:[0,4,6,9,13,18],ride:{fare:20},rentScale:1.35,inflation:{start:10,every:4,step:.15},tokens:["simitcart","cat","gull","taxi","tea","fishboat"],botNames:["Ay\u015Fe","Mehmet","Zeynep","Hasan","Elif","Murat","Selin","Cemil","Nermin","Orhan"],freeCard:{tr:"Torpil",en:"Torpil card"},groups:{halic:{name:{tr:"Hali\xE7",en:"Golden Horn"},color:"#9a6b4f",build:50},iskele:{name:{tr:"\u0130skeleler",en:"The Piers"},color:"#5fbde6",build:50},uskudar:{name:{tr:"\xDCsk\xFCdar Yakas\u0131",en:"\xDCsk\xFCdar Side"},color:"#d9649b",build:100},tarihi:{name:{tr:"Tarihi Yar\u0131mada",en:"Old City"},color:"#ef9a2e",build:100,yield:1.15},beyoglu:{name:{tr:"Beyo\u011Flu",en:"Beyo\u011Flu"},color:"#e04b3a",build:150},kadikoy:{name:{tr:"Kad\u0131k\xF6y Sahili",en:"Kad\u0131k\xF6y Shore"},color:"#f0d23f",build:150},plaza:{name:{tr:"Plazalar ve Sahil",en:"Towers & Shore"},color:"#36a86a",build:200,yield:1.15},bogaz:{name:{tr:"Bo\u011Faz Yal\u0131lar\u0131",en:"Bosphorus Mansions"},color:"#4757c9",build:200,yield:1.15},transit:{name:{tr:"Hatlar",en:"Lines"},color:"#3b3f46",build:0},shop:{name:{tr:"D\xFCkk\xE2nlar",en:"Shops"},color:"#a8663f",build:0}},tiles:[{kind:"start",name:{tr:"Ba\u015Flang\u0131\xE7",en:"Start"},note:{tr:"Galata K\xF6pr\xFCs\xFC",en:"Galata Bridge"}},gt("Karak\xF6y","iskele",100),Ar("T\xFCnel","funicular"),gt("Emin\xF6n\xFC","iskele",100),Ts("mahalle"),gt("Sirkeci","iskele",120),Aa({tr:"Kafe",en:"Caf\xE9"},120,{tr:'Garson \xFC\xE7 kez "bir dakika abla" dedi. Hesap kabard\u0131.',en:'The waiter said "one minute" three times. The bill grew.'}),gt("G\xFClhane","tarihi",170),gt("Sultanahmet","tarihi",170),Ar({tr:"Tramvay",en:"Tram"},"tram"),gt("\xC7emberlita\u015F","tarihi",180),gt("Kapal\u0131\xE7ar\u015F\u0131","tarihi",190),{kind:"jail",name:{tr:"Karakol",en:"Karakol"},note:{tr:"Ziyaret",en:"Just visiting"}},Aa({tr:"Hal\u0131c\u0131",en:"Carpet shop"},170,{tr:"Hal\u0131c\u0131 14 hal\u0131 serdi. Biriyle \xE7\u0131kt\u0131n.",en:"The hal\u0131c\u0131 unrolled 14 carpets. You left with one."}),gt("Aksaray","halic",60),Ts("kismet"),gt("Ey\xFCp","halic",60),Ar({tr:"Teleferik",en:"Cable car"},"cablecar"),gt("Feshane","halic",80),{kind:"tax",name:{tr:"Otopark",en:"Parking"},amount:75},gt("Pera","beyoglu",220),Aa({tr:"Restoran",en:"Restaurant"},150,{tr:'Meyhanede "bir tek" dedin, sabah oldu.',en:'You said "just one" at the meyhane. It was morning.'}),gt("Ma\xE7ka","beyoglu",220),gt("Be\u015Fikta\u015F","beyoglu",240),{kind:"park",name:{tr:"\xC7ay molas\u0131",en:"Tea break"}},gt("Levent","plaza",300),Ar("Metro","metro"),gt("Maslak","plaza",300),Aa({tr:"AVM",en:"Mall"},200,{tr:"Sadece otopark\u0131 kullanacakt\u0131n. 4 po\u015Fetle \xE7\u0131kt\u0131n.",en:"You only meant to use the car park. You left with 4 bags."}),gt("Yenik\xF6y","plaza",320),Ts("mahalle"),gt("Tarabya","plaza",330),Ar({tr:"Vapur",en:"Ferry"},"ferry"),gt("Beykoz","bogaz",360),gt("Anadolu Hisar\u0131","bogaz",380),Ts("kismet"),{kind:"gotojail",name:{tr:"Zab\u0131ta!",en:"Zab\u0131ta!"},note:{tr:"Karakol'a git",en:"Go to Karakol"}},gt("Vanik\xF6y","bogaz",400),gt("Beylerbeyi","bogaz",450),{kind:"tax",name:{tr:"K\xF6pr\xFC ge\xE7i\u015Fi",en:"Bridge toll"},amount:150},gt("Kuzguncuk","uskudar",140),gt("\xDCsk\xFCdar","uskudar",140),Aa({tr:"Oto galeri",en:"Car dealer"},220,{tr:'"Abi bu araba ka\xE7maz" dedi. Ka\xE7mad\u0131, sen ka\xE7t\u0131n.',en:'"This car is a steal, abi." It was. From you.'}),gt("Altunizade","uskudar",160),gt("Moda","kadikoy",260),gt("Ba\u011Fdat Caddesi","kadikoy",270),gt("Bostanc\u0131","kadikoy",280),Ar("Marmaray","train")],decks:{kismet:{name:{tr:"K\u0131smet",en:"K\u0131smet"},color:"#d4502e",cards:[{text:{tr:"Vapur d\xFCd\xFC\u011F\xFC \xE7ald\u0131, ko\u015F! Ba\u015Flang\u0131\xE7'a ilerle.",en:"The ferry horn blows \u2013 run! Advance to Start."},do:"goto",tile:0},{text:{tr:"Bir kediyi takip ettin, bir saat ge\xE7ti. Kuzguncuk'a ilerle.",en:"You followed a cat for an hour. Advance to Kuzguncuk."},do:"goto",tile:40},{text:{tr:"Bo\u011Faz manzaras\u0131 \xE7a\u011F\u0131r\u0131yor: Beylerbeyi'ne ilerle.",en:"The Bosphorus view calls: advance to Beylerbeyi."},do:"goto",tile:38},{text:{tr:"\u0130stiklal kalabal\u0131\u011F\u0131na kap\u0131ld\u0131n: Pera'ya ilerle.",en:"The \u0130stiklal crowd sweeps you along: advance to Pera."},do:"goto",tile:20},{text:{tr:"Bal\u0131k-ekmek kokusu ald\u0131n: Karak\xF6y'e ilerle.",en:"You smell fish sandwiches: advance to Karak\xF6y."},do:"goto",tile:1},{text:{tr:"Sahilde y\xFCr\xFCy\xFC\u015Fe \xE7\u0131kt\u0131n, Bostanc\u0131'ya kadar y\xFCr\xFCd\xFCn.",en:"You went for a seaside walk and ended up in Bostanc\u0131."},do:"goto",tile:46},{text:{tr:"Kaptan el sall\u0131yor: en yak\u0131n hatta ilerle, sahibine iki kat \xF6de.",en:"The captain waves you on: advance to the nearest line and pay its owner double."},do:"nearest",kind:"transit",mult:2},{text:{tr:"Kart\u0131nda bakiye kalm\u0131\u015F! Bir sonraki hatta bedava ilerle.",en:"Your transit card still has credit! Ride free to the next line."},do:"nearest",kind:"transit"},{text:{tr:"Can\u0131n \xE7ay istedi: en yak\u0131n d\xFCkk\xE2na ilerle.",en:"You need a tea: advance to the nearest shop."},do:"nearest",kind:"shop"},{text:{tr:"K\xF6pr\xFCde trafik! 3 kare geri git.",en:"Traffic on the bridge! Go back 3 spaces."},do:"back",n:3},{text:{tr:"Mart\u0131ya simit atarken vapurdan d\xFC\u015Ft\xFCn, Zab\u0131ta g\xF6rd\xFC. Do\u011Fruca Karakol'a!",en:"You fell off the ferry feeding a seagull and the Zab\u0131ta saw. Straight to Karakol!"},do:"jail"},{text:{tr:"Emin\xF6n\xFC'nde yere d\xFC\u015Fm\xFC\u015F 50 simit buldun. Al.",en:"You found 50 simit dropped in Emin\xF6n\xFC. Collect."},do:"gain",amount:50},{text:{tr:"Dolmu\u015Fta para \xFCst\xFCn\xFC bekledin, gelmedi. 30 \xF6de.",en:"You waited for your change in the dolmu\u015F. It never came. Pay 30."},do:"lose",amount:30},{text:{tr:"Kuzenin birini tan\u0131yor. TORP\u0130L: sakla, Karakol'dan bedava \xE7\u0131k.",en:"Your cousin knows someone. TORP\u0130L: keep it to get out of Karakol free."},do:"freeCard"}]},mahalle:{name:{tr:"Mahalle",en:"Mahalle"},color:"#2f78b7",cards:[{text:{tr:"Bakkal veresiye defterini a\xE7t\u0131. 40 \xF6de.",en:"The corner shop opened the tab book. Pay 40."},do:"lose",amount:40},{text:{tr:"D\xFC\u011F\xFCn sezonu: her oyuncuya 25 simitlik alt\u0131n tak.",en:"Wedding season: pin 25 simit of gold on every player."},do:"payEach",amount:25},{text:{tr:"Teyzenin dolmalar\u0131 olay oldu. 60 al.",en:"Your aunt's dolma were a hit. Collect 60."},do:"gain",amount:60},{text:{tr:"Kap\u0131c\u0131 anahtar\u0131n\u0131 buldu. 10 bah\u015Fi\u015F ver.",en:"The doorman found your keys. Tip 10."},do:"lose",amount:10},{text:{tr:"Deprem y\xF6netmeli\u011Fi: kat ba\u015F\u0131na 30, plaza ba\u015F\u0131na 115 \xF6de.",en:"Earthquake code check: pay 30 per floor and 115 per tower."},do:"repairs",floor:30,tower:115},{text:{tr:"Do\u011Fum g\xFCn\xFCn! Her oyuncudan 15 al.",en:"It's your birthday! Collect 15 from every player."},do:"collectEach",amount:15},{text:{tr:"Piyango bu sefer ger\xE7ekten \xE7\u0131kt\u0131! 150 al.",en:"The lottery actually paid out this time! Collect 150."},do:"gain",amount:150},{text:{tr:"\xDCst kom\u015Funun borusu patlad\u0131, tavan\u0131n akt\u0131. 50 \xF6de.",en:"The upstairs neighbour's pipe burst into your ceiling. Pay 50."},do:"lose",amount:50},{text:{tr:"Eski telefonunu satt\u0131n. 25 al.",en:"You sold your old phone. Collect 25."},do:"gain",amount:25},{text:{tr:"Apartman toplant\u0131s\u0131 k\u0131z\u0131\u015Ft\u0131, polis geldi. Karakol'a!",en:"The building meeting got heated and the police came. To Karakol!"},do:"jail"},{text:{tr:"Muhtar senin adam\u0131n. TORP\u0130L: sakla, Karakol'dan bedava \xE7\u0131k.",en:"The muhtar is your guy. TORP\u0130L: keep it to get out of Karakol free."},do:"freeCard"},{text:{tr:"Kirac\u0131n kiray\u0131 erken \xF6dedi (!). 100 al.",en:"Your tenant paid the rent early (!). Collect 100."},do:"gain",amount:100},{text:{tr:"Kombi bayramda bozuldu. 75 \xF6de.",en:"The boiler broke down on a holiday. Pay 75."},do:"lose",amount:75},{text:{tr:"Annen yeme\u011Fe \xE7a\u011F\u0131rd\u0131: Ba\u015Flang\u0131\xE7'a ilerle.",en:"Mum called you home for dinner: advance to Start."},do:"goto",tile:0}]}}}});function bl(i,e,t){let n=i.tiles.length;for(let r=1;r<=n;r++)if(i.tiles[(e+r)%n].kind===t)return(e+r)%n;return e}function Nf(i,e=1){let t=Math.max(4,Math.round(i*.07*e)),n=r=>Math.max(5,Math.round(r/5)*5);return[t,n(t*5),n(t*15),n(t*40),n(t*55),n(t*70)]}function ad(i){i.tiles.forEach((e,t)=>{e.index=t,e.kind==="lot"&&!e.rents&&(e.rents=Nf(e.price,(i.groups[e.group]&&i.groups[e.group].yield||1)*(i.rentScale||1)))}),i.byGroup={};for(let e of i.tiles)e.group&&(i.byGroup[e.group]=i.byGroup[e.group]||[]).push(e.index);return i.jailTile=i.tiles.findIndex(e=>e.kind==="jail"),i.parkTile=i.tiles.findIndex(e=>e.kind==="park"),i.ownable=i.tiles.filter(Gn).map(e=>e.index),i}var Kt,Ra,Gn,dt,Jn,Wi,sn,Vi,Ca,sd,Bt,bn=Gi(()=>{nd();rd();Kt=5,Ra=["#e4574b","#3f88e6","#f2b632","#43b56b","#a65fd6","#ef7fb3"],Gn=i=>i.kind==="lot"||i.kind==="transit"||i.kind==="utility"||i.kind==="shop",dt=(i,e)=>i.byGroup[e]||[],Jn=i=>Math.floor(i.price/2),Wi=i=>Math.ceil(Jn(i)*1.1),sn=(i,e="en")=>i==null?"":typeof i=="string"?i:i[e]||i.en||i.tr||"";Vi={istanbul:ad(id),harbour:ad(td)},Ca="istanbul",sd=Object.keys(Vi),Bt=i=>Vi[i]||Vi[Ca]});function od(i,e){if(!e||typeof e!="object")return null;let t=ji[e.event];if(!t)return null;let n=Ml(e.payer,["from","to"],null);if(!n)return null;let r="any";if(t.where&&typeof e.where=="string"){let c=/^(t):(\d+)$|^(g):([a-z]+)$/.exec(e.where);c&&c[1]&&i.tiles[+c[2]]?r=`t:${+c[2]}`:c&&c[3]&&i.groups[c[4]]&&(r=`g:${c[4]}`)}let a=t.amount&&e.kind==="percent"?"percent":"fixed",s=a==="percent"?Uf:Df,o=Math.round(Number(e.value));if(!Number.isFinite(o)||o<1||o>s)return null;let l=(c,h)=>{let u=Math.round(Number(c));return Number.isFinite(u)?Math.min(h,Math.max(0,u)):0};return{payer:n,event:e.event,actor:Ml(e.actor,["payer","payee","any"],"any"),where:r,owner:t.owner?Ml(e.owner,["payer","payee","any"],"any"):"any",kind:a,value:o,times:l(e.times,Of),rounds:l(e.rounds,zf)}}function ld(i,e,t,n,r){let a=e.payer==="from"?t:n,s=a===t?n:t,o=l=>l==="payer"?a:l==="payee"?s:null;return{id:i,payer:a,payee:s,event:e.event,actor:o(e.actor),where:e.where,owner:o(e.owner),kind:e.kind,value:e.value,timesLeft:e.times||null,untilRound:e.rounds?r+e.rounds-1:null,fired:0,paid:0,since:r}}function Bf(i,e,t){return e==="any"?!0:t==null?!1:e.startsWith("t:")?+e.slice(2)===t:i.tiles[t]&&i.tiles[t].group===e.slice(2)}function cd(i,e,t){return t.type!==e.event||e.actor!==null&&t.p!==e.actor||ji[e.event].where&&!Bf(i,e.where,t.tile)||e.owner!==null&&t.owner!==e.owner?0:e.kind==="percent"?Math.floor((t.amount||0)*e.value/100):e.value}function Ff(i,e,t="en"){if(!e||e==="any")return"";if(e.startsWith("t:")){let r=i.tiles[+e.slice(2)];return sn(r.name||(i.decks[r.deck]||{}).name,t)}let n=sn(i.groups[e.slice(2)].name,t);return t==="tr"?`${n} grubu`:`any ${n} space`}function hd(i,e,t,n,r,a="en",s=o=>String(o)){let o=e.payer==="from"||e.payer==="to",l=o?e.payer==="from"?n:r:e.payer,c=o?l===n?r:n:e.payee,h=b=>o?b==="payer"?l:b==="payee"?c:null:b,u=b=>b==null?a==="tr"?"herhangi biri":"anyone":t[b]||"?",d=h(e.actor==="any"?null:e.actor),p=h(e.owner==="any"?null:e.owner),f=ji[e.event],g=Ff(i,e.where,a),m=o?e.times:e.timesLeft,y=[];if(a==="tr"){let b=e.kind==="percent"?`%${e.value}`:s(e.value),P=e.kind==="percent"&&{rent:"kiradan",tax:"vergiden",passStart:"maa\u015Ftan",buy:"fiyattan",build:"in\u015Faat bedelinden"}[e.event]||"",T=`${u(d)} `;return e.event==="rent"?T+=`${p!==null?`${u(p)} adl\u0131 oyuncuya `:""}${g?`${g} i\xE7in `:""}kira \xF6dedi\u011Finde`:e.event==="land"?T+=g?`${g} karesine geldi\u011Finde`:"bir kareye geldi\u011Finde":e.event==="buy"?T+=g?`${g} karesini sat\u0131n ald\u0131\u011F\u0131nda`:"bir yer sat\u0131n ald\u0131\u011F\u0131nda":e.event==="build"?T+=g?`${g} \xFCzerine in\u015Faat yapt\u0131\u011F\u0131nda`:"in\u015Faat yapt\u0131\u011F\u0131nda":T+=sn(f.label,"tr"),m&&y.push(o?`en fazla ${m} kez`:`${m} kez kald\u0131`),o&&e.rounds&&y.push(`${e.rounds} tur boyunca`),!o&&e.untilRound&&y.push(`${e.untilRound}. tura kadar`),`${u(l)} \u2192 ${u(c)}: ${P?`${P} ${b}`:b} \u2013 her seferinde: ${T}${y.length?` (${y.join(", ")})`:""}`}let v=e.kind==="percent"?e.event==="rent"?`${e.value}% of that rent`:`${e.value}% of it`:s(e.value),x=`${u(d)} ${sn(f.label,"en")}`;return e.event==="rent"?(p!==null&&(x+=` to ${u(p)}`),g&&(x+=` on ${g}`)):f.where&&(x+=g?` ${g}`:e.event==="land"?" anything":" a space"),m&&y.push(o?`${m}\xD7`:`${m} left`),o&&e.rounds&&y.push(`for ${e.rounds} round${e.rounds>1?"s":""}`),!o&&e.untilRound&&y.push(`until round ${e.untilRound}`),`${u(l)} pays ${u(c)} ${v} each time ${x}${y.length?` (${y.join(", ")})`:""}`}var ji,ka,Df,Uf,Of,zf,Ml,Es=Gi(()=>{bn();ji={turn:{label:{en:"starts a turn",tr:"tura ba\u015Flad\u0131\u011F\u0131nda"},where:!1,owner:!1,amount:!1},land:{label:{en:"lands on",tr:"geldi\u011Finde"},where:!0,owner:!1,amount:!1},passStart:{label:{en:"passes Start",tr:"Ba\u015Flang\u0131\xE7'tan ge\xE7ti\u011Finde"},where:!1,owner:!1,amount:!0},rent:{label:{en:"pays rent",tr:"kira \xF6dedi\u011Finde"},where:!0,owner:!0,amount:!0},buy:{label:{en:"buys",tr:"sat\u0131n ald\u0131\u011F\u0131nda"},where:!0,owner:!1,amount:!0},build:{label:{en:"builds on",tr:"in\u015Faat yapt\u0131\u011F\u0131nda"},where:!0,owner:!1,amount:!0},tax:{label:{en:"pays tax",tr:"vergi \xF6dedi\u011Finde"},where:!1,owner:!1,amount:!0},doubles:{label:{en:"rolls doubles",tr:"\xE7ift att\u0131\u011F\u0131nda"},where:!1,owner:!1,amount:!1},jail:{label:{en:"is sent to jail",tr:"karakola d\xFC\u015Ft\xFC\u011F\xFCnde"},where:!1,owner:!1,amount:!1},card:{label:{en:"draws a card",tr:"kart \xE7ekti\u011Finde"},where:!1,owner:!1,amount:!1}},ka=6,Df=5e3,Uf=100,Of=99,zf=99,Ml=(i,e,t)=>e.includes(i)?i:t});var wl,ud=Gi(()=>{wl={"% of it":"% (tutar\u0131n)","(0 = no limit)":"(0 = s\u0131n\u0131rs\u0131z)","(\xD72 with the full set)":"(tam sette \xD72)","1 floor":"1 kat","1 line":"1 hat","1 owned":"1 tane","1 space":"1 kare","2 floors":"2 kat","3 floors":"3 kat","4 floors":"4 kat","40 spaces \xB7 the classic square board":"40 kare \xB7 klasik kare tahta","48 spaces \xB7 simit \xB7 lines you can ride \xB7 Enflasyon":"48 kare \xB7 simit \xB7 binilebilen hatlar \xB7 Enflasyon","A classy voice comments on the game live, in your language: purchases, big rents, cards, auctions, Enflasyon\u2026 The voice (Supertonic 3) runs in this browser; nothing is prerecorded.":"Zarif bir ses oyunu canl\u0131 olarak, kendi dilinizde yorumlar: al\u0131mlar, b\xFCy\xFCk kiralar, kartlar, a\xE7\u0131k art\u0131rmalar, Enflasyon\u2026 Ses (Supertonic 3) bu taray\u0131c\u0131da \xE7al\u0131\u015F\u0131r; hi\xE7bir \u015Fey \xF6nceden kaydedilmemi\u015Ftir.","A space cannot be on both sides":"Bir kare iki tarafta birden olamaz","AI players buy, build, bid, ride, and take or turn down your offers \u2013 clauses too.":"Yapay zek\xE2 oyuncular sat\u0131n al\u0131r, in\u015Fa eder, teklif verir, hatlara biner ve tekliflerinizi \u2013 maddeleriyle birlikte \u2013 kabul ya da reddeder.","AI playing for them":"yerine yapay zek\xE2 oynuyor","AI plays":"YZ oynas\u0131n",AUCTION:"A\xC7IK ARTIRMA",Accept:"Kabul et",Add:"Ekle","Add an AI player":"Yapay zek\xE2 oyuncu ekle","Add something to the offer.":"Teklife bir \u015Fey ekleyin.","All aboard!":"Herkes yerine!","All six seats are taken":"Alt\u0131 koltuk da dolu","Already mortgaged":"Zaten ipotekli","An offer can also carry clauses: payments the game makes by itself whenever an event happens. You pick who pays, how much (a fixed amount, or a percentage of the rent, tax, price or salary involved), which event triggers it (landing on a space, passing Start, paying rent, starting a turn, rolling doubles\u2026), whose action it is, and how long it lasts (a number of times and/or rounds).":"Bir teklif maddeler de i\xE7erebilir: bir olay her ger\xE7ekle\u015Fti\u011Finde oyunun kendili\u011Finden yapt\u0131\u011F\u0131 \xF6demeler. Kimin \xF6deyece\u011Fini, ne kadar (sabit bir tutar ya da ilgili kira, vergi, fiyat veya maa\u015F\u0131n y\xFCzdesi), hangi olay\u0131n tetikleyece\u011Fini (bir kareye gelmek, Ba\u015Flang\u0131\xE7'tan ge\xE7mek, kira \xF6demek, tura ba\u015Flamak, \xE7ift atmak\u2026), kimin hamlesi oldu\u011Funu ve ne kadar s\xFCrece\u011Fini (ka\xE7 kez ve/veya ka\xE7 tur) siz se\xE7ersiniz.","Any event, any amount":"Her olay, her tutar","At least one person has to play":"En az bir ki\u015Fi oynamal\u0131","At least {n} players need a seat":"En az {n} oyuncu oturmal\u0131","At most {n} open offers \u2013 withdraw one first":"En fazla {n} a\xE7\u0131k teklif \u2013 \xF6nce birini geri \xE7ekin","At the table ({n}/{m})":"Masada ({n}/{m})","Auction in progress":"A\xE7\u0131k art\u0131rma s\xFCr\xFCyor","Auction it":"A\xE7\u0131k art\u0131rmaya \xE7\u0131kar","Auction spaces nobody buys":"Kimsenin almad\u0131\u011F\u0131 kareler a\xE7\u0131k art\u0131rmaya \xE7\u0131ks\u0131n","Back to the table":"Masaya d\xF6n","Bad hello":"Hatal\u0131 selam",Bid:"Teklif ver","Bid in the panel in the middle of the screen.":"Ekran\u0131n ortas\u0131ndaki panelden teklif verin.","Bid more than {amt}":"{amt} \xFCzerinde teklif verin",Bids:"Teklifler","Build evenly across the set":"Sete e\u015Fit in\u015Fa edin","Build floor ({amt})":"Kat \xE7\u0131k ({amt})","Build tower ({amt})":"Plaza dik ({amt})","Build, trade \u2013 or end your turn.":"\u0130n\u015Fa edin, takas yap\u0131n \u2013 ya da turu bitirin.",Buildings:"Binalar","Buy for {amt}":"{amt} \xF6de, al","Buy it or pass first":"\xD6nce al\u0131n ya da ge\xE7in","Buy \u0130stanbul, build it up, and strike deals that keep paying.":"\u0130stanbul'u sat\u0131n al, in\u015Fa et ve kazand\u0131rmaya devam eden anla\u015Fmalar yap.",CODE:"KOD",Camera:"Kamera",Cancel:"Vazge\xE7",Cash:"Nakit","Cash now":"\u015Eimdi nakit","Clause #{id} between {p} and {q} has run its course.":"{p} ile {q} aras\u0131ndaki #{id} numaral\u0131 madde sona erdi.","Clause #{id} is torn up.":"#{id} numaral\u0131 madde y\u0131rt\u0131ld\u0131.","Clause #{id} no longer exists":"#{id} numaral\u0131 madde art\u0131k yok","Clause #{id}: you pay {amt}":"Madde #{id}: siz {amt} \xF6d\xFCyorsunuz","Clause #{id}: you receive {amt}":"Madde #{id}: size {amt} geldi","Clause #{id}: {p} pays {q} {amt}.":"Madde #{id}: {p} \u2192 {q}: {amt}.",Clauses:"Maddeler","Clauses about this space":"Bu kareyle ilgili maddeler","Clauses in force":"Y\xFCr\xFCrl\xFCkteki maddeler","Clauses: deals that keep paying":"Maddeler: kazand\u0131rmaya devam eden anla\u015Fmalar","Clear your debt first":"\xD6nce borcunuzu kapat\u0131n","Clear your debt first \u2013 mortgage, sell or trade":"\xD6nce borcunuzu kapat\u0131n \u2013 ipotek edin, sat\u0131n ya da takas yap\u0131n","Click Trade at any time \u2013 even when it is not your turn. An offer can swap cash, spaces and get-out cards. The other player can accept, decline or counter.":"Takas'a istedi\u011Finiz zaman t\u0131klay\u0131n \u2013 s\u0131ra sizde olmasa bile. Bir teklifle nakit, kare ve \xE7\u0131k\u0131\u015F kart\u0131 de\u011Fi\u015F toku\u015F edilebilir. Kar\u015F\u0131 taraf kabul edebilir, reddedebilir ya da kar\u015F\u0131 teklif verebilir.",Close:"Kapat",Code:"Kod","Collect {amt} each time you pass or land here.":"Buradan her ge\xE7ti\u011Finizde ya da geldi\u011Finizde {amt} al\u0131n.","Connected to a game server.":"Bir oyun sunucusuna ba\u011Fl\u0131.","Connecting\u2026":"Ba\u011Flan\u0131yor\u2026","Connection lost \u2013 reconnecting\u2026":"Ba\u011Flant\u0131 koptu \u2013 yeniden ba\u011Flan\u0131yor\u2026","Copy invite link":"Davet ba\u011Flant\u0131s\u0131n\u0131 kopyala","Copy the invite link":"Davet ba\u011Flant\u0131s\u0131n\u0131 kopyala","Could not connect \u2013 check your network":"Ba\u011Flan\u0131lamad\u0131 \u2013 a\u011F\u0131n\u0131z\u0131 kontrol edin","Could not join":"Kat\u0131l\u0131namad\u0131","Could not load PeerJS \u2013 are you offline?":"PeerJS y\xFCklenemedi \u2013 \xE7evrimd\u0131\u015F\u0131 m\u0131s\u0131n\u0131z?","Could not open a room":"Oda a\xE7\u0131lamad\u0131","Could not reach that room":"O odaya ula\u015F\u0131lamad\u0131","Could not reopen room {code}: {why}":"{code} odas\u0131 yeniden a\xE7\u0131lamad\u0131: {why}",Counter:"Kar\u015F\u0131 teklif","Create a room and send the invite link (or the 4-letter code). If you lose your connection or reload, you get your seat back. A room hosted in a browser lives in that tab: the host can reload it and the room comes back, but should not close it.":"Bir oda a\xE7\u0131n ve davet ba\u011Flant\u0131s\u0131n\u0131 (ya da 4 harfli kodu) g\xF6nderin. Ba\u011Flant\u0131n\u0131z koparsa ya da sayfay\u0131 yenilerseniz koltu\u011Funuzu geri al\u0131rs\u0131n\u0131z. Taray\u0131c\u0131da bar\u0131nd\u0131r\u0131lan oda o sekmede ya\u015Far: ev sahibi sayfay\u0131 yenileyebilir, oda geri gelir; ama sekmeyi kapatmamal\u0131.","Create room":"Oda a\xE7",Custom:"\xD6zel","Deal done!":"Anla\u015Fma tamam!","Deal?":"Anla\u015Fal\u0131m m\u0131?","Declare bankruptcy":"\u0130flas et","Declare bankruptcy? You leave the game.":"\u0130flas m\u0131 ediyorsunuz? Oyundan \xE7\u0131kars\u0131n\u0131z.",Decline:"Reddet",Details:"Ayr\u0131nt\u0131lar","Doubles \u2013 roll again!":"\xC7ift geldi \u2013 bir daha at!","Download and turn on":"\u0130ndir ve a\xE7","Downloading the voice\u2026 {pct}%":"Ses indiriliyor\u2026 %{pct}","Draw a {deck} card.":"Bir {deck} kart\u0131 \xE7ekin.","ENFLASYON! Rents, fares and taxes are now +{pct}%.":"ENFLASYON! Kiralar, biletler ve vergiler art\u0131k +%{pct}.","Each floor / the tower costs":"Her kat / plaza","End turn":"Turu bitir","Enflasyon: every few rounds, rents, fares and taxes go up. Salaries and prices don\u2019t. Fixed amounts in clauses don\u2019t either \u2013 percentages do.":"Enflasyon: birka\xE7 turda bir kiralar, biletler ve vergiler artar. Maa\u015Flar ve fiyatlar artmaz. Maddelerdeki sabit tutarlar da artmaz \u2013 y\xFCzdeler artar.","Enflasyon: from round {r}, rents, fares and taxes go up {pct}% every {n} rounds":"Enflasyon: {r}. turdan itibaren kiralar, biletler ve vergiler her {n} turda %{pct} artar","F2 switches between isometric, top and TV cameras. Drag to turn; right-drag, shift-drag, two fingers or the arrow keys pan; the wheel zooms. Click the dice to roll.":"F2 izometrik, \xFCstten ve TV kameralar\u0131 aras\u0131nda ge\xE7i\u015F yapar. S\xFCr\xFCkleyerek d\xF6nd\xFCr\xFCn; sa\u011F tu\u015Fla, shift ile, iki parmakla ya da ok tu\u015Flar\u0131yla kayd\u0131r\u0131n; tekerlek yak\u0131nla\u015Ft\u0131r\u0131r. Zar atmak i\xE7in zarlara t\u0131klay\u0131n.","Fare {amt}, to {who}.":"Bilet {amt}, alan: {who}.","Finish what is open first":"\xD6nce a\xE7\u0131k olan\u0131 bitirin","Fixed amounts don\u2019t keep up with Enflasyon \u2013 percentages do.":"Sabit tutarlar Enflasyona yeti\u015Femez \u2013 y\xFCzdeler yeti\u015Fir.",Forget:"Unut","Full set":"Tam set","Full sets":"Tam setler","Game clock":"Oyun saati","Game log":"Oyun g\xFCnl\xFC\u011F\xFC","Game over":"Oyun bitti","Go straight to {tile}. No salary.":"Do\u011Fruca {tile}. Maa\u015F yok.","Good game":"\u0130yi oyundu","Here now":"\u015Eu an burada","Highest bid":"En y\xFCksek teklif","Highest bidder":"En y\xFCksek teklifi veren",Host:"Ev sahibi","How to play":"Nas\u0131l oynan\u0131r","How to play PARCEL":"PARCEL nas\u0131l oynan\u0131r","Hurry up":"Haydi acele",I:"Ben","Invite link":"Davet ba\u011Flant\u0131s\u0131","Invite link copied":"Davet ba\u011Flant\u0131s\u0131 kopyaland\u0131",Isometric:"\u0130zometrik","It already has a tower":"Zaten bir plazas\u0131 var","It\u2019s your own line \u2013 the ride is free.":"Kendi hatt\u0131n\u0131z \u2013 yolculuk bedava.",Join:"Kat\u0131l","Join a room":"Odaya kat\u0131l","Join my PARCEL table \u2013 room {code}":"PARCEL masama kat\u0131l \u2013 oda {code}","Joining\u2026":"Kat\u0131l\u0131yor\u2026","Landed here? You may ride on to the next line for {amt}, paid to the owner.":"Buraya m\u0131 geldiniz? Sahibine {amt} \xF6deyerek bir sonraki hatta binebilirsiniz.","Landed on a line (T\xFCnel, tram, cable car, metro, ferry, Marmaray)? You may ride on to the next line for a small fare to its owner \u2013 handy to skip a dangerous stretch.":"Bir hatta m\u0131 geldiniz (T\xFCnel, tramvay, teleferik, metro, vapur, Marmaray)? Sahibine k\xFC\xE7\xFCk bir bilet \xFCcreti \xF6deyip bir sonraki hatta binebilirsiniz \u2013 tehlikeli bir b\xF6lgeyi atlamak i\xE7in birebir.",Leave:"Ayr\u0131l","Leave the game for good? Everything you own goes back to the bank.":"Oyundan tamamen mi \xE7\u0131k\u0131yorsunuz? Her \u015Feyiniz bankaya d\xF6ner.","Let the AI play their turns until they come back":"D\xF6nene kadar onun yerine yapay zek\xE2 oynas\u0131n","Let's talk":"Konu\u015Fal\u0131m","Letters and numbers only":"Yaln\u0131zca harf ve rakam","Letters, numbers and simple punctuation only":"Yaln\u0131zca harf, rakam ve basit noktalama","List price {amt}":"Liste fiyat\u0131 {amt}","Loading\u2026":"Y\xFCkleniyor\u2026",Loan:"Bor\xE7",MORTGAGED:"\u0130POTEKL\u0130","Make an offer to":"Teklif yap:","Make host":"Ev sahibi yap",Map:"Harita","Mortgage (+{amt})":"\u0130potek et (+{amt})","Mortgage +{amt}":"\u0130potek +{amt}","Mortgage value":"\u0130potek de\u011Feri","My assets":"Varl\u0131klar\u0131m","NO SALE":"SATILMADI","Narrator: off \u2013 a live voice comments on the game":"Anlat\u0131c\u0131: kapal\u0131 \u2013 canl\u0131 bir ses oyunu yorumlar","Narrator: on (click for settings)":"Anlat\u0131c\u0131: a\xE7\u0131k (ayarlar i\xE7in t\u0131klay\u0131n)","Net worth":"Net de\u011Fer","New clause #{id}: {clause}.":"Yeni madde #{id}: {clause}.","Nice one!":"Helal!","No auction is running":"S\xFCren bir a\xE7\u0131k art\u0131rma yok","No bids yet":"Hen\xFCz teklif yok","No clauses yet. Add some to a trade: loans, rent shares, exemptions, tolls\u2026":"Hen\xFCz madde yok. Bir takasa ekleyin: bor\xE7lar, kira paylar\u0131, muafiyetler, ge\xE7i\u015F \xFCcretleri\u2026","No deal":"Olmaz","No open rooms \u2013 create one!":"A\xE7\u0131k oda yok \u2013 bir tane a\xE7\u0131n!","No room with that code":"Bu kodla bir oda yok","No room with that code is open right now":"\u015Eu anda bu kodla a\xE7\u0131k bir oda yok","No spaces":"Kare yok","Nobody bid on {tile}; it stays with the bank.":"{tile} i\xE7in kimse teklif vermedi; bankada kal\u0131yor.","Not allowed \u2013 no swearing, religion or politics":"\u0130zin verilmiyor \u2013 k\xFCf\xFCr, din ya da siyaset yok","Not mortgaged":"\u0130potekli de\u011Fil","Not your turn":"S\u0131ra sizde de\u011Fil","Not yours":"Sizin de\u011Fil","Nothing happens here. Enjoy the view.":"Burada bir \u015Fey olmaz. Manzaran\u0131n tad\u0131n\u0131 \xE7\u0131kar\u0131n.","Nothing to buy":"Al\u0131nacak bir \u015Fey yok","Nothing to decline":"Reddedilecek bir \u015Fey yok","Nothing to sell there":"Orada sat\u0131lacak bir \u015Fey yok","Offer from {p}":"{p} teklif g\xF6nderdi","One of the clauses is incomplete":"Maddelerden biri eksik","Open a room":"Oda a\xE7","Open rooms":"A\xE7\u0131k odalar","Opening bid":"A\xE7\u0131l\u0131\u015F teklifi","Opening\u2026":"A\xE7\u0131l\u0131yor\u2026","Ouch!":"Eyvah!","Own all of {group} first":"\xD6nce {group} grubunun tamam\u0131na sahip olun","Owned by the bank \u2013 for sale.":"Bankan\u0131n \u2013 sat\u0131l\u0131k.","Owned by {p}":"Sahibi: {p}",Pass:"Ge\xE7",Passed:"Ge\xE7ti","Pay off mortgage ({amt})":"\u0130pote\u011Fi kald\u0131r ({amt})","Pay {amt}":"{amt} \xF6de","Pay {amt}.":"{amt} \xF6deyin.","Payments players agreed on in trades. The game pays them automatically whenever their event happens. To end one early, tear it up as part of a new trade between the same two players.":"Oyuncular\u0131n takaslarda anla\u015Ft\u0131\u011F\u0131 \xF6demeler. Oyun bunlar\u0131 olaylar\u0131 ger\xE7ekle\u015Ftik\xE7e kendili\u011Finden \xF6der. Birini erken bitirmek i\xE7in ayn\u0131 iki oyuncu aras\u0131ndaki yeni bir takasla y\u0131rt\u0131n.","PeerJS failed to load":"PeerJS y\xFCklenemedi","Pick a name":"Bir ad se\xE7in","Pick another player to trade with":"Takas i\xE7in ba\u015Fka bir oyuncu se\xE7in","Playing online":"\xC7evrimi\xE7i oynamak","Price {amt}":"Fiyat {amt}","Ready ({backend}).":"Haz\u0131r ({backend}).","Redeem {amt}":"Kurtar {amt}",Refresh:"Yenile",Remove:"\xC7\u0131kar","Remove this player (their assets go back to the bank)":"Bu oyuncuyu \xE7\u0131kar (varl\u0131klar\u0131 bankaya d\xF6ner)","Remove {p} from the game? Everything they own goes back to the bank.":"{p} oyundan \xE7\u0131kar\u0131ls\u0131n m\u0131? Sahip oldu\u011Fu her \u015Fey bankaya d\xF6ner.","Remove {p} from the room?":"{p} odadan \xE7\u0131kar\u0131ls\u0131n m\u0131?",Rent:"Kira","Rent exemption":"Kira muafiyeti","Rent share":"Kira pay\u0131","Rents, fares and taxes are up this much":"Kiralar, biletler ve vergiler bu kadar artt\u0131","Rents, fares and taxes just went up.":"Kiralar, biletler ve vergiler az \xF6nce artt\u0131.","Reopen it":"Yeniden a\xE7","Reopening room {code}\u2026":"{code} odas\u0131 yeniden a\xE7\u0131l\u0131yor\u2026","Reset the camera":"Kameray\u0131 s\u0131f\u0131rla","Resign from the game":"Oyundan \xE7ekil",Ride:"Bin","Ride or stay first":"\xD6nce binin ya da kal\u0131n","Ride {line} on to {tile}?":"{line} ile {tile} karesine binilsin mi?","Roll again":"Bir daha at","Roll first":"\xD6nce zar at\u0131n","Roll for doubles":"\xC7ift i\xE7in at","Roll the dice":"Zar at",Room:"Oda","Room name (optional)":"Oda ad\u0131 (iste\u011Fe ba\u011Fl\u0131)","Rooms are opened by the host here":"Burada odalar\u0131 ev sahibi a\xE7ar",Rules:"Kurallar","SOLD!":"SATILDI!","Sell a floor (+{amt})":"Bir kat sat (+{amt})","Sell evenly across the set":"Setten e\u015Fit sat\u0131n","Sell the buildings on this set first":"\xD6nce bu setteki binalar\u0131 sat\u0131n","Sell the buildings on {group} before trading {tile}":"{tile} takas\u0131ndan \xF6nce {group} grubundaki binalar\u0131 sat\u0131n","Send counter-offer":"Kar\u015F\u0131 teklif g\xF6nder","Send offer":"Teklif g\xF6nder","Sent here? Roll doubles, pay {amt} or use a card to get out. Otherwise just visiting.":"Buraya m\u0131 d\xFC\u015Ft\xFCn\xFCz? \xC7\u0131kmak i\xE7in \xE7ift at\u0131n, {amt} \xF6deyin ya da kart kullan\u0131n. Aksi halde sadece ziyaret.","Serverless: the room is hosted in the creator\u2019s browser and players connect directly (WebRTC). The host should keep the tab open \u2013 reloading it brings the room back.":"Sunucusuz: oda, a\xE7an ki\u015Finin taray\u0131c\u0131s\u0131nda bar\u0131nd\u0131r\u0131l\u0131r ve oyuncular do\u011Frudan ba\u011Flan\u0131r (WebRTC). Ev sahibi sekmeyi a\xE7\u0131k tutmal\u0131 \u2013 yenilemek oday\u0131 geri getirir.",Sets:"Setler","Share\u2026":"Payla\u015F\u2026","Shops (caf\xE9, restaurant, carpet shop, mall, car dealer) charge the dice times a multiplier \u2013 the more shops the owner has, the bigger it gets.":"D\xFCkk\xE2nlar (kafe, restoran, hal\u0131c\u0131, AVM, oto galeri) zar\u0131n bir kat\u0131 kadar kira al\u0131r \u2013 sahibinin d\xFCkk\xE2n\u0131 artt\u0131k\xE7a kat da b\xFCy\xFCr.","Show in the room list":"Oda listesinde g\xF6ster","Show this room in the room list":"Bu oday\u0131 oda listesinde g\xF6ster","Someone with a seat is offline":"Koltu\u011Fu olan biri \xE7evrimd\u0131\u015F\u0131","Sound off":"Ses kapal\u0131","Sound on":"Ses a\xE7\u0131k",Spaces:"Kareler","Start the game":"Oyunu ba\u015Flat","Start toll":"Ba\u015Flang\u0131\xE7 ge\xE7i\u015F \xFCcreti","Starting cash":"Ba\u015Flang\u0131\xE7 paras\u0131",Stay:"Kal","Still in":"H\xE2l\xE2 i\xE7eride","Switch camera (F2) \u2013 drag to turn, right-drag or shift-drag to pan, arrow keys pan, wheel zooms":"Kameray\u0131 de\u011Fi\u015Ftir (F2) \u2013 s\xFCr\xFCkleyerek d\xF6nd\xFCr, sa\u011F tu\u015F ya da shift ile kayd\u0131r, ok tu\u015Flar\u0131 kayd\u0131r\u0131r, tekerlek yak\u0131nla\u015Ft\u0131r\u0131r",TV:"TV","Take a seat":"Otur","Take turns rolling two dice and moving round the city. Buy the spaces you land on. Own a whole colour set to double its rent and build floors \u2013 then a tower \u2013 on it. Land on someone else\u2019s space and you pay them rent. Run out of money and you are out; the last player standing wins.":"S\u0131rayla iki zar at\u0131p \u015Fehirde ilerleyin. Geldi\u011Finiz kareleri sat\u0131n al\u0131n. Bir renk setinin tamam\u0131na sahip olunca kiras\u0131 ikiye katlan\u0131r ve \xFCzerine katlar \u2013 sonra bir plaza \u2013 dikebilirsiniz. Ba\u015Fkas\u0131n\u0131n karesine gelirseniz kira \xF6dersiniz. Paran\u0131z biterse oyundan \xE7\u0131kars\u0131n\u0131z; ayakta kalan son oyuncu kazan\u0131r.","Taxes and fines go into a pot on {tile}":"Vergiler ve cezalar {tile} karesinde bir kumbaraya gider","Tear up an existing clause as part of this deal":"Bu anla\u015Fmayla mevcut bir maddeyi y\u0131rt","Tear up clause #{id}":"#{id} numaral\u0131 maddeyi y\u0131rt",Test:"Dene","That offer is gone":"O teklif art\u0131k yok","That player is out of the game":"O oyuncu oyun d\u0131\u015F\u0131","The AI plays for {p} until they come back":"{p} d\xF6nene kadar yerine yapay zek\xE2 oynuyor","The clock has run out \u2013 this is the last round!":"S\xFCre doldu \u2013 bu son tur!","The clock ran out \u2013 the highest net worth wins.":"S\xFCre doldu \u2013 en y\xFCksek net de\u011Fer kazan\u0131r.","The connection broker did not answer":"Ba\u011Flant\u0131 arac\u0131s\u0131 yan\u0131t vermedi","The first time, about 400 MB is downloaded from Hugging Face and kept by your browser. A graphics card (WebGPU) makes it fast; without one it still works, a little slower.":"\u0130lk seferde Hugging Face'ten yakla\u015F\u0131k 400 MB indirilir ve taray\u0131c\u0131n\u0131zda saklan\u0131r. Ekran kart\u0131 (WebGPU) h\u0131zland\u0131r\u0131r; olmasa da \xE7al\u0131\u015F\u0131r, biraz daha yava\u015F.","The game begins!":"Oyun ba\u015Fl\u0131yor!","The game begins: {list}.":"Oyun ba\u015Fl\u0131yor: {list}.","The game clock: when it runs out, the round is finished and the highest net worth wins.":"Oyun saati: s\xFCre dolunca tur tamamlan\u0131r ve en y\xFCksek net de\u011Fer kazan\u0131r.","The game has not started":"Oyun ba\u015Flamad\u0131","The game is not running":"Oyun s\xFCrm\xFCyor","The host can start a new game.":"Ev sahibi yeni bir oyun ba\u015Flatabilir.","The host is away \u2013 reconnecting\u2026":"Ev sahibi yok \u2013 yeniden ba\u011Flan\u0131yor\u2026","The host removed you from this room":"Ev sahibi sizi bu odadan \xE7\u0131kard\u0131","The host starts the game.":"Oyunu ev sahibi ba\u015Flat\u0131r.","The narrator":"Anlat\u0131c\u0131","The narrator is ready.":"Anlat\u0131c\u0131 haz\u0131r.","The offer is empty":"Teklif bo\u015F","The pot holds {amt} \u2013 land here to take it.":"Kumbarada {amt} var \u2013 almak i\xE7in buraya gelin.","The room is full":"Oda dolu","The voice could not start: {why}":"Ses ba\u015Flat\u0131lamad\u0131: {why}","There is nothing to ride":"Binilecek bir \u015Fey yok","They pay you a cut of the rent they collect":"Toplad\u0131klar\u0131 kiradan size pay \xF6derler","They pay you each time they pass Start":"Ba\u015Flang\u0131\xE7'tan her ge\xE7tiklerinde size \xF6derler","They refund the rent you pay them":"Onlara \xF6dedi\u011Finiz kiray\u0131 iade ederler","This room was opened in another tab":"Bu oda ba\u015Fka bir sekmede a\xE7\u0131ld\u0131","Three doubles in a row \u2013 speeding!":"\xDCst \xFCste \xFC\xE7 \xE7ift \u2013 h\u0131z s\u0131n\u0131r\u0131 a\u015F\u0131ld\u0131!","Time's up for {p} \u2013 no decision, it goes to auction.":"{p} i\xE7in s\xFCre doldu \u2013 karar yok, a\xE7\u0131k art\u0131rmaya \xE7\u0131k\u0131yor.","Time's up for {p} \u2013 no decision, they pass.":"{p} i\xE7in s\xFCre doldu \u2013 karar yok, ge\xE7iyor.","Time's up for {p} \u2013 the dice roll themselves.":"{p} i\xE7in s\xFCre doldu \u2013 zarlar kendili\u011Finden at\u0131l\u0131yor.","Time's up for {p} \u2013 they stay where they are.":"{p} i\xE7in s\xFCre doldu \u2013 oldu\u011Fu yerde kal\u0131yor.","Time's up for {p}.":"{p} i\xE7in s\xFCre doldu.","Time's up \u2013 it goes to auction":"S\xFCre doldu \u2013 a\xE7\u0131k art\u0131rmaya \xE7\u0131k\u0131yor","Time's up \u2013 rolling for you":"S\xFCre doldu \u2013 zarlar sizin i\xE7in at\u0131l\u0131yor","Time's up \u2013 turn over":"S\xFCre doldu \u2013 tur bitti","Time's up \u2013 you stay":"S\xFCre doldu \u2013 kal\u0131yorsunuz","Time's up! {p} wins with a net worth of {amt}.":"S\xFCre doldu! {p}, {amt} net de\u011Ferle kazand\u0131.","Too many rooms open \u2013 try again later":"\xC7ok fazla a\xE7\u0131k oda var \u2013 sonra tekrar deneyin",Top:"\xDCstten",Tower:"Plaza",Trade:"Takas",Trading:"Takas","Turn off":"Kapat","Turn on":"A\xE7","Turn on the narrator (\u{1F399}) and a voice comments on the game live, in your language. The voice runs in your browser (Supertonic 3); the first time it downloads about 400 MB, then it is kept.":"Anlat\u0131c\u0131y\u0131 a\xE7\u0131n (\u{1F399}), bir ses oyunu canl\u0131 olarak kendi dilinizde yorumlas\u0131n. Ses taray\u0131c\u0131n\u0131zda \xE7al\u0131\u015F\u0131r (Supertonic 3); ilk seferde yakla\u015F\u0131k 400 MB indirir, sonra saklan\u0131r.","Turn timer":"Tur s\xFCresi","Unknown action":"Bilinmeyen hamle","Unmortgage the whole set first":"\xD6nce setin t\xFCm ipoteklerini kald\u0131r\u0131n","Use {card}":"{card} kullan",Voice:"Ses","Wait for the auction to finish":"A\xE7\u0131k art\u0131rman\u0131n bitmesini bekleyin","Waiting for players ({n}/{m})":"Oyuncular bekleniyor ({n}/{m})","Waiting\u2026":"Bekleniyor\u2026","Watch instead":"\u0130zle","When it runs out the dice roll themselves, an undecided space goes to auction, a ride is declined and the turn ends. Building or trading restarts it; others can trade any time.":"S\xFCre dolunca zarlar kendili\u011Finden at\u0131l\u0131r, karar verilmeyen kare a\xE7\u0131k art\u0131rmaya \xE7\u0131kar, yolculuk reddedilir ve tur biter. \u0130n\u015Faat ya da takas s\xFCreyi yeniden ba\u015Flat\u0131r; di\u011Ferleri istedi\u011Fi zaman takas yapabilir.","When it runs out the round is finished and the highest net worth wins.":"S\xFCre dolunca tur tamamlan\u0131r ve en y\xFCksek net de\u011Fer kazan\u0131r.",Withdraw:"Geri \xE7ek",You:"Siz","You already rolled":"Zaten zar att\u0131n\u0131z","You are hosting this room \u2013 leaving closes it for everyone. Leave?":"Bu odan\u0131n ev sahibisiniz \u2013 ayr\u0131l\u0131rsan\u0131z oda herkes i\xE7in kapan\u0131r. Ayr\u0131l\u0131yor musunuz?","You are in {tile} (try {n} of 3).":"{tile} i\xE7indesiniz (3 denemeden {n}.).","You are not in debt":"Borcunuz yok","You are not playing":"Oynam\u0131yorsunuz","You are out of the game \u2013 watching.":"Oyun d\u0131\u015F\u0131s\u0131n\u0131z \u2013 izliyorsunuz.","You are watching this game.":"Bu oyunu izliyorsunuz.","You are {amt} short \u2013 raise money before your turn.":"{amt} eksi\u011Finiz var \u2013 s\u0131ran\u0131z gelmeden para bulun.","You are {amt} short. Mortgage, sell floors or trade \u2013 or give up.":"{amt} eksi\u011Finiz var. \u0130potek edin, kat sat\u0131n ya da takas yap\u0131n \u2013 ya da pes edin.","You can only build on your own districts":"Yaln\u0131zca kendi semtlerinize in\u015Fa edebilirsiniz","You can only pay the fine before you roll":"Cezay\u0131 ancak zar atmadan \xF6nce \xF6deyebilirsiniz","You can only use it before you roll":"Ancak zar atmadan \xF6nce kullanabilirsiniz","You give":"Siz verin","You hand over cash now; they pay it back each turn":"\u015Eimdi nakit verirsiniz; her tur geri \xF6derler","You have no such card":"B\xF6yle bir kart\u0131n\u0131z yok","You have {amt}":"Paran\u0131z: {amt}","You hold the highest bid":"En y\xFCksek teklif sizde","You lead!":"\xD6ndesiniz!","You need {amt}":"{amt} gerekiyor","You only have {amt}":"Yaln\u0131zca {amt} paran\u0131z var","You own no spaces yet. Land on one and buy it, win an auction, or trade for one.":"Hen\xFCz kareniz yok. Birine gelip sat\u0131n al\u0131n, bir a\xE7\u0131k art\u0131rma kazan\u0131n ya da takasla al\u0131n.","You were hosting room {code}.":"{code} odas\u0131n\u0131n ev sahibiydiniz.","You win!":"Kazand\u0131n\u0131z!","Your name":"Ad\u0131n\u0131z","Your offer to {p}":"{p} i\xE7in teklifiniz","Your offer was declined":"Teklifiniz reddedildi","Your turn":"S\u0131ra sizde","Your turn \u2013 click the dice or the button.":"S\u0131ra sizde \u2013 zarlara ya da d\xFC\u011Fmeye t\u0131klay\u0131n.","Your turn!":"S\u0131ra sende!","any space":"herhangi bir kare","any {group} space":"{group} grubundan bir kare",anyone:"herhangi biri","at most":"en fazla",bankrupt:"iflas etti","each time":"her seferinde","ends after round {n}":"{n}. turdan sonra biter",finished:"bitti",for:"s\xFCre:","full set":"tam set","give 300 now; they pay you 60 at the start of each of their turns, 6 times.":"\u015Fimdi 300 verin; her turlar\u0131n\u0131n ba\u015F\u0131nda size 60 \xF6derler, 6 kez.","has {amt}":"paras\u0131 {amt}","in debt":"bor\xE7lu","in {tile}":"{tile} i\xE7inde","last round":"son tur","list {amt}":"liste {amt}",me:"ben",mortgaged:"ipotekli","no bids":"teklif yok","no rent":"kira yok",nothing:"hi\xE7bir \u015Fey",off:"kapal\u0131",offline:"\xE7evrimd\u0131\u015F\u0131",on:"i\xE7in:","owned by {p}":"sahibi {p}","paid {n}\xD7":"{n} kez \xF6dendi",pay:"\xF6der",playing:"oynan\u0131yor","rent now {amt}":"\u015Fu anki kira {amt}","rent {n}\xD7 dice":"kira zar\u0131n {n} kat\u0131",rounds:"tur","since round {n}":"{n}. turdan beri",someone:"biri","still for sale":"h\xE2l\xE2 sat\u0131l\u0131k","the bank":"banka","they pay you 20 whenever they pass Start.":"Ba\u015Flang\u0131\xE7'tan her ge\xE7tiklerinde size 20 \xF6derler.","they pay you 25% of every rent they collect on a set for 10 rounds.":"10 tur boyunca bir setten toplad\u0131klar\u0131 her kiran\u0131n %25'ini size \xF6derler.","they refund 100% of the rent you pay them on one space.":"bir karede onlara \xF6dedi\u011Finiz kiran\u0131n %100'\xFCn\xFC iade ederler.",times:"kez",to:"al\u0131c\u0131:","token:anchor":"\xE7apa","token:boat":"tekne","token:cat":"sokak kedisi","token:fishboat":"bal\u0131k-ekmek teknesi","token:gem":"m\xFCcevher","token:gull":"mart\u0131","token:kite":"u\xE7urtma","token:lantern":"fener","token:simitcart":"simit arabas\u0131","token:taxi":"sar\u0131 taksi","token:tea":"\xE7ay barda\u011F\u0131","token:tram":"tramvay",tower:"plaza",waiting:"bekliyor",watching:"izliyor","worth {amt}":"de\u011Feri {amt}",you:"siz","{amt} so far":"\u015Fimdiye kadar {amt}","{n} floors":"{n} kat","{n} left":"{n} kald\u0131","{n} lines":"{n} hat","{n} minutes":"{n} dakika","{n} online":"{n} \xE7evrimi\xE7i","{n} owned":"{n} tane","{n} seconds":"{n} saniye","{n} spaces":"{n} kare","{n}/{m} seated":"{n}/{m} oturdu","{n}\xD7 dice":"zar\u0131n {n} kat\u0131","{p} accepts {q}'s offer.":"{p}, {q} teklifini kabul etti.","{p} bids {amt}.":"{p}: {amt} teklif.","{p} builds a floor on {tile}.":"{p}, {tile} \xFCzerine bir kat \xE7\u0131kt\u0131.","{p} builds a tower on {tile}.":"{p}, {tile} \xFCzerine bir plaza dikti.","{p} buys {tile} for {amt}.":"{p}, {tile} karesini {amt} kar\u015F\u0131l\u0131\u011F\u0131nda ald\u0131.","{p} doesn't have that card":"{p} oyuncusunda o kart yok","{p} doesn't have {amt}":"{p} oyuncusunda {amt} yok","{p} draws {deck}: \u201C{card}\u201D":"{p}, {deck} \xE7ekti: \u201C{card}\u201D","{p} gives":"{p} verir","{p} goes bankrupt \u2013 {q} takes everything.":"{p} iflas etti \u2013 her \u015Fey {q} oyuncusuna ge\xE7ti.","{p} goes bankrupt.":"{p} iflas etti.","{p} is just visiting {tile}.":"{p} sadece ziyarette: {tile}.","{p} is out of the game":"{p} oyun d\u0131\u015F\u0131","{p} is removed from the game.":"{p} oyundan \xE7\u0131kar\u0131ld\u0131.","{p} is sent to {tile}.":"{p} do\u011Fruca {tile}.","{p} lands on their own {tile}.":"{p} kendi karesine geldi: {tile}.","{p} lands on {tile} \u2013 for sale at {amt}.":"{p}, {tile} karesine geldi \u2013 sat\u0131l\u0131k: {amt}.","{p} lands on {tile} \u2013 mortgaged, no rent.":"{p}, {tile} karesine geldi \u2013 ipotekli, kira yok.","{p} lands on {tile}.":"{p}, {tile} karesine geldi.","{p} leaves the game \u2013 {q} takes everything.":"{p} oyundan ayr\u0131ld\u0131 \u2013 her \u015Fey {q} oyuncusuna ge\xE7ti.","{p} leaves the game.":"{p} oyundan ayr\u0131ld\u0131.","{p} makes {q} an offer.":"{p}, {q} oyuncusuna teklif yapt\u0131.","{p} mortgages {tile} for {amt}.":"{p}, {tile} karesini {amt} kar\u015F\u0131l\u0131\u011F\u0131nda ipotek etti.","{p} no longer owns {tile}":"{tile} art\u0131k {p} oyuncusunun de\u011Fil","{p} passes Start and collects {amt}.":"{p} Ba\u015Flang\u0131\xE7'tan ge\xE7ti ve {amt} ald\u0131.","{p} passes on {tile}.":"{p}, {tile} karesini almad\u0131.","{p} pays off the mortgage on {tile}.":"{p}, {tile} \xFCzerindeki ipote\u011Fi kald\u0131rd\u0131.","{p} pays {amt} and leaves {tile}.":"{p} {amt} \xF6dedi ve \xE7\u0131kt\u0131: {tile}.","{p} pays {amt} for {tile}.":"{p}, {tile} i\xE7in {amt} \xF6dedi.","{p} pays {q} {amt} at {tile}. {quip}":"{p}, {tile} i\xE7in {q} oyuncusuna {amt} \xF6dedi. {quip}","{p} pays {q} {amt} rent for {tile}.":"{p}, {tile} i\xE7in {q} oyuncusuna {amt} kira \xF6dedi.","{p} rides {tile} to {tile2} for {amt}.":"{p}, {amt} \xF6deyip {tile} ile {tile2} karesine gitti.","{p} rides {tile} to {tile2} on their own line.":"{p}, kendi hatt\u0131 {tile} ile {tile2} karesine gitti.","{p} rolls {d1}+{d2} \u2013 doubles!":"{p}: {d1}+{d2} \u2013 \xE7ift!","{p} rolls {d1}+{d2} \u2013 doubles, out of {tile}!":"{p}: {d1}+{d2} \u2013 \xE7ift, \xE7\u0131k\u0131\u015F: {tile}!","{p} rolls {d1}+{d2} \u2013 stays in {tile}.":"{p}: {d1}+{d2} \u2013 i\xE7eride kal\u0131yor: {tile}.","{p} rolls {d1}+{d2} \u2013 third try, pays {amt} and leaves {tile}.":"{p}: {d1}+{d2} \u2013 \xFC\xE7\xFCnc\xFC deneme, {amt} \xF6dedi ve \xE7\u0131kt\u0131: {tile}.","{p} rolls {d1}+{d2}.":"{p}: {d1}+{d2}.","{p} sells a floor on {tile}.":"{p}, {tile} \xFCzerinden bir kat satt\u0131.","{p} sent you an offer":"{p} size bir teklif g\xF6nderdi","{p} takes a break on {tile}.":"{p} mola veriyor: {tile}.","{p} takes the pot on {tile}: {amt}!":"{p}, {tile} kumbaras\u0131n\u0131 ald\u0131: {amt}!","{p} turns down {q}'s offer.":"{p}, {q} teklifini reddetti.","{p} uses a card to leave {tile}.":"{p} kart\u0131n\u0131 kulland\u0131 ve \xE7\u0131kt\u0131: {tile}.","{p} wins the auction for {tile} at {amt}.":"A\xE7\u0131k art\u0131rmay\u0131 {p} kazand\u0131: {tile}, {amt}.","{p} wins the auction: {tile} for {amt}":"A\xE7\u0131k art\u0131rmay\u0131 {p} kazand\u0131: {tile}, {amt}","{p} wins the game!":"{p} oyunu kazand\u0131!","{p} wins!":"{p} kazand\u0131!","{p}'s table":"{p} masas\u0131","{p}'s turn":"S\u0131ra: {p}","{tile} goes to auction":"{tile} a\xE7\u0131k art\u0131rmada","{tile} goes up for auction.":"{tile} a\xE7\u0131k art\u0131rmaya \xE7\u0131kt\u0131.","{tile} is for sale.":"{tile} sat\u0131l\u0131k.",\u0130stanbul:"\u0130stanbul","\u2014 Round {round} \u2014":"\u2014 {round}. tur \u2014","\u2014 payments the game makes by itself whenever something happens":"\u2014 bir \u015Fey oldu\u011Funda oyunun kendili\u011Finden yapt\u0131\u011F\u0131 \xF6demeler"}});function pd(i){xt=i==="tr"?"tr":"en";try{localStorage.setItem("parcel.lang",xt)}catch{}typeof document<"u"&&(document.documentElement.lang=xt)}function M(i,e){let t=xt==="tr"&&wl[i]!==void 0?wl[i]:i;return e&&(t=t.replace(/\{(\w+)\}/g,(n,r)=>e[r]===void 0||e[r]===null?"":String(e[r]))),t}function md(i,e=xt){if(i=Math.round(Math.abs(i)),e==="tr"){if(i===0)return"s\u0131f\u0131r";let a=l=>{let c=Math.floor(l/100),h=l%100;return[c?c===1?"y\xFCz":`${dd[c]} y\xFCz`:"",h>=10?Wf[Math.floor(h/10)]:"",h%10?dd[h%10]:""].filter(Boolean).join(" ")},s=Math.floor(i/1e3),o=i%1e3;return[s?s===1?"bin":`${a(s)} bin`:"",o?a(o):""].filter(Boolean).join(" ")}if(i<20)return As[i];let t=a=>{let s=Math.floor(a/100),o=a%100,l=o===0?"":o<20?As[o]:`${Vf[Math.floor(o/10)]}${o%10?`-${As[o%10]}`:""}`;return[s?`${As[s]} hundred`:"",l].filter(Boolean).join(s&&l?" and ":" ")},n=Math.floor(i/1e3),r=i%1e3;return[n?`${t(n)} thousand`:"",r?t(r):""].filter(Boolean).join(r&&r<100&&n?" and ":" ")}var Hf,xt,Gf,Sl,As,Vf,dd,Wf,Pa=Gi(()=>{ud();Hf=()=>{try{let e=localStorage.getItem("parcel.lang");if(e==="tr"||e==="en")return e}catch{}return(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]).some(e=>/^tr\b/i.test(e))?"tr":"en"},xt=typeof navigator<"u"?Hf():"en";typeof document<"u"&&(document.documentElement.lang=xt);Gf=()=>xt==="tr"?"tr-TR":"en-GB",Sl=i=>Math.round(i).toLocaleString(Gf()),As=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],Vf=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],dd=["s\u0131f\u0131r","bir","iki","\xFC\xE7","d\xF6rt","be\u015F","alt\u0131","yedi","sekiz","dokuz"],Wf=["","on","yirmi","otuz","k\u0131rk","elli","altm\u0131\u015F","yetmi\u015F","seksen","doksan"]});var xd={};Lf(xd,{L:()=>ct,SIMIT:()=>Xi,TOKEN_GLYPH:()=>kn,act:()=>st,app:()=>N,clauseText:()=>Qn,countdown:()=>Rs,errorText:()=>kl,fill:()=>Ft,groupName:()=>Mi,h:()=>_,inviteLink:()=>Yi,isHost:()=>qi,logText:()=>Cl,map:()=>ht,mapId:()=>yd,me:()=>Vn,memberOf:()=>vd,modal:()=>Pn,money:()=>Ee,nameOf:()=>Ia,names:()=>El,playerOf:()=>on,put:()=>Ot,rerender:()=>jf,roomNow:()=>Al,send:()=>Ze,setRender:()=>Tl,t:()=>M,tileName:()=>pt,toast:()=>Ct,worded:()=>Rl,youNames:()=>La});function Ze(i){N.link&&!N.link.closed&&N.link.send(i)}function _(i,e,...t){let[n,...r]=i.split("."),a=document.createElement(n||"div");r.length&&(a.className=r.join(" ")),e&&(typeof e!="object"||e instanceof Node||Array.isArray(e))&&(t.unshift(e),e=null);for(let[o,l]of Object.entries(e||{}))if(!(l==null||l===!1))if(o.startsWith("on"))a.addEventListener(o.slice(2),l);else if(o==="style"&&typeof l=="object")for(let[c,h]of Object.entries(l))c.startsWith("--")?a.style.setProperty(c,h):a.style[c]=h;else o==="class"?a.className+=(a.className?" ":"")+l:o in a&&typeof l!="string"?a[o]=l:a.setAttribute(o,l===!0?"":l);let s=o=>{o==null||o===!1||(Array.isArray(o)?o.forEach(s):a.appendChild(o instanceof Node?o:document.createTextNode(String(o))))};return t.forEach(s),a}function Ot(i,...e){for(let t of e.flat(1/0))t!=null&&t!==!1&&i.append(t);return i}function Ft(i,...e){return i.replaceChildren(),Ot(i,...e)}function Ct(i,e=""){let t=document.getElementById("toasts"),n=_("div.toast",{class:e},i);t.appendChild(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),3700)}function fd(i){let e=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),t=[];for(let n=e.nextNode();n;n=e.nextNode())n.nodeValue.includes(Xi)&&t.push(n);for(let n of t){let r=n.nodeValue.split(Xi),a=document.createDocumentFragment();r.forEach((s,o)=>{s&&a.append(s),o<r.length-1&&a.append(_("i.sm",{title:"simit","aria-label":"simit"}))}),n.replaceWith(a)}}function Xf(i,e,t,n){if(i.startsWith("tile"))return pt(e,n);if(i==="group")return Mi(e,n);if(i==="amt")return Ee(e,n);if(i==="deck")return ct((n.decks[e]||{}).name);if(i==="card"){let r=n.decks[t.deck];return r&&r.cards[e]?ct(r.cards[e].text):""}return i==="quip"?ct((n.tiles[e]||{}).quip):i==="clause"?Qn(e,El(),null,null,n):typeof e=="number"?Sl(e):e}function Rl(i,e={},t=ht()){let n={};for(let[r,a]of Object.entries(e||{}))n[r]=Xf(r,a,e,t);return M(i,n)}function Qn(i,e=La(),t=null,n=null,r=ht()){let a=hd(r,i,e,t,n,xt,l=>Ee(l,r));if(xt!=="en")return a;let s={pays:"pay",starts:"start",lands:"land",passes:"pass",buys:"buy",builds:"build",rolls:"roll",is:"are",draws:"draw"},o=a.replace(/\byou (pays|starts|lands|passes|buys|builds|rolls|is|draws)\b/g,(l,c)=>`you ${s[c]}`);return o.charAt(0).toUpperCase()+o.slice(1)}function Yi(i=N.code){let e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",i),new URLSearchParams(location.search).has("p2p")&&e.searchParams.set("p2p","1"),e.toString()}function Pn(i,{onclose:e,wide:t}={}){let n=document.getElementById("modal"),r=()=>{a.remove(),e&&e()},a=_("div.modal-wrap",{onpointerdown:s=>{s.target===a&&r()}},_("div.modal",{class:t?"wide":""},_("button.x",{onclick:r,title:M("Close")},"\u2715"),i));return n.appendChild(a),{el:a,close:r}}function Rs(i,e,t="text"){return t==="bar"?_("div.timerbar",{"data-deadline":i,"data-total":e},_("i")):_("span.cd",{"data-deadline":i,"data-total":e})}function qf(){let i=Al();for(let e of document.querySelectorAll("[data-deadline]")){let t=Math.max(0,Number(e.dataset.deadline)-i),n=Math.min(1,t/Math.max(1,Number(e.dataset.total)));if(e.classList.contains("timerbar"))e.firstChild.style.width=`${n*100}%`,e.classList.toggle("low",t<2500);else if(e.classList.contains("ring")){let r=e.querySelector(".ring-fg");r&&(r.style.strokeDashoffset=String(282.7*(1-n)));let a=e.querySelector(".ring-t");a&&(a.textContent=Math.ceil(t/1e3)),e.classList.toggle("low",t<3500)}else if(e.classList.contains("clock")){let r=Math.ceil(t/1e3);e.textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,e.classList.toggle("low",t<5*6e4)}else e.textContent=` ${Math.ceil(t/1e3)}`}}var N,st,gd,Tl,jf,yd,ht,ct,pt,Mi,Xi,Ee,on,Vn,vd,qi,Ia,El,La,kn,Al,Cl,kl,$i=Gi(()=>{bn();Es();Pa();N={mode:null,link:null,host:null,who:"",name:"",code:"",inRoom:!1,room:null,game:null,you:"",clockSkew:0,status:"",rooms:null,homeError:""};st=i=>Ze({t:"act",a:i}),gd=()=>{},Tl=i=>{gd=i},jf=()=>gd();yd=()=>N.game?N.game.map:N.room?N.room.settings.map:Ca,ht=()=>Bt(yd()),ct=i=>sn(i,xt),pt=(i,e=ht())=>{let t=e.tiles[i];return t?ct(t.name||(e.decks[t.deck]||{}).name):""},Mi=(i,e=ht())=>ct((e.groups[i]||{}).name),Xi="\uE000",Ee=(i,e=ht())=>{let t=Math.round(i),n=`${t<0?"\u2212":""}${Sl(Math.abs(t))}`;return e.currency==="simit"?`${n}\u2009${Xi}`:`$${n}`};if(typeof MutationObserver<"u"&&typeof document<"u"){let i=new MutationObserver(t=>{for(let n of t){if(n.type==="characterData"){n.target.nodeValue.includes(Xi)&&fd(n.target.parentNode);continue}for(let r of n.addedNodes)(r.nodeType===3?r.nodeValue.includes(Xi):r.nodeType===1&&r.textContent.includes(Xi))&&fd(r.nodeType===3?r.parentNode:r)}}),e=()=>i.observe(document.body,{childList:!0,subtree:!0,characterData:!0});document.body?e():addEventListener("DOMContentLoaded",e)}on=i=>N.game?N.game.players.find(e=>e.id===i):null,Vn=()=>on(N.you),vd=i=>N.room?N.room.members.find(e=>e.id===i):null,qi=()=>!!N.room&&N.room.host===N.you,Ia=i=>(on(i)||vd(i)||{}).name||M("someone"),El=()=>Object.fromEntries([...N.room?N.room.members:[],...N.game?N.game.players:[]].map(i=>[i.id,i.name])),La=()=>{let i=El();return i[N.you]=M("you"),i},kn={boat:"\u26F5",kite:"\u{1FA81}",lantern:"\u{1F3EE}",anchor:"\u2693",tram:"\u{1F68B}",gem:"\u{1F48E}",simitcart:"\u{1F96F}",cat:"\u{1F408}",gull:"\u{1F426}",taxi:"\u{1F695}",tea:"\u{1F375}",fishboat:"\u{1F41F}"},Al=()=>Date.now()+N.clockSkew;Cl=i=>i.k?Rl(i.k,i.v):i.text||"",kl=i=>i.k?Rl(i.k,i.v):M(i.text||"");typeof setInterval<"u"&&typeof document<"u"&&setInterval(qf,100)});$i();Pa();var Rr=class{constructor(){this.onmessage=null,this.onclose=null,this.closed=!1}deliver(e){!this.closed&&this.onmessage&&this.onmessage(e)}ended(){this.closed||(this.closed=!0,this.onclose&&this.onclose())}},Pl=class extends Rr{constructor(e){super(),this.ws=e,e.onmessage=t=>{try{this.deliver(JSON.parse(t.data))}catch{}},e.onclose=()=>this.ended(),e.onerror=()=>{}}send(e){this.ws.readyState===1&&this.ws.send(JSON.stringify(e))}close(){this.closed=!0;try{this.ws.close()}catch{}}};function Il(i=2500){return new Promise(e=>{let t;try{let r=location.protocol==="https:"?"wss:":"ws:";t=new WebSocket(`${r}//${location.host}${location.pathname.replace(/[^/]*$/,"")}ws`)}catch{e(null);return}let n=setTimeout(()=>{try{t.close()}catch{}e(null)},i);t.onopen=()=>{clearTimeout(n),e(new Pl(t))},t.onerror=()=>{clearTimeout(n),e(null)},t.onclose=()=>{clearTimeout(n),e(null)}})}function _d(){let i="";try{i=sessionStorage.getItem("parcel.who")||""}catch{}if(!/^[a-z0-9]{12,32}$/.test(i)){let e=new Uint8Array(16);crypto.getRandomValues(e),i=Array.from(e,t=>"abcdefghijkmnpqrstuvwxyz23456789"[t&31]).join("");try{sessionStorage.setItem("parcel.who",i)}catch{}}return i}bn();Es();var Cr={map:Ca,cash:1500,auctions:!0,jackpot:!1,timer:5,inflation:!0,clock:60},zl=[1e3,1500,2e3,2500],Bl=[0,5,10,15,30,60],Fl=[0,30,45,60],Ji=2,ti=6,Yf=15e3,$f=6e3,bd=3,Md=150;function Na(i){let e=i&&typeof i=="object"?i:{},t=(n,r,a)=>n===void 0?a:r.includes(Number(n))?Number(n):a;return{map:Vi[e.map]?e.map:Cr.map,cash:t(e.cash,zl,Cr.cash),auctions:e.auctions===void 0?Cr.auctions:!!e.auctions,jackpot:!!e.jackpot,timer:t(e.timer,Bl,Cr.timer),inflation:e.inflation===void 0?Cr.inflation:!!e.inflation,clock:t(e.clock,Fl,Cr.clock)}}function Ed(i){i.seed=i.seed+1831565813>>>0;let e=i.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}var wd=i=>1+Math.floor(Ed(i)*6);function Ll(i,e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Ed(i)*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Ad(i,e,t=Math.random()*2**32>>>0,n=null){let r=Na(e),a=Bt(r.map),s={v:2,map:a.id,seed:t>>>0,settings:r,phase:"play",winner:null,round:1,turn:0,dice:[1,1],t:null,players:[],props:{},auction:null,trades:[],contracts:[],nextId:1,pot:0,infl:1,inflSteps:0,startedAt:n,endsAt:n!=null&&r.clock?n+r.clock*6e4:null,lastRound:!1,decks:{},deckPos:{},log:[],seq:0};s.players=Ll(s,i.map(l=>({id:l.id,name:l.name,token:l.token,color:l.color,cash:r.cash,pos:0,inJail:!1,jailTurns:0,free:0,out:!1,debtTo:void 0})));for(let l of Object.keys(a.decks))s.decks[l]=Ll(s,a.decks[l].cards.map((c,h)=>h)),s.deckPos[l]=0;let o={s,events:[]};return Ue(o,"The game begins: {list}.",{list:s.players.map(l=>l.name).join(", ")}),Id(o),s}var ot=i=>Bt(i.map),Wt=(i,e)=>i.players.find(t=>t.id===e),Wn=i=>i.players[i.turn],Cs=i=>i.players.filter(e=>!e.out),Hl=i=>ot(i).tiles.length,pn=(i,e)=>Math.round(e*(i.infl||1));function Ue(i,e,t={}){let n=i.s;n.log.push({n:++n.seq,r:n.round,k:e,v:t}),n.log.length>Md&&n.log.splice(0,n.log.length-Md)}var ke=(i,e={})=>({k:i,v:e});function Zf(i,e,t={}){let n=ot(i);return e.replace(/\{(\w+)\}/g,(r,a)=>{let s=t[a];return a.startsWith("tile")?sn(n.tiles[s]&&(n.tiles[s].name||(n.decks[n.tiles[s].deck]||{}).name),"en"):a==="group"?sn((n.groups[s]||{}).name,"en"):s===void 0?"":String(s)})}function et(i,e,t=!1){i.events.push(e),t&&Kf(i,e)}function Rd(i){i&&i.cash>=0&&(i.debtTo=void 0)}function zt(i,e,t,n,r){let a=i.s;if(n=Math.floor(n),!(n>0))return 0;if(e==="pot")a.pot-=n;else if(e!==null){let s=Wt(a,e);s.cash-=n,s.cash<0&&(s.debtTo=t!==null&&t!=="pot"?t:null)}if(t==="pot")a.pot+=n;else if(t!==null){let s=Wt(a,t);s.cash+=n,Rd(s)}return et(i,{type:"pay",from:e,to:t,amount:n,reason:r}),n}var Zi=(i,e,t)=>i.props[t]&&i.props[t].owner===e,kr=(i,e)=>i.props[e]?i.props[e].level:0,Cd=(i,e,t)=>dt(ot(i),t).every(n=>Zi(i,e,n)),kd=(i,e)=>dt(ot(i),e).some(t=>kr(i,t)>0);function wi(i,e,t,n={}){let r=ot(i),a=r.tiles[e],s=i.props[e];if(!s||s.mortgaged)return 0;let o=0;if(a.kind==="lot")o=s.level>0?a.rents[s.level]:Cd(i,s.owner,a.group)?a.rents[0]*2:a.rents[0];else{let l=dt(r,a.group).filter(c=>Zi(i,s.owner,c)).length;a.kind==="transit"?o=r.transitRent[l]*(n.mult||1):a.kind==="utility"?o=(n.diceMult||r.utilityMult[l])*t:a.kind==="shop"&&(o=(n.diceMult||r.shopMult[l])*t)}return pn(i,o)}function ei(i,e){let t=Wt(i,e);if(!t||t.out)return 0;let n=ot(i),r=t.cash;for(let[a,s]of Object.entries(i.props)){if(s.owner!==e)continue;let o=n.tiles[a];r+=s.mortgaged?0:Jn(o),s.level&&(r+=s.level*n.groups[o.group].build/2)}return r}function Kf(i,e){let t=i.s;if(!t.contracts.length)return;let n=!1;for(let r of t.contracts){if(r.timesLeft===0||r.untilRound&&t.round>r.untilRound)continue;let a=cd(ot(t),r,e);if(a<=0)continue;let s=Wt(t,r.payer),o=Wt(t,r.payee);!s||!o||s.out||o.out||(zt(i,r.payer,r.payee,a,"contract"),r.fired++,r.paid+=a,r.timesLeft&&(r.timesLeft--,r.timesLeft===0&&(n=!0)),et(i,{type:"contract",id:r.id,from:r.payer,to:r.payee,amount:a}),Ue(i,"Clause #{id}: {p} pays {q} {amt}.",{id:r.id,p:s.name,q:o.name,amt:a}))}n&&Pd(i)}function Pd(i){let e=i.s;e.contracts=e.contracts.filter(t=>{let n=t.timesLeft===0||t.untilRound&&e.round>t.untilRound;return n&&(et(i,{type:"contractEnd",id:t.id}),Ue(i,"Clause #{id} between {p} and {q} has run its course.",{id:t.id,p:(Wt(e,t.payer)||{}).name,q:(Wt(e,t.payee)||{}).name})),!n})}function Id(i){let e=i.s,t=Wn(e);e.t={rolled:!1,doubles:0,again:!1,pending:null,rode:!1,rideFrom:null},et(i,{type:"turn",p:t.id},!0)}function Jf(i){let e=i.s,t=ot(e).inflation;if(!e.settings.inflation||!t||e.round<t.start||(e.round-t.start)%t.every)return;e.inflSteps++,e.infl=Math.round((1+t.step)**e.inflSteps*100)/100;let n=Math.round((e.infl-1)*100);et(i,{type:"inflation",step:e.inflSteps,pct:n}),Ue(i,"ENFLASYON! Rents, fares and taxes are now +{pct}%.",{pct:n})}function Ld(i){let e=i.s,t=e.players.length,n=!1,r=e.turn;for(let a=1;a<=t;a++){let s=(e.turn+a)%t;if(e.turn+a>=t&&(n=!0),!e.players[s].out){r=s;break}}if(n){if(e.lastRound){Qf(i);return}e.round++,Ue(i,"\u2014 Round {round} \u2014",{round:e.round}),Pd(i),Jf(i)}e.turn=r,Id(i)}function Qf(i){let e=i.s,t=Cs(e).sort((n,r)=>ei(e,r.id)-ei(e,n.id));e.phase="over",e.winner=t[0]?t[0].id:null,e.auction=null,t[0]&&(et(i,{type:"win",p:t[0].id,byClock:!0}),Ue(i,"Time's up! {p} wins with a net worth of {amt}.",{p:t[0].name,amt:ei(e,t[0].id)}))}function Ki(i,e,t,n={}){let r=i.s,a=Hl(r),s=ot(r),o=e.pos,l=((o+t)%a+a)%a;e.pos=l,et(i,{type:"move",p:e.id,from:o,to:l,steps:t,ride:n.ride||void 0}),t>0&&o+t>=a&&(zt(i,null,e.id,s.salary,"salary"),Ue(i,"{p} passes Start and collects {amt}.",{p:e.name,amt:s.salary}),et(i,{type:"passStart",p:e.id,amount:s.salary},!0)),eg(i,e,n)}function Gl(i,e){let t=i.s,n=ot(t).jailTile,r=e.pos;e.pos=n,e.inJail=!0,e.jailTurns=0,t.t&&Wn(t)===e&&(t.t.again=!1,t.t.rideFrom=null),et(i,{type:"move",p:e.id,from:r,to:n,steps:0,jump:!0}),Ue(i,"{p} is sent to {tile}.",{p:e.name,tile:n}),et(i,{type:"jail",p:e.id},!0)}function eg(i,e,t){let n=i.s,r=ot(n),a=e.pos,s=r.tiles[a];if(et(i,{type:"land",p:e.id,tile:a},!0),!e.out)if(Gn(s)){let o=n.props[a];if(!o)n.t.pending={kind:"buy",tile:a},Ue(i,"{p} lands on {tile} \u2013 for sale at {amt}.",{p:e.name,tile:a,amt:s.price});else if(o.owner!==e.id){let l=Wt(n,o.owner);if(o.mortgaged)Ue(i,"{p} lands on {tile} \u2013 mortgaged, no rent.",{p:e.name,tile:a});else{let c=wi(n,a,n.dice[0]+n.dice[1],t);zt(i,e.id,l.id,c,"rent"),Ue(i,s.quip?"{p} pays {q} {amt} at {tile}. {quip}":"{p} pays {q} {amt} rent for {tile}.",{p:e.name,q:l.name,amt:c,tile:a,quip:s.quip?a:void 0}),et(i,{type:"rent",p:e.id,owner:l.id,tile:a,amount:c},!0)}}else Ue(i,"{p} lands on their own {tile}.",{p:e.name,tile:a});s.kind==="transit"&&r.ride&&!n.t.rode&&Wn(n)===e&&!e.out&&(n.t.rideFrom=a)}else if(s.kind==="tax"){let o=pn(n,s.amount);zt(i,e.id,n.settings.jackpot?"pot":null,o,"tax"),Ue(i,"{p} pays {amt} for {tile}.",{p:e.name,amt:o,tile:a}),et(i,{type:"tax",p:e.id,tile:a,amount:o},!0)}else if(s.kind==="card")tg(i,e,s.deck);else if(s.kind==="gotojail")Gl(i,e);else if(s.kind==="park")if(n.settings.jackpot&&n.pot>0){let o=n.pot;zt(i,"pot",e.id,o,"jackpot"),Ue(i,"{p} takes the pot on {tile}: {amt}!",{p:e.name,amt:o,tile:a})}else Ue(i,"{p} takes a break on {tile}.",{p:e.name,tile:a});else s.kind==="jail"?Ue(i,"{p} is just visiting {tile}.",{p:e.name,tile:a}):s.kind==="start"&&Ue(i,"{p} lands on {tile}.",{p:e.name,tile:a})}function Nl(i){let e=i.t;if(!e||e.rideFrom===null||e.rideFrom===void 0||e.pending||i.auction||i.phase!=="play")return;let t=Wn(i);if(t.out||t.inJail||t.pos!==e.rideFrom){e.rideFrom=null;return}e.pending={kind:"ride",tile:e.rideFrom,to:bl(ot(i),e.rideFrom,"transit"),fare:pn(i,ot(i).ride.fare)},e.rideFrom=null}function tg(i,e,t){let n=i.s,r=ot(n),a=Hl(n);n.deckPos[t]>=n.decks[t].length&&(Ll(n,n.decks[t]),n.deckPos[t]=0);let s=n.decks[t][n.deckPos[t]++],o=r.decks[t].cards[s];Ue(i,"{p} draws {deck}: \u201C{card}\u201D",{p:e.name,deck:t,card:s}),et(i,{type:"card",p:e.id,deck:t,card:s},!0);let l=Cs(n).filter(h=>h!==e),c=n.settings.jackpot?"pot":null;switch(o.do){case"goto":Ki(i,e,(o.tile-e.pos+a)%a);break;case"nearest":{let h=bl(r,e.pos,o.kind);Ki(i,e,(h-e.pos+a)%a||a,{mult:o.mult,diceMult:o.diceMult});break}case"back":Ki(i,e,-o.n);break;case"jail":Gl(i,e);break;case"gain":zt(i,null,e.id,o.amount,"card");break;case"lose":zt(i,e.id,c,pn(n,o.amount),"card");break;case"repairs":{let h=0,u=0;for(let d of Object.values(n.props))d.owner===e.id&&(d.level===Kt?u++:h+=d.level);zt(i,e.id,c,pn(n,h*o.floor+u*o.tower),"card");break}case"payEach":for(let h of l)zt(i,e.id,h.id,pn(n,o.amount),"card");break;case"collectEach":for(let h of l)zt(i,h.id,e.id,o.amount,"card");break;case"freeCard":e.free++;break}}function Dl(i,e,t){let n=i.s,r=ot(n),a=e.debtTo!==void 0&&e.debtTo!==null&&Wt(n,e.debtTo)&&!Wt(n,e.debtTo).out?Wt(n,e.debtTo):null;for(let[o,l]of Object.entries(n.props))l.owner===e.id&&(l.level&&(e.cash+=l.level*r.groups[r.tiles[o].group].build/2,l.level=0),a?l.owner=a.id:delete n.props[o]);a&&(a.cash+=Math.floor(e.cash),a.free+=e.free,a.cash<0?a.debtTo=null:Rd(a)),e.cash=0,e.free=0,e.out=!0,e.inJail=!1,e.debtTo=void 0,n.contracts=n.contracts.filter(o=>o.payer!==e.id&&o.payee!==e.id),n.trades=n.trades.filter(o=>o.from!==e.id&&o.to!==e.id),n.auction&&n.auction.bidder===e.id&&(n.auction.bidder=null,n.auction.high=0),et(i,{type:"bankrupt",p:e.id,to:a?a.id:null}),a?Ue(i,t==="left"?"{p} leaves the game \u2013 {q} takes everything.":"{p} goes bankrupt \u2013 {q} takes everything.",{p:e.name,q:a.name}):Ue(i,t==="left"?"{p} leaves the game.":t==="removed"?"{p} is removed from the game.":"{p} goes bankrupt.",{p:e.name});let s=Cs(n);if(s.length<=1){n.phase="over",n.winner=s[0]?s[0].id:null,n.auction=null,s[0]&&(et(i,{type:"win",p:s[0].id}),Ue(i,"{p} wins the game!",{p:s[0].name}));return}Wn(n)===e&&Ld(i)}function ng(i,e,t){let n=i.s;n.auction={tile:e,high:0,bidder:null,endsAt:t+Yf,startedAt:t,passed:[],bids:[]},et(i,{type:"auction",tile:e}),Ue(i,"{tile} goes up for auction.",{tile:e})}function Nd(i){let e=i.s,t=e.auction;e.auction=null;let n=t.bidder!==null?Wt(e,t.bidder):null;n&&!n.out?(zt(i,n.id,null,t.high,"auction"),e.props[t.tile]={owner:n.id,level:0,mortgaged:!1},Ue(i,"{p} wins the auction for {tile} at {amt}.",{p:n.name,tile:t.tile,amt:t.high}),et(i,{type:"buy",p:n.id,tile:t.tile,amount:t.high,auction:!0},!0)):(Ue(i,"Nobody bid on {tile}; it stays with the bank.",{tile:t.tile}),et(i,{type:"unsold",tile:t.tile}))}function ks(i){if(i.phase!=="play"||!i.settings.timer||i.auction)return null;let e=Wn(i),t=i.t;return!e||e.out||e.cash<0?null:t.pending&&t.pending.kind==="buy"?"decline":t.pending&&t.pending.kind==="ride"?"stay":!t.rolled||t.again?"roll":"end"}function Ul(i,e){let t=ks(i);if(!t)return i.t.deadline=null,i.t.due=null,!1;let n=`${i.turn}:${t}:${i.t.acted||0}:${i.t.doubles}:${i.t.rode}`;return i.t.due===n&&i.t.deadline?!1:(i.t.due=n,i.t.deadline=e+i.settings.timer*1e3,!0)}function Vl(i,e){let t={s:i,events:[]};if(i.phase!=="play")return{events:[],changed:!1};let n=!1;if(i.settings.clock&&i.endsAt===null&&(i.startedAt=e,i.endsAt=e+i.settings.clock*6e4,n=!0),i.endsAt&&e>=i.endsAt&&!i.lastRound&&(i.lastRound=!0,et(t,{type:"clock"}),Ue(t,"The clock has run out \u2013 this is the last round!")),i.auction&&e>=i.auction.endsAt&&(Nd(t),Nl(i)),n=Ul(i,e)||n,i.t.deadline&&e>=i.t.deadline&&i.phase==="play"){let r=Wn(i),a=ks(i);Ue(t,a==="roll"?"Time's up for {p} \u2013 the dice roll themselves.":a==="decline"?i.settings.auctions?"Time's up for {p} \u2013 no decision, it goes to auction.":"Time's up for {p} \u2013 no decision, they pass.":a==="stay"?"Time's up for {p} \u2013 they stay where they are.":"Time's up for {p}.",{p:r.name}),et(t,{type:"timeout",p:r.id,what:a}),Dd(t,r.id,{type:a},e),Nl(i),Ul(i,e),n=!0}return{events:t.events,changed:n||t.events.length>0}}var Sd=(i,e,t)=>{let n=Math.floor(Number(i));return Number.isFinite(n)?Math.min(t,Math.max(e,n)):e};function Td(i,e,t){let n=ot(i),r=e&&typeof e=="object"?e:{},a=Array.isArray(r.tiles)?[...new Set(r.tiles.map(Number))].filter(s=>n.tiles[s]&&Gn(n.tiles[s])):[];return{cash:Sd(r.cash,0,1e6),tiles:a.slice(0,40),free:Sd(r.free,0,t)}}function Ol(i,e){let t=ot(i),n=Wt(i,e.from),r=Wt(i,e.to);if(!n||!r||n.out||r.out)return ke("That player is out of the game");for(let[a,s]of[[n,e.give],[r,e.get]]){for(let o of s.tiles){if(!Zi(i,a.id,o))return ke("{p} no longer owns {tile}",{p:a.name,tile:o});let l=t.tiles[o].group;if(t.tiles[o].kind==="lot"&&kd(i,l))return ke("Sell the buildings on {group} before trading {tile}",{group:l,tile:o})}if(s.cash>Math.max(0,a.cash))return ke("{p} doesn't have {amt}",{p:a.name,amt:s.cash});if(s.free>a.free)return ke("{p} doesn't have that card",{p:a.name})}for(let a of e.cancels)if(!i.contracts.find(s=>s.id===a))return ke("Clause #{id} no longer exists",{id:a});return null}function ig(i,e,t){let n=i.s,r=Wt(n,t.to);if(!r||r.out||r===e)return ke("Pick another player to trade with");if(n.trades.filter(l=>l.from===e.id).length>=bd&&!t.counter)return ke("At most {n} open offers \u2013 withdraw one first",{n:bd});let a={id:n.nextId++,from:e.id,to:r.id,give:Td(n,t.give,e.free),get:Td(n,t.get,r.free),clauses:(Array.isArray(t.clauses)?t.clauses:[]).slice(0,ka).map(l=>od(ot(n),l)).filter(Boolean),cancels:(Array.isArray(t.cancels)?[...new Set(t.cancels.map(Number))]:[]).filter(l=>{let c=n.contracts.find(h=>h.id===l);return c&&[c.payer,c.payee].includes(e.id)&&[c.payer,c.payee].includes(r.id)}),round:n.round};if(Array.isArray(t.clauses)&&a.clauses.length!==Math.min(t.clauses.length,ka))return ke("One of the clauses is incomplete");if(!a.give.cash&&!a.get.cash&&!a.give.tiles.length&&!a.get.tiles.length&&!a.give.free&&!a.get.free&&!a.clauses.length&&!a.cancels.length)return ke("The offer is empty");if(a.give.tiles.some(l=>a.get.tiles.includes(l)))return ke("A space cannot be on both sides");let o=Ol(n,a);if(o)return o;if(t.counter){let l=n.trades.find(c=>c.id===Number(t.counter)&&c.to===e.id&&c.from===r.id);l&&(n.trades=n.trades.filter(c=>c!==l))}return n.trades.push(a),et(i,{type:"offer",id:a.id,from:e.id,to:r.id}),Ue(i,"{p} makes {q} an offer.",{p:e.name,q:r.name}),null}function rg(i,e,t){let n=i.s,r=n.trades.find(c=>c.id===t);if(!r||r.to!==e.id)return ke("That offer is gone");let a=Ol(n,r);if(a)return a;n.trades=n.trades.filter(c=>c!==r);let s=Wt(n,r.from),o=e;zt(i,s.id,o.id,r.give.cash,"trade"),zt(i,o.id,s.id,r.get.cash,"trade");for(let c of r.give.tiles)n.props[c].owner=o.id;for(let c of r.get.tiles)n.props[c].owner=s.id;s.free+=r.get.free-r.give.free,o.free+=r.give.free-r.get.free,n.contracts=n.contracts.filter(c=>!r.cancels.includes(c.id));let l=r.clauses.map(c=>ld(n.nextId++,c,s.id,o.id,n.round));n.contracts.push(...l),et(i,{type:"trade",id:r.id,from:s.id,to:o.id,tiles:[...r.give.tiles,...r.get.tiles]}),Ue(i,"{p} accepts {q}'s offer.",{p:o.name,q:s.name});for(let c of l)Ue(i,"New clause #{id}: {clause}.",{id:c.id,clause:{...c}});for(let c of r.cancels)Ue(i,"Clause #{id} is torn up.",{id:c});return n.trades=n.trades.filter(c=>!Ol(n,c)),null}function Wl(i,e,t,n=Date.now()){let r={s:i,events:[]},a=i.phase==="play"&&t&&typeof t=="object"?Dd(r,e,t,n):ke("The game is not running");return!a&&i.phase==="play"&&(Nl(i),Wn(i).id===e&&!["roll","end","buy","decline","ride","stay"].includes(t.type)&&(i.t.acted=(i.t.acted||0)+1),Ul(i,n)),{events:r.events,error:a?Zf(i,a.k,a.v):"",err:a||null}}function Dd(i,e,t,n){let r=i.s,a=ot(r),s=Wt(r,e);if(!s||s.out)return ke("You are not playing");let o=Wn(r)===s,l=r.t,c=Number(t.tile),h=a.tiles[c];switch(t.type){case"roll":{if(!o)return ke("Not your turn");if(l.pending||r.auction)return ke("Finish what is open first");if(l.rolled&&!l.again)return ke("You already rolled");if(s.cash<0)return ke("Clear your debt first");let u=[wd(r),wd(r)];r.dice=u;let d=u[0]===u[1],p=u[0]+u[1];return l.rolled=!0,l.again=!1,l.rode=!1,et(i,{type:"roll",p:s.id,dice:u}),s.inJail?(d?(s.inJail=!1,s.jailTurns=0,Ue(i,"{p} rolls {d1}+{d2} \u2013 doubles, out of {tile}!",{p:s.name,d1:u[0],d2:u[1],tile:a.jailTile}),et(i,{type:"doubles",p:s.id},!0),Ki(i,s,p)):++s.jailTurns>=3?(Ue(i,"{p} rolls {d1}+{d2} \u2013 third try, pays {amt} and leaves {tile}.",{p:s.name,d1:u[0],d2:u[1],amt:a.jailFine,tile:a.jailTile}),zt(i,s.id,r.settings.jackpot?"pot":null,a.jailFine,"fine"),s.inJail=!1,s.jailTurns=0,Ki(i,s,p)):Ue(i,"{p} rolls {d1}+{d2} \u2013 stays in {tile}.",{p:s.name,d1:u[0],d2:u[1],tile:a.jailTile}),null):(Ue(i,d?"{p} rolls {d1}+{d2} \u2013 doubles!":"{p} rolls {d1}+{d2}.",{p:s.name,d1:u[0],d2:u[1]}),d&&(l.doubles++,et(i,{type:"doubles",p:s.id},!0),l.doubles>=3)?(Ue(i,"Three doubles in a row \u2013 speeding!"),Gl(i,s),null):(Ki(i,s,p),d&&!s.inJail&&!s.out&&Wn(r)===s&&(l.again=!0),null))}case"buy":{if(!o||!l.pending||l.pending.kind!=="buy")return ke("Nothing to buy");let u=a.tiles[l.pending.tile];return s.cash<u.price?ke("You need {amt}",{amt:u.price}):(zt(i,s.id,null,u.price,"buy"),r.props[u.index]={owner:s.id,level:0,mortgaged:!1},l.pending=null,Ue(i,"{p} buys {tile} for {amt}.",{p:s.name,tile:u.index,amt:u.price}),et(i,{type:"buy",p:s.id,tile:u.index,amount:u.price},!0),null)}case"decline":{if(!o||!l.pending||l.pending.kind!=="buy")return ke("Nothing to decline");let u=l.pending.tile;return l.pending=null,r.settings.auctions?ng(i,u,n):Ue(i,"{p} passes on {tile}.",{p:s.name,tile:u}),null}case"ride":{if(!o||!l.pending||l.pending.kind!=="ride")return ke("There is nothing to ride");let u=l.pending,d=u.fare;if(s.cash<d)return ke("You need {amt}",{amt:d});let p=r.props[u.tile],f=p&&!p.mortgaged&&p.owner!==s.id?p.owner:null;l.pending=null,l.rode=!0,p&&p.owner===s.id||zt(i,s.id,f,d,"fare"),Ue(i,p&&p.owner===s.id?"{p} rides {tile} to {tile2} on their own line.":"{p} rides {tile} to {tile2} for {amt}.",{p:s.name,tile:u.tile,tile2:u.to,amt:d}),et(i,{type:"ride",p:s.id,from:u.tile,to:u.to,amount:d,vehicle:a.tiles[u.tile].vehicle});let g=Hl(r);return Ki(i,s,(u.to-s.pos+g)%g||g,{ride:a.tiles[u.tile].vehicle||"ride"}),null}case"stay":return!o||!l.pending||l.pending.kind!=="ride"?ke("There is nothing to ride"):(l.pending=null,l.rode=!0,null);case"bid":{let u=r.auction;if(!u)return ke("No auction is running");let d=Math.floor(Number(t.amount));return d>u.high?d>s.cash?ke("You only have {amt}",{amt:Math.max(0,s.cash)}):(u.high=d,u.bidder=s.id,u.passed=u.passed.filter(p=>p!==s.id),u.bids=[...u.bids||[],{p:s.id,amount:d}].slice(-8),u.endsAt=Math.max(u.endsAt,n+$f),et(i,{type:"bid",p:s.id,amount:d}),Ue(i,"{p} bids {amt}.",{p:s.name,amt:d}),null):ke("Bid more than {amt}",{amt:u.high})}case"pass":{let u=r.auction;return u?u.bidder===s.id?ke("You hold the highest bid"):(u.passed.includes(s.id)||u.passed.push(s.id),et(i,{type:"pass",p:s.id}),Cs(r).filter(p=>p.id!==u.bidder&&!u.passed.includes(p.id)).length||Nd(i),null):ke("No auction is running")}case"end":return o?!l.rolled||l.again?ke("Roll first"):l.pending?ke(l.pending.kind==="ride"?"Ride or stay first":"Buy it or pass first"):r.auction?ke("Wait for the auction to finish"):s.cash<0?ke("Clear your debt first \u2013 mortgage, sell or trade"):(Ld(i),null):ke("Not your turn");case"payFine":return!o||!s.inJail||l.rolled?ke("You can only pay the fine before you roll"):s.cash<a.jailFine?ke("You need {amt}",{amt:a.jailFine}):(zt(i,s.id,r.settings.jackpot?"pot":null,a.jailFine,"fine"),s.inJail=!1,s.jailTurns=0,Ue(i,"{p} pays {amt} and leaves {tile}.",{p:s.name,amt:a.jailFine,tile:a.jailTile}),null);case"useCard":return!o||!s.inJail||l.rolled?ke("You can only use it before you roll"):s.free?(s.free--,s.inJail=!1,s.jailTurns=0,Ue(i,"{p} uses a card to leave {tile}.",{p:s.name,tile:a.jailTile}),null):ke("You have no such card");case"build":{if(!h||h.kind!=="lot"||!Zi(r,s.id,c))return ke("You can only build on your own districts");let u=h.group,d=a.groups[u].build;if(!Cd(r,s.id,u))return ke("Own all of {group} first",{group:u});if(dt(a,u).some(f=>r.props[f].mortgaged))return ke("Unmortgage the whole set first");let p=kr(r,c);return p>=Kt?ke("It already has a tower"):dt(a,u).some(f=>kr(r,f)<p)?ke("Build evenly across the set"):s.cash<d?ke("You need {amt}",{amt:d}):(zt(i,s.id,null,d,"build"),r.props[c].level++,Ue(i,r.props[c].level===Kt?"{p} builds a tower on {tile}.":"{p} builds a floor on {tile}.",{p:s.name,tile:c}),et(i,{type:"build",p:s.id,tile:c,amount:d,level:r.props[c].level},!0),null)}case"sell":{if(!h||!Zi(r,s.id,c)||!kr(r,c))return ke("Nothing to sell there");let u=kr(r,c);return dt(a,h.group).some(d=>kr(r,d)>u)?ke("Sell evenly across the set"):(r.props[c].level--,zt(i,null,s.id,a.groups[h.group].build/2,"sell"),Ue(i,"{p} sells a floor on {tile}.",{p:s.name,tile:c}),et(i,{type:"sell",p:s.id,tile:c,level:r.props[c].level}),null)}case"mortgage":return!h||!Zi(r,s.id,c)?ke("Not yours"):r.props[c].mortgaged?ke("Already mortgaged"):h.kind==="lot"&&kd(r,h.group)?ke("Sell the buildings on this set first"):(r.props[c].mortgaged=!0,zt(i,null,s.id,Jn(h),"mortgage"),Ue(i,"{p} mortgages {tile} for {amt}.",{p:s.name,tile:c,amt:Jn(h)}),et(i,{type:"mortgage",p:s.id,tile:c}),null);case"unmortgage":{if(!h||!Zi(r,s.id,c)||!r.props[c].mortgaged)return ke("Not mortgaged");let u=Wi(h);return s.cash<u?ke("You need {amt}",{amt:u}):(zt(i,s.id,null,u,"unmortgage"),r.props[c].mortgaged=!1,Ue(i,"{p} pays off the mortgage on {tile}.",{p:s.name,tile:c}),et(i,{type:"unmortgage",p:s.id,tile:c}),null)}case"offer":return ig(i,s,t);case"accept":return rg(i,s,Number(t.id));case"reject":{let u=r.trades.find(d=>d.id===Number(t.id));return!u||u.to!==s.id?ke("That offer is gone"):(r.trades=r.trades.filter(d=>d!==u),et(i,{type:"reject",id:u.id,from:u.from,to:u.to}),Ue(i,"{p} turns down {q}'s offer.",{p:s.name,q:(Wt(r,u.from)||{}).name}),null)}case"withdraw":{let u=r.trades.find(d=>d.id===Number(t.id));return!u||u.from!==s.id?ke("That offer is gone"):(r.trades=r.trades.filter(d=>d!==u),et(i,{type:"withdraw",id:u.id,from:u.from,to:u.to}),null)}case"bankrupt":return s.cash>=0?ke("You are not in debt"):(Dl(i,s),null);case"resign":return s.debtTo=s.cash<0?s.debtTo:null,Dl(i,s,"left"),null;default:return ke("Unknown action")}}function jl(i,e,t="removed"){let n={s:i,events:[]},r=Wt(i,e);return i.phase==="play"&&r&&!r.out&&(r.debtTo=null,Dl(n,r,t)),{events:n.events}}function Ud(i,e){let{seed:t,decks:n,deckPos:r,...a}=i;return{...a,trades:i.trades.filter(s=>s.from===e||s.to===e),tradesOpen:i.trades.length,log:i.log.slice(-80)}}bn();var ag=["orospu","orosbu","oruspu","orusbu","orspu","orsbu","aminakoy","aminako","aminasok","aminkoy","amcik","amcig","siktir","sikerim","sikeyim","sikiyim","sikis","sikik","siksok","yarrak","yarak","yarram","dalyarak","tasak","tassak","pezevenk","kahpe","kaltak","surtuk","yavsak","gavat","pust","ibne","ipne","gotveren","gotlek","gotos","ananisik","bacinisik","serefsiz","gerizekali","dangalak","salak","aptal","kodumun","pickurusu","fuck","phuck","fvck","shit","bitch","biatch","cunt","asshole","bastard","whore","slut","faggot","nigger","nigga","retard","dildo","pussy","penis","vagina","porn","jizz","blowjob","handjob","motherf","molest","pedofil","pedophil","boob","horny","milf","twat","bollock","scheis","arschloch","fotze","wichser","hurensohn","schlampe","ficken","missgeburt","nutte","spasti","putain","connard","connasse","salope","encule","niquer","batard","enfoire","mierda","cabron","gilipollas","pendejo","culero","chingad","chingar","maricon","hijueputa","hijodeputa","joder","cazzo","vaffanculo","fanculo","stronzo","puttana","minchia","coglion","caralho","buceta","fodase","blyat","blyad","pizd","mudak","pidor","pidar","gandon","eblan","yebat","yobany","kurwa","pierdol","spierdal","jebac","kanker","klootzak","godverdomme","chutiya","chutia","bhenchod","behenchod","madarchod","bhosdi","sharmouta","sharmuta","sharmota","kussomak","kussommak","kusomak","metnak","khawal","zebbi","manyok","koskesh","allah","peygamber","prophet","muslim","musluman","hristiyan","hiristiyan","christianity","jesuschrist","yahudi","kafir","gavur","ateist","atheist","satanist","seytan","kilise","sinagog","synagogue","mosque","seriat","sharia","jihad","mezhep","tarikat","selefi","vahhabi","wahhabi","hizbullah","hezbollah","taliban","crusade","namaz","abdest","tekbir","budist","buddhist","vatican","vatikan","dinsiz","islamist","islamci","islamic","erdogan","tayyip","ataturk","kilicdaroglu","bahceli","imamoglu","davutoglu","aksener","ocalan","fethullah","fetullah","hitler","mussolini","stalin","lenin","netanyahu","zelensk","kemalist","kemalizm","ulkucu","apocu","terorist","fascis","fasist","fasizm","faschis","komunist","communis","kommunist","sosyalist","socialis","anarsist","anarchis","zionis","siyonis","kurdistan","marxis","bolsevik","bolshevik","akparti","iyiparti"],Xl=new Set(["am","amk","amq","aq","mk","sik","skm","skim","sktr","skt","oc","pic","got","bok","dol","pezo","ass","dick","cock","cum","sex","sexy","tit","tits","fag","rape","rapist","anal","anus","wank","wanker","tosser","hoe","hoes","wtf","stfu","gtfo","fck","fuk","fuq","fk","kkk","fick","hure","spast","nique","pute","putes","fdp","ntm","puta","puto","putas","putos","hdp","verga","cono","pinche","merda","troia","foda","viado","porra","cu","suka","huy","hui","xuy","xyi","xui","chuj","hoer","kut","randi","gaand","jende","god","gott","dieu","dios","tanri","tanrim","kuran","quran","koran","incil","bible","tevrat","torah","zebur","cami","church","cemaat","alevi","sunni","sii","isis","isid","daesh","deas","hacli","pope","din","mesih","hz","satan","jew","jews","deist","rte","pkk","ypg","pyd","ypj","dhkp","dhkpc","hdp","akp","chp","mhp","feto","nazi","nazis","neonazi","putin","trump","biden","obama","hamas","marx","inonu"]),sg=["\u0431\u043B\u044F\u0442","\u0431\u043B\u044F\u0434","\u0441\u0443\u043A\u0430","\u043F\u0438\u0437\u0434","\u0445\u0443\u0439","\u0445\u0443\u0435","\u0435\u0431\u0430\u0442","\u0435\u0431\u0430\u043D","\u043C\u0443\u0434\u0430\u043A","\u043F\u0438\u0434\u043E\u0440","\u043F\u0438\u0434\u0430\u0440","\u0433\u0430\u043D\u0434\u043E\u043D","\u0448\u043B\u044E\u0445","\u0437\u0430\u043B\u0443\u043F","\u0634\u0631\u0645\u0648\u0637","\u0645\u0646\u064A\u0648\u0643","\u0642\u062D\u0628\u0629","\u0639\u0631\u0635","\u0643\u0633\u0645\u0643"],og=["\u0431\u043B\u044F","\u0643\u0633","\u0646\u064A\u0643","\u0632\u0628\u064A"],lg={\u0131:"i",\u00DF:"ss",\u00E6:"ae",\u0153:"oe",\u00F8:"o",\u0111:"d",\u0142:"l",\u00FE:"th",\u00F0:"d"},cg={\u0430:"a",\u0432:"b",\u0435:"e",\u043A:"k",\u043C:"m",\u043D:"h",\u043E:"o",\u0440:"p",\u0441:"c",\u0442:"t",\u0443:"y",\u0445:"x",\u0456:"i",\u0458:"j",\u0455:"s",\u03B1:"a",\u03B2:"b",\u03B5:"e",\u03B7:"n",\u03B9:"i",\u03BA:"k",\u03BD:"v",\u03BF:"o",\u03C1:"p",\u03C4:"t",\u03C5:"u",\u03C7:"x"},hg={0:"o",1:"i",2:"z",3:"e",4:"a",5:"s",6:"g",7:"t",8:"b",9:"g"},ql=i=>i.toLowerCase().normalize("NFD").replace(/\p{M}+/gu,"").replace(/[ıßæœøđłþð]/g,e=>lg[e]),Ps=i=>i.replace(/(.)\1+/g,"$1"),ug=[...new Set(ag.flatMap(i=>[i,Ps(i)]).filter(i=>i.length>=4))],dg=new Set([...Xl].map(Ps).filter(i=>i.length>=3)),pg=sg.map(ql),mg=new Set(og.map(ql));function Od(i){if(!i.length)return!1;let e=i.join("");for(let n of[...i,e]){let r=Ps(n);if(Xl.has(n)||Xl.has(r)||dg.has(r))return!0}let t=Ps(e);return ug.some(n=>e.includes(n)||t.includes(n))}function Yl(i){let e=ql(String(i||""));if(pg.some(r=>e.includes(r))||e.split(/\s+/).some(r=>mg.has(r)))return!0;let t=e.replace(/./gu,r=>cg[r]||r),n=r=>r.split(/[^a-z0-9]+/).filter(Boolean);return Od(n(t))||Od(n(t.replace(/[0-9]/g,r=>hg[r])))}var zd=/[^\p{L}\p{N} ]/gu,Bd=/[^\p{L}\p{N} '’.,!?&#+:|()\-_/]/gu,Fd=(i,e,t)=>Array.from(String(i||"").replace(e,"").replace(/\s+/g," ").trim()).slice(0,t).join("").trim();function Pr(i){let e=Fd(i,zd,16);return e&&!Yl(e)?e:""}function Is(i){let e=Fd(i,Bd,28);return e&&!Yl(e)?e:""}function Hd(i,e="player"){let t=String(i||"").trim(),n=e==="room",r=n?28:16;return t?t.replace(n?Bd:zd,"")!==t?n?"Letters, numbers and simple punctuation only":"Letters and numbers only":Array.from(t).length>r?`At most ${r} characters`:Yl(t)?"Not allowed \u2013 no swearing, religion or politics":"":n?"":"Pick a name"}bn();var Da=(i,e)=>i.players.find(t=>t.id===e),fg=i=>i.players.filter(e=>!e.out),ii=(i,e)=>i.props[e]?i.props[e].owner:null,ni=(i,e)=>i.props[e]?i.props[e].level:0,Wd=(i,e)=>!!(i.groups[e]&&i.groups[e].build);function Si(i,e,t){let n=ot(i),r=n.tiles[t];return r.kind!=="lot"?!1:dt(n,r.group).every(a=>a===t||ii(i,a)===e)}var ri=i=>pn(i,120+Math.min(250,i.round*12));function Gd(i,e,t,n){let r=ot(i).tiles[e],a=i.props[e],s=r.price*(a&&a.mortgaged?.55:1);return t&&Si(i,t,e)&&(s*=2.2),n&&(r.kind==="transit"||r.kind==="shop")&&(s*=1.15),s}function gg(i,e){let t=ot(i),n=fg(i).length,r=t.tiles.length,a=e.where||"any",s=1.12/r,o=a==="any"?1:a.startsWith("t:")?s:s*dt(t,a.slice(2)).length,l={turn:1,land:a==="any"?1:o*1.1,passStart:8/r,rent:a==="any"?.45:o*.9,buy:.2,build:.15,tax:.05,doubles:.17,jail:.06,card:.15}[e.event]||.1,c=e.actor==="any"||e.actor===null;return l*(c?n:1)}function yg(i,e){let t=ot(i),n=e.where||"any";if(e.event==="rent"){if(n.startsWith("t:")){let r=+n.slice(2),a=t.tiles[r];return Math.max(a.rents?a.rents[0]*2:25,i.props[r]?wi(i,r,7):0)}return pn(i,70)}return{tax:pn(i,150),passStart:t.salary,buy:200,build:120}[e.event]||0}function Vd(i,e,t){let n=e.kind==="percent"?yg(i,e)*e.value/100:e.value,r=t||15,a=gg(i,e)*r,s=e.times!==void 0?e.times:e.timesLeft;return s&&(a=Math.min(s,a)),n*a*.9}function vg(i,e,t){let n=Da(i,e),r=Da(i,t.from);if(!n||!r)return-1e9;let a=0;a+=t.give.cash-t.get.cash,a+=(t.give.free-t.get.free)*40;for(let o of t.give.tiles)a+=Gd(i,o,e,t.from);for(let o of t.get.tiles)a-=Gd(i,o,t.from,e)*(Si(i,t.from,o)?.92:1);for(let o of t.clauses){let l=o.payer==="to",c=Vd(i,o,o.rounds);a+=l?-c*1.1:c}for(let o of t.cancels){let l=i.contracts.find(h=>h.id===o);if(!l)continue;let c=Vd(i,l,l.untilRound?l.untilRound-i.round+1:0);a+=l.payee===e?-c:c}return n.cash-t.get.cash+t.give.cash<80&&(a-=150),a}function xg(i,e){let t=ot(i),n=Object.keys(i.props).map(Number).filter(s=>ii(i,s)===e.id),r=n.filter(s=>ni(i,s)>0).sort((s,o)=>ni(i,o)-ni(i,s));for(let s of r){let o=Math.max(...dt(t,t.tiles[s].group).map(l=>ni(i,l)));if(ni(i,s)===o)return{type:"sell",tile:s}}let a=n.filter(s=>!i.props[s].mortgaged&&!(t.tiles[s].kind==="lot"&&dt(t,t.tiles[s].group).some(o=>ni(i,o)>0)));return a.length?(a.sort((s,o)=>Si(i,e.id,s)-Si(i,e.id,o)||t.tiles[s].price-t.tiles[o].price),{type:"mortgage",tile:a[0]}):null}function _g(i,e){let t=ot(i),n=Object.keys(t.groups).filter(r=>Wd(t,r)&&dt(t,r).length&&dt(t,r).every(a=>ii(i,a)===e.id)&&dt(t,r).every(a=>!i.props[a].mortgaged));n.sort((r,a)=>t.groups[a].build-t.groups[r].build);for(let r of n){let a=t.groups[r].build;if(e.cash-a<ri(i))continue;let s=dt(t,r),o=Math.min(...s.map(l=>ni(i,l)));if(!(o>=Kt))return{type:"build",tile:s.find(l=>ni(i,l)===o)}}return null}function bg(i,e){let t=ot(i),n=Object.keys(i.props).map(Number).filter(r=>ii(i,r)===e.id&&i.props[r].mortgaged).sort((r,a)=>Si(i,e.id,a)-Si(i,e.id,r));for(let r of n)if(e.cash-Wi(t.tiles[r])>ri(i)+250)return{type:"unmortgage",tile:r};return null}function Mg(i,e,t){let n=ot(i),r=a=>Object.keys(n.groups).filter(s=>Wd(n,s)).map(s=>{let o=dt(n,s),l=o.filter(c=>ii(i,c)!==a);return l.length===1&&o.every(c=>ni(i,c)===0)&&ii(i,l[0])!==null?l[0]:null}).filter(s=>s!==null);for(let a of r(e.id)){let s=ii(i,a),o=Da(i,s);if(!o||o.out)continue;let l=r(s).find(u=>ii(i,u)===e.id);if(l===void 0)continue;let c=`swap:${s}:${a}:${l}:${Math.floor(i.round/4)}`;if(t.offered.has(c))continue;t.offered.add(c);let h=Math.max(0,Math.min(e.cash-ri(i),Math.round((n.tiles[a].price-n.tiles[l].price)*1.2/10)*10+20));return{type:"offer",to:s,give:{tiles:[l],cash:h},get:{tiles:[a]}}}for(let a of r(e.id)){let s=ii(i,a),o=Da(i,s);if(!o||o.out)continue;let l=`${s}:${a}:${Math.floor(i.round/4)}`;if(t.offered.has(l))continue;let c=Math.round(Math.min(e.cash-ri(i),n.tiles[a].price*2.4)/10)*10;if(!(c<n.tiles[a].price*1.5))return t.offered.add(l),{type:"offer",to:s,give:{cash:c},get:{tiles:[a]}}}return null}function wg(i,e){let t=ot(i),n=t.tiles.length,r=i.t.pending;if(e.cash-r.fare<ri(i)*.5)return!1;let a=i.props[r.to],s=a&&a.owner!==e.id&&!a.mortgaged?wi(i,r.to,7):0;if(s>e.cash*.15)return!1;let o=0;for(let c=2;c<=12;c++){let h=(r.tile+c)%n,u=i.props[h];u&&u.owner!==e.id&&!u.mortgaged&&(o+=wi(i,h,7))}let l=!a&&e.cash>t.tiles[r.to].price+ri(i);return o/11>s*.5+r.fare*.5||l}function jd(i,e,t,n){let r=ot(i),a=Da(i,e);if(!a||a.out||i.phase!=="play")return null;let s=h=>h&&!n.avoid.has(JSON.stringify(h))?h:null;for(let h of i.trades.filter(u=>u.to===e)){if(n.seen.has(h.id)||n.seen.set(h.id,t),t-n.seen.get(h.id)<1500)continue;let u=vg(i,e,h),d=h.give.cash+h.get.cash+100*(h.give.tiles.length+h.get.tiles.length),p=s({type:u>5+d*.03?"accept":"reject",id:h.id});if(p)return p}for(let h of i.trades.filter(u=>u.from===e))if(n.seen.has(h.id)||n.seen.set(h.id,t),t-n.seen.get(h.id)>45e3){let u=s({type:"withdraw",id:h.id});if(u)return u}if(i.auction){let h=i.auction;if(h.bidder===e||h.passed.includes(e))return null;let u=r.tiles[h.tile],d=Math.min(a.cash-ri(i)*.6,u.price*(Si(i,e,h.tile)?1.7:1.05)),p=Math.max(5,Math.round(u.price*.05/5)*5);return d>=h.high+p?s({type:"bid",amount:h.high+p})||s({type:"pass"}):s({type:"pass"})}if(i.players[i.turn].id!==e)return null;let o=i.t;if(a.cash<0)return s(xg(i,a))||s({type:"bankrupt"});if(o.pending&&o.pending.kind==="buy"){let h=r.tiles[o.pending.tile],u=a.cash>=h.price&&(a.cash-h.price>=ri(i)*.7||Si(i,e,h.index)||i.round<=3);return s({type:u?"buy":"decline"})||s({type:"decline"})}if(o.pending&&o.pending.kind==="ride")return s({type:wg(i,a)?"ride":"stay"})||s({type:"stay"});if(a.inJail&&!o.rolled){if(a.free){let u=s({type:"useCard"});if(u)return u}let h=r.ownable.filter(u=>!i.props[u]).length;if(a.cash>=r.jailFine+ri(i)&&h>6){let u=s({type:"payFine"});if(u)return u}}let l=s(_g(i,a));if(l)return l;let c=s(bg(i,a));if(c)return c;if(!o.rolled&&n.offerRound!==i.round&&!i.trades.some(h=>h.from===e)){n.offerRound=i.round;let h=s(Mg(i,a,n));if(h)return h}return!o.rolled||o.again?s({type:"roll"}):s({type:"end"})}var Xd=()=>({avoid:new Set,offered:new Set,seen:new Map,offerRound:0});var qd=12,Lr=["Deal?","No deal","Nice one!","Ouch!","Your turn!","Hurry up","Good game","Let's talk"],Sg=6e4,Yd=i=>!!(i.bot||i.ai&&!i.client),$d=i=>typeof i=="string"&&/^[a-z0-9]{12,32}$/.test(i)?i:"",Ir=class i{constructor(e,t,n={}){this.code=e,this.name=Is(t)||"Parcel table",this.listed=n.listed!==!1,this.now=n.now||Date.now,this.onChange=n.onChange||null,this.members=new Map,this.hostWho="",this.settings=Na(null),this.game=null,this.banned=new Set,this.nextId=1,this.emptySince=this.now(),this.botMem=new Map,this.botAt=0}get online(){return[...this.members.values()].filter(e=>e.client)}seated(){return[...this.members.values()].filter(e=>e.seat)}join(e){let t=e.who;if(this.banned.has(t))return"The host removed you from this room";let n=this.members.get(t);if(n){if(n.client&&n.client!==e){let r=n.client;n.client=null,r.room=null,r.send({t:"error",code:"replaced",text:"This room was opened in another tab"})}n.client=e,n.ai=!1,(!this.game||this.game.phase!=="play")&&(n.name=Pr(e.name)||n.name)}else{if(this.members.size>=qd){let r=[...this.members.values()].find(a=>!a.client&&!a.bot&&!this.inGame(a));if(!r)return"The room is full";this.members.delete(r.who)}n={who:t,id:`p${this.nextId++}`,name:Pr(e.name)||`Player${Math.floor(100+Math.random()*900)}`,client:e,seat:null,joined:this.now()},this.members.set(t,n),this.game||this.autoSeat(n)}return e.room=this,(!this.hostWho||!this.members.get(this.hostWho))&&(this.hostWho=t),this.emptySince=0,this.broadcast(),""}leave(e,t=!1){let n=this.members.get(e.who);if(!n||n.client!==e)return;n.client=null,e.room=null;let r=[];t&&(this.inGame(n)&&(r=jl(this.game,n.id,"leaves the game").events),this.members.delete(n.who),this.hostWho===n.who&&this.passHost()),this.online.length||(this.emptySince=this.now()),this.broadcast(r)}passHost(){let e=this.online.find(t=>t.who!==this.hostWho)||[...this.members.values()].find(t=>t.who!==this.hostWho&&!t.bot);e&&(this.hostWho=e.who)}inGame(e){return!!(this.game&&this.game.phase==="play"&&this.game.players.some(t=>t.id===e.id&&!t.out))}tokens(){return Bt(this.settings.map).tokens}autoSeat(e){if(this.seated().length>=ti)return;let t=this.seated().map(a=>a.seat),n=this.tokens().find(a=>!t.some(s=>s.token===a)),r=Ra.find(a=>!t.some(s=>s.color===a));e.seat={token:n,color:r}}handle(e,t){let n=this.members.get(e.who);if(!n||n.client!==e)return;let r=n.who===this.hostWho,a=!this.game||this.game.phase!=="play",s=(o,l={})=>e.send({t:"error",text:o.replace(/\{(\w+)\}/g,(c,h)=>l[h]),k:o,v:l});switch(t.t){case"act":{if(!this.game)return s("The game has not started");let o=Wl(this.game,n.id,t.a,this.now());if(o.error)return e.send({t:"error",text:o.error,k:o.err.k,v:o.err.v});this.broadcast(o.events);return}case"seat":{if(!a)return;let o=this.seated().filter(h=>h!==n).map(h=>h.seat);if(!n.seat){if(o.length>=ti)return s("All six seats are taken");this.autoSeat(n)}let l=this.tokens().includes(t.token)&&!o.some(h=>h.token===t.token)?t.token:n.seat.token,c=Ra.includes(t.color)&&!o.some(h=>h.color===t.color)?t.color:n.seat.color;n.seat={token:l,color:c};break}case"stand":a&&(n.seat=null);break;case"name":{let o=Pr(t.name);o&&a&&(n.name=o);break}case"settings":if(!r||!a)return;{let o=this.settings.map;if(this.settings=Na({...this.settings,...t.settings}),this.settings.map!==o){let l=Bt(o).tokens,c=this.tokens();for(let h of this.seated())h.seat.token=c[Math.max(0,l.indexOf(h.seat.token))]||c[0]}}typeof t.name=="string"&&Is(t.name)&&(this.name=Is(t.name)),typeof t.listed=="boolean"&&(this.listed=t.listed);break;case"start":{if(!r||!a)return;let o=this.seated();if(o.length<Ji)return s("At least {n} players need a seat",{n:Ji});if(o.some(l=>!l.client&&!l.bot))return s("Someone with a seat is offline");if(o.every(l=>l.bot))return s("At least one person has to play");this.botMem.clear(),this.game=Ad(o.map(l=>({id:l.id,name:l.name,token:l.seat.token,color:l.seat.color})),this.settings,void 0,this.now()),Vl(this.game,this.now()),this.broadcast([{type:"start"}]);return}case"lobby":if(!r||!this.game||this.game.phase==="play")return;this.game=null;for(let o of[...this.members.values()])o.ai=!1,!o.client&&!o.bot&&this.members.delete(o.who);break;case"chat":{let o=Math.floor(Number(t.n));if(!Lr[o])return;let l=this.now();if(l-(n.chatAt||0)<1500)return;n.chatAt=l;for(let c of this.online)c.client.send({t:"chat",id:n.id,n:o});return}case"kick":{if(!r)return;let o=[...this.members.values()].find(c=>c.id===t.id);if(!o||o===n)return;let l=this.inGame(o)?jl(this.game,o.id,"is removed by the host").events:[];o.bot||this.banned.add(o.who),this.members.delete(o.who),o.client&&(o.client.send({t:"error",code:"kicked",text:"The host removed you from this room"}),o.client.room=null),this.broadcast(l);return}case"addBot":{if(!r||!a)return;if(this.seated().length>=ti)return s("All six seats are taken");if(this.members.size>=qd)return s("The room is full");let o=new Set([...this.members.values()].map(h=>h.name)),l=Bt(this.settings.map).botNames.find(h=>!o.has(h))||`Bot ${this.nextId}`,c={who:`bot${this.nextId}x${Math.random().toString(36).slice(2,8)}`,id:`p${this.nextId++}`,name:l,client:null,seat:null,bot:!0,joined:this.now()};this.members.set(c.who,c),this.autoSeat(c);break}case"aiPlay":{if(!r||a)return;let o=[...this.members.values()].find(l=>l.id===t.id);if(!o||o.client||o.bot||!this.inGame(o))return;o.ai=!0,this.broadcast([{type:"aiTakeover",p:o.id}]);return}case"host":{if(!r)return;let o=[...this.members.values()].find(l=>l.id===t.id&&l.client);o&&(this.hostWho=o.who);break}default:return}this.broadcast()}tick(e=this.now()){if(!this.game||this.game.phase!=="play")return;let t=Vl(this.game,e);(t.events.length||t.changed)&&this.broadcast(t.events),this.takeOverAway(e),this.botsMove(e)}takeOverAway(e){let t=this.game,n=t.players[t.turn],r=[...this.members.values()].find(a=>a.id===n.id);if(!r||r.client||Yd(r)){this.awayFor=null;return}!this.awayFor||this.awayFor.id!==r.id?this.awayFor={id:r.id,since:e}:e-this.awayFor.since>Sg&&(r.ai=!0,this.awayFor=null,this.broadcast([{type:"aiTakeover",p:r.id}]))}botsMove(e){if(e<this.botAt||!this.online.length)return;let t=this.game;for(let n of this.members.values()){if(!Yd(n)||t.phase!=="play")continue;let r=this.botMem.get(n.id);r||this.botMem.set(n.id,r=Xd());for(let a=0;a<4;a++){let s=jd(t,n.id,e,r);if(!s)break;let o=Wl(t,n.id,s,e);if(o.error){r.avoid.add(JSON.stringify(s));continue}r.avoid.clear();let l=o.events.find(h=>h.type==="move"),c=o.events.some(h=>h.type==="ride");this.botAt=e+(s.type==="roll"?1800+(l?Math.min(12,Math.abs(l.steps))*170:0)+(o.events.some(h=>h.type==="card")?1400:0):c?3200:s.type==="bid"||s.type==="pass"?700:1e3),this.broadcast(o.events);return}}}summary(){let e=this.game;return{code:this.code,name:this.name,host:(this.members.get(this.hostWho)||{}).id||"",phase:e?e.phase:"lobby",settings:this.settings,listed:this.listed,members:[...this.members.values()].map(t=>({id:t.id,name:t.name,online:!!t.client||!!t.bot,seat:t.seat,bot:!!t.bot,ai:!!(t.ai&&!t.client)}))}}listing(){return{code:this.code,name:this.name,people:this.online.length,seated:this.seated().length,max:ti,phase:this.game?this.game.phase:"lobby"}}broadcast(e=[]){let t=this.summary(),n=this.now();for(let r of this.online)r.client.send({t:"sync",you:r.id,now:n,room:t,game:this.game?Ud(this.game,r.id):null,events:e});this.onChange&&this.onChange(this)}serialize(){return{code:this.code,name:this.name,listed:this.listed,hostWho:this.hostWho,settings:this.settings,game:this.game,nextId:this.nextId,banned:[...this.banned],members:[...this.members.values()].map(({who:e,id:t,name:n,seat:r,joined:a,bot:s,ai:o})=>({who:e,id:t,name:n,seat:r,joined:a,bot:!!s,ai:!!o}))}}static restore(e,t){let n=new i(e.code,e.name,t);n.listed=e.listed!==!1,n.hostWho=e.hostWho,n.settings=Na(e.settings),n.game=e.game||null,n.nextId=e.nextId||1,n.banned=new Set(e.banned||[]);for(let r of e.members||[])n.members.set(r.who,{...r,client:null});return n}};var Zd="ABCDEFGHJKLMNPQRSTUVWXYZ",$l=()=>Array.from({length:4},()=>Zd[Math.random()*Zd.length|0]).join(""),Zl=i=>String(i||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,4),Tg=12e4,Eg=6e4,Ag=5*6e4,Rg=60*6e4,Ls=class{constructor(e={}){this.rooms=new Map,this.maxRooms=e.maxRooms||500,this.canCreate=e.canCreate||(()=>!0),this.makeCode=e.makeCode||(()=>{for(;;){let t=$l();if(!this.rooms.has(t))return t}}),this.roomOpts=e.roomOpts||{},this.clients=new Set,this.now=e.now||Date.now,this.keepEmpty=!!e.keepEmpty}connect(e){return e.who="",e.name="",e.room=null,e.seen=this.now(),this.clients.add(e),{message:t=>{try{this.message(e,t)}catch(n){console.error("hub: message failed",t&&t.t,n)}},close:()=>this.disconnect(e)}}disconnect(e){this.clients.delete(e)&&e.room&&e.room.leave(e)}message(e,t){if(!t||typeof t.t!="string")return;e.seen=this.now();let n=e.room;switch(t.t){case"ping":e.send({t:"pong"});return;case"hello":{let r=$d(t.who);if(!r)return e.send({t:"error",text:"Bad hello"});n&&r!==e.who&&n.leave(e),e.who=r,e.name=Pr(t.name)||e.name,e.send({t:"welcome",create:this.canCreate(e)});return}case"list":e.send({t:"rooms",rooms:[...this.rooms.values()].filter(r=>r.listed&&r.online.length).map(r=>r.listing())});return;case"create":{if(!e.who)return;if(!this.canCreate(e))return e.send({t:"error",text:"Rooms are opened by the host here"});if(this.rooms.size>=this.maxRooms)return e.send({t:"error",text:"Too many rooms open \u2013 try again later"});n&&n.leave(e,!0);let r=t.code&&this.canCreate(e)==="any-code"?t.code:this.makeCode(),a=new Ir(r,t.name||`${e.name||"Someone"}'s table`,{...this.roomOpts,listed:t.listed!==!1});this.rooms.set(r,a),a.join(e);return}case"join":{if(!e.who)return;let r=this.rooms.get(String(t.code||"").toUpperCase());if(!r)return e.send({t:"error",code:"noroom",text:"No room with that code"});if(r===n&&r.members.get(e.who)?.client===e)return;n&&n.leave(e,!0);let a=r.join(e);a&&e.send({t:"error",code:"refused",text:a});return}case"leave":n&&n.leave(e,!0),e.send({t:"left"});return;default:n&&n.handle(e,t)}}tick(){let e=this.now();for(let t of[...this.clients])if(e-t.seen>Tg){this.disconnect(t);try{t.close()}catch{}}for(let[t,n]of this.rooms){n.tick(e);let r=n.members.get(n.hostWho);if(r&&!r.client&&n.online.length?(n.hostAway=n.hostAway||e,e-n.hostAway>Eg&&(n.passHost(),n.hostAway=0,n.broadcast())):n.hostAway=0,!this.keepEmpty&&!n.online.length&&n.emptySince){let a=n.game&&n.game.phase==="play"?Rg:Ag;e-n.emptySince>a&&this.rooms.delete(t)}}}};var Cg="https://cdn.jsdelivr.net/npm/peerjs@1.5.5/dist/peerjs.min.js",kg="sha384-x0YgkOr/3UOZP2CRDxGW9e0Q+2Qjyr3uJrm4xU32Y7ZCNAo7Cc7bjhrZMi/dwczu",Ds="parcel-v1-",Jl="parcel.hosted",Pg=12*36e5,Ns=null;function Kl(){return window.Peer?Promise.resolve(window.Peer):(Ns||(Ns=new Promise((i,e)=>{let t=document.createElement("script");t.src=Cg,t.integrity=kg,t.crossOrigin="anonymous",t.onload=()=>window.Peer?i(window.Peer):e(new Error("PeerJS failed to load")),t.onerror=()=>{Ns=null,e(new Error("Could not load PeerJS \u2013 are you offline?"))},document.head.appendChild(t)})),Ns)}function Us(i,e){return new Promise((t,n)=>{let r=e?new i(e,{debug:0}):new i({debug:0}),a=setTimeout(()=>{r.destroy(),n(Object.assign(new Error("The connection broker did not answer"),{type:"timeout"}))},12e3);r.once("open",()=>{clearTimeout(a),t(r)}),r.once("error",s=>{clearTimeout(a),r.destroy(),n(s)})})}var Ig=i=>new Promise(e=>setTimeout(e,i));function Ql(){try{let i=JSON.parse(localStorage.getItem(Jl)||"null");if(i&&i.code&&Date.now()-i.at<Pg&&i.room&&(!i.room.game||i.room.game.v===2))return i}catch{}return null}function ec(){try{localStorage.removeItem(Jl)}catch{}}var Ua=class{constructor(){this.peer=null,this.code="",this.closed=!1,this.conns=new Set,this.selfWho="",this.hub=new Ls({keepEmpty:!0,canCreate:e=>e.local?"any-code":!1})}async open(e=null){let t=await Kl();if(e){let n=Date.now()+3e4;for(;;)try{this.peer=await Us(t,Ds+e.code);break}catch(a){if(a.type!=="unavailable-id"||Date.now()>n)throw a;await Ig(2e3)}this.code=e.code;let r=Ir.restore(e.room,{});this.hub.rooms.set(this.code,r)}else{let n=null;for(let r=0;r<6&&!this.peer;r++){let a=$l();try{this.peer=await Us(t,Ds+a),this.code=a}catch(s){if(n=s,s.type!=="unavailable-id")break}}if(!this.peer)throw n||new Error("Could not open a room")}return this.watchPeer(),this.timer=setInterval(()=>this.tick(),500),this.code}watchPeer(){let e=this.peer;e.on("connection",t=>this.accept(t)),e.on("disconnected",()=>{this.closed||setTimeout(()=>{try{e.destroyed||e.reconnect()}catch{}},1500)}),e.on("error",t=>console.warn("[host] peer:",t.type))}tick(){this.hub.tick();let e=this.hub.rooms.get(this.code);e&&!e.onChange&&(e.onChange=()=>this.save()),this.peer&&this.peer.destroyed&&!this.closed&&!this.reopening&&this.reopen()}async reopen(){this.reopening=!0;try{let e=await Kl();this.peer=await Us(e,Ds+this.code),this.watchPeer()}catch{}this.reopening=!1}save(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{let e=this.hub.rooms.get(this.code);if(!(!e||this.closed))try{localStorage.setItem(Jl,JSON.stringify({code:this.code,at:Date.now(),who:this.selfWho,room:e.serialize()}))}catch{}},200)}accept(e){let t={send:a=>{if(e.open)try{e.send(JSON.stringify(a))}catch{}},close:()=>{try{e.close()}catch{}}},n=this.hub.connect(t);this.conns.add(e),e.on("data",a=>{try{n.message(typeof a=="string"?JSON.parse(a):a)}catch{}});let r=()=>{this.conns.delete(e),n.close()};e.on("close",r),e.on("error",r)}localLink(){let e=new Rr,t={local:!0,send:r=>{let a=JSON.parse(JSON.stringify(r));queueMicrotask(()=>e.deliver(a))},close:()=>e.ended()},n=this.hub.connect(t);return e.send=r=>{let a=JSON.parse(JSON.stringify(r));queueMicrotask(()=>n.message(a))},e.close=()=>{e.closed=!0,n.close()},e}close(){this.closed=!0,clearInterval(this.timer);for(let t of this.conns)try{t.send(JSON.stringify({t:"error",code:"closed",text:"The host closed the room"}))}catch{}ec();let e=this.peer;setTimeout(()=>{try{e&&e.destroy()}catch{}},300)}};async function tc(i){let e=await Kl(),t=await Us(e,null);return new Promise((n,r)=>{let a=t.connect(Ds+i,{reliable:!0}),s=new Rr,o=!1,l=h=>{if(!o){o=!0,clearTimeout(c);try{t.destroy()}catch{}r(new Error(h))}},c=setTimeout(()=>l("Could not reach that room"),15e3);t.on("error",h=>{h.type==="peer-unavailable"?l("No room with that code is open right now"):o||l("Could not connect \u2013 check your network")}),a.on("open",()=>{o=!0,clearTimeout(c),s.send=h=>{if(a.open)try{a.send(JSON.stringify(h))}catch{}},s.close=()=>{s.closed=!0;try{a.close()}catch{}setTimeout(()=>t.destroy(),200)},n(s)}),a.on("data",h=>{try{s.deliver(typeof h=="string"?JSON.parse(h):h)}catch{}}),a.on("close",()=>{s.ended();try{t.destroy()}catch{}}),a.on("error",()=>s.ended())})}var sm=2;var Lg=0,Xo=1,ma=2;var sr=100,Ng=101,Dg=102;var Ug=200,Og=201,zg=202,Bg=203,zc=204,Bc=205,Fg=206,Hg=207,Gg=208,Vg=209,Wg=210,jg=211,Xg=212,qg=213,Yg=214,$g=0,Zg=1,Kg=2,Jg=3,Qg=4,e0=5,t0=6,n0=7;var om=4;var lm=300,na=301,ia=302,Fc=303,Hc=304,qo=306,ra=1e3,Ja=1001,Gc=1002,Dn=1003,i0=1004;var Os=1005;var gn=1006,nc=1007;var Pi=1008;var On=1009,cm=1010,hm=1011,Qa=1012,su=1013,mi=1014,qn=1015,yi=1016,ou=1017,lu=1018,aa=1020,um=35902,dm=1021,pm=1022,Yn=1023,mm=1024,fm=1025,es=1026,sa=1027,ds=1028,cu=1029,gm=1030,hu=1031;var uu=1033,go=33776,yo=33777,vo=33778,xo=33779,Vc=35840,Wc=35841,jc=35842,Xc=35843,qc=36196,Yc=37492,$c=37496,Zc=37808,Kc=37809,Jc=37810,Qc=37811,eh=37812,th=37813,nh=37814,ih=37815,rh=37816,ah=37817,sh=37818,oh=37819,lh=37820,ch=37821,_o=36492,hh=36494,uh=36495,ym=36283,dh=36284,ph=36285,mh=36286;var Mo=2300,fh=2301,ic=2302,Kd=2400,Jd=2401,Qd=2402;var Jr="",Rt="srgb",fa="srgb-linear",Yo="linear",mt="srgb";var Nr=7680;var r0=512,a0=513,s0=514,o0=515,l0=516,c0=517,h0=518,u0=519,gh=35044;var ep="300 es",oa=2e3,wo=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bo=Math.PI/180,yh=180/Math.PI;function di(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(tn[255&i]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[255&e]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[63&t|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[255&n]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function d0(i,e){return(i%e+e)%e}function rc(i,e,t){return(1-t)*i+t*e}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,r,a,s,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=r[0],m=r[3],y=r[6],v=r[1],x=r[4],b=r[7],P=r[2],T=r[5],L=r[8];return a[0]=s*g+o*v+l*P,a[3]=s*m+o*x+l*T,a[6]=s*y+o*b+l*L,a[1]=c*g+h*v+u*P,a[4]=c*m+h*x+u*T,a[7]=c*y+h*b+u*L,a[2]=d*g+p*v+f*P,a[5]=d*m+p*x+f*T,a[8]=d*y+p*b+f*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-n*a*h+n*o*l+r*a*c-r*s*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,p=c*a-s*l,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(o*n-r*s)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*a-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*a)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){let l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ac.makeScale(e,t)),this}rotate(e){return this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ac=new Ge;function vm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function p0(){let i=So("canvas");return i.style.display="block",i}var tp={};function Ya(i){i in tp||(tp[i]=!0,console.warn(i))}var at={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===mt&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=ea(i.r),i.g=ea(i.g),i.b=ea(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jr?Yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function ea(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var np=[.64,.33,.3,.6,.15,.06],ip=[.2126,.7152,.0722],rp=[.3127,.329],ap=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Dr;at.define({[fa]:{primaries:np,whitePoint:rp,transfer:Yo,toXYZ:ap,fromXYZ:sp,luminanceCoefficients:ip,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:np,whitePoint:rp,transfer:mt,toXYZ:ap,fromXYZ:sp,luminanceCoefficients:ip,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});var vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dr===void 0&&(Dr=So("canvas")),Dr.width=e.width,Dr.height=e.height;let n=Dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=255*pi(a[s]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*pi(t[n]/255)):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m0=0,To=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(sc(r[s].image)):a.push(sc(r[s]))}else a=sc(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var f0=0,dn=class i extends Li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,a=1006,s=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=di(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Ja:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Ja:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null,dn.DEFAULT_MAPPING=lm,dn.DEFAULT_ANISOTROPY=1;var _t=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(p+1)/2,P=(y+1)/2,T=(h+d)/4,L=(u+g)/4,z=(f+m)/4;return x>b&&x>P?x<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(x),r=T/n,a=L/n):b>P?b<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),n=T/r,a=z/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=L/a,r=z/a),this.set(n,r,a,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let a=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];let s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Eo=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _h=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=a[s+0],p=a[s+1],f=a[s+2],g=a[s+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==f){let m=1-o,y=l*d+c*p+h*f+u*g,v=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){let P=Math.sqrt(x),T=Math.atan2(P,y*v);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P}let b=o*v;if(l=l*m+d*b,c=c*m+p*b,h=h*m+f*b,u=u*m+g*b,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,s){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=a[s],d=a[s+1],p=a[s+2],f=a[s+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(a/2),d=l(n/2),p=l(r/2),f=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-n*c,this._z=a*h+s*c+n*l-r*o,this._w=s*h-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,a=this._z,s=this._w,o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),h=2*(o*t-a*r),u=2*(a*n-s*t);return this.x=t+l*c+s*u-o*h,this.y=n+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oc=new C,op=new rn,zn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,In):In.fromBufferAttribute(a,s),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),Bs.subVectors(this.max,Oa),Ur.subVectors(e.a,Oa),Or.subVectors(e.b,Oa),zr.subVectors(e.c,Oa),Ti.subVectors(Or,Ur),Ei.subVectors(zr,Or),Qi.subVectors(Ur,zr);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-Qi.z,Qi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,Qi.z,0,-Qi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-Qi.y,Qi.x,0];return!!lc(t,Ur,Or,zr,Bs)&&(t=[1,0,0,0,1,0,0,0,1],!!lc(t,Ur,Or,zr,Bs)&&(Fs.crossVectors(Ti,Ei),t=[Fs.x,Fs.y,Fs.z],lc(t,Ur,Or,zr,Bs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(In).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ai=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,zs=new zn,Ur=new C,Or=new C,zr=new C,Ti=new C,Ei=new C,Qi=new C,Oa=new C,Bs=new C,Fs=new C,er=new C;function lc(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){er.fromArray(i,a);let o=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=t.dot(er),h=n.dot(er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var g0=new zn,za=new C,cc=new C,Bn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):g0.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);let t=za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(za,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(cc)),this.expandByPoint(za.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new C,hc=new C,Hs=new C,Ai=new C,uc=new C,Gs=new C,dc=new C,cr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hc.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(hc);let a=.5*e.distanceTo(t),s=-this.direction.dot(Hs),o=Ai.dot(this.direction),l=-Ai.dot(Hs),c=Ai.lengthSq(),h=Math.abs(1-s*s),u,d,p,f;if(h>0)if(u=s*l-o,d=s*o-l,f=a*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(hc).addScaledVector(Hs,d),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||a>r?null:((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,r,a){uc.subVectors(t,e),Gs.subVectors(n,e),dc.crossVectors(uc,Gs);let s,o=this.direction.dot(dc);if(o>0){if(r)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}Ai.subVectors(this.origin,e);let l=s*this.direction.dot(Gs.crossVectors(Ai,Gs));if(l<0)return null;let c=s*this.direction.dot(uc.cross(Ai));if(c<0||l+c>o)return null;let h=-s*Ai.dot(dc);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(e,t,n,r,a,s,o,l,c,h,u,d,p,f,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,h,u,d,p,f,g,m)}set(e,t,n,r,a,s,o,l,c,h,u,d,p,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=s,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),a=1/Br.setFromMatrixColumn(e,1).length(),s=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=s*h,p=s*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=s*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-s*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=s*h,t[9]=g-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let d=s*h,p=s*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let d=s*l,p=s*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=s*l,p=s*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=s*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,v0)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ri.crossVectors(n,mn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ri.crossVectors(n,mn)),Ri.normalize(),Vs.crossVectors(mn,Ri),r[0]=Ri.x,r[4]=Vs.x,r[8]=mn.x,r[1]=Ri.y,r[5]=Vs.y,r[9]=mn.y,r[2]=Ri.z,r[6]=Vs.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],y=n[14],v=n[3],x=n[7],b=n[11],P=n[15],T=r[0],L=r[4],z=r[8],F=r[12],G=r[1],q=r[5],j=r[9],K=r[13],Y=r[2],ee=r[6],te=r[10],he=r[14],ce=r[3],_e=r[7],Ae=r[11],oe=r[15];return a[0]=s*T+o*G+l*Y+c*ce,a[4]=s*L+o*q+l*ee+c*_e,a[8]=s*z+o*j+l*te+c*Ae,a[12]=s*F+o*K+l*he+c*oe,a[1]=h*T+u*G+d*Y+p*ce,a[5]=h*L+u*q+d*ee+p*_e,a[9]=h*z+u*j+d*te+p*Ae,a[13]=h*F+u*K+d*he+p*oe,a[2]=f*T+g*G+m*Y+y*ce,a[6]=f*L+g*q+m*ee+y*_e,a[10]=f*z+g*j+m*te+y*Ae,a[14]=f*F+g*K+m*he+y*oe,a[3]=v*T+x*G+b*Y+P*ce,a[7]=v*L+x*q+b*ee+P*_e,a[11]=v*z+x*j+b*te+P*Ae,a[15]=v*F+x*K+b*he+P*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*l*u-r*c*u-a*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+a*s*d-r*s*p+r*c*h-a*l*h)+e[11]*(+t*c*u-t*o*p-a*s*u+n*s*p+a*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*s*u-n*s*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],v=u*m*c-g*d*c+g*l*p-o*m*p-u*l*y+o*d*y,x=f*d*c-h*m*c-f*l*p+s*m*p+h*l*y-s*d*y,b=h*g*c-f*u*c+f*o*p-s*g*p-h*o*y+s*u*y,P=f*u*l-h*g*l-f*o*d+s*g*d+h*o*m-s*u*m,T=t*v+n*x+r*b+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/T;return e[0]=v*L,e[1]=(g*d*a-u*m*a-g*r*p+n*m*p+u*r*y-n*d*y)*L,e[2]=(o*m*a-g*l*a+g*r*c-n*m*c-o*r*y+n*l*y)*L,e[3]=(u*l*a-o*d*a-u*r*c+n*d*c+o*r*p-n*l*p)*L,e[4]=x*L,e[5]=(h*m*a-f*d*a+f*r*p-t*m*p-h*r*y+t*d*y)*L,e[6]=(f*l*a-s*m*a-f*r*c+t*m*c+s*r*y-t*l*y)*L,e[7]=(s*d*a-h*l*a+h*r*c-t*d*c-s*r*p+t*l*p)*L,e[8]=b*L,e[9]=(f*u*a-h*g*a-f*n*p+t*g*p+h*n*y-t*u*y)*L,e[10]=(s*g*a-f*o*a+f*n*c-t*g*c-s*n*y+t*o*y)*L,e[11]=(h*o*a-s*u*a-h*n*c+t*u*c+s*n*p-t*o*p)*L,e[12]=P*L,e[13]=(h*g*r-f*u*r+f*n*d-t*g*d-h*n*m+t*u*m)*L,e[14]=(f*o*r-s*g*r-f*n*l+t*g*l+s*n*m-t*o*m)*L,e[15]=(s*u*r-h*o*r+h*n*l-t*u*l-s*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,p=a*h,f=a*u,g=s*h,m=s*u,y=o*u,v=l*c,x=l*h,b=l*u,P=n.x,T=n.y,L=n.z;return r[0]=(1-(g+y))*P,r[1]=(p+b)*P,r[2]=(f-x)*P,r[3]=0,r[4]=(p-b)*T,r[5]=(1-(d+y))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(f+x)*L,r[9]=(m-v)*L,r[10]=(1-(d+g))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,a=Br.set(r[0],r[1],r[2]).length(),s=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let l=1/a,c=1/s,h=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=2e3){let l=this.elements,c=2*a/(t-e),h=2*a/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===oa)p=-(s+a)/(s-a),f=-2*s*a/(s-a);else{if(o!==wo)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),f=-s*a/(s-a)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(s-a),d=(t+e)*c,p=(n+r)*h,f,g;if(o===oa)f=(s+a)*u,g=-2*u;else{if(o!==wo)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=a*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Br=new C,Ln=new ze,y0=new C(0,0,0),v0=new C(1,1,1),Ri=new C,Vs=new C,mn=new C,lp=new ze,cp=new rn,Qt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER="XYZ";var ts=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},x0=0,hp=new C,Fr=new rn,oi=new ze,Ws=new C,Ba=new C,_0=new C,b0=new rn,up=new C(1,0,0),dp=new C(0,1,0),pp=new C(0,0,1),mp={type:"added"},M0={type:"removed"},Hr={type:"childadded",child:null},pc={type:"childremoved",child:null},un=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Qt,n=new rn,r=new C(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ge}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(pp,e)}translateOnAxis(e,t){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ba,Ws,this.up):oi.lookAt(Ws,Ba,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(oi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,b0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),f=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};un.DEFAULT_UP=new C(0,1,0),un.DEFAULT_MATRIX_AUTO_UPDATE=!0,un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new C,li=new C,mc=new C,ci=new C,Gr=new C,Vr=new C,fp=new C,fc=new C,gc=new C,yc=new C,vc=new _t,xc=new _t,_c=new _t,ui=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Nn.subVectors(r,t),li.subVectors(n,t),mc.subVectors(e,t);let s=Nn.dot(Nn),o=Nn.dot(li),l=Nn.dot(mc),c=li.dot(li),h=li.dot(mc),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(s*h-o*l)*d;return a.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ci)!==null&&ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ci.x),l.addScaledVector(s,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return vc.setScalar(0),xc.setScalar(0),_c.setScalar(0),vc.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(vc,a.x),s.addScaledVector(xc,a.y),s.addScaledVector(_c,a.z),s}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),li.subVectors(e,t),Nn.cross(li).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),.5*Nn.cross(li).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,s,o;Gr.subVectors(r,n),Vr.subVectors(a,n),fc.subVectors(e,n);let l=Gr.dot(fc),c=Vr.dot(fc);if(l<=0&&c<=0)return t.copy(n);gc.subVectors(e,r);let h=Gr.dot(gc),u=Vr.dot(gc);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(Gr,s);yc.subVectors(e,a);let p=Gr.dot(yc),f=Vr.dot(yc);if(f>=0&&p<=f)return t.copy(a);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Vr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return fp.subVectors(a,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(fp,o);let y=1/(m+g+d);return s=g*y,o=d*y,t.copy(n).addScaledVector(Gr,s).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},js={h:0,s:0,l:0};function bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=d0(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=bc(s,a,e+1/3),this.g=bc(s,a,e),this.b=bc(s,a,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=xm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return at.fromWorkingColorSpace(nn.copy(this),e),65536*Math.round(Yt(255*nn.r,0,255))+256*Math.round(Yt(255*nn.g,0,255))+Math.round(Yt(255*nn.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,a=nn.b,s=Math.max(n,r,a),o=Math.min(n,r,a),l,c,h=(o+s)/2;if(o===s)l=0,c=0;else{let u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-n)/u+2;break;case a:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Rt){at.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(js);let n=rc(Ci.h,js.h,t),r=rc(Ci.s,js.s,t),a=rc(Ci.l,js.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ie;Ie.NAMES=xm;var w0=0,Ni=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=di(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Bc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(a){let s=[];for(let o in a){let l=a[o];delete l.metadata,s.push(l)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yn=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},s_=S0();function S0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}var Ht=new C,Xs=new le,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),a=ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}};var Ao=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ro=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Fe=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},T0=0,Mn=new ze,Mc=new un,Wr=new C,fn=new zn,Fa=new zn,qt=new C,Pt=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?Ro:Ao)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new Ge().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,a=e.length;r<a;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fe(n,3))}else{for(let n=0,r=t.count;n<r;n++){let a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let a=t[n];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(fn.min,Fa.min),fn.expandByPoint(qt),qt.addVectors(fn.max,Fa.max),fn.expandByPoint(qt)):(fn.expandByPoint(Fa.min),fn.expandByPoint(Fa.max))}fn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)qt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),qt.add(Wr)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new C,l[z]=new C;let c=new C,h=new C,u=new C,d=new le,p=new le,f=new le,g=new C,m=new C;function y(z,F,G){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,G),d.fromBufferAttribute(a,z),p.fromBufferAttribute(a,F),f.fromBufferAttribute(a,G),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let q=1/(p.x*f.y-f.x*p.y);isFinite(q)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(q),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(q),o[z].add(g),o[F].add(g),o[G].add(g),l[z].add(m),l[F].add(m),l[G].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let z=0,F=v.length;z<F;++z){let G=v[z],q=G.start;for(let j=q,K=q+G.count;j<K;j+=3)y(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let x=new C,b=new C,P=new C,T=new C;function L(z){P.fromBufferAttribute(r,z),T.copy(P);let F=o[z];x.copy(F),x.sub(P.multiplyScalar(P.dot(F))).normalize(),b.crossVectors(T,F);let G=b.dot(l[z])<0?-1:1;s.setXYZW(z,x.x,x.y,x.z,G)}for(let z=0,F=v.length;z<F;++z){let G=v[z],q=G.start;for(let j=q,K=q+G.count;j<K;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new C,a=new C,s=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)d[f++]=c[p++]}return new Jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let a=e.morphAttributes;for(let c in a){let h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gp=new ze,tr=new cr,qs=new Bn,yp=new C,Ys=new C,$s=new C,Zs=new C,wc=new C,Ks=new C,vp=new C,Js=new C,Ye=class extends un{constructor(e=new Pt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){Ks.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],u=a[l];h!==0&&(wc.fromBufferAttribute(u,e),s?Ks.addScaledVector(wc,h):Ks.addScaledVector(wc.sub(t),h))}t.add(Ks)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(a),tr.copy(e.ray).recast(e.near),qs.containsPoint(tr.origin)===!1&&(tr.intersectSphere(qs,yp)===null||tr.origin.distanceToSquared(yp)>(e.far-e.near)**2))return;gp.copy(a).invert(),tr.copy(e.ray).applyMatrix4(gp),n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,tr)}}_computeIntersections(e,t,n){let r,a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=s[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)r=Qs(this,y,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)r=Qs(this,s,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=s[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)r=Qs(this,y,e,n,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)r=Qs(this,s,e,n,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Qs(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,Ys),i.getVertexPosition(l,$s),i.getVertexPosition(c,Zs);let h=(function(u,d,p,f,g,m,y,v){let x;if(x=d.side===1?f.intersectTriangle(y,m,g,!0,v):f.intersectTriangle(g,m,y,d.side===0,v),x===null)return null;Js.copy(v),Js.applyMatrix4(u.matrixWorld);let b=p.ray.origin.distanceTo(Js);return b<p.near||b>p.far?null:{distance:b,point:Js.clone(),object:u}})(i,e,t,n,Ys,$s,Zs,vp);if(h){let u=new C;ui.getBarycoord(vp,Ys,$s,Zs,u),r&&(h.uv=ui.getInterpolatedAttribute(r,o,l,c,u,new le)),a&&(h.uv1=ui.getInterpolatedAttribute(a,o,l,c,u,new le)),s&&(h.normal=ui.getInterpolatedAttribute(s,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};ui.getNormal(Ys,$s,Zs,d.normal),h.face=d,h.barycoord=u}return h}var ye=class i extends Pt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=0,p=0;function f(g,m,y,v,x,b,P,T,L,z,F){let G=b/L,q=P/z,j=b/2,K=P/2,Y=T/2,ee=L+1,te=z+1,he=0,ce=0,_e=new C;for(let Ae=0;Ae<te;Ae++){let oe=Ae*q-K;for(let ue=0;ue<ee;ue++){let be=ue*G-j;_e[g]=be*v,_e[m]=oe*x,_e[y]=Y,c.push(_e.x,_e.y,_e.z),_e[g]=0,_e[m]=0,_e[y]=T>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(ue/L),u.push(1-Ae/z),he+=1}}for(let Ae=0;Ae<z;Ae++)for(let oe=0;oe<L;oe++){let ue=d+oe+ee*Ae,be=d+oe+ee*(Ae+1),Se=d+(oe+1)+ee*(Ae+1),ge=d+(oe+1)+ee*Ae;l.push(ue,be,ge),l.push(be,Se,ge),ce+=6}o.addGroup(p,ce,F),p+=ce,d+=he}f("z","y","x",-1,-1,n,t,e,s,a,0),f("z","y","x",1,-1,n,t,-e,s,a,1),f("x","z","y",1,1,e,n,t,r,s,2),f("x","z","y",1,-1,e,n,-t,r,s,3),f("x","y","z",1,-1,e,t,n,r,a,4),f("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function la(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=la(i[t]);for(let r in n)e[r]=n[r]}return e}function _m(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var E0={clone:la,merge:cn},vn=class extends Ni{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ns=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=oa}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new C,xp=new le,_p=new le,hn=class extends ns{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*yh*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*bo*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*yh*Math.atan(Math.tan(.5*bo*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,xp,_p),t.subVectors(_p,xp)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*bo*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jr=-90,bh=class extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hn(jr,1,e,t);r.layers=this.layers,this.add(r);let a=new hn(jr,1,e,t);a.layers=this.layers,this.add(a);let s=new hn(jr,1,e,t);s.layers=this.layers,this.add(s);let o=new hn(jr,1,e,t);o.layers=this.layers,this.add(o);let l=new hn(jr,1,e,t);l.layers=this.layers,this.add(l);let c=new hn(jr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(let c of t)this.remove(c);if(e===oa)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==wo)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Co=class extends dn{constructor(e,t,n,r,a,s,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:na,n,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mh=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Co(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ye(5,5,5),a=new vn({name:"CubemapFromEquirect",uniforms:la(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new Ye(r,a),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=gn),new bh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}},Sc=new C,A0=new C,R0=new Ge,hi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Sc.subVectors(n,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||R0.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},nr=new Bn,eo=new C,ca=class{constructor(e=new hi,t=new hi,n=new hi,r=new hi,a=new hi,s=new hi){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],g=r[10],m=r[11],y=r[12],v=r[13],x=r[14],b=r[15];if(n[0].setComponents(l-a,d-c,m-p,b-y).normalize(),n[1].setComponents(l+a,d+c,m+p,b+y).normalize(),n[2].setComponents(l+s,d+h,m+f,b+v).normalize(),n[3].setComponents(l-s,d-h,m-f,b-v).normalize(),n[4].setComponents(l-o,d-u,m-g,b-x).normalize(),t===oa)n[5].setComponents(l+o,d+u,m+g,b+x).normalize();else{if(t!==wo)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(eo.x=r.normal.x>0?e.max.x:e.min.x,eo.y=r.normal.y>0?e.max.y:e.min.y,eo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bm(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function C0(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let a=e.get(t);return void((!a||a.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(a,s){let o=a.array,l=a.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(s,h),i.bufferData(s,o,l),a.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=a.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(a,s,o){let l=s.array,c=s.updateRanges;if(i.bindBuffer(o,a),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var fi=class i extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let v=y*d-s;for(let x=0;x<c;x++){let b=x*u-a;f.push(b,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let x=v+c*y,b=v+c*(y+1),P=v+1+c*(y+1),T=v+1+c*y;p.push(x,b,T),p.push(b,P,T)}this.setIndex(p),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},We={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},jn={basic:{uniforms:cn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:cn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:cn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:cn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:cn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:cn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:cn([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:cn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:cn([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:cn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:cn([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:cn([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:cn([fe.lights,fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};jn.physical={uniforms:cn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var to={r:0,b:0,g:0},ir=new Qt,k0=new ze;function P0(i,e,t,n,r,a,s){let o=new Ie(0),l,c,h=a===!0?0:1,u=null,d=0,p=null;function f(m){let y=m.isScene===!0?m.background:null;return y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y}function g(m,y){m.getRGB(to,_m(i)),n.buffers.color.setClear(to.r,to.g,to.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),h=y,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let y=!1,v=f(m);v===null?g(o,h):v&&v.isColor&&(g(v,1),y=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,y){let v=f(y);v&&(v.isCubeTexture||v.mapping===qo)?(c===void 0&&(c=new Ye(new ye(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:la(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ir.copy(y.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(ir)),c.material.toneMapped=at.getTransfer(v.colorSpace)!==mt,u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new fi(2,2),new vn({name:"BackgroundMaterial",uniforms:la(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function I0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),a=r,s=!1;function o(y){return i.bindVertexArray(y)}function l(y){return i.deleteVertexArray(y)}function c(y){let v=[],x=[],b=[];for(let P=0;P<t;P++)v[P]=0,x[P]=0,b[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:b,object:y,attributes:{},index:null}}function h(){let y=a.newAttributes;for(let v=0,x=y.length;v<x;v++)y[v]=0}function u(y){d(y,0)}function d(y,v){let x=a.newAttributes,b=a.enabledAttributes,P=a.attributeDivisors;x[y]=1,b[y]===0&&(i.enableVertexAttribArray(y),b[y]=1),P[y]!==v&&(i.vertexAttribDivisor(y,v),P[y]=v)}function p(){let y=a.newAttributes,v=a.enabledAttributes;for(let x=0,b=v.length;x<b;x++)v[x]!==y[x]&&(i.disableVertexAttribArray(x),v[x]=0)}function f(y,v,x,b,P,T,L){L===!0?i.vertexAttribIPointer(y,v,x,P,T):i.vertexAttribPointer(y,v,x,b,P,T)}function g(){m(),s=!0,a!==r&&(a=r,o(a.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(y,v,x,b,P){let T=!1,L=(function(z,F,G){let q=G.wireframe===!0,j=n[z.id];j===void 0&&(j={},n[z.id]=j);let K=j[F.id];K===void 0&&(K={},j[F.id]=K);let Y=K[q];return Y===void 0&&(Y=c(i.createVertexArray()),K[q]=Y),Y})(b,x,v);a!==L&&(a=L,o(a.object)),T=(function(z,F,G,q){let j=a.attributes,K=F.attributes,Y=0,ee=G.getAttributes();for(let te in ee)if(ee[te].location>=0){let he=j[te],ce=K[te];if(ce===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),he===void 0||he.attribute!==ce||ce&&he.data!==ce.data)return!0;Y++}return a.attributesNum!==Y||a.index!==q})(y,b,x,P),T&&(function(z,F,G,q){let j={},K=F.attributes,Y=0,ee=G.getAttributes();for(let te in ee)if(ee[te].location>=0){let he=K[te];he===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(he=z.instanceColor));let ce={};ce.attribute=he,he&&he.data&&(ce.data=he.data),j[te]=ce,Y++}a.attributes=j,a.attributesNum=Y,a.index=q})(y,b,x,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(T||s)&&(s=!1,(function(z,F,G,q){h();let j=q.attributes,K=G.getAttributes(),Y=F.defaultAttributeValues;for(let ee in K){let te=K[ee];if(te.location>=0){let he=j[ee];if(he===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(he=z.instanceColor)),he!==void 0){let ce=he.normalized,_e=he.itemSize,Ae=e.get(he);if(Ae===void 0)continue;let oe=Ae.buffer,ue=Ae.type,be=Ae.bytesPerElement,Se=ue===i.INT||ue===i.UNSIGNED_INT||he.gpuType===su;if(he.isInterleavedBufferAttribute){let ge=he.data,k=ge.stride,A=he.offset;if(ge.isInstancedInterleavedBuffer){for(let D=0;D<te.locationSize;D++)d(te.location+D,ge.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let D=0;D<te.locationSize;D++)u(te.location+D);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let D=0;D<te.locationSize;D++)f(te.location+D,_e/te.locationSize,ue,ce,k*be,(A+_e/te.locationSize*D)*be,Se)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<te.locationSize;ge++)d(te.location+ge,he.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<te.locationSize;ge++)u(te.location+ge);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ge=0;ge<te.locationSize;ge++)f(te.location+ge,_e/te.locationSize,ue,ce,_e*be,_e/te.locationSize*ge*be,Se)}}else if(Y!==void 0){let ce=Y[ee];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(te.location,ce);break;case 3:i.vertexAttrib3fv(te.location,ce);break;case 4:i.vertexAttrib4fv(te.location,ce);break;default:i.vertexAttrib1fv(te.location,ce)}}}}p()})(y,v,x,b),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(let y in n){let v=n[y];for(let x in v){let b=v[x];for(let P in b)l(b[P].object),delete b[P];delete v[x]}delete n[y]}},releaseStatesOfGeometry:function(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let x in v){let b=v[x];for(let P in b)l(b[P].object),delete b[P];delete v[x]}delete n[y.id]},releaseStatesOfProgram:function(y){for(let v in n){let x=n[v];if(x[y.id]===void 0)continue;let b=x[y.id];for(let P in b)l(b[P].object),delete b[P];delete x[y.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function L0(i,e,t){let n;function r(a,s,o){o!==0&&(i.drawArraysInstanced(n,a,s,o),t.update(s,n,o))}this.setMode=function(a){n=a},this.render=function(a,s){i.drawArrays(n,a,s),t.update(s,n,1)},this.renderInstances=r,this.renderMultiDraw=function(a,s,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,a,0,s,0,o);let l=0;for(let c=0;c<o;c++)l+=s[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(a,s,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<a.length;h++)r(a[h],s[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,a,0,s,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=s[u]*l[u];t.update(h,n,1)}}}function N0(i,e,t,n){let r;function a(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,textureFormatReadable:function(d){return d===Yn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==On&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==qn&&!p)},precision:s,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function D0(i){let e=this,t=null,n=0,r=!1,a=!1,s=new hi,o=new Ge,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=d+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==f;++v,x+=4)s.copy(h[v]).applyMatrix4(y,o),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||a&&!g)a?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=a?0:n,v=4*y,x=m.clippingState||null;l.value=x,x=c(p,u,v,d);for(let b=0;b!==v;++b)x[b]=t[b];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function U0(i){let e=new WeakMap;function t(r,a){return a===Fc?r.mapping=na:a===Hc&&(r.mapping=ia),r}function n(r){let a=r.target;a.removeEventListener("dispose",n);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping;if(a===Fc||a===Hc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let s=r.image;if(s&&s.height>0){let o=new Mh(s.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Di=class extends ns{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bp=[.125,.215,.35,.446,.526,.582],Ha=20,Tc=new Di,Mp=new Ie,Ec=null,Ac=0,Rc=0,Cc=!1,ar=(1+Math.sqrt(5))/2,Xr=1/ar,wp=[new C(-ar,Xr,0),new C(ar,Xr,0),new C(-Xr,0,ar),new C(Xr,0,ar),new C(0,ar,-Xr),new C(0,ar,Xr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Ac,Rc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:yi,format:Yn,colorSpace:fa,depthBuffer:!1},r=Sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(s){let o=[],l=[],c=[],h=s,u=s-4+1+bp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>s-4?f=bp[d-s+4-1]:d===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,y=1+g,v=[m,m,y,m,y,y,m,m,y,y,m,y],x=6,b=6,P=3,T=2,L=1,z=new Float32Array(P*b*x),F=new Float32Array(T*b*x),G=new Float32Array(L*b*x);for(let j=0;j<x;j++){let K=j%3*2/3-1,Y=j>2?0:-1,ee=[K,Y,0,K+2/3,Y,0,K+2/3,Y+1,0,K,Y,0,K+2/3,Y+1,0,K,Y+1,0];z.set(ee,P*b*j),F.set(v,T*b*j);let te=[j,j,j,j,j,j];G.set(te,L*b*j)}let q=new Pt;q.setAttribute("position",new Jt(z,P)),q.setAttribute("uv",new Jt(F,T)),q.setAttribute("faceIndex",new Jt(G,L)),o.push(q),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(a)),this._blurMaterial=(function(s,o,l){let c=new Float32Array(Ha),h=new C(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Ha,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:du(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(a,e,t)}return r}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,r){let a=new hn(90,1,t,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Mp),l.toneMapping=0,l.autoClear=!1;let u=new yn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Ye(new ye,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Mp),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(a.up.set(0,s[g],0),a.lookAt(o[g],0,0)):m===1?(a.up.set(0,0,s[g]),a.lookAt(0,o[g],0)):(a.up.set(0,s[g],0),a.lookAt(0,0,o[g]));let y=this._cubeSize;no(r,m*y,g>2?y:0,y,y),l.setRenderTarget(r),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===na||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ye(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let o=this._cubeSize;no(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,Tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=wp[(r-a-1)%wp.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ye(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,f=a/p,g=isFinite(a)?1+Math.floor(3*f):Ha;g>Ha&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let b=0;b<Ha;++b){let P=b/f,T=Math.exp(-P*P/2);m.push(T),b===0?y+=T:b<g&&(y+=2*T)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[r];no(t,3*x*(r>v-4?r-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Tc)}};function Sp(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tp(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ep(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function O0(i){let e=new WeakMap,t=null;function n(r){let a=r.target;a.removeEventListener("dispose",n);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping,s=a===Fc||a===Hc,o=a===na||a===ia;if(s||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new hr(i)),l=s?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return s&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new hr(i)),l=s?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function z0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ya("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function B0(i,e,t,n){let r={},a=new WeakMap;function s(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",s),delete r[c.id];let h=a.get(c);h&&(e.remove(h),a.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,y=g.length;m<y;m+=3){let v=g[m+0],x=g[m+1],b=g[m+2];c.push(v,x,x,b,b,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let v=m+0,x=m+1,b=m+2;c.push(v,x,x,b,b,v)}}}let p=new(vm(c)?Ro:Ao)(c,1);p.version=d;let f=a.get(l);f&&e.remove(f),a.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=a.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return a.get(l)}}}function F0(i,e,t){let n,r,a;function s(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*a,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,a=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*a),t.update(l,n,1)},this.renderInstances=s,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)s(o[d]/a,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function H0(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function G0(i,e,t){let n=new WeakMap,r=new _t;return{update:function(a,s,o){let l=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(s);if(u===void 0||u.count!==h){let z=function(){T.dispose(),n.delete(s),s.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=s.morphAttributes.position!==void 0,p=s.morphAttributes.normal!==void 0,f=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],m=s.morphAttributes.normal||[],y=s.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=s.attributes.position.count*v,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let P=new Float32Array(x*b*4*h),T=new Eo(P,x,b,h);T.type=qn,T.needsUpdate=!0;let L=4*v;for(let F=0;F<h;F++){let G=g[F],q=m[F],j=y[F],K=x*b*4*F;for(let Y=0;Y<G.count;Y++){let ee=Y*L;d===!0&&(r.fromBufferAttribute(G,Y),P[K+ee+0]=r.x,P[K+ee+1]=r.y,P[K+ee+2]=r.z,P[K+ee+3]=0),p===!0&&(r.fromBufferAttribute(q,Y),P[K+ee+4]=r.x,P[K+ee+5]=r.y,P[K+ee+6]=r.z,P[K+ee+7]=0),f===!0&&(r.fromBufferAttribute(j,Y),P[K+ee+8]=r.x,P[K+ee+9]=r.y,P[K+ee+10]=r.z,P[K+ee+11]=j.itemSize===4?r.w:1)}}u={count:h,texture:T,size:new le(x,b)},n.set(s,u),s.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=s.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function V0(i,e,t,n){let r=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=n.render.frame,l=s.geometry,c=e.get(s,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),r.get(s)!==o&&(t.update(s.instanceMatrix,i.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,i.ARRAY_BUFFER),r.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var ha=class extends dn{constructor(e,t,n,r,a,s,o,l,c,h=1026){if(h!==es&&h!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=mi),n===void 0&&h===sa&&(n=aa),super(null,r,a,s,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mm=new dn,Ap=new ha(1,1),wm=new Eo,Sm=new _h,Tm=new Co,Rp=[],Cp=[],kp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);function ga(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,a=Rp[r];if(a===void 0&&(a=new Float32Array(r),Rp[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function X0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Ip.set(n),i.uniformMatrix2fv(this.addr,!1,Ip),Xt(t,n)}}function $0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),Xt(t,n)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(jt(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),Xt(t,n)}}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function ey(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function ay(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),a;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Ap.compareFunction=515,a=Ap):a=Mm,t.setTexture2D(e||a,r)}function sy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Sm,r)}function oy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tm,r)}function ly(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wm,r)}function cy(i,e){i.uniform1fv(this.addr,e)}function hy(i,e){let t=ga(e,this.size,2);i.uniform2fv(this.addr,t)}function uy(i,e){let t=ga(e,this.size,3);i.uniform3fv(this.addr,t)}function dy(i,e){let t=ga(e,this.size,4);i.uniform4fv(this.addr,t)}function py(i,e){let t=ga(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function my(i,e){let t=ga(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fy(i,e){let t=ga(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gy(i,e){i.uniform1iv(this.addr,e)}function yy(i,e){i.uniform2iv(this.addr,e)}function vy(i,e){i.uniform3iv(this.addr,e)}function xy(i,e){i.uniform4iv(this.addr,e)}function _y(i,e){i.uniform1uiv(this.addr,e)}function by(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function wy(i,e){i.uniform4uiv(this.addr,e)}function Sy(i,e,t){let n=this.cache,r=e.length,a=$o(t,r);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Mm,a[s])}function Ty(i,e,t){let n=this.cache,r=e.length,a=$o(t,r);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Sm,a[s])}function Ey(i,e,t){let n=this.cache,r=e.length,a=$o(t,r);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Tm,a[s])}function Ay(i,e,t){let n=this.cache,r=e.length,a=$o(t,r);jt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||wm,a[s])}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return W0;case 35664:return j0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return $0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ly}})(t.type)}},Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return py;case 35675:return my;case 35676:return fy;case 5124:case 35670:return gy;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return xy;case 5125:return _y;case 36294:return by;case 36295:return My;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ay}})(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Lp(i,e){i.seq.push(e),i.map[e.id]=e}function Ry(i,e,t){let n=i.name,r=n.length;for(kc.lastIndex=0;;){let a=kc.exec(n),s=kc.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o|=0),c===void 0||c==="["&&s+2===r){Lp(t,c===void 0?new wh(o,i,e):new Sh(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Th(o),Lp(t,h)),t=h}}}var ta=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r);Ry(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function Np(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cy=0,Dp=new Ge;function Up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),s)}return r}function ky(i,e){let t=(function(n){at._getMatrix(Dp,at.workingColorSpace,n);let r=`mat3( ${Dp.elements.map((a=>a.toFixed(4)))} )`;switch(at.getTransfer(n)){case Yo:return[r,"LinearTransferOETF"];case mt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Py(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var io=new C;function Iy(){return at.getLuminanceCoefficients(io),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${io.x.toFixed(4)}, ${io.y.toFixed(4)}, ${io.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ga(i){return i!==""}function Op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(i){return i.replace(Ly,Dy)}var Ny=new Map;function Dy(i,e){let t=We[e];if(t===void 0){let n=Ny.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Eh(t)}var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(Uy,Oy)}function Oy(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Fp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zy(i,e,t,n){let r=i.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,l=(function(q){let j="SHADOWMAP_TYPE_BASIC";return q.shadowMapType===1?j="SHADOWMAP_TYPE_PCF":q.shadowMapType===2?j="SHADOWMAP_TYPE_PCF_SOFT":q.shadowMapType===3&&(j="SHADOWMAP_TYPE_VSM"),j})(t),c=(function(q){let j="ENVMAP_TYPE_CUBE";if(q.envMap)switch(q.envMapMode){case na:case ia:j="ENVMAP_TYPE_CUBE";break;case qo:j="ENVMAP_TYPE_CUBE_UV"}return j})(t),h=(function(q){let j="ENVMAP_MODE_REFLECTION";return q.envMap&&q.envMapMode===ia&&(j="ENVMAP_MODE_REFRACTION"),j})(t),u=(function(q){let j="ENVMAP_BLENDING_NONE";if(q.envMap)switch(q.combine){case 0:j="ENVMAP_BLENDING_MULTIPLY";break;case 1:j="ENVMAP_BLENDING_MIX";break;case 2:j="ENVMAP_BLENDING_ADD"}return j})(t),d=(function(q){let j=q.envMapCubeUVHeight;if(j===null)return null;let K=Math.log2(j)-2,Y=1/j;return{texelWidth:1/(3*Math.max(Math.pow(2,K),112)),texelHeight:Y,maxMip:K}})(t),p=(function(q){return[q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)})(t),f=(function(q){let j=[];for(let K in q){let Y=q[K];Y!==!1&&j.push("#define "+K+" "+Y)}return j.join(`
`)})(a),g=r.createProgram(),m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ga).join(`
`),m.length>0&&(m+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ga).join(`
`),y.length>0&&(y+=`
`)):(m=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),y=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?We.tonemapping_pars_fragment:"",t.toneMapping!==0?Py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),s=Eh(s),s=Op(s,t),s=zp(s,t),o=Eh(o),o=Op(o,t),o=zp(o,t),s=Bp(s),o=Bp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let x=v+m+s,b=v+y+o,P=Np(r,r.VERTEX_SHADER,x),T=Np(r,r.FRAGMENT_SHADER,b);function L(q){if(i.debug.checkShaderErrors){let j=r.getProgramInfoLog(g).trim(),K=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(T).trim(),ee=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,T);else{let he=Up(r,P,"vertex"),ce=Up(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+j+`
`+he+`
`+ce)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):K!==""&&Y!==""||(te=!1);te&&(q.diagnostics={runnable:ee,programLog:j,vertexShader:{log:K,prefix:m},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(P),r.deleteShader(T),z=new ta(r,g),F=(function(j,K){let Y={},ee=j.getProgramParameter(K,j.ACTIVE_ATTRIBUTES);for(let te=0;te<ee;te++){let he=j.getActiveAttrib(K,te),ce=he.name,_e=1;he.type===j.FLOAT_MAT2&&(_e=2),he.type===j.FLOAT_MAT3&&(_e=3),he.type===j.FLOAT_MAT4&&(_e=4),Y[ce]={type:he.type,location:j.getAttribLocation(K,ce),locationSize:_e}}return Y})(r,g)}let z,F;r.attachShader(g,P),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),this.getUniforms=function(){return z===void 0&&L(this),z},this.getAttributes=function(){return F===void 0&&L(this),F};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(g,37297)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=T,this}var By=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=By++,this.code=e,this.usedTimes=0}};function Fy(i,e,t,n,r,a,s){let o=new ts,l=new Ah,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,y,v,x,b){let P=x.fog,T=b.geometry,L=m.isMeshStandardMaterial?x.environment:null,z=(m.isMeshStandardMaterial?t:e).get(m.envMap||L),F=z&&z.mapping===qo?z.image.height:null,G=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let q=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,j=q!==void 0?q.length:0,K,Y,ee,te,he=0;if(T.morphAttributes.position!==void 0&&(he=1),T.morphAttributes.normal!==void 0&&(he=2),T.morphAttributes.color!==void 0&&(he=3),G){let me=jn[G];K=me.vertexShader,Y=me.fragmentShader}else K=m.vertexShader,Y=m.fragmentShader,l.update(m),ee=l.getVertexShaderID(m),te=l.getFragmentShaderID(m);let ce=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Ae=b.isInstancedMesh===!0,oe=b.isBatchedMesh===!0,ue=!!m.map,be=!!m.matcap,Se=!!z,ge=!!m.aoMap,k=!!m.lightMap,A=!!m.bumpMap,D=!!m.normalMap,R=!!m.displacementMap,I=!!m.emissiveMap,O=!!m.metalnessMap,w=!!m.roughnessMap,U=m.anisotropy>0,V=m.clearcoat>0,ie=m.dispersion>0,H=m.iridescence>0,ne=m.sheen>0,Q=m.transmission>0,se=U&&!!m.anisotropyMap,ve=V&&!!m.clearcoatMap,xe=V&&!!m.clearcoatNormalMap,Re=V&&!!m.clearcoatRoughnessMap,Le=H&&!!m.iridescenceMap,Je=H&&!!m.iridescenceThicknessMap,je=ne&&!!m.sheenColorMap,Me=ne&&!!m.sheenRoughnessMap,nt=!!m.specularMap,ut=!!m.specularColorMap,yt=!!m.specularIntensityMap,Te=Q&&!!m.transmissionMap,Xe=Q&&!!m.thicknessMap,lt=!!m.gradientMap,B=!!m.alphaMap,W=m.alphaTest>0,$=!!m.alphaHash,re=!!m.extensions,pe=0;m.toneMapped&&(ce!==null&&ce.isXRRenderTarget!==!0||(pe=i.toneMapping));let E={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:K,fragmentShader:Y,defines:m.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:oe,batchingColor:oe&&b._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&b.instanceColor!==null,instancingMorph:Ae&&b.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:fa,alphaToCoverage:!!m.alphaToCoverage,map:ue,matcap:be,envMap:Se,envMapMode:Se&&z.mapping,envMapCubeUVHeight:F,aoMap:ge,lightMap:k,bumpMap:A,normalMap:D,displacementMap:d&&R,emissiveMap:I,normalMapObjectSpace:D&&m.normalMapType===1,normalMapTangentSpace:D&&m.normalMapType===0,metalnessMap:O,roughnessMap:w,anisotropy:U,anisotropyMap:se,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:xe,clearcoatRoughnessMap:Re,dispersion:ie,iridescence:H,iridescenceMap:Le,iridescenceThicknessMap:Je,sheen:ne,sheenColorMap:je,sheenRoughnessMap:Me,specularMap:nt,specularColorMap:ut,specularIntensityMap:yt,transmission:Q,transmissionMap:Te,thicknessMap:Xe,gradientMap:lt,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:B,alphaTest:W,alphaHash:$,combine:m.combine,mapUv:ue&&g(m.map.channel),aoMapUv:ge&&g(m.aoMap.channel),lightMapUv:k&&g(m.lightMap.channel),bumpMapUv:A&&g(m.bumpMap.channel),normalMapUv:D&&g(m.normalMap.channel),displacementMapUv:R&&g(m.displacementMap.channel),emissiveMapUv:I&&g(m.emissiveMap.channel),metalnessMapUv:O&&g(m.metalnessMap.channel),roughnessMapUv:w&&g(m.roughnessMap.channel),anisotropyMapUv:se&&g(m.anisotropyMap.channel),clearcoatMapUv:ve&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:je&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(m.sheenRoughnessMap.channel),specularMapUv:nt&&g(m.specularMap.channel),specularColorMapUv:ut&&g(m.specularColorMap.channel),specularIntensityMapUv:yt&&g(m.specularIntensityMap.channel),transmissionMapUv:Te&&g(m.transmissionMap.channel),thicknessMapUv:Xe&&g(m.thicknessMap.channel),alphaMapUv:B&&g(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(D||U),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!T.attributes.uv&&(ue||B),fog:!!P,useFog:m.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_e,skinning:b.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:he,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ue&&m.map.isVideoTexture===!0&&at.getTransfer(m.map.colorSpace)===mt,decodeVideoTextureEmissive:I&&m.emissiveMap.isVideoTexture===!0&&at.getTransfer(m.emissiveMap.colorSpace)===mt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:re&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&m.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return E.vertexUv1s=c.has(1),E.vertexUv2s=c.has(2),E.vertexUv3s=c.has(3),c.clear(),E},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)y.push(v),y.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(y,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(y,m),y.push(i.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],v;if(y){let x=jn[y];v=E0.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,y){let v;for(let x=0,b=h.length;x<b;x++){let P=h[x];if(P.cacheKey===y){v=P,++v.usedTimes;break}}return v===void 0&&(v=new zy(i,y,m,a),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let y=h.indexOf(m);h[y]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Hy(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){let i=[],e=0,t=[],n=[],r=[];function a(s,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:l,groupOrder:c,renderOrder:s.renderOrder,z:h,group:u},i[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(s,o,l,c,h,u){let d=a(s,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(s,o,l,c,h,u){let d=a(s,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=i.length;s<o;s++){let l=i[s];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(s,o){t.length>1&&t.sort(s||Gy),n.length>1&&n.sort(o||Hp),r.length>1&&r.sort(o||Hp)}}}function Vy(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Gp,i.set(e,[r])):t>=n.length?(r=new Gp,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Wy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C}}return i[e.id]=t,t}}}var jy=0;function Xy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qy(i){let e=new Wy,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new C);let r=new C,a=new ze,s=new ze;return{setup:function(o){let l=0,c=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,d=0,p=0,f=0,g=0,m=0,y=0,v=0,x=0,b=0,P=0;o.sort(Xy);for(let L=0,z=o.length;L<z;L++){let F=o[L],G=F.color,q=F.intensity,j=F.distance,K=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)l+=G.r*q,c+=G.g*q,h+=G.b*q;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(F.sh.coefficients[Y],q);P++}else if(F.isDirectionalLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ee=F.shadow,te=t.get(F);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,n.directionalShadow[u]=te,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=F.shadow.matrix,m++}n.directional[u]=Y,u++}else if(F.isSpotLight){let Y=e.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(G).multiplyScalar(q),Y.distance=j,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,n.spot[p]=Y;let ee=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,ee.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[p]=ee.matrix,F.castShadow){let te=t.get(F);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,n.spotShadow[p]=te,n.spotShadowMap[p]=K,v++}p++}else if(F.isRectAreaLight){let Y=e.get(F);Y.color.copy(G).multiplyScalar(q),Y.halfWidth.set(.5*F.width,0,0),Y.halfHeight.set(0,.5*F.height,0),n.rectArea[f]=Y,f++}else if(F.isPointLight){let Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){let ee=F.shadow,te=t.get(F);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,n.pointShadow[d]=te,n.pointShadowMap[d]=K,n.pointShadowMatrix[d]=F.shadow.matrix,y++}n.point[d]=Y,d++}else if(F.isHemisphereLight){let Y=e.get(F);Y.skyColor.copy(F.color).multiplyScalar(q),Y.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[g]=Y,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===g&&T.numDirectionalShadows===m&&T.numPointShadows===y&&T.numSpotShadows===v&&T.numSpotMaps===x&&T.numLightProbes===P||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=g,T.numDirectionalShadows=m,T.numPointShadows=y,T.numSpotShadows=v,T.numSpotMaps=x,T.numLightProbes=P,n.version=jy++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){let y=o[g];if(y.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),c++}else if(y.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),u++}else if(y.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),s.identity(),a.copy(y.matrixWorld),a.premultiply(f),s.extractRotation(a),v.halfWidth.set(.5*y.width,0,0),v.halfHeight.set(0,.5*y.height,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(y.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function Vp(i){let e=new qy(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(a){r.camera=a,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){n.push(a)}}}function Yy(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),a;return r===void 0?(a=new Vp(i),e.set(t,[a])):n>=r.length?(a=new Vp(i),r.push(a)):a=r[n],a},dispose:function(){e=new WeakMap}}}var Ch=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kh=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $y(i,e,t){let n=new ca,r=new le,a=new le,s=new _t,o=new Ch({depthPacking:3201}),l=new kh,c={},h=t.maxTextureSize,u={[Lg]:1,[Xo]:0,[ma]:2},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Pt;f.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ye(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function v(T,L){let z=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,z,d,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,z,p,g,null)}function x(T,L,z,F){let G=null,q=z.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)G=q;else if(G=z.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let j=G.uuid,K=L.uuid,Y=c[j];Y===void 0&&(Y={},c[j]=Y);let ee=Y[K];ee===void 0&&(ee=G.clone(),Y[K]=ee,L.addEventListener("dispose",P)),G=ee}return G.visible=L.visible,G.wireframe=L.wireframe,G.side=F===3?L.shadowSide!==null?L.shadowSide:L.side:L.shadowSide!==null?L.shadowSide:u[L.side],G.alphaMap=L.alphaMap,G.alphaTest=L.alphaTest,G.map=L.map,G.clipShadows=L.clipShadows,G.clippingPlanes=L.clippingPlanes,G.clipIntersection=L.clipIntersection,G.displacementMap=L.displacementMap,G.displacementScale=L.displacementScale,G.displacementBias=L.displacementBias,G.wireframeLinewidth=L.wireframeLinewidth,G.linewidth=L.linewidth,z.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(i.properties.get(G).light=z),G}function b(T,L,z,F,G){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&G===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld);let j=e.update(T),K=T.material;if(Array.isArray(K)){let Y=j.groups;for(let ee=0,te=Y.length;ee<te;ee++){let he=Y[ee],ce=K[he.materialIndex];if(ce&&ce.visible){let _e=x(T,ce,F,G);T.onBeforeShadow(i,T,L,z,j,_e,he),i.renderBufferDirect(z,null,j,_e,T,he),T.onAfterShadow(i,T,L,z,j,_e,he)}}}else if(K.visible){let Y=x(T,K,F,G);T.onBeforeShadow(i,T,L,z,j,Y,null),i.renderBufferDirect(z,null,j,Y,T,null),T.onAfterShadow(i,T,L,z,j,Y,null)}}let q=T.children;for(let j=0,K=q.length;j<K;j++)b(q[j],L,z,F,G)}function P(T){T.target.removeEventListener("dispose",P);for(let L in c){let z=c[L],F=T.target.uuid;F in z&&(z[F].dispose(),delete z[F])}}this.render=function(T,L,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let F=i.getRenderTarget(),G=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),j=i.state;j.setBlending(0),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let K=y!==3&&this.type===3,Y=y===3&&this.type!==3;for(let ee=0,te=T.length;ee<te;ee++){let he=T[ee],ce=he.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;r.copy(ce.mapSize);let _e=ce.getFrameExtents();if(r.multiply(_e),a.copy(ce.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/_e.x),r.x=a.x*_e.x,ce.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/_e.y),r.y=a.y*_e.y,ce.mapSize.y=a.y)),ce.map===null||K===!0||Y===!0){let oe=this.type!==3?{minFilter:Dn,magFilter:Dn}:{};ce.map!==null&&ce.map.dispose(),ce.map=new wn(r.x,r.y,oe),ce.map.texture.name=he.name+".shadowMap",ce.camera.updateProjectionMatrix()}i.setRenderTarget(ce.map),i.clear();let Ae=ce.getViewportCount();for(let oe=0;oe<Ae;oe++){let ue=ce.getViewport(oe);s.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),j.viewport(s),ce.updateMatrices(he,oe),n=ce.getFrustum(),b(L,z,ce.camera,he,this.type)}ce.isPointLightShadow!==!0&&this.type===3&&v(ce,z),ce.needsUpdate=!1}y=this.type,m.needsUpdate=!1,i.setRenderTarget(F,G,q)}}var Zy={[$g]:1,[Kg]:6,[Qg]:7,[Jg]:5,[Zg]:0,[t0]:2,[n0]:4,[e0]:3};function Ky(i,e){let t=new function(){let w=!1,U=new _t,V=null,ie=new _t(0,0,0,0);return{setMask:function(H){V===H||w||(i.colorMask(H,H,H,H),V=H)},setLocked:function(H){w=H},setClear:function(H,ne,Q,se,ve){ve===!0&&(H*=se,ne*=se,Q*=se),U.set(H,ne,Q,se),ie.equals(U)===!1&&(i.clearColor(H,ne,Q,se),ie.copy(U))},reset:function(){w=!1,V=null,ie.set(-1,0,0,0)}}},n=new function(){let w=!1,U=!1,V=null,ie=null,H=null;return{setReversed:function(ne){if(U!==ne){let Q=e.get("EXT_clip_control");U?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT);let se=H;H=null,this.setClear(se)}U=ne},getReversed:function(){return U},setTest:function(ne){ne?Se(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ne){V===ne||w||(i.depthMask(ne),V=ne)},setFunc:function(ne){if(U&&(ne=Zy[ne]),ie!==ne){switch(ne){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}ie=ne}},setLocked:function(ne){w=ne},setClear:function(ne){H!==ne&&(U&&(ne=1-ne),i.clearDepth(ne),H=ne)},reset:function(){w=!1,V=null,ie=null,H=null,U=!1}}},r=new function(){let w=!1,U=null,V=null,ie=null,H=null,ne=null,Q=null,se=null,ve=null;return{setTest:function(xe){w||(xe?Se(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(xe){U===xe||w||(i.stencilMask(xe),U=xe)},setFunc:function(xe,Re,Le){V===xe&&ie===Re&&H===Le||(i.stencilFunc(xe,Re,Le),V=xe,ie=Re,H=Le)},setOp:function(xe,Re,Le){ne===xe&&Q===Re&&se===Le||(i.stencilOp(xe,Re,Le),ne=xe,Q=Re,se=Le)},setLocked:function(xe){w=xe},setClear:function(xe){ve!==xe&&(i.clearStencil(xe),ve=xe)},reset:function(){w=!1,U=null,V=null,ie=null,H=null,ne=null,Q=null,se=null,ve=null}}},a=new WeakMap,s=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,y=null,v=null,x=null,b=new Ie(0,0,0),P=0,T=!1,L=null,z=null,F=null,G=null,q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,Y=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=Y>=2);let te=null,he={},ce=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Ae=new _t().fromArray(ce),oe=new _t().fromArray(_e);function ue(w,U,V,ie){let H=new Uint8Array(4),ne=i.createTexture();i.bindTexture(w,ne),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<V;Q++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(U,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,H):i.texImage2D(U+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,H);return ne}let be={};function Se(w){o[w]!==!0&&(i.enable(w),o[w]=!0)}function ge(w){o[w]!==!1&&(i.disable(w),o[w]=!1)}be[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),Se(i.DEPTH_TEST),n.setFunc(3),R(!1),I(1),Se(i.CULL_FACE),D(0);let k={[sr]:i.FUNC_ADD,[Ng]:i.FUNC_SUBTRACT,[Dg]:i.FUNC_REVERSE_SUBTRACT};k[103]=i.MIN,k[104]=i.MAX;let A={[Ug]:i.ZERO,[Og]:i.ONE,[zg]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[Wg]:i.SRC_ALPHA_SATURATE,[Gg]:i.DST_COLOR,[Fg]:i.DST_ALPHA,[Bg]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[Vg]:i.ONE_MINUS_DST_COLOR,[Hg]:i.ONE_MINUS_DST_ALPHA,[jg]:i.CONSTANT_COLOR,[Xg]:i.ONE_MINUS_CONSTANT_COLOR,[qg]:i.CONSTANT_ALPHA,[Yg]:i.ONE_MINUS_CONSTANT_ALPHA};function D(w,U,V,ie,H,ne,Q,se,ve,xe){if(w!==0){if(d===!1&&(Se(i.BLEND),d=!0),w===5)H=H||U,ne=ne||V,Q=Q||ie,U===f&&H===y||(i.blendEquationSeparate(k[U],k[H]),f=U,y=H),V===g&&ie===m&&ne===v&&Q===x||(i.blendFuncSeparate(A[V],A[ie],A[ne],A[Q]),g=V,m=ie,v=ne,x=Q),se.equals(b)!==!1&&ve===P||(i.blendColor(se.r,se.g,se.b,ve),b.copy(se),P=ve),p=w,T=!1;else if(w!==p||xe!==T){if(f===sr&&y===sr||(i.blendEquation(i.FUNC_ADD),f=sr,y=sr),xe)switch(w){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}g=null,m=null,v=null,x=null,b.set(0,0,0),P=0,p=w,T=xe}}else d===!0&&(ge(i.BLEND),d=!1)}function R(w){L!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),L=w)}function I(w){w!==0?(Se(i.CULL_FACE),w!==z&&(w===1?i.cullFace(i.BACK):w===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),z=w}function O(w,U,V){w?(Se(i.POLYGON_OFFSET_FILL),G===U&&q===V||(i.polygonOffset(U,V),G=U,q=V)):ge(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:Se,disable:ge,bindFramebuffer:function(w,U){return l[w]!==U&&(i.bindFramebuffer(w,U),l[w]=U,w===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=U),w===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=U),!0)},drawBuffers:function(w,U){let V=h,ie=!1;if(w){V=c.get(U),V===void 0&&(V=[],c.set(U,V));let H=w.textures;if(V.length!==H.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Q=H.length;ne<Q;ne++)V[ne]=i.COLOR_ATTACHMENT0+ne;V.length=H.length,ie=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,ie=!0);ie&&i.drawBuffers(V)},useProgram:function(w){return u!==w&&(i.useProgram(w),u=w,!0)},setBlending:D,setMaterial:function(w,U){w.side===2?ge(i.CULL_FACE):Se(i.CULL_FACE);let V=w.side===1;U&&(V=!V),R(V),w.blending===1&&w.transparent===!1?D(0):D(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),n.setFunc(w.depthFunc),n.setTest(w.depthTest),n.setMask(w.depthWrite),t.setMask(w.colorWrite);let ie=w.stencilWrite;r.setTest(ie),ie&&(r.setMask(w.stencilWriteMask),r.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),r.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),O(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:R,setCullFace:I,setLineWidth:function(w){w!==F&&(K&&i.lineWidth(w),F=w)},setPolygonOffset:O,setScissorTest:function(w){w?Se(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=i.TEXTURE0+j-1),te!==w&&(i.activeTexture(w),te=w)},bindTexture:function(w,U,V){V===void 0&&(V=te===null?i.TEXTURE0+j-1:te);let ie=he[V];ie===void 0&&(ie={type:void 0,texture:void 0},he[V]=ie),ie.type===w&&ie.texture===U||(te!==V&&(i.activeTexture(V),te=V),i.bindTexture(w,U||be[w]),ie.type=w,ie.texture=U)},unbindTexture:function(){let w=he[te];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,U){let V=s.get(U);V===void 0&&(V=new WeakMap,s.set(U,V));let ie=V.get(w);ie===void 0&&(ie=i.getUniformBlockIndex(U,w.name),V.set(w,ie))},uniformBlockBinding:function(w,U){let V=s.get(U).get(w);a.get(U)!==V&&(i.uniformBlockBinding(U,V,w.__bindingPointIndex),a.set(U,V))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){Ae.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Ae.copy(w))},viewport:function(w){oe.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),oe.copy(w))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},te=null,he={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,y=null,v=null,x=null,b=new Ie(0,0,0),P=0,T=!1,L=null,z=null,F=null,G=null,q=null,Ae.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function Wp(i,e,t,n){let r=(function(a){switch(a){case On:case cm:return{byteLength:1,components:1};case Qa:case hm:case yi:return{byteLength:2,components:1};case ou:case lu:return{byteLength:2,components:4};case mi:case su:case qn:return{byteLength:4,components:1};case um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)})(n);switch(t){case dm:case mm:return i*e;case fm:return i*e*2;case ds:case cu:return i*e/r.components*r.byteLength;case gm:case hu:return i*e*2/r.components*r.byteLength;case pm:return i*e*3/r.components*r.byteLength;case Yn:case uu:return i*e*4/r.components*r.byteLength;case go:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:case Xc:return Math.max(i,16)*Math.max(e,8)/4;case Vc:case jc:return Math.max(i,8)*Math.max(e,8)/2;case qc:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $c:case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _o:case hh:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ym:case dh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jy(i,e,t,n,r,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(k,A){return p?new OffscreenCanvas(k,A):So("canvas")}function g(k,A,D){let R=1,I=ge(k);if((I.width>D||I.height>D)&&(R=D/Math.max(I.width,I.height)),R<1){if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let O=Math.floor(R*I.width),w=Math.floor(R*I.height);u===void 0&&(u=f(O,w));let U=A?f(O,w):u;return U.width=O,U.height=w,U.getContext("2d").drawImage(k,0,0,O,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+O+"x"+w+")."),U}return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),k}return k}function m(k){return k.generateMipmaps}function y(k){i.generateMipmap(k)}function v(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(k,A,D,R,I=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let O=A;if(A===i.RED&&(D===i.FLOAT&&(O=i.R32F),D===i.HALF_FLOAT&&(O=i.R16F),D===i.UNSIGNED_BYTE&&(O=i.R8)),A===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(O=i.R8UI),D===i.UNSIGNED_SHORT&&(O=i.R16UI),D===i.UNSIGNED_INT&&(O=i.R32UI),D===i.BYTE&&(O=i.R8I),D===i.SHORT&&(O=i.R16I),D===i.INT&&(O=i.R32I)),A===i.RG&&(D===i.FLOAT&&(O=i.RG32F),D===i.HALF_FLOAT&&(O=i.RG16F),D===i.UNSIGNED_BYTE&&(O=i.RG8)),A===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(O=i.RG8UI),D===i.UNSIGNED_SHORT&&(O=i.RG16UI),D===i.UNSIGNED_INT&&(O=i.RG32UI),D===i.BYTE&&(O=i.RG8I),D===i.SHORT&&(O=i.RG16I),D===i.INT&&(O=i.RG32I)),A===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(O=i.RGB8UI),D===i.UNSIGNED_SHORT&&(O=i.RGB16UI),D===i.UNSIGNED_INT&&(O=i.RGB32UI),D===i.BYTE&&(O=i.RGB8I),D===i.SHORT&&(O=i.RGB16I),D===i.INT&&(O=i.RGB32I)),A===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),D===i.UNSIGNED_INT&&(O=i.RGBA32UI),D===i.BYTE&&(O=i.RGBA8I),D===i.SHORT&&(O=i.RGBA16I),D===i.INT&&(O=i.RGBA32I)),A===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),A===i.RGBA){let w=I?Yo:at.getTransfer(R);D===i.FLOAT&&(O=i.RGBA32F),D===i.HALF_FLOAT&&(O=i.RGBA16F),D===i.UNSIGNED_BYTE&&(O=w===mt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return O!==i.R16F&&O!==i.R32F&&O!==i.RG16F&&O!==i.RG32F&&O!==i.RGBA16F&&O!==i.RGBA32F||e.get("EXT_color_buffer_float"),O}function b(k,A){let D;return k?A===null||A===mi||A===aa?D=i.DEPTH24_STENCIL8:A===qn?D=i.DEPTH32F_STENCIL8:A===Qa&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===mi||A===aa?D=i.DEPTH_COMPONENT24:A===qn?D=i.DEPTH_COMPONENT32F:A===Qa&&(D=i.DEPTH_COMPONENT16),D}function P(k,A){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==Dn&&k.minFilter!==gn?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function T(k){let A=k.target;A.removeEventListener("dispose",T),(function(D){let R=n.get(D);if(R.__webglInit===void 0)return;let I=D.source,O=d.get(I);if(O){let w=O[R.__cacheKey];w.usedTimes--,w.usedTimes===0&&z(D),Object.keys(O).length===0&&d.delete(I)}n.remove(D)})(A),A.isVideoTexture&&h.delete(A)}function L(k){let A=k.target;A.removeEventListener("dispose",L),(function(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(R.__webglFramebuffer[O]))for(let w=0;w<R.__webglFramebuffer[O].length;w++)i.deleteFramebuffer(R.__webglFramebuffer[O][w]);else i.deleteFramebuffer(R.__webglFramebuffer[O]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[O])}else{if(Array.isArray(R.__webglFramebuffer))for(let O=0;O<R.__webglFramebuffer.length;O++)i.deleteFramebuffer(R.__webglFramebuffer[O]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let O=0;O<R.__webglColorRenderbuffer.length;O++)R.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[O]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let I=D.textures;for(let O=0,w=I.length;O<w;O++){let U=n.get(I[O]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),s.memory.textures--),n.remove(I[O])}n.remove(D)})(A)}function z(k){let A=n.get(k);i.deleteTexture(A.__webglTexture);let D=k.source;delete d.get(D)[A.__cacheKey],s.memory.textures--}let F=0;function G(k,A){let D=n.get(k);if(k.isVideoTexture&&(function(R){let I=s.render.frame;h.get(R)!==I&&(h.set(R,I),R.update())})(k),k.isRenderTargetTexture===!1&&k.version>0&&D.__version!==k.version){let R=k.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(R.complete!==!1)return void te(D,k,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+A)}let q={[ra]:i.REPEAT,[Ja]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},j={[Dn]:i.NEAREST,[i0]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[nc]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},K={[r0]:i.NEVER,[u0]:i.ALWAYS,[a0]:i.LESS,[o0]:i.LEQUAL,[s0]:i.EQUAL,[h0]:i.GEQUAL,[l0]:i.GREATER,[c0]:i.NOTEQUAL};function Y(k,A){if(A.type!==qn||e.has("OES_texture_float_linear")!==!1||A.magFilter!==gn&&A.magFilter!==nc&&A.magFilter!==Os&&A.magFilter!==Pi&&A.minFilter!==gn&&A.minFilter!==nc&&A.minFilter!==Os&&A.minFilter!==Pi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,q[A.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,q[A.wrapT]),k!==i.TEXTURE_3D&&k!==i.TEXTURE_2D_ARRAY||i.texParameteri(k,i.TEXTURE_WRAP_R,q[A.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,j[A.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,K[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Dn||A.minFilter!==Os&&A.minFilter!==Pi||A.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ee(k,A){let D=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",T));let R=A.source,I=d.get(R);I===void 0&&(I={},d.set(R,I));let O=(function(w){let U=[];return U.push(w.wrapS),U.push(w.wrapT),U.push(w.wrapR||0),U.push(w.magFilter),U.push(w.minFilter),U.push(w.anisotropy),U.push(w.internalFormat),U.push(w.format),U.push(w.type),U.push(w.generateMipmaps),U.push(w.premultiplyAlpha),U.push(w.flipY),U.push(w.unpackAlignment),U.push(w.colorSpace),U.join()})(A);if(O!==k.__cacheKey){I[O]===void 0&&(I[O]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,D=!0),I[O].usedTimes++;let w=I[k.__cacheKey];w!==void 0&&(I[k.__cacheKey].usedTimes--,w.usedTimes===0&&z(A)),k.__cacheKey=O,k.__webglTexture=I[O].texture}return D}function te(k,A,D){let R=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(R=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(R=i.TEXTURE_3D);let I=ee(k,A),O=A.source;t.bindTexture(R,k.__webglTexture,i.TEXTURE0+D);let w=n.get(O);if(O.version!==w.__version||I===!0){t.activeTexture(i.TEXTURE0+D);let U=at.getPrimaries(at.workingColorSpace),V=A.colorSpace===Jr?null:at.getPrimaries(A.colorSpace),ie=A.colorSpace===Jr||U===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let H=g(A.image,!1,r.maxTextureSize);H=Se(A,H);let ne=a.convert(A.format,A.colorSpace),Q=a.convert(A.type),se,ve=x(A.internalFormat,ne,Q,A.colorSpace,A.isVideoTexture);Y(R,A);let xe=A.mipmaps,Re=A.isVideoTexture!==!0,Le=w.__version===void 0||I===!0,Je=O.dataReady,je=P(A,H);if(A.isDepthTexture)ve=b(A.format===sa,A.type),Le&&(Re?t.texStorage2D(i.TEXTURE_2D,1,ve,H.width,H.height):t.texImage2D(i.TEXTURE_2D,0,ve,H.width,H.height,0,ne,Q,null));else if(A.isDataTexture)if(xe.length>0){Re&&Le&&t.texStorage2D(i.TEXTURE_2D,je,ve,xe[0].width,xe[0].height);for(let Me=0,nt=xe.length;Me<nt;Me++)se=xe[Me],Re?Je&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,se.width,se.height,ne,Q,se.data):t.texImage2D(i.TEXTURE_2D,Me,ve,se.width,se.height,0,ne,Q,se.data);A.generateMipmaps=!1}else Re?(Le&&t.texStorage2D(i.TEXTURE_2D,je,ve,H.width,H.height),Je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,ne,Q,H.data)):t.texImage2D(i.TEXTURE_2D,0,ve,H.width,H.height,0,ne,Q,H.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Re&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,ve,xe[0].width,xe[0].height,H.depth);for(let Me=0,nt=xe.length;Me<nt;Me++)if(se=xe[Me],A.format!==Yn)if(ne!==null)if(Re){if(Je)if(A.layerUpdates.size>0){let ut=Wp(se.width,se.height,A.format,A.type);for(let yt of A.layerUpdates){let Te=se.data.subarray(yt*ut/se.data.BYTES_PER_ELEMENT,(yt+1)*ut/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,yt,se.width,se.height,1,ne,Te)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,se.width,se.height,H.depth,ne,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,ve,se.width,se.height,H.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?Je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,se.width,se.height,H.depth,ne,Q,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,ve,se.width,se.height,H.depth,0,ne,Q,se.data)}else{Re&&Le&&t.texStorage2D(i.TEXTURE_2D,je,ve,xe[0].width,xe[0].height);for(let Me=0,nt=xe.length;Me<nt;Me++)se=xe[Me],A.format!==Yn?ne!==null?Re?Je&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,se.width,se.height,ne,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,ve,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?Je&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,se.width,se.height,ne,Q,se.data):t.texImage2D(i.TEXTURE_2D,Me,ve,se.width,se.height,0,ne,Q,se.data)}else if(A.isDataArrayTexture)if(Re){if(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,ve,H.width,H.height,H.depth),Je)if(A.layerUpdates.size>0){let Me=Wp(H.width,H.height,A.format,A.type);for(let nt of A.layerUpdates){let ut=H.data.subarray(nt*Me/H.data.BYTES_PER_ELEMENT,(nt+1)*Me/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,H.width,H.height,1,ne,Q,ut)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ne,Q,H.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,H.width,H.height,H.depth,0,ne,Q,H.data);else if(A.isData3DTexture)Re?(Le&&t.texStorage3D(i.TEXTURE_3D,je,ve,H.width,H.height,H.depth),Je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ne,Q,H.data)):t.texImage3D(i.TEXTURE_3D,0,ve,H.width,H.height,H.depth,0,ne,Q,H.data);else if(A.isFramebufferTexture){if(Le)if(Re)t.texStorage2D(i.TEXTURE_2D,je,ve,H.width,H.height);else{let Me=H.width,nt=H.height;for(let ut=0;ut<je;ut++)t.texImage2D(i.TEXTURE_2D,ut,ve,Me,nt,0,ne,Q,null),Me>>=1,nt>>=1}}else if(xe.length>0){if(Re&&Le){let Me=ge(xe[0]);t.texStorage2D(i.TEXTURE_2D,je,ve,Me.width,Me.height)}for(let Me=0,nt=xe.length;Me<nt;Me++)se=xe[Me],Re?Je&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ne,Q,se):t.texImage2D(i.TEXTURE_2D,Me,ve,ne,Q,se);A.generateMipmaps=!1}else if(Re){if(Le){let Me=ge(H);t.texStorage2D(i.TEXTURE_2D,je,ve,Me.width,Me.height)}Je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Q,H)}else t.texImage2D(i.TEXTURE_2D,0,ve,ne,Q,H);m(A)&&y(R),w.__version=O.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function he(k,A,D,R,I,O){let w=a.convert(D.format,D.colorSpace),U=a.convert(D.type),V=x(D.internalFormat,w,U,D.colorSpace),ie=n.get(A),H=n.get(D);if(H.__renderTarget=A,!ie.__hasExternalTextures){let ne=Math.max(1,A.width>>O),Q=Math.max(1,A.height>>O);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?t.texImage3D(I,O,V,ne,Q,A.depth,0,w,U,null):t.texImage2D(I,O,V,ne,Q,0,w,U,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),be(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,I,H.__webglTexture,0,ue(A)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,R,I,H.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(k,A,D){if(i.bindRenderbuffer(i.RENDERBUFFER,k),A.depthBuffer){let R=A.depthTexture,I=R&&R.isDepthTexture?R.type:null,O=b(A.stencilBuffer,I),w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=ue(A);be(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U,O,A.width,A.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,U,O,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,O,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,k)}else{let R=A.textures;for(let I=0;I<R.length;I++){let O=R[I],w=a.convert(O.format,O.colorSpace),U=a.convert(O.type),V=x(O.internalFormat,w,U,O.colorSpace),ie=ue(A);D&&be(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,V,A.width,A.height):be(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,V,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,V,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(k){let A=n.get(k),D=k.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==k.depthTexture){let R=k.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),R){let I=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,R.removeEventListener("dispose",I)};R.addEventListener("dispose",I),A.__depthDisposeCallback=I}A.__boundDepthTexture=R}if(k.depthTexture&&!A.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(R,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(I.depthTexture);O.__renderTarget=I,O.__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),G(I.depthTexture,0);let w=O.__webglTexture,U=ue(I);if(I.depthTexture.format===es)be(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,w,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,w,0);else{if(I.depthTexture.format!==sa)throw new Error("Unknown depthTexture format");be(I)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,w,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,w,0)}})(A.__webglFramebuffer,k)}else if(D){A.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[R]),A.__webglDepthbuffer[R]===void 0)A.__webglDepthbuffer[R]=i.createRenderbuffer(),ce(A.__webglDepthbuffer[R],k,!1);else{let I=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=A.__webglDepthbuffer[R];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,O)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ce(A.__webglDepthbuffer,k,!1);else{let R=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,I)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Ae=[],oe=[];function ue(k){return Math.min(r.maxSamples,k.samples)}function be(k){let A=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Se(k,A){let D=k.colorSpace,R=k.format,I=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||D!==fa&&D!==Jr&&(at.getTransfer(D)===mt?R===Yn&&I===On||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),A}function ge(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=function(){let k=F;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),F+=1,k},this.resetTextureUnits=function(){F=0},this.setTexture2D=G,this.setTexture2DArray=function(k,A){let D=n.get(k);k.version>0&&D.__version!==k.version?te(D,k,A):t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+A)},this.setTexture3D=function(k,A){let D=n.get(k);k.version>0&&D.__version!==k.version?te(D,k,A):t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+A)},this.setTextureCube=function(k,A){let D=n.get(k);k.version>0&&D.__version!==k.version?(function(R,I,O){if(I.image.length!==6)return;let w=ee(R,I),U=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);let V=n.get(U);if(U.version!==V.__version||w===!0){t.activeTexture(i.TEXTURE0+O);let ie=at.getPrimaries(at.workingColorSpace),H=I.colorSpace===Jr?null:at.getPrimaries(I.colorSpace),ne=I.colorSpace===Jr||ie===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Q=I.isCompressedTexture||I.image[0].isCompressedTexture,se=I.image[0]&&I.image[0].isDataTexture,ve=[];for(let Te=0;Te<6;Te++)ve[Te]=Q||se?se?I.image[Te].image:I.image[Te]:g(I.image[Te],!0,r.maxCubemapSize),ve[Te]=Se(I,ve[Te]);let xe=ve[0],Re=a.convert(I.format,I.colorSpace),Le=a.convert(I.type),Je=x(I.internalFormat,Re,Le,I.colorSpace),je=I.isVideoTexture!==!0,Me=V.__version===void 0||w===!0,nt=U.dataReady,ut,yt=P(I,xe);if(Y(i.TEXTURE_CUBE_MAP,I),Q){je&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Je,xe.width,xe.height);for(let Te=0;Te<6;Te++){ut=ve[Te].mipmaps;for(let Xe=0;Xe<ut.length;Xe++){let lt=ut[Xe];I.format!==Yn?Re!==null?je?nt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,0,0,lt.width,lt.height,Re,lt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,Je,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,0,0,lt.width,lt.height,Re,Le,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe,Je,lt.width,lt.height,0,Re,Le,lt.data)}}}else{if(ut=I.mipmaps,je&&Me){ut.length>0&&yt++;let Te=ge(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Je,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(se){je?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ve[Te].width,ve[Te].height,Re,Le,ve[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Je,ve[Te].width,ve[Te].height,0,Re,Le,ve[Te].data);for(let Xe=0;Xe<ut.length;Xe++){let lt=ut[Xe].image[Te].image;je?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,0,0,lt.width,lt.height,Re,Le,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,Je,lt.width,lt.height,0,Re,Le,lt.data)}}else{je?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Re,Le,ve[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Je,Re,Le,ve[Te]);for(let Xe=0;Xe<ut.length;Xe++){let lt=ut[Xe];je?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,0,0,Re,Le,lt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Xe+1,Je,Re,Le,lt.image[Te])}}}m(I)&&y(i.TEXTURE_CUBE_MAP),V.__version=U.version,I.onUpdate&&I.onUpdate(I)}R.__version=I.version})(D,k,A):t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+A)},this.rebindTextures=function(k,A,D){let R=n.get(k);A!==void 0&&he(R.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&_e(k)},this.setupRenderTarget=function(k){let A=k.texture,D=n.get(k),R=n.get(A);k.addEventListener("dispose",L);let I=k.textures,O=k.isWebGLCubeRenderTarget===!0,w=I.length>1;if(w||(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=A.version,s.memory.textures++),O){D.__webglFramebuffer=[];for(let U=0;U<6;U++)if(A.mipmaps&&A.mipmaps.length>0){D.__webglFramebuffer[U]=[];for(let V=0;V<A.mipmaps.length;V++)D.__webglFramebuffer[U][V]=i.createFramebuffer()}else D.__webglFramebuffer[U]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){D.__webglFramebuffer=[];for(let U=0;U<A.mipmaps.length;U++)D.__webglFramebuffer[U]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(w)for(let U=0,V=I.length;U<V;U++){let ie=n.get(I[U]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),s.memory.textures++)}if(k.samples>0&&be(k)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let U=0;U<I.length;U++){let V=I[U];D.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[U]);let ie=a.convert(V.format,V.colorSpace),H=a.convert(V.type),ne=x(V.internalFormat,ie,H,V.colorSpace,k.isXRRenderTarget===!0),Q=ue(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ne,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,D.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(D.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),Y(i.TEXTURE_CUBE_MAP,A);for(let U=0;U<6;U++)if(A.mipmaps&&A.mipmaps.length>0)for(let V=0;V<A.mipmaps.length;V++)he(D.__webglFramebuffer[U][V],k,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,V);else he(D.__webglFramebuffer[U],k,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);m(A)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){for(let U=0,V=I.length;U<V;U++){let ie=I[U],H=n.get(ie);t.bindTexture(i.TEXTURE_2D,H.__webglTexture),Y(i.TEXTURE_2D,ie),he(D.__webglFramebuffer,k,ie,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,0),m(ie)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let U=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(U=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(U,R.__webglTexture),Y(U,A),A.mipmaps&&A.mipmaps.length>0)for(let V=0;V<A.mipmaps.length;V++)he(D.__webglFramebuffer[V],k,A,i.COLOR_ATTACHMENT0,U,V);else he(D.__webglFramebuffer,k,A,i.COLOR_ATTACHMENT0,U,0);m(A)&&y(U),t.unbindTexture()}k.depthBuffer&&_e(k)},this.updateRenderTargetMipmap=function(k){let A=k.textures;for(let D=0,R=A.length;D<R;D++){let I=A[D];if(m(I)){let O=v(k),w=n.get(I).__webglTexture;t.bindTexture(O,w),y(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(k){if(k.samples>0){if(be(k)===!1){let A=k.textures,D=k.width,R=k.height,I=i.COLOR_BUFFER_BIT,O=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=n.get(k),U=A.length>1;if(U)for(let V=0;V<A.length;V++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let V=0;V<A.length;V++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),U){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,w.__webglColorRenderbuffer[V]);let ie=n.get(A[V]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,D,R,0,0,D,R,I,i.NEAREST),l===!0&&(Ae.length=0,oe.length=0,Ae.push(i.COLOR_ATTACHMENT0+V),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ae.push(O),oe.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let V=0;V<A.length;V++){t.bindFramebuffer(i.FRAMEBUFFER,w.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,w.__webglColorRenderbuffer[V]);let ie=n.get(A[V]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){let A=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}},this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=be}function Qy(i,e){return{convert:function(t,n=""){let r,a=at.getTransfer(n);if(t===On)return i.UNSIGNED_BYTE;if(t===ou)return i.UNSIGNED_SHORT_4_4_4_4;if(t===lu)return i.UNSIGNED_SHORT_5_5_5_1;if(t===um)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===cm)return i.BYTE;if(t===hm)return i.SHORT;if(t===Qa)return i.UNSIGNED_SHORT;if(t===su)return i.INT;if(t===mi)return i.UNSIGNED_INT;if(t===qn)return i.FLOAT;if(t===yi)return i.HALF_FLOAT;if(t===dm)return i.ALPHA;if(t===pm)return i.RGB;if(t===Yn)return i.RGBA;if(t===mm)return i.LUMINANCE;if(t===fm)return i.LUMINANCE_ALPHA;if(t===es)return i.DEPTH_COMPONENT;if(t===sa)return i.DEPTH_STENCIL;if(t===ds)return i.RED;if(t===cu)return i.RED_INTEGER;if(t===gm)return i.RG;if(t===hu)return i.RG_INTEGER;if(t===uu)return i.RGBA_INTEGER;if(t===go||t===yo||t===vo||t===xo)if(a===mt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Vc||t===Wc||t===jc||t===Xc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===qc||t===Yc||t===$c){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===qc||t===Yc)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===$c)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Zc||t===Kc||t===Jc||t===Qc||t===eh||t===th||t===nh||t===ih||t===rh||t===ah||t===sh||t===oh||t===lh||t===ch){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Zc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Kc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Jc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Qc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===eh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===th)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===nh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===ih)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===rh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ah)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===sh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===oh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===lh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===ch)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===_o||t===hh||t===uh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===_o)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===ym||t===dh||t===ph||t===mh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(t===dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ph)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===aa?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Ph=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$t=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},ev={type:"move"},$a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new dn;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Li{constructor(e,t){super();let n=this,r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,g=new Ih,m=t.getContextAttributes(),y=null,v=null,x=[],b=[],P=new le,T=null,L=new hn;L.viewport=new _t;let z=new hn;z.viewport=new _t;let F=[L,z],G=new Ph,q=null,j=null;function K(oe){let ue=b.indexOf(oe.inputSource);if(ue===-1)return;let be=x[ue];be!==void 0&&(be.update(oe.inputSource,oe.frame,c||s),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Y(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",ee);for(let oe=0;oe<x.length;oe++){let ue=b[oe];ue!==null&&(b[oe]=null,x[oe].disconnect(ue))}q=null,j=null,g.reset(),e.setRenderTarget(y),p=null,d=null,u=null,r=null,v=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}function ee(oe){for(let ue=0;ue<oe.removed.length;ue++){let be=oe.removed[ue],Se=b.indexOf(be);Se>=0&&(b[Se]=null,x[Se].disconnect(be))}for(let ue=0;ue<oe.added.length;ue++){let be=oe.added[ue],Se=b.indexOf(be);if(Se===-1){for(let k=0;k<x.length;k++){if(k>=b.length){b.push(be),Se=k;break}if(b[k]===null){b[k]=be,Se=k;break}}if(Se===-1)break}let ge=x[Se];ge&&ge.connect(be)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ue=x[oe];return ue===void 0&&(ue=new $a,x[oe]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(oe){let ue=x[oe];return ue===void 0&&(ue=new $a,x[oe]=ue),ue.getGripSpace()},this.getHand=function(oe){let ue=x[oe];return ue===void 0&&(ue=new $a,x[oe]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(oe){a=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new wn(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,be=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?sa:es,be=m.stencil?aa:mi);let ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new wn(d.textureWidth,d.textureHeight,{format:Yn,type:On,depthTexture:new ha(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let te=new C,he=new C;function ce(oe,ue){ue===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ue.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ue=oe.near,be=oe.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(be=g.depthFar)),G.near=z.near=L.near=ue,G.far=z.far=L.far=be,q===G.near&&j===G.far||(r.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,j=G.far),L.layers.mask=2|oe.layers.mask,z.layers.mask=4|oe.layers.mask,G.layers.mask=L.layers.mask|z.layers.mask;let Se=oe.parent,ge=G.cameras;ce(G,Se);for(let k=0;k<ge.length;k++)ce(ge[k],Se);ge.length===2?(function(k,A,D){te.setFromMatrixPosition(A.matrixWorld),he.setFromMatrixPosition(D.matrixWorld);let R=te.distanceTo(he),I=A.projectionMatrix.elements,O=D.projectionMatrix.elements,w=I[14]/(I[10]-1),U=I[14]/(I[10]+1),V=(I[9]+1)/I[5],ie=(I[9]-1)/I[5],H=(I[8]-1)/I[0],ne=(O[8]+1)/O[0],Q=w*H,se=w*ne,ve=R/(-H+ne),xe=ve*-H;if(A.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(xe),k.translateZ(ve),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),I[10]===-1)k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let Re=w+ve,Le=U+ve,Je=Q-xe,je=se+(R-xe),Me=V*U/Le*Re,nt=ie*U/Le*Re;k.projectionMatrix.makePerspective(Je,je,Me,nt,Re,Le),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}})(G,L,z):G.projectionMatrix.copy(L.projectionMatrix),(function(k,A,D){D===null?k.matrix.copy(A.matrixWorld):(k.matrix.copy(D.matrixWorld),k.matrix.invert(),k.matrix.multiply(A.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=2*yh*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)})(oe,G,Se)},this.getCamera=function(){return G},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)};let _e=null,Ae=new bm;Ae.setAnimationLoop((function(oe,ue){if(h=ue.getViewerPose(c||s),f=ue,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Se=!1;be.length!==G.cameras.length&&(G.cameras.length=0,Se=!0);for(let k=0;k<be.length;k++){let A=be[k],D=null;if(p!==null)D=p.getViewport(A);else{let I=u.getViewSubImage(d,A);D=I.viewport,k===0&&(e.setRenderTargetTextures(v,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let R=F[k];R===void 0&&(R=new hn,R.layers.enable(k),R.viewport=new _t,F[k]=R),R.matrix.fromArray(A.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(A.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(D.x,D.y,D.width,D.height),k===0&&(G.matrix.copy(R.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Se===!0&&G.cameras.push(R)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){let k=u.getDepthInformation(be[0]);k&&k.isValid&&k.texture&&g.init(e,k,r.renderState)}}for(let be=0;be<x.length;be++){let Se=b[be],ge=x[be];Se!==null&&ge!==void 0&&ge.update(Se,ue,c||s)}_e&&_e(oe,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),f=null})),this.setAnimationLoop=function(oe){_e=oe},this.dispose=function(){}}},rr=new Qt,tv=new ze;function nv(i,e){function t(r,a){r.matrixAutoUpdate===!0&&r.updateMatrix(),a.value.copy(r.matrix)}function n(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,t(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,t(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,t(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,a.side===1&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,t(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),a.side===1&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,t(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,t(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=e.get(a),o=s.envMap,l=s.envMapRotation;o&&(r.envMap.value=o,rr.copy(l),rr.x*=-1,rr.y*=-1,rr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),r.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(rr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap&&(r.lightMap.value=a.lightMap,r.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,r.lightMapTransform)),a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,a){a.color.getRGB(r.fogColor.value,_m(i)),a.isFog?(r.fogNear.value=a.near,r.fogFar.value=a.far):a.isFogExp2&&(r.fogDensity.value=a.density)},refreshMaterialUniforms:function(r,a,s,o,l){a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(r,a):a.isMeshToonMaterial?(n(r,a),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,a)):a.isMeshPhongMaterial?(n(r,a),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,a)):a.isMeshStandardMaterial?(n(r,a),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,a),a.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,a,l)):a.isMeshMatcapMaterial?(n(r,a),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,a)):a.isMeshDepthMaterial?n(r,a):a.isMeshDistanceMaterial?(n(r,a),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,a)):a.isMeshNormalMaterial?n(r,a):a.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,a),a.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,a)):a.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,a,s,o):a.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,a):a.isShadowMaterial?(r.color.value.copy(a.color),r.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function iv(i,e,t,n){let r={},a={},s=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete a[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let y=m.uniforms,v=0,x=16;for(let P=0,T=y.length;P<T;P++){let L=Array.isArray(y[P])?y[P]:[y[P]];for(let z=0,F=L.length;z<F;z++){let G=L[z],q=Array.isArray(G.value)?G.value:[G.value];for(let j=0,K=q.length;j<K;j++){let Y=c(q[j]),ee=v%x,te=ee%Y.boundary,he=ee+te;v+=te,he!==0&&x-he<Y.storage&&(v+=x-he),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=Y.storage}}}let b=v%x;b>0&&(v+=x-b),m.__size=v,m.__cache={}})(u),p=(function(m){let y=(function(){for(let P=0;P<o;P++)if(s.indexOf(P)===-1)return s.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let v=i.createBuffer(),x=m.__size,b=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,x,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;a[u.id]!==g&&((function(m){let y=r[m.id],v=m.uniforms,x=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,P=v.length;b<P;b++){let T=Array.isArray(v[b])?v[b]:[v[b]];for(let L=0,z=T.length;L<z;L++){let F=T[L];if(l(F,b,L,x)===!0){let G=F.__offset,q=Array.isArray(F.value)?F.value:[F.value],j=0;for(let K=0;K<q.length;K++){let Y=q[K],ee=c(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,G+j,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),a[u.id]=g)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);s=[],r={},a={}}}}var ko=class{constructor(e={}){let{canvas:t=p0(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let f=new Uint32Array(4),g=new Int32Array(4),m=null,y=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=0,this.toneMappingExposure=1;let b=this,P=!1,T=0,L=0,z=null,F=-1,G=null,q=new _t,j=new _t,K=null,Y=new Ie(0),ee=0,te=t.width,he=t.height,ce=1,_e=null,Ae=null,oe=new _t(0,0,te,he),ue=new _t(0,0,te,he),be=!1,Se=new ca,ge=!1,k=!1,A=new ze,D=new ze,R=new C,I=new _t,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},w=!1;function U(){return z===null?ce:1}let V,ie,H,ne,Q,se,ve,xe,Re,Le,Je,je,Me,nt,ut,yt,Te,Xe,lt,B,W,$,re,pe,E=n;function me(S,X){return t.getContext(S,X)}try{let S={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),E===null){let X="webgl2";if(E=me(X,S),E===null)throw me(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function Oe(){V=new z0(E),V.init(),$=new Qy(E,V),ie=new N0(E,V,e,$),H=new Ky(E,V),ie.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),ne=new H0(E),Q=new Hy,se=new Jy(E,V,H,Q,ie,$,ne),ve=new U0(b),xe=new O0(b),Re=new C0(E),re=new I0(E,Re),Le=new B0(E,Re,ne,re),Je=new V0(E,Le,Re,ne),lt=new G0(E,ie,se),yt=new D0(Q),je=new Fy(b,ve,xe,V,ie,re,yt),Me=new nv(b,Q),nt=new Vy,ut=new Yy(V),Xe=new P0(b,ve,xe,H,Je,p,l),Te=new $y(b,Je,ie),pe=new iv(E,ne,ie,H),B=new L0(E,V,ne),W=new F0(E,V,ne),ne.programs=je.programs,b.capabilities=ie,b.extensions=V,b.properties=Q,b.renderLists=nt,b.shadowMap=Te,b.state=H,b.info=ne}Oe();let Pe=new Lh(b,E);function rt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=ne.autoReset,X=Te.enabled,J=Te.autoUpdate,ae=Te.needsUpdate,Z=Te.type;Oe(),ne.autoReset=S,Te.enabled=X,Te.autoUpdate=J,Te.needsUpdate=ae,Te.type=Z}function Tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Hu(S){let X=S.target;X.removeEventListener("dispose",Hu),(function(J){(function(ae){let Z=Q.get(ae).programs;Z!==void 0&&(Z.forEach((function(de){je.releaseProgram(de)})),ae.isShaderMaterial&&je.releaseShaderCache(ae))})(J),Q.remove(J)})(X)}function Gu(S,X,J){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,ws(S,X,J),S.side=0,S.needsUpdate=!0,ws(S,X,J),S.side=2):ws(S,X,J)}this.xr=Pe,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let S=V.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=V.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(S){S!==void 0&&(ce=S,this.setSize(te,he,!1))},this.getSize=function(S){return S.set(te,he)},this.setSize=function(S,X,J=!0){Pe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(te=S,he=X,t.width=Math.floor(S*ce),t.height=Math.floor(X*ce),J===!0&&(t.style.width=S+"px",t.style.height=X+"px"),this.setViewport(0,0,S,X))},this.getDrawingBufferSize=function(S){return S.set(te*ce,he*ce).floor()},this.setDrawingBufferSize=function(S,X,J){te=S,he=X,ce=J,t.width=Math.floor(S*J),t.height=Math.floor(X*J),this.setViewport(0,0,S,X)},this.getCurrentViewport=function(S){return S.copy(q)},this.getViewport=function(S){return S.copy(oe)},this.setViewport=function(S,X,J,ae){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,X,J,ae),H.viewport(q.copy(oe).multiplyScalar(ce).round())},this.getScissor=function(S){return S.copy(ue)},this.setScissor=function(S,X,J,ae){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,X,J,ae),H.scissor(j.copy(ue).multiplyScalar(ce).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(S){H.setScissorTest(be=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){Ae=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(S=!0,X=!0,J=!0){let ae=0;if(S){let Z=!1;if(z!==null){let de=z.texture.format;Z=de===uu||de===hu||de===cu}if(Z){let de=z.texture.type,we=de===On||de===mi||de===Qa||de===aa||de===ou||de===lu,Ce=Xe.getClearColor(),Ne=Xe.getClearAlpha(),He=Ce.r,Ve=Ce.g,De=Ce.b;we?(f[0]=He,f[1]=Ve,f[2]=De,f[3]=Ne,E.clearBufferuiv(E.COLOR,0,f)):(g[0]=He,g[1]=Ve,g[2]=De,g[3]=Ne,E.clearBufferiv(E.COLOR,0,g))}else ae|=E.COLOR_BUFFER_BIT}X&&(ae|=E.DEPTH_BUFFER_BIT),J&&(ae|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),nt.dispose(),ut.dispose(),Q.dispose(),ve.dispose(),xe.dispose(),Je.dispose(),re.dispose(),pe.dispose(),je.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Vu),Pe.removeEventListener("sessionend",Wu),Bi.stop()},this.renderBufferDirect=function(S,X,J,ae,Z,de){X===null&&(X=O);let we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=(function(tt,an,Zt,qe,Be){an.isScene!==!0&&(an=O),se.resetTextureUnits();let An=an.fog,fl=qe.isMeshStandardMaterial?an.environment:null,Ta=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:fa,Tr=(qe.isMeshStandardMaterial?xe:ve).get(qe.envMap||fl),gl=qe.vertexColors===!0&&!!Zt.attributes.color&&Zt.attributes.color.itemSize===4,yl=!!Zt.attributes.tangent&&(!!qe.normalMap||qe.anisotropy>0),vl=!!Zt.morphAttributes.position,_i=!!Zt.morphAttributes.normal,Cf=!!Zt.morphAttributes.color,Zu=0;qe.toneMapped&&(z!==null&&z.isXRRenderTarget!==!0||(Zu=b.toneMapping));let Ku=Zt.morphAttributes.position||Zt.morphAttributes.normal||Zt.morphAttributes.color,kf=Ku!==void 0?Ku.length:0,Qe=Q.get(qe),Pf=y.state.lights;if(ge===!0&&(k===!0||tt!==G)){let _n=tt===G&&qe.id===F;yt.setState(qe,tt,_n)}let Rn=!1;qe.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==Pf.state.version||Qe.outputColorSpace!==Ta||Be.isBatchedMesh&&Qe.batching===!1?Rn=!0:Be.isBatchedMesh||Qe.batching!==!0?Be.isBatchedMesh&&Qe.batchingColor===!0&&Be.colorTexture===null||Be.isBatchedMesh&&Qe.batchingColor===!1&&Be.colorTexture!==null||Be.isInstancedMesh&&Qe.instancing===!1?Rn=!0:Be.isInstancedMesh||Qe.instancing!==!0?Be.isSkinnedMesh&&Qe.skinning===!1?Rn=!0:Be.isSkinnedMesh||Qe.skinning!==!0?Be.isInstancedMesh&&Qe.instancingColor===!0&&Be.instanceColor===null||Be.isInstancedMesh&&Qe.instancingColor===!1&&Be.instanceColor!==null||Be.isInstancedMesh&&Qe.instancingMorph===!0&&Be.morphTexture===null||Be.isInstancedMesh&&Qe.instancingMorph===!1&&Be.morphTexture!==null||Qe.envMap!==Tr||qe.fog===!0&&Qe.fog!==An?Rn=!0:Qe.numClippingPlanes===void 0||Qe.numClippingPlanes===yt.numPlanes&&Qe.numIntersection===yt.numIntersection?(Qe.vertexAlphas!==gl||Qe.vertexTangents!==yl||Qe.morphTargets!==vl||Qe.morphNormals!==_i||Qe.morphColors!==Cf||Qe.toneMapping!==Zu||Qe.morphTargetsCount!==kf)&&(Rn=!0):Rn=!0:Rn=!0:Rn=!0:Rn=!0:(Rn=!0,Qe.__version=qe.version);let Fi=Qe.currentProgram;Rn===!0&&(Fi=ws(qe,an,Be));let Ju=!1,Ea=!1,xl=!1,Ut=Fi.getUniforms(),bi=Qe.uniforms;if(H.useProgram(Fi.program)&&(Ju=!0,Ea=!0,xl=!0),qe.id!==F&&(F=qe.id,Ea=!0),Ju||G!==tt){H.buffers.depth.getReversed()?(A.copy(tt.projectionMatrix),(function(Hi){let Et=Hi.elements;Et[2]=.5*Et[2]+.5*Et[3],Et[6]=.5*Et[6]+.5*Et[7],Et[10]=.5*Et[10]+.5*Et[11],Et[14]=.5*Et[14]+.5*Et[15]})(A),(function(Hi){let Et=Hi.elements;Et[11]===-1?(Et[10]=-Et[10]-1,Et[14]=-Et[14]):(Et[10]=-Et[10],Et[14]=1-Et[14])})(A),Ut.setValue(E,"projectionMatrix",A)):Ut.setValue(E,"projectionMatrix",tt.projectionMatrix),Ut.setValue(E,"viewMatrix",tt.matrixWorldInverse);let _n=Ut.map.cameraPosition;_n!==void 0&&_n.setValue(E,R.setFromMatrixPosition(tt.matrixWorld)),ie.logarithmicDepthBuffer&&Ut.setValue(E,"logDepthBufFC",2/(Math.log(tt.far+1)/Math.LN2)),(qe.isMeshPhongMaterial||qe.isMeshToonMaterial||qe.isMeshLambertMaterial||qe.isMeshBasicMaterial||qe.isMeshStandardMaterial||qe.isShaderMaterial)&&Ut.setValue(E,"isOrthographic",tt.isOrthographicCamera===!0),G!==tt&&(G=tt,Ea=!0,xl=!0)}if(Be.isSkinnedMesh){Ut.setOptional(E,Be,"bindMatrix"),Ut.setOptional(E,Be,"bindMatrixInverse");let _n=Be.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ut.setValue(E,"boneTexture",_n.boneTexture,se))}Be.isBatchedMesh&&(Ut.setOptional(E,Be,"batchingTexture"),Ut.setValue(E,"batchingTexture",Be._matricesTexture,se),Ut.setOptional(E,Be,"batchingIdTexture"),Ut.setValue(E,"batchingIdTexture",Be._indirectTexture,se),Ut.setOptional(E,Be,"batchingColorTexture"),Be._colorsTexture!==null&&Ut.setValue(E,"batchingColorTexture",Be._colorsTexture,se));let _l=Zt.morphAttributes;_l.position===void 0&&_l.normal===void 0&&_l.color===void 0||lt.update(Be,Zt,Fi),(Ea||Qe.receiveShadow!==Be.receiveShadow)&&(Qe.receiveShadow=Be.receiveShadow,Ut.setValue(E,"receiveShadow",Be.receiveShadow)),qe.isMeshGouraudMaterial&&qe.envMap!==null&&(bi.envMap.value=Tr,bi.flipEnvMap.value=Tr.isCubeTexture&&Tr.isRenderTargetTexture===!1?-1:1),qe.isMeshStandardMaterial&&qe.envMap===null&&an.environment!==null&&(bi.envMapIntensity.value=an.environmentIntensity),Ea&&(Ut.setValue(E,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&(Cn=xl,(Hn=bi).ambientLightColor.needsUpdate=Cn,Hn.lightProbe.needsUpdate=Cn,Hn.directionalLights.needsUpdate=Cn,Hn.directionalLightShadows.needsUpdate=Cn,Hn.pointLights.needsUpdate=Cn,Hn.pointLightShadows.needsUpdate=Cn,Hn.spotLights.needsUpdate=Cn,Hn.spotLightShadows.needsUpdate=Cn,Hn.rectAreaLights.needsUpdate=Cn,Hn.hemisphereLights.needsUpdate=Cn),An&&qe.fog===!0&&Me.refreshFogUniforms(bi,An),Me.refreshMaterialUniforms(bi,qe,ce,he,y.state.transmissionRenderTarget[tt.id]),ta.upload(E,Yu(Qe),bi,se));var Hn,Cn;if(qe.isShaderMaterial&&qe.uniformsNeedUpdate===!0&&(ta.upload(E,Yu(Qe),bi,se),qe.uniformsNeedUpdate=!1),qe.isSpriteMaterial&&Ut.setValue(E,"center",Be.center),Ut.setValue(E,"modelViewMatrix",Be.modelViewMatrix),Ut.setValue(E,"normalMatrix",Be.normalMatrix),Ut.setValue(E,"modelMatrix",Be.matrixWorld),qe.isShaderMaterial||qe.isRawShaderMaterial){let _n=qe.uniformsGroups;for(let Hi=0,Et=_n.length;Hi<Et;Hi++){let Qu=_n[Hi];pe.update(Qu,Fi),pe.bind(Qu,Fi)}}return Fi})(S,X,J,ae,Z);H.setMaterial(ae,we);let Ne=J.index,He=1;if(ae.wireframe===!0){if(Ne=Le.getWireframeAttribute(J),Ne===void 0)return;He=2}let Ve=J.drawRange,De=J.attributes.position,Ke=Ve.start*He,It=(Ve.start+Ve.count)*He;de!==null&&(Ke=Math.max(Ke,de.start*He),It=Math.min(It,(de.start+de.count)*He)),Ne!==null?(Ke=Math.max(Ke,0),It=Math.min(It,Ne.count)):De!=null&&(Ke=Math.max(Ke,0),It=Math.min(It,De.count));let vt=It-Ke;if(vt<0||vt===1/0)return;let Vt;re.setup(Z,ae,Ce,J,Ne);let bt=B;if(Ne!==null&&(Vt=Re.get(Ne),bt=W,bt.setIndex(Vt)),Z.isMesh)ae.wireframe===!0?(H.setLineWidth(ae.wireframeLinewidth*U()),bt.setMode(E.LINES)):bt.setMode(E.TRIANGLES);else if(Z.isLine){let tt=ae.linewidth;tt===void 0&&(tt=1),H.setLineWidth(tt*U()),Z.isLineSegments?bt.setMode(E.LINES):Z.isLineLoop?bt.setMode(E.LINE_LOOP):bt.setMode(E.LINE_STRIP)}else Z.isPoints?bt.setMode(E.POINTS):Z.isSprite&&bt.setMode(E.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)bt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let tt=Z._multiDrawStarts,an=Z._multiDrawCounts,Zt=Z._multiDrawCount,qe=Ne?Re.get(Ne).bytesPerElement:1,Be=Q.get(ae).currentProgram.getUniforms();for(let An=0;An<Zt;An++)Be.setValue(E,"_gl_DrawID",An),bt.render(tt[An]/qe,an[An])}else if(Z.isInstancedMesh)bt.renderInstances(Ke,vt,Z.count);else if(J.isInstancedBufferGeometry){let tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,an=Math.min(J.instanceCount,tt);bt.renderInstances(Ke,vt,an)}else bt.render(Ke,vt)},this.compile=function(S,X,J=null){J===null&&(J=S),y=ut.get(J),y.init(X),x.push(y),J.traverseVisible((function(Z){Z.isLight&&Z.layers.test(X.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))})),S!==J&&S.traverseVisible((function(Z){Z.isLight&&Z.layers.test(X.layers)&&(y.pushLight(Z),Z.castShadow&&y.pushShadow(Z))})),y.setupLights();let ae=new Set;return S.traverse((function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let de=Z.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){let Ce=de[we];Gu(Ce,J,Z),ae.add(Ce)}else Gu(de,J,Z),ae.add(de)})),x.pop(),y=null,ae},this.compileAsync=function(S,X,J=null){let ae=this.compile(S,X,J);return new Promise((Z=>{function de(){ae.forEach((function(we){Q.get(we).currentProgram.isReady()&&ae.delete(we)})),ae.size!==0?setTimeout(de,10):Z(S)}V.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)}))};let pl=null;function Vu(){Bi.stop()}function Wu(){Bi.start()}let Bi=new bm;function ml(S,X,J,ae){if(S.visible===!1)return;if(S.layers.test(X.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(X);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Se.intersectsSprite(S)){ae&&I.setFromMatrixPosition(S.matrixWorld).applyMatrix4(D);let de=Je.update(S),we=S.material;we.visible&&m.push(S,de,we,J,I.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Se.intersectsObject(S))){let de=Je.update(S),we=S.material;if(ae&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),I.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),I.copy(de.boundingSphere.center)),I.applyMatrix4(S.matrixWorld).applyMatrix4(D)),Array.isArray(we)){let Ce=de.groups;for(let Ne=0,He=Ce.length;Ne<He;Ne++){let Ve=Ce[Ne],De=we[Ve.materialIndex];De&&De.visible&&m.push(S,de,De,J,I.z,Ve)}}else we.visible&&m.push(S,de,we,J,I.z,null)}}let Z=S.children;for(let de=0,we=Z.length;de<we;de++)ml(Z[de],X,J,ae)}function ju(S,X,J,ae){let Z=S.opaque,de=S.transmissive,we=S.transparent;y.setupLightsView(J),ge===!0&&yt.setGlobalState(b.clippingPlanes,J),ae&&H.viewport(q.copy(ae)),Z.length>0&&Ms(Z,X,J),de.length>0&&Ms(de,X,J),we.length>0&&Ms(we,X,J),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Xu(S,X,J,ae){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new wn(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?yi:On,minFilter:Pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let Z=y.state.transmissionRenderTarget[ae.id],de=ae.viewport||q;Z.setSize(de.z,de.w);let we=b.getRenderTarget();b.setRenderTarget(Z),b.getClearColor(Y),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),w&&Xe.render(J);let Ce=b.toneMapping;b.toneMapping=0;let Ne=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),ge===!0&&yt.setGlobalState(b.clippingPlanes,ae),Ms(S,J,ae),se.updateMultisampleRenderTarget(Z),se.updateRenderTargetMipmap(Z),V.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ve=0,De=X.length;Ve<De;Ve++){let Ke=X[Ve],It=Ke.object,vt=Ke.geometry,Vt=Ke.material,bt=Ke.group;if(Vt.side===2&&It.layers.test(ae.layers)){let tt=Vt.side;Vt.side=1,Vt.needsUpdate=!0,qu(It,J,ae,vt,Vt,bt),Vt.side=tt,Vt.needsUpdate=!0,He=!0}}He===!0&&(se.updateMultisampleRenderTarget(Z),se.updateRenderTargetMipmap(Z))}b.setRenderTarget(we),b.setClearColor(Y,ee),Ne!==void 0&&(ae.viewport=Ne),b.toneMapping=Ce}function Ms(S,X,J){let ae=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,de=S.length;Z<de;Z++){let we=S[Z],Ce=we.object,Ne=we.geometry,He=ae===null?we.material:ae,Ve=we.group;Ce.layers.test(J.layers)&&qu(Ce,X,J,Ne,He,Ve)}}function qu(S,X,J,ae,Z,de){S.onBeforeRender(b,X,J,ae,Z,de),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(b,X,J,ae,S,de),Z.transparent===!0&&Z.side===2&&Z.forceSinglePass===!1?(Z.side=1,Z.needsUpdate=!0,b.renderBufferDirect(J,X,ae,Z,S,de),Z.side=0,Z.needsUpdate=!0,b.renderBufferDirect(J,X,ae,Z,S,de),Z.side=2):b.renderBufferDirect(J,X,ae,Z,S,de),S.onAfterRender(b,X,J,ae,Z,de)}function ws(S,X,J){X.isScene!==!0&&(X=O);let ae=Q.get(S),Z=y.state.lights,de=y.state.shadowsArray,we=Z.state.version,Ce=je.getParameters(S,Z.state,de,X,J),Ne=je.getProgramCacheKey(Ce),He=ae.programs;ae.environment=S.isMeshStandardMaterial?X.environment:null,ae.fog=X.fog,ae.envMap=(S.isMeshStandardMaterial?xe:ve).get(S.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&S.envMap===null?X.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",Hu),He=new Map,ae.programs=He);let Ve=He.get(Ne);if(Ve!==void 0){if(ae.currentProgram===Ve&&ae.lightsStateVersion===we)return $u(S,Ce),Ve}else Ce.uniforms=je.getUniforms(S),S.onBeforeCompile(Ce,b),Ve=je.acquireProgram(Ce,Ne),He.set(Ne,Ve),ae.uniforms=Ce.uniforms;let De=ae.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(De.clippingPlanes=yt.uniform),$u(S,Ce),ae.needsLights=(function(Ke){return Ke.isMeshLambertMaterial||Ke.isMeshToonMaterial||Ke.isMeshPhongMaterial||Ke.isMeshStandardMaterial||Ke.isShadowMaterial||Ke.isShaderMaterial&&Ke.lights===!0})(S),ae.lightsStateVersion=we,ae.needsLights&&(De.ambientLightColor.value=Z.state.ambient,De.lightProbe.value=Z.state.probe,De.directionalLights.value=Z.state.directional,De.directionalLightShadows.value=Z.state.directionalShadow,De.spotLights.value=Z.state.spot,De.spotLightShadows.value=Z.state.spotShadow,De.rectAreaLights.value=Z.state.rectArea,De.ltc_1.value=Z.state.rectAreaLTC1,De.ltc_2.value=Z.state.rectAreaLTC2,De.pointLights.value=Z.state.point,De.pointLightShadows.value=Z.state.pointShadow,De.hemisphereLights.value=Z.state.hemi,De.directionalShadowMap.value=Z.state.directionalShadowMap,De.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,De.spotShadowMap.value=Z.state.spotShadowMap,De.spotLightMatrix.value=Z.state.spotLightMatrix,De.spotLightMap.value=Z.state.spotLightMap,De.pointShadowMap.value=Z.state.pointShadowMap,De.pointShadowMatrix.value=Z.state.pointShadowMatrix),ae.currentProgram=Ve,ae.uniformsList=null,Ve}function Yu(S){if(S.uniformsList===null){let X=S.currentProgram.getUniforms();S.uniformsList=ta.seqWithValue(X.seq,S.uniforms)}return S.uniformsList}function $u(S,X){let J=Q.get(S);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}Bi.setAnimationLoop((function(S){pl&&pl(S)})),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(S){pl=S,Pe.setAnimationLoop(S),S===null?Bi.stop():Bi.start()},Pe.addEventListener("sessionstart",Vu),Pe.addEventListener("sessionend",Wu),this.render=function(S,X){if(X!==void 0&&X.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(X),X=Pe.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,X,z),y=ut.get(S,x.length),y.init(X),x.push(y),D.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Se.setFromProjectionMatrix(D),k=this.localClippingEnabled,ge=yt.init(this.clippingPlanes,k),m=nt.get(S,v.length),m.init(),v.push(m),Pe.enabled===!0&&Pe.isPresenting===!0){let de=b.xr.getDepthSensingMesh();de!==null&&ml(de,X,-1/0,b.sortObjects)}ml(S,X,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(_e,Ae),w=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,w&&Xe.addToRenderList(m,S),this.info.render.frame++,ge===!0&&yt.beginShadows();let J=y.state.shadowsArray;Te.render(J,S,X),ge===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=m.opaque,Z=m.transmissive;if(y.setupLights(),X.isArrayCamera){let de=X.cameras;if(Z.length>0)for(let we=0,Ce=de.length;we<Ce;we++)Xu(ae,Z,S,de[we]);w&&Xe.render(S);for(let we=0,Ce=de.length;we<Ce;we++){let Ne=de[we];ju(m,S,Ne,Ne.viewport)}}else Z.length>0&&Xu(ae,Z,S,X),w&&Xe.render(S),ju(m,S,X);z!==null&&(se.updateMultisampleRenderTarget(z),se.updateRenderTargetMipmap(z)),S.isScene===!0&&S.onAfterRender(b,S,X),re.resetDefaultState(),F=-1,G=null,x.pop(),x.length>0?(y=x[x.length-1],ge===!0&&yt.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(S,X,J){Q.get(S.texture).__webglTexture=X,Q.get(S.depthTexture).__webglTexture=J;let ae=Q.get(S);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=J===void 0,ae.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,X){let J=Q.get(S);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(S,X=0,J=0){z=S,T=X,L=J;let ae=!0,Z=null,de=!1,we=!1;if(S){let Ce=Q.get(S);if(Ce.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(E.FRAMEBUFFER,null),ae=!1;else if(Ce.__webglFramebuffer===void 0)se.setupRenderTarget(S);else if(Ce.__hasExternalTextures)se.rebindTextures(S,Q.get(S.texture).__webglTexture,Q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ve=S.depthTexture;if(Ce.__boundDepthTexture!==Ve){if(Ve!==null&&Q.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(S)}}let Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);let He=Q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Z=Array.isArray(He[X])?He[X][J]:He[X],de=!0):Z=S.samples>0&&se.useMultisampledRTT(S)===!1?Q.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?He[J]:He,q.copy(S.viewport),j.copy(S.scissor),K=S.scissorTest}else q.copy(oe).multiplyScalar(ce).floor(),j.copy(ue).multiplyScalar(ce).floor(),K=be;if(H.bindFramebuffer(E.FRAMEBUFFER,Z)&&ae&&H.drawBuffers(S,Z),H.viewport(q),H.scissor(j),H.setScissorTest(K),de){let Ce=Q.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,J)}else if(we){let Ce=Q.get(S.texture),Ne=X||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ce.__webglTexture,J||0,Ne)}F=-1},this.readRenderTargetPixels=function(S,X,J,ae,Z,de,we){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){H.bindFramebuffer(E.FRAMEBUFFER,Ce);try{let Ne=S.texture,He=Ne.format,Ve=Ne.type;if(!ie.textureFormatReadable(He))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");X>=0&&X<=S.width-ae&&J>=0&&J<=S.height-Z&&E.readPixels(X,J,ae,Z,$.convert(He),$.convert(Ve),de)}finally{let Ne=z!==null?Q.get(z).__webglFramebuffer:null;H.bindFramebuffer(E.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,X,J,ae,Z,de,we){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){let Ne=S.texture,He=Ne.format,Ve=Ne.type;if(!ie.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=S.width-ae&&J>=0&&J<=S.height-Z){H.bindFramebuffer(E.FRAMEBUFFER,Ce);let De=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,De),E.bufferData(E.PIXEL_PACK_BUFFER,de.byteLength,E.STREAM_READ),E.readPixels(X,J,ae,Z,$.convert(He),$.convert(Ve),0);let Ke=z!==null?Q.get(z).__webglFramebuffer:null;H.bindFramebuffer(E.FRAMEBUFFER,Ke);let It=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await(function(vt,Vt,bt){return new Promise((function(tt,an){setTimeout((function Zt(){switch(vt.clientWaitSync(Vt,vt.SYNC_FLUSH_COMMANDS_BIT,0)){case vt.WAIT_FAILED:an();break;case vt.TIMEOUT_EXPIRED:setTimeout(Zt,bt);break;default:tt()}}),bt)}))})(E,It,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,De),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,de),E.deleteBuffer(De),E.deleteSync(It),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,X=null,J=0){S.isTexture!==!0&&(Ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1]);let ae=Math.pow(2,-J),Z=Math.floor(S.image.width*ae),de=Math.floor(S.image.height*ae),we=X!==null?X.x:0,Ce=X!==null?X.y:0;se.setTexture2D(S,0),E.copyTexSubImage2D(E.TEXTURE_2D,J,0,0,we,Ce,Z,de),H.unbindTexture()},this.copyTextureToTexture=function(S,X,J=null,ae=null,Z=0){let de,we,Ce,Ne,He,Ve,De,Ke,It;S.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,S=arguments[1],X=arguments[2],Z=arguments[3]||0,J=null);let vt=S.isCompressedTexture?S.mipmaps[Z]:S.image;J!==null?(de=J.max.x-J.min.x,we=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,He=J.min.y,Ve=J.isBox3?J.min.z:0):(de=vt.width,we=vt.height,Ce=vt.depth||1,Ne=0,He=0,Ve=0),ae!==null?(De=ae.x,Ke=ae.y,It=ae.z):(De=0,Ke=0,It=0);let Vt=$.convert(X.format),bt=$.convert(X.type),tt;X.isData3DTexture?(se.setTexture3D(X,0),tt=E.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(se.setTexture2DArray(X,0),tt=E.TEXTURE_2D_ARRAY):(se.setTexture2D(X,0),tt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,X.unpackAlignment);let an=E.getParameter(E.UNPACK_ROW_LENGTH),Zt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),qe=E.getParameter(E.UNPACK_SKIP_PIXELS),Be=E.getParameter(E.UNPACK_SKIP_ROWS),An=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,vt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,vt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ne),E.pixelStorei(E.UNPACK_SKIP_ROWS,He),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ve);let fl=S.isDataArrayTexture||S.isData3DTexture,Ta=X.isDataArrayTexture||X.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Tr=Q.get(S),gl=Q.get(X),yl=Q.get(Tr.__renderTarget),vl=Q.get(gl.__renderTarget);H.bindFramebuffer(E.READ_FRAMEBUFFER,yl.__webglFramebuffer),H.bindFramebuffer(E.DRAW_FRAMEBUFFER,vl.__webglFramebuffer);for(let _i=0;_i<Ce;_i++)fl&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(S).__webglTexture,Z,Ve+_i),S.isDepthTexture?(Ta&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Q.get(X).__webglTexture,Z,It+_i),E.blitFramebuffer(Ne,He,de,we,De,Ke,de,we,E.DEPTH_BUFFER_BIT,E.NEAREST)):Ta?E.copyTexSubImage3D(tt,Z,De,Ke,It+_i,Ne,He,de,we):E.copyTexSubImage2D(tt,Z,De,Ke,It+_i,Ne,He,de,we);H.bindFramebuffer(E.READ_FRAMEBUFFER,null),H.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ta?S.isDataTexture||S.isData3DTexture?E.texSubImage3D(tt,Z,De,Ke,It,de,we,Ce,Vt,bt,vt.data):X.isCompressedArrayTexture?E.compressedTexSubImage3D(tt,Z,De,Ke,It,de,we,Ce,Vt,vt.data):E.texSubImage3D(tt,Z,De,Ke,It,de,we,Ce,Vt,bt,vt):S.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Z,De,Ke,de,we,Vt,bt,vt.data):S.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Z,De,Ke,vt.width,vt.height,Vt,vt.data):E.texSubImage2D(E.TEXTURE_2D,Z,De,Ke,de,we,Vt,bt,vt);E.pixelStorei(E.UNPACK_ROW_LENGTH,an),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Zt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,qe),E.pixelStorei(E.UNPACK_SKIP_ROWS,Be),E.pixelStorei(E.UNPACK_SKIP_IMAGES,An),Z===0&&X.generateMipmaps&&E.generateMipmap(tt),H.unbindTexture()},this.copyTextureToTexture3D=function(S,X,J=null,ae=null,Z=0){return S.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ae=arguments[1]||null,S=arguments[2],X=arguments[3],Z=arguments[4]||0),Ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,X,J,ae,Z)},this.initRenderTarget=function(S){Q.get(S).__webglFramebuffer===void 0&&se.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?se.setTextureCube(S,0):S.isData3DTexture?se.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?se.setTexture2DArray(S,0):se.setTexture2D(S,0),H.unbindTexture()},this.resetState=function(){T=0,L=0,z=null,H.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}},Po=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Io=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new C,Lo=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),a=ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dr=class extends Ni{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qr,Va=new C,Yr=new C,$r=new C,Zr=new le,Wa=new le,Em=new ze,ro=new C,ja=new C,ao=new C,jp=new le,Pc=new le,Xp=new le,ua=class extends un{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nh(t,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Lo(n,3,0,!1)),qr.setAttribute("uv",new Lo(n,2,3,!1))}this.geometry=qr,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-$r.z);let n=this.material.rotation,r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));let s=this.center;so(ro.set(-.5,-.5,0),$r,s,Yr,r,a),so(ja.set(.5,-.5,0),$r,s,Yr,r,a),so(ao.set(.5,.5,0),$r,s,Yr,r,a),jp.set(0,0),Pc.set(1,0),Xp.set(1,1);let o=e.ray.intersectTriangle(ro,ja,ao,!1,Va);if(o===null&&(so(ja.set(-.5,.5,0),$r,s,Yr,r,a),Pc.set(0,1),o=e.ray.intersectTriangle(ro,ao,ja,!1,Va),o===null))return;let l=e.ray.origin.distanceTo(Va);l<e.near||l>e.far||t.push({distance:l,point:Va.clone(),uv:ui.getInterpolation(Va,ro,ja,ao,jp,Pc,Xp,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function so(i,e,t,n,r,a){Zr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Wa.x=a*Zr.x-r*Zr.y,Wa.y=r*Zr.x+a*Zr.y):Wa.copy(Zr),i.copy(e),i.x+=Wa.x,i.y+=Wa.y,i.applyMatrix4(Em)}var o_=new C,l_=new C;var c_=new C,h_=new _t,u_=new _t,d_=new C,p_=new ze,m_=new C,f_=new Bn,g_=new ze,y_=new cr;var pr=class extends dn{constructor(e=null,t=1,n=1,r,a,s,o,l,c=1003,h=1003,u,d){super(null,s,o,l,c,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},v_=new ze,x_=new ze;var No=class extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kr=new ze,qp=new ze,oo=[],Yp=new zn,rv=new ze,Xa=new Ye,qa=new Bn,Do=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new No(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,rv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),Yp.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(Yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kr),qa.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=e*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=r[a+s]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),e.ray.intersectsSphere(qa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Kr),qp.multiplyMatrices(n,Kr),Xa.matrixWorld=qp,Xa.raycast(e,oo);for(let s=0,o=oo.length;s<o;s++){let l=oo[s];l.instanceId=a,l.object=this,t.push(l)}oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new No(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(r*this.count),r,this.count,ds,qn));let a=this.morphTexture.source.data.data,s=0;for(let c=0;c<n.length;c++)s+=n[c];let o=this.geometry.morphTargetsRelative?1:1-s,l=r*e;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Dh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let a=this.pool,s=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let o=a[this.index];s.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},__=new ze,b_=new Ie(1,1,1),M_=new ca,w_=new zn,S_=new Bn,T_=new C,E_=new C,A_=new C,R_=new Dh,C_=new Ye;var k_=new C,P_=new C,I_=new ze,L_=new cr,N_=new Bn,D_=new C,U_=new C;var O_=new C,z_=new C;var B_=new ze,F_=new cr,H_=new Bn,G_=new C;var xn=class extends dn{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,a=n.length,s;s=t||e*n[a-1];let o,l=0,c=a-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-s,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===s)return r/(a-1);let h=n[r];return(r+(s-h)/(n[r+1]-h))/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new le:new C);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,r=[],a=[],s=[],o=new C,l=new ze;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new C)}a[0]=new C,s[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Yt(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,f))}s[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(Yt(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let f=1;f<=e;f++)a[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),s[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},is=class extends Sn{constructor(e=0,t=0,n=1,r=1,a=0,s=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=s?0:r),this.aClockwise!==!0||s||(a===r?a=-r:a-=r);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uh=class extends is{constructor(e,t,n,r,a,s){super(e,t,n,n,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function pu(){let i=0,e=0,t=0,n=0;function r(a,s,o,l){i=a,e=o,t=-3*a+3*s-2*o-l,n=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,u){let d=(s-a)/c-(o-a)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(a){let s=a*a;return i+e*a+t*s+n*(s*a)}}}var lo=new C,Ic=new pu,Lc=new pu,Nc=new pu,rs=class extends Sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){let n=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,o,l,c=Math.floor(s),h=s-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:h===0&&c===a-1&&(c=a-2,h=1),this.closed||c>0?o=r[(c-1)%a]:(lo.subVectors(r[0],r[1]).add(r[0]),o=lo);let u=r[c%a],d=r[(c+1)%a];if(this.closed||c+2<a?l=r[(c+2)%a]:(lo.subVectors(r[a-1],r[a-2]).add(r[a-1]),l=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Ic.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,m),Lc.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,m),Nc.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Lc.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Nc.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Ic.calc(h),Lc.calc(h),Nc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $p(i,e,t,n,r){let a=.5*(n-e),s=.5*(r-t),o=i*i;return(2*t-2*n+a+s)*(i*o)+(-3*t+3*n-2*a-s)*o+a*i+t}function Za(i,e,t,n){return(function(r,a){let s=1-r;return s*s*a})(i,e)+(function(r,a){return 2*(1-r)*r*a})(i,t)+(function(r,a){return r*r*a})(i,n)}function Ka(i,e,t,n,r){return(function(a,s){let o=1-a;return o*o*o*s})(i,e)+(function(a,s){let o=1-a;return 3*o*o*a*s})(i,t)+(function(a,s){return 3*(1-a)*a*a*s})(i,n)+(function(a,s){return a*a*a*s})(i,r)}var Uo=class extends Sn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){let n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(Ka(e,r.x,a.x,s.x,o.x),Ka(e,r.y,a.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oh=class extends Sn{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){let n=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return n.set(Ka(e,r.x,a.x,s.x,o.x),Ka(e,r.y,a.y,s.y,o.y),Ka(e,r.z,a.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oo=class extends Sn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zh=class extends Sn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Sn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(Za(e,r.x,a.x,s.x),Za(e,r.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends Sn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,r=this.v0,a=this.v1,s=this.v2;return n.set(Za(e,r.x,a.x,s.x),Za(e,r.y,a.y,s.y),Za(e,r.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return n.set($p(o,l.x,c.x,h.x,u.x),$p(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},Ho=Object.freeze({__proto__:null,ArcCurve:Uh,CatmullRomCurve3:rs,CubicBezierCurve:Uo,CubicBezierCurve3:Oh,EllipseCurve:is,LineCurve:Oo,LineCurve3:zh,QuadraticBezierCurve:zo,QuadraticBezierCurve3:Bo,SplineCurve:Fo}),Bh=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=n){let s=r[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],o=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ho[r.type]().fromJSON(r))}return this}},as=class extends Bh{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Oo(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let a=new zo(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,s){let o=new Uo(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,s){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,a,s),this}absarc(e,t,n,r,a,s){return this.absellipse(e,t,n,n,r,a,s),this}ellipse(e,t,n,r,a,s,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,a,s,o,l),this}absellipse(e,t,n,r,a,s,o,l){let c=new is(e,t,n,r,a,s,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$n=class i extends Pt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Yt(r,0,2*Math.PI);let a=[],s=[],o=[],l=[],c=[],h=1/t,u=new C,d=new le,p=new C,f=new C,g=new C,m=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let x=n+v*h*r,b=Math.sin(x),P=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*b,u.y=e[T].y,u.z=e[T].x*P,s.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);let L=l[3*T+0]*b,z=l[3*T+1],F=l[3*T+0]*P;c.push(L,z,F)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let b=x+v*e.length,P=b,T=b+e.length,L=b+e.length+1,z=b+1;a.push(P,T,z),a.push(L,z,T)}this.setIndex(a),this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(o,2)),this.setAttribute("normal",new Fe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},mr=class i extends $n{constructor(e=1,t=1,n=4,r=8){let a=new as;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},fr=class i extends Pt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let a=[],s=[],o=[],l=[],c=new C,h=new le;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(o,3)),this.setAttribute("uv",new Fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$e=class i extends Pt{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,y=0;function v(x){let b=f,P=new le,T=new C,L=0,z=x===!0?e:t,F=x===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,m*F,0),d.push(0,F,0),p.push(.5,.5),f++;let G=f;for(let q=0;q<=r;q++){let j=q/r*l+o,K=Math.cos(j),Y=Math.sin(j);T.x=z*Y,T.y=m*F,T.z=z*K,u.push(T.x,T.y,T.z),d.push(0,F,0),P.x=.5*K+.5,P.y=.5*Y*F+.5,p.push(P.x,P.y),f++}for(let q=0;q<r;q++){let j=b+q,K=G+q;x===!0?h.push(K,K+1,j):h.push(K+1,K,j),L+=3}c.addGroup(y,L,x===!0?1:2),y+=L}(function(){let x=new C,b=new C,P=0,T=(t-e)/n;for(let L=0;L<=a;L++){let z=[],F=L/a,G=F*(t-e)+e;for(let q=0;q<=r;q++){let j=q/r,K=j*l+o,Y=Math.sin(K),ee=Math.cos(K);b.x=G*Y,b.y=-F*n+m,b.z=G*ee,u.push(b.x,b.y,b.z),x.set(Y,T,ee).normalize(),d.push(x.x,x.y,x.z),p.push(j,1-F),z.push(f++)}g.push(z)}for(let L=0;L<r;L++)for(let z=0;z<a;z++){let F=g[z][L],G=g[z+1][L],q=g[z+1][L+1],j=g[z][L+1];(e>0||z!==0)&&(h.push(F,G,j),P+=3),(t>0||z!==a-1)&&(h.push(G,q,j),P+=3)}c.addGroup(y,P,0),y+=P})(),s===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},en=class i extends $e{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=2*Math.PI){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gr=class i extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let a=[],s=[];function o(d,p,f,g){let m=g+1,y=[];for(let v=0;v<=m;v++){y[v]=[];let x=d.clone().lerp(f,v/m),b=p.clone().lerp(f,v/m),P=m-v;for(let T=0;T<=P;T++)y[v][T]=T===0&&v===m?x:x.clone().lerp(b,T/P)}for(let v=0;v<m;v++)for(let x=0;x<2*(m-v)-1;x++){let b=Math.floor(x/2);x%2==0?(l(y[v][b+1]),l(y[v+1][b]),l(y[v][b])):(l(y[v][b+1]),l(y[v+1][b+1]),l(y[v+1][b]))}}function l(d){a.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(s[p]=d.x-1),f.x===0&&f.z===0&&(s[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new C,f=new C,g=new C;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,d)})(r),(function(d){let p=new C;for(let f=0;f<a.length;f+=3)p.x=a[f+0],p.y=a[f+1],p.z=a[f+2],p.normalize().multiplyScalar(d),a[f+0]=p.x,a[f+1]=p.y,a[f+2]=p.z})(n),(function(){let d=new C;for(let f=0;f<a.length;f+=3){d.x=a[f+0],d.y=a[f+1],d.z=a[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);s.push(g,1-m)}var p;(function(){let f=new C,g=new C,m=new C,y=new C,v=new le,x=new le,b=new le;for(let P=0,T=0;P<a.length;P+=9,T+=6){f.set(a[P+0],a[P+1],a[P+2]),g.set(a[P+3],a[P+4],a[P+5]),m.set(a[P+6],a[P+7],a[P+8]),v.set(s[T+0],s[T+1]),x.set(s[T+2],s[T+3]),b.set(s[T+4],s[T+5]),y.copy(f).add(g).add(m).divideScalar(3);let L=u(y);h(v,T+0,f,L),h(x,T+2,g,L),h(b,T+4,m,L)}})(),(function(){for(let f=0;f<s.length;f+=6){let g=s[f+0],m=s[f+2],y=s[f+4],v=Math.max(g,m,y),x=Math.min(g,m,y);v>.9&&x<.1&&(g<.2&&(s[f+0]+=1),m<.2&&(s[f+2]+=1),y<.2&&(s[f+4]+=1))}})()})(),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(a.slice(),3)),this.setAttribute("uv",new Fe(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Fh=class i extends gr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},co=new C,ho=new C,Dc=new C,uo=new ui,Hh=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),a=Math.cos(bo*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){s?(c[0]=s.getX(f),c[1]=s.getX(f+1),c[2]=s.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:y}=uo;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),uo.getNormal(Dc),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,b=u[v],P=u[x],T=uo[h[v]],L=uo[h[x]],z=`${b}_${P}`,F=`${P}_${b}`;F in d&&d[F]?(Dc.dot(d[F].normal)<=a&&(p.push(T.x,T.y,T.z),p.push(L.x,L.y,L.z)),d[F]=null):z in d||(d[z]={index0:c[v],index1:c[x],normal:Dc.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];co.fromBufferAttribute(o,g),ho.fromBufferAttribute(o,m),p.push(co.x,co.y,co.z),p.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new Fe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},gi=class extends as{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new as().fromJSON(r))}return this}},av=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,a=Zp(i,0,r,t,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,c,h,u,d,p;if(n&&(a=(function(f,g,m,y){let v=[],x,b,P,T,L;for(x=0,b=g.length;x<b;x++)P=g[x]*y,T=x<b-1?g[x+1]*y:f.length,L=Zp(f,P,T,y,!1),L===L.next&&(L.steiner=!0),v.push(pv(L));for(v.sort(hv),x=0;x<v.length;x++)m=uv(v[x],m);return m})(i,e,a,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ss(a,s,t,o,l,p,0),s};function Zp(i,e,t,n,r){let a,s;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(a=e;a<t;a+=n)s=Kp(a,i[a],i[a+1],s);else for(a=t-n;a>=e;a-=n)s=Kp(a,i[a],i[a+1],s);return s&&Zo(s,s.next)&&(ls(s),s=s.next),s}function yr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Zo(n,n.next)&&kt(n.prev,n,n.next)!==0)n=n.next;else{if(ls(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ss(i,e,t,n,r,a,s){if(!i)return;!s&&a&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Gh(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,y,v,x,b,P,T,L,z=1;do{for(y=g,g=null,b=null,P=0;y;){for(P++,v=y,T=0,m=0;m<z&&(T++,v=v.nextZ,v);m++);for(L=z;T>0||L>0&&v;)T!==0&&(L===0||!v||y.z<=v.z)?(x=y,y=y.nextZ,T--):(x=v,v=v.nextZ,L--),b?b.nextZ=x:g=x,x.prevZ=b,b=x;y=v}b.nextZ=null,z*=2}while(P>1)})(f)})(i,n,r,a);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,a?ov(i,n,r,a):sv(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ls(i),i=l.next,c=l.next;else if((i=l)===c){s?s===1?ss(i=lv(yr(i),e,t),e,t,n,r,a,2):s===2&&cv(i,e,t,n,r,a):ss(yr(i),e,t,n,r,a,1);break}}function sv(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let r=e.x,a=t.x,s=n.x,o=e.y,l=t.y,c=n.y,h=r<a?r<s?r:s:a<s?a:s,u=o<l?o<c?o:c:l<c?l:c,d=r>a?r>s?r:s:a>s?a:s,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Qr(r,o,a,l,s,c,f.x,f.y)&&kt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function ov(i,e,t,n){let r=i.prev,a=i,s=i.next;if(kt(r,a,s)>=0)return!1;let o=r.x,l=a.x,c=s.x,h=r.y,u=a.y,d=s.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,y=Gh(p,f,e,t,n),v=Gh(g,m,e,t,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=y&&b&&b.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==r&&x!==s&&Qr(o,h,l,u,c,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=p&&b.x<=g&&b.y>=f&&b.y<=m&&b!==r&&b!==s&&Qr(o,h,l,u,c,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=y;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==r&&x!==s&&Qr(o,h,l,u,c,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=g&&b.y>=f&&b.y<=m&&b!==r&&b!==s&&Qr(o,h,l,u,c,d,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function lv(i,e,t){let n=i;do{let r=n.prev,a=n.next.next;!Zo(r,a)&&Am(r,n,n.next,a)&&os(r,a)&&os(a,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),ls(n),ls(n.next),n=i=a),n=n.next}while(n!==i);return yr(n)}function cv(i,e,t,n,r,a){let s=i;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&mv(s,o)){let l=Rm(s,o);return s=yr(s,s.next),l=yr(l,l.next),ss(s,e,t,n,r,a,0),void ss(l,e,t,n,r,a,0)}o=o.next}s=s.next}while(s!==i)}function hv(i,e){return i.x-e.x}function uv(i,e){let t=(function(r,a){let s,o=a,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,s=o.x<o.next.x?o:o.next,m===c))return s}o=o.next}while(o!==a);if(!s)return null;let u=s,d=s.x,p=s.y,f,g=1/0;o=s;do c>=o.x&&o.x>=d&&c!==o.x&&Qr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),os(o,r)&&(f<g||f===g&&(o.x>s.x||o.x===s.x&&dv(s,o)))&&(s=o,g=f)),o=o.next;while(o!==u);return s})(i,e);if(!t)return e;let n=Rm(t,i);return yr(n,n.next),yr(t,t.next)}function dv(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function Gh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function pv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qr(i,e,t,n,r,a,s,o){return(r-s)*(e-o)>=(i-s)*(a-o)&&(i-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(n-o)}function mv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Am(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(os(i,e)&&os(e,i)&&(function(t,n){let r=t,a=!1,s=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&s<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a})(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||Zo(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zo(i,e){return i.x===e.x&&i.y===e.y}function Am(i,e,t,n){let r=mo(kt(i,e,t)),a=mo(kt(i,e,n)),s=mo(kt(t,n,i)),o=mo(kt(t,n,e));return r!==a&&s!==o||!(r!==0||!po(i,t,e))||!(a!==0||!po(i,n,e))||!(s!==0||!po(t,i,n))||!(o!==0||!po(t,e,n))}function po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mo(i){return i>0?1:i<0?-1:0}function os(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function Rm(i,e){let t=new Vh(i.i,i.x,i.y),n=new Vh(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Kp(i,e,t,n){let r=new Vh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ii=class i{static area(e){let t=e.length,n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],a=[];Jp(e),Qp(n,e);let s=e.length;t.forEach(Jp);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Qp(n,t[l]);let o=av(n,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Jp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vr=class i extends Pt{constructor(e=new gi([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++)s(e[o]);function s(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:fv,x,b,P,T,L,z=!1;y&&(x=y.getSpacedPoints(h),z=!0,d=!1,b=y.computeFrenetFrames(h,!1),P=new C,T=new C,L=new C),d||(m=0,p=0,f=0,g=0);let F=o.extractPoints(c),G=F.shape,q=F.holes;if(!Ii.isClockWise(G)){G=G.reverse();for(let R=0,I=q.length;R<I;R++){let O=q[R];Ii.isClockWise(O)&&(q[R]=O.reverse())}}let j=Ii.triangulateShape(G,q),K=G;for(let R=0,I=q.length;R<I;R++){let O=q[R];G=G.concat(O)}function Y(R,I,O){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(I,O)}let ee=G.length,te=j.length;function he(R,I,O){let w,U,V,ie=R.x-I.x,H=R.y-I.y,ne=O.x-R.x,Q=O.y-R.y,se=ie*ie+H*H,ve=ie*Q-H*ne;if(Math.abs(ve)>Number.EPSILON){let xe=Math.sqrt(se),Re=Math.sqrt(ne*ne+Q*Q),Le=I.x-H/xe,Je=I.y+ie/xe,je=((O.x-Q/Re-Le)*Q-(O.y+ne/Re-Je)*ne)/(ie*Q-H*ne);w=Le+ie*je-R.x,U=Je+H*je-R.y;let Me=w*w+U*U;if(Me<=2)return new le(w,U);V=Math.sqrt(Me/2)}else{let xe=!1;ie>Number.EPSILON?ne>Number.EPSILON&&(xe=!0):ie<-Number.EPSILON?ne<-Number.EPSILON&&(xe=!0):Math.sign(H)===Math.sign(Q)&&(xe=!0),xe?(w=-H,U=ie,V=Math.sqrt(se)):(w=ie,U=H,V=Math.sqrt(se/2))}return new le(w/V,U/V)}let ce=[];for(let R=0,I=K.length,O=I-1,w=R+1;R<I;R++,O++,w++)O===I&&(O=0),w===I&&(w=0),ce[R]=he(K[R],K[O],K[w]);let _e=[],Ae,oe=ce.concat();for(let R=0,I=q.length;R<I;R++){let O=q[R];Ae=[];for(let w=0,U=O.length,V=U-1,ie=w+1;w<U;w++,V++,ie++)V===U&&(V=0),ie===U&&(ie=0),Ae[w]=he(O[w],O[V],O[ie]);_e.push(Ae),oe=oe.concat(Ae)}for(let R=0;R<m;R++){let I=R/m,O=p*Math.cos(I*Math.PI/2),w=f*Math.sin(I*Math.PI/2)+g;for(let U=0,V=K.length;U<V;U++){let ie=Y(K[U],ce[U],w);Se(ie.x,ie.y,-O)}for(let U=0,V=q.length;U<V;U++){let ie=q[U];Ae=_e[U];for(let H=0,ne=ie.length;H<ne;H++){let Q=Y(ie[H],Ae[H],w);Se(Q.x,Q.y,-O)}}}let ue=f+g;for(let R=0;R<ee;R++){let I=d?Y(G[R],oe[R],ue):G[R];z?(T.copy(b.normals[0]).multiplyScalar(I.x),P.copy(b.binormals[0]).multiplyScalar(I.y),L.copy(x[0]).add(T).add(P),Se(L.x,L.y,L.z)):Se(I.x,I.y,0)}for(let R=1;R<=h;R++)for(let I=0;I<ee;I++){let O=d?Y(G[I],oe[I],ue):G[I];z?(T.copy(b.normals[R]).multiplyScalar(O.x),P.copy(b.binormals[R]).multiplyScalar(O.y),L.copy(x[R]).add(T).add(P),Se(L.x,L.y,L.z)):Se(O.x,O.y,u/h*R)}for(let R=m-1;R>=0;R--){let I=R/m,O=p*Math.cos(I*Math.PI/2),w=f*Math.sin(I*Math.PI/2)+g;for(let U=0,V=K.length;U<V;U++){let ie=Y(K[U],ce[U],w);Se(ie.x,ie.y,u+O)}for(let U=0,V=q.length;U<V;U++){let ie=q[U];Ae=_e[U];for(let H=0,ne=ie.length;H<ne;H++){let Q=Y(ie[H],Ae[H],w);z?Se(Q.x,Q.y+x[h-1].y,x[h-1].x+O):Se(Q.x,Q.y,u+O)}}}function be(R,I){let O=R.length;for(;--O>=0;){let w=O,U=O-1;U<0&&(U=R.length-1);for(let V=0,ie=h+2*m;V<ie;V++){let H=ee*V,ne=ee*(V+1);k(I+w+H,I+U+H,I+U+ne,I+w+ne)}}}function Se(R,I,O){l.push(R),l.push(I),l.push(O)}function ge(R,I,O){A(R),A(I),A(O);let w=r.length/3,U=v.generateTopUV(n,r,w-3,w-2,w-1);D(U[0]),D(U[1]),D(U[2])}function k(R,I,O,w){A(R),A(I),A(w),A(I),A(O),A(w);let U=r.length/3,V=v.generateSideWallUV(n,r,U-6,U-3,U-2,U-1);D(V[0]),D(V[1]),D(V[3]),D(V[1]),D(V[2]),D(V[3])}function A(R){r.push(l[3*R+0]),r.push(l[3*R+1]),r.push(l[3*R+2])}function D(R){a.push(R.x),a.push(R.y)}(function(){let R=r.length/3;if(d){let I=0,O=ee*I;for(let w=0;w<te;w++){let U=j[w];ge(U[2]+O,U[1]+O,U[0]+O)}I=h+2*m,O=ee*I;for(let w=0;w<te;w++){let U=j[w];ge(U[0]+O,U[1]+O,U[2]+O)}}else{for(let I=0;I<te;I++){let O=j[I];ge(O[2],O[1],O[0])}for(let I=0;I<te;I++){let O=j[I];ge(O[0]+ee*h,O[1]+ee*h,O[2]+ee*h)}}n.addGroup(R,r.length/3-R,0)})(),(function(){let R=r.length/3,I=0;be(K,I),I+=K.length;for(let O=0,w=q.length;O<w;O++){let U=q[O];be(U,I),I+=U.length}n.addGroup(R,r.length/3-R,1)})()}this.setAttribute("position",new Fe(r,3)),this.setAttribute("uv",new Fe(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let a=0,s=t.length;a<s;a++){let o=t[a];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ho[r.type]().fromJSON(r)),new i(n,e.options)}},fv={generateTopUV:function(i,e,t,n,r){let a=e[3*t],s=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new le(a,s),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,r,a){let s=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],g=e[3*a],m=e[3*a+1],y=e[3*a+2];return Math.abs(o-h)<Math.abs(s-c)?[new le(s,1-l),new le(c,1-u),new le(d,1-f),new le(g,1-y)]:[new le(o,1-l),new le(h,1-u),new le(p,1-f),new le(m,1-y)]}},cs=class i extends gr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},da=class i extends gr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hs=class i extends Pt{constructor(e=.5,t=1,n=32,r=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new C,f=new le;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){let y=a+m/n*s;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<r;g++){let m=g*(n+1);for(let y=0;y<n;y++){let v=y+m,x=v,b=v+n+1,P=v+n+2,T=v+1;o.push(x,b,T),o.push(b,P,T)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xr=class i extends Pt{constructor(e=new gi([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],a=[],s=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Ii.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let v=f[m];Ii.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=Ii.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let v=f[m];p=p.concat(v)}for(let m=0,y=p.length;m<y;m++){let v=p[m];r.push(v.x,v.y,0),a.push(0,0,1),s.push(v.x,v.y)}for(let m=0,y=g.length;m<y;m++){let v=g[m],x=v[0]+u,b=v[1]+u,P=v[2]+u;n.push(x,b,P),l+=3}}this.setIndex(n),this.setAttribute("position",new Fe(r,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let s=t[r];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let s=t[e.shapes[r]];n.push(s)}return new i(n,e.curveSegments)}},Mt=class i extends Pt{constructor(e=1,t=32,n=16,r=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],g=[],m=[];for(let y=0;y<=n;y++){let v=[],x=y/n,b=0;y===0&&s===0?b=.5/t:y===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){let T=P/t;u.x=-e*Math.cos(r+T*a)*Math.sin(s+x*o),u.y=e*Math.cos(s+x*o),u.z=e*Math.sin(r+T*a)*Math.sin(s+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+b,1-x),v.push(c++)}h.push(v)}for(let y=0;y<n;y++)for(let v=0;v<t;v++){let x=h[y][v+1],b=h[y][v],P=h[y+1][v],T=h[y+1][v+1];(y!==0||s>0)&&p.push(x,b,T),(y!==n-1||l<Math.PI)&&p.push(b,P,T)}this.setIndex(p),this.setAttribute("position",new Fe(f,3)),this.setAttribute("normal",new Fe(g,3)),this.setAttribute("uv",new Fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Wh=class i extends gr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Tn=class i extends Pt{constructor(e=1,t=.4,n=12,r=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);let s=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let g=f/r*a,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let g=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,y=(r+1)*(p-1)+f,v=(r+1)*p+f;s.push(g,m,v),s.push(m,y,v)}this.setIndex(s),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},jh=class i extends Pt{constructor(e=1,t=.4,n=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:a,q:s},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,f=new C,g=new C,m=new C,y=new C;for(let x=0;x<=n;++x){let b=x/n*a*Math.PI*2;v(b,a,s,e,p),v(b+.01,a,s,e,f),m.subVectors(f,p),y.addVectors(f,p),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let P=0;P<=r;++P){let T=P/r*Math.PI*2,L=-t*Math.cos(T),z=t*Math.sin(T);u.x=p.x+(L*y.x+z*g.x),u.y=p.y+(L*y.y+z*g.y),u.z=p.z+(L*y.z+z*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(P/r)}}for(let x=1;x<=n;x++)for(let b=1;b<=r;b++){let P=(r+1)*(x-1)+(b-1),T=(r+1)*x+(b-1),L=(r+1)*x+b,z=(r+1)*(x-1)+b;o.push(P,T,z),o.push(T,L,z)}function v(x,b,P,T,L){let z=Math.cos(x),F=Math.sin(x),G=P/b*x,q=Math.cos(G);L.x=T*(2+q)*.5*z,L.y=T*(2+q)*F*.5,L.z=T*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},us=class i extends Pt{constructor(e=new Bo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new C,l=new C,c=new le,h=new C,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=s.normals[m],v=s.binormals[m];for(let x=0;x<=r;x++){let b=x/r*Math.PI*2,P=Math.sin(b),T=-Math.cos(b);l.x=T*y.x+P*v.x,l.y=T*y.y+P*v.y,l.z=T*y.z+P*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(a===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=r;y++)c.x=m/t,c.y=y/r,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=r;y++){let v=(r+1)*(m-1)+(y-1),x=(r+1)*m+(y-1),b=(r+1)*m+y,P=(r+1)*(m-1)+y;f.push(v,x,P),f.push(x,b,P)}})()})(),this.setIndex(f),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ho[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Xh=class extends Pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new C,a=new C;if(e.index!==null){let s=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);r.fromBufferAttribute(s,m),a.fromBufferAttribute(s,y),em(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,u),em(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Fe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function em(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var V_=Object.freeze({__proto__:null,BoxGeometry:ye,CapsuleGeometry:mr,CircleGeometry:fr,ConeGeometry:en,CylinderGeometry:$e,DodecahedronGeometry:Fh,EdgesGeometry:Hh,ExtrudeGeometry:vr,IcosahedronGeometry:cs,LatheGeometry:$n,OctahedronGeometry:da,PlaneGeometry:fi,PolyhedronGeometry:gr,RingGeometry:hs,ShapeGeometry:xr,SphereGeometry:Mt,TetrahedronGeometry:Wh,TorusGeometry:Tn,TorusKnotGeometry:jh,TubeGeometry:us,WireframeGeometry:Xh});var wt=class extends Ni{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nt=class extends wt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function fo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var pa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];t:{e:{let s;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=r,r=t[++n],e<r)break e}s=t.length;break n}if(e>=a)break t;{let o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=a,a=t[--n-1],e>=a)break e}s=n,n=0}}for(;n<s;){let o=n+s>>>1;e<t[o]?s=o:n=o+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=n[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qh=class extends pa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kd,endingEnd:Kd}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Jd:a=e,o=2*t-n;break;case Qd:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jd:s=e,l=2*n-t;break;case Qd:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),g=f*f,m=g*f,y=-d*m+2*d*g-d*f,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*g+.5*f,b=p*m-p*g;for(let P=0;P!==o;++P)a[P]=y*s[h+P]+v*s[c+P]+x*s[l+P]+b*s[u+P];return a}},Yh=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[c+d]*u+s[l+d]*h;return a}},$h=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mo:t=this.InterpolantFactoryMethodDiscrete;break;case fh:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return fh;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,s=r-1;for(;a!==r&&n[a]<e;)++a;for(;s!==-1&&n[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=n.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&gv(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ic,a=e.length-1,s=1;for(let o=1;o<a;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let h=o*n,u=s*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Un.prototype.TimeBufferType=Float32Array,Un.prototype.ValueBufferType=Float32Array,Un.prototype.DefaultInterpolation=fh;var or=class extends Un{constructor(e,t,n){super(e,t,n)}};or.prototype.ValueTypeName="bool",or.prototype.ValueBufferType=Array,or.prototype.DefaultInterpolation=Mo,or.prototype.InterpolantFactoryMethodLinear=void 0,or.prototype.InterpolantFactoryMethodSmooth=void 0;var Zh=class extends Un{};Zh.prototype.ValueTypeName="color";var Kh=class extends Un{};Kh.prototype.ValueTypeName="number";var Jh=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)rn.slerpFlat(a,0,s,c-o,s,c,l);return a}},Go=class extends Un{InterpolantFactoryMethodLinear(e){return new Jh(this.times,this.values,this.getValueSize(),e)}};Go.prototype.ValueTypeName="quaternion",Go.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends Un{constructor(e,t,n){super(e,t,n)}};lr.prototype.ValueTypeName="string",lr.prototype.ValueBufferType=Array,lr.prototype.DefaultInterpolation=Mo,lr.prototype.InterpolantFactoryMethodLinear=void 0,lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qh=class extends Un{};Qh.prototype.ValueTypeName="vector";var eu=class{constructor(e,t,n){let r=this,a,s=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},yv=new eu,tu=class{constructor(e){this.manager=e!==void 0?e:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,a){n.load(e,r,t,a)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};tu.DEFAULT_MATERIAL_NAME="__DEFAULT";var nu=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Uc=new ze,tm=new C,nm=new C,iu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nm),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var W_=new ze,j_=new C,X_=new C;var ru=class extends iu{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new ru}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var q_=new ze,Y_=new ze,$_=new ze;var Wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=im();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function im(){return performance.now()}var Z_=new C,K_=new rn,J_=new C,Q_=new C;var e1=new C,t1=new rn,n1=new C,i1=new C;var mu="\\[\\]\\.:\\/",vv=new RegExp("["+mu+"]","g"),Oc="[^"+mu+"]",xv="[^"+mu.replace("\\.","")+"]",_v=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Oc)+/(WCOD+)?/.source.replace("WCOD",xv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc)+"$"),bv=["material","materials","bones","map"],At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vv,"")}static parseTrackName(e){let t=_v.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);bv.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=class{constructor(i,e,t){let n=t||At.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray],At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r1=new Float32Array(1);var rm=new ze,jo=class{constructor(e,t,n=0,r=1/0){this.ray=new cr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rm),this}intersectObject(e,t=!0,n=[]){return au(e,this,n,t),n.sort(am),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)au(e[r],this,n,t);return n.sort(am),n}};function am(i,e){return i.distance-e.distance}function au(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let a=i.children;for(let s=0,o=a.length;s<o;s++)au(a[s],e,t,!0)}}var a1=new le;var s1=new C,o1=new C;var l1=new C;var c1=new C,h1=new ze,u1=new ze;var d1=new C,p1=new Ie,m1=new Ie;var f1=new C,g1=new C,y1=new C;var v1=new C,x1=new ns;var _1=new zn;var b1=new C;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");bn();Pa();var Mv=[[4.34,1.44],[2.8,1.57],[1.15,1.68],[1.17,4.31],[.3,5.77],[1.92,6.11],[3.28,6.45],[4.65,7.24],[5.28,8.83],[3.68,9.26],[2.34,9.5],[.99,9.59],[-.58,9.6],[-2.15,9.57],[-3.5,9.46],[-4.98,9.19],[-6.07,8.17],[-7.14,7.08],[-7.22,5.55],[-7.18,4.13],[-6.7,2.63],[-5.46,1.76],[-4.34,1.06],[-3.19,.38],[-1.9,-.64],[-.77,-1.9],[-.12,-3.16],[.37,-4.4],[.85,-5.7],[1.35,-7.05],[1.87,-8.43],[2.41,-9.81],[3,-11.2],[7.9,-11],[8.12,-9.55],[8.26,-8.09],[8.3,-6.5],[8.27,-4.94],[8.23,-3.49],[8.24,-2.07],[8.34,-.69],[8.58,.67],[9.01,1.97],[9.48,3.26],[9.87,4.58],[10.32,5.88],[10.83,7.17],[11.3,8.5]],ya=[[32,33,"ferry"],[47,0,"train"]],Ui={minX:-9.5,maxX:12.8,minZ:-12.6,maxZ:11.2},Ko={w:1.2,d:1.5,special:1.7},gu=[8,11],wv=["start","jail","park","gotojail"];function Sv(i,e=Mv){let t=e.length,n=new Set(ya.map(a=>a[0])),r=new Set(ya.map(a=>a[1]));return e.map(([a,s],o)=>{let l=r.has(o)?[a,s]:e[(o+t-1)%t],c=n.has(o)?[a,s]:e[(o+1)%t],h=c[0]-l[0],u=c[1]-l[1],d=Math.hypot(h,u)||1;h/=d,u/=d;let p=[u,-h],f=wv.includes(i.tiles[o].kind);return{x:a,z:s,out:p,along:[h,u],corner:f,w:f?Ko.special:Ko.w,d:f?Ko.special:Ko.d,rot:Math.atan2(p[0],p[1])}})}function Pm(i){let e=Math.max(Ui.maxX-Ui.minX,Ui.maxZ-Ui.minZ);return{kind:"route",tiles:Sv(i),top:.3,scale:e/13.5,center:[(Ui.minX+Ui.maxX)/2,(Ui.minZ+Ui.maxZ)/2],diceSpot:gu}}var _r=13,En=1.9,Cm=(_r-2*En)/9,Oi=_r/2,km=.03;function yu(i){let e=i.tiles.length/4;return{kind:"square",tiles:i.tiles.map((n,r)=>{let a=Math.floor(r/e),s=r%e,o=[[0,1],[-1,0],[0,-1],[1,0]][a],l=[[-1,0],[0,-1],[1,0],[0,1]][a],[c,h]=[[Oi-En/2,Oi-En/2],[-Oi+En/2,Oi-En/2],[-Oi+En/2,-Oi+En/2],[Oi-En/2,-Oi+En/2]][a];if(s){let u=En/2+(s-.5)*Cm;c+=l[0]*u,h+=l[1]*u}return{x:c,z:h,out:o,along:l,corner:!s,w:(s?Cm:En)-km,d:En-km,rot:Math.atan2(o[0],o[1])}}),top:.04,scale:1,center:[0,.4],diceSpot:[.9,1.3]}}function Im(i,e,t){let n=Math.cos(i.rot),r=Math.sin(i.rot),a=e-i.x,s=t-i.z;return Math.hypot(Math.max(0,Math.abs(a*n-s*r)-i.w/2),Math.max(0,Math.abs(a*r+s*n)-i.d/2))}var Tv=[[-90,-21],[-40,-20.2],[-22,-18.6],[-12,-18.9],[-5,-17.6],[.5,-17.2],[3,-15.6],[4.2,-13.4],[4.5,-12],[4.2,-10],[4.5,-8],[4.8,-6],[5,-4],[5.2,-2],[5.5,0],[5.6,1.6],[5.3,2.45],[3.6,2.65],[1.6,2.7],[-1,2.75],[-3.5,2.85],[-5.2,3],[-6,3.25],[-6.2,3.55],[-5.8,3.8],[-4,3.7],[-1.5,3.55],[.6,3.45],[2.5,3.8],[4.2,4.3],[5.6,5],[6.5,5.9],[6.9,7],[6.7,8.4],[6.2,9.9],[5.4,10.9],[3,11.2],[0,11.3],[-3,11.3],[-6,11.1],[-8.6,10.9],[-13,11.4],[-20,12.6],[-32,13.4],[-50,16],[-90,19]],Ev=[[7.2,-14.4],[8.6,-16.4],[13,-17.8],[20,-18.6],[34,-19.4],[90,-21],[90,33],[50,25],[32,19.5],[24,16.4],[18,13.4],[14.6,11.5],[12.4,10.6],[10.6,9.9],[9.5,8.7],[8.8,7],[8.4,5.2],[7.7,3.4],[7.1,2],[6.9,.5],[6.8,-1],[6.9,-3],[7.1,-5],[7.2,-7],[7.1,-9],[6.8,-11],[6.6,-12.6]],Av=[[[14.4,15.6],[15.4,15],[16.4,15.5],[16.2,16.5],[15,16.7]],[[18.2,17.4],[19.6,16.9],[20.6,17.8],[19.8,18.8],[18.4,18.6]],[[22.4,20.2],[23.8,19.8],[24.4,21],[23,21.6]]],Rv=[Tv,Ev,...Av],Lm=Rv.map(i=>{let e=i.length,t=new Float64Array(e*5),n=1/0,r=-1/0,a=1/0,s=-1/0;for(let o=0,l=e-1;o<e;l=o++){let c=i[o][0],h=i[o][1],u=i[l][0]-c,d=i[l][1]-h;t[o*5]=c,t[o*5+1]=h,t[o*5+2]=u,t[o*5+3]=d,t[o*5+4]=1/(u*u+d*d),n=Math.min(n,c),r=Math.max(r,c),a=Math.min(a,h),s=Math.max(s,h)}return{e:t,x0:n,x1:r,z0:a,z1:s}});function ps(i,e){let t=-1/0;for(let n=0;n<Lm.length;n++){let r=Lm[n],a=r.e,s=i<r.x0?r.x0-i:i>r.x1?i-r.x1:0,o=e<r.z0?r.z0-e:e>r.z1?e-r.z1:0;if(t>-1/0&&(t>0||s*s+o*o>t*t)&&(s>0||o>0))continue;let l=1/0,c=!1;for(let u=0;u<a.length;u+=5){let d=a[u+2],p=a[u+3],f=i-a[u],g=e-a[u+1],m=(f*d+g*p)*a[u+4];m=m<0?0:m>1?1:m;let y=f-d*m,v=g-p*m,x=y*y+v*v;x<l&&(l=x);let b=g<0,P=g-p<0;b!==P&&f<d*g/p&&(c=!c)}let h=c?Math.sqrt(l):-Math.sqrt(l);h>t&&(t=h)}return t}var xu=new C(-.55,.62,.56).normalize();function el(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ms(i,e,t,n){let r=new Float32Array(i*i),a=.5,s=0;for(let o=0;o<t;o++){let l=e<<o,c=el(n+o*101),h=Float32Array.from({length:l*l},c);for(let u=0;u<i;u++)for(let d=0;d<i;d++){let p=d/i*l,f=u/i*l,g=Math.floor(p),m=Math.floor(f),y=p-g,v=f-m;y=y*y*(3-2*y),v=v*v*(3-2*v);let x=(b,P)=>h[P%l*l+b%l];r[u*i+d]+=a*((x(g,m)*(1-y)+x(g+1,m)*y)*(1-v)+(x(g,m+1)*(1-y)+x(g+1,m+1)*y)*v)}s+=a,a*=.5}for(let o=0;o<r.length;o++)r[o]/=s;return r}var Fn=null;function tl(){if(Fn)return Fn;let i=256,e=[ms(i,4,5,1),ms(i,8,5,2),ms(i,32,3,3),ms(i,4,5,4)],t=new Uint8Array(i*i*4);for(let n=0;n<i*i;n++)for(let r=0;r<4;r++)t[n*4+r]=(.5+.5*Math.tanh((e[r][n]-.5)*3.4))*255;return Fn=new pr(t,i,i),Fn.wrapS=Fn.wrapT=ra,Fn.magFilter=gn,Fn.minFilter=Pi,Fn.generateMipmaps=!0,Fn.anisotropy=4,Fn.needsUpdate=!0,Fn}var Cv=ms(256,8,5,9);function zi(i,e){let t=h=>(h%256+256)%256,n=t(i*8),r=t(e*8),a=Math.floor(n),s=Math.floor(r),o=n-a,l=r-s,c=(h,u)=>Cv[u%256*256+h%256];return(c(a,s)*(1-o)+c(a+1,s)*o)*(1-l)+(c(a,s+1)*(1-o)+c(a+1,s+1)*o)*l}var vu=new Map;function va(i,e,t,n,{srgb:r=!0,repeat:a=null}={}){if(vu.has(i))return vu.get(i);let s=document.createElement("canvas");s.width=e,s.height=t,n(s.getContext("2d"),e,t,el(i.length*77+5));let o=new xn(s);return r&&(o.colorSpace=Rt),o.wrapS=o.wrapT=ra,a&&o.repeat.set(...a),o.anisotropy=8,vu.set(i,o),o}function Nm(i){return(e,t,n,r)=>{e.fillStyle=i?"#444":"#8d8371",e.fillRect(0,0,t,n);let a=12,s=n/a;for(let o=0;o<a;o++){let l=-r()*40;for(;l<t;){let c=26+r()*34,h=r();i?e.fillStyle=`rgb(${150+h*90},${150+h*90},${150+h*90})`:e.fillStyle=`hsl(${36+h*8},${14+h*12}%,${60+h*16}%)`,e.fillRect(l+1,o*s+1,c-2,s-2),l+=c}}if(!i)for(let o=0;o<2600;o++)e.fillStyle=`rgba(${r()<.5?"40,32,22":"255,248,230"},${r()*.09})`,e.fillRect(r()*t,r()*n,1+r()*3,1+r()*3)}}var xa=(i="#ffffff",e=[2,2])=>{let t=e.join("x");return new wt({color:i,map:va(`stone${t}`,256,256,Nm(!1),{repeat:e}),bumpMap:va(`stoneb${t}`,256,256,Nm(!0),{srgb:!1,repeat:e}),bumpScale:1.2,roughness:.92})},nl=(i="#7a5232",e=[1,1])=>new Nt({color:i,roughness:.5,clearcoat:.35,clearcoatRoughness:.3,map:va(`wood${e}`,512,512,(t,n,r,a)=>{t.fillStyle="#d9c3a6",t.fillRect(0,0,n,r);for(let s=0;s<420;s++){let o=a()*r,l=3+a()*10,c=.004+a()*.012,h=a()*7;t.strokeStyle=`rgba(${70+a()*40},${40+a()*25},${18+a()*14},${.05+a()*.17})`,t.lineWidth=.6+a()*2.4,t.beginPath();for(let u=0;u<=n;u+=8)t.lineTo(u,o+Math.sin(u*c*Math.PI+h)*l*.5);t.stroke()}},{repeat:e})}),Um=()=>va("facade",128,128,(i,e,t,n)=>{i.fillStyle="#f3efe8",i.fillRect(0,0,e,t);for(let r=0;r<700;r++)i.fillStyle=`rgba(60,45,30,${n()*.06})`,i.fillRect(n()*e,n()*t,2+n()*5,2+n()*10);for(let r=0;r<3;r++)for(let a=0;a<3;a++){let s=12+a*40,o=10+r*41;i.fillStyle="#d9d2c6",i.fillRect(s-3,o-3,26,30);let l=n()<.12;i.fillStyle=l?"#e8c98a":["#2d3a45","#3b4a55","#25303a"][Math.floor(n()*3)],i.fillRect(s,o,20,24),i.fillStyle="rgba(190,215,235,.35)",i.fillRect(s+1,o+1,8,11),i.fillStyle="#efe9de",i.fillRect(s+9,o,2,24),i.fillStyle="rgba(0,0,0,.18)",i.fillRect(s-3,o+27,26,3)}}),Om=()=>va("tower",128,256,(i,e,t,n)=>{i.fillStyle="#c3ccd1",i.fillRect(0,0,e,t);for(let r=0;r<32;r++)for(let a=0;a<12;a++){let s=n();i.fillStyle=s<.06?"#f1dca6":`hsl(${203+s*12},${14+s*12}%,${58+s*26}%)`,i.fillRect(a*(e/12)+1,r*8+1,e/12-2,6)}}),_u=()=>va("paper",256,256,(i,e,t,n)=>{i.fillStyle="#808080",i.fillRect(0,0,e,t);for(let r=0;r<5200;r++){let a=100+n()*60;i.strokeStyle=`rgba(${a},${a},${a},.5)`,i.lineWidth=.7;let s=n()*e,o=n()*t,l=n()*7;i.beginPath(),i.moveTo(s,o),i.lineTo(s+Math.cos(l)*7,o+Math.sin(l)*7),i.stroke()}},{srgb:!1}),kv=`
  uniform vec3 uSun; uniform sampler2D uNoise; uniform float uDisc, uTime; uniform vec3 uGround;
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float up = max(d.y, 0.0), s = max(dot(d, uSun), 0.0);
    vec3 zen = vec3(0.075, 0.21, 0.47), hor = vec3(0.60, 0.72, 0.80);
    vec3 c = mix(hor, zen, pow(up, 0.46));
    c = mix(c, vec3(1.0, 0.80, 0.56), pow(s, 6.0) * 0.32 * (1.0 - up * 0.6));
    if (d.y > 0.02) {
      vec2 p = d.xz / (d.y + 0.14);
      float n = texture2D(uNoise, p * 0.06 + uTime * 0.0006).r * 0.62 + texture2D(uNoise, p * 0.19 + uTime * 0.001).g * 0.38;
      float cl = smoothstep(0.52, 0.80, n) * smoothstep(0.02, 0.22, d.y);
      vec3 cc = mix(vec3(0.66, 0.70, 0.76), vec3(1.25, 1.18, 1.08), smoothstep(0.5, 0.9, n) * 0.7 + s * 0.4);
      c = mix(c, cc, cl * 0.85);
    }
    c += vec3(1.0, 0.86, 0.66) * (pow(s, 900.0) * 22.0 + pow(s, 60.0) * 0.5) * uDisc;
    c = mix(c, uGround, smoothstep(0.015, -0.06, d.y));
    gl_FragColor = vec4(c, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,bu=new Ie().setRGB(.6,.72,.8);function Mu(i=bu,e=1){let t=new Ye(new Mt(1,48,32),new vn({side:Xo,depthWrite:!1,fog:!1,uniforms:{uSun:{value:xu},uNoise:{value:tl()},uDisc:{value:e},uTime:{value:0},uGround:{value:new Ie(i)}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:kv}));return t.scale.setScalar(170),t.renderOrder=-10,t.frustumCulled=!1,t}function zm(i,e){let t=new hr(i),n=new ur;n.add(Mu(e,0));let r=t.fromScene(n,.015,.1,400);return t.dispose(),r.texture}function Bm(i){let e=new hr(i),t=new ur;t.add(new Ye(new ye(24,12,24),new yn({color:"#4b4038",side:Xo})));let n=(a,s,o,l,c,h,u,d)=>{let p=new Ye(new ye(l,c,h),new yn({color:new Ie(d).multiplyScalar(u)}));p.position.set(a,s,o),t.add(p)};n(-11.5,2,-2,.3,6,9,9,"#cfe3f5"),n(0,5.8,0,7,.2,7,7,"#ffe6c2"),n(9,4,-9,2,2,.2,14,"#ffd9a0");let r=e.fromScene(t,.03);return e.dispose(),r.texture}var Pv="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Iv=`
  #include <common>
  uniform sampler2D tDepth; uniform mat4 uInvProj, uProj; uniform vec2 uRes, uFull; uniform float uRadius, uOrtho; varying vec2 vUv;
  // (always a depth pixel's own centre: between two, rows would pick the wrong one)
  vec3 at(vec2 uv) { uv = (floor(uv * uFull) + 0.5) / uFull; vec4 p = uInvProj * vec4(vec3(uv, texture2D(tDepth, uv).x) * 2.0 - 1.0, 1.0); return p.xyz / p.w; }
  void main() {
    float z0 = texture2D(tDepth, vUv).x;
    if (z0 > 0.99999) { gl_FragColor = vec4(1.0); return; }
    vec3 p = at(vUv);
    vec2 e = 1.0 / uRes;
    vec3 r = at(vUv + vec2(e.x, 0.0)) - p, l = p - at(vUv - vec2(e.x, 0.0)), u = at(vUv + vec2(0.0, e.y)) - p, b = p - at(vUv - vec2(0.0, e.y));
    vec3 dx = abs(r.z) < abs(l.z) ? r : l, dy = abs(u.z) < abs(b.z) ? u : b;
    vec3 n = normalize(cross(dx, dy));
    float px = uRadius * uProj[1][1] * 0.5 * uRes.y / mix(-p.z, 1.0, uOrtho);
    px = clamp(px, 3.0, uRes.y * 0.12);
    float rot = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) * 6.2831853;
    float occ = 0.0;
    const int N = 14;
    for (int i = 0; i < N; i++) {
      float a = float(i) * 2.399963 + rot, k = (float(i) + 0.5) / float(N);
      vec3 v = at(vUv + vec2(cos(a), sin(a)) * k * px * e) - p;
      float d2 = dot(v, v);
      occ += max(0.0, dot(v, n) - 0.004 - 0.0008 * abs(p.z)) / (d2 + 0.006) * smoothstep(uRadius * uRadius * 1.6, 0.0, d2);
    }
    gl_FragColor = vec4(vec3(clamp(1.0 - occ * 0.16 * uRadius, 0.0, 1.0)), 1.0);
  }`,Lv=`
  uniform sampler2D tMap, tDepth; uniform vec2 uStep; uniform float uDepthAware, uNear, uFar, uOrtho; varying vec2 vUv;
  float dist(vec2 uv) { float z = texture2D(tDepth, uv).x; return mix(uNear * uFar / (uFar - z * (uFar - uNear)), uNear + z * (uFar - uNear), uOrtho); }
  void main() {
    float d0 = uDepthAware > 0.5 ? dist(vUv) : 0.0; vec4 sum = vec4(0.0); float w = 0.0;
    for (int i = -4; i <= 4; i++) {
      vec2 uv = vUv + uStep * float(i);
      float k = exp(-float(i * i) / 9.0);
      if (uDepthAware > 0.5) k *= exp(-abs(dist(uv) - d0) / (0.0028 * d0));
      sum += texture2D(tMap, uv) * k; w += k;
    }
    gl_FragColor = sum / w;
  }`,Nv="uniform sampler2D tMap; varying vec2 vUv; void main() { vec3 c = min(texture2D(tMap, vUv).rgb, vec3(12.0)); float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(1.0, 2.2, l), 1.0); }",Dv=`
  uniform sampler2D tMap, tAo, tBloom, tDepth; uniform float uAo, uExposure, uTime, uNear, uFar, uOrtho; uniform vec2 uAoRes; varying vec2 vUv;
  float dist(vec2 uv) { float z = texture2D(tDepth, uv).x; return mix(uNear * uFar / (uFar - z * (uFar - uNear)), uNear + z * (uFar - uNear), uOrtho); }
  // half-size occlusion, taken only from neighbours on the same surface
  float occlusion() {
    vec2 p = vUv * uAoRes - 0.5, b = floor(p), f = p - b;
    float d0 = dist(vUv), sum = 0.0, w = 0.0;
    for (int i = 0; i < 4; i++) {
      vec2 o = vec2(float(i - (i / 2) * 2), float(i / 2)), uv = (b + o + 0.5) / uAoRes, k2 = mix(1.0 - f, f, o);
      float k = (k2.x * k2.y + 0.02) / (0.0015 * d0 + abs(dist(uv) - d0));
      sum += texture2D(tAo, uv).r * k; w += k;
    }
    return sum / w;
  }
  vec3 aces(vec3 v) {
    v = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777) * v;
    v = (v * (v + 0.0245786) - 0.000090537) / (v * (0.983729 * v + 0.4329510) + 0.238081);
    return clamp(mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602) * v, 0.0, 1.0);
  }
  void main() {
    vec3 c = texture2D(tMap, vUv).rgb;
    float ao = mix(1.0, occlusion(), uAo);
    c *= mix(vec3(ao), vec3(1.0), vec3(0.06, 0.03, 0.0) * (1.0 - ao));
    c += texture2D(tBloom, vUv).rgb * 0.22;
    c = aces(c * uExposure);
    vec2 q = vUv - 0.5;
    c *= 1.0 - dot(q, q) * 0.24;
    c = mix(c * 12.92, 1.055 * pow(max(c, 1e-4), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
    c += (fract(sin(dot(gl_FragCoord.xy + uTime, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.013;
    gl_FragColor = vec4(c, 1.0);
  }`,Jo=class{constructor(e){this.r=e,this.exposure=1,this.cam=new Di(-1,1,1,-1,0,1),this.quad=new Ye(new fi(2,2)),this.quad.frustumCulled=!1;let t=(r,a)=>new vn({vertexShader:Pv,fragmentShader:r,uniforms:a,depthTest:!1,depthWrite:!1,toneMapped:!1}),n=r=>({value:r});this.ao=t(Iv,{tDepth:n(null),uInvProj:n(new ze),uProj:n(new ze),uRes:n(new le),uFull:n(new le),uRadius:n(.55),uOrtho:n(0)}),this.blur=t(Lv,{tMap:n(null),tDepth:n(null),uStep:n(new le),uDepthAware:n(1),uNear:n(1),uFar:n(100),uOrtho:n(0)}),this.bright=t(Nv,{tMap:n(null)}),this.final=t(Dv,{tMap:n(null),tAo:n(null),tBloom:n(null),tDepth:n(null),uNear:n(1),uFar:n(100),uOrtho:n(0),uAoRes:n(new le),uAo:n(1),uExposure:n(1),uTime:n(0)})}setSize(e,t,n=4){if(this.main&&this.w===e&&this.h===t&&this.main.samples===n)return;this.dispose(),this.w=e,this.h=t;let r=new ha(e,t,mi);this.main=new wn(e,t,{type:yi,samples:n,depthTexture:r});let a=(s,o)=>new wn(Math.max(2,e>>s),Math.max(2,t>>s),{type:o,depthBuffer:!1});this.ao1=a(1,On),this.ao2=a(1,On),this.b1=a(2,yi),this.b2=a(2,yi)}pass(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.quad,this.cam)}render(e,t){let n=this.r;n.setRenderTarget(this.main),n.clear(),n.render(e,t);let r=this.main.depthTexture,a=this.ao.uniforms,s=this.blur.uniforms;a.tDepth.value=r,a.uProj.value.copy(t.projectionMatrix),a.uInvProj.value.copy(t.projectionMatrixInverse),a.uRes.value.set(this.ao1.width,this.ao1.height),a.uFull.value.set(this.w,this.h),a.uOrtho.value=t.isOrthographicCamera?1:0,this.pass(this.ao,this.ao1),s.tDepth.value=r,s.uDepthAware.value=1,s.uNear.value=t.near,s.uFar.value=t.far,s.uOrtho.value=a.uOrtho.value,s.tMap.value=this.ao1.texture,s.uStep.value.set(1/this.ao1.width,0),this.pass(this.blur,this.ao2),s.tMap.value=this.ao2.texture,s.uStep.value.set(0,1/this.ao1.height),this.pass(this.blur,this.ao1),this.bright.uniforms.tMap.value=this.main.texture,this.pass(this.bright,this.b1),s.uDepthAware.value=0;for(let l of[1,2.5])s.tMap.value=this.b1.texture,s.uStep.value.set(l/this.b1.width,0),this.pass(this.blur,this.b2),s.tMap.value=this.b2.texture,s.uStep.value.set(0,l/this.b1.height),this.pass(this.blur,this.b1);let o=this.final.uniforms;o.tMap.value=this.main.texture,o.tAo.value=this.ao1.texture,o.tBloom.value=this.b1.texture,o.tDepth.value=r,o.uNear.value=t.near,o.uFar.value=t.far,o.uOrtho.value=a.uOrtho.value,o.uAoRes.value.copy(a.uRes.value),o.uExposure.value=this.exposure,o.uTime.value=performance.now()/50%97,this.pass(this.final,null)}dispose(){for(let e of[this.main,this.ao1,this.ao2,this.b1,this.b2])e&&(e.depthTexture&&e.depthTexture.dispose(),e.dispose());this.main=null}},fs={high:{post:!0,samples:4,pixels:34e5,dpr:2,shadow:4096},medium:{post:!0,samples:2,pixels:15e5,dpr:1.5,shadow:2048},low:{post:!1,samples:0,pixels:9e5,dpr:1,shadow:1024}},Dm=["high","medium","low"];function Fm(){let i=new URLSearchParams(location.search).get("gfx");if(fs[i])return{level:i,fixed:!0};let e="";try{e=sessionStorage.getItem("parcel.gfx")||""}catch{}return{level:fs[e]?e:matchMedia("(pointer: coarse)").matches?"medium":"high",fixed:!1}}var Qo=class{constructor(e,t){this.level=e,this.onStep=t,this.reset()}reset(){this.n=0,this.t0=0,this.slow=0,this.warm=performance.now()+5e3}frame(e){if(document.hidden||e<this.warm){this.n=0,this.t0=e;return}if(this.n||(this.t0=e),this.n++,e-this.t0<2500)return;let t=this.n*1e3/(e-this.t0);this.n=0,this.slow=t<33?this.slow+1:0;let n=Dm[Dm.indexOf(this.level)+1];if(!(this.slow<2||!n)){this.level=n;try{sessionStorage.setItem("parcel.gfx",n)}catch{}this.reset(),this.onStep(n)}}};var br=.25,wu=[2.75,-.35],Su=[4.1,-2.6],Tu=[.9,7.9],Hm=[6.35,3.1],Uv=[[5.15,-3.2],[6.95,-3.2]],Ov=[[1.16,2.45],[1.17,3.55]],zv=[[...wu,.7],[...Su,.55],[...Tu,1.25]],Zn=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Gm(i,e){let t=(B,W=i)=>(W.add(B),B),n=el(11),r=(B,W)=>{let $=99;for(let re of e.tiles)Math.abs(re.x-B)<7&&Math.abs(re.z-W)<7&&($=Math.min($,Im(re,B,W)));for(let[re,pe,E]of zv)$=Math.min($,Math.max(0,Math.hypot(B-re,W-pe)-E));return $},a=(B,W,$,re)=>{let pe=$+(zi(B*.9,W*.9)-.5)*.1,E=pe<0?Math.max(-.9,pe*.55-.03):br*Zn(0,.26,pe);if(pe>.3){let me=Math.max(0,Math.hypot(B-1.6,W+.7)-15),Oe=Math.max(0,zi(B*.16+5,W*.16)*2.6-.75)*Zn(.5,4.5,pe)+Math.max(0,zi(B*.045,W*.045+3)-.25)*Zn(0,26,me)*9*Zn(.5,6,pe);E+=Oe*Zn(.7,3.4,re)}return $>-.3&&re<.5?br+(Math.max(E,0)-br)*Zn(.12,.5,re):E},s=340,o=1.7,l=-.8,c=B=>15*B+75*B**7,h=new Float32Array((s+1)**2*3),u=new Float32Array((s+1)**2*3),d=[];for(let B=0,W=0;B<=s;B++)for(let $=0;$<=s;$++,W++){let re=o+c($/s*2-1),pe=l+c(B/s*2-1),E=ps(re,pe),me=r(re,pe);h.set([re,a(re,pe,E,me),pe],W*3),u.set([E,me,Zn(.36,.6,zi(re*.11+9,pe*.11))*Zn(26,14,Math.hypot(re-o,pe-l))],W*3),$<s&&B<s&&d.push(W,W+s+1,W+1,W+1,W+s+1,W+s+2)}let p=new Pt;p.setAttribute("position",new Jt(h,3)),p.setAttribute("aInfo",new Jt(u,3)),p.setIndex(d),p.computeVertexNormals();let f=new wt({roughness:.96});f.onBeforeCompile=B=>{B.uniforms.uNoise={value:tl()},B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aInfo; varying vec3 vInfo; varying vec3 vW; varying float vUpN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vInfo = aInfo; vW = position; vUpN = normal.y;`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uNoise; varying vec3 vInfo; varying vec3 vW; varying float vUpN; float gBump;`).replace("#include <map_fragment>",`
        vec2 tp = vW.xz + vW.y * vec2(1.3, 0.8);
        vec4 n1 = texture2D(uNoise, tp * 0.035), n2 = texture2D(uNoise, tp * 0.17), n3 = texture2D(uNoise, tp * 0.9);
        vec3 grass = mix(vec3(0.062, 0.112, 0.030), vec3(0.185, 0.185, 0.068), smoothstep(0.3, 0.85, n1.r * 0.55 + n2.g * 0.45));
        grass *= 0.72 + n3.b * 0.56;
        vec3 soil = vec3(0.235, 0.185, 0.125) * (0.75 + n3.g * 0.5);
        vec3 c = mix(grass, soil, smoothstep(0.55, 0.8, n2.r) * 0.55);
        vec3 urban = vec3(0.27, 0.25, 0.222) * (0.72 + n3.g * 0.55);
        c = mix(c, urban, vInfo.z * 0.75);
        c = mix(c, vec3(0.25, 0.225, 0.19) * (0.6 + n3.r * 0.8), smoothstep(0.86, 0.62, vUpN) * 0.9);
        // the paved way the cards lie on
        vec2 st = vW.xz * 9.0; st.x += floor(st.y) * 0.5; vec2 cell = abs(fract(st) - 0.5);
        float joint = mix(smoothstep(0.5, 0.42, max(cell.x, cell.y)), 0.85, smoothstep(0.1, 0.35, fwidth(st.x)));
        vec3 pave = vec3(0.40, 0.37, 0.322) * (0.82 + 0.18 * joint) * (0.84 + n3.g * 0.3);
        float onPave = smoothstep(0.44, 0.26, vInfo.y + (n2.g - 0.5) * 0.12);
        c = mix(c, pave, onPave);
        // sand and wet stones at the sea's edge, the sea bed below
        float shore = vInfo.x + (n2.g - 0.5) * 0.14;
        c = mix(c, vec3(0.46, 0.385, 0.27) * (0.8 + n3.b * 0.4), smoothstep(0.26, 0.1, shore) * (1.0 - onPave));
        c *= mix(0.5, 1.0, smoothstep(-0.02, 0.09, vW.y));
        diffuseColor.rgb = c;
        gBump = (n3.b * 0.018 + n3.g * 0.022) * (1.0 - onPave * 0.75) + joint * onPave * 0.006;`).replace("#include <normal_fragment_maps>",`
        { vec3 px = dFdx(-vViewPosition), py = dFdy(-vViewPosition); vec3 r1 = cross(py, normal), r2 = cross(normal, px);
          float det = dot(px, r1); vec3 g = sign(det) * (dFdx(gBump) * r1 + dFdy(gBump) * r2); normal = normalize(abs(det) * normal - g); }`)};let g=t(new Ye(p,f));g.receiveShadow=!0,g.castShadow=!0;let m=288,y=[-34,-36,74,74],v=new Uint8Array(m*m);for(let B=0;B<m;B++)for(let W=0;W<m;W++)v[B*m+W]=Math.max(0,Math.min(255,(ps(y[0]+(W+.5)/m*y[2],y[1]+(B+.5)/m*y[3])/4+.5)*255));let x=new pr(v,m,m,ds);x.magFilter=x.minFilter=gn,x.needsUpdate=!0;let b={value:0},P=new Nt({color:"#0d3f55",roughness:.09,metalness:0,ior:1.33,specularIntensity:1,envMapIntensity:1.15});P.onBeforeCompile=B=>{Object.assign(B.uniforms,{uNoise:{value:tl()},uShore:{value:x},uArea:{value:new _t(...y)},uTime:b}),B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vW = (modelMatrix * vec4(position, 1.0)).xyz;`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uNoise, uShore; uniform vec4 uArea; uniform float uTime; varying vec3 vW;
        float wave(vec2 p) {
          return texture2D(uNoise, p * 0.052 + vec2(uTime * 0.0060, uTime * 0.0042)).r * 1.0 + texture2D(uNoise, p * 0.13 - vec2(uTime * 0.011, -uTime * 0.007)).g * 0.42
            + texture2D(uNoise, p * 0.34 + vec2(-uTime * 0.013, uTime * 0.018)).g * 0.13;
        }`).replace("#include <map_fragment>",`
        float shore = (texture2D(uShore, (vW.xz - uArea.xy) / uArea.zw).r - 0.5) * 4.0;
        float deep = smoothstep(-0.05, -1.5, shore);
        vec3 wc = mix(vec3(0.060, 0.235, 0.245), vec3(0.012, 0.082, 0.135), deep);
        float big = texture2D(uNoise, vW.xz * 0.016 + uTime * 0.0008).r;
        wc *= 0.75 + big * 0.5;
        float ring = sin(shore * 26.0 + uTime * 0.9 + texture2D(uNoise, vW.xz * 0.2).r * 9.0);
        float foam = smoothstep(-0.30, -0.03, shore) * smoothstep(0.5, 0.95, texture2D(uNoise, vW.xz * 0.55 + uTime * 0.01).g * 0.75 + ring * 0.2 + smoothstep(-0.12, 0.0, shore) * 0.4);
        diffuseColor.rgb = mix(wc, vec3(0.80, 0.85, 0.86), foam * 0.72);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.65, foam);`).replace("#include <normal_fragment_maps>",`
        { float e = 0.05, dist = length(vViewPosition); float h0 = wave(vW.xz);
          vec2 g = vec2(wave(vW.xz + vec2(e, 0.0)) - h0, wave(vW.xz + vec2(0.0, e)) - h0) / e;
          g *= 0.34 * smoothstep(90.0, 14.0, dist) * mix(0.45, 1.0, deep);
          normal = normalize((viewMatrix * vec4(-g.x, 1.0, -g.y, 0.0)).xyz); }`)};let T=t(new Ye(new fr(165,64).rotateX(-Math.PI/2),P));T.position.y=-.02,T.receiveShadow=!0;let L=new ze,z=new rn,F=new C(0,1,0),G=(B,W,$)=>new C(B,W,$),q=[],j=[],K=[],Y=[],ee=[[4,5.75,.55],[-4.6,-3.4,1.9],[11.8,-6.6,2.4],[-6.6,-9,2.6],[13.6,2.2,1.5],[-10,.4,1.6],[2.9,8.3,.5]],te=(B,W)=>ee.some(([$,re,pe])=>Math.hypot($-B,re-W)<pe),he=.36;for(let B=-21;B<25;B+=he)for(let W=-18.5;W<19;W+=he){let $=B+(n()-.5)*.16,re=W+(n()-.5)*.16,pe=ps($,re);if(pe<.3)continue;let E=r($,re);if(E<.42)continue;let me=a($,re,pe,E),Oe=Zn(.33,.55,zi($*.11+9,re*.11))*Zn(26,13,Math.hypot($-o,re-l));if((Math.hypot($+2.8,re+6.6)<2.6||Math.hypot($-12.4,re+1)<1.5)&&E>1.1&&n()<.3){j.push([$,me,re,.2+n()*.16,.7+n()**2*1.5]);continue}if(!te($,re)&&n()<.14+Oe*.72){let rt=.15+n()*.12;q.push({x:$,y:me,z:re,w:rt,d:rt*(.75+n()*.5),h:(.1+n()*.13)*(E>1.6?1+Oe*.9:.85),rot:Math.round(zi($*.09,re*.09)*9)*.35+(n()-.5)*.12,flat:n()<.28})}else if(n()<(te($,re)?1:.5)){let rt=te($,re)?3:1;for(let it=0;it<rt;it++)(n()<.12?Y:K).push([$+(n()-.5)*.3,me,re+(n()-.5)*.3,.07+n()*.075])}}let ce=new Ie,_e=(B,W,$,re,pe=!0)=>{let E=t(new Do(B,W,$.length));return $.forEach((me,Oe)=>re(E,me,Oe)),E.castShadow=pe,E.receiveShadow=!0,E},Ae=new ye(1,1,1).translate(0,.5,0),oe=["#f0e4cf","#e9d3b0","#e6bfa0","#dcd8cf","#f3ead8","#d9b79b","#cfd3cf","#e8c9b6","#c9b8a0"];_e(Ae,new wt({map:Um(),roughness:.9}),q,(B,W,$)=>{L.compose(G(W.x,W.y-.08,W.z),z.setFromAxisAngle(F,W.rot),G(W.w,W.h+.08,W.d)),B.setMatrixAt($,L),B.setColorAt($,ce.set(oe[Math.floor(n()*oe.length)]))});let ue=["#9c5638","#a8644a","#8a4a32","#b07a58","#7f5140","#a06d50"];_e(new en(Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0),new wt({roughness:.88,flatShading:!0}),q.filter(B=>!B.flat),(B,W,$)=>{L.compose(G(W.x,W.y+W.h,W.z),z.setFromAxisAngle(F,W.rot),G(W.w*1.14,W.w*.4,W.d*1.14)),B.setMatrixAt($,L),B.setColorAt($,ce.set(ue[Math.floor(n()*ue.length)]))}),_e(Ae,new wt({color:"#b9b2a6",roughness:.95}),q.filter(B=>B.flat),(B,W,$)=>{L.compose(G(W.x,W.y+W.h,W.z),z.setFromAxisAngle(F,W.rot),G(W.w*1.04,.012,W.d*1.04)),B.setMatrixAt($,L)});let be=new Nt({map:Om(),roughness:.18,metalness:.12,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4});_e(Ae,be,j,(B,[W,$,re,pe,E],me)=>{L.compose(G(W,$-.05,re),z.setFromAxisAngle(F,.3),G(pe,E,pe)),B.setMatrixAt(me,L),B.setColorAt(me,ce.setHSL(.56,.18,.62+n()*.25))});let Se=new cs(1,2),ge=Se.attributes.position;for(let B=0;B<ge.count;B++){let W=G(ge.getX(B),ge.getY(B),ge.getZ(B)),$=.74+zi(W.x*1.1+W.y*.7+3,W.z*1.1+W.y*.5)*.52;ge.setXYZ(B,W.x*$,W.y*$*.9+.75,W.z*$)}Se.computeVertexNormals();let k=new wt({roughness:.95});_e(Se,k,K,(B,[W,$,re,pe],E)=>{L.compose(G(W,$,re),z.setFromAxisAngle(F,n()*6),G(pe,pe*(.85+n()*.4),pe)),B.setMatrixAt(E,L),B.setColorAt(E,ce.setHSL(.22+n()*.07,.3+n()*.22,.14+n()*.11))});let A=new Mt(1,8,10).scale(.42,2.1,.42).translate(0,1.9,0);_e(A,k,Y,(B,[W,$,re,pe],E)=>{L.compose(G(W,$,re),z.identity(),G(pe,pe,pe)),B.setMatrixAt(E,L),B.setColorAt(E,ce.setHSL(.3,.26,.1+n()*.05))});let D=(B,W={})=>new wt({color:B,roughness:.7,...W}),R=(B,W,$,re,pe,E=i)=>{let me=new Ye(B,W);return me.position.set($,re,pe),me.castShadow=me.receiveShadow=!0,E.add(me),me},I=(B,W,$)=>{let re=new $t;return re.position.set(B,W,$),t(re)},O=D("#2b2722"),w=D("#77838d",{metalness:.5,roughness:.45}),U=D("#d8a93a",{metalness:1,roughness:.25});{let B=I(wu[0],br,wu[1]),W=xa("#e2d2b4",[5,5]);R(new $e(.4,.47,1.55,40),W,0,.77,0,B),R(new $e(.46,.4,.1,40),W,0,1.6,0,B),R(new $e(.4,.4,.3,40),W,0,1.78,0,B),R(new $e(.48,.48,.035,40),D("#8d8676"),0,1.67,0,B),R(new $e(.35,.38,.2,40),W,0,2.02,0,B);for(let $=0;$<14;$++)for(let[re,pe,E]of[[1.8,.4,.17],[2.02,.365,.1]]){let me=$/14*Math.PI*2,Oe=R(new ye(.07,E,.03),O,Math.sin(me)*pe,re,Math.cos(me)*pe,B);Oe.rotation.y=me}for(let $=0;$<5;$++){let re=$*1.3,pe=R(new ye(.05,.13,.03),O,Math.sin(re)*.435,.4+$%3*.36,Math.cos(re)*.435,B);pe.rotation.y=re}R(new en(.44,.85,40),w,0,2.54,0,B),R(new Mt(.035,12,10),U,0,3,0,B)}{let B=I(Hm[0],-.05,Hm[1]),W=xa("#fff6e6",[2,2]),$=R(new $e(.58,.78,.26,22),xa("#a89a84",[6,1]),0,.1,0,B);$.scale.z=.86,R(new ye(.66,.3,.46),W,-.06,.38,.04,B),R(new ye(.7,.04,.5),D("#a4512f"),-.06,.55,.04,B),R(new $e(.14,.17,.95,24),W,.18,.7,-.04,B),R(new $e(.2,.2,.03,24),D("#8d8676"),.18,1.18,-.04,B),R(new $e(.12,.13,.17,16),D("#e9e2d2"),.18,1.28,-.04,B),R(new Mt(.14,20,12,0,Math.PI*2,0,Math.PI/2),w,.18,1.36,-.04,B),R(new $e(.008,.008,.35,6),U,.18,1.65,-.04,B);for(let re=0;re<4;re++)R(new ye(.07,.12,.02),O,-.3+re*.16,.38,.275,B)}{let[[B,W],[$]]=Uv,re=D("#aab2b8",{metalness:.55,roughness:.42}),pe=$-B+1,E=(B+$)/2,me=I(0,0,W);for(let Oe of[B,$]){for(let Pe of[-1,1]){let rt=R(new ye(.13,2.5,.1),re,Oe,1.2,Pe*.26,me);rt.rotation.x=Pe*.02}for(let Pe of[.75,1.6,2.4])R(new ye(.12,.1,.5),re,Oe,Pe,0,me);R(new ye(.5,.5,.9),D("#8c867b"),Oe,0,0,me)}R(new ye(pe,.06,.56),re,E,.88,0,me),R(new ye(pe,.012,.44),D("#3a3d40",{roughness:.9}),E,.918,0,me),R(new ye(pe,.014,.012),D("#e8e4d8"),E,.92,0,me);for(let Oe of[-.24,.24]){let Pe=it=>{let Tt=(it-E)/(($-B)/2);return Math.abs(Tt)<=1?1.06+1.36*Tt*Tt:2.42-(Math.abs(it-E)-($-B)/2)*2.95},rt=[];for(let it=0;it<=44;it++){let Tt=E-pe/2+it/44*pe;rt.push(G(Tt,Pe(Tt),Oe))}R(new us(new rs(rt),80,.022,8),re,0,0,0,me);for(let it=B+.12;it<$;it+=.12){let Tt=Pe(it)-.9;R(new $e(.005,.005,Tt,4),re,it,.9+Tt/2,Oe,me)}}for(let Oe=0;Oe<9;Oe++)R(new ye(.09,.035,.045),D(["#e8c21c","#c8372f","#f2f2f2","#2c4f7a","#1c1c1c"][Oe%5],{metalness:.3,roughness:.3}),B-.4+Oe*.31,.945,Oe%2?.12:-.12,me)}{let B=I(Su[0],br,Su[1]),W=xa("#f6ead2",[2,2]);for(let[$,re,pe]of[[.56,.1,.05],[.44,.42,.3],[.5,.05,.53],[.36,.4,.75],[.42,.05,.97],[.28,.36,1.17],[.34,.04,1.36],[.2,.2,1.48]])R(new ye($,re,$),W,0,pe,0,B);for(let $=0;$<4;$++){let re=$*Math.PI/2,pe=R(new $e(.1,.1,.015,28),D("#fdfaf0"),Math.sin(re)*.145,1.18,Math.cos(re)*.145,B);pe.rotation.set(Math.PI/2,0,-re,"YXZ"),pe.rotation.y=re,pe.rotation.z=0;let E=R(new ye(.012,.07,.01),O,Math.sin(re)*.158,1.21,Math.cos(re)*.158,B);E.rotation.y=re}R(new en(.15,.22,24),w,0,1.69,0,B),R(new Mt(.03,10,8),U,0,1.82,0,B)}{let B=I(Tu[0],br,Tu[1]),W=new Mt(.16,24,12,0,Math.PI*2,0,Math.PI/2);R(new ye(2,.26,1.2),xa("#d9c29c",[6,1]),0,.13,0,B),R(new ye(2.06,.03,1.26),D("#9a8c74"),0,.27,0,B);for(let $=0;$<6;$++)for(let re=0;re<4;re++)R(W,w,-.82+$*.33,.28,-.46+re*.31,B).scale.set(.9,.8,.9),R(new Mt(.018,8,6),U,-.82+$*.33,.415,-.46+re*.31,B);for(let $=0;$<8;$++)R(new ye(.12,.15,.02),O,-.85+$*.243,.1,.605,B)}{let[[B,W],[$,re]]=Ov,pe=re-W+.5,E=(B+$)/2,me=(W+re)/2,Oe=I(E,0,me);R(new ye(.95,.05,pe),D("#4a4c4e",{roughness:.9}),0,.235,0,Oe);for(let Pe of[-1,1]){R(new ye(.03,.06,pe),D("#b9b2a4"),Pe*.47,.28,0,Oe),R(new ye(.16,.09,pe*.8),D("#6d3a2c"),Pe*.36,.14,0,Oe);for(let rt=0;rt<6;rt++){let it=-pe/2+.2+rt/5*(pe-.4),Tt=R(new $e(.004,.006,.5,5),D("#3a2a1a"),Pe*.6,.45,it,Oe);Tt.rotation.z=-Pe*.95,R(new mr(.022,.06,4,8),D(["#32425a","#7a3b34","#4d5b3c"][rt%3]),Pe*.4,.32,it,Oe)}}for(let Pe of[-1,1])for(let rt of[-.3,.3])R(new $e(.07,.08,.5,12),D("#8b8577"),rt,0,Pe*pe*.22,Oe)}{let[B,W]=gu,$=new Nt({color:"#d9a748",metalness:.82,roughness:.44,clearcoat:.15,emissive:"#3a2608",emissiveIntensity:.35}),re=[[0,.02],[1.16,.02],[1.2,.03],[1.27,.11],[1.31,.12],[1.32,.1],[1.25,0],[1.1,-.05],[0,-.05]].reverse().map(([E,me])=>new le(E,me));R(new $n(re,96),$,B,0,W);for(let E of[.45,.85,1.08]){let me=R(new Tn(E,.012,6,90),$,B,.022,W);me.rotation.x=Math.PI/2}let pe=[[.001,0],[.085,0],[.09,.01],[.075,.05],[.062,.12],[.07,.18],[.09,.25],[.092,.27],[.084,.27]].map(([E,me])=>new le(E,me));for(let[E,me]of[[-.88,.35],[.9,-.3]])R(new $e(.16,.1,.025,32),new Nt({color:"#f7f3ea",roughness:.2,clearcoat:1}),B+E,.035,W+me),R(new $n(pe.map(Oe=>new le(Oe.x*.9,Oe.y*.86)),28),new Nt({color:"#8c1f08",roughness:.05,clearcoat:1,transparent:!0,opacity:.92}),B+E,.055,W+me),R(new $n(pe,28),new Nt({color:"#ffffff",roughness:.02,transparent:!0,opacity:.22,clearcoat:1,side:ma,depthWrite:!1}),B+E,.05,W+me),R(new ye(.05,.03,.05),D("#ffffff",{roughness:.6}),B+E+.11,.06,W+me+.05).rotation.y=.5}for(let[B,W,$]of ya){let re=e.tiles[B],pe=e.tiles[W],E=Math.floor(Math.hypot(re.x-pe.x,re.z-pe.z)/.5),me=new Mt(.035,10,8),Oe=D($==="ferry"?"#f4f1e8":"#e8752a",{roughness:.4});for(let Pe=1;Pe<E;Pe++){let rt=re.x+(pe.x-re.x)*(Pe/E),it=re.z+(pe.z-re.z)*(Pe/E);ps(rt,it)<-.15&&R(me,Oe,rt,0,it)}}let V=(B,W)=>{let $=new gi;return $.moveTo(-B/2,-W/2),$.lineTo(B*.22,-W/2),$.quadraticCurveTo(B*.45,-W*.4,B/2,0),$.quadraticCurveTo(B*.45,W*.4,B*.22,W/2),$.lineTo(-B/2,W/2),$.quadraticCurveTo(-B*.56,0,-B/2,-W/2),$},ie=(B,W,$)=>new vr(V(B,W),{depth:$,bevelEnabled:!1,curveSegments:10}).rotateX(-Math.PI/2),H=()=>{let B=new $t,W=D("#f5f2ea",{roughness:.45}),$=D("#26343f",{roughness:.15,metalness:.4});R(ie(1.25,.34,.1),D("#16181b",{roughness:.5}),0,-.04,0,B),R(ie(1.24,.335,.05),W,0,.06,0,B),R(ie(1.24,.337,.014),D("#e6b422"),0,.1,0,B);for(let[re,pe,E]of[[.92,.28,.115],[.76,.25,.215]])R(new ye(re,.09,pe),W,-.06,E+.045,0,B),R(new ye(re*.94,.04,pe+.004),$,-.06,E+.05,0,B),R(new ye(re+.06,.012,pe+.05),W,-.06,E+.095,0,B);return R(new ye(.13,.08,.16),W,.24,.36,0,B),R(new $e(.05,.06,.2,18),D("#e6b422",{roughness:.4}),-.1,.4,0,B),R(new $e(.052,.052,.05,18),D("#17181a"),-.1,.49,0,B),t(B)},ne=[{obj:H(),path:[[2.8,3.2],[4.7,3.6],[5.75,2.5],[6.15,1.2]],t:0,speed:.04},{obj:H(),path:[[5.7,-12.6],[5.7,-8.5],[5.95,-5.2],[6,-.6]],t:.4,speed:.026},{obj:H(),path:[[1,13.6],[9,13.7],[17,17.2]],t:1.2,speed:.02}],Q=D("#f7f5f0",{roughness:.75}),se=D("#9aa3ab",{roughness:.8,side:ma}),ve=new gi;ve.moveTo(-.05,0),ve.quadraticCurveTo(-.02,.18,-.1,.34),ve.quadraticCurveTo(.02,.2,.06,0);let xe=new xr(ve,8).rotateX(Math.PI/2),Re=()=>{let B=new $t;R(new mr(.05,.13,6,12).rotateZ(Math.PI/2),Q,0,0,0,B),R(new Mt(.045,12,10),Q,.11,.03,0,B),R(new en(.014,.06,8).rotateZ(-Math.PI/2),D("#e8a62c"),.17,.025,0,B);let W=R(xe,se,0,.03,.02,B),$=R(xe,se,0,.03,-.02,B);return $.scale.z=-1,B.userData={l:W,r:$},t(B)},Le=Array.from({length:8},(B,W)=>({obj:Re(),cx:2+Math.cos(W*1.7)*6,cz:-1+Math.sin(W*2.3)*7,r:1.2+W%3*.7,h:2.6+W%4*.5,a:W*.9,speed:.4+W%3*.12,task:null})),Je=B=>{let W=new $t;R(new mr(.06,.07,6,14),B,0,.1,0,W).rotation.z=.35,R(new Mt(.055,16,12),B,.06,.2,0,W);for(let $ of[-1,1])R(new en(.02,.045,8),B,.06,.255,$*.03,W),R(new Mt(.008,8,6),D("#8fbf4a",{roughness:.1}),.105,.21,$*.02,W),R(new Mt(.02,10,8),B,.07,.02,$*.03,W);return R(new Tn(.07,.013,8,18,3.6).rotateX(Math.PI/2),B,-.05,.02,.02,W),t(W)},je=["#c77a38","#26242a","#d9d2c4"].map((B,W)=>({obj:Je(D(B,{roughness:.95})),at:[5,22,41][W],next:2e4+W*9e3})),Me=new $t,nt=new Nt({color:"#f4f6f8",roughness:.3,clearcoat:1}),ut=new Nt({color:"#12377f",roughness:.3,clearcoat:1});R(new ye(.44,.07,.2),nt,0,.085,0,Me),R(new ye(.441,.025,.202),ut,0,.085,0,Me),R(new ye(.22,.07,.18),D("#1b232b",{roughness:.1,metalness:.4}),-.02,.15,0,Me),R(new ye(.2,.012,.17),nt,-.02,.19,0,Me);let yt=[["#ff2a2a",-.04],["#2a6bff",.04]].map(([B,W])=>R(new ye(.04,.025,.07),D(B,{emissive:B,emissiveIntensity:.2}),-.02,.21,W,Me));for(let[B,W]of[[.14,.1],[-.14,.1],[.14,-.1],[-.14,-.1]])R(new $e(.045,.045,.035,18).rotateX(Math.PI/2),D("#141414"),B,.045,W,Me);let Te=e.tiles[12];Me.position.set(Te.x-Te.out[0]*1.15,br,Te.z-Te.out[1]*1.15),t(Me);let Xe=0,lt=(B,W)=>{let $=B.length-1,re=Math.min($-1e-6,W*$),pe=Math.floor(re),E=re-pe,[me,Oe]=B[pe],[Pe,rt]=B[pe+1];return[me+(Pe-me)*E,Oe+(rt-Oe)*E,Math.atan2(-(rt-Oe),Pe-me)]};return{gulls:Le,terrain:g,buildings:q.length,trees:K.length+Y.length,update(B,W,$){b.value=W/1e3;for(let E of ne){E.t+=B*E.speed;let me=E.t%2,Oe=me<1?me:2-me,[Pe,rt,it]=lt(E.path,Oe),Tt=it+(me<1?0:Math.PI);E.obj.position.set(Pe,.01+Math.sin(W/700+Pe)*.012,rt),E.yaw=E.yaw===void 0?Tt:E.yaw+Math.atan2(Math.sin(Tt-E.yaw),Math.cos(Tt-E.yaw))*Math.min(1,B*1.6),E.obj.rotation.set(Math.sin(W/900)*.015,E.yaw,0)}for(let E of Le){let me=E.obj,Oe=Math.sin(W/130+E.a)*(E.task?.7:.38);if(me.userData.l.rotation.x=-Oe,me.userData.r.rotation.x=Oe,E.task){let Pe=E.task,rt=Math.min(1,(W-Pe.t0)/Pe.ms),it=Pe.from,Tt=Pe.to();me.position.set(it.x+(Tt.x-it.x)*rt,it.y+(Tt.y-it.y)*rt+Math.sin(rt*Math.PI)*(Pe.arc||0),it.z+(Tt.z-it.z)*rt),me.rotation.y=Math.atan2(-(Tt.z-it.z),Tt.x-it.x),rt>=1&&(E.task=Pe.then&&Pe.then()||null);continue}E.a+=B*E.speed,me.position.set(E.cx+Math.cos(E.a)*E.r,E.h+Math.sin(E.a*2)*.15,E.cz+Math.sin(E.a)*E.r),me.rotation.set(.25,-E.a-Math.PI/2,0),E.shock&&W<E.shock&&(me.position.y+=Math.abs(Math.sin(W/60))*.3)}for(let E of je){W>E.next&&(E.at=(E.at+5+Math.floor(Math.random()*20))%e.tiles.length,E.next=W+25e3+Math.random()*2e4);let me=$.spot(E.at,5);E.obj.position.x+=(me.x+.25-E.obj.position.x)*Math.min(1,B*1.5),E.obj.position.z+=(me.z+.2-E.obj.position.z)*Math.min(1,B*1.5),E.obj.position.y=$.tileTop}let re=W<Xe,pe=Math.floor(W/160)%2;yt[0].material.emissiveIntensity=re&&pe?9:.15,yt[1].material.emissiveIntensity=re&&!pe?9:.15},siren(){Xe=performance.now()+3500},shock(){for(let B of Le)B.shock=performance.now()+1500},steal(B,W){let $=Le.find(me=>!me.task);if(!$||!B)return;let re=$.obj.position.clone(),pe=()=>G(B.position.x,B.position.y+.55,B.position.z),E=G(B.position.x+6,4.5,B.position.z-5);$.task={from:re,to:pe,t0:performance.now(),ms:900,arc:.5,then:()=>{let me=W();return $.obj.add(me),me.position.set(.1,-.12,0),{from:$.obj.position.clone(),to:()=>E,t0:performance.now(),ms:1600,arc:1,then:()=>(me.parent&&me.parent.remove(me),{from:E,to:()=>G($.cx+$.r,$.h,$.cz),t0:performance.now(),ms:1500})}}}}}}var al="\uE000",ku=i=>sn(i,xt);function il(i,e,t){let n=Math.cos(i.rot),r=Math.sin(i.rot);return[i.x+e*n+t*r,i.z-e*r+t*n]}var vi='"Avenir Next", "Segoe UI", system-ui, sans-serif',_a={transit:{ferry:"\u26F4\uFE0F",train:"\u{1F686}",metro:"\u{1F687}",cablecar:"\u{1F6A1}",tram:"\u{1F68A}",funicular:"\u{1F69E}",_:"\u{1F689}"},shop:["\u2615","\u{1F37D}\uFE0F","\u{1F9F6}","\u{1F6CD}\uFE0F","\u{1F697}"],card:{kismet:"\u{1F9FF}",mahalle:"\u{1F3D8}\uFE0F",fortune:"?",gazette:"\u2709"},tax:"\u2696",utility:"\u26A1",start:"\u279C",jail:"\u{1F693}",park:"\u{1FAD6}",gotojail:"\u{1F46E}"},Bv={Kafe:"\u2615",Restoran:"\u{1F37D}\uFE0F",Hal\u0131c\u0131:"\u{1F9F6}",AVM:"\u{1F6CD}\uFE0F","Oto galeri":"\u{1F697}"};function $m(i,e,t,n){i.save(),i.lineWidth=n*.55,i.strokeStyle="#b7772f",i.beginPath(),i.arc(e,t,n*.72,0,Math.PI*2),i.stroke(),i.fillStyle="#f7e3b4";for(let r=0;r<7;r++){let a=r/7*Math.PI*2;i.fillRect(e+Math.cos(a)*n*.72-n*.07,t+Math.sin(a)*n*.72-n*.04,n*.14,n*.08)}i.restore()}function Fv(i,e,t,n,r){let a=String(e).split(al);if(a.length===1){i.fillText(e,t,n);return}let s=i.measureText(a[0]).width,o=s+r*1.05,l=t-o/2;i.textAlign="left",i.fillText(a[0],l,n),$m(i,l+s+r*.55,n,r*.45),i.textAlign="center"}function Hv(i,e,t){let n=e.split(" "),r=[],a="";for(let s of n){let o=a?`${a} ${s}`:s;i.measureText(o).width>t&&a?(r.push(a),a=s):a=o}return a&&r.push(a),r}var Eu=230,Gv=(i,e,t)=>(typeof e.name=="string"?i.id==="istanbul":xt==="tr")?t.toLocaleUpperCase("tr"):t.toUpperCase();function Vm(i,e,t){let n=i.tiles[e],r=Math.round(t.w*Eu),a=Math.round(t.d*Eu),s=document.createElement("canvas");s.width=r,s.height=a;let o=s.getContext("2d"),l=Eu,c=i.currency==="simit";(y=>{o.fillStyle=y,o.fillRect(0,0,r,a)})({start:"#f3dc97",jail:"#cfdcf0",park:"#cfe5c4",gotojail:"#f2c9bf"}[t.corner?n.kind:""]||"#f4ecdb"),o.textAlign="center",o.textBaseline="middle";let u="#23211f",d="#6a6152",p=Gv(i,n,ku(n.name||(i.decks[n.deck]||{}).name)),f=(y,v)=>`${y} ${Math.round(v*l)}px ${vi}`;if(t.corner){let y=n.kind,v=y==="jail";if(v){let b=r*.1,P=a*.09,T=r*.8,L=a*.4;o.fillStyle="#5d7396",o.fillRect(b,P,T,L);for(let z=0;z<=7;z++){let F=b+z*T/7,G=o.createLinearGradient(F-l*.03,0,F+l*.03,0);G.addColorStop(0,"#1d2430"),G.addColorStop(.4,"#9aa7ba"),G.addColorStop(1,"#1d2430"),o.fillStyle=G,o.fillRect(F-l*.025,P,l*.05,L)}}o.fillStyle=u,o.font=f(400,.5),o.fillText(_a[y]||"\u2605",r/2,v?a*.63:a*.38),o.font=f(900,p.length>10?.17:.22),o.fillText(p,r/2,v?a*.8:a*.69);let x=ku(n.note);x&&(o.fillStyle=d,o.font=f(600,.12),o.fillText(x,r/2,v?a*.9:a*.84))}else{let y=n.group&&i.groups[n.group],v=l*.075,x=l*.06;if(n.kind==="lot"||n.kind==="transit"||n.kind==="shop"||n.kind==="utility"){let T=n.kind==="lot"?a*.18:a*.07,L=new Ie(y.color),z=o.createLinearGradient(0,v,0,v+T);z.addColorStop(0,`#${L.clone().offsetHSL(0,0,.03).getHexString()}`),z.addColorStop(1,`#${L.clone().offsetHSL(0,0,-.04).getHexString()}`),o.fillStyle=z,o.fillRect(v,v,r-2*v,T),x=v+T}o.fillStyle=u,o.font=f(800,p.length>12?.112:.128),Hv(o,p,r-2*v-l*.06).forEach((T,L)=>o.fillText(T,r/2,x+l*.15+L*l*.145));let b=null;n.kind==="transit"?b=_a.transit[n.vehicle]||_a.transit._:n.kind==="shop"?b=Bv[sn(n.name,"tr")]||"\u{1F3EA}":n.kind==="card"?b=_a.card[n.deck]||"?":n.kind==="tax"?b=/otopark/i.test(sn(n.name,"tr"))?"\u{1F17F}\uFE0F":/köprü/i.test(sn(n.name,"tr"))?"\u{1F309}":_a.tax:n.kind==="utility"&&(b=_a.utility),b&&(o.font=f(400,.4),o.fillText(b,r/2,a*.6));let P=n.price?n.price:n.kind==="tax"?n.amount:null;P&&(o.fillStyle=d,o.font=f(700,.14),Fv(o,c?`${P}${al}`:`$${P}`,r/2,a-l*.19,l*.14))}o.strokeStyle="rgba(50,40,28,0.5)",o.lineWidth=l*.008,o.strokeRect(l*.045,l*.045,r-l*.09,a-l*.09);for(let y=0;y<900;y++){o.fillStyle=Math.random()<.6?"rgba(90,70,40,0.045)":"rgba(255,255,255,0.07)";let v=1+Math.random()*2.4;o.fillRect(Math.random()*r,Math.random()*a,v,v)}let g=o.createRadialGradient(r/2,a/2,Math.min(r,a)*.42,r/2,a/2,Math.hypot(r,a)/2);g.addColorStop(0,"rgba(120,90,50,0)"),g.addColorStop(1,"rgba(120,90,50,0.16)"),o.fillStyle=g,o.fillRect(0,0,r,a);let m=new xn(s);return m.colorSpace=Rt,m.anisotropy=16,m}var Pu=.07,gs=.014,Au=new Map;function Zm(i,e,t){let n=new gi,r=i/2,a=e/2;return n.moveTo(-r+t,-a),n.lineTo(r-t,-a),n.absarc(r-t,-a+t,t,-Math.PI/2,0),n.lineTo(r,a-t),n.absarc(r-t,a-t,t,0,Math.PI/2),n.lineTo(-r+t,a),n.absarc(-r+t,a-t,t,Math.PI/2,Math.PI),n.lineTo(-r,-a+t),n.absarc(-r+t,-a+t,t,Math.PI,Math.PI*1.5),n}function Wm(i,e){let t=`${i}x${e}`;if(Au.has(t))return Au.get(t);let n=new vr(Zm(i,e,.07),{depth:Pu-2*gs,bevelEnabled:!0,bevelThickness:gs,bevelSize:gs,bevelOffset:-gs,bevelSegments:3,curveSegments:8}),r=n.attributes.uv,a=n.attributes.position;for(let s=0;s<r.count;s++)r.setXY(s,a.getX(s)/i+.5,a.getY(s)/e+.5);return n.translate(0,0,gs),n.rotateX(-Math.PI/2),Au.set(t,n),n}var Ru=new Map;function Cu(i,e){let t=`${i}x${e}`;return Ru.has(t)||Ru.set(t,new xr(Zm(i,e,.07),8).rotateX(-Math.PI/2)),Ru.get(t)}var rl={shade:.004,owned:.007,auction:.01,hover:.013};function Vv(i=.5,e=.075){let t=new ye(i,i,i,12,12,12),n=t.attributes.position,r=t.attributes.normal,a=i/2-e,s=new C,o=new C;for(let l=0;l<n.count;l++)s.fromBufferAttribute(n,l),o.set(Math.max(-a,Math.min(a,s.x)),Math.max(-a,Math.min(a,s.y)),Math.max(-a,Math.min(a,s.z))),s.sub(o).normalize(),r.setXYZ(l,s.x,s.y,s.z),n.setXYZ(l,o.x+s.x*e,o.y+s.y*e,o.z+s.z*e);return t}function Wv(i){let e=t=>{let n=document.createElement("canvas");n.width=n.height=256;let r=n.getContext("2d");r.fillStyle=t?"#fff":"#f6f0e2",r.fillRect(0,0,256,256);let a=72,s=128,o=184,l={1:[[s,s]],2:[[a,a],[o,o]],3:[[a,a],[s,s],[o,o]],4:[[a,a],[o,a],[a,o],[o,o]],5:[[a,a],[o,a],[s,s],[a,o],[o,o]],6:[[a,a-6],[o,a-6],[a,s],[o,s],[a,o+6],[o,o+6]]}[i];for(let[h,u]of l){let d=i===1?27:21,p=r.createRadialGradient(h,u,0,h,u,d);if(t)p.addColorStop(0,"#333"),p.addColorStop(.7,"#555"),p.addColorStop(1,"#fff");else{let f=i===1?"#a32418":"#1b1a1d";p.addColorStop(0,f),p.addColorStop(.9,f),p.addColorStop(1,i===1?"#7c1c12":"#3a3836")}r.fillStyle=p,r.beginPath(),r.arc(h,u,d,0,Math.PI*2),r.fill()}let c=new xn(n);return t||(c.colorSpace=Rt),c.anisotropy=8,c};return new Nt({map:e(!1),bumpMap:e(!0),bumpScale:2.2,roughness:.28,clearcoat:.8,clearcoatRoughness:.12})}var jv=[2,5,1,6,3,4],jm={1:new Qt(0,0,0),6:new Qt(Math.PI,0,0),2:new Qt(0,0,Math.PI/2),5:new Qt(0,0,-Math.PI/2),3:new Qt(-Math.PI/2,0,0),4:new Qt(Math.PI/2,0,0)};function Xv(i,e){let t=new Nt({color:e,metalness:.15,roughness:.32,clearcoat:1,clearcoatRoughness:.08}),n=new Nt({color:new Ie(e).multiplyScalar(.72),metalness:.45,roughness:.32,clearcoat:.8}),r=(o,l={})=>new Nt({color:o,roughness:.42,clearcoat:.6,clearcoatRoughness:.15,...l}),a=new $t,s=(o,l=t,c=0,h=0,u=0,d=0,p=0,f=0)=>{let g=new Ye(o,l);return g.position.set(c,h,u),g.rotation.set(d,p,f),g.castShadow=!0,a.add(g),g};switch(s(new $e(.2,.22,.05,56),n,0,.025),i){case"boat":{s(new $e(.2,.12,.12,16,1,!1,0,Math.PI),t,0,.12,0,0,0,Math.PI/2).scale.set(1,1.6,1),s(new $e(.012,.012,.34,8),n,0,.3),s(new en(.13,.28,3),t,.04,.32,0,0,Math.PI/2,0).scale.set(.25,1,1);break}case"kite":s(new da(.17),t,0,.3,0).scale.set(.75,1.25,.2),s(new $e(.01,.01,.2,6),n,0,.11);break;case"lantern":s(new $e(.1,.13,.24,6),t,0,.18),s(new en(.13,.1,6),n,0,.35),s(new Tn(.05,.012,8,16),n,0,.43);break;case"anchor":s(new $e(.025,.025,.32,10),t,0,.22),s(new Tn(.045,.015,8,16),t,0,.42),s(new Tn(.13,.025,8,20,Math.PI),t,0,.16,0,Math.PI,0,0),s(new ye(.18,.025,.03),t,0,.33);break;case"tram":s(new ye(.34,.17,.17),t,0,.15),s(new ye(.3,.05,.18),n,0,.26);break;case"simitcart":{s(new ye(.34,.16,.2),t,0,.17),s(new ye(.3,.14,.18),r("#e6f2fa",{transparent:!0,opacity:.55,roughness:.1}),0,.32);for(let[o,l]of[[-.08,.31],[.07,.31],[0,.36]])s(new Tn(.045,.018,12,28),r("#9a5a1e",{clearcoat:.2}),o,l,0,0,0,0);for(let o of[-.11,.11])s(new $e(.06,.06,.02,12),r("#222"),-.1,.08,o,Math.PI/2,0,0);s(new $e(.01,.01,.16,6),n,.2,.18,0,0,0,.9);break}case"cat":{s(new Mt(.13,32,24),t,0,.17,0).scale.set(1.25,.95,.9),s(new Mt(.09,28,20),t,.12,.31,0);for(let o of[-.045,.045])s(new en(.03,.08,4),t,.13,.41,o);s(new $e(.016,.016,.26,6),t,-.16,.25,0,0,0,.5);for(let o of[-.03,.03])s(new Mt(.012,6,6),r("#1c1c1c"),.2,.33,o);break}case"gull":{s(new Mt(.11,28,20),r("#ffffff"),0,.22,0).scale.set(1.5,.85,.85),s(new Mt(.07,24,18),r("#ffffff"),.14,.31,0),s(new en(.025,.1,6),r("#f2b632"),.24,.3,0,0,0,-Math.PI/2);for(let o of[-.12,.12])s(new Mt(.1,24,12),t,-.03,.25,o*.82,o>0?.5:-.5,0,.15).scale.set(1.25,.6,.22);s(new en(.05,.1,4),t,-.17,.24,0,0,0,Math.PI/2);break}case"taxi":{s(new ye(.36,.12,.2),r("#f6c21c",{metalness:.3}),0,.13),s(new ye(.2,.1,.18),r("#f6c21c",{metalness:.3}),-.02,.24),s(new ye(.1,.05,.08),t,-.02,.32),s(new ye(.38,.03,.205),r("#222"),0,.12);for(let[o,l]of[[.11,.1],[-.11,.1],[.11,-.1],[-.11,-.1]])s(new $e(.045,.045,.03,12),r("#1a1a1a"),o,.07,l,Math.PI/2,0,0);break}case"tea":{s(new $e(.16,.13,.03,20),t,0,.07);let o=[[0,0],[.07,0],[.055,.08],[.05,.15],[.075,.27],[.08,.3]].map(([l,c])=>new le(l,c));s(new $n(o,18),r("#b4351c",{transparent:!0,opacity:.85,roughness:.08}),0,.09),s(new ye(.05,.02,.03),r("#ffffff"),.11,.09,.05);break}case"fishboat":{s(new $e(.22,.12,.12,14,1,!1,0,Math.PI),t,0,.13,0,0,0,Math.PI/2).scale.set(1,1.6,1),s(new ye(.24,.08,.14),r("#3a3a3a"),0,.22),s(new ye(.16,.025,.05),r("#e3a15a"),0,.28),s(new Mt(.05,8,6),r("#d6d6d6",{transparent:!0,opacity:.6}),.02,.4);break}default:s(new da(.16),t,0,.27).scale.set(1,1.3,1),t.flatShading=!0}return a}var Xm=["#e8a87c","#d9b38c","#a3c4bc","#e3d26f","#c97b84","#8fb8de","#b9a2d6"];function qm(i,e,t=0){let n=new $t,r=(o,l,c,h,u)=>{let d=new Ye(o,l);return d.position.set(c,h,u),d.castShadow=!0,n.add(d),d};if(!e){if(i){let o=new wt({color:"#d2493b",roughness:.5});r(new ye(.3,.42,.22),o,0,.21,0),r(new ye(.16,.12,.12),o,0,.48,0)}else{let o=new wt({color:"#2fa35a",roughness:.5});r(new ye(.16,.12,.15),o,0,.06,0),r(new en(.13,.09,4),o,0,.165,0).rotation.y=Math.PI/4}return n}if(i){let o=document.createElement("canvas");o.width=32,o.height=96;let l=o.getContext("2d");l.fillStyle="#4b7fa6",l.fillRect(0,0,32,96);for(let u=2;u<96;u+=6)for(let d=2;d<32;d+=6)l.fillStyle=Math.random()<.35?"#ffe9a8":"#9cc7e6",l.fillRect(d,u,4,3);let c=new xn(o);c.colorSpace=Rt;let h=new wt({map:c,metalness:.5,roughness:.15,emissive:"#223344",emissiveIntensity:.3});return r(new ye(.34,.95,.3),h,0,.475,0),r(new ye(.2,.08,.18),new wt({color:"#cfd8df"}),0,.99,0),n}let a=new wt({color:Xm[t%Xm.length],roughness:.8});r(new ye(.17,.2,.15),a,0,.1,0),r(new ye(.11,.08,.04),a,0,.14,.09),r(new ye(.05,.05,.005),new wt({color:"#fff7d6",emissive:"#ffd27a",emissiveIntensity:.25}),0,.15,.112);let s=r(new en(.15,.1,4),new wt({color:"#b84a33",roughness:.7}),0,.25,0);return s.rotation.y=Math.PI/4,n}function qv(i){let e=new $t,t=(r,a={})=>new wt({color:r,roughness:.5,...a}),n=(r,a,s,o,l)=>{let c=new Ye(r,a);return c.position.set(s,o,l),c.castShadow=!0,e.add(c),c};if(i==="ferry")n(new ye(1.1,.2,.46),t("#ffffff"),0,-.05,0),n(new ye(.66,.16,.4),t("#f2efe6"),-.12,.12,0),n(new ye(.66,.03,.41),t("#2c5d8f"),-.12,.21,0),n(new $e(.05,.05,.25,8),t("#e8c04a"),.14,.32,0);else if(i==="cablecar")n(new ye(.46,.34,.4),t("#e0473b"),0,.12,0),n(new ye(.42,.14,.41),t("#cfe8f6",{transparent:!0,opacity:.7}),0,.2,0),n(new $e(.015,.015,.5,6),t("#444"),0,.55,0);else{let r={train:"#d23a3a",metro:"#2f8f4e",tram:"#c8362f",funicular:"#d9a21b"}[i]||"#888";n(new ye(.78,.22,.36),t(r),0,.02,0),n(new ye(.7,.08,.37),t("#dfeef7",{transparent:!0,opacity:.8}),0,.08,0)}return e}var Ym=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;var Kn={iso:{label:"Isometric",ortho:!0,az:Math.PI/4,pol:Math.acos(1/Math.sqrt(3)),size:7.4,wide:9.8,fixedPol:!0},top:{label:"Top",ortho:!0,az:0,pol:1e-4,size:7.6,wide:7.2,fixedPol:!0},tv:{label:"TV",ortho:!1,az:0,pol:1.05,dist:19,follow:!0}},D1=Object.keys(Kn),sl=class{constructor(e,t={}){this.el=e,this.onTile=t.onTile||(()=>{}),this.onDice=t.onDice||(()=>{}),this.speed=1;let n=Fm();this.renderer=new ko({antialias:!fs[n.level].post,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sm,this.renderer.outputColorSpace=Rt,this.renderer.toneMapping=om,this.post=new Jo(this.renderer),e.appendChild(this.renderer.domElement);let r=this.scene=new ur;this.persp=new hn(40,1,.8,320),this.ortho=new Di(-10,10,10,-10,1,260),this.sky=Mu(),r.add(this.sky),this.orbit={az:0,pol:.9,zoom:1,tx:0,tz:0},this.layout=yu({tiles:new Array(40).fill({})});let a=this.sun=new Vo("#ffe3bf",3.4);a.castShadow=!0,a.shadow.bias=-3e-4,a.shadow.normalBias=.025,a.shadow.radius=2.2,r.add(a,a.target),this.mapRoot=new $t,r.add(this.mapRoot),this.tileMeshes=[],this.hl=new Ye(Cu(1,1),new yn({color:"#ffd24a",transparent:!0,opacity:.3,depthWrite:!1})),this.hl.visible=!1,r.add(this.hl);let s=jv.map(Wv),o=Vv();this.dice=[0,1].map(()=>{let c=new Ye(o,s);return c.castShadow=c.receiveShadow=!0,r.add(c),c}),this.tokens=new Map,this.owners=new Map,this.shades=new Map,this.houses=new Map,this.floats=[],this.ring=new Ye(new hs(.24,.3,40),new yn({color:"#ffe27a",transparent:!0,opacity:.9,side:ma,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,r.add(this.ring),this.turnId=null;let l="";try{l=localStorage.getItem("parcel.view")||""}catch{}this.viewName=Kn[l]?l:"tv",this.camera=Kn[this.viewName].ortho?this.ortho:this.persp,this.setQuality(n.level),this.watch=n.fixed?null:new Qo(n.level,c=>this.setQuality(c)),this.bindInput(),this.resize(),new ResizeObserver(()=>this.resize()).observe(e),this.clock=new Wo,this.renderer.setAnimationLoop(()=>this.frame())}setQuality(e){this.quality=fs[e],this.gfx=e,this.sun.shadow.mapSize.set(this.quality.shadow,this.quality.shadow),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.size&&this.resize()}setExposure(e){this.post.exposure=e,this.renderer.toneMappingExposure=e*.6}setMap(e){if(this.map&&this.map.id===e.id)return;this.map=e;for(let s of this.tokens.values())this.scene.remove(s.obj);this.tokens.clear();for(let s of[this.owners,this.shades,this.houses]){for(let o of s.values())this.scene.remove(o);s.clear()}this.clearAuction(),this.showOwned(null),this.mapRoot.clear(),this.tileMeshes=[],this.art=null,this.layout=e.shape==="route"?Pm(e):yu(e);let t=this.layout;t.kind==="route"?(this.art=Gm(this.mapRoot,t),t.diceY=.275,this.envSky=this.envSky||zm(this.renderer,"#27505f"),this.scene.environment=this.envSky,this.scene.environmentIntensity=.85,this.scene.background=null,this.sky.visible=!0,this.scene.fog=new Po(bu,.0088),this.sun.color.set("#ffe0b8"),this.sun.intensity=4,this.setExposure(1.32)):(this.buildSquareScenery(),t.diceY=.25,this.envRoom=this.envRoom||Bm(this.renderer),this.scene.environment=this.envRoom,this.scene.environmentIntensity=.42,this.scene.background=new Ie("#17120e"),this.sky.visible=!1,this.scene.fog=new Io("#17120e",34,80),this.sun.color.set("#ffe2bd"),this.sun.intensity=1.9,this.setExposure(.8));let n=t.top-Pu/2;this.tileTop=n+Pu;let r=new wt({color:"#d8c9a8",roughness:.85});t.tiles.forEach((s,o)=>{let l=new Nt({map:Vm(e,o,s),bumpMap:_u(),bumpScale:.25,roughness:.62,clearcoat:.22,clearcoatRoughness:.45}),c=new Ye(Wm(s.w,s.d),[l,r]);c.position.set(s.x,n,s.z),c.rotation.y=s.rot,c.receiveShadow=!0,c.castShadow=!0,c.userData.i=o,this.mapRoot.add(c),this.tileMeshes.push(c)});let a=t.kind==="route"?17.5:10;Object.assign(this.sun.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:1,far:90}),this.sun.position.set(t.center[0],0,t.center[1]).addScaledVector(xu,45),this.sun.target.position.set(t.center[0],0,t.center[1]),this.sun.shadow.camera.updateProjectionMatrix(),this.placeDice(),this.resetCamera()}relabel(){this.map&&this.tileMeshes.forEach((e,t)=>{let n=e.material[0].map;e.material[0].map=Vm(this.map,t,this.layout.tiles[t]),e.material[0].needsUpdate=!0,n.dispose()})}buildSquareScenery(){let e=this.mapRoot,t=new Ye(new fr(70,64),nl("#4a2f1d",[9,9]));t.rotation.x=-Math.PI/2,t.position.y=-.38,t.receiveShadow=!0,e.add(t);let n=new Ye(Wm(_r+.6,_r+.6).clone().scale(1,5,1),[nl("#8a5a34",[2,2]),nl("#6d4526",[3,1])]);n.position.y=-.36,n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=1024,a=document.createElement("canvas");a.width=a.height=r;let s=a.getContext("2d"),o=s.createRadialGradient(r/2,r/2,r*.05,r/2,r/2,r*.62);o.addColorStop(0,"#dcefe4"),o.addColorStop(1,"#b9d8c8"),s.fillStyle=o,s.fillRect(0,0,r,r),s.translate(r/2,r/2),s.strokeStyle="rgba(40,90,80,0.18)",s.lineWidth=4;for(let h=1;h<6;h++)s.beginPath(),s.arc(0,0,h*90,0,Math.PI*2),s.stroke();s.rotate(-Math.PI/4),s.fillStyle="#1f3a4a",s.font=`900 150px ${vi}`,s.textAlign="center",s.textBaseline="middle",s.fillText("PARCEL",0,-20),s.font=`600 34px ${vi}`,s.fillStyle="#2f5d63",s.fillText("\xB7  THE HARBOUR CITY TRADING GAME  \xB7",0,90);let l=new xn(a);l.colorSpace=Rt;let c=new Ye(new fi(_r,_r),new Nt({map:l,bumpMap:_u(),bumpScale:.2,roughness:.7,clearcoat:.2}));c.rotation.x=-Math.PI/2,c.position.y=-.002,c.receiveShadow=!0,e.add(c);for(let[h,u,d]of[["fortune",-2.7,-2.7],["gazette",2.7,2.7]]){let p=this.map.decks[h],f=document.createElement("canvas");f.width=256,f.height=160;let g=f.getContext("2d");g.fillStyle=p.color,g.fillRect(0,0,256,160),g.strokeStyle="#fff8",g.lineWidth=6,g.strokeRect(10,10,236,140),g.fillStyle="#fff",g.font=`800 38px ${vi}`,g.textAlign="center",g.textBaseline="middle",g.fillText(ku(p.name).toUpperCase(),128,80);let m=new xn(f);m.colorSpace=Rt;let y=new wt({color:"#f4f0e6"}),v=new Ye(new ye(1.6,.12,1),[y,y,new wt({map:m,roughness:.6}),y,y,y]);v.position.set(u,.06,d),v.rotation.y=-Math.PI/4,v.castShadow=!0,e.add(v)}}placeDice(){let[e,t]=this.layout.diceSpot;this.dice.forEach((n,r)=>{n.position.set(e+(r?.4:-.4),this.layout.diceY,t+(r?-.2:.2)),n.quaternion.setFromEuler(jm[r?3:4])})}resize(){let e=this.el.clientWidth||innerWidth,t=this.el.clientHeight||innerHeight,n=this.quality,r=Math.min(devicePixelRatio,n.dpr,Math.sqrt(n.pixels/Math.max(1,e*t)));this.renderer.setPixelRatio(r),this.renderer.setSize(e,t,!1),this.size={w:e,h:t},n.post&&this.post.setSize(Math.max(2,Math.round(e*r)),Math.max(2,Math.round(t*r)),n.samples),this.persp.aspect=e/t,this.fit=e<t?1+(t/e-1)*1.25:1,this.persp.updateProjectionMatrix()}setView(e){Kn[e]||(e="iso"),this.viewName=e;let t=Kn[e],n=this.layout.center;Object.assign(this.orbit,{az:t.az,pol:t.pol,zoom:e==="tv"&&this.layout.kind==="route"?1.5:1,tx:n[0],tz:n[1]+(e==="tv"?.6:0)}),this.camera=t.ortho?this.ortho:this.persp,this.followPause=0;try{localStorage.setItem("parcel.view",e)}catch{}}nextView(){let e=Object.keys(Kn);return this.setView(e[(e.indexOf(this.viewName)+1)%e.length]),Kn[this.viewName].label}resetCamera(){this.setView(this.viewName)}placeCamera(e){let t=this.orbit,n=Kn[this.viewName],r=this.layout.scale;if(n.follow&&this.focus&&performance.now()>this.followPause){let s=1-Math.exp(-e*1.5),o=this.layout.center,l=this.layout.kind==="route"?.8:.55;t.tx+=(o[0]+(this.focus.x-o[0])*l-t.tx)*s,t.tz+=(o[1]+(this.focus.z-o[1])*l+.6-t.tz)*s}this.scene.fog&&this.scene.fog.isFogExp2&&(this.scene.fog.density=n.ortho?5e-4:.0088);let a=new C(Math.sin(t.pol)*Math.sin(t.az),Math.cos(t.pol),Math.sin(t.pol)*Math.cos(t.az));if(n.ortho){let s=this.size?this.size.w/this.size.h:1,o=Math.max(n.size,n.wide/s)*r/t.zoom;Object.assign(this.ortho,{left:-o*s,right:o*s,top:o,bottom:-o}),this.ortho.updateProjectionMatrix(),this.ortho.position.set(t.tx+a.x*70,a.y*70,t.tz+a.z*70),this.ortho.up.set(t.pol<.01?-Math.sin(t.az):0,t.pol<.01?0:1,t.pol<.01?-Math.cos(t.az):0),this.ortho.lookAt(t.tx,0,t.tz)}else{let s=n.dist*r/t.zoom*this.fit;this.persp.position.set(t.tx+a.x*s,a.y*s,t.tz+a.z*s),this.persp.up.set(0,1,0),this.persp.lookAt(t.tx,0,t.tz)}}pan(e,t){let n=this.orbit,r=Kn[this.viewName],a=this.layout.scale,s=this.size?this.size.h:800,o=r.ortho?2*this.ortho.top/s:2*(r.dist*a/n.zoom)*this.fit*Math.tan(this.persp.fov*Math.PI/360)/s,l=1/Math.max(.35,Math.cos(n.pol)),c=Math.cos(n.az),h=-Math.sin(n.az),u=-Math.sin(n.az),d=-Math.cos(n.az),p=this.layout.center,f=8*a;n.tx=Math.min(p[0]+f,Math.max(p[0]-f,n.tx-c*e*o+u*t*o*l)),n.tz=Math.min(p[1]+f,Math.max(p[1]-f,n.tz-h*e*o+d*t*o*l)),this.followPause=performance.now()+6e3}rotate(e,t){let n=this.orbit,r=Kn[this.viewName];n.az-=e*.006,r.fixedPol||(n.pol=Math.min(1.3,Math.max(.12,n.pol-t*.005)))}zoom(e){this.orbit.zoom=Math.min(5,Math.max(.55,this.orbit.zoom/e))}bindInput(){let e=this.renderer.domElement,t=new Map,n=null,r=0,a=null;e.style.touchAction="none",e.addEventListener("contextmenu",o=>o.preventDefault()),e.addEventListener("pointerdown",o=>{if(e.setPointerCapture(o.pointerId),t.set(o.pointerId,{x:o.clientX,y:o.clientY}),n={x:o.clientX,y:o.clientY,moved:!1,panning:o.button===2||o.button===1||o.shiftKey},t.size===2){let[l,c]=[...t.values()];r=Math.hypot(l.x-c.x,l.y-c.y),a={x:(l.x+c.x)/2,y:(l.y+c.y)/2}}}),e.addEventListener("pointermove",o=>{let l=t.get(o.pointerId);if(!l){this.hover(o);return}let c=o.clientX-l.x,h=o.clientY-l.y;if(l.x=o.clientX,l.y=o.clientY,n&&Math.hypot(o.clientX-n.x,o.clientY-n.y)>6&&(n.moved=!0),t.size===2){let[u,d]=[...t.values()],p=Math.hypot(u.x-d.x,u.y-d.y),f={x:(u.x+d.x)/2,y:(u.y+d.y)/2};r&&this.zoom(r/p),a&&this.pan(f.x-a.x,f.y-a.y),r=p,a=f;return}n&&n.moved&&(n.panning?this.pan(c,h):this.rotate(c,h))});let s=o=>{t.delete(o.pointerId),t.size<2&&(r=0,a=null),n&&!n.moved&&t.size===0&&o.button===0&&(this.pickDice(o)?this.onDice():this.onTile(this.pick(o))),t.size===0&&(n=null)};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",o=>{t.delete(o.pointerId),n=null}),e.addEventListener("wheel",o=>{o.preventDefault(),this.zoom(Math.exp(o.deltaY*.001))},{passive:!1})}ray(e){let t=this.renderer.domElement.getBoundingClientRect(),n=new le((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),r=new jo;return r.setFromCamera(n,this.camera),r}pick(e){let t=this.ray(e).intersectObjects(this.tileMeshes,!1)[0];return t?t.object.userData.i:-1}pickDice(e){return this.ray(e).intersectObjects(this.dice,!1).length>0}hover(e){if(matchMedia("(pointer: coarse)").matches)return;let t=this.pickDice(e),n=t?-1:this.pick(e);this.renderer.domElement.style.cursor=t&&this.diceReady||n>=0?"pointer":"grab",this.highlight(n>=0?n:this.selected??-1)}onTilePlane(e,t,n){let r=this.layout.tiles[e],a=new Ye(Cu(r.w,r.d),t);return a.rotation.y=r.rot,a.position.set(r.x,this.tileTop+n,r.z),a.renderOrder=Math.round(n*1e3),a}highlight(e){let t=this.layout.tiles[e];this.hl.visible=!!t,t&&(this.hl.geometry=Cu(t.w,t.d),this.hl.position.set(t.x,this.tileTop+rl.hover,t.z),this.hl.rotation.y=t.rot,this.hl.renderOrder=13)}select(e){this.selected=e,this.highlight(e)}spot(e,t,n){let r=this.layout.tiles[e];if(!r)return new C;let a=[[0,.1],[-.26,.28],[.26,.28],[-.26,-.12],[.26,-.12],[0,.45]],[s,o]=a[t%a.length];if(r.corner&&(s*=1.3,o*=1.1),this.map&&e===this.map.jailTile){let h=t%4;n?(s=(h%2-.5)*.5,o=-r.d*.26+(Math.floor(h/2)-.5)*.25):(s=(t%3-1)*.45,o=r.d*.3)}let[l,c]=il(r,s,o);return new C(l,this.tileTop,c)}setState(e,t=[]){if(!e){let n=t.filter(r=>r.seat);this.syncTokens(n.map(r=>({id:r.id,token:r.seat.token,color:r.seat.color,pos:0,out:!1,inJail:!1})));for(let r of[...this.owners.keys()])this.setOwner(r,null);for(let r of[...this.houses.keys()])this.setLevel(r,0);this.ring.visible=!1,this.turnId=null;return}this.syncTokens(e.players);for(let n=0;n<this.layout.tiles.length;n++){let r=e.props[n],a=r?e.players.find(s=>s.id===r.owner):null;this.setOwner(n,a?a.color:null,r&&r.mortgaged),this.setLevel(n,r?r.level:0)}this.turnId=e.phase==="play"?e.players[e.turn].id:null}syncTokens(e){let t=new Set(e.filter(n=>!n.out).map(n=>n.id));for(let[n,r]of this.tokens)t.has(n)||(this.scene.remove(r.obj),this.tokens.delete(n));for(let n of e){if(n.out)continue;let r=this.tokens.get(n.id);(!r||r.kind!==n.token||r.color!==n.color)&&(r&&this.scene.remove(r.obj),r={obj:Xv(n.token,n.color),kind:n.token,color:n.color,pos:n.pos,busy:!1},this.scene.add(r.obj),this.tokens.set(n.id,r)),r.pos=n.pos,r.jailed=n.inJail}this.layoutTokens()}layoutTokens(){let e=new Map;for(let t of this.tokens.values()){if(t.busy)continue;let n=`${t.pos}:${this.map&&t.pos===this.map.jailTile&&t.jailed?"j":""}`;e.has(n)||e.set(n,[]),e.get(n).push(t)}for(let t of e.values())t.forEach((n,r)=>{n.target=this.spot(n.pos,t.length===1?0:r+1,n.jailed),n.placed||(n.obj.position.copy(n.target),n.placed=!0)})}setOwner(e,t,n=!1){let r=this.layout.tiles[e],a=this.owners.get(e);if(!t||!r){a&&(this.scene.remove(a),this.owners.delete(e)),this.setShade(e,!1);return}if(!a){a=new Ye(new ye(r.w*.82,.06,.07),new Nt({roughness:.3,clearcoat:1})),a.castShadow=!0;let[s,o]=il(r,0,r.d/2-.05);a.position.set(s,this.tileTop+.018,o),a.rotation.y=r.rot,this.scene.add(a),this.owners.set(e,a)}a.material.color.set(t),this.setShade(e,n)}setShade(e,t){let n=this.shades.get(e);if(!t){n&&(this.scene.remove(n),this.shades.delete(e));return}n||(n=this.onTilePlane(e,new yn({color:"#000",transparent:!0,opacity:.45,depthWrite:!1}),rl.shade),this.scene.add(n),this.shades.set(e,n))}setLevel(e,t){let n=this.houses.get(e);if(n&&n.userData.level===t||(n&&(this.scene.remove(n),this.houses.delete(e)),!t))return;let r=this.layout.tiles[e];if(!r)return;let a=this.map&&this.map.currency==="simit";n=new $t,n.userData.level=t;let s=-(r.d/2-r.d*.1);if(t===Kt){let o=qm(!0,a),[l,c]=il(r,0,s+(a?.12:0));o.position.set(l,this.tileTop,c),o.rotation.y=r.rot,n.add(o)}else for(let o=0;o<t;o++){let l=(o-(t-1)/2)*.24,c=qm(!1,a,e*3+o),[h,u]=il(r,l,s);c.position.set(h,this.tileTop,u),c.rotation.y=r.rot,n.add(c)}this.scene.add(n),this.houses.set(e,n)}async rollDice(e,t=0){let n=this.layout.tiles[t]||{x:0,z:0},[r,a]=this.layout.diceSpot,s=this.layout.diceY,o=new C((n.x+r)/2,2.4,(n.z+a)/2),l=[new C(r-.4,s,a+.2),new C(r+.4,s,a-.2)],c=950/this.speed,h=this.dice.map((u,d)=>{let p=new rn().setFromEuler(jm[e[d]]),f=new rn().setFromAxisAngle(new C(0,1,0),Math.random()*Math.PI*2);p.premultiply(f);let g=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{d:u,final:p,axis:g,spin:Math.PI*(6+Math.random()*4),from:o.clone().add(new C(d*.4,0,0)),to:l[d]}});await this.tween(c,u=>{for(let d of h){let p=1-(1-u)**2;d.d.position.lerpVectors(d.from,d.to,p);let f=Math.abs(Math.sin(u*Math.PI*2.6))*(1-u)*1.4;d.d.position.y=s+f+(1-p)*1.2;let g=new rn().setFromAxisAngle(d.axis,(1-Ym(u))*d.spin);d.d.quaternion.copy(d.final).multiply(g)}})}async moveToken(e,t,n,r,a,s){let o=this.tokens.get(e);if(!o)return;o.busy=!0;let l=(h,u,d,p)=>this.tween(d,f=>{o.obj.position.lerpVectors(h,u,f),o.obj.position.y=h.y+(u.y-h.y)*f+Math.sin(f*Math.PI)*p}),c=this.layout.tiles.length;if(s)await this.rideAlong(o,t,n,s);else if(a||Math.abs(r)>14||r===0)await l(o.obj.position.clone(),this.spot(n,0),700/this.speed,1.6);else{let h=Math.sign(r),u=t,d=Math.max(70,170-Math.abs(r)*6)/this.speed;for(let p=0;p<Math.abs(r);p++){u=(u+h+c)%c;let f=ya.some(([g,m])=>g===(u-h+c)%c&&m===u)&&this.layout.kind==="route";await l(o.obj.position.clone(),this.spot(u,0),f?d*3:d,f?1.4:.35),this.onStep&&this.onStep(u)}}o.pos=n,o.busy=!1,o.placed=!0,this.layoutTokens()}async rideAlong(e,t,n,r){let a=this.spot(t,0),s=this.spot(n,0),o=qv(r);this.scene.add(o),o.add(e.obj),e.obj.position.set(0,r==="ferry"?.06:r==="cablecar"?.3:.14,0);let l=a.distanceTo(s),c=Math.max(1300,l*260)/this.speed,h=r==="cablecar"?2.6:r==="ferry"?0:r==="train"?-.5:.25,u=r==="ferry"?.05:this.tileTop+.05;o.rotation.y=Math.atan2(-(s.z-a.z),s.x-a.x),await this.tween(c,d=>{let p=Ym(d);o.position.set(a.x+(s.x-a.x)*p,u+Math.sin(d*Math.PI)*h,a.z+(s.z-a.z)*p),r==="ferry"&&(o.position.y=.05+Math.sin(d*30)*.02)}),this.scene.attach(e.obj),this.scene.remove(o)}flySimits(e,t,n){let r=e&&this.tokens.get(e),a=t&&this.tokens.get(t);if(!r&&!a)return;let s=this.map&&this.map.currency==="simit",o=Math.max(1,Math.min(7,Math.ceil(n/60))),l=r?r.obj.position.clone().add(new C(0,.4,0)):null,c=a?a.obj.position.clone().add(new C(0,.4,0)):null;for(let h=0;h<o;h++)setTimeout(()=>{let u=this.simitMesh(s),d=l?l.clone():c.clone().add(new C((Math.random()-.5)*2,4,(Math.random()-.5)*2)),p=c?c.clone():l.clone().add(new C((Math.random()-.5)*2,4,(Math.random()-.5)*2));u.position.copy(d),this.scene.add(u),this.tween(650,f=>{u.position.lerpVectors(d,p,f),u.position.y+=Math.sin(f*Math.PI)*1.1,u.rotation.x=f*8,u.rotation.y=f*5;let g=!c&&f>.6||!l&&f<.2;u.scale.setScalar(g?c?f*5:(1-f)*2.5:1)}).then(()=>this.scene.remove(u))},h*70)}simitMesh(e=!0){if(e){let t=new Ye(new Tn(.09,.035,14,32),new Nt({color:"#9a5a1e",roughness:.5,clearcoat:.4}));return t.castShadow=!0,t}return new Ye(new $e(.08,.08,.02,16),new wt({color:"#f2c14e",metalness:.8,roughness:.3}))}gullSteal(e){let t=this.tokens.get(e);this.art&&t&&this.art.steal(t.obj,()=>this.simitMesh(!0))}siren(){this.art&&this.art.siren()}shockGulls(){this.art&&this.art.shock()}setAuction(e,t,n){if(e==null||!this.layout.tiles[e]){this.clearAuction();return}let r=`${e}|${t.join("|")}|${n}`;if(this.auctionMark&&this.auctionMark.key===r)return;let a=this.layout.tiles[e];if(!this.auctionMark||this.auctionMark.tile!==e){this.clearAuction();let l=this.onTilePlane(e,new yn({color:"#ffcf4a",transparent:!0,opacity:.5,depthWrite:!1}),rl.auction),c=document.createElement("canvas");c.width=512,c.height=256;let h=new xn(c);h.colorSpace=Rt;let u=new ua(new dr({map:h,depthTest:!1,depthWrite:!1,fog:!1}));u.scale.set(2.4,1.2,1),u.position.set(a.x,1.5,a.z),u.renderOrder=11,this.scene.add(l,u),this.auctionMark={tile:e,glow:l,sign:u,cv:c,tex:h}}let s=this.auctionMark;s.key=r;let o=s.cv.getContext("2d");o.clearRect(0,0,512,256),o.fillStyle="rgba(20,28,38,0.92)",o.beginPath(),o.roundRect(8,8,496,200,28),o.fill(),o.fillStyle=n||"#ffcf4a",o.beginPath(),o.roundRect(8,8,496,16,[28,28,0,0]),o.fill(),o.beginPath(),o.moveTo(230,206),o.lineTo(256,244),o.lineTo(282,206),o.fillStyle="rgba(20,28,38,0.92)",o.fill(),o.textAlign="center",o.textBaseline="middle",o.fillStyle="#ffcf4a",o.font=`800 34px ${vi}`,o.fillText(t[0]||"",256,58),o.fillStyle="#fff",o.font=`900 64px ${vi}`,o.fillText(t[1]||"",256,122),o.fillStyle="#b9c6cf",o.font=`600 30px ${vi}`,o.fillText(t[2]||"",256,178),s.tex.needsUpdate=!0}clearAuction(){let e=this.auctionMark;e&&(this.scene.remove(e.glow,e.sign),e.tex.dispose(),e.sign.material.dispose(),e.glow.material.dispose(),this.auctionMark=null)}showOwned(e,t){if(this.ownedGlow){for(let r of this.ownedGlow)this.scene.remove(r);this.ownedGlow=null}if(!e||!e.length)return;let n=new yn({color:t||"#ffe27a",transparent:!0,opacity:.4,depthWrite:!1});this.ownedGlow=e.map(r=>{let a=this.onTilePlane(r,n,rl.owned);return this.scene.add(a),a})}stamp(e,t,n){let r=this.layout.tiles[e];if(!r)return;let a=document.createElement("canvas");a.width=512,a.height=160;let s=a.getContext("2d");s.translate(256,80),s.rotate(-.12),s.strokeStyle=n,s.lineWidth=12,s.beginPath(),s.roundRect(-230,-62,460,124,18),s.stroke(),s.fillStyle=n,s.font=`900 80px ${vi}`,s.textAlign="center",s.textBaseline="middle",s.fillText(t,0,6);let o=new xn(a);o.colorSpace=Rt;let l=new ua(new dr({map:o,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));l.renderOrder=12,l.position.set(r.x,1.6,r.z),this.scene.add(l);let c=performance.now(),h=()=>{let u=(performance.now()-c)/1800,d=u<.15?1.6-u/.15*.6:1;l.scale.set(3*d,.94*d,1),l.material.opacity=u>.75?Math.max(0,1-(u-.75)/.25):1,u<1?requestAnimationFrame(h):(this.scene.remove(l),o.dispose(),l.material.dispose())};h()}float(e,t,n="#fff"){let r=this.layout.tiles[e];if(!r)return;let a=document.createElement("canvas");a.width=256,a.height=64;let s=a.getContext("2d");s.font=`800 40px ${vi}`,s.textAlign="center",s.textBaseline="middle",s.lineWidth=8,s.strokeStyle="rgba(0,0,0,0.65)";let o=String(t).replace(al,"").replace(/ /g,""),l=String(t).includes(al);if(s.strokeText(o,l?110:128,32),s.fillStyle=n,s.fillText(o,l?110:128,32),l){let u=s.measureText(o).width;$m(s,110+u/2+22,32,16)}let c=new xn(a);c.colorSpace=Rt;let h=new ua(new dr({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));h.scale.set(2*Math.max(1,this.layout.scale*.8),.5*Math.max(1,this.layout.scale*.8),1),h.position.set(r.x,.8,r.z),h.renderOrder=10,this.scene.add(h),this.floats.push({sp:h,t0:performance.now()})}tween(e,t){return new Promise(n=>{let r=performance.now(),a=()=>{let s=Math.min(1,(performance.now()-r)/e);t(s),s<1?requestAnimationFrame(a):n()};e<=0?(t(1),n()):requestAnimationFrame(a)})}frame(){let e=Math.min(.05,this.clock.getDelta()),t=performance.now();for(let a of this.tokens.values())a.busy||!a.target||a.obj.position.lerp(a.target,1-Math.exp(-e*12));let n=this.turnId&&this.tokens.get(this.turnId);if(n&&!n.busy){this.ring.visible=!0,this.ring.position.set(n.obj.position.x,n.obj.position.y+.02,n.obj.position.z);let a=1+Math.sin(t/260)*.12;this.ring.scale.set(a,a,a)}else this.ring.visible=!1;this.focus=n?n.obj.getWorldPosition(new C):null;for(let a=this.floats.length-1;a>=0;a--){let s=this.floats[a],o=(t-s.t0)/1600;s.sp.position.y=.8+o*1.2,s.sp.material.opacity=Math.max(0,1-o*o),o>=1&&(this.scene.remove(s.sp),s.sp.material.map.dispose(),s.sp.material.dispose(),this.floats.splice(a,1))}this.idleSpin&&(this.orbit.az+=e*.08);let r=this.diceReady?.25+.2*Math.sin(t/220):0;for(let a of this.dice[0].material)a.emissive.setRGB(r,r*.8,r*.3);if(this.auctionMark){let a=this.auctionMark;a.sign.position.y=1.5+Math.sin(t/400)*.08,a.glow.material.opacity=.35+.25*Math.sin(t/180)}this.art&&this.art.update(e,t,this),this.placeCamera(e),this.sky.position.copy(this.camera.position),this.sky.material.uniforms.uTime.value=t/1e3,this.quality.post?this.post.render(this.scene,this.camera):(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.watch&&this.watch.frame(t)}};var ys=null,ll=!1;try{ll=localStorage.getItem("parcel.mute")==="1"}catch{}var cl=()=>ll;function Km(i){ll=i;try{localStorage.setItem("parcel.mute",i?"1":"0")}catch{}}function Jm(){if(ll)return null;if(!ys)try{ys=new AudioContext}catch{return null}return ys.state==="suspended"&&ys.resume(),ys}function St(i,e,{type:t="sine",vol:n=.15,at:r=0,slide:a=0}={}){let s=Jm();if(!s)return;let o=s.currentTime+r,l=s.createOscillator(),c=s.createGain();l.type=t,l.frequency.setValueAtTime(i,o),a&&l.frequency.exponentialRampToValueAtTime(i*a,o+e),c.gain.setValueAtTime(n,o),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(s.destination),l.start(o),l.stop(o+e+.02)}function ol(i,{vol:e=.2,at:t=0,freq:n=2e3}={}){let r=Jm();if(!r)return;let a=Math.floor(r.sampleRate*i),s=r.createBuffer(1,a,r.sampleRate),o=s.getChannelData(0);for(let u=0;u<a;u++)o[u]=(Math.random()*2-1)*(1-u/a)**2;let l=r.createBufferSource(),c=r.createBiquadFilter(),h=r.createGain();l.buffer=s,c.type="bandpass",c.frequency.value=n,c.Q.value=1.2,h.gain.value=e,l.connect(c).connect(h).connect(r.destination),l.start(r.currentTime+t)}var Dt={dice(){for(let i=0;i<6;i++)ol(.05,{at:i*.11+Math.random()*.04,vol:.35,freq:1800+Math.random()*1500})},step(){St(520+Math.random()*60,.05,{type:"triangle",vol:.05})},coin(){St(1320,.09,{type:"square",vol:.04}),St(1760,.16,{type:"square",vol:.04,at:.07})},pay(){St(440,.12,{type:"triangle",vol:.08,slide:.7})},buy(){[523,659,784].forEach((i,e)=>St(i,.22,{type:"triangle",vol:.08,at:e*.07}))},build(){ol(.08,{vol:.25,freq:600}),St(300,.1,{type:"square",vol:.03,at:.05})},card(){ol(.18,{vol:.12,freq:4e3})},jail(){St(180,.35,{type:"sawtooth",vol:.06}),St(150,.4,{type:"sawtooth",vol:.05,at:.12})},turn(){St(880,.12,{vol:.07}),St(1175,.18,{vol:.07,at:.1})},offer(){St(660,.1,{vol:.07}),St(990,.14,{vol:.07,at:.09})},error(){St(220,.15,{type:"square",vol:.04})},win(){[523,659,784,1047].forEach((i,e)=>St(i,.35,{type:"triangle",vol:.09,at:e*.12}))},ride(i){i==="ferry"?(St(110,.9,{type:"sawtooth",vol:.05}),St(165,.9,{type:"sawtooth",vol:.03})):i==="cablecar"?St(330,.6,{type:"sine",vol:.05,slide:1.3}):(St(660,.18,{type:"square",vol:.03}),St(550,.25,{type:"square",vol:.03,at:.2}))},gull(){St(1400,.18,{type:"sawtooth",vol:.03,slide:.6}),St(1500,.22,{type:"sawtooth",vol:.03,at:.2,slide:.55})},whistle(){St(2300,.12,{type:"square",vol:.03}),St(2300,.35,{type:"square",vol:.03,at:.16})},enflasyon(){ol(.06,{vol:.3,freq:3e3}),St(1800,.15,{type:"square",vol:.04,at:.05}),[392,370,349,311].forEach((i,e)=>St(i,e===3?.7:.25,{type:"sawtooth",vol:.05,at:.35+e*.25,slide:e===3?.92:1}))}};$i();bn();function Qm(i){let e=_("input",{value:N.name,maxlength:16,placeholder:M("Your name"),autocomplete:"nickname"}),t=_("div.err"),n=_("input",{maxlength:28,placeholder:M("Room name (optional)")}),r=_("input",{type:"checkbox",checked:!0}),a=_("input.code",{maxlength:4,placeholder:M("CODE"),value:N.pendingCode||"",autocapitalize:"characters"}),s=()=>{let u=Hd(e.value);if(t.textContent=u?M(u):"",!u){N.name=e.value.trim();try{localStorage.setItem("parcel.name",N.name)}catch{}}return!u};e.addEventListener("input",s),a.addEventListener("input",()=>{a.value=a.value.toUpperCase().replace(/[^A-Z]/g,"")});let o=N.busy,l=u=>u==="play"?M("playing"):u==="over"?M("finished"):M("waiting"),c=N.mode==="server"?_("div.roomlist",_("div.rlh",_("h3",M("Open rooms")),_("button.small",{onclick:()=>Ze({t:"list"})},M("Refresh"))),N.rooms?N.rooms.length?N.rooms.map(u=>_("button.room",{onclick:()=>{s()&&i.join(u.code)}},_("b",u.name),_("span.muted",` \xB7 ${M("{n}/{m} seated",{n:u.seated,m:u.max})} \xB7 ${M("{n} online",{n:u.people})} \xB7 ${l(u.phase)}`),_("span.rc",u.code))):_("p.muted",M("No open rooms \u2013 create one!")):_("p.muted",M("Loading\u2026"))):null,h=i.saved();return _("div.screen.home",_("div.card",_("h1.logo","PARCEL"),_("p.tag",M("Buy \u0130stanbul, build it up, and strike deals that keep paying.")),_("label.field",M("Your name"),e,t),N.homeError?_("div.err.big",N.homeError):null,_("div.split",_("div.box",_("h3",M("Open a room")),n,N.mode==="server"?_("label.check",r,` ${M("Show in the room list")}`):null,_("button.primary",{disabled:o,onclick:()=>{s()&&i.create(n.value,r.checked)}},o==="create"?M("Opening\u2026"):M("Create room"))),_("div.box",_("h3",M("Join a room")),a,_("button.primary",{disabled:o,onclick:()=>{s()&&a.value.length===4&&i.join(a.value)}},o==="join"?M("Joining\u2026"):M("Join")))),h?_("div.resume",`${M("You were hosting room {code}.",{code:h.code})} `,_("button.small",{onclick:()=>i.resume(h)},M("Reopen it")),_("button.small",{onclick:()=>i.forget()},M("Forget"))):null,c,_("p.mode muted",N.mode==="server"?M("Connected to a game server."):M("Serverless: the room is hosted in the creator\u2019s browser and players connect directly (WebRTC). The host should keep the tab open \u2013 reloading it brings the room back."))))}function ef(i){let e=N.room,t=e.members.find(g=>g.id===N.you),n=qi(),r=e.members.filter(g=>g.seat),a=(g,m)=>r.some(y=>y!==t&&y.seat[g]===m),s=Yi(e.code),o=async()=>{try{await navigator.clipboard.writeText(s),Ct(M("Invite link copied"))}catch{prompt(M("Invite link"),s)}},l=navigator.share?()=>navigator.share({title:"PARCEL",text:M("Join my PARCEL table \u2013 room {code}",{code:e.code}),url:s}).catch(()=>{}):null,c=e.settings,h=g=>Ze({t:"settings",settings:g}),u=Bt(c.map),d=(g,m,y)=>_("select",{onchange:v=>h({[g]:Number(v.target.value)})},m.map(v=>_("option",{value:v,selected:v===c[g]},y(v)))),p=g=>g?M("{n} seconds",{n:g}):M("off"),f=g=>g?M("{n} minutes",{n:g}):M("off");return _("div.screen.lobby",_("div.card",_("div.lh",_("div",_("div.muted",M("Room")),n?_("input.rname",{value:e.name,maxlength:28,onchange:g=>Ze({t:"settings",name:g.target.value})}):_("h2",e.name)),_("div.codebox",_("div.muted",M("Code")),_("div.bigcode",e.code))),_("div.btnrow",_("button.small",{onclick:o},`\u{1F517} ${M("Copy invite link")}`),l?_("button.small",{onclick:l},M("Share\u2026")):null),_("h3",M("Map")),_("div.maps",sd.map(g=>_("button.mapbtn",{class:c.map===g?"on":"",disabled:!n&&c.map!==g,onclick:()=>{n&&h({map:g})}},_("b",ct(Vi[g].name)),_("small",g==="istanbul"?M("48 spaces \xB7 simit \xB7 lines you can ride \xB7 Enflasyon"):M("40 spaces \xB7 the classic square board"))))),_("h3",M("At the table ({n}/{m})",{n:r.length,m:ti})),_("div.members",e.members.map(g=>_("div.member",{class:g.online?"":"off","data-id":g.id,style:{"--c":g.seat?g.seat.color:"#556"}},_("span.mt",g.seat?kn[g.seat.token]:"\u{1F440}"),_("span.mn",g.name,g.bot?_("span.botbadge"," AI"):null,g.id===N.you?_("span.you",` ${M("you")}`):null,g.id===e.host?_("span.crown"," \u265B"):null),_("span.muted",g.online?g.seat?"":` ${M("watching")}`:` ${M("offline")}`),n&&g.id!==N.you?_("span.mx",g.online&&!g.bot?_("button.small",{title:M("Make host"),onclick:()=>Ze({t:"host",id:g.id})},"\u265B"):null,_("button.small.danger",{title:M("Remove"),onclick:()=>{(g.bot||confirm(M("Remove {p} from the room?",{p:g.name})))&&Ze({t:"kick",id:g.id})}},"\u2715")):null,_("div.bubble")))),t&&t.seat?_("div.seat",_("div.pick",u.tokens.map(g=>_("button.tok",{class:t.seat.token===g?"on":"",disabled:a("token",g),title:M(`token:${g}`),onclick:()=>Ze({t:"seat",token:g})},kn[g]))),_("div.pick",Ra.map(g=>_("button.sw",{class:t.seat.color===g?"on":"",disabled:a("color",g),style:{background:g},onclick:()=>Ze({t:"seat",color:g})}))),_("button.small",{onclick:()=>Ze({t:"stand"})},M("Watch instead"))):_("div.seat",_("button",{disabled:r.length>=ti,onclick:()=>Ze({t:"seat"})},M("Take a seat"))),n?_("div.btnrow",_("button.small",{disabled:r.length>=ti,onclick:()=>Ze({t:"addBot"})},`\u{1F916} ${M("Add an AI player")}`),_("span.muted",{style:{fontSize:"12px"}},M("AI players buy, build, bid, ride, and take or turn down your offers \u2013 clauses too."))):null,_("h3",M("Rules")),_("div.settings",_("label",`${M("Starting cash")} `,n?d("cash",zl,g=>Ee(g,u)):_("b",Ee(c.cash,u))),_("label",`${M("Turn timer")} `,n?d("timer",Bl,p):_("b",p(c.timer)),_("div.muted.hint",M("When it runs out the dice roll themselves, an undecided space goes to auction, a ride is declined and the turn ends. Building or trading restarts it; others can trade any time."))),_("label",`${M("Game clock")} `,n?d("clock",Fl,f):_("b",f(c.clock)),_("div.muted.hint",M("When it runs out the round is finished and the highest net worth wins."))),_("label.check",_("input",{type:"checkbox",checked:c.inflation,disabled:!n,onchange:g=>h({inflation:g.target.checked})}),` ${M("Enflasyon: from round {r}, rents, fares and taxes go up {pct}% every {n} rounds",{r:u.inflation.start,pct:Math.round(u.inflation.step*100),n:u.inflation.every})}`),_("label.check",_("input",{type:"checkbox",checked:c.auctions,disabled:!n,onchange:g=>h({auctions:g.target.checked})}),` ${M("Auction spaces nobody buys")}`),_("label.check",_("input",{type:"checkbox",checked:c.jackpot,disabled:!n,onchange:g=>h({jackpot:g.target.checked})}),` ${M("Taxes and fines go into a pot on {tile}",{tile:ct((u.tiles[u.parkTile]||{}).name)})}`),n&&N.mode==="server"?_("label.check",_("input",{type:"checkbox",checked:e.listed,onchange:g=>Ze({t:"settings",listed:g.target.checked})}),` ${M("Show this room in the room list")}`):null),_("div.btnrow.chat",Lr.slice(0,4).map((g,m)=>_("button.small.ghost",{onclick:()=>Ze({t:"chat",n:m})},M(g)))),_("div.btnrow.end",_("button",{onclick:i.leave},M("Leave")),n?_("button.primary",{disabled:r.length<Ji,onclick:()=>Ze({t:"start"})},r.length<Ji?M("Waiting for players ({n}/{m})",{n:r.length,m:Ji}):M("Start the game")):_("span.muted",M("The host starts the game.")))))}$i();bn();$i();bn();Es();function Yv(i,e){let t=ht(),n=Object.keys(t.groups);return Object.entries(i.props).filter(([,r])=>r.owner===e).map(([r])=>+r).sort((r,a)=>n.indexOf(t.tiles[r].group)-n.indexOf(t.tiles[a].group)||r-a)}var $v=(i,e)=>dt(ht(),e).some(t=>i.props[t]&&i.props[t].level>0),Zv={loan:{label:"Loan",hint:"You hand over cash now; they pay it back each turn",make:()=>({payerMe:!1,actor:"them",event:"turn",where:"any",owner:"any",kind:"fixed",value:60,times:6,rounds:0}),cash:300},share:{label:"Rent share",hint:"They pay you a cut of the rent they collect",make:()=>({payerMe:!1,actor:"any",event:"rent",where:"any",owner:"them",kind:"percent",value:25,times:0,rounds:10})},free:{label:"Rent exemption",hint:"They refund the rent you pay them",make:()=>({payerMe:!1,actor:"me",event:"rent",where:"any",owner:"them",kind:"percent",value:100,times:0,rounds:0})},toll:{label:"Start toll",hint:"They pay you each time they pass Start",make:()=>({payerMe:!1,actor:"them",event:"passStart",where:"any",owner:"any",kind:"fixed",value:20,times:0,rounds:0})},custom:{label:"Custom",hint:"Any event, any amount",make:()=>({payerMe:!0,actor:"me",event:"land",where:"any",owner:"any",kind:"fixed",value:50,times:3,rounds:0})}};function tf(i){let e=t=>t==="any"?"any":t==="me"===i.payerMe?"payer":"payee";return{payer:i.payerMe?"from":"to",event:i.event,actor:e(i.actor),where:i.where,owner:e(i.owner),kind:i.kind,value:i.value,times:i.times,rounds:i.rounds}}function Kv(i,e){let t=i.payer==="from"===e,n=r=>r==="any"?"any":r==="payer"===t?"me":"them";return{payerMe:t,actor:n(i.actor),event:i.event,where:i.where,owner:n(i.owner),kind:i.kind,value:i.value,times:i.times,rounds:i.rounds}}function Jv(i){let e=ht(),t=Object.keys(e.groups).map(r=>[`g:${r}`,M("any {group} space",{group:Mi(r)})]),n=e.tiles.filter(r=>i==="land"?!0:Gn(r)).map(r=>[`t:${r.index}`,pt(r.index)]);return{opts:[["any",M("any space")]],groups:t,tiles:n}}function Mr(i,e,t,n=""){let r=_("select",{class:n,onchange:s=>t(s.target.value)}),a=(s,[o,l])=>s.appendChild(_("option",{value:o,selected:o===i},l));for(let s of e)if(s.group){let o=_("optgroup",{label:s.group});s.items.forEach(l=>a(o,l)),r.appendChild(o)}else a(r,s);return r}function vs(i,e,t,n,r=""){return _("input",{type:"number",class:r,min:e,max:t,value:i,inputmode:"numeric",oninput:a=>n(Math.max(e,Math.min(t,Math.floor(Number(a.target.value)||0))))})}function hl(i,e=null){let t=N.game;if(!t)return;let n=t.players.filter(m=>!m.out&&m.id!==N.you);if(!n.length)return;let r={other:i&&n.some(m=>m.id===i)?i:n[0].id,give:{cash:0,tiles:new Set,free:0},get:{cash:0,tiles:new Set,free:0},clauses:[],cancels:new Set,counter:null};e&&(r.other=e.from,r.counter=e.id,r.give={cash:e.get.cash,tiles:new Set(e.get.tiles),free:e.get.free},r.get={cash:e.give.cash,tiles:new Set(e.give.tiles),free:e.give.free},r.clauses=e.clauses.map(m=>Kv(m,!1)),r.cancels=new Set(e.cancels));let a=_("div.trade"),s=Pn(a,{wide:!0}),o=()=>ht().currency==="simit"?"simit":"$",l=()=>{let m=N.game;if(!m||m.phase!=="play"){s.close();return}let y=on(N.you),v=on(r.other);if(!y||!v||v.out){s.close();return}Ft(a,_("h2",M("Make an offer to")," ",Mr(r.other,n.map(x=>[x.id,`${kn[x.token]||""} ${x.name}`]),x=>{r.other=x,r.get={cash:0,tiles:new Set,free:0},r.cancels.clear(),l()},"inline")),_("div.sides",c(M("You give"),y,r.give,m),c(M("{p} gives",{p:v.name}),v,r.get,m)),h(m,y,v),p()),d()},c=(m,y,v,x)=>{let b=Yv(x,y.id),P=ht();return _("div.side",_("h3",m,_("span.muted",` \xB7 ${M("has {amt}",{amt:Ee(y.cash)})}`)),_("label.row",M("Cash now")," ",vs(v.cash,0,Math.max(0,y.cash),T=>{v.cash=T,f()},"cash")),b.length?_("div.chips",b.map(T=>{let L=P.tiles[T],z=x.props[T],F=L.kind==="lot"&&$v(x,L.group);return _("button.chip",{class:(v.tiles.has(T)?"on":"")+(F?" blocked":""),title:F?M("Sell the buildings on this set first"):"",disabled:F,style:{"--c":P.groups[L.group].color},onclick:()=>{v.tiles.has(T)?v.tiles.delete(T):v.tiles.add(T),l()}},pt(T),z.mortgaged?_("em",` (${M("mortgaged")})`):null)})):_("p.muted",M("No spaces")),y.free?_("label.row",ct(P.freeCard)," ",vs(v.free,0,y.free,T=>{v.free=T,f()})):null)},h=(m,y,v)=>{let x=m.contracts.filter(b=>[b.payer,b.payee].includes(y.id)&&[b.payer,b.payee].includes(v.id));return _("div.clauses",_("h3",M("Clauses")," ",_("span.muted",M("\u2014 payments the game makes by itself whenever something happens"))),r.clauses.map((b,P)=>u(b,P,v)),r.clauses.length&&m.settings.inflation&&r.clauses.some(b=>b.kind==="fixed")?_("p.note","\u{1F4C8} ",M("Fixed amounts don\u2019t keep up with Enflasyon \u2013 percentages do.")):null,r.clauses.length<ka?_("div.presets",_("span.muted",`${M("Add")}: `),Object.values(Zv).map(b=>_("button.small",{title:M(b.hint),onclick:()=>{r.clauses.push(b.make()),b.cash&&!r.give.cash&&(r.give.cash=Math.min(b.cash,Math.max(0,y.cash))),l()}},`+ ${M(b.label)}`))):null,x.length?_("div.cancels",_("h4",M("Tear up an existing clause as part of this deal")),x.map(b=>_("label.check",_("input",{type:"checkbox",checked:r.cancels.has(b.id),onchange:P=>{P.target.checked?r.cancels.add(b.id):r.cancels.delete(b.id),f()}}),` #${b.id}: ${Qn(b)}`))):null)},u=(m,y,v)=>{let x=ji[m.event],b=Jv(m.event),P=L=>z=>{m[L]=z,L==="event"&&(m.where="any",ji[z].amount||(m.kind="fixed")),l()},T=[["me",M("I")],["them",v.name],["any",M("anyone")]];return _("div.clause",_("div.line",Mr(m.payerMe?"me":"them",[["me",M("I")],["them",v.name]],L=>{m.payerMe=L==="me",l()}),_("span",` ${M("pay")} `),vs(m.value,1,m.kind==="percent"?100:5e3,L=>{m.value=L,d()},"amt"),x.amount?Mr(m.kind,[["fixed",o()],["percent",M("% of it")]],P("kind")):_("span",` ${o()}`),_("span",` ${M("each time")} `),Mr(m.actor,T,P("actor")),Mr(m.event,Object.entries(ji).map(([L,z])=>[L,ct(z.label)]),P("event")),x.owner?[_("span",` ${M("to")} `),Mr(m.owner,[["them",v.name],["me",M("me")],["any",M("anyone")]],P("owner"))]:null,x.where?[_("span",m.event==="rent"?` ${M("on")} `:" "),Mr(m.where,[...b.opts,{group:M("Sets"),items:b.groups},{group:M("Spaces"),items:b.tiles}],P("where"))]:null,_("button.icon",{title:M("Remove"),onclick:()=>{r.clauses.splice(y,1),l()}},"\u2715")),_("div.line.limits",_("label",`${M("at most")} `,vs(m.times,0,99,L=>{m.times=L,d()},"tiny"),` ${M("times")}`),_("label",` \xB7 ${M("for")} `,vs(m.rounds,0,99,L=>{m.rounds=L,d()},"tiny"),` ${M("rounds")}`),_("span.muted",`  ${M("(0 = no limit)")}`)),_("div.say",{"data-k":y},""))},d=()=>{a.querySelectorAll(".say").forEach(m=>{let y=r.clauses[+m.dataset.k];y&&(m.textContent=`\u201C${Qn(tf(y),La(),N.you,r.other)}.\u201D`)}),f()},p=()=>_("div.foot",_("div.summary"),_("div.btns",_("button",{onclick:()=>s.close()},M("Cancel")),_("button.primary",{onclick:g},r.counter?M("Send counter-offer"):M("Send offer")))),f=()=>{let m=a.querySelector(".summary");if(!m)return;let y=r.give.cash+r.get.cash+r.give.tiles.size+r.get.tiles.size+r.give.free+r.get.free+r.clauses.length+r.cancels.size;m.textContent=y?"":M("Add something to the offer.")},g=()=>{st({type:"offer",to:r.other,give:{cash:r.give.cash,tiles:[...r.give.tiles],free:r.give.free},get:{cash:r.get.cash,tiles:[...r.get.tiles],free:r.get.free},clauses:r.clauses.map(tf),cancels:[...r.cancels],counter:r.counter||void 0}),s.close()};l()}function Qv(i){let e=i.from===N.you,t=ht(),n=a=>[a.cash?Ee(a.cash):null,...a.tiles.map(s=>pt(s)),a.free?`${a.free} \xD7 ${ct(t.freeCard)}`:null].filter(Boolean).join(", ")||M("nothing"),r=(a,s)=>a?M("You give"):M("{p} gives",{p:s});return[_("div.ol",_("b",`${r(e,Ia(i.from))}: `),n(i.give)),_("div.ol",_("b",`${r(!e,Ia(i.to))}: `),n(i.get)),i.clauses.map(a=>_("div.ol.clause-text","\xA7 ",Qn(a,La(),i.from,i.to))),i.cancels.map(a=>_("div.ol.clause-text",`\u2702 ${M("Tear up clause #{id}",{id:a})}`))]}function nf(){let i=N.game;return!i||i.phase!=="play"?[]:i.trades.map(e=>{let t=e.to===N.you,n=on(t?e.from:e.to);return _("div.offer",{class:t?"in":"out"},_("div.oh",t?M("Offer from {p}",{p:n.name}):M("Your offer to {p}",{p:n.name})),Qv(e),_("div.btns",t?[_("button.small",{onclick:()=>st({type:"reject",id:e.id})},M("Decline")),_("button.small",{onclick:()=>hl(null,e)},M("Counter")),_("button.small.primary",{onclick:()=>st({type:"accept",id:e.id})},M("Accept"))]:[_("span.muted",`${M("Waiting\u2026")} `),_("button.small",{onclick:()=>st({type:"withdraw",id:e.id})},M("Withdraw"))]))})}var sf=i=>i===Kt?M("tower"):i===1?M("1 floor"):i?M("{n} floors",{n:i}):"",of=()=>Object.keys(ht().groups),rf=(i,e,t)=>dt(ht(),t).filter(n=>i.props[n]&&i.props[n].owner===e).length;function lf(){let i=N.game,e=i.players[i.turn];return _("div.players",i.players.map(t=>{let n=N.room.members.find(o=>o.id===t.id),r=n?n.online:!1,a=t.id===N.you,s=Object.values(i.props).filter(o=>o.owner===t.id).length;return _("div.pcard",{class:[t===e&&i.phase==="play"?"turn":"",t.out?"out":"",a?"mine":""].join(" "),style:{"--c":t.color},"data-id":t.id},_("div.ptoken",kn[t.token]||"\u25CF"),_("div.pmain",_("div.pname",t.name,n&&n.bot?_("span.botbadge"," AI"):null,a?_("span.you",` ${M("you")}`):null,N.room.host===t.id?_("span.crown",{title:M("Host")}," \u265B"):null),_("div.pcash",{class:t.cash<0?"neg":""},t.out?M("bankrupt"):Ee(t.cash),t.out?null:_("span.muted",` \xB7 ${M("worth {amt}",{amt:Ee(ei(i,t.id))})} \xB7 ${s===1?M("1 space"):M("{n} spaces",{n:s})}`)),t.out?null:ex(i,t.id),_("div.badges",!r&&!t.out?_("span.badge.off",M("offline")):null,n&&n.ai&&!t.out?_("span.badge.ai",M("AI playing for them")):null,t.inJail?_("span.badge.jail",M("in {tile}",{tile:pt(ht().jailTile)})):null,t.cash<0&&!t.out?_("span.badge.debt",M("in debt")):null,t.free?_("span.badge",`${t.free} \xD7 ${ct(ht().freeCard)}`):null)),_("div.pside",!a&&!t.out&&Vn()&&!Vn().out&&i.phase==="play"?_("button.small",{onclick:()=>hl(t.id)},M("Trade")):null,qi()&&!a&&!t.out&&i.phase==="play"&&!r&&n&&!n.ai?_("button.small",{title:M("Let the AI play their turns until they come back"),onclick:()=>Ze({t:"aiPlay",id:t.id})},M("AI plays")):null,qi()&&!a&&!t.out&&i.phase==="play"&&!r?_("button.small.danger",{title:M("Remove this player (their assets go back to the bank)"),onclick:()=>{confirm(M("Remove {p} from the game? Everything they own goes back to the bank.",{p:t.name}))&&Ze({t:"kick",id:t.id})}},M("Remove")):null),_("div.bubble"))}))}function ex(i,e){let t=ht();return _("div.strip",of().map(n=>_("span.sset",dt(t,n).map(r=>{let a=i.props[r],s=a&&a.owner===e;return _("i.sq",{class:(s?"own":"")+(s&&a.mortgaged?" mort":"")+(s&&a.level===Kt?" tower":""),style:{"--c":t.groups[n].color},title:`${pt(r)}${s?a.mortgaged?` (${M("mortgaged")})`:a.level?` \u2013 ${sf(a.level)}`:"":""}`,"data-l":s&&a.level&&a.level<Kt?"\u2022".repeat(a.level):null,onclick:o=>{o.stopPropagation(),ba(r)}})}))))}function cf(){let i=N.game,e=Vn(),t=i.players[i.turn],n=i.t,r=ht(),a=e&&t.id===e.id&&!e.out,s=_("div.actions"),o=_("div.dice-readout",i.dice?`\u{1F3B2} ${i.dice[0]} + ${i.dice[1]}`:""),l=ks(i),c=(i.settings.timer||0)*1e3,h=p=>n.deadline&&l===p?Rs(n.deadline,c):null,u=n.deadline&&l?Rs(n.deadline,c,"bar"):null;if(i.auction)Ot(s,_("div.status",`\u{1F528} ${M("Auction in progress")}`),_("div.status.sub",M("Bid in the panel in the middle of the screen.")));else if(!e||e.out)Ot(s,_("div.status",e?M("You are out of the game \u2013 watching."):M("You are watching this game.")),_("div.status.sub",M("{p}'s turn",{p:t.name})),u);else if(a){let p=_("div.btnrow");if(e.cash<0)Ot(s,_("div.status.warn",M("You are {amt} short. Mortgage, sell floors or trade \u2013 or give up.",{amt:Ee(-e.cash)}))),Ot(p,_("button",{onclick:af},M("My assets")),_("button.danger",{onclick:()=>{confirm(M("Declare bankruptcy? You leave the game."))&&st({type:"bankrupt"})}},M("Declare bankruptcy")));else if(n.pending&&n.pending.kind==="buy"){let f=r.tiles[n.pending.tile];Ot(s,_("div.status",M("{tile} is for sale.",{tile:pt(f.index)}))),Ot(p,_("button.primary",{onclick:()=>st({type:"buy"}),disabled:e.cash<f.price},M("Buy for {amt}",{amt:Ee(f.price)})),_("button",{onclick:()=>st({type:"decline"})},i.settings.auctions?M("Auction it"):M("Pass"),h("decline")),_("button.small",{onclick:()=>ba(f.index)},M("Details")))}else if(n.pending&&n.pending.kind==="ride"){let f=n.pending,g=r.tiles[f.tile],m=i.props[f.tile],y=m&&m.owner===e.id;Ot(s,_("div.status",`${Lu(g.vehicle)} ${M("Ride {line} on to {tile}?",{line:pt(f.tile),tile:pt(f.to)})}`),_("div.status.sub",y?M("It\u2019s your own line \u2013 the ride is free."):M("Fare {amt}, to {who}.",{amt:Ee(f.fare),who:m&&!m.mortgaged?on(m.owner).name:M("the bank")}))),Ot(p,_("button.primary",{onclick:()=>st({type:"ride"}),disabled:!y&&e.cash<f.fare},M("Ride"),y?"":` \xB7 ${Ee(f.fare)}`),_("button",{onclick:()=>st({type:"stay"})},M("Stay"),h("stay")))}else e.inJail&&!n.rolled?(Ot(s,_("div.status",M("You are in {tile} (try {n} of 3).",{tile:pt(r.jailTile),n:e.jailTurns+1}))),Ot(p,_("button.primary",{onclick:()=>st({type:"roll"})},M("Roll for doubles"),h("roll")),_("button",{onclick:()=>st({type:"payFine"}),disabled:e.cash<r.jailFine},M("Pay {amt}",{amt:Ee(r.jailFine)})),e.free?_("button",{onclick:()=>st({type:"useCard"})},M("Use {card}",{card:ct(r.freeCard)})):null)):!n.rolled||n.again?(Ot(s,_("div.status",n.again?M("Doubles \u2013 roll again!"):M("Your turn \u2013 click the dice or the button."))),Ot(p,_("button.primary.big",{onclick:()=>st({type:"roll"})},n.again?M("Roll again"):M("Roll the dice"),h("roll")))):(Ot(s,_("div.status",M("Build, trade \u2013 or end your turn."))),Ot(p,_("button.primary.big",{onclick:()=>st({type:"end"})},M("End turn"),h("end"))));Ot(s,p,u)}else Ot(s,_("div.status",M("{p}'s turn",{p:t.name}),_("span.dots")),u),e.cash<0&&Ot(s,_("div.status.warn",M("You are {amt} short \u2013 raise money before your turn.",{amt:Ee(-e.cash)})));let d=[];return i.infl&&i.infl>1&&d.push(_("span.infl",{title:M("Rents, fares and taxes are up this much")},`\u{1F4C8} +${Math.round((i.infl-1)*100)}%`)),i.endsAt&&d.push(_("span.clockwrap",{title:M("Game clock")},i.lastRound?`\u23F1 ${M("last round")}`:["\u23F1 ",_("span.clock",{"data-deadline":i.endsAt,"data-total":i.settings.clock*6e4})])),Ot(s,_("div.btnrow.tools",o,d,e&&!e.out?_("button.small",{onclick:()=>hl(null)},M("Trade")):null,e&&!e.out?_("button.small",{onclick:af},M("My assets")):null,_("button.small",{onclick:nx},`${M("Clauses")}${i.contracts.length?` (${i.contracts.length})`:""}`),_("button.small",{onclick:tx},"\u{1F4AC}"))),s}var Lu=i=>({ferry:"\u26F4\uFE0F",train:"\u{1F686}",metro:"\u{1F687}",cablecar:"\u{1F6A1}",tram:"\u{1F68A}",funicular:"\u{1F69E}"})[i]||"\u{1F68C}";function hf(i){let e=ht(),t=e.tiles[i],n=N.game,r=s=>n?pn(n,s):s;return t.kind==="lot"?[[M("Rent"),r(t.rents[0])],[M("Full set"),r(t.rents[0]*2)],[M("1 floor"),r(t.rents[1])],[M("4 floors"),r(t.rents[4])],[M("Tower"),r(t.rents[5])]]:t.kind==="transit"?e.transitRent.slice(1).map((s,o)=>[o?M("{n} lines",{n:o+1}):M("1 line"),r(s)]):(t.kind==="shop"?e.shopMult:e.utilityMult).slice(1).map((s,o)=>[o?M("{n} owned",{n:o+1}):M("1 owned"),M("{n}\xD7 dice",{n:s})])}function Iu(i,e={}){let t=ht(),n=t.tiles[i],r=t.groups[n.group],a=N.game,s=a&&a.props[i],o=s?s.level:0;return _("div.deed",{class:[e.cls||"",s&&s.mortgaged?"mortgaged":"",e.ghost?"ghost":""].join(" "),style:{"--c":r.color},onclick:e.onclick},_("div.deed-band",_("span.deed-set",ct(r.name)),o?_("span.deed-lvl",o===Kt?"\u{1F3E2}":"\u{1F3E0}".repeat(o)):null),_("div.deed-name",pt(i)),e.compact?_("div.deed-price",e.note||Ee(n.price)):[_("div.deed-price",M("List price {amt}",{amt:Ee(n.price)})),_("table.deed-rents",hf(i).map(([l,c])=>_("tr",_("td",l),_("td",typeof c=="number"?Ee(c):c))))],s&&s.mortgaged?_("div.deed-stamp",M("MORTGAGED")):null,e.extra||null)}var ul={tile:-1,value:0};function uf(){let i=N.game,e=i.auction;if(!e||i.phase!=="play")return null;let t=Vn(),n=ht().tiles[e.tile],r=e.bidder?on(e.bidder):null,a=t&&!t.out,s=t&&e.passed.includes(t.id),o=Math.max(1,e.endsAt-(e.startedAt||e.endsAt-15e3)),l=ul.tile===e.tile&&ul.value>e.high?ul.value:e.high+10,c=_("input.bid",{type:"number",min:e.high+1,value:l,inputmode:"numeric",oninput:f=>{ul={tile:e.tile,value:Number(f.target.value)}}}),h=_("div.ring",{"data-deadline":e.endsAt,"data-total":Math.min(o,15e3)});h.innerHTML='<svg viewBox="0 0 100 100"><circle class="ring-bg" cx="50" cy="50" r="45"/><circle class="ring-fg" cx="50" cy="50" r="45"/></svg><div class="ring-t"></div>';let u=i.players.filter(f=>!f.out),d=[...e.bids||[]].reverse(),p=f=>f.id===N.you?M("You"):f.name;return _("div.auction-stage",_("div.as-head",_("span.gavel","\u{1F528}"),M("AUCTION")),_("div.as-body",Iu(e.tile,{cls:"big"}),_("div.as-mid",_("div.as-bidlabel",r?M("Highest bid"):M("Opening bid")),_("div.as-bid",{class:r?"has":""},r?Ee(e.high):"\u2014"),r?_("div.as-bidder",{style:{"--c":r.color}},_("span.tk",kn[r.token]||"\u25CF"),p(r)):_("div.as-bidder.none",M("List price {amt}",{amt:Ee(n.price)})),h,_("div.as-players",u.map(f=>_("span.as-pl",{class:f.id===e.bidder?"lead":e.passed.includes(f.id)?"out":"",style:{"--c":f.color},title:f.id===e.bidder?M("Highest bidder"):e.passed.includes(f.id)?M("Passed"):M("Still in")},kn[f.token]||"\u25CF"," ",p(f))))),_("div.as-history",_("div.as-ht",M("Bids")),d.length?d.map((f,g)=>{let m=on(f.p);return _("div.as-hrow",{class:g===0?"new":"",style:{"--c":m?m.color:"#888"}},_("span",m?p(m):"?"),_("b",Ee(f.amount)))}):_("div.muted",M("No bids yet")))),a?_("div.as-controls",[10,50,100].map(f=>_("button.bidbtn",{disabled:t.cash<e.high+f||e.bidder===t.id,onclick:()=>st({type:"bid",amount:e.high+f})},`+${f}`,_("small",Ee(e.high+f)))),_("span.as-custom",c,_("button.primary",{disabled:e.bidder===t.id,onclick:()=>st({type:"bid",amount:Number(c.value)})},M("Bid"))),e.bidder!==t.id?_("button.pass",{disabled:s,onclick:()=>st({type:"pass"})},s?M("Passed"):M("Pass")):_("span.as-lead",M("You lead!")),_("div.as-cash",M("You have {amt}",{amt:Ee(Math.max(0,t.cash))}))):null)}function tx(i){let e=i.currentTarget.getBoundingClientRect(),t=_("div.chatmenu",{style:{left:`${Math.max(8,e.left-120)}px`,bottom:`${innerHeight-e.top+6}px`}},Lr.map((n,r)=>_("button.small",{onclick:()=>{Ze({t:"chat",n:r}),t.remove()}},M(n))));document.body.appendChild(t),setTimeout(()=>document.addEventListener("pointerdown",n=>{t.contains(n.target)||t.remove()},{once:!0}),0)}function df(i,e){let t=document.querySelector(`.pcard[data-id="${i}"] .bubble`)||document.querySelector(`.member[data-id="${i}"] .bubble`),n=Lr[e];!n||!t||(t.textContent=M(n),t.classList.add("show"),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove("show"),3500))}var xi=null;function ba(i){if(i<0)return;xi&&xi.m.close();let e=_("div.tilecard"),t=Pn(e,{onclose:()=>{xi&&xi.m===t&&(xi=null),N.view&&N.view.select(-1)}});xi={i,m:t,body:e},N.view&&N.view.select(i),pf()}function pf(){if(!xi)return;let{i,body:e}=xi,t=ht(),n=t.tiles[i],r=N.game;if(!n){xi.m.close();return}let a=r&&r.props[i],s=a?on(a.owner):null,o=s&&s.id===N.you,l=n.group&&t.groups[n.group],c=[],h=m=>r?pn(r,m):m;if(n.kind==="lot"){let m=[M("Rent"),M("1 floor"),M("2 floors"),M("3 floors"),M("4 floors"),M("Tower")];n.rents.forEach((y,v)=>c.push([m[v]+(v===0?` ${M("(\xD72 with the full set)")}`:""),Ee(h(y)),a&&a.level===v&&!a.mortgaged])),c.push([M("Each floor / the tower costs"),Ee(l.build)])}else if(Gn(n))for(let[m,y]of hf(i))c.push([m,typeof y=="number"?Ee(y):y]);Gn(n)&&c.push([M("Mortgage value"),Ee(Jn(n))]);let u={start:M("Collect {amt} each time you pass or land here.",{amt:Ee(t.salary)}),jail:M("Sent here? Roll doubles, pay {amt} or use a card to get out. Otherwise just visiting.",{amt:Ee(t.jailFine)}),park:r&&r.settings.jackpot?M("The pot holds {amt} \u2013 land here to take it.",{amt:Ee(r.pot)}):M("Nothing happens here. Enjoy the view."),gotojail:M("Go straight to {tile}. No salary.",{tile:pt(t.jailTile)}),card:M("Draw a {deck} card.",{deck:ct((t.decks[n.deck]||{}).name)}),tax:M("Pay {amt}.",{amt:Ee(h(n.amount||0))}),transit:t.ride?M("Landed here? You may ride on to the next line for {amt}, paid to the owner.",{amt:Ee(h(t.ride.fare))}):"",shop:ct(n.quip)}[n.kind],d=r?r.players.filter(m=>!m.out&&m.pos===i):[],p=r?r.contracts.filter(m=>m.where===`t:${i}`||n.group&&m.where===`g:${n.group}`):[],f=r&&a&&!a.mortgaged?wi(r,i,7):0,g=[];if(o&&r.phase==="play"){let m=dt(t,n.group).every(y=>r.props[y]&&r.props[y].owner===N.you);n.kind==="lot"&&m&&!a.mortgaged&&a.level<Kt&&g.push(_("button.primary",{onclick:()=>st({type:"build",tile:i})},a.level===Kt-1?M("Build tower ({amt})",{amt:Ee(l.build)}):M("Build floor ({amt})",{amt:Ee(l.build)}))),a.level&&g.push(_("button",{onclick:()=>st({type:"sell",tile:i})},M("Sell a floor (+{amt})",{amt:Ee(l.build/2)}))),!a.mortgaged&&!a.level&&g.push(_("button",{onclick:()=>st({type:"mortgage",tile:i})},M("Mortgage (+{amt})",{amt:Ee(Jn(n))}))),a.mortgaged&&g.push(_("button",{onclick:()=>st({type:"unmortgage",tile:i})},M("Pay off mortgage ({amt})",{amt:Ee(Wi(n))})))}Ft(e,_("div.th",{style:{"--c":l?l.color:"#556"}},_("div.tgroup",l?ct(l.name):""),_("h2",pt(i)),n.note?_("div.tprice",ct(n.note)):null,n.price?_("div.tprice",M("Price {amt}",{amt:Ee(n.price)})):null),u?_("p",u):null,c.length?_("table.rents",c.map(([m,y,v])=>_("tr",{class:v?"on":""},_("td",m),_("td",y)))):null,Gn(n)?_("p.owner",s?[_("span.dot",{style:{background:s.color}}),` ${M("Owned by {p}",{p:s.id===N.you?M("you"):s.name})}`,a.level?` \xB7 ${sf(a.level)}`:"",a.mortgaged?` \xB7 ${M("mortgaged")}`:"",f&&n.kind==="lot"?` \xB7 ${M("rent now {amt}",{amt:Ee(f)})}`:"",f&&n.kind==="transit"?` \xB7 ${M("rent now {amt}",{amt:Ee(f)})}`:""]:M("Owned by the bank \u2013 for sale.")):null,d.length?_("p.muted",`${M("Here now")}: ${d.map(m=>m.name).join(", ")}`):null,p.length?_("div.tclauses",_("h4",M("Clauses about this space")),p.map(m=>_("div.ol.clause-text",`#${m.id} `,Qn(m)))):null,g.length?_("div.btnrow",g):null)}var wr=null;function af(){wr&&wr.m.close();let i=_("div.assets");wr={m:Pn(i,{wide:!0,onclose:()=>{wr=null,N.view&&N.view.showOwned(null)}}),body:i},mf()}function mf(){if(!wr)return;let i=N.game,e=Vn(),t=ht();if(!i||!e){wr.m.close();return}let n=Object.keys(i.props).map(Number).filter(l=>i.props[l].owner===e.id);N.view&&N.view.showOwned(n,e.color);let r=n.reduce((l,c)=>l+i.props[c].level*t.groups[t.tiles[c].group].build/2,0),a=of().filter(l=>dt(t,l).some(c=>i.props[c]&&i.props[c].owner===e.id)),s=a.filter(l=>t.groups[l].build&&dt(t,l).every(c=>i.props[c]&&i.props[c].owner===e.id)),o=(l,c,h="")=>_("div.stat",{class:h},_("div.sv",c),_("div.sl",l));Ft(wr.body,_("h2",M("My assets")),_("div.stats",o(M("Cash"),Ee(e.cash),e.cash<0?"neg":""),o(M("Net worth"),Ee(ei(i,e.id))),o(M("Spaces"),String(n.length)),o(M("Full sets"),String(s.length)),o(M("Buildings"),r?`${Ee(r)}`:"\u2014"),e.free?o(ct(t.freeCard),String(e.free)):null),a.length?_("div.sets",a.map(l=>{let c=dt(t,l),h=rf(i,e.id,l),u=h===c.length;return _("div.setcol",{style:{"--c":t.groups[l].color}},_("div.set-head",Mi(l),_("span.set-count",{class:u?"full":""},u?`\u2605 ${M("full set")}`:`${h}/${c.length}`)),c.map(d=>{let p=t.tiles[d],f=i.props[d];if(!f||f.owner!==e.id){let x=f?on(f.owner):null;return Iu(d,{compact:!0,ghost:!0,note:x?M("owned by {p}",{p:x.name}):M("still for sale"),onclick:()=>ba(d)})}let g=t.groups[p.group],m=[p.kind==="lot"&&u&&!f.mortgaged&&f.level<Kt?_("button.small.primary",{onclick:x=>{x.stopPropagation(),st({type:"build",tile:d})}},`+${f.level===Kt-1?"\u{1F3E2}":"\u{1F3E0}"} ${Ee(g.build)}`):null,f.level?_("button.small",{onclick:x=>{x.stopPropagation(),st({type:"sell",tile:d})}},`\u2212\u{1F3E0} +${Ee(g.build/2)}`):null,!f.mortgaged&&!c.some(x=>i.props[x]&&i.props[x].level>0)?_("button.small",{onclick:x=>{x.stopPropagation(),st({type:"mortgage",tile:d})}},M("Mortgage +{amt}",{amt:Ee(Jn(p))})):null,f.mortgaged?_("button.small",{onclick:x=>{x.stopPropagation(),st({type:"unmortgage",tile:d})}},M("Redeem {amt}",{amt:Ee(Wi(p))})):null],y=p.kind==="shop"?t.shopMult:t.utilityMult,v=f.mortgaged?M("no rent"):p.kind==="shop"||p.kind==="utility"?M("rent {n}\xD7 dice",{n:Math.round(y[rf(i,e.id,p.group)]*(i.infl||1)*10)/10}):M("rent now {amt}",{amt:Ee(wi(i,d,7))});return Iu(d,{compact:!0,note:v,onclick:()=>ba(d),extra:_("div.deed-btns",m)})}))})):_("p.muted",M("You own no spaces yet. Land on one and buy it, win an auction, or trade for one.")),_("div.btnrow",_("button.small.danger",{onclick:()=>{confirm(M("Leave the game for good? Everything you own goes back to the bank."))&&st({type:"resign"})}},M("Resign from the game"))))}var Sr=null;function nx(){Sr&&Sr.m.close();let i=_("div.ledger");Sr={m:Pn(i,{wide:!0,onclose:()=>{Sr=null}}),body:i},ff()}function ff(){if(!Sr)return;let i=N.game;if(!i){Sr.m.close();return}Ft(Sr.body,_("h2",M("Clauses in force")),_("p.muted",M("Payments players agreed on in trades. The game pays them automatically whenever their event happens. To end one early, tear it up as part of a new trade between the same two players.")),i.contracts.length?i.contracts.map(e=>_("div.contract",_("div.cid",`#${e.id}`),_("div",_("div",Qn(e)),_("div.muted",[M("since round {n}",{n:e.since}),M("paid {n}\xD7",{n:e.fired}),M("{amt} so far",{amt:Ee(e.paid)}),e.timesLeft?M("{n} left",{n:e.timesLeft}):null,e.untilRound?M("ends after round {n}",{n:e.untilRound}):null].filter(Boolean).join(" \xB7 "))))):_("p",M("No clauses yet. Add some to a trade: loans, rent shares, exemptions, tolls\u2026")))}function gf(){let i=N.game,e=_("div.log",i.log.slice(-60).map(t=>_("div.ll",{class:(t.k||"").startsWith("\u2014")?"round":(t.k||"").startsWith("ENFLASYON")?"infl":""},Cl(t))));return requestAnimationFrame(()=>{e.scrollTop=e.scrollHeight}),e}function yf(){let i=nf();return i.length?_("div.offers",i):_("div.offers")}function vf(){let i=N.game,e=on(i.winner),t=[...i.players].sort((n,r)=>n.out-r.out||ei(i,r.id)-ei(i,n.id));return _("div.screen.over",_("div.card",_("h1",e?`${kn[e.token]||""} ${e.id===N.you?M("You win!"):M("{p} wins!",{p:e.name})}`:M("Game over")),i.lastRound?_("p.muted",M("The clock ran out \u2013 the highest net worth wins.")):null,_("ol.standings",t.map(n=>_("li",n.name,_("span.muted",n.out?` \u2013 ${M("bankrupt")}`:` \u2013 ${M("worth {amt}",{amt:Ee(ei(i,n.id))})}`)))),_("div.btnrow",qi()?_("button.primary",{onclick:()=>Ze({t:"lobby"})},M("Back to the table")):_("span.muted",M("The host can start a new game.")))))}var xf=()=>{pf(),mf(),ff()};$i();Pa();bn();var _f={M3:{en:"polished, authoritative male",tr:"zarif, otoriter erkek"},M2:{en:"deep, calm, serious male",tr:"derin, sakin, ciddi erkek"},F3:{en:"clear, professional announcer",tr:"net, profesyonel spiker kad\u0131n"},F1:{en:"calm, slightly low female",tr:"sakin, hafif pes kad\u0131n"},M5:{en:"warm storyteller male",tr:"s\u0131cak, hik\xE2yeci erkek"}},ix=6,rx=.98,ax=400,sx=15e3,Ma={get(i,e){try{let t=localStorage.getItem(`parcel.narrator.${i}`);return t===null?e:t}catch{return e}},set(i,e){try{localStorage.setItem(`parcel.narrator.${i}`,e)}catch{}}},Mf={\u00E7:"ch",\u00C7:"Ch",\u015F:"sh",\u015E:"Sh",\u011F:"",\u011E:"",\u0131:"i",\u0130:"I",\u00F6:"o",\u00D6:"O",\u00FC:"u",\u00DC:"U",\u00E2:"a",\u00EE:"i",\u00FB:"u"};function ox(i,e=xt){let t=String(i).replace(//g," simit").replace(/ /g," ");return t=t.replace(/(\d+)[.,](\d{3})\b/g,"$1$2"),t=t.replace(/%\s?(\d+)|(\d+)\s?%/g,(n,r,a)=>e==="tr"?`y\xFCzde ${r||a}`:`${r||a} percent`),t=t.replace(/\d+/g,n=>md(Number(n),e)),e==="en"&&(t=t.replace(/[çÇşŞğĞıİöÖüÜâîû]/g,n=>Mf[n]).replace(/\bAVM\b/g,"the mall")),t.replace(/[“”"]/g,"").replace(/\s+/g," ").trim()}var lx={Kuzguncuk:"Kuzgunjuk",Sirkeci:"Sirkeji","Ba\u011Fdat Caddesi":"Baadat Jaddesi",Bostanc\u0131:"Bostanji",Cemil:"Jemil",Kapal\u0131\u00E7ar\u015F\u0131:"Kapali-charshi",\u00C7emberlita\u015F:"Chemberlitash",Be\u015Fikta\u015F:"Beshiktash",Ma\u00E7ka:"Machka",Ey\u00FCp:"Eyoop",\u00DCsk\u00FCdar:"Oosk-oodar",Emin\u00F6n\u00FC:"Eminonu",Karak\u00F6y:"Karakoy",G\u00FClhane:"Gulhane",Zab\u0131ta:"Zabita",T\u00FCnel:"Tunel",K\u0131smet:"Kismet",Ay\u015Fe:"Ayshe",Yenik\u00F6y:"Yenikoy",Vanik\u00F6y:"Vanikoy","Anadolu Hisar\u0131":"Anadolu Hisari"},cx=i=>{if(xt!=="en")return String(i);let e=String(i);for(let[t,n]of Object.entries(lx))e=e.split(t).join(n);return e.replace(/[çÇşŞğĞıİöÖüÜâîû]/g,t=>Mf[t])},hx=i=>i[Math.floor(Math.random()*i.length)],bf={start:{en:["Good evening, and welcome to {city}. Tonight, {names} compete for the city. May the shrewdest investor prevail.","Ladies and gentlemen, {city} awaits. {names}, the board is yours."],tr:["\u0130yi ak\u015Famlar, {city} \u015Fehrine ho\u015F geldiniz. Bu ak\u015Fam {names} \u015Fehir i\xE7in yar\u0131\u015F\u0131yor. En kurnaz yat\u0131r\u0131mc\u0131 kazans\u0131n.","Han\u0131mlar beyler, {city} sizi bekliyor. {names}, sahne sizin."]},buy:{en:["{p} acquires {tile}. A tasteful choice.","{p} buys {tile}. Location, location, location.","{tile} now belongs to {p}. Splendid."],tr:["{p}, {tile} karesini sat\u0131n al\u0131yor. Zevkli bir tercih.","{tile} art\u0131k {p} oyuncusunun. Nefis.","{p} yat\u0131r\u0131m\u0131n\u0131 {tile} i\xE7in yapt\u0131. Konum, konum, konum."]},set:{en:["{p} now holds all of {group}. The neighbourhood holds its breath.","A full set for {p}: {group}. Rents are about to rise, I fear."],tr:["{group} grubunun tamam\u0131 art\u0131k {p} oyuncusunda. Mahalle nefesini tuttu.","{p} i\xE7in tam set: {group}. Korkar\u0131m kiralar y\xFCkselmek \xFCzere."]},rent:{en:["{p} pays {amt} simit to {q} for the privilege of {tile}.","An expensive visit. {p} leaves {amt} simit with {q}."],tr:["{p}, {tile} ayr\u0131cal\u0131\u011F\u0131 i\xE7in {q} oyuncusuna {amt} simit \xF6d\xFCyor.","Pahal\u0131 bir ziyaret. {p}, {q} oyuncusuna {amt} simit b\u0131rakt\u0131."]},auction:{en:["Ladies and gentlemen, {tile} goes under the hammer.","An auction! {tile} awaits a bold bidder."],tr:["Han\u0131mlar beyler, {tile} a\xE7\u0131k art\u0131rmada.","A\xE7\u0131k art\u0131rma! {tile} cesur bir teklif bekliyor."]},sold:{en:["Sold, to {p}, for {amt} simit.","Going, going, gone. {tile} to {p}."],tr:["Sat\u0131ld\u0131! {p}, {amt} simit kar\u015F\u0131l\u0131\u011F\u0131nda.","Sat\u0131yorum, sat\u0131yorum\u2026 satt\u0131m! {tile}, {p} oyuncusunun."]},card:{en:["{p} draws from {deck}. {card}"],tr:["{p}, {deck} destesinden \xE7ekiyor. {card}"]},jail:{en:["{p} is escorted to the {jail}. Most regrettable.","Off to the {jail} with {p}. These things happen in the best of families."],tr:["{p}, {jail} yolunda. \xC7ok \xFCz\xFCc\xFC.","{p} do\u011Fruca {jail}. En iyi ailelerde bile olur."]},tower:{en:["{p} raises a plaza on {tile}. The skyline will never be the same."],tr:["{p}, {tile} \xFCzerine bir plaza dikiyor. Sil\xFCet bir daha asla eskisi gibi olmayacak."]},ride:{en:["{p} takes the {line}. How very civilised.","All aboard. {p} rides the {line} to {tile}."],tr:["{p}, {line} ile yola \xE7\u0131k\u0131yor. Ne kadar medeni.","Herkes yerine. {p}, {line} ile {tile} karesine gidiyor."]},inflation:{en:["Enflasyon strikes again. Everything now costs {pct} percent more. The simit weeps.","Ah, inflation. Rents are up {pct} percent. Do try to look surprised."],tr:["Enflasyon yine vurdu. Her \u015Fey y\xFCzde {pct} daha pahal\u0131. Simit a\u011Fl\u0131yor.","Ah, enflasyon. Kiralar y\xFCzde {pct} artt\u0131. L\xFCtfen \u015Fa\u015F\u0131rm\u0131\u015F g\xF6r\xFCn\xFCn."]},trade:{en:["A handshake between {p} and {q}. The ink is still wet.","{p} and {q} have come to an arrangement. How delightfully discreet."],tr:["{p} ile {q} el s\u0131k\u0131\u015Ft\u0131. M\xFCrekkep daha kurumad\u0131.","{p} ve {q} anla\u015Ft\u0131. Ne ho\u015F, ne kadar da ketum."]},bankrupt:{en:["{p} has gone bankrupt. {city} can be cruel.","And so {p} bows out. Better luck next time."],tr:["{p} iflas etti. {city} bazen ac\u0131mas\u0131zd\u0131r.","ve {p} oyundan \xE7ekiliyor. Bir dahaki sefere."]},win:{en:["And there we have it. {p} conquers {city}. Congratulations."],tr:["\u0130\u015Fte bu kadar. {p}, {city} \u015Fehrini fethetti. Tebrikler."]},clock:{en:["The clock has run out. One final round, everyone."],tr:["S\xFCre doldu. Herkese son bir tur."]},doubles:{en:["Doubles for {p}. Fortune smiles."],tr:["{p} \xE7ift att\u0131. Talih g\xFCl\xFCms\xFCyor."]}},ux=(i,e)=>i.replace(/\{(\w+)\}/g,(t,n)=>e[n]===void 0?"":String(e[n])),Nu=class{constructor(){this.on=Ma.get("on","0")==="1",this.voice=_f[Ma.get("voice","M3")]?Ma.get("voice","M3"):"M3",this.state="off",this.progress=0,this.queue=[],this.speaking=!1,this.nextId=1,this.pending=new Map,this.lastAt=0,this.on&&setTimeout(()=>this.start(),1500)}button(){let e=this.state==="loading"?`\u{1F399} ${Math.round(this.progress*100)}%`:this.state==="error"?"\u{1F399} !":"\u{1F399}";return _("button.chipbtn",{class:this.on&&this.state==="ready"?"on":"",title:this.on?M("Narrator: on (click for settings)"):M("Narrator: off \u2013 a live voice comments on the game"),onclick:()=>this.settings()},e)}refresh(){this.onRefresh?this.onRefresh():Promise.resolve().then(()=>($i(),xd)).then(e=>e.rerender())}settings(){let e=_("div.narr"),t=()=>{Ft(e,_("h2",`\u{1F399} ${M("The narrator")}`),_("p",M("A classy voice comments on the game live, in your language: purchases, big rents, cards, auctions, Enflasyon\u2026 The voice (Supertonic 3) runs in this browser; nothing is prerecorded.")),_("p.muted",M("The first time, about 400 MB is downloaded from Hugging Face and kept by your browser. A graphics card (WebGPU) makes it fast; without one it still works, a little slower.")),_("label",`${M("Voice")} `,_("select",{onchange:n=>{this.voice=n.target.value,Ma.set("voice",this.voice),this.state==="ready"&&this.test()}},Object.entries(_f).map(([n,r])=>_("option",{value:n,selected:n===this.voice},`${n} \u2013 ${r[xt]||r.en}`)))),this.state==="loading"?_("div.dl",_("div.dlbar",_("i",{style:{width:`${Math.round(this.progress*100)}%`}})),_("div.muted",M("Downloading the voice\u2026 {pct}%",{pct:Math.round(this.progress*100)}))):null,this.state==="error"?_("p.err",M("The voice could not start: {why}",{why:this.error||""})):null,this.state==="ready"?_("p.muted",M("Ready ({backend}).",{backend:this.backend==="webgpu"?"WebGPU":"WebAssembly"})):null,_("div.btnrow",this.on?_("button",{onclick:()=>{this.on=!1,Ma.set("on","0"),this.queue=[],t(),this.refresh()}},M("Turn off")):_("button.primary",{onclick:()=>{this.on=!0,Ma.set("on","1"),this.start(),t(),this.refresh()}},this.state==="ready"?M("Turn on"):M("Download and turn on")),this.state==="ready"?_("button",{onclick:()=>this.test()},M("Test")):null))};t(),this.redraw=t,Pn(e,{onclose:()=>{this.redraw=null}})}test(){this.say(xt==="tr"?"\u0130yi ak\u015Famlar. Ben sizin anlat\u0131c\u0131n\u0131z\u0131m. Zarlar haz\u0131r, simitler s\u0131cak.":"Good evening. I shall be your narrator tonight. The dice are ready, and the simit is warm.",!0)}start(){if(!(this.state==="ready"||this.state==="loading")){this.state="loading",this.progress=0;try{this.worker=this.worker||new Worker(new URL("./voice-worker.js",import.meta.url))}catch(e){this.state="error",this.error=String(e.message||e),this.refresh();return}this.worker.onmessage=e=>this.message(e.data),this.worker.onerror=e=>{this.state="error",this.error=e.message||"worker failed",this.refresh(),this.redraw&&this.redraw()},this.worker.postMessage({t:"load",voice:this.voice}),this.refresh()}}message(e){if(e.t==="progress"){this.progress=e.loaded/e.total;let t=performance.now();t-(this.lastDraw||0)>400&&(this.lastDraw=t,this.refresh(),this.redraw&&this.redraw())}else if(e.t==="ready")this.state="ready",this.backend=e.backend,this.refresh(),this.redraw&&this.redraw(),Ct(M("The narrator is ready.")),this.pump();else if(e.t==="error")this.state="error",this.error=e.text,this.refresh(),this.redraw&&this.redraw();else if(e.t==="audio"){let t=this.pending.get(e.id);this.pending.delete(e.id),t&&t.resolve(e)}else if(e.t==="fail"){let t=this.pending.get(e.id);this.pending.delete(e.id),t&&t.resolve(null)}}say(e,t=!1){if(!this.on||!e)return;let n={text:ox(e),lang:xt,at:performance.now(),urgent:t};for(t?this.queue.unshift(n):this.queue.push(n);this.queue.length>2;)this.queue.splice(this.queue.findIndex(r=>!r.urgent)>=0?this.queue.findIndex(r=>!r.urgent):0,1);this.pump()}async pump(){if(this.speaking||this.state!=="ready")return;let e=this.queue.shift();if(e){if(performance.now()-e.at>sx){this.pump();return}this.speaking=!0;try{let t=this.nextId++,n=await new Promise(r=>{this.pending.set(t,{resolve:r}),this.worker.postMessage({t:"say",id:t,text:e.text,lang:e.lang,voice:this.voice,steps:ix,speed:rx}),setTimeout(()=>{this.pending.has(t)&&(this.pending.delete(t),r(null))},3e4)});n&&this.on&&await this.play(n.pcm,n.sampleRate)}catch(t){console.warn("narrator:",t)}this.speaking=!1,setTimeout(()=>this.pump(),ax)}}async play(e,t){let n=this.ac=this.ac||new AudioContext;if(n.state==="suspended"&&await n.resume(),!this.chain){let s=n.createDynamicsCompressor();s.threshold.value=-20,s.ratio.value=3,s.attack.value=.005,s.release.value=.2;let o=n.createBiquadFilter();o.type="lowshelf",o.frequency.value=220,o.gain.value=2.5;let l=n.createBiquadFilter();l.type="highshelf",l.frequency.value=6e3,l.gain.value=1.5;let c=n.createConvolver(),h=Math.floor(n.sampleRate*.9),u=n.createBuffer(2,h,n.sampleRate);for(let f=0;f<2;f++){let g=u.getChannelData(f);for(let m=0;m<h;m++)g[m]=(Math.random()*2-1)*(1-m/h)**3}c.buffer=u;let d=n.createGain();d.gain.value=.12;let p=n.createGain();p.gain.value=.95,o.connect(l).connect(s),s.connect(p).connect(n.destination),s.connect(c).connect(d).connect(n.destination),this.chain=o}let r=n.createBuffer(1,e.length,t);r.copyToChannel(e,0);let a=n.createBufferSource();a.buffer=r,a.connect(this.chain),document.body.classList.add("narrating"),await new Promise(s=>{a.onended=s,a.start()}),document.body.classList.remove("narrating")}reset(){this.queue=[]}events(e,t,n,r,a){if(!this.on||!n)return;let s=Bt(n.map),o=ct(s.name),l=p=>{let f=n.players.find(g=>g.id===p);return f?f.name:""},c=(p,f={})=>{let g=bf[p][xt]||bf[p].en,m={};for(let[y,v]of Object.entries({city:o,...f}))m[y]=["p","q","tile","group","line","jail","names","city"].includes(y)?cx(v):v;return ux(hx(g),m)},h=null,u=(p,f)=>{(!h||p>h.prio)&&(h={prio:p,text:f})};for(let p of e)switch(p.type){case"start":u(9,c("start",{names:n.players.map(f=>f.name).join(", ")}));break;case"buy":{let f=s.tiles[p.tile],g=f.kind==="lot"&&dt(s,f.group).every(m=>n.props[m]&&n.props[m].owner===p.p);p.auction?u(6,c("sold",{p:l(p.p),tile:pt(p.tile,s),amt:p.amount})):g?u(7,c("set",{p:l(p.p),group:Mi(f.group,s)})):Math.random()<.55&&u(3,c("buy",{p:l(p.p),tile:pt(p.tile,s)}));break}case"rent":p.amount>=100*(n.infl||1)&&u(5,c("rent",{p:l(p.p),q:l(p.owner),amt:p.amount,tile:pt(p.tile,s)}));break;case"auction":u(5,c("auction",{tile:pt(p.tile,s)}));break;case"card":{let f=s.decks[p.deck];f&&f.cards[p.card]&&u(4,c("card",{p:l(p.p),deck:ct(f.name),card:ct(f.cards[p.card].text)}));break}case"jail":u(6,c("jail",{p:l(p.p),jail:pt(s.jailTile,s)}));break;case"build":p.level===5&&u(6,c("tower",{p:l(p.p),tile:pt(p.tile,s)}));break;case"ride":Math.random()<.7&&u(4,c("ride",{p:l(p.p),line:pt(p.from,s),tile:pt(p.to,s)}));break;case"inflation":u(8,c("inflation",{pct:p.pct}));break;case"trade":u(6,c("trade",{p:l(p.from),q:l(p.to)}));break;case"bankrupt":u(8,c("bankrupt",{p:l(p.p)}));break;case"win":u(10,c("win",{p:l(p.p)}));break;case"clock":u(9,c("clock"));break;case"doubles":Math.random()<.25&&u(1,c("doubles",{p:l(p.p)}));break;default:}if(!h)return;let d=performance.now();h.prio<5&&d-this.lastAt<6e3||(this.lastAt=d,this.say(h.text,h.prio>=8))}},dl=new Nu;bn();var _s=i=>document.getElementById(i),Fu=new URLSearchParams(location.search);N.who=_d();try{N.name=localStorage.getItem("parcel.name")||""}catch{}N.pendingCode=Zl(Fu.get("room"));N.view=new sl(_s("stage"),{onTile:i=>{i>=0&&ba(i)},onDice:()=>{wf()&&st({type:"roll"})}});N.view.idleSpin=!0;N.view.onStep=()=>Dt.step();N.view.setMap(Bt("istanbul"));function wf(){let i=N.game,e=Vn();if(!i||i.phase!=="play"||!e||e.out||i.auction)return!1;let t=i.t;return i.players[i.turn].id===e.id&&!t.pending&&e.cash>=0&&(!t.rolled||t.again)}function Sa(i){N.link=i,i.onmessage=fx,i.onclose=()=>px(i),Ze({t:"hello",who:N.who,name:N.name})}var wa=null;async function dx(i,e){N.busy="create",N.homeError="",Gt();try{if(N.mode==="server")Ze({t:"hello",who:N.who,name:N.name}),Ze({t:"create",name:i||M("{p}'s table",{p:N.name}),listed:e});else{let t=new Ua;t.selfWho=N.who;let n=await t.open();N.host=t,Sa(t.localLink()),Ze({t:"create",code:n,name:i||M("{p}'s table",{p:N.name})})}}catch(t){N.homeError=M(t.message||"Could not open a room"),N.busy="",Gt()}}async function Ou(i){if(i=Zl(i),i.length===4){N.busy="join",N.homeError="",wa=i,Gt();try{N.mode==="server"?(Ze({t:"hello",who:N.who,name:N.name}),Ze({t:"join",code:i})):(N.link&&N.link.close(),Sa(await tc(i)),Ze({t:"join",code:i}))}catch(e){wa=null,N.homeError=M(e.message||"Could not join"),N.busy="",Gt()}}}async function Sf(i){N.busy="create",N.status=M("Reopening room {code}\u2026",{code:i.code}),Gt();try{if(i.who){N.who=i.who;try{sessionStorage.setItem("parcel.who",i.who)}catch{}}let e=new Ua;e.selfWho=N.who,await e.open(i),N.host=e,Sa(e.localLink()),Ze({t:"join",code:i.code}),N.status=""}catch(e){N.status="",N.busy="",N.homeError=M("Could not reopen room {code}: {why}",{code:i.code,why:e.message||e.type||"error"}),Gt()}}function Tf(){N.host&&!confirm(M("You are hosting this room \u2013 leaving closes it for everyone. Leave?"))||(Ze({t:"leave"}),Ef())}function Ef(i=""){let e=N.host;if(N.inRoom=!1,N.room=null,N.game=null,N.code="",N.busy="",wa=null,bs.length=0,N.homeError=i,history.replaceState(null,"",location.pathname+(Fu.has("p2p")?"?p2p=1":"")),e&&(N.host=null,e.close()),N.mode==="p2p"&&N.link){let t=N.link;N.link=null,t.onclose=null,t.close()}N.view.setState(null,[]),N.view.idleSpin=!0,dl.reset(),document.querySelectorAll(".modal-wrap").forEach(t=>t.remove()),N.mode==="server"&&Ze({t:"list"}),Gt()}var Du=!1;function px(i){i===N.link&&(N.link=null,(N.mode==="server"||N.inRoom)&&mx())}async function mx(){if(!Du){Du=!0;for(let i=0;;i++){let e=N.code;N.status=N.mode==="p2p"?M("The host is away \u2013 reconnecting\u2026"):M("Connection lost \u2013 reconnecting\u2026"),Gt(),await new Promise(t=>setTimeout(t,Math.min(8e3,1e3+i*1e3)));try{if(N.mode==="server"){let t=await Il(4e3);if(!t)continue;Sa(t),e&&N.inRoom?Ze({t:"join",code:e}):Ze({t:"list"})}else{if(!N.inRoom||!e)break;Sa(await tc(e)),Ze({t:"join",code:e})}break}catch{}if(!N.inRoom&&N.mode==="p2p")break}N.status="",Du=!1,Gt()}}setInterval(()=>{N.link&&!N.link.closed&&Ze({t:"ping"})},5e3);var Af=Date.now();function fx(i){switch(Af=Date.now(),i.t){case"welcome":return;case"pong":return;case"rooms":N.rooms=i.rooms,N.inRoom||Gt();return;case"sync":{N.inRoom||(N.inRoom=!0,N.busy="",wa=null,N.homeError="",N.code=i.room.code,history.replaceState(null,"",Yi(i.room.code).replace(location.origin,""))),i.now&&(N.clockSkew=i.now-Date.now()),gx(i);return}case"chat":df(i.id,i.n),Dt.offer();return;case"left":return;case"error":{let e=kl(i);if(i.code==="replaced"||i.code==="kicked"||i.code==="closed"){Ef(e);return}if(wa||!N.inRoom){if(wa=null,N.busy="",N.homeError=e,N.mode==="p2p"&&N.link&&!N.host){let t=N.link;N.link=null,t.onclose=null,t.close()}Gt();return}Dt.error(),Ct(e,"error")}}}setInterval(()=>{if(N.mode==="p2p"&&N.inRoom&&!N.host&&N.link&&Date.now()-Af>16e3){let i=N.link;i.close(),i.ended()}},2e3);var bs=[],zu=!1;function gx(i){bs.push(i),zu||yx()}async function yx(){for(zu=!0;bs.length;){let i=bs.shift(),e=N.game;if(i.game&&i.events.length&&dl.events(i.events,e,i.game,i.room,i.you),N.game&&i.game&&!document.hidden&&bs.length<3)try{await xx(i.events,i.game)}catch(n){console.warn(n)}else i.events.length&&Bu(i.events,i.game);bx(i)}zu=!1}var vx=(i,e)=>{let t=i.players.find(n=>n.id===e);return t?t.pos:0};async function xx(i,e){let t=N.view;for(let n of i)switch(n.type){case"roll":Dt.dice(),await t.rollDice(n.dice,vx(N.game,n.p));break;case"move":n.ride&&Dt.ride(n.ride),await t.moveToken(n.p,n.from,n.to,n.steps,n.jump,n.ride);break;case"pay":{let r=o=>t.tokens.get(o)?t.tokens.get(o).pos:null,a=n.from&&n.from!=="pot"?r(n.from):null,s=n.to&&n.to!=="pot"?r(n.to):null;a!==null&&t.float(a,`\u2212${Ee(n.amount,Bt(e.map))}`,"#ff8a7a"),s!==null&&setTimeout(()=>t.float(s,`+${Ee(n.amount,Bt(e.map))}`,"#8ef0a6"),250),t.flySimits(n.from,n.to,n.amount),n.to===N.you?Dt.coin():n.from===N.you&&Dt.pay(),await xs(120);break}case"rent":n.amount>=150&&Bt(e.map).currency==="simit"&&(t.gullSteal(n.p),Dt.gull());break;case"card":Dt.card(),_x(e,n.deck,n.card,n.p),await xs(1500);break;case"jail":Dt.whistle(),t.siren(),Bu([n],e);break;case"buy":{Dt.buy();let r=e.players.find(a=>a.id===n.p);r&&t.setOwner(n.tile,r.color),n.auction&&(t.clearAuction(),t.stamp(n.tile,M("SOLD!"),r?r.color:"#ffcf4a"),Ct(M("{p} wins the auction: {tile} for {amt}",{p:r&&r.id===N.you?M("You"):r?r.name:"?",tile:pt(n.tile),amt:Ee(n.amount)})),await xs(1200));break}case"unsold":t.clearAuction(),t.stamp(n.tile,M("NO SALE"),"#9aa7b1"),await xs(900);break;case"bid":{Dt.coin();let r=e.players.find(a=>a.id===n.p);N.game&&N.game.auction&&t.float(N.game.auction.tile,`${r?r.name:""} ${Ee(n.amount)}`,r?r.color:"#fff");break}case"build":case"sell":Dt.build(),t.setLevel(n.tile,n.level);break;case"inflation":Rf(n.pct),await xs(900);break;default:Bu([n],e)}}function Bu(i,e){let t=n=>(e&&e.players.find(r=>r.id===n)||{}).name||M("someone");for(let n of i)n.type==="turn"&&n.p===N.you&&e&&e.phase==="play"?(Dt.turn(),Ct(M("Your turn"))):n.type==="jail"?Dt.jail():n.type==="offer"&&n.to===N.you?(Dt.offer(),Ct(M("{p} sent you an offer",{p:t(n.from)}))):n.type==="trade"&&(n.from===N.you||n.to===N.you)?(Dt.buy(),Ct(M("Deal done!"))):n.type==="reject"&&n.from===N.you?Ct(M("Your offer was declined")):n.type==="contract"&&(n.from===N.you||n.to===N.you)?Ct(n.from===N.you?M("Clause #{id}: you pay {amt}",{id:n.id,amt:Ee(n.amount)}):M("Clause #{id}: you receive {amt}",{id:n.id,amt:Ee(n.amount)})):n.type==="auction"?Ct(M("{tile} goes to auction",{tile:pt(n.tile)})):n.type==="ride"&&n.p===N.you?Ct(`${Lu(n.vehicle)} ${M("All aboard!")}`):n.type==="win"?Dt.win():n.type==="inflation"?Rf(n.pct):n.type==="clock"?(Dt.whistle(),Ct(`\u23F1 ${M("The clock has run out \u2013 this is the last round!")}`)):n.type==="timeout"&&n.p===N.you?Ct(n.what==="roll"?M("Time's up \u2013 rolling for you"):n.what==="decline"?M("Time's up \u2013 it goes to auction"):n.what==="stay"?M("Time's up \u2013 you stay"):M("Time's up \u2013 turn over")):n.type==="aiTakeover"?Ct(M("The AI plays for {p} until they come back",{p:t(n.p)})):n.type==="start"?(Dt.turn(),Ct(M("The game begins!"))):n.type==="bankrupt"&&Ct(M("{p} is out of the game",{p:t(n.p)}))}var xs=i=>new Promise(e=>setTimeout(e,i));function Rf(i){Dt.enflasyon();let e=_("div.inflstamp",_("div.is-word","ENFLASYON!"),_("div.is-pct",`+${i}%`),_("div.is-sub",M("Rents, fares and taxes just went up.")));document.body.appendChild(e),document.body.classList.add("shake"),setTimeout(()=>document.body.classList.remove("shake"),700),setTimeout(()=>e.classList.add("out"),2200),setTimeout(()=>e.remove(),2800),N.view.shockGulls()}function _x(i,e,t,n){let r=_s("cardpop"),a=Bt(i.map),s=a.decks[e],o=i.players.find(l=>l.id===n);Ft(r,_("div.gcard",{style:{"--c":s?s.color:"#888"}},_("div.gdeck",s?ct(s.name).toUpperCase():""),_("div.gtext",s&&s.cards[t]?ct(s.cards[t].text):""),o?_("div.gwho",o.name):null)),r.classList.add("show"),clearTimeout(r._t),r._t=setTimeout(()=>r.classList.remove("show"),3600)}function bx(i){let e=N.game?N.game.phase:null;N.room=i.room,N.game=i.game,N.you=i.you,N.view.setMap(Bt(i.game?i.game.map:i.room.settings.map)),N.view.setState(i.game,i.room.members),N.view.idleSpin=!i.game,N.view.diceReady=wf();let t=i.game&&i.game.phase==="play"?i.game.auction:null;if(t){let n=t.bidder?i.game.players.find(r=>r.id===t.bidder):null;N.view.setAuction(t.tile,[M("AUCTION"),n?Ee(t.high).replace("\uE000","")+(ht().currency==="simit"?"simit":""):M("no bids"),n?n.name:M("list {amt}",{amt:Ee(ht().tiles[t.tile].price).replace("\uE000","simit")})],n?n.color:null)}else N.view.clearAuction();i.game&&!e&&N.view.resetCamera(),Gt()}function Mx(){let i=N.room;return _("div.topbar",_("div.brand","PARCEL"),i?_("button.chipbtn",{title:M("Copy the invite link"),onclick:async()=>{try{await navigator.clipboard.writeText(Yi()),Ct(M("Invite link copied"))}catch{prompt(M("Invite link"),Yi())}}},`${i.name} \xB7 ${i.code}`):null,N.status?_("div.netstatus",N.status):null,_("div.grow"),dl.button(),_("button.icon",{title:cl()?M("Sound off"):M("Sound on"),onclick:()=>{Km(!cl()),Gt()}},cl()?"\u{1F507}":"\u{1F50A}"),_("button.chipbtn",{title:M("Switch camera (F2) \u2013 drag to turn, right-drag or shift-drag to pan, arrow keys pan, wheel zooms"),onclick:()=>{Ct(`${M("Camera")}: ${M(N.view.nextView())}`),Gt()}},`\u{1F3A5} ${M(Tx())}`),_("button.icon",{title:M("Reset the camera"),onclick:()=>N.view.resetCamera()},"\u27F2"),_("button.chipbtn.lang",{title:xt==="tr"?"English":"T\xFCrk\xE7e",onclick:()=>{pd(xt==="tr"?"en":"tr"),N.view.relabel(),Gt()}},xt==="tr"?"EN":"TR"),_("button.icon",{title:M("How to play"),onclick:wx},"?"),i?_("button.small",{onclick:Tf},M("Leave")):null)}function Gt(){Ft(_s("top"),Mx());let i=_s("screen"),e=_s("hud"),t={create:dx,join:Ou,leave:Tf,resume:Sf,saved:()=>N.mode==="p2p"?Ql():null,forget:()=>{ec(),Gt()}};if(!N.mode){Ft(i,_("div.screen",_("div.card",_("h1.logo","PARCEL"),_("p.muted",M("Connecting\u2026"))))),Ft(e);return}if(!N.inRoom){Ft(i,Qm(t)),Ft(e);return}if(!N.game){Ft(i,ef(t)),Ft(e);return}Ft(i,N.game.phase==="over"?vf():null);let n=e.querySelector("details.logbox")?e.querySelector("details.logbox").open:!matchMedia("(max-width: 720px)").matches;Ft(e,uf(),_("div.left",lf()),_("div.right",yf(),cf(),_("details.logbox",{open:n},_("summary",M("Game log")),gf()))),xf()}Tl(Gt);function wx(){let i=ht(),e=_("div.help",_("h2",M("How to play PARCEL")),_("p",M("Take turns rolling two dice and moving round the city. Buy the spaces you land on. Own a whole colour set to double its rent and build floors \u2013 then a tower \u2013 on it. Land on someone else\u2019s space and you pay them rent. Run out of money and you are out; the last player standing wins.")),i.ride?[_("h3",M("\u0130stanbul")),_("ul",_("li",M("Shops (caf\xE9, restaurant, carpet shop, mall, car dealer) charge the dice times a multiplier \u2013 the more shops the owner has, the bigger it gets.")),_("li",M("Landed on a line (T\xFCnel, tram, cable car, metro, ferry, Marmaray)? You may ride on to the next line for a small fare to its owner \u2013 handy to skip a dangerous stretch.")),_("li",M("Enflasyon: every few rounds, rents, fares and taxes go up. Salaries and prices don\u2019t. Fixed amounts in clauses don\u2019t either \u2013 percentages do.")),_("li",M("The game clock: when it runs out, the round is finished and the highest net worth wins.")))]:null,_("h3",M("Trading")),_("p",M("Click Trade at any time \u2013 even when it is not your turn. An offer can swap cash, spaces and get-out cards. The other player can accept, decline or counter.")),_("h3",M("Clauses: deals that keep paying")),_("p",M("An offer can also carry clauses: payments the game makes by itself whenever an event happens. You pick who pays, how much (a fixed amount, or a percentage of the rent, tax, price or salary involved), which event triggers it (landing on a space, passing Start, paying rent, starting a turn, rolling doubles\u2026), whose action it is, and how long it lasts (a number of times and/or rounds).")),_("ul",_("li",_("b",`${M("Loan")}: `),M("give 300 now; they pay you 60 at the start of each of their turns, 6 times.")),_("li",_("b",`${M("Rent exemption")}: `),M("they refund 100% of the rent you pay them on one space.")),_("li",_("b",`${M("Rent share")}: `),M("they pay you 25% of every rent they collect on a set for 10 rounds.")),_("li",_("b",`${M("Start toll")}: `),M("they pay you 20 whenever they pass Start."))),_("h3",M("The narrator")),_("p",M("Turn on the narrator (\u{1F399}) and a voice comments on the game live, in your language. The voice runs in your browser (Supertonic 3); the first time it downloads about 400 MB, then it is kept.")),_("h3",M("Camera")),_("p",M("F2 switches between isometric, top and TV cameras. Drag to turn; right-drag, shift-drag, two fingers or the arrow keys pan; the wheel zooms. Click the dice to roll.")),_("h3",M("Playing online")),_("p",M("Create a room and send the invite link (or the 4-letter code). If you lose your connection or reload, you get your seat back. A room hosted in a browser lives in that tab: the host can reload it and the room comes back, but should not close it.")));Pn(e,{wide:!0})}async function Sx(){Gt();let i=Fu.has("p2p")?null:await Il();if(i)N.mode="server",Sa(i),Ze({t:"list"}),N.pendingCode&&N.name&&Ou(N.pendingCode);else{N.mode="p2p";let e=Ql();if(e&&N.pendingCode===e.code){Sf(e);return}N.pendingCode&&N.name&&Ou(N.pendingCode)}Gt()}var Tx=()=>({iso:"Isometric",top:"Top",tv:"TV"})[N.view.viewName]||"",Uu={ArrowLeft:[1,0],ArrowRight:[-1,0],ArrowUp:[0,1],ArrowDown:[0,-1],a:[1,0],d:[-1,0],w:[0,1],s:[0,-1]};addEventListener("keydown",i=>{if(i.target.closest("input, select, textarea"))return;if(i.key==="F2"){i.preventDefault(),Ct(`${M("Camera")}: ${M(N.view.nextView())}`),Gt();return}if(Uu[i.key]&&!i.metaKey&&!i.ctrlKey){i.preventDefault(),N.view.pan(Uu[i.key][0]*40,Uu[i.key][1]*40);return}if(!N.game||N.game.phase!=="play")return;let e=Vn(),t=N.game;if(!(!e||t.players[t.turn].id!==e.id)&&(i.key===" "||i.key==="Enter")){i.preventDefault();let n=t.t;if(t.auction||n.pending||e.cash<0)return;Ze({t:"act",a:{type:!n.rolled||n.again?"roll":"end"}})}});Sx();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
