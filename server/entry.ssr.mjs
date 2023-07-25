import{o as m,p as ie,q as re,F as I,s as ae,c as W,i as J,r as ce,u as le,a as v,_,l as de,t as x,j as me,R as ue,v as pe,Q as fe}from"./assets/index.qwik-2d19ade3.mjs";/**
 * @license
 * @builder.io/qwik/server 1.1.5
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function _e(e,n){const t=n==null?void 0:n.mapper,o=e.symbolMapper?e.symbolMapper:s=>{var r;if(t){const c=N(s),a=t[c];if(!a){if((r=globalThis.__qwik_reg_symbols)==null?void 0:r.has(c))return[s,"_"];console.error("Cannot resolve symbol",s,"in",t)}return a}};return{isServer:!0,async importSymbol(s,r,c){var g;const a=N(c),f=(g=globalThis.__qwik_reg_symbols)==null?void 0:g.get(a);if(f)return f;let d=String(r);d.endsWith(".js")||(d+=".js");const h=be(d);if(!(c in h))throw new Error(`Q-ERROR: missing symbol '${c}' in module '${d}'.`);return h[c]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(r=>{setTimeout(()=>{r(s())})}),chunkForSymbol(s){return o(s,t)}}}async function ye(e,n){const t=_e(e,n);ae(t)}var N=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function k(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Y(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var ve='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',ge=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,qe='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',he=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function je(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?he:qe).replace("window.qEvents",JSON.stringify(e.events)):e.debug?ge:ve}function we(e,n,t){if(!t)return[];const o=n.prefetchStrategy,i=Y(n);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return xe(e,t,i);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:t.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function xe(e,n,t){const o=[],i=e==null?void 0:e.qrls,{mapper:s,manifest:r}=n,c=new Set;if(Array.isArray(i))for(const a of i){const f=a.getHash(),d=s[f];d&&Z(r,c,o,t,d[1])}return o}function Z(e,n,t,o,i){const s=o+i;if(!n.has(s)){n.add(s);const r=e.bundles[i];if(r){const c={url:s,imports:[]};if(t.push(c),Array.isArray(r.imports))for(const a of r.imports)Z(e,n,c.imports,o,a)}}}function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let i=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return i+="w.postMessage(u.map(u=>new URL(u,origin)+''));",i+="w.onmessage=()=>{w.terminate()};",i}function Ne(e){const n={bundles:j(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function j(e){const n=[],t=o=>{if(Array.isArray(o))for(const i of o)n.includes(i.url)||(n.push(i.url),t(i.imports))};return t(e),n}function Ee(e,n,t){const o=ze(e==null?void 0:e.implementation),i=[];return o.prefetchEvent==="always"&&Ie(i,n,t),o.linkInsert==="html-append"&&Ce(i,n,o),o.linkInsert==="js-append"?Se(i,n,o,t):o.workerFetchInsert==="always"&&Fe(i,n,t),i.length>0?m(I,{children:i}):null}function Ie(e,n,t){e.push(m("script",{type:"module",dangerouslySetInnerHTML:Ne(n),nonce:t}))}function Ce(e,n,t){const o=j(n),i=t.linkRel||"prefetch";for(const s of o){const r={};r.href=s,r.rel=i,(i==="prefetch"||i==="preload")&&s.endsWith(".js")&&(r.as="script"),e.push(m("link",r,void 0))}}function Se(e,n,t,o){const i=t.linkRel||"prefetch";let s="";t.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(j(n))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${i}");`,t.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${i}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",t.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=E(),s+="}"),t.workerFetchInsert==="always"&&(s+=E()),e.push(m("script",{type:"module",dangerouslySetInnerHTML:s,nonce:o}))}function Fe(e,n,t){let o=`const u=${JSON.stringify(j(n))};`;o+=E(),e.push(m("script",{type:"module",dangerouslySetInnerHTML:o,nonce:t}))}function ze(e){return e&&typeof e=="object"?e:Ae}var Ae={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Re="<!DOCTYPE html>";async function Le(e,n){var L;let t=n.stream,o=0,i=0,s=0,r=0,c="",a;const f=((L=n.streaming)==null?void 0:L.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=n.containerTagName??"html",h=n.containerAttributes??{},g=t,G=k(),ee=Y(n),b=Pe(n.manifest);function C(){c&&(g.write(c),c="",o=0,s++,s===1&&(r=G()))}function S(l){const u=l.length;o+=u,i+=u,c+=l}switch(f.strategy){case"disabled":t={write:S};break;case"direct":t=g;break;case"auto":let l=0,u=!1;const P=f.maximunChunk??0,w=f.maximunInitialChunk??0;t={write(y){y==="<!--qkssr-f-->"?u||(u=!0):y==="<!--qkssr-pu-->"?l++:y==="<!--qkssr-po-->"?l--:S(y),l===0&&(u||o>=(s===0?w:P))&&(u=!1,C())}};break}d==="html"?t.write(Re):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await ye(n,b);const F=b==null?void 0:b.manifest.injections,ne=F?F.map(l=>m(l.tag,l.attributes??{})):void 0,te=k(),z=[];let A=0,R=0;await ie(e,{stream:t,containerTagName:d,containerAttributes:h,serverData:n.serverData,base:ee,beforeContent:ne,beforeClose:async(l,u,P,w)=>{var K,M,U,B,H,Q,V;A=te();const y=k();a=await re(l,u,void 0,w);const T=JSON.stringify(a.state,void 0,void 0),q=[m("script",{type:"qwik/json",dangerouslySetInnerHTML:Te(T),nonce:(K=n.serverData)==null?void 0:K.nonce})];if(a.funcs.length>0&&q.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:De(a.funcs),nonce:(M=n.serverData)==null?void 0:M.nonce})),n.prefetchStrategy!==null){const p=we(a,n,b);if(p.length>0){const X=Ee(n.prefetchStrategy,p,(U=n.serverData)==null?void 0:U.nonce);X&&q.push(X)}}const oe=!a||a.mode!=="static",O=((B=n.qwikLoader)==null?void 0:B.include)??"auto",D=O==="always"||O==="auto"&&oe;if(D){const p=je({events:(H=n.qwikLoader)==null?void 0:H.events,debug:n.debug});q.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:p,nonce:(Q=n.serverData)==null?void 0:Q.nonce}))}const $=Array.from(u.$events$,p=>JSON.stringify(p));if($.length>0){let p=`window.qwikevents.push(${$.join(", ")})`;D||(p=`window.qwikevents||=[];${p}`),q.push(m("script",{dangerouslySetInnerHTML:p,nonce:(V=n.serverData)==null?void 0:V.nonce}))}return Oe(z,l),R=y(),m(I,{children:q})}}),d!=="html"&&t.write("<!--/cq-->"),C();const se=a.resources.some(l=>l._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:s,manifest:b==null?void 0:b.manifest,size:i,isStatic:!se,timing:{render:A,snapshot:R,firstFlush:r},_symbols:z}}function Pe(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const n={};return Object.entries(e.mapping).forEach(([t,o])=>{n[N(t)]=[t,o]}),{mapper:n,manifest:e}}}}var Te=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Oe(e,n){var t;for(const o of n){const i=(t=o.$componentQrl$)==null?void 0:t.getSymbol();i&&!e.includes(i)&&e.push(i)}}function De(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const $e={symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_lYhQUwaDcgE:{origin:"routes/index.tsx",displayName:"routes_component_useTask",canonicalFilename:"s_lyhquwadcge",hash:"lYhQUwaDcgE",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_XDR30khxzsc"},s_5BfBV38cKOk:{origin:"components/resolution-picker/resolution-picker.tsx",displayName:"ResolutionPicker_component",canonicalFilename:"s_5bfbv38ckok",hash:"5BfBV38cKOk",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_CarLXGNlUw4:{origin:"components/video-picker/video-picker.tsx",displayName:"VideoPicker_component",canonicalFilename:"s_carlxgnluw4",hash:"CarLXGNlUw4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_F5wwVgtkTP0:{origin:"components/notifications/notifications.tsx",displayName:"Notifications_component",canonicalFilename:"s_f5wwvgtktp0",hash:"F5wwVgtkTP0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_HngoQj0g2PI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_hngoqj0g2pi",hash:"HngoQj0g2PI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_UtZeXoDsubo:{origin:"components/video-form/video-form.tsx",displayName:"VideoForm_component",canonicalFilename:"s_utzexodsubo",hash:"UtZeXoDsubo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_XDR30khxzsc:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xdr30khxzsc",hash:"XDR30khxzsc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_lO4W08IyEts:{origin:"components/navigation/navigation.tsx",displayName:"Navigation_component",canonicalFilename:"s_lo4w08iyets",hash:"lO4W08IyEts",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_mgmRM0rXVuo:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_mgmrm0rxvuo",hash:"mgmRM0rXVuo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_pyjLiQC6vIc:{origin:"routes/ffaudio/index.tsx",displayName:"ffaudio_component",canonicalFilename:"s_pyjliqc6vic",hash:"pyjLiQC6vIc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_ss3fOBfa2I0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_ss3fobfa2i0",hash:"ss3fOBfa2I0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_wlDCnMGeU5g:{origin:"routes/ffmin/index.tsx",displayName:"ffmin_component",canonicalFilename:"s_wldcnmgeu5g",hash:"wlDCnMGeU5g",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag"},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null},s_Ba2mtttpH50:{origin:"components/notifications/notifications.tsx",displayName:"useNotification_add",canonicalFilename:"s_ba2mtttph50",hash:"Ba2mtttpH50",ctxKind:"function",ctxName:"$",captures:!0,parent:null},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null},s_ww0xwLCHFwo:{origin:"components/notifications/notifications.tsx",displayName:"useNotification_fileCreated",canonicalFilename:"s_ww0xwlchfwo",hash:"ww0xwLCHFwo",ctxKind:"function",ctxName:"$",captures:!0,parent:null},s_y946ZcPSDsg:{origin:"components/notifications/notifications.tsx",displayName:"renderNoteContent__Fragment_button_onClick",canonicalFilename:"s_y946zcpsdsg",hash:"y946ZcPSDsg",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:null},s_0nC1OFnctcw:{origin:"routes/ffaudio/index.tsx",displayName:"ffaudio_component_VideoForm_onSubmit",canonicalFilename:"s_0nc1ofnctcw",hash:"0nC1OFnctcw",ctxKind:"jSXProp",ctxName:"onSubmit$",captures:!0,parent:"s_pyjLiQC6vIc"},s_7z5JO0J3WkE:{origin:"routes/index.tsx",displayName:"routes_component_VideoForm_onSubmit",canonicalFilename:"s_7z5jo0j3wke",hash:"7z5JO0J3WkE",ctxKind:"jSXProp",ctxName:"onSubmit$",captures:!0,parent:"s_XDR30khxzsc"},s_AOW1eaL0LBM:{origin:"routes/ffmin/index.tsx",displayName:"ffmin_component_VideoForm_ResolutionPicker_onChange",canonicalFilename:"s_aow1eal0lbm",hash:"AOW1eaL0LBM",ctxKind:"jSXProp",ctxName:"onChange$",captures:!0,parent:"s_wlDCnMGeU5g"},s_BU6p0p7TRt8:{origin:"components/video-form/video-form.tsx",displayName:"VideoForm_component__Fragment_form_VideoPicker_onChange",canonicalFilename:"s_bu6p0p7trt8",hash:"BU6p0p7TRt8",ctxKind:"jSXProp",ctxName:"onChange$",captures:!0,parent:"s_UtZeXoDsubo"},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI"},s_HSHXpYIBa2s:{origin:"components/video-picker/video-picker.tsx",displayName:"VideoPicker_component_div_button_onClick",canonicalFilename:"s_hshxpyiba2s",hash:"HSHXpYIBa2s",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_CarLXGNlUw4"},s_OY7sjy7iu8M:{origin:"routes/index.tsx",displayName:"routes_component_VideoForm_label_input_onChange_1",canonicalFilename:"s_oy7sjy7iu8m",hash:"OY7sjy7iu8M",ctxKind:"eventHandler",ctxName:"onChange$",captures:!0,parent:"s_XDR30khxzsc"},s_aVNIjIj4d3M:{origin:"routes/ffmin/index.tsx",displayName:"ffmin_component_VideoForm_onSubmit",canonicalFilename:"s_avnijij4d3m",hash:"aVNIjIj4d3M",ctxKind:"jSXProp",ctxName:"onSubmit$",captures:!0,parent:"s_wlDCnMGeU5g"},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM"},s_ehg6wTf6ZgI:{origin:"components/notifications/notifications.tsx",displayName:"Notifications_component_ul_li_onAnimationEnd",canonicalFilename:"s_ehg6wtf6zgi",hash:"ehg6wTf6ZgI",ctxKind:"eventHandler",ctxName:"onAnimationEnd$",captures:!0,parent:"s_F5wwVgtkTP0"},s_erpeS7bRVUM:{origin:"routes/index.tsx",displayName:"routes_component_VideoForm_label_input_onChange",canonicalFilename:"s_erpes7brvum",hash:"erpeS7bRVUM",ctxKind:"eventHandler",ctxName:"onChange$",captures:!0,parent:"s_XDR30khxzsc"},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM"},s_iRxErE0a06Y:{origin:"components/resolution-picker/resolution-picker.tsx",displayName:"ResolutionPicker_component_handleChange",canonicalFilename:"s_irxere0a06y",hash:"iRxErE0a06Y",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_5BfBV38cKOk"},s_mXkVQKHJJUA:{origin:"components/video-form/video-form.tsx",displayName:"VideoForm_component__Fragment_form_onSubmit",canonicalFilename:"s_mxkvqkhjjua",hash:"mXkVQKHJJUA",ctxKind:"eventHandler",ctxName:"onSubmit$",captures:!0,parent:"s_UtZeXoDsubo"},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y"}},mapping:{s_02wMImzEAbk:"q-7d1bcd99.js",s_lYhQUwaDcgE:"q-5032962f.js",s_5BfBV38cKOk:"q-216a713d.js",s_8gdLBszqbaM:"q-21efde84.js",s_CarLXGNlUw4:"q-e888dc12.js",s_F5wwVgtkTP0:"q-da67215a.js",s_HngoQj0g2PI:"q-b03d135b.js",s_Nk9PlpjQm9Y:"q-6bf7f3e1.js",s_TxCFOy819ag:"q-7d1bcd99.js",s_UtZeXoDsubo:"q-40a75f28.js",s_WmYC5H00wtI:"q-d264ab70.js",s_XDR30khxzsc:"q-5032962f.js",s_e0ssiDXoeAM:"q-fd351ab5.js",s_lO4W08IyEts:"q-ca95d00f.js",s_mgmRM0rXVuo:"q-d029ad8b.js",s_pyjLiQC6vIc:"q-499fe2bb.js",s_ss3fOBfa2I0:"q-51119a3b.js",s_wlDCnMGeU5g:"q-92316bd6.js",s_RPDJAz33WLA:"q-7d1bcd99.js",s_A5bZC7WO00A:"q-c994b31b.js",s_Ba2mtttpH50:"q-6b453586.js",s_wOIPfiQ04l4:"q-08cdf327.js",s_ww0xwLCHFwo:"q-6b453586.js",s_y946ZcPSDsg:"q-f6557c5a.js",s_0nC1OFnctcw:"q-499fe2bb.js",s_7z5JO0J3WkE:"q-5032962f.js",s_AOW1eaL0LBM:"q-92316bd6.js",s_BU6p0p7TRt8:"q-40a75f28.js",s_BUbtvTyvVRE:"q-d264ab70.js",s_HSHXpYIBa2s:"q-e888dc12.js",s_OY7sjy7iu8M:"q-5032962f.js",s_aVNIjIj4d3M:"q-92316bd6.js",s_eBQ0vFsFKsk:"q-80aff837.js",s_ehg6wTf6ZgI:"q-da67215a.js",s_erpeS7bRVUM:"q-5032962f.js",s_fX0bDjeJa0E:"q-7d1bcd99.js",s_i1Cv0pYJNR0:"q-21efde84.js",s_iRxErE0a06Y:"q-216a713d.js",s_mXkVQKHJJUA:"q-40a75f28.js",s_p9MSze0ojs4:"q-6bf7f3e1.js"},bundles:{"q-08cdf327.js":{size:889,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-11b65b2a.js":{size:5641,imports:["q-2121cb28.js","q-7df93abb.js"],dynamicImports:["q-d593f2ba.js"],origins:["node_modules/@tauri-apps/api/chunk-6XWZL67Z.js","node_modules/@tauri-apps/api/chunk-GP2EXCRB.js","src/services/tauri-helpers.ts"]},"q-20fd380a.js":{size:112,imports:["q-2121cb28.js"],dynamicImports:["q-45aab3b6.js"],origins:["@qwik-city-entries"]},"q-2121cb28.js":{size:45122,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-216a713d.js":{size:782,imports:["q-2121cb28.js","q-2535bdf3.js"],origins:["src/components/resolution-picker/resolution-picker.module.css?used","src/entry_ResolutionPicker.js","src/s_5bfbv38ckok.js","src/s_irxere0a06y.js"],symbols:["s_5BfBV38cKOk","s_iRxErE0a06Y"]},"q-21efde84.js":{size:958,imports:["q-2121cb28.js","q-a06e4dc0.js"],dynamicImports:["q-80aff837.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-2535bdf3.js":{size:204,imports:["q-2121cb28.js"],dynamicImports:["q-216a713d.js"],origins:["src/components/resolution-picker/resolution-picker.tsx"]},"q-40a75f28.js":{size:1294,imports:["q-2121cb28.js","q-7df93abb.js","q-a69f4057.js","q-d1b7bb25.js"],origins:["src/entry_VideoForm.js","src/s_bu6p0p7trt8.js","src/s_mxkvqkhjjua.js","src/s_utzexodsubo.js"],symbols:["s_BU6p0p7TRt8","s_mXkVQKHJJUA","s_UtZeXoDsubo"]},"q-45aab3b6.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-499fe2bb.js":{size:723,imports:["q-11b65b2a.js","q-2121cb28.js","q-68012f81.js","q-7df93abb.js","q-d0b47c45.js","q-d1b7bb25.js"],origins:["src/entry_ffaudio.js","src/routes/ffaudio/ffaudio.module.css?used","src/s_0nc1ofnctcw.js","src/s_pyjliqc6vic.js"],symbols:["s_0nC1OFnctcw","s_pyjLiQC6vIc"]},"q-5032962f.js":{size:1727,imports:["q-11b65b2a.js","q-2121cb28.js","q-68012f81.js","q-7df93abb.js","q-d0b47c45.js","q-d1b7bb25.js"],origins:["src/entry_routes.js","src/routes/ffgif.module.css?used","src/s_7z5jo0j3wke.js","src/s_erpes7brvum.js","src/s_lyhquwadcge.js","src/s_oy7sjy7iu8m.js","src/s_xdr30khxzsc.js"],symbols:["s_7z5JO0J3WkE","s_erpeS7bRVUM","s_lYhQUwaDcgE","s_OY7sjy7iu8M","s_XDR30khxzsc"]},"q-51119a3b.js":{size:543,imports:["q-2121cb28.js","q-a06e4dc0.js"],dynamicImports:["q-b03d135b.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_ss3fobfa2i0.js"],symbols:["s_ss3fOBfa2I0"]},"q-5d1ad7f0.js":{size:317,imports:["q-2121cb28.js"],dynamicImports:["q-92316bd6.js"],origins:["src/routes/ffmin/index.tsx"]},"q-68012f81.js":{size:948,imports:["q-2121cb28.js"],dynamicImports:["q-6b453586.js","q-6b453586.js","q-da67215a.js","q-f6557c5a.js"],origins:["src/components/notifications/notifications.tsx"]},"q-6b453586.js":{size:280,imports:["q-2121cb28.js"],origins:["src/entry_useNotification.js","src/s_ba2mtttph50.js","src/s_ww0xwlchfwo.js"],symbols:["s_Ba2mtttpH50","s_ww0xwLCHFwo"]},"q-6bf7f3e1.js":{size:1001,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-7d1bcd99.js":{size:2900,imports:["q-2121cb28.js","q-a06e4dc0.js"],dynamicImports:["q-20fd380a.js","q-5d1ad7f0.js","q-94c7436a.js","q-d1b7bb25.js","q-f760dc4f.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-7df93abb.js":{size:869,origins:["node_modules/@tauri-apps/api/chunk-5UWJICAP.js","node_modules/@tauri-apps/api/chunk-FEIY7W7S.js","node_modules/@tauri-apps/api/chunk-RKMHWDGH.js"]},"q-80aff837.js":{size:128,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-92316bd6.js":{size:1072,imports:["q-11b65b2a.js","q-2121cb28.js","q-2535bdf3.js","q-68012f81.js","q-7df93abb.js","q-d0b47c45.js","q-d1b7bb25.js"],origins:["src/entry_ffmin.js","src/routes/ffmin/ffmin.module.css?used","src/s_aow1eal0lbm.js","src/s_avnijij4d3m.js","src/s_wldcnmgeu5g.js"],symbols:["s_AOW1eaL0LBM","s_aVNIjIj4d3M","s_wlDCnMGeU5g"]},"q-94c7436a.js":{size:338,imports:["q-2121cb28.js"],dynamicImports:["q-5032962f.js"],origins:["src/routes/index.tsx"]},"q-a06e4dc0.js":{size:5927,imports:["q-2121cb28.js"],dynamicImports:["q-21efde84.js","q-7d1bcd99.js","q-fd351ab5.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-a69f4057.js":{size:1839,imports:["q-2121cb28.js","q-7df93abb.js"],dynamicImports:["q-e888dc12.js"],origins:["node_modules/@tauri-apps/api/chunk-WJKH4UU7.js","src/components/video-picker/video-picker.tsx"]},"q-b03d135b.js":{size:671,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/entry_RouterHead.js","src/s_hngoqj0g2pi.js"],symbols:["s_HngoQj0g2PI"]},"q-c994b31b.js":{size:751,imports:["q-2121cb28.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-ca95d00f.js":{size:453,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/components/navigation/navigation.module.css?used","src/entry_Navigation.js","src/s_lo4w08iyets.js"],symbols:["s_lO4W08IyEts"]},"q-d029ad8b.js":{size:543,imports:["q-2121cb28.js","q-68012f81.js","q-d1b7bb25.js"],dynamicImports:["q-ca95d00f.js"],origins:["src/components/navigation/navigation.tsx","src/entry_layout.js","src/routes/layout.module.css?used","src/s_mgmrm0rxvuo.js"],symbols:["s_mgmRM0rXVuo"]},"q-d0b47c45.js":{size:235,imports:["q-2121cb28.js"],dynamicImports:["q-40a75f28.js"],origins:["src/components/video-form/video-form.tsx"]},"q-d1b7bb25.js":{size:356,imports:["q-2121cb28.js"],dynamicImports:["q-d029ad8b.js"],origins:["src/routes/layout.tsx"]},"q-d264ab70.js":{size:724,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-d593f2ba.js":{size:4295,imports:["q-11b65b2a.js","q-2121cb28.js","q-7df93abb.js"],origins:["node_modules/@tauri-apps/api/chunk-PEDMYRP6.js","node_modules/@tauri-apps/api/chunk-V5J25SYE.js","node_modules/@tauri-apps/api/path.js"]},"q-da67215a.js":{size:563,imports:["q-2121cb28.js","q-68012f81.js"],origins:["src/components/notifications/notifications.module.css?used","src/entry_Notifications.js","src/s_ehg6wtf6zgi.js","src/s_f5wwvgtktp0.js"],symbols:["s_ehg6wTf6ZgI","s_F5wwVgtkTP0"]},"q-e888dc12.js":{size:798,imports:["q-2121cb28.js","q-7df93abb.js","q-a69f4057.js"],origins:["src/components/video-picker/video-picker.module.css?used","src/entry_VideoPicker.js","src/s_carlxgnluw4.js","src/s_hshxpyiba2s.js"],symbols:["s_CarLXGNlUw4","s_HSHXpYIBa2s"]},"q-f107cf16.js":{size:207,imports:["q-2121cb28.js"],dynamicImports:["q-51119a3b.js"],origins:["src/global.css","src/root.tsx"]},"q-f6557c5a.js":{size:179,imports:["q-11b65b2a.js","q-2121cb28.js","q-7df93abb.js"],origins:["src/entry_renderNoteContent.js","src/s_y946zcpsdsg.js"],symbols:["s_y946ZcPSDsg"]},"q-f760dc4f.js":{size:338,imports:["q-2121cb28.js"],dynamicImports:["q-499fe2bb.js"],origins:["src/routes/ffaudio/index.tsx"]},"q-fd351ab5.js":{size:407,imports:["q-2121cb28.js","q-a06e4dc0.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-f434f31d.css",dangerouslySetInnerHTML:`._navigation_183ao_1{padding:0 1rem;display:flex;text-align:center;position:sticky;top:0;z-index:5;color:var(--text-inverted);background-color:var(--grey-400)}._lnk_183ao_29{padding:.6rem 1rem;border-bottom:5px solid transparent;color:var(--text-inverted)}._lnk_183ao_29:hover,._lnk_183ao_29:focus{background-color:var(--grey-500)}._selected_183ao_47{background-color:var(--grey-600);border-bottom-color:var(--primary-100)}._selected_183ao_47:hover,._selected_183ao_47:focus{background-color:var(--grey-600);border-bottom-color:var(--primary-100)}._noteList_fn0dx_5{display:flex;flex-direction:column;align-items:center;gap:.8rem;position:fixed;top:3rem;width:100%;z-index:10;pointer-events:none;overflow:none}._noteItem_fn0dx_20{padding:1rem;border:1px solid var(--black);border-radius:8px;box-shadow:0 0 15px 0 var(--black);font-weight:700;background-color:var(--primary-100);pointer-events:auto}._noteItem_fn0dx_20:first-child{animation:.5s _fadeOut_fn0dx_1 5s;animation-timing-function:ease-out;animation-fill-mode:forwards}._noteItem_fn0dx_20:hover,._noteItem_fn0dx_20:focus{animation-play-state:paused}@keyframes _fadeOut_fn0dx_1{0%{opacity:1}to{opacity:0}}._noteItem_fn0dx_20>button{padding:0;border:none;background-color:transparent;text-decoration:underline;cursor:pointer}._resolutionPicker_18b0y_5{display:flex;gap:2px;border:none;margin:0;padding:0}._legend_18b0y_15{margin-bottom:1rem;color:var(--text)}._lbl_18b0y_23{flex-grow:1;border:1px solid transparent;padding:.6rem 1.2rem;text-align:center;cursor:pointer;color:var(--text-inverted);background-color:var(--grey-400);transition:.25s background-color ease-out,.25s color ease-out,.25s font-weight ease-out}._lbl_18b0y_23:first-of-type{border-radius:6px 0 0 6px}._lbl_18b0y_23:last-of-type{border-radius:0 6px 6px 0}._lbl_18b0y_23:hover,._lbl_18b0y_23:focus{background-color:var(--grey-600)}._lbl_18b0y_23:has(> ._rdo_18b0y_46:checked){background-color:var(--grey-800)}._lbl_18b0y_23:has(> ._rdo_18b0y_46:focus){border-color:var(--white)}._rdo_18b0y_46{padding:.5rem;height:0;width:0;overflow:hidden;position:absolute}._videoPicker_1vt9m_9{display:flex}._videoPicker_1vt9m_9>._file_1vt9m_15{flex-grow:1;border-top-right-radius:0;border-bottom-right-radius:0;color:var(--black)}._videoPicker_1vt9m_9>._browse_1vt9m_31{border-top-left-radius:0;border-bottom-left-radius:0}._form_3vtu9_1{display:flex;flex-direction:column;gap:1rem}._main_1m41a_1{display:flex;gap:1rem;flex-direction:column;padding:1rem}._form_1isxt_9{gap:1rem;display:flex;flex-wrap:wrap;justify-content:space-between}._videoPicker_1isxt_23{width:100%}:root{--black: #001011;--white: #fbfbfb;--grey-100: #707070;--grey-200: #606065;--grey-300: #505059;--grey-400: #40404e;--grey-500: #373945;--grey-600: #2e323d;--grey-700: #252b34;--grey-800: #1b252b;--primary-100: #97c8eb;--primary-200: #64e9ee;--primary-300: #3aafb9;--primary-400: #093a3e;--text: var(--black);--text-inverted: var(--white);--background: var(--grey-100)}*{box-sizing:border-box}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}html,body{padding:0;margin:0;width:100%;height:100%}body{line-height:inherit;color:var(--text);background-color:var(--background)}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background-color:var(--grey-400)}::-webkit-scrollbar-thumb{background-color:var(--primary-100);border-radius:8px}::-webkit-scrollbar-corner{background-color:transparent}a{color:var(--text);text-decoration:none}ul,ol{margin:0;padding:0;list-style-type:none}.btn,.txt,.num{padding:.6rem 1.2rem;border:none;border-radius:6px}.btn{font-weight:700;color:var(--text-inverted);background-color:var(--grey-400)}.btn:hover,.btn:focus{cursor:pointer;color:var(--text-inverted);background-color:var(--grey-600);transition:color .25s ease-out,background-color .25s ease-out}.btn:disabled{background-color:var(--grey-200)}.btn:disabled:hover{cursor:not-allowed}.num{padding:.6rem .3rem;width:64px;text-align:right}.vid{align-self:center;width:100%;min-width:480px;max-width:720px;border:1px solid var(--black)}.w-full{width:100%}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"1.1.5",vite:"",rollup:"3.25.1",env:"node",os:"win32",node:"18.16.1"}},Ke=()=>{const e=ce(),n=le();return v(I,{children:[_("title",null,null,e.title,1,null),_("link",null,{rel:"canonical",href:de(t=>t.url.href,[n],"p0.url.href")},null,3,null),_("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),_("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(t=>x("meta",{...t},null,0,t.key)),e.links.map(t=>x("link",{...t},null,0,t.key)),e.styles.map(t=>x("style",{...t.props,dangerouslySetInnerHTML:me(t,"style")},null,0,t.key))]},1,"MC_0")},Me=W(J(Ke,"s_HngoQj0g2PI"));const Ue=()=>v(fe,{children:[_("head",null,null,[_("meta",null,{charSet:"utf-8"},null,3,null),_("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),v(Me,null,3,"70_0")],1,null),_("body",null,{lang:"en"},[v(ue,null,3,"70_1"),v(pe,null,3,"70_2")],1,null)]},1,"70_3"),Be=W(J(Ue,"s_ss3fOBfa2I0"));function Ve(e){return Le(v(Be,null,3,"MI_0"),{manifest:$e,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Ve as default};
