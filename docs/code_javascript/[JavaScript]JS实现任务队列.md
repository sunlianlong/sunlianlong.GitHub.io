---
title: JS实现任务队列
date: 2019-04-18 02:00:00
tags:
  - JavaScript
categories:
  - 代码
---
```
new Quene()
    .task(1000, () => {
        console.log(1)
    })
    .task(2000, () => {
        console.log(2)
    })
    .task(1000, () => {
        console.log(3)
    })
    .start()

function Quene() { ... }
```
```
function Quene() {
  this.quene = [];
}


Quene.prototype.task = function (time, callback) {
  this.quene.push({ time, callback });
  return this;
};

Quene.prototype.start = function () {
  const quene = this.quene;
  let result = Promise.resolve();

  quene.forEach((item) => {
    result = result.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item.callback());
        }, item.time);
      });
    });
  });

  return result;
};


new Quene()
  .task(1000, () => {
    console.log(1)
  })
  .task(2000, () => {
    console.log(2)
  })
  .task(1000, () => {
    console.log(3)
  })
  .start()
```
