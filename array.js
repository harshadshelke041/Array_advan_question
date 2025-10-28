
// 1 - Left Push By 1 Element

let num = [1,2,3,4,5];


let copy = num[0]

for(let i=0;i<num.length;i++) {
  num[i] = num[i + 1];
}

num[num.length-1] = copy;

console.log(num);



