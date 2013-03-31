"use strict"

function merge2_cmp(a, b, result, compare) {
  var a_ptr = 0
    , b_ptr = 0
    , r_ptr = 0
  while(a_ptr < a.length && b_ptr < b.length) {
    if(compare(a[a_ptr], b[b_ptr]) <= 0) {
      result[r_ptr++] = a[a_ptr++]
    } else {
      result[r_ptr++] = b[b_ptr++]
    }
  }
  while(a_ptr < a.length) {
    result[r_ptr++] = a[a_ptr++]
  }
  while(b_ptr < b.length) {
    result[r_ptr++] = b[b_ptr++]
  }
}

function merge2_def(a, b, result) {
  var a_ptr = 0
    , b_ptr = 0
    , r_ptr = 0
  while(a_ptr < a.length && b_ptr < b.length) {
    if(a[a_ptr] <= b[b_ptr]) {
      result[r_ptr++] = a[a_ptr++]
    } else {
      result[r_ptr++] = b[b_ptr++]
    }
  }
  while(a_ptr < a.length) {
    result[r_ptr++] = a[a_ptr++]
  }
  while(b_ptr < b.length) {
    result[r_ptr++] = b[b_ptr++]
  }
}

function merge2(a, b, compare, result) {
  if(!result) {
    result = new Array(a.length + b.length)
  }
  if(compare) {
    merge2_cmp(a, b, result, compare)
  } else {
    merge2_def(a, b, result)
  }
  return result
}

module.exports = merge2