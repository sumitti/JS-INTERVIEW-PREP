// Question 5: Calculating the Time Remaining for a Sale
// Write a function calculateTimeRemaining that calculates the remaining time between two timestamps in hours, minutes, and seconds.

// Example:

function calculateTimeRemaining(startTime, endTime) {
  //your code here
  let start = new Date(startTime)
  let end = new Date(endTime)
  const diff = end - start

  const hours = Math.floor(diff / (1000*60*60))
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60))
  const seconds = Math.floor((diff % (1000*60)) / 1000)

  return { hours, minutes, seconds }

  
}

// Example usage
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 335, minutes: 59, seconds: 59 }

console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }