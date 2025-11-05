
// 1 - Left Push By 1 Element

let num = [1,2,3,4,5];


let copy = num[0]

for(let i=0;i<num.length-1;i++) {
  num[i] = num[i + 1];
}

num[num.length-1] = copy;

console.log(num);


// 2 - Right Push By 1 Element

let num = [1,2,3,4,5];

let copy = num[num.length -1]
console.log(copy);




for(let i=num.length-1;i>0;i--) {
  num[i] = num[i-1]
}

num[0] = copy

console.log(num);

// 3 - Left Rotation by k element

let num = [1, 2, 3, 4, 5]

let k = 2;

k = k % arr.length  

for (let i = 0; i < k; i++) {

  let copy = num[0];

  for (let j = 0; j < num.length - 1; j++) {

    num[j] = num[j + 1]
  }

  num[num.length - 1] = copy
}

console.log(num);


// 4- Right Rotation by k element

  let num = [1, 2, 3, 4, 5];

let k = 4;

k = k % num.length;

for (let i = 0; i < k; i++) {

  let copy = num[num.length - 1];
  console.log(copy);


  for (let j = num.length - 1; j > 0; j--) {

    num[j] = num[j - 1]
  }

  num[0] = copy
}

// Best approch to moveing elemnt by right by k element

let num = [1,2,3,4,5];
let k = 2 ;
k = k % num.length;

reverse(0,num.length-1)
reverse(0,k-1)
reverse(k,num.length-1)
 console.log(num);
 

function reverse(i,j) {
  while(i<j) {
    let temp = num[i];
    num[i] = num[j];
    num[j] = temp;
    i++
    j--
  }
}

console.log(num);

// Best approch to moveing elemnt by right by k element

let num = [1,2,3,4,5];
let k = 2 ;
k = k % num.length;


reverse(0,k-1)
reverse(k,num.length-1)
reverse(0,num.length-1)
 console.log(num);
 

function reverse(i,j) {
  while(i<j) {
    let temp = num[i];
    num[i] = num[j];
    num[j] = temp;
    i++
    j--
  }
}

console.log(num);

// remove duplicates from a sorted array (like [1,2,2,2,5])

let num = [1, 2, 2, 2, 5];


duplicate(num)

function duplicate(num) {
  let j = 1;

  for (let i = 0; i < num.length - 1; i++) {

    if (num[i] != num[i + 1]) {
      num[j] = num[i + 1]
      j++;
    }
  }
  return j

}

console.log(num);

//Merge Two Sorted Arrays

  let num1 = [2, 5, 6]
let num2 = [1, 3, 4, 8]
let merge = new Array(num1.length + num2.length)
let i = j = k = 0;

while (i < num1.length && j < num2.length) {

  if (num1[i] < num2[j]) {
    merge[k] = num1[i]
    i++;
    k++
  } else {
    merge[k++] = num2[j++]
  }
}

while (i < num1.length) {
  merge[k++] = num1[i++]
}

while (j < num2.length) {
  merge[k++] = num2[j++]
}

console.log(merge);

// Best time to sell or buy Stock

let prices = [7, 1, 5, 3, 6, 4];

let min = prices[0]
let maxProfit = 0;

function profit(prices) {


  for (let i = 0; i < prices.length; i++) {

    if (prices[i] < min) {
      min = prices[i]
    }

    let profit = prices[i] - min;
    maxProfit = Math.max(profit, maxProfit)
  }
  return maxProfit
}

console.log(profit(prices)); 

// Sort the color 

let nums = [0, 1, 2, 0, 1, 0, 1, 2];

let i = 0;
let j = 0;
let k = nums.length - 1;

while (j <= k) {

  if (nums[j] === 0) {
    swap(nums, j, i)
    i++;
    j++;
  }
  else if (nums[j] === 2) {
    swap(nums, j, k)
    k--
  }
  else {
    j++
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

console.log(nums);


// Maximum SubArray

let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

let max = -Infinity;
let sum = 0;

for (let i = 0; i < num.length; i++) {

  sum = sum + num[i]

  if (sum < 0) sum = 0
  max = Math.max(max, sum)
}

console.log(max);

// Majority Element

let num = [2, 2, 1, 1, 1, 2, 2]

let ans = num[0];
let count = 1;

for (const n of num) {

  if (count == 0) {
    ans = n
    count = 1
  } else if (n == ans) count++
  else count--
}

console.log(count);

// Trapping Rain Water

var trap = function(height) {
    let left  = new Array(height.length)
    let right = new Array(height.length)

    let maxLeft = height[0];
    let maxRight = height[height.length-1];

    left[0] = maxLeft;
    right[right.length-1] = maxRight;

    for(let i=1;i<height.length;i++) {
        if(height[i] > maxLeft) maxLeft = height[i]
        left[i] = maxLeft
    }

    for(let i=height.length-2;i>=0;i--) {
        if(height[i] > maxRight) maxRight = height[i]
        right[i] = maxRight
    }
   let ans = 0
    for(let i=0;i<height.length;i++) {
        ans += Math.min(left[i],right[i]) - height[i    ]
    }
    return ans
};











