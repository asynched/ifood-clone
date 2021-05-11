var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,m=Object.prototype.propertyIsEnumerable,n=(t,r,m)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:m}):t[r]=m,a=(e,a)=>{for(var o in a||(a={}))t.call(a,o)&&n(e,o,a[o]);if(r)for(var o of r(a))m.call(a,o)&&n(e,o,a[o]);return e};import{q as o,r as i,a as l,u as c,M as s,L as d,F as u,I as p,A as g,b as f,S as h,H as b,c as E,R as v,d as w}from"./vendor.4d3e592f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const m=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,a)=>{const o=new URL(e,m);if(self[t].moduleMap[o])return r(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),n(l)},onload(){r(self[t].moduleMap[o]),n(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");const y=o.div`
  margin: 1.5rem 0;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--border);
  border-radius: 0.5rem;

  img {
    width: 3rem;
    height: 3rem;

    object-fit: contain;

    border-radius: 50%;
  }

  div {
    h2 {
      font-size: 1.125rem;
      font-weight: 600;
    }

    span {
      color: var(--yellow);
    }
  }
`;function x({profile:e}){return i.createElement(y,null,i.createElement("img",{src:e.image_url,alt:e.name}),i.createElement("div",null,i.createElement("h2",null,e.name),i.createElement("p",null,i.createElement("span",{className:"rating"},"★ ",e.rating)," •"," ",e.category," • ",e.distance,"km")))}const k=o.h1`
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: -1px;
  ${({animate:e})=>e?"animation: animate-bold 1250ms;":""}

  b {
    position: relative;
    ${({animate:e})=>e?"animation: animate-bold 1250ms; animation-delay: 250ms; animation-fill-mode: backwards;":""}
    color: var(--primary);
  }

  @keyframes animate-bold {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;function j({children:e,animate:t}){return i.createElement(k,{animate:t},e)}const z=l.create({baseURL:"http://localhost:8080/"}),N=async()=>{const{data:e}=await z.get("/seller");return e},O=o.div`
  height: 4rem;
  width: 100%;

  padding: 1rem;

  position: sticky;
  top: 0;
  left: 0;

  background: var(--primary);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);

  a {
    display: flex;
    align-items: center;

    img {
      width: 5rem;
    }
  }
