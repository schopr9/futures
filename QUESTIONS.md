## what would i have done if i had more time?

The most interesting part of the problem was to sort the prices and keep the cumulative size for all the prices. I tried many things first i tried MinHeap to have 15 top asks and bids, but the deletion of the key when the value is 0 was not working with that solution. Then i thought of binary indexed tree to keep the prefix sum of total sizes per price. Then finally came up with sortedMap as a datastructure.

# What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

If i had more time I would definitely fix the throttle from sagas to reducer, like batch ten request at a time that would improve the performance and add more tests :)

# What was the most useful feature that was added to the latest version of your chosen language?

to check for nulls in the javascript chain `?`

```javascript
if (parsedPayload.asks?.length) {
  extractData(parsedPayload.asks, newSortedMapAsks);
  asks = getTotal(newSortedMapAsks).reverse();
} else if (parsedPayload.bids?.length) {
  extractData(parsedPayload.bids, newSortedMapBids);
  bids = getTotal(newSortedMapBids);
}
```

# How would you track down a performance issue in production? Have you ever had to do this?

when Android 10 came, we saw performance issues on our flatlist which has some image cards. The problem was associated with the memory, we had to adjust height and width of the images and pagination size and image size as well.
https://github.com/facebook/react-native/issues/26528

# Can you describe common security concerns to consider for a frontend developer?
* do not log any PII
* do not disclose any Backend error messages
* keep all the error message language generic (like your password is wrong will let the user know email is correct)
* npm audit to see if any libraries are old or vulnerable and update them if needed
* do not ask for extra priviledges like location or camera if not needed
* good session management, authenticated and unauthenticated stacks for navigation

# How would you improve the API that you just used?
I'm new futures trade, so probably just want to understand the usecase of this data, as its a big table changing rapidly, its very difficult to track the changes. I would love to know how people use this data. I actually didn't understand the use case for it, may be that's why i have made some assumptions like sort the price in decreasing order and keep the accumulative size but my data is not matching with what's on the website.
