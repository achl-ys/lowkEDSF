//place the url to your image of choice in the quotes
let newLogo = "https://i.postimg.cc/VmqbTFgT/image.jpg";

//word/phrase on the left will be replaced with word/phrase on the right, entries can be added and removed from this list but make sure you remember the commas or it will crash. words will be checked for alternate capitalisations so there is no needed to add duplicate entries. keep in mind words will be replaced in the order they appear on the list so you may need to put some words/phrases in front of words/phrases which they contain
let swapWith = [
["eating disorder support forum","edit me"],
["eating disorder","edit me"],
["BED","edit me"],
["EDSF","edit me"],
["ED","edit me"],
["anorexia","edit me"],
["bulimia","edit me"],
["EDNOS","edit me"],
["orthorexia","edit me"],
["calories","edit me"],
["cals","edit me"],
["diet","edit me"],
["fasting","edit me"],
["starving","edit me"],
["binging","edit me"],
["binge","edit me"],
["you can edit the words/phrases on the left as well","they're just suggestions for the kinds of words to add"]
]

//--------------------------FORMATTING--------------------------

//formats the items in the swaplist into lists that the computer can iterate through and check for alternative capitalisations
for (let i = 0; i < swapWith.length; i++) {
    swapWith[i][0] = format(swapWith[i][0]);
    swapWith[i][1] = format(swapWith[i][1]);
}
function format(str) {
    let arr = [];
    arr.push(str);
    arr.push(str.toLowerCase());
    arr.push(str.toUpperCase());
    arr.push(capitalise(str));
    arr.push(capitaliseAll(str));
    return arr;
}
function capitalise(str) {
    str = str[0].toUpperCase() + str.substring(1).toLowerCase();
    return str;
}
function capitaliseAll(str) {
    words = str.split(" ");
    str = "";
    for(let i = 0; i < words.length; i++) {
        str += capitalise(words[i]);
    }
    return str;
}

//--------------------------REPLACING--------------------------

//replaces the logo
document.querySelector(".p-header-logo").children[0].innerHTML = "<img src=\"" + newLogo + "\">";
//replaces text in the title
document.title = replaceText(document.title);
//finds all the text nodes in the document
var walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;
//replaces text in the nodes
while (node = walker.nextNode()) {
    node.nodeValue = replaceText(node.nodeValue);
}
function replaceText(v) {
    //iterates through the swaplist and replaces the entries and their alternate capitalisations
    for (let i = 0; i < swapWith.length; i++) {
        let a = swapWith[i][0];
        let b = swapWith[i][1];
        for (let i = 0; i < a.length; i++) {
            v = v.replace(a[i], b[i]);
        }
        if (v.toLowerCase().search(a[1]) != -1) {
            v = v.toLowerCase().replace(a[1], b[1]);
        }
    }
    return v;
}
