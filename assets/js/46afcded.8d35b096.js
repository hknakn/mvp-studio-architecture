"use strict";(self.webpackChunkmvp_studio_architecture=self.webpackChunkmvp_studio_architecture||[]).push([[9430],{7345:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=i(4848),s=i(8453);const o={sidebar_position:11},t="Versioning",a={id:"versioning",title:"Versioning",description:"Proper versioning is important for managing the app's lifecycle, tracking changes, and ensuring updates. Our boilerplate follows Semantic Versioning (SemVer) and includes tools to automate the versioning process.",source:"@site/docs/versioning.md",sourceDirName:".",slug:"/versioning",permalink:"/mvp-studio-architecture/docs/versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/your-org/mvp-studio-architecture/edit/master/docs/docs/versioning.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docs",previous:{title:"Error Tracking",permalink:"/mvp-studio-architecture/docs/error-tracking"},next:{title:"Development Workflow",permalink:"/mvp-studio-architecture/docs/development-workflow"}},c={},l=[{value:"Semantic Versioning",id:"semantic-versioning",level:2},{value:"Version Management",id:"version-management",level:2},{value:"Git Tags",id:"git-tags",level:2},{value:"Release Process",id:"release-process",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"versioning",children:"Versioning"})}),"\n",(0,r.jsx)(n.p,{children:"Proper versioning is important for managing the app's lifecycle, tracking changes, and ensuring updates. Our boilerplate follows Semantic Versioning (SemVer) and includes tools to automate the versioning process."}),"\n",(0,r.jsx)(n.h2,{id:"semantic-versioning",children:"Semantic Versioning"}),"\n",(0,r.jsx)(n.p,{children:"We follow the Semantic Versioning specification (SemVer). Each version number is in the format of MAJOR.MINOR.PATCH:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MAJOR version for incompatible API changes"}),"\n",(0,r.jsx)(n.li,{children:"MINOR version for adding functionality in a backward-compatible manner"}),"\n",(0,r.jsx)(n.li,{children:"PATCH version for backward-compatible bug fixes"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"version-management",children:"Version Management"}),"\n",(0,r.jsxs)(n.p,{children:["We use ",(0,r.jsx)(n.code,{children:"react-native-version"})," to manage versions across both iOS and Android projects:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "version": "react-native-version"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"To bump the version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm version patch  # or minor, or major\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will update the version in ",(0,r.jsx)(n.code,{children:"package.json"}),", ",(0,r.jsx)(n.code,{children:"android/app/build.gradle"}),", and ",(0,r.jsx)(n.code,{children:"ios/YourApp/Info.plist"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"git-tags",children:"Git Tags"}),"\n",(0,r.jsx)(n.p,{children:"We use Git tags to mark release points in our repository:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git tag -a v1.1.0 -m "Release version 1.1.0"\ngit push origin v1.1.0\n'})}),"\n",(0,r.jsx)(n.h2,{id:"release-process",children:"Release Process"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure all changes for the release are merged into the main branch."}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"npm version [patch|minor|major]"})," to bump the version."]}),"\n",(0,r.jsx)(n.li,{children:"Push the changes and the new tag to the remote repository."}),"\n",(0,r.jsx)(n.li,{children:"Create a new release on GitHub, using the tag and the changelog entry."}),"\n",(0,r.jsx)(n.li,{children:"Trigger the CI/CD pipeline to build and deploy the new version."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var r=i(6540);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);