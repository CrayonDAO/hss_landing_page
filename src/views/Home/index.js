"use strict";

const getComponents = require.context("/", true, /[\w-].vue$/);

const str2obj = (arr, val, base) => {
  return arr.reduce((obj, key, idx, b) => {
    if (idx + 1 === b.length) {
      obj[key] = val;
    } else if (idx === 0) {
      obj[key] = str2obj(b.splice(1), val, obj[key] || {});
    }
    return obj;
  }, base);
};

module.exports = getComponents.keys().reduce((obj, name) => {
  const comp = getComponents(name);
  name = name.replace("./", "").replace(/.vue$/, "");
  return str2obj(name.split("/"), comp.default, obj);
}, {});
