// Question 4: Optimizing Price Calculation with Bulk Discount
// Write a function calculateBulkDiscount that calculates the total cost for bulk orders, applying a discount when the quantity exceeds a threshold.

// Example:

function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {
    let cost = price*quantity
    if(quantity > discountThreshold){
        let totalCost = cost - (cost*(discountRate/100))
        return totalCost
    }
    else{
        return cost
    }
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600