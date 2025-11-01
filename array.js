
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

console.log(num);



