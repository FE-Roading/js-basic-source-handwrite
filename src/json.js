/**
 * JSON.stringify([, replacer [, space]) 方法是将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串。
 * 量猴子那个实现方式：
 * 基础版：https://github.com/YvetteLau/Step-By-Step/issues/39#issuecomment-508327280
 * JSON之父 Douglas Crockford的JSON2版： https://github.com/douglascrockford/JSON-js/blob/master/json2.js#L373
 * JSON之父 Douglas Crockford的JSON3版：https://github.com/bestiejs/json3
 * */

function jsonStringify(data) {
  let dataType = typeof data;

  if (dataType !== 'object') {
    let result = data;
    //data 可能是 string/number/null/undefined/boolean
    if (Number.isNaN(data) || data === Infinity) {
      //NaN 和 Infinity 序列化返回 "null"
      result = "null";
    } else if (dataType === 'function' || dataType === 'undefined' || dataType === 'symbol') {
      //function 、undefined 、symbol 序列化返回 undefined
      return undefined;
    } else if (dataType === 'string') {
      result = '"' + data + '"';
    }
    //boolean 返回 String()
    return String(result);
  } else if (dataType === 'object') {
    if (data === null) {
      return "null"
    } else if (data.toJSON && typeof data.toJSON === 'function') {
      return jsonStringify(data.toJSON());
    } else if (data instanceof Array) {
      let result = [];
      //如果是数组
      //toJSON 方法可以存在于原型链中
      data.forEach((item, index) => {
        if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
          result[index] = "null";
        } else {
          result[index] = jsonStringify(item);
        }
      });
      result = "[" + result + "]";
      return result.replace(/'/g, '"');

    } else {
      //普通对象
      /**
       * 循环引用抛错(暂未检测，循环引用时，堆栈溢出)
       * symbol key 忽略
       * undefined、函数、symbol 为属性值，被忽略
       */
      let result = [];
      Object.keys(data).forEach((item, index) => {
        if (typeof item !== 'symbol') {
          //key 如果是symbol对象，忽略
          if (data[item] !== undefined && typeof data[item] !== 'function' &&
            typeof data[item] !== 'symbol') {
            //键值如果是 undefined、函数、symbol 为属性值，忽略
            result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
          }
        }
      });
      return ("{" + result + "}").replace(/'/g, '"');
    }
  }
}

/**
 *
 * JSON.parse 三种实现方式: https://github.com/youngwind/blog/issues/115
 *
 * */

//  第一种方式最简单，也最直观，就是直接调用 eval，代码如下：很可能会造成 XSS 攻击

function jsonParse(json) {
  return eval("(" + json + ")"); // obj 就是 json 反序列化之后得到的对象
}

// 第二种方式：安全版
function jsonParse1(json) {
  var rx_one = /^[\],:{}\s]*$/;
  var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rx_four = /(?:^|:|,)(?:\s*\[)+/g;

  if (
    rx_one.test(
      json.replace(rx_two, "@")
      .replace(rx_three, "]")
      .replace(rx_four, "")
    )
  ) {
    return  eval("(" + json + ")")
  }
}

// Function 与 eval 有相同的字符串参数特性
function jsonParse2(json) {
  return (new Function('return ' + json))()
}