`;function S(){const e=c();return i.createElement(O,null,i.createElement(s,{fontSize:24,onClick:e.goBack}),i.createElement(d,{to:"/"},i.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-01.png",alt:"iFood"})),i.createElement(d,{to:"/profile"},i.createElement(u,{fontSize:18})))}const F=o.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100vw;
  height: 4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background: var(--gray-100);

  div,
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active {
      p,
      svg {
        color: var(--primary);
      }
    }
  }
`;function C({active:e}){return i.createElement(F,null,i.createElement(d,{to:"/seller"},i.createElement("div",{className:"product"===e?"active":""},i.createElement(p,{fontSize:20}),i.createElement("p",null,"Vendedores"))),i.createElement(d,{to:"/"},i.createElement("div",{className:"home"===e?"active":""},i.createElement(g,{fontSize:20}),i.createElement("p",null,"Home"))),i.createElement(d,{to:"/profile"},i.createElement("div",{className:"profile"===e?"active":""},i.createElement(f,{fontSize:20}),i.createElement("p",null,"Perfil"))))}const R=o.div`
  width: 100%;
  height: 100vh;

  .main-content-wrapper {
    padding-bottom: 4rem;
  }
`;function _({title:e="iFood | Delivery",active:t,children:r}){return i.useEffect((()=>{document.title=e}),[]),i.createElement(R,null,i.createElement(S,null),i.createElement("main",{className:"main-content-wrapper"},r),i.createElement(C,{active:t}))}const $=o.div`
  background: var(--gray-100);

  height: 16rem;

  background: url(${({backgroundImage:e})=>e});
  background-position: 150%;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem;

  letter-spacing: -0.5px;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    animation: jumbotron-animation 1s;

    b {
      font-size: 800;
      color: var(--primary);
    }
  }

  button {
    width: fit-content;

    margin-top: 1rem;
    padding: 0.25rem 1rem;

    animation: jumbotron-animation 1s;
    animation-delay: 300ms;
    animation-fill-mode: backwards;

    border: none;
    border-radius: 0.5rem;

    background: var(--primary);

    font-weight: 700;
    color: var(--white);

    transition: var(--transition);

    &:focus {
      filter: brightness(1.25);
      box-shadow: var(--ring-primary);
    }
  }

  @keyframes jumbotron-animation {
    from {
      opacity: 0;
      transform: translate(-100%, 0);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`,L=o.div`
  padding: 1rem;
`;function q(){const[e,t]=i.useState();return i.useEffect((()=>{N().then((e=>t(e)))}),[]),i.createElement(_,{active:"home",title:"iFood | Delivery"},i.createElement($,{backgroundImage:"https://static-images.ifood.com.br/image/upload/t_high/webapp/landing/dish-right.png"},i.createElement("h1",null,"Nunca foi tão fácil pedir",i.createElement("br",null),i.createElement("b",null,"comida brasileira!")),i.createElement("button",null,"Pedir agora!")),i.createElement(L,null,i.createElement(j,{animate:!0},"Os melhores",i.createElement("br",null),"restaurantes",i.createElement("br",null),"do ",i.createElement("b",null,"iFood")),null==e?void 0:e.map((e=>i.createElement(x,{key:e.seller_id,profile:e})))))}function U(){return i.createElement(_,{active:"profile"},i.createElement(M,null,i.createElement(j,{animate:!0},i.createElement("b",null,"iFood")," clone"),i.createElement("h2",null,"Feito com ",i.createElement("span",null,"❤")," por"),i.createElement("div",{className:"profile-info"},i.createElement("div",null,i.createElement("img",{src:"/assets/eder-lima.e8b84582.jpg",alt:"Eder Lima"}),i.createElement("a",{target:"_blank",href:"https://github.com/Nxrth-x"},"Eder"," ")),i.createElement("div",null,i.createElement("img",{src:"/assets/elida-castro.49ef0b9e.jpg",alt:"Élida Castro"}),i.createElement("a",{target:"_blank",href:"https://github.com/elidacastro"},"Élida")),i.createElement("div",null,i.createElement("img",{src:"/assets/victoria-sampaio.b3cc5f5f.jpg",alt:"Victória Sampaio"}),i.createElement("a",{target:"_blank",href:"https://github.com/suzuyay"},"Victória")),i.createElement("div",null,i.createElement("img",{src:"/assets/vinicius-henrique.a96a9a82.jpg",alt:"Vinícius Henrique"}),i.createElement("a",{target:"_blank",href:"https://github.com/indiano-jpg"},"Vinícius")))))}const M=o.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - 8rem);

  h2 {
    span {
      color: var(--primary);
    }
  }

  .profile-info {
    width: 80%;

    div {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;

      border: 1px solid var(--border);
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      a {
        color: var(--primary);
        font-weight: bold;
        font-size: 1.5rem;
      }

      img {
        width: 2.5rem;
        border-radius: 50%;
      }
    }
  }
