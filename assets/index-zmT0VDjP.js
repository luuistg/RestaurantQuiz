(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){e.innerHTML=`
    <section class="screen screen-landing">
      <h2 class="landing-title">¡FELICIDADES!</h2>
      <header class="header">
        <p class="eyebrow">Feliz</p>
        <h1 class="title-block">Cumpleaños</h1>
      </header>
      <p class="description">Es tu cumpleaños y un pequeño menú desgustación lo va a acompañar. Elige los platos perfectos y descubrirás donde lo vamos a celebrar.</p>
      <div class="badge-container">
        <p class="badge">x2 Snacks</p>
        <p class="badge">x1 Entrante</p>
        <p class="badge">x1 Principal</p>
        <p class="badge">x1 Postre</p>
      </div>
      <button class="btn" id="btn-start">Empezar a elegir</button>
    </section>
  `,e.querySelector(`#btn-start`).addEventListener(`click`,t)}var t={pesos:{Snack1:1,Snack2:1,Entrante:3,Principal:4,Postre:2},restaurantes:{"Local de Ensayo":{Snack1:`Marinera tradicional con pan de masa madre, huevas de trucha y anchoa`,Snack2:`Croqueta de jamón de bellota y leche fresca con velo de papada de bellota`,Entrante:`Tortilla vaga de cocochas y piparras`,Principal:`Solomillo de vaca madurada, foie ecológico jugo de ternera y verduras`,Postre:`Buñuelos de chocolate y helado de vainilla`},Alborada:{Snack1:`Alcachofa al josper con foie y trufa`,Snack2:`Croqueta cremosa de jamón`,Entrante:`Tomate partido con bonito y ventresca`,Principal:`Entrecot de ternera nacional`,Postre:`Tarta de queso al horno`},Torombolo:{Snack1:`Marinera Torombolo`,Snack2:`Brioche de Carrillera`,Entrante:`Calamar Nacional/ Pata de Pulpo`,Principal:`Ojo de bife Argentino`,Postre:`Coulant de Chocolate con helado de mango Pasión`},Bodguita:{Snack1:`Alcachofa Parrilla con Chato Murciano guisado con vino`,Snack2:`Croquetas caseras de Jamón`,Entrante:`Almejas al Ajillo con piñones`,Principal:`Solomillo de Vacuno con su guarnición`,Postre:`Tarta de Chocolate caliente con helado artesano`}}},n=`
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,r=`
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,i=`
<svg
  class="lucide lucide-external-link"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
</svg>
`,a=[`Local de Ensayo`,`Alborada`,`Torombolo`,`Bodguita`],o=[`Snack1`,`Snack2`,`Entrante`,`Principal`,`Postre`],s=55,c=320,l=90,u=70;function d(e,i,a,s,c,d,p,m){e.innerHTML=`
    <section class="screen screen-quiz">
        <div class="quiz-header">
            <div class="progress-bar">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
            </div>
            <div class="quiz-navigation">
                <button class="btn btn-back" id="btn-back">${n}</button>
                <button class="btn btn-next" id="btn-next">${r}</button>
                <div class="btn-end-wrapper hidden" id="btn-end-wrapper">
                    <button class="btn btn-end" id="btn-end">Confirmar</button>
                    <span class="btn-end-tooltip">Faltan preguntas por responder</span>
                </div>
            </div>
        </div>
        <h2 class="quiz-title">Pregunta ${i+1}</h2>
        <p class="description description-quiz">¿QUÉ PLATO PREFIERES?</p>
        <div class="quiz-options">
            <button
              class="answer stagger-item ${a===`Local de Ensayo`?`selected`:``}"
              data-restaurant="Local de Ensayo"
            >
              ${t.restaurantes[`Local de Ensayo`][o[i]]}
            </button>

            <button
              class="answer stagger-item ${a===`Alborada`?`selected`:``}"
              data-restaurant="Alborada"
            >
              ${t.restaurantes.Alborada[o[i]]}
            </button>

            <button
              class="answer stagger-item ${a===`Torombolo`?`selected`:``}"
              data-restaurant="Torombolo"
            >
              ${t.restaurantes.Torombolo[o[i]]}
            </button>

            <button
              class="answer stagger-item ${a===`Bodguita`?`selected`:``}"
              data-restaurant="Bodguita"
            >
              ${t.restaurantes.Bodguita[o[i]]}
            </button>
        </div>

    </section>
  `,(e.querySelector(`.progress-bar`)?.querySelectorAll(`.square`))?.forEach((e,t)=>{t<=i?e.classList.add(`active`):e.classList.remove(`active`)});let h=e.querySelector(`#btn-back`),g=e.querySelector(`#btn-next`),_=e.querySelector(`#btn-end-wrapper`),v=e.querySelector(`#btn-end`);h.addEventListener(`click`,c),g.addEventListener(`click`,d),v.addEventListener(`click`,p),i===0?h.classList.add(`hidden`):h.classList.remove(`hidden`),i===o.length-1?(g.classList.add(`hidden`),_.classList.remove(`hidden`)):(g.classList.remove(`hidden`),_.classList.add(`hidden`)),f(e,m),e.querySelectorAll(`.answer`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.restaurant;r&&r in t.restaurantes&&(e.querySelectorAll(`.answer`).forEach(e=>e.classList.remove(`selected`)),n.classList.add(`selected`),s(r))})}),e.querySelectorAll(`.stagger-item`).forEach((e,t)=>{e.style.animationDelay=`${l+t*u}ms`,e.classList.add(`stagger-enter`)})}function f(e,t){let n=e.querySelector(`#btn-end`),r=e.querySelector(`#btn-end-wrapper`);n&&r&&(t?(n.classList.add(`disabled`),r.classList.add(`btn-end-wrapper--disabled`)):(n.classList.remove(`disabled`),r.classList.remove(`btn-end-wrapper--disabled`)))}function p(e){e.querySelectorAll(`.stagger-item`).forEach((e,t)=>{let n=e.getBoundingClientRect(),r=e.cloneNode(!0);r.style.position=`fixed`,r.style.top=`${n.top}px`,r.style.left=`${n.left}px`,r.style.width=`${n.width}px`,r.style.height=`${n.height}px`,r.style.margin=`0`,r.style.pointerEvents=`none`,r.style.zIndex=`100`;let i=t*s;r.style.animationDelay=`${i}ms`,r.classList.remove(`stagger-enter`),r.classList.add(`stagger-exit`),document.body.appendChild(r),setTimeout(()=>r.remove(),i+c)})}var m={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),m,!1);var h=m.exports;m.exports.create;var g=t.pesos,_={"Local de Ensayo":`https://localdensayo.com/carta/#`,Alborada:`https://alboradarestaurante.com/index.php/carta`,Torombolo:`https://restaurantetorombolo.com/murcia/`,Bodguita:`https://www.bodeguitamurcia.com/menus/`},v={"Local de Ensayo":`/RestaurantQuiz/localdeensayo.jpg`,Alborada:`/RestaurantQuiz/alborada.jpg`,Torombolo:`/RestaurantQuiz/torombolo.jpg`,Bodguita:`/RestaurantQuiz/bodeguita.jpg`};function y(e){let t={"Local de Ensayo":0,Alborada:0,Torombolo:0,Bodguita:0};return e.forEach((e,n)=>{let r=o[n];e&&r&&(t[e]+=g[r])}),a.map(e=>({restaurant:e,score:t[e]}))}var b=[`#e43d12`,`#d6536d`,`#ffa2b6`,`#efb11d`,`#ebe9e1`];function x(e,t){return e+Math.random()*(t-e)}function S(){let e={colors:b,disableForReducedMotion:!0,ticks:500};h({...e,particleCount:1800,spread:160,startVelocity:75,scalar:1.4,origin:{x:.5,y:.5}}),h({...e,particleCount:1200,spread:360,startVelocity:60,scalar:1.2,angle:90,origin:{x:.5,y:.3}}),h({...e,particleCount:900,spread:100,startVelocity:65,scalar:1.3,origin:{x:.15,y:.5}}),h({...e,particleCount:900,spread:100,startVelocity:65,scalar:1.3,origin:{x:.85,y:.5}}),[{delay:120,origin:{x:0,y:.6},angle:60},{delay:120,origin:{x:1,y:.6},angle:120},{delay:280,origin:{x:.08,y:1},angle:75},{delay:280,origin:{x:.92,y:1},angle:105},{delay:440,origin:{x:0,y:.15},angle:300},{delay:440,origin:{x:1,y:.15},angle:240},{delay:600,origin:{x:.5,y:0},angle:270},{delay:760,origin:{x:.25,y:.85},angle:80},{delay:760,origin:{x:.75,y:.85},angle:100},{delay:920,origin:{x:.1,y:.4},angle:45},{delay:920,origin:{x:.9,y:.4},angle:135},{delay:1080,origin:{x:.5,y:.5},angle:90},{delay:1240,origin:{x:0,y:.6},angle:60},{delay:1240,origin:{x:1,y:.6},angle:120},{delay:1400,origin:{x:.3,y:1},angle:80},{delay:1400,origin:{x:.7,y:1},angle:100},{delay:1600,origin:{x:0,y:.3},angle:310},{delay:1600,origin:{x:1,y:.3},angle:230},{delay:1800,origin:{x:.5,y:.2},angle:270},{delay:2e3,origin:{x:.2,y:.9},angle:70},{delay:2e3,origin:{x:.8,y:.9},angle:110},{delay:2250,origin:{x:.5,y:.5},angle:90}].forEach(({delay:t,origin:n,angle:r})=>{setTimeout(()=>{h({...e,particleCount:720+Math.floor(Math.random()*600),spread:70+Math.floor(Math.random()*70),startVelocity:45+Math.floor(Math.random()*35),scalar:1+Math.random()*.7,origin:n,angle:r})},t)});let t=Date.now()+6e3,n=window.setInterval(()=>{Date.now()>t?window.clearInterval(n):h({...e,particleCount:180,startVelocity:x(15,30),spread:100,scalar:x(.8,1.3),gravity:.9,angle:90,origin:{x:Math.random(),y:-.1}})},90)}var C=(e,t,n)=>{let r=y(t),a=Math.max(0,...r.map(e=>e.score)),o=r.find(e=>e.score===a);e.innerHTML=`
    <section class="screen screen-result">
      <h2 class="result-title">¡FELICIDADES!</h2>
      <p class="description">Según tu elección, el restaurante ideal para tu cumpleaños es:</p>

      ${o?`
        <img
          class="winner-image"
          src="${v[o.restaurant]}"
          alt="${o.restaurant}"
        />
      `:``}

      <div class="chart">
        ${r.map(({restaurant:e,score:t})=>{let n=a===0?0:t/a*80,r=Math.max(n,4),s=o?e===o.restaurant:!1;return`
              <div class="chart-column${s?` winner`:``}">
                <div class="chart-bar" style="height: ${r}%">
                  <span class="chart-label${s?` chart-label-link`:``}">
                    ${e}${s?i:``}
                  </span>
                  <span class="chart-score">${t} pts</span>
                </div>
              </div>
            `}).join(``)}
      </div>

      <button class="btn" id="btn-restart">Volver a empezar</button>
    </section>
  `,e.querySelector(`#btn-restart`).addEventListener(`click`,n),S(),o&&e.querySelector(`.chart-column.winner`)?.addEventListener(`click`,()=>{window.open(_[o.restaurant],`_blank`,`noopener,noreferrer`)})},w=document.querySelector(`#app`),T=0,E=Array(o.length).fill(void 0);function D(){let e=E.every(A);d(w,T,E[T],e=>{E[T]=e,f(w,!E.every(A))},()=>{k(T-1)},()=>{k(T+1)},()=>{E.every(A)&&M()},!e)}function O(){E.forEach((e,t)=>{E[t]=void 0}),D()}function k(e){e<0||e>=o.length||(p(w),T=e,D())}e(w,()=>{T=0,D()});function A(e){return e!==void 0}function j(){return E.filter(A)}function M(){E.every(A)&&C(w,j(),()=>{T=0,O()})}