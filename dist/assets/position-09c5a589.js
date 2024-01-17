import{al as K,p as h,g as G,r as N,am as Be,k as Z,D as I,an as se,a2 as Ie,c as u,ao as A,ap as ye,aq as ie,ar as Oe,as as De,at as Ae,l as V,au as He,z as Me,af as We,x as be,T as pe,a7 as E,d as f,I as je,m as ee,n as te,av as Fe,t as U,aw as qe,ax as Ue,q as l,ay as ne,s as z,L as Xe,N as Ye,w as oe,$ as Ge,M as _e,v as Ke,a6 as le,az as Je,aA as ue,y as Qe,aB as Ze,aC as ce,U as et,G as Ce,J as tt}from"./index-a5b2807b.js";const nt=["top","bottom"],at=["start","end","left","right"];function rt(e,t){let[n,a]=e.split(" ");return a||(a=K(nt,n)?"start":K(at,n)?"top":"center"),{side:de(n,t),align:de(a,t)}}function de(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const H=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function M(e){const t=G("useRender");t.render=e}function st(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=N(),a=N();if(Be){const s=new ResizeObserver(r=>{e==null||e(r,s),r.length&&(t==="content"?a.value=r[0].contentRect:a.value=r[0].target.getBoundingClientRect())});Z(()=>{s.disconnect()}),I(n,(r,i)=>{i&&(s.unobserve(se(i)),a.value=void 0),r&&s.observe(se(r))},{flush:"post"})}return{resizeRef:n,contentRect:Ie(a)}}const Vt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n};function ae(e){return ye(()=>{const t=[],n={};if(e.value.background)if(ie(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Oe(e.value.background)){const a=De(e.value.background);if(a.a==null||a.a===1){const s=Ae(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ie(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function X(e,t){const n=u(()=>({text:A(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=ae(n);return{textColorClasses:a,textColorStyles:s}}function ve(e,t){const n=u(()=>({background:A(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=ae(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const it=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Bt=V(!1)({name:"VDefaultsProvider",props:it(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:r,root:i,scoped:o}=He(e);return Me(a,{reset:r,root:i,scoped:o,disabled:s}),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}}),re=h({tag:{type:String,default:"div"}},"tag"),ot=h({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),q=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:s,...r}=e,{component:i=pe,...o}=typeof a=="object"?a:{};return We(i,be(typeof a=="string"?{name:s?"":a}:o,r,{disabled:s}),n)};const lt=["x-small","small","default","large","x-large"],Se=h({size:{type:[String,Number],default:"default"}},"size");function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return ye(()=>{let n,a;return K(lt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:f(e.size),height:f(e.size)}),{sizeClasses:n,sizeStyles:a}})}const ut=h({color:String,start:Boolean,end:Boolean,icon:je,...H(),...Se(),...re({tag:"i"}),...ee()},"VIcon"),It=V()({name:"VIcon",props:ut(),setup(e,t){let{attrs:n,slots:a}=t;const s=N(),{themeClasses:r}=te(e),{iconData:i}=Fe(u(()=>s.value||e.icon)),{sizeClasses:o}=we(e),{textColorClasses:c,textColorStyles:m}=X(U(e,"color"));return M(()=>{var g,y;const v=(g=a.default)==null?void 0:g.call(a);return v&&(s.value=(y=qe(v).filter(b=>b.type===Ue&&b.children&&typeof b.children=="string")[0])==null?void 0:y.children),l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,o.value,c.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},m.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[v]})}),{}}});const ct=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function dt(e){return{dimensionStyles:u(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function vt(e){return{aspectStyles:u(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ke=h({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...H(),...ct()},"VResponsive"),me=V()({name:"VResponsive",props:ke(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=vt(e),{dimensionStyles:s}=dt(e);return M(()=>{var r;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function mt(e,t){if(!ne)return;const n=t.modifiers||{},a=t.value,{handler:s,options:r}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const m=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!m)return;const v=o.some(y=>y.isIntersecting);s&&(!n.quiet||m.init)&&(!n.once||v||m.init)&&s(v,o,c),v&&n.once?xe(e,t):m.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function xe(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const ft={mounted:mt,unmounted:xe},gt=ft,ht=h({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ke(),...H(),...ot()},"VImg"),Ot=V()({name:"VImg",directives:{intersect:gt},props:ht(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const s=G("VImg"),r=z(""),i=N(),o=z(e.eager?"loading":"idle"),c=z(),m=z(),v=u(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=u(()=>v.value.aspect||c.value/m.value||0);I(()=>e.src,()=>{y(o.value!=="idle")}),I(g,(d,p)=>{!d&&p&&i.value&&_(i.value)}),Xe(()=>y());function y(d){if(!(e.eager&&d)&&!(ne&&!d&&!e.eager)){if(o.value="loading",v.value.lazySrc){const p=new Image;p.src=v.value.lazySrc,_(p,null)}v.value.src&&Ye(()=>{var p;n("loadstart",((p=i.value)==null?void 0:p.currentSrc)||v.value.src),setTimeout(()=>{var w;if(!s.isUnmounted)if((w=i.value)!=null&&w.complete){if(i.value.naturalWidth||T(),o.value==="error")return;g.value||_(i.value,null),o.value==="loading"&&b()}else g.value||_(i.value),R()})})}}function b(){var d;s.isUnmounted||(R(),_(i.value),o.value="loaded",n("load",((d=i.value)==null?void 0:d.currentSrc)||v.value.src))}function T(){var d;s.isUnmounted||(o.value="error",n("error",((d=i.value)==null?void 0:d.currentSrc)||v.value.src))}function R(){const d=i.value;d&&(r.value=d.currentSrc||d.src)}let $=-1;Z(()=>{clearTimeout($)});function _(d){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const w=()=>{if(clearTimeout($),s.isUnmounted)return;const{naturalHeight:L,naturalWidth:F}=d;L||F?(c.value=F,m.value=L):!d.complete&&o.value==="loading"&&p!=null?$=window.setTimeout(w,p):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,m.value=1)};w()}const C=u(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),P=()=>{var w;if(!v.value.src||o.value==="idle")return null;const d=l("img",{class:["v-img__img",C.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:b,onError:T},null),p=(w=a.sources)==null?void 0:w.call(a);return l(q,{transition:e.transition,appear:!0},{default:()=>[oe(p?l("picture",{class:"v-img__picture"},[p,d]):d,[[Ke,o.value==="loaded"]])]})},k=()=>l(q,{transition:e.transition},{default:()=>[v.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",C.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),x=()=>a.placeholder?l(q,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,B=()=>a.error?l(q,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,W=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=z(!1);{const d=I(g,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),d())})}return M(()=>{const d=me.filterProps(e);return oe(l(me,be({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:f(e.width==="auto"?c.value:e.width)},e.style]},d,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(_e,null,[l(P,null,null),l(k,null,null),l(W,null,null),l(x,null,null),l(B,null,null)]),default:a.default}),[[Ge("intersect"),{handler:y,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:i,state:o,naturalWidth:c,naturalHeight:m}}}),yt=[null,"default","comfortable","compact"],Dt=h({density:{type:String,default:"default",validator:e=>yt.includes(e)}},"density");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const bt=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:u(()=>{const a=A(e)?e.value:e.rounded,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`rounded-${r}`);return s})}}const _t=["elevated","flat","tonal","outlined","text","plain"];function Ht(e,t){return l(_e,null,[e&&l("span",{key:"overlay",class:`${t}__overlay`},null),l("span",{key:"underlay",class:`${t}__underlay`},null)])}const Mt=h({color:String,variant:{type:String,default:"elevated",validator:e=>_t.includes(e)}},"variant");function Wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const n=u(()=>{const{variant:r}=le(e);return`${t}--variant-${r}`}),{colorClasses:a,colorStyles:s}=ae(u(()=>{const{variant:r,color:i}=le(e);return{[["elevated","flat"].includes(r)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const jt=h({border:[Boolean,Number,String]},"border");function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:u(()=>{const a=A(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`border-${r}`);return s})}}const qt=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ut(e){return{elevationClasses:u(()=>{const n=A(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function Ct(){const e=G("useRoute");return u(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Xt(){var e,t;return(t=(e=G("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Yt(e,t){const n=Je("RouterLink"),a=u(()=>!!(e.href||e.to)),s=u(()=>(a==null?void 0:a.value)||ue(t,"click")||ue(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:s,href:U(e,"href")};const r=e.to?n.useLink(e):void 0,i=Ct();return{isLink:a,isClickable:s,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&u(()=>{var o,c,m;return e.exact?i.value?((m=r.isExactActive)==null?void 0:m.value)&&Qe(r.route.value.query,i.value.query):(c=r.isExactActive)==null?void 0:c.value:(o=r.isActive)==null?void 0:o.value}),href:u(()=>e.to?r==null?void 0:r.route.value.href:e.href)}}const Gt=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const J=Symbol("rippleStop"),St=80;function fe(e,t){e.style.transform=t,e.style.webkitTransform=t}function Q(e){return e.constructor.name==="TouchEvent"}function Re(e){return e.constructor.name==="KeyboardEvent"}const wt=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Re(e)){const y=t.getBoundingClientRect(),b=Q(e)?e.touches[e.touches.length-1]:e;a=b.clientX-y.left,s=b.clientY-y.top}let r=0,i=.3;(g=t._ripple)!=null&&g.circle?(i=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((a-r)**2+(s-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-r*2)/2}px`,c=`${(t.clientHeight-r*2)/2}px`,m=n.center?o:`${a-r}px`,v=n.center?c:`${s-r}px`;return{radius:r,scale:i,x:m,y:v,centerX:o,centerY:c}},Y={show(e,t){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=t==null?void 0:t._ripple)!=null&&b.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:r,scale:i,x:o,y:c,centerX:m,centerY:v}=wt(e,t,n),g=`${r*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,t.appendChild(a);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),fe(s,`translate(${o}, ${c}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),fe(s,`translate(${m}, ${v}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function $e(e){return typeof e>"u"||!!e}function O(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[J])){if(e[J]=!0,Q(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Re(e),n._ripple.class&&(t.class=n._ripple.class),Q(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{Y.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},St)}else Y.show(e,n,t)}}function ge(e){e[J]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),Y.hide(t)}}function Pe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function Ee(e){!D&&(e.keyCode===ce.enter||e.keyCode===ce.space)&&(D=!0,O(e))}function Te(e){D=!1,S(e)}function Le(e){D&&(D=!1,S(e))}function ze(e,t,n){const{value:a,modifiers:s}=t,r=$e(a);if(r||Y.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ze(a)&&a.class&&(e._ripple.class=a.class),r&&!n){if(s.stop){e.addEventListener("touchstart",ge,{passive:!0}),e.addEventListener("mousedown",ge);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Pe,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",O),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",Ee),e.addEventListener("keyup",Te),e.addEventListener("blur",Le),e.addEventListener("dragstart",S,{passive:!0})}else!r&&n&&Ne(e)}function Ne(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Pe),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",Ee),e.removeEventListener("keyup",Te),e.removeEventListener("dragstart",S),e.removeEventListener("blur",Le)}function kt(e,t){ze(e,t,!1)}function xt(e){delete e._ripple,Ne(e)}function Rt(e,t){if(t.value===t.oldValue)return;const n=$e(t.oldValue);ze(e,t,n)}const Kt={mounted:kt,unmounted:xt,updated:Rt};function Ve(e,t){const n=N(),a=z(!1);if(ne){const s=new IntersectionObserver(r=>{e==null||e(r,s),a.value=!!r.find(i=>i.isIntersecting)},t);Z(()=>{s.disconnect()}),I(n,(r,i)=>{i&&(s.unobserve(i),a.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const $t=h({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...H(),...Se(),...re({tag:"div"}),...ee()},"VProgressCircular"),Jt=V()({name:"VProgressCircular",props:$t(),setup(e,t){let{slots:n}=t;const a=20,s=2*Math.PI*a,r=N(),{themeClasses:i}=te(e),{sizeClasses:o,sizeStyles:c}=we(e),{textColorClasses:m,textColorStyles:v}=X(U(e,"color")),{textColorClasses:g,textColorStyles:y}=X(U(e,"bgColor")),{intersectionRef:b,isIntersecting:T}=Ve(),{resizeRef:R,contentRect:$}=st(),_=u(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),C=u(()=>Number(e.width)),P=u(()=>c.value?Number(e.size):$.value?$.value.width:Math.max(C.value,32)),k=u(()=>a/(1-C.value/P.value)*2),x=u(()=>C.value/P.value*k.value),B=u(()=>f((100-_.value)/100*s));return et(()=>{b.value=r.value,R.value=r.value}),M(()=>l(e.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":T.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,o.value,m.value,e.class],style:[c.value,v.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[l("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${k.value} ${k.value}`},[l("circle",{class:["v-progress-circular__underlay",g.value],style:y.value,fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":x.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),l("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":x.value,"stroke-dasharray":s,"stroke-dashoffset":B.value},null)]),n.default&&l("div",{class:"v-progress-circular__content"},[n.default({value:_.value})])]})),{}}});const he={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Pt=h({location:String},"location");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Ce();return{locationStyles:u(()=>{if(!e.location)return{};const{side:r,align:i}=rt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(m){return n?n(m):0}const c={};return r!=="center"&&(t?c[he[r]]=`calc(100% - ${o(r)}px)`:c[r]=0),i!=="center"?t?c[he[i]]=`calc(100% - ${o(i)}px)`:c[i]=0:(r==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),c})}}const Tt=h({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...H(),...Pt({location:"top"}),...bt(),...re(),...ee()},"VProgressLinear"),Lt=V()({name:"VProgressLinear",props:Tt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=tt(e,"modelValue"),{isRtl:s,rtlClasses:r}=Ce(),{themeClasses:i}=te(e),{locationStyles:o}=Et(e),{textColorClasses:c,textColorStyles:m}=X(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:g}=ve(u(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:b}=ve(e,"color"),{roundedClasses:T}=pt(e),{intersectionRef:R,isIntersecting:$}=Ve(),_=u(()=>parseInt(e.max,10)),C=u(()=>parseInt(e.height,10)),P=u(()=>parseFloat(e.bufferValue)/_.value*100),k=u(()=>parseFloat(a.value)/_.value*100),x=u(()=>s.value!==e.reverse),B=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),W=u(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function j(d){if(!R.value)return;const{left:p,right:w,width:L}=R.value.getBoundingClientRect(),F=x.value?L-d.clientX+(w-L):d.clientX-p;a.value=Math.round(F/L*_.value)}return M(()=>l(e.tag,{ref:R,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&$.value,"v-progress-linear--reverse":x.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},T.value,i.value,r.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?f(C.value):0,"--v-progress-linear-height":f(C.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:k.value,onClick:e.clickable&&j},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...m.value,[x.value?"left":"right"]:f(-C.value),borderTop:`${f(C.value/2)} dotted`,opacity:W.value,top:`calc(50% - ${f(C.value/4)})`,width:f(100-P.value,"%"),"--v-progress-linear-stream-to":f(C.value*(x.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",v.value],style:[g.value,{opacity:W.value,width:f(e.stream?P.value:100,"%")}]},null),l(pe,{name:B.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(d=>l("div",{key:d,class:["v-progress-linear__indeterminate",d,y.value],style:b.value},null))]):l("div",{class:["v-progress-linear__determinate",y.value],style:[b.value,{width:f(k.value,"%")}]},null)]}),n.default&&l("div",{class:"v-progress-linear__content"},[n.default({value:k.value,buffer:P.value})])]})),{}}}),Qt=h({loading:[Boolean,String]},"loader");function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function en(e,t){var a;let{slots:n}=t;return l("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||l(Lt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const zt=["static","relative","fixed","absolute","sticky"],tn=h({position:{type:String,validator:e=>zt.includes(e)}},"position");function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}export{It as A,ot as B,Qt as C,Zt as D,Gt as E,Yt as F,Wt as G,Ht as H,gt as I,Se as J,we as K,en as L,q as M,Jt as N,Kt as R,Bt as V,Vt as _,X as a,M as b,re as c,jt as d,Dt as e,ct as f,qt as g,bt as h,Mt as i,ve as j,Ft as k,At as l,H as m,dt as n,Ut as o,pt as p,Xt as q,Lt as r,ht as s,de as t,st as u,Ot as v,Pt as w,tn as x,Et as y,nn as z};
