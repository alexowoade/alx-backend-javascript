export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const filteredList = [...set].filter((word) => word.startsWith(startString));
  return filteredList.map((word) => word.slice(startString.length)).join('-');
}
