function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  if (position > length - 1) throw Error('Position outside range');

  return view.setInt8(position, value);
}

export default createInt8TypedArray;
