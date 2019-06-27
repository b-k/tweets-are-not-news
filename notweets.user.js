// ==UserScript==
// @name        Tweets are not news
// @namespace   lambast.blast.slam
// @description Removes items from news sites that are about one person insulting another.
// @include     /https://.*(washingtonpost|wapo|nyt|nytimes|foxnews).com/
// @version     1
// @grant       none
// ==/UserScript==

var excludes=["tweet", " lambasts", " blasts", " slams", "hits back at", "punches out at", " berates", " assails",
              " rips", "goes viral", "going viral", "fires back", "trade barbs"];
var the_opinion_section_is_also_not_news=true;  //Set to true to hide the opinion section as well.


function check_excludes(text){
  for (var x=0; x< excludes.length; x++)
      if (text.includes(excludes[x]))
        return true;
  return false;
}

console.log("Checking for headlines about tweets.");

var blocks = document.querySelectorAll('.flex-stack,.assetWrapper,.info');//flex-stack for WaPo, assetWrapper for NYT, .info for Fox
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

if (the_opinion_section_is_also_not_news){
    console.log("As per an option setting in the script, also hiding the opinion section.")
    document.querySelector('[data-testid="block-Opinion"],.opinions-chain,.js-opinion').style.cssText="display: none";
}
