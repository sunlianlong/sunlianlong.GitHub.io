---
title: 对象数组排序
date: 2019-04-18 01:56:00
tags:
  - JavaScript
categories:
  - 代码
---
```
//by函数接受一个成员名字符串做为参数
//并返回一个可以用来对包含该成员的对象数组进行排序的比较函数
var by = function(name, minor) {
    return function(o, p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            thro("error");
        }
    }
}
var employees=[];
employees[0]={name:"George",age:32, retiredate:"March12, 2014"}
employees[1]={name:"Edward",age:17, retiredate:"June2, 2023"}
employees[2]={name:"Christine",age:58, retiredate:"December20, 2036"}
employees[3]={name:"Sarah",age:62, retiredate:"April30, 2020"};
//起到引用作用又不影响原数组的方法
var newemployees = employees.concat();
newemployees.sort(by("retiredate"));
//起到引用作用又不影响原数组的方法
var new2employees = newemployees.concat();
new2employees.sort(by("age",by('retiredate')));
console.log(employees);
console.log(newemployees);
console.log(new2employees);
```
 声明数组变量，每个都是对象:
```
var arr = [{name:"Json",age:12},{name:"Smith",age:27 },{name:"Allon",age:2 }];

// 通用算法：对数组对象进行排序
function compare(propertyName) {
	return function (object1, object2) {
	var value1 = object1[propertyName];
	var value2 = object2[propertyName];
	if (value2 < value1) {
		return -1;
	}else if (value2 > value1) {
		return 1;
	}else {
		return 0;
	}
}
}
// 调用算法，对数组排序
arr .sort(compare("age"));  
```