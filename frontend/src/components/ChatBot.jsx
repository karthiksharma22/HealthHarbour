import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Create the script tag
    const script = document.createElement("script");
    script.id = "botpressWebChatScript";
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;

    script.onload = () => {
      let exists = document.getElementById("bp-web-widget-container");
      if (exists) return;
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with bot",
        botConversationDescription:
          "This chatbot was built surprisingly fast with Botpress",
        botId: "4af76337-3fb7-4869-9f61-7bfb4dc97d27",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "4af76337-3fb7-4869-9f61-7bfb4dc97d27",
        webhookId: "3512df60-d7cf-4d7c-b0e1-4d3e718206cb",

        themeName: "Bubblegum",
        avatarUrl:
          "https://img.freepik.com/premium-vector/cute-robot-icon-illustration-techology-robot-icon-concept-isolated-flat-cartoon-style_138676-1219.jpg",
        frontendVersion: "v1",
        useSessionStorage: true,
        enableConversationDeletion: true,
        theme: "Bubblegum",
        themeColor: "#2563eb",
      });
    };

    document.body.appendChild(script);
  }, []); // Empty dependency array to run the effect only once

  return <div id="webchat" />;
};

export default Chatbot;
