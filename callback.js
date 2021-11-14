function isString(str, func) {
  if (typeof str == "string") {
    func(str);
  }
}

function firstWordUpperCase(str, func) {
  let n = str[0].toUpperCase();
  n += str.slice(1);
  return func(n);
}

function dashes(str) {
  return str.replace(/ /g, "-");
}

function callback(str, func) {
  str.toLowerCase();
  func(str);
}
