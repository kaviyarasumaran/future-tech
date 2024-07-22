/*! For license information please see 951.49504bb1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfuture_tech=self.webpackChunkfuture_tech||[]).push([[951],{1053:(e,t,o)=>{o.d(t,{A:()=>n});const n=o(5043).createContext(void 0)},4827:(e,t,o)=>{function n(e){let{props:t,states:o,muiFormControl:n}=e;return o.reduce(((e,o)=>(e[o]=t[o],n&&"undefined"===typeof t[o]&&(e[o]=n[o]),e)),{})}o.d(t,{A:()=>n})},5213:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(5043),r=o(1053);function l(){return n.useContext(r.A)}},5673:(e,t,o)=>{o.d(t,{f3:()=>j,Sh:()=>L,Ay:()=>N,Oj:()=>I,WC:()=>B});var n=o(8587),r=o(8168),l=o(6632),a=o(5043),i=o(8387),s=o(7042),d=o(6288),u=o(3844),c=o(6440),p=o(579);const m=["onChange","maxRows","minRows","style","value"];function h(e){return parseInt(e,10)||0}const f={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};const b=a.forwardRef((function(e,t){const{onChange:o,maxRows:l,minRows:i=1,style:b,value:y}=e,A=(0,n.A)(e,m),{current:g}=a.useRef(null!=y),v=a.useRef(null),w=(0,s.A)(t,v),x=a.useRef(null),S=a.useCallback((()=>{const t=v.current,o=(0,d.A)(t).getComputedStyle(t);if("0px"===o.width)return{outerHeightStyle:0,overflowing:!1};const n=x.current;n.style.width=o.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");const r=o.boxSizing,a=h(o.paddingBottom)+h(o.paddingTop),s=h(o.borderBottomWidth)+h(o.borderTopWidth),u=n.scrollHeight;n.value="x";const c=n.scrollHeight;let p=u;i&&(p=Math.max(Number(i)*c,p)),l&&(p=Math.min(Number(l)*c,p)),p=Math.max(p,c);return{outerHeightStyle:p+("border-box"===r?a+s:0),overflowing:Math.abs(p-u)<=1}}),[l,i,e.placeholder]),C=a.useCallback((()=>{const e=S();if(void 0===(t=e)||null===t||0===Object.keys(t).length||0===t.outerHeightStyle&&!t.overflowing)return;var t;const o=v.current;o.style.height="".concat(e.outerHeightStyle,"px"),o.style.overflow=e.overflowing?"hidden":""}),[S]);(0,u.A)((()=>{const e=()=>{C()};let t;const o=(0,c.A)(e),n=v.current,r=(0,d.A)(n);let l;return r.addEventListener("resize",o),"undefined"!==typeof ResizeObserver&&(l=new ResizeObserver(e),l.observe(n)),()=>{o.clear(),cancelAnimationFrame(t),r.removeEventListener("resize",o),l&&l.disconnect()}}),[S,C]),(0,u.A)((()=>{C()}));return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)("textarea",(0,r.A)({value:y,onChange:e=>{g||C(),o&&o(e)},ref:w,rows:i,style:b},A)),(0,p.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:x,tabIndex:-1,style:(0,r.A)({},f,b,{paddingTop:0,paddingBottom:0})})]})}));var y=o(540),A=o(8606),g=o(4827),v=o(1053),w=o(5213),x=o(4535),S=o(2876),C=o(6803),R=o(5849),k=o(5013),O=o(6103),z=o(112),W=o(1470);const F=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],B=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,"small"===o.size&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t["color".concat((0,C.A)(o.color))],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},I=(e,t)=>{const{ownerState:o}=e;return[t.input,"small"===o.size&&t.inputSizeSmall,o.multiline&&t.inputMultiline,"search"===o.type&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},L=(0,x.Ay)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:B})((e=>{let{theme:t,ownerState:o}=e;return(0,r.A)({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",["&.".concat(W.A.disabled)]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},o.multiline&&(0,r.A)({padding:"4px 0 5px"},"small"===o.size&&{paddingTop:1}),o.fullWidth&&{width:"100%"})})),j=(0,x.Ay)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:I})((e=>{let{theme:t,ownerState:o}=e;const n="light"===t.palette.mode,l=(0,r.A)({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),a={opacity:"0 !important"},i=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,r.A)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},["label[data-shrink=false] + .".concat(W.A.formControl," &")]:{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},["&.".concat(W.A.disabled)]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===o.size&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===o.type&&{MozAppearance:"textfield"})})),M=(0,p.jsx)(O.A,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),N=a.forwardRef((function(e,t){var o;const s=(0,S.A)({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:u,autoFocus:c,className:m,components:h={},componentsProps:f={},defaultValue:x,disabled:O,disableInjectingGlobalStyles:B,endAdornment:I,fullWidth:N=!1,id:E,inputComponent:T="input",inputProps:P={},inputRef:H,maxRows:q,minRows:K,multiline:_=!1,name:D,onBlur:V,onChange:$,onClick:U,onFocus:G,onKeyDown:Z,onKeyUp:J,placeholder:Q,readOnly:X,renderSuffix:Y,rows:ee,slotProps:te={},slots:oe={},startAdornment:ne,type:re="text",value:le}=s,ae=(0,n.A)(s,F),ie=null!=P.value?P.value:le,{current:se}=a.useRef(null!=ie),de=a.useRef(),ue=a.useCallback((e=>{0}),[]),ce=(0,R.A)(de,H,P.ref,ue),[pe,me]=a.useState(!1),he=(0,w.A)();const fe=(0,g.A)({props:s,muiFormControl:he,states:["color","disabled","error","hiddenLabel","size","required","filled"]});fe.focused=he?he.focused:pe,a.useEffect((()=>{!he&&O&&pe&&(me(!1),V&&V())}),[he,O,pe,V]);const be=he&&he.onFilled,ye=he&&he.onEmpty,Ae=a.useCallback((e=>{(0,z.lq)(e)?be&&be():ye&&ye()}),[be,ye]);(0,k.A)((()=>{se&&Ae({value:ie})}),[ie,Ae,se]);a.useEffect((()=>{Ae(de.current)}),[]);let ge=T,ve=P;_&&"input"===ge&&(ve=ee?(0,r.A)({type:void 0,minRows:ee,maxRows:ee},ve):(0,r.A)({type:void 0,maxRows:q,minRows:K},ve),ge=b);a.useEffect((()=>{he&&he.setAdornedStart(Boolean(ne))}),[he,ne]);const we=(0,r.A)({},s,{color:fe.color||"primary",disabled:fe.disabled,endAdornment:I,error:fe.error,focused:fe.focused,formControl:he,fullWidth:N,hiddenLabel:fe.hiddenLabel,multiline:_,size:fe.size,startAdornment:ne,type:re}),xe=(e=>{const{classes:t,color:o,disabled:n,error:r,endAdornment:l,focused:a,formControl:i,fullWidth:s,hiddenLabel:d,multiline:u,readOnly:c,size:p,startAdornment:m,type:h}=e,f={root:["root","color".concat((0,C.A)(o)),n&&"disabled",r&&"error",s&&"fullWidth",a&&"focused",i&&"formControl",p&&"medium"!==p&&"size".concat((0,C.A)(p)),u&&"multiline",m&&"adornedStart",l&&"adornedEnd",d&&"hiddenLabel",c&&"readOnly"],input:["input",n&&"disabled","search"===h&&"inputTypeSearch",u&&"inputMultiline","small"===p&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",l&&"inputAdornedEnd",c&&"readOnly"]};return(0,A.A)(f,W.g,t)})(we),Se=oe.root||h.Root||L,Ce=te.root||f.root||{},Re=oe.input||h.Input||j;return ve=(0,r.A)({},ve,null!=(o=te.input)?o:f.input),(0,p.jsxs)(a.Fragment,{children:[!B&&M,(0,p.jsxs)(Se,(0,r.A)({},Ce,!(0,y.g)(Se)&&{ownerState:(0,r.A)({},we,Ce.ownerState)},{ref:t,onClick:e=>{de.current&&e.currentTarget===e.target&&de.current.focus(),U&&U(e)}},ae,{className:(0,i.A)(xe.root,Ce.className,m,X&&"MuiInputBase-readOnly"),children:[ne,(0,p.jsx)(v.A.Provider,{value:null,children:(0,p.jsx)(Re,(0,r.A)({ownerState:we,"aria-invalid":fe.error,"aria-describedby":d,autoComplete:u,autoFocus:c,defaultValue:x,disabled:fe.disabled,id:E,onAnimationStart:e=>{Ae("mui-auto-fill-cancel"===e.animationName?de.current:{value:"x"})},name:D,placeholder:Q,readOnly:X,required:fe.required,rows:ee,value:ie,onKeyDown:Z,onKeyUp:J,type:re},ve,!(0,y.g)(Re)&&{as:ge,ownerState:(0,r.A)({},we,ve.ownerState)},{ref:ce,className:(0,i.A)(xe.input,ve.className,X&&"MuiInputBase-readOnly"),onBlur:e=>{V&&V(e),P.onBlur&&P.onBlur(e),he&&he.onBlur?he.onBlur(e):me(!1)},onChange:function(e){if(!se){const t=e.target||de.current;if(null==t)throw new Error((0,l.A)(1));Ae({value:t.value})}for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];P.onChange&&P.onChange(e,...o),$&&$(e,...o)},onFocus:e=>{fe.disabled?e.stopPropagation():(G&&G(e),P.onFocus&&P.onFocus(e),he&&he.onFocus?he.onFocus(e):me(!0))}}))}),I,Y?Y((0,r.A)({},fe,{startAdornment:ne})):null]}))]})}))},1470:(e,t,o)=>{o.d(t,{A:()=>a,g:()=>l});var n=o(7056),r=o(2400);function l(e){return(0,r.Ay)("MuiInputBase",e)}const a=(0,n.A)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"])},112:(e,t,o)=>{function n(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(n(e.value)&&""!==e.value||t&&n(e.defaultValue)&&""!==e.defaultValue)}function l(e){return e.startAdornment}o.d(t,{gr:()=>l,lq:()=>r})},9859:(e,t,o)=>{o.d(t,{A:()=>z});var n,r=o(8587),l=o(8168),a=o(5043),i=o(8606),s=o(4535),d=o(1475),u=o(579);const c=["children","classes","className","label","notched"],p=(0,s.Ay)("fieldset",{shouldForwardProp:d.A})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),m=(0,s.Ay)("legend",{shouldForwardProp:d.A})((e=>{let{ownerState:t,theme:o}=e;return(0,l.A)({float:"unset",width:"auto",overflow:"hidden"},!t.withLabel&&{padding:0,lineHeight:"11px",transition:o.transitions.create("width",{duration:150,easing:o.transitions.easing.easeOut})},t.withLabel&&(0,l.A)({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:o.transitions.create("max-width",{duration:50,easing:o.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},t.notched&&{maxWidth:"100%",transition:o.transitions.create("max-width",{duration:100,easing:o.transitions.easing.easeOut,delay:50})}))}));var h=o(5213),f=o(4827),b=o(7056),y=o(2400),A=o(1470);function g(e){return(0,y.Ay)("MuiOutlinedInput",e)}const v=(0,l.A)({},A.A,(0,b.A)("MuiOutlinedInput",["root","notchedOutline","input"]));var w=o(5673),x=o(2876);const S=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],C=(0,s.Ay)(w.Sh,{shouldForwardProp:e=>(0,d.A)(e)||"classes"===e,name:"MuiOutlinedInput",slot:"Root",overridesResolver:w.WC})((e=>{let{theme:t,ownerState:o}=e;const n="light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return(0,l.A)({position:"relative",borderRadius:(t.vars||t).shape.borderRadius,["&:hover .".concat(v.notchedOutline)]:{borderColor:(t.vars||t).palette.text.primary},"@media (hover: none)":{["&:hover .".concat(v.notchedOutline)]:{borderColor:t.vars?"rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):n}},["&.".concat(v.focused," .").concat(v.notchedOutline)]:{borderColor:(t.vars||t).palette[o.color].main,borderWidth:2},["&.".concat(v.error," .").concat(v.notchedOutline)]:{borderColor:(t.vars||t).palette.error.main},["&.".concat(v.disabled," .").concat(v.notchedOutline)]:{borderColor:(t.vars||t).palette.action.disabled}},o.startAdornment&&{paddingLeft:14},o.endAdornment&&{paddingRight:14},o.multiline&&(0,l.A)({padding:"16.5px 14px"},"small"===o.size&&{padding:"8.5px 14px"}))})),R=(0,s.Ay)((function(e){const{className:t,label:o,notched:a}=e,i=(0,r.A)(e,c),s=null!=o&&""!==o,d=(0,l.A)({},e,{notched:a,withLabel:s});return(0,u.jsx)(p,(0,l.A)({"aria-hidden":!0,className:t,ownerState:d},i,{children:(0,u.jsx)(m,{ownerState:d,children:s?(0,u.jsx)("span",{children:o}):n||(n=(0,u.jsx)("span",{className:"notranslate",children:"\u200b"}))})}))}),{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})((e=>{let{theme:t}=e;const o="light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:t.vars?"rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):o}})),k=(0,s.Ay)(w.f3,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:w.Oj})((e=>{let{theme:t,ownerState:o}=e;return(0,l.A)({padding:"16.5px 14px"},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===t.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===t.palette.mode?null:"#fff",caretColor:"light"===t.palette.mode?null:"#fff",borderRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},"small"===o.size&&{padding:"8.5px 14px"},o.multiline&&{padding:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0})})),O=a.forwardRef((function(e,t){var o,n,s,d,c;const p=(0,x.A)({props:e,name:"MuiOutlinedInput"}),{components:m={},fullWidth:b=!1,inputComponent:y="input",label:A,multiline:v=!1,notched:O,slots:z={},type:W="text"}=p,F=(0,r.A)(p,S),B=(e=>{const{classes:t}=e,o=(0,i.A)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},g,t);return(0,l.A)({},t,o)})(p),I=(0,h.A)(),L=(0,f.A)({props:p,muiFormControl:I,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),j=(0,l.A)({},p,{color:L.color||"primary",disabled:L.disabled,error:L.error,focused:L.focused,formControl:I,fullWidth:b,hiddenLabel:L.hiddenLabel,multiline:v,size:L.size,type:W}),M=null!=(o=null!=(n=z.root)?n:m.Root)?o:C,N=null!=(s=null!=(d=z.input)?d:m.Input)?s:k;return(0,u.jsx)(w.Ay,(0,l.A)({slots:{root:M,input:N},renderSuffix:e=>(0,u.jsx)(R,{ownerState:j,className:B.notchedOutline,label:null!=A&&""!==A&&L.required?c||(c=(0,u.jsxs)(a.Fragment,{children:[A,"\u2009","*"]})):A,notched:"undefined"!==typeof O?O:Boolean(e.startAdornment||e.filled||e.focused)}),fullWidth:b,inputComponent:y,multiline:v,ref:t,type:W},F,{classes:(0,l.A)({},B,{notchedOutline:null})}))}));O.muiName="Input";const z=O},5881:(e,t)=>{var o,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),d=Symbol.for("react.context"),u=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case i:case a:case p:case m:return e;default:switch(e=e&&e.$$typeof){case u:case d:case c:case f:case h:case s:return e;default:return t}}case r:return t}}}o=Symbol.for("react.module.reference")},805:(e,t,o)=>{o(5881)}}]);
//# sourceMappingURL=951.49504bb1.chunk.js.map