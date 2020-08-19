export const checkWordMatch = (searchedWord, value) => {
  if (typeof searchedWord !== 'string' || !(/^[a-zA-Z ]+$/.test(searchedWord))) { 
      return false;
  } else {
      const productValue = value.toLowerCase();
      return (productValue.indexOf(searchedWord) !== -1);
  }
}