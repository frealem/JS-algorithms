//================================ to have fabonaci series of the number====================

function fab(n) {
  const fab = [0, 1];
  for (let i = 2; i <= n; i++) {
    fab[i] = fab[i - 1] + fab[i - 2];
  }
  return fab;
}

//  console.log('this is output:',fab(7))

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// console.log('the result is:',factorial(4))

//==================================to check the no is prime==========================

function isPrime(n) {
  if (n <= 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log('it is prime:-----',isPrime(9))

// =====================================================to check the no is the power of 2=======================
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(isPowerOfTwo(8))        //true

// ===========================================recursion=======================

// ==========================================the power of two recursion=====================

function recurFab(n) {
  if (n < 2) {
    return n;
  }
  return recurFab(n - 1) + recurFab(n - 2);
}

// console.log(recurFab(6))       // 8
// time complexity O(2^n)

function binarysearch() {
  leftIndex = 0;
  rightIndex = arr.length() - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      return rightIndex - 1;
    } else {
      return leftIndex + 1;
    }
  }
}

// console.log('the searched value=',binarysearch(-5,2,3,4,8),8)

function binarySearchRecursion(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    binarySearchRecursion(arr, target, leftIndex, middleIndex - 1);
  } else {
    binarySearchRecursion(arr, target, middleIndex + 1, rightIndex);
  }
}

// console.log('the searched value=',binarySearchRecursion(-5,2,3,4,8),8)

// buble sorting=========================================================
function bublesort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return temp;
  }

  console.log("this the bubble sorted order:", bublesort([-2, 3, 5, -6, 8]));

  function insertionSort() {
    for (let i = 1; i < arr.length - 1; i++) {
      let numberToInsert = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = numberToInsert;
    }
  }

  //
}

// console.log('this the inserted sorted order:',insertionSort([-2,3,5,-6,8]));

function cartesianProduct() {
  const arr1 = [a, b, c, d];
  const arr2 = [1, 2, 3, 4];

  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(arr1[i], arr2[j]);
    }
  }
}

function climbingStairs(n) {
  let noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

// console.log('this is away of climbing the stair where only 1 or 2 step allowed to jumb : ',climbingStairs(5))

// tower of hanio problem: shifting objects order without lossing their order to another tower.
// to solve this let A,B,C one lay on other A is move using B to C ...

function towerOfHanio(n, toRod, fromRod, usingRod) {
  if (n === 1) {
    console.log(`move the disk from ${fromRod} to ${toRod}`);
    return
  }
  towerOfHanio(n - 1, toRod, usingRod, fromRod);
  console.log(`move the disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanio(n - 1, usingRod, toRod, fromRod);
}

towerOfHanio(3,'A','c','B')
