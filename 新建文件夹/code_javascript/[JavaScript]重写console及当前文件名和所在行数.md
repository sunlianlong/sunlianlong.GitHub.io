---
title: 重写console及当前文件名和所在行数
date: 2018-03-06 21:23:00
tags:
  - JavaScript
  - 调试
  - console
categories:
  - 代码
---
Electron环境
```
/*重写console开始*/
function getStackTrace(){
  function getException() {
    try {
      throw Error('');
    } catch (err) {
      return err;
    }
  }
  const err = getException();
  const stack = err.stack;
  const stackArr = stack.split('\n');
  let callerLogIndex = 0;
  for (let i = 0; i < stackArr.length; i++) {
    if (stackArr[i].indexOf('getStackTrace') > 0 && i + 1 < stackArr.length) {
      callerLogIndex = i + 1;
      break;
    }
  }
  if (callerLogIndex !== 0) {
    const callerStackLine = stackArr[callerLogIndex];
    return `[${callerStackLine.substring(callerStackLine.lastIndexOf(path.sep) + 1, callerStackLine.lastIndexOf(':'))}]`;
  } else {
    return '[-]';
  }
}

const LOGGER = remote.getGlobal('LOGGER');
const log_ = console.log,error_=console.error;
console.log = function(){
  setTimeout(()=>{
    LOGGER.info('['+process.type+']',getStackTrace(),...arguments);
    log_(...arguments);
  },0);  
}
console.error = function(){
  setTimeout(()=>{
    LOGGER.error('['+process.type+']',getStackTrace(),...arguments);
    error_(...arguments);
  },0);
};
/*重写console结束*/
```