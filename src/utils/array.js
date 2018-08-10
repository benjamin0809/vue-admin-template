export function randomArray(multiple, length) {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * multiple)
  }
  return array
}
