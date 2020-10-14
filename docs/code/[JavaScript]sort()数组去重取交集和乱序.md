---
title: sort()数组去重取交集和乱序
date: 2019-04-18 01:53:00
tags:
  - JavaScript
categories:
  - 代码
---
sort()正确用法：
sort()默认排序是 按照 ASCII 字符顺序进行升序排列；对数字进行排序会出现错误正确方法如下：
```
var arr= [3,1,4,11];
arr.sort(function(a,b){return a-b})//升序
arr.sort(function(a,b){return b-a})//升序
```
中文排序  --- 该方法只能对字符串进行排序（中文按拼音首字母，英文按26位字母顺序）
```
var testArray = ["脚","本","之","家"];
console.log(testArray.sort(
    function compareFunction(param1,param2){
          return param1.localeCompare(param2);  //output:之,家,本,脚
     }
 ));
```


两个数组取交集：
```
function arrayIntersection ( a, b ){
        var ai=0, bi=0;
        var result = new Array();
        while ( ai < a.length && bi < b.length )
        {
            if      ( a[ai] < b[bi] ) { ai++; }
            else if ( a[ai] > b[bi] ) { bi++; }
            else /* they're equal */
            {
                result.push ( a[ai] );
                ai++;
                bi++;
            }
        }
        return result;
    }
console.log ( arrayIntersection ( [1,2,3],[2,3,4,5,6] ) );//[2,3]
```

去除数组中与另外一个数组相同的元素：
```
function array_diff(a, b) { 
    for(var i=0;i<b.length;i++) 
    { 
      for(var j=0;j<a.length;j++) 
      { 
        if(a[j]==b[i]){ 
          a.splice(j,1); 
          j=j-1; 
        } 
      } 
    }   
  return a; 
}

console.log( array_diff ([56,57,58,62,71,80,81,82,83,84,85,86,87,88,89,95],[85,86,87,95,92,77,79,93]) );
```

数组乱序
```
function shuffle(array) {
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
```