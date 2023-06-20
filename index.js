
// forEach
function myEach (collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else if (isObject(collection)) {
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i]);
        }
    }
    return collection;
}

// myMap
function myMap (collection, callback) {
    const result = [];
    myEach(collection, function (value) {
        result.push(callback(value));
    });
    return result;
}

// isObject
function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
  }


  // myReduce
  function myReduce (collection, callback, acc) {
    myEach(collection, function(value) {
        if (acc === undefined) {
            acc = value;
        } else {
            acc = callback(acc, value, collection);
        }
    });
    return acc;
  }
  
// myFind
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
  }

  // myFilter
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (value) {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection) || isObject(collection)) {
      return Object.keys(collection).length;
    }
    return 0;
  }

  // myFirst
function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  


// myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return Object.values(object);
  }

  // prettu sure the last too functions above are made wrong, but they pass the test. -
  // so idk if that means it's correct, or the test just didn't catch it?