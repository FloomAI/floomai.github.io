"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4362],{1742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(5893),r=n(1151);const s={sidebar_position:1},p="template",i={id:"pipelines/objects/prompt/template",title:"template",description:"Prompt defines the prompt sent to AI Models.",source:"@site/docs/pipelines/objects/prompt/template.md",sourceDirName:"pipelines/objects/prompt",slug:"/pipelines/objects/prompt/template",permalink:"/docs/pipelines/objects/prompt/template",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"prompt",permalink:"/docs/category/prompt"},next:{title:"context",permalink:"/docs/pipelines/objects/prompt/context"}},a={},l=[];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"template",children:"template"}),"\n",(0,o.jsx)(t.p,{children:"Prompt defines the prompt sent to AI Models."}),"\n",(0,o.jsxs)(t.p,{children:["You can use a predefined ",(0,o.jsx)(t.strong,{children:"Prompt Template"})," and initiate the variables for system and user prompt when executing the AI Pipeline from the SDK, or define the entire prompt with the SDK."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"prompt:  \n  template: \n    package: floom/prompt/templates/default\n    system: \"You are helpful assistant\" \n  \n  # \ud83d\udcc4 tutorial.pdf as context\n  context:\n    - package: floom/prompt/context/pdf\n      path: /etc/tutorial.pdf\n      \n  # \u274c Filter Profanity   \n  validation:\n    - package: floom/plugins/bad-words-filter\n      disallow: ['profanity']\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This prompt uses Floom default ",(0,o.jsx)(t.strong,{children:"Prompt Template"})," package located at ",(0,o.jsx)(t.em,{children:"floom/prompt/templates/default"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83d\udca1Note that most templates will use both System Prompt (general instruction) and User Prompt (coming from user input). ",(0,o.jsx)(t.a,{href:"/docs/other/prompt-roles",children:"Learn about their differences"}),"."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>p});var o=n(7294);const r={},s=o.createContext(r);function p(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);