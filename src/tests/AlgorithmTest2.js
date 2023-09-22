function maxProfit(prices) {
    // Initialize variables to store the minimum buying price
    let minPrice = prices[0];
    // Initialize a variable to store the maximum profit
    let maxProfit = 0;

    // Iterate through the list of prices
    for (let i = 1; i < prices.length; i++) {
        // Check if the current price is lower than the previously found minimum buying price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate the profit that would be obtained by selling the stock at the current price
            const currentProfit = prices[i] - minPrice;
            // Check if the current profit is greater than the maximum profit found so far
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Buy at 1 and sell at 6 for a profit of 5.
console.log(maxProfit([7, 6, 4, 3, 1]));    // No profitable transaction is possible, so the profit is 0.