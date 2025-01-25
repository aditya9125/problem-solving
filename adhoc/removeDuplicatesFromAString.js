const str="abcdeefghijklmnopqrstuvwxyzz";
const removeDuplicatesFromAString = (str) => {
  return [...new Set(str)].join('');
};

console.log(removeDuplicatesFromAString(str)); // abcdefghijklmnopqrstuvwxyz