function stringLength(str) {
  return str.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function capitalizeString(str) {
  if (typeof str == "number") {
    return TypeError;
  }
  return str.toUpperCase();
}

module.exports = {
  stringLength,
  reverseString,
  capitalizeString,
};
