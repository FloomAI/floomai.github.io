"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1901],{2228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(5893),s=n(1151);const i={sidebar_position:2},r="context",c={id:"pipelines/objects/response/context",title:"context",description:"When executing prompts on AI Models, their knowledge is limited to the knowledge they were trained on, usually a wide general source like Wikipedia.",source:"@site/docs/pipelines/objects/response/context.md",sourceDirName:"pipelines/objects/response",slug:"/pipelines/objects/response/context",permalink:"/docs/pipelines/objects/response/context",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"format",permalink:"/docs/pipelines/objects/response/format"},next:{title:"validation",permalink:"/docs/pipelines/objects/response/validation"}},a={},l=[];function d(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"context",children:"context"}),"\n",(0,o.jsx)(t.p,{children:"When executing prompts on AI Models, their knowledge is limited to the knowledge they were trained on, usually a wide general source like Wikipedia."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Context"})," is Floom's way of providing the AI Model with specific knowledge. Context can be any data you decide the AI Model should know before processing your prompt."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83d\udca1Context is also known as ",(0,o.jsx)(t.strong,{children:'"RAG"'}),' (Retrieval Augmented Generation) or "Knowledge" in different AI integrations platforms.']}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"# \ud83d\udcc4 tutorial.pdf as context\ncontext:\n  - package: floom/prompt/context/pdf\n    path: /etc/tutorial.pdf\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Context is being retrieved by ",(0,o.jsx)(t.strong,{children:"Context Retrievers"})," plugins that act as parsers that extract data from different sources: files, databases, APIs etc."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83d\udca1In this example, the plugin package is ",(0,o.jsx)(t.em,{children:"floom/prompt/context/pdf"})," which is Floom's default PDF ",(0,o.jsx)(t.strong,{children:"Context Retriever"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);