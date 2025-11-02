
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
    merge[k++] = num1[i++]
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





