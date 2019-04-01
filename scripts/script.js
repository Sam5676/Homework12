var arr = [3, 0, -1, 4, -5, 5];

//forEach

function fEach(arr, callback, context){
    var i;
    for (i = 0; i < arr.length; i++) {
        callback.call(context, arr[i], i, arr);
    }
}
// fEach(arr, function(num, i, nums) {
//     console.log('Num: \t' + num + ', index: \t' + i + ',' + 'arr:\t' + nums)
// });

//filter

function fFilter(arr, callback, context) {
    var i, results = [];
    for (i = 0; i < arr.length; i++) {
        if (callback.call(context, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};
// var test = fFilter(arr, function(num) {
//     return num > 0;
// });
//
// console.log(test);

//map

function fMap(arr, callback, context) {
    var i, results = [];
    for (i = 0; i < arr.length; i++) {
        results.push(callback.call(context, arr[i], i, arr));
    }
    return results;
};
// var pows = fMap(arr, Math.pow);
// console.log(pows);

//Some

function fSome(arr, callback, context) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (callback.call(context, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};

// var result = fSome(arr,function(num) {
//     return num === 4;
// });
//
// console.log(result);

//Every

function fEvery(arr, callback, context) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (!callback.call(context, arr[i], i, arr)===false) {
            return false;
        }
    }
    return true;
};

// var result = fEvery(arr,function(num) {
//     return num === 4;
// });
//
// console.log(result);

//Reduce

function fReduce(arr, callback, startValue) {
    var i, result = startValue;
    for (i = 0; i < arr.length; i++) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
}

// var arrs = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
//
// var result = fReduce(arrs, function(result, current) {
//     return result.concat(current);
// }, []);
//
// console.log(result);


function fFind(arr, callback, context) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (callback.call(context, arr[i], i, arr)) {
            return arr[i];
        }
    }
};
// function isPrime(element, index, array) {
//     var start = 2;
//     while (start <= Math.sqrt(element)) {
//         if (element % start++ < 1) {
//             return false;
//         }
//     }
//     return element > 1;
// }
//
// console.log(fFind(arr, isPrime));