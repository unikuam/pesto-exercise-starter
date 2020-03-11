# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
To reduce the loading speed of a web page, the cache function can be used because it helps to minimize the processing time.

### **What *extra* test cases can you add to the test file?**
Added
