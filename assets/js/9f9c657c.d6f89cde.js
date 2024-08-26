"use strict";(self.webpackChunkmvp_studio_architecture=self.webpackChunkmvp_studio_architecture||[]).push([[6327],{6817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(4848),a=n(8453);const i={sidebar_position:4},r="Feature Flagging",s={id:"feature-flagging",title:"Feature Flagging",description:"Our boilerplate uses Firebase Remote Config for implementing feature flags. This allows you to modify your app's behavior and appearance without publishing an app update.",source:"@site/docs/feature-flagging.md",sourceDirName:".",slug:"/feature-flagging",permalink:"/mvp-studio-architecture/docs/feature-flagging",draft:!1,unlisted:!1,editUrl:"https://github.com/your-org/mvp-studio-architecture/edit/master/docs/docs/feature-flagging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Push Notifications",permalink:"/mvp-studio-architecture/docs/push-notifications"},next:{title:"In-App Purchases and Subscriptions",permalink:"/mvp-studio-architecture/docs/in-app-purchases"}},c={},u=[{value:"Usage",id:"usage",level:2}];function g(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"feature-flagging",children:"Feature Flagging"})}),"\n",(0,o.jsxs)(t.p,{children:["Our boilerplate uses ",(0,o.jsx)(t.strong,{children:"Firebase Remote Config"})," for implementing feature flags. This allows you to modify your app's behavior and appearance without publishing an app update."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:"Here's how to use Firebase Remote Config for feature flags:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'import remoteConfig from "@react-native-firebase/remote-config";\n\n// Set up remote config\nconst setupRemoteConfig = async () => {\n  await remoteConfig().setConfigSettings({\n    minimumFetchIntervalMillis: 300000, // 5 minutes\n  });\n\n  await remoteConfig().setDefaults({\n    new_feature_enabled: false,\n    welcome_message: "Welcome to our app!",\n  });\n\n  await remoteConfig().fetchAndActivate();\n};\n\n// Get a boolean value\nconst isNewFeatureEnabled = () => {\n  return remoteConfig().getBoolean("new_feature_enabled");\n};\n\n// Get a string value\nconst getWelcomeMessage = () => {\n  return remoteConfig().getString("welcome_message");\n};\n\n// Listen for config changes\nremoteConfig().onConfigUpdated(async () => {\n  await remoteConfig().activate();\n  console.log("Remote config updated and activated");\n});\n'})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);