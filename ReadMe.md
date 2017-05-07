Notes for Discussion:

- Having collections to save multiple of the same item in
  8 skateboards for instance. 

- Then...a way to freeze other bids when one of those in the collection
  or between two items of similar types has been already bought.
  How to do this? A notification? Perhaps start a 'group', which is
  a collection of separate bids that cease when any ONE of them has
  succeeded. In a sense increasing your likelihood of purchasing an item
  that has multiple instances of which you might buy 'it'.

- Feature to allow for $$ leeway of bid. SO you don't miss your bid by a range of $$. Would be silly to lose an item if you were one dollar off.

-Show lifecyle of bid, to see when my bid was th closest to the current price.

-Establish a line on the graph where you can derive a statisical occurence rate for price to break below that line: 
	--For instance, how often can I expext this price to be $10 or below based off how many times this is occurred in its past. Then can evaluate bids on their likeliness to be met.



3 Comparable Products:

1. WikiBuy:
	-Cornerstone of product is to find deals. Auto-filters by lowest deal from search results, does not necessarily search for matching-object.
	-Search feature on the website is very poor. Searching an item by title on Amazon and then on WikiBuy produces vastly different results, in some cases where the specified item does not show up until 7-8 results in. 
		*Rec: Let Amazon do the heavy lifting in regards to the search feature, use the ShadowBid Website in line with what was originally requested in the text file - as a site to bid and manage their accounts.

2. CamelCamelCamel
	-Their search feature is better implemented than wikiBuy but is still cumbersome.
	-Price tracking is done manually through text boxes that when clicked immediately display suggested prices to set your bid at. These prices are sample percentages ranging from
	    -0.01% to -10%.

	-THe website has an algorith which automatically provides a "Good Deal" or suggested bid amount based upon the price history of that object. Similar in a way to the "bid strength" bar on ShadowBid

	-Graph of price point history is a little easier to read, able to see the Year field and slightly more spaced out.

	-Also shows "Previous price" which seems helpful in determining what the last price change entailed.

	-Also can browse "Top Deals" based off the largest price shift

	-Website is not pretty to look at.

	-Does not enable Automatic Buying.


3. The Tracktor
	-Also implements a search feature to search amazon right from its homepage.
		--The results styling is very minimal and not particularly helpful. No 'tracked' info is displayed for items immediately upon performing search result.

	-Does not allow automatic purchase when price hits desired level. Simply notifies.
	-Items that no longer have price tracking from amazon as of an earlier date are still showing up in current 'most tracked' lists.


***TECHNOLOGYS TO USE***

-Sass:
	-Using Sass would aid in keeping styling consistent throughout the site. Since branding is a concern, especially given how many different competitors there are, having a unified theme will help to unite and strengthen your product image.


-Passport
-Gulp:

-SQL:
	-Because pricing can be volatile and change alot any data that is associated with an on line price or price history should be saved within its own data model which can then be merged into USER data fields such as bid-related data. SQL is great for cross-referencing data and would keep these fields organized while they are changing or being manipulated seperately. 











