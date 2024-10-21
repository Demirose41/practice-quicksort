function quicksort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1){
    // If so, it's already sorted: return
    return arr
  }
  // if(arr.length === 2){
  //   return arr[0] < arr[1] ? [arr[0],arr[1]] : [arr[1], arr[0]]
  // }

  // Pick the first value as the pivot
  let pivot = arr[0];
  let leftArray = [];
  let rightArray = [];
  // Orient the pivot so that...
  for(let i = 1; i < arr.length; i++){
    // every number smaller than the pivot is to the left
    // every number larger (or equal) than the pivot is to the right
    arr[i] < pivot ? leftArray.push(arr[i]) : rightArray.push(arr[i])
  }

  // Recursively sort the left
  leftArray = quicksort(leftArray)
  // Recursively sort the right
  rightArray = quicksort(rightArray)
  // Return the left, pivot and right in sorted order
  return [...leftArray, pivot, ...rightArray]
}


module.exports = [quicksort];