`,P=o.div`
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 10;

  .modal-content-wrapper {
    background: var(--white);
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;function V({children:e,isOpen:t,onRequestClose:r}){return i.createElement(P,{isOpen:t,onClick:r},i.createElement("div",{className:"modal-content-wrapper",onClick:e=>e.stopPropagation()},e))}function I(){return i.createElement(A,null,i.createElement("div",{className:"loader"},"Loading..."))}const A=o.div`
  width: 16rem;

  .loader {
    color: var(--primary);
    font-size: 20px;
    margin: 100px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load4 1.3s infinite linear;
    animation: load4 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    @-webkit-keyframes load4 {
      0%,
      100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
          0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
      }
      12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
          0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
      }
      25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
          0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
      }
      37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
          0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
          0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
          0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
      }
      75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
          2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
          -2em -2em 0 0;
      }
      87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
          0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
      }
    }
    @keyframes load4 {
      0%,
      100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
          0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
      }
      12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
          0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
      }
      25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
          0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
      }
      37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
          0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
          0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
      }
      62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
          0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
      }
      75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
          2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
          -2em -2em 0 0;
      }
      87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
          0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
      }
    }
  }
`;function B(e){return i.createElement(V,a({},e),i.createElement(I,null))}const H=o.div`
  background: var(--gray-100);

  height: 16rem;

  background-position: 150%;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem;

  h1 {
    color: var(--heading);
  }

  h2 {
    margin-top: 0.5rem;
    color: var(--primary);
    font-size: 1.25rem;
  }

  p {
    font-size: 1.25rem;

    &.opening-hours {
      font-size: 1rem;
    }
  }

  button {
    width: fit-content;

    margin-top: 1rem;
    padding: 0.25rem 1rem;

    animation: jumbotron-animation 1s;
    animation-delay: 300ms;
    animation-fill-mode: backwards;

    border: none;
    border-radius: 0.5rem;

    background: var(--primary);

    font-weight: 700;
    color: var(--white);

    transition: var(--transition);

    &:focus {
      filter: brightness(1.25);
      box-shadow: var(--ring-primary);
    }
  }
`,Z=o.div`
  padding: 1rem;

  div.not-found {
    img {
      margin-top: 1rem;
      width: 100%;
    }
  }
`,D=o.div`
  width: 100%;

  display: flex;

  margin: 1rem 0;

  overflow: hidden;

  border-radius: 0.5rem;
  border: 1px solid var(--border);

  .product-wrapper {
    padding: 0.5rem 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & .product-info-wrapper {
      h2 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--heading);
      }

      p {
        font-size: 0.9rem;
      }
    }

    p.price {
      font-size: 0.8rem;
      color: var(--green);
    }
  }

  img {
    width: 8rem;
    object-fit: cover;
  }
`,Q=o.div`
  width: 100%;
  height: calc(100vh - 8rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 4rem;
  }

  h1 {
    color: var(--primary);
    font-size: 3rem;
  }

  a {
    margin-top: 1rem;

    padding: 0.25rem 1rem;

    background: var(--primary);

    font-weight: bold;
    color: var(--white);

    border-radius: 0.5rem;
  }
`;function G({title:e="Erro",message:t="Algo de errado não está certo. :(",redirectURL:r="/"}){return i.createElement(_,{title:`iFood | ${e}`},i.createElement(Q,null,i.createElement("img",{src:"https://image.flaticon.com/icons/png/512/196/196759.png",alt:"Erro"}),i.createElement("h1",null,"Erro!"),i.createElement("p",null,t),i.createElement(d,{to:r},"Voltar")))}const J=o.div`
  min-width: 212px;
  width: 80%;

  div.quantity-menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0.5rem 0 1.5rem;

    h2 {
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      gap: 1rem;

      input,
      button {
        width: 2rem;
        height: 2rem;
        text-align: center;
      }

      button {
        border: none;
        border-radius: 0.5rem;

        color: var(--white);
        background: var(--primary);
      }

      input {
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        color: var(--text);
      }
    }
  }

  h1 {
    text-align: center;
    color: var(--primary);
  }

  p {
    margin: 0.5rem 0;
    span {
      color: var(--green);
    }
  }

  button.submit,
  button.cancel {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.25rem 1rem;
    border-radius: 0.5rem;
    transition: var(--transition);
  }

  button.submit {
    background: var(--primary);

    border: none;

    font-weight: bold;
    color: var(--white);

    &:active,
    &:focus,
    &:hover {
      filter: brightness(0.8);
    }
  }

  button.cancel {
    background: var(--white);
    border: 1px solid var(--primary);

    font-weight: 600;
    color: var(--primary);

    &:active,
    &:focus,
    &:hover {
      background: var(--primary);
      color: var(--white);
    }
  }
`;function K(e){var{product:n}=e,o=((e,n)=>{var a={};for(var o in e)t.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))n.indexOf(o)<0&&m.call(e,o)&&(a[o]=e[o]);return a})(e,["product"]);const[l,c]=i.useState(1),[s,d]=i.useState(1),u=(e,t)=>t>=10||t<1?e:t;return i.useEffect((()=>{d(l*n.price)}),[l]),i.createElement(V,a({},o),i.createElement(J,null,i.createElement("h1",null,n.name),i.createElement("div",{className:"quantity-menu"},i.createElement("h2",null,"Quantidade"),i.createElement("div",null,i.createElement("button",{onClick:()=>c((e=>u(e,e-1)))},"-"),i.createElement("input",{type:"number",value:l,readOnly:!0}),i.createElement("button",{onClick:()=>c((e=>u(e,e+1)))},"+"))),i.createElement("p",null,"Valor total: ",i.createElement("span",null,"R$",s.toFixed(2))),i.createElement("button",{className:"cancel",onClick:o.onRequestClose},"Cancelar"),i.createElement("button",{className:"submit",type:"submit",onClick:()=>{}},"Encomendar")))}function T({match:e}){const t=e.params.id,[r,m]=i.useState(),[n,a]=i.useState(!1),[o,l]=i.useState(!1),[c,s]=i.useState(),d=()=>l((e=>!e)),u=e=>()=>{s(e),d()};return i.useEffect((()=>{(async e=>{const{data:t}=await z.get(`/seller/${e}`);return t})(t).then((e=>m(e))).catch((e=>{console.log(e),a(!0)}))}),[]),n?i.createElement(G,null):r?r?i.createElement(i.Fragment,null,o&&c&&i.createElement(K,{isOpen:o,onRequestClose:d,product:c}),i.createElement(_,{active:"home",title:`iFood | ${r.name}`},i.createElement(H,null,i.createElement("h1",null,r.name),i.createElement("p",null,r.address),i.createElement("p",{className:"opening-hours"},"Aberto das ",r.opening_hours,"."),i.createElement("h2",null,r.category)),i.createElement(Z,null,r.products.length>0?i.createElement(i.Fragment,null,i.createElement(j,null,"Os ",i.createElement("b",null,"melhores")," ",i.createElement("br",null)," pratos"),r.products.map((e=>i.createElement(D,{key:e.product_id,onClick:u(e)},i.createElement("div",{className:"product-wrapper"},i.createElement("div",{className:"product-info-wrapper"},i.createElement("h2",null,e.name),i.createElement("p",null,e.description)),i.createElement("p",{className:"price"},"A partir de R$",e.price.toFixed(2))),i.createElement("img",{src:e.image_url,alt:e.name}))))):i.createElement("div",{className:"not-found"},i.createElement("h2",null,"Nenhum produto :("),i.createElement("p",null,"Este vendedor ainda não anunciou nenhum produto..."),i.createElement("img",{src:"https://dourasoft.com.br/site/dourasoft2017/wp-content/uploads/2017/09/sad-dog.jpg",alt:"Not found"}))))):i.createElement("div",null):i.createElement(B,{isOpen:!0,onRequestClose:()=>{}})}function W(){const[e,t]=i.useState();return i.useEffect((()=>{N().then((e=>t(e)))}),[]),i.createElement(_,{active:"product"},i.createElement(Y,null,i.createElement(j,{animate:!0},"Os melhores ",i.createElement("br",null),"do"," ",i.createElement("b",null,"iFood ",i.createElement(h,null)))),i.createElement(X,null,null==e?void 0:e.map((e=>i.createElement(x,{key:e.seller_id,profile:e})))))}const X=o.div`
  padding: 1rem;
`,Y=o.div`
  height: 14rem;
  background: #222;

  display: grid;
  place-items: center;

  h1 {
    color: var(--white);
  }
`;function ee(){return i.createElement(b,null,i.createElement(E,null,i.createElement(v,{exact:!0,path:"/",component:q}),i.createElement(v,{exact:!0,path:"/seller",component:W}),i.createElement(v,{path:"/teste",component:T}),i.createElement(v,{path:"/profile",component:U})))}w.render(i.createElement(i.StrictMode,null,i.createElement(ee,null)),document.getElementById("root"));
