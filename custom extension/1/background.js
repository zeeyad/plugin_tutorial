// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Blackmagic Extension installed successfully!");
  });
  
  chrome.contextMenus.create({
    id: "blackmagic-context-menu",
    title: "Blackmagic Options",
    contexts: ["browser_action"]
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "blackmagic-context-menu") {
      chrome.tabs.create({
        url: chrome.runtime.getURL("options.html")
      });
    }
  });
  