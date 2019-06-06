// ==UserScript==
// @name        Tweets are not news
// @namespace   lambast.blast.slam
// @description Removes items from news sites that are about one person insulting another.
// @include     /https://.*(washingtonpost.com|wapo.com|nyt.com|nytimes.com)/
// @version     1
// @grant       none
// ==/UserScript==

var excludes=["lambasts", "blasts", "slams", "hits back at", "Trump"];

function check_excludes(text){
  for (var x=0; x< excludes.length; x++){
      if (text.includes(excludes[x])){
        return true;
      }
  }
  return false;
}

  console.log("hi hi");
var headline = document.querySelectorAll('.flex-stack,.assetWrapper');
for (var i = 0; i < headline.length; i++){
  var links=headline[i].querySelectorAll('a');
  for (var j = 0; j < links.length; j++){
    if (check_excludes(links[j].innerText)){
        console.log("Removing " + links[j].innerText);
        console.log(headline[i]);
        headline[i].remove();
       // headline[i].parentNode.removeChild(headline[i]);
        break;
    }
  }
}
