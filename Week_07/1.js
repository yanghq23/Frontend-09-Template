function stringToNumber(str) {
  if (typeof str !== "string") {
    return "不是字符串";
  }
  if (str.length === 0) return 0;
  if (
    str.length >= 16 &&
    (BigInt(str) > BigInt(Number.MAX_SAFE_INTEGER) ||
      BigInt(str) < BigInt(Number.MIN_SAFE_INTEGER))
  ) {
    return `${str}不在范围内`;
  }

  if (str.startsWith("0x") || str.startsWith("0X")) {
    return parseInt(str.substring(2), 16);
  }
  if (str.startsWith("0o")) {
    return parseInt(str.substring(2), 8);
  }
  if (str.startsWith("0b")) {
    return parseInt(str.substring(2), 2);
  }

  return parseFloat(str);
}
function numberToString(number) {
  if (Number.isInteger(number) && !Number.isSafeInteger(number)) {
    return `${number}不在范围内`;
  }
  return number.toString();
}

