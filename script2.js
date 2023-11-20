chrome.commands.onCommand.addListener((command) => {
    //detects and responds to keybinds
    if (command == "panic2") {
        findOpenEDSF().then((result) => {
            chrome.tabs.remove(result);
        });
    }
    chrome.tabs.create({ url: "https://google.com" });
});
async function findOpenEDSF() {
    //finds all open EDSF tabs and returns the tab ids in an array
    let edsf = []
    let tabs = await chrome.tabs.query({ url: "*://www.edsupportforum.com/*" });
    for(let i = 0; i < tabs.length; i++) {
        edsf.push(tabs[i].id);
    }
    return edsf;
}