# MongoDB $inc operator with string value

This repository demonstrates an uncommon error when using the `$inc` operator in MongoDB update queries. The error arises from providing a string value instead of a numerical value to the `$inc` operator.

## Bug Description

The `$inc` operator in MongoDB is used to increment a numerical value by a specified amount. However, if a string value is provided instead of a number, MongoDB will not perform the increment operation as expected. This can lead to unexpected and potentially incorrect results.

## Bug Reproduction

The `bug.js` file contains the code that demonstrates this issue. Running the code will show that the age field is not incremented.

## Solution

The correct usage of `$inc` involves passing a numerical value.  The `bugSolution.js` file shows the corrected code, where the string value '10' is replaced with the numerical value 10. 
