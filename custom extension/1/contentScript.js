// contentScript.js

const themeOptions = {
  light: {
    backgroundColor: "#fff",
    textColor: "#000"
  },
  dark: {
    backgroundColor: "#000",
    textColor: "#fff"
  }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getTheme") {
    const selectedTheme = localStorage.getItem("blackmagicTheme") || "light";
    sendResponse({ theme: themeOptions[selectedTheme] });
  } else if (message.type === "setTheme") {
    localStorage.setItem("blackmagicTheme", message.theme);
    applyTheme(message.theme);
  }
});

function applyTheme(themeName) {
  document.body.style.backgroundColor = themeOptions[themeName].backgroundColor;
  document.body.style.color = themeOptions[themeName].textColor;
}
