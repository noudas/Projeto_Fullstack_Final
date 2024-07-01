// YoutubeEmbed.tsx
import React from "react";
import { WebView } from "react-native-webview"; // Import WebView

const YoutubeEmbed = ({ embedId }) => (
  <WebView
    source={{ uri: `https://www.youtube.com/embed/${embedId}` }}
    style={{ padding: 200,
        borderBlockColor:"white",
        borderWidth:2
    }}
  />
);

export default YoutubeEmbed;
