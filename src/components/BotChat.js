   // BotChat.js

   import React, { useEffect } from 'react';

   const BotChat = () => {
     useEffect(() => {
       const script = document.createElement('script');
       script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
       script.async = true;
       document.body.appendChild(script);

       script.onload = () => {
         window.botpressWebChat.init({
           "composerPlaceholder": "Chat with GB Event Management",
           "botConversationDescription": "Ask me anything",
           "botId": "d005913b-2031-412d-8ac8-48a4bd283eb8",
           "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
           "messagingUrl": "https://messaging.botpress.cloud",
           "clientId": "d005913b-2031-412d-8ac8-48a4bd283eb8",
           "webhookId": "159e2b1a-b280-470c-aca5-f5511accdc8c",
           "lazySocket": true,
           "themeName": "prism",
           "botName": "GB Event Management",
           "frontendVersion": "v1",
           "useSessionStorage": true,
           "enableConversationDeletion": true,
           "theme": "prism",
           "themeColor": "#2563eb"
         });
       };

       return () => {
         document.body.removeChild(script);
       };
     }, []);

     return (
       <div className='chattingisere' id="webchat" style={{ width: '100%', height: '3vh' }} />
     );
   };

   export default BotChat;