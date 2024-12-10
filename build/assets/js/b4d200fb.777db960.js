"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[827],{9139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=t(4848),s=t(8453);const a={sidebar_position:1},c="Client API",d={id:"kotlin-client/client-api",title:"Client API",description:"To use the standalone Kotlin client app, first clone the mercurylayer repository:",source:"@site/docs/kotlin-client/client-api.md",sourceDirName:"kotlin-client",slug:"/kotlin-client/client-api",permalink:"/docs/kotlin-client/client-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kotlin client",permalink:"/docs/category/kotlin-client"}},r={},l=[{value:"Command-line arguments:",id:"command-line-arguments",level:2},{value:"Create Wallet",id:"create-wallet",level:3},{value:"New Deposit Address",id:"new-deposit-address",level:3},{value:"List Statecoins",id:"list-statecoins",level:3},{value:"New Statechain Adress",id:"new-statechain-adress",level:3},{value:"Send a Statecoin",id:"send-a-statecoin",level:3},{value:"Receive a Statecoin",id:"receive-a-statecoin",level:3},{value:"Withdraw a Statecoin to a Bitcoin Address",id:"withdraw-a-statecoin-to-a-bitcoin-address",level:3},{value:"Broadcast Basckup Transaction to a Bitcoin Address",id:"broadcast-basckup-transaction-to-a-bitcoin-address",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"client-api",children:"Client API"}),"\n",(0,i.jsx)(n.p,{children:"To use the standalone Kotlin client app, first clone the mercurylayer repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/commerceblock/mercurylayer.git\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then switch to the ",(0,i.jsx)(n.code,{children:"dev"})," branch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd mercurylayer\ngit checkout dev\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then change directory to the standalone client:"}),"\n",(0,i.jsx)(n.p,{children:"cd /clients/apps/kotlin"}),"\n",(0,i.jsx)(n.h2,{id:"command-line-arguments",children:"Command-line arguments:"}),"\n",(0,i.jsx)(n.h3,{id:"create-wallet",children:"Create Wallet"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"create-wallet <wallet-name>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"create-wallet w1"})]}),"\n",(0,i.jsx)(n.h3,{id:"new-deposit-address",children:"New Deposit Address"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"new-deposit-address <wallet-name> <amount>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"new-deposit-address w1 1000"})]}),"\n",(0,i.jsx)(n.h3,{id:"list-statecoins",children:"List Statecoins"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"list-statecoins <wallet-name>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"list-statecoins w1"})]}),"\n",(0,i.jsx)(n.h3,{id:"new-statechain-adress",children:"New Statechain Adress"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"new-transfer-address <wallet-name>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"new-transfer-address w2"})]}),"\n",(0,i.jsx)(n.h3,{id:"send-a-statecoin",children:"Send a Statecoin"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"new-transfer-address <wallet-name> <statechain-id> <recipient-statechain-address>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"transfer-send w1 2dd78ce438a1450083996fa7f37a02d0 tml1qqp3sp8pu0v38d9krdekckuy4qnueqtnlq8radjwf5rvvgkdnm4y03szgljuxjweppkyymh44wr034avmut5w83xcaey83pp7nqqxqcnyldsa3jpyr"})]}),"\n",(0,i.jsx)(n.h3,{id:"receive-a-statecoin",children:"Receive a Statecoin"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"transfer-receive <wallet-name>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"transfer-receive w2"})]}),"\n",(0,i.jsx)(n.h3,{id:"withdraw-a-statecoin-to-a-bitcoin-address",children:"Withdraw a Statecoin to a Bitcoin Address"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"withdraw <wallet-name> <statechain-id> <btc-address> <optional_fee_rate>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"withdraw w1 453351464f6a4b0ab8401826576c69be tb1qw2hfzv5qzxtmzatjxn5600k9yqnhhddeu6npu5"})]}),"\n",(0,i.jsx)(n.h3,{id:"broadcast-basckup-transaction-to-a-bitcoin-address",children:"Broadcast Basckup Transaction to a Bitcoin Address"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"broadcast-backup-transaction <wallet-name> <statechain-id> <btc-address> <optional_fee_rate>"})}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"broadcast-backup-transaction w1 e82e423298ca4c7bb7e37771b4dc3e8a tb1qw2hfzv5qzxtmzatjxn5600k9yqnhhddeu6npu5"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(6540);const s={},a=i.createContext(s);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);