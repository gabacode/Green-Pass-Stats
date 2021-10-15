export default function select(array, selectionCount) {

    let iterationCount = array.length - 1;
    let expectedToBeSelected = selectionCount - 1;
    let resultsArray = [];

    if (selectionCount < 1 || selectionCount > array.length) {
      console.log("Invalid selection count!");
      return resultsArray;
    }
    var i;
    for (i in array) {
      if (selectionCount === 1) {
        resultsArray.push(array[i]);
        break;
      }
      let selectedSoFar = Math.round(iterationCount * i / expectedToBeSelected);
      if (selectedSoFar < array.length) {
        resultsArray.push(array[selectedSoFar]);
      } else {
        break;
      }
    }
    return resultsArray;
  }