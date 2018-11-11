chrome.contextMenus.create({
	title: "测试右键菜单",
	onclick: function(){alert('您点击了右键菜单！');}
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request == "switch")
      sendResponse(localStorage.switch);
 });