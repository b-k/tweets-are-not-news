// ==UserScript==
// @name        Tweets are not news
// @namespace   lambast.blast.slam
// @description Removes items from news sites that are about one person insulting another.
// @include     /https://.*(washingtonpost|wapo|nyt|nytimes).com/
// @version     1
// @grant       none
// ==/UserScript==

var excludes=["tweet", "lambasts", "blasts", "slams", "hits back at", "berates", "assails"];

function check_excludes(text){
  for (var x=0; x< excludes.length; x++)
      if (text.includes(excludes[x]))
        return true;
  return false;
}

console.log("Checking for headlines about tweets.");

var blocks = document.querySelectorAll('.flex-stack,.assetWrapper');//flex-stack for WaPo, assetWrapper for NYT
for (var i = 0; i < blocks.length; i++){
  var links=blocks[i].querySelectorAll('a');
  for (var j = 0; j < links.length; j++){
    if (check_excludes(links[j].innerText)){
        console.log("Removing '" + links[j].innerText + "'");
        blocks[i].style.cssText="display: none";
        break;
    }
  }
}
