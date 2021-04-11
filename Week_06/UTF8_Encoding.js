function UTF8_Encoding(string) {
  const code = encodeURIComponent(string);
  let strBytes = [];
  for (let i = 0, len = code.length; i < len; i++) {
    const chart = code.charAt(i);
    if (chart === "%") {
      let hex = chart.charAt(i + 1) + chart.charAt(i + 2);
      let hexVal = parseInt(hex, 16);
      strBytes.push(hexVal);
      //   strBytes.push(parseInt(chart.charAt(i + 1) + chart.charAt(i + 2), 16));
      i += 2;
    } else {
      strBytes.push(chart.charCodeAt(0));
    }
  }
  return strBytes;
}
