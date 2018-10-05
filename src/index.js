/*
For this problem you won't need the web preview window, 
so you can hide it using one of the 3 buttons on the 
top right of this window,

there is a console at the bottom of this windows. 
There is also tests window, to view which test(s)
you are passing/failing

### Problem Info ###
You will be given an array (a) and a value (x).
All you need to do is check whether the provided 
array contains the value.

Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.

solutions can be found here https://codesandbox.io/s/9ov7j0k48o
*/
// input is array (i.e, ["a", "b", "c", "d"]) and a value (i.e., "c")
// output:  true or false
// input could also be integers (i.e., [1, 2, "a", 3, 4,"hi there", 5])
//
// ex. 1   if ("a" === "c")
// ex. 2   if ( 1 === "c")
//
// Solution:
// 1.  iterate thru items in the array
// 2.  for each element compare to the x paramenter
// 3.  if the el matchaes the x, we expect true and we
// would stop the loop and return true
// 4.  if the el does not match x, move on to the next element
// 5.  keep iterating until we hit the last element or true.
// 6.  if the match does not happen after iterating through all the
// elements we return false.
export const check = (arr, x) => {
  // add code here
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return true;
    }
  }
  return false;
};

console.log(check(["a", 1, "b", "hi there", "c", "d", "e"], 2));
