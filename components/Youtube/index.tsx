// YoutubeEmbed.tsx
import React from "react";
import { WebView } from "react-native-webview"; // Import WebView

const YoutubeEmbed = ({ embedId }) => (
  <WebView
    source={{ uri: `https://www.youtube.com/embed/${embedId}` }}
    style={{ padding: 300,
        height: "100%",
        width:"100%", 
        borderBlockColor:"white",
        borderWidth:2
    }} // Adjust styling as needed
  />
);

export default YoutubeEmbed;
