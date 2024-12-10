"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[953],{3976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var r=n(4848),i=n(8453);const c={sidebar_position:2},s="Atomic transfer",a={id:"tutorial-basics/create-a-document",title:"Atomic transfer",description:"The purpose of the atomic transfer protocol is to enable two (or more) coin transfers to be completed in a way that they all complete or none of them do. This effectively means that the transfer-receiver function and key update is only completed if both receivers have the correct information to proceed. Once each receiver has verified that the transfer message they have received is valid, then the other parties can be allowed to complete transfer-receiver.",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/docs/tutorial-basics/create-a-document",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mercury Layer Protocol",permalink:"/docs/tutorial-basics/create-a-page"},next:{title:"Lightning Latch",permalink:"/docs/tutorial-basics/create-a-blog-post"}},o={},h=[{value:"Protocol",id:"protocol",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"atomic-transfer",children:"Atomic transfer"}),"\n",(0,r.jsx)(t.p,{children:"The purpose of the atomic transfer protocol is to enable two (or more) coin transfers to be completed in a way that they all complete or none of them do. This effectively means that the transfer-receiver function and key update is only completed if both receivers have the correct information to proceed. Once each receiver has verified that the transfer message they have received is valid, then the other parties can be allowed to complete transfer-receiver."}),"\n",(0,r.jsx)(t.p,{children:"To enable this there needs to be a mechanism to prevent the transfer-receiver being completed before the other parties have verified and confirmed their transfer messages. If all parties verify, then transfer-receiver can proceed, otherwise the key shares are not updated and ownership of the coins remains with the inital owner."}),"\n",(0,r.jsxs)(t.p,{children:["The process is performed by each party in the atomic transfer supplying a ",(0,r.jsx)(t.code,{children:"batch_id"})," in the transfer-sender message. The use of this (as opposed to leaving this null) is that the statecoin is put into a special ",(0,r.jsx)(t.em,{children:"locked"})," state for a configured timeout period after the first ",(0,r.jsx)(t.code,{children:"batch_id"})," is submitted. During this locked status two things are prevented 1) The sender cannot perform another ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," operation on the same coin (i.e. to send to a different address) and 2) ",(0,r.jsx)(t.code,{children:"/transfer/receiver"})," cannot be performed until all coins with the same ",(0,r.jsx)(t.code,{children:"batch_id"})," are ",(0,r.jsx)(t.em,{children:"unlocked"})," by all the owners unlocking the coins with a new ",(0,r.jsx)(t.code,{children:"/transfer/unlock"})," function. At the end of the timeout (if all coins with a specified ",(0,r.jsx)(t.code,{children:"batch_id"})," have not been unlocked), the ",(0,r.jsx)(t.code,{children:"/transfer/receiver"})," function will still be blocked (i.e. return error) but the original owner can repeat ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," again with a null ",(0,r.jsx)(t.code,{children:"batch_id"})," to regain control of the coin."]}),"\n",(0,r.jsx)(t.h2,{id:"protocol",children:"Protocol"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"statechain_transfer"})," DB table can have 3 additional columns: ",(0,r.jsx)(t.code,{children:"batch_id"})," (string), ",(0,r.jsx)(t.code,{children:"batch-time"})," (integer) and ",(0,r.jsx)(t.code,{children:"locked"})," (boolen). By default ",(0,r.jsx)(t.code,{children:"batch_id"}),", ",(0,r.jsx)(t.code,{children:"batch-time"})," are null and ",(0,r.jsx)(t.code,{children:"locked"})," is ",(0,r.jsx)(t.code,{children:"false"}),". The server is configured with ",(0,r.jsx)(t.code,{children:"batch-timeout"})," parameter in seconds (in practice this will be some number of minutes). This is set in the server Settings."]}),"\n",(0,r.jsx)(t.p,{children:"The atomic transfer will then proceed as follows:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The two or more parties that want to engage in an atomic transfer cooperate and share a ",(0,r.jsx)(t.code,{children:"batch_id"})," (this is just a random UUID generated by one of the participants and shared with the other). One party can generate it and share with the others."]}),"\n",(0,r.jsxs)(t.li,{children:["The parties each generate a ",(0,r.jsx)(t.code,{children:"ml1"})," address that they want the coin they will recieve paid to and send to the sender."]}),"\n",(0,r.jsxs)(t.li,{children:["Each party performs ",(0,r.jsx)(t.code,{children:"/transfer/sender {statechain_id, batch_id, auth_sig, new_user_auth_key}"})," with the ",(0,r.jsx)(t.code,{children:"batch_id"})," paying to the receiving party ",(0,r.jsx)(t.code,{children:"new_user_auth_key"})," and then create and upload the transfer message."]}),"\n",(0,r.jsxs)(t.li,{children:["If the ",(0,r.jsx)(t.code,{children:"batch_id"})," is set in a ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," call (and not null) the server adds this to the ",(0,r.jsx)(t.code,{children:"batch_id"})," DB column for the specified ",(0,r.jsx)(t.code,{children:"statechain_id"})," and updates the ",(0,r.jsx)(t.code,{children:"locked"})," status to ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The server then checks all other statecoins to see if the same ",(0,r.jsx)(t.code,{children:"batch_id"})," is used for any other coin in the table."]}),"\n",(0,r.jsxs)(t.li,{children:["If there are no other coins with this ",(0,r.jsx)(t.code,{children:"batch_id"}),", then it adds the current time (unix epoch time in seconds) to the ",(0,r.jsx)(t.code,{children:"batch-time"})," column."]}),"\n",(0,r.jsxs)(t.li,{children:["If there are any other coin(s) with this same ",(0,r.jsx)(t.code,{children:"batch_id"})," then the ",(0,r.jsx)(t.code,{children:"batch-time"})," of those coin(s) is copied to the specified coin ",(0,r.jsx)(t.code,{children:"batch-time"})," column."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This means that all coins where ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," have the same ",(0,r.jsx)(t.code,{children:"batch_id"})," will have the same ",(0,r.jsx)(t.code,{children:"batch-time"})," set."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["With this logic, it does not mater which order the coins call ",(0,r.jsx)(t.code,{children:"/transfer/sender"}),", the first call with a specific ",(0,r.jsx)(t.code,{children:"batch_id"})," will set the initial ",(0,r.jsx)(t.code,{children:"batch-time"})," for the atomic transfer."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," is called for any coin, if ",(0,r.jsx)(t.code,{children:"batch-time"})," + ",(0,r.jsx)(t.code,{children:"batch-timeout"})," (as read from the DB table) is ",(0,r.jsx)(t.em,{children:"greater"})," than or equal to the current time (i.e. the coin is still within the timeout period) then it will return an error (",(0,r.jsx)(t.code,{children:"ERROR: statecoin batch locked"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," is called for any coin, if ",(0,r.jsx)(t.code,{children:"batch-time"})," + ",(0,r.jsx)(t.code,{children:"batch-timeout"})," (as read from the DB table) is ",(0,r.jsx)(t.em,{children:"less"})," the current time (i.e. the timeout period has ended) the server will check the DB table for any other coins have the same ",(0,r.jsx)(t.code,{children:"batch_id"}),". For each coin that shares the same",(0,r.jsx)(t.code,{children:"batch_id"}),", if all ",(0,r.jsx)(t.code,{children:"locked"})," values are false, then the transfer-sender returns with an error (",(0,r.jsx)(t.code,{children:"ERROR: batch transfer completed"}),") (in this case all participants have verified the transfer message and the atomic transfer must complete - all parties must perform transfer-receiver).\nIf all ",(0,r.jsx)(t.code,{children:"locked"})," values are NOT false ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," can be called again with a null or different ",(0,r.jsx)(t.code,{children:"batch_id"}),". If called with null ",(0,r.jsx)(t.code,{children:"batch_id"})," then ",(0,r.jsx)(t.code,{children:"batch-time"})," is set to null and ",(0,r.jsx)(t.code,{children:"locked"})," to false."]}),"\n",(0,r.jsxs)(t.ol,{start:"8",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Each participant in the atomic transfer then polls ",(0,r.jsx)(t.code,{children:"/transfer/get_msg_addr"})," with their receive address within the timeout period. If they receive a transfer message, they fully verify as usual. If the verification passes, then the participant calls a function ",(0,r.jsx)(t.code,{children:"/transfer/unlock {statechain_id, auth_sig}"})," which changes the ",(0,r.jsx)(t.code,{children:"locked"})," status of the coin (",(0,r.jsx)(t.code,{children:"statechain_id"}),") in the DB table to ",(0,r.jsx)(t.code,{children:"false"}),".\nIf the ",(0,r.jsx)(t.code,{children:"batch-time"})," + ",(0,r.jsx)(t.code,{children:"batch-timeout"})," is less than the current time, then the ",(0,r.jsx)(t.code,{children:"/transfer/unlock"})," function should not unlock and instead return an error."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Each participant then calls ",(0,r.jsx)(t.code,{children:"transfer-reciever"}),". If ",(0,r.jsx)(t.code,{children:"/transfer/receiver"})," is called on any coin and ",(0,r.jsx)(t.code,{children:"batch_id"})," and ",(0,r.jsx)(t.code,{children:"batch-time"})," are set (not null) and ",(0,r.jsx)(t.code,{children:"locked"})," is false, then the server checks if any other coins in the DB table have the same ",(0,r.jsx)(t.code,{children:"batch_id"}),". For alls coin that share the same ",(0,r.jsx)(t.code,{children:"batch_id"}),", if all ",(0,r.jsx)(t.code,{children:"locked"})," are false, then the function proceeds with the key update, otherwise it returns with an error (",(0,r.jsx)(t.code,{children:"ERROR: coin in locked state"}),").\nIf ",(0,r.jsx)(t.code,{children:"/transfer/receiver"})," is called on any coin and ",(0,r.jsx)(t.code,{children:"batch_id"})," and ",(0,r.jsx)(t.code,{children:"batch-time"})," are set (not null) and ",(0,r.jsx)(t.code,{children:"locked"})," is true, then this function should return an error."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The outcomes of this protocol:"}),"\n",(0,r.jsxs)(t.p,{children:["Any coins where ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," is called with a specific ",(0,r.jsx)(t.code,{children:"batch-id"})," within the ",(0,r.jsx)(t.code,{children:"batch-time"})," of the first one to call, will be added to the batch transfer."]}),"\n",(0,r.jsxs)(t.p,{children:["Then, if all parties coins progress to call ",(0,r.jsx)(t.code,{children:"/transfer/unlock"})," within the ",(0,r.jsx)(t.code,{children:"batch-time"})," then ",(0,r.jsx)(t.code,{children:"/transfer/receiver"})," can be performed for all coins by each party."]}),"\n",(0,r.jsxs)(t.p,{children:["If any single participant doesn't call ",(0,r.jsx)(t.code,{children:"/transfer/unlock"})," within the ",(0,r.jsx)(t.code,{children:"batch-time"})," then no-one can call ",(0,r.jsx)(t.code,{children:"/transfer/receiver"})," but after the ",(0,r.jsx)(t.code,{children:"batch-time"})," expiry each owner can call ",(0,r.jsx)(t.code,{children:"/transfer/sender"})," again to recover the coin (i.e. send to to their own address with null ",(0,r.jsx)(t.code,{children:"batch_id"})," and then calling transfer-receiver)."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);