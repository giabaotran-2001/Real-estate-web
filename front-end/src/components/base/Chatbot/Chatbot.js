import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import React, { Component } from "react";

export class Chatbot extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        onInit: function () {
          var css = `.mck-running-on {display: none !important;}`; // Replace <YOUR_CSS_CODE_HERE> with the CSS you want to override.
          window.Kommunicate.customizeWidgetCss(css);
        },
        appId: "574a737481abffa3b730ac577ea9374",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
        labels: {
          "input.message": "Hãy nhập câu hỏi của bạn...",
          "conversations.title": "Hỗ trợ tư vấn",
          "start.new": "Bắt đầu cuộc trò chuyện mới",
          "lead.collection": {
            title: "Chào bạn",
            submit: "Bắt đầu",
          },
        },
      };

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return <div></div>;
  }
}

export default Chatbot;
