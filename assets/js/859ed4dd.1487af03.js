"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8341],{7116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(5893),l=t(1151),o=t(4866),a=t(5162);const i={sidebar_position:1},s="Basic",c={id:"pipelines/examples/text/generate/basic",title:"Basic",description:"Easily Generate Text with AI in your app using \ud83c\udf0a Floom.",source:"@site/docs/pipelines/examples/text/generate/basic.mdx",sourceDirName:"pipelines/examples/text/generate",slug:"/pipelines/examples/text/generate/basic",permalink:"/docs/pipelines/examples/text/generate/basic",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Generate",permalink:"/docs/category/generate"},next:{title:"Content Creation",permalink:"/docs/category/content-creation"}},u={},d=[{value:"Create Pipeline",id:"create-pipeline",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Run",id:"run",level:3},{value:"Production Improvements",id:"production-improvements",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"basic",children:"Basic"}),"\n",(0,r.jsxs)(n.p,{children:["Easily ",(0,r.jsx)(n.strong,{children:"Generate Text"})," with ",(0,r.jsx)(n.strong,{children:"AI"})," in your app using ",(0,r.jsx)(n.strong,{children:"\ud83c\udf0a Floom"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Learning time \ud83d\udd59: 2 minutes"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-pipeline",children:"Create Pipeline"}),"\n",(0,r.jsxs)(n.p,{children:["Create a YAML file named ",(0,r.jsx)(n.strong,{children:"'text-generation.yaml'"})," using your favorite editor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kind: floom/pipeline/1.2\n\npipeline:\n  name: text-generation\n\nprompt:  \n  template: \n    package: floom/prompt/template/default\n    system: "Be polite and concise"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"deploy",children:"Deploy"}),"\n",(0,r.jsxs)(n.p,{children:["Deploy the AI Pipeline with ",(0,r.jsx)(n.a,{href:"/docs/floom-cli/overview",children:"Floom CLI"})," to ",(0,r.jsx)(n.a,{href:"/docs/floom-cloud/overview",children:"\u2601\ufe0f Floom Cloud"})," or local ",(0,r.jsx)(n.a,{href:"/docs/category/-floom-docker/overview",children:"\ud83d\udc33 Floom Docker"}),"."]}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"cloud",label:"\u2601\ufe0f Floom Cloud",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"floom deploy text-generation.yaml\n"})})}),(0,r.jsx)(a.Z,{value:"docker",label:"\ud83d\udc33 Docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"floom deploy -endpoint=<YOUR-FLOOM-ADDRESS> -f text-generation.yaml\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Copy the deployed pipeline URI:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Deploying pipeline 'text-generation'...\nDeployed to text-generation-28g4fj82.pl.floom.ai\n"})}),"\n",(0,r.jsx)(n.h3,{id:"run",children:"Run"}),"\n",(0,r.jsxs)(n.p,{children:["Run the pipeline from your app using ",(0,r.jsx)(n.a,{href:"/docs/floom-sdk/overview",children:"Floom SDK"}),"."]}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"python",label:"Python",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from floom import FloomClient\n\nfloom_client = FloomClient()\n\nfloom_client.run(\n  pipeline="text-generation-28g4fj82.pl.floom.ai", \n  prompt="Your query here"\n)\n'})})}),(0,r.jsx)(a.Z,{value:"node",label:"Node",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { FloomClient } from \'../FloomClient\';\n\nconst floomClient = new FloomClient();\n\nconst response = await floomClient.run(\n  "text-generation-28g4fj82.pl.floom.ai",\n  "Your query here",\n);\n'})})}),(0,r.jsx)(a.Z,{value:"net",label:".NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'var floomClient = new FloomClient();\n\nvar response = await floomClient.Run(\n      pipeline: "text-generation-28g4fj82.pl.floom.ai",\n      prompt: "Your query here"\n);\n'})})}),(0,r.jsx)(a.Z,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import ai.floom.FloomClient;\n\nFloomClient floomClient = new FloomClient();\n\nFloomResponse response = floomClient.run(\n      "text-generation-28g4fj82.pl.floom.ai",\n      "Your query here"\n);\n'})})}),(0,r.jsx)(a.Z,{value:"go",label:"Golang",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'import (\n    "fmt"\n    "github.com/FloomAI/FloomSDK-Go"\n)\n\nfloomClient := floom.NewFloomClient()\n\nresponse, err := floomClient.Run(\n    "text-generation-28g4fj82.pl.floom.ai", \n    "Your query here"\n)\n'})})}),(0,r.jsx)(a.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'extern crate floom;\n\nuse floom::FloomClient;\n\nlet mut floom_client = FloomClient::new();\n\nlet response = floom_client.run(\n    "text-generation-28g4fj82.pl.floom.ai",\n    "Your query here",\n);\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"production-improvements",children:"Production Improvements"}),"\n",(0,r.jsxs)(n.p,{children:["including Plugins: ",(0,r.jsx)(n.strong,{children:"Caching"}),", ",(0,r.jsx)(n.strong,{children:"Cost Management"}),", ",(0,r.jsx)(n.strong,{children:"Prompt Validation"})," and ",(0,r.jsx)(n.strong,{children:"Response Validation"})," executed on ",(0,r.jsx)(n.em,{children:"OpenAI GPT-3.5"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512);const l={tabItem:"tabItem_Ymn6"};var o=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(7294),l=t(512),o=t(2466),a=t(6550),i=t(469),s=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(l.location.search);n.set(o,e),l.replace({...l.location,search:n.toString()})}),[o,l])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,o=p(e),[a,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=h({queryString:t,groupId:l}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,o]=(0,u.Nk)(t);return[l,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:l}),x=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),l=i[t].value;l!==r&&(c(n),a(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,l.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,l.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function C(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7294);const l={},o=r.createContext(l);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);