import{j as m,b as ke,d as je,F as T,s as xe,c as D,i as j,a as y,e as me,f as le,u as W,_ as h,g as Ee,h as Se,k as fe,l as z,m as Ce,n as M,o as k,p as Ie,S as Ae,q as pe,r as x,t as ve,v as Ne,w as ue,x as Le,y as $}from"./assets/core.prod-234d6fad.mjs";/**
 * @license
 * @builder.io/qwik/server 1.1.5
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var Re=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function ze(e,t){const n=t==null?void 0:t.mapper,s=e.symbolMapper?e.symbolMapper:r=>{var c;if(n){const o=K(r),a=n[o];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(o))return[r,"_"];console.error("Cannot resolve symbol",r,"in",n)}return a}};return{isServer:!0,async importSymbol(r,c,o){var q;const a=K(o),u=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(a);if(u)return u;let l=String(c);l.endsWith(".js")||(l+=".js");const f=Re(l);if(!(o in f))throw new Error(`Q-ERROR: missing symbol '${o}' in module '${l}'.`);return f[o]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:r=>new Promise(c=>{setTimeout(()=>{c(r())})}),chunkForSymbol(r){return s(r,n)}}}async function Te(e,t){const n=ze(e,t);xe(n)}var K=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e};function J(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function be(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var De='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',Fe=`(() => {
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
})();`,Pe='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',Oe=`(() => {
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
})();`;function Qe(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?Oe:Pe).replace("window.qEvents",JSON.stringify(e.events)):e.debug?Fe:De}function Me(e,t,n){if(!n)return[];const s=t.prefetchStrategy,i=be(t);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return $e(e,n,i);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(r){console.error("getPrefetchUrls, symbolsToPrefetch()",r)}}return[]}function $e(e,t,n){const s=[],i=e==null?void 0:e.qrls,{mapper:r,manifest:c}=t,o=new Set;if(Array.isArray(i))for(const a of i){const u=a.getHash(),l=r[u];l&&ye(c,o,s,n,l[1])}return s}function ye(e,t,n,s,i){const r=s+i;if(!t.has(r)){t.add(r);const c=e.bundles[i];if(c){const o={url:r,imports:[]};if(n.push(o),Array.isArray(c.imports))for(const a of c.imports)ye(e,t,o.imports,s,a)}}}function Je(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function B(){let i=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return i+="w.postMessage(u.map(u=>new URL(u,origin)+''));",i+="w.onmessage=()=>{w.terminate()};",i}function Ue(e){const t={bundles:F(e).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}))`}function F(e){const t=[],n=s=>{if(Array.isArray(s))for(const i of s)t.includes(i.url)||(t.push(i.url),n(i.imports))};return n(e),t}function Ke(e,t,n){const s=Ve(e==null?void 0:e.implementation),i=[];return s.prefetchEvent==="always"&&Be(i,t,n),s.linkInsert==="html-append"&&We(i,t,s),s.linkInsert==="js-append"?He(i,t,s,n):s.workerFetchInsert==="always"&&Ye(i,t,n),i.length>0?m(T,{children:i}):null}function Be(e,t,n){e.push(m("script",{type:"module",dangerouslySetInnerHTML:Ue(t),nonce:n}))}function We(e,t,n){const s=F(t),i=n.linkRel||"prefetch";for(const r of s){const c={};c.href=r,c.rel=i,(i==="prefetch"||i==="preload")&&r.endsWith(".js")&&(c.as="script"),e.push(m("link",c,void 0))}}function He(e,t,n,s){const i=n.linkRel||"prefetch";let r="";n.workerFetchInsert==="no-link-support"&&(r+="let supportsLinkRel = true;"),r+=`const u=${JSON.stringify(F(t))};`,r+="u.map((u,i)=>{",r+="const l=document.createElement('link');",r+='l.setAttribute("href",u);',r+=`l.setAttribute("rel","${i}");`,n.workerFetchInsert==="no-link-support"&&(r+="if(i===0){",r+="try{",r+=`supportsLinkRel=l.relList.supports("${i}");`,r+="}catch(e){}",r+="}"),r+="document.body.appendChild(l);",r+="});",n.workerFetchInsert==="no-link-support"&&(r+="if(!supportsLinkRel){",r+=B(),r+="}"),n.workerFetchInsert==="always"&&(r+=B()),e.push(m("script",{type:"module",dangerouslySetInnerHTML:r,nonce:s}))}function Ye(e,t,n){let s=`const u=${JSON.stringify(F(t))};`;s+=B(),e.push(m("script",{type:"module",dangerouslySetInnerHTML:s,nonce:n}))}function Ve(e){return e&&typeof e=="object"?e:Ze}var Ze={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Xe="<!DOCTYPE html>";async function Ge(e,t){var Y;let n=t.stream,s=0,i=0,r=0,c=0,o="",a;const u=((Y=t.streaming)==null?void 0:Y.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},l=t.containerTagName??"html",f=t.containerAttributes??{},q=n,w=J(),N=be(t),p=et(t.manifest);function E(){o&&(q.write(o),o="",s=0,r++,r===1&&(c=w()))}function I(d){const v=d.length;s+=v,i+=v,o+=d}switch(u.strategy){case"disabled":n={write:I};break;case"direct":n=q;break;case"auto":let d=0,v=!1;const V=u.maximunChunk??0,Q=u.maximunInitialChunk??0;n={write(C){C==="<!--qkssr-f-->"?v||(v=!0):C==="<!--qkssr-pu-->"?d++:C==="<!--qkssr-po-->"?d--:I(C),d===0&&(v||s>=(r===0?Q:V))&&(v=!1,E())}};break}l==="html"?n.write(Xe):(n.write("<!--cq-->"),t.qwikLoader?(t.qwikLoader.include===void 0&&(t.qwikLoader.include="never"),t.qwikLoader.position===void 0&&(t.qwikLoader.position="bottom")):t.qwikLoader={include:"never"}),t.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Te(t,p);const S=p==null?void 0:p.manifest.injections,P=S?S.map(d=>m(d.tag,d.attributes??{})):void 0,O=J(),L=[];let _=0,R=0;await ke(e,{stream:n,containerTagName:l,containerAttributes:f,serverData:t.serverData,base:N,beforeContent:P,beforeClose:async(d,v,V,Q)=>{var te,ne,se,ie,re,oe,ae;_=O();const C=J();a=await je(d,v,void 0,Q);const Z=JSON.stringify(a.state,void 0,void 0),A=[m("script",{type:"qwik/json",dangerouslySetInnerHTML:tt(Z),nonce:(te=t.serverData)==null?void 0:te.nonce})];if(a.funcs.length>0&&A.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:st(a.funcs),nonce:(ne=t.serverData)==null?void 0:ne.nonce})),t.prefetchStrategy!==null){const b=Me(a,t,p);if(b.length>0){const ce=Ke(t.prefetchStrategy,b,(se=t.serverData)==null?void 0:se.nonce);ce&&A.push(ce)}}const ge=!a||a.mode!=="static",X=((ie=t.qwikLoader)==null?void 0:ie.include)??"auto",G=X==="always"||X==="auto"&&ge;if(G){const b=Qe({events:(re=t.qwikLoader)==null?void 0:re.events,debug:t.debug});A.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:b,nonce:(oe=t.serverData)==null?void 0:oe.nonce}))}const ee=Array.from(v.$events$,b=>JSON.stringify(b));if(ee.length>0){let b=`window.qwikevents.push(${ee.join(", ")})`;G||(b=`window.qwikevents||=[];${b}`),A.push(m("script",{dangerouslySetInnerHTML:b,nonce:(ae=t.serverData)==null?void 0:ae.nonce}))}return nt(L,d),R=C(),m(T,{children:A})}}),l!=="html"&&n.write("<!--/cq-->"),E();const g=a.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:r,manifest:p==null?void 0:p.manifest,size:i,isStatic:!g,timing:{render:_,snapshot:R,firstFlush:c},_symbols:L}}function et(e){if(e){if("mapper"in e)return e;if(e=Je(e),e){const t={};return Object.entries(e.mapping).forEach(([n,s])=>{t[K(n)]=[n,s]}),{mapper:t,manifest:e}}}}var tt=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function nt(e,t){var n;for(const s of t){const i=(n=s.$componentQrl$)==null?void 0:n.getSymbol();i&&!e.includes(i)&&e.push(i)}}function st(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const it={symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag"},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI"},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM"},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM"},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y"}},mapping:{s_02wMImzEAbk:"q-11c3aec1.js",s_0vphQYqOdZI:"q-c71d169e.js",s_8gdLBszqbaM:"q-3f03d8ac.js",s_B0lqk5IDDy4:"q-13872237.js",s_Nk9PlpjQm9Y:"q-44f9e675.js",s_TxCFOy819ag:"q-11c3aec1.js",s_VKFlAWJuVm8:"q-63ff923e.js",s_WmYC5H00wtI:"q-cb81d9b2.js",s_e0ssiDXoeAM:"q-27408d4f.js",s_tntnak2DhJ8:"q-dbea65e0.js",s_RPDJAz33WLA:"q-11c3aec1.js",s_A5bZC7WO00A:"q-3ca4a182.js",s_wOIPfiQ04l4:"q-11654b02.js",s_BUbtvTyvVRE:"q-cb81d9b2.js",s_eBQ0vFsFKsk:"q-c5a38327.js",s_fX0bDjeJa0E:"q-11c3aec1.js",s_i1Cv0pYJNR0:"q-3f03d8ac.js",s_p9MSze0ojs4:"q-44f9e675.js"},bundles:{"q-11654b02.js":{size:889,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-11c3aec1.js":{size:2690,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],dynamicImports:["q-c9fc2532.js","q-fb68790d.js","q-ffad4c96.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-13872237.js":{size:268,imports:["q-29e0eb7c.js"],origins:["src/entry_routes.js","src/s_b0lqk5iddy4.js"],symbols:["s_B0lqk5IDDy4"]},"q-27408d4f.js":{size:407,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-29e0eb7c.js":{size:45115,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-3ca4a182.js":{size:751,imports:["q-29e0eb7c.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-3f03d8ac.js":{size:958,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],dynamicImports:["q-c5a38327.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-44f9e675.js":{size:1001,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-45aab3b6.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-63ff923e.js":{size:102,imports:["q-29e0eb7c.js"],origins:["src/entry_layout.js","src/s_vkflawjuvm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-b0ecca8f.js":{size:5811,imports:["q-29e0eb7c.js"],dynamicImports:["q-11c3aec1.js","q-27408d4f.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-c5a38327.js":{size:128,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-c71d169e.js":{size:671,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-c9fc2532.js":{size:283,imports:["q-29e0eb7c.js"],dynamicImports:["q-13872237.js"],origins:["src/routes/index.tsx"]},"q-cb81d9b2.js":{size:724,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-dbea65e0.js":{size:538,imports:["q-29e0eb7c.js","q-b0ecca8f.js"],dynamicImports:["q-c71d169e.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-e77d0af3.js":{size:207,imports:["q-29e0eb7c.js"],dynamicImports:["q-dbea65e0.js"],origins:["src/global.css","src/root.tsx"]},"q-fb68790d.js":{size:288,imports:["q-29e0eb7c.js"],dynamicImports:["q-63ff923e.js"],origins:["src/routes/layout.tsx"]},"q-ffad4c96.js":{size:112,imports:["q-29e0eb7c.js"],dynamicImports:["q-45aab3b6.js"],origins:["@qwik-city-entries"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-e94350af.css",dangerouslySetInnerHTML:`html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"1.1.5",vite:"",rollup:"3.25.1",env:"node",os:"win32",node:"20.1.0"}},rt='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',ot=x("qc-s"),at=x("qc-c"),qe=x("qc-ic"),he=x("qc-h"),we=x("qc-l"),ct=x("qc-n"),lt=x("qc-a"),ut=`(function(){
  const l=location,c=l.pathname+l.search,t="_qCityPopstateFallback",o="_qCityHistory";window[t]||(window[t]=()=>{window[o]||c===(l.pathname+l.search)||l.reload()},setTimeout(()=>{addEventListener("popstate",window[t])},0))
})();
`,dt=()=>{le(),le();const e=W(qe);if(e.value&&e.value.length>0){const t=e.value.length;let n=null;for(let s=t-1;s>=0;s--)n=h(e.value[s].default,{children:n},1,"zl_0");return h(T,{children:[n,y("script",null,{dangerouslySetInnerHTML:ut},null,3,null)]},1,"zl_1")}return Ee},mt=D(j(dt,"s_e0ssiDXoeAM")),H=e=>e.pathname+e.search+e.hash,ft=(e,t,n,s)=>{const i=_e(),c={head:i,withLocale:o=>ue(s,o),resolveValue:o=>{const a=o.__id;if(o.__brand==="server_loader"&&!(a in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const u=e.loaders[a];if(u instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return u},...t};for(let o=n.length-1;o>=0;o--){const a=n[o]&&n[o].head;a&&(typeof a=="function"?de(i,ue(s,()=>a(c))):typeof a=="object"&&de(i,a))}return c.head},de=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),U(e.meta,t.meta),U(e.links,t.links),U(e.styles,t.styles),Object.assign(e.frontmatter,t.frontmatter)},U=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(i=>i.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},_e=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),pt=()=>W(he),vt=()=>W(we),bt=()=>pe(fe("qwikcity")),yt=":root{view-transition-name:none}",qt=async(e,t)=>{const[n,s,i,r]=ve();e===void 0?(e=s.value,s.value=""):t&&(s.value="");const c=new URL(e,r.url);if(e=H(c),!(!t&&s.value===e))return s.value=e,n.value=void 0,r.isNavigating=!0,new Promise(o=>{i.r=o})},ht=({track:e})=>{const[t,n,s,i,r,c,o,a,u,l]=ve();async function f(){const[w,N]=e(()=>[o.value,t.value]),p=Ne("");let E,I,S=null;if(E=new URL(w,l.url),S=r.loadedRoute,I=r.response,S){const[P,O,L]=S,_=O,R=_[_.length-1];l.prevUrl=l.url,l.url=E,l.params={...P},o.untrackedValue=H(E);const g=ft(I,l,_,p);n.headings=R.headings,n.menu=L,s.value=pe(_),i.links=g.links,i.meta=g.meta,i.styles=g.styles,i.title=g.title,i.frontmatter=g.frontmatter}}return f()},wt=e=>{Se(j(yt,"s_RPDJAz33WLA"));const t=bt();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const n=fe("url");if(!n)throw new Error("Missing Qwik URL Env Data");const s=new URL(n),i=z({url:s,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),r={},c=Ce(z(t.response.loaders,{deep:!1})),o=M(H(s)),a=z(_e),u=z({headings:void 0,menu:void 0}),l=M(),f=t.response.action,q=f?t.response.loaders[f]:void 0,w=M(q?{id:f,data:t.response.formData,output:{result:q,status:t.response.status}}:void 0),N=j(qt,"s_fX0bDjeJa0E",[w,o,r,i]);return k(at,u),k(qe,l),k(he,a),k(we,i),k(ct,N),k(ot,c),k(lt,w),Ie(j(ht,"s_02wMImzEAbk",[w,u,l,a,t,c,o,r,e,i])),h(Ae,null,3,"qY_0")},_t=D(j(wt,"s_TxCFOy819ag")),gt=e=>y("script",{nonce:me(e,"nonce")},{dangerouslySetInnerHTML:rt},null,3,"1Z_0"),kt=()=>{const e=pt(),t=vt();return h(T,{children:[y("title",null,null,e.title,1,null),y("link",null,{rel:"canonical",href:Le(n=>n.url.href,[t],"p0.url.href")},null,3,null),y("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),y("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>$("meta",{...n},null,0,n.key)),e.links.map(n=>$("link",{...n},null,0,n.key)),e.styles.map(n=>$("style",{...n.props,dangerouslySetInnerHTML:me(n,"style")},null,0,n.key))]},1,"0D_0")},jt=D(j(kt,"s_0vphQYqOdZI"));const xt=()=>h(_t,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),h(jt,null,3,"vp_0")],1,null),y("body",null,{lang:"en"},[h(mt,null,3,"vp_1"),h(gt,null,3,"vp_2")],1,null)]},1,"vp_3"),Et=D(j(xt,"s_tntnak2DhJ8"));function It(e){return Ge(h(Et,null,3,"Qb_0"),{manifest:it,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{It as default};
