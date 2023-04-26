// Create a WeakMap instance to store endpoint query counts
const weakMap = new WeakMap();

// Define a function to track API queries for each endpoint
function queryAPI(endpoint) {
  // Retrieve the current query count for the endpoint, or set it to 0 if not yet tracked
  let count = weakMap.get(endpoint) || 0;
  
  // Throw an error if the query count is greater than or equal to 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  
  // Increment the query count and set it back in the WeakMap
  weakMap.set(endpoint, ++count);
}

// Export the weakMap and queryAPI function for use in other modules
export { weakMap, queryAPI };


