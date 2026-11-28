import{a as $s,b as oi,c as Fo,f as Ks}from"./chunk-chunk-HXVKYEOY.js";import{a as Bh,b as Fh,c as Gh}from"./chunk-chunk-2VSNQSFJ.js";import{a as Hh,b as Zs,c as ai,d as zh,e as $r,f as Bo,i as Js,k as Pt}from"./chunk-chunk-YNEPLUHX.js";import{a as Nh,c as zo,h as si,i as Oh,n as Jr}from"./chunk-chunk-QNKBZBNZ.js";var Go=new WeakSet;function Kt(r){return Go.add(r),r}function It(r){let e=new Set;for(let t of r)t.removeFromParent(),t.traverse(n=>{n.isInstancedMesh&&e.add(n),n.geometry&&!n.isSprite&&e.add(n.geometry),n.shadow&&e.add(n.shadow);for(let i of[].concat(n.material||[]))if(!Go.has(i)){e.add(i);for(let s of Object.values(i))s?.isTexture&&e.add(s)}});for(let t of e)Go.has(t)||t.dispose()}var Ku=2;var od=0,lo=1,$e=2;var Qu=2;var Bi=100,ld=101,cd=102;var hd=200,ud=201,dd=202,pd=203,Tl=204,wl=205,fd=206,md=207,gd=208,vd=209,yd=210,xd=211,_d=212,Md=213,Ed=214,Sd=0,bd=1,Td=2,wd=3,Rd=4,Ad=5,Cd=6,Pd=7;var e0=4;var t0=300,_r=301,Mr=302,Rl=303,Al=304,co=306,gi=1e3,fs=1001,Cl=1002,fn=1003,Id=1004;var Qs=1005;var kt=1006,ko=1007;var fi=1008;var gn=1009,n0=1010,i0=1011,ms=1012,jc=1013,$n=1014,Pn=1015,Qn=1016,Xc=1017,qc=1018,Er=1020,r0=35902,s0=1021,a0=1022,In=1023,o0=1024,l0=1025,gs=1026,Sr=1027,Lr=1028,Yc=1029,c0=1030,Zc=1031;var Jc=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Pl=35840,Il=35841,Ll=35842,Dl=35843,Ul=36196,Nl=37492,Ol=37496,Hl=37808,zl=37809,Bl=37810,Fl=37811,Gl=37812,kl=37813,Vl=37814,Wl=37815,jl=37816,Xl=37817,ql=37818,Yl=37819,Zl=37820,Jl=37821,Na=36492,$l=36494,Kl=36495,h0=36283,Ql=36284,ec=36285,tc=36286;var Ha=2300,nc=2301,Vo=2302,kh=2400,Vh=2401,Wh=2402;var gr="",Ke="srgb",Dr="srgb-linear",ho="linear",tt="srgb";var Ki=7680;var Ld=512,Dd=513,Ud=514,Nd=515,Od=516,Hd=517,zd=518,Bd=519,ic=35044;var jh="300 es",br=2e3,za=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oa=Math.PI/180,rc=180/Math.PI;function Zn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Lt[255&r]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[255&e]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[63&t|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[255&n]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Fd(r,e){return(r%e+e)%e}function Wo(r,e,t){return(1-t)*r+t*e}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var pe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],y=i[0],m=i[3],_=i[6],g=i[1],x=i[4],v=i[7],M=i[2],E=i[5],T=i[8];return s[0]=a*y+o*g+l*M,s[3]=a*m+o*x+l*E,s[6]=a*_+o*v+l*T,s[1]=c*y+h*g+u*M,s[4]=c*m+h*x+u*E,s[7]=c*_+h*v+u*T,s[2]=d*y+p*g+f*M,s[5]=d*m+p*x+f*E,s[8]=d*_+p*v+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jo=new ze;function u0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gd(){let r=Ba("canvas");return r.style.display="block",r}var Xh={};function hs(r){r in Xh||(Xh[r]=!0,console.warn(r))}var Ze={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===tt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gr?ho:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Jn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function yr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var qh=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],Zh=[.3127,.329],Jh=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Qi;Ze.define({[Dr]:{primaries:qh,whitePoint:Zh,transfer:ho,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:qh,whitePoint:Zh,transfer:tt,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});var sc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Ba("canvas")),Qi.width=e.width,Qi.height=e.height;let n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Jn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Jn(t[n]/255)):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kd=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Xo(i[a].image)):s.push(Xo(i[a]))}else s=Xo(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Xo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vd=0,Vt=class r extends vi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Zn(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=t0,Vt.DEFAULT_ANISOTROPY=1;var Je=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],y=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(p+1)/2,M=(_+1)/2,E=(h+d)/4,T=(u+y)/4,R=(f+m)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=T/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=R/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=R/s),this.set(n,i,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-y)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ac=class extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oc=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==f){let m=1-o,_=l*d+c*p+h*f+u*y,g=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){let M=Math.sqrt(x),E=Math.atan2(M,_*g);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}let v=o*g;if(l=l*m+d*v,c=c*m+p*v,h=h*m+f*v,u=u*m+y*v,m===1-o){let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new A,Kh=new mt,qt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),ta.subVectors(this.max,Kr),er.subVectors(e.a,Kr),tr.subVectors(e.b,Kr),nr.subVectors(e.c,Kr),li.subVectors(tr,er),ci.subVectors(nr,tr),Li.subVectors(er,nr);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Li.z,Li.y,li.z,0,-li.x,ci.z,0,-ci.x,Li.z,0,-Li.x,-li.y,li.x,0,-ci.y,ci.x,0,-Li.y,Li.x,0];return!!Yo(t,er,tr,nr,ta)&&(t=[1,0,0,0,1,0,0,0,1],!!Yo(t,er,tr,nr,ta)&&(na.crossVectors(li,ci),t=[na.x,na.y,na.z],Yo(t,er,tr,nr,ta)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(un).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},kn=[new A,new A,new A,new A,new A,new A,new A,new A],un=new A,ea=new qt,er=new A,tr=new A,nr=new A,li=new A,ci=new A,Li=new A,Kr=new A,ta=new A,na=new A,Di=new A;function Yo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Di.fromArray(r,s);let o=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wd=new qt,Qr=new A,Zo=new A,vn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Zo)),this.expandByPoint(Qr.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new A,Jo=new A,ia=new A,hi=new A,$o=new A,ra=new A,Ko=new A,ki=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jo.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Jo);let s=.5*e.distanceTo(t),a=-this.direction.dot(ia),o=hi.dot(this.direction),l=-hi.dot(ia),c=hi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Jo).addScaledVector(ia,d),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,s){$o.subVectors(t,e),ra.subVectors(n,e),Ko.crossVectors($o,ra);let a,o=this.direction.dot(Ko);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}hi.subVectors(this.origin,e);let l=a*this.direction.dot(ra.crossVectors(hi,ra));if(l<0)return null;let c=a*this.direction.dot($o.cross(hi));if(c<0||l+c>o)return null;let h=-a*hi.dot(Ko);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,y,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,y,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,y,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=y,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),a=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d+y*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Xd)}lookAt(e,t,n){let i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ui.crossVectors(n,jt),ui.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ui.crossVectors(n,jt)),ui.normalize(),sa.crossVectors(jt,ui),i[0]=ui.x,i[4]=sa.x,i[8]=jt.x,i[1]=ui.y,i[5]=sa.y,i[9]=jt.y,i[2]=ui.z,i[6]=sa.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],y=n[6],m=n[10],_=n[14],g=n[3],x=n[7],v=n[11],M=n[15],E=i[0],T=i[4],R=i[8],L=i[12],W=i[1],F=i[5],k=i[9],j=i[13],D=i[2],G=i[6],B=i[10],K=i[14],Z=i[3],de=i[7],me=i[11],te=i[15];return s[0]=a*E+o*W+l*D+c*Z,s[4]=a*T+o*F+l*G+c*de,s[8]=a*R+o*k+l*B+c*me,s[12]=a*L+o*j+l*K+c*te,s[1]=h*E+u*W+d*D+p*Z,s[5]=h*T+u*F+d*G+p*de,s[9]=h*R+u*k+d*B+p*me,s[13]=h*L+u*j+d*K+p*te,s[2]=f*E+y*W+m*D+_*Z,s[6]=f*T+y*F+m*G+_*de,s[10]=f*R+y*k+m*B+_*me,s[14]=f*L+y*j+m*K+_*te,s[3]=g*E+x*W+v*D+M*Z,s[7]=g*T+x*F+v*G+M*de,s[11]=g*R+x*k+v*B+M*me,s[15]=g*L+x*j+v*K+M*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],y=e[13],m=e[14],_=e[15],g=u*m*c-y*d*c+y*l*p-o*m*p-u*l*_+o*d*_,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*_-a*d*_,v=h*y*c-f*u*c+f*o*p-a*y*p-h*o*_+a*u*_,M=f*u*l-h*y*l-f*o*d+a*y*d+h*o*m-a*u*m,E=t*g+n*x+i*v+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=g*T,e[1]=(y*d*s-u*m*s-y*i*p+n*m*p+u*i*_-n*d*_)*T,e[2]=(o*m*s-y*l*s+y*i*c-n*m*c-o*i*_+n*l*_)*T,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*T,e[4]=x*T,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*_+t*d*_)*T,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*_-t*l*_)*T,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*T,e[8]=v*T,e[9]=(f*u*s-h*y*s-f*n*p+t*y*p+h*n*_-t*u*_)*T,e[10]=(a*y*s-f*o*s+f*n*c-t*y*c-a*n*_+t*o*_)*T,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*T,e[12]=M*T,e[13]=(h*y*i-f*u*i+f*n*d-t*y*d-h*n*m+t*u*m)*T,e[14]=(f*o*i-a*y*i-f*n*l+t*y*l+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,y=a*h,m=a*u,_=o*u,g=l*c,x=l*h,v=l*u,M=n.x,E=n.y,T=n.z;return i[0]=(1-(y+_))*M,i[1]=(p+v)*M,i[2]=(f-x)*M,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+_))*E,i[6]=(m+g)*E,i[7]=0,i[8]=(f+x)*T,i[9]=(m-g)*T,i[10]=(1-(d+y))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=ir.set(i[0],i[1],i[2]).length(),a=ir.set(i[4],i[5],i[6]).length(),o=ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],dn.copy(this);let l=1/s,c=1/a,h=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=c,dn.elements[5]*=c,dn.elements[6]*=c,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===br)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==za)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,y;if(o===br)f=(a+s)*u,y=-2*u;else{if(o!==za)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ir=new A,dn=new Ne,jd=new A(0,0,0),Xd=new A(1,1,1),ui=new A,sa=new A,jt=new A,Qh=new Ne,eu=new mt,gt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gt.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},qd=0,tu=new A,rr=new mt,Wn=new Ne,aa=new A,es=new A,Yd=new A,Zd=new mt,nu=new A(1,0,0),iu=new A(0,1,0),ru=new A(0,0,1),su={type:"added"},Jd={type:"removed"},sr={type:"childadded",child:null},Qo={type:"childremoved",child:null},Bt=class r extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new gt,n=new mt,i=new A(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new ze}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(es,aa,this.up):Wn.lookAt(aa,es,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(Wn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jd),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Bt.DEFAULT_UP=new A(0,1,0),Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new A,jn=new A,el=new A,Xn=new A,ar=new A,or=new A,au=new A,tl=new A,nl=new A,il=new A,rl=new Je,sl=new Je,al=new Je,Yn=class r{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),jn.subVectors(n,t),el.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(jn),l=pn.dot(el),c=jn.dot(jn),h=jn.dot(el),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return rl.setScalar(0),sl.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,n),al.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(rl,s.x),a.addScaledVector(sl,s.y),a.addScaledVector(al,s.z),a}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),jn.subVectors(e,t),pn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),.5*pn.cross(jn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;ar.subVectors(i,n),or.subVectors(s,n),tl.subVectors(e,n);let l=ar.dot(tl),c=or.dot(tl);if(l<=0&&c<=0)return t.copy(n);nl.subVectors(e,i);let h=ar.dot(nl),u=or.dot(nl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ar,a);il.subVectors(e,s);let p=ar.dot(il),f=or.dot(il);if(f>=0&&p<=f)return t.copy(s);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(or,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return au.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(au,o);let _=1/(m+y+d);return a=y*_,o=d*_,t.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},oa={h:0,s:0,l:0};function ol(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Fd(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ol(a,s,e+1/3),this.g=ol(a,s,e),this.b=ol(a,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){let n=d0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return Ze.fromWorkingColorSpace(Dt.copy(this),e),65536*Math.round(St(255*Dt.r,0,255))+256*Math.round(St(255*Dt.g,0,255))+Math.round(St(255*Dt.b,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Dt.copy(this),t);let n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ke){Ze.fromWorkingColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,i=Dt.b;return e!==Ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(oa);let n=Wo(di.h,oa.h,t),i=Wo(di.s,oa.s,t),s=Wo(di.l,oa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ce;Ce.NAMES=d0;var $d=0,yi=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Zn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=wl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bt=class extends yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gm=Kd();function Kd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var yt=new A,la=new pe,ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ic&&(e.usage=this.usage),e}};var ka=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qd=0,Qt=new Ne,ll=new Bt,lr=new A,Xt=new qt,ts=new qt,Et=new A,et=class r extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?Va:ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Xt.min,ts.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,ts.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(ts.min),Xt.expandByPoint(ts.max))}Xt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(e,c),Et.add(lr)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new A,l[R]=new A;let c=new A,h=new A,u=new A,d=new pe,p=new pe,f=new pe,y=new A,m=new A;function _(R,L,W){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,W),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,W),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let F=1/(p.x*f.y-f.x*p.y);isFinite(F)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(F),o[R].add(y),o[L].add(y),o[W].add(y),l[R].add(m),l[L].add(m),l[W].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,L=g.length;R<L;++R){let W=g[R],F=W.start;for(let k=F,j=F+W.count;k<j;k+=3)_(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let x=new A,v=new A,M=new A,E=new A;function T(R){M.fromBufferAttribute(i,R),E.copy(M);let L=o[R];x.copy(L),x.sub(M.multiplyScalar(M.dot(L))).normalize(),v.crossVectors(E,L);let W=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,W)}for(let R=0,L=g.length;R<L;++R){let W=g[R],F=W.start;for(let k=F,j=F+W.count;k<j;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let y=0,m=l.length;y<m;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let _=0;_<h;_++)d[f++]=c[p++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new Ne,Ui=new ki,ca=new vn,lu=new A,ha=new A,ua=new A,da=new A,cl=new A,pa=new A,cu=new A,fa=new A,Pe=class extends Bt{constructor(e=new et,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(cl.fromBufferAttribute(u,e),a?pa.addScaledVector(cl,h):pa.addScaledVector(cl.sub(t),h))}t.add(pa)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),ca.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ca,lu)===null||Ui.origin.distanceToSquared(lu)>(e.far-e.near)**2))return;ou.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(ou),n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ui)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let m=d[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<x;g+=3)i=ma(this,_,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);f<y;f+=3)i=ma(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let m=d[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));g<x;g+=3)i=ma(this,_,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);f<y;f+=3)i=ma(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function ma(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ha),r.getVertexPosition(l,ua),r.getVertexPosition(c,da);let h=(function(u,d,p,f,y,m,_,g){let x;if(x=d.side===1?f.intersectTriangle(_,m,y,!0,g):f.intersectTriangle(y,m,_,d.side===0,g),x===null)return null;fa.copy(g),fa.applyMatrix4(u.matrixWorld);let v=p.ray.origin.distanceTo(fa);return v<p.near||v>p.far?null:{distance:v,point:fa.clone(),object:u}})(r,e,t,n,ha,ua,da,cu);if(h){let u=new A;Yn.getBarycoord(cu,ha,ua,da,u),i&&(h.uv=Yn.getInterpolatedAttribute(i,o,l,c,u,new pe)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,o,l,c,u,new pe)),a&&(h.normal=Yn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Yn.getNormal(ha,ua,da,d.normal),h.face=d,h.barycoord=u}return h}var ge=class r extends et{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(y,m,_,g,x,v,M,E,T,R,L){let W=v/T,F=M/R,k=v/2,j=M/2,D=E/2,G=T+1,B=R+1,K=0,Z=0,de=new A;for(let me=0;me<B;me++){let te=me*F-j;for(let ce=0;ce<G;ce++){let le=ce*W-k;de[y]=le*g,de[m]=te*x,de[_]=D,c.push(de.x,de.y,de.z),de[y]=0,de[m]=0,de[_]=E>0?1:-1,h.push(de.x,de.y,de.z),u.push(ce/T),u.push(1-me/R),K+=1}}for(let me=0;me<R;me++)for(let te=0;te<T;te++){let ce=d+te+G*me,le=d+te+G*(me+1),se=d+(te+1)+G*(me+1),he=d+(te+1)+G*me;l.push(ce,le,he),l.push(le,se,he),Z+=6}o.addGroup(p,Z,L),p+=Z,d+=K}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(r){let e={};for(let t=0;t<r.length;t++){let n=Tr(r[t]);for(let i in n)e[i]=n[i]}return e}function p0(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var ep={clone:Tr,merge:zt},Yt=class extends yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ys=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new A,hu=new pe,uu=new pe,Ut=class extends ys{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*rc*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Oa*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*rc*Math.atan(Math.tan(.5*Oa*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,hu,uu),t.subVectors(uu,hu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Oa*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,lc=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ut(cr,1,e,t);i.layers=this.layers,this.add(i);let s=new Ut(cr,1,e,t);s.layers=this.layers,this.add(s);let a=new Ut(cr,1,e,t);a.layers=this.layers,this.add(a);let o=new Ut(cr,1,e,t);o.layers=this.layers,this.add(o);let l=new Ut(cr,1,e,t);l.layers=this.layers,this.add(l);let c=new Ut(cr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===br)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==za)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Wa=class extends Vt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:_r,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cc=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ge(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Pe(i,s),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=kt),new lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},hl=new A,tp=new A,np=new ze,qn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hl.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||np.getNormalMatrix(e),i=this.coplanarPoint(hl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new vn,ga=new A,wr=class{constructor(e=new qn,t=new qn,n=new qn,i=new qn,s=new qn,a=new qn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],y=i[10],m=i[11],_=i[12],g=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-p,v-_).normalize(),n[1].setComponents(l+s,d+c,m+p,v+_).normalize(),n[2].setComponents(l+a,d+h,m+f,v+g).normalize(),n[3].setComponents(l-a,d-h,m-f,v-g).normalize(),n[4].setComponents(l-o,d-u,m-y,v-x).normalize(),t===br)n[5].setComponents(l+o,d+u,m+y,v+x).normalize();else{if(t!==za)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,y,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ga.x=i.normal.x>0?e.max.x:e.min.x,ga.y=i.normal.y>0?e.max.y:e.min.y,ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function f0(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ip(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Rt=class r extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],y=[],m=[];for(let _=0;_<h;_++){let g=_*d-a;for(let x=0;x<c;x++){let v=x*u-s;f.push(v,-g,0),y.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let g=0;g<o;g++){let x=g+c*_,v=g+c*(_+1),M=g+1+c*(_+1),E=g+1+c*_;p.push(x,v,E),p.push(v,M,E)}this.setIndex(p),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ge={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},An={basic:{uniforms:zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:zt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:zt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:zt([Ae.points,Ae.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:zt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:zt([Ae.common,Ae.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:zt([Ae.sprite,Ae.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:zt([Ae.common,Ae.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:zt([Ae.lights,Ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};An.physical={uniforms:zt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var va={r:0,b:0,g:0},Oi=new gt,rp=new Ne;function sp(r,e,t,n,i,s,a){let o=new Ce(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_}function y(m,_){m.getRGB(va,p0(r)),n.buffers.color.setClear(va.r,va.g,va.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),h=_,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,y(o,h)},render:function(m){let _=!1,g=f(m);g===null?y(o,h):g&&g.isColor&&(y(g,1),_=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,_){let g=f(_);g&&(g.isCubeTexture||g.mapping===co)?(c===void 0&&(c=new Pe(new ge(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Tr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,v,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Oi.copy(_.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Oi)),c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==tt,u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Pe(new Rt(2,2),new Yt({name:"BackgroundMaterial",uniforms:Tr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function ap(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(_){return r.bindVertexArray(_)}function l(_){return r.deleteVertexArray(_)}function c(_){let g=[],x=[],v=[];for(let M=0;M<t;M++)g[M]=0,x[M]=0,v[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:x,attributeDivisors:v,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let g=0,x=_.length;g<x;g++)_[g]=0}function u(_){d(_,0)}function d(_,g){let x=s.newAttributes,v=s.enabledAttributes,M=s.attributeDivisors;x[_]=1,v[_]===0&&(r.enableVertexAttribArray(_),v[_]=1),M[_]!==g&&(r.vertexAttribDivisor(_,g),M[_]=g)}function p(){let _=s.newAttributes,g=s.enabledAttributes;for(let x=0,v=g.length;x<v;x++)g[x]!==_[x]&&(r.disableVertexAttribArray(x),g[x]=0)}function f(_,g,x,v,M,E,T){T===!0?r.vertexAttribIPointer(_,g,x,M,E):r.vertexAttribPointer(_,g,x,v,M,E)}function y(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(_,g,x,v,M){let E=!1,T=(function(R,L,W){let F=W.wireframe===!0,k=n[R.id];k===void 0&&(k={},n[R.id]=k);let j=k[L.id];j===void 0&&(j={},k[L.id]=j);let D=j[F];return D===void 0&&(D=c(r.createVertexArray()),j[F]=D),D})(v,x,g);s!==T&&(s=T,o(s.object)),E=(function(R,L,W,F){let k=s.attributes,j=L.attributes,D=0,G=W.getAttributes();for(let B in G)if(G[B].location>=0){let K=k[B],Z=j[B];if(Z===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),K===void 0||K.attribute!==Z||Z&&K.data!==Z.data)return!0;D++}return s.attributesNum!==D||s.index!==F})(_,v,x,M),E&&(function(R,L,W,F){let k={},j=L.attributes,D=0,G=W.getAttributes();for(let B in G)if(G[B].location>=0){let K=j[B];K===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));let Z={};Z.attribute=K,K&&K.data&&(Z.data=K.data),k[B]=Z,D++}s.attributes=k,s.attributesNum=D,s.index=F})(_,v,x,M),M!==null&&e.update(M,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(R,L,W,F){h();let k=F.attributes,j=W.getAttributes(),D=L.defaultAttributeValues;for(let G in j){let B=j[G];if(B.location>=0){let K=k[G];if(K===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){let Z=K.normalized,de=K.itemSize,me=e.get(K);if(me===void 0)continue;let te=me.buffer,ce=me.type,le=me.bytesPerElement,se=ce===r.INT||ce===r.UNSIGNED_INT||K.gpuType===jc;if(K.isInterleavedBufferAttribute){let he=K.data,N=he.stride,C=K.offset;if(he.isInstancedInterleavedBuffer){for(let z=0;z<B.locationSize;z++)d(B.location+z,he.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let z=0;z<B.locationSize;z++)u(B.location+z);r.bindBuffer(r.ARRAY_BUFFER,te);for(let z=0;z<B.locationSize;z++)f(B.location+z,de/B.locationSize,ce,Z,N*le,(C+de/B.locationSize*z)*le,se)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<B.locationSize;he++)d(B.location+he,K.meshPerAttribute);R.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<B.locationSize;he++)u(B.location+he);r.bindBuffer(r.ARRAY_BUFFER,te);for(let he=0;he<B.locationSize;he++)f(B.location+he,de/B.locationSize,ce,Z,de*le,de/B.locationSize*he*le,se)}}else if(D!==void 0){let Z=D[G];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(B.location,Z);break;case 3:r.vertexAttrib3fv(B.location,Z);break;case 4:r.vertexAttrib4fv(B.location,Z);break;default:r.vertexAttrib1fv(B.location,Z)}}}}p()})(_,g,x,v),M!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:y,resetDefaultState:m,dispose:function(){y();for(let _ in n){let g=n[_];for(let x in g){let v=g[x];for(let M in v)l(v[M].object),delete v[M];delete g[x]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let g=n[_.id];for(let x in g){let v=g[x];for(let M in v)l(v[M].object),delete v[M];delete g[x]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let g in n){let x=n[g];if(x[_.id]===void 0)continue;let v=x[_.id];for(let M in v)l(v[M].object),delete v[M];delete x[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function op(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function lp(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===In||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==gn&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Pn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function cp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new qn,o=new ze,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,p!==!0||y===null){let m=d+4*f,_=u.matrixWorldInverse;o.getNormalMatrix(_),(y===null||y.length<m)&&(y=new Float32Array(m));for(let g=0,x=d;g!==f;++g,x+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(y,x),y[x+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!y)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,g=4*_,x=m.clippingState||null;l.value=x,x=c(p,u,g,d);for(let v=0;v!==g;++v)x[v]=t[v];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function hp(r){let e=new WeakMap;function t(i,s){return s===Rl?i.mapping=_r:s===Al&&(i.mapping=Mr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Rl||s===Al){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new cc(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var xi=class extends ys{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},du=[.125,.215,.35,.446,.526,.582],ns=20,ul=new xi,pu=new Ce,dl=null,pl=0,fl=0,ml=!1,zi=(1+Math.sqrt(5))/2,hr=1/zi,fu=[new A(-zi,hr,0),new A(zi,hr,0),new A(-hr,0,zi),new A(hr,0,zi),new A(0,zi,-hr),new A(0,zi,hr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,pl,fl),this._renderer.xr.enabled=ml,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Qn,format:In,colorSpace:Dr,depthBuffer:!1},i=mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+du.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=du[d-a+4-1]:d===0&&(f=0),c.push(f);let y=1/(p-2),m=-y,_=1+y,g=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,v=6,M=3,E=2,T=1,R=new Float32Array(M*v*x),L=new Float32Array(E*v*x),W=new Float32Array(T*v*x);for(let k=0;k<x;k++){let j=k%3*2/3-1,D=k>2?0:-1,G=[j,D,0,j+2/3,D,0,j+2/3,D+1,0,j,D,0,j+2/3,D+1,0,j,D+1,0];R.set(G,M*v*k),L.set(g,E*v*k);let B=[k,k,k,k,k,k];W.set(B,T*v*k)}let F=new et;F.setAttribute("position",new ht(R,M)),F.setAttribute("uv",new ht(L,E)),F.setAttribute("faceIndex",new ht(W,T)),o.push(F),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(ns),h=new A(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:$c(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,i){let s=new Ut(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(pu),l.toneMapping=0,l.autoClear=!1;let u=new bt({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Pe(new ge,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(pu),p=!0);for(let y=0;y<6;y++){let m=y%3;m===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):m===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let _=this._cubeSize;ya(i,m*_,y>2?_:0,_,_),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===_r||e.mapping===Mr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ya(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fu[(i-s-1)%fu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Pe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,y=isFinite(s)?1+Math.floor(3*f):ns;y>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let m=[],_=0;for(let v=0;v<ns;++v){let M=v/f,E=Math.exp(-M*M/2);m.push(E),v===0?_+=E:v<y&&(_+=2*E)}for(let v=0;v<m.length;v++)m[v]=m[v]/_;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let x=this._sizeLods[i];ya(t,3*x*(i>g-4?i-g+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,ul)}};function mu(r,e,t){let n=new en(r,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ya(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gu(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function vu(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function up(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Rl||s===Al,o=s===_r||s===Mr;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Vi(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Vi(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function dp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pp(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let m=0,_=y.length;m<_;m+=3){let g=y[m+0],x=y[m+1],v=y[m+2];c.push(g,x,x,v,v,g)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let m=0,_=y.length/3-1;m<_;m+=3){let g=m+0,x=m+1,v=m+2;c.push(g,x,x,v,v,g)}}}let p=new(u0(c)?Va:ka)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function fp(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function mp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function gp(r,e,t){let n=new WeakMap,i=new Je;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let R=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),f===!0&&(g=3);let x=a.attributes.position.count*g,v=1;x>e.maxTextureSize&&(v=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*v*4*h),E=new Ga(M,x,v,h);E.type=Pn,E.needsUpdate=!0;let T=4*g;for(let L=0;L<h;L++){let W=y[L],F=m[L],k=_[L],j=x*v*4*L;for(let D=0;D<W.count;D++){let G=D*T;d===!0&&(i.fromBufferAttribute(W,D),M[j+G+0]=i.x,M[j+G+1]=i.y,M[j+G+2]=i.z,M[j+G+3]=0),p===!0&&(i.fromBufferAttribute(F,D),M[j+G+4]=i.x,M[j+G+5]=i.y,M[j+G+6]=i.z,M[j+G+7]=0),f===!0&&(i.fromBufferAttribute(k,D),M[j+G+8]=i.x,M[j+G+9]=i.y,M[j+G+10]=i.z,M[j+G+11]=k.itemSize===4?i.w:1)}}u={count:h,texture:E,size:new pe(x,v)},n.set(a,u),a.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function vp(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var Rr=class extends Vt{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==gs&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=$n),n===void 0&&h===Sr&&(n=Er),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},m0=new Vt,yu=new Rr(1,1),g0=new Ga,v0=new oc,y0=new Wa,xu=[],_u=[],Mu=new Float32Array(16),Eu=new Float32Array(9),Su=new Float32Array(4);function Ur(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=xu[i];if(s===void 0&&(s=new Float32Array(i),xu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uo(r,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function _p(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function Ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;Su.set(n),r.uniformMatrix2fv(this.addr,!1,Su),_t(t,n)}}function Sp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;Eu.set(n),r.uniformMatrix3fv(this.addr,!1,Eu),_t(t,n)}}function bp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(xt(t,n))return;Mu.set(n),r.uniformMatrix4fv(this.addr,!1,Mu),_t(t,n)}}function Tp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function Rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function Ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function Cp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function Ip(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function Lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function Dp(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(yu.compareFunction=515,s=yu):s=m0,t.setTexture2D(e||s,i)}function Up(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||v0,i)}function Np(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||y0,i)}function Op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||g0,i)}function Hp(r,e){r.uniform1fv(this.addr,e)}function zp(r,e){let t=Ur(e,this.size,2);r.uniform2fv(this.addr,t)}function Bp(r,e){let t=Ur(e,this.size,3);r.uniform3fv(this.addr,t)}function Fp(r,e){let t=Ur(e,this.size,4);r.uniform4fv(this.addr,t)}function Gp(r,e){let t=Ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kp(r,e){let t=Ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Vp(r,e){let t=Ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wp(r,e){r.uniform1iv(this.addr,e)}function jp(r,e){r.uniform2iv(this.addr,e)}function Xp(r,e){r.uniform3iv(this.addr,e)}function qp(r,e){r.uniform4iv(this.addr,e)}function Yp(r,e){r.uniform1uiv(this.addr,e)}function Zp(r,e){r.uniform2uiv(this.addr,e)}function Jp(r,e){r.uniform3uiv(this.addr,e)}function $p(r,e){r.uniform4uiv(this.addr,e)}function Kp(r,e,t){let n=this.cache,i=e.length,s=uo(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||m0,s[a])}function Qp(r,e,t){let n=this.cache,i=e.length,s=uo(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||v0,s[a])}function ef(r,e,t){let n=this.cache,i=e.length,s=uo(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||y0,s[a])}function tf(r,e,t){let n=this.cache,i=e.length,s=uo(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||g0,s[a])}var hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return yp;case 35664:return xp;case 35665:return _p;case 35666:return Mp;case 35674:return Ep;case 35675:return Sp;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Rp;case 35669:case 35673:return Ap;case 5125:return Cp;case 36294:return Pp;case 36295:return Ip;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Op}})(t.type)}},uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Hp;case 35664:return zp;case 35665:return Bp;case 35666:return Fp;case 35674:return Gp;case 35675:return kp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return jp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Zp;case 36295:return Jp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return ef;case 36289:case 36303:case 36311:case 36292:return tf}})(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function bu(r,e){r.seq.push(e),r.map[e.id]=e}function nf(r,e,t){let n=r.name,i=n.length;for(gl.lastIndex=0;;){let s=gl.exec(n),a=gl.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){bu(t,c===void 0?new hc(o,r,e):new uc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new dc(o),bu(t,h)),t=h}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);nf(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Tu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var rf=0,wu=new ze;function Ru(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function sf(r,e){let t=(function(n){Ze._getMatrix(wu,Ze.workingColorSpace,n);let i=`mat3( ${wu.elements.map((s=>s.toFixed(4)))} )`;switch(Ze.getTransfer(n)){case ho:return[i,"LinearTransferOETF"];case tt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function af(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xa=new A;function of(){return Ze.getLuminanceCoefficients(xa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${xa.x.toFixed(4)}, ${xa.y.toFixed(4)}, ${xa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function is(r){return r!==""}function Au(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(r){return r.replace(lf,hf)}var cf=new Map;function hf(r,e){let t=Ge[e];if(t===void 0){let n=cf.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return pc(t)}var uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(r){return r.replace(uf,df)}function df(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Iu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pf(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(F){let k="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===1?k="SHADOWMAP_TYPE_PCF":F.shadowMapType===2?k="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===3&&(k="SHADOWMAP_TYPE_VSM"),k})(t),c=(function(F){let k="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case _r:case Mr:k="ENVMAP_TYPE_CUBE";break;case co:k="ENVMAP_TYPE_CUBE_UV"}return k})(t),h=(function(F){let k="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===Mr&&(k="ENVMAP_MODE_REFRACTION"),k})(t),u=(function(F){let k="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case 0:k="ENVMAP_BLENDING_MULTIPLY";break;case 1:k="ENVMAP_BLENDING_MIX";break;case 2:k="ENVMAP_BLENDING_ADD"}return k})(t),d=(function(F){let k=F.envMapCubeUVHeight;if(k===null)return null;let j=Math.log2(k)-2,D=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:D,maxMip:j}})(t),p=(function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",F.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)})(t),f=(function(F){let k=[];for(let j in F){let D=F[j];D!==!1&&k.push("#define "+j+" "+D)}return k.join(`
`)})(s),y=i.createProgram(),m,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(is).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(is).join(`
`),_.length>0&&(_+=`
`)):(m=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),_=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ge.tonemapping_pars_fragment:"",t.toneMapping!==0?af("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,sf("linearToOutputTexel",t.outputColorSpace),of(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=pc(a),a=Au(a,t),a=Cu(a,t),o=pc(o),o=Au(o,t),o=Cu(o,t),a=Pu(a),o=Pu(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let x=g+m+a,v=g+_+o,M=Tu(i,i.VERTEX_SHADER,x),E=Tu(i,i.FRAGMENT_SHADER,v);function T(F){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(y).trim(),j=i.getShaderInfoLog(M).trim(),D=i.getShaderInfoLog(E).trim(),G=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,M,E);else{let K=Ru(i,M,"vertex"),Z=Ru(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+K+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):j!==""&&D!==""||(B=!1);B&&(F.diagnostics={runnable:G,programLog:k,vertexShader:{log:j,prefix:m},fragmentShader:{log:D,prefix:_}})}i.deleteShader(M),i.deleteShader(E),R=new xr(i,y),L=(function(k,j){let D={},G=k.getProgramParameter(j,k.ACTIVE_ATTRIBUTES);for(let B=0;B<G;B++){let K=k.getActiveAttrib(j,B),Z=K.name,de=1;K.type===k.FLOAT_MAT2&&(de=2),K.type===k.FLOAT_MAT3&&(de=3),K.type===k.FLOAT_MAT4&&(de=4),D[Z]={type:K.type,location:k.getAttribLocation(j,Z),locationSize:de}}return D})(i,y)}let R,L;i.attachShader(y,M),i.attachShader(y,E),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),this.getUniforms=function(){return R===void 0&&T(this),R},this.getAttributes=function(){return L===void 0&&T(this),L};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=i.getProgramParameter(y,37297)),W},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=E,this}var ff=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=ff++,this.code=e,this.usedTimes=0}};function mf(r,e,t,n,i,s,a){let o=new vs,l=new fc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,x,v){let M=x.fog,E=v.geometry,T=m.isMeshStandardMaterial?x.environment:null,R=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),L=R&&R.mapping===co?R.image.height:null,W=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let F=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,k=F!==void 0?F.length:0,j,D,G,B,K=0;if(E.morphAttributes.position!==void 0&&(K=1),E.morphAttributes.normal!==void 0&&(K=2),E.morphAttributes.color!==void 0&&(K=3),W){let wn=An[W];j=wn.vertexShader,D=wn.fragmentShader}else j=m.vertexShader,D=m.fragmentShader,l.update(m),G=l.getVertexShaderID(m),B=l.getFragmentShaderID(m);let Z=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),me=v.isInstancedMesh===!0,te=v.isBatchedMesh===!0,ce=!!m.map,le=!!m.matcap,se=!!R,he=!!m.aoMap,N=!!m.lightMap,C=!!m.bumpMap,z=!!m.normalMap,q=!!m.displacementMap,H=!!m.emissiveMap,X=!!m.metalnessMap,w=!!m.roughnessMap,I=m.anisotropy>0,V=m.clearcoat>0,ee=m.dispersion>0,Y=m.iridescence>0,ne=m.sheen>0,oe=m.transmission>0,ie=I&&!!m.anisotropyMap,ue=V&&!!m.clearcoatMap,ae=V&&!!m.clearcoatNormalMap,ve=V&&!!m.clearcoatRoughnessMap,Te=Y&&!!m.iridescenceMap,Ee=Y&&!!m.iridescenceThicknessMap,Le=ne&&!!m.sheenColorMap,Se=ne&&!!m.sheenRoughnessMap,Fe=!!m.specularMap,we=!!m.specularColorMap,fe=!!m.specularIntensityMap,be=oe&&!!m.transmissionMap,Oe=oe&&!!m.thicknessMap,We=!!m.gradientMap,Ct=!!m.alphaMap,on=m.alphaTest>0,vt=!!m.alphaHash,Nt=!!m.extensions,Fn=0;m.toneMapped&&(Z!==null&&Z.isXRRenderTarget!==!0||(Fn=r.toneMapping));let Q={shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:j,fragmentShader:D,defines:m.defines,customVertexShaderID:G,customFragmentShaderID:B,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:te,batchingColor:te&&v._colorsTexture!==null,instancing:me,instancingColor:me&&v.instanceColor!==null,instancingMorph:me&&v.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Dr,alphaToCoverage:!!m.alphaToCoverage,map:ce,matcap:le,envMap:se,envMapMode:se&&R.mapping,envMapCubeUVHeight:L,aoMap:he,lightMap:N,bumpMap:C,normalMap:z,displacementMap:d&&q,emissiveMap:H,normalMapObjectSpace:z&&m.normalMapType===1,normalMapTangentSpace:z&&m.normalMapType===0,metalnessMap:X,roughnessMap:w,anisotropy:I,anisotropyMap:ie,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:ee,iridescence:Y,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ne,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:Fe,specularColorMap:we,specularIntensityMap:fe,transmission:oe,transmissionMap:be,thicknessMap:Oe,gradientMap:We,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Ct,alphaTest:on,alphaHash:vt,combine:m.combine,mapUv:ce&&y(m.map.channel),aoMapUv:he&&y(m.aoMap.channel),lightMapUv:N&&y(m.lightMap.channel),bumpMapUv:C&&y(m.bumpMap.channel),normalMapUv:z&&y(m.normalMap.channel),displacementMapUv:q&&y(m.displacementMap.channel),emissiveMapUv:H&&y(m.emissiveMap.channel),metalnessMapUv:X&&y(m.metalnessMap.channel),roughnessMapUv:w&&y(m.roughnessMap.channel),anisotropyMapUv:ie&&y(m.anisotropyMap.channel),clearcoatMapUv:ue&&y(m.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&y(m.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&y(m.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(m.sheenRoughnessMap.channel),specularMapUv:Fe&&y(m.specularMap.channel),specularColorMapUv:we&&y(m.specularColorMap.channel),specularIntensityMapUv:fe&&y(m.specularIntensityMap.channel),transmissionMapUv:be&&y(m.transmissionMap.channel),thicknessMapUv:Oe&&y(m.thicknessMap.channel),alphaMapUv:Ct&&y(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(z||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!E.attributes.uv&&(ce||Ct),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:de,skinning:v.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:K,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fn,decodeVideoTexture:ce&&m.map.isVideoTexture===!0&&Ze.getTransfer(m.map.colorSpace)===tt,decodeVideoTextureEmissive:H&&m.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(m.emissiveMap.colorSpace)===tt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Nt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&m.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Q.vertexUv1s=c.has(1),Q.vertexUv2s=c.has(2),Q.vertexUv3s=c.has(3),c.clear(),Q},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)})(_,m),(function(g,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),g.push(o.mask)})(_,m),_.push(r.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],g;if(_){let x=An[_];g=ep.clone(x.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g;for(let x=0,v=h.length;x<v;x++){let M=h[x];if(M.cacheKey===_){g=M,++g.usedTimes;break}}return g===void 0&&(g=new pf(r,_,m,s),h.push(g)),g},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function gf(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function vf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Lu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Du(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||vf),n.length>1&&n.sort(o||Lu),i.length>1&&i.sort(o||Lu)}}}function yf(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Du,r.set(e,[i])):t>=n.length?(i=new Du,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function xf(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ce};break;case"SpotLight":t={position:new A,direction:new A,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var _f=0;function Mf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ef(r){let e=new xf,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new A);let i=new A,s=new Ne,a=new Ne;return{setup:function(o){let l=0,c=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,d=0,p=0,f=0,y=0,m=0,_=0,g=0,x=0,v=0,M=0;o.sort(Mf);for(let T=0,R=o.length;T<R;T++){let L=o[T],W=L.color,F=L.intensity,k=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=W.r*F,c+=W.g*F,h+=W.b*F;else if(L.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(L.sh.coefficients[D],F);M++}else if(L.isDirectionalLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,B=t.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.directionalShadow[u]=B,n.directionalShadowMap[u]=j,n.directionalShadowMatrix[u]=L.shadow.matrix,m++}n.directional[u]=D,u++}else if(L.isSpotLight){let D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(W).multiplyScalar(F),D.distance=k,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,n.spot[p]=D;let G=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,G.updateMatrices(L),L.castShadow&&v++),n.spotLightMatrix[p]=G.matrix,L.castShadow){let B=t.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,n.spotShadow[p]=B,n.spotShadowMap[p]=j,g++}p++}else if(L.isRectAreaLight){let D=e.get(L);D.color.copy(W).multiplyScalar(F),D.halfWidth.set(.5*L.width,0,0),D.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=D,f++}else if(L.isPointLight){let D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity),D.distance=L.distance,D.decay=L.decay,L.castShadow){let G=L.shadow,B=t.get(L);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,n.pointShadow[d]=B,n.pointShadowMap[d]=j,n.pointShadowMatrix[d]=L.shadow.matrix,_++}n.point[d]=D,d++}else if(L.isHemisphereLight){let D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(F),D.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[y]=D,y++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let E=n.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===f&&E.hemiLength===y&&E.numDirectionalShadows===m&&E.numPointShadows===_&&E.numSpotShadows===g&&E.numSpotMaps===x&&E.numLightProbes===M||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=g+x-v,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=M,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=f,E.hemiLength=y,E.numDirectionalShadows=m,E.numPointShadows=_,E.numSpotShadows=g,E.numSpotMaps=x,E.numLightProbes=M,n.version=_f++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let y=0,m=o.length;y<m;y++){let _=o[y];if(_.isDirectionalLight){let g=n.directional[c];g.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(f),c++}else if(_.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),g.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(f),u++}else if(_.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),g.halfWidth.set(.5*_.width,0,0),g.halfHeight.set(0,.5*_.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(f),p++}}},state:n}}function Uu(r){let e=new Ef(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Sf(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Uu(r),e.set(t,[s])):n>=i.length?(s=new Uu(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var gc=class extends yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bf(r,e,t){let n=new wr,i=new pe,s=new pe,a=new Je,o=new gc({depthPacking:3201}),l=new vc,c={},h=t.maxTextureSize,u={[od]:1,[lo]:0,[$e]:2},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new et;f.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;function g(E,T){let R=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new en(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,p,y,null)}function x(E,T,R,L){let W=null,F=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)W=F;else if(W=R.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let k=W.uuid,j=T.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let G=D[j];G===void 0&&(G=W.clone(),D[j]=G,T.addEventListener("dispose",M)),W=G}return W.visible=T.visible,W.wireframe=T.wireframe,W.side=L===3?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],W.alphaMap=T.alphaMap,W.alphaTest=T.alphaTest,W.map=T.map,W.clipShadows=T.clipShadows,W.clippingPlanes=T.clippingPlanes,W.clipIntersection=T.clipIntersection,W.displacementMap=T.displacementMap,W.displacementScale=T.displacementScale,W.displacementBias=T.displacementBias,W.wireframeLinewidth=T.wireframeLinewidth,W.linewidth=T.linewidth,R.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(r.properties.get(W).light=R),W}function v(E,T,R,L,W){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&W===3)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let k=e.update(E),j=E.material;if(Array.isArray(j)){let D=k.groups;for(let G=0,B=D.length;G<B;G++){let K=D[G],Z=j[K.materialIndex];if(Z&&Z.visible){let de=x(E,Z,L,W);E.onBeforeShadow(r,E,T,R,k,de,K),r.renderBufferDirect(R,null,k,de,E,K),E.onAfterShadow(r,E,T,R,k,de,K)}}}else if(j.visible){let D=x(E,j,L,W);E.onBeforeShadow(r,E,T,R,k,D,null),r.renderBufferDirect(R,null,k,D,E,null),E.onAfterShadow(r,E,T,R,k,D,null)}}let F=E.children;for(let k=0,j=F.length;k<j;k++)v(F[k],T,R,L,W)}function M(E){E.target.removeEventListener("dispose",M);for(let T in c){let R=c[T],L=E.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let L=r.getRenderTarget(),W=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),k=r.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let j=_!==3&&this.type===3,D=_===3&&this.type!==3;for(let G=0,B=E.length;G<B;G++){let K=E[G],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let de=Z.getFrameExtents();if(i.multiply(de),s.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/de.x),i.x=s.x*de.x,Z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/de.y),i.y=s.y*de.y,Z.mapSize.y=s.y)),Z.map===null||j===!0||D===!0){let te=this.type!==3?{minFilter:fn,magFilter:fn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new en(i.x,i.y,te),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();let me=Z.getViewportCount();for(let te=0;te<me;te++){let ce=Z.getViewport(te);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),k.viewport(a),Z.updateMatrices(K,te),n=Z.getFrustum(),v(T,R,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===3&&g(Z,R),Z.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(L,W,F)}}var Tf={[Sd]:1,[Td]:6,[Rd]:7,[wd]:5,[bd]:0,[Cd]:2,[Pd]:4,[Ad]:3};function wf(r,e){let t=new function(){let w=!1,I=new Je,V=null,ee=new Je(0,0,0,0);return{setMask:function(Y){V===Y||w||(r.colorMask(Y,Y,Y,Y),V=Y)},setLocked:function(Y){w=Y},setClear:function(Y,ne,oe,ie,ue){ue===!0&&(Y*=ie,ne*=ie,oe*=ie),I.set(Y,ne,oe,ie),ee.equals(I)===!1&&(r.clearColor(Y,ne,oe,ie),ee.copy(I))},reset:function(){w=!1,V=null,ee.set(-1,0,0,0)}}},n=new function(){let w=!1,I=!1,V=null,ee=null,Y=null;return{setReversed:function(ne){if(I!==ne){let oe=e.get("EXT_clip_control");I?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);let ie=Y;Y=null,this.setClear(ie)}I=ne},getReversed:function(){return I},setTest:function(ne){ne?se(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ne){V===ne||w||(r.depthMask(ne),V=ne)},setFunc:function(ne){if(I&&(ne=Tf[ne]),ee!==ne){switch(ne){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}ee=ne}},setLocked:function(ne){w=ne},setClear:function(ne){Y!==ne&&(I&&(ne=1-ne),r.clearDepth(ne),Y=ne)},reset:function(){w=!1,V=null,ee=null,Y=null,I=!1}}},i=new function(){let w=!1,I=null,V=null,ee=null,Y=null,ne=null,oe=null,ie=null,ue=null;return{setTest:function(ae){w||(ae?se(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(ae){I===ae||w||(r.stencilMask(ae),I=ae)},setFunc:function(ae,ve,Te){V===ae&&ee===ve&&Y===Te||(r.stencilFunc(ae,ve,Te),V=ae,ee=ve,Y=Te)},setOp:function(ae,ve,Te){ne===ae&&oe===ve&&ie===Te||(r.stencilOp(ae,ve,Te),ne=ae,oe=ve,ie=Te)},setLocked:function(ae){w=ae},setClear:function(ae){ue!==ae&&(r.clearStencil(ae),ue=ae)},reset:function(){w=!1,I=null,V=null,ee=null,Y=null,ne=null,oe=null,ie=null,ue=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,y=null,m=null,_=null,g=null,x=null,v=new Ce(0,0,0),M=0,E=!1,T=null,R=null,L=null,W=null,F=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,D=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=D>=1):G.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=D>=2);let B=null,K={},Z=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),me=new Je().fromArray(Z),te=new Je().fromArray(de);function ce(w,I,V,ee){let Y=new Uint8Array(4),ne=r.createTexture();r.bindTexture(w,ne),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<V;oe++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(I,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,Y):r.texImage2D(I+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Y);return ne}let le={};function se(w){o[w]!==!0&&(r.enable(w),o[w]=!0)}function he(w){o[w]!==!1&&(r.disable(w),o[w]=!1)}le[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),se(r.DEPTH_TEST),n.setFunc(3),q(!1),H(1),se(r.CULL_FACE),z(0);let N={[Bi]:r.FUNC_ADD,[ld]:r.FUNC_SUBTRACT,[cd]:r.FUNC_REVERSE_SUBTRACT};N[103]=r.MIN,N[104]=r.MAX;let C={[hd]:r.ZERO,[ud]:r.ONE,[dd]:r.SRC_COLOR,[Tl]:r.SRC_ALPHA,[yd]:r.SRC_ALPHA_SATURATE,[gd]:r.DST_COLOR,[fd]:r.DST_ALPHA,[pd]:r.ONE_MINUS_SRC_COLOR,[wl]:r.ONE_MINUS_SRC_ALPHA,[vd]:r.ONE_MINUS_DST_COLOR,[md]:r.ONE_MINUS_DST_ALPHA,[xd]:r.CONSTANT_COLOR,[_d]:r.ONE_MINUS_CONSTANT_COLOR,[Md]:r.CONSTANT_ALPHA,[Ed]:r.ONE_MINUS_CONSTANT_ALPHA};function z(w,I,V,ee,Y,ne,oe,ie,ue,ae){if(w!==0){if(d===!1&&(se(r.BLEND),d=!0),w===5)Y=Y||I,ne=ne||V,oe=oe||ee,I===f&&Y===_||(r.blendEquationSeparate(N[I],N[Y]),f=I,_=Y),V===y&&ee===m&&ne===g&&oe===x||(r.blendFuncSeparate(C[V],C[ee],C[ne],C[oe]),y=V,m=ee,g=ne,x=oe),ie.equals(v)!==!1&&ue===M||(r.blendColor(ie.r,ie.g,ie.b,ue),v.copy(ie),M=ue),p=w,E=!1;else if(w!==p||ae!==E){if(f===Bi&&_===Bi||(r.blendEquation(r.FUNC_ADD),f=Bi,_=Bi),ae)switch(w){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}y=null,m=null,g=null,x=null,v.set(0,0,0),M=0,p=w,E=ae}}else d===!0&&(he(r.BLEND),d=!1)}function q(w){T!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),T=w)}function H(w){w!==0?(se(r.CULL_FACE),w!==R&&(w===1?r.cullFace(r.BACK):w===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),R=w}function X(w,I,V){w?(se(r.POLYGON_OFFSET_FILL),W===I&&F===V||(r.polygonOffset(I,V),W=I,F=V)):he(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:se,disable:he,bindFramebuffer:function(w,I){return l[w]!==I&&(r.bindFramebuffer(w,I),l[w]=I,w===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=I),w===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(w,I){let V=h,ee=!1;if(w){V=c.get(I),V===void 0&&(V=[],c.set(I,V));let Y=w.textures;if(V.length!==Y.length||V[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,oe=Y.length;ne<oe;ne++)V[ne]=r.COLOR_ATTACHMENT0+ne;V.length=Y.length,ee=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,ee=!0);ee&&r.drawBuffers(V)},useProgram:function(w){return u!==w&&(r.useProgram(w),u=w,!0)},setBlending:z,setMaterial:function(w,I){w.side===2?he(r.CULL_FACE):se(r.CULL_FACE);let V=w.side===1;I&&(V=!V),q(V),w.blending===1&&w.transparent===!1?z(0):z(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),n.setFunc(w.depthFunc),n.setTest(w.depthTest),n.setMask(w.depthWrite),t.setMask(w.colorWrite);let ee=w.stencilWrite;i.setTest(ee),ee&&(i.setMask(w.stencilWriteMask),i.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),i.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),X(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:q,setCullFace:H,setLineWidth:function(w){w!==L&&(j&&r.lineWidth(w),L=w)},setPolygonOffset:X,setScissorTest:function(w){w?se(r.SCISSOR_TEST):he(r.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=r.TEXTURE0+k-1),B!==w&&(r.activeTexture(w),B=w)},bindTexture:function(w,I,V){V===void 0&&(V=B===null?r.TEXTURE0+k-1:B);let ee=K[V];ee===void 0&&(ee={type:void 0,texture:void 0},K[V]=ee),ee.type===w&&ee.texture===I||(B!==V&&(r.activeTexture(V),B=V),r.bindTexture(w,I||le[w]),ee.type=w,ee.texture=I)},unbindTexture:function(){let w=K[B];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,I){let V=a.get(I);V===void 0&&(V=new WeakMap,a.set(I,V));let ee=V.get(w);ee===void 0&&(ee=r.getUniformBlockIndex(I,w.name),V.set(w,ee))},uniformBlockBinding:function(w,I){let V=a.get(I).get(w);s.get(I)!==V&&(r.uniformBlockBinding(I,V,w.__bindingPointIndex),s.set(I,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){me.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),me.copy(w))},viewport:function(w){te.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),te.copy(w))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},B=null,K={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,y=null,m=null,_=null,g=null,x=null,v=new Ce(0,0,0),M=0,E=!1,T=null,R=null,L=null,W=null,F=null,me.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Nu(r,e,t,n){let i=(function(s){switch(s){case gn:case n0:return{byteLength:1,components:1};case ms:case i0:case Qn:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case $n:case jc:case Pn:return{byteLength:4,components:1};case r0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case s0:case o0:return r*e;case l0:return r*e*2;case Lr:case Yc:return r*e/i.components*i.byteLength;case c0:case Zc:return r*e*2/i.components*i.byteLength;case a0:return r*e*3/i.components*i.byteLength;case In:case Jc:return r*e*4/i.components*i.byteLength;case Ia:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Il:case Dl:return Math.max(r,16)*Math.max(e,8)/4;case Pl:case Ll:return Math.max(r,8)*Math.max(e,8)/2;case Ul:case Nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Na:case $l:case Kl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case h0:case Ql:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ec:case tc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rf(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(N,C){return p?new OffscreenCanvas(N,C):Ba("canvas")}function y(N,C,z){let q=1,H=he(N);if((H.width>z||H.height>z)&&(q=z/Math.max(H.width,H.height)),q<1){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let X=Math.floor(q*H.width),w=Math.floor(q*H.height);u===void 0&&(u=f(X,w));let I=C?f(X,w):u;return I.width=X,I.height=w,I.getContext("2d").drawImage(N,0,0,X,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+X+"x"+w+")."),I}return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),N}return N}function m(N){return N.generateMipmaps}function _(N){r.generateMipmap(N)}function g(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(N,C,z,q,H=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let X=C;if(C===r.RED&&(z===r.FLOAT&&(X=r.R32F),z===r.HALF_FLOAT&&(X=r.R16F),z===r.UNSIGNED_BYTE&&(X=r.R8)),C===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.R8UI),z===r.UNSIGNED_SHORT&&(X=r.R16UI),z===r.UNSIGNED_INT&&(X=r.R32UI),z===r.BYTE&&(X=r.R8I),z===r.SHORT&&(X=r.R16I),z===r.INT&&(X=r.R32I)),C===r.RG&&(z===r.FLOAT&&(X=r.RG32F),z===r.HALF_FLOAT&&(X=r.RG16F),z===r.UNSIGNED_BYTE&&(X=r.RG8)),C===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.RG8UI),z===r.UNSIGNED_SHORT&&(X=r.RG16UI),z===r.UNSIGNED_INT&&(X=r.RG32UI),z===r.BYTE&&(X=r.RG8I),z===r.SHORT&&(X=r.RG16I),z===r.INT&&(X=r.RG32I)),C===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.RGB8UI),z===r.UNSIGNED_SHORT&&(X=r.RGB16UI),z===r.UNSIGNED_INT&&(X=r.RGB32UI),z===r.BYTE&&(X=r.RGB8I),z===r.SHORT&&(X=r.RGB16I),z===r.INT&&(X=r.RGB32I)),C===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),z===r.UNSIGNED_INT&&(X=r.RGBA32UI),z===r.BYTE&&(X=r.RGBA8I),z===r.SHORT&&(X=r.RGBA16I),z===r.INT&&(X=r.RGBA32I)),C===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),C===r.RGBA){let w=H?ho:Ze.getTransfer(q);z===r.FLOAT&&(X=r.RGBA32F),z===r.HALF_FLOAT&&(X=r.RGBA16F),z===r.UNSIGNED_BYTE&&(X=w===tt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return X!==r.R16F&&X!==r.R32F&&X!==r.RG16F&&X!==r.RG32F&&X!==r.RGBA16F&&X!==r.RGBA32F||e.get("EXT_color_buffer_float"),X}function v(N,C){let z;return N?C===null||C===$n||C===Er?z=r.DEPTH24_STENCIL8:C===Pn?z=r.DEPTH32F_STENCIL8:C===ms&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===$n||C===Er?z=r.DEPTH_COMPONENT24:C===Pn?z=r.DEPTH_COMPONENT32F:C===ms&&(z=r.DEPTH_COMPONENT16),z}function M(N,C){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==fn&&N.minFilter!==kt?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function E(N){let C=N.target;C.removeEventListener("dispose",E),(function(z){let q=n.get(z);if(q.__webglInit===void 0)return;let H=z.source,X=d.get(H);if(X){let w=X[q.__cacheKey];w.usedTimes--,w.usedTimes===0&&R(z),Object.keys(X).length===0&&d.delete(H)}n.remove(z)})(C),C.isVideoTexture&&h.delete(C)}function T(N){let C=N.target;C.removeEventListener("dispose",T),(function(z){let q=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(q.__webglFramebuffer[X]))for(let w=0;w<q.__webglFramebuffer[X].length;w++)r.deleteFramebuffer(q.__webglFramebuffer[X][w]);else r.deleteFramebuffer(q.__webglFramebuffer[X]);q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[X])}else{if(Array.isArray(q.__webglFramebuffer))for(let X=0;X<q.__webglFramebuffer.length;X++)r.deleteFramebuffer(q.__webglFramebuffer[X]);else r.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let X=0;X<q.__webglColorRenderbuffer.length;X++)q.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[X]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}let H=z.textures;for(let X=0,w=H.length;X<w;X++){let I=n.get(H[X]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(z)})(C)}function R(N){let C=n.get(N);r.deleteTexture(C.__webglTexture);let z=N.source;delete d.get(z)[C.__cacheKey],a.memory.textures--}let L=0;function W(N,C){let z=n.get(N);if(N.isVideoTexture&&(function(q){let H=a.render.frame;h.get(q)!==H&&(h.set(q,H),q.update())})(N),N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){let q=N.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(q.complete!==!1)return void B(z,N,C);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+C)}let F={[gi]:r.REPEAT,[fs]:r.CLAMP_TO_EDGE,[Cl]:r.MIRRORED_REPEAT},k={[fn]:r.NEAREST,[Id]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[ko]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},j={[Ld]:r.NEVER,[Bd]:r.ALWAYS,[Dd]:r.LESS,[Nd]:r.LEQUAL,[Ud]:r.EQUAL,[zd]:r.GEQUAL,[Od]:r.GREATER,[Hd]:r.NOTEQUAL};function D(N,C){if(C.type!==Pn||e.has("OES_texture_float_linear")!==!1||C.magFilter!==kt&&C.magFilter!==ko&&C.magFilter!==Qs&&C.magFilter!==fi&&C.minFilter!==kt&&C.minFilter!==ko&&C.minFilter!==Qs&&C.minFilter!==fi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,F[C.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,F[C.wrapT]),N!==r.TEXTURE_3D&&N!==r.TEXTURE_2D_ARRAY||r.texParameteri(N,r.TEXTURE_WRAP_R,F[C.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,k[C.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,k[C.minFilter]),C.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,j[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===fn||C.minFilter!==Qs&&C.minFilter!==fi||C.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function G(N,C){let z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",E));let q=C.source,H=d.get(q);H===void 0&&(H={},d.set(q,H));let X=(function(w){let I=[];return I.push(w.wrapS),I.push(w.wrapT),I.push(w.wrapR||0),I.push(w.magFilter),I.push(w.minFilter),I.push(w.anisotropy),I.push(w.internalFormat),I.push(w.format),I.push(w.type),I.push(w.generateMipmaps),I.push(w.premultiplyAlpha),I.push(w.flipY),I.push(w.unpackAlignment),I.push(w.colorSpace),I.join()})(C);if(X!==N.__cacheKey){H[X]===void 0&&(H[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),H[X].usedTimes++;let w=H[N.__cacheKey];w!==void 0&&(H[N.__cacheKey].usedTimes--,w.usedTimes===0&&R(C)),N.__cacheKey=X,N.__webglTexture=H[X].texture}return z}function B(N,C,z){let q=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(q=r.TEXTURE_3D);let H=G(N,C),X=C.source;t.bindTexture(q,N.__webglTexture,r.TEXTURE0+z);let w=n.get(X);if(X.version!==w.__version||H===!0){t.activeTexture(r.TEXTURE0+z);let I=Ze.getPrimaries(Ze.workingColorSpace),V=C.colorSpace===gr?null:Ze.getPrimaries(C.colorSpace),ee=C.colorSpace===gr||I===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Y=y(C.image,!1,i.maxTextureSize);Y=se(C,Y);let ne=s.convert(C.format,C.colorSpace),oe=s.convert(C.type),ie,ue=x(C.internalFormat,ne,oe,C.colorSpace,C.isVideoTexture);D(q,C);let ae=C.mipmaps,ve=C.isVideoTexture!==!0,Te=w.__version===void 0||H===!0,Ee=X.dataReady,Le=M(C,Y);if(C.isDepthTexture)ue=v(C.format===Sr,C.type),Te&&(ve?t.texStorage2D(r.TEXTURE_2D,1,ue,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,ue,Y.width,Y.height,0,ne,oe,null));else if(C.isDataTexture)if(ae.length>0){ve&&Te&&t.texStorage2D(r.TEXTURE_2D,Le,ue,ae[0].width,ae[0].height);for(let Se=0,Fe=ae.length;Se<Fe;Se++)ie=ae[Se],ve?Ee&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ie.width,ie.height,ne,oe,ie.data):t.texImage2D(r.TEXTURE_2D,Se,ue,ie.width,ie.height,0,ne,oe,ie.data);C.generateMipmaps=!1}else ve?(Te&&t.texStorage2D(r.TEXTURE_2D,Le,ue,Y.width,Y.height),Ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,ne,oe,Y.data)):t.texImage2D(r.TEXTURE_2D,0,ue,Y.width,Y.height,0,ne,oe,Y.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ve&&Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ue,ae[0].width,ae[0].height,Y.depth);for(let Se=0,Fe=ae.length;Se<Fe;Se++)if(ie=ae[Se],C.format!==In)if(ne!==null)if(ve){if(Ee)if(C.layerUpdates.size>0){let we=Nu(ie.width,ie.height,C.format,C.type);for(let fe of C.layerUpdates){let be=ie.data.subarray(fe*we/ie.data.BYTES_PER_ELEMENT,(fe+1)*we/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,fe,ie.width,ie.height,1,ne,be)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ie.width,ie.height,Y.depth,ne,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,ue,ie.width,ie.height,Y.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ie.width,ie.height,Y.depth,ne,oe,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,ue,ie.width,ie.height,Y.depth,0,ne,oe,ie.data)}else{ve&&Te&&t.texStorage2D(r.TEXTURE_2D,Le,ue,ae[0].width,ae[0].height);for(let Se=0,Fe=ae.length;Se<Fe;Se++)ie=ae[Se],C.format!==In?ne!==null?ve?Ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,ie.width,ie.height,ne,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Ee&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ie.width,ie.height,ne,oe,ie.data):t.texImage2D(r.TEXTURE_2D,Se,ue,ie.width,ie.height,0,ne,oe,ie.data)}else if(C.isDataArrayTexture)if(ve){if(Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ue,Y.width,Y.height,Y.depth),Ee)if(C.layerUpdates.size>0){let Se=Nu(Y.width,Y.height,C.format,C.type);for(let Fe of C.layerUpdates){let we=Y.data.subarray(Fe*Se/Y.data.BYTES_PER_ELEMENT,(Fe+1)*Se/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,Y.width,Y.height,1,ne,oe,we)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ne,oe,Y.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,Y.width,Y.height,Y.depth,0,ne,oe,Y.data);else if(C.isData3DTexture)ve?(Te&&t.texStorage3D(r.TEXTURE_3D,Le,ue,Y.width,Y.height,Y.depth),Ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ne,oe,Y.data)):t.texImage3D(r.TEXTURE_3D,0,ue,Y.width,Y.height,Y.depth,0,ne,oe,Y.data);else if(C.isFramebufferTexture){if(Te)if(ve)t.texStorage2D(r.TEXTURE_2D,Le,ue,Y.width,Y.height);else{let Se=Y.width,Fe=Y.height;for(let we=0;we<Le;we++)t.texImage2D(r.TEXTURE_2D,we,ue,Se,Fe,0,ne,oe,null),Se>>=1,Fe>>=1}}else if(ae.length>0){if(ve&&Te){let Se=he(ae[0]);t.texStorage2D(r.TEXTURE_2D,Le,ue,Se.width,Se.height)}for(let Se=0,Fe=ae.length;Se<Fe;Se++)ie=ae[Se],ve?Ee&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ne,oe,ie):t.texImage2D(r.TEXTURE_2D,Se,ue,ne,oe,ie);C.generateMipmaps=!1}else if(ve){if(Te){let Se=he(Y);t.texStorage2D(r.TEXTURE_2D,Le,ue,Se.width,Se.height)}Ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne,oe,Y)}else t.texImage2D(r.TEXTURE_2D,0,ue,ne,oe,Y);m(C)&&_(q),w.__version=X.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function K(N,C,z,q,H,X){let w=s.convert(z.format,z.colorSpace),I=s.convert(z.type),V=x(z.internalFormat,w,I,z.colorSpace),ee=n.get(C),Y=n.get(z);if(Y.__renderTarget=C,!ee.__hasExternalTextures){let ne=Math.max(1,C.width>>X),oe=Math.max(1,C.height>>X);H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?t.texImage3D(H,X,V,ne,oe,C.depth,0,w,I,null):t.texImage2D(H,X,V,ne,oe,0,w,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),le(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,H,Y.__webglTexture,0,ce(C)):(H===r.TEXTURE_2D||H>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,H,Y.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(N,C,z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),C.depthBuffer){let q=C.depthTexture,H=q&&q.isDepthTexture?q.type:null,X=v(C.stencilBuffer,H),w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=ce(C);le(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I,X,C.width,C.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,I,X,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,X,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,w,r.RENDERBUFFER,N)}else{let q=C.textures;for(let H=0;H<q.length;H++){let X=q[H],w=s.convert(X.format,X.colorSpace),I=s.convert(X.type),V=x(X.internalFormat,w,I,X.colorSpace),ee=ce(C);z&&le(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,V,C.width,C.height):le(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,V,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,V,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(N){let C=n.get(N),z=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){let q=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),q){let H=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,q.removeEventListener("dispose",H)};q.addEventListener("dispose",H),C.__depthDisposeCallback=H}C.__boundDepthTexture=q}if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");(function(q,H){if(H&&H.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,q),!H.depthTexture||!H.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(H.depthTexture);X.__renderTarget=H,X.__webglTexture&&H.depthTexture.image.width===H.width&&H.depthTexture.image.height===H.height||(H.depthTexture.image.width=H.width,H.depthTexture.image.height=H.height,H.depthTexture.needsUpdate=!0),W(H.depthTexture,0);let w=X.__webglTexture,I=ce(H);if(H.depthTexture.format===gs)le(H)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,w,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,w,0);else{if(H.depthTexture.format!==Sr)throw new Error("Unknown depthTexture format");le(H)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,w,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,w,0)}})(C.__webglFramebuffer,N)}else if(z){C.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[q]),C.__webglDepthbuffer[q]===void 0)C.__webglDepthbuffer[q]=r.createRenderbuffer(),Z(C.__webglDepthbuffer[q],N,!1);else{let H=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=C.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,H,r.RENDERBUFFER,X)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Z(C.__webglDepthbuffer,N,!1);else{let q=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,H),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,H)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let me=[],te=[];function ce(N){return Math.min(i.maxSamples,N.samples)}function le(N){let C=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function se(N,C){let z=N.colorSpace,q=N.format,H=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||z!==Dr&&z!==gr&&(Ze.getTransfer(z)===tt?q===In&&H===gn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),C}function he(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=function(){let N=L;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),L+=1,N},this.resetTextureUnits=function(){L=0},this.setTexture2D=W,this.setTexture2DArray=function(N,C){let z=n.get(N);N.version>0&&z.__version!==N.version?B(z,N,C):t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+C)},this.setTexture3D=function(N,C){let z=n.get(N);N.version>0&&z.__version!==N.version?B(z,N,C):t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+C)},this.setTextureCube=function(N,C){let z=n.get(N);N.version>0&&z.__version!==N.version?(function(q,H,X){if(H.image.length!==6)return;let w=G(q,H),I=H.source;t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+X);let V=n.get(I);if(I.version!==V.__version||w===!0){t.activeTexture(r.TEXTURE0+X);let ee=Ze.getPrimaries(Ze.workingColorSpace),Y=H.colorSpace===gr?null:Ze.getPrimaries(H.colorSpace),ne=H.colorSpace===gr||ee===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,H.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,H.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let oe=H.isCompressedTexture||H.image[0].isCompressedTexture,ie=H.image[0]&&H.image[0].isDataTexture,ue=[];for(let be=0;be<6;be++)ue[be]=oe||ie?ie?H.image[be].image:H.image[be]:y(H.image[be],!0,i.maxCubemapSize),ue[be]=se(H,ue[be]);let ae=ue[0],ve=s.convert(H.format,H.colorSpace),Te=s.convert(H.type),Ee=x(H.internalFormat,ve,Te,H.colorSpace),Le=H.isVideoTexture!==!0,Se=V.__version===void 0||w===!0,Fe=I.dataReady,we,fe=M(H,ae);if(D(r.TEXTURE_CUBE_MAP,H),oe){Le&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,Ee,ae.width,ae.height);for(let be=0;be<6;be++){we=ue[be].mipmaps;for(let Oe=0;Oe<we.length;Oe++){let We=we[Oe];H.format!==In?ve!==null?Le?Fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,0,0,We.width,We.height,ve,We.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,Ee,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,0,0,We.width,We.height,ve,Te,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe,Ee,We.width,We.height,0,ve,Te,We.data)}}}else{if(we=H.mipmaps,Le&&Se){we.length>0&&fe++;let be=he(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,Ee,be.width,be.height)}for(let be=0;be<6;be++)if(ie){Le?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ue[be].width,ue[be].height,ve,Te,ue[be].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ee,ue[be].width,ue[be].height,0,ve,Te,ue[be].data);for(let Oe=0;Oe<we.length;Oe++){let We=we[Oe].image[be].image;Le?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,0,0,We.width,We.height,ve,Te,We.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,Ee,We.width,We.height,0,ve,Te,We.data)}}else{Le?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ve,Te,ue[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ee,ve,Te,ue[be]);for(let Oe=0;Oe<we.length;Oe++){let We=we[Oe];Le?Fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,0,0,ve,Te,We.image[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe+1,Ee,ve,Te,We.image[be])}}}m(H)&&_(r.TEXTURE_CUBE_MAP),V.__version=I.version,H.onUpdate&&H.onUpdate(H)}q.__version=H.version})(z,N,C):t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+C)},this.rebindTextures=function(N,C,z){let q=n.get(N);C!==void 0&&K(q.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&de(N)},this.setupRenderTarget=function(N){let C=N.texture,z=n.get(N),q=n.get(C);N.addEventListener("dispose",T);let H=N.textures,X=N.isWebGLCubeRenderTarget===!0,w=H.length>1;if(w||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=C.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let I=0;I<6;I++)if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer[I]=[];for(let V=0;V<C.mipmaps.length;V++)z.__webglFramebuffer[I][V]=r.createFramebuffer()}else z.__webglFramebuffer[I]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer=[];for(let I=0;I<C.mipmaps.length;I++)z.__webglFramebuffer[I]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(w)for(let I=0,V=H.length;I<V;I++){let ee=n.get(H[I]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(N.samples>0&&le(N)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let I=0;I<H.length;I++){let V=H[I];z.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[I]);let ee=s.convert(V.format,V.colorSpace),Y=s.convert(V.type),ne=x(V.internalFormat,ee,Y,V.colorSpace,N.isXRRenderTarget===!0),oe=ce(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ne,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+I,r.RENDERBUFFER,z.__webglColorRenderbuffer[I])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),D(r.TEXTURE_CUBE_MAP,C);for(let I=0;I<6;I++)if(C.mipmaps&&C.mipmaps.length>0)for(let V=0;V<C.mipmaps.length;V++)K(z.__webglFramebuffer[I][V],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,V);else K(z.__webglFramebuffer[I],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);m(C)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){for(let I=0,V=H.length;I<V;I++){let ee=H[I],Y=n.get(ee);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture),D(r.TEXTURE_2D,ee),K(z.__webglFramebuffer,N,ee,r.COLOR_ATTACHMENT0+I,r.TEXTURE_2D,0),m(ee)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(I=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(I,q.__webglTexture),D(I,C),C.mipmaps&&C.mipmaps.length>0)for(let V=0;V<C.mipmaps.length;V++)K(z.__webglFramebuffer[V],N,C,r.COLOR_ATTACHMENT0,I,V);else K(z.__webglFramebuffer,N,C,r.COLOR_ATTACHMENT0,I,0);m(C)&&_(I),t.unbindTexture()}N.depthBuffer&&de(N)},this.updateRenderTargetMipmap=function(N){let C=N.textures;for(let z=0,q=C.length;z<q;z++){let H=C[z];if(m(H)){let X=g(N),w=n.get(H).__webglTexture;t.bindTexture(X,w),_(X),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(N){if(N.samples>0){if(le(N)===!1){let C=N.textures,z=N.width,q=N.height,H=r.COLOR_BUFFER_BIT,X=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=n.get(N),I=C.length>1;if(I)for(let V=0;V<C.length;V++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let V=0;V<C.length;V++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(H|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(H|=r.STENCIL_BUFFER_BIT)),I){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,w.__webglColorRenderbuffer[V]);let ee=n.get(C[V]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,z,q,0,0,z,q,H,r.NEAREST),l===!0&&(me.length=0,te.length=0,me.push(r.COLOR_ATTACHMENT0+V),N.depthBuffer&&N.resolveDepthBuffer===!1&&(me.push(X),te.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),I)for(let V=0;V<C.length;V++){t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,w.__webglColorRenderbuffer[V]);let ee=n.get(C[V]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let C=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}},this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=K,this.useMultisampledRTT=le}function Af(r,e){return{convert:function(t,n=""){let i,s=Ze.getTransfer(n);if(t===gn)return r.UNSIGNED_BYTE;if(t===Xc)return r.UNSIGNED_SHORT_4_4_4_4;if(t===qc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===r0)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===n0)return r.BYTE;if(t===i0)return r.SHORT;if(t===ms)return r.UNSIGNED_SHORT;if(t===jc)return r.INT;if(t===$n)return r.UNSIGNED_INT;if(t===Pn)return r.FLOAT;if(t===Qn)return r.HALF_FLOAT;if(t===s0)return r.ALPHA;if(t===a0)return r.RGB;if(t===In)return r.RGBA;if(t===o0)return r.LUMINANCE;if(t===l0)return r.LUMINANCE_ALPHA;if(t===gs)return r.DEPTH_COMPONENT;if(t===Sr)return r.DEPTH_STENCIL;if(t===Lr)return r.RED;if(t===Yc)return r.RED_INTEGER;if(t===c0)return r.RG;if(t===Zc)return r.RG_INTEGER;if(t===Jc)return r.RGBA_INTEGER;if(t===Ia||t===La||t===Da||t===Ua)if(s===tt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Ia)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===La)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Da)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ua)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Ia)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===La)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Da)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ua)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Pl||t===Il||t===Ll||t===Dl){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Pl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Il)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ll)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Dl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ul||t===Nl||t===Ol){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Ul||t===Nl)return s===tt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Ol)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Hl||t===zl||t===Bl||t===Fl||t===Gl||t===kl||t===Vl||t===Wl||t===jl||t===Xl||t===ql||t===Yl||t===Zl||t===Jl){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Hl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===zl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Bl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Fl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Gl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===kl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Vl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Wl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===jl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Xl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ql)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Yl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Zl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Jl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Na||t===$l||t===Kl){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Na)return s===tt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===$l)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Kl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===h0||t===Ql||t===ec||t===tc){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Na)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Ql)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===ec)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===tc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Er?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var yc=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ye=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cf={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),_=this._getHandJoint(c,y);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Vt;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends vi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,y=new xc,m=t.getContextAttributes(),_=null,g=null,x=[],v=[],M=new pe,E=null,T=new Ut;T.viewport=new Je;let R=new Ut;R.viewport=new Je;let L=[T,R],W=new yc,F=null,k=null;function j(te){let ce=v.indexOf(te.inputSource);if(ce===-1)return;let le=x[ce];le!==void 0&&(le.update(te.inputSource,te.frame,c||a),le.dispatchEvent({type:te.type,data:te.inputSource}))}function D(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",G);for(let te=0;te<x.length;te++){let ce=v[te];ce!==null&&(v[te]=null,x[te].disconnect(ce))}F=null,k=null,y.reset(),e.setRenderTarget(_),p=null,d=null,u=null,i=null,g=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function G(te){for(let ce=0;ce<te.removed.length;ce++){let le=te.removed[ce],se=v.indexOf(le);se>=0&&(v[se]=null,x[se].disconnect(le))}for(let ce=0;ce<te.added.length;ce++){let le=te.added[ce],se=v.indexOf(le);if(se===-1){for(let N=0;N<x.length;N++){if(N>=v.length){v.push(le),se=N;break}if(v[N]===null){v[N]=le,se=N;break}}if(se===-1)break}let he=x[se];he&&he.connect(le)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=x[te];return ce===void 0&&(ce=new us,x[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=x[te];return ce===void 0&&(ce=new us,x[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=x[te];return ce===void 0&&(ce=new us,x[te]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",D),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new en(p.framebufferWidth,p.framebufferHeight,{format:In,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,le=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Sr:gs,le=m.stencil?Er:$n);let he={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(he),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new en(d.textureWidth,d.textureHeight,{format:In,type:gn,depthTexture:new Rr(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let B=new A,K=new A;function Z(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let ce=te.near,le=te.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(le=y.depthFar)),W.near=R.near=T.near=ce,W.far=R.far=T.far=le,F===W.near&&k===W.far||(i.updateRenderState({depthNear:W.near,depthFar:W.far}),F=W.near,k=W.far),T.layers.mask=2|te.layers.mask,R.layers.mask=4|te.layers.mask,W.layers.mask=T.layers.mask|R.layers.mask;let se=te.parent,he=W.cameras;Z(W,se);for(let N=0;N<he.length;N++)Z(he[N],se);he.length===2?(function(N,C,z){B.setFromMatrixPosition(C.matrixWorld),K.setFromMatrixPosition(z.matrixWorld);let q=B.distanceTo(K),H=C.projectionMatrix.elements,X=z.projectionMatrix.elements,w=H[14]/(H[10]-1),I=H[14]/(H[10]+1),V=(H[9]+1)/H[5],ee=(H[9]-1)/H[5],Y=(H[8]-1)/H[0],ne=(X[8]+1)/X[0],oe=w*Y,ie=w*ne,ue=q/(-Y+ne),ae=ue*-Y;if(C.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ae),N.translateZ(ue),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),H[10]===-1)N.projectionMatrix.copy(C.projectionMatrix),N.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{let ve=w+ue,Te=I+ue,Ee=oe-ae,Le=ie+(q-ae),Se=V*I/Te*ve,Fe=ee*I/Te*ve;N.projectionMatrix.makePerspective(Ee,Le,Se,Fe,ve,Te),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}})(W,T,R):W.projectionMatrix.copy(T.projectionMatrix),(function(N,C,z){z===null?N.matrix.copy(C.matrixWorld):(N.matrix.copy(z.matrixWorld),N.matrix.invert(),N.matrix.multiply(C.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(C.projectionMatrix),N.projectionMatrixInverse.copy(C.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=2*rc*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)})(te,W,se)},this.getCamera=function(){return W},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)};let de=null,me=new f0;me.setAnimationLoop((function(te,ce){if(h=ce.getViewerPose(c||a),f=ce,h!==null){let le=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let se=!1;le.length!==W.cameras.length&&(W.cameras.length=0,se=!0);for(let N=0;N<le.length;N++){let C=le[N],z=null;if(p!==null)z=p.getViewport(C);else{let H=u.getViewSubImage(d,C);z=H.viewport,N===0&&(e.setRenderTargetTextures(g,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(g))}let q=L[N];q===void 0&&(q=new Ut,q.layers.enable(N),q.viewport=new Je,L[N]=q),q.matrix.fromArray(C.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(C.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(z.x,z.y,z.width,z.height),N===0&&(W.matrix.copy(q.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),se===!0&&W.cameras.push(q)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")){let N=u.getDepthInformation(le[0]);N&&N.isValid&&N.texture&&y.init(e,N,i.renderState)}}for(let le=0;le<x.length;le++){let se=v[le],he=x[le];se!==null&&he!==void 0&&he.update(se,ce,c||a)}de&&de(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),f=null})),this.setAnimationLoop=function(te){de=te},this.dispose=function(){}}},Hi=new gt,Pf=new Ne;function If(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Hi.copy(l),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),i.envMapRotation.value.setFromMatrix4(Pf.makeRotationFromEuler(Hi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,p0(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Lf(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let y=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let _=f[m];if(typeof y=="number"||typeof y=="boolean"){if(_!==y)return f[m]=y,!0}else if(_.equals(y)===!1)return _.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let _=m.uniforms,g=0,x=16;for(let M=0,E=_.length;M<E;M++){let T=Array.isArray(_[M])?_[M]:[_[M]];for(let R=0,L=T.length;R<L;R++){let W=T[R],F=Array.isArray(W.value)?W.value:[W.value];for(let k=0,j=F.length;k<j;k++){let D=c(F[k]),G=g%x,B=G%D.boundary,K=G+B;g+=B,K!==0&&x-K<D.storage&&(g+=x-K),W.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=g,g+=D.storage}}}let v=g%x;v>0&&(g+=x-v),m.__size=g,m.__cache={}})(u),p=(function(m){let _=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=_;let g=r.createBuffer(),x=m.__size,v=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,x,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,g),g})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let y=e.render.frame;s[u.id]!==y&&((function(m){let _=i[m.id],g=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let v=0,M=g.length;v<M;v++){let E=Array.isArray(g[v])?g[v]:[g[v]];for(let T=0,R=E.length;T<R;T++){let L=E[T];if(l(L,v,T,x)===!0){let W=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],k=0;for(let j=0;j<F.length;j++){let D=F[j],G=c(D);typeof D=="number"||typeof D=="boolean"?(L.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,W+k,L.__data)):D.isMatrix3?(L.__data[0]=D.elements[0],L.__data[1]=D.elements[1],L.__data[2]=D.elements[2],L.__data[3]=0,L.__data[4]=D.elements[3],L.__data[5]=D.elements[4],L.__data[6]=D.elements[5],L.__data[7]=0,L.__data[8]=D.elements[6],L.__data[9]=D.elements[7],L.__data[10]=D.elements[8],L.__data[11]=0):(D.toArray(L.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=y)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var ja=class{constructor(e={}){let{canvas:t=Gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),y=new Int32Array(4),m=null,_=null,g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=0,this.toneMappingExposure=1;let v=this,M=!1,E=0,T=0,R=null,L=-1,W=null,F=new Je,k=new Je,j=null,D=new Ce(0),G=0,B=t.width,K=t.height,Z=1,de=null,me=null,te=new Je(0,0,B,K),ce=new Je(0,0,B,K),le=!1,se=new wr,he=!1,N=!1,C=new Ne,z=new Ne,q=new A,H=new Je,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},w=!1;function I(){return R===null?Z:1}let V,ee,Y,ne,oe,ie,ue,ae,ve,Te,Ee,Le,Se,Fe,we,fe,be,Oe,We,Ct,on,vt,Nt,Fn,Q=n;function wn(U,S){return t.getContext(U,S)}try{let U={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Vr,!1),t.addEventListener("webglcontextrestored",Wr,!1),t.addEventListener("webglcontextcreationerror",Ci,!1),Q===null){let S="webgl2";if(Q=wn(S,U),Q===null)throw wn(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}function kr(){V=new dp(Q),V.init(),vt=new Af(Q,V),ee=new lp(Q,V,e,vt),Y=new wf(Q,V),ee.reverseDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),ne=new mp(Q),oe=new gf,ie=new Rf(Q,V,Y,oe,ee,vt,ne),ue=new hp(v),ae=new up(v),ve=new ip(Q),Nt=new ap(Q,ve),Te=new pp(Q,ve,ne,Nt),Ee=new vp(Q,Te,ve,ne),We=new gp(Q,ee,ie),fe=new cp(oe),Le=new mf(v,ue,ae,V,ee,Nt,fe),Se=new If(v,oe),Fe=new yf,we=new Sf(V),Oe=new sp(v,ue,ae,Y,Ee,p,l),be=new bf(v,Ee,ee),Fn=new Lf(Q,ne,ee,Y),Ct=new op(Q,V,ne),on=new fp(Q,V,ne),ne.programs=Le.programs,v.capabilities=ee,v.extensions=V,v.properties=oe,v.renderLists=Fe,v.shadowMap=be,v.state=Y,v.info=ne}kr();let pt=new _c(v,Q);function Vr(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Wr(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let U=ne.autoReset,S=be.enabled,b=be.autoUpdate,O=be.needsUpdate,P=be.type;kr(),ne.autoReset=U,be.enabled=S,be.autoUpdate=b,be.needsUpdate=O,be.type=P}function Ci(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function jr(U){let S=U.target;S.removeEventListener("dispose",jr),(function(b){(function(O){let P=oe.get(O).programs;P!==void 0&&(P.forEach((function(J){Le.releaseProgram(J)})),O.isShaderMaterial&&Le.releaseShaderCache(O))})(b),oe.remove(b)})(S)}function Vs(U,S,b){U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,Ji(U,S,b),U.side=0,U.needsUpdate=!0,Ji(U,S,b),U.side=2):Ji(U,S,b)}this.xr=pt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let U=V.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=V.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(U){U!==void 0&&(Z=U,this.setSize(B,K,!1))},this.getSize=function(U){return U.set(B,K)},this.setSize=function(U,S,b=!0){pt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(B=U,K=S,t.width=Math.floor(U*Z),t.height=Math.floor(S*Z),b===!0&&(t.style.width=U+"px",t.style.height=S+"px"),this.setViewport(0,0,U,S))},this.getDrawingBufferSize=function(U){return U.set(B*Z,K*Z).floor()},this.setDrawingBufferSize=function(U,S,b){B=U,K=S,Z=b,t.width=Math.floor(U*b),t.height=Math.floor(S*b),this.setViewport(0,0,U,S)},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(te)},this.setViewport=function(U,S,b,O){U.isVector4?te.set(U.x,U.y,U.z,U.w):te.set(U,S,b,O),Y.viewport(F.copy(te).multiplyScalar(Z).round())},this.getScissor=function(U){return U.copy(ce)},this.setScissor=function(U,S,b,O){U.isVector4?ce.set(U.x,U.y,U.z,U.w):ce.set(U,S,b,O),Y.scissor(k.copy(ce).multiplyScalar(Z).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(U){Y.setScissorTest(le=U)},this.setOpaqueSort=function(U){de=U},this.setTransparentSort=function(U){me=U},this.getClearColor=function(U){return U.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(U=!0,S=!0,b=!0){let O=0;if(U){let P=!1;if(R!==null){let J=R.texture.format;P=J===Jc||J===Zc||J===Yc}if(P){let J=R.texture.type,$=J===gn||J===$n||J===ms||J===Er||J===Xc||J===qc,re=Oe.getClearColor(),ye=Oe.getClearAlpha(),Me=re.r,Re=re.g,_e=re.b;$?(f[0]=Me,f[1]=Re,f[2]=_e,f[3]=ye,Q.clearBufferuiv(Q.COLOR,0,f)):(y[0]=Me,y[1]=Re,y[2]=_e,y[3]=ye,Q.clearBufferiv(Q.COLOR,0,y))}else O|=Q.COLOR_BUFFER_BIT}S&&(O|=Q.DEPTH_BUFFER_BIT),b&&(O|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Vr,!1),t.removeEventListener("webglcontextrestored",Wr,!1),t.removeEventListener("webglcontextcreationerror",Ci,!1),Fe.dispose(),we.dispose(),oe.dispose(),ue.dispose(),ae.dispose(),Ee.dispose(),Nt.dispose(),Fn.dispose(),Le.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ws),pt.removeEventListener("sessionend",js),Mt.stop()},this.renderBufferDirect=function(U,S,b,O,P,J){S===null&&(S=X);let $=P.isMesh&&P.matrixWorld.determinant()<0,re=(function(Xe,Ot,wt,ke,He){Ot.isScene!==!0&&(Ot=X),ie.resetTextureUnits();let ln=Ot.fog,Lo=ke.isMeshStandardMaterial?Ot.environment:null,Yr=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dr,$i=(ke.isMeshStandardMaterial?ae:ue).get(ke.envMap||Lo),Do=ke.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,Uo=!!wt.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),No=!!wt.morphAttributes.position,ii=!!wt.morphAttributes.normal,rd=!!wt.morphAttributes.color,Ih=0;ke.toneMapped&&(R!==null&&R.isXRRenderTarget!==!0||(Ih=v.toneMapping));let Lh=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,sd=Lh!==void 0?Lh.length:0,je=oe.get(ke),ad=_.state.lights;if(he===!0&&(N===!0||Xe!==W)){let $t=Xe===W&&ke.id===L;fe.setState(ke,Xe,$t)}let cn=!1;ke.version===je.__version?je.needsLights&&je.lightsStateVersion!==ad.state.version||je.outputColorSpace!==Yr||He.isBatchedMesh&&je.batching===!1?cn=!0:He.isBatchedMesh||je.batching!==!0?He.isBatchedMesh&&je.batchingColor===!0&&He.colorTexture===null||He.isBatchedMesh&&je.batchingColor===!1&&He.colorTexture!==null||He.isInstancedMesh&&je.instancing===!1?cn=!0:He.isInstancedMesh||je.instancing!==!0?He.isSkinnedMesh&&je.skinning===!1?cn=!0:He.isSkinnedMesh||je.skinning!==!0?He.isInstancedMesh&&je.instancingColor===!0&&He.instanceColor===null||He.isInstancedMesh&&je.instancingColor===!1&&He.instanceColor!==null||He.isInstancedMesh&&je.instancingMorph===!0&&He.morphTexture===null||He.isInstancedMesh&&je.instancingMorph===!1&&He.morphTexture!==null||je.envMap!==$i||ke.fog===!0&&je.fog!==ln?cn=!0:je.numClippingPlanes===void 0||je.numClippingPlanes===fe.numPlanes&&je.numIntersection===fe.numIntersection?(je.vertexAlphas!==Do||je.vertexTangents!==Uo||je.morphTargets!==No||je.morphNormals!==ii||je.morphColors!==rd||je.toneMapping!==Ih||je.morphTargetsCount!==sd)&&(cn=!0):cn=!0:cn=!0:cn=!0:cn=!0:(cn=!0,je.__version=ke.version);let Pi=je.currentProgram;cn===!0&&(Pi=Ji(ke,Ot,He));let Dh=!1,Zr=!1,Oo=!1,ft=Pi.getUniforms(),ri=je.uniforms;if(Y.useProgram(Pi.program)&&(Dh=!0,Zr=!0,Oo=!0),ke.id!==L&&(L=ke.id,Zr=!0),Dh||W!==Xe){Y.buffers.depth.getReversed()?(C.copy(Xe.projectionMatrix),(function(Ii){let at=Ii.elements;at[2]=.5*at[2]+.5*at[3],at[6]=.5*at[6]+.5*at[7],at[10]=.5*at[10]+.5*at[11],at[14]=.5*at[14]+.5*at[15]})(C),(function(Ii){let at=Ii.elements;at[11]===-1?(at[10]=-at[10]-1,at[14]=-at[14]):(at[10]=-at[10],at[14]=1-at[14])})(C),ft.setValue(Q,"projectionMatrix",C)):ft.setValue(Q,"projectionMatrix",Xe.projectionMatrix),ft.setValue(Q,"viewMatrix",Xe.matrixWorldInverse);let $t=ft.map.cameraPosition;$t!==void 0&&$t.setValue(Q,q.setFromMatrixPosition(Xe.matrixWorld)),ee.logarithmicDepthBuffer&&ft.setValue(Q,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&ft.setValue(Q,"isOrthographic",Xe.isOrthographicCamera===!0),W!==Xe&&(W=Xe,Zr=!0,Oo=!0)}if(He.isSkinnedMesh){ft.setOptional(Q,He,"bindMatrix"),ft.setOptional(Q,He,"bindMatrixInverse");let $t=He.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ft.setValue(Q,"boneTexture",$t.boneTexture,ie))}He.isBatchedMesh&&(ft.setOptional(Q,He,"batchingTexture"),ft.setValue(Q,"batchingTexture",He._matricesTexture,ie),ft.setOptional(Q,He,"batchingIdTexture"),ft.setValue(Q,"batchingIdTexture",He._indirectTexture,ie),ft.setOptional(Q,He,"batchingColorTexture"),He._colorsTexture!==null&&ft.setValue(Q,"batchingColorTexture",He._colorsTexture,ie));let Ho=wt.morphAttributes;Ho.position===void 0&&Ho.normal===void 0&&Ho.color===void 0||We.update(He,wt,Pi),(Zr||je.receiveShadow!==He.receiveShadow)&&(je.receiveShadow=He.receiveShadow,ft.setValue(Q,"receiveShadow",He.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(ri.envMap.value=$i,ri.flipEnvMap.value=$i.isCubeTexture&&$i.isRenderTargetTexture===!1?-1:1),ke.isMeshStandardMaterial&&ke.envMap===null&&Ot.environment!==null&&(ri.envMapIntensity.value=Ot.environmentIntensity),Zr&&(ft.setValue(Q,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&(hn=Oo,(Rn=ri).ambientLightColor.needsUpdate=hn,Rn.lightProbe.needsUpdate=hn,Rn.directionalLights.needsUpdate=hn,Rn.directionalLightShadows.needsUpdate=hn,Rn.pointLights.needsUpdate=hn,Rn.pointLightShadows.needsUpdate=hn,Rn.spotLights.needsUpdate=hn,Rn.spotLightShadows.needsUpdate=hn,Rn.rectAreaLights.needsUpdate=hn,Rn.hemisphereLights.needsUpdate=hn),ln&&ke.fog===!0&&Se.refreshFogUniforms(ri,ln),Se.refreshMaterialUniforms(ri,ke,Z,K,_.state.transmissionRenderTarget[Xe.id]),xr.upload(Q,qs(je),ri,ie));var Rn,hn;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(xr.upload(Q,qs(je),ri,ie),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&ft.setValue(Q,"center",He.center),ft.setValue(Q,"modelViewMatrix",He.modelViewMatrix),ft.setValue(Q,"normalMatrix",He.normalMatrix),ft.setValue(Q,"modelMatrix",He.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){let $t=ke.uniformsGroups;for(let Ii=0,at=$t.length;Ii<at;Ii++){let Uh=$t[Ii];Fn.update(Uh,Pi),Fn.bind(Uh,Pi)}}return Pi})(U,S,b,O,P);Y.setMaterial(O,$);let ye=b.index,Me=1;if(O.wireframe===!0){if(ye=Te.getWireframeAttribute(b),ye===void 0)return;Me=2}let Re=b.drawRange,_e=b.attributes.position,De=Re.start*Me,it=(Re.start+Re.count)*Me;J!==null&&(De=Math.max(De,J.start*Me),it=Math.min(it,(J.start+J.count)*Me)),ye!==null?(De=Math.max(De,0),it=Math.min(it,ye.count)):_e!=null&&(De=Math.max(De,0),it=Math.min(it,_e.count));let Ve=it-De;if(Ve<0||Ve===1/0)return;let Qe;Nt.setup(P,O,re,b,ye);let st=Ct;if(ye!==null&&(Qe=ve.get(ye),st=on,st.setIndex(Qe)),P.isMesh)O.wireframe===!0?(Y.setLineWidth(O.wireframeLinewidth*I()),st.setMode(Q.LINES)):st.setMode(Q.TRIANGLES);else if(P.isLine){let Xe=O.linewidth;Xe===void 0&&(Xe=1),Y.setLineWidth(Xe*I()),P.isLineSegments?st.setMode(Q.LINES):P.isLineLoop?st.setMode(Q.LINE_LOOP):st.setMode(Q.LINE_STRIP)}else P.isPoints?st.setMode(Q.POINTS):P.isSprite&&st.setMode(Q.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)st.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))st.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Xe=P._multiDrawStarts,Ot=P._multiDrawCounts,wt=P._multiDrawCount,ke=ye?ve.get(ye).bytesPerElement:1,He=oe.get(O).currentProgram.getUniforms();for(let ln=0;ln<wt;ln++)He.setValue(Q,"_gl_DrawID",ln),st.render(Xe[ln]/ke,Ot[ln])}else if(P.isInstancedMesh)st.renderInstances(De,Ve,P.count);else if(b.isInstancedBufferGeometry){let Xe=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,Ot=Math.min(b.instanceCount,Xe);st.renderInstances(De,Ve,Ot)}else st.render(De,Ve)},this.compile=function(U,S,b=null){b===null&&(b=U),_=we.get(b),_.init(S),x.push(_),b.traverseVisible((function(P){P.isLight&&P.layers.test(S.layers)&&(_.pushLight(P),P.castShadow&&_.pushShadow(P))})),U!==b&&U.traverseVisible((function(P){P.isLight&&P.layers.test(S.layers)&&(_.pushLight(P),P.castShadow&&_.pushShadow(P))})),_.setupLights();let O=new Set;return U.traverse((function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let J=P.material;if(J)if(Array.isArray(J))for(let $=0;$<J.length;$++){let re=J[$];Vs(re,b,P),O.add(re)}else Vs(J,b,P),O.add(J)})),x.pop(),_=null,O},this.compileAsync=function(U,S,b=null){let O=this.compile(U,S,b);return new Promise((P=>{function J(){O.forEach((function($){oe.get($).currentProgram.isReady()&&O.delete($)})),O.size!==0?setTimeout(J,10):P(U)}V.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)}))};let ni=null;function Ws(){Mt.stop()}function js(){Mt.start()}let Mt=new f0;function Zi(U,S,b,O){if(U.visible===!1)return;if(U.layers.test(S.layers)){if(U.isGroup)b=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(S);else if(U.isLight)_.pushLight(U),U.castShadow&&_.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||se.intersectsSprite(U)){O&&H.setFromMatrixPosition(U.matrixWorld).applyMatrix4(z);let J=Ee.update(U),$=U.material;$.visible&&m.push(U,J,$,b,H.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||se.intersectsObject(U))){let J=Ee.update(U),$=U.material;if(O&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),H.copy(U.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),H.copy(J.boundingSphere.center)),H.applyMatrix4(U.matrixWorld).applyMatrix4(z)),Array.isArray($)){let re=J.groups;for(let ye=0,Me=re.length;ye<Me;ye++){let Re=re[ye],_e=$[Re.materialIndex];_e&&_e.visible&&m.push(U,J,_e,b,H.z,Re)}}else $.visible&&m.push(U,J,$,b,H.z,null)}}let P=U.children;for(let J=0,$=P.length;J<$;J++)Zi(P[J],S,b,O)}function Xs(U,S,b,O){let P=U.opaque,J=U.transmissive,$=U.transparent;_.setupLightsView(b),he===!0&&fe.setGlobalState(v.clippingPlanes,b),O&&Y.viewport(F.copy(O)),P.length>0&&Gn(P,S,b),J.length>0&&Gn(J,S,b),$.length>0&&Gn($,S,b),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Xr(U,S,b,O){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[O.id]===void 0&&(_.state.transmissionRenderTarget[O.id]=new en(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Qn:gn,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let P=_.state.transmissionRenderTarget[O.id],J=O.viewport||F;P.setSize(J.z,J.w);let $=v.getRenderTarget();v.setRenderTarget(P),v.getClearColor(D),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),w&&Oe.render(b);let re=v.toneMapping;v.toneMapping=0;let ye=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),_.setupLightsView(O),he===!0&&fe.setGlobalState(v.clippingPlanes,O),Gn(U,b,O),ie.updateMultisampleRenderTarget(P),ie.updateRenderTargetMipmap(P),V.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Re=0,_e=S.length;Re<_e;Re++){let De=S[Re],it=De.object,Ve=De.geometry,Qe=De.material,st=De.group;if(Qe.side===2&&it.layers.test(O.layers)){let Xe=Qe.side;Qe.side=1,Qe.needsUpdate=!0,qr(it,b,O,Ve,Qe,st),Qe.side=Xe,Qe.needsUpdate=!0,Me=!0}}Me===!0&&(ie.updateMultisampleRenderTarget(P),ie.updateRenderTargetMipmap(P))}v.setRenderTarget($),v.setClearColor(D,G),ye!==void 0&&(O.viewport=ye),v.toneMapping=re}function Gn(U,S,b){let O=S.isScene===!0?S.overrideMaterial:null;for(let P=0,J=U.length;P<J;P++){let $=U[P],re=$.object,ye=$.geometry,Me=O===null?$.material:O,Re=$.group;re.layers.test(b.layers)&&qr(re,S,b,ye,Me,Re)}}function qr(U,S,b,O,P,J){U.onBeforeRender(v,S,b,O,P,J),U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),P.onBeforeRender(v,S,b,O,U,J),P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=1,P.needsUpdate=!0,v.renderBufferDirect(b,S,O,P,U,J),P.side=0,P.needsUpdate=!0,v.renderBufferDirect(b,S,O,P,U,J),P.side=2):v.renderBufferDirect(b,S,O,P,U,J),U.onAfterRender(v,S,b,O,P,J)}function Ji(U,S,b){S.isScene!==!0&&(S=X);let O=oe.get(U),P=_.state.lights,J=_.state.shadowsArray,$=P.state.version,re=Le.getParameters(U,P.state,J,S,b),ye=Le.getProgramCacheKey(re),Me=O.programs;O.environment=U.isMeshStandardMaterial?S.environment:null,O.fog=S.fog,O.envMap=(U.isMeshStandardMaterial?ae:ue).get(U.envMap||O.environment),O.envMapRotation=O.environment!==null&&U.envMap===null?S.environmentRotation:U.envMapRotation,Me===void 0&&(U.addEventListener("dispose",jr),Me=new Map,O.programs=Me);let Re=Me.get(ye);if(Re!==void 0){if(O.currentProgram===Re&&O.lightsStateVersion===$)return Ys(U,re),Re}else re.uniforms=Le.getUniforms(U),U.onBeforeCompile(re,v),Re=Le.acquireProgram(re,ye),Me.set(ye,Re),O.uniforms=re.uniforms;let _e=O.uniforms;return(U.isShaderMaterial||U.isRawShaderMaterial)&&U.clipping!==!0||(_e.clippingPlanes=fe.uniform),Ys(U,re),O.needsLights=(function(De){return De.isMeshLambertMaterial||De.isMeshToonMaterial||De.isMeshPhongMaterial||De.isMeshStandardMaterial||De.isShadowMaterial||De.isShaderMaterial&&De.lights===!0})(U),O.lightsStateVersion=$,O.needsLights&&(_e.ambientLightColor.value=P.state.ambient,_e.lightProbe.value=P.state.probe,_e.directionalLights.value=P.state.directional,_e.directionalLightShadows.value=P.state.directionalShadow,_e.spotLights.value=P.state.spot,_e.spotLightShadows.value=P.state.spotShadow,_e.rectAreaLights.value=P.state.rectArea,_e.ltc_1.value=P.state.rectAreaLTC1,_e.ltc_2.value=P.state.rectAreaLTC2,_e.pointLights.value=P.state.point,_e.pointLightShadows.value=P.state.pointShadow,_e.hemisphereLights.value=P.state.hemi,_e.directionalShadowMap.value=P.state.directionalShadowMap,_e.directionalShadowMatrix.value=P.state.directionalShadowMatrix,_e.spotShadowMap.value=P.state.spotShadowMap,_e.spotLightMatrix.value=P.state.spotLightMatrix,_e.spotLightMap.value=P.state.spotLightMap,_e.pointShadowMap.value=P.state.pointShadowMap,_e.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=Re,O.uniformsList=null,Re}function qs(U){if(U.uniformsList===null){let S=U.currentProgram.getUniforms();U.uniformsList=xr.seqWithValue(S.seq,U.uniforms)}return U.uniformsList}function Ys(U,S){let b=oe.get(U);b.outputColorSpace=S.outputColorSpace,b.batching=S.batching,b.batchingColor=S.batchingColor,b.instancing=S.instancing,b.instancingColor=S.instancingColor,b.instancingMorph=S.instancingMorph,b.skinning=S.skinning,b.morphTargets=S.morphTargets,b.morphNormals=S.morphNormals,b.morphColors=S.morphColors,b.morphTargetsCount=S.morphTargetsCount,b.numClippingPlanes=S.numClippingPlanes,b.numIntersection=S.numClipIntersection,b.vertexAlphas=S.vertexAlphas,b.vertexTangents=S.vertexTangents,b.toneMapping=S.toneMapping}Mt.setAnimationLoop((function(U){ni&&ni(U)})),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(U){ni=U,pt.setAnimationLoop(U),U===null?Mt.stop():Mt.start()},pt.addEventListener("sessionstart",Ws),pt.addEventListener("sessionend",js),this.render=function(U,S){if(S!==void 0&&S.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(S),S=pt.getCamera()),U.isScene===!0&&U.onBeforeRender(v,U,S,R),_=we.get(U,x.length),_.init(S),x.push(_),z.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),se.setFromProjectionMatrix(z),N=this.localClippingEnabled,he=fe.init(this.clippingPlanes,N),m=Fe.get(U,g.length),m.init(),g.push(m),pt.enabled===!0&&pt.isPresenting===!0){let J=v.xr.getDepthSensingMesh();J!==null&&Zi(J,S,-1/0,v.sortObjects)}Zi(U,S,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(de,me),w=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,w&&Oe.addToRenderList(m,U),this.info.render.frame++,he===!0&&fe.beginShadows();let b=_.state.shadowsArray;be.render(b,U,S),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=m.opaque,P=m.transmissive;if(_.setupLights(),S.isArrayCamera){let J=S.cameras;if(P.length>0)for(let $=0,re=J.length;$<re;$++)Xr(O,P,U,J[$]);w&&Oe.render(U);for(let $=0,re=J.length;$<re;$++){let ye=J[$];Xs(m,U,ye,ye.viewport)}}else P.length>0&&Xr(O,P,U,S),w&&Oe.render(U),Xs(m,U,S);R!==null&&(ie.updateMultisampleRenderTarget(R),ie.updateRenderTargetMipmap(R)),U.isScene===!0&&U.onAfterRender(v,U,S),Nt.resetDefaultState(),L=-1,W=null,x.pop(),x.length>0?(_=x[x.length-1],he===!0&&fe.setGlobalState(v.clippingPlanes,_.state.camera)):_=null,g.pop(),m=g.length>0?g[g.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(U,S,b){oe.get(U.texture).__webglTexture=S,oe.get(U.depthTexture).__webglTexture=b;let O=oe.get(U);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=b===void 0,O.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,S){let b=oe.get(U);b.__webglFramebuffer=S,b.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(U,S=0,b=0){R=U,E=S,T=b;let O=!0,P=null,J=!1,$=!1;if(U){let re=oe.get(U);if(re.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(Q.FRAMEBUFFER,null),O=!1;else if(re.__webglFramebuffer===void 0)ie.setupRenderTarget(U);else if(re.__hasExternalTextures)ie.rebindTextures(U,oe.get(U.texture).__webglTexture,oe.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Re=U.depthTexture;if(re.__boundDepthTexture!==Re){if(Re!==null&&oe.has(Re)&&(U.width!==Re.image.width||U.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(U)}}let ye=U.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&($=!0);let Me=oe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(P=Array.isArray(Me[S])?Me[S][b]:Me[S],J=!0):P=U.samples>0&&ie.useMultisampledRTT(U)===!1?oe.get(U).__webglMultisampledFramebuffer:Array.isArray(Me)?Me[b]:Me,F.copy(U.viewport),k.copy(U.scissor),j=U.scissorTest}else F.copy(te).multiplyScalar(Z).floor(),k.copy(ce).multiplyScalar(Z).floor(),j=le;if(Y.bindFramebuffer(Q.FRAMEBUFFER,P)&&O&&Y.drawBuffers(U,P),Y.viewport(F),Y.scissor(k),Y.setScissorTest(j),J){let re=oe.get(U.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+S,re.__webglTexture,b)}else if($){let re=oe.get(U.texture),ye=S||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,re.__webglTexture,b||0,ye)}L=-1},this.readRenderTargetPixels=function(U,S,b,O,P,J,$){if(!U||!U.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=oe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&$!==void 0&&(re=re[$]),re){Y.bindFramebuffer(Q.FRAMEBUFFER,re);try{let ye=U.texture,Me=ye.format,Re=ye.type;if(!ee.textureFormatReadable(Me))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Re))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");S>=0&&S<=U.width-O&&b>=0&&b<=U.height-P&&Q.readPixels(S,b,O,P,vt.convert(Me),vt.convert(Re),J)}finally{let ye=R!==null?oe.get(R).__webglFramebuffer:null;Y.bindFramebuffer(Q.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(U,S,b,O,P,J,$){if(!U||!U.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let re=oe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&$!==void 0&&(re=re[$]),re){let ye=U.texture,Me=ye.format,Re=ye.type;if(!ee.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=U.width-O&&b>=0&&b<=U.height-P){Y.bindFramebuffer(Q.FRAMEBUFFER,re);let _e=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,_e),Q.bufferData(Q.PIXEL_PACK_BUFFER,J.byteLength,Q.STREAM_READ),Q.readPixels(S,b,O,P,vt.convert(Me),vt.convert(Re),0);let De=R!==null?oe.get(R).__webglFramebuffer:null;Y.bindFramebuffer(Q.FRAMEBUFFER,De);let it=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await(function(Ve,Qe,st){return new Promise((function(Xe,Ot){setTimeout((function wt(){switch(Ve.clientWaitSync(Qe,Ve.SYNC_FLUSH_COMMANDS_BIT,0)){case Ve.WAIT_FAILED:Ot();break;case Ve.TIMEOUT_EXPIRED:setTimeout(wt,st);break;default:Xe()}}),st)}))})(Q,it,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,_e),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,J),Q.deleteBuffer(_e),Q.deleteSync(it),J}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,S=null,b=0){U.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,U=arguments[1]);let O=Math.pow(2,-b),P=Math.floor(U.image.width*O),J=Math.floor(U.image.height*O),$=S!==null?S.x:0,re=S!==null?S.y:0;ie.setTexture2D(U,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,b,0,0,$,re,P,J),Y.unbindTexture()},this.copyTextureToTexture=function(U,S,b=null,O=null,P=0){let J,$,re,ye,Me,Re,_e,De,it;U.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,U=arguments[1],S=arguments[2],P=arguments[3]||0,b=null);let Ve=U.isCompressedTexture?U.mipmaps[P]:U.image;b!==null?(J=b.max.x-b.min.x,$=b.max.y-b.min.y,re=b.isBox3?b.max.z-b.min.z:1,ye=b.min.x,Me=b.min.y,Re=b.isBox3?b.min.z:0):(J=Ve.width,$=Ve.height,re=Ve.depth||1,ye=0,Me=0,Re=0),O!==null?(_e=O.x,De=O.y,it=O.z):(_e=0,De=0,it=0);let Qe=vt.convert(S.format),st=vt.convert(S.type),Xe;S.isData3DTexture?(ie.setTexture3D(S,0),Xe=Q.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(ie.setTexture2DArray(S,0),Xe=Q.TEXTURE_2D_ARRAY):(ie.setTexture2D(S,0),Xe=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,S.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,S.unpackAlignment);let Ot=Q.getParameter(Q.UNPACK_ROW_LENGTH),wt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),ke=Q.getParameter(Q.UNPACK_SKIP_PIXELS),He=Q.getParameter(Q.UNPACK_SKIP_ROWS),ln=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Ve.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ve.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,ye),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,Me),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,Re);let Lo=U.isDataArrayTexture||U.isData3DTexture,Yr=S.isDataArrayTexture||S.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){let $i=oe.get(U),Do=oe.get(S),Uo=oe.get($i.__renderTarget),No=oe.get(Do.__renderTarget);Y.bindFramebuffer(Q.READ_FRAMEBUFFER,Uo.__webglFramebuffer),Y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,No.__webglFramebuffer);for(let ii=0;ii<re;ii++)Lo&&Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,oe.get(U).__webglTexture,P,Re+ii),U.isDepthTexture?(Yr&&Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,oe.get(S).__webglTexture,P,it+ii),Q.blitFramebuffer(ye,Me,J,$,_e,De,J,$,Q.DEPTH_BUFFER_BIT,Q.NEAREST)):Yr?Q.copyTexSubImage3D(Xe,P,_e,De,it+ii,ye,Me,J,$):Q.copyTexSubImage2D(Xe,P,_e,De,it+ii,ye,Me,J,$);Y.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Y.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Yr?U.isDataTexture||U.isData3DTexture?Q.texSubImage3D(Xe,P,_e,De,it,J,$,re,Qe,st,Ve.data):S.isCompressedArrayTexture?Q.compressedTexSubImage3D(Xe,P,_e,De,it,J,$,re,Qe,Ve.data):Q.texSubImage3D(Xe,P,_e,De,it,J,$,re,Qe,st,Ve):U.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,P,_e,De,J,$,Qe,st,Ve.data):U.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,P,_e,De,Ve.width,Ve.height,Qe,Ve.data):Q.texSubImage2D(Q.TEXTURE_2D,P,_e,De,J,$,Qe,st,Ve);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Ot),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,wt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,ke),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,He),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,ln),P===0&&S.generateMipmaps&&Q.generateMipmap(Xe),Y.unbindTexture()},this.copyTextureToTexture3D=function(U,S,b=null,O=null,P=0){return U.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),b=arguments[0]||null,O=arguments[1]||null,U=arguments[2],S=arguments[3],P=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,S,b,O,P)},this.initRenderTarget=function(U){oe.get(U).__webglFramebuffer===void 0&&ie.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ie.setTextureCube(U,0):U.isData3DTexture?ie.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ie.setTexture2DArray(U,0):ie.setTexture2D(U,0),Y.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Y.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},Xa=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},qa=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wi=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gt,this.environmentIntensity=1,this.environmentRotation=new gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ht=new A,Ya=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Kn=class extends yi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,rs=new A,dr=new A,pr=new A,fr=new pe,ss=new pe,x0=new Ne,_a=new A,as=new A,Ma=new A,Ou=new pe,vl=new pe,Hu=new pe,_i=class extends Bt{constructor(e=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mc(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Ya(n,3,0,!1)),ur.setAttribute("uv",new Ya(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),x0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Ea(_a.set(-.5,-.5,0),pr,a,dr,i,s),Ea(as.set(.5,-.5,0),pr,a,dr,i,s),Ea(Ma.set(.5,.5,0),pr,a,dr,i,s),Ou.set(0,0),vl.set(1,0),Hu.set(1,1);let o=e.ray.intersectTriangle(_a,as,Ma,!1,rs);if(o===null&&(Ea(as.set(-.5,.5,0),pr,a,dr,i,s),vl.set(0,1),o=e.ray.intersectTriangle(_a,Ma,as,!1,rs),o===null))return;let l=e.ray.origin.distanceTo(rs);l<e.near||l>e.far||t.push({distance:l,point:rs.clone(),uv:Yn.getInterpolation(rs,_a,as,Ma,Ou,vl,Hu,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ea(r,e,t,n,i,s){fr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ss.x=s*fr.x-i*fr.y,ss.y=i*fr.x+s*fr.y):ss.copy(fr),r.copy(e),r.x+=ss.x,r.y+=ss.y,r.applyMatrix4(x0)}var km=new A,Vm=new A;var Wm=new A,jm=new Je,Xm=new Je,qm=new A,Ym=new Ne,Zm=new A,Jm=new vn,$m=new Ne,Km=new ki;var Mi=class extends Vt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qm=new Ne,eg=new Ne;var Za=class extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Ne,zu=new Ne,Sa=[],Bu=new qt,Df=new Ne,os=new Pe,ls=new vn,Ja=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Df)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Bu.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ls.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),e.ray.intersectsSphere(ls)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,mr),zu.multiplyMatrices(n,mr),os.matrixWorld=zu,os.raycast(e,Sa);for(let a=0,o=Sa.length;a<o;a++){let l=Sa[a];l.instanceId=s,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(i*this.count),i,this.count,Lr,Pn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ec=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},tg=new Ne,ng=new Ce(1,1,1),ig=new wr,rg=new qt,sg=new vn,ag=new A,og=new A,lg=new A,cg=new Ec,hg=new Pe;var ug=new A,dg=new A,pg=new Ne,fg=new ki,mg=new vn,gg=new A,vg=new A;var yg=new A,xg=new A;var _g=new Ne,Mg=new ki,Eg=new vn,Sg=new A;var ut=class extends Vt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new pe:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,i=[],s=[],a=[],o=new A,l=new Ne;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(St(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(St(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xs=class extends tn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sc=class extends xs{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var ba=new A,yl=new Kc,xl=new Kc,_l=new Kc,yn=class extends tn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(ba.subVectors(i[0],i[1]).add(i[0]),o=ba);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(ba.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),f<1e-4&&(f=y),m<1e-4&&(m=y),yl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,y,m),xl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,y,m),_l.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,y,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),xl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),_l.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(yl.calc(h),xl.calc(h),_l.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fu(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ds(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ps(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var $a=class extends tn{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,i.x,s.x,a.x,o.x),ps(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bc=class extends tn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,i.x,s.x,a.x,o.x),ps(e,i.y,s.y,a.y,o.y),ps(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ka=class extends tn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends tn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends tn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends tn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y),ds(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Fu(o,l.x,c.x,h.x,u.x),Fu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new pe().fromArray(i))}return this}},to=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:yn,CubicBezierCurve:$a,CubicBezierCurve3:bc,EllipseCurve:xs,LineCurve:Ka,LineCurve3:Tc,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:eo,SplineCurve:Ar}),wc=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new to[i.type]().fromJSON(i))}return this}},_s=class extends wc{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ka(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Qa(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new $a(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ar(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new xs(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},At=class r extends et{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=St(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new pe,p=new A,f=new A,y=new A,m=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(f)}for(let g=0;g<=t;g++){let x=n+g*h*i,v=Math.sin(x),M=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*v,u.y=e[E].y,u.z=e[E].x*M,a.push(u.x,u.y,u.z),d.x=g/t,d.y=E/(e.length-1),o.push(d.x,d.y);let T=l[3*E+0]*v,R=l[3*E+1],L=l[3*E+0]*M;c.push(T,R,L)}}for(let g=0;g<t;g++)for(let x=0;x<e.length-1;x++){let v=x+g*e.length,M=v,E=v+e.length,T=v+e.length+1,R=v+1;s.push(M,E,R),s.push(T,R,E)}this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},lt=class r extends At{constructor(e=1,t=1,n=4,i=8){let s=new _s;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Zt=class r extends et{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new pe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xe=class r extends et{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,y=[],m=n/2,_=0;function g(x){let v=f,M=new pe,E=new A,T=0,R=x===!0?e:t,L=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let W=f;for(let F=0;F<=i;F++){let k=F/i*l+o,j=Math.cos(k),D=Math.sin(k);E.x=R*D,E.y=m*L,E.z=R*j,u.push(E.x,E.y,E.z),d.push(0,L,0),M.x=.5*j+.5,M.y=.5*D*L+.5,p.push(M.x,M.y),f++}for(let F=0;F<i;F++){let k=v+F,j=W+F;x===!0?h.push(j,j+1,k):h.push(j+1,j,k),T+=3}c.addGroup(_,T,x===!0?1:2),_+=T}(function(){let x=new A,v=new A,M=0,E=(t-e)/n;for(let T=0;T<=s;T++){let R=[],L=T/s,W=L*(t-e)+e;for(let F=0;F<=i;F++){let k=F/i,j=k*l+o,D=Math.sin(j),G=Math.cos(j);v.x=W*D,v.y=-L*n+m,v.z=W*G,u.push(v.x,v.y,v.z),x.set(D,E,G).normalize(),d.push(x.x,x.y,x.z),p.push(k,1-L),R.push(f++)}y.push(R)}for(let T=0;T<i;T++)for(let R=0;R<s;R++){let L=y[R][T],W=y[R+1][T],F=y[R+1][T+1],k=y[R][T+1];(e>0||R!==0)&&(h.push(L,W,k),M+=3),(t>0||R!==s-1)&&(h.push(W,F,k),M+=3)}c.addGroup(_,M,0),_+=M})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dt=class r extends xe{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ji=class r extends et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,y){let m=y+1,_=[];for(let g=0;g<=m;g++){_[g]=[];let x=d.clone().lerp(f,g/m),v=p.clone().lerp(f,g/m),M=m-g;for(let E=0;E<=M;E++)_[g][E]=E===0&&g===m?x:x.clone().lerp(v,E/M)}for(let g=0;g<m;g++)for(let x=0;x<2*(m-g)-1;x++){let v=Math.floor(x/2);x%2==0?(l(_[g][v+1]),l(_[g+1][v]),l(_[g][v])):(l(_[g][v+1]),l(_[g+1][v+1]),l(_[g+1][v]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,y){y<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new A,f=new A,y=new A;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],y),o(p,f,y,d)})(i),(function(d){let p=new A;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new A;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let y=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-m)}var p;(function(){let f=new A,y=new A,m=new A,_=new A,g=new pe,x=new pe,v=new pe;for(let M=0,E=0;M<s.length;M+=9,E+=6){f.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),m.set(s[M+6],s[M+7],s[M+8]),g.set(a[E+0],a[E+1]),x.set(a[E+2],a[E+3]),v.set(a[E+4],a[E+5]),_.copy(f).add(y).add(m).divideScalar(3);let T=u(_);h(g,E+0,f,T),h(x,E+2,y,T),h(v,E+4,m,T)}})(),(function(){for(let f=0;f<a.length;f+=6){let y=a[f+0],m=a[f+2],_=a[f+4],g=Math.max(y,m,_),x=Math.min(y,m,_);g>.9&&x<.1&&(y<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(s.slice(),3)),this.setAttribute("uv",new Ue(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Rc=class r extends ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ta=new A,wa=new A,Ml=new A,Ra=new Yn,Ac=class extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Oa*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:m,c:_}=Ra;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),Ra.getNormal(Ml),u[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let x=(g+1)%3,v=u[g],M=u[x],E=Ra[h[g]],T=Ra[h[x]],R=`${v}_${M}`,L=`${M}_${v}`;L in d&&d[L]?(Ml.dot(d[L].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(T.x,T.y,T.z)),d[L]=null):R in d||(d[R]={index0:c[g],index1:c[x],normal:Ml.clone()})}}for(let f in d)if(d[f]){let{index0:y,index1:m}=d[f];Ta.fromBufferAttribute(o,y),wa.fromBufferAttribute(o,m),p.push(Ta.x,Ta.y,Ta.z),p.push(wa.x,wa.y,wa.z)}this.setAttribute("position",new Ue(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Wt=class extends _s{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new _s().fromJSON(i))}return this}},Uf=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Gu(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(f,y,m,_){let g=[],x,v,M,E,T;for(x=0,v=y.length;x<v;x++)M=y[x]*_,E=x<v-1?y[x+1]*_:f.length,T=Gu(f,M,E,_,!1),T===T.next&&(T.steiner=!0),g.push(kf(T));for(g.sort(Bf),x=0;x<g.length;x++)m=Ff(g[x],m);return m})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ms(s,a,t,o,l,p,0),a};function Gu(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=ku(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=ku(s,r[s],r[s+1],a);return a&&po(a,a.next)&&(Ss(a),a=a.next),a}function Xi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!po(n,n.next)&&ct(n.prev,n,n.next)!==0)n=n.next;else{if(Ss(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ms(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Cc(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(y){let m,_,g,x,v,M,E,T,R=1;do{for(_=y,y=null,v=null,M=0;_;){for(M++,g=_,E=0,m=0;m<R&&(E++,g=g.nextZ,g);m++);for(T=R;E>0||T>0&&g;)E!==0&&(T===0||!g||_.z<=g.z)?(x=_,_=_.nextZ,E--):(x=g,g=g.nextZ,T--),v?v.nextZ=x:y=x,x.prevZ=v,v=x;_=g}v.nextZ=null,R*=2}while(M>1)})(f)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Of(r,n,i,s):Nf(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Ss(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Ms(r=Hf(Xi(r),e,t),e,t,n,i,s,2):a===2&&zf(r,e,t,n,i,s):Ms(Xi(r),e,t,n,i,s,1);break}}function Nf(r){let e=r.prev,t=r,n=r.next;if(ct(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&vr(i,o,s,l,a,c,f.x,f.y)&&ct(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Of(r,e,t,n){let i=r.prev,s=r,a=r.next;if(ct(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,_=Cc(p,f,e,t,n),g=Cc(y,m,e,t,n),x=r.prevZ,v=r.nextZ;for(;x&&x.z>=_&&v&&v.z<=g;){if(x.x>=p&&x.x<=y&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&vr(o,h,l,u,c,d,x.x,x.y)&&ct(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=y&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&vr(o,h,l,u,c,d,v.x,v.y)&&ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=y&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&vr(o,h,l,u,c,d,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=g;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=m&&v!==i&&v!==a&&vr(o,h,l,u,c,d,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Hf(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!po(i,s)&&_0(i,n,n.next,s)&&Es(i,s)&&Es(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ss(n),Ss(n.next),n=r=s),n=n.next}while(n!==r);return Xi(n)}function zf(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vf(a,o)){let l=M0(a,o);return a=Xi(a,a.next),l=Xi(l,l.next),Ms(a,e,t,n,i,s,0),void Ms(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Bf(r,e){return r.x-e.x}function Ff(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&vr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Es(o,i)&&(f<y||f===y&&(o.x>a.x||o.x===a.x&&Gf(a,o)))&&(a=o,y=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=M0(t,r);return Xi(n,n.next),Xi(t,t.next)}function Gf(r,e){return ct(r.prev,r,e.prev)<0&&ct(e.next,r,r.next)<0}function Cc(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function kf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Vf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&_0(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Es(r,e)&&Es(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(ct(r.prev,r,e.prev)||ct(r,e.prev,e))||po(r,e)&&ct(r.prev,r,r.next)>0&&ct(e.prev,e,e.next)>0)}function ct(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function po(r,e){return r.x===e.x&&r.y===e.y}function _0(r,e,t,n){let i=Ca(ct(r,e,t)),s=Ca(ct(r,e,n)),a=Ca(ct(t,n,r)),o=Ca(ct(t,n,e));return i!==s&&a!==o||!(i!==0||!Aa(r,t,e))||!(s!==0||!Aa(r,n,e))||!(a!==0||!Aa(t,r,n))||!(o!==0||!Aa(t,e,n))}function Aa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ca(r){return r>0?1:r<0?-1:0}function Es(r,e){return ct(r.prev,r,r.next)<0?ct(r,e,r.next)>=0&&ct(r,r.prev,e)>=0:ct(r,e,r.prev)<0||ct(r,r.next,e)<0}function M0(r,e){let t=new Pc(r.i,r.x,r.y),n=new Pc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ku(r,e,t,n){let i=new Pc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ss(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Pc(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var mi=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Vu(e),Wu(n,e);let a=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Wu(n,t[l]);let o=Uf(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Vu(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Wu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var nn=class r extends et{constructor(e=new Wt([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Wf,x,v,M,E,T,R=!1;_&&(x=_.getSpacedPoints(h),R=!0,d=!1,v=_.computeFrenetFrames(h,!1),M=new A,E=new A,T=new A),d||(m=0,p=0,f=0,y=0);let L=o.extractPoints(c),W=L.shape,F=L.holes;if(!mi.isClockWise(W)){W=W.reverse();for(let q=0,H=F.length;q<H;q++){let X=F[q];mi.isClockWise(X)&&(F[q]=X.reverse())}}let k=mi.triangulateShape(W,F),j=W;for(let q=0,H=F.length;q<H;q++){let X=F[q];W=W.concat(X)}function D(q,H,X){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(H,X)}let G=W.length,B=k.length;function K(q,H,X){let w,I,V,ee=q.x-H.x,Y=q.y-H.y,ne=X.x-q.x,oe=X.y-q.y,ie=ee*ee+Y*Y,ue=ee*oe-Y*ne;if(Math.abs(ue)>Number.EPSILON){let ae=Math.sqrt(ie),ve=Math.sqrt(ne*ne+oe*oe),Te=H.x-Y/ae,Ee=H.y+ee/ae,Le=((X.x-oe/ve-Te)*oe-(X.y+ne/ve-Ee)*ne)/(ee*oe-Y*ne);w=Te+ee*Le-q.x,I=Ee+Y*Le-q.y;let Se=w*w+I*I;if(Se<=2)return new pe(w,I);V=Math.sqrt(Se/2)}else{let ae=!1;ee>Number.EPSILON?ne>Number.EPSILON&&(ae=!0):ee<-Number.EPSILON?ne<-Number.EPSILON&&(ae=!0):Math.sign(Y)===Math.sign(oe)&&(ae=!0),ae?(w=-Y,I=ee,V=Math.sqrt(ie)):(w=ee,I=Y,V=Math.sqrt(ie/2))}return new pe(w/V,I/V)}let Z=[];for(let q=0,H=j.length,X=H-1,w=q+1;q<H;q++,X++,w++)X===H&&(X=0),w===H&&(w=0),Z[q]=K(j[q],j[X],j[w]);let de=[],me,te=Z.concat();for(let q=0,H=F.length;q<H;q++){let X=F[q];me=[];for(let w=0,I=X.length,V=I-1,ee=w+1;w<I;w++,V++,ee++)V===I&&(V=0),ee===I&&(ee=0),me[w]=K(X[w],X[V],X[ee]);de.push(me),te=te.concat(me)}for(let q=0;q<m;q++){let H=q/m,X=p*Math.cos(H*Math.PI/2),w=f*Math.sin(H*Math.PI/2)+y;for(let I=0,V=j.length;I<V;I++){let ee=D(j[I],Z[I],w);se(ee.x,ee.y,-X)}for(let I=0,V=F.length;I<V;I++){let ee=F[I];me=de[I];for(let Y=0,ne=ee.length;Y<ne;Y++){let oe=D(ee[Y],me[Y],w);se(oe.x,oe.y,-X)}}}let ce=f+y;for(let q=0;q<G;q++){let H=d?D(W[q],te[q],ce):W[q];R?(E.copy(v.normals[0]).multiplyScalar(H.x),M.copy(v.binormals[0]).multiplyScalar(H.y),T.copy(x[0]).add(E).add(M),se(T.x,T.y,T.z)):se(H.x,H.y,0)}for(let q=1;q<=h;q++)for(let H=0;H<G;H++){let X=d?D(W[H],te[H],ce):W[H];R?(E.copy(v.normals[q]).multiplyScalar(X.x),M.copy(v.binormals[q]).multiplyScalar(X.y),T.copy(x[q]).add(E).add(M),se(T.x,T.y,T.z)):se(X.x,X.y,u/h*q)}for(let q=m-1;q>=0;q--){let H=q/m,X=p*Math.cos(H*Math.PI/2),w=f*Math.sin(H*Math.PI/2)+y;for(let I=0,V=j.length;I<V;I++){let ee=D(j[I],Z[I],w);se(ee.x,ee.y,u+X)}for(let I=0,V=F.length;I<V;I++){let ee=F[I];me=de[I];for(let Y=0,ne=ee.length;Y<ne;Y++){let oe=D(ee[Y],me[Y],w);R?se(oe.x,oe.y+x[h-1].y,x[h-1].x+X):se(oe.x,oe.y,u+X)}}}function le(q,H){let X=q.length;for(;--X>=0;){let w=X,I=X-1;I<0&&(I=q.length-1);for(let V=0,ee=h+2*m;V<ee;V++){let Y=G*V,ne=G*(V+1);N(H+w+Y,H+I+Y,H+I+ne,H+w+ne)}}}function se(q,H,X){l.push(q),l.push(H),l.push(X)}function he(q,H,X){C(q),C(H),C(X);let w=i.length/3,I=g.generateTopUV(n,i,w-3,w-2,w-1);z(I[0]),z(I[1]),z(I[2])}function N(q,H,X,w){C(q),C(H),C(w),C(H),C(X),C(w);let I=i.length/3,V=g.generateSideWallUV(n,i,I-6,I-3,I-2,I-1);z(V[0]),z(V[1]),z(V[3]),z(V[1]),z(V[2]),z(V[3])}function C(q){i.push(l[3*q+0]),i.push(l[3*q+1]),i.push(l[3*q+2])}function z(q){s.push(q.x),s.push(q.y)}(function(){let q=i.length/3;if(d){let H=0,X=G*H;for(let w=0;w<B;w++){let I=k[w];he(I[2]+X,I[1]+X,I[0]+X)}H=h+2*m,X=G*H;for(let w=0;w<B;w++){let I=k[w];he(I[0]+X,I[1]+X,I[2]+X)}}else{for(let H=0;H<B;H++){let X=k[H];he(X[2],X[1],X[0])}for(let H=0;H<B;H++){let X=k[H];he(X[0]+G*h,X[1]+G*h,X[2]+G*h)}}n.addGroup(q,i.length/3-q,0)})(),(function(){let q=i.length/3,H=0;le(j,H),H+=j.length;for(let X=0,w=F.length;X<w;X++){let I=F[X];le(I,H),H+=I.length}n.addGroup(q,i.length/3-q,1)})()}this.setAttribute("position",new Ue(i,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new to[i.type]().fromJSON(i)),new r(n,e.options)}},Wf={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new pe(s,a),new pe(o,l),new pe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],y=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-u),new pe(d,1-f),new pe(y,1-_)]:[new pe(o,1-l),new pe(h,1-u),new pe(p,1-f),new pe(m,1-_)]}},Ei=class r extends ji{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Si=class r extends ji{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},bi=class r extends et{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new A,f=new pe;for(let y=0;y<=i;y++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let y=0;y<i;y++){let m=y*(n+1);for(let _=0;_<n;_++){let g=_+m,x=g,v=g+n+1,M=g+n+2,E=g+1;o.push(x,v,E),o.push(v,M,E)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ti=class r extends et{constructor(e=new Wt([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;mi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let g=f[m];mi.isClockWise(g)===!0&&(f[m]=g.reverse())}let y=mi.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let g=f[m];p=p.concat(g)}for(let m=0,_=p.length;m<_;m++){let g=p[m];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,_=y.length;m<_;m++){let g=y[m],x=g[0]+u,v=g[1]+u,M=g[2]+u;n.push(x,v,M),l+=3}}this.setIndex(n),this.setAttribute("position",new Ue(i,3)),this.setAttribute("normal",new Ue(s,3)),this.setAttribute("uv",new Ue(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Ie=class r extends et{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],f=[],y=[],m=[];for(let _=0;_<=n;_++){let g=[],x=_/n,v=0;_===0&&a===0?v=.5/t:_===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let E=M/t;u.x=-e*Math.cos(i+E*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+E*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+v,1-x),g.push(c++)}h.push(g)}for(let _=0;_<n;_++)for(let g=0;g<t;g++){let x=h[_][g+1],v=h[_][g],M=h[_+1][g],E=h[_+1][g+1];(_!==0||a>0)&&p.push(x,v,E),(_!==n-1||l<Math.PI)&&p.push(v,M,E)}this.setIndex(p),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Cr=class r extends ji{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},qe=class r extends et{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let y=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let y=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,_=(i+1)*(p-1)+f,g=(i+1)*p+f;a.push(y,m,g),a.push(m,_,g)}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ic=class r extends et{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,f=new A,y=new A,m=new A,_=new A;for(let x=0;x<=n;++x){let v=x/n*s*Math.PI*2;g(v,s,a,e,p),g(v+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),y.crossVectors(m,_),_.crossVectors(y,m),y.normalize(),_.normalize();for(let M=0;M<=i;++M){let E=M/i*Math.PI*2,T=-t*Math.cos(E),R=t*Math.sin(E);u.x=p.x+(T*_.x+R*y.x),u.y=p.y+(T*_.y+R*y.y),u.z=p.z+(T*_.z+R*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(M/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){let M=(i+1)*(x-1)+(v-1),E=(i+1)*x+(v-1),T=(i+1)*x+v,R=(i+1)*(x-1)+v;o.push(M,E,R),o.push(E,T,R)}function g(x,v,M,E,T){let R=Math.cos(x),L=Math.sin(x),W=M/v*x,F=Math.cos(W);T.x=E*(2+F)*.5*R,T.y=E*(2+F)*L*.5,T.z=E*Math.sin(W)*.5}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},xn=class r extends et{constructor(e=new eo(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new pe,h=new A,u=[],d=[],p=[],f=[];function y(m){h=e.getPointAt(m/t,h);let _=a.normals[m],g=a.binormals[m];for(let x=0;x<=i;x++){let v=x/i*Math.PI*2,M=Math.sin(v),E=-Math.cos(v);l.x=E*_.x+M*g.x,l.y=E*_.y+M*g.y,l.z=E*_.z+M*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)y(m);y(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let _=0;_<=i;_++)c.x=m/t,c.y=_/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let _=1;_<=i;_++){let g=(i+1)*(m-1)+(_-1),x=(i+1)*m+(_-1),v=(i+1)*m+_,M=(i+1)*(m-1)+_;f.push(g,x,M),f.push(x,v,M)}})()})(),this.setIndex(f),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new to[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Lc=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let y=0;y<3;y++){let m=o.getX(p+y),_=o.getX(p+(y+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),ju(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),ju(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ju(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var bg=Object.freeze({__proto__:null,BoxGeometry:ge,CapsuleGeometry:lt,CircleGeometry:Zt,ConeGeometry:dt,CylinderGeometry:xe,DodecahedronGeometry:Rc,EdgesGeometry:Ac,ExtrudeGeometry:nn,IcosahedronGeometry:Ei,LatheGeometry:At,OctahedronGeometry:Si,PlaneGeometry:Rt,PolyhedronGeometry:ji,RingGeometry:bi,ShapeGeometry:Ti,SphereGeometry:Ie,TetrahedronGeometry:Cr,TorusGeometry:qe,TorusKnotGeometry:Ic,TubeGeometry:xn,WireframeGeometry:Lc});var Be=class extends yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rt=class extends Be{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function jf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Pr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dc=class extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vh:s=e,o=2*t-n;break;case Wh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:a=e,l=2*n-t;break;case Wh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),y=f*f,m=y*f,_=-d*m+2*d*y-d*f,g=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*y+.5*f,v=p*m-p*y;for(let M=0;M!==o;++M)s[M]=_*a[h+M]+g*a[c+M]+x*a[l+M]+v*a[u+M];return s}},Uc=class extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Nc=class extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case nc:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&jf(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};mn.prototype.TimeBufferType=Float32Array,mn.prototype.ValueBufferType=Float32Array,mn.prototype.DefaultInterpolation=nc;var Fi=class extends mn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="bool",Fi.prototype.ValueBufferType=Array,Fi.prototype.DefaultInterpolation=Ha,Fi.prototype.InterpolantFactoryMethodLinear=void 0,Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends mn{};Oc.prototype.ValueTypeName="color";var Hc=class extends mn{};Hc.prototype.ValueTypeName="number";var zc=class extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(s,0,a,c-o,a,c,l);return s}},no=class extends mn{InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};no.prototype.ValueTypeName="quaternion",no.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends mn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string",Gi.prototype.ValueBufferType=Array,Gi.prototype.DefaultInterpolation=Ha,Gi.prototype.InterpolantFactoryMethodLinear=void 0,Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends mn{};Bc.prototype.ValueTypeName="vector";var Fc=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Xf=new Fc,Gc=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var El=new Ne,Xu=new A,qu=new A,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xu),qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qu),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Yu=new Ne,cs=new A,Sl=new A,kc=class extends ro{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(cs),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu)}},Ir=class extends io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vc=class extends ro{constructor(){super(new xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Tg=new Ne,wg=new Ne,Rg=new Ne;var ao=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zu(){return performance.now()}var Ag=new A,Cg=new mt,Pg=new A,Ig=new A;var Lg=new A,Dg=new mt,Ug=new A,Ng=new A;var Qc="\\[\\]\\.:\\/",qf=new RegExp("["+Qc+"]","g"),bl="[^"+Qc+"]",Yf="[^"+Qc.replace("\\.","")+"]",Zf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bl)+/(WCOD+)?/.source.replace("WCOD",Yf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl)+"$"),Jf=["material","materials","bones","map"],ot=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qf,"")}static parseTrackName(e){let t=Zf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Jf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(r,e,t){let n=t||ot.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);var Ju=new Ne,oo=class{constructor(e,t,n=0,i=1/0){this.ray=new ki(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ju),this}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort($u),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Wc(e[i],this,n,t);return n.sort($u),n}};function $u(r,e){return r.distance-e.distance}function Wc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Wc(s[a],e,t,!0)}}var Hg=new pe;var zg=new A,Bg=new A;var Fg=new A;var Gg=new A,kg=new Ne,Vg=new Ne;var Wg=new A,jg=new Ce,Xg=new Ce;var qg=new A,Yg=new A,Zg=new A;var Jg=new A,$g=new ys;var Kg=new qt;var Qg=new A;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var eh=null;function $f(){if(eh)return eh;let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,.75)"),t.addColorStop(.4,"rgba(255,255,255,.34)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),eh=Kt(new ut(r))}var _n=class{constructor(e,t,n,i,{wide:s=.05,rise:a=.4,count:o=11,size:l=.085}={}){this.at=new A(t,n,i),Object.assign(this,{wide:s,rise:a,size:l}),this.puffs=Array.from({length:o},(c,h)=>{let u=new _i(new Kn({map:$f(),transparent:!0,opacity:0,depthWrite:!1}));u.renderOrder=5,u.raycast=()=>{},e.add(u);let d={s:u,age:h/o,off:[0,0],lag:[0,0],turn:0};return this.born(d),d})}born(e){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*this.wide;e.off=[Math.cos(t)*n,Math.sin(t)*n],e.lag=[0,0],e.turn=Math.random()*6.28,e.life=1.9+Math.random()*.9}update(e,t=0,n=0,i=0){for(let s of this.puffs){s.age+=e/s.life,s.age>=1&&(s.age%=1,this.born(s)),s.lag[0]=Math.max(-.4,Math.min(.4,s.lag[0]-n)),s.lag[1]=Math.max(-.4,Math.min(.4,s.lag[1]-i));let a=s.age,o=Math.sin(s.turn+a*5)*.028*a;s.s.position.set(this.at.x+s.off[0]*(1-a*.5)+o+s.lag[0],this.at.y+a*this.rise,this.at.z+s.off[1]*(1-a*.5)+Math.cos(s.turn+a*4)*.018*a+s.lag[1]),s.s.scale.setScalar(this.size*(.8+a*1.9)),s.s.material.rotation=s.turn+a*1.2,s.s.material.opacity=Math.sin(Math.PI*Math.min(1,a*1.15)**.6)*(.95-t*.5)*(1-a*.35)}}};var Kf=[[.06,0],[.084,.01],[.1,.042],[.104,.082],[.094,.126],[.075,.168],[.065,.204],[.067,.236],[.08,.28],[.098,.324],[.113,.368]],Qf=new Ar(Kf.map(([r,e])=>new pe(r,e))),Ts=Qf.getPoints(60),em=.009,th=.02,ih=.3,bs=.083,nh=r=>{let e=1;for(;e<Ts.length-1&&Ts[e].y<r;)e++;let t=Ts[e-1],n=Ts[e],i=Math.max(0,Math.min(1,(r-t.y)/(n.y-t.y||1)));return t.x+(n.x-t.x)*i-em},fo=nh(ih),Mn=56,ws=14,Rs=7;function tm(){let r=Mn+1,e=r*(ws+1)+1+Mn*Rs,t=new Float32Array(e*3),n=[];for(let c=0;c<ws;c++)for(let h=0;h<Mn;h++){let u=c*r+h;n.push(u,u+r,u+1,u+1,u+r,u+r+1)}let i=r*(ws+1),s=(c,h)=>i+1+(c-1)*Mn+h%Mn;for(let c=0;c<Mn;c++)n.push(i,s(1,c+1),s(1,c));for(let c=1;c<Rs;c++)for(let h=0;h<Mn;h++)n.push(s(c,h),s(c,h+1),s(c+1,h),s(c,h+1),s(c+1,h+1),s(c+1,h));let a=new et;a.setAttribute("position",new ht(t,3)),a.setIndex(n);let o=new rt({color:"#6a1003",roughness:.22,specularIntensity:.35,envMapIntensity:.45,emissive:"#8c1c04",emissiveIntensity:.12,side:$e});o.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
    totalEmissiveRadiance += vec3(0.62, 0.13, 0.012) * pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.0);`)};let l=new Pe(a,o);return l.castShadow=!0,l.frustumCulled=!1,l}function E0(r,e){let t=r.geometry.attributes.position,n=t.array,i=th+.012,s=(o,l)=>Math.max(i,Math.min(.364,ih+e.at(o,l)*fo)),a=0;for(let o=0;o<=ws;o++)for(let l=0;l<=Mn;l++){let c=l/Mn*Math.PI*2,h=Math.cos(c),u=Math.sin(c),d=th+(s(h,u)-th)*(o/ws),p=Math.max(.001,nh(d));n[a++]=h*p,n[a++]=d,n[a++]=u*p}n[a++]=0,n[a++]=s(0,0),n[a++]=0;for(let o=1;o<=Rs;o++)for(let l=0;l<Mn;l++){let c=l/Mn*Math.PI*2,h=o/Rs,u=Math.cos(c),d=Math.sin(c),p=s(u*h,d*h),f=o===Rs?s(u,d):p,y=nh(s(u,d))*h;n[a++]=u*y,n[a++]=f,n[a++]=d*y}t.needsUpdate=!0,r.geometry.computeVertexNormals()}function S0(r,e,t,n){e(new At([[.001,0],[.1,0],[.16,.012],[.205,.034],[.21,.04],[.2,.038],[.15,.022],[.1,.016],[.001,.016]].map(([v,M])=>new pe(v,M)),56),t,0,.066);for(let[v,M]of[[.185,.0985]])e(new qe(v,.0035,6,60),n("#ffffff"),0,M,0,Math.PI/2,0,0).castShadow=!1;let i=new rt({color:"#f4fbff",roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:1,envMapIntensity:1.6,side:$e,depthWrite:!1});i.onBeforeCompile=v=>{v.fragmentShader=v.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a = mix(0.02, 0.8, pow(1.0 - abs(dot(normalize(vViewPosition), normal)), 2.4));
#include <opaque_fragment>`)};let s=[new pe(.001,0),...Ts],a=e(new At(s,56),i,0,bs,0);a.renderOrder=2,a.castShadow=!1;let o=new rt({color:"#ffffff",roughness:.05,clearcoat:1,transparent:!0,opacity:.75,depthWrite:!1});for(let[v,M,E]of[[.1105,.368,.0038],[.07,.006,.004]]){let T=e(new qe(v,E,8,56),o,0,bs+M,0,Math.PI/2,0,0);T.renderOrder=3,T.castShadow=!1}let l=n("#dfe5ea",{metalness:1,roughness:.18});e(new lt(.0065,.16,4,8),l,.02,.105,.152,0,.1,Math.PI/2-.05),e(new Ie(.024,16,10),l,-.085,.103,.145).scale.set(1.5,.4,.9);for(let[v,M,E]of[[.145,.045,.3],[.15,-.03,.9]])e(new ge(.036,.024,.026),n("#ffffff",{roughness:.8,clearcoat:0}),v,.1,M,0,E,0);let c=new Fh({rim:.5}),h=new Gh(c.g),u=tm();u.position.y=bs,r.add(u),E0(u,c);let d=new _n(r,0,bs+ih+.03,0),p=new A(NaN),f=new A,y=new mt,m=new gt(0,0,0,"YXZ"),_=null,g=[],x=new Ie(.011,8,6);r.userData.live={sim:c,update(v,M=0){r.getWorldPosition(f);let E=h.move([f.x/fo,f.y/fo,f.z/fo],v),T=c.calm;m.setFromQuaternion(r.getWorldQuaternion(y));let R=Math.cos(m.y),L=Math.sin(m.y),W=c.step(v,E.ax*R-E.az*L,E.ax*L+E.az*R,E.lift);(!T||!c.calm)&&E0(u,c);let F=f.x-p.x||0,k=f.z-p.z||0;p.copy(f),d.update(v,M,F*R-k*L,F*L+k*R),W.sort((j,D)=>D.amount-j.amount);for(let j of W.slice(0,2))if(g.length<14){_=_||(()=>{let B=r;for(;B.parent;)B=B.parent;return B})();let D=new Pe(x,u.material),G=.35+Math.random()*.4;D.position.set(f.x+(j.x*R+j.z*L)*.115,f.y+bs+.375,f.z+(-j.x*L+j.z*R)*.115),D.userData={v:[(j.x*R+j.z*L)*G,.5+Math.random()*.5,(-j.x*L+j.z*R)*G],floor:f.y},D.scale.setScalar(.6+Math.random()*.7),_.add(D),g.push(D)}for(let j=g.length-1;j>=0;j--){let D=g[j],G=D.userData.v;G[1]-=6*v,D.position.x+=G[0]*v,D.position.y+=G[1]*v,D.position.z+=G[2]*v,D.position.y<.2&&(D.parent.remove(D),g.splice(j,1))}},gone(){for(let v of g)v.parent&&v.parent.remove(v);g.length=0}}}var go=new A(-.55,.62,.56).normalize(),sh=new A(-.075,Math.tan(.05),-1).normalize();function Ln(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function As(r,e,t,n){let i=new Float32Array(r*r),s=.5,a=0;for(let o=0;o<t;o++){let l=e<<o,c=Ln(n+o*101),h=Float32Array.from({length:l*l},c);for(let u=0;u<r;u++)for(let d=0;d<r;d++){let p=d/r*l,f=u/r*l,y=Math.floor(p),m=Math.floor(f),_=p-y,g=f-m;_=_*_*(3-2*_),g=g*g*(3-2*g);let x=(v,M)=>h[M%l*l+v%l];i[u*r+d]+=s*((x(y,m)*(1-_)+x(y+1,m)*_)*(1-g)+(x(y,m+1)*(1-_)+x(y+1,m+1)*_)*g)}a+=s,s*=.5}for(let o=0;o<i.length;o++)i[o]/=a;return i}var En=null;function vo(){if(En)return En;let r=256,e=[As(r,4,5,1),As(r,8,5,2),As(r,32,3,3),As(r,4,5,4)],t=new Uint8Array(r*r*4);for(let n=0;n<r*r;n++)for(let i=0;i<4;i++)t[n*4+i]=(.5+.5*Math.tanh((e[i][n]-.5)*3.4))*255;return En=new Mi(t,r,r),En.wrapS=En.wrapT=gi,En.magFilter=kt,En.minFilter=fi,En.generateMipmaps=!0,En.anisotropy=4,En.needsUpdate=!0,En}var nm=As(256,8,5,9);function Ri(r,e){let t=h=>(h%256+256)%256,n=t(r*8),i=t(e*8),s=Math.floor(n),a=Math.floor(i),o=n-s,l=i-a,c=(h,u)=>nm[u%256*256+h%256];return(c(s,a)*(1-o)+c(s+1,a)*o)*(1-l)+(c(s,a+1)*(1-o)+c(s+1,a+1)*o)*l}var rh=new Map;function Nr(r,e,t,n,{srgb:i=!0,repeat:s=null}={}){if(rh.has(r))return rh.get(r);let a=document.createElement("canvas");a.width=e,a.height=t,n(a.getContext("2d"),e,t,Ln(r.length*77+5));let o=new ut(a);return i&&(o.colorSpace=Ke),o.wrapS=o.wrapT=gi,s&&o.repeat.set(...s),o.anisotropy=8,rh.set(r,Kt(o)),o}function b0(r){return(e,t,n,i)=>{e.fillStyle=r?"#444":"#8d8371",e.fillRect(0,0,t,n);let s=12,a=n/s;for(let o=0;o<s;o++){let l=-i()*40;for(;l<t;){let c=26+i()*34,h=i();r?e.fillStyle=`rgb(${150+h*90},${150+h*90},${150+h*90})`:e.fillStyle=`hsl(${36+h*8},${14+h*12}%,${60+h*16}%)`,e.fillRect(l+1,o*a+1,c-2,a-2),l+=c}}if(!r)for(let o=0;o<2600;o++)e.fillStyle=`rgba(${i()<.5?"40,32,22":"255,248,230"},${i()*.09})`,e.fillRect(i()*t,i()*n,1+i()*3,1+i()*3)}}var rn=(r="#ffffff",e=[2,2])=>{let t=e.join("x");return new Be({color:r,map:Nr(`stone${t}`,256,256,b0(!1),{repeat:e}),bumpMap:Nr(`stoneb${t}`,256,256,b0(!0),{srgb:!1,repeat:e}),bumpScale:1.2,roughness:.92})},yo=(r="#7a5232",e=[1,1])=>new rt({color:r,roughness:.5,clearcoat:.35,clearcoatRoughness:.3,map:Nr(`wood${e}`,512,512,(t,n,i,s)=>{t.fillStyle="#d9c3a6",t.fillRect(0,0,n,i);for(let a=0;a<420;a++){let o=s()*i,l=3+s()*10,c=.004+s()*.012,h=s()*7;t.strokeStyle=`rgba(${70+s()*40},${40+s()*25},${18+s()*14},${.05+s()*.17})`,t.lineWidth=.6+s()*2.4,t.beginPath();for(let u=0;u<=n;u+=8)t.lineTo(u,o+Math.sin(u*c*Math.PI+h)*l*.5);t.stroke()}},{repeat:e})}),T0=()=>Nr("facade",128,128,(r,e,t,n)=>{r.fillStyle="#f3efe8",r.fillRect(0,0,e,t);for(let i=0;i<700;i++)r.fillStyle=`rgba(60,45,30,${n()*.06})`,r.fillRect(n()*e,n()*t,2+n()*5,2+n()*10);for(let i=0;i<3;i++)for(let s=0;s<3;s++){let a=12+s*40,o=10+i*41;r.fillStyle="#d9d2c6",r.fillRect(a-3,o-3,26,30);let l=n()<.12;r.fillStyle=l?"#e8c98a":["#2d3a45","#3b4a55","#25303a"][Math.floor(n()*3)],r.fillRect(a,o,20,24),r.fillStyle="rgba(190,215,235,.35)",r.fillRect(a+1,o+1,8,11),r.fillStyle="#efe9de",r.fillRect(a+9,o,2,24),r.fillStyle="rgba(0,0,0,.18)",r.fillRect(a-3,o+27,26,3)}}),w0=()=>Nr("tower",128,256,(r,e,t,n)=>{r.fillStyle="#c3ccd1",r.fillRect(0,0,e,t);for(let i=0;i<32;i++)for(let s=0;s<12;s++){let a=n();r.fillStyle=a<.06?"#f1dca6":`hsl(${203+a*12},${14+a*12}%,${58+a*26}%)`,r.fillRect(s*(e/12)+1,i*8+1,e/12-2,6)}}),ah=()=>Nr("paper",256,256,(r,e,t,n)=>{r.fillStyle="#808080",r.fillRect(0,0,e,t);for(let i=0;i<5200;i++){let s=100+n()*60;r.strokeStyle=`rgba(${s},${s},${s},.5)`,r.lineWidth=.7;let a=n()*e,o=n()*t,l=n()*7;r.beginPath(),r.moveTo(a,o),r.lineTo(a+Math.cos(l)*7,o+Math.sin(l)*7),r.stroke()}},{srgb:!1}),oh=`
  vec4 cartoonMoon(vec2 q) {
    // a crescent: one circle less another (its distance: inside is negative)
    float e = max(length(q) - 1.0, 0.80 - length(q - vec2(0.46, 0.20))), w = max(fwidth(q.x) * 0.9, 0.012);
    vec3 c = vec3(1.0, 0.66, 0.13);
    c = mix(c, vec3(0.80, 0.40, 0.05), smoothstep(-0.30 - w, -0.30 + w, e) * step(q.y, q.x * 0.6 - 0.05)); // the shaded rim
    c = mix(c, vec3(0.26, 0.12, 0.05), smoothstep(-0.10 - w, -0.10 + w, e)); // the outline
    return vec4(c, 1.0 - smoothstep(-w, w, e));
  }`,im=`
  ${oh}
  uniform vec3 uSun, uMoon; uniform sampler2D uNoise; uniform float uDisc, uTime, uNight; uniform vec3 uGround;
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
    if (uNight > 0.0) {
      vec3 n = mix(vec3(0.030, 0.036, 0.060), vec3(0.004, 0.007, 0.020), pow(up, 0.5));
      n += vec3(0.20, 0.105, 0.040) * exp(-up * 11.0) * 0.55; // the city's glow on the horizon
      vec2 p = vec2(atan(d.z, d.x) * 46.0, d.y * 64.0), id = floor(p), f = fract(p) - 0.5;
      float h = fract(sin(dot(id, vec2(127.1, 311.7))) * 43758.5453);
      n += vec3(0.9, 0.95, 1.0) * smoothstep(0.10, 0.0, length(f - (vec2(fract(h * 71.0), fract(h * 137.0)) - 0.5) * 0.6)) * step(0.90, h) * (0.5 + 0.5 * sin(uTime * (1.0 + h * 2.0) + h * 40.0)) * smoothstep(0.04, 0.3, d.y) * uDisc * 1.4;
      // the moon: a small cartoon crescent \u2013 flat, two tones, an outline
      float ms = max(dot(d, uMoon), 0.0);
      vec3 mr = normalize(cross(vec3(0.0, 1.0, 0.0), uMoon)), mu = cross(uMoon, mr);
      vec2 mq = vec2(dot(d, mr), dot(d, mu)) / 0.0165;
      n += vec3(0.50, 0.46, 0.36) * pow(ms, 1400.0) * 0.10 * max(uDisc, 0.15);
      vec4 moon = cartoonMoon(mq) * step(0.0, dot(d, uMoon)) * uDisc;
      n = mix(n, moon.rgb, moon.a);
      c = mix(c, n, uNight);
    }
    c = mix(c, uGround, smoothstep(0.015, -0.06, d.y));
    gl_FragColor = vec4(c, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,xo=new Ce().setRGB(.6,.72,.8);function lh(r=xo,e=1,t=sh){let n=new Pe(new Ie(1,48,32),new Yt({side:lo,depthWrite:!1,fog:!1,uniforms:{uSun:{value:go},uMoon:{value:t},uNoise:{value:vo()},uDisc:{value:e},uTime:{value:0},uNight:{value:0},uGround:{value:new Ce(r)}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:im}));return n.scale.setScalar(170),n.renderOrder=-10,n.frustumCulled=!1,n}var R0=new Ce().setRGB(.095,.072,.062);function ch(r,e,t=0){let n=new Vi(r),i=new Wi,s=lh(e,0,go);s.material.uniforms.uNight.value=t,i.add(s);let a=n.fromScene(i,.015,.1,400);return n.dispose(),a.texture}function A0(r){let e=new Vi(r),t=new Wi;t.add(new Pe(new ge(24,12,24),new bt({color:"#4b4038",side:lo})));let n=(s,a,o,l,c,h,u,d)=>{let p=new Pe(new ge(l,c,h),new bt({color:new Ce(d).multiplyScalar(u)}));p.position.set(s,a,o),t.add(p)};n(-11.5,2,-2,.3,6,9,9,"#cfe3f5"),n(0,5.8,0,7,.2,7,7,"#ffe6c2"),n(9,4,-9,2,2,.2,14,"#ffd9a0");let i=e.fromScene(t,.03);return e.dispose(),i.texture}var rm="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",sm=`
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
  }`,am=`
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
  }`,om="uniform sampler2D tMap; varying vec2 vUv; void main() { vec3 c = min(texture2D(tMap, vUv).rgb, vec3(12.0)); float l = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c * smoothstep(1.0, 2.2, l), 1.0); }",lm=`
  uniform sampler2D tMap, tAo, tBloom, tDepth; uniform float uAo, uExposure, uTime, uNear, uFar, uOrtho, uBloom; uniform vec2 uAoRes; varying vec2 vUv;
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
    c += texture2D(tBloom, vUv).rgb * uBloom;
    c = aces(c * uExposure);
    vec2 q = vUv - 0.5;
    c *= 1.0 - dot(q, q) * 0.24;
    c = mix(c * 12.92, 1.055 * pow(max(c, 1e-4), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
    c += (fract(sin(dot(gl_FragCoord.xy + uTime, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.013;
    gl_FragColor = vec4(c, 1.0);
  }`,mo=class{constructor(e){this.r=e,this.exposure=1,this.bloom=.22,this.cam=new xi(-1,1,1,-1,0,1),this.quad=new Pe(new Rt(2,2)),this.quad.frustumCulled=!1;let t=(i,s)=>new Yt({vertexShader:rm,fragmentShader:i,uniforms:s,depthTest:!1,depthWrite:!1,toneMapped:!1}),n=i=>({value:i});this.ao=t(sm,{tDepth:n(null),uInvProj:n(new Ne),uProj:n(new Ne),uRes:n(new pe),uFull:n(new pe),uRadius:n(.55),uOrtho:n(0)}),this.blur=t(am,{tMap:n(null),tDepth:n(null),uStep:n(new pe),uDepthAware:n(1),uNear:n(1),uFar:n(100),uOrtho:n(0)}),this.bright=t(om,{tMap:n(null)}),this.final=t(lm,{tMap:n(null),tAo:n(null),tBloom:n(null),tDepth:n(null),uNear:n(1),uFar:n(100),uOrtho:n(0),uAoRes:n(new pe),uAo:n(1),uExposure:n(1),uBloom:n(.22),uTime:n(0)})}setSize(e,t,n=4){if(this.main&&this.w===e&&this.h===t&&this.main.samples===n)return;this.dispose(),this.w=e,this.h=t;let i=new Rr(e,t,$n);this.main=new en(e,t,{type:Qn,samples:n,depthTexture:i});let s=(o,l)=>new en(Math.max(2,e>>o),Math.max(2,t>>o),{type:l,depthBuffer:!1}),a=e*t>4e6?1:0;this.ao1=s(1+a,gn),this.ao2=s(1+a,gn),this.b1=s(2+a,Qn),this.b2=s(2+a,Qn)}pass(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.quad,this.cam)}render(e,t){let n=this.r;n.setRenderTarget(this.main),n.clear(),n.render(e,t);let i=this.main.depthTexture,s=this.ao.uniforms,a=this.blur.uniforms;s.tDepth.value=i,s.uProj.value.copy(t.projectionMatrix),s.uInvProj.value.copy(t.projectionMatrixInverse),s.uRes.value.set(this.ao1.width,this.ao1.height),s.uFull.value.set(this.w,this.h),s.uOrtho.value=t.isOrthographicCamera?1:0,this.pass(this.ao,this.ao1),a.tDepth.value=i,a.uDepthAware.value=1,a.uNear.value=t.near,a.uFar.value=t.far,a.uOrtho.value=s.uOrtho.value,a.tMap.value=this.ao1.texture,a.uStep.value.set(1/this.ao1.width,0),this.pass(this.blur,this.ao2),a.tMap.value=this.ao2.texture,a.uStep.value.set(0,1/this.ao1.height),this.pass(this.blur,this.ao1),this.bright.uniforms.tMap.value=this.main.texture,this.pass(this.bright,this.b1),a.uDepthAware.value=0;for(let l of[1,2.5])a.tMap.value=this.b1.texture,a.uStep.value.set(l/this.b1.width,0),this.pass(this.blur,this.b2),a.tMap.value=this.b2.texture,a.uStep.value.set(0,l/this.b1.height),this.pass(this.blur,this.b1);let o=this.final.uniforms;o.tMap.value=this.main.texture,o.tAo.value=this.ao1.texture,o.tBloom.value=this.b1.texture,o.tDepth.value=i,o.uNear.value=t.near,o.uFar.value=t.far,o.uOrtho.value=s.uOrtho.value,o.uAoRes.value.copy(s.uRes.value),o.uExposure.value=this.exposure,o.uBloom.value=this.bloom,o.uTime.value=performance.now()/50%97,this.pass(this.final,null)}dispose(){for(let e of[this.main,this.ao1,this.ao2,this.b1,this.b2])e&&(e.depthTexture&&e.depthTexture.dispose(),e.dispose());this.main=null}},Cs=class{constructor(e,t){this.level=e,this.top=e,this.onStep=t,this.holdUp=3e4,this.reset(5e3)}reset(e,t=performance.now()){this.n=0,this.slow=0,this.warm=t+e,this.goodSince=0}frame(e,t=document.hidden,n=!1){if(t||e<this.warm){this.n=0,this.t0=e,this.slow=0;return}if(n!==!!this.capped&&(this.capped=n,this.n=0),this.n||(this.t0=e),this.n++,e-this.t0<2500)return;let i=(this.n-1)*1e3/(e-this.t0);this.n=0;let s=oi.indexOf(this.level);if(n){this.slow=i<22?this.slow+1:0,this.slow>=3&&oi[s+1]&&(this.step(oi[s+1],e),this.holdUp=Math.min(this.holdUp*2,6e5));return}this.slow=i<30?this.slow+1:0,i<50?this.goodSince=0:this.goodSince=this.goodSince||e,this.slow>=3&&oi[s+1]?(this.step(oi[s+1],e),this.holdUp=Math.min(this.holdUp*2,6e5)):this.goodSince&&e-this.goodSince>this.holdUp&&s>oi.indexOf(this.top)&&this.step(oi[s-1],e)}step(e,t){this.level=e,this.reset(4e3,t),this.onStep(e)}};var _o=(r,e,t,n,i,s,a,o=0)=>({x:r,z:e,turn:t,w:n,d:i,h:s,spots:Array.from({length:a},(l,c)=>{let h=a>1?(c/(a-1)-.5)*(n-i):0;return[r+h*Math.cos(t)+o*Math.sin(t),e-h*Math.sin(t)+o*Math.cos(t),i/2]})}),C0=-Math.PI/2,Nn={kuleli:_o(7.06,-6.06,C0,2,.62,.95,5),beylerbeyi:_o(7,-4.28,C0,.9,.5,.5,3),haydarpasa:_o(8.3,4.16,-1.2,1,.72,1.05,3,-.08),stadium:_o(12,4.85,-1.32,1.56,1.26,.5,2)},Is=(r,e)=>{let t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]},Ls=r=>{let e=new ut(r);return e.colorSpace=Ke,e.anisotropy=8,e};function Dn(r,e,t,n,{px:i=44,py:s=64,trim:a=null,seed:o=3,lit:l=.55}={}){let c=Ln(o),[h,u]=Is(r*i,e*s),[d,p]=Is(r*i,e*s);u.fillStyle=t,u.fillRect(0,0,h.width,h.height);for(let y=0;y<r*e*10;y++)u.fillStyle=c()<.5?"rgba(255,255,255,.07)":"rgba(60,40,20,.06)",u.fillRect(c()*h.width,c()*h.height,4+c()*16,2+c()*5);let f=p.createLinearGradient(0,d.height,0,0);f.addColorStop(0,"#5a4226"),f.addColorStop(1,"#22180d"),p.fillStyle=f,p.fillRect(0,0,d.width,d.height);for(let y=0;y<e;y++){for(let m=0;m<r;m++){u.save(),u.translate(m*i,y*s),p.save(),p.translate(m*i,y*s);let _=n(u,i,s,m,y);if(_){let g=u.createLinearGradient(0,0,0,s);g.addColorStop(0,"#5d7688"),g.addColorStop(1,"#1f2a33"),u.fillStyle=g,u.fill(_);let x=c()<l?.55+c()*.45:c()*.12;p.fillStyle=`rgb(${x*255},${x*200},${x*128})`,p.fill(_),u.strokeStyle="rgba(245,240,228,.85)",u.lineWidth=1.6,u.save(),u.clip(_),u.beginPath(),u.moveTo(i/2,0),u.lineTo(i/2,s),u.moveTo(0,s*.5),u.lineTo(i,s*.5),u.stroke(),u.restore()}u.restore(),p.restore()}a&&(u.fillStyle=a,u.fillRect(0,y*s,h.width,5),u.fillStyle="rgba(40,28,16,.32)",u.fillRect(0,y*s+5,h.width,3))}return{map:Ls(h),glow:Ls(d)}}var Un=(r,e,t,n,i=t/2)=>{let s=new Path2D;return s.moveTo(r,e+n),s.lineTo(r,e+i),s.arc(r+t/2,e+i,t/2,Math.PI,0),s.lineTo(r+t,e+n),s.closePath(),s},Mo=(r,e,t,n)=>{let i=new Path2D;return i.rect(r,e,t,n),i};function Eo(r,e,t){let n=r/2,i=e/2,s=Math.min(n,i),a=r>=e?[[-n+s,t,0],[n-s,t,0]]:[[0,t,-i+s],[0,t,i-s]],o=[[-n,0,i],[n,0,i],[n,0,-i],[-n,0,-i]],[l,c]=a,h=r>=e?[[o[0],o[1],c,l],[o[1],o[2],c],[o[2],o[3],l,c],[o[3],o[0],l]]:[[o[0],o[1],c],[o[1],o[2],l,c],[o[2],o[3],l],[o[3],o[0],c,l]],u=[];for(let p of h)for(let f=1;f<p.length-1;f++)u.push(...p[0],...p[f],...p[f+1]);let d=new et;return d.setAttribute("position",new Ue(u,3)),d.setAttribute("uv",new Ue(u.filter((p,f)=>f%3!==1),2)),d.computeVertexNormals(),d}var Ps=(r,e,t)=>{let n=new Wt;return n.moveTo(-r/2,0),n.lineTo(r/2,0),n.lineTo(0,e),n.closePath(),new nn(n,{depth:t,bevelEnabled:!1})},Or=(r,e,t,n=8)=>{let i=[];for(let[s,a,o]of[[1,1,0],[-1,1,1],[-1,-1,2],[1,-1,3]])for(let l=0;l<=n;l++){let c=(o+l/n)*Math.PI/2;i.push([s*(r/2-t)+Math.cos(c)*t,a*(e/2-t)+Math.sin(c)*t])}return i.push(i[0]),i};function Ai(r,e,t,n,i=1,s=null,a=1){let o=[],l=[],c=[],h=[],u=r.length,d=[0];for(let f=1;f<u;f++)d.push(d[f-1]+Math.hypot(r[f][0]-r[f-1][0],r[f][1]-r[f-1][1]));for(let f=0;f<=a;f++)for(let y=0;y<u;y++){let m=f/a;if(o.push(r[y][0]+(t[y][0]-r[y][0])*m,e+(n-e)*m,r[y][1]+(t[y][1]-r[y][1])*m),l.push(d[y]/d[u-1]*i,m),s&&c.push(...s(y,u,m)),f<a&&y<u-1){let _=f*u+y;h.push(_,_+u,_+1,_+1,_+u,_+u+1)}}let p=new et;return p.setAttribute("position",new Ue(o,3)),p.setAttribute("uv",new Ue(l,2)),s&&p.setAttribute("color",new Ue(c,3)),p.setIndex(h),p.computeVertexNormals(),p}function On(r){r.updateMatrixWorld(!0);let e=r.matrixWorld.clone().invert(),t=new Ne,n=new Map,i=[];r.traverse(s=>{s.isMesh&&i.push(s)});for(let s of i){let a=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(t.multiplyMatrices(e,s.matrixWorld)),o=[].concat(s.material),l=o.length>1?a.groups:[{start:0,count:a.attributes.position.count,materialIndex:0}];for(let c of l){let h=o[c.materialIndex];n.has(h)||n.set(h,[]),n.get(h).push([a,c.start,c.count])}}r.clear();for(let[s,a]of n){let o=new et,l=a.reduce((h,[,,u])=>h+u,0);for(let[h,u]of[["position",3],["normal",3],["uv",2],...s.vertexColors?[["color",3]]:[]]){let d=new Float32Array(l*u),p=0;for(let[f,y,m]of a){let _=f.attributes[h];_&&d.set(_.array.subarray(y*u,(y+m)*u),p),p+=m*u}o.setAttribute(h,new ht(d,u))}let c=new Pe(o,s);c.castShadow=c.receiveShadow=!0,r.add(c)}}function P0({GROUND:r,group:e,piece:t,mat:n,lit:i,dark:s,lead:a,gold:o}){let l={},c=(x,v={})=>v.map||v.vertexColors?n(x,v):l[x+JSON.stringify(v)]=l[x+JSON.stringify(v)]||n(x,v),h=(x,v,M,E)=>{if(E||x.map||x.vertexColors)return i(x,v,M,E);let T=`${x.uuid} ${v} ${M}`;return l[T]=l[T]||i(x.clone(),v,M)},u=[],d=x=>{let v=e(x.x,r,x.z);return v.rotation.y=x.turn,u.push(v),v},p=(x,v=1.5)=>h(c("#ffffff",{map:x.map,roughness:.85}),"#ffc27a",v,x.glow),f=(x,v,M,E,T,R,L,W)=>t(new ge(v,M,E),T,R,L+M/2,W,x),y=(x,v,M,E,T,R,L,W,F,k)=>f(x,v,M,E,[R,R,L,L,T,T],W,F,k),m=rn("#cfc6b4",[7,1]),_=c("#8f887a",{roughness:.95}),g=c("#4f6b2c",{roughness:1});{let x=Nn.kuleli,v=d(x),M="#f1ebdf",E=h(c(M),"#ffb868",.14),T=c("#9a4c36",{roughness:.85,flatShading:!0}),R=c("#6f7b86",{metalness:.35,roughness:.45}),L=(le,se,he,N,C)=>{let z=C===2?Un(se*.3,he*.42,se*.4,he*.46):Un(se*.3,he*.24,se*.4,he*.6);return le.fillStyle="rgba(120,96,66,.45)",le.fill(C===2?Un(se*.24,he*.36,se*.52,he*.52):Un(se*.24,he*.18,se*.52,he*.7)),z},W={trim:"#fbf8f0",seed:5},F=p(Dn(17,3,M,L,W)),k=p(Dn(15,3,M,L,{...W,seed:6})),j=p(Dn(8,3,M,L,{...W,seed:7})),D=p(Dn(3,4,M,L,{...W,seed:8})),G=p(Dn(2,3,M,L,{...W,seed:9})),B=.3,K=.25,Z=(le,se,he,N,C,z)=>{y(v,le,B,se,he,N,E,C,0,z),f(v,le+.02,.018,se+.02,E,C,B,z),t(Eo(le+.04,se+.04,.075),T,C,B+.018,z,v)};Z(.96,.17,k,G,-.52,K-.085),Z(.94,.17,F,G,.45,K-.085),Z(.15,.4,G,j,.015,K-.36),Z(.15,.4,G,j,.885,K-.36),Z(1.02,.15,F,G,.45,K-.52),f(v,.72,.012,.28,g,.45,0,K-.31);for(let le of[-.005,.93]){y(v,.19,.5,.2,D,D,E,le,0,K-.075),f(v,.22,.02,.23,E,le,.5,K-.075),t(new xe(.06,.066,.085,8),E,le,.56,K-.075,v);for(let se=0;se<8;se++){let he=(se+.5)*Math.PI/4,N=t(new ge(.022,.05,.006),h(c("#2b2722"),"#ffb45e",2.5),le+Math.sin(he)*.06,.562,K-.075+Math.cos(he)*.06,v);N.rotation.y=he}t(new xe(.078,.068,.016,24),R,le,.61,K-.075,v),t(new At([[.07,0],[.05,.04],[.033,.1],[.017,.2],[.004,.31]].map(([se,he])=>new pe(se,he)),24),R,le,.618,K-.075,v),t(new Ie(.009,10,8),o,le,.935,K-.075,v)}y(v,.2,.33,.03,p(Dn(3,2,M,(le,se,he)=>Un(se*.22,he*.16,se*.56,he*.76),{trim:"#fbf8f0",seed:11,lit:.9})),E,E,.45,0,K+.012),t(Ps(.22,.055,.2),T,.45,.33,K-.17,v),t(Ps(.2,.046,.01),E,.45,.332,K+.03,v);for(let le=0;le<4;le++)f(v,.34-le*.06,.014,.09-le*.02,m,.45,le*.014,K+.06);f(v,2.16,.36,.3,m,0,-.35,K+.2),f(v,2.16,.03,.016,E,0,.01,K+.34),t(new xe(.006,.008,.8,8),c("#eef0f1",{metalness:.5}),-.78,.4,K-.3,v);let[de,me]=Is(96,64);me.fillStyle="#e30a17",me.fillRect(0,0,96,64),me.fillStyle="#fff",me.beginPath(),me.arc(36,32,16,0,7),me.fill(),me.fillStyle="#e30a17",me.beginPath(),me.arc(40,32,12.8,0,7),me.fill(),me.fillStyle="#fff",me.beginPath();for(let le=0;le<10;le++){let se=le%2?3.1:8,he=Math.PI+le*Math.PI/5;me.lineTo(56.5+Math.cos(he)*se,32+Math.sin(he)*se)}me.fill();let te=new Rt(.21,.14,10,1),ce=te.attributes.position;for(let le=0;le<ce.count;le++)ce.setZ(le,Math.sin(ce.getX(le)*34)*.012);te.computeVertexNormals(),t(te,h(c("#ffffff",{map:Ls(de),side:$e}),"#ffffff",.5),-.67,.72,K-.3,v)}{let x=Nn.beylerbeyi,v=d(x),M="#d8c9ae",E=h(c("#e6dac3",{roughness:.8}),"#ffb868",.14),T=h(c(M),"#ffb868",.14),R=c("#8b949b",{metalness:.3,roughness:.6}),L=(D,G,B)=>(D.fillStyle="rgba(255,248,230,.75)",D.fillRect(0,0,G*.1,B),D.fillRect(G*.9,0,G*.1,B),D.fillStyle="rgba(90,66,38,.3)",D.fillRect(G*.1,0,2,B),D.fillRect(G*.88,0,2,B),D.fillStyle="#efe4cd",D.fill(Un(G*.2,B*.14,G*.6,B*.76)),D.fillStyle="rgba(90,66,38,.4)",D.fill(Un(G*.26,B*.19,G*.48,B*.7)),Un(G*.29,B*.23,G*.42,B*.64)),W=(D,G)=>p(Dn(D,2,M,L,{px:46,py:74,trim:"#f3ead6",seed:G,lit:.7})),F=.32,k=(D,G,B,K,Z,de,me,te=F)=>{y(v,D,te,G,W(Z,me),W(de,me+40),T,B,0,K),f(v,D+.024,.014,G+.024,E,B,te*.5-.007,K),f(v,D+.034,.02,G+.034,E,B,te,K),f(v,D+.004,.03,G+.004,T,B,te+.02,K),f(v,D+.016,.008,G+.016,E,B,te+.05,K)};k(.8,.4,0,-.03,12,6,20),k(.86,.13,0,-.03,13,2,24,F-.002);for(let D of[-.155,.155])k(.155,.075,D,.185,3,1,26+D,F+.012);k(.16,.42,0,-.04,3,6,30,F+.004),f(v,.72,.012,.34,R,0,F+.045,-.03);for(let D of[-.155,0,.155]){let G=t(new xe(.045,.045,.02,24,1,!1,-Math.PI/2,Math.PI),E,D,F+.068,D?.215:.165,v);G.rotation.x=-Math.PI/2,G.rotation.y=0}for(let D of[-.4,-.235,-.075,.075,.235,.4])for(let G of[.172,-.232])t(new xe(.006,.01,.03,8),E,D,F+.075,G,v),t(new Ie(.01,10,8),E,D,F+.095,G,v);f(v,.13,.02,.05,E,0,0,.235),f(v,.18,.01,.08,E,0,0,.245),f(v,1.2,.36,.24,m,0,-.35,.38),f(v,1.16,.05,.014,E,0,.01,.36);for(let D=0;D<=12;D++)f(v,.02,.066,.022,E,-.576+D*.096,.01,.36);for(let D of[-.3,.3])f(v,.026,.11,.026,E,D-.04,.01,.36),f(v,.026,.11,.026,E,D+.04,.01,.36),f(v,.054,.085,.008,o,D,.01,.362);let j=h(c("#33444f",{roughness:.2}),"#ffc27a",2);for(let D of[-.55,.55]){t(new xe(.05,.05,.11,8),E,D,.065,.31,v);for(let G=0;G<8;G++){let B=(G+.5)*Math.PI/4,K=t(new ge(.02,.06,.004),j,D+Math.sin(B)*.0465,.065,.31+Math.cos(B)*.0465,v);K.rotation.y=B}t(new At([[.068,0],[.05,.018],[.03,.05],[.012,.085],[.003,.12]].map(([G,B])=>new pe(G,B)),8),R,D,.12,.31,v),t(new Ie(.008,8,6),o,D,.245,.31,v)}for(let D of[-.46,.46])f(v,.08,.012,.3,g,D,0,0)}{let x=Nn.haydarpasa,v=d(x),M="#cdb995",E=h(c(M),"#ffb868",.14),T=h(c("#e2d3b4"),"#ffb868",.14),R=c("#3d474e",{roughness:.6,flatShading:!0}),L=c("#465159",{roughness:.5}),W=(Z,de,me,te,ce)=>{Z.fillStyle="rgba(245,232,204,.8)";let le=ce===3?Un(de*.24,me*.14,de*.52,me*.8):Mo(de*.3,me*.2,de*.4,me*.6);return Z.fill(ce===3?Un(de*.16,me*.06,de*.68,me*.9):Mo(de*.23,me*.13,de*.54,me*.76)),le},F=(Z,de)=>p(Dn(Z,4,M,W,{px:46,py:56,trim:"#e6d8ba",seed:de})),k=.44,j=(Z,de,me,te,ce,le,se)=>{y(v,Z,k,de,F(ce,se),F(le,se+1),E,me,0,te),f(v,Z+.03,.022,de+.03,T,me,k,te),t(Eo(Z+.03,de+.03,.2),R,me,k+.022,te,v)};j(.92,.26,0,.15,12,3,50),j(.26,.5,.33,-.2,3,7,52),j(.26,.28,-.33,-.09,3,4,54),f(v,.2,.2,.06,E,0,k,.265),t(Ps(.23,.15,.06),T,0,k+.2,.236,v),t(Ps(.21,.13,.16),R,0,k+.2,.08,v),f(v,.24,.016,.075,T,0,k+.195,.266);let[D,G]=Is(128,128);G.fillStyle="#fbf5e2",G.fillRect(0,0,128,128),G.translate(64,64),G.strokeStyle="#2b2722";for(let Z=0;Z<12;Z++)G.lineWidth=Z%3?4:8,G.beginPath(),G.moveTo(0,-56),G.lineTo(0,-44),G.stroke(),G.rotate(Math.PI/6);G.lineWidth=8,G.beginPath(),G.moveTo(0,0),G.lineTo(20,-24),G.stroke(),G.lineWidth=6,G.beginPath(),G.moveTo(0,0),G.lineTo(-34,-26),G.stroke();let B=t(new Zt(.06,32),h(c("#ffffff",{map:Ls(D)}),"#fff0c8",1.5),0,k+.1,.2965,v);B.castShadow=!1;let K=t(new qe(.062,.007,8,32),T,0,k+.1,.296,v);K.castShadow=!1,t(new xe(.004,.005,.12,6),o,0,k+.4,.266,v);for(let Z of[-.46,.46])t(new xe(.088,.094,k+.06,28),p(Dn(9,4,M,W,{px:46,py:56,trim:"#e6d8ba",seed:58})),Z,(k+.06)/2,.24,v),t(new xe(.102,.09,.026,28),T,Z,k+.07,.24,v),t(new xe(.084,.084,.07,28),E,Z,k+.11,.24,v),t(new At([[.1,0],[.094,.02],[.086,.09],[.06,.15],[.036,.185],[.03,.2],[.018,.27],[.003,.35]].map(([de,me])=>new pe(de,me)),28),L,Z,k+.145,.24,v),t(new Ie(.011,10,8),o,Z,k+.505,.24,v);for(let Z of[-.26,-.13,.13,.26])f(v,.05,.05,.05,E,Z,k+.06,.225),t(Ps(.064,.034,.06),R,Z,k+.11,.195,v),f(v,.026,.03,.004,h(c("#2b2722"),"#ffb45e",2),Z,k+.068,.2515);for(let Z of[-.07,0,.07]){let de=new Wt;de.moveTo(-.024,0),de.lineTo(.024,0),de.lineTo(.024,.08),de.absarc(0,.08,.024,0,Math.PI),de.closePath(),t(new nn(de,{depth:.012,bevelEnabled:!1}),h(c("#4a3524"),"#ffb45e",1.6),Z,.03,.275,v)}for(let Z=0;Z<4;Z++)f(v,.66-Z*.04,.012,.17-Z*.032,m,0,Z*.012-.002,.34-Z*.006);f(v,1.3,.36,.34,m,0,-.355,.5),f(v,1.32,.22,.03,_,0,-.35,.67);for(let Z=0;Z<7;Z++){let de=-.54+Z*.18;t(new xe(.004,.006,.12,6),s,de,.065,.63,v),t(new Ie(.013,10,8),h(c("#f3ead6"),"#ffb05a",5),de,.13,.63,v)}for(let[Z,de]of[[-.06,"#b23a30"],[.06,"#f0ede4"]])f(v,.055,.07,.36,c(de,{roughness:.4}),Z,.012,-.22),f(v,.057,.022,.34,h(c("#26343f",{roughness:.2}),"#ffca7a",1.6),Z,.045,-.22),f(v,.03,.004,.5,s,Z,.004,-.24);f(v,.05,.008,.4,a,0,.13,-.24);for(let Z of[-.1,-.38])f(v,.008,.13,.008,s,0,0,Z)}{let x=Nn.stadium,v=d(x),M=x.w,E=x.d,T=c("#f4f3ee",{roughness:.55,side:$e}),R=Or(M,E,.24),L=Or(M+.05,E+.05,.26),W=Or(M*.56,E*.47,.11),F=.3,k=Dn(44,3,"#eceae4",(z,q,H,X,w)=>w===1?Mo(q*.06,H*.16,q*.88,H*.68):Mo(q*.14,H*.26,q*.72,H*.5),{px:34,py:40,trim:"#c9c9c4",seed:70,lit:.8}),j=p(k,1.1);j.side=$e,j.roughness=.6,t(Ai(R,0,R,F),j,0,0,0,v),t(Ai(Or(M+.012,E+.012,.246),F*.31,Or(M+.012,E+.012,.246),F*.37),T,0,0,0,v),t(Ai(L,F,L,F+.035),c("#5b6670",{side:$e,roughness:.5}),0,0,0,v),t(Ai(L,F+.035,W,F+.075),T,0,0,0,v),t(Ai(W,F+.075,W,F+.05),c("#d7d7d2",{side:$e}),0,0,0,v);let D=new Ce("#f2c413").toArray(),G=new Ce("#12295c").toArray(),B=new Ce("#e9e9e4").toArray(),K=180,Z=(z,q,H)=>{let X=Or(z,q,H,12),w=[0];for(let V=1;V<X.length;V++)w.push(w[V-1]+Math.hypot(X[V][0]-X[V-1][0],X[V][1]-X[V-1][1]));let I=[];for(let V=0;V<=K;V++){let ee=V/K*w[w.length-1],Y=1;for(;Y<w.length-1&&w[Y]<ee;)Y++;let ne=w[Y]===w[Y-1]?0:(ee-w[Y-1])/(w[Y]-w[Y-1]);I.push([X[Y-1][0]+(X[Y][0]-X[Y-1][0])*ne,X[Y-1][1]+(X[Y][1]-X[Y-1][1])*ne])}return I},de=z=>{let q=Math.floor(z/15)%12;return z%15===0?B:q%2?G:D},me=(z,q,H)=>{let X=de(z),w=.82+Math.round(H*12)%2*.2;return X.map(I=>I*w)},te=h(c("#ffffff",{vertexColors:!0,roughness:.75,side:$e}),"#ffffff",.42);te.onBeforeCompile=z=>{z.fragmentShader=z.fragmentShader.replace("#include <emissivemap_fragment>","totalEmissiveRadiance *= vColor.rgb;")},t(Ai(Z(M*.53,E*.47,.06),.03,Z(M*.76,E*.72,.14),.15,1,me,12),te,0,0,0,v),t(Ai(Z(M*.75,E*.71,.14),.19,Z(M*.97,E*.97,.22),F,1,me,12),te,0,0,0,v),t(Ai(Z(M*.76,E*.72,.14),.15,Z(M*.75,E*.71,.14),.19),h(c("#2f3943",{side:$e}),"#ffd9a0",1.2),0,0,0,v);let[ce,le]=Is(512,336);for(let z=0;z<12;z++)le.fillStyle=z%2?"#3f8f3a":"#4da546",le.fillRect(z*512/12,0,512/12+1,336);le.strokeStyle="rgba(255,255,255,.92)",le.lineWidth=3.5,le.strokeRect(20,18,472,300),le.beginPath(),le.moveTo(256,18),le.lineTo(256,318),le.stroke(),le.beginPath(),le.arc(256,168,42,0,7),le.stroke();for(let z of[0,1]){let q=(H,X)=>z?512-H-X:H;le.strokeRect(q(20,74),80,74,176),le.strokeRect(q(20,26),128,26,80),le.beginPath(),le.arc(z?442:70,168,40,z?Math.PI*.68:-Math.PI*.32,z?Math.PI*1.32:Math.PI*.32),le.stroke()}let se=t(new Rt(M*.5,E*.42).rotateX(-Math.PI/2),h(c("#ffffff",{map:Ls(ce),roughness:.95}),"#e9f5ff",.5),0,.03,0,v);se.castShadow=!1,f(v,M*.56,.02,E*.5,c("#b9bcbe",{roughness:.9}),0,.005,0);for(let z of[-1,1]){for(let q of[-.028,.028])f(v,.004,.032,.004,T,z*M*.226,.03,q);f(v,.004,.004,.06,T,z*M*.226,.06,0)}let he=c("#e9e9e6",{roughness:.5,metalness:.2}),N=h(c("#ffffff"),"#f4f9ff",7),C=(z,q,H,X)=>{let w=new Ye;w.position.set(q,F+.075,H),w.rotation.y=X,v.add(w);for(let[V,ee]of[[.004,-.016],[.004,.016],[.052,0]])t(new xe(.0055,.0055,z,6).rotateZ(Math.PI/2),he,0,V,ee,w);let I=Math.round(z/.06);for(let V=0;V<I;V++)for(let ee of[-.008,.008]){let Y=t(new xe(.0032,.0032,.062,4),he,-z/2+(V+.5)*(z/I),.027,ee,w);Y.rotation.z=V%2?.65:-.65,Y.rotation.x=ee>0?-.3:.3}};for(let z of[-1,1]){C(M*.86,0,z*E*.29,0),C(E*.82,z*M*.345,0,Math.PI/2);for(let q=0;q<9;q++)f(v,.03,.012,.012,N,-M*.22+q*M*.44/8,F+.045,z*E*.243)}for(let z of[-.62,.62])for(let q of[-.5,.5])t(new xe(.05,.05,F+.02,20),c("#dedcd6"),z*M/1.56,(F+.02)/2,q*E/1.26,v);f(v,.5,.012,.1,c("#7f97a6",{roughness:.15,metalness:.3}),0,.1,E/2+.04),f(v,.56,.035,.012,h(c("#f2c413"),"#f2c413",.9),0,.225,E/2+.012),f(v,.56,.022,.013,c("#12295c"),0,.196,E/2+.012)}for(let x of u)On(x)}var hh={},sn=(r,e,t,n)=>{if(hh[r])return hh[r];let i=document.createElement("canvas");i.width=e,i.height=t;let s=7;n(i.getContext("2d"),e,t,()=>(s=s*16807%2147483647)/2147483647);let a=new ut(i);return a.colorSpace=Ke,a.wrapS=gi,a.anisotropy=8,hh[r]=Kt(a)},ph=(r,e,t,n,i,s,a)=>{for(let o=0;o<i;o++){let l=n()*e,c=n()*t,h=n();r.fillStyle=r.strokeStyle=s[o%s.length];for(let u of[0,-e,e])r.save(),r.translate(l+u,c),r.rotate(h*6.28),a(h),r.restore()}},fh=(r,e)=>{r.beginPath(),r.ellipse(0,0,e,e*.7,0,0,7),r.fill()},I0=()=>sn("doner",512,256,(r,e,t,n)=>{r.fillStyle="#b5652c",r.fillRect(0,0,e,t);for(let i=0;i<t;i+=7)for(let s=0;s<e;){let a=14+n()*46;r.fillStyle=["#8c4319","#c47433","#dd9650","#a95722","#e8ad68","#73340f"][Math.floor(n()*6)],r.beginPath(),r.roundRect(s,i+Math.sin(s/e*Math.PI*4)*2,a,5+n()*3,3),r.fill(),s+=a+1}for(let[i,s]of[[130,"255,214,160,.42"],[390,"50,16,2,.5"]]){let a=r.createLinearGradient(i-70,0,i+70,0);a.addColorStop(0,`rgba(${s.slice(0,s.lastIndexOf(","))},0)`),a.addColorStop(.5,`rgba(${s})`),a.addColorStop(1,`rgba(${s.slice(0,s.lastIndexOf(","))},0)`),r.fillStyle=a,r.fillRect(i-70,0,140,t)}r.strokeStyle="rgba(70,26,6,.6)",r.lineWidth=1.5;for(let i=4;i<t;i+=14){r.beginPath();for(let s=0;s<=e;s+=8)r.lineTo(s,i+Math.sin(s/e*Math.PI*4+i)*2.5);r.stroke()}}),L0=()=>sn("leaf",256,128,(r,e,t)=>{r.fillStyle="#6f7c35",r.fillRect(0,0,e,t);for(let n=0;n<260;n++)r.fillStyle=["#7d8b40","#5d6b2a","#8a964c"][n%3],r.globalAlpha=.5,r.beginPath(),r.arc(n*97%e,n*53%t,3+n%7,0,7),r.fill();r.globalAlpha=.8,r.strokeStyle="#c2cb86",r.lineCap="round";for(let n of[0,128]){r.lineWidth=2.4,r.beginPath(),r.moveTo(n+40,0),r.lineTo(n+70,t),r.stroke(),r.lineWidth=1.3;for(let i=0;i<6;i++){let s=10+i*20,a=n+40+s/t*30;r.beginPath(),r.moveTo(a,s),r.lineTo(a+32,s-12),r.moveTo(a,s),r.lineTo(a-32,s-6),r.stroke()}}}),cm=()=>sn("burner",256,128,(r,e,t,n)=>{r.fillStyle="#a35a34",r.fillRect(0,0,e,t);for(let i=8,s=0;i<t;i+=14,s++)for(let a=s%2?8:16;a<e;a+=16){let o=.65+n()*.35;r.fillStyle=`rgb(${255*o},${232*o},${196*o})`,r.beginPath(),r.arc(a,i,5.6,0,7),r.fill()}}),hm=()=>sn("latte",256,256,(r,e)=>{let t=r.createRadialGradient(128,128,20,128,128,128);t.addColorStop(0,"#b4713a"),t.addColorStop(.72,"#94551f"),t.addColorStop(.9,"#70390f"),t.addColorStop(1,"#4c2407"),r.fillStyle=t,r.fillRect(0,0,e,e),r.shadowColor="#fff3df",r.shadowBlur=4,r.strokeStyle=r.fillStyle="#fff8ec",r.lineCap=r.lineJoin="round";for(let n=0;n<7;n++){let i=206-n*20,s=84*Math.sin(.55+n/7*1.95)*(1-n*.035);r.lineWidth=11-n*.6,r.beginPath(),r.moveTo(128-s,i-30),r.quadraticCurveTo(128-s*.86,i-2,128,i+10),r.quadraticCurveTo(128+s*.86,i-2,128+s,i-30),r.stroke()}r.beginPath(),r.moveTo(128,86),r.bezierCurveTo(84,62,92,28,112,30),r.bezierCurveTo(122,31,127,38,128,44),r.bezierCurveTo(129,38,134,31,144,30),r.bezierCurveTo(164,28,172,62,128,86),r.fill(),r.lineWidth=4,r.beginPath(),r.moveTo(128,44),r.lineTo(128,226),r.stroke()}),um=()=>sn("foam",128,128,(r,e,t,n)=>{let i=r.createRadialGradient(64,64,8,64,64,64);i.addColorStop(0,"#4a2710"),i.addColorStop(.6,"#6d3f1c"),i.addColorStop(1,"#a9713a"),r.fillStyle=i,r.fillRect(0,0,e,t);for(let s=0;s<420;s++){let a=n()*6.28,o=64*Math.sqrt(.08+n()*.92);r.globalAlpha=.25+n()*.5,r.fillStyle=s%4?"#c08a50":"#3a1c08",r.beginPath(),r.arc(64+Math.cos(a)*o,64+Math.sin(a)*o,.7+n()*2.2,0,7),r.fill()}}),dm=()=>sn("iznik",512,128,(r,e,t)=>{r.fillStyle="#fbfaf5",r.fillRect(0,0,e,t),r.fillStyle="#c99a2e";for(let n of[14,104])r.fillRect(0,n,e,6);for(let n=0;n<8;n++)r.save(),r.translate(32+n*64,62),n%2&&r.scale(1,-1),r.fillStyle=n%2?"#1c4f9c":"#c8281e",r.beginPath(),r.moveTo(0,-32),r.bezierCurveTo(20,-18,18,10,0,16),r.bezierCurveTo(-18,10,-20,-18,0,-32),r.fill(),r.fillStyle="#fbfaf5",r.beginPath(),r.ellipse(0,-6,3.5,12,0,0,7),r.fill(),r.strokeStyle="#17756b",r.lineWidth=4,r.lineCap="round",r.beginPath(),r.moveTo(0,16),r.lineTo(0,34),r.moveTo(0,28),r.quadraticCurveTo(16,24,22,8),r.moveTo(0,28),r.quadraticCurveTo(-16,24,-22,8),r.stroke(),r.restore()}),pm=()=>sn("crust",256,128,(r,e,t,n)=>{let i=r.createLinearGradient(0,0,0,t);i.addColorStop(0,"#b9702a"),i.addColorStop(.55,"#d4944a"),i.addColorStop(1,"#e8bd7c"),r.fillStyle=i,r.fillRect(0,0,e,t),r.globalAlpha=.3,ph(r,e,t,n,240,["#f1cf96","#a65d1f","#c98a3f"],s=>fh(r,2+s*9))}),fm=()=>sn("filo",256,64,(r,e,t,n)=>{r.fillStyle="#dc9a3c",r.fillRect(0,0,e,t);for(let i=0;i<t;i+=4)r.fillStyle=["#f0bd62","#c67d24","#e6a947","#a8641a"][Math.floor(n()*4)],r.fillRect(0,i,e,2.4);r.fillStyle="#7d9a2c",r.fillRect(0,26,e,13);for(let i=0;i<150;i++)r.fillStyle=["#a9c24a","#5d7a1c","#8fb03a"][i%3],r.fillRect(n()*e,26+n()*11,5,3)}),uh=()=>sn("lavash",256,256,(r,e,t,n)=>{r.fillStyle="#f0d9a8",r.fillRect(0,0,e,t),r.globalAlpha=.45,ph(r,e,t,n,120,["#f9ead0","#e2c083"],i=>fh(r,4+i*14)),r.globalAlpha=.75,ph(r,e,t,n,34,["#a8692b","#8a4d19","#c08743"],i=>fh(r,3+i*9))}),mm=()=>sn("paper",256,128,(r,e,t)=>{r.fillStyle="#fdfaf2",r.fillRect(0,0,e,t),r.fillStyle="rgba(205,35,30,.55)";for(let n=0;n<e;n+=32)r.fillRect(n,0,16,t);for(let n=0;n<t;n+=32)r.fillRect(0,n,e,16)}),D0=()=>sn("lahmacun",512,512,(r,e,t,n)=>{r.fillStyle="#e0ad62",r.fillRect(0,0,e,t);let i=(s,a,o,l,c,h,u)=>{r.globalAlpha=u;for(let d=0;d<o;d++){let p=n()*6.28,f=s+(a-s)*Math.sqrt(n());r.fillStyle=l[d%l.length],r.beginPath(),r.ellipse(256+Math.cos(p)*f,256+Math.sin(p)*f,c+n()*h,(c+n()*h)*.75,n()*3,0,7),r.fill()}};i(225,256,200,["#c98a3c","#a8621f","#efc98a","#8a4a14"],4,9,.6),r.globalAlpha=1,r.fillStyle="#a53a18",r.beginPath();for(let s=0;s<=60;s++){let a=s/60*6.283,o=221+Math.sin(a*5)*5+Math.sin(a*11)*4;r.lineTo(256+Math.cos(a)*o,256+Math.sin(a)*o)}r.fill(),i(0,214,900,["#c2502a","#8a2a10","#d2683a","#7a2c14","#b5431f"],4,8,.75),i(0,210,190,["#d8301c","#f0873c","#e6a05a"],2,4,.85),i(0,208,170,["#3f7a22","#6aa534","#2c5c16"],3,4,.95),i(0,205,60,["#4a1a0a"],3,6,.6)}),gm=()=>sn("mackerel",256,128,(r,e,t,n)=>{let i=r.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2f6a8f"),i.addColorStop(.5,"#9fc7d8"),i.addColorStop(.75,"#eef4f4"),i.addColorStop(1,"#c08a52"),r.fillStyle=i,r.fillRect(0,0,e,t),r.strokeStyle="#0f2f47",r.lineWidth=5,r.lineCap="round";for(let s=6;s<e;s+=15)r.beginPath(),r.moveTo(s,4),r.bezierCurveTo(s+10,18,s-8,30,s+4+n()*6,54),r.stroke();r.globalAlpha=.5,r.strokeStyle="#5c2a0c",r.lineWidth=7;for(let s of[40,96,152,208])r.beginPath(),r.moveTo(s,0),r.lineTo(s+26,t),r.stroke()}),Hr=class{constructor(e,t,n){Object.assign(this,{on:e,off:t,ease:n,going:!1,level:0,left:1.5+Math.random()*4})}update(e){if(this.left-=e,this.left<=0){this.going=!this.going;let[t,n]=this.going?this.on:this.off;this.left=t+Math.random()*(n-t)}return this.level=Math.max(0,Math.min(1,this.level+(this.going?e:-e)/this.ease)),this.level*this.level*(3-2*this.level)}};function So(r,e){let t=new A,n=new A(NaN),i=new mt,s=new gt(0,0,0,"YXZ");return(a,o)=>{r.getWorldPosition(t),s.setFromQuaternion(r.getWorldQuaternion(i));let l=t.x-n.x||0,c=t.z-n.z||0,h=Math.cos(s.y),u=Math.sin(s.y);n.copy(t),e.update(a,o,l*h-c*u,l*u+c*h)}}function Ds(r){let e=!1;return(t,n)=>{if(n===void 0)return;if(!e){r.rotation.y=n,e=!0;return}let i=Math.atan2(Math.sin(n-r.rotation.y),Math.cos(n-r.rotation.y));r.rotation.y+=i*(1-Math.exp(-t*5))}}var vm=r=>new Be({color:"#8a7466",map:r,roughness:.9,emissive:"#ff8a34",emissiveMap:r,emissiveIntensity:0}),bo=.61;function U0(r){let e={heat:{value:0},from:{value:new A(0,0,-1)}};return r.onBeforeCompile=t=>{Object.assign(t.uniforms,{uHeat:e.heat,uFrom:e.from}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform vec3 uFrom; varying float vHot;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vHot = dot(objectNormal, uFrom);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat; varying float vHot;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * vec3(1.9, 0.52, 0.1) * uHeat * pow(clamp(vHot * 0.75 + 0.25, 0.0, 1.0), 1.5);`)},e}var Ft=(r,e=44)=>new At(r.map(([t,n])=>new pe(t,n)),e),dh=r=>{let e=r.index?r.toNonIndexed():r;return e.computeVertexNormals(),e},To=(r,e=40)=>new Zt(r,e).rotateX(-Math.PI/2),B0=(r=28)=>new Ie(1,r,12,0,Math.PI*2,0,Math.PI/2),Tt=.066,wo=new A(0,Tt,0),qi=(r,e=.212)=>r.add(Ft([[.001,0],[.11,0],[.16,.007],[e,.026],[e+.004,.03],[e-.004,.033],[.155,.017],[.11,.016],[.001,.016]],52),r.mat,0,.05),Ro=(r,e,t,n,i,s=-.3)=>{r.add(new xe(.052,.052,.018,30).rotateX(Math.PI/2),r.c("#f7cf1c",{clearcoat:1}),e,t,n,s,i,0),r.add(new xe(.045,.045,.02,30).rotateX(Math.PI/2),r.c("#fff7cf"),e,t,n,s,i,0);for(let a=0;a<8;a++)r.add(new Zt(.037,6,a*Math.PI/4+.1,Math.PI/4-.2).translate(0,0,.0106),r.c("#ffd92e",{clearcoat:1,emissive:"#c79a00",emissiveIntensity:.35}),e,t,n,s,i,0)},Ao=(r,e,t,n,i=7,s=.035)=>{for(let a=0;a<i;a++){let o=a*2.4,l=s*Math.sqrt(a/i);r.add(new Si(.016),r.c(a%2?"#3c8a26":"#5bab36",{clearcoat:.1,roughness:.7}),e+Math.cos(o)*l,t+a%3*.008,n+Math.sin(o)*l,o,o*1.7,.4).scale.set(1.2,.45,.8)}},N0=(r,e,t,n,i=.008)=>{for(let s=0;s<e;s++){let[a,o,l]=n(s);r.add(new Cr(i),r.c(t[s%t.length],{roughness:.8,clearcoat:0}),a,o,l,s*1.3,s*2.1,s)}},ym=(r,e,t,n,i,s=.15)=>{let a=r.c("#dfe5ea",{metalness:1,roughness:.18}),o=Math.cos(i),l=-Math.sin(i);r.add(new lt(.0065,s,4,8).rotateZ(Math.PI/2),a,e,t,n,0,i,0),r.add(new Ie(.023,16,10).scale(1.5,.4,.9),a,e-o*(s/2+.02),t,n-l*(s/2+.02),0,i,0)};function O0(r,e=.55,t=.205){let n=r.c("#ffffff",{map:pm(),roughness:.6,clearcoat:.25}),i=r.c("#f8ead0",{roughness:.9,clearcoat:0}),s=h=>{let u=B0(40),d=u.attributes.position;for(let p=0;p<d.count;p++){let f=d.getX(p),y=d.getZ(p);d.setXYZ(p,Math.sign(f)*Math.abs(f)**.72*t,d.getY(p)*(h?.085:-.06),Math.sign(y)*Math.abs(y)**.85*.098)}if(!h){let p=u.index.array;for(let f=0;f<p.length;f+=3)[p[f],p[f+1]]=[p[f+1],p[f]]}return u.computeVertexNormals(),u},a=()=>{let h=new Zt(1,40).rotateX(-Math.PI/2),u=h.attributes.position;for(let d=0;d<u.count;d++){let p=u.getX(d),f=u.getZ(d);u.setXYZ(d,Math.sign(p)*Math.abs(p)**.72*t*.985,0,Math.sign(f)*Math.abs(f)**.85*.094)}return h},o=.13;r.add(s(!1),n,0,o,.015),r.add(a(),i,0,o+.001,.015);let l=new Ye,c=(h,u,d,p,f,y=0,m=0,_=0)=>{let g=new Pe(h,u);g.position.set(d,p,f),g.rotation.set(y,m,_),l.add(g)};c(s(!0),n,0,0,.09),c(a().rotateX(Math.PI),i,0,-.001,.09);for(let h of[-.1,-.02,.06])c(new lt(.008,.075,4,8),i,h,.077,.1,Math.PI/2-.1,0,.5);return l.position.set(0,o+.035,-.085),l.rotation.x=-e,r.body.add(l),o}var H0=(r,e,t,n,i=0,s=0)=>{r.add(new xe(.042,.042,.012,24),r.c("#d8301f",{clearcoat:1}),e,t,n,i,0,s),r.add(new xe(.032,.032,.0135,20),r.c("#f0705a",{clearcoat:1}),e,t,n,i,0,s)},z0=(r,e,t=.19,n=.02)=>{let i=new xe(1,1,.008,60,1),s=i.attributes.position;for(let a=0;a<s.count;a++){let o=s.getX(a),l=s.getZ(a),c=Math.atan2(l,o),h=Math.hypot(o,l);s.setXYZ(a,o*t,s.getY(a)+Math.sin(c*13)*.016*h,l*.108*(1+Math.sin(c*9)*.05))}i.computeVertexNormals(),r.add(i,r.c("#6cb33c",{roughness:.5,clearcoat:.5,side:$e}),0,e,n)},mh={doner(r){let{add:e,c:t,mat:n}=r,i=t("#c3cad0",{metalness:.55,roughness:.55,clearcoat:0});e(new xe(.2,.185,.032,44),n,0,.066),e(new xe(.135,.135,.006,36),i,0,.084,.05);let s=[-1,1].map(g=>{let x=new Ye;return x.position.set(g*.083,0,-.127),x.rotation.y=-g*bo,r.body.add(x),x}),a=(g,x,v,M,E)=>s.forEach((T,R)=>{let L=new Pe(g,x);L.position.set(R?v:-v,M,E),T.add(L)});a(new ge(.2,.4,.034),n,0,.276,-.026),a(new ge(.016,.41,.05),i,.094,.28,-.014);for(let g of[.084,.201,.318,.436,.478])a(new ge(.19,.012,.04),i,0,g,-.01);a(new ge(.204,.016,.075),i,0,.488,-.008);for(let g=0;g<3;g++)a(new xe(.011,.011,.012,14).rotateZ(Math.PI/2),t("#20201f"),.106,.14+g*.117,-.016);for(let g=0;g<4;g++)a(new ge(.11,.011,.004),t("#1c1a19"),0,.2+g*.04,-.044);e(new ge(.026,.014,.24),i,0,.556,-.055),e(new ge(.026,.13,.02),i,0,.498,-.175),e(new xe(.03,.03,.036,20),n,0,.575,.05),r.pack();let o=[0,1,2].map(g=>{let x=new Ye;for(let E of[-1,1]){let T=new Pe(new Rt(.172,.106),null);T.position.set(E*.083,.1425+g*.117,-.127).add(new A(-E*Math.sin(bo),0,Math.cos(bo)).multiplyScalar(-.006)),T.rotation.y=-E*bo,x.add(T)}let v=vm(cm());x.children.forEach(E=>{E.material=v}),On(x);let M=x.children[0];return M.userData.own=!0,M.castShadow=!1,r.body.add(x),M}),l=new Ye,c=r.m("#ffffff",{map:I0(),bumpMap:I0(),bumpScale:1.6,roughness:.5,clearcoat:.45}),h=U0(c),u=Ft([[.001,0],[.074,0],[.087,.015],[.094,.05],[.108,.11],[.127,.19],[.139,.25],[.141,.28],[.126,.3],[.001,.305]],60),d=u.attributes.position;for(let g=0;g<d.count;g++){let x=d.getX(g),v=d.getZ(g),M=d.getY(g),E=Math.atan2(v,x),T=1+Math.sin(E*2+.6)*.035+Math.sin(E*5+M*22)*.018-Math.exp(-(((E-1.4)/.5)**2))*.06;d.setXYZ(g,x*T,M,v*T)}u.computeVertexNormals();let p=(g,x,v,M=0,E=0)=>{let T=new Pe(g,x);return T.position.set(M,v,E),T.castShadow=!0,l.add(T),T};p(u,c,.095),p(new xe(.082,.09,.022,28),r.m("#f2e8cc"),.408),p(new Ie(.056,24,18),r.m("#d8372c",{clearcoat:1}),.447).scale.y=.8,p(new qe(.03,.011,8,20).rotateX(Math.PI/2).scale(1,1.4,1),r.m("#4f9a35"),.425,.045,.03),p(new xe(.009,.009,.49,10),i,.32),l.position.z=.05,r.body.add(l);let f=new Hr([5,9],[7,14],1.6),y=new Hr([6,11],[5,11],1.4),m=Ds(r.body),_=Math.random()*9;r.live({glow:f,turn:y,spit:l,plates:o,update(g,x,v){_+=g;let M=f.update(g);o.forEach((T,R)=>{let L=Math.max(0,Math.min(1,M*1.5-R*.22));T.material.emissiveIntensity=L*(3.8+Math.sin(_*7.3+R*2.1)*.2+Math.sin(_*17.1+R)*.1)*(1+x*.25)}),l.rotation.y=(l.rotation.y+y.update(g)*g*1.25)%(Math.PI*2);let E=l.rotation.y;h.from.value.set(Math.sin(E),0,-Math.cos(E)),h.heat.value=M*(1+Math.sin(_*7.3)*.08)*(.75+x*.5),m(g,v)}})},dolma({add:r,c:e,mat:t}){r(new xe(.2,.14,.03,40),t,0,.065);let n=Ft([[.001,0],[.06,0],[.105,.02],[.132,.07],[.142,.13],[.138,.18],[.122,.215],[.108,.222],[.1,.205]],64),i=n.attributes.position;for(let s=0;s<i.count;s++){let a=i.getX(s),o=i.getZ(s),l=1+Math.cos(Math.atan2(o,a)*4)*.055;i.setXYZ(s,a*l,i.getY(s),o*l)}n.computeVertexNormals(),r(n,e("#56a22f",{side:$e,clearcoat:1,clearcoatRoughness:.12,roughness:.3}),0,.08),r(new Ie(.112,28,12,0,Math.PI*2,0,Math.PI/2),e("#f3e8ca",{roughness:.8,clearcoat:.1}),0,.278).scale.y=.36;for(let s=0;s<22;s++){let a=s*2.4,o=.03+s%8*.0095;r(new lt(.0065,.016,3,6),s%7?e("#fffaea",{roughness:.7}):e("#43202c"),Math.cos(a)*o,.278+.04*Math.sqrt(Math.max(0,1-(o/.112)**2)),Math.sin(a)*o,1.4,a*1.7,.3)}r(new Ie(.088,28,12,0,Math.PI*2,0,Math.PI/2),e("#dc3a2b",{clearcoat:1}),.03,.325,0,0,0,-.22).scale.y=.72,r(new xe(.009,.014,.055,10),e("#3f7d24"),.045,.405,0,0,0,-.4)},sarma(r){let{add:e,c:t,mat:n}=r;e(new xe(.215,.15,.03,44),n,0,.065);let i=t("#ffffff",{map:L0(),bumpMap:L0(),bumpScale:1.2,roughness:.45,clearcoat:.5}),s=t("#59682a"),a=t("#efe7c9"),o=t("#8f9a4c",{clearcoat:.2});for(let[l,c,h,u]of[[0,.125,-.082,.06],[.01,.125,0,-.05],[0,.125,.082,.04],[0,.197,-.04,-.06],[.01,.197,.042,.07],[0,.268,0,0]]){e(new lt(.041,.2,10,24).rotateZ(Math.PI/2),i,l,c,h,0,u,0);for(let d of[-.055,.045])e(new qe(.0415,.0035,6,30),o,l+Math.cos(u)*d,c,h-Math.sin(u)*d,0,Math.PI/2+u+.75,0).scale.x=1.36;for(let d of[-1,1])e(new Ie(.022,12,8),s,l+Math.cos(u)*d*.128,c,h-Math.sin(u)*d*.128).scale.x=.5,e(new Ie(.012,10,8),a,l+Math.cos(u)*d*.134,c,h-Math.sin(u)*d*.134).scale.x=.5}for(let[l,c,h]of[[.04,.163,.4],[-.07,-.165,2.6]])Ro(r,l,.125,c,h,-.25)},latte(r){let{add:e,c:t,mat:n}=r,i=t("#fdfbf6",{clearcoat:1,clearcoatRoughness:.06,roughness:.2,side:$e});qi(r,.214),e(Ft([[.001,0],[.066,0],[.07,.012],[.098,.04],[.13,.09],[.148,.148],[.152,.172],[.147,.176],[.142,.168],[.126,.1]],56),i,0,Tt);for(let l of[.112,.122])e(new qe(.1415+(l-.112)*.3,.0045,8,56).rotateX(Math.PI/2),n,0,Tt+l,0);e(new qe(.046,.013,12,30),i,.168,Tt+.1,0).scale.set(1,1.05,1),e(To(.1435,56),t("#ffffff",{map:hm(),roughness:.42,clearcoat:.35}),0,Tt+.157,0),ym(r,-.02,.094,.182,.12,.13),r.pack();let s=new _n(r.g,0,Tt+.18,0,{wide:.07,count:9}),a=So(r.g,s),o=Ds(r.body);r.live({update(l,c,h){o(l,h),a(l,c)}})},kahve(r){let{add:e,c:t}=r,n=t("#fdfbf6",{clearcoat:1,roughness:.2,side:$e}),i=t("#e0b23c",{metalness:.9,roughness:.25}),s=t("#e07b45",{metalness:.55,roughness:.3,envMapIntensity:1.6,side:$e}),a=t("#d9d4cc",{metalness:.7,roughness:.35,side:$e});qi(r,.214);let o=.07,l=.045;e(Ft([[.001,0],[.05,0],[.052,.01],[.074,.03],[.088,.07],[.094,.115],[.101,.142]],48),t("#ffffff",{map:dm(),clearcoat:1,roughness:.2}),o,Tt,l),e(Ft([[.098,.142],[.09,.115],[.084,.07]],48),n,o,Tt,l),e(new qe(.0995,.0036,8,48).rotateX(Math.PI/2),i,o,Tt+.142,l),e(new qe(.032,.009,10,24),n,o+.1,Tt+.085,l+.045,0,-.45,0),e(To(.0925,40),t("#ffffff",{map:um(),roughness:.5,clearcoat:.25}),o,Tt+.126,l);let c=-.098,h=-.072;e(Ft([[.001,0],[.082,0],[.086,.02],[.076,.07],[.056,.112],[.056,.128],[.074,.162]],40),s,c,Tt,h),e(Ft([[.07,.16],[.052,.126],[.052,.11]],40),a,c,Tt,h),e(To(.056),t("#5a3014",{roughness:.6}),c,Tt+.132,h),e(new dt(.02,.05,12),s,c+.064,Tt+.156,h+.032,0,-.46,-1.15),e(new xe(.009,.014,.21,10),t("#5f3518",{roughness:.5}),c-.085,Tt+.205,h-.055,-.45,0,.75);for(let[p,f,y,m]of[[-.085,.11,.3,"#e58aa0"],[-.03,.155,.9,"#f3d9a0"],[-.125,.06,1.2,"#f0b3bf"]])e(new ge(.046,.036,.046),t(m,{roughness:.75,clearcoat:.1}),p,Tt+.022,f,0,y,0);r.pack();let u=So(r.body,new _n(r.body,o,Tt+.15,l,{wide:.045,count:9,size:.075})),d=Ds(r.body);r.live({update(p,f,y){d(p,y),u(p,f)}})},kofte(r){let{add:e,c:t}=r;qi(r);let n=O0(r,.5),i=t("#6f3516",{roughness:.62,clearcoat:.5,clearcoatRoughness:.4}),s=t("#33150a",{roughness:.7,clearcoat:.2});z0(r,n+.012);for(let[a,o]of[[-.13,.085],[0,.09],[.13,.085]])H0(r,a,n+.026,o-.008,.12);for(let[a,o]of[-.142,-.048,.048,.142].entries()){let l=new Ie(.05,24,16).scale(.92,.56,1.45);e(l,i,o,n+.054,.052,.05,a*.08-.1,0);for(let c of[-.032,.004,.038])e(new lt(.0045,.05,3,6).rotateZ(Math.PI/2),s,o,n+.0815-Math.abs(c)*.11,.052+c*1.1,.1,.5,0)}for(let a=0;a<7;a++)e(new qe(.022,.0042,6,18,Math.PI*1.3),t(a%2?"#f6eef4":"#c98bb0",{clearcoat:.8}),-.15+a*.05,n+.05,.115,1.1,a,.2);for(let a of[-.1,.02,.12])Ao(r,a,n+.04,.115,5,.026)},balik(r){let{add:e,c:t}=r;qi(r);let n=O0(r,.62,.19),i=t("#ffffff",{map:gm(),roughness:.32,clearcoat:.7,metalness:.12}),s=t("#35617c",{roughness:.45,side:$e});z0(r,n+.014,.185);for(let l of[-.11,.03])H0(r,l,n+.028,.095,.12);let a=Ft([[.001,-.205],[.016,-.2],[.036,-.17],[.054,-.1],[.06,-.02],[.054,.07],[.034,.15],[.017,.2],[.015,.215],[.001,.217]],32);{let l=a.attributes.uv,c=a.attributes.position;for(let h=0;h<c.count;h++)l.setXY(h,(c.getY(h)+.2)/.42,.5-c.getZ(h)/.125)}a.rotateZ(-Math.PI/2),a.rotateX(-Math.PI/2),a.scale(1,.62,1.05),e(a,i,0,n+.062,.055,.12,.05,.05);let o=new Wt;o.moveTo(0,0),o.lineTo(.06,.05),o.quadraticCurveTo(.04,0,.06,-.05),o.lineTo(0,0),e(new nn(o,{depth:.008,bevelEnabled:!1}).rotateX(-Math.PI/2),s,.2,n+.068,.046,.25,.05,.1),e(new Ie(.0085,12,8),t("#f6f2e0"),-.168,n+.075,.078),e(new Ie(.005,8,6),t("#120d0a"),-.17,n+.079,.083);for(let l=0;l<6;l++)e(new qe(.024,.0045,6,20),t(l%2?"#fbf7fa":"#ddb0cc",{clearcoat:.8}),-.12+l*.05,n+.036,.122,1.25,l*1.3,.2);Ro(r,.12,.1,.165,.5,-.5),Ao(r,-.06,n+.04,.125,5,.03)},kadayif(r){let{add:e,c:t}=r,n=t("#a8480c",{roughness:.16,clearcoat:1,clearcoatRoughness:.04,emissive:"#7a2600",emissiveIntensity:.22}),i=t("#fffdf4",{roughness:.55,clearcoat:.35});qi(r),e(new xe(.16,.165,.006,44),t("#c8690f",{roughness:.05,clearcoat:1,transparent:!0,opacity:.85}),0,.071),e(Ft([[.001,0],[.132,0],[.146,.014],[.146,.05],[.134,.068],[.1,.073],[.001,.07]],48),n,0,.074);for(let s=0;s<26;s++){let a=s*2.4,o=.142*Math.sqrt(s*7%26/26);e(new Ie(.01,10,6).scale(1.2,.35,1),t("#6e2905",{roughness:.3,clearcoat:1}),Math.cos(a)*o*.86,.1455,Math.sin(a)*o*.86)}for(let[s,a,o,l,c]of[[-.005,.185,-.042,.3,.13],[.015,.185,.045,.22,.12],[0,.245,0,.34,.1]]){e(new xe(.042,.042,c,28).rotateZ(Math.PI/2),i,s,a,o,0,l,0).scale.set(1,.92,1.05);for(let h of[-1,1])for(let u of[.036,.022,.009])e(new qe(u,.0065,8,24).rotateY(Math.PI/2),i,s+Math.cos(l)*h*c/2,a,o-Math.sin(l)*h*c/2,0,l,0);e(new lt(.007,c*.86,4,8).rotateZ(Math.PI/2),t("#f1e6cc",{roughness:.6}),s,a+.03,o+.03,0,l,0)}N0(r,46,["#7fa52e","#5f8420","#9cc042"],s=>{let a=s*2.4,o=.125*Math.sqrt(s/46),l=o<.045?.289:o<.085?.23:.151;return[Math.cos(a)*o,l,Math.sin(a)*o]},.0095),r.body.children.slice(1).forEach(s=>{s.position.sub(wo).multiplyScalar(1.18).add(wo),s.scale.multiplyScalar(1.18)})},baklava(r){let{add:e,c:t}=r,n=t("#ffffff",{map:fm(),roughness:.4,clearcoat:.8,clearcoatRoughness:.15}),i=t("#dd9a35",{roughness:.28,clearcoat:1,clearcoatRoughness:.08}),s=t("#f3c873",{roughness:.4,clearcoat:.8});qi(r),e(new xe(.15,.155,.005,40),t("#d08a1c",{roughness:.05,clearcoat:1,transparent:!0,opacity:.8}),0,.07);let a=(o,l,c,h)=>{let u=new Ye,d=(p,f,y=0,m=0,_=0,g=0,x=1,v=1)=>{let M=new Pe(p,f);M.position.set(y,m,_),M.rotation.y=g,M.scale.set(x,1,v),u.add(M)};d(dh(new xe(.092,.095,.078,4,1,!0)),n,0,.039,0,0,1.14,.8),d(dh(new xe(.086,.092,.009,4,1)),i,0,.081,0,0,1.14,.8),d(dh(new xe(.07,.078,.005,4,1)),s,.003,.087,0,.05,1.14,.8);for(let p=0;p<13;p++){let f=p*2.4,y=.036*Math.sqrt(p/13),m=new Pe(new Cr(.0115),t(["#8fb534","#6a8f22","#a9cc4c"][p%3],{roughness:.8,clearcoat:0}));m.position.set(Math.cos(f)*y*1.2,.093+(p<4?.007:0),Math.sin(f)*y),m.rotation.set(p,p*2,p*3),u.add(m)}u.position.set(o,l,c),u.rotation.y=h,r.body.add(u)};a(-.088,.073,.058,.5),a(.088,.073,.058,-.5),a(0,.073,-.092,.03),a(.004,.166,.012,.9),r.body.children.slice(1).forEach(o=>{o.position.sub(wo).multiplyScalar(1.14).add(wo),o.scale.multiplyScalar(1.14)})},durum(r){let{add:e,c:t,mat:n}=r,i=t("#ffffff",{map:uh(),roughness:.75,clearcoat:.1,side:$e});qi(r);let s=new Ye,a=(h,u,d=0,p=0,f=0,y=0,m=0,_=0)=>{let g=new Pe(h,u);return g.position.set(d,p,f),g.rotation.set(y,m,_),s.add(g),g};a(Ft([[.001,0],[.04,.002],[.06,.02],[.074,.1],[.08,.25],[.083,.392],[.078,.4],[.072,.392],[.07,.35]],40),i);let o=Ft([[.012,-.012],[.05,.006],[.07,.03],[.081,.1],[.0865,.19],[.0895,.235]],48),l=o.attributes.position;for(let h=0;h<l.count;h++)if(l.getY(h)>.2){let u=Math.atan2(l.getZ(h),l.getX(h));l.setY(h,l.getY(h)+Math.abs(Math.sin(u*5))*.03+Math.sin(u)*.022)}o.computeVertexNormals(),a(o,t("#ffffff",{map:mm(),roughness:.75,clearcoat:.15,side:$e})),a(new qe(.0885,.007,8,44).rotateX(Math.PI/2),n,0,.17,0),a(new lt(.0055,.15,4,8),t("#d9b676",{roughness:.8}),.03,.31,.0755,-.02,0,.12);let c=[["#7a3c18",.024],["#99501f",.022],["#5f2c10",.022],["#d8321f",.019],["#7a3c18",.023],["#f4ecef",.013],["#b8652c",.022],["#4f9a30",.018],["#d8321f",.016],["#6cb33c",.016],["#8a4418",.022],["#f4ecef",.012]];c.forEach(([h,u],d)=>{let p=d*2.4,f=.052*Math.sqrt(d/c.length);a(new Ei(u,1).scale(1.2,1.3,.9),t(h,{roughness:.5,clearcoat:.5}),Math.cos(p)*f,.385+d%3*.006,Math.sin(p)*f,d,d,0)}),a(To(.07),t("#5a2810"),0,.366,0),s.position.set(.062,.078,-.02),s.rotation.set(.1,0,.36),r.body.add(s),e(new lt(.017,.11,6,12).rotateZ(Math.PI/2).scale(1,.8,1),t("#4f9a2c",{clearcoat:.9,roughness:.35}),.075,.094,.13,0,.45,0),e(new lt(.015,.09,6,12).rotateZ(Math.PI/2).scale(1,.8,1),t("#4f9a2c",{clearcoat:.9,roughness:.35}),.1,.092,.085,0,.7,0);for(let[h,u]of[[-.12,.1],[-.135,.02]])e(B0(24),t("#d8301f",{clearcoat:1}),h,.072,u).scale.set(.046,.04,.046);for(let[h,u]of[[-.12,.1],[-.135,.02]])e(new lt(.004,.04,3,6).rotateZ(Math.PI/2),t("#2a0f08"),h,.111,u,0,.7,0);for(let h=0;h<5;h++)e(new qe(.026,.0045,6,20,Math.PI*1.4).rotateX(Math.PI/2),t(h%2?"#fbf7fa":"#c98bb0",{clearcoat:.8}),-.05+h*.02,.078+h*.004,.15-h*.006,.1,h*1.4,0);Ao(r,-.06,.085,-.14,7,.045)},lahmacun(r){let{add:e,c:t,mat:n}=r,i=t("#ffffff",{map:D0(),bumpMap:D0(),bumpScale:1.4,roughness:.6,clearcoat:.3}),s=t("#ffffff",{map:uh(),roughness:.75,clearcoat:.1});e(new xe(.22,.19,.022,48),n,0,.061);let a=(l,c)=>{let h=l.attributes.position;for(let u=0;u<h.count;u++){let d=h.getX(u),p=h.getZ(u),f=Math.hypot(d,p)/c,y=Math.atan2(p,d);h.setXYZ(u,d*(1+Math.sin(y*3+1)*.015*f),h.getY(u)+f*f*(.012+Math.sin(y*4)*.01+Math.sin(y*7+2)*.005),p*(1+Math.sin(y*2)*.02*f))}return l.computeVertexNormals(),l};e(a((l=>{let c=new bi(5e-4,l,60,6).rotateX(-Math.PI/2),h=c.attributes.position,u=c.attributes.uv;for(let d=0;d<h.count;d++)u.setXY(d,.5+h.getX(d)/l/2,.5-h.getZ(d)/l/2);return c})(.212),.212),i,0,.087),e(a(Ft([[.16,-.007],[.205,-.004],[.213,5e-4],[.2125,.001]],60),.212),s,0,.087);for(let[l,c,h,u]of[[-.02,-.105,.12,.27]]){e(new xe(.043,.043,u,32,1,!0).rotateZ(Math.PI/2),s,l,.137,c,0,h,0),e(new xe(.046,.046,u*.9,32,1,!0,.4,2.6).rotateZ(Math.PI/2),t("#ffffff",{map:uh(),roughness:.75,clearcoat:.1,side:$e}),l,.138,c,0,h,0);for(let d of[-1,1])for(let[p,f,y]of[[.034,"#a53a18",.01],[.022,"#e6bd7c",.007],[.011,"#b5431f",.009]])e(new qe(p,y,8,24).rotateY(Math.PI/2),t(f,{roughness:.6}),l+Math.cos(h)*d*(u/2-.004),.137,c-Math.sin(h)*d*(u/2-.004),0,h,0)}Ro(r,.12,.128,.05,-.5,-.4),Ro(r,.08,.118,.105,.2,-.75),Ao(r,-.075,.102,.075,11,.05);for(let l=0;l<4;l++)e(new qe(.026,.004,6,20,Math.PI*1.5).rotateX(Math.PI/2),t(l%2?"#fbf7fa":"#c98bb0",{clearcoat:.8}),-.1+l*.03,.106,.02-l%2*.02,.1,l,.1)},kokorec(r){let{add:e,c:t,mat:n}=r,i=t("#34302d",{metalness:.6,roughness:.5}),s=t("#c3cad0",{metalness:.55,roughness:.55,clearcoat:0});e(new xe(.205,.19,.025,44),n,0,.062);for(let g of[-.088,.088])e(new ge(.35,.075,.012),n,0,.11,g,g>0?.22:-.22,0,0);for(let g of[-.17,.17])e(new ge(.012,.075,.17),i,g,.108,0),e(new ge(.014,.2,.026),s,g,.2,0);e(new ge(.335,.02,.16),i,0,.085,0),r.pack();let a=[0,1].map(g=>{let x=new Ye;for(let M=g;M<34;M+=2){let E=new Pe(new Ei(.02+M%3*.004,0));E.position.set(-.145+M*37%34/33*.29,.106+M%4*.004,-.058+M*13%34/33*.116),E.rotation.set(M,M*2,M*3),x.add(E)}let v=new Be({color:g?"#2a2522":"#5a3a2c",roughness:.95,flatShading:!0,emissive:g?"#ff3a06":"#ff6a18",emissiveIntensity:0});return x.traverse(M=>{M.isMesh&&(M.material=v)}),On(x),x.traverse(M=>{M.isMesh&&(M.userData.own=!0,M.castShadow=!1)}),r.body.add(x),v}),o=new Ye,l=r.m("#8f4a1c",{roughness:.34,clearcoat:.85,clearcoatRoughness:.25}),c=r.m("#b56d30",{roughness:.34,clearcoat:.85,clearcoatRoughness:.25}),h=.265,u=(g,x,v,M,E,T)=>{let R=[];for(let L=0;L<=g*12;L++){let W=L/(g*12),F=W*g*Math.PI*2*M+T,k=Math.sin(Math.PI*Math.min(1,Math.max(0,W*1.04-.02)))**.28,j=x*(.62+.38*k);R.push(new A((W-.5)*h,Math.cos(F)*j,Math.sin(F)*j))}o.add(new Pe(new xn(new yn(R),g*16,v,7),E))};o.add(new Pe(new lt(.056,h-.11,8,24).rotateZ(Math.PI/2),l)),u(8,.06,.0165,1,l,0),u(3,.066,.0135,-1,c,1),On(o);{let g=new Pe(new xe(.008,.008,.4,10).rotateZ(Math.PI/2),s),x=new Pe(new ge(.008,.06,.012),s),v=new Pe(new lt(.011,.025,4,8).rotateZ(Math.PI/2),n);x.position.set(.2,.026,0),v.position.set(.215,.054,0),o.add(g,x,v),On(o)}o.position.y=.272,r.body.add(o),o.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!1)});let d=new Hr([6,12],[4,9],1.2),p=new Hr([5,9],[3,7],2),f=[l,c].map(U0),y=Ds(r.body),m=So(r.g,new _n(r.g,0,.33,0,{wide:.1,count:7,rise:.34,size:.08})),_=Math.random()*9;r.live({glow:p,turn:d,spit:o,beds:a,update(g,x,v){_+=g;let M=p.update(g);a.forEach((T,R)=>{T.emissiveIntensity=(.45+M*1.5)*(1+Math.sin(_*(2.1+R*1.3))*.14+Math.sin(_*(7.7-R*2))*.06)}),o.rotation.x=(o.rotation.x+d.update(g)*g*1.4)%(Math.PI*2);let E=o.rotation.x;for(let T of f)T.from.value.set(0,-Math.cos(E),Math.sin(E)),T.heat.value=(.25+M*.6)*(.8+x*.4);m(g,x),y(g,v)}})},manti(r){let{add:e,c:t,mat:n}=r,i=t("#ffe6b4",{roughness:.6,clearcoat:.35}),s=t("#fffef8",{roughness:.4,clearcoat:.5}),a=t("#d8400f",{roughness:.12,clearcoat:1,clearcoatRoughness:.05});e(Ft([[.001,0],[.11,0],[.12,.012],[.17,.04],[.203,.1],[.212,.13],[.214,.137],[.206,.139],[.2,.128]],56),n,0,.05),e(Ft([[.2,.13],[.185,.1],[.13,.075],[.001,.075]],56),t("#fdfbf4",{clearcoat:1,side:$e}),0,.05);let o=()=>{let h=new Ie(.036,20,12),u=h.attributes.position;for(let d=0;d<u.count;d++){let p=u.getX(d),f=u.getY(d),y=u.getZ(d),m=Math.atan2(y,p),_=Math.max(0,f/.036),g=1+Math.cos(m*4)*.2*(.35+_)-_*.32;u.setXYZ(d,p*g,f*(.8+_*.55),y*g)}return h.computeVertexNormals(),h};for(let h=0;h<30;h++){let u=h*2.4,d=.172*Math.sqrt((h+.4)/30),p=.148+(1-(d/.172)**2)*.034;e(o(),i,Math.cos(u)*d,p,Math.sin(u)*d,Math.sin(h)*.3,h*1.9,Math.cos(h)*.3)}let l=(h,u,d,p,f,y)=>{let m=new Ie(1,48,12,0,Math.PI*2,0,Math.PI/2),_=m.attributes.position;for(let g=0;g<_.count;g++){let x=_.getX(g),v=_.getZ(g),M=Math.atan2(v,x),E=h*(1+Math.sin(M*5+y)*d+Math.sin(M*3+y*2)*d);_.setXYZ(g,x*E,_.getY(g)*u,v*E)}m.computeVertexNormals(),e(m,p,0,f,0)};l(.132,.05,.09,s,.172,1),l(.07,.016,.13,a,.2125,3);for(let h=0;h<7;h++){let u=h*.9,d=.092+h%3*.016;e(new Ie(.014,12,8).scale(1.5,.5,.8),a,Math.cos(u)*d,.2115-(d-.08)*.62,Math.sin(u)*d,0,-u,-.35)}N0(r,30,["#3f7a2a","#5c9a3a","#2f5f20","#b3220c"],h=>{let u=h*2.4+.7,d=.125*Math.sqrt((h+1)/31);return[Math.cos(u)*d,.2245-(d/.132)**2*.035,Math.sin(u)*d]},.0085),r.pack();let c=So(r.g,new _n(r.g,0,.23,0,{wide:.1,count:7}));r.live({update(h,u){c(h,u)}})}},m1=Object.keys(mh);function F0(r,e,{mat:t,m:n}){if(!mh[r])return!1;let i=new Ye,s=new Map,a=!1,o={g:e,body:i,mat:t,m:n,c:(l,c={})=>{let h=l+Object.entries(c).map(([u,d])=>u+(d&&d.uuid?d.uuid:d)).join();return s.has(h)||s.set(h,n(l,c)),s.get(h)},add(l,c,h=0,u=0,d=0,p=0,f=0,y=0){let m=new Pe(l,c);return m.position.set(h,u,d),m.rotation.set(p,f,y),i.add(m),m},pack(){a=!0,On(i),i.traverse(l=>{l.isMesh&&(l.castShadow=!l.material.transparent,l.receiveShadow=!1)})},live(l){e.userData.live=l}};if(mh[r](o),a||o.pack(),e.add(i),!e.userData.live){let l=Ds(i);o.live({update(c,h,u){l(c,u)}})}return!0}var Hn=(r,e)=>{let t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]},zn=r=>{let e=new ut(r);return e.colorSpace=Ke,e.anisotropy=8,e},xm={carpets:{find:r=>r.kind==="shop"&&si(r.name,"tr")==="Hal\u0131c\u0131",w:1.14,d:.72,lx:0,gap:.14,h:.82,level:!0,lamp:1.2},restaurant:{find:r=>r.kind==="shop"&&si(r.name,"tr")==="Restoran",w:1.3,d:.5,lx:.02,gap:.13,h:.62,level:!1,lamp:.9},metro:{find:r=>r.vehicle==="metro",w:.86,d:.78,lx:.4,gap:.16,h:.62,level:!0,lamp:.8,keep:[-.4,.42,.45]}};function k0(r,e){let t=[];for(let[n,i]of Object.entries(xm)){let s=r.tiles.findIndex(i.find),a=e.tiles[s];if(!a)continue;let o=Math.cos(a.rot),l=Math.sin(a.rot),c=(f,y)=>[a.x+f*o+y*l,a.z-f*l+y*o],h=-(a.d/2+i.gap+i.d/2),[u,d]=c(i.lx,h),p=Math.ceil(i.w/i.d)+1;t.push({kind:n,tile:s,x:u,z:d,rot:a.rot,w:i.w,d:i.d,h:i.h,level:i.level,lamp:i.lamp,spots:Array.from({length:p},(f,y)=>[...c(i.lx+(y/(p-1)-.5)*(i.w-i.d),h),i.d/2]),front:c(i.lx,h+i.d/2-.06),keep:i.keep?[...c(i.keep[0],-(a.d/2+i.keep[1])),i.keep[2]]:null})}return t}var xh=(r,e,t,n=0)=>r.some(i=>{if(n>.1&&i.keep&&Math.hypot(e-i.keep[0],t-i.keep[1])<i.keep[2]+n*.5)return!0;let s=Math.cos(i.rot),a=Math.sin(i.rot),o=e-i.x,l=t-i.z;return Math.abs(o*s-l*a)<i.w/2+n&&Math.abs(o*a+l*s)<i.d/2+n});function _m(r,[e,t,n,i,s]){let a=Ln(r),o=132,l=200,[c,h]=Hn(o,l);h.fillStyle="#efe4cc",h.fillRect(0,0,o,l),h.strokeStyle="rgba(120,96,60,.7)";for(let p=2;p<o;p+=4)h.beginPath(),h.moveTo(p,0),h.lineTo(p,8),h.moveTo(p,l-8),h.lineTo(p,l),h.stroke();let u=(p,f)=>{h.fillStyle=f,h.fillRect(p,p+6,o-2*p,l-2*p-12)};u(0,i),u(3,n),u(5,t),u(21,n),u(23,i),u(27,e);let d=(p,f,y,m,_)=>{h.fillStyle=_,h.beginPath(),h.moveTo(p,f-m),h.lineTo(p+y,f),h.lineTo(p,f+m),h.lineTo(p-y,f),h.fill()};for(let p=13;p<o;p+=15.2)for(let f of[19,l-19])d(p,f,6,6,s),d(p,f,3,3,i);for(let p=34;p<l-26;p+=14.6)for(let f of[13,o-13])d(f,p,6,6,s),d(f,p,3,3,i);h.save(),h.beginPath(),h.rect(27,33,o-54,l-66),h.clip();for(let p=42;p<l-36;p+=12)for(let f=36;f<o-28;f+=12)d(f+(p/12%2?0:6),p,2.4,2.4,a()<.5?n:s);for(let[p,f]of[[27,33],[o-27,33],[27,l-33],[o-27,l-33]])d(p,f,24,30,i),d(p,f,18,23,t),d(p,f,9,12,n);for(let[p,f,y]of[[33,50,i],[29,45,n],[26,41,t],[17,28,s],[13,22,i],[7,12,n]])d(o/2,l/2,p,f,y);h.restore();for(let p=0;p<1400;p++)h.fillStyle=a()<.5?"rgba(255,240,210,.07)":"rgba(20,8,4,.09)",h.fillRect(a()*o,a()*l,2,1);return zn(c)}var G0=[["#8c1c22","#1d2f57","#d9a441","#3a0d12","#efe0c0"],["#1c3d6b","#8f2420","#d7b25a","#0f1d38","#ece1c8"],["#b5652b","#5a1f1a","#e7c878","#33150f","#f0e6cf"],["#1f5a52","#9a3324","#dcb85f","#102f2c","#efe4ca"],["#6d2147","#20405a","#d9ae55","#33102a","#f1e2cc"],["#d6c49a","#8a2b23","#b88a3a","#54241a","#2d4f6b"]],gh=["#ff4a2e","#ffb52e","#2fb6ff","#35d07a","#c45cff","#ff6fa8"];function vh(r,{w:e=256,h:t=64,back:n="#5a1412",ink:i="#f4d27a",font:s="900 44px Georgia, serif",frame:a=i}={}){let o=l=>{let[c,h]=Hn(e,t);return h.fillStyle=l?"#1a0a04":n,h.fillRect(0,0,e,t),a&&(h.strokeStyle=a,h.lineWidth=4,h.strokeRect(6,6,e-12,t-12)),h.fillStyle=i,h.font=s,h.textAlign="center",h.textBaseline="middle",h.fillText(r,e/2,t/2+2,e-28),zn(c)};return{map:o(!1),glow:o(!0)}}var yh=(r,e,t,n)=>{let i=new Path2D,s=e-n+t*.62;return i.moveTo(r-t/2,e),i.lineTo(r-t/2,s),i.quadraticCurveTo(r-t/2,e-n+t*.14,r,e-n),i.quadraticCurveTo(r+t/2,e-n+t*.14,r+t/2,s),i.lineTo(r+t/2,e),i.closePath(),i};function V0(r,{GROUND:e,group:t,piece:n,mat:i,lit:s}){let a={},o=(v,M={})=>M.map?i(v,M):a[v+JSON.stringify(M)]=a[v+JSON.stringify(M)]||i(v,M),l=(v,M,E,T)=>{if(T||v.map)return s(v,M,E,T);let R=`${v.uuid} ${M} ${E}`;return a[R]=a[R]||s(v.clone(),M,E)},c=(v,M,E,T,R,L,W,F)=>n(new ge(M,E,T),R,L,W+E/2,F,v),h=(v,M,E,T,R,L,W,F=8)=>n(new xe(M,M,E,F),T,R,L+E/2,W,v),u=o("#2a2622",{metalness:.5,roughness:.5}),d=o("#6b4426",{roughness:.8}),p=o("#d8a93a",{metalness:1,roughness:.25}),f=l(o("#fff3d8",{roughness:.4}),"#ffb454",6),y=(v,M=2.2,E=u)=>[E,E,E,E,l(o("#ffffff",{map:v.map,roughness:.6}),"#ffffff",M,v.glow),E],m=(v,M,E,T,R,L)=>{let W=Array.from({length:T+1},(F,k)=>{let j=k/T;return new A(M[0]+(E[0]-M[0])*j,M[1]+(E[1]-M[1])*j-R*4*j*(1-j),M[2]+(E[2]-M[2])*j)});n(new xn(new yn(W),T*2,.0028,4),u,0,0,0,v),W.slice(1,-1).forEach((F,k)=>L(F,k))},_=(v,M,E,T,R,L=.022)=>{let W=gh[R%gh.length];n(new Ie(L,12,9),l(o(W,{roughness:.25}),W,3.4),M,E,T,v).scale.y=1.15,n(new dt(L*.75,L*.8,10),p,M,E+L*1.35,T,v),n(new Ie(L*.26,8,6),p,M,E-L*1.3,T,v)},g=v=>{let M=t(v.x,e,v.z);return M.rotation.y=v.rot,M},x={carpets(v){let M=g(v),E=.52,T=.5,R=.5,L=-.1,W=L+T/2,F=G0.map((I,V)=>l(o("#ffffff",{map:_m(21+V,I),roughness:.95,side:$e}),"#ffc890",.55)),k=(I,V,ee,Y,ne,oe,ie=-Math.PI/2,ue=0,ae=0)=>{let ve=n(new ge(V,ee,.005),F[I%F.length],Y,ne,oe,M);return ve.rotation.set(ie,ue,ae,"YXZ"),ve},j="#dcb682",D=l(o(j,{roughness:.9}),"#ff9a4a",.22),G=l(o("#b9a98c",{roughness:.9}),"#ff9c48",.34),B=496,[K,Z]=Hn(516,B),[de,me]=Hn(516,B),te=Ln(4);Z.fillStyle=j,Z.fillRect(0,0,516,B);for(let I=0;I<B;I+=20)for(let V=0;V<516;V+=43)Z.fillStyle=`rgba(${te()<.5?"255,246,220":"96,60,24"},${.05+te()*.08})`,Z.fillRect(V+I/20%2*21,I,42,19);let ce=me.createLinearGradient(0,B,0,0);ce.addColorStop(0,"#8a5424"),ce.addColorStop(1,"#6a3f1a"),me.fillStyle=ce,me.fillRect(0,0,516,B),[[92,116,220],[258,112,262],[424,116,220]].forEach(([I,V,ee],Y)=>{Z.fillStyle="#f3e6c8",Z.fill(yh(I,B,V+24,ee+18)),Z.strokeStyle="#1f6f78",Z.lineWidth=5,Z.stroke(yh(I,B,V+12,ee+9));for(let[ne,oe]of[[Z,0],[me,1]]){let ie=yh(I,B,V,ee),ue=ne.createLinearGradient(0,B-ee,0,B);ue.addColorStop(0,oe?"#ffcf86":"#4a2c18"),ue.addColorStop(1,oe?"#c26a24":"#1d100a"),ne.save(),ne.clip(ie),ne.fillStyle=ue,ne.fillRect(0,0,516,B);for(let ae=0;ae<4;ae++){let ve=G0[(Y*2+ae)%6],Te=I-V/2+6+ae*(V/4),Ee=V/4-7;if(!(Y===1&&(ae===1||ae===2))){ne.globalAlpha=oe?.8:.95,ne.fillStyle=ve[1],ne.fillRect(Te,B-ee+62,Ee,120),ne.fillStyle=ve[0],ne.fillRect(Te+4,B-ee+68,Ee-8,108),ne.fillStyle=ve[2];for(let Le=0;Le<4;Le++)ne.beginPath(),ne.moveTo(Te+Ee/2,B-ee+74+Le*25),ne.lineTo(Te+Ee-6,B-ee+85+Le*25),ne.lineTo(Te+Ee/2,B-ee+96+Le*25),ne.lineTo(Te+6,B-ee+85+Le*25),ne.fill();ne.globalAlpha=1}}for(let ae=0;ae<3;ae++)ne.fillStyle=oe?gh[(Y+ae*2)%6]:"#c99a4a",ne.beginPath(),ne.arc(I-V*.26+ae*V*.26,B-ee+46,7,0,7),ne.fill();ne.restore()}});let le=l(o("#ffffff",{map:zn(K),roughness:.9}),"#ffffff",1.25,zn(de));c(M,v.w,.03,v.d,G,0,0,0),n(new ge(E,R,T),[D,D,D,D,le,D],0,.03+R/2,L,M);let se=.03+R;c(M,E-.01,.006,T-.01,o("#a98f6a",{roughness:.95}),0,se,L);for(let I of[-1,1])c(M,.02,.035,T,D,I*(E/2-.01),se,L),c(M,E-.04,.035,.02,D,0,se,L+I*(T/2-.01));k(0,.15,.24,-.155,se+.011,L-.03,-Math.PI/2,.06),k(3,.14,.23,.015,se+.012,L-.05,-Math.PI/2,-.05),k(5,.12,.2,.17,se+.011,L-.06,-Math.PI/2,.1),[[1,-.19],[4,.19]].forEach(([I,V])=>{k(I,.115,.18,V,se-.057,W+.006,0),k(I,.115,.05,V,se+.038,W-.018)});let he=n(new xe(.04,.035,.01,20),p,.08,se+.04,L+.13,M);he.castShadow=!0,h(M,.01,.03,d,.08,se+.006,L+.13),["#b3262c","#1f5a78","#d89a2c"].forEach((I,V)=>{let ee=V*2.1+.5;n(new Ie(.026,12,8),o(I,{roughness:.95}),.08+Math.cos(ee)*.072,se+.018,L+.13+Math.sin(ee)*.066,M).scale.y=.45});let N=se+.22,C=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([I,V])=>[I*(E/2-.01),N,L+V*(T/2-.01)]);for(let[I,,V]of C)h(M,.0055,N-se+.005,d,I,se,V),n(new Ie(.009,8,6),p,I,N+.01,V,M);let z=0;C.forEach((I,V)=>m(M,I,C[(V+1)%4],5,.045,ee=>_(M,ee.x,ee.y-.028,ee.z,z++,.017)));for(let[I,V]of[[0,2],[1,3]])m(M,C[I],C[V],7,.06,ee=>n(new Ie(.0075,8,6),f,ee.x,ee.y-.008,ee.z,M));let q=n(new ge(.2,.062,.012),y(vh("HALI",{w:208,h:64}),1.6),0,se-.075,W+.008,M);q.castShadow=!1;let H=[-1,1].map(I=>[I*(E/2-.012),.345,W+.04]);for(let[I,V]of H)c(M,.008,.008,.05,u,I,V-.004,W+.022);m(M,H[0],H[1],7,.022,I=>_(M,I.x,I.y-.026,I.z,z++,.016));for(let I of[-1,1]){for(let ee of[.36,.53])h(M,.006,.31,d,I*ee,.03,W+.05);let V=h(M,.0055,.19,d,I*.445,.235,W+.05);V.rotation.z=Math.PI/2,k(I>0?2:4,.14,.25,I*.445,.215,W+.057,.04),k(I>0?1:0,.14,.23,I*.445,.22,W+.041,-.05),k(I>0?0:3,.26,.36,I*(E/2+.005),.3,L,0,Math.PI/2)}let X=o("#e9dcc0",{roughness:1}),w=(I,V,ee,Y,ne,oe,ie,ue,ae=0)=>{let ve=n(new xe(V,V,ee,14),[F[I%6],X,X],Y,ne,oe,M);return ve.rotation.set(ie,ae,ue),ve};h(M,.05,.06,o("#8a6234",{roughness:1}),-.29,.03,W+.12,16),[[0,-.02,.01,.2],[1,.022,.014,.23],[4,0,-.024,.18],[2,.004,.026,.16]].forEach(([I,V,ee,Y])=>w(I,.0175,Y,-.29+V,.04+Y/2,W+.12+ee,ee*2.5,-V*3)),[[0,.028,0],[3,.028,.052],[5,.028,-.052],[2,.073,.026],[1,.073,-.026],[4,.118,0]].forEach(([I,V,ee])=>w(I,.0255,.19,.215,.03+V,W+.14+ee,0,Math.PI/2));for(let I=0;I<5;I++)k(I+1,.1,.075,-.16,.036+I*.0125,W+.13,-Math.PI/2,I%2*.12).scale.z=2;return k(0,.12,.19,0,.034,W+.105),M},restaurant(v){let M=g(v),E=.56,T=.36,R=.3,L=-v.w/2+E/2+.02,W=-.04,F=W+T/2,k=l(o("#f4ead6",{roughness:.85}),"#ffb66a",.2),j=o("#2d6c8e",{roughness:.6}),D=rn("#b7a88f",[4,1]),G=l(o("#8a6440",{roughness:.85}),"#ff9540",.16),B=l(o("#7c5836",{roughness:.85}),"#ff9540",.16),K=(ie,ue,ae)=>{let ve=ie*ue,[Te,Ee]=Hn(ve,150),[Le,Se]=Hn(ve,150),Fe=Ln(ae);Ee.fillStyle="#f4ead6",Ee.fillRect(0,0,ve,150),Ee.fillStyle="#2d6c8e",Ee.fillRect(0,118,ve,32),Ee.fillStyle="#235874";for(let we=0;we<ve;we+=12)Ee.fillRect(we,118,2,32);Se.fillStyle="#2a1c0e",Se.fillRect(0,0,ve,150);for(let we=0;we<ie;we++){let fe=we*ue+ue*.14,be=ue*.72;Ee.fillStyle="#2d6c8e",Ee.fillRect(fe-5,20,be+10,100);let Oe=Ee.createLinearGradient(0,24,0,116);Oe.addColorStop(0,"#7f9aa6"),Oe.addColorStop(1,"#2c3a40"),Ee.fillStyle=Oe,Ee.fillRect(fe,25,be,90);let We=Se.createLinearGradient(0,25,0,115);We.addColorStop(0,"#ffd792"),We.addColorStop(1,"#d9822f"),Se.fillStyle=We,Se.fillRect(fe,25,be,90);for(let Ct=0;Ct<2;Ct++){let on=fe+be*(.28+Ct*.42+Fe()*.06);for(let[vt,Nt]of[[Ee,"#1c2529"],[Se,"#4a2412"]])vt.fillStyle=Nt,vt.beginPath(),vt.arc(on,82,8,0,7),vt.fill(),vt.fillRect(on-11,90,22,25)}Ee.fillStyle="#f4ead6",Ee.fillRect(fe+be/2-2,25,4,90),Ee.fillRect(fe,52,be,3),Se.fillStyle="#2a1c0e",Se.fillRect(fe+be/2-2,25,4,90),Se.fillRect(fe,52,be,3)}return l(o("#ffffff",{map:zn(Te),roughness:.85}),"#ffffff",1.5,zn(Le))},Z=K(4,64,3),de=K(3,60,8);c(M,v.w,.36,v.d,D,0,-.34,0),n(new ge(E,R,T),[de,de,k,k,Z,Z],L,.02+R/2,W,M),c(M,E+.03,.02,T+.03,k,L,.02+R,W),n(Eo(E+.09,T+.09,.13),o("#a4512f",{roughness:.85,flatShading:!0}),L,.04+R,W,M),c(M,.05,.13,.05,D,L-.15,R+.06,W-.06),c(M,.062,.014,.062,o("#7f5140"),L-.15,R+.19,W-.06);let me=n(new ge(.34,.075,.014),y(vh("RESTORAN",{w:290,h:64,back:"#173f57",ink:"#fff1cf",font:"800 40px Georgia, serif"}),1.7),L,R+.045,F+.045,M);me.rotation.x=-.12;let[te,ce]=Hn(128,16);for(let ie=0;ie<10;ie++)ce.fillStyle=ie%2?"#f5efe0":"#2d6c8e",ce.fillRect(ie*12.8,0,13,16);let le=l(o("#ffffff",{map:zn(te),roughness:.9,side:$e}),"#ffb868",.3);n(new ge(E*.98,.005,.1),le,L,.27,F+.042,M).rotation.x=.5;for(let ie of[-.24,.24]){c(M,.05,.035,.035,o("#9c5638"),L+ie,.02,F+.05);for(let ue=0;ue<4;ue++)n(new Ie(.014,8,6),o(["#d8344a","#f0c22c","#4b7a34","#e26b9a"][ue],{roughness:.9}),L+ie-.02+ue*.013,.063,F+.05+ue%2*.012,M)}let se=L+E/2+.02,he=v.w/2+.06-se,N=se+he/2,C=v.d+.06,z=.03;for(let ie=0;ie<11;ie++)c(M,he,.014,C/11-.004,ie%3?G:B,N,z-.006,-C/2-.03+(ie+.5)*(C/11));for(let ie of[.03,.5,.97])for(let ue of[-C/2,-.05,C/2-.08])h(M,.016,.5,d,se+he*ie,z-.5,ue);let q=o("#f1e8d8",{roughness:.7}),H=-C/2-.02,X=C/2-.04,w=se+he-.01;for(let[ie,ue,ae,ve]of[[se,H,w,H],[w,H,w,X]]){let Te=Math.hypot(ae-ie,ve-ue),Ee=Math.round(Te/.06),Le=ue===ve;for(let Se=0;Se<=Ee;Se++)h(M,.005,.085,q,ie+(ae-ie)*(Se/Ee),z,ue+(ve-ue)*(Se/Ee),6);for(let Se of[.085,.045])c(M,Le?Te:.01,.008,Le?.01:Te,q,(ie+ae)/2,z+Se,(ue+ve)/2)}let I=l(o("#fffaf0",{roughness:.8}),"#ffcf90",.35),V=l(o("#fff0c0"),"#ffa53a",7),ee=o("#2f6f92",{roughness:.6});[[.2,-.13,"#c8322e"],[.2,.12,"#f3e8d2"],[.53,-.13,"#f3e8d2"],[.53,.12,"#c8322e"]].forEach(([ie,ue,ae],ve)=>{let Te=se+ie/.73*he;n(new xe(.05,.053,.062,18),I,Te,z+.037,ue,M);for(let Ee=0;Ee<4;Ee++){let Le=Ee*Math.PI/2+.4;n(new xe(.014,.014,.005,12),o("#ffffff",{roughness:.3}),Te+Math.cos(Le)*.031,z+.071,ue+Math.sin(Le)*.031,M)}h(M,.0045,.02,I,Te+.012,z+.068,ue+.01,6),n(new Ie(.0055,8,6),V,Te+.012,z+.093,ue+.01,M);for(let Ee of[.4,2.5,4.6]){let Le=new Ye;Le.position.set(Te+Math.cos(Ee)*.084,z,ue+Math.sin(Ee)*.084),Le.rotation.y=-Ee,M.add(Le),c(Le,.032,.006,.032,ee,0,.036,0),c(Le,.005,.044,.032,ee,.015,.04,0);for(let Se of[-.012,.012])for(let Fe of[-.012,.012])h(Le,.0025,.036,ee,Se,0,Fe,5)}ve%3===0&&(h(M,.004,.21,d,Te,z+.06,ue,6),n(new dt(.105,.05,8),l(o(ae,{roughness:.85,flatShading:!0}),"#ff9d52",.3),Te,z+.28,ue,M))});let Y=z+.33,ne=[[se+.01,Y,H+.01],[w-.005,Y,H+.01],[w-.005,Y,X],[se+.01,Y,X]];ne.forEach(([ie,,ue])=>h(M,.007,Y-z,d,ie,z,ue));let oe=ie=>n(new Ie(.0105,8,6),f,ie.x,ie.y-.012,ie.z,M);for(let[ie,ue]of[[0,1],[1,2],[2,3],[0,2],[1,3]])m(M,ne[ie],ne[ue],8,.05,oe);return m(M,[L-E/2,.02+R,F+.05],[L+E/2,.02+R,F+.05],9,.02,oe),M},metro(v){let M=g(v),E=o("#b9c2c8",{metalness:.7,roughness:.3}),T=l(o("#cfcac0",{roughness:.85}),"#ffc890",.16),R=rn("#9a9690",[3,1]),L=o("#15181b",{roughness:.9}),W=l(o("#ffffff"),"#e4f1ff",5),F=-.08,k=.4,j=-v.d/2+.06,D=.1;c(M,v.w,.02,v.d,T,0,0,0);let G=v.d/2-.06;c(M,k+.16,.05,.07,R,F,.01,G-.02),c(M,k+.16,D-.01,.14,R,F,.01,G-.12);let B=9,K=G-.19,Z=j+.14,de=(K-Z)/B;for(let ae=0;ae<B;ae++){let ve=D-.01-(ae+1)*((D-.016)/B);c(M,k,Math.max(.004,ve),de+.001,o(["#a5a29c","#8b8984","#716f6c","#5a5957","#454544","#353536","#292a2b","#202123","#191a1c"][ae],{roughness:.9}),F,.021,K-(ae+.5)*de),c(M,k,.003,.008,l(o("#e8c21c",{roughness:.6}),"#ffd23a",ae<5?.9:.4),F,.021+Math.max(.004,ve),K-ae*de-.006)}for(let ae of[-1,1])c(M,.05,.19,G-.19-j,R,F+ae*(k/2+.025),.02,(G-.19+j)/2),c(M,.006,.008,G-.26-j,W,F+ae*(k/2-.004),.185,(G-.22+j)/2),c(M,.062,.012,G-.19-j,E,F+ae*(k/2+.025),.21,(G-.19+j)/2);for(let ae of[-.075,.075]){let ve=K-Z,Te=n(new lt(.009,ve,4,8).rotateX(Math.PI/2),L,F+ae,.105,(K+Z)/2,M);Te.rotation.x=-.09/ve,c(M,.008,.05,ve*.95,E,F+ae,.045,(K+Z)/2)}let[me,te]=Hn(256,128),[ce,le]=Hn(256,128);for(let[ae,ve]of[[te,0],[le,1]]){let Te=ae.createLinearGradient(0,0,0,128);Te.addColorStop(0,ve?"#dcecff":"#566067"),Te.addColorStop(.35,ve?"#8fb2cf":"#22282c"),Te.addColorStop(1,ve?"#2b3e4e":"#0b0d0f"),ae.fillStyle=Te,ae.fillRect(0,0,256,128),ae.fillStyle=ve?"#ffffff":"#c9d3d8",ae.fillRect(40,14,176,5),ae.fillStyle=ve?"#1c5fd0":"#17418c",ae.fillRect(70,34,116,26),ae.fillStyle="#ffffff",ae.font='800 20px "Avenir Next", "Segoe UI", sans-serif',ae.textAlign="center",ae.textBaseline="middle",ae.fillText("M2  \u2193",128,48)}let se=n(new Rt(k,.28),l(o("#ffffff",{map:zn(me),roughness:.6}),"#ffffff",1.1,zn(ce)),F,.16,j+.131,M);se.castShadow=!1,c(M,k+.1,.3,.13,R,F,.02,j+.065);let he=k/2+.05,N=.72,C=.22,z=j,q=G-.12,H=q-z,X=(z+q)/2,w=new rt({color:"#bfe0ee",roughness:.06,metalness:0,transparent:!0,opacity:.3,clearcoat:1,envMapIntensity:1.3,side:$e,depthWrite:!1}),I=n(new xe(he,he,H,28,1,!0,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),w,F,C,X,M);I.scale.y=N;for(let ae=0;ae<=5;ae++)n(new qe(he,.008,6,28,Math.PI),E,F,C,z+H*ae/5,M).scale.y=N;for(let ae of[0,.25,.5,.75,1]){let ve=ae*Math.PI;c(M,.009,.009,H,E,F+Math.cos(ve)*he,C+Math.sin(ve)*he*N-.0045,X)}n(new qe(he+.004,.0065,6,32,Math.PI),W,F,C,q+.008,M).scale.y=N;let V=vh("METRO",{w:256,h:56,back:"#12346f",ink:"#ffffff",frame:null,font:'800 40px "Avenir Next", "Segoe UI", sans-serif'});n(new ge(.28,.062,.014),y(V,1.4),F,C+he*N-.005,q+.018,M);let[ee,Y]=Hn(128,128);Y.fillStyle="#d3222a",Y.fillRect(0,0,128,128),Y.strokeStyle="#ffffff",Y.lineWidth=17,Y.lineJoin="miter",Y.beginPath(),Y.moveTo(28,102),Y.lineTo(28,32),Y.lineTo(64,80),Y.lineTo(100,32),Y.lineTo(100,102),Y.stroke();let ne=zn(ee),oe=l(o("#ffffff",{map:ne,roughness:.4}),"#ffffff",1.6,ne),ie=F+k/2+.16,ue=G-.1;c(M,.05,.4,.035,E,ie,.02,ue),c(M,.1,.02,.08,R,ie,.02,ue),n(new ge(.15,.15,.045),[E,E,E,E,oe,oe],ie,.475,ue,M),c(M,.16,.012,.055,W,ie,.552,ue),c(M,.1,.11,.012,l(o("#eaf3f8",{roughness:.2}),"#dcebff",1.5),ie,.07,ue-.24);for(let ae of[-1,1])h(M,.005,.2,E,ie+ae*.05,.02,ue-.24,6);for(let ae of[-.29,.14,.29])h(M,.011,.06,E,F+ae*1.02,.02,v.d/2-.02,10);return M}};for(let v of r){let M=x[v.kind](v);On(M);for(let E of M.children)E.material.transparent&&(E.castShadow=!1,E.renderOrder=2)}}var Jt={w:.62,back:-.47,front:-.15,spots:[[0,0],[-.255,0],[.255,0],[0,0]]};function W0(r,e,t){let n=new Ye,i=e.w*Jt.w,s=e.d*Jt.back,a=e.d*Jt.front,o=a-s,l=(s+a)/2,c=.42,h=.18;n.position.set(e.x,t,e.z),n.rotation.y=e.rot,r.add(n);let u=(B,K,Z,de,me)=>{let te=new Pe(B,K);return te.position.set(Z,de,me),n.add(te),te},d=(B,K,Z,de,me,te,ce)=>u(new ge(B,K,Z),de,me,te+K/2,ce),p=rn("#a3a39e",[3,1]).clone(),f=new Be({color:"#93a0ad",metalness:.55,roughness:.38}),y=new Be({color:"#566370",metalness:.45,roughness:.5}),m=new Be({color:"#d8a93a",metalness:1,roughness:.28}),_=new Be({color:"#fff0cf",emissive:"#ffbf6a",emissiveIntensity:.15,roughness:.4}),g=new Be({color:"#2f6bff",emissive:"#2a62ff",emissiveIntensity:.15,roughness:.3}),x=.02,v=h*.4;d(i,h,x,p,0,0,s+x/2);for(let B of[-1,1])d(x,v,o,p,B*(i/2-x/2),0,l);d(i,.014,x,y,0,0,a-x/2);for(let[B,K]of[[-1,0],[1,0],[-1,1],[1,1]])d(x,c+.008,x,y,B*(i/2-x/2),0,K?a-x/2:s+x/2);for(let B of[-1,1])d(.013,.013,o,y,B*(i/2-x/2),c-.008,l);for(let B of[s+x/2,a-x/2])d(i,.013,.013,y,0,c-.008,B);let M=(B,K,Z=0)=>u(new xe(.0058,.0058,c-Z,8),f,B,(c+Z)/2,K),E=Math.round(i/.085);for(let B=1;B<E;B++){let K=-i/2+B/E*i;M(K,a-x/2),M(K,s+x/2,h-.02)}let T=Math.round(o/.085);for(let B=1;B<T;B++)for(let K of[-1,1])M(K*(i/2-x/2),s+B/T*o,v-.02);let R=i/E*3,L=i/2-i/E*2.5,W=a-.006;for(let B of[-1,1])d(.011,c-.03,.013,y,L+B*R/2,.014,W);for(let B of[.02,c*.5,c-.035])d(R,.011,.011,y,L,B,W);d(.036,.052,.016,m,L-R/2+.014,c*.42,W+.004);let F=new Be({color:"#0d0f12",roughness:.9});u(new xe(.006,.006,.004,10).rotateX(Math.PI/2),F,L-R/2+.014,c*.42+.031,W+.0125),d(.005,.014,.004,F,L-R/2+.014,c*.42+.015,W+.0125);for(let B of[.09,c-.11])d(.014,.026,.017,m,L+R/2,B,W);u(new Ie(.017,14,10),_,0,h+.03,s+.03);for(let B=0;B<3;B++)u(new qe(.021,.0022,6,18),y,0,h+.03,s+.03).rotation.y=B*Math.PI/3;for(let B of[-1,1])u(new Ie(.017,14,10),g,B*(i/2-x/2),c+.024,a-x/2);On(n),p.emissive=new Ce("#ffb468"),p.emissiveMap=p.map,f.emissive=new Ce("#8fb0ff"),y.emissive=new Ce("#8fb0ff");let k=Math.cos(e.rot),j=Math.sin(e.rot),D=(B,K)=>({x:e.x+B*k+K*j,z:e.z-B*j+K*k,r:.05,h:t+c+.08}),G=[];for(let B=0;B<=8;B++){let K=-i/2+B/8*i;G.push(D(K,s),D(K,a))}for(let B=1;B<5;B++)for(let K of[-1,1])G.push(D(K*i/2,s+B/5*o));return{obstacles:G,setNight(B){p.emissiveIntensity=B*.32,f.emissiveIntensity=B*.1,y.emissiveIntensity=B*.06,_.emissiveIntensity=.15+B*5,g.emissiveIntensity=.15+B*3.5}}}var Gt=.25,Yi=[2.75,-.35],Us=[4.1,-2.6],Ns=[.9,7.9],an=[6.35,3.1],zr=[[5.15,-3.2],[6.95,-3.2]],Mm=[[1.16,2.45],[1.17,3.55]],Em=[[...Yi,.7],[...Us,.55],[...Ns,1.25],...Object.values(Nn).flatMap(r=>r.spots)],Sm=["kuleli","beylerbeyi","haydarpasa"].flatMap(r=>Nn[r].spots.map(([e,t,n])=>({x:e+Math.sin(Nn[r].turn)*.3,z:t+Math.cos(Nn[r].turn)*.3,r:n}))),Bn=(r,e,t)=>{let n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function j0(r,e,t){let n=(S,b=r)=>(b.add(S),S),i=Ln(11),s=k0(t,e),a=[...Em,...s.filter(S=>S.level).flatMap(S=>S.spots)],o=(S,b)=>{let O=99;for(let P of e.tiles)Math.abs(P.x-S)<7&&Math.abs(P.z-b)<7&&(O=Math.min(O,Js(P,S,b)));for(let[P,J,$]of a)O=Math.min(O,Math.max(0,Math.hypot(S-P,b-J)-$));return O},l=(S,b,O,P)=>{let J=O+(Ri(S*.9,b*.9)-.5)*.1,$=J<0?Math.max(-.9,J*.55-.03):Gt*Bn(0,.26,J);if(J>.3){let re=Math.max(0,Math.hypot(S-1.6,b+.7)-15),ye=Math.max(0,Ri(S*.16+5,b*.16)*2.6-.75)*Bn(.5,4.5,J)+Math.max(0,Ri(S*.045,b*.045+3)-.25)*Bn(0,26,re)*9*Bn(.5,6,J);$+=ye*Bn(.7,3.4,P)}return O>-.3&&P<.5?Gt+(Math.max($,0)-Gt)*Bn(.12,.5,P):$},c=340,h=1.7,u=-.8,d=S=>15*S+75*S**7,p=[];e.tiles.forEach((S,b)=>{for(let O of b%2?[1]:[1,-1]){let P=S.x+S.out[0]*O*(S.d/2+.2)+S.along[0]*.55,J=S.z+S.out[1]*O*(S.d/2+.2)+S.along[1]*.55;Pt(P,J)>.1&&o(P,J)>.1&&!xh(s,P,J,.06)&&!p.some($=>Math.hypot($[0]-P,$[1]-J)<.7)&&p.push([P,J])}});let f=(S,b)=>{let O=0;for(let P of p){let J=S-P[0],$=b-P[1],re=J*J+$*$;re<2.2&&(O+=Math.exp(-re*2.6))}for(let P of s){let J=S-P.front[0],$=b-P.front[1],re=J*J+$*$;re<2.2&&(O+=Math.exp(-re*2.2)*P.lamp)}return Math.min(1.4,O)},y=new Float32Array((c+1)**2),m=new Float32Array((c+1)**2*3),_=new Float32Array((c+1)**2*3),g=[];for(let S=0,b=0;S<=c;S++)for(let O=0;O<=c;O++,b++){let P=h+d(O/c*2-1),J=u+d(S/c*2-1),$=Pt(P,J),re=o(P,J);m.set([P,l(P,J,$,re),J],b*3),y[b]=re<1.8?f(P,J):0,_.set([$,re,Bn(.36,.6,Ri(P*.11+9,J*.11))*Bn(26,14,Math.hypot(P-h,J-u))],b*3),O<c&&S<c&&g.push(b,b+c+1,b+1,b+1,b+c+1,b+c+2)}let x=new et;x.setAttribute("position",new ht(m,3)),x.setAttribute("aInfo",new ht(_,3)),x.setAttribute("aLamp",new ht(y,1)),x.setIndex(g),x.computeVertexNormals();let v={value:0},M=new Be({roughness:.96});M.onBeforeCompile=S=>{S.uniforms.uNight=v,S.uniforms.uNoise={value:vo()},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aInfo; attribute float aLamp; varying float vLamp; varying vec3 vInfo; varying vec3 vW; varying float vUpN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLamp = aLamp; vInfo = aInfo; vW = position; vUpN = normal.y;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uNoise; uniform float uNight; varying float vLamp; varying vec3 vInfo; varying vec3 vW; varying float vUpN; float gBump;`).replace("#include <map_fragment>",`
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
        gBump = (n3.b * 0.018 + n3.g * 0.022) * (1.0 - onPave * 0.75) + joint * onPave * 0.006;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.58, 0.24) * uNight * (vLamp * 1.5 + vInfo.z * smoothstep(0.45, 0.8, n2.g) * 0.30) * step(0.0, vW.y);`).replace("#include <normal_fragment_maps>",`
        { vec3 px = dFdx(-vViewPosition), py = dFdy(-vViewPosition); vec3 r1 = cross(py, normal), r2 = cross(normal, px);
          float det = dot(px, r1); vec3 g = sign(det) * (dFdx(gBump) * r1 + dFdy(gBump) * r2); normal = normalize(abs(det) * normal - g); }`)};let E=n(new Pe(x,M));E.receiveShadow=!0;let T=288,R=[-34,-36,74,74],L=new Uint8Array(T*T);for(let S=0;S<T;S++)for(let b=0;b<T;b++)L[S*T+b]=Math.max(0,Math.min(255,(Pt(R[0]+(b+.5)/T*R[2],R[1]+(S+.5)/T*R[3])/4+.5)*255));let W=new Mi(L,T,T,Lr);W.magFilter=W.minFilter=kt,W.needsUpdate=!0;let F=1024,k=new Uint8Array(F*F),j=(S,b,O,P)=>{let J=(S-R[0])/R[2]*F,$=(b-R[1])/R[3]*F,re=O/R[2]*F,ye=Math.ceil(re*2.2);for(let Me=Math.max(0,Math.floor($-ye));Me<=Math.min(F-1,$+ye);Me++)for(let Re=Math.max(0,Math.floor(J-ye));Re<=Math.min(F-1,J+ye);Re++){let _e=Me*F+Re,De=Math.exp(-((Re-J)**2+(Me-$)**2)/(re*re))*P*255;De>1&&(k[_e]=Math.min(255,k[_e]+De))}},D=new Mi(k,F,F,Lr);D.magFilter=D.minFilter=kt;let G={value:0},B={value:0},K={value:new Je(0,0,1,1)},Z={value:0},de=new rt({color:"#0d3f55",roughness:.09,metalness:0,ior:1.33,specularIntensity:1,envMapIntensity:1.15});de.onBeforeCompile=S=>{Object.assign(S.uniforms,{uNoise:{value:vo()},uShore:{value:W},uArea:{value:new Je(...R)},uTime:G,uNight:v,uMoon:{value:sh},uFlat:B,uPool:K,uPoolAz:Z,uLamps:{value:D}}),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vW = (modelMatrix * vec4(position, 1.0)).xyz;`),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uNoise, uShore, uLamps; uniform vec4 uArea; uniform float uTime, uNight, uFlat, uPoolAz; uniform vec3 uMoon; uniform vec4 uPool; varying vec3 vW;
        ${oh}
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
        diffuseColor.rgb = mix(wc, vec3(0.80, 0.85, 0.86), foam * 0.72);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uNight > 0.0) {
          // the lamps and windows of the shore, mirrored: where each ray that
          // leaves the rippled water meets the height they hang at
          vec3 look = isOrthographic ? -vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]) : normalize(vW - cameraPosition);
          vec3 wn = inverseTransformDirection(normal, viewMatrix);
          vec2 side = normalize(look.xz + vec2(1e-4, 0.0));
          float mirror = 0.0;
          for (int k = 0; k < 7; k++) { // (small waves draw a light out towards you)
            float tilt = (float(k) - 3.0) * 0.085;
            vec3 r = reflect(look, normalize(wn + vec3(side.x, 0.0, side.y) * tilt));
            vec2 hit = vW.xz + r.xz / max(r.y, 0.12) * 0.40;
            mirror += texture2D(uLamps, (hit - uArea.xy) / uArea.zw).r * (1.0 - abs(float(k) - 3.0) * 0.17);
          }
          float glint = 0.55 + 0.9 * smoothstep(0.35, 0.75, texture2D(uNoise, vW.xz * 1.7 + vec2(uTime * 0.02, -uTime * 0.013)).g);
          totalEmissiveRadiance += vec3(1.0, 0.56, 0.22) * uNight * (mirror * 0.42 * glint + pow(smoothstep(-0.7, 0.0, shore), 2.2) * 0.022);
          // the moon's road on the sea
          vec3 away = reflect(normalize(vW - cameraPosition), inverseTransformDirection(normal, viewMatrix));
          float road = pow(max(dot(away, uMoon), 0.0), 70.0);
          totalEmissiveRadiance += vec3(0.95, 0.88, 0.72) * uNight * (1.0 - uFlat) * deep * (road * 0.10 + pow(road, 5.0) * 0.30);
          // from straight above there is no sky: the moon lies on the water instead
          vec2 md = (vW.xz - uPool.xy) / uPool.z, mc = vec2(cos(uPoolAz), sin(uPoolAz));
          vec2 mq = vec2(md.x * mc.x - md.y * mc.y, -(md.x * mc.y + md.y * mc.x) * uPool.w); // (upright and round as the camera sees it)
          mq.x += (texture2D(uNoise, vW.xz * vec2(0.10, 0.5) + uTime * 0.012).g - 0.5) * (0.10 + abs(mq.y) * 0.10);
          vec4 moon = cartoonMoon(mq);
          totalEmissiveRadiance += moon.rgb * moon.a * uNight * uFlat * 0.55; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.65, foam);`).replace("#include <normal_fragment_maps>",`
        { float e = 0.05, dist = length(vViewPosition); float h0 = wave(vW.xz);
          vec2 g = vec2(wave(vW.xz + vec2(e, 0.0)) - h0, wave(vW.xz + vec2(0.0, e)) - h0) / e;
          g *= 0.34 * smoothstep(90.0, 14.0, dist) * mix(0.45, 1.0, deep);
          normal = normalize((viewMatrix * vec4(-g.x, 1.0, -g.y, 0.0)).xyz); }`)};let me=n(new Pe(new Zt(165,64).rotateX(-Math.PI/2),de));me.position.y=-.02,me.receiveShadow=!0;let te=new Ne,ce=new mt,le=new A(0,1,0),se=(S,b,O)=>new A(S,b,O),he=[],N=[],C=[],z=[],q=[[4,5.75,.55],[-4.6,-3.4,1.9],[11.8,-6.6,2.4],[-6.6,-9,2.6],[13.6,2.2,1.5],[-10,.4,1.6],[2.9,8.3,.5]],H=(S,b)=>q.some(([O,P,J])=>Math.hypot(O-S,P-b)<J),X=.36;for(let S=-21;S<25;S+=X)for(let b=-18.5;b<19;b+=X){let O=S+(i()-.5)*.16,P=b+(i()-.5)*.16,J=Pt(O,P);if(J<.3)continue;let $=o(O,P);if($<.42||xh(s,O,P,.24))continue;let re=l(O,P,J,$),ye=Bn(.33,.55,Ri(O*.11+9,P*.11))*Bn(26,13,Math.hypot(O-h,P-u));if((Math.hypot(O+2.8,P+6.6)<2.6||Math.hypot(O-12.4,P+1)<1.5)&&$>1.1&&i()<.3){N.push([O,re,P,.2+i()*.16,.7+i()**2*1.5]);continue}if(!H(O,P)&&i()<.14+ye*.72){let Re=.15+i()*.12;he.push({x:O,y:re,z:P,w:Re,d:Re*(.75+i()*.5),h:(.1+i()*.13)*($>1.6?1+ye*.9:.85),rot:Math.round(Ri(O*.09,P*.09)*9)*.35+(i()-.5)*.12,flat:i()<.28})}else if(i()<(H(O,P)?1:.5)){let Re=H(O,P)?3:1;for(let _e=0;_e<Re;_e++)(i()<.12?z:C).push([O+(i()-.5)*.3,re,P+(i()-.5)*.3,.07+i()*.075])}}let w=new Ce,I=(S,b,O,P,J=!0)=>{let $=n(new Ja(S,b,O.length));return O.forEach((re,ye)=>P($,re,ye)),$.castShadow=J,$.receiveShadow=!0,$},V=new ge(1,1,1).translate(0,.5,0),ee=["#f0e4cf","#e9d3b0","#e6bfa0","#dcd8cf","#f3ead8","#d9b79b","#cfd3cf","#e8c9b6","#c9b8a0"],Y=(S,b,O)=>(S.onBeforeCompile=P=>{P.uniforms.uNight=v,P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vHouse; varying float vSide;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
vHouse = instanceMatrix[3].xz;
#endif
vSide = dot(floor(normal + 0.5), vec3(1.0, 5.0, 3.0));`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying vec2 vHouse; varying float vSide;
float rnd(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          if (uNight > 0.0 && abs(vSide) < 4.5) {
            ${O}
            float a = rnd(vec3(cell + floor(vHouse * 37.0), vSide)), b = rnd(vec3(cell.yx + floor(vHouse * 19.0), vSide + 2.0));
            vec3 lamp = b < 0.14 ? vec3(0.62, 0.80, 1.0) : mix(vec3(1.0, 0.50, 0.16), vec3(1.0, 0.74, 0.40), b);
            float far = clamp((fwidth(vMapUv.x) * ${b} - 0.18) * 2.2, 0.0, 1.0);
            totalEmissiveRadiance += lamp * uNight * mix(pane * step(a, LIT) * (0.9 + b * 1.6), LIT * FAR * (0.4 + rnd(vec3(floor(vHouse * 23.0), 4.0))), far);
          }`)},S);I(V,Y(new Be({map:T0(),roughness:.9}),"3.0",`
            #define LIT 0.46
            #define FAR 0.42
            vec2 g = vec2(vMapUv.x, 1.0 - vMapUv.y) * 128.0, cell = floor((g - vec2(9.0, 7.0)) / vec2(40.0, 41.0)), l = g - vec2(12.0, 10.0) - cell * vec2(40.0, 41.0);
            float pane = step(0.0, l.x) * step(l.x, 20.0) * step(0.0, l.y) * step(l.y, 24.0) * (1.0 - step(9.0, l.x) * step(l.x, 11.0));`),he,(S,b,O)=>{te.compose(se(b.x,b.y-.08,b.z),ce.setFromAxisAngle(le,b.rot),se(b.w,b.h+.08,b.d)),S.setMatrixAt(O,te),S.setColorAt(O,w.set(ee[Math.floor(i()*ee.length)]))});let ne=["#9c5638","#a8644a","#8a4a32","#b07a58","#7f5140","#a06d50"];I(new dt(Math.SQRT1_2,1,4,1).rotateY(Math.PI/4).translate(0,.5,0),new Be({roughness:.88,flatShading:!0}),he.filter(S=>!S.flat),(S,b,O)=>{te.compose(se(b.x,b.y+b.h,b.z),ce.setFromAxisAngle(le,b.rot),se(b.w*1.14,b.w*.4,b.d*1.14)),S.setMatrixAt(O,te),S.setColorAt(O,w.set(ne[Math.floor(i()*ne.length)]))}),I(V,new Be({color:"#b9b2a6",roughness:.95}),he.filter(S=>S.flat),(S,b,O)=>{te.compose(se(b.x,b.y+b.h,b.z),ce.setFromAxisAngle(le,b.rot),se(b.w*1.04,.012,b.d*1.04)),S.setMatrixAt(O,te)});let oe=Y(new rt({map:w0(),roughness:.18,metalness:.12,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.4}),"12.0",`
            #define LIT 0.36
            #define FAR 0.20
            vec2 q = vMapUv * vec2(12.0, 32.0), cell = floor(q), l = fract(q);
            float pane = step(0.1, l.x) * step(l.x, 0.9) * step(0.15, l.y) * step(l.y, 0.85);`);I(V,oe,N,(S,[b,O,P,J,$],re)=>{te.compose(se(b,O-.05,P),ce.setFromAxisAngle(le,.3),se(J,$,J)),S.setMatrixAt(re,te),S.setColorAt(re,w.setHSL(.56,.18,.62+i()*.25))});let ie=new Ei(1,1),ue=ie.attributes.position;for(let S=0;S<ue.count;S++){let b=se(ue.getX(S),ue.getY(S),ue.getZ(S)),O=.74+Ri(b.x*1.1+b.y*.7+3,b.z*1.1+b.y*.5)*.52;ue.setXYZ(S,b.x*O,b.y*O*.9+.75,b.z*O)}ie.computeVertexNormals();let ae=new Be({roughness:.95});I(ie,ae,C,(S,[b,O,P,J],$)=>{te.compose(se(b,O,P),ce.setFromAxisAngle(le,i()*6),se(J,J*(.85+i()*.4),J)),S.setMatrixAt($,te),S.setColorAt($,w.setHSL(.22+i()*.07,.3+i()*.22,.14+i()*.11))});let ve=new Ie(1,6,6).scale(.42,2.1,.42).translate(0,1.9,0);I(ve,ae,z,(S,[b,O,P,J],$)=>{te.compose(se(b,O,P),ce.identity(),se(J,J,J)),S.setMatrixAt($,te),S.setColorAt($,w.setHSL(.3,.26,.1+i()*.05))});for(let[S,b]of p)Pt(S,b)<2&&j(S,b,.13,1);for(let S of he)Pt(S.x,S.z)<1.1&&j(S.x,S.z,.1,.16);j(an[0]+.18,an[1]-.04,.2,1),j(an[0]-.06,an[1]+.2,.3,.5),D.needsUpdate=!0;let Te=[],Ee=(S,b,O,P=S.map)=>(S.emissive=new Ce(b),P&&(S.emissiveMap=P),S.emissiveIntensity=0,Te.push([S,O]),S),Le=p.map(([S,b])=>l(S,b,Pt(S,b),o(S,b)));I(new xe(.009,.013,.34,6).translate(0,.17,0),new Be({color:"#2b3033",metalness:.6,roughness:.5}),p,(S,[b,O],P)=>{te.makeTranslation(b,Le[P],O),S.setMatrixAt(P,te)}),I(new Ie(.03,10,8),Ee(new Be({color:"#f3ead6",roughness:.4}),"#ffb05a",7),p,(S,[b,O],P)=>{te.makeTranslation(b,Le[P]+.36,O),S.setMatrixAt(P,te)},!1);let Se=[],Fe=(S,b,O,P,J,$)=>{let re=new Ir(P,0,$,1.6);re.position.set(S,b,O),n(re),Se.push([re,J])},we=(S,b={})=>new Be({color:S,roughness:.7,...b}),fe=(S,b,O,P,J,$=r)=>{let re=new Pe(S,b);return re.position.set(O,P,J),re.castShadow=re.receiveShadow=!0,$.add(re),re},be=(S,b,O)=>{let P=new Ye;return P.position.set(S,b,O),n(P)},Oe=we("#2b2722"),We=we("#77838d",{metalness:.5,roughness:.45}),Ct=we("#d8a93a",{metalness:1,roughness:.25});{let S=be(Yi[0],Gt,Yi[1]),b=Ee(rn("#e2d2b4",[5,5]),"#ff9238",.62);Fe(Yi[0]+.1,.9,Yi[1]+1,"#ffa04a",2.6,4),fe(new xe(.4,.47,1.55,40),b,0,.77,0,S),fe(new xe(.46,.4,.1,40),b,0,1.6,0,S),fe(new xe(.4,.4,.3,40),b,0,1.78,0,S),fe(new xe(.48,.48,.035,40),we("#8d8676"),0,1.67,0,S),fe(new xe(.35,.38,.2,40),b,0,2.02,0,S);for(let O=0;O<14;O++)for(let[P,J,$]of[[1.8,.4,.17],[2.02,.365,.1]]){let re=O/14*Math.PI*2,ye=fe(new ge(.07,$,.03),Oe,Math.sin(re)*J,P,Math.cos(re)*J,S);ye.rotation.y=re}for(let O=0;O<5;O++){let P=O*1.3,J=fe(new ge(.05,.13,.03),Oe,Math.sin(P)*.435,.4+O%3*.36,Math.cos(P)*.435,S);J.rotation.y=P}fe(new dt(.44,.85,40),We,0,2.54,0,S),fe(new Ie(.035,12,10),Ct,0,3,0,S)}{let S=be(an[0],-.05,an[1]),b=Ee(rn("#fff6e6",[2,2]),"#ffc27a",.6);Fe(an[0]-.2,.9,an[1]+1,"#ffb066",2.2,3.6);let O=fe(new xe(.58,.78,.26,22),rn("#a89a84",[6,1]),0,.1,0,S);O.scale.z=.86,fe(new ge(.66,.3,.46),b,-.06,.38,.04,S),fe(new ge(.7,.04,.5),we("#a4512f"),-.06,.55,.04,S),fe(new xe(.14,.17,.95,24),b,.18,.7,-.04,S),fe(new xe(.2,.2,.03,24),we("#8d8676"),.18,1.18,-.04,S),fe(new xe(.12,.13,.17,16),Ee(we("#e9e2d2"),"#ffd28a",5),.18,1.28,-.04,S),fe(new Ie(.14,20,12,0,Math.PI*2,0,Math.PI/2),We,.18,1.36,-.04,S),fe(new xe(.008,.008,.35,6),Ct,.18,1.65,-.04,S);for(let P=0;P<4;P++)fe(new ge(.07,.12,.02),Oe,-.3+P*.16,.38,.275,S)}let on=[],vt=null;{let[[S,b],[O]]=zr,P=we("#aab2b8",{metalness:.55,roughness:.42}),J=Ee(P.clone(),"#3a62ff",.5),$=Ee(P.clone(),"#ff2d55",3.2),re=O-S+1,ye=(S+O)/2,Me=be(0,0,b);for(let _e of[S,O]){for(let De of[-1,1]){let it=fe(new ge(.13,2.5,.1),J,_e,1.2,De*.26,Me);it.rotation.x=De*.02}for(let De of[.75,1.6,2.4])fe(new ge(.12,.1,.5),J,_e,De,0,Me);fe(new ge(.5,.5,.9),we("#8c867b"),_e,0,0,Me)}fe(new ge(re,.06,.56),P,ye,.88,0,Me),fe(new ge(re,.012,.44),we("#3a3d40",{roughness:.9}),ye,.918,0,Me),fe(new ge(re,.014,.012),we("#e8e4d8"),ye,.92,0,Me);for(let _e of[-.24,.24]){let De=Ve=>{let Qe=(Ve-ye)/((O-S)/2);return Math.abs(Qe)<=1?1.06+1.36*Qe*Qe:2.42-(Math.abs(Ve-ye)-(O-S)/2)*2.95},it=[];for(let Ve=0;Ve<=44;Ve++){let Qe=ye-re/2+Ve/44*re;it.push(se(Qe,De(Qe),_e))}fe(new xn(new yn(it),80,.022,8),$,0,0,0,Me);for(let Ve=S+.12;Ve<O;Ve+=.12){let Qe=De(Ve)-.9;fe(new xe(.005,.005,Qe,4),$,Ve,.9+Qe/2,_e,Me)}}let Re=Ee(we("#f4ead2"),"#ffc070",8);for(let _e=ye-re/2+.08;_e<ye+re/2;_e+=.22)for(let De of[-.27,.27])fe(new Ie(.016,8,6),Re,_e,.96,De,Me);on.push($,J),Fe(ye,.5,b,"#6a7cff",1.8,3.6),vt=Se[Se.length-1][0];for(let _e=0;_e<9;_e++)fe(new ge(.09,.035,.045),we(["#e8c21c","#c8372f","#f2f2f2","#2c4f7a","#1c1c1c"][_e%5],{metalness:.3,roughness:.3}),S-.4+_e*.31,.945,_e%2?.12:-.12,Me)}{let S=be(Us[0],Gt,Us[1]),b=Ee(rn("#f6ead2",[2,2]),"#ffb866",.6);for(let[O,P,J]of[[.56,.1,.05],[.44,.42,.3],[.5,.05,.53],[.36,.4,.75],[.42,.05,.97],[.28,.36,1.17],[.34,.04,1.36],[.2,.2,1.48]])fe(new ge(O,P,O),b,0,J,0,S);for(let O=0;O<4;O++){let P=O*Math.PI/2,J=fe(new xe(.1,.1,.015,28),Ee(we("#fdfaf0"),"#fff0c8",1.6),Math.sin(P)*.145,1.18,Math.cos(P)*.145,S);J.rotation.set(Math.PI/2,0,-P,"YXZ"),J.rotation.y=P,J.rotation.z=0;let $=fe(new ge(.012,.07,.01),Oe,Math.sin(P)*.158,1.21,Math.cos(P)*.158,S);$.rotation.y=P}fe(new dt(.15,.22,24),We,0,1.69,0,S),fe(new Ie(.03,10,8),Ct,0,1.82,0,S)}{let S=be(Ns[0],Gt,Ns[1]),b=new Ie(.16,24,12,0,Math.PI*2,0,Math.PI/2);fe(new ge(2,.26,1.2),rn("#d9c29c",[6,1]),0,.13,0,S),fe(new ge(2.06,.03,1.26),we("#9a8c74"),0,.27,0,S);for(let P=0;P<6;P++)for(let J=0;J<4;J++)fe(b,We,-.82+P*.33,.28,-.46+J*.31,S).scale.set(.9,.8,.9),fe(new Ie(.018,8,6),Ct,-.82+P*.33,.415,-.46+J*.31,S);let O=Ee(we("#2b2722"),"#ff9d3c",2.6);for(let P=0;P<8;P++)fe(new ge(.12,.15,.02),O,-.85+P*.243,.1,.605,S)}P0({GROUND:Gt,group:be,piece:fe,mat:we,lit:Ee,dark:Oe,lead:We,gold:Ct}),V0(s,{GROUND:Gt,group:be,piece:fe,mat:we,lit:Ee});{let[[S,b],[O,P]]=Mm,J=P-b+.5,$=(S+O)/2,re=(b+P)/2,ye=be($,0,re);fe(new ge(.95,.05,J),we("#4a4c4e",{roughness:.9}),0,.235,0,ye);for(let Me of[-1,1]){fe(new ge(.03,.06,J),we("#b9b2a4"),Me*.47,.28,0,ye),fe(new ge(.16,.09,J*.8),Ee(we("#6d3a2c"),"#ff8a3a",1.1),Me*.36,.14,0,ye);for(let Re=0;Re<6;Re++){let _e=-J/2+.2+Re/5*(J-.4),De=fe(new xe(.004,.006,.5,5),we("#3a2a1a"),Me*.6,.45,_e,ye);De.rotation.z=-Me*.95,fe(new lt(.022,.06,4,8),we(["#32425a","#7a3b34","#4d5b3c"][Re%3]),Me*.4,.32,_e,ye)}}for(let Me of[-1,1])for(let Re of[-.3,.3])fe(new xe(.07,.08,.5,12),we("#8b8577"),Re,0,Me*J*.22,ye)}let Nt=[];{let[S,b]=ai,O=new rt({color:"#d9a748",metalness:.82,roughness:.44,clearcoat:.15,emissive:"#3a2608",emissiveIntensity:.35}),P=[[0,.02],[1.16,.02],[1.2,.03],[1.27,.11],[1.31,.12],[1.32,.1],[1.25,0],[1.1,-.05],[0,-.05]].reverse().map(([$,re])=>new pe($,re));fe(new At(P,96),O,S,0,b);for(let $ of[.45,.85,1.08]){let re=fe(new qe($,.012,6,90),O,S,.022,b);re.rotation.x=Math.PI/2}let J=[[.001,0],[.085,0],[.09,.01],[.075,.05],[.062,.12],[.07,.18],[.09,.25],[.092,.27],[.084,.27]].map(([$,re])=>new pe($,re));for(let[$,re]of[[-.88,.35],[.9,-.3]])fe(new xe(.16,.1,.025,32),new rt({color:"#f7f3ea",roughness:.2,clearcoat:1}),S+$,.035,b+re),fe(new At(J.map(ye=>new pe(ye.x*.9,ye.y*.86)),28),new rt({color:"#8c1f08",roughness:.05,clearcoat:1,transparent:!0,opacity:.92}),S+$,.055,b+re),fe(new At(J,28),new rt({color:"#ffffff",roughness:.02,transparent:!0,opacity:.22,clearcoat:1,side:$e,depthWrite:!1}),S+$,.05,b+re),Nt.push(new _n(r,S+$,.3,b+re)),fe(new ge(.05,.03,.05),we("#ffffff",{roughness:.6}),S+$+.11,.06,b+re+.05).rotation.y=.5}Fe(ai[0]-.4,2.1,ai[1]+.9,"#ffcf90",6,5);for(let[S,b,O]of Zs){let P=e.tiles[S],J=e.tiles[b],$=Math.floor(Math.hypot(P.x-J.x,P.z-J.z)/.5),re=new Ie(.035,10,8),ye=Ee(we(O==="ferry"?"#f4f1e8":"#e8752a",{roughness:.4}),O==="ferry"?"#e8f0ff":"#ff5a1a",3);for(let Me=1;Me<$;Me++){let Re=P.x+(J.x-P.x)*(Me/$),_e=P.z+(J.z-P.z)*(Me/$);Pt(Re,_e)<-.15&&fe(re,ye,Re,0,_e)}}let Fn=(S,b)=>{let O=new Wt;return O.moveTo(-S/2,-b/2),O.lineTo(S*.22,-b/2),O.quadraticCurveTo(S*.45,-b*.4,S/2,0),O.quadraticCurveTo(S*.45,b*.4,S*.22,b/2),O.lineTo(-S/2,b/2),O.quadraticCurveTo(-S*.56,0,-S/2,-b/2),O},Q=(S,b,O)=>new nn(Fn(S,b),{depth:O,bevelEnabled:!1,curveSegments:10}).rotateX(-Math.PI/2),wn=()=>{let S=new Ye,b=we("#f5f2ea",{roughness:.45}),O=Ee(we("#26343f",{roughness:.15,metalness:.4}),"#ffca7a",2.4);fe(Q(1.25,.34,.1),we("#16181b",{roughness:.5}),0,-.04,0,S),fe(Q(1.24,.335,.05),b,0,.06,0,S),fe(Q(1.24,.337,.014),we("#e6b422"),0,.1,0,S);for(let[P,J,$]of[[.92,.28,.115],[.76,.25,.215]])fe(new ge(P,.09,J),b,-.06,$+.045,0,S),fe(new ge(P*.94,.04,J+.004),O,-.06,$+.05,0,S),fe(new ge(P+.06,.012,J+.05),b,-.06,$+.095,0,S);return fe(new ge(.13,.08,.16),b,.24,.36,0,S),fe(new xe(.05,.06,.2,18),we("#e6b422",{roughness:.4}),-.1,.4,0,S),fe(new xe(.052,.052,.05,18),we("#17181a"),-.1,.49,0,S),n(S)},kr=[{obj:wn(),path:[[2.8,3.2],[4.7,3.6],[5.75,2.5],[6.15,1.2]],t:0,speed:.04},{obj:wn(),path:[[5.7,-12.6],[5.7,-8.5],[5.95,-5.2],[6,-.6]],t:.4,speed:.026},{obj:wn(),path:[[1,13.6],[9,13.7],[17,17.2]],t:1.2,speed:.02}],pt=wn();pt.visible=!1;let Vr=we("#f7f5f0",{roughness:.75}),Wr=we("#9aa3ab",{roughness:.8,side:$e}),Ci=new Wt;Ci.moveTo(-.05,0),Ci.quadraticCurveTo(-.02,.18,-.1,.34),Ci.quadraticCurveTo(.02,.2,.06,0);let jr=new Ti(Ci,8).rotateX(Math.PI/2),Vs=()=>{let S=new Ye;fe(new lt(.05,.13,6,12).rotateZ(Math.PI/2),Vr,0,0,0,S),fe(new Ie(.045,12,10),Vr,.11,.03,0,S),fe(new dt(.014,.06,8).rotateZ(-Math.PI/2),we("#e8a62c"),.17,.025,0,S);let b=fe(jr,Wr,0,.03,.02,S),O=fe(jr,Wr,0,.03,-.02,S);return O.scale.z=-1,S.userData={l:b,r:O},S.scale.setScalar(.5),n(S)},ni=Array.from({length:8},(S,b)=>({obj:Vs(),cx:2+Math.cos(b*1.7)*6,cz:-1+Math.sin(b*2.3)*7,r:1.2+b%3*.7,h:2.6+b%4*.5,a:b*.9,speed:.4+b%3*.12,task:null})),Ws=S=>{let b=new Ye;fe(new lt(.06,.07,6,14),S,0,.1,0,b).rotation.z=.35,fe(new Ie(.055,16,12),S,.06,.2,0,b);for(let O of[-1,1])fe(new dt(.02,.045,8),S,.06,.255,O*.03,b),fe(new Ie(.008,8,6),we("#8fbf4a",{roughness:.1}),.105,.21,O*.02,b),fe(new Ie(.02,10,8),S,.07,.02,O*.03,b);return fe(new qe(.07,.013,8,18,3.6).rotateX(Math.PI/2),S,-.05,.02,.02,b),n(b)},js=["#c77a38","#26242a","#d9d2c4"].map((S,b)=>({obj:Ws(we(S,{roughness:.95})),at:[5,22,41][b],next:2e4+b*9e3})),Mt=new Ye,Zi=new rt({color:"#f4f6f8",roughness:.3,clearcoat:1}),Xs=new rt({color:"#12377f",roughness:.3,clearcoat:1});fe(new ge(.44,.07,.2),Zi,0,.085,0,Mt),fe(new ge(.441,.025,.202),Xs,0,.085,0,Mt),fe(new ge(.22,.07,.18),we("#1b232b",{roughness:.1,metalness:.4}),-.02,.15,0,Mt),fe(new ge(.2,.012,.17),Zi,-.02,.19,0,Mt);let Xr=[["#ff2a2a",-.04],["#2a6bff",.04]].map(([S,b])=>fe(new ge(.04,.025,.07),we(S,{emissive:S,emissiveIntensity:.2}),-.02,.21,b,Mt));for(let[S,b]of[[.14,.1],[-.14,.1],[.14,-.1],[-.14,-.1]])fe(new xe(.045,.045,.035,18).rotateX(Math.PI/2),we("#141414"),S,.045,b,Mt);let Gn=e.tiles[t.jailTile];Mt.position.set(Gn.x-Gn.out[0]*1.15,Gt,Gn.z-Gn.out[1]*1.15),n(Mt);let qr=0,Ji=(S,b)=>{let O=S.length-1,P=Math.min(O-1e-6,b*O),J=Math.floor(P),$=P-J,[re,ye]=S[J],[Me,Re]=S[J+1];return[re+(Me-re)*$,ye+(Re-ye)*$,Math.atan2(-(Re-ye),Me-re)]},qs=[...he.map(S=>({x:S.x,z:S.z,r:Math.hypot(S.w,S.d)*.57,h:S.y+S.h+(S.flat?.03:S.w*.4)})),...N.map(([S,b,O,P,J])=>({x:S,z:O,r:P*.71,h:b+J})),...C.map(([S,b,O,P])=>({x:S,z:O,r:P,h:b+P*1.8})),...z.map(([S,b,O,P])=>({x:S,z:O,r:P*.5,h:b+P*4})),...p.map(([S,b],O)=>({x:S,z:b,r:.04,h:Le[O]+.4})),{x:Yi[0],z:Yi[1],r:.5,h:Gt+3.05},{x:Us[0],z:Us[1],r:.4,h:Gt+1.9},{x:an[0],z:an[1],r:.8,h:1.8},...[-.75,-.25,.25,.75].map(S=>({x:Ns[0]+S,z:Ns[1],r:.66,h:Gt+.45})),...zr.map(([S,b])=>({x:S,z:b,r:.5,h:2.75})),...[.2,.4,.6,.8].map(S=>({x:zr[0][0]+(zr[1][0]-zr[0][0])*S,z:zr[0][1],r:.4,h:2.3})),{x:ai[0],z:ai[1],r:1.35,h:.9},...Object.values(Nn).flatMap(S=>S.spots.map(([b,O,P])=>({x:b,z:O,r:P+.1,h:Gt+S.h}))),...s.flatMap(S=>S.spots.map(([b,O,P])=>({x:b,z:O,r:P+.06,h:Gt+S.h}))),{x:Mt.position.x,z:Mt.position.z,r:.28,h:Gt+.25}],Ys=(S=!0)=>[{x:an[0],z:an[1],r:.7},{x:ai[0],z:ai[1],r:1.34},...Sm,...(S?kr:[]).flatMap(b=>[-.4,0,.4].map(O=>({x:b.obj.position.x+Math.cos(b.yaw||0)*O,z:b.obj.position.z-Math.sin(b.yaw||0)*O,r:.2})))],U=!1;return{dispose(){W.dispose(),D.dispose()},obstacles:qs,inTheWater:Ys,giveWay(S){U=S},rideBoat:pt,groundAt:(S,b)=>{let O=Pt(S,b);return Math.max(0,l(S,b,O,o(S,b)))},gulls:ni,terrain:E,buildings:he.length,trees:C.length+z.length,setNight(S){v.value=S;for(let[b,O]of Te)b.emissiveIntensity=S*O;for(let[b,O]of Se)b.intensity=S*O},update(S,b,O){G.value=b/1e3;for(let $ of Nt)$.update(S,v.value);if(B.value=O.skyless?1:0,O.skyless){let[$,re,ye,Me,Re]=O.moonOnWater();K.value.set($,re,ye,Me),Z.value=Re}v.value>0&&on.forEach(($,re)=>$.emissive.setHSL((b/24e3+re*.08)%1,.9,.5)),v.value>0&&vt.color.copy(on[0].emissive);for(let $ of kr){U||($.t+=S*$.speed);let re=$.t%2,ye=re<1?re:2-re,[Me,Re,_e]=Ji($.path,ye),De=_e+(re<1?0:Math.PI);$.obj.position.set(Me,.01+Math.sin(b/700+Me)*.012,Re),$.yaw=$.yaw===void 0?De:$.yaw+Math.atan2(Math.sin(De-$.yaw),Math.cos(De-$.yaw))*Math.min(1,S*1.6),$.obj.rotation.set(Math.sin(b/900)*.015,$.yaw,0)}for(let $ of ni){let re=$.obj,ye=Math.sin(b/130+$.a)*($.task?.7:.38);if(re.userData.l.rotation.x=-ye,re.userData.r.rotation.x=ye,$.task){let Me=$.task,Re=Math.min(1,(b-Me.t0)/Me.ms),_e=Me.from,De=Me.to();re.position.set(_e.x+(De.x-_e.x)*Re,_e.y+(De.y-_e.y)*Re+Math.sin(Re*Math.PI)*(Me.arc||0),_e.z+(De.z-_e.z)*Re),re.rotation.y=Math.atan2(-(De.z-_e.z),De.x-_e.x),Re>=1&&($.task=Me.then&&Me.then()||null);continue}$.a+=S*$.speed,re.position.set($.cx+Math.cos($.a)*$.r,$.h+Math.sin($.a*2)*.15,$.cz+Math.sin($.a)*$.r),re.rotation.set(.25,-$.a-Math.PI/2,0),$.shock&&b<$.shock&&(re.position.y+=Math.abs(Math.sin(b/60))*.3)}for(let $ of js){b>$.next&&($.at=($.at+5+Math.floor(Math.random()*20))%e.tiles.length,$.next=b+25e3+Math.random()*2e4);let re=O.spot($.at,5);$.obj.position.x+=(re.x+.25-$.obj.position.x)*Math.min(1,S*1.5),$.obj.position.z+=(re.z+.2-$.obj.position.z)*Math.min(1,S*1.5),$.obj.position.y=O.tileTop}let P=b<qr,J=Math.floor(b/160)%2;Xr[0].material.emissiveIntensity=P&&J?9:.15,Xr[1].material.emissiveIntensity=P&&!J?9:.15},siren(){qr=performance.now()+3500},shock(){for(let S of ni)S.shock=performance.now()+1500},steal(S,b){let O=ni.find(re=>!re.task);if(!O||!S)return;let P=O.obj.position.clone(),J=()=>se(S.position.x,S.position.y+.55,S.position.z),$=se(S.position.x+6,4.5,S.position.z-5);O.task={from:P,to:J,t0:performance.now(),ms:900,arc:.5,then:()=>{let re=b();return O.obj.add(re),re.position.set(.1,-.12,0),{from:O.obj.position.clone(),to:()=>$,t0:performance.now(),ms:1600,arc:1,then:()=>(It([re]),{from:$,to:()=>se(O.cx+O.r,O.h,O.cz),t0:performance.now(),ms:1500})}}}}}}var Sn=.15,Hs=-10,zs=-17,bn=200,Co=236,Os=null;function bm(){if(Os)return Os;Os=new Float32Array(bn*Co);for(let r=0;r<Co;r++)for(let e=0;e<bn;e++)Os[r*bn+e]=-Pt(Hs+e*Sn,zs+r*Sn);return Os}function Tm(r,e,t=[]){let n=-Pt(r,e);for(let i of t)n=Math.min(n,Math.hypot(i.x-r,i.z-e)-i.r);return n}function _h(r,e,t=[],n=.21){let i=bm(),s=new Float32Array(i);for(let M of t){let E=M.r+2;for(let T=Math.max(0,Math.floor((M.z-E-zs)/Sn));T<=Math.min(Co-1,Math.ceil((M.z+E-zs)/Sn));T++)for(let R=Math.max(0,Math.floor((M.x-E-Hs)/Sn));R<=Math.min(bn-1,Math.ceil((M.x+E-Hs)/Sn));R++){let L=T*bn+R;s[L]=Math.min(s[L],Math.hypot(Hs+R*Sn-M.x,zs+T*Sn-M.z)-M.r)}}let a=M=>[Hs+M%bn*Sn,zs+Math.floor(M/bn)*Sn],o=([M,E])=>{let T=-1,R=1/0;for(let L=0;L<s.length;L++){if(s[L]<n+.02)continue;let[W,F]=a(L),k=Math.hypot(W-M,F-E);k<R&&(R=k,T=L)}return T},l=o(r),c=o(e);if(l<0||c<0)return null;let h=new Float32Array(s.length).fill(1/0),u=new Int32Array(s.length).fill(-1),d=new Uint8Array(s.length),p=[[0,l]],f=M=>{p.push(M);let E=p.length-1;for(;E>0;){let T=E-1>>1;if(p[T][0]<=p[E][0])break;[p[T],p[E]]=[p[E],p[T]],E=T}},y=()=>{let M=p[0],E=p.pop();if(p.length){p[0]=E;let T=0;for(;;){let R=2*T+1;if(R>=p.length||(R+1<p.length&&p[R+1][0]<p[R][0]&&R++,p[T][0]<=p[R][0]))break;[p[R],p[T]]=[p[T],p[R]],T=R}}return M},[m,_]=a(c);for(h[l]=0;p.length;){let M=y()[1];if(M===c)break;if(d[M])continue;d[M]=1;let E=M%bn,T=Math.floor(M/bn);for(let R=-1;R<=1;R++)for(let L=-1;L<=1;L++){let W=E+L,F=T+R;if(!L&&!R||W<0||F<0||W>=bn||F>=Co)continue;let k=F*bn+W;if(s[k]<n||d[k])continue;let j=h[M]+Math.hypot(L,R)*Sn*(1+1.6*Math.max(0,1-(s[k]-n)/.8));if(j<h[k]){h[k]=j,u[k]=M;let[D,G]=a(k);f([j+Math.hypot(D-m,G-_),k])}}}if(u[c]<0&&l!==c)return null;let g=[];for(let M=c;M>=0;M=u[M])g.unshift(a(M));let x=(M,E,T=n-.02)=>{let R=Math.ceil(Math.hypot(E[0]-M[0],E[1]-M[1])/.05);for(let L=0;L<=R;L++)if(Tm(M[0]+(E[0]-M[0])*L/R,M[1]+(E[1]-M[1])*L/R,t)<T)return!1;return!0},v=[g[0]];for(let M=0;M<g.length-1;){let E=Math.min(g.length-1,M+48);for(;E>M+1&&!x(g[M],g[E]);)E--;v.push(g[E]),M=E}g=v;for(let M=0;M<3;M++){let E=wm(g);if(E.some((T,R)=>R>0&&!x(E[R-1],T,n-.03)))break;g=E}return Bs(g,.12)}function wm(r){if(r.length<3)return r;let e=[r[0]];for(let t=0;t<r.length-1;t++){let[n,i]=[r[t],r[t+1]];e.push([n[0]*.75+i[0]*.25,n[1]*.75+i[1]*.25],[n[0]*.25+i[0]*.75,n[1]*.25+i[1]*.75])}return e.push(r[r.length-1]),e}function Bs(r,e){let t=[r[0].slice()],n=e;for(let a=0;a<r.length-1;a++){let[o,l]=r[a],[c,h]=r[a+1],u=Math.hypot(c-o,h-l),d=n;for(;d<=u;)t.push([o+(c-o)*d/u,l+(h-l)*d/u]),d+=e;n=d-u}let i=r[r.length-1],s=t[t.length-1];return Math.hypot(i[0]-s[0],i[1]-s[1])>.01&&t.push(i.slice()),t}function Mh(r,e,{ground:t=()=>0,half:n=.25,margin:i=.2,slope:s=.7,ends:a=null}={}){let o=r.length,l=new Float64Array(o),c=[0];for(let p=1;p<o;p++)c.push(c[p-1]+Math.hypot(r[p][0]-r[p-1][0],r[p][1]-r[p-1][1]));if(r.forEach(([p,f],y)=>{let m=t(p,f)+i;for(let _ of e)Math.hypot(_.x-p,_.z-f)<_.r+n&&(m=Math.max(m,_.h+i));l[y]=m}),a)for(let p=0;p<o;p++)c[p]<.35?l[p]=Math.min(l[p],a[0]):c[o-1]-c[p]<.35&&(l[p]=Math.min(l[p],a[1]));let h=Float64Array.from(l),u=()=>{for(let p=1;p<o;p++)h[p]=Math.max(h[p],h[p-1]-s*(c[p]-c[p-1]));for(let p=o-2;p>=0;p--)h[p]=Math.max(h[p],h[p+1]-s*(c[p+1]-c[p]))},d=a?[h[0],h[o-1]]:null;u();for(let p=0;p<6;p++){let f=Float64Array.from(h);for(let y=1;y<o-1;y++)h[y]=Math.max(l[y],(f[y-1]+2*f[y]+f[y+1])/4)}if(d)for(let p=0;p<o;p++){let f=c[p],y=c[o-1]-f;f<.35?h[p]=d[0]+(h[p]-d[0])*Math.sqrt(f/.35):y<.35&&(h[p]=d[1]+(h[p]-d[1])*Math.sqrt(y/.35))}return Array.from(h)}function ei(r,e,t,{half:n=.24,margin:i=.15,least:s=.35,most:a=6}={}){let o=Math.hypot(e.x-r.x,e.z-r.z),l=Math.max(8,Math.ceil(o/.1)),c=s;for(let h=1;h<l;h++){let u=h/l,d=r.x+(e.x-r.x)*u,p=r.z+(e.z-r.z)*u;if(!(o*Math.min(u,1-u)<.5))for(let f of t)Math.hypot(f.x-d,f.z-p)<f.r+n&&(c=Math.max(c,(f.h+i-(r.y+(e.y-r.y)*u))/Math.sin(Math.PI*u)))}return Math.min(a,c)}function X0(r,{speed:e=3,accel:t=2.2}={}){let n=Math.min(r/2,e*e/(2*t)),i=Math.sqrt(2*t*n),s=i/t,a=(r-2*n)/i;return{total:2*s+a,at:o=>o<s?t*o*o/2:o<s+a?n+i*(o-s):r-t*Math.max(0,2*s+a-o)**2/2}}function Eh(r){let e=[0];for(let i=1;i<r.length;i++)e.push(e[i-1]+Math.hypot(r[i][0]-r[i-1][0],r[i][1]-r[i-1][1],r[i][2]-r[i-1][2]));let t=e[e.length-1],n=i=>{i=Math.min(t,Math.max(0,i));let s=0,a=e.length-1;for(;a-s>1;){let l=s+a>>1;e[l]<=i?s=l:a=l}let o=e[a]>e[s]?(i-e[s])/(e[a]-e[s]):0;return[0,1,2].map(l=>r[s][l]+(r[a][l]-r[s][l])*o)};return{length:t,point:n,ahead:(i,s=.3)=>{let a=n(i-s),o=n(i+s);return[o[0]-a[0],o[1]-a[1],o[2]-a[2]]}}}var Po="\uE000",Ah=r=>si(r,Jr);function Fs(r,e,t){let n=Math.cos(r.rot),i=Math.sin(r.rot);return[r.x+e*n+t*i,r.z-e*i+t*n]}var ti='"Avenir Next", "Segoe UI", system-ui, sans-serif',Br={transit:{ferry:"\u26F4\uFE0F",train:"\u{1F686}",metro:"\u{1F687}",cablecar:"\u{1F6A1}",tram:"\u{1F68A}",funicular:"\u{1F69E}",_:"\u{1F689}"},shop:["\u2615","\u{1F37D}\uFE0F","\u{1F9F6}","\u{1F6CD}\uFE0F","\u{1F697}"],card:{kismet:"\u{1F9FF}",mahalle:"\u{1F3D8}\uFE0F",fortune:"?",gazette:"\u2709"},tax:"\u2696",utility:"\u26A1",start:"\u279C",jail:"\u{1F693}",park:"\u{1FAD6}",gotojail:"\u{1F46E}"},Rm={Kafe:"\u2615",Restoran:"\u{1F37D}\uFE0F",Hal\u0131c\u0131:"\u{1F9F6}",AVM:"\u{1F6CD}\uFE0F","Oto galeri":"\u{1F697}"};function nd(r,e,t,n){r.save(),r.lineWidth=n*.55,r.strokeStyle="#b7772f",r.beginPath(),r.arc(e,t,n*.72,0,Math.PI*2),r.stroke(),r.fillStyle="#f7e3b4";for(let i=0;i<7;i++){let s=i/7*Math.PI*2;r.fillRect(e+Math.cos(s)*n*.72-n*.07,t+Math.sin(s)*n*.72-n*.04,n*.14,n*.08)}r.restore()}function Am(r,e,t,n,i){let s=String(e).split(Po);if(s.length===1){r.fillText(e,t,n);return}let a=r.measureText(s[0]).width,o=a+i*1.05,l=t-o/2;r.textAlign="left",r.fillText(s[0],l,n),nd(r,l+a+i*.55,n,i*.45),r.textAlign="center"}function Cm(r,e,t){let n=e.split(" "),i=[],s="";for(let a of n){let o=s?`${s} ${a}`:a;r.measureText(o).width>t&&s?(i.push(s),s=a):s=o}return s&&i.push(s),i}var ks=440,Pm=(r,e,t)=>(typeof e.name=="string"?r.id==="istanbul":Jr==="tr")?t.toLocaleUpperCase("tr"):t.toUpperCase();function q0(r,e,t){let n=r.tiles[e],i=Math.round(t.w*ks),s=Math.round(t.d*ks),a=document.createElement("canvas");a.width=i,a.height=s;let o=a.getContext("2d"),l=ks,c=r.currency==="simit";(_=>{o.fillStyle=_,o.fillRect(0,0,i,s)})({start:"#f3dc97",jail:"#cfdcf0",park:"#cfe5c4",gotojail:"#f2c9bf"}[t.corner?n.kind:""]||"#f4ecdb"),o.textAlign="center",o.textBaseline="middle";let u="#23211f",d="#6a6152",p=Pm(r,n,Ah(n.name||(r.decks[n.deck]||{}).name)),f=(_,g)=>`${_} ${Math.round(g*l)}px ${ti}`;if(t.corner){let _=n.kind,g=_==="jail";if(g){let v=i*(.5-Jt.w/2),M=s*(.5+Jt.back),E=i*Jt.w,T=s*(Jt.front-Jt.back);o.fillStyle="#5f6a7b",o.fillRect(v,M,E,T);for(let R=0;R<8;R++)for(let L=0;L<4;L++)o.fillStyle=`rgba(${(R*5+L*3)%4?"255,255,255":"10,16,26"},${.04+(R*7+L*11)%5*.018})`,o.fillRect(v+R*E/8+2,M+L*T/4+2,E/8-4,T/4-4)}o.fillStyle=u,o.font=f(400,.5),o.fillText(Br[_]||"\u2605",i/2,g?s*.63:s*.38),o.font=f(900,p.length>10?.17:.22),o.fillText(p,i/2,g?s*.8:s*.69);let x=Ah(n.note);x&&(o.fillStyle=d,o.font=f(600,.12),o.fillText(x,i/2,g?s*.9:s*.84))}else{let _=n.group&&r.groups[n.group],g=l*.075,x=l*.06;if(n.kind==="lot"||n.kind==="transit"||n.kind==="shop"||n.kind==="utility"){let E=n.kind==="lot"?s*.18:s*.07,T=new Ce(_.color),R=o.createLinearGradient(0,g,0,g+E);R.addColorStop(0,`#${T.clone().offsetHSL(0,0,.03).getHexString()}`),R.addColorStop(1,`#${T.clone().offsetHSL(0,0,-.04).getHexString()}`),o.fillStyle=R,o.fillRect(g,g,i-2*g,E),x=g+E}o.fillStyle=u,o.font=f(800,p.length>12?.112:.128),Cm(o,p,i-2*g-l*.06).forEach((E,T)=>o.fillText(E,i/2,x+l*.15+T*l*.145));let v=null;n.kind==="transit"?v=Br.transit[n.vehicle]||Br.transit._:n.kind==="shop"?v=Rm[si(n.name,"tr")]||"\u{1F3EA}":n.kind==="card"?v=Br.card[n.deck]||"?":n.kind==="tax"?v=/otopark/i.test(si(n.name,"tr"))?"\u{1F17F}\uFE0F":/köprü/i.test(si(n.name,"tr"))?"\u{1F309}":Br.tax:n.kind==="utility"&&(v=Br.utility),v&&(o.font=f(400,.4),o.fillText(v,i/2,s*.6));let M=n.price?n.price:n.kind==="tax"?n.amount:null;M&&(o.fillStyle=d,o.font=f(700,.14),Am(o,c?`${M}${Po}`:`$${M}`,i/2,s-l*.19,l*.14))}o.strokeStyle="rgba(50,40,28,0.5)",o.lineWidth=l*.008,o.strokeRect(l*.045,l*.045,i-l*.09,s-l*.09);for(let _=0;_<900;_++){o.fillStyle=Math.random()<.6?"rgba(90,70,40,0.045)":"rgba(255,255,255,0.07)";let g=1+Math.random()*2.4;o.fillRect(Math.random()*i,Math.random()*s,g,g)}let y=o.createRadialGradient(i/2,s/2,Math.min(i,s)*.42,i/2,s/2,Math.hypot(i,s)/2);y.addColorStop(0,"rgba(120,90,50,0)"),y.addColorStop(1,"rgba(120,90,50,0.16)"),o.fillStyle=y,o.fillRect(0,0,i,s);let m=new ut(a);return m.colorSpace=Ke,m.anisotropy=16,m}var Ch=.07,Gs=.014,Sh=new Map;function Io(r,e,t){let n=new Wt,i=r/2,s=e/2;return n.moveTo(-i+t,-s),n.lineTo(i-t,-s),n.absarc(i-t,-s+t,t,-Math.PI/2,0),n.lineTo(i,s-t),n.absarc(i-t,s-t,t,0,Math.PI/2),n.lineTo(-i+t,s),n.absarc(-i+t,s-t,t,Math.PI/2,Math.PI),n.lineTo(-i,-s+t),n.absarc(-i+t,-s+t,t,Math.PI,Math.PI*1.5),n}function Y0(r,e){let t=`${r}x${e}`;if(Sh.has(t))return Sh.get(t);let n=new nn(Io(r,e,.07),{depth:Ch-2*Gs,bevelEnabled:!0,bevelThickness:Gs,bevelSize:Gs,bevelOffset:-Gs,bevelSegments:3,curveSegments:8}),i=n.attributes.uv,s=n.attributes.position;for(let a=0;a<i.count;a++)i.setXY(a,s.getX(a)/r+.5,s.getY(a)/e+.5);return n.translate(0,0,Gs),n.rotateX(-Math.PI/2),Sh.set(t,Kt(n)),n}var bh=new Map;function Th(r,e){let t=`${r}x${e}`;return bh.has(t)||bh.set(t,Kt(new Ti(Io(r,e,.07),8).rotateX(-Math.PI/2))),bh.get(t)}var wh=new Map;function Im(r,e){let t=`${r}x${e}`;if(!wh.has(t)){let n=Io(r-.02,e-.02,.07);n.holes.push(Io(r-.2,e-.2,.04)),wh.set(t,Kt(new Ti(n,8).rotateX(-Math.PI/2)))}return wh.get(t)}var Fr={shade:.004,owned:.007,group:.0085,auction:.01,hover:.013,mine:.016};function Lm(r=.5,e=.075){let t=new ge(r,r,r,12,12,12),n=t.attributes.position,i=t.attributes.normal,s=r/2-e,a=new A,o=new A;for(let l=0;l<n.count;l++)a.fromBufferAttribute(n,l),o.set(Math.max(-s,Math.min(s,a.x)),Math.max(-s,Math.min(s,a.y)),Math.max(-s,Math.min(s,a.z))),a.sub(o).normalize(),i.setXYZ(l,a.x,a.y,a.z),n.setXYZ(l,o.x+a.x*e,o.y+a.y*e,o.z+a.z*e);return t}function Dm(r){let e=t=>{let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d");i.fillStyle=t?"#fff":"#f6f0e2",i.fillRect(0,0,256,256);let s=72,a=128,o=184,l={1:[[a,a]],2:[[s,s],[o,o]],3:[[s,s],[a,a],[o,o]],4:[[s,s],[o,s],[s,o],[o,o]],5:[[s,s],[o,s],[a,a],[s,o],[o,o]],6:[[s,s-6],[o,s-6],[s,a],[o,a],[s,o+6],[o,o+6]]}[r];for(let[h,u]of l){let d=r===1?27:21,p=i.createRadialGradient(h,u,0,h,u,d);if(t)p.addColorStop(0,"#333"),p.addColorStop(.7,"#555"),p.addColorStop(1,"#fff");else{let f=r===1?"#a32418":"#1b1a1d";p.addColorStop(0,f),p.addColorStop(.9,f),p.addColorStop(1,r===1?"#7c1c12":"#3a3836")}i.fillStyle=p,i.beginPath(),i.arc(h,u,d,0,Math.PI*2),i.fill()}let c=new ut(n);return t||(c.colorSpace=Ke),c.anisotropy=8,c};return new rt({map:e(!1),bumpMap:e(!0),bumpScale:2.2,roughness:.28,clearcoat:.8,clearcoatRoughness:.12})}var Um=[2,5,1,6,3,4],Z0={1:new gt(0,0,0),6:new gt(Math.PI,0,0),2:new gt(0,0,Math.PI/2),5:new gt(0,0,-Math.PI/2),3:new gt(-Math.PI/2,0,0),4:new gt(Math.PI/2,0,0)},id={value:0},Nm=600,Om=1e3/30;function Hm(r){r.uniforms.uGlitter=id,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vGl;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGl = position;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uGlitter; varying vec3 vGl;
      float glHash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { vec3 q = vGl * 52.0, c = floor(q); float a = glHash(c), b = glHash(c.zxy + 7.0);
        float fine = 1.0 - smoothstep(0.35, 1.1, max(max(fwidth(q.x), fwidth(q.y)), fwidth(q.z)));
        float flash = pow(0.5 + 0.5 * sin(uGlitter * (1.4 + b * 2.6) + a * 80.0 + dot(normalize(vViewPosition), vec3(19.0, 23.0, 17.0)) * (3.0 + b * 5.0)), 22.0);
        totalEmissiveRadiance += (diffuseColor.rgb * 0.6 + 0.4) * step(0.55, a) * smoothstep(0.5, 0.15, length(fract(q) - 0.5)) * flash * fine * 9.0; }`)}function Ph(r,e={},t=1){let n=zo[r],i=new Ce(n==="gold"?"#eeaa22":n?"#eef3f8":r).multiplyScalar(t),s=new rt({color:i,...e,...n?{metalness:.62,roughness:.25,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:2.4,emissive:i,emissiveIntensity:.12}:{}});return n&&(s.onBeforeCompile=Hm),s}function zm(r,e){let t=Ph(e,{metalness:.15,roughness:.32,clearcoat:1,clearcoatRoughness:.08}),n=Ph(e,{metalness:.45,roughness:.32,clearcoat:.8},zo[e]?.92:.72),i=(o,l={})=>new rt({color:o,roughness:.42,clearcoat:.6,clearcoatRoughness:.15,...l}),s=new Ye,a=(o,l=t,c=0,h=0,u=0,d=0,p=0,f=0)=>{let y=new Pe(o,l);return y.position.set(c,h,u),y.rotation.set(d,p,f),y.castShadow=!0,s.add(y),y};switch(a(new xe(.2,.22,.05,56),n,0,.025),r){case"boat":{a(new xe(.2,.12,.12,16,1,!1,0,Math.PI),t,0,.12,0,0,0,Math.PI/2).scale.set(1,1.6,1),a(new xe(.012,.012,.34,8),n,0,.3),a(new dt(.13,.28,3),t,.04,.32,0,0,Math.PI/2,0).scale.set(.25,1,1);break}case"kite":a(new Si(.17),t,0,.3,0).scale.set(.75,1.25,.2),a(new xe(.01,.01,.2,6),n,0,.11);break;case"lantern":a(new xe(.1,.13,.24,6),t,0,.18),a(new dt(.13,.1,6),n,0,.35),a(new qe(.05,.012,8,16),n,0,.43);break;case"anchor":a(new xe(.025,.025,.32,10),t,0,.22),a(new qe(.045,.015,8,16),t,0,.42),a(new qe(.13,.025,8,20,Math.PI),t,0,.16,0,Math.PI,0,0),a(new ge(.18,.025,.03),t,0,.33);break;case"tram":a(new ge(.34,.17,.17),t,0,.15),a(new ge(.3,.05,.18),n,0,.26);break;case"simitcart":{a(new ge(.34,.16,.2),t,0,.17),a(new ge(.3,.14,.18),i("#e6f2fa",{transparent:!0,opacity:.55,roughness:.1}),0,.32);for(let[o,l]of[[-.08,.31],[.07,.31],[0,.36]])a(new qe(.045,.018,12,28),i("#9a5a1e",{clearcoat:.2}),o,l,0,0,0,0);for(let o of[-.11,.11])a(new xe(.06,.06,.02,12),i("#222"),-.1,.08,o,Math.PI/2,0,0);a(new xe(.01,.01,.16,6),n,.2,.18,0,0,0,.9);break}case"cat":{a(new Ie(.13,32,24),t,0,.17,0).scale.set(1.25,.95,.9),a(new Ie(.09,28,20),t,.12,.31,0);for(let o of[-.045,.045])a(new dt(.03,.08,4),t,.13,.41,o);a(new xe(.016,.016,.26,6),t,-.16,.25,0,0,0,.5);for(let o of[-.03,.03])a(new Ie(.012,6,6),i("#1c1c1c"),.2,.33,o);break}case"gull":{a(new Ie(.11,28,20),i("#ffffff"),0,.22,0).scale.set(1.5,.85,.85),a(new Ie(.07,24,18),i("#ffffff"),.14,.31,0),a(new dt(.025,.1,6),i("#f2b632"),.24,.3,0,0,0,-Math.PI/2);for(let o of[-.12,.12])a(new Ie(.1,24,12),t,-.03,.25,o*.82,o>0?.5:-.5,0,.15).scale.set(1.25,.6,.22);a(new dt(.05,.1,4),t,-.17,.24,0,0,0,Math.PI/2);break}case"taxi":{a(new ge(.36,.12,.2),i("#f6c21c",{metalness:.3}),0,.13),a(new ge(.2,.1,.18),i("#f6c21c",{metalness:.3}),-.02,.24),a(new ge(.1,.05,.08),t,-.02,.32),a(new ge(.38,.03,.205),i("#222"),0,.12);for(let[o,l]of[[.11,.1],[-.11,.1],[.11,-.1],[-.11,-.1]])a(new xe(.045,.045,.03,12),i("#1a1a1a"),o,.07,l,Math.PI/2,0,0);break}case"tea":S0(s,a,t,i);break;case"fishboat":{a(new xe(.22,.12,.12,14,1,!1,0,Math.PI),t,0,.13,0,0,0,Math.PI/2).scale.set(1,1.6,1),a(new ge(.24,.08,.14),i("#3a3a3a"),0,.22),a(new ge(.16,.025,.05),i("#e3a15a"),0,.28),a(new Ie(.05,8,6),i("#d6d6d6",{transparent:!0,opacity:.6}),.02,.4);break}default:{if(F0(r,s,{mat:t,m:i}))break;a(new Si(.16),t,0,.27).scale.set(1,1.3,1),t.flatShading=!0}}return s}var J0=.55,Rh=null;function Bm(r){if(!Rh){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),i=n.createRadialGradient(64,64,16,64,64,64);i.addColorStop(0,"rgba(255,255,255,.95)"),i.addColorStop(.45,"rgba(255,255,255,.42)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,128,128),Rh=Kt(new ut(t))}let e=new Pe(new Rt(1,1).rotateX(-Math.PI/2),new bt({color:r,map:Rh,transparent:!0,opacity:0,depthWrite:!1,blending:Qu}));return e.position.y=.026,e.userData.halo=!0,e.visible=!1,e}var $0=["#e8a87c","#d9b38c","#a3c4bc","#e3d26f","#c97b84","#8fb8de","#b9a2d6"];function K0(r,e,t=0){let n=new Ye,i=(o,l,c,h,u)=>{let d=new Pe(o,l);return d.position.set(c,h,u),d.castShadow=!0,n.add(d),d};if(!e){if(r){let o=new Be({color:"#d2493b",roughness:.5});i(new ge(.3,.42,.22),o,0,.21,0),i(new ge(.16,.12,.12),o,0,.48,0)}else{let o=new Be({color:"#2fa35a",roughness:.5});i(new ge(.16,.12,.15),o,0,.06,0),i(new dt(.13,.09,4),o,0,.165,0).rotation.y=Math.PI/4}return n}if(r){let o=document.createElement("canvas");o.width=32,o.height=96;let l=o.getContext("2d");l.fillStyle="#4b7fa6",l.fillRect(0,0,32,96);for(let u=2;u<96;u+=6)for(let d=2;d<32;d+=6)l.fillStyle=Math.random()<.35?"#ffe9a8":"#9cc7e6",l.fillRect(d,u,4,3);let c=new ut(o);c.colorSpace=Ke;let h=new Be({map:c,metalness:.5,roughness:.15,emissive:"#223344",emissiveIntensity:.3});return i(new ge(.34,.95,.3),h,0,.475,0),i(new ge(.2,.08,.18),new Be({color:"#cfd8df"}),0,.99,0),n}let s=new Be({color:$0[t%$0.length],roughness:.8});i(new ge(.17,.2,.15),s,0,.1,0),i(new ge(.11,.08,.04),s,0,.14,.09),i(new ge(.05,.05,.005),new Be({color:"#fff7d6",emissive:"#ffd27a",emissiveIntensity:.25}),0,.15,.112);let a=i(new dt(.15,.1,4),new Be({color:"#b84a33",roughness:.7}),0,.25,0);return a.rotation.y=Math.PI/4,n}function Q0(r){let e=new Ye,t=(i,s={})=>new Be({color:i,roughness:.5,...s}),n=(i,s,a,o,l)=>{let c=new Pe(i,s);return c.position.set(a,o,l),c.castShadow=!0,e.add(c),c};if(r==="ferry")n(new ge(1.1,.2,.46),t("#ffffff"),0,-.05,0),n(new ge(.66,.16,.4),t("#f2efe6"),-.12,.12,0),n(new ge(.66,.03,.41),t("#2c5d8f"),-.12,.21,0),n(new xe(.05,.05,.25,8),t("#e8c04a"),.14,.32,0);else if(r==="cablecar")n(new ge(.46,.34,.4),t("#e0473b"),0,.12,0),n(new ge(.42,.14,.41),t("#cfe8f6",{transparent:!0,opacity:.7}),0,.2,0),n(new xe(.015,.015,.5,6),t("#444"),0,.55,0);else{let i={train:"#d23a3a",metro:"#2f8f4e",tram:"#c8362f",funicular:"#d9a21b"}[r]||"#888";n(new ge(.78,.22,.36),t(i),0,.02,0),n(new ge(.7,.08,.37),t("#dfeef7",{transparent:!0,opacity:.8}),0,.08,0)}return e}var Gr=r=>r<.5?2*r*r:1-(-2*r+2)**2/2,ed=1200,W1=r=>new Promise(e=>setTimeout(e,r)),Tn={iso:{label:"Isometric",ortho:!0,az:Math.PI/4,pol:Math.acos(1/Math.sqrt(3)),size:7.4,wide:9.8,fixedPol:!0,near:{route:2.6,square:1.7},lean:.4},top:{label:"Top",ortho:!0,az:0,pol:1e-4,size:7.6,wide:7.2,fixedPol:!0,near:{route:2.7,square:1.7},lean:0},tv:{label:"TV",ortho:!1,az:0,pol:1.05,dist:19,near:{route:2.5,square:1.6},nearPol:.45,lean:0}},j1=Object.keys(Tn),td=class{constructor(e,t={}){this.motion=new Hh,this.el=e,this.onTile=t.onTile||(()=>{}),this.onDice=t.onDice||(()=>{}),this.speed=1;let n=Ks();this.renderer=new ja({antialias:!$s[n.level].post,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ku,this.renderer.outputColorSpace=Ke,this.renderer.toneMapping=e0,this.post=new mo(this.renderer),e.appendChild(this.renderer.domElement);let i=this.scene=new Wi;this.persp=new Ut(40,1,.8,320),this.ortho=new xi(-10,10,10,-10,1,260),this.sky=lh(),i.add(this.sky),this.orbit={az:0,pol:.9,zoom:1,tx:0,tz:0},this.layout=Bo({tiles:new Array(40).fill({})});let s=this.sun=new so("#ffe3bf",3.4);s.castShadow=!0,s.shadow.autoUpdate=!1,s.shadow.bias=-3e-4,s.shadow.normalBias=.025,s.shadow.radius=2.2,i.add(s,s.target),this.mapRoot=new Ye,i.add(this.mapRoot),this.tileMeshes=[],this.hl=new Pe(Th(1,1),new bt({color:"#ffd24a",transparent:!0,opacity:.3,depthWrite:!1})),this.hl.visible=!1,i.add(this.hl);let a=Um.map(Dm),o=Lm();this.dice=[0,1].map(()=>{let c=new Pe(o,a);return c.castShadow=c.receiveShadow=!0,i.add(c),c}),this.tokens=new Map,this.owners=new Map,this.shades=new Map,this.mine=new Map,this.mineMat=new bt({color:new Ce("#ffc93c").multiplyScalar(1.5),transparent:!0,depthWrite:!1}),Kt(this.mineMat),this.houses=new Map,this.floats=[],this.ring=new Pe(new bi(.24,.3,40),new bt({color:"#ffe27a",transparent:!0,opacity:.9,side:$e,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.visible=!1,i.add(this.ring),this.turnId=null,this.turnLight=new Ir("#ffe2b0",0,3.2,1.4),i.add(this.turnLight);let l="";try{l=localStorage.getItem("parcel.view")||""}catch{}this.viewName=Tn[l]?l:"tv",this.camera=Tn[this.viewName].ortho?this.ortho:this.persp,this.night=0,this.nightTo=0;try{this.nightTo=this.night=localStorage.getItem("parcel.night")==="1"?1:0}catch{}this.setQuality(n.level),this.watch=n.fixed?null:new Cs(n.level,c=>this.setQuality(c)),this.bindInput(),this.resize(),new ResizeObserver(()=>this.resize()).observe(e),this.clock=new ao,this.show(!0)}show(e){this.renderer.domElement.style.display=e?"block":"none",this.renderer.setAnimationLoop(e?t=>{let n=this.idleSpin?100:this.calm(t)?Om:0;n&&t-(this.lastFrame||0)<n-2||(this.lastFrame=t,this.frame())}:null),e&&(this.resize(),this.watch&&this.watch.reset(5e3))}setQuality(e){this.quality=$s[e],ks!==this.quality.text&&(ks=this.quality.text,this.relabel()),this.gfx=e,this.sun.shadow.mapSize.set(this.quality.shadow,this.quality.shadow),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.sun.shadow.needsUpdate=!0,this.size&&this.resize()}chooseQuality(){let e=Ks();this.watch=e.fixed?null:new Cs(e.level,t=>this.setQuality(t)),e.level!==this.gfx&&this.setQuality(e.level)}setNight(e,t=!1,n=!0){if(this.nightTo=e?1:0,n)try{localStorage.setItem("parcel.night",e?"1":"0")}catch{}t&&this.applyNight(this.nightTo)}applyNight(e){this.night=e;let t=(i,s)=>i+(s-i)*e,n=this.layout.kind==="route";this.scene.environment=n?e>.5?this.envNight:this.envSky:this.envRoom,this.scene.environmentIntensity=n?e>.5?.55+(e-.5)*1.5:.85*(1-e*1.75):t(.42,.2),this.sky.material.uniforms.uNight.value=e,this.scene.fog&&this.scene.fog.isFogExp2&&(this.scene.fog.color.copy(xo).lerp(R0,e),this.sky.material.uniforms.uGround.value.copy(this.scene.fog.color)),this.sun.color.set(n?"#ffe0b8":"#ffe2bd").lerp(new Ce(n?"#8fb0ff":"#ffb870"),e),this.mineMat.color.set("#ffc93c").multiplyScalar(1.5+e*1.6),this.sun.intensity=n?t(4,1):t(1.9,1.5),this.setExposure(n?t(1.32,1.25):t(.8,.95)),this.post.bloom=t(.22,.42);for(let i of this.tileMeshes)i.material[0].emissiveIntensity=e*(n?.62:.22);for(let i of this.tokens.values())this.lightUp(i.obj,J0);for(let i of this.owners.values())this.lightUp(i,.9);for(let i of this.houses.values())this.lightUp(i,.5);this.jail&&this.jail.setNight(e),this.art&&this.art.setNight(e)}lightUp(e,t){let n=this.night*t;e.traverse(i=>{let s=i.material;if(!s||!s.emissive||i.userData.halo||i.userData.own)return;s.userData.day||(s.userData.day={e:s.emissive.clone(),i:s.emissiveIntensity,map:s.emissiveMap});let a=s.userData.day;n>0?(s.emissive.copy(s.color),s.emissiveIntensity=n,s.map&&!s.emissiveMap&&(s.emissiveMap=s.map,s.needsUpdate=!0)):(s.emissive.copy(a.e),s.emissiveIntensity=a.i,s.emissiveMap!==a.map&&(s.emissiveMap=a.map,s.needsUpdate=!0))}),e.traverse(i=>{i.userData.halo&&(i.visible=this.night>0,i.material.opacity=this.night*.85)})}setExposure(e){this.post.exposure=e,this.renderer.toneMappingExposure=e*.6}setMap(e){if(this.map&&this.map.id===e.id)return;this.map=e;for(let a of this.tokens.values())this.dropToken(a);this.tokens.clear();for(let a of[this.owners,this.shades,this.houses,this.mine])It(a.values()),a.clear();this.clearAuction(),this.showOwned(null),this.selectGroup(null),this.art?.dispose(),It([...this.mapRoot.children]),this.signs=[],this.highlight(-1),this.selected=-1,this.tileMeshes=[],this.art=null,this.layout=e.shape==="route"?zh(e):Bo(e);let t=this.layout;t.kind==="route"?(this.art=j0(this.mapRoot,t,e),t.diceY=.275,this.envSky=this.envSky||ch(this.renderer,"#27505f"),this.envNight=this.envNight||ch(this.renderer,"#0a1420",1),this.scene.background=null,this.sky.visible=!0,this.scene.fog=new Xa(xo.clone(),.0088)):(this.buildSquareScenery(),t.diceY=.25,this.envRoom=this.envRoom||A0(this.renderer),this.scene.environment=this.envRoom,this.scene.background=new Ce("#17120e"),this.sky.visible=!1,this.scene.fog=new qa("#17120e",34,80));let n=t.top-Ch/2;this.tileTop=n+Ch;let i=new Be({color:"#d8c9a8",roughness:.85});t.tiles.forEach((a,o)=>{let l=new rt({map:q0(e,o,a),emissive:"#ffffff",emissiveIntensity:0,bumpMap:ah(),bumpScale:.25,roughness:.62,clearcoat:.22,clearcoatRoughness:.45});l.emissiveMap=l.map;let c=new Pe(Y0(a.w,a.d),[l,i]);c.position.set(a.x,n,a.z),c.rotation.y=a.rot,c.receiveShadow=!0,c.castShadow=!0,c.userData.i=o,this.mapRoot.add(c),this.tileMeshes.push(c)}),this.jail=e.jailTile>=0?W0(this.mapRoot,t.tiles[e.jailTile],this.tileTop):null,this.cableway=null,this.art&&this.buildCableway();let s=t.kind==="route"?17.5:10;Object.assign(this.sun.shadow.camera,{left:-s,right:s,top:s,bottom:-s,near:1,far:90}),this.sun.position.set(t.center[0],0,t.center[1]).addScaledVector(go,45),this.sun.target.position.set(t.center[0],0,t.center[1]),this.sun.shadow.camera.updateProjectionMatrix(),this.placeDice(),this.applyNight(this.night),this.resetCamera()}relabel(){if(!(!this.map||!this.tileMeshes.length)&&(this.tileMeshes.forEach((e,t)=>{let n=e.material[0].map;e.material[0].map=e.material[0].emissiveMap=q0(this.map,t,this.layout.tiles[t]),e.material[0].needsUpdate=!0,n.dispose()}),this.layout.kind!=="route"))for(let[e,t]of this.signs||[])t(),e.needsUpdate=!0}buildSquareScenery(){let e=this.mapRoot;this.signs=[];let t=new Pe(new Zt(70,64),yo("#4a2f1d",[9,9]));t.rotation.x=-Math.PI/2,t.position.y=-.38,t.receiveShadow=!0,e.add(t);let n=new Pe(Y0($r+.6,$r+.6).clone().scale(1,5,1),[yo("#8a5a34",[2,2]),yo("#6d4526",[3,1])]);n.position.y=-.36,n.castShadow=!0,n.receiveShadow=!0,e.add(n);let i=1024,s=document.createElement("canvas");s.width=s.height=i*2;let a=s.getContext("2d"),o=()=>{a.setTransform(2,0,0,2,0,0);let h=a.createRadialGradient(i/2,i/2,i*.05,i/2,i/2,i*.62);h.addColorStop(0,"#dcefe4"),h.addColorStop(1,"#b9d8c8"),a.fillStyle=h,a.fillRect(0,0,i,i),a.translate(i/2,i/2),a.strokeStyle="rgba(40,90,80,0.18)",a.lineWidth=4;for(let u=1;u<6;u++)a.beginPath(),a.arc(0,0,u*90,0,Math.PI*2),a.stroke();a.rotate(-Math.PI/4),a.fillStyle="#1f3a4a",a.font=`900 150px ${ti}`,a.textAlign="center",a.textBaseline="middle",a.fillText("PARCEL",0,-20),a.font=`600 34px ${ti}`,a.fillStyle="#2f5d63",a.fillText(Jr==="tr"?"\xB7  L\u0130MAN \u015EEHR\u0130 T\u0130CARET OYUNU  \xB7":"\xB7  THE HARBOUR CITY TRADING GAME  \xB7",0,90)};o();let l=new ut(s);this.signs.push([l,o]),l.colorSpace=Ke;let c=new Pe(new Rt($r,$r),new rt({map:l,bumpMap:ah(),bumpScale:.2,roughness:.7,clearcoat:.2}));c.rotation.x=-Math.PI/2,c.position.y=-.002,c.receiveShadow=!0,e.add(c);for(let[h,u,d]of[["fortune",-2.7,-2.7],["gazette",2.7,2.7]]){let p=this.map.decks[h],f=document.createElement("canvas");f.width=512,f.height=320;let y=f.getContext("2d");y.scale(2,2);let m=()=>{y.fillStyle=p.color,y.fillRect(0,0,256,160),y.strokeStyle="#fff8",y.lineWidth=6,y.strokeRect(10,10,236,140),y.fillStyle="#fff",y.font=`800 38px ${ti}`,y.textAlign="center",y.textBaseline="middle",y.fillText(Ah(p.name).toLocaleUpperCase(Jr),128,80)};m();let _=new ut(f);this.signs.push([_,m]),_.colorSpace=Ke;let g=new Be({color:"#f4f0e6"}),x=new Pe(new ge(1.6,.12,1),[g,g,new Be({map:_,roughness:.6}),g,g,g]);x.position.set(u,.06,d),x.rotation.y=-Math.PI/4,x.castShadow=!0,e.add(x)}}placeDice(){let[e,t]=this.layout.diceSpot;this.dice.forEach((n,i)=>{n.position.set(e+(i?.4:-.4),this.layout.diceY,t+(i?-.2:.2)),n.quaternion.setFromEuler(Z0[i?3:4])})}resize(){let e=this.el.clientWidth||innerWidth,t=this.el.clientHeight||innerHeight,n=this.quality,i=Fo(n,e,t);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.size={w:e,h:t},n.post&&this.post.setSize(Math.max(2,Math.round(e*i)),Math.max(2,Math.round(t*i)),e*t*i*i>4e6?Math.min(2,n.samples):n.samples),this.persp.aspect=e/t,this.fit=e<t?1+(t/e-1)*1.25:1,this.persp.updateProjectionMatrix()}setView(e){Tn[e]||(e="iso"),this.viewName=e;let t=Tn[e],n=this.layout.center,i=this.turnId?t.near[this.layout.kind]:0,s=i?this.focusPoint():null;Object.assign(this.orbit,{az:s?s.az+t.lean:t.az,pol:i&&t.nearPol?t.nearPol:t.pol,zoom:i||(e==="tv"&&this.layout.kind==="route"?1.5:1),tx:s?s.x:n[0],tz:s?s.z:n[1]+(e==="tv"?.6:0)}),this.camera=t.ortho?this.ortho:this.persp,this.followPause=this.turnPause=0,this.cut=null,this.looking=(this.looking||0)+1;try{localStorage.setItem("parcel.view",e)}catch{}}nextView(){let e=Object.keys(Tn);return this.setView(e[(e.indexOf(this.viewName)+1)%e.length]),Tn[this.viewName].label}resetCamera(){this.setView(this.viewName)}placeCamera(e){let t=this.orbit,n=Tn[this.viewName],i=this.layout.scale,s=this.focusPoint(),a=performance.now();if(s&&a>this.followPause){let h=1-Math.exp(-e*1.7),u=this.layout.center,d=Math.min(1,Math.max(.25,(t.zoom-.6)*.8));t.tx+=(u[0]+(s.x-u[0])*d-t.tx)*h,t.tz+=(u[1]+(s.z-u[1])*d-t.tz)*h}this.straighten(a,n),this.scene.fog&&this.scene.fog.isFogExp2&&(this.scene.fog.density=n.ortho?5e-4:.0088);let o=!n.ortho&&this.layout.kind==="route"?Gr(this.night)*Math.min(1,Math.max(0,(t.pol-.75)/.25)):0,l=Math.min(1.32,t.pol+o*.1);this.skyless=n.ortho||l<.8;let c=new A(Math.sin(l)*Math.sin(t.az),Math.cos(l),Math.sin(l)*Math.cos(t.az));if(n.ortho){let h=this.size?this.size.w/this.size.h:1,u=Math.max(n.size,n.wide/h)*i/t.zoom;Object.assign(this.ortho,{left:-u*h,right:u*h,top:u,bottom:-u}),this.ortho.updateProjectionMatrix(),this.ortho.position.set(t.tx+c.x*70,c.y*70,t.tz+c.z*70),this.ortho.up.set(t.pol<.01?-Math.sin(t.az):0,t.pol<.01?0:1,t.pol<.01?-Math.cos(t.az):0),this.ortho.lookAt(t.tx,0,t.tz)}else{let h=n.dist*i/t.zoom*this.fit*(1-o*.1),u=40+o*6;this.persp.fov!==u&&(this.persp.fov=u,this.persp.updateProjectionMatrix());let d=t.tx+Math.sin(t.az)*o*2.2,p=t.tz+Math.cos(t.az)*o*2.2;this.persp.position.set(d+c.x*h,c.y*h,p+c.z*h),this.persp.up.set(0,1,0),this.persp.lookAt(d,0,p),o&&this.persp.rotateX(o*.112)}}moonOnWater(){let e=this.orbit,t=Tn[this.viewName],n=t.ortho?this.ortho.top:t.dist*this.layout.scale/e.zoom*this.fit*Math.tan(this.persp.fov*Math.PI/360),i=Math.max(.3,Math.cos(e.pol)),s=this.size?this.size.w/this.size.h:1.6,a=-.2*n*s,o=.42*n/i;return[e.tx+Math.cos(e.az)*a-Math.sin(e.az)*o,e.tz-Math.sin(e.az)*a-Math.cos(e.az)*o,n*.085,i,e.az]}straighten(e,t){let n=this.orbit;if(!this.turnId||this.idleSpin||e<this.turnPause||e<(this.nextLook||0))return;this.nextLook=e+400;let i=new A,s=[];for(let c of this.layout.tiles)i.set(c.x,this.tileTop,c.z).project(this.camera),Math.abs(i.x)<.8&&Math.abs(i.y)<.75&&i.z<1&&s.push({f:c,w:1.3-Math.hypot(i.x,i.y)*.8});if(s.length<3)return;let a=s.map(c=>{let h=s.filter(u=>Math.cos(u.f.rot-c.f.rot)>.8);return{n:h.length,w:h.reduce((u,d)=>u+d.w,0),x:h.reduce((u,d)=>u+Math.cos(d.f.rot)*d.w,0),y:h.reduce((u,d)=>u+Math.sin(d.f.rot)*d.w,0)}}).sort((c,h)=>h.w-c.w)[0];if(a.n<3||a.n<s.length*.3)return;let o=Math.atan2(a.y,a.x)+t.lean-n.az,l=Math.atan2(Math.sin(o),Math.cos(o));if(Math.abs(l)<.6){this.askew=0;return}this.askew=this.askew||e,!(e-this.askew<1800)&&(this.askew=0,this.turnPause=e+12e3,this.fadeTo(()=>{n.az+=l}))}fadeTo(e){this.cut=e}coverWithLastPicture(){let e=this.renderer.domElement,t=this.cover=this.cover||Object.assign(document.createElement("canvas"),{className:"cover"});(t.width!==e.width||t.height!==e.height)&&(t.width=e.width,t.height=e.height),t.getContext("2d").drawImage(e,0,0),t.getAnimations().forEach(n=>n.cancel()),this.el.appendChild(t),t.animate([{opacity:1},{opacity:0}],{duration:1100,easing:"ease-in-out"}).finished.then(()=>t.remove(),()=>{})}focusPoint(){let e=this.layout.tiles,t=o=>({x:o.x,z:o.z,az:o.rot});if(this.lookTile&&performance.now()<this.lookTile.until&&e[this.lookTile.i])return t(e[this.lookTile.i]);if(!this.turnId)return null;if(this.auctionMark&&e[this.auctionMark.tile])return t(e[this.auctionMark.tile]);let n=this.tokens.get(this.turnId);if(!n)return null;let i=n.obj.getWorldPosition(new A),s=null,a=1/0;for(let o of e){let l=(o.x-i.x)**2+(o.z-i.z)**2;l<a&&(a=l,s=o)}return s?{x:i.x,z:i.z,az:s.rot}:null}lookAt(e,t,n=0){let i=this.orbit;this.followPause=performance.now()+8e3;let s={x:i.tx,z:i.tz,k:i.zoom},a={x:e,z:t,k:Math.max(i.zoom,n)};this.looking=(this.looking||0)+1;let o=this.looking;this.tween(450,l=>{if(o!==this.looking)return;let c=Gr(l);i.zoom=s.k+(a.k-s.k)*c,!(this.followPause<performance.now())&&(i.tx=s.x+(a.x-s.x)*c,i.tz=s.z+(a.z-s.z)*c)})}lookAtTile(e){let t=this.layout.tiles[e];t&&(this.lookTile={i:e,until:performance.now()+8e3},this.lookAt(t.x,t.z,this.layout.kind==="route"?2.2:1.5),this.followPause=0,this.highlight(e))}groundView(){let e=[],t=new A,n=new A,i=this.layout.scale*26;for(let[s,a]of[[-1,-1],[1,-1],[1,1],[-1,1]]){t.set(s,a,-1).unproject(this.camera),n.set(s,a,1).unproject(this.camera).sub(t).normalize();let o=n.y<-.02?Math.min((t.y-.3)/-n.y,i*2):i;e.push([t.x+n.x*o,t.z+n.z*o])}return e}tokenPosition(e){let t=this.tokens.get(e);return t?t.obj.getWorldPosition(new A):new A}pan(e,t){let n=this.orbit,i=Tn[this.viewName],s=this.layout.scale,a=this.size?this.size.h:800,o=i.ortho?2*this.ortho.top/a:2*(i.dist*s/n.zoom)*this.fit*Math.tan(this.persp.fov*Math.PI/360)/a,l=1/Math.max(.35,Math.cos(n.pol)),c=Math.cos(n.az),h=-Math.sin(n.az),u=-Math.sin(n.az),d=-Math.cos(n.az),p=this.layout.center,f=8*s;n.tx=Math.min(p[0]+f,Math.max(p[0]-f,n.tx-c*e*o+u*t*o*l)),n.tz=Math.min(p[1]+f,Math.max(p[1]-f,n.tz-h*e*o+d*t*o*l)),this.followPause=performance.now()+9e3,this.turnPause=Math.max(this.turnPause||0,performance.now()+1500),this.cut=null}turn(e){this.orbit.az+=e,this.turnPause=performance.now()+2e4,this.cut=null}rotate(e,t,n=!1){let i=this.orbit,s=Tn[this.viewName];e&&this.turn(-e*.006),t&&(n||!s.fixedPol)&&(i.pol=Math.min(s.ortho?1.1:1.3,Math.max(s.ortho?1e-4:.12,i.pol-t*.005)),this.turnPause=Math.max(this.turnPause||0,performance.now()+2e4),this.cut=null)}zoom(e){this.orbit.zoom=Math.min(5,Math.max(.55,this.orbit.zoom/e))}calm(e){return e>(this.busyUntil||0)&&!(this.motion&&this.motion.pending.size)}stir(e=performance.now()){this.busyUntil=Math.max(this.busyUntil||0,e+Nm)}bindInput(){let e=this.renderer.domElement,t=new Map;for(let l of["pointerdown","pointermove","wheel"])e.addEventListener(l,()=>this.stir(),{passive:!0});let n=null,i=0,s=null,a=0;e.style.touchAction="none",e.addEventListener("contextmenu",l=>l.preventDefault()),e.addEventListener("pointerdown",l=>{if(e.setPointerCapture(l.pointerId),t.set(l.pointerId,{x:l.clientX,y:l.clientY}),n={x:l.clientX,y:l.clientY,t:performance.now(),moved:!1,turning:l.button===2||l.button===1||l.shiftKey},t.size===2){let[c,h]=[...t.values()];i=Math.hypot(c.x-h.x,c.y-h.y),s={x:(c.x+h.x)/2,y:(c.y+h.y)/2},a=Math.atan2(h.y-c.y,h.x-c.x)}}),e.addEventListener("pointermove",l=>{let c=t.get(l.pointerId);if(!c){this.hover(l);return}let h=l.clientX-c.x,u=l.clientY-c.y;if(c.x=l.clientX,c.y=l.clientY,n&&Math.hypot(l.clientX-n.x,l.clientY-n.y)>6&&(n.moved=!0),t.size===2){let[d,p]=[...t.values()],f=Math.hypot(d.x-p.x,d.y-p.y),y={x:(d.x+p.x)/2,y:(d.y+p.y)/2};i&&this.zoom(i/f);let m=Math.atan2(p.y-d.y,p.x-d.x),_=Math.atan2(Math.sin(m-a),Math.cos(m-a));s&&(this.turn(_),this.rotate(0,y.y-s.y)),i=f,s=y,a=m;return}n&&n.moved&&(n.turning?this.rotate(h,u):this.pan(h,u))});let o=l=>{t.delete(l.pointerId),t.size<2&&(i=0,s=null),n&&!n.moved&&t.size===0&&l.button===0&&(this.pickDice(l)?this.onDice():this.onTile(this.pick(l),l.shiftKey?"shift":performance.now()-n.t>450?"hold":"")),t.size===0&&(n=null)};e.addEventListener("pointerup",o),e.addEventListener("pointercancel",l=>{t.delete(l.pointerId),n=null}),Bh(e,{zoom:l=>this.zoom(1/l),drag:(l,c)=>this.rotate(l*.7,c*.7,!0),oneWay:!0,touching:()=>t.size>0})}ray(e){let t=this.renderer.domElement.getBoundingClientRect(),n=new pe((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),i=new oo;return i.setFromCamera(n,this.camera),i}pick(e){let t=this.ray(e).intersectObjects(this.tileMeshes,!1)[0];return t?t.object.userData.i:-1}pickDice(e){return this.ray(e).intersectObjects(this.dice,!1).length>0}hover(e){if(matchMedia("(pointer: coarse)").matches)return;let t=this.pickDice(e),n=t?-1:this.pick(e);this.renderer.domElement.style.cursor=t&&this.diceReady||n>=0?"pointer":"grab",this.highlight(n>=0?n:this.selected??-1)}onTilePlane(e,t,n){let i=this.layout.tiles[e],s=new Pe(Th(i.w,i.d),t);return s.rotation.y=i.rot,s.position.set(i.x,this.tileTop+n,i.z),s.renderOrder=Math.round(n*1e3),s}highlight(e){let t=this.layout.tiles[e];this.hl.visible=!!t,t&&(this.hl.geometry=Th(t.w,t.d),this.hl.position.set(t.x,this.tileTop+Fr.hover,t.z),this.hl.rotation.y=t.rot,this.hl.renderOrder=13)}select(e){this.selected=e,this.highlight(e)}selectGroup(e,t){if(It(this.groupGlow||[]),this.groupGlow=null,!e||!e.length)return;let n=new bt({color:new Ce(t).lerp(new Ce("#ffe27a"),.35),transparent:!0,opacity:.45,depthWrite:!1});this.groupGlow=e.map(i=>{let s=this.onTilePlane(i,n,Fr.group);return this.scene.add(s),s})}spot(e,t,n){let i=this.layout.tiles[e];if(!i)return new A;let s=[[0,.1],[-.26,.28],[.26,.28],[-.26,-.12],[.26,-.12],[0,.45]],[a,o]=s[t%s.length];i.corner&&(a*=1.3,o*=1.1),this.map&&e===this.map.jailTile&&(n?([a,o]=Jt.spots[t%Jt.spots.length],o+=i.d*(Jt.back+Jt.front)/2):(a=(t%3-1)*.45,o=i.d*.3));let[l,c]=Fs(i,a,o);return new A(l,this.tileTop,c)}setState(e,t=[],n=""){if(!e){let i=t.filter(s=>s.seat);this.syncTokens(i.map(s=>({id:s.id,token:s.seat.token,color:s.seat.color,pos:0,out:!1,inJail:!1})));for(let s of[...this.owners.keys()])this.setOwner(s,null);for(let s of[...this.mine.keys()])this.setMine(s,!1);for(let s of[...this.houses.keys()])this.setLevel(s,0);this.ring.visible=!1,this.turnId&&(this.turnId=null,this.resetCamera());return}this.syncTokens(e.players);for(let i=0;i<this.layout.tiles.length;i++){let s=e.props[i],a=s?e.players.find(o=>o.id===s.owner):null;this.setOwner(i,a?a.color:null,s&&s.mortgaged),this.setMine(i,!!a&&a.id===n),this.setLevel(i,s?s.level:0)}this.turnId=e.phase==="play"?e.players[e.turn].id:null}dropToken(e){e.obj.userData.live?.gone?.(),It([e.obj])}syncTokens(e){let t=new Set(e.filter(n=>!n.out).map(n=>n.id));for(let[n,i]of this.tokens)t.has(n)||(this.dropToken(i),this.tokens.delete(n));for(let n of e){if(n.out)continue;let i=this.tokens.get(n.id);if(!i||i.kind!==n.token||i.color!==n.color){i&&this.dropToken(i);let s=Bm(n.color);i={obj:zm(n.token,n.color),halo:s,kind:n.token,color:n.color,pos:n.pos,busy:!1},i.obj.add(s),this.lightUp(i.obj,J0),this.scene.add(i.obj),this.tokens.set(n.id,i)}i.pos=n.pos,i.jailed=n.inJail}this.layoutTokens()}layoutTokens(){let e=new Map;for(let t of this.tokens.values()){if(t.busy)continue;let n=`${t.pos}:${this.map&&t.pos===this.map.jailTile&&t.jailed?"j":""}`;e.has(n)||e.set(n,[]),e.get(n).push(t)}for(let t of e.values())t.forEach((n,i)=>{n.target=this.spot(n.pos,t.length===1?0:i+1,n.jailed);let s=!!n.jailed&&!!this.map&&n.pos===this.map.jailTile,a=n.placed&&n.cell!==void 0&&n.cell!==s&&n.obj.position.distanceTo(n.target)<2.2;if(n.cell=s,a){this.hop(n);return}n.placed||(n.obj.position.copy(n.target),n.placed=!0)})}setOwner(e,t,n=!1){let i=this.layout.tiles[e],s=this.owners.get(e);if(!t||!i){s&&(It([s]),this.owners.delete(e)),this.setShade(e,!1);return}if(!s){s=new Pe(new ge(i.w*.82,.07,.085),null),s.castShadow=!0;let[a,o]=Fs(i,0,i.d/2-.0425);s.position.set(a,this.tileTop+.018,o),s.rotation.y=i.rot,this.scene.add(s),this.owners.set(e,s)}s.userData.color!==t&&(s.material&&s.material.dispose(),s.material=Ph(t,{roughness:.3,clearcoat:1}),s.userData.color=t),this.lightUp(s,.9),this.setShade(e,n)}setMine(e,t){let n=this.mine.get(e);if(!t){n&&(It([n]),this.mine.delete(e));return}if(n)return;let i=this.layout.tiles[e];n=new Pe(Im(i.w,i.d),this.mineMat),n.position.set(i.x,this.tileTop+Fr.mine,i.z),n.rotation.y=i.rot,this.scene.add(n),this.mine.set(e,n)}setShade(e,t){let n=this.shades.get(e);if(!t){n&&(It([n]),this.shades.delete(e));return}n||(n=this.onTilePlane(e,new bt({color:"#000",transparent:!0,opacity:.45,depthWrite:!1}),Fr.shade),this.scene.add(n),this.shades.set(e,n))}setLevel(e,t){let n=this.houses.get(e);if(n&&n.userData.level===t||(n&&(It([n]),this.houses.delete(e)),!t))return;let i=this.layout.tiles[e];if(!i)return;let s=this.map&&this.map.currency==="simit";n=new Ye,n.userData.level=t;let a=-(i.d/2-i.d*.1);if(t===Nh){let o=K0(!0,s),[l,c]=Fs(i,0,a+(s?.12:0));o.position.set(l,this.tileTop,c),o.rotation.y=i.rot,n.add(o)}else for(let o=0;o<t;o++){let l=(o-(t-1)/2)*.24,c=K0(!1,s,e*3+o),[h,u]=Fs(i,l,a);c.position.set(h,this.tileTop,u),c.rotation.y=i.rot,n.add(c)}this.lightUp(n,.5),this.scene.add(n),this.houses.set(e,n)}diceBounces(){let e=ed/1e3/this.speed;return[e/2.6,e*2/2.6,e]}async rollDice(e,t=0){let n=this.layout.tiles[t]||{x:0,z:0},[i,s]=this.layout.diceSpot,a=this.layout.diceY,o=new A((n.x+i)/2,2.4,(n.z+s)/2),l=[new A(i-.4,a,s+.2),new A(i+.4,a,s-.2)],c=ed/this.speed,h=this.dice.map((u,d)=>{let p=new mt().setFromEuler(Z0[e[d]]),f=new mt().setFromAxisAngle(new A(0,1,0),Math.random()*Math.PI*2);p.premultiply(f);let y=new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();return{d:u,final:p,axis:y,spin:Math.PI*(6+Math.random()*4),from:o.clone().add(new A(d*.4,0,0)),to:l[d]}});await this.tween(c,u=>{for(let d of h){let p=1-(1-u)**2;d.d.position.lerpVectors(d.from,d.to,p);let f=Math.abs(Math.sin(u*Math.PI*2.6))*(1-u)*1.4;d.d.position.y=a+f+(1-p)*1.2;let y=new mt().setFromAxisAngle(d.axis,(1-Gr(u))*d.spin);d.d.quaternion.copy(d.final).multiply(y)}})}async moveToken(e,t,n,i,s,a){let o=this.tokens.get(e);if(!o)return;o.busy=!0,o.hop=null;let l=(h,u,d,p)=>this.leap(o.obj,h,u,d,p),c=this.layout.tiles.length;if(a)await this.rideAlong(o,t,n,a);else if(s||Math.abs(i)>14||i===0){let h=o.obj.position.clone(),u=this.spot(n,0),d=ei(h,u,this.inTheWay(o),{least:1.6});await l(h,u,(560+Math.sqrt(d)*260)/this.speed,d)}else{let h=Math.sign(i),u=t,d=Math.max(70,170-Math.abs(i)*6)/this.speed;for(let p=0;p<Math.abs(i);p++){u=(u+h+c)%c;let f=Zs.some(([v,M])=>v===(u-h+c)%c&&M===u)&&this.layout.kind==="route",y=o.obj.position.clone(),m=this.spot(u,0),_=o.cell&&!p,g=this.jail&&(u===this.map.jailTile||(u-h+c)%c===this.map.jailTile),x=f?ei(y,m,this.inTheWay(o),{least:1.4}):_?1.15:g?ei(y,m,this.jail.obstacles,{least:.35,half:.2}):.35;await l(y,m,f?d*2+Math.sqrt(x)*d:x>.6?d*2:d,x),o.cell=!1,this.onStep&&this.onStep(u)}}o.pos=n,o.busy=!1,o.placed=!0,this.layoutTokens()}async hop(e){let t=e.hop={},n=e.obj.position.clone(),i=e.target.clone(),s=ei(n,i,this.inTheWay(e),{least:.8});e.busy=!0,await this.tween(520/this.speed,a=>{e.hop===t&&(e.obj.position.lerpVectors(n,i,a),e.obj.position.y=n.y+(i.y-n.y)*a+Math.sin(a*Math.PI)*s)}),e.hop===t&&(e.busy=!1,this.layoutTokens())}leap(e,t,n,i,s){return this.tween(i,a=>{e.position.lerpVectors(t,n,a),e.position.y=t.y+(n.y-t.y)*a+Math.sin(a*Math.PI)*s})}inTheWay(e=null){let t=[...this.art?this.art.obstacles:[],...this.jail?this.jail.obstacles:[]],n=new A,i=new qt;for(let s of this.houses.values())for(let a of s.children)i.setFromObject(a),i.getCenter(n),t.push({x:n.x,z:n.z,r:.2,h:i.max.y});for(let s of this.tokens.values())s!==e&&(s.obj.getWorldPosition(n),t.push({x:n.x,z:n.z,r:.24,h:n.y+.55}));return t}async rideAlong(e,t,n,i){let s=this.spot(t,0),a=this.spot(n,0);if(i==="ferry"&&this.art){let o=_h([s.x,s.z],[a.x,a.z],this.art.inTheWater())||_h([s.x,s.z],[a.x,a.z],this.art.inTheWater(!1));if(o){await this.sail(e,s,a,o);return}}if(i==="cablecar"&&this.cableway&&this.cableway.from===t&&this.cableway.to===n){await this.cable(e,a);return}if(i==="cablecar"||i==="tram"||!this.art){await this.fly(e,t,n,i,s,a);return}await this.tunnel(e,s,a,i)}async along(e,t,n){let i=Eh(e),s=X0(i.length,{speed:t.speed*this.speed,accel:t.accel*this.speed});await this.tween(s.total*1e3,a=>{let o=s.at(a*s.total);n(i.point(o),i.ahead(o,t.look||.3),a)})}async sail(e,t,n,i){let s=this.art.rideBoat;s.visible=!0,this.art.giveWay(!0);let a=.33,o=m=>Math.atan2(-m[2],m[0]),l=i.map(([m,_])=>[m,.01,_]),c=Eh(l);s.position.set(...l[0]),s.rotation.y=o(c.ahead(0));let h=(m,_)=>this.tween(260,g=>s.scale.setScalar(Math.max(.01,m+(_-m)*Gr(g))));await h(0,1);let u=new A(-.22,a,0),d=s.localToWorld(u.clone());await this.leap(e.obj,t,d,520,ei(t,d,this.inTheWay(e),{least:.7})),s.attach(e.obj),e.obj.position.copy(u);let p=s.rotation.y,f=0;await this.along(l,{speed:3.4,accel:1.5,look:.5},(m,_)=>{let g=o(_),x=Math.atan2(Math.sin(g-p),Math.cos(g-p));p+=x*.14,f+=(Math.max(-.14,Math.min(.14,x*.5))-f)*.08;let v=performance.now();s.position.set(m[0],.012+Math.sin(v/420)*.014,m[2]),s.rotation.set(f+Math.sin(v/760)*.018,p,Math.sin(v/610)*.014)}),this.scene.attach(e.obj);let y=e.obj.position.clone();e.obj.rotation.set(0,0,0),await this.leap(e.obj,y,n,520,ei(y,n,this.inTheWay(e),{least:.7})),await h(1,0),s.visible=!1,this.art.giveWay(!1)}buildCableway(){let e=this.layout,t=this.map.tiles.findIndex(j=>j.vehicle==="cablecar");if(t<0)return;let n=Oh(this.map,t,"transit"),i=(j,D,G=[])=>Math.min(...e.tiles.map(B=>Js(B,j,D)),...G),s=j=>{let D=e.tiles[j],G=null;for(let B of[1,-1])for(let K of[-.4,0,.4]){let Z=D.x+D.out[0]*B*(D.d/2+.42)+D.along[0]*K,de=D.z+D.out[1]*B*(D.d/2+.42)+D.along[1]*K,me=Math.min(i(Z,de),Pt(Z,de),.42,...this.art.obstacles.map(te=>Math.hypot(te.x-Z,te.z-de)-te.r))-Math.abs(K)*.05-(B>0?.3:0);(!G||me>G.room+1e-6)&&(G={x:Z,z:de,room:me})}return G},a=s(t),o=s(n),l=Bs([[a.x,a.z],[o.x,o.z]],.1),c=l.length,h=Math.hypot(o.x-a.x,o.z-a.z),u=[(o.x-a.x)/h,(o.z-a.z)/h],d=[-u[1],u[0]],p=.15,f=.8,y=(j,D)=>{let G=Math.min(Math.hypot(j-a.x,D-a.z),Math.hypot(j-o.x,D-o.z));return this.art.groundAt(j,D)+.25+.75*Math.min(1,G/2.4)},m=Mh(l,this.art.obstacles,{ground:y,half:.4,margin:.28,slope:.6});for(let j=0;j<24;j++)for(let D=1;D<c-1;D++)m[D]=Math.max(m[D],(m[D-1]+m[D+1])/2-.004);let _=l.map(([j,D],G)=>[j+d[0]*p,m[G],D+d[1]*p]),g=new Ye,x=new Be({color:"#8f989f",metalness:.6,roughness:.4}),v=new Be({color:"#23272b",metalness:.4,roughness:.5}),M=new Be({color:"#d8392b",roughness:.45}),E=new Be({color:"#ffd9a0",emissive:"#ff8a3c",emissiveIntensity:1.2}),T=(j,D,G,B,K)=>{let Z=new Pe(j,D);return Z.position.set(G,B,K),Z.castShadow=Z.receiveShadow=!0,g.add(Z),Z};for(let j of[p,-p])T(new xn(new yn(l.filter((D,G)=>G%3===0||G===c-1).map(([D,G],B,K)=>new A(D+d[0]*j,m[Math.min(c-1,B*3)]+f,G+d[1]*j))),160,.017,6),v,0,0,0);let R=(j,D,G,B)=>{let K=Math.max(0,this.art.groundAt(j,D))-.05,Z=G-K;T(new xe(.035,B?.085:.07,Z,10),x,j,K+Z/2,D);let de=T(new ge(.07,.05,p*2+.16),B?M:x,j,G-.03,D);de.rotation.y=Math.atan2(d[0],d[1]);for(let me of[p,-p]){let te=T(new xe(.05,.05,.03,14).rotateX(Math.PI/2),M,j+d[0]*me,G,D+d[1]*me);te.rotation.y=Math.atan2(d[0],d[1])}T(new Ie(.035,12,8),E,j,G+.07,D),B&&T(new xe(.26,.3,.07,20),M,j,K+.08,D),this.art.obstacles.push({x:j,z:D,r:.1,h:G+.1})};R(a.x,a.z,m[0]+f,!0),R(o.x,o.z,m[c-1]+f,!0);let L=l.map(([j,D],G)=>Math.min(G,c-1-G)<12?0:Math.min(i(j,D)-.12,Pt(j,D)-.2,...this.art.obstacles.map(B=>Math.hypot(B.x-j,B.z-D)-B.r-.06))),W=24;for(let j=W;j<c-W/2;j+=W){let D=-1;for(let G=j-9;G<=j+9;G++)G>0&&G<c-1&&L[G]>0&&(D<0||Math.abs(G-j)<Math.abs(D-j))&&(D=G);D>0&&R(l[D][0],l[D][1],m[D]+f,!1)}let F=Q0("cablecar"),k=Math.atan2(-u[1],u[0]);F.position.set(..._[0]),F.rotation.y=k,g.add(F),this.mapRoot.add(g),this.cableway={from:t,to:n,path:_,car:F,yaw:k,lamp:E}}async cable(e,t){let{path:n,car:i,yaw:s}=this.cableway,a=new A(0,.3,0),o=e.obj.position.clone(),l=i.localToWorld(a.clone());await this.leap(e.obj,o,l,560,ei(o,l,this.inTheWay(e),{least:.5})),i.attach(e.obj),e.obj.position.copy(a);let c=(u,d,p)=>this.along(u,{speed:d,accel:p},(f,y,m)=>{i.position.set(...f),i.rotation.set(0,s,Math.sin(m*40)*.03*Math.sin(m*Math.PI),"YXZ")});await c(n,2.6,1.5),this.scene.attach(e.obj),e.obj.rotation.set(0,0,0);let h=e.obj.position.clone();await this.leap(e.obj,h,t,560,ei(h,t,this.inTheWay(e),{least:.5})),c([...n].reverse(),4,2.5)}async fly(e,t,n,i,s,a){let o=Q0(i),l=this.layout.tiles.length,c=i==="tram",h=[[s.x,s.z],[a.x,a.z]];if(c){h=[];for(let m=t;;m=(m+1)%l){let _=this.layout.tiles[m],[g,x]=Fs(_,0,_.d*.16);if(h.push(m===t?[s.x,s.z]:m===n?[a.x,a.z]:[g,x]),m===n||h.length>l)break}}let u=Bs(h,.1),d=this.layout.tiles.map(m=>({x:m.x,z:m.z,r:Math.hypot(m.w,m.d)*.42,h:this.tileTop})),p=Mh(u,[...this.inTheWay(e),...d],c?{ground:()=>this.tileTop,half:.3,margin:.14,slope:.5,ends:[this.tileTop+.14,this.tileTop+.14]}:{ground:(m,_)=>(this.art?this.art.groundAt(m,_):0)+1.1,half:.34,margin:.3,slope:.8,ends:[this.tileTop+.2,this.tileTop+.2]}),f=u.map(([m,_],g)=>[m,p[g],_]);this.scene.add(o),o.add(e.obj),e.obj.position.set(0,i==="cablecar"?.3:.14,0);let y=null;await this.along(f,{speed:c?3.2:2.8,accel:1.8},(m,_,g)=>{let x=Math.atan2(-_[2],_[0]);y=y===null?x:y+Math.atan2(Math.sin(x-y),Math.cos(x-y))*.18,o.position.set(...m),o.rotation.set(0,y,c?Math.atan2(_[1],Math.hypot(_[0],_[2]))*.7:Math.sin(g*40)*.03,"YXZ")}),this.scene.attach(e.obj),e.obj.rotation.set(0,0,0),It([o])}async tunnel(e,t,n,i){let s={train:"#ff7a4d",metro:"#57d98a",funicular:"#ffc84a"}[i]||"#9fd0ff",a=u=>{let d=new Pe(new bi(.2,.34,40).rotateX(-Math.PI/2),new bt({color:s,transparent:!0,opacity:0,depthWrite:!1}));return d.position.set(u.x,this.tileTop+.02,u.z),this.scene.add(d),d},o=[a(t),a(n)],l=e.obj.scale.x;await this.tween(420,u=>{o[0].material.opacity=Math.min(1,u*2),e.obj.scale.setScalar(l*Math.max(.02,1-Gr(u))),e.obj.rotation.y=u*5}),e.obj.visible=!1;let c=new Pe(new Ie(.12,20,14),new bt({color:new Ce(s).multiplyScalar(1.8),transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1}));c.renderOrder=9,this.scene.add(c);let h=Bs([[t.x,t.z],[n.x,n.z]],.2).map(([u,d])=>[u,this.tileTop+.05,d]);await this.along(h,{speed:5,accel:3.2},u=>{c.position.set(...u),c.scale.setScalar(1+Math.sin(performance.now()/90)*.18),e.obj.position.set(u[0],-1.4,u[2])}),It([c]),e.obj.position.copy(n),e.obj.visible=!0,await this.tween(420,u=>{o[1].material.opacity=Math.min(1,u*2),e.obj.scale.setScalar(l*Math.max(.02,Gr(u))),e.obj.rotation.y=5-u*5}),e.obj.scale.setScalar(l),e.obj.rotation.y=0,this.tween(500,u=>{for(let d of o)d.material.opacity=1-u}).then(()=>It(o))}flySimits(e,t,n){this.stir(performance.now()+2e3);let i=e&&this.tokens.get(e),s=t&&this.tokens.get(t);if(!i&&!s)return;let a=this.map&&this.map.currency==="simit",o=Math.max(1,Math.min(7,Math.ceil(n/60))),l=i?i.obj.position.clone().add(new A(0,.4,0)):null,c=s?s.obj.position.clone().add(new A(0,.4,0)):null;for(let h=0;h<o;h++)setTimeout(()=>{let u=this.simitMesh(a),d=l?l.clone():c.clone().add(new A((Math.random()-.5)*2,4,(Math.random()-.5)*2)),p=c?c.clone():l.clone().add(new A((Math.random()-.5)*2,4,(Math.random()-.5)*2));u.position.copy(d),this.scene.add(u),this.tween(650,f=>{u.position.lerpVectors(d,p,f),u.position.y+=Math.sin(f*Math.PI)*1.1,u.rotation.x=f*8,u.rotation.y=f*5;let y=!c&&f>.6||!l&&f<.2;u.scale.setScalar(y?c?f*5:(1-f)*2.5:1)}).then(()=>It([u]))},h*70)}simitMesh(e=!0){if(e){let t=new Pe(new qe(.09,.035,14,32),new rt({color:"#9a5a1e",roughness:.5,clearcoat:.4}));return t.castShadow=!0,t}return new Pe(new xe(.08,.08,.02,16),new Be({color:"#f2c14e",metalness:.8,roughness:.3}))}gullSteal(e){this.stir(performance.now()+4e3);let t=this.tokens.get(e);this.art&&t&&this.art.steal(t.obj,()=>this.simitMesh(!0))}siren(){this.stir(performance.now()+4e3),this.art&&this.art.siren()}shockGulls(){this.stir(performance.now()+2500),this.art&&this.art.shock()}setAuction(e,t,n){if(e==null||!this.layout.tiles[e]){this.clearAuction();return}let i=`${e}|${t.join("|")}|${n}`;if(this.auctionMark&&this.auctionMark.key===i)return;let s=this.layout.tiles[e];if(!this.auctionMark||this.auctionMark.tile!==e){this.clearAuction();let l=this.onTilePlane(e,new bt({color:"#ffcf4a",transparent:!0,opacity:.5,depthWrite:!1}),Fr.auction),c=document.createElement("canvas");c.width=512,c.height=256;let h=new ut(c);h.colorSpace=Ke;let u=new _i(new Kn({map:h,depthTest:!1,depthWrite:!1,fog:!1}));u.scale.set(2.4,1.2,1),u.position.set(s.x,1.5,s.z),u.renderOrder=11,this.scene.add(l,u),this.auctionMark={tile:e,glow:l,sign:u,cv:c,tex:h}}let a=this.auctionMark;a.key=i;let o=a.cv.getContext("2d");o.clearRect(0,0,512,256),o.fillStyle="rgba(20,28,38,0.92)",o.beginPath(),o.roundRect(8,8,496,200,28),o.fill(),o.fillStyle=n||"#ffcf4a",o.beginPath(),o.roundRect(8,8,496,16,[28,28,0,0]),o.fill(),o.beginPath(),o.moveTo(230,206),o.lineTo(256,244),o.lineTo(282,206),o.fillStyle="rgba(20,28,38,0.92)",o.fill(),o.textAlign="center",o.textBaseline="middle",o.fillStyle="#ffcf4a",o.font=`800 34px ${ti}`,o.fillText(t[0]||"",256,58),o.fillStyle="#fff",o.font=`900 64px ${ti}`,o.fillText(t[1]||"",256,122),o.fillStyle="#b9c6cf",o.font=`600 30px ${ti}`,o.fillText(t[2]||"",256,178),a.tex.needsUpdate=!0}clearAuction(){let e=this.auctionMark;e&&(this.scene.remove(e.glow,e.sign),e.tex.dispose(),e.sign.material.dispose(),e.glow.material.dispose(),this.auctionMark=null)}showOwned(e,t){if(this.ownedGlow&&(It(this.ownedGlow),this.ownedGlow=null),!e||!e.length)return;let n=new bt({color:t||"#ffe27a",transparent:!0,opacity:.4,depthWrite:!1});this.ownedGlow=e.map(i=>{let s=this.onTilePlane(i,n,Fr.owned);return this.scene.add(s),s})}stamp(e,t,n){this.stir(performance.now()+1800);let i=this.layout.tiles[e];if(!i)return;let s=document.createElement("canvas");s.width=512,s.height=160;let a=s.getContext("2d");a.translate(256,80),a.rotate(-.12),a.strokeStyle=n,a.lineWidth=12,a.beginPath(),a.roundRect(-230,-62,460,124,18),a.stroke(),a.fillStyle=n,a.font=`900 80px ${ti}`,a.textAlign="center",a.textBaseline="middle",a.fillText(t,0,6);let o=new ut(s);o.colorSpace=Ke;let l=new _i(new Kn({map:o,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));l.renderOrder=12,l.position.set(i.x,1.6,i.z),this.scene.add(l);let c=performance.now(),h=()=>{let u=(performance.now()-c)/1800,d=u<.15?1.6-u/.15*.6:1;l.scale.set(3*d,.94*d,1),l.material.opacity=u>.75?Math.max(0,1-(u-.75)/.25):1,u<1?requestAnimationFrame(h):(this.scene.remove(l),o.dispose(),l.material.dispose())};h()}float(e,t,n="#fff"){let i=this.layout.tiles[e];if(!i)return;let s=document.createElement("canvas");s.width=256,s.height=64;let a=s.getContext("2d");a.font=`800 40px ${ti}`,a.textAlign="center",a.textBaseline="middle",a.lineWidth=8,a.strokeStyle="rgba(0,0,0,0.65)";let o=String(t).replace(Po,"").replace(/ /g,""),l=String(t).includes(Po);if(a.strokeText(o,l?110:128,32),a.fillStyle=n,a.fillText(o,l?110:128,32),l){let u=a.measureText(o).width;nd(a,110+u/2+22,32,16)}let c=new ut(s);c.colorSpace=Ke;let h=new _i(new Kn({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));h.scale.set(2*Math.max(1,this.layout.scale*.8),.5*Math.max(1,this.layout.scale*.8),1),h.position.set(i.x,.8,i.z),h.renderOrder=10,this.scene.add(h),this.floats.push({sp:h,t0:performance.now()})}tween(e,t){return this.motion.tween(e,t)}frame(){let e=Math.min(.05,this.clock.getDelta()),t=performance.now();for(let l of this.tokens.values())l.busy||!l.target||l.obj.position.lerp(l.target,1-Math.exp(-e*12));for(let l of this.tokens.values()){let c=l.obj.userData.live,h=this.layout&&this.layout.tiles[l.pos];c&&c.update(e,this.night,h&&!l.busy?Math.cos(this.orbit.az-h.rot)>.2?h.rot:this.orbit.az:void 0)}let n=this.turnId&&this.tokens.get(this.turnId);if(n&&!n.busy){this.ring.visible=!0,this.ring.position.set(n.obj.position.x,n.obj.position.y+.02,n.obj.position.z);let l=1+Math.sin(t/260)*.12;this.ring.scale.set(l,l,l)}else this.ring.visible=!1;n&&this.turnLight.position.set(n.obj.position.x,n.obj.position.y+.95,n.obj.position.z),this.turnLight.intensity=n?this.night*2.2:0;for(let l=this.floats.length-1;l>=0;l--){let c=this.floats[l],h=(t-c.t0)/1600;c.sp.position.y=.8+h*1.2,c.sp.material.opacity=Math.max(0,1-h*h),h>=1&&(this.scene.remove(c.sp),c.sp.material.map.dispose(),c.sp.material.dispose(),this.floats.splice(l,1))}this.idleSpin&&(this.orbit.az+=e*.08);let i=this.diceReady?.25+.2*Math.sin(t/220):0;for(let l of this.dice[0].material)l.emissive.setRGB(i,i*.8,i*.3);if(this.mineMat.opacity=.75+.25*Math.sin(t/420),this.auctionMark){let l=this.auctionMark;l.sign.position.y=1.5+Math.sin(t/400)*.08,l.glow.material.opacity=.35+.25*Math.sin(t/180)}if(this.night!==this.nightTo&&this.applyNight(Math.abs(this.nightTo-this.night)<e*.6?this.nightTo:this.night+Math.sign(this.nightTo-this.night)*e*.6),id.value=t/1e3,this.art&&this.art.update(e,t,this),this.placeCamera(e),this.sky.position.copy(this.camera.position),this.sky.material.uniforms.uTime.value=t/1e3,this.frames=(this.frames||0)+1,this.frames%2&&(this.sun.shadow.needsUpdate=!0),this.quality.post?this.post.render(this.scene,this.camera):(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)),this.cut){let l=this.cut;this.cut=null,this.coverWithLastPicture(),l()}let s=this.camera,a=this.lastView||(this.lastView={p:new A,q:new mt}),o=a.p.distanceToSquared(s.position)>1e-8||1-Math.abs(a.q.dot(s.quaternion))>1e-9||this.floats.length||this.night!==this.nightTo||[...this.tokens.values()].some(l=>l.busy||l.target&&l.obj.position.distanceToSquared(l.target)>1e-6);a.p.copy(s.position),a.q.copy(s.quaternion),o&&this.stir(t),this.watch&&!this.idleSpin&&this.watch.frame(t,document.hidden,this.calm(t))}};export{td as BoardView,j1 as VIEW_NAMES,W1 as wait};
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
