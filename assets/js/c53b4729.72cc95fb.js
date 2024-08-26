"use strict";(self.webpackChunkmvp_studio_architecture=self.webpackChunkmvp_studio_architecture||[]).push([[4704],{2384:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(4848),s=n(8453);const r={sidebar_position:15},i="Development Workflow",c={id:"development-workflow",title:"Development Workflow",description:"Our boilerplate includes several tools and configurations to improve the development workflow, making it easier to maintain code quality and consistency across the project.",source:"@site/docs/development-workflow.md",sourceDirName:".",slug:"/development-workflow",permalink:"/mvp-studio-architecture/docs/development-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/your-org/mvp-studio-architecture/edit/master/docs/docs/development-workflow.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"docs",previous:{title:"Versioning",permalink:"/mvp-studio-architecture/docs/versioning"},next:{title:"Security",permalink:"/mvp-studio-architecture/docs/security"}},l={},d=[{value:"Husky for Git Hooks",id:"husky-for-git-hooks",level:2},{value:"Pre-commit Hook",id:"pre-commit-hook",level:3},{value:"Pre-push Hook",id:"pre-push-hook",level:3},{value:"Absolute Imports",id:"absolute-imports",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"development-workflow",children:"Development Workflow"})}),"\n",(0,t.jsx)(o.p,{children:"Our boilerplate includes several tools and configurations to improve the development workflow, making it easier to maintain code quality and consistency across the project."}),"\n",(0,t.jsx)(o.h2,{id:"husky-for-git-hooks",children:"Husky for Git Hooks"}),"\n",(0,t.jsx)(o.p,{children:"We use Husky to manage Git hooks, ensuring that certain checks are run before commits and pushes."}),"\n",(0,t.jsx)(o.h3,{id:"pre-commit-hook",children:"Pre-commit Hook"}),"\n",(0,t.jsx)(o.p,{children:"Our pre-commit hook runs the following checks:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Linting with ESLint"}),"\n",(0,t.jsx)(o.li,{children:"Type checking with TypeScript"}),"\n",(0,t.jsx)(o.li,{children:"Formatting with Prettier"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["This is configured in ",(0,t.jsx)(o.code,{children:".husky/pre-commit"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpm run lint\nnpm run type-check\nnpm run format\n'})}),"\n",(0,t.jsx)(o.h3,{id:"pre-push-hook",children:"Pre-push Hook"}),"\n",(0,t.jsx)(o.p,{children:"The pre-push hook runs our test suite:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpm test\n'})}),"\n",(0,t.jsx)(o.h2,{id:"absolute-imports",children:"Absolute Imports"}),"\n",(0,t.jsxs)(o.p,{children:["We've configured absolute imports to make it easier to import modules without needing to use long relative paths. This is set up in ",(0,t.jsx)(o.code,{children:"tsconfig.json"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["src/*"]\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"Now you can import modules like this:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-typescript",children:'import { Button } from "@/components/ui";\nimport { useUser } from "@/hooks/useUser";\n'})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var t=n(6540);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);