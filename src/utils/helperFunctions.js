export function parsePassage(passage) {
  //returns parsed passage - we want an [] with all the words
  return passage.split(' ');
}

export function cleanWord(word) {
  //removes all the extra stuff like apostrophes, commas, periods, and could potentially return how much time to add to the interval for pauses like commas and periods.
  let cleanWord = word.replace(/\./g, '');
  cleanWord = cleanWord.replace(/,/g, '');
  return cleanWord;
}
