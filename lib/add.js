// best performance  90.45ops/sec
const add = (x, y) => {
  let result = '';
  let indent = 0;
  let tmp = '';

  while (x.length > 0 || y.length > 0) {
    tmp += parseInt(x.substr(-14) || 0, 10) + parseInt(y.substr(-14) || 0, 10) + indent;

    result = tmp.substr(-14) + result;
    indent = parseInt(tmp.substr(0, tmp.length - 14) || 0, 10);
    tmp = '';

    x = x.substr(0, x.length - 14);
    y = y.substr(0, y.length - 14);
  }
  return result;
}

// medium 43.93ops/sec
const add2 = (a, b) => {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

// rubbish 1.12ops/sec
const add3 = (a, b) => {
  // 实现该函数
  // 倒序
  var aList = a.split('').reverse()
  var bList = b.split('').reverse()
  var max = Math.max(aList.length, bList.length)
  // 结果
  var cList = []
  // 进位
  var flag = 0
  for (var i = 0, l = max; i < l; i++) {
    var tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag
    flag = 0
    console.log(tmp)
    if (tmp > 9) {
      tmp = tmp - 10
      flag = 1
    }
    cList.push(tmp)
    console.log(cList)
  }
  // console.log(aList, bList);
  if (flag === 1) {
    return '1' + cList.reverse().join('')
  } else {
    return cList.reverse().join('')
  }
};