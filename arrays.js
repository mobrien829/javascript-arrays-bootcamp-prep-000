var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
  
function addElementToBeginningOfArray(array, element) {
  const array1 = ['${array}']
  const newArray = ['${element}', ...array1]
  console.log(newArray)
}