var odd = [1, 2, 3, 4, 5].filter(function(x) {
    return x % 2 == 0
})

console.log(odd);

// 一般写法
const arr = ['apple', 'pen', 'apple-pen'];
for(const i in arr){
  const c = arr[i][0];
  arr[i] = c.toUpperCase() + arr[i].slice(1);
}

console.log('+++++')
console.log(arr);


// 函数式写法一


console.log(arr.map(word => word[0].toUpperCase() + word.slice(1)));
