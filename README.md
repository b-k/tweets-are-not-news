# tweets-are-not-news
Remove headlines from news sites with titles including words like "lambasts", "blasts", "jabs"

This plugin checks headlines on the NY Times and Washington Post for a list of words including "tweets",
"jabs back at", and so on---headlines about a tweet or one person insulting another. Those headlines disappear.
Depending on positioning, this may leave a blank box on the page, or there may be no trace that an article was there.

Installation: the script uses the Greasemonkey add-on for Firefox, which is available from Firefox's usual add-on collection.
After installing Greasemonkey, select 'new user script' from the Monkey's menu, paste in the script here, and click save.

Tweaking: the top of the script has a list of stop words that cause an article to be excluded, which is easy to modify if you
find it to be too restrictive or permissive.

There is also a self-explanatory `the_opinion_section_is_also_not_news` variable, which is by default set to `false`,
but also hides the opinon/perspective sections on the front page if set to `true`.
