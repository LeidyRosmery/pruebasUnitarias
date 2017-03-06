function suma(a,b) {

   if (a == undefined && b == undefined) {
    return null;
  }

  if (a == undefined) { a = 0; }
  if (b == undefined) { b = 0; }

  var a1 = parseInt(a);
  var b1 = parseInt(b);

  if (!isNaN(a1) && !isNaN(b1)) {
      return a1 + b1;
  } else {
    return null;
  }
}

if(typeof exports !== 'undefined') {
  exports.suma = suma;
}
